"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[7763],{28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var r=s(96540);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}},50619:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"reference/hooks/interchain-gas","title":"\u8de8\u94fe Gas \u8d39\u7528\u540e\u7f6e\u5904\u7406","description":"\u5728\u540e\u7f6e\u5904\u7406\u94a9\u5b50\u4e2d,\u5982\u679c\u652f\u4ed8\u7684\u8d39\u7528\u4e0d\u8db3\u4ee5\u8986\u76d6\u4e2d\u7ee7\u5668\u7684\u9884\u671f\u6210\u672c,InterchainGasPaymaster \u5408\u7ea6\u5c06\u4f1a\u56de\u6eda\u3002\u5728 dispatch \u65f6\u8ba1\u7b97\u7684 gas \u62a5\u4ef7\u5fc5\u987b\u4e0e\u4e2d\u7ee7\u5668\u7684\u9884\u671f\u6210\u672c\u76f8\u7b26\u3002","source":"@site/docs/reference/hooks/interchain-gas.mdx","sourceDirName":"reference/hooks","slug":"/reference/hooks/interchain-gas","permalink":"/docs/reference/hooks/interchain-gas","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/reference/hooks/interchain-gas.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"protocolSidebar","previous":{"title":"\u90ae\u4ef6\u5206\u53d1 Hooks","permalink":"/docs/reference/hooks/overview"},"next":{"title":"OP Stack","permalink":"/docs/reference/hooks/op-stack"}}');var a=s(74848),i=s(28453),l=s(65537),t=s(79329);const d={},c="\u8de8\u94fe Gas \u8d39\u7528\u540e\u7f6e\u5904\u7406",o={},h=[{value:"Gas \u9650\u5236",id:"gas-\u9650\u5236",level:2},{value:"\u5143\u6570\u636e",id:"\u5143\u6570\u636e",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:4},{value:"\u786e\u5b9a\u548c\u8986\u76d6 Gas \u9650\u5236",id:"\u786e\u5b9a\u548c\u8986\u76d6-gas-\u9650\u5236",level:3},{value:"\u76ee\u6807 Gas \u914d\u7f6e",id:"\u76ee\u6807-gas-\u914d\u7f6e",level:2},{value:"Gas \u5f00\u9500",id:"gas-\u5f00\u9500",level:3},{value:"Gas \u9884\u8a00\u673a",id:"gas-\u9884\u8a00\u673a",level:2},{value:"<code>getExchangeRateAndGasPrice</code>",id:"getexchangerateandgasprice",level:3},{value:"<code>quoteGasPayment</code>",id:"quotegaspayment",level:3},{value:"\u91cd\u8bd5",id:"\u91cd\u8bd5",level:2},{value:"\u4f7f\u7528 Hyperlane Explorer \u8fdb\u884c\u8c03\u8bd5",id:"\u4f7f\u7528-hyperlane-explorer-\u8fdb\u884c\u8c03\u8bd5",level:2},{value:"\u4e3b\u8981\u529f\u80fd",id:"\u4e3b\u8981\u529f\u80fd",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"<code>GasPaymentRequirementNotMet</code> \u8b66\u544a",id:"gaspaymentrequirementnotmet-\u8b66\u544a",level:3},{value:"\u56de\u9000\u8def\u7531\u548c\u8d85\u989d\u652f\u4ed8\u8b66\u544a",id:"\u56de\u9000\u8def\u7531\u548c\u8d85\u989d\u652f\u4ed8\u8b66\u544a",level:3},{value:"\u610f\u5916\u7684\u9ad8\u989d Gas \u62a5\u4ef7",id:"\u610f\u5916\u7684\u9ad8\u989d-gas-\u62a5\u4ef7",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\u8de8\u94fe-gas-\u8d39\u7528\u540e\u7f6e\u5904\u7406",children:"\u8de8\u94fe Gas \u8d39\u7528\u540e\u7f6e\u5904\u7406"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u540e\u7f6e\u5904\u7406\u94a9\u5b50\u4e2d,\u5982\u679c\u652f\u4ed8\u7684\u8d39\u7528\u4e0d\u8db3\u4ee5\u8986\u76d6\u4e2d\u7ee7\u5668\u7684\u9884\u671f\u6210\u672c,",(0,a.jsx)(n.code,{children:"InterchainGasPaymaster"})," \u5408\u7ea6\u5c06\u4f1a\u56de\u6eda\u3002\u5728 ",(0,a.jsx)(n.code,{children:"dispatch"})," \u65f6\u8ba1\u7b97\u7684 gas \u62a5\u4ef7\u5fc5\u987b\u4e0e\u4e2d\u7ee7\u5668\u7684\u9884\u671f\u6210\u672c\u76f8\u7b26\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"gas-\u9650\u5236",children:"Gas \u9650\u5236"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"gasLimit"})," \u662f\u6839\u636e\u5728\u76ee\u6807\u94fe\u4e0a\u8c03\u7528\u7ed9\u5b9a\u6d88\u606f\u7684 ",(0,a.jsx)(n.code,{children:"handle"})," \u7684\u6210\u672c\u6765\u8bbe\u7f6e\u7684\u3002\u8fd9\u53ef\u80fd\u4f1a\u6839\u636e\u6d88\u606f\u5185\u5bb9\u548c\u5904\u7406\u7a0b\u5e8f\u7684\u903b\u8f91\u800c\u6709\u6240\u4e0d\u540c\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u7528\u4e8e\u8ba1\u91cf handle \u8c03\u7528\u7684\u9ed8\u8ba4 ",(0,a.jsx)(n.code,{children:"gasLimit"})," \u662f\u9759\u6001\u7684 ",(0,a.jsx)(n.code,{children:"50_000"})," gas\u3002\u8fd9\u5bf9\u4e8e\u7b80\u5355\u64cd\u4f5c\u6765\u8bf4\u5df2\u7ecf\u8db3\u591f,\u4f46\u5bf9\u4e8e\u66f4\u590d\u6742\u7684 ",(0,a.jsx)(n.code,{children:"handle"})," \u51fd\u6570\u53ef\u80fd\u4e0d\u591f\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684 ",(0,a.jsx)(n.code,{children:"handle"})," \u51fd\u6570\u6267\u884c\u590d\u6742\u64cd\u4f5c\u6216\u9700\u8981\u66f4\u591a gas,\u4f60\u5fc5\u987b\u5728",(0,a.jsxs)(n.a,{href:"#metadata",children:["\u5143\u6570\u636e\u4e2d\u8986\u76d6\u9ed8\u8ba4\u7684 ",(0,a.jsx)(n.code,{children:"gasLimit"})]})," \u4ee5\u907f\u514d\u4ea4\u6613\u56de\u6eda\u3002\u5728\u5355\u5143\u6d4b\u8bd5\u4e2d\u5bf9\u4f60\u7684 ",(0,a.jsxs)(n.a,{href:"/docs/reference/messaging/receive#handle",children:[(0,a.jsx)(n.code,{children:"handle"})," \u5b9e\u73b0"]}),"\u8fdb\u884c\u57fa\u51c6\u6d4b\u8bd5,\u4ee5\u786e\u5b9a\u5408\u7406\u7684 ",(0,a.jsx)(n.code,{children:"gasLimit"}),"\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u5143\u6570\u636e",children:"\u5143\u6570\u636e"}),"\n",(0,a.jsxs)(n.p,{children:["\u6b64 hook \u9700\u8981 ",(0,a.jsx)(n.strong,{children:"\u6253\u5305\u7f16\u7801"})," \u683c\u5f0f\u7684 ",(0,a.jsx)(n.code,{children:"StandardHookMetadata"}),"\u3002\u67e5\u770b Mailbox ",(0,a.jsx)(n.a,{href:"/docs/reference/messaging/send#overriding-default-hook-metadata",children:"dispatch \u91cd\u8f7d"}),"\u4e86\u89e3\u5982\u4f55\u4f20\u9012\u5143\u6570\u636e\u8986\u76d6\u3002"]}),"\n",(0,a.jsx)(l.A,{groupId:"lang",children:(0,a.jsx)(t.A,{value:"sol",label:"Solidity",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",children:"struct StandardHookMetadata {\n    uint16 variant;\n    uint256 msgValue; \n    uint256 gasLimit;\n    address refundAddress;\n}\n"})})})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"StandardHookMetadata"})," \u7ed3\u6784\u5b9a\u4e49\u4e86\u5143\u6570\u636e\u7f16\u7801\u6240\u9700\u7684\u5b57\u6bb5:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"variant"}),": \u6307\u5b9a\u5143\u6570\u636e\u683c\u5f0f\u7248\u672c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"msgValue"}),": \u968f\u6d88\u606f\u53d1\u9001\u7684\u539f\u751f\u4ee3\u5e01\u6570\u91cf"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"gasLimit"}),": \u76ee\u6807\u94fe\u4e0a ",(0,a.jsx)(n.code,{children:"handle"})," \u51fd\u6570\u7684 gas \u9650\u5236\u3002\u786e\u4fdd\u8fd9\u4e0e\u4f60\u7684\u6a21\u62df\u7ed3\u679c\u76f8\u5339\u914d"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"refundAddress"}),": \u9000\u8fd8\u672a\u4f7f\u7528 gas \u8d39\u7528\u7684\u5730\u5740"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u8981\u7f16\u7801\u6b64\u5143\u6570\u636e,\u8bf7\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"StandardHookMetadata.formatMetadata"})," \u5e93\u51fd\u6570\u3002Solidity \u4e0d\u652f\u6301\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"abi.encodePacked"})," \u76f4\u63a5\u7f16\u7801\u7ed3\u6784\u4f53\u3002"]}),"\n",(0,a.jsx)(n.h4,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,a.jsx)(l.A,{groupId:"lang",children:(0,a.jsxs)(t.A,{value:"sol",label:"Solidity",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",children:'// \u793a\u4f8b: \u4f7f\u7528 StandardHookMetadata \u7f16\u7801\u5143\u6570\u636e\nbytes memory metadata = StandardHookMetadata.formatMetadata(\n    0,               // ETH \u6d88\u606f\u503c\n    200000,         // \u81ea\u5b9a\u4e49 gas \u9650\u5236\n    address(this),   // \u9000\u6b3e\u5730\u5740\n    bytes("")        // \u53ef\u9009\u7684\u81ea\u5b9a\u4e49\u5143\u6570\u636e\n);\n'})}),(0,a.jsx)(n.h3,{id:"\u786e\u5b9a\u548c\u8986\u76d6-gas-\u9650\u5236",children:"\u786e\u5b9a\u548c\u8986\u76d6 Gas \u9650\u5236"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"\u6a21\u62df\u548c\u57fa\u51c6\u6d4b\u8bd5 Gas \u4f7f\u7528\u91cf"}),":"]}),"\n"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u4f7f\u7528 Tenderly \u6216 Foundry \u7b49\u5de5\u5177\u6a21\u62df\u6d88\u606f\u63a5\u6536\u8005\u7684 ",(0,a.jsx)(n.code,{children:"handle"})," \u51fd\u6570\u3002\u786e\u4fdd ",(0,a.jsx)(n.code,{children:"from"})," \u5730\u5740\u8bbe\u7f6e\u4e3a\u4f60\u94fe\u4e0a\u7684 Mailbox \u5408\u7ea6\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5982\u679c gas \u4f7f\u7528\u91cf\u8d85\u8fc7 ",(0,a.jsx)(n.code,{children:"50,000"}),",\u8ba1\u7b97\u9002\u5f53\u7684 ",(0,a.jsx)(n.code,{children:"gasLimit"})," \u5e76\u66f4\u65b0\u4f60\u7684\u5143\u6570\u636e\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-explorer/blob/03634076049bfce1611b4e41d1aa81910eab2962/src/features/messages/cards/TransactionCard.tsx#L326-L333",children:"Hyperlane Explorer \u4e2d\u7684\u64cd\u4f5c\u6309\u94ae"})," \u4ece\u6d88\u606f\u8be6\u60c5\u6a21\u62df\u4ea4\u6613\u3002"]}),"\n"]}),(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"\u66f4\u65b0\u4f60\u7684\u5143\u6570\u636e"}),":"]}),"\n"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u6839\u636e\u6a21\u62df\u7ed3\u679c\u8ba1\u7b97\u6240\u9700\u7684 ",(0,a.jsx)(n.code,{children:"gasLimit"}),"\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5728\u5143\u6570\u636e\u4e2d\u4f20\u5165\u66f4\u65b0\u540e\u7684 ",(0,a.jsx)(n.code,{children:"gasLimit"}),",\u786e\u4fdd\u4e2d\u7ee7\u5668\u80fd\u591f\u4f20\u9012\u4f60\u7684\u6d88\u606f\u3002"]}),"\n"]})]})}),"\n",(0,a.jsx)(n.h2,{id:"\u76ee\u6807-gas-\u914d\u7f6e",children:"\u76ee\u6807 Gas \u914d\u7f6e"}),"\n",(0,a.jsx)(n.p,{children:"\u5bf9\u4e8e\u6bcf\u4e2a\u8fdc\u7a0b\u57df,InterchainGasPaymaster \u8bbe\u7f6e\u57df gas \u914d\u7f6e\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",children:"struct DomainGasConfig {\n    IGasOracle gasOracle;\n    uint96 gasOverhead;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"gas-\u5f00\u9500",children:"Gas \u5f00\u9500"}),"\n",(0,a.jsx)(n.p,{children:"gas \u5f00\u9500\u662f\u76ee\u6807 gas \u914d\u7f6e\u7684\u4e00\u90e8\u5206\u3002\u8fd9\u5bf9\u5e94\u4e8e\u5728\u76ee\u6807\u94fe\u4e0a\u5904\u7406\u6d88\u606f\u7684\u8fd0\u8425\u6210\u672c\u3002"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u4f60\u5e94\u8be5\u786e\u4fdd ",(0,a.jsx)(n.code,{children:"gasOverhead"})," \u8db3\u4ee5\u8986\u76d6\u76ee\u6807\u94fe\u4e0a\u7684 ISM \u8303\u56f4\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u7531\u4e8e\u4f60\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684\u6d88\u606f\u7c7b\u578b\u914d\u7f6e\u4e0d\u540c\u7684 ISM,\u6bcf\u4e2a ISM \u7684 ",(0,a.jsx)(n.code,{children:"verify"})," \u51fd\u6570\u53ef\u80fd\u6709\u4e0d\u540c\u7684 gas \u5f00\u9500\u3002"]}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"gas-\u9884\u8a00\u673a",children:"Gas \u9884\u8a00\u673a"}),"\n",(0,a.jsx)(n.p,{children:"\u8de8\u94fe Gas \u8d39\u7528\u8981\u6c42\u662f\u4f7f\u7528\u9884\u8a00\u673a\u63d0\u4f9b\u7684 gas \u4ef7\u683c\u548c\u539f\u76ee\u6807\u94fe\u4e4b\u95f4\u7684\u6c47\u7387\u8ba1\u7b97\u7684\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["IGP \u5408\u7ea6\u53ef\u4ee5\u914d\u7f6e gas \u9884\u8a00\u673a,\u8d1f\u8d23\u8ddf\u8e2a\u8fdc\u7a0b\u4ee3\u5e01 gas \u4ef7\u683c\u548c\u6c47\u7387\u3002\u5f00\u53d1\u8005\u5e94\u8be5\u4f7f\u7528 Mailbox \u5408\u7ea6\u4e0a\u7684 ",(0,a.jsx)(n.a,{href:"/docs/reference/hooks/overview#quote-dispatch-fees",children:(0,a.jsx)(n.code,{children:"quoteDispatch"})})," \u51fd\u6570\u6765\u8ba1\u7b97 gas \u8d39\u7528\u3002",(0,a.jsx)(n.code,{children:"quoteDispatch"})," \u8003\u8651\u4e86\u7cfb\u7edf\u7ea7\u5f00\u9500,\u786e\u4fdd\u6574\u4e2a ",(0,a.jsx)(n.code,{children:"dispatch"})," \u8fc7\u7a0b\u7684\u8d39\u7528\u8ba1\u7b97\u51c6\u786e\u3002"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u6c47\u7387\u548c gas \u4ef7\u683c\u7531\u4e2d\u7ee7\u5668\u51b3\u5b9a\u3002\u53ef\u80fd\u4f1a\u6536\u53d6\u4ef7\u5dee\u4ee5\u5e94\u5bf9\u4ef7\u683c\u6ce2\u52a8\u548c\u8fd0\u8425\u6210\u672c\u3002"}),"\n"]})}),"\n",(0,a.jsx)(n.p,{children:"\u6700\u7ec8,\u4e2d\u7ee7\u5668\u5c06\u80fd\u591f\u81ea\u52a8\u66f4\u65b0\u5176 gas \u9884\u8a00\u673a,\u4ee5\u786e\u4fdd\u5176 IGP \u59cb\u7ec8\u4e3a\u8fdc\u7a0b gas \u62a5\u51fa\u516c\u5e73\u4ef7\u683c\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"getexchangerateandgasprice",children:(0,a.jsx)(n.code,{children:"getExchangeRateAndGasPrice"})}),"\n",(0,a.jsx)(l.A,{groupId:"lang",children:(0,a.jsxs)(t.A,{value:"sol",label:"Solidity",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",metastring:"file=<rootDir>/node_modules/@hyperlane-xyz/core/contracts/hooks/igp/InterchainGasPaymaster.sol#L220-L240",children:'function getExchangeRateAndGasPrice(\n    uint32 _destinationDomain\n)\n    public\n    view\n    override\n    returns (uint128 tokenExchangeRate, uint128 gasPrice)\n{\n    IGasOracle _gasOracle = destinationGasConfigs[_destinationDomain]\n        .gasOracle;\n\n    if (address(_gasOracle) == address(0)) {\n        revert(\n            string.concat(\n                "Configured IGP doesn\'t support domain ",\n                Strings.toString(_destinationDomain)\n            )\n        );\n    }\n    return _gasOracle.getExchangeRateAndGasPrice(_destinationDomain);\n}\n'})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"destinationDomain"}),": \u6d88\u606f\u7684\u76ee\u6807\u57df"]}),"\n"]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u8fd4\u56de\u503c"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tokenExchangeRate"}),": \u539f\u94fe\u548c\u76ee\u6807\u94fe gas \u4ee3\u5e01\u4e4b\u95f4\u7684\u6c47\u7387"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"gasPrice"}),": \u76ee\u6807\u94fe\u7684 gas \u4ef7\u683c"]}),"\n"]})]})}),"\n",(0,a.jsx)(n.h3,{id:"quotegaspayment",children:(0,a.jsx)(n.code,{children:"quoteGasPayment"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"quoteGasPayment"})," \u51fd\u6570\u8ba1\u7b97\u4e2d\u7ee7\u5668\u9884\u671f\u6210\u672c\u7684\u8d39\u7528\u3002"]}),"\n",(0,a.jsx)(l.A,{groupId:"lang",children:(0,a.jsxs)(t.A,{value:"sol",label:"Solidity",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",metastring:"file=<rootDir>/node_modules/@hyperlane-xyz/core/contracts/hooks/igp/InterchainGasPaymaster.sol#L194-L211",children:"function quoteGasPayment(\n    uint32 _destinationDomain,\n    uint256 _gasLimit\n) public view virtual override returns (uint256) {\n    // Get the gas data for the destination domain.\n    (\n        uint128 _tokenExchangeRate,\n        uint128 _gasPrice\n    ) = getExchangeRateAndGasPrice(_destinationDomain);\n\n    // The total cost quoted in destination chain's native token.\n    uint256 _destinationGasCost = _gasLimit * uint256(_gasPrice);\n\n    // Convert to the local native token.\n    return\n        (_destinationGasCost * _tokenExchangeRate) /\n        TOKEN_EXCHANGE_RATE_SCALE;\n}\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"destinationDomain"}),": \u6d88\u606f\u7684\u76ee\u6807\u57df"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"gasLimit"}),": \u7528\u4e8e\u8ba1\u91cf ",(0,a.jsx)(n.code,{children:"handle"})," \u8c03\u7528\u7684 gas \u9650\u5236"]}),"\n"]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u8fd4\u56de\u503c"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"fee"}),": ",(0,a.jsx)(n.code,{children:"postDispatch"})," \u6210\u529f\u6240\u9700\u7684\u652f\u4ed8\u91d1\u989d"]}),"\n"]})]})}),"\n",(0,a.jsx)(n.h2,{id:"\u91cd\u8bd5",children:"\u91cd\u8bd5"}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c ",(0,a.jsx)(n.code,{children:"handle"})," \u8c03\u7528\u6d88\u8017\u7684 gas \u8d85\u8fc7\u62a5\u4ef7,\u4e2d\u7ee7\u5668\u5c06\u4e0d\u4f1a\u63d0\u4ea4\u5904\u7406\u4ea4\u6613\u3002\u8fd9\u4e2a\u95ee\u9898\u901a\u5e38\u662f\u7531\u4e8e\u521d\u59cb ",(0,a.jsx)(n.code,{children:"dispatch"})," \u65f6 gas \u652f\u4ed8\u4e0d\u8db3\u5bfc\u81f4\u7684\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b,\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"payForGas"})," \u51fd\u6570\u652f\u4ed8\u989d\u5916\u7684 gas\u3002"]}),"\n",(0,a.jsx)(l.A,{groupId:"lang",children:(0,a.jsxs)(t.A,{value:"sol",label:"Solidity",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",metastring:"file=<rootDir>/node_modules/@hyperlane-xyz/core/contracts/interfaces/IInterchainGasPaymaster.sol#L24-L29",children:"function payForGas(\n    bytes32 _messageId,\n    uint32 _destinationDomain,\n    uint256 _gasAmount,\n    address _refundAddress\n) external payable;\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"messageId"}),": \u4ece ",(0,a.jsx)(n.code,{children:"dispatch"})," \u8c03\u7528\u8fd4\u56de\u7684\u6d88\u606f\u6807\u8bc6\u7b26"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"destinationDomain"}),": \u6d88\u606f\u7684\u76ee\u6807\u57df"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"gasAmount"}),": \u8981\u652f\u4ed8\u7684\u989d\u5916 gas \u6570\u91cf"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"refundAddress"}),": \u9000\u8fd8\u591a\u4f59\u652f\u4ed8\u7684\u5730\u5740"]}),"\n"]})]})}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528-hyperlane-explorer-\u8fdb\u884c\u8c03\u8bd5",children:"\u4f7f\u7528 Hyperlane Explorer \u8fdb\u884c\u8c03\u8bd5"}),"\n",(0,a.jsx)(n.p,{children:"Hyperlane Explorer \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u5de5\u5177,\u53ef\u7528\u4e8e\u8c03\u8bd5\u8de8\u94fe\u6d88\u606f\u95ee\u9898,\u5305\u62ec gas \u652f\u4ed8\u548c\u4e2d\u7ee7\u5668\u884c\u4e3a\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u4e3b\u8981\u529f\u80fd",children:"\u4e3b\u8981\u529f\u80fd"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"\u6d88\u606f\u72b6\u6001"}),': \u67e5\u770b\u6d88\u606f\u7684\u5f53\u524d\u72b6\u6001(\u4f8b\u5982,"\u91cd\u8bd5: GasPaymentRequirementNotMet")\u3002']}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Gas \u652f\u4ed8\u8be6\u60c5"}),": \u68c0\u67e5\u5df2\u652f\u4ed8\u7684 gas \u6570\u91cf(\u539f\u59cb IGP gas \u6570\u91cf)\u548c\u4e2d\u7ee7\u5668\u8981\u6c42\u7684\u6570\u91cf\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"\u6a21\u62df\u8c03\u7528\u6570\u636e"}),': \u4f7f\u7528"\u67e5\u770b\u8c03\u7528\u6570\u636e\u8be6\u60c5"\u9009\u9879\u5728 Tenderly \u7b49\u5de5\u5177\u4e0a\u6a21\u62df\u4ea4\u6613\u3002']}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u6545\u969c\u6392\u9664",children:"\u6545\u969c\u6392\u9664"}),"\n",(0,a.jsx)(n.p,{children:"\u672c\u8282\u4ecb\u7ecd\u5f00\u53d1\u8005\u5728\u5904\u7406\u8de8\u94fe Gas \u652f\u4ed8\u65f6\u9047\u5230\u7684\u5e38\u89c1\u95ee\u9898\u53ca\u5176\u53ef\u80fd\u7684\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,a.jsxs)(n.h3,{id:"gaspaymentrequirementnotmet-\u8b66\u544a",children:[(0,a.jsx)(n.code,{children:"GasPaymentRequirementNotMet"})," \u8b66\u544a"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"\u539f\u56e0:"})," \u5f53 ",(0,a.jsx)(n.code,{children:"dispatch"})," \u671f\u95f4\u63d0\u4f9b\u7684 gas \u652f\u4ed8\u4e0d\u6ee1\u8db3\u4e2d\u7ee7\u5668\u8ba1\u7b97\u7684\u8981\u6c42\u65f6\u53d1\u751f\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6848:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"quoteDispatch"})," \u8ba1\u7b97\u4f7f ",(0,a.jsx)(n.code,{children:"dispatch"})," \u8c03\u7528\u6210\u529f\u6240\u9700\u7684\u603b\u8d39\u7528\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u9a8c\u8bc1\u5143\u6570\u636e\u4e2d\u7684 ",(0,a.jsx)(n.code,{children:"msg.value"})," \u662f\u5426\u8986\u76d6\u4e86\u4e2d\u7ee7\u5668\u62a5\u4ef7\u7684\u8d39\u7528\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5728 Hyperlane Explorer \u4e2d\u68c0\u67e5\u6d88\u606f\u72b6\u6001\u3002\u67e5\u627e: ",(0,a.jsx)(n.code,{children:"Retry(GasPaymentRequirementNotMet)"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u56de\u9000\u8def\u7531\u548c\u8d85\u989d\u652f\u4ed8\u8b66\u544a",children:"\u56de\u9000\u8def\u7531\u548c\u8d85\u989d\u652f\u4ed8\u8b66\u544a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"\u539f\u56e0:"})," ",(0,a.jsx)(n.code,{children:"msg.value"})," \u8d85\u8fc7\u6240\u9700\u7684 gas \u652f\u4ed8,\u89e6\u53d1\u56de\u9000\u8def\u7531\u94a9\u5b50\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6848:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u9a8c\u8bc1\u4f60\u7684\u62a5\u4ef7\u903b\u8f91(",(0,a.jsx)(n.code,{children:"quoteDispatch"}),")\u662f\u5426\u4e0e\u4e2d\u7ee7\u5668\u7684\u9884\u671f\u8d39\u7528\u5339\u914d\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u907f\u514d\u5728\u672a\u5148\u5bf9 ",(0,a.jsx)(n.code,{children:"handle"})," \u51fd\u6570\u8fdb\u884c\u57fa\u51c6\u6d4b\u8bd5\u7684\u60c5\u51b5\u4e0b\u8fc7\u5ea6\u4f30\u8ba1 ",(0,a.jsx)(n.code,{children:"gasLimit"})," \u503c\u3002"]}),"\n",(0,a.jsx)(n.li,{children:"\u6a21\u62df\u4ea4\u6613\u4ee5\u786e\u8ba4\u9002\u5f53\u7684\u652f\u4ed8\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u610f\u5916\u7684\u9ad8\u989d-gas-\u62a5\u4ef7",children:"\u610f\u5916\u7684\u9ad8\u989d Gas \u62a5\u4ef7"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"\u539f\u56e0:"})," \u8bbe\u7f6e\u4e86\u975e\u5e38\u9ad8\u7684 ",(0,a.jsx)(n.code,{children:"gasLimit"}),",\u5bfc\u81f4\u8fc7\u9ad8\u7684 gas \u62a5\u4ef7\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6848:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u4ed4\u7ec6\u68c0\u67e5\u5143\u6570\u636e\u4e2d\u6307\u5b9a\u7684 ",(0,a.jsx)(n.code,{children:"gasLimit"}),"\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u9a8c\u8bc1\u4f60\u7684\u62a5\u4ef7\u903b\u8f91(",(0,a.jsx)(n.code,{children:"quoteDispatch"}),")\u662f\u5426\u4e0e\u4e2d\u7ee7\u5668\u7684\u9884\u671f\u8d39\u7528\u5339\u914d\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u8c03\u6574 ",(0,a.jsx)(n.code,{children:"gasLimit"})," \u4ee5\u5339\u914d\u4f60\u7684 ",(0,a.jsx)(n.code,{children:"handle"})," \u51fd\u6570\u7684\u4f30\u8ba1 gas \u6d88\u8017\u3002"]}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},65537:(e,n,s)=>{s.d(n,{A:()=>G});var r=s(96540),a=s(34164),i=s(65627),l=s(56347),t=s(50372),d=s(30604),c=s(11861),o=s(78749);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:a}}=e;return{value:n,label:s,attributes:r,default:a}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const a=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,i=u(e),[l,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,h]=j({queryString:s,groupId:a}),[g,p]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,o.Dv)(s);return[a,(0,r.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:a}),m=(()=>{const e=c??g;return x({value:e,tabValues:i})?e:null})();(0,t.A)((()=>{m&&d(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var p=s(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function v(e){let{className:n,block:s,selectedValue:r,selectValue:l,tabValues:t}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const n=e.currentTarget,s=d.indexOf(n),a=t[s].value;a!==r&&(c(n),l(a))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{d.push(e)},onKeyDown:h,onClick:o,...i,className:(0,a.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:i}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function G(e){const n=(0,p.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},79329:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var r=s(34164);const a={tabItem:"tabItem_Ymn6"};var i=s(74848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:s,children:n})}}}]);