---
title: Hyperlane 深度解析（2）：技术架构与安全机制
description: 技术架构与安全机制
slug: in-depth-analysis-02
authors:  [wangeguo, HyperlaneCC]
tags: [hyperlane, 跨链桥, 技术架构, 安全机制]
image: https://cdn.prod.website-files.com/6686ac1afeef42fcf1929457/6686c26718cec2e458cc5d7a_logo.svg
hide_table_of_contents: true
---

# Hyperlane 深度解析（2）：技术架构与安全机制

跨链通信一直是区块链领域的一个难题，尤其是在安全性、去中心化和可扩展性之间找到平衡点。Hyperlane 通过其模块化设计和灵活的安全策略，提供了一种高效且安全的跨链通信方案。今天，我们就来深入探讨 Hyperlane 的技术架构和安全机制，看看它是如何解决这些挑战的。

## Hyperlane 的架构设计

Hyperlane 是第一个无需许可的互操作层，允许智能合约开发人员在区块链之间发送任意数据。开发人员可以使用 Hyperlane 移动代币、执行函数调用以及许多其他允许创建跨链应用程序的操作，这些应用程序可供任何区块链上的用户访问。用户通过邮箱智能合约与 Hyperlane 协议进行交互，该合约提供了链上消息传递接口来发送和接收链间消息。

![Flow](/img/blog/flow.png)

Hyperlane 采用模块化方法实现安全，允许应用程序配置和选择一系列Interchain 安全模块(ISM)。应用程序可以指定 ISM 来定制安全模型，以确保其与 Hyperlane 消息传递接口的集成安全。

## 邮箱

Mailbox 合约是 Hyperlane 的消息存储和索引中心，负责管理跨链消息的生命周期，包括消息的发送、接收和状态更新。

Hyperlane `Mailbox` 支持的每条链上都部署了一个合约，其公开了一个用于发送和接收链间消息的链上 API。该网络 `Mailboxes` 促进了区块链之间的结缔组织，开发人员可以利用它来创建跨链应用程序，并为其现有应用程序添加跨链功能。

![Mailbox](/img/blog/mailbox.png)

Mailbox 合约需实现 [`IMailbox`](https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/solidity/contracts/interfaces/IMailbox.sol) 接口，以下主要讲两个状态变异函数；`dispatch()` 和 `process()`，分别用于发送和接收消息。

### 发送消息

为了发送链间消息，开发人员需要调用`Mailbox.dispatch()`。此函数将消息内容、目标链 ID 和收件人地址作为参数。每条消息都作为叶子插入到存储的增量 Merkle 树`Mailbox`中。Hyperlane 的权益证明协议使用此 Merkle 树来验证欺诈证明。

```solidity
function dispatch(
    uint32 destinationDomain,
    bytes32 recipientAddress,
    bytes calldata messageBody
) external payable returns (bytes32 messageId);
```
<!-- truncate -->
邮箱维护已传递值的映射，`messageId`以**防止重放攻击**。如果收到`messageId`已传递的消息，则该消息将被拒绝。

以下是 Soldity 版的发送消息示例：

```solidity
// send message from abstracttestnet to alephzeroevmtestnet TestRecipient
IMailbox mailbox = IMailbox("0x28f448885bEaaF662f8A9A6c9aF20fAd17A5a1DC");
bytes32 messageId = mailbox.dispatch{value: msg.value}(
  2039,
  "0x0000000000000000000000009EC79CA89DeF61BFa2f38cD4fCC137b9e49d60dD",
  bytes("Hello, world")
);
```

### 接收消息

为了传递链间消息，中继器调用`Mailbox.process()`。该函数将要传递的消息以及中继器可以指定的任意元数据作为参数。会将`Mailbox`消息和元数据传递给收件人的跨链安全模块 (ISM) 进行验证。如果 ISM 成功验证了消息，则会`Mailbox`通过调用 将消息传递给收件人`recipient.handle()`。

```solidity
function handle(
    uint32 _origin,
    bytes32 _sender,
    bytes calldata _message
) external payable;
```

以下是 Soldity 版的接收消息示例：

```solidity
function handle(
    uint32 _origin,
    bytes32 _sender,
    bytes calldata _data
) external payable virtual override {
    emit ReceivedMessage(_origin, _sender, msg.value, string(_data));
    lastSender = _sender;
    lastData = _data;
}
```

