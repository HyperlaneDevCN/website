"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[3564],{26858:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"reference/registries","title":"Hyperlane \u6ce8\u518c\u8868","description":"\u6982\u8ff0","source":"@site/docs/reference/registries.mdx","sourceDirName":"reference","slug":"/reference/registries","permalink":"/website/docs/reference/registries","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/reference/registries.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"protocolSidebar","previous":{"title":"\u57df","permalink":"/website/docs/reference/domains"},"next":{"title":"\u6d88\u606f\u4f20\u9012\u8c03\u8bd5","permalink":"/website/docs/guides/message-debugging"}}');var i=n(74848),t=n(28453);const l={},c="Hyperlane \u6ce8\u518c\u8868",a={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u89c4\u8303\u6ce8\u518c\u8868",id:"\u89c4\u8303\u6ce8\u518c\u8868",level:2},{value:"\u81ea\u5b9a\u4e49\u6ce8\u518c\u8868",id:"\u81ea\u5b9a\u4e49\u6ce8\u518c\u8868",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5 (Javascript &amp; Typescript)",id:"\u4f7f\u7528\u65b9\u6cd5-javascript--typescript",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u83b7\u53d6\u5185\u5bb9",id:"\u83b7\u53d6\u5185\u5bb9",level:3},{value:"\u901a\u8fc7\u5305(\u9759\u6001)",id:"\u901a\u8fc7\u5305\u9759\u6001",level:4},{value:"\u901a\u8fc7\u5de5\u5177(\u52a8\u6001)",id:"\u901a\u8fc7\u5de5\u5177\u52a8\u6001",level:4}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"hyperlane-\u6ce8\u518c\u8868",children:"Hyperlane \u6ce8\u518c\u8868"})}),"\n",(0,i.jsx)(r.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,i.jsxs)(r.p,{children:["Hyperlane \u53ef\u4ee5\u88ab\u4efb\u4f55\u4eba\u90e8\u7f72\u5230\u4efb\u4f55\u5730\u65b9\u3002\u4f46\u8981\u4f7f\u8fd9\u4e9b\u90e8\u7f72\u53d1\u6325\u4f5c\u7528,\u5b83\u4eec\u7684\u8be6\u7ec6\u4fe1\u606f\u5fc5\u987b\u662f\u4f17\u6240\u5468\u77e5\u7684\u3002\u6ce8\u518c\u8868\u662f\u7528\u4e8e\u4e0e Hyperlane \u5408\u7ea6\u548c\u5de5\u5177\u4ea4\u4e92\u7684\u94fe\u5143\u6570\u636e\u3001\u5408\u7ea6\u5730\u5740\u548c\u5176\u4ed6\u6709\u7528\u4fe1\u606f\u7684\u96c6\u5408\u3002Hyperlane \u6838\u5fc3\u56e2\u961f\u7ef4\u62a4\u7740\u4e00\u4e2a",(0,i.jsx)(r.a,{href:"https://github.com/hyperlane-xyz/hyperlane-registry",children:"\u89c4\u8303\u6ce8\u518c\u8868"}),"\u3002",(0,i.jsx)(r.a,{href:"/website/docs/reference/cli",children:"\u547d\u4ee4\u884c\u5de5\u5177"}),"\u3001",(0,i.jsx)(r.a,{href:"https://explorer.hyperlane.xyz",children:"\u6d4f\u89c8\u5668"}),"\u548c\u5176\u4ed6\u5de5\u5177\u90fd\u53ef\u4ee5\u4f7f\u7528\u6ce8\u518c\u8868\u6570\u636e\u3002"]}),"\n",(0,i.jsx)(r.h2,{id:"\u89c4\u8303\u6ce8\u518c\u8868",children:"\u89c4\u8303\u6ce8\u518c\u8868"}),"\n",(0,i.jsxs)(r.p,{children:["Hyperlane \u6838\u5fc3\u56e2\u961f\u5b8c\u6210\u7684\u90e8\u7f72\u7684\u5143\u6570\u636e\u548c\u5de5\u4ef6\u53ef\u5728\u6b64\u5904\u83b7\u5f97:\n",(0,i.jsx)(r.a,{href:"https://github.com/hyperlane-xyz/hyperlane-registry",children:"https://github.com/hyperlane-xyz/hyperlane-registry"})]}),"\n",(0,i.jsx)(r.p,{children:"\u7136\u800c,\u6211\u4eec\u9f13\u52b1\u793e\u533a\u6210\u5458\u5c06\u4ed6\u4eec\u81ea\u5df1\u7684\u90e8\u7f72\u6dfb\u52a0\u5230\u8fd9\u4e2a\u89c4\u8303\u6ce8\u518c\u8868\u4e2d\u3002\u8d21\u732e\u6b65\u9aa4\u5982\u4e0b:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Fork \u5e76\u514b\u9686\u6ce8\u518c\u8868\u4ed3\u5e93"}),"\n",(0,i.jsxs)(r.li,{children:["\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177\u5e76\u5c06 ",(0,i.jsx)(r.code,{children:"--registry"})," \u6807\u5fd7\u8bbe\u7f6e\u4e3a\u514b\u9686\u4ed3\u5e93\u7684\u672c\u5730\u8def\u5f84"]}),"\n",(0,i.jsx)(r.li,{children:"\u6309\u9700\u6267\u884c\u4f60\u7684\u547d\u4ee4"}),"\n",(0,i.jsx)(r.li,{children:"\u5c06\u66f4\u6539\u63a8\u9001\u5230\u4f60\u7684 fork \u5e76\u521b\u5efa\u62c9\u53d6\u8bf7\u6c42"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"\u81ea\u5b9a\u4e49\u6ce8\u518c\u8868",children:"\u81ea\u5b9a\u4e49\u6ce8\u518c\u8868"}),"\n",(0,i.jsx)(r.p,{children:"\u53ea\u8981\u6ce8\u518c\u8868\u7b26\u5408\u4e0e\u89c4\u8303\u6ce8\u518c\u8868\u76f8\u540c\u7684\u5e03\u5c40\u548c\u6587\u4ef6\u6a21\u5f0f,\u5c31\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55 GitHub \u4ed3\u5e93 URL \u6216\u672c\u5730\u6587\u4ef6\u8def\u5f84\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u547d\u4ee4\u884c\u5de5\u5177\u6709\u4e24\u4e2a\u7528\u4e8e\u914d\u7f6e\u5176\u4f7f\u7528\u7684\u6ce8\u518c\u8868\u7684\u547d\u4ee4\u884c\u53c2\u6570:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"--registry"})," \u6807\u5fd7\u8bbe\u7f6e\u4e3b\u8981\u6ce8\u518c\u8868,\u5982\u679c\u672a\u8bbe\u7f6e\u5219\u4f7f\u7528\u9ed8\u8ba4\u7684 GitHub \u6ce8\u518c\u8868"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"--overrides"})," \u6807\u5fd7\u8bbe\u7f6e\u4e00\u4e2a\u53ef\u9009\u7684\u989d\u5916\u8def\u5f84,\u8fd9\u5bf9\u4e8e\u5f3a\u5236\u8986\u76d6\u9ed8\u8ba4\u6570\u636e\u5f88\u6709\u7528,\u4f8b\u5982\u5728\u94fe\u7684\u5143\u6570\u636e\u4e2d\u4f7f\u7528\u4e0d\u540c\u7684 RPC URL\u3002"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"\u4e00\u65e6\u4f60\u7684\u81ea\u5b9a\u4e49\u6ce8\u518c\u8868\u6dfb\u52a0/\u66f4\u65b0\u5b8c\u6210\u5e76\u6d4b\u8bd5\u901a\u8fc7,\u8bf7\u8003\u8651\u5411\u89c4\u8303\u6ce8\u518c\u8868\u63d0\u4ea4\u62c9\u53d6\u8bf7\u6c42,\u4ee5\u4fbf\u5176\u4ed6\u4eba\u4e5f\u80fd\u4ece\u4f60\u7684\u90e8\u7f72\u4e2d\u53d7\u76ca\u3002"}),"\n",(0,i.jsxs)(r.p,{children:["\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1",(0,i.jsx)(r.a,{href:"/website/docs/reference/cli",children:"\u547d\u4ee4\u884c\u5de5\u5177\u53c2\u8003\u9875\u9762"}),"\u3002"]}),"\n",(0,i.jsx)(r.h2,{id:"\u4f7f\u7528\u65b9\u6cd5-javascript--typescript",children:"\u4f7f\u7528\u65b9\u6cd5 (Javascript & Typescript)"}),"\n",(0,i.jsx)(r.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"# \u4f7f\u7528 npm\nnpm install @hyperlane-xyz/registry\n# \u6216\u4f7f\u7528 yarn\nyarn add @hyperlane-xyz/registry\n"})}),"\n",(0,i.jsx)(r.h3,{id:"\u83b7\u53d6\u5185\u5bb9",children:"\u83b7\u53d6\u5185\u5bb9"}),"\n",(0,i.jsx)(r.h4,{id:"\u901a\u8fc7\u5305\u9759\u6001",children:"\u901a\u8fc7\u5305(\u9759\u6001)"}),"\n",(0,i.jsx)(r.p,{children:"\u8bbf\u95ee\u6ce8\u518c\u8868\u6570\u636e\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u76f4\u63a5\u4ece\u5305\u4e2d\u5bfc\u5165\u6240\u9700\u90e8\u5206:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:'// \u901a\u8fc7\u57fa\u7840\u5305\nimport { ethereum, ethereumAddresses } from "@hyperlane-xyz/registry";\n// \u6216\u901a\u8fc7\u5b50\u5bfc\u51fa\u4ee5\u83b7\u5f97\u66f4\u4f18\u7684\u5305\u5927\u5c0f(\u5982\u679c\u4f60\u7684\u6253\u5305\u5de5\u5177\u5141\u8bb8)\nimport { metadata, addresses } from "@hyperlane-xyz/registry/chains/ethereum";\n'})}),"\n",(0,i.jsx)(r.h4,{id:"\u901a\u8fc7\u5de5\u5177\u52a8\u6001",children:"\u901a\u8fc7\u5de5\u5177(\u52a8\u6001)"}),"\n",(0,i.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u786e\u4fdd\u83b7\u53d6\u6700\u65b0\u6570\u636e,\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(r.code,{children:"GithubRegistry"})," \u7c7b\u52a8\u6001\u83b7\u53d6\u6ce8\u518c\u8868\u5185\u5bb9\u3002"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:'import { GithubRegistry } from "@hyperlane-xyz/registry";\nconst registry = new GithubRegistry();\nconst chainMetadata = await registry.getMetadata();\n'})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>c});var s=n(96540);const i={},t=s.createContext(i);function l(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);