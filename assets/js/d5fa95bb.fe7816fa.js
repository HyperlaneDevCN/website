"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[5127],{7494:(e,r,n)=>{n.d(r,{A:()=>l});const l=n.p+"assets/images/relayer-architecture-high-level-593774113bc38fb186389fbbc55758bc.png"},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>c});var l=n(96540);const s={},i=l.createContext(s);function t(e){const r=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(i.Provider,{value:r},e.children)}},67896:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"protocol/agents/relayer","title":"Relayer","description":"\u6982\u8ff0","source":"@site/docs/protocol/agents/relayer.mdx","sourceDirName":"protocol/agents","slug":"/protocol/agents/relayer","permalink":"/website/docs/protocol/agents/relayer","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/protocol/agents/relayer.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"protocolSidebar","previous":{"title":"\u4ee3\u7406","permalink":"/website/docs/protocol/agents"},"next":{"title":"\u9a8c\u8bc1\u5668","permalink":"/website/docs/protocol/agents/validators"}}');var s=n(74848),i=n(28453);const t={},c="Relayer",a={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6838\u5fc3\u529f\u80fd",id:"\u6838\u5fc3\u529f\u80fd",level:3},{value:"Relayer \u6fc0\u52b1",id:"relayer-\u6fc0\u52b1",level:3},{value:"\u64cd\u4f5c Relayer",id:"\u64cd\u4f5c-relayer",level:3},{value:"\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f",id:"\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f",level:2},{value:"\u7d22\u5f15\u5668",id:"\u7d22\u5f15\u5668",level:3},{value:"\u63d0\u4ea4\u8005",id:"\u63d0\u4ea4\u8005",level:3}];function o(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"relayer",children:"Relayer"})}),"\n",(0,s.jsx)(r.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,s.jsx)(r.h3,{id:"\u6838\u5fc3\u529f\u80fd",children:"\u6838\u5fc3\u529f\u80fd"}),"\n",(0,s.jsxs)(r.p,{children:["Relayer \u901a\u8fc7\u5c06\u6d88\u606f\u4ece\u6e90\u94fe\u4f20\u9012\u5230\u76ee\u6807\u94fe\uff0c\u8fd0\u884c Hyperlane \u534f\u8bae\u7684\u4f20\u8f93\u5c42\u3002\u6839\u636e\u63a5\u6536\u65b9\u6307\u5b9a\u7684 ",(0,s.jsx)(r.a,{href:"../../reference/ISM/specify-your-ISM",children:"\u8de8\u94fe\u5b89\u5168\u6a21\u5757 (ISM)"}),"\uff0c\u53ef\u80fd\u9700\u8981\u5143\u6570\u636e\u6765\u8bc1\u660e\u6d88\u606f\u7684\u5b89\u5168\u6027\uff0c\u4f8b\u5982 ",(0,s.jsx)(r.a,{href:"/website/docs/protocol/ISM/multisig-ISM",children:"\u591a\u91cd\u7b7e\u540d ISM"})," \u7684\u9a8c\u8bc1\u8005\u7b7e\u540d\u3001\u9ed8\u514b\u5c14\u8bc1\u660e\u3001\u96f6\u77e5\u8bc6\u8bc1\u660e\u7b49\u3002\u56e0\u6b64\uff0c\u5728\u5c1d\u8bd5\u4ea4\u4ed8\u4e4b\u524d\uff0cRelayer \u4f1a\u6536\u96c6\u4efb\u4f55\u7279\u5b9a\u4e8e ISM \u7684\u5143\u6570\u636e\u3002"]}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsx)(r.p,{children:"Relayer \u4f1a\u5b9a\u671f\u91cd\u8bd5\u5143\u6570\u636e\u6536\u96c6\u548c\u6d88\u606f\u63d0\u4ea4\u3002\u8fd9\u5bf9\u4e8e\u63d0\u9ad8\u5bf9\u4e2d\u65ad\u7684\u6062\u590d\u80fd\u529b\u975e\u5e38\u91cd\u8981\uff0c\u4f8b\u5982\uff1a\u672a\u652f\u4ed8\u4ea4\u4ed8\u7684\u71c3\u6599\u8d39\u7528\u3001Relayer \u4f59\u989d\u4e0d\u8db3\u3001\u76ee\u6807\u94fe\u4e0a\u7684\u4ea4\u6613\u8d39\u7528\u4e34\u65f6\u6fc0\u589e\u3001\u9a8c\u8bc1\u8005\u505c\u673a\u7b49\u3002"})}),"\n",(0,s.jsx)(r.h3,{id:"relayer-\u6fc0\u52b1",children:"Relayer \u6fc0\u52b1"}),"\n",(0,s.jsxs)(r.p,{children:["\u6d88\u606f\u53d1\u9001\u8005\u5728\u6e90\u94fe\u4e0a\u652f\u4ed8\u4ea4\u4ed8\u8d39\u7528\uff0cRelayer \u64cd\u4f5c\u5458\u6709\u8d23\u4efb\u5c06\u6536\u5165\u91cd\u65b0\u5e73\u8861\u5230\u76ee\u6807\u94fe\u8d26\u6237\uff0c\u4ee5\u4fbf\u59cb\u7ec8\u80fd\u591f\u652f\u4ed8\u4ea4\u4ed8\u4ea4\u6613\u8d39\u7528\u3002Relayer \u4e0d\u4f1a\u4ece\u534f\u8bae\u4e2d\u83b7\u5f97\u76f4\u63a5\u7684\u4ee3\u5e01\u6fc0\u52b1\uff0c\u4f46\u64cd\u4f5c\u5458\u53ef\u4ee5\u914d\u7f6e\u4ed6\u4eec\u7684\u8d39\u7528\u7ed3\u6784\u4ee5\u63d0\u4f9b\u5176\u5173\u952e\u670d\u52a1\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",(0,s.jsx)(r.a,{href:"/website/docs/protocol/interchain-gas-payment",children:"\u8de8\u94fe\u71c3\u6599\u652f\u4ed8 (IGPs)"}),"\u3002"]}),"\n",(0,s.jsx)(r.h3,{id:"\u64cd\u4f5c-relayer",children:"\u64cd\u4f5c Relayer"}),"\n",(0,s.jsx)(r.p,{children:"Relayer \u53ef\u4ee5\u8f7b\u677e\u914d\u7f6e\u4ed6\u4eec\u5e0c\u671b\u5904\u7406\u7684\u6d88\u606f\u3002\u76ee\u524d\uff0cRelayer \u5c06\u652f\u6301\uff1a"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u53d1\u9001\u8005/\u63a5\u6536\u8005\u767d\u540d\u5355\u3002"}),"\n",(0,s.jsx)(r.li,{children:"\u53d1\u9001\u8005/\u63a5\u6536\u8005\u9ed1\u540d\u5355\u3002"}),"\n",(0,s.jsxs)(r.li,{children:["\u5728\u6e90\u94fe\u4e0a\u63a5\u53d7 ",(0,s.jsx)(r.a,{href:"/website/docs/reference/messaging/send#quote-dispatch",children:"\u652f\u4ed8"})," \u4ee5\u5904\u7406\u76ee\u6807\u94fe\u4e0a\u7684\u6d88\u606f\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u867d\u7136\u8fd0\u884c\u662f\u65e0\u6743\u9650\u7684\uff0c\u4f46\u6d88\u606f\u53d1\u9001\u8005\u9700\u8981\u9009\u62e9\u652f\u4ed8\u7ed9\u54ea\u4e2a Relayer \u4ee5\u8fdb\u884c\u4ea4\u4ed8\u3002",(0,s.jsx)(r.a,{href:"/website/docs/protocol/mailbox",children:"\u90ae\u7bb1"})," \u96c6\u6210\u901a\u5e38\u9ed8\u8ba4\u59cb\u7ec8\u652f\u4ed8\u7ed9\u540c\u4e00\u4e2a Relayer\uff0c\u4f46\u6d88\u606f\u53d1\u9001\u8005\u53ef\u4ee5\u9009\u62e9\u9000\u51fa\u3002\u4e3a\u4e86\u65b9\u4fbf\u8d77\u89c1\uff0cHyperlane \u5c06\u8fd0\u884c\u4e00\u4e2a\u5f00\u6e90\u4e14\u53ef\u914d\u7f6e\u7684 Relayer \u4ee3\u7406\uff0c\u4f5c\u4e3a Rust \u4e8c\u8fdb\u5236\u6587\u4ef6\u5b9e\u73b0\u3002\u5982\u679c\u60a8\u60f3\u8fd0\u884c\u81ea\u5df1\u7684 Relayer\uff0c\u6211\u4eec\u5df2\u7ecf\u5f00\u6e90\u4e86 ",(0,s.jsx)(r.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/tree/main/rust/main/agents/relayer",children:"\u4e8c\u8fdb\u5236\u6587\u4ef6"}),"\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u8fd0\u884c\u60a8\u81ea\u5df1\u7684 Relayer \u6d89\u53ca\u90e8\u7f72\u4e00\u4e2a ",(0,s.jsx)(r.a,{href:"/website/docs/protocol/interchain-gas-payment",children:"IGP \u5408\u7ea6"}),"\uff0c\u5e76\u5728\u5176\u4e2d\u7ef4\u62a4\u4ee3\u5e01\u6c47\u7387\u548c\u71c3\u6599\u4ef7\u683c\uff0c\u4ee5\u51c6\u786e\u6536\u53d6\u6d88\u606f\u4ea4\u4ed8\u8d39\u7528\u3002"]}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["\u60f3\u8981\u8fd0\u884c Relayer\uff1f\u8bf7\u9075\u5faa ",(0,s.jsx)(r.a,{href:"/website/docs/operate/relayer/run-relayer",children:"Relayer"})," \u6307\u5357\u3002"]})}),"\n",(0,s.jsx)(r.h2,{id:"\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f",children:"\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f"}),"\n",(0,s.jsx)(r.p,{children:"Relayer \u7531\u4e24\u4e2a\u4e3b\u8981\u4efb\u52a1\u7ec4\u6210\uff1a\u6bcf\u4e2a\u6e90\u94fe\u7684\u7d22\u5f15\u5668\u548c\u6bcf\u4e2a\u76ee\u6807\u94fe\u7684\u63d0\u4ea4\u8005\u3002"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"\u9ad8\u5c42\u6b21\u7684 Relayer \u67b6\u6784",src:n(7494).A+"",width:"1370",height:"410"})}),"\n",(0,s.jsx)(r.h3,{id:"\u7d22\u5f15\u5668",children:"\u7d22\u5f15\u5668"}),"\n",(0,s.jsxs)(r.p,{children:["\u901a\u8fc7\u4f7f\u7528 RPC \u67e5\u8be2 ",(0,s.jsx)(r.a,{href:"/website/docs/protocol/mailbox",children:"\u90ae\u7bb1"})," \u5408\u7ea6\u4e8b\u4ef6\uff0c\u7d22\u5f15\u65b0\u6d88\u606f\u548c\u5386\u53f2\u6d88\u606f\u3002",(0,s.jsx)(r.a,{href:"/website/docs/protocol/interchain-gas-payment",children:"\u71c3\u6599\u652f\u4ed8"})," \u4e5f\u88ab\u7d22\u5f15\uff0c\u4ee5\u786e\u8ba4\u53d1\u9001\u8005\u5df2\u652f\u4ed8\u4ea4\u4ed8\u8d39\u7528\uff0c\u67d0\u4e9b ISM \u4f7f\u7528\u989d\u5916\u7684\u6e90\u94fe\u6570\u636e\u3002\u8fd9\u79cd\u60c5\u51b5\u9002\u7528\u4e8e\u591a\u91cd\u7b7e\u540d ISM\uff0c\u5b83\u4f9d\u8d56\u4e8e\u9ed8\u514b\u5c14\u6811\u94a9\u5408\u7ea6\u6765\u544a\u77e5 Relayer \u54ea\u4e2a\u9a8c\u8bc1\u8005\u7b7e\u540d\u5bf9\u5e94\u4e8e\u54ea\u4e2a\u6d88\u606f\u3002\u6bcf\u79cd\u4e8b\u4ef6\u7c7b\u578b\uff08\u6d88\u606f\u3001IGP\u3001\u9ed8\u514b\u5c14\u6811\u63d2\u5165\uff09\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a\u72ec\u7acb\u7684\u7d22\u5f15\u4efb\u52a1\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"\u7d22\u5f15\u5668\u5c06\u6570\u636e\u5199\u5165\u672c\u5730\u6570\u636e\u5e93\uff08RocksDB\uff09\u4f5c\u4e3a\u7f13\u5b58\u624b\u6bb5\uff0c\u5e76\u4e0e\u63d0\u4ea4\u8005\u4efb\u52a1\u8fdb\u884c\u901a\u4fe1\u2014\u2014\u540e\u8005\u5b9a\u671f\u8f6e\u8be2\u6570\u636e\u5e93\u4ee5\u68c0\u67e5\u662f\u5426\u6709\u65b0\u6d88\u606f\u88ab\u8c03\u5ea6\u3002"}),"\n",(0,s.jsxs)(r.p,{children:["Relayer \u4f18\u5148\u5904\u7406\u65b0\u6d88\u606f\u800c\u975e\u65e7\u6d88\u606f\uff0c\u5047\u8bbe\u65e7\u6d88\u606f\u66f4\u53ef\u80fd\u5df2\u7ecf\u88ab\u4ea4\u4ed8\u3002\u8fd9\u610f\u5473\u7740\u5728\uff08\u91cd\u65b0\uff09\u542f\u52a8\u65f6\uff0c\u4f1a\u521b\u5efa\u4e24\u4e2a\u6307\u9488\uff1a\u4e00\u4e2a\u5411\u524d\uff0c\u4e00\u4e2a\u5411\u540e\uff0c\u4e24\u4e2a\u6307\u9488\u90fd\u521d\u59cb\u5316\u4e3a\u533a\u5757\u94fe\u7684\u6700\u65b0\u72b6\u6001\uff0c\u5e76\u4f7f\u7528\u6d88\u606f\u7684\u5355\u8c03\u9012\u589e\u7684 ",(0,s.jsx)(r.code,{children:"nonce"})," \u5b57\u6bb5\u8fdb\u884c\u8fed\u4ee3\u3002\u5bf9\u5176\u4ed6\u4e8b\u4ef6\u7684\u7d22\u5f15\u4e5f\u4f7f\u7528\u7c7b\u4f3c\u7684\u65b9\u6cd5\uff0c\u4f46\u67d0\u4e9b\u4e8b\u4ef6\u7f3a\u4e4f\u5e8f\u5217\u53f7\uff0c\u5982\u679c\u6536\u5230\u9519\u8bef\u7684 RPC \u54cd\u5e94\uff0c\u53ef\u80fd\u4f1a\u88ab\u9057\u6f0f\u2014\u2014\u8fd9\u79cd\u60c5\u51b5\u975e\u5e38\u5e38\u89c1\u3002\u56e0\u6b64\uff0c\u6d88\u606f\u7d22\u5f15\u4efb\u52a1\u4f1a\u5c06\u627e\u5230\u4e8b\u4ef6\u7684\u4ea4\u6613 ID \u53d1\u9001\u7ed9\u5176\u4ed6\u7d22\u5f15\u4efb\u52a1\uff0c\u786e\u4fdd\u53ea\u8981\u5728\u4e0e ",(0,s.jsx)(r.code,{children:"Mailbox.dispatch()"})," \u8c03\u7528\u7684\u540c\u4e00\u4ea4\u6613\u4e2d\u53d1\u751f\uff0c\u5c31\u4e0d\u4f1a\u9057\u6f0f\u4efb\u4f55 Hyperlane \u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsx)(r.h3,{id:"\u63d0\u4ea4\u8005",children:"\u63d0\u4ea4\u8005"}),"\n",(0,s.jsx)(r.p,{children:"\u6d88\u606f\u5728\u63d0\u4ea4\u8005\u4e2d\u7ecf\u5386\u56db\u4e2a\u9636\u6bb5\uff0c\u8fd9\u4e9b\u9636\u6bb5\u4f5c\u4e3a\u72ec\u7acb\u4efb\u52a1\u751f\u6210\uff0c\u5177\u4f53\u63cf\u8ff0\u5982\u4e0b\u3002"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"\u63d0\u4ea4\u8005\u4efb\u52a1"}),(0,s.jsx)("th",{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"\u6d88\u606f\u5904\u7406\u5668"}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"\u8f6e\u8be2\u672c\u5730\u6570\u636e\u5e93\u4ee5\u68c0\u67e5\u662f\u5426\u6709\u672a\u4ea4\u4ed8\u7684\u6d88\u606f\uff0c\u5e76\u5c06\u5176\u63a8\u9001\u5230\u51c6\u5907\u6b65\u9aa4\u7684\u961f\u5217\u4e2d\u3002"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"\u51c6\u5907\u4efb\u52a1"}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"\u4ece\u961f\u5217\u4e2d\u5f39\u51fa\u6d88\u606f\uff0c\u786e\u4fdd\u5df2\u652f\u4ed8\u71c3\u6599\uff0c\u83b7\u53d6\u4efb\u4f55\u5143\u6570\u636e\u5e76\u6a21\u62df\u6d88\u606f\u4ea4\u4ed8\u4ea4\u6613\u3002\u5982\u679c\u6a21\u62df\u6210\u529f\uff0c\u6d88\u606f\u5c06\u88ab\u63a8\u9001\u5230\u63d0\u4ea4\u6b65\u9aa4\u7684\u961f\u5217\u4e2d\u3002\u5426\u5219\uff0c\u6d88\u606f\u5c06\u88ab\u63a8\u56de\u51c6\u5907\u961f\u5217\u3002"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"\u63d0\u4ea4\u4efb\u52a1"}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"\u4ece\u961f\u5217\u4e2d\u5f39\u51fa\u6d88\u606f\uff0c\u5e76\u5728\u94fe\u4e0a\u53d1\u9001\u4ea4\u4ed8\u4ea4\u6613\u3002\u5c3d\u53ef\u80fd\u6279\u91cf\u5904\u7406\u4ea4\u4ed8\u3002\u5982\u679c\u5728\u5e7f\u64ad\u4ea4\u6613\u65f6\u6ca1\u6709\u9519\u8bef\uff0c\u6d88\u606f\u5c06\u88ab\u63a8\u9001\u5230\u786e\u8ba4\u6b65\u9aa4\u7684\u961f\u5217\u4e2d\u3002\u5426\u5219\uff0c\u6d88\u606f\u5c06\u88ab\u63a8\u56de\u51c6\u5907\u961f\u5217\u3002"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"\u786e\u8ba4\u4efb\u52a1"}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"\u7b49\u5f85\u6700\u7ec8\u786e\u8ba4\uff1b\u5982\u679c\u53d1\u751f\u94fe\u91cd\u7ec4\u6216\u4ea4\u4ed8\u4ea4\u6613\u56de\u6eda\uff0c\u6d88\u606f\u5c06\u88ab\u63a8\u56de\u51c6\u5907\u961f\u5217\u3002"})})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["\u901a\u8fc7\u5728\u76ee\u6807\u94fe\u4e0a\u8c03\u7528 ",(0,s.jsx)(r.code,{children:"Mailbox.process()"}),"\uff0c\u5c06\u6d88\u606f\u4ea4\u4ed8\u7ed9\u63a5\u6536\u8005\uff0c\u5e76\u9644\u4e0a\u4e0a\u8ff0\u5143\u6570\u636e\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"\u6d88\u606f\u7684\u91cd\u8bd5\u8ba1\u6570\u51b3\u5b9a\u4e86\u5176\u4e0b\u4e00\u6b21\u4ea4\u4ed8\u5c1d\u8bd5\uff0c\u91c7\u7528\u6307\u6570\u9000\u907f\u7b56\u7565\u3002\u76ee\u524d\uff0c\u6ca1\u6709\u56fa\u5b9a\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\uff0c\u8d85\u8fc7\u8be5\u6b21\u6570\u540e\uff0cRelayer \u5c06\u505c\u6b62\u5c1d\u8bd5\u5904\u7406\u6d88\u606f\u3002\u7136\u800c\uff0c\u8fd9\u5e76\u4e0d\u4fdd\u8bc1\u4f1a\u8fdb\u884c\u65e0\u9650\u6b21\u91cd\u8bd5\uff0c\u64cd\u4f5c\u5458\u4e0d\u5e94\u5c06\u5176\u89c6\u4e3a\u670d\u52a1\u6c34\u5e73\u534f\u8bae (SLA)\u3002"})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);