"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[934],{28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var r=n(96540);const o={},t=r.createContext(o);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:s},e.children)}},81570:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"reference/cosmos-sdk","title":"Cosmos SDK","description":"\u5f53\u524d\u72b6\u6001: Hyperlane Cosmos SDK \u6a21\u5757\u76ee\u524d\u6b63\u5728\u5f00\u53d1\u4e2d,\u5373\u5c06\u53d1\u5e03!","source":"@site/docs/reference/cosmos-sdk.mdx","sourceDirName":"reference","slug":"/reference/cosmos-sdk","permalink":"/website/docs/reference/cosmos-sdk","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/reference/cosmos-sdk.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"protocolSidebar","previous":{"title":"\u547d\u4ee4\u884c\u5de5\u5177","permalink":"/website/docs/reference/cli"},"next":{"title":"\u90ae\u7bb1\u5ba2\u6237\u7aef","permalink":"/website/docs/reference/libraries/mailboxclient"}}');var o=n(74848),t=n(28453);const i={},c="Cosmos SDK",l={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2}];function a(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"cosmos-sdk",children:"Cosmos SDK"})}),"\n",(0,o.jsx)(s.admonition,{type:"warning",children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"\u5f53\u524d\u72b6\u6001:"})," Hyperlane Cosmos SDK \u6a21\u5757\u76ee\u524d\u6b63\u5728\u5f00\u53d1\u4e2d,\u5373\u5c06",(0,o.jsx)(s.strong,{children:"\u53d1\u5e03"}),"!"]})}),"\n",(0,o.jsx)(s.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,o.jsxs)(s.p,{children:["Hyperlane Cosmos SDK \u6a21\u5757\u4f7f\u57fa\u4e8e Cosmos SDK \u7684\u533a\u5757\u94fe\u80fd\u591f\u96c6\u6210 Hyperlane \u8fdb\u884c\u8de8\u94fe\u901a\u4fe1\u3002\u5b83\u4e3a Cosmos \u94fe\u63d0\u4f9b\u4e86\u4e00\u79cd\u65e0\u9700\u8bb8\u53ef\u7684\u65b9\u5f0f\u6765\u4e0e\u5916\u90e8\u751f\u6001\u7cfb\u7edf\u8fdb\u884c\u901a\u4fe1,\u5305\u62ec EVM \u548c\u5176\u4ed6\u5df2",(0,o.jsx)(s.a,{href:"https://hyperlanedevcn.github.io/website/docs/reference/addresses/mailbox-addresses",children:"\u90e8\u7f72 Hyperlane"})," \u7684\u751f\u6001\u7cfb\u7edf\u3002"]}),"\n",(0,o.jsxs)(s.p,{children:["\u867d\u7136 Hyperlane \u5df2\u7ecf\u901a\u8fc7 ",(0,o.jsx)(s.a,{href:"https://github.com/many-things/cw-hyperlane?tab=readme-ov-file",children:"CosmWasm"})," \u652f\u6301 Cosmos \u94fe,\u4f46\u8be5\u6a21\u5757\u901a\u8fc7\u4f7f Cosmos SDK \u94fe(\u65e0\u8bba\u662f\u5426\u652f\u6301 CosmWasm)\u90fd\u80fd\u5229\u7528 Hyperlane \u7684\u4e92\u64cd\u4f5c\u6027\u529f\u80fd,\u4ece\u800c\u6269\u5927\u4e86\u5176\u53ef\u8bbf\u95ee\u6027\u3002"]}),"\n",(0,o.jsx)(s.h2,{id:"\u4e3b\u8981\u7279\u6027",children:"\u4e3b\u8981\u7279\u6027"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"\u7aef\u5230\u7aef\u4e92\u64cd\u4f5c\u6027\u89e3\u51b3\u65b9\u6848"}),": \u4e3a\u57fa\u4e8e Cosmos SDK \u7684\u94fe\u5b9e\u73b0\u4e86 Hyperlane \u8de8\u94fe\u4e92\u64cd\u4f5c\u6027\u6846\u67b6\u7684\u6d88\u606f\u4f20\u9012\u3001\u4f20\u8f93\u548c\u5b89\u5168\u6a21\u5757\u3002"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"\u65e0\u9700\u8bb8\u53ef\u4e14\u5f00\u6e90"}),": \u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u90e8\u7f72\u548c\u914d\u7f6e\u8be5\u6a21\u5757\u4ee5\u6ee1\u8db3\u5176\u9700\u6c42,\u65e0\u9700\u4f9d\u8d56\u4e2d\u4ecb\u3002"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"\u7531 KYVE \u6784\u5efa"}),": \u7531 ",(0,o.jsx)(s.a,{href:"https://www.kyve.network/",children:"KYVE"})," \u56e2\u961f\u5f00\u53d1,\u65e8\u5728\u5c06 Cosmos \u4e92\u64cd\u4f5c\u6027\u6269\u5c55\u5230 IBC \u4e4b\u5916\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}}}]);