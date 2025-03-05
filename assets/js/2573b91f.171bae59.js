"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[8536],{28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var t=r(96540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}},86253:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"protocol/protocol-overview","title":"\u534f\u8bae\u6982\u8ff0","description":"Hyperlane \u662f\u7b2c\u4e00\u4e2a \u65e0\u6743\u9650\u7684\u4e92\u64cd\u4f5c\u6027 \u5c42\uff0c\u5141\u8bb8\u667a\u80fd\u5408\u7ea6\u5f00\u53d1\u8005\u5728\u533a\u5757\u94fe\u4e4b\u95f4\u53d1\u9001\u4efb\u610f\u6570\u636e\u3002","source":"@site/docs/protocol/protocol-overview.mdx","sourceDirName":"protocol","slug":"/protocol/protocol-overview","permalink":"/website/docs/protocol/protocol-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/protocol/protocol-overview.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"protocolSidebar","next":{"title":"\u90ae\u7bb1","permalink":"/website/docs/protocol/mailbox"}}');var o=r(74848),i=r(28453);const s={},c="\u534f\u8bae\u6982\u8ff0",a={},l=[];function d(e){const n={a:"a",h1:"h1",header:"header",mermaid:"mermaid",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u534f\u8bae\u6982\u8ff0",children:"\u534f\u8bae\u6982\u8ff0"})}),"\n",(0,o.jsxs)(n.p,{children:["Hyperlane \u662f\u7b2c\u4e00\u4e2a ",(0,o.jsx)(n.a,{href:"/website/docs/deploy-hyperlane",children:"\u65e0\u6743\u9650\u7684\u4e92\u64cd\u4f5c\u6027"})," \u5c42\uff0c\u5141\u8bb8\u667a\u80fd\u5408\u7ea6\u5f00\u53d1\u8005\u5728\u533a\u5757\u94fe\u4e4b\u95f4\u53d1\u9001\u4efb\u610f\u6570\u636e\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 Hyperlane \u79fb\u52a8\u4ee3\u5e01\u3001\u6267\u884c\u51fd\u6570\u8c03\u7528\uff0c\u4ee5\u53ca\u5176\u4ed6\u8bb8\u591a\u529f\u80fd\uff0c\u4ece\u800c\u521b\u5efa\u8de8\u94fe\u5e94\u7528\u7a0b\u5e8f\uff0c\u8fd9\u4e9b\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u88ab\u4efb\u4f55\u533a\u5757\u94fe\u4e0a\u7684\u7528\u6237\u8bbf\u95ee\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u7528\u6237\u901a\u8fc7 ",(0,o.jsx)(n.a,{href:"/website/docs/protocol/mailbox",children:"\u90ae\u7bb1"})," \u667a\u80fd\u5408\u7ea6\u4e0e Hyperlane \u534f\u8bae\u8fdb\u884c\u4ea4\u4e92\uff0c\u8fd9\u4e9b\u5408\u7ea6\u63d0\u4f9b\u4e86\u4e00\u4e2a\u94fe\u4e0a\u6d88\u606f\u63a5\u53e3\uff0c\u7528\u4e8e\u53d1\u9001\u548c\u63a5\u6536\u8de8\u94fe\u6d88\u606f\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["Hyperlane \u91c7\u53d6\u6a21\u5757\u5316\u7684\u5b89\u5168\u6027\u65b9\u6cd5\uff0c\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u5e76\u9009\u62e9\u4e00\u7cfb\u5217 ",(0,o.jsx)(n.a,{href:"/website/docs/protocol/ISM/modular-security",children:"\u8de8\u94fe\u5b89\u5168\u6a21\u5757"})," (ISM)\u3002\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a ISM\uff0c\u4ee5\u81ea\u5b9a\u4e49\u4fdd\u62a4\u5176\u4e0e Hyperlane \u6d88\u606f\u63a5\u53e3\u96c6\u6210\u7684\u5b89\u5168\u6a21\u578b\u3002"]}),"\n",(0,o.jsx)(n.mermaid,{value:'flowchart TB\n    subgraph Origin\n      Sender\n      M_O[(Mailbox)]\n\n      Sender -- "1.dispatch(destination,<br>recipient, body)" --\x3e M_O\n    end\n\n    M_O -. "2.emit dispatch(sender,<br>destination, recipient,<br>body)" .-> Relayer\n\n    subgraph Destination\n      Recipient\n      M_D[(Mailbox)]\n      ISM[InterchainSecurityModule]\n\n      M_D -. "4.interchainSecurityModule()" .-> Recipient\n      M_D -- "5.verify(metadata,<br>message)" --\x3e ISM\n      M_D -- "6.handle(origin, sender,<br>body)" --\x3e Recipient\n    end\n\n    Relayer((Relayer)) -- "3.process(metadata,<br>message)" --\x3e M_D\n\n    style Sender fill:#efab17\n    style Recipient fill:#efab17'})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);