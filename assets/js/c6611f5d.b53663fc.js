"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[5493],{27658:(e,n,s)=>{s.d(n,{A:()=>m,W:()=>u});var a=s(96540),i=s(60496),t=s(92293),o=s(96506),r=s(57480),d=s(14345),l=s(62464),c=s(88308),h=s(74848);function m(e){const n=(0,c.sZ)(!0),[s,r]=(0,a.useState)(n[0]),[d,l]=(0,a.useState)(n[1]),[m,u]=(0,a.useState)("Hello, world"),p=t.F[s].domainId,x=t.F[d].domainId,j=o.y[s]?.mailbox,g=o.y[s]?.merkleTreeHook,y=o.y[s]?.testRecipient,f=(void 0===I&&(I=32),(b=y).startsWith("0x")&&(b=b.slice(2)),"0x"+b.padStart(2*I,"0"));var b,I;return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"container row",children:[(0,h.jsx)("div",{className:"margin-horiz--sm",children:(0,h.jsx)(i.on,{label:"origin",chain:s,onChange:r})}),(0,h.jsx)("div",{className:"margin-horiz--sm",children:(0,h.jsx)(i.on,{label:"destination",chain:d,onChange:l})}),(0,h.jsxs)("div",{className:"margin-horiz--sm",children:["body:","\t",(0,h.jsx)("input",{defaultValue:m,onChange:e=>u(e.target.value)})]})]}),e.exampleCode({mailbox:j,merkleTreeHook:g,originChain:s,originDomain:p,destinationChain:d,destinationDomain:x,recipient:y,paddedRecipient:f,body:m,value:"0.01"})]})}const u=e=>m({exampleCode:n=>(0,h.jsxs)(l.A,{groupId:"lang",children:[(0,h.jsx)(d.A,{value:"sol",label:"Solidity",children:(0,h.jsx)(r.A,{language:"solidity",children:e.solidity(n)})}),(0,h.jsx)(d.A,{value:"cw",label:"CosmWasm",children:"\ud83d\udea7 Coming soon! \ud83d\udea7"}),(0,h.jsx)(d.A,{value:"sl",label:"Sealevel",children:"\ud83d\udea7 Coming soon! \ud83d\udea7"})]})})},60496:(e,n,s)=>{s.d(n,{on:()=>l,Ay:()=>d});var a,i=s(88308);!function(e){e.Ethereum="ethereum",e.Sealevel="sealevel",e.Cosmos="cosmos"}(a||(a={}));a.Ethereum,a.Sealevel,a.Cosmos;var t;!function(e){e[e.NONE=0]="NONE",e[e.PROCESSED=1]="PROCESSED"}(t||(t={}));var o=s(92293),r=s(74848);function d(e){let{chains:n,label:s,onChange:a,chain:i}=e;return(0,r.jsxs)("div",{children:[s,":",(0,r.jsxs)("div",{className:"dropdown dropdown--hoverable margin-left--xs",children:[(0,r.jsx)("button",{className:"button button--secondary navbar__link",children:i}),(0,r.jsx)("ul",{className:"dropdown__menu",children:n.map((e=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"dropdown__link",href:`#${s}=${e}`,onClick:()=>a(e),children:e})},e)))})]})]})}function l(e){return d({chains:(0,i.sZ)(!0).filter((e=>o.F[e].protocol===a.Ethereum)),...e})}},88308:(e,n,s)=>{s.d(n,{sZ:()=>l});var a=s(92293),i=s(96506),t=s(96540);const o="abacus works",r=[];function d(e){return void 0===e&&(e=!1),function(e,n){return void 0===e&&(e=!1),void 0===n&&(n=!0),Object.values(a.F).filter((s=>{const a=s.deployer?.name.trim().toLowerCase()===o,t=!!s.isTestnet===e,d=!n||!!i.y[s.name]?.mailbox,l=r.includes(s.name);return a&&t&&d&&!l}))}(e).map((e=>e.name))}function l(e){return void 0===e&&(e=!1),(0,t.useMemo)((()=>d(e)),[e])}},99625:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"guides/create-custom-hook-and-ism","title":"\u521b\u5efa\u4f60\u81ea\u5df1\u7684\u94a9\u5b50\u548cISM","description":"\u94a9\u5b50\u548cISM\u5177\u6709\u4e92\u8865\u5173\u7cfb\uff1a\u4f60\u53ef\u4ee5\u4ece\u6e90\u94fe\u81ea\u5b9a\u4e49\u884c\u4e3a\uff0c\u5e76\u5728\u76ee\u6807\u94fe\u4e0a\u4f7f\u7528\u914d\u5bf9\u7684ISM\u5408\u7ea6\u6765\u9a8c\u8bc1\u4f60\u7684\u81ea\u5b9a\u4e49\u94a9\u5b50\u884c\u4e3a\u3002","source":"@site/docs/guides/create-custom-hook-and-ism.mdx","sourceDirName":"guides","slug":"/guides/create-custom-hook-and-ism","permalink":"/website/docs/guides/create-custom-hook-and-ism","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/guides/create-custom-hook-and-ism.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"getstartedSidebar","previous":{"title":"GraphQL API","permalink":"/website/docs/guides/explorer/graphql-api"},"next":{"title":"\u4f7f\u7528\u672c\u5730\u4ee3\u7406\u90e8\u7f72Hyperlane","permalink":"/website/docs/guides/deploy-hyperlane-local-agents"}}');var i=s(74848),t=s(28453),o=s(62464),r=s(14345),d=s(27658);const l={},c="\u521b\u5efa\u4f60\u81ea\u5df1\u7684\u94a9\u5b50\u548cISM",h={},m=[{value:"\u5de5\u4f5c\u6d41\u7a0b",id:"\u5de5\u4f5c\u6d41\u7a0b",level:3},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u8bbf\u95ee\u63a7\u5236",id:"\u8bbf\u95ee\u63a7\u5236",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u521b\u5efa\u4f60\u81ea\u5df1\u7684\u94a9\u5b50\u548cism",children:"\u521b\u5efa\u4f60\u81ea\u5df1\u7684\u94a9\u5b50\u548cISM"})}),"\n",(0,i.jsx)(n.p,{children:"\u94a9\u5b50\u548cISM\u5177\u6709\u4e92\u8865\u5173\u7cfb\uff1a\u4f60\u53ef\u4ee5\u4ece\u6e90\u94fe\u81ea\u5b9a\u4e49\u884c\u4e3a\uff0c\u5e76\u5728\u76ee\u6807\u94fe\u4e0a\u4f7f\u7528\u914d\u5bf9\u7684ISM\u5408\u7ea6\u6765\u9a8c\u8bc1\u4f60\u7684\u81ea\u5b9a\u4e49\u94a9\u5b50\u884c\u4e3a\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u5b9e\u73b0\u548c\u4f7f\u7528\u81ea\u5df1\u7684\u94a9\u5b50\u548cISM\u6a21\u5f0f\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u6e90\u94fe\u4e0a\u5b9e\u73b0",(0,i.jsx)(n.code,{children:"IPostDispatchHook"}),"\u63a5\u53e3\u548c\u5728\u76ee\u6807\u94fe\u4e0a\u5b9e\u73b0",(0,i.jsx)(n.code,{children:"IInterchainSecurityModule"}),"\u6765\u4f7f\u7528\u50cfWormhole\u6216Chainlink\u7684CCIP\u8fd9\u6837\u7684\u5916\u90e8\u6865\u63a5\u63d0\u4f9b\u5546\u3002"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsxs)("summary",{children:[(0,i.jsx)(n.code,{children:"IPostDispatchHook"}),"\u63a5\u53e3"]}),(0,i.jsx)(o.A,{groupId:"lang",children:(0,i.jsx)(r.A,{value:"sol",label:"Solidity",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",metastring:"file=<rootDir>/node_modules/@hyperlane-xyz/core/contracts/interfaces/hooks/IPostDispatchHook.sol#L16-L63",children:"interface IPostDispatchHook {\n    enum Types {\n        UNUSED,\n        ROUTING,\n        AGGREGATION,\n        MERKLE_TREE,\n        INTERCHAIN_GAS_PAYMASTER,\n        FALLBACK_ROUTING,\n        ID_AUTH_ISM,\n        PAUSABLE,\n        PROTOCOL_FEE,\n        LAYER_ZERO_V1,\n        RATE_LIMITED,\n        ARB_L2_TO_L1,\n        OP_L2_TO_L1\n    }\n\n    /**\n     * @notice Returns an enum that represents the type of hook\n     */\n    function hookType() external view returns (uint8);\n\n    /**\n     * @notice Returns whether the hook supports metadata\n     * @param metadata metadata\n     * @return Whether the hook supports metadata\n     */\n    function supportsMetadata(\n        bytes calldata metadata\n    ) external view returns (bool);\n\n    /**\n     * @notice Post action after a message is dispatched via the Mailbox\n     * @param metadata The metadata required for the hook\n     * @param message The message passed from the Mailbox.dispatch() call\n     */\n    function postDispatch(\n        bytes calldata metadata,\n        bytes calldata message\n    ) external payable;\n\n    /**\n     * @notice Compute the payment required by the postDispatch call\n     * @param metadata The metadata required for the hook\n     * @param message The message passed from the Mailbox.dispatch() call\n     * @return Quoted payment for the postDispatch call\n     */\n    function quoteDispatch(\n"})})})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsxs)("summary",{children:[(0,i.jsx)(n.code,{children:"IInterchainSecurityModule"}),"\u63a5\u53e3"]}),(0,i.jsx)(o.A,{groupId:"lang",children:(0,i.jsx)(r.A,{value:"sol",label:"Solidity",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",metastring:"file=<rootDir>/node_modules/@hyperlane-xyz/core/contracts/interfaces/IInterchainSecurityModule.sol#L4-L35",children:"interface IInterchainSecurityModule {\n    enum Types {\n        UNUSED,\n        ROUTING,\n        AGGREGATION,\n        LEGACY_MULTISIG,\n        MERKLE_ROOT_MULTISIG,\n        MESSAGE_ID_MULTISIG,\n        NULL, // used with relayer carrying no metadata\n        CCIP_READ,\n        ARB_L2_TO_L1,\n        WEIGHTED_MERKLE_ROOT_MULTISIG,\n        WEIGHTED_MESSAGE_ID_MULTISIG,\n        OP_L2_TO_L1\n    }\n\n    /**\n     * @notice Returns an enum that represents the type of security model\n     * encoded by this ISM.\n     * @dev Relayers infer how to fetch and format metadata.\n     */\n    function moduleType() external view returns (uint8);\n\n    /**\n     * @notice Defines a security model responsible for verifying interchain\n     * messages based on the provided metadata.\n     * @param _metadata Off-chain metadata provided by a relayer, specific to\n     * the security model encoded by the module (e.g. validator signatures)\n     * @param _message Hyperlane encoded interchain message\n     * @return True if the message was verified\n     */\n    function verify(\n"})})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u94a9\u5b50\u76ee\u524d\u671f\u671b\u5143\u6570\u636e\u4f7f\u7528",(0,i.jsxs)(n.a,{href:"/website/docs/reference/libraries/hookmetadata",children:[(0,i.jsx)(n.code,{children:"StandardHookMetadata"}),"\u5e93"]}),"\u8fdb\u884c\u683c\u5f0f\u5316\u3002"]})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u7ee7\u627f\u6211\u4eec\u7684",(0,i.jsx)(n.code,{children:"AbstractMessageIdAuthorizedIsm"}),"\uff0c\u5b83\u5141\u8bb8\u5bf9\u4e2d\u95f4\u7684",(0,i.jsx)(n.code,{children:"verifyMessageId"}),"\u51fd\u6570\u8c03\u7528\u8fdb\u884c\u8bbf\u95ee\u63a7\u5236\uff0c\u5982\u679c\u4ece\u6388\u6743\u7684",(0,i.jsx)(n.code,{children:"AbstractMessageIdAuthHook"}),"\u94a9\u5b50\u63a5\u6536\u5230\u6d88\u606fID\uff0c\u5219\u5c06\u5176\u5728\u5b58\u50a8\u4e2d\u8bbe\u7f6e\u4e3atrue\u3002\u8fd9\u79cd\u6a21\u5f0f\u76ee\u524d\u7528\u4e8e",(0,i.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/ef2ece300e71a30e8f4f59e5b26e21eea012d43b/solidity/contracts/hooks/OPStackHook.sol#L33C8-L33C8",children:(0,i.jsx)(n.code,{children:"OpStackHook"})})," <> ",(0,i.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/ef2ece300e71a30e8f4f59e5b26e21eea012d43b/solidity/contracts/isms/hook/OPStackIsm.sol#L31",children:(0,i.jsx)(n.code,{children:"OpStackIsm"})}),"\u6a21\u5f0f\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5de5\u4f5c\u6d41\u7a0b",children:"\u5de5\u4f5c\u6d41\u7a0b"}),"\n",(0,i.jsx)(n.mermaid,{value:'flowchart TB\n    subgraph Origin Chain\n      Sender\n      M_O[(Mailbox)]\n      E_B_O[(ExternalBridgeOrigin)]\n\n      C_H[AbstractMessageIdAuthorizedIsm]\n      Sender -- "dispatch(..., metadata){value}" --\x3e M_O\n\n      M_O -. "postDispatch(metadata, ...)<br>{value - fee}" ..-> C_H\n      C_H -- "externalCall(metadata, message)" --\x3e E_B_O\n\n    end\n\n    E_B_O -. "crosschainCall(metadata,message)" ..-> E_B_D\n    M_O -. "relay" ..-> M_D\n\n    subgraph Destination Chain\n        Recipient\n        M_D[(Mailbox)]\n        E_B_D[(ExternalBridgeDestination)]\n        ISM{AbstractMessageIdAuthorizedIsm}\n\n        M_D -- "handle(origin,sender,message)" --\x3e Recipient\n        M_D -- "verify(metadata, message)" --\x3e ISM\n        ISM -. "interchainSecurityModule()" .- Recipient\n\n        E_B_D -- "verifiedMessageId(message)" --\x3e ISM\n    end\n\n    style E_B_O fill: #FF0099\n    style E_B_D fill: #FF0099'}),"\n",(0,i.jsx)(n.h3,{id:"\u63a5\u53e3",children:"\u63a5\u53e3"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u5b9e\u73b0\u4e0a\u8ff0\u63a5\u53e3\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u6211\u4eec\u90ae\u7bb1\u4e2d\u7684\u91cd\u8f7d",(0,i.jsx)(n.code,{children:"dispatch"}),"\u8c03\u7528\u6765\u8986\u76d6\u9ed8\u8ba4\u94a9\u5b50\u548c\u94a9\u5b50\u5143\u6570\u636e\uff1a"]}),"\n",(0,i.jsx)(o.A,{groupId:"lang",children:(0,i.jsxs)(r.A,{value:"sol",label:"Solidity",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",metastring:"file=<rootDir>/node_modules/@hyperlane-xyz/core/contracts/Mailbox.sol#L269-L275",children:"* @notice Dispatches a message to the destination domain & recipient.\n* @param destinationDomain Domain of destination chain\n* @param recipientAddress Address of recipient on destination chain as bytes32\n* @param messageBody Raw bytes content of message body\n* @param metadata Metadata used by the post dispatch hook\n* @param hook Custom hook to use instead of the default\n* @return The message ID inserted into the Mailbox's merkle tree\n"})}),(0,i.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),(0,i.jsx)(d.W,{solidity:({mailbox:e,merkleTreeHook:n,originChain:s,destinationDomain:a,destinationChain:i,paddedRecipient:t,body:o})=>`// \u4ece${s}\u53d1\u9001\u6d88\u606f\u5230${i} TestRecipient\nIMailbox mailbox = IMailbox("${e}");\nIPostDispatchHook merkleTree = IPostDispatchHook("${n}");\nmailbox.dispatch(\n  ${a},\n  "${t}",\n  bytes("${o}"),\n  "0x", // \u7a7a \u5143\u6570\u636e\n  merkleTree\n);\n`})]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u6e90\u94fe\u4e0a\uff0c"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mailbox.dispatch()"}),"\u901a\u8fc7",(0,i.jsx)(n.code,{children:"AbstractMessageIdAuthHook.postDispatch()"}),"\u8c03\u7528\u4f60\u7684\u81ea\u5b9a\u4e49\u94a9\u5b50\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"_postDispatch"}),"\u68c0\u67e5",(0,i.jsx)(n.code,{children:"latestDispatchedId"}),"\u662f\u5426\u662f\u4ece\u94a9\u5b50\u5206\u53d1\u7684ID\uff0c\u4ee5\u786e\u4fdd\u8c03\u7528\u94a9\u5b50\u7684\u662f\u90ae\u7bb1\u5408\u7ea6\uff08\u56e0\u4e3a\u8c03\u7528",(0,i.jsx)(n.code,{children:"postDispatch"}),"\u4e0d\u53d7\u8bbf\u95ee\u63a7\u5236\uff09"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"_sendMessageId"}),"\u8c03\u7528\u4f60\u7684\u81ea\u5b9a\u4e49\u5916\u90e8\u6865\u63a5\u903b\u8f91\uff0c\u6bd4\u5982\u8c03\u7528CCIP\u8def\u7531\u5668\u5408\u7ea6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u76ee\u6807\u94fe\u4e0a\uff0c"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5916\u90e8\u6865\u63a5\u5c06\u8c03\u7528",(0,i.jsx)(n.code,{children:"verifyMessageId"}),"\u51fd\u6570\uff08\u8be5\u51fd\u6570\u53d7\u8bbf\u95ee\u63a7\u5236\uff09\u5e76\u5c06",(0,i.jsx)(n.code,{children:"messageId"}),"\u5728",(0,i.jsx)(n.code,{children:"verifiedMessages"}),"\u6620\u5c04\u4e2d\u8bbe\u7f6e\u4e3atrue\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u63a5\u6536\u5230\u4e2d\u7ee7\u5668\u7684\u6d88\u606f\u65f6\uff0c\u90ae\u7bb1\u5c06\u8c03\u7528\u4f60\u7684ISM\u5408\u7ea6\uff08\u5728\u4f60\u7684\u63a5\u6536\u8005\u5730\u5740\u4e2d\u6307\u5b9a\uff09\uff0c\u8be5\u5408\u7ea6\u68c0\u67e5",(0,i.jsx)(n.code,{children:"verifiedMessages"}),"\u6620\u5c04\u4e2d\u7684messageId\u662f\u5426\u4e3atrue\uff0c\u5e76\u76f8\u5e94\u5730\u5411\u90ae\u7bb1\u8fd4\u56detrue\u6216false\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"AbstractMessageIdAuthorizedIsm"}),"\u53ef\u4ee5\u901a\u8fc7",(0,i.jsx)(n.code,{children:"postDispatch"}),"\u8c03\u7528\u53d1\u9001",(0,i.jsx)(n.code,{children:"msg.value"}),"\uff0c\u6211\u4eec\u5229\u7528",(0,i.jsx)(n.code,{children:"verifiedMessages"}),"\u7684\u5c0f\u7aef\u5e8f255\u4f4d\u6765\u5b58\u50a8",(0,i.jsx)(n.code,{children:"msg.value"}),"\uff0c\u9876\u90e8\u4f4d\u7528\u4e8e\u5b9e\u9645\u63a5\u6536messageId\u4f20\u9012\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u4ece\u6e90\u94fe\u53d1\u9001\u6700\u591a2^255\u6570\u91cf\u7684\u539f\u751f\u4ee3\u5e01\uff0c\u76ee\u6807ISM\u5728\u76ee\u6807\u94fe\u4e0a\u53ea\u80fd\u63a5\u65362^255\u6570\u91cf\u7684\u539f\u751f\u4ee3\u5e01\u3002"]})}),"\n",(0,i.jsx)(n.h3,{id:"\u8bbf\u95ee\u63a7\u5236",children:"\u8bbf\u95ee\u63a7\u5236"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c",(0,i.jsx)(n.code,{children:"postDispatch"}),"\u5fc5\u987b\u53ea\u80fd\u7528\u521a\u521a\u5206\u53d1\u7684",(0,i.jsx)(n.code,{children:"message"}),"\u8c03\u7528\uff0c\u53ef\u4ee5\u4f7f\u7528\u90ae\u7bb1\u4e0a\u7684",(0,i.jsx)(n.code,{children:"latestDispatchedId"}),"\u51fd\u6570\u6765\u9a8c\u8bc1\u6d88\u606f\u662f\u5426\u771f\u7684\u88ab\u5206\u53d1\u4e86\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u8fd9\u662f\u7528\u6765\u4ee3\u66ff\u7c7b\u4f3c",(0,i.jsx)(n.code,{children:"require(mailbox == msg.sender)"}),"\u7684\u65b9\u5f0f\uff0c\u4ee5\u652f\u6301",(0,i.jsx)(n.strong,{children:"\u7ec4\u5408"}),"\uff0c\u5176\u4e2d\u4e00\u4e2a\u94a9\u5b50\u53ef\u80fd\u5c06",(0,i.jsx)(n.code,{children:"message"}),"\u4f20\u9012\u7ed9\u53e6\u4e00\u4e2a\u94a9\u5b50\u3002"]})}),"\n",(0,i.jsx)(o.A,{groupId:"lang",children:(0,i.jsxs)(r.A,{value:"sol",label:"Solidity",children:[(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u65b9\u4fbf\u8d77\u89c1\uff0c",(0,i.jsxs)(n.a,{href:"/website/docs/reference/libraries/mailboxclient",children:[(0,i.jsx)(n.code,{children:"MailboxClient"}),"\u5e93"]}),"\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u5b9e\u7528\u5de5\u5177\u3002"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",metastring:"file=<rootDir>/node_modules/@hyperlane-xyz/core/contracts/client/MailboxClient.sol#L89-L91",children:"* @notice Sets the address of the application's custom interchain security module.\n* @param _module The address of the interchain security module contract.\n*/\n"})})]})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);