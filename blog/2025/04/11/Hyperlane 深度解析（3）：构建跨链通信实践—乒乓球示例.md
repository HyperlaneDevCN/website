---
title: Hyperlane 深度解析（3）：构建跨链通信实践—乒乓球示例
description: 构建跨链通信实践—乒乓球示例
slug: in-depth-analysis-03
authors:  [wangeguo, HyperlaneCC]
tags: [hyperlane, 跨链桥, 通信实践, 示例]
image: https://cdn.prod.website-files.com/6686ac1afeef42fcf1929457/6686c26718cec2e458cc5d7a_logo.svg
hide_table_of_contents: true
---
# Hyperlane 深度解析（3）：构建跨链通信实践—乒乓球示例

本文将通过一个实际示例，演示如何通过Hyperlane 协议发送跨链消息 。

你将学习如何：

- 部署与 Hyperlane Mailbox 兼容的合约
- 部署可信中继器 ISM (跨链安全模块)
- 运行一个简单的中继器
- 发送跨链消息

## 示例概览

在此示例中，您将在两个不同的链上部署类似的合约。链 A 上的合约将使用 Hyperlane 协议 向链 B 发送一条消息，链 B 上的合约将处理此消息并回复链 A。

![Ping Pong Flow](/img/blog/pingpong-flow.png)

合约主要功能：

- `sendPing`*：通过调用Hyperlane*的方法 来发起跨链消息`IMailbox.dispatch`。
- `enrollRemoteRouter`：在继承的`Router`合约中，注册来自另一条链的合约。
- `setInterchainSecurityModule`：设置合同的 ISM。
- `_handle`：处理来自邮箱的传入消息（继承的`Router`合约`handle`函数调用的内部函数）。

## 开发环境准备

1. 创建并导航到新目录：

   ```shell
   mkdir hyperlane-pingpong && cd hyperlane-pingpong
   ```

2. 初始化 Hardhat 项目并安装依赖项：

   ```shell
   npx hardhat init
   ```

