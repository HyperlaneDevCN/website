"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[532],{28453:(n,e,l)=>{l.d(e,{R:()=>d,x:()=>c});var s=l(96540);const i={},r=s.createContext(i);function d(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),s.createElement(r.Provider,{value:e},n.children)}},90494:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"guides/local-testnet-setup","title":"Hyperlane \u672c\u5730\u8bbe\u7f6e\u6307\u5357\uff1a\u5728 Anvil \u8282\u70b9\u4e4b\u95f4\u53d1\u9001\u6d88\u606f","description":"\u672c\u6307\u5357\u5c06\u5f15\u5bfc\u60a8\u901a\u8fc7 Hyperlane CLI \u5728\u4e24\u4e2a\u672c\u5730 Anvil \u8282\u70b9\u4e4b\u95f4\u53d1\u9001\u8de8\u94fe\u6d88\u606f\u3002","source":"@site/docs/guides/local-testnet-setup.mdx","sourceDirName":"guides","slug":"/guides/local-testnet-setup","permalink":"/docs/guides/local-testnet-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/guides/local-testnet-setup.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"getstartedSidebar","previous":{"title":"\u90e8\u7f72\u6865\u63a5UI","permalink":"/docs/guides/deploy-warp-route-UI"},"next":{"title":"\u90e8\u7f72\u6536\u76ca\u8def\u7531","permalink":"/docs/protocol/warp-routes/warp-routes-yield-routes"}}');var i=l(74848),r=l(28453);const d={},c="Hyperlane \u672c\u5730\u8bbe\u7f6e\u6307\u5357\uff1a\u5728 Anvil \u8282\u70b9\u4e4b\u95f4\u53d1\u9001\u6d88\u606f",a={},h=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u6b65\u9aa4\u6307\u5357",id:"\u6b65\u9aa4\u6307\u5357",level:2},{value:"1. \u73af\u5883\u8bbe\u7f6e\uff1a\u4e3a Hyperlane \u914d\u7f6e\u521b\u5efa\u4e00\u4e2a\u5de5\u4f5c\u76ee\u5f55\uff1a",id:"1-\u73af\u5883\u8bbe\u7f6e\u4e3a-hyperlane-\u914d\u7f6e\u521b\u5efa\u4e00\u4e2a\u5de5\u4f5c\u76ee\u5f55",level:3},{value:"2. \u542f\u52a8\u4e24\u4e2a\u4e0d\u540c\u7684 Anvil \u8282\u70b9",id:"2-\u542f\u52a8\u4e24\u4e2a\u4e0d\u540c\u7684-anvil-\u8282\u70b9",level:3},{value:"3. \u521d\u59cb\u5316 Hyperlane \u6ce8\u518c\u8868",id:"3-\u521d\u59cb\u5316-hyperlane-\u6ce8\u518c\u8868",level:3},{value:"4. \u90e8\u7f72\u6838\u5fc3\u5408\u7ea6",id:"4-\u90e8\u7f72\u6838\u5fc3\u5408\u7ea6",level:3},{value:"5. \u53d1\u9001\u6d4b\u8bd5\u6d88\u606f",id:"5-\u53d1\u9001\u6d4b\u8bd5\u6d88\u606f",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2}];function t(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"hyperlane-\u672c\u5730\u8bbe\u7f6e\u6307\u5357\u5728-anvil-\u8282\u70b9\u4e4b\u95f4\u53d1\u9001\u6d88\u606f",children:"Hyperlane \u672c\u5730\u8bbe\u7f6e\u6307\u5357\uff1a\u5728 Anvil \u8282\u70b9\u4e4b\u95f4\u53d1\u9001\u6d88\u606f"})}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u6307\u5357\u5c06\u5f15\u5bfc\u60a8\u901a\u8fc7 Hyperlane CLI \u5728\u4e24\u4e2a\u672c\u5730 Anvil \u8282\u70b9\u4e4b\u95f4\u53d1\u9001\u8de8\u94fe\u6d88\u606f\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsxs)(e.strong,{children:[(0,i.jsx)(e.a,{href:"https://hyperlanedevcn.github.io/website/docs/reference/cli",children:"Hyperlane CLI"}),"\uff1a"]})," \u786e\u4fdd\u60a8\u5df2\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Hyperlane CLI\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"npm install -g @hyperlane-xyz/cli\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsxs)(e.strong,{children:[(0,i.jsx)(e.a,{href:"https://book.getfoundry.sh/getting-started/installation",children:"Anvil (foundry)"}),"\uff1a"]})," \u5b89\u88c5\u4ee5\u8fd0\u884c\u672c\u5730\u94fe\u3002\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"curl -L https://foundry.paradigm.xyz | bash\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Node.js"}),"\uff08v18 \u6216\u66f4\u9ad8\u7248\u672c\uff09"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u90e8\u7f72\u8005\u94b1\u5305\u79c1\u94a5"}),"\uff1a\u60a8\u9700\u8981\u4e00\u4e2a\u6709\u8d44\u91d1\u7684\u94b1\u5305\u6765\u90e8\u7f72\u5408\u7ea6\u3002\u8fd9\u5c06\u7528\u4f5c HYP_KEY\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"export HYP_KEY=<YOUR_PRIVATE_KEY>\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6b65\u9aa4\u6307\u5357",children:"\u6b65\u9aa4\u6307\u5357"}),"\n",(0,i.jsx)(e.h3,{id:"1-\u73af\u5883\u8bbe\u7f6e\u4e3a-hyperlane-\u914d\u7f6e\u521b\u5efa\u4e00\u4e2a\u5de5\u4f5c\u76ee\u5f55",children:"1. \u73af\u5883\u8bbe\u7f6e\uff1a\u4e3a Hyperlane \u914d\u7f6e\u521b\u5efa\u4e00\u4e2a\u5de5\u4f5c\u76ee\u5f55\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"mkdir hyperlane-local-test && cd hyperlane-local-test\n"})}),"\n",(0,i.jsx)(e.h3,{id:"2-\u542f\u52a8\u4e24\u4e2a\u4e0d\u540c\u7684-anvil-\u8282\u70b9",children:"2. \u542f\u52a8\u4e24\u4e2a\u4e0d\u540c\u7684 Anvil \u8282\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4eec\u5c06\u8fd0\u884c\u4e24\u4e2a\u5177\u6709\u552f\u4e00\u94fe ID \u7684 Anvil \u8282\u70b9\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5728\u7b2c\u4e00\u4e2a\u7ec8\u7aef\u4e0a\uff0c\u542f\u52a8\u7b2c\u4e00\u4e2a Anvil \u8282\u70b9\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"anvil --port 8545 --chain-id 31337 --block-time 1\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u8fd0\u884c\u5728 ",(0,i.jsx)(e.code,{children:"http://localhost:8545"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u94fe ID\uff1a",(0,i.jsx)(e.code,{children:"31337"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5728\u65b0\u7ec8\u7aef\u4e2d\uff0c\u542f\u52a8\u7b2c\u4e8c\u4e2a Anvil \u8282\u70b9\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"anvil --port 8546 --chain-id 31338 --block-time 1\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u8fd0\u884c\u5728 ",(0,i.jsx)(e.code,{children:"http://localhost:8546"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u94fe ID\uff1a",(0,i.jsx)(e.code,{children:"31338"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"3-\u521d\u59cb\u5316-hyperlane-\u6ce8\u518c\u8868",children:"3. \u521d\u59cb\u5316 Hyperlane \u6ce8\u518c\u8868"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u65b0\u7ec8\u7aef\u4e2d\uff0c\u4f7f\u7528 Hyperlane CLI \u4e3a\u4e24\u4e2a Anvil \u8282\u70b9\u521b\u5efa\u914d\u7f6e\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"hyperlane registry init\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u6309\u7167\u63d0\u793a\u8bbe\u7f6e ",(0,i.jsx)(e.code,{children:"anvilnode1"}),"\u3002CLI \u5c06\u8be2\u95ee\u60a8\u6709\u5173\u94fe\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec chainId \u548c RPC URL\u3002\u5bf9 ",(0,i.jsx)(e.code,{children:"anvilnode2"})," \u91cd\u590d\u6b64\u8fc7\u7a0b\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6b64\u8fc7\u7a0b\u5c06\u5728 ",(0,i.jsx)(e.code,{children:"$HOME/.hyperlane/chains/anvilnode1"})," \u548c ",(0,i.jsx)(e.code,{children:"$HOME/.hyperlane/chains/anvilnode2"})," \u4e0b\u521b\u5efa ",(0,i.jsx)(e.code,{children:"metadata.yaml"})," \u6587\u4ef6\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\u5143\u6570\u636e\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"anvilnode1"})}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yaml",children:"chainId: 31337\ndisplayName: Anvilnode1\ndomainId: 31337\nisTestnet: true\nname: anvilnode1\nnativeToken:\n  decimals: 18\n  name: ETH\n  symbol: ETH\nprotocol: ethereum\nrpcUrls:\n  - http: http://localhost:8545\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"anvilnode2"})}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yaml",children:"chainId: 31338\ndisplayName: Anvilnode2\ndomainId: 31338\nisTestnet: true\nname: anvilnode2\nnativeToken:\n  decimals: 18\n  name: ETH\n  symbol: ETH\nprotocol: ethereum\nrpcUrls:\n  - http: http://localhost:8546\n"})}),"\n",(0,i.jsx)(e.h3,{id:"4-\u90e8\u7f72\u6838\u5fc3\u5408\u7ea6",children:"4. \u90e8\u7f72\u6838\u5fc3\u5408\u7ea6"}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4eec\u5c06\u914d\u7f6e\u5e76\u90e8\u7f72 Hyperlane \u6838\u5fc3\u5408\u7ea6\u3002"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["\u60a8\u9700\u8981\u90e8\u7f72\u6838\u5fc3\u5408\u7ea6\u7684\u90e8\u7f72\u8005\u94b1\u5305\u79c1\u94a5\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"export HYP_KEY='<YOUR_PRIVATE_KEY>'"})," \u5c06\u79c1\u94a5\u8bbe\u7f6e\u4e3a\u73af\u5883\u53d8\u91cf\u3002"]})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"hyperlane core init\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u90e8\u7f72\u914d\u7f6e\u5c06\u4fdd\u5b58\u5230 ",(0,i.jsx)(e.code,{children:"./configs/core-config.yaml"}),"\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\uff0c\u90e8\u7f72\u6838\u5fc3\u5408\u7ea6\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"hyperlane core deploy\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u6309\u7167\u63d0\u793a\u9009\u62e9 ",(0,i.jsx)(e.code,{children:"anvilnode1"}),"\u3002CLI \u5c06\u90e8\u7f72\u90ae\u7bb1\u3001\u8de8\u94fe\u5b89\u5168\u6a21\u5757\uff08ISM\uff09\u548c\u5176\u4ed6\u6240\u9700\u5408\u7ea6\u3002\u5bf9 ",(0,i.jsx)(e.code,{children:"anvilnode2"})," \u91cd\u590d\u6b64\u8fc7\u7a0b\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5b8c\u6210\u540e\uff0c\u60a8\u5c06\u5728 ",(0,i.jsx)(e.code,{children:"$HOME/.hyperlane/chains/anvilnode1"})," \u548c ",(0,i.jsx)(e.code,{children:"$HOME/.hyperlane/chains/anvilnode2"})," \u4e2d\u627e\u5230 ",(0,i.jsx)(e.code,{children:"addresses.yaml"}),"\uff0c\u5176\u4e2d\u5305\u542b\u5df2\u90e8\u7f72\u7684\u5408\u7ea6\u5730\u5740\u3002"]}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"\u60a8\u5e94\u8be5\u80fd\u591f\u5728\u8fd0\u884c\u672c\u5730\u8282\u70b9\u7684\u7ec8\u7aef\u4e0a\u770b\u5230\u5408\u7ea6\u90e8\u7f72\u7684\u6d88\u606f\u3002"})}),"\n",(0,i.jsx)(e.h3,{id:"5-\u53d1\u9001\u6d4b\u8bd5\u6d88\u606f",children:"5. \u53d1\u9001\u6d4b\u8bd5\u6d88\u606f"}),"\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 Hyperlane CLI \u4ece ",(0,i.jsx)(e.code,{children:"anvilnode1"})," \u5411 ",(0,i.jsx)(e.code,{children:"anvilnode2"})," \u53d1\u9001\u6d88\u606f\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"hyperlane send message --relay\n"})}),"\n",(0,i.jsxs)(e.p,{children:["CLI \u5c06\u63d0\u793a\u60a8\u63d0\u4f9b\u6e90\u94fe\uff08",(0,i.jsx)(e.code,{children:"anvilnode1"}),"\uff09\u548c\u76ee\u6807\u94fe\uff08",(0,i.jsx)(e.code,{children:"anvilnode2"}),"\uff09\u3002"]}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["\u5bf9\u4e8e\u672c\u5730\u6d4b\u8bd5\uff0c",(0,i.jsx)(e.code,{children:"--relay"})," \u6807\u5fd7\u4f1a\u81ea\u52a8\u5c06\u6d88\u606f\u4e2d\u7ee7\u5230\u76ee\u6807\u94fe\u3002"]})}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u9001\u6d88\u606f\u540e\uff0c\u8bf7\u68c0\u67e5\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u9a8c\u8bc1\u8005\u65e5\u5fd7\uff1a\u67e5\u627e\u6307\u793a\u751f\u6210\u548c\u5b58\u50a8\u7b7e\u540d\u7684\u6761\u76ee\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4e2d\u7ee7\u5668\u65e5\u5fd7\uff1a\u67e5\u627e\u6210\u529f\u68c0\u7d22\u5143\u6570\u636e\u548c\u6d88\u606f\u5904\u7406\u7684\u8bb0\u5f55\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Anvil \u65e5\u5fd7\uff1a\u786e\u4fdd\u5df2\u6316\u6398\u533a\u5757\u4ee5\u5904\u7406\u4ea4\u6613\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{type:"success",children:(0,i.jsx)(e.p,{children:"\ud83c\udf89 \u60a8\u5df2\u4f7f\u7528 Hyperlane \u5728\u4e24\u4e2a\u672c\u5730 Anvil \u8282\u70b9\u4e4b\u95f4\u53d1\u9001\u4e86\u6d88\u606f\uff01"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6545\u969c\u6392\u9664",children:"\u6545\u969c\u6392\u9664"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u201c\u65e0\u6cd5\u83b7\u53d6\u5143\u6570\u636e\u201d\u8b66\u544a\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u539f\u56e0\uff1a"})," \u5f53\u4e2d\u7ee7\u5668\u65e0\u6cd5\u68c0\u7d22\u5904\u7406\u6d88\u606f\u6240\u9700\u7684\u9a8c\u8bc1\u8005\u7b7e\u540d\u65f6\uff0c\u4f1a\u53d1\u751f\u6b64\u60c5\u51b5\u3002\u5e38\u89c1\u539f\u56e0\uff1a","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u9a8c\u8bc1\u8005\u5bc6\u94a5\u7f3a\u4e4f\u6d4b\u8bd5\u7f51\u8d44\u91d1\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u9a8c\u8bc1\u8005\u5c1a\u672a\u5ba3\u5e03\u5176\u5b58\u50a8\u4f4d\u7f6e\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u89e3\u51b3\u65b9\u6848\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u786e\u4fdd\u9a8c\u8bc1\u8005\u5df2\u5ba3\u5e03\u5176\u5b58\u50a8\u4f4d\u7f6e\u3002\u68c0\u67e5\u9a8c\u8bc1\u8005\u65e5\u5fd7\u4ee5\u67e5\u627e\u7c7b\u4f3c\u4ee5\u4e0b\u6d88\u606f\uff1a",(0,i.jsx)(e.code,{children:'Validator has announced signature storage location, locations: ["file:///tmp/hyperlane-validator-signatures-local"].'})]}),"\n",(0,i.jsxs)(e.li,{children:["\u9a8c\u8bc1\u6bcf\u4e2a\u9a8c\u8bc1\u8005\u662f\u5426\u5177\u6709\u552f\u4e00\u7684\u7b7e\u540d\u5b58\u50a8\u8def\u5f84\uff08",(0,i.jsx)(e.code,{children:"--checkpointSyncer.path"}),"\uff09\uff0c\u4ee5\u9632\u6b62\u8986\u76d6\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u786e\u8ba4\u4e2d\u7ee7\u5668\u5bf9\u5b58\u50a8\u8def\u5f84\u5177\u6709\u8bfb\u53d6\u6743\u9650\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6d88\u606f\u8d85\u65f6\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u539f\u56e0\uff1a"})," Anvil \u9ed8\u8ba4\u4e0d\u81ea\u52a8\u6316\u6398\u533a\u5757\uff0c\u5bfc\u81f4\u9a8c\u8bc1\u8005\u6216\u4e2d\u7ee7\u5668\u65e0\u9650\u671f\u7b49\u5f85\u65b0\u5757\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u89e3\u51b3\u65b9\u6848\uff1a"})," \u786e\u4fdd\u5728\u542f\u52a8 Anvil \u65f6\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"--block-time 1"})," \u6807\u5fd7\uff0c\u4ee5\u6bcf\u79d2\u81ea\u52a8\u6316\u6398\u533a\u5757\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u9a8c\u8bc1\u8005\u4e0d\u5339\u914d\u6216\u914d\u7f6e\u9519\u8bef\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u539f\u56e0\uff1a"})," \u76ee\u6807\u94fe\u4e0a\u7684 ISM \u914d\u7f6e\u4e0e\u6e90\u94fe\u4f7f\u7528\u7684\u9a8c\u8bc1\u8005\u5bc6\u94a5\u4e0d\u5339\u914d\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u89e3\u51b3\u65b9\u6848\uff1a"})," \u68c0\u67e5 ISM \u914d\u7f6e\u662f\u5426\u5305\u542b\u6b63\u786e\u7684\u9a8c\u8bc1\u8005\u5730\u5740\u3002\u9a8c\u8bc1\u8005\u65e5\u5fd7\u53ef\u4ee5\u5e2e\u52a9\u8bc6\u522b\u5df2\u5ba3\u5e03\u7684\u5730\u5740\u3002"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(t,{...n})}):t(n)}}}]);