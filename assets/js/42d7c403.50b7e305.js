"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[8176],{3991:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"reference/hooks/polygon-pos","title":"Polygon PoS \u94a9\u5b50","description":"Polygon PoS \u5177\u6709\u81ea\u5df1\u7684\u4ee5\u592a\u574a\u548c Polygon \u4e4b\u95f4\u6d88\u606f\u4f20\u9012\u7684\u63a5\u53e3\uff0c\u79f0\u4e3a fx portal\u3002\u901a\u8fc7\u6b64\u63a5\u53e3\u4f20\u9012\u7684\u6d88\u606f\u53d7\u76ca\u4e8e Polygon \u72b6\u6001\u540c\u6b65\u673a\u5236 \u7684\u5b89\u5168\u6027\u3002","source":"@site/docs/reference/hooks/polygon-pos.mdx","sourceDirName":"reference/hooks","slug":"/reference/hooks/polygon-pos","permalink":"/docs/reference/hooks/polygon-pos","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/reference/hooks/polygon-pos.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"protocolSidebar","previous":{"title":"Arbitrum L2 \u5230 L1","permalink":"/docs/reference/hooks/arbitrum-L2-to-L1"},"next":{"title":"\u6a21\u5757\u5316\u5b89\u5168","permalink":"/docs/protocol/ISM/modular-security"}}');var t=n(74848),r=n(28453);const l={},c="Polygon PoS \u94a9\u5b50",i={},a=[{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"polygon-pos-\u94a9\u5b50",children:"Polygon PoS \u94a9\u5b50"})}),"\n",(0,t.jsxs)(o.p,{children:["Polygon PoS \u5177\u6709\u81ea\u5df1\u7684\u4ee5\u592a\u574a\u548c Polygon \u4e4b\u95f4\u6d88\u606f\u4f20\u9012\u7684\u63a5\u53e3\uff0c\u79f0\u4e3a ",(0,t.jsx)(o.a,{href:"https://github.com/0xPolygon/fx-portal",children:(0,t.jsx)(o.code,{children:"fx portal"})}),"\u3002\u901a\u8fc7\u6b64\u63a5\u53e3\u4f20\u9012\u7684\u6d88\u606f\u53d7\u76ca\u4e8e Polygon ",(0,t.jsx)(o.a,{href:"https://docs.polygon.technology/pos/architecture/bor/state-sync/",children:"\u72b6\u6001\u540c\u6b65\u673a\u5236"})," \u7684\u5b89\u5168\u6027\u3002"]}),"\n",(0,t.jsx)(o.p,{children:"\u4e3a\u4e86\u5728 Hyperlane \u4e2d\u63d0\u4f9b\u8fd9\u79cd\u5b89\u5168\u6027\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u94a9\u5b50\u548c ISM \u7ec4\u5408\uff0c\u53ef\u4ee5\u900f\u660e\u5730\u914d\u7f6e\u4ee5\u91cd\u7528 fx-portal \u63a5\u53e3\u3002"}),"\n",(0,t.jsxs)(o.p,{children:["\u8bf7\u53c2\u89c1 ",(0,t.jsx)(o.a,{href:"/docs/reference/contract-addresses",children:"\u5730\u5740"})," \u9875\u9762\u4ee5\u83b7\u53d6\u94a9\u5b50\u548c ISM \u5730\u5740\u3002"]}),"\n",(0,t.jsx)(o.h2,{id:"\u5de5\u4f5c\u539f\u7406",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,t.jsx)(o.p,{children:"Polygon FX-Portal \u63d0\u4f9b FxChild (FxChild.sol) \u548c FxRoot (FxRoot.sol) \u4f5c\u4e3a\u6865\u63a5\u5de5\u4f5c\u7684\u4e3b\u8981\u5408\u7ea6\u3002\u5b83\u8c03\u7528\u5e76\u5c06\u6570\u636e\u4f20\u9012\u7ed9\u53e6\u4e00\u6761\u94fe\u4e0a\u7684\u7528\u6237\u5b9a\u4e49\u65b9\u6cd5\uff0c\u800c\u65e0\u9700\u6620\u5c04\u3002"}),"\n",(0,t.jsxs)(o.p,{children:["FxChild/FxRoot \u5408\u7ea6\u7531 Polygon \u56e2\u961f\u63d0\u4f9b\u548c\u7ef4\u62a4\u3002\u60a8\u53ef\u4ee5\u5728 Polygon \u7684 ",(0,t.jsx)(o.a,{href:"https://github.com/0xPolygon/fx-portal",children:"Fx-Portal \u4ed3\u5e93"})," \u4e2d\u627e\u5230\u6b64\u5408\u7ea6\u7684\u5730\u5740\u3002\nPolygonPosHook \u901a\u8fc7 FxRoot \u53d1\u9001\u6709\u6548\u8d1f\u8f7d\u3002\u9a8c\u8bc1\u8005\u5c06\u63d0\u53d6\u6d88\u606f\u5e76\u5c06\u5176\u4f20\u9012\u5230\u53e6\u4e00\u6761\u94fe\u3002\u60a8\u53ef\u4ee5\u5728 ",(0,t.jsx)(o.a,{href:"https://docs.polygon.technology/pos/how-to/bridging/l1-l2-communication/state-transfer/",children:"\u6587\u6863"})," \u4e2d\u627e\u5230\u8be6\u7ec6\u7684\u72b6\u6001\u540c\u6b65\u673a\u5236\uff0c",(0,t.jsx)(o.code,{children:"StateReceiver"})," \u5728 ",(0,t.jsx)(o.code,{children:"0x0000000000000000000000000000000000001001"})," \u5141\u8bb8\u8c03\u7528 FxChild \u5408\u7ea6\u4e2d\u7684 ",(0,t.jsx)(o.code,{children:"onStateReceive"}),"\u3002FxChild \u8c03\u7528\u62bd\u8c61\u7684 ",(0,t.jsx)(o.code,{children:"CrossChainEnabledPolygonChild"})," \u4e2d\u7684 ",(0,t.jsx)(o.code,{children:"processMessageFromRoot"}),"\uff0cPolygonPosISM \u5728\u5176\u4e0a\u5b9e\u73b0\u3002",(0,t.jsx)(o.code,{children:"CrossChainEnabledPolygonChild"})," \u7531 ",(0,t.jsx)(o.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/crosschain#",children:"OpenZeppelin"})," \u7ef4\u62a4\u3002"]}),"\n",(0,t.jsx)(o.mermaid,{value:'flowchart TB\n    subgraph Origin Ethereum\n      Sender\n      M_O[(Mailbox)]\n      Hook[PolygonPosHook]\n      Eth[(FxRoot)]\n\n      Sender -- "dispatch(...)" --\x3e M_O\n      M_O -- "postDispatch(message)" --\x3e Hook\n      Hook -- "sendMessage(messageId)" --\x3e Eth\n    end\n\n    M_O -. "relay" .-> M_D\n    Eth -. "validator node" .-> Polygon\n\n    subgraph Destination Polygon PoS\n      Recipient\n      M_D[(Mailbox)]\n      ISM{PolygonPosISM}\n      Polygon[(FxChild)]\n\n      M_D -- "verify(..., message)" --\x3e ISM\n      M_D -- "handle(...)" --\x3e Recipient\n      ISM -. "interchainSecurityModule()" .- Recipient\n\n      Polygon -- "verifyMessageId(messageId)" --\x3e ISM\n    end\n\n    style Eth fill: #ff0402\n    style Polygon fill: #ff0402'})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>c});var s=n(96540);const t={},r=s.createContext(t);function l(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);