3. 添加[`@hyperlane-xyz/core`](https://www.npmjs.com/package/@hyperlane-xyz/core)为依赖项：

   ```shell
   npm install -D @hyperlane-xyz/core
   ```
<!-- truncate -->
### 测试代币

确保你有足够的测试令牌`Arbitrum Sepolia`，并且`Sapphire Testnet`

获取更多信息：

- `Sapphire Testnet`来自[Oasis Faucet 的](https://faucet.testnet.oasis.io/)测试代币。
- `Arbitrum Sepolia`来自 Alchemy 的[Faucet](https://faucets.alchemy.com/faucets/arbitrum-sepolia)的ETH 代币。

### 将网络添加到 Hardhat

打开`hardhat.config.ts`并添加 Arbitrum Sepolia 和 Sapphire 测试网。

hardhat.config.ts

```typescript
 import { HardhatUserConfig } from "hardhat/config";
 import "@nomicfoundation/hardhat-toolbox";

 const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [];

 const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    'arbitrum-sepolia': {
      url: 'https://arbitrum-sepolia-rpc.publicnode.com',
      chainId: 421614,
      accounts,
    },
    'sapphire-testnet': {
      url: "https://testnet.sapphire.oasis.io",
      accounts,
      chainId: 23295, // 0x5aff
    },
  },
 };

 export default config;
```

## 乒乓球合约

在此示例中，我们利用了*Hyperlane*`Router`中的包装器。这具有以下优势：

- *合约与Hyperlane*的**MailboxClient**和**IMessageRecipient**接口兼容 。
- 支持*注册*其他链的路由器。
- 支持设置**自定义 ISM**。

1. `Ping.sol`创建一个名为Arbitrum Sepolia 的新文件

2. 将以下合同粘贴到其中：

   ```typescript
   // SPDX-License-Identifier: Apache-2.0
   pragma solidity ^0.8.13;
   
   // ============ External Imports ============
   import {Router} from "@hyperlane-xyz/core/contracts/client/Router.sol";
   
   /*
   * @title Ping
   * @dev You can use this simple app as a starting point for your own application.
   */
   contract Ping is Router {
       // A generous upper bound on the amount of gas to use in the handle
       // function when a message is processed. Used for paying for gas.
       uint256 public constant HANDLE_GAS_AMOUNT = 50_000;
   
       // A counter of how many messages have been sent from this contract.
       uint256 public sent;
       // A counter of how many messages have been received by this contract.
       uint256 public received;
   
       // Keyed by domain, a counter of how many messages that have been sent
       // from this contract to the domain.
       mapping(uint32 => uint256) public sentTo;
       // Keyed by domain, a counter of how many messages that have been received
       // by this contract from the domain.
       mapping(uint32 => uint256) public receivedFrom;
   
       // ============ Events ============
       event SentPing(
           uint32 indexed origin,
           uint32 indexed destination,
           string message
       );
       event ReceivedPing(
           uint32 indexed origin,
           uint32 indexed destination,
           bytes32 sender,
           string message
       );
       event HandleGasAmountSet(
           uint32 indexed destination,
           uint256 handleGasAmount
       );
   
       constructor(address _mailbox) Router(_mailbox) {
           // Transfer ownership of the contract to deployer
           _transferOwnership(msg.sender);
           setHook(address(0));
       }
   
       // ============ External functions ============
   
       /**
        * @notice Sends a message to the _destinationDomain. Any msg.value is
        * used as interchain gas payment.
        * @param _destinationDomain The destination domain to send the message to.
        * @param _message The message to send.
        */
       function sendPing(
           uint32 _destinationDomain,
           string calldata _message
       ) public payable {
           sent += 1;
           sentTo[_destinationDomain] += 1;
           _dispatch(_destinationDomain, bytes(_message));
           emit SentPing(
               mailbox.localDomain(),
               _destinationDomain,
               _message
           );
       }
   
       /**
        * @notice Fetches the amount of gas that will be used when a message is
        * dispatched to the given domain.
        */
       function quoteDispatch(
           uint32 _destinationDomain,
           bytes calldata _message
       ) external view returns (uint256) {
           return _quoteDispatch(_destinationDomain, _message);
       }
   
       // ============ Internal functions ============
       /**
        * @notice Handles a message from a remote router.
        * @dev Only called for messages sent from a remote router, as enforced by Router.sol.
        * @param _origin The domain of the origin of the message.
        * @param _sender The sender of the message.
        * @param _message The message body.
        */
       function _handle(
           uint32 _origin,
           bytes32 _sender,
           bytes calldata _message
       ) internal override {
           received += 1;
           receivedFrom[_origin] += 1;
           emit ReceivedPing(
               _origin,
               mailbox.localDomain(),
               _sender,
               string(_message)
           );
       }
   }
   ```

3. `Pong.sol`创建一个名为Sapphire Testnet 的新文件

1. 将以下合同粘贴到其中：

   ```typescript
   // SPDX-License-Identifier: Apache-2.0
   pragma solidity ^0.8.13;
   
   // ============ External Imports ============
   import {Router} from "@hyperlane-xyz/core/contracts/client/Router.sol";
   
   /*
   * @title Pong
   * @dev You can use this simple app as a starting point for your own application.
   */
   contract Pong is Router {
       // A generous upper bound on the amount of gas to use in the handle
       // function when a message is processed. Used for paying for gas.
       uint256 public constant HANDLE_GAS_AMOUNT = 50_000;
   
       // A counter of how many messages have been sent from this contract.
       uint256 public sent;
       // A counter of how many messages have been received by this contract.
       uint256 public received;
   
       // Keyed by domain, a counter of how many messages that have been sent
       // from this contract to the domain.
       mapping(uint32 => uint256) public sentTo;
       // Keyed by domain, a counter of how many messages that have been received
       // by this contract from the domain.
       mapping(uint32 => uint256) public receivedFrom;
   
       // ============ Events ============
       event SentPing(
           uint32 indexed origin,
           uint32 indexed destination,
           string message
       );
       event ReceivedPing(
           uint32 indexed origin,
           uint32 indexed destination,
           bytes32 sender,
           string message
       );
       event HandleGasAmountSet(
           uint32 indexed destination,
           uint256 handleGasAmount
       );
   
       constructor(address _mailbox) Router(_mailbox) {
           // Transfer ownership of the contract to deployer
           _transferOwnership(msg.sender);
           setHook(address(0));
       }
   
       // ============ External functions ============
   
       /**
        * @notice Sends a message to the _destinationDomain. Any msg.value is
        * used as interchain gas payment.
        * @param _destinationDomain The destination domain to send the message to.
        * @param _message The message to send.
        */
       function sendPing(
           uint32 _destinationDomain,
           string calldata _message
       ) public payable {
           sent += 1;
           sentTo[_destinationDomain] += 1;
           _dispatch(_destinationDomain, bytes(_message));
           emit SentPing(
               mailbox.localDomain(),
               _destinationDomain,
               _message
           );
       }
   
       /**
        * @notice Fetches the amount of gas that will be used when a message is
        * dispatched to the given domain.
        */
       function quoteDispatch(
           uint32 _destinationDomain,
           bytes calldata _message
       ) external view returns (uint256) {
           return _quoteDispatch(_destinationDomain, _message);
       }
   
       // ============ Internal functions ============
       /**
        * @notice Handles a message from a remote router.
        * @dev Only called for messages sent from a remote router, as enforced by Router.sol.
        * @param _origin The domain of the origin of the message.
        * @param _sender The sender of the message.
        * @param _message The message body.
        */
       function _handle(
           uint32 _origin,
           bytes32 _sender,
           bytes calldata _message
       ) internal override {
           received += 1;
           receivedFrom[_origin] += 1;
           emit ReceivedPing(
               _origin,
               mailbox.localDomain(),
               _sender,
               string(_message)
           );
           // send return message
           sendPing(
               _origin,
               string(_message)
           );
       }
   }
   ```


## ISM合同

在当前状态下，如果您从 `Sapphire Testnet` 向`Arbitrum Sepolia`发送消息，邮箱的默认 ISM将不会接受该消息。您可以在`Arbitrum Sepolia` 上部署和注册自定义 ISM 以使其正常工作。

*Hyperlane*的一个简单默认 ISM是**TrustedRelayerISM**，它在传递消息之前检查中继器地址。

1. 创建一个名为`TrustedRelayerIsm.sol`

2. 将以下合同粘贴到其中：

   ```typescript
   // SPDX-License-Identifier: MIT OR Apache-2.0
   pragma solidity >=0.8.0;
   
   // ============ Internal Imports ============
   import {IInterchainSecurityModule} from "@hyperlane-xyz/core/contracts/interfaces/IInterchainSecurityModule.sol";
   import {Address} from "@openzeppelin/contracts/utils/Address.sol";
   import {Message} from "@hyperlane-xyz/core/contracts/libs/Message.sol";
   import {Mailbox} from "@hyperlane-xyz/core/contracts/Mailbox.sol";
   import {PackageVersioned} from "@hyperlane-xyz/core/contracts/PackageVersioned.sol";
   
   contract TrustedRelayerIsm is IInterchainSecurityModule, PackageVersioned {
       using Message for bytes;
   
       uint8 public immutable moduleType = uint8(Types.NULL);
       Mailbox public immutable mailbox;
       address public immutable trustedRelayer;
   
       constructor(address _mailbox, address _trustedRelayer) {
           require(
               _trustedRelayer != address(0),
               "TrustedRelayerIsm: invalid relayer"
           );
           require(
               Address.isContract(_mailbox),
               "TrustedRelayerIsm: invalid mailbox"
           );
           mailbox = Mailbox(_mailbox);
           trustedRelayer = _trustedRelayer;
       }
   
       function verify(
           bytes calldata,
           bytes calldata message
       ) external view returns (bool) {
           return mailbox.processor(message.id()) == trustedRelayer;
       }
   }
   ```

## 部署合约

分别在 `Sapphire Testnet`和 `Arbitrum Sepolia` 两个不同的链上部署 Ping 和 Pong 合约。

### 将 Pong 部署到 Sapphire Testnet

1. `deploypong.ts`在以下位置创建部署脚本`scripts/`：

   ```js
   import { ethers } from "hardhat";
   
   async function main() {
     // deployed mailbox on Sapphire Testnet
     const mailbox = "0x79d3ECb26619B968A68CE9337DfE016aeA471435";
   
     const PongFactory = await hre.ethers.getContractFactory("Pong");    
     const pong = await PongFactory.deploy(mailbox);
     const pongAddr = await pong.waitForDeployment();
     console.log(`Pong deployed at: ${pongAddr.target}`);
   }
   main().catch((error) => {
     console.error(error);
     process.exitCode = 1;
   });
   ```

2. 运行部署：

   ```shell
   pnpm hardhat run scripts/deploypong.ts --network sapphire-testnet
   ```

### 将 Ping 部署到 Arbitrum Sepolia

1. `deployping.ts`在以下位置创建部署脚本`scripts/`：

   ```js
   import { ethers } from "hardhat";
   
   async function main() {
     // default mailbox on Arbitrum Sepolia
     const mailbox = "0x598facE78a4302f11E3de0bee1894Da0b2Cb71F8";
   
     const PingFactory = await ethers.getContractFactory("Ping");    
     const ping = await PingFactory.deploy(mailbox);
     const pingAddr = await ping.waitForDeployment();
     console.log(`Ping deployed at: ${pingAddr.target}`);
   }
   main().catch((error) => {
     console.error(error);
     process.exitCode = 1;
   });
   ```

2. 运行部署：

   ```shell
   pnpm hardhat run scripts/deployping.ts --network arbitrum-sepolia
   ```

### 部署 ISM 到 Arbitrum Sepolia

1. `deployISM.ts`在以下位置创建部署脚本`scripts/`：

   ```js
   import { ethers } from "hardhat";
   
   async function main() {
     // default mailbox on Arbitrum Sepolia
     const mailbox = "0x598facE78a4302f11E3de0bee1894Da0b2Cb71F8";
     const trustedRelayer = "0x<your relayer address>";
   
     const trustedRelayerISM = await ethers.deployContract(
       "TrustedRelayerIsm",
       [mailbox, trustedRelayer]
       );
     await trustedRelayerISM.waitForDeployment();
     console.log(`TrustedRelayerISM deployed to ${trustedRelayerISM.target}`);
   }
     main().catch((error) => {
       console.error(error);
       process.exitCode = 1;
     });
   ```

2. 运行部署：

   ```shell
   pnpm hardhat run scripts/deployISM.ts --network arbitrum-sepolia
   ```

## 合约设置

### 注册路由器  `Router`

由于我们将路由器包装器用于我们的 Ping Pong 合约，因此我们需要登记对方合约的合约地址。

#### 在 Sapphire Testnet 上注册 Router

1. `enroll.ts`在文件夹中创建一个名为`/scripts`

   ```js
   import { ethers } from "hardhat";
   
   async function main() {      
     let pingpongArbitrum = "0x<your contract deployed before>";
     let pingpongSapphire = "0x<your contract deployed before>";
     let arbId = "421614";
   
     const signer = await ethers.provider.getSigner();
     const contract = await ethers.getContractAt("Pong", sapphireAddr, signer);
     await contract.enrollRemoteRouter(arbId, ethers.zeroPadValue(pingpongArbitrum, 32));
     const arbRouter = await contract.routers(arbId);
     console.log(`remote router adr for ${arbId}: ${arbRouter}`)
   }
   main().catch((error) => {
     console.error(error);
     process.exitCode = 1;
   });
   ```

2. 运行部署

   ```shell
   pnpm hardhat run scripts/enroll.ts --network sapphire-testnet
   ```

#### 在 Arbitrum Sepolia 上注册 Router

1. `enroll.ts`在文件夹中创建一个名为`/scripts`

   ```js
   import { ethers } from "hardhat";
   
   async function main() {
     let pingpongArbitrum = "0x<your contract deployed before>";
     let pingpongSapphire = "0x<your contract deployed before>";
     let sapphireId = "23295";
   
     const signer = await ethers.provider.getSigner();
     const contract = await ethers.getContractAt("Ping", pingpongArbitrum, signer);
     await contract.enrollRemoteRouter(sapphireId, ethers.zeroPadValue(pingpongSapphire, 32));
     const arbRouter = await contract.routers(sapphireId);
     console.log(`remote router adr for ${sapphireId}: ${arbRouter}`)
   }
   main().catch((error) => {
     console.error(error);
     process.exitCode = 1;
   });
   ```

2. 运行部署

   ```shell
   pnpm hardhat run scripts/enroll.ts --network arbitrum-sepolia
   ```

#### 在 Arbitrum Sepolia 注册 ISM

1. `registerIsm.ts`在文件夹中创建一个名为`/scripts`

   ```js
   import { ethers } from "hardhat";
   
   async function main() {      
     let pingpongArbitrum = "0x<your contract deployed before>";
     let ismAddr = "0x<your ISM contract deployed before>";
   
     const signer = await ethers.provider.getSigner();
     const contract = await ethers.getContractAt("Ping", pingpongArbitrum, signer);
     await contract.setInterchainSecurityModule(ismAddr);
   }
   main().catch((error) => {
     console.error(error);
     process.exitCode = 1;
   });
   ```

2. 运行部署

   ```shell
   pnpm hardhat run scripts/registerIsm.ts --network arbitrum-sepolia
   ```

## 运行中继器

在开始测试 Ping Pong 之前，请确保你在 Arbitrum Sepolia 和 Sapphire Testnet 上运行了一个 Relayer。

运行中继器的最简单方法是使用 **[Hyperlane CLI](https://docs.hyperlane.xyz/docs/reference/cli)**。

1. 导出要与 CLI 一起使用的私钥

   ```shell
   export HYP_KEY='<YOUR_PRIVATE_KEY>'
   ```

2. 启动一个中继器 监视`Arbitrum Sepolia` & `SapphireTestnet`

   ```shell
   hyperlane relayer --chains sapphiretestnet,arbitrumsepolia
   ```

链配置

`Sapphire Testnet`*已在Hyperlane Registry*中注册，如果你自己部署Hyperlane *Core*`Sapphire Testnet`，请确保你拥有 类似于下面的 *Hyperlane*`$HOME/.hyperlane/chains/sapphiretestnet`配置文件。

- metadata.yaml

  ```yaml
  # yaml-language-server: $schema=../schema.json
  blockExplorers:
    - apiUrl: https://nexus.oasis.io/v1/
      family: other
      name: Oasis Explorer
      url: https://explorer.oasis.io/testnet/sapphire
  chainId: 23295
  displayName: Sapphire Testnet
  domainId: 23295
  isTestnet: true
  name: sapphiretestnet
  nativeToken:
    decimals: 18
    name: TEST
    symbol: TEST
  protocol: ethereum
  rpcUrls:
    - http: https://testnet.sapphire.oasis.io
  technicalStack: other
  ```

- addresses.yaml

  ```yaml
  domainRoutingIsmFactory: "0x3497967f8E5041f486eC559E6B760d8f051A034C"
  interchainAccountIsm: "0xD84DE931A0EDA06Af3944a4e9933c24f3B56DCaC"
  interchainAccountRouter: "0xFdca43771912CE5F5B4D869B0c05df0b6eF8aEFc"
  mailbox: "0x79d3ECb26619B968A68CE9337DfE016aeA471435"
  proxyAdmin: "0x5Ed8004e3352df333901b0B2E98Bd98C3B4AA59A"
  staticAggregationHookFactory: "0x212c232Ee07E187CF9b4497A30A3a4D034aAC4D6"
  staticAggregationIsmFactory: "0xE25A539AdCa1Aac56549997f2bB88272c5D9498c"
  staticMerkleRootMultisigIsmFactory: "0x9851EC4C62943E9974370E87E93CE552abE7705E"
  staticMerkleRootWeightedMultisigIsmFactory: "0x688dE6d0aBcb60a711f149c274014c865446b49D"
  staticMessageIdMultisigIsmFactory: "0xFE0937b1369Bbba59211c4119B91984FF450ccf1"
  staticMessageIdWeightedMultisigIsmFactory: "0x1de05675c8cd512A30c17Ea0a3491d74eF290994"
  testRecipient: "0x7bf548104F8f500C563Aa6DC7FbF3b1ad93E4E03"
  validatorAnnounce: "0xB119f96a106919489b6495128f30e7088e55B05c"
  ```

对于更复杂的验证器和中继器设置，请查看 Hyperlane 的 **[本地代理指南](https://docs.hyperlane.xyz/docs/guides/deploy-hyperlane-local-agents)** 或更适合生产的 **[代理操作员指南](https://docs.hyperlane.xyz/docs/operate/overview-agents)**。

## 执行乒乓球

要执行，您将调用 Ping.sol 合约的 `sendPing`函数。

在示例中，`demo-opl`您可以使用提供的`send-ping`任务，也可以使用以下脚本：

1. `sendping.ts`在文件夹中创建一个名为`/scripts`

   ```js
   import { ethers } from "hardhat";
   
   async function main() {
     const destChainId = "23295";
     const message = "Hello OPL"
     const pingpongArbitrum = "0x<your pingpong contract deployed on arbitrum sepolia"
   
     const signer = await ethers.provider.getSigner();
     const contract = await ethers.getContractAt("Ping", pingpongArbitrum, signer);
   
     console.log("Calculating fee...");
     let fee = await contract.quoteDispatch(
         destChainId,
         hre.ethers.toUtf8Bytes(message));
     console.log(`Fee: ${hre.ethers.formatEther(fee)} ETH`);
     console.log("Sending message...");
     const tx = await contract.sendPing(destChainId, message, {value: fee});
     await tx.wait();
     console.log("Message sent");
   }
   main().catch((error) => {
     console.error(error);
     process.exitCode = 1;
   });
   ```

2. 运行脚本

   ```shell
   pnpm hardhat run scripts/sendping.ts --network arbitrum-sepolia
   ```

## 验证乒乓

验证跨链消息传递的最简单方法是检查区块链浏览器并检查已部署 `Ping` 合约上的交易。

如果您想直接监视事件，可以使用以下脚本：

1. `verifyping.ts`在文件夹中创建一个名为`/scripts`

   ```js
   import { ethers } from "hardhat";
   
   async function main() {
     const contractAddr = "0x<your deployed ping contract on arbitrum sepolia>"
     const signer = await ethers.provider.getSigner();
     const contract = await ethers.getContractAt("Ping", contractAddr, signer);
   
     const spinner = ['-', '\\', '|', '/'];
     let spinnerIndex = 0;
     const interval = setInterval(() => {
         process.stdout.write(`\rListing for event... ${spinner[spinnerIndex]}`);
         current = (spinnerIndex + 1) % spinner.length;
     }, 150);
   
     let events;
     do {
       const block = await ethers.provider.getBlockNumber();
       events = await contract.queryFilter('ReceivedPing', block - 10, 'latest');
       if (events.length === 0) {
         await new Promise(resolve => setTimeout(resolve, 60 * 1000));
       }
     } while (events.length === 0);
   
     clearInterval(interval);
     process.stdout.write(`\r`); 
     process.stdout.clearLine(0);
   
     const parsedEvent = contract.interface.parseLog(events[0]);
     const message = parsedEvent?.args?.message;
     console.log(`Message received with: ${message}`);
   }
   main().catch((error) => {
     console.error(error);
     process.exitCode = 1;
   });
   ```

2. 运行脚本

   ```shell
   pnpm hardhat run scripts/verifyping.ts --network sapphire-testnet
   ```

## 故障排除

### 中继器不中继消息

查看：

- `enrollRemoteRouter` 您已通过以下方式注册了对面的路由器合约：`ping.routers(oppositeChainId)`
- `Arbitrum Sepolia`您已通过调用以下方式在 Ping 合约上设置了自定义 ISM`ping.interchainSecurityModule`
- 中继器地址与受信任的 ISM 配置相匹配。

### 无法验证消息

查看：

- 您的 Hardhat RPC 允许历史事件查询。
- 如果有必要，请使用专用的 RPC 提供程序（例如 Alchemy）。

## 版权声明

本文源自 [Ping Pong Example](https://docs.oasis.io/build/opl/hyperlane/pingpong-example/) by [Oasis](https://docs.oasis.io/)，在其基础上翻译成中文并作出一些调整，你可以在 Oasis 的 [demo-opl 存储库](https://github.com/oasisprotocol/demo-opl/tree/main/examples/hyperlane-pingpong)中找到用于部署和执行的合约源代码和 Hardhat 配置。