当收到消息时，邮箱将在调用消息收件人之前使用跨链安全模块`handle`验证安全性。为了利用 Hyperlane 的模块化安全性，消息接收者可以指定自定义的 Interchain 安全模块来**验证**有关传入消息的任何内容。指定后，邮箱将遵循此 ISM。

## 跨链安全模块

**Hyperlane 由跨链安全模块** (Interchain Security Modules) 保护。ISM 是智能合约，负责验证在目标链上传递的跨链消息是否确实在源链上*发送。*

![ISM](/img/blog/ISM.png)

开发人员可以使用 Mailbox 的默认 ISM，也可以指定自己的特定于应用程序的 ISM。特定于应用程序的 ISM 可以是：

### 配置 (Configure)

Hyperlane 定义了一组预构建的 ISM。开发人员可以“现成地”部署任何这些合约，并使用自己的参数进行配置。

例如，想要增强链间安全性主权的应用程序开发人员可以部署配置了来自他们自己社区的验证器的[Multisig ISM 。](https://docs.hyperlane.xyz/docs/protocol/ISM/multisig-ISM)

### 组合 (Compose)

ISM 充当“安全乐高积木”。开发人员可以将不同的 ISM 混合搭配在一起，以编码最适合其需求的安全模型。

例如，需要额外安全性的应用程序开发人员可以部署一个[Aggregation ISM](https://docs.hyperlane.xyz/docs/protocol/ISM/aggregation-ISM)，该 ISM 需要由来自 Hyperlane 社区的验证器配置的[Multisig ISM进行验证，](https://docs.hyperlane.xyz/docs/protocol/ISM/multisig-ISM)**以及**由 Wormhole ISM 进行验证，该 Wormhole ISM 可以验证[Wormhole](https://wormhole.com/)验证器集的法定人数是否已验证该消息。

### 定制 (Customize)

ISM 是完全可定制的。开发人员可以**编写自己的 ISM**，根据其应用程序的需求进行定制。

例如，应用程序开发人员可以构建基于消息内容调整安全模型的 ISM。高价值和不频繁的消息（例如治理）可以通过优先考虑安全性而非延迟和 gas 成本的安全模型来验证。低价值和更频繁的消息可以通过优先考虑延迟和 gas 成本而非安全性的安全模型来验证。

### 序列图

以下显示了在目标链上验证和传递链间消息的简化序列图。

![Sequence diagram](/img/blog/sequence-diagram.png)

## 中继者

中继器通过将消息从源链传递到目标链来运行 Hyperlane 协议的传输层。根据接收者指定的链间安全模块 (ISM) ，可能需要元数据来证明消息的安全性，例如[Multisig ISM](https://docs.hyperlane.xyz/docs/protocol/ISM/multisig-ISM) 的验证器签名、Merkle 证明、零知识证明等。因此，在尝试传递之前，中继器会收集任何特定于 ISM 的元数据。

> 中继器将定期重试元数据收集和消息提交。这对于提高对中断的抵御能力非常重要，例如：未支付交付费用、中继器余额不足、目的地交易费用暂时飙升、验证器停机。

消息发送者需要为在源链上的投递付费，中继器运营商有责任将收入重新平衡到目标链账户，以便始终能够支付投递交易费用。中继器不会从协议中获得直接的代币激励，但运营商可以配置其费用结构以提供其关键服务。

中继器由两个主要任务组成：每个来源的索引器和每个目的地的提交器。

![Replay Architecture](/img/blog/relayer-architecture.png)

### 索引器 (Indexer)

通过使用 RPC查询 Mailbox 合约事件，可以对新消息和历史消息进行索引。Gas付款也会被索引，以确认发送者已支付交付费用，并且某些 ISM 会使用额外的源链数据。索引器将数据写入本地数据库（RocksDB）作为缓存方式，并与提交任务进行通信 - 后者定期轮询数据库以检查是否已发送新消息。

### 提交者 (Submitter)

消息作为提交者的一部分经历四个阶段，这些阶段作为如下所述的独立任务产生。

| 提交者任务 | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| 消息处理器 | 轮询本地数据库以检查是否有任何未送达的消息并将其推送到准备步骤的队列。 |
| 准备任务   | 从队列中弹出消息，确保已支付 gas，获取任何元数据并模拟消息传递交易。如果模拟成功，则将消息推送到提交步骤的队列。否则，将消息推回到准备队列。 |
| 提交任务   | 从队列中弹出消息，并将交付交易发送到链上。交付尽可能分批进行。如果广播交易没有错误，则将消息推送到确认步骤的队列。否则，将消息推回到准备队列。 |
| 确认任务   | 等待最终结果；如果发生链重组，或者交付交易恢复，则消息将被推回到准备队列。 |

`Mailbox.process()`通过使用上述元数据调用目标链，将消息传递给接收者。

消息的重试次数根据指数退避策略决定其下一次传送尝试。目前，没有固定的最大重试次数，在此之后中继器将停止尝试处理消息。但是，这并不能保证无限次重试，运营商不应将此作为服务水平协议 (SLA)。

## 验证器

验证器作为 Multisig ISM 或[经济安全模块](https://docs.hyperlane.xyz/docs/protocol/economic-security/)的一部分运行，实现 Hyperlane 协议的安全层。如果使用不同的 ISM，则不需要验证器。当Mailbox中发生新的调度时，它们负责通过签署 merkle 根（也称为检查点）来证明消息。必须向任何人（通常是中继器）提供签名，以便获取并与消息一起提交到目标链。

与许多其他协议不同，Hyperlane**没有**固定的验证器集。任何人都可以自由运行自己的验证器，只要接收方合约指定包含其验证器的 Multisig ISM 即可。

验证器检查点是公开的。这确保传输层是无需许可的，因为任何人都可以获取签名并调用`Mailbox.process()`来传递消息。中继器仅为消息发送者提供便利服务。

验证者只签署最终检查点很重要，以避免损害协议的安全性。签署重组的消息会导致经济安全模块被削减。验证者代理连接到单个链以检查新消息。如果验证多个链，则必须运行此代理的多个实例。

Hyperlane 正在将验证器开发为用 Rust 实现的二进制文件，任何人都可以轻松运行。在操作上，验证器需要运行此二进制文件，并可以访问他们正在验证的链的 RPC 提供程序或节点。我们希望大多数 Hyperlane 验证器都来自每个链的现有节点运营商社区。

## 开发者工具

Hyperlane 提供了一些工具和开发者友好的接口，简化跨链应用的开发过程。开发者只需调用简单的 API 即可实现跨链功能，无需深入了解底层技术细节。

- **Hyperlane CLI**: 是用于将 Hyperlane 合约部署到新链的官方命令行工具。它还包括用于与已部署合约和注册表交互的实用程序。
- **SDK / 库 / 框架**: `MailboxClient`、`Router`、`TypeCasts`、`Message`、`StandardHookMetadata` 等实现程序。

虽然 Hyperlane 的公开文档目前侧重于 EVM 兼容性，但也为其他生态系统提供不同级别的支持。这些生态系统目前可能不具备完整的功能对等性或完整的工具集成（例如 TypeScript CLI 支持）。

- CosmWasm: 请参阅此处的 Hyperlane 的 [CosmWasm 实现](https://github.com/many-things/cw-hyperlane)，由[Mitosis 团队](https://mitosis.org/)实现和维护。按照[此处的指南](https://github.com/many-things/cw-hyperlane/blob/main/DEPLOYMENT.md)了解如何部署到 Cosmos 应用链。
- Sealevel:   Solana 虚拟机的 Hyperlane v3 现已在 Solana 和 Eclipse 上线，更多 Solana 汇总即将推出。您可以[在此处找到 Sealevel 合约实现](https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/rust/sealevel/programs)。
- Cairo:  [Pragma 团队](https://www.pragma.build/)已在 Cairo 中为 Starkware 实现了 Hyperlane 协议。您可以[在此处](https://github.com/astraly-labs/hyperlane_starknet)找到正在进行的实现。
- Move:  Hyperlane 已由[Movement Labs在 MoveVM 中实现。您可以](https://movementlabs.xyz/)[在此处](https://github.com/movementlabsxyz/hyperlane-monorepo)找到正在进行的实现。这些 Move 合约已在 Movement 的 M1 测试网上上线。
- Sway:  在这里查找正在进行的[Sway 实施](https://github.com/hyperlane-xyz/fuel-contracts)。

## 结论

Hyperlane 通过模块化设计和灵活的安全策略，提供了一种高效、安全的跨链通信方案。未来，Hyperlane 将继续优化其技术架构，提升跨链通信的效率和安全性。通过不断的技术创新和优化，Hyperlane 有望成为跨链通信领域的领先解决方案。