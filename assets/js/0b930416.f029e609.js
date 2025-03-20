"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[1740],{28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var s=r(96540);const l={},i=s.createContext(l);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:n},e.children)}},49013:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>t,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"guides/deploy-svm-warp-route","title":"\u90e8\u7f72 SVM Warp \u8def\u7531","description":"\u7ed3\u679c","source":"@site/docs/guides/deploy-svm-warp-route.mdx","sourceDirName":"guides","slug":"/guides/deploy-svm-warp-route","permalink":"/docs/guides/deploy-svm-warp-route","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/guides/deploy-svm-warp-route.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"getstartedSidebar","previous":{"title":"\u90e8\u7f72xERC20 Warp\u8def\u7531","permalink":"/docs/guides/xerc20-warp-route-guide"},"next":{"title":"\u90e8\u7f72EVM <> SVM Warp\u8def\u7531","permalink":"/docs/guides/deploy-evm-svm-warp-route"}}');var l=r(74848),i=r(28453);const a={},c="\u90e8\u7f72 SVM Warp \u8def\u7531",o={},d=[{value:"\u7ed3\u679c",id:"\u7ed3\u679c",level:2},{value:"Warp \u8def\u7531\u7c7b\u578b",id:"warp-\u8def\u7531\u7c7b\u578b",level:2},{value:"\u5f00\u59cb\u4e4b\u524d",id:"\u5f00\u59cb\u4e4b\u524d",level:2},{value:"\u6f14\u7ec3\uff1a\u90e8\u7f72 Sealevel Warp \u8def\u7531",id:"\u6f14\u7ec3\u90e8\u7f72-sealevel-warp-\u8def\u7531",level:2},{value:"\u7b2c 1 \u6b65\uff1a\u6784\u5efa Warp \u8def\u7531\u7a0b\u5e8f",id:"\u7b2c-1-\u6b65\u6784\u5efa-warp-\u8def\u7531\u7a0b\u5e8f",level:3},{value:"\u7b2c 2 \u6b65\uff1a\u51c6\u5907\u90e8\u7f72",id:"\u7b2c-2-\u6b65\u51c6\u5907\u90e8\u7f72",level:3},{value:"\u7b2c 3 \u6b65\uff1a\u914d\u7f6e Warp \u8def\u7531",id:"\u7b2c-3-\u6b65\u914d\u7f6e-warp-\u8def\u7531",level:3},{value:"\u7b2c 4 \u6b65\uff1a\u90e8\u7f72 Warp \u8def\u7531",id:"\u7b2c-4-\u6b65\u90e8\u7f72-warp-\u8def\u7531",level:3},{value:"\u6545\u969c\u6392\u9664\u63d0\u793a",id:"\u6545\u969c\u6392\u9664\u63d0\u793a",level:4},{value:"\u4e0e Warp \u8def\u7531\u4ea4\u4e92",id:"\u4e0e-warp-\u8def\u7531\u4ea4\u4e92",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u90e8\u7f72-svm-warp-\u8def\u7531",children:"\u90e8\u7f72 SVM Warp \u8def\u7531"})}),"\n",(0,l.jsx)(n.h2,{id:"\u7ed3\u679c",children:"\u7ed3\u679c"}),"\n",(0,l.jsxs)(n.p,{children:["\u60a8\u5c06\u4e3a\u60a8\u9009\u62e9\u7684\u8d44\u4ea7\u5728\u4e24\u4e2a SVM \u94fe\u4e4b\u95f4\u90e8\u7f72\u4e00\u4e2a Warp \u8def\u7531\uff0c\u5e76\u4e14\u6709\u4e00\u4e2a\u73b0\u6709\u7684 Hyperlane \u6838\u5fc3\u90e8\u7f72\u3002\u5728\u64b0\u5199\u672c\u6587\u65f6\uff0c\u652f\u6301\u7684 SVM \u94fe\u662f Solana \u548c Eclipse\uff0c\u4f46\u60a8\u53ef\u4ee5\u5728 ",(0,l.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/tree/main/rust/sealevel/environments/mainnet3",children:"\u8fd9\u91cc"})," \u627e\u5230\u6700\u65b0\u7684\u5217\u8868\uff08\u6240\u6709\u94fe\u76ee\u5f55\u540d\u79f0\u90fd\u6709\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"core"})," \u5b50\u76ee\u5f55\uff09\u3002"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["\u5982\u679c\u60a8\u5e0c\u671b\u60a8\u7684 SVM rollup \u88ab\u652f\u6301\u4e3a\u6838\u5fc3 Hyperlane \u90e8\u7f72\uff0c\u6216\u8005\u5e0c\u671b\u8bbe\u7f6e EVM \u5230 SVM \u7684 Warp \u8def\u7531\uff0c\u8bf7 ",(0,l.jsx)(n.a,{href:"https://forms.gle/KyRTaWvo4XNmNvrq6",children:"\u8054\u7cfb\u6211\u4eec"}),"!"]})})}),"\n",(0,l.jsx)(n.h2,{id:"warp-\u8def\u7531\u7c7b\u578b",children:"Warp \u8def\u7531\u7c7b\u578b"}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528\u7684\u4ee3\u5e01\u7c7b\u578b\u51b3\u5b9a\u4e86 Warp \u8def\u7531\u7c7b\u578b\uff0c\u56e0\u6b64\u4e86\u89e3\u53ef\u7528\u7684\u4e0d\u540c Warp \u8def\u7531\u5408\u7ea6\u975e\u5e38\u91cd\u8981\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://hyperlanedevcn.github.io/website/docs/protocol/warp-routes/warp-routes-types#native-token-warp-routes",children:"\u539f\u751f"}),": \u5904\u7406\u539f\u751f Gas \u4ee3\u5e01\u7684\u8f6c\u79fb\uff08\u4f8b\u5982 Solana \u4e0a\u7684 SOL\uff0cEclipse \u4e0a\u7684 ETH\uff09\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://hyperlanedevcn.github.io/website/docs/protocol/warp-routes/warp-routes-types#collateral-backed-erc20-warp-routes",children:"\u62b5\u62bc\u54c1"}),": \u5904\u7406\u73b0\u6709\u7684 ",(0,l.jsx)(n.a,{href:"https://spl.solana.com/token-2022",children:"Token-2022"})," \u6216 ",(0,l.jsx)(n.a,{href:"https://spl.solana.com/token",children:"Token"})," \u4ee3\u5e01\u7684\u8f6c\u79fb\uff08SVM \u4e0a\u7684 ERC20 \u7b49\u4ef7\u7269\uff09\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://hyperlanedevcn.github.io/website/docs/protocol/warp-routes/warp-routes-types#synthetic-erc20-warp-routes",children:"\u5408\u6210"}),": \u5904\u7406\u5408\u6210\u4ee3\u5e01\uff0c\u8fd9\u4e9b\u4ee3\u5e01\u5728\u901a\u8fc7 Warp \u8def\u7531\u8f6c\u79fb\u65f6\u88ab\u94f8\u9020\u548c\u9500\u6bc1\uff0c\u4ee5\u8868\u793a\u6765\u81ea\u5176\u6e90\u94fe\u7684\u4ee3\u5e01\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u672c\u6307\u5357\u4e2d\u7684\u5de5\u5177\u5c06\u90e8\u7f72\u4e00\u4e2a\u65b0\u7684 Token-2022 \u4ee3\u5e01\uff0c\u5176\u6743\u9650\u8bbe\u7f6e\u4e3a\u90e8\u7f72\u8005\u5bc6\u94a5\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f\u5e38\u89c1\u7684 Warp \u8def\u7531\u8bbe\u7f6e\uff08\u60a8\u53ef\u4ee5\u5728 ",(0,l.jsx)(n.a,{href:"https://hyperlanedevcn.github.io/website/docs/protocol/warp-routes/warp-routes-example-usage",children:"\u8fd9\u91cc"})," \u627e\u5230\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff09\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u539f\u751f\u5230\u5408\u6210"}),": \u5728\u6e90\u94fe\u4e0a\u9501\u5b9a\u539f\u751f\u4ee3\u5e01\uff0c\u4ee5\u5728\u76ee\u6807\u94fe\u4e0a\u94f8\u9020\u5408\u6210\u4ee3\u5e01\u3002\u8f6c\u79fb\u56de\u65f6\uff0c\u5408\u6210\u4ee3\u5e01\u88ab\u9500\u6bc1\u3002\u8fd9\u662f Solana \u548c Eclipse \u4e4b\u95f4\u7684 SOL Warp \u8def\u7531\u7684\u4e00\u4e2a\u793a\u4f8b\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u62b5\u62bc\u54c1\u5230\u5408\u6210"}),": \u5728\u6e90\u94fe\u4e0a\u9501\u5b9a\u62b5\u62bc\u4ee3\u5e01\uff0c\u4ee5\u5728\u76ee\u6807\u94fe\u4e0a\u94f8\u9020\u5408\u6210\u4ee3\u5e01\u3002\u8f6c\u79fb\u56de\u65f6\uff0c\u5408\u6210\u4ee3\u5e01\u88ab\u9500\u6bc1\u3002\u8fd9\u662f Solana \u548c Eclipse \u4e4b\u95f4\u7684 USDC Warp \u8def\u7531\u7684\u4e00\u4e2a\u793a\u4f8b\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5176\u4ed6: ",(0,l.jsx)(n.strong,{children:"\u539f\u751f\u5230\u539f\u751f"}),"\uff08\u4f8b\u5982 Optimism \u548c Arbitrum \u4e4b\u95f4\u7684 ETH\uff09\uff0c\u4ee5\u53ca ",(0,l.jsx)(n.strong,{children:"\u62b5\u62bc\u54c1\u5230\u62b5\u62bc\u54c1"}),"\uff0c\u5982\u679c\u4ee3\u5e01\u5728\u6e90\u94fe\u548c\u76ee\u6807\u94fe\u4e0a\u90fd\u5df2\u5b58\u5728\uff0c\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u91cd\u65b0\u5e73\u8861\u6d41\u52a8\u6027\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u8003\u8651\u56e0\u7d20\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5f00\u59cb\u4e4b\u524d",children:"\u5f00\u59cb\u4e4b\u524d"}),"\n",(0,l.jsxs)(n.p,{children:["\u90e8\u7f72 Warp \u8def\u7531\u9700\u8981\u6709\u4e00\u4e2a\u6838\u5fc3 Hyperlane \u90e8\u7f72\uff0c\u8be5\u90e8\u7f72\u4e0e Hyperlane \u751f\u6001\u7cfb\u7edf\u7684\u5176\u4f59\u90e8\u5206\u8fde\u63a5\uff08\u5373\uff0c\u79ef\u6781\u4e2d\u7ee7\u548c\u4fdd\u62a4\uff09\u3002\u672c\u6307\u5357\u4e2d\u4f7f\u7528\u7684\u6838\u5fc3 Hyperlane \u90e8\u7f72\u662f Solana (",(0,l.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/rust/sealevel/environments/mainnet3/solanamainnet/core/program-ids.json",children:"\u6838\u5fc3\u5de5\u4ef6"}),") \u548c Eclipse (",(0,l.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/rust/sealevel/environments/mainnet3/eclipsemainnet/core/program-ids.json",children:"\u6838\u5fc3\u5de5\u4ef6"}),")\u3002\u60a8\u53ef\u80fd\u9700\u8981\u5728\u6574\u4e2a\u6307\u5357\u4e2d\u53c2\u8003\u8fd9\u4e9b\u6838\u5fc3\u5de5\u4ef6\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6f14\u7ec3\u90e8\u7f72-sealevel-warp-\u8def\u7531",children:"\u6f14\u7ec3\uff1a\u90e8\u7f72 Sealevel Warp \u8def\u7531"}),"\n",(0,l.jsx)(n.h3,{id:"\u7b2c-1-\u6b65\u6784\u5efa-warp-\u8def\u7531\u7a0b\u5e8f",children:"\u7b2c 1 \u6b65\uff1a\u6784\u5efa Warp \u8def\u7531\u7a0b\u5e8f"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5b89\u88c5 ",(0,l.jsx)(n.code,{children:"solana-cli 1.14.20"})," \u4ee5\u6784\u5efa Warp \u8def\u7531\u7a0b\u5e8f\u3002\u8bf7\u6ce8\u610f\uff0c\u60a8 ",(0,l.jsx)(n.strong,{children:"\u5fc5\u987b"})," \u4f7f\u7528\u6b64\u7248\u672c\uff0c\u5426\u5219\u90e8\u7f72\u53ef\u80fd\u4f1a\u5931\u8d25\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'sh -c "$(curl -sSfL https://release.solana.com/v1.14.20/install)"\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u514b\u9686 ",(0,l.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo",children:"hyperlane-monorepo"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/hyperlane-xyz/hyperlane-monorepo\ncd hyperlane-monorepo/rust/sealevel/programs\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728\u60a8\u7684\u673a\u5668\u4e0a\u6784\u5efa Warp \u8def\u7531\u7a0b\u5e8f"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6784\u5efa ",(0,l.jsx)(n.strong,{children:"Token"})," \u7a0b\u5e8f\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cd hyperlane-sealevel-token\ncargo build-sbf\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6784\u5efa ",(0,l.jsx)(n.strong,{children:"Token Collateral"})," \u7a0b\u5e8f\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cd hyperlane-sealevel-token-collateral\ncargo build-sbf\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6784\u5efa ",(0,l.jsx)(n.strong,{children:"Token Native"})," \u7a0b\u5e8f\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cd hyperlane-sealevel-token-native\ncargo build-sbf\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8fd9\u4e9b\u6b65\u9aa4 ",(0,l.jsx)(n.strong,{children:"\u7f16\u8bd1 Solana \u7a0b\u5e8f"}),"\uff0c\u8fd9\u662f\u90e8\u7f72\u6240\u9700\u7684\u3002\n\u8981\u9a8c\u8bc1\u6784\u5efa\u8f93\u51fa\uff0c\u8bf7\u68c0\u67e5 ",(0,l.jsx)(n.code,{children:"hyperlane-monorepo/rust/sealevel/target/deploy"})," \u76ee\u5f55\u4e2d\u7684 ",(0,l.jsx)(n.code,{children:".so"})," \u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u7b2c-2-\u6b65\u51c6\u5907\u90e8\u7f72",children:"\u7b2c 2 \u6b65\uff1a\u51c6\u5907\u90e8\u7f72"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u8981\u90e8\u7f72\u5408\u7ea6\uff0c\u8bf7\u5b89\u88c5 ",(0,l.jsx)(n.code,{children:"solana-cli 1.18.18"}),"\u3002\u8bf7\u6ce8\u610f\uff0c\u60a8 ",(0,l.jsx)(n.strong,{children:"\u5fc5\u987b"})," \u4f7f\u7528\u6b64\u7248\u672c\uff0c\u5426\u5219\u90e8\u7f72\u53ef\u80fd\u4f1a\u5931\u8d25\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'sh -c "$(curl -sSfL https://release.solana.com/v1.18.18/install)"\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5b89\u88c5\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u9a8c\u8bc1\u7248\u672c\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"solana --version\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a ",(0,l.jsx)(n.strong,{children:"Solana \u5bc6\u94a5\u5bf9"}),"\u3002\u6b64\u5bc6\u94a5\u7528\u4e8e\u652f\u4ed8\u90e8\u7f72\u8d39\u7528\uff0c\u5e76\u5c06\u662f\u5df2\u90e8\u7f72\u7a0b\u5e8f\u7684\u6240\u6709\u8005\u3002\u5982\u679c\u60a8\u613f\u610f\uff0c\u53ef\u4ee5\u4f7f\u7528\u73b0\u6709\u7684\u5df2\u8d44\u52a9\u5bc6\u94a5\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"solana-keygen new --outfile ./warp-route-deployer-key.json\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8981\u8bfb\u53d6\u60a8\u521a\u521b\u5efa\u7684\u516c\u94a5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"solana-keygen pubkey ./warp-route-deployer-key.json\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u68c0\u67e5\u4f59\u989d\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"solana balance --keypair ./warp-route-deployer-key.json\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u7b2c-3-\u6b65\u914d\u7f6e-warp-\u8def\u7531",children:"\u7b2c 3 \u6b65\uff1a\u914d\u7f6e Warp \u8def\u7531"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"rust/sealevel/environments/mainnet3/warp-routes"})," \u4e2d\u4e3a\u60a8\u7684 Warp \u8def\u7531\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\uff0c\u540d\u79f0\u4e3a\u60a8\u5e0c\u671b\u60a8\u7684 Warp \u8def\u7531\u90e8\u7f72\u7684\u540d\u79f0\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mkdir -p rust/sealevel/environments/mainnet3/warp-routes/<YOUR-WARP-ROUTE-NAME>\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u73b0\u6709\u7684 Solana \u548c Eclipse \u4e4b\u95f4\u7684 SOL Warp \u8def\u7531\u4f4d\u4e8e ",(0,l.jsx)(n.code,{children:"rust/sealevel/environments/mainnet3/warp-routes/eclipsesol"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5728\u60a8\u521a\u521b\u5efa\u7684\u76ee\u5f55\u4e2d\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,l.jsx)(n.code,{children:"token-config.json"})," \u7684\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6839\u636e ",(0,l.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/a5afd20f3ae69ccb3289d845d44b99dbdcde2c62/rust/sealevel/client/src/warp_route.rs#L114",children:"TokenConfig"})," Rust \u7ed3\u6784\u7684 ",(0,l.jsx)(n.code,{children:"serde_json"})," \u5e8f\u5217\u5316\u914d\u7f6e\u60a8\u7684 Warp \u8def\u7531\u53c2\u6570\u3002\u8981\u4e3a ",(0,l.jsx)(n.code,{children:"interchainGasPaymaster"})," \u8bbe\u7f6e\u7684\u503c\uff0c\u53ef\u4ee5\u5728 ",(0,l.jsx)(n.a,{href:"#before-you-start",children:"\u6838\u5fc3\u90e8\u7f72\u5de5\u4ef6"})," \u4e2d\u627e\u5230\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4e0b\u9762\u7684\u793a\u4f8b\u663e\u793a\u4e86\u4e00\u4e2a\u6d4b\u8bd5\u7f51 ",(0,l.jsx)(n.strong,{children:"\u539f\u751f\u5230\u5408\u6210 Warp \u8def\u7531"}),"\uff0c\u5b83\u5c06 SOL \u4ece Solana \u8f6c\u79fb\u5e76\u5728 Eclipse \u4e0a\u94f8\u9020\u5408\u6210 SOL\u3002\u60a8\u8fd8\u53ef\u4ee5\u67e5\u770b ",(0,l.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/a5afd20f3ae69ccb3289d845d44b99dbdcde2c62/rust/sealevel/environments/mainnet3/warp-routes/eclipsesol/token-config.json",children:"\u6b64\u914d\u7f6e"})," \u7684\u751f\u4ea7 SOL Warp \u8def\u7531\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "solanatestnet": {\n        "type": "native",\n        "decimals": 9,\n        "interchainGasPaymaster": "<from core program addresses, choose the overhead igp>"\n    },\n    "eclipsetestnet": {\n        "type": "synthetic",\n        "decimals": 9,\n        "name": "Solana (testnet)",\n        "symbol": "SOL",\n        "uri": "<permalink to the metadata.json file you merged into hyperlane-registry>"\n        "interchainGasPaymaster": "<from core program addresses, choose the overhead igp>"\n    }\n}\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\uff08\u53ef\u9009\uff09\u5982\u679c\u60a8\u7684 Warp \u8def\u7531\u521b\u5efa\u4e86\u5408\u6210\u4ee3\u5e01\uff0c\u60a8\u53ef\u4ee5\u5411 ",(0,l.jsx)(n.code,{children:"hyperlane-registry"})," \u63d0\u4ea4 PR\uff0c\u4ee5\u4e0e\u6b64\u4ee3\u5e01\u5173\u8054\u5143\u6570\u636e\uff08\u793a\u4f8b PR ",(0,l.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-registry/pull/142",children:"\u5728\u8fd9\u91cc"}),"\uff09\u3002",(0,l.jsx)(n.code,{children:"hyperlane-registry"})," \u8fd8\u4e3a\u60a8\u7684 Warp \u8def\u7531\u5728 Hyperlane \u751f\u6001\u7cfb\u7edf\u4e2d\u63d0\u4f9b\u53ef\u89c1\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u7b2c-4-\u6b65\u90e8\u7f72-warp-\u8def\u7531",children:"\u7b2c 4 \u6b65\uff1a\u90e8\u7f72 Warp \u8def\u7531"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728\u90e8\u7f72\u5230\u7684\u4e24\u4e2a\u7f51\u7edc\u4e0a\u4e3a\u65b0\u7684\u5bc6\u94a5\u5bf9\u63d0\u4f9b\u8d44\u91d1\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u516c\u94a5\u5728 SVM \u7f51\u7edc\u4e4b\u95f4\u5e94\u8be5\u662f\u76f8\u540c\u7684\uff0c\u4f46\u8bf7\u901a\u8fc7\u52a0\u8f7d\u79c1\u94a5\u5230\u6bcf\u4e2a\u94fe\u63a8\u8350\u7684\u94b1\u5305\u4e2d\u8fdb\u884c\u53cc\u91cd\u68c0\u67e5\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u8d44\u91d1\u5e94\u8db3\u4ee5\u8986\u76d6\u4e0e Warp \u8def\u7531\u76f8\u5173\u7684\u6240\u6709\u8d26\u6237\u7684\u79df\u91d1\uff0c\u652f\u4ed8\u4ea4\u6613\u8d39\u7528\uff0c\u5e76\u4e3a ",(0,l.jsx)(n.a,{href:"https://www.alchemy.com/overviews/associated-token-account",children:"ATA"})," \u4ed8\u6b3e\u8d26\u6237\u63d0\u4f9b\u8d44\u91d1\uff08\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u4e0b\u6587\uff09\u3002\u4f5c\u4e3a\u53c2\u8003\uff0c\u4ece\u4e00\u4e2a Hyperlane Warp \u8def\u7531\u8d26\u6237\u89c2\u5bdf\u5230\u7684\u79df\u91d1\u4e3a ",(0,l.jsx)(n.code,{children:"2.35 SOL"}),"\uff08\u5728 Solana \u4e0a\uff09\u548c ",(0,l.jsx)(n.code,{children:"0.025 ETH"}),"\uff08\u5728 Eclipse \u4e0a\uff09\uff0c\u56e0\u6b64\u6700\u597d\u4e3a\u5bc6\u94a5\u63d0\u4f9b\u81f3\u5c11 ",(0,l.jsx)(n.code,{children:"5 SOL"})," / ",(0,l.jsx)(n.code,{children:"0.05 ETH"})," \u7684\u8d44\u91d1\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"warp-route deploy"})," \u5b50\u547d\u4ee4\u4ece ",(0,l.jsx)(n.code,{children:"rust/sealevel/client"})," \u76ee\u5f55\u90e8\u7f72 Warp \u8def\u7531\uff1a"]}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\u7528\u6cd5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cargo run -- -k ./warp-route-deployer-key.json \\\nwarp-route deploy \\\n--warp-route-name <YOUR-WARP-ROUTE-NAME> \\\n--environment mainnet3 \\\n--environments-dir ../environments \\\n--built-so-dir ../target/deploy \\\n--token-config-file ../environments/mainnet3/warp-routes/<YOUR-WARP-ROUTE-NAME>/token-config.json \\\n--chain-config-file ../environments/mainnet3/chain-config.json \\\n--ata-payer-funding-amount 10000000\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["CLI \u6807\u5fd7\u6982\u8ff0\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--warp-route-name"}),": \u5e94\u4e0e\u4e4b\u524d\u4e3a Warp \u8def\u7531\u9009\u62e9\u7684\u76ee\u5f55\u540d\u79f0\u5339\u914d"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--environment"}),": \u4fdd\u6301\u4e3a ",(0,l.jsx)(n.code,{children:"mainnet3"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--environments-dir ../environments"}),": \u4fdd\u6301\u4e3a ",(0,l.jsx)(n.code,{children:"../environments"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--built-so-dir"}),": \u4fdd\u6301\u4e3a ",(0,l.jsx)(n.code,{children:"../../target/deploy"}),"\uff0c\u56e0\u4e3a\u5b83\u6307\u5411 Warp \u8def\u7531\u7a0b\u5e8f\u7684\u7f16\u8bd1\u8f93\u51fa\u76ee\u5f55"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--token-config-file"}),": \u6307\u5411\u4e4b\u524d\u521b\u5efa\u7684 ",(0,l.jsx)(n.code,{children:"token-config.json"})," \u6587\u4ef6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--chain-config-file"}),": \u4fdd\u6301\u4e3a ",(0,l.jsx)(n.code,{children:"../environments/mainnet3/chain-config.json"}),"\uff0c\u56e0\u4e3a\u8be5\u6587\u4ef6\u5df2\u9884\u586b\u5145\u6240\u6709 Hyperlane \u652f\u6301\u7684\u94fe\u7684\u94fe\u8bbe\u7f6e"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--ata-payer-funding-amount"}),": \u6b64\u6807\u5fd7\u6307\u5b9a\u5728\u90e8\u7f72\u53d1\u751f\u7684\u4e24\u4e2a\u94fe\u4e0a\u4e3a Warp \u8def\u7531 ",(0,l.jsx)(n.a,{href:"https://www.alchemy.com/overviews/associated-token-account",children:"ATA"})," \u4ed8\u6b3e\u8d26\u6237\u63d0\u4f9b\u591a\u5c11\u8d44\u91d1\u3002\u5b83\u4ee5\u6700\u4f4e\u8d27\u5e01\u9762\u989d\u8868\u793a\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u5728 Solana \u4e0a\u88ab\u89e3\u91ca\u4e3a Lamports\uff0c\u5728 Eclipse \u4e0a\u88ab\u89e3\u91ca\u4e3a Gwei\uff08\u56e0\u4e3a\u5b83\u4f7f\u7528 ETH \u4f5c\u4e3a\u5176\u539f\u751f\u8d27\u5e01\uff09\u3002\u5728\u4e0b\u9762\u7684\u547d\u4ee4\u4e2d\uff0c\u503c ",(0,l.jsx)(n.code,{children:"10000000"})," \u76f8\u5f53\u4e8e ",(0,l.jsx)(n.code,{children:"0.001"})," ETH \u548c ",(0,l.jsx)(n.code,{children:"0.001"})," SOL\uff0c\u8fd9\u5bf9\u4e8e\u521d\u59cb\u90e8\u7f72\u662f\u8db3\u591f\u7684\u3002ATA \u4ed8\u6b3e\u4eba\u53ef\u4ee5\u968f\u65f6\u8865\u5145\uff0c\u56e0\u6b64\u9009\u62e9\u4e00\u4e2a\u5c0f\u503c\u662f\u53ef\u4ee5\u7684\u3002\u4f5c\u4e3a\u53c2\u8003\uff0c\u6bcf\u4e2a Warp \u8def\u7531\u8f6c\u79fb\u7684 ATA \u4ed8\u6b3e\u4eba\u8d39\u7528\u4e3a ",(0,l.jsx)(n.code,{children:"0.000000001 SOL"}),"\uff08\u5728 Solana \u4e0a\uff09\u548c ",(0,l.jsx)(n.code,{children:"0.000021 ETH"}),"\uff08\u5728 Eclipse \u4e0a\uff09\u5728\u76ee\u6807\u94fe\u4e0a\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u7531\u4e8e\u6211\u4eec\u7684\u76ee\u6807\u662f\u5c3d\u5feb\u4f7f\u8fd9\u4e9b\u5de5\u5177\u5bf9\u5f00\u53d1\u4eba\u5458\u53ef\u7528\uff0c\u56e0\u6b64\u5b83\u7684\u53ef\u9760\u6027\u53ef\u80fd\u4e0d\u5982\u6211\u4eec\u5e0c\u671b\u7684\u90a3\u6837\u3002\u5982\u679c\u60a8\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/issues",children:"GitHub \u95ee\u9898"})," \u6216\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"https://discord.gg/2BYk6kV7",children:"Discord"})," \u7684 ",(0,l.jsx)(n.code,{children:"developers"})," \u9891\u9053\u4e0e\u6211\u4eec\u8054\u7cfb\u3002"]})}),"\n",(0,l.jsx)(n.h4,{id:"\u6545\u969c\u6392\u9664\u63d0\u793a",children:"\u6545\u969c\u6392\u9664\u63d0\u793a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u7531\u4e8e\u7f51\u7edc\u62e5\u5835\u548c\u7a0b\u5e8f\u5927\u5c0f\uff0c\u811a\u672c\u4e0d\u592a\u53ef\u80fd\u7b2c\u4e00\u6b21\u5c31\u6210\u529f\u8fd0\u884c\uff0c\u4f46\u811a\u672c\u5e94\u8be5\u662f\u5e42\u7b49\u7684\uff0c\u5e76\u8df3\u8fc7\u5df2\u7ecf\u90e8\u7f72/\u521d\u59cb\u5316\u7684\u5408\u7ea6\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u9519\u8bef\u5982 ",(0,l.jsx)(n.code,{children:"Error: 11 write transactions failed"})," \u6216 ",(0,l.jsx)(n.code,{children:"Error: Custom: Invalid blockhash"})," \u53ef\u4ee5\u901a\u8fc7\u91cd\u65b0\u8fd0\u884c\u547d\u4ee4\u8fdb\u884c\u91cd\u8bd5\u3002\u5982\u679c\u53ef\u91cd\u8bd5\u7684\u9519\u8bef\u6301\u7eed\u5b58\u5728\uff0c\u8bf7\u8003\u8651\u5728 ",(0,l.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/44e0ff0733baf0da4d2b0304915f5f6cce92ffc7/rust/sealevel/client/src/cmd_utils.rs#L76",children:"\u8fd9\u91cc"})," \u589e\u52a0\u8ba1\u7b97\u5355\u4f4d\u4ef7\u683c\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5bf9\u4e8e\u5176\u4ed6\u7c7b\u578b\u7684\u9519\u8bef\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u5173\u95ed\u7f13\u51b2\u533a\u548c\u7a0b\u5e8f\u7684\u90e8\u7f72\u5bc6\u94a5\uff0c\u5e76\u4ece\u5934\u5f00\u59cb\u91cd\u65b0\u90e8\u7f72\u6240\u6709\u5185\u5bb9\u3002\u8981\u9010\u4e2a\u663e\u793a\u7f13\u51b2\u533a\u548c\u7a0b\u5e8f\u5e76\u5173\u95ed\u5b83\u4eec\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u547d\u4ee4\u64cd\u4f5c\u3002\u5173\u95ed\u7a0b\u5e8f\u4e5f\u6709\u52a9\u4e8e\u6062\u590d\u5176\u79df\u91d1\u5b58\u6b3e\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"solana program show --programs --keypair ./warp-route-deployer-key.json --url <CHAIN_RPC_URL>\n\nsolana program show --buffers --keypair ./warp-route-deployer-key.json --url <CHAIN_RPC_URL>\n\n# \u5173\u95ed\u7a0b\u5e8f\u8d26\u6237\u65f6\u9700\u8981\u6dfb\u52a0 `--bypass-warning` \u6807\u5fd7\uff08\u4e0e\u5173\u95ed\u7f13\u51b2\u533a\u76f8\u5bf9\uff09\nsolana program close <YOUR_PROGRAM_ADDRESS> --url <CHAIN_RPC_URL>\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4e3a\u4e86\u589e\u52a0\u90e8\u7f72\u6210\u529f\u7684\u51e0\u7387\uff0c\u60a8\u53ef\u4ee5\u5728\u4f20\u9012\u7ed9\u811a\u672c\u7684 ",(0,l.jsx)(n.code,{children:"--chain-config-file"})," \u4e2d\u8bbe\u7f6e\u79c1\u6709 RPC URL\u3002\uff08\u4f8b\u5982\uff0c\u5728 ",(0,l.jsx)(n.code,{children:"solanamainnet.rpcUrls.http"})," \u4e2d\uff09"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u90e8\u7f72\u5408\u6210\u4ee3\u5e01\uff0c\u4e0b\u9762\u7684\u547d\u4ee4\u5c06\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4ee3\u5e01\u94f8\u9020\uff0c\u5e76\u4f7f\u7528\u5143\u6570\u636e\u4ee3\u5e01\u6269\u5c55\u8bbe\u7f6e\u4ee3\u5e01\u540d\u79f0\u3001\u7b26\u53f7\u548c\u5143\u6570\u636e json\uff0c\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"--token-config-file"})," \u6587\u4ef6\u4e2d\u7684\u5b57\u6bb5\uff0c\u8fd0\u884c ",(0,l.jsx)(n.code,{children:"warp-route deploy"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u4ece `rust/sealevel/client` \u8fd0\u884c\ncargo run -- -k ./warp-route-deployer-key.json warp-route deploy \\\n --warp-route-name eclipsesol \\\n --environment mainnet3 \\\n --environments-dir ../environments \\\n --built-so-dir ../../target/deploy \\\n --token-config-file ../environments/mainnet3/warp-routes/eclipsesol/token-config.json  \\\n --chain-config-file ../environments/mainnet3/chain-config.json \\\n --ata-payer-funding-amount 10000000\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4e0e-warp-\u8def\u7531\u4ea4\u4e92",children:"\u4e0e Warp \u8def\u7531\u4ea4\u4e92"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u8be2 Warp \u8def\u7531\u7a0b\u5e8f"})}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5\u7a0b\u5e8f\u8be6\u7ec6\u4fe1\u606f\uff0c\u5982\u94f8\u5e01\u8d26\u6237\u3001\u94f8\u5e01\u6743\u9650\u548c ATA \u4ed8\u6b3e\u8d26\u6237\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u4ece `rust/sealevel/client` \u8fd0\u884c\ncargo run -- -k ./warp-route-deployer-key.json \\\n-u <CHAIN_RPC_URL> token query \\\n--program-id <PROGRAM_ID> <TOKEN_TYPE>\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u66ff\u6362\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<CHAIN_RPC_URL>"}),": \u4f8b\u5982\uff0c",(0,l.jsx)(n.a,{href:"https://api.devnet.solana.com",children:"https://api.devnet.solana.com"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<PROGRAM_ID>"}),": program-ids.json \u4e2d\u7684 base58 \u5730\u5740\uff08\u4f4d\u4e8e\u60a8\u7684 warp-route \u76ee\u5f55\u4e2d\uff09\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<TOKEN_TYPE>"}),": native|synthetic|collateral"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u90e8\u7f72\u4e86\u5408\u6210\u4ee3\u5e01\uff0c\u8bf7\u67e5\u8be2\u94f8\u5e01\u6743\u9650\u8d26\u6237\u4ee5\u68c0\u67e5\u5143\u6570\u636e\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"solana account <MINT_AUTHORITY> --url <CHAIN_RPC_URL>\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u901a\u8fc7 Warp \u8def\u7531\u8f6c\u79fb\u4ee3\u5e01"})}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u8981\u6d4b\u8bd5\u8de8\u94fe\u4ee3\u5e01\u8f6c\u79fb\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u4ece `rust/sealevel/client` \u8fd0\u884c\ncargo run -- -u <ORIGIN_CHAIN_RPC_URL> \\\n-k ./warp-route-deployer-key.json \\\ntoken transfer-remote ./warp-route-deployer-key.json \\\n<AMOUNT_IN_LOWEST_DENOM> <DESTINATION_CHAIN_DOMAIN_ID> <RECIPIENT_ADDRESS> \\\n<WARP_TOKEN_TYPE_ON_ORIGIN_CHAIN> --program-id <PROGRAM_ID>\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<DESTINATION_CHAIN_DOMAIN_ID>"}),": \u60a8\u9700\u8981\u53d1\u9001\u5230\u7684\u94fe\u7684\u57df ID\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,l.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-registry/tree/main/chains",children:"hyperlane-registry"})," \u7684\u94fe\u7684 ",(0,l.jsx)(n.code,{children:"metadata.yaml"})," \u6761\u76ee\u4e2d\u627e\u5230\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<PROGRAM_ID>"}),": program-ids.json \u4e2d\u7684 base58 \u5730\u5740\uff08\u4f4d\u4e8e\u60a8\u7684 warp-route \u76ee\u5f55\u4e2d\uff09\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<WARP_TOKEN_TYPE_ON_ORIGIN_CHAIN>"}),": \u6e90\u94fe\u4e0a\u7684\u4ee3\u5e01\u7c7b\u578b\uff0c\u9009\u9879\u4e3a\uff1anative|synthetic|collateral"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u9a8c\u8bc1\u76ee\u6807\u94fe\u4e0a\u7684\u4f59\u989d"})}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u901a\u8fc7\u67e5\u8be2\u94f8\u5e01\u8d26\u6237\uff0c\u67e5\u770b\u76ee\u6807\u94fe\u4e0a\u63a5\u6536\u8005\u7684\u4f59\u989d\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"spl-token balance --owner ./warp-route-deployer-key.json \\\n-u <DESTINATION_CHAIN_RPC_URL> <MINT_ACCOUNT_ADDRESS>\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6b64\u5904\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u662f SPL \u4ee3\u5e01 ID\u3002\u56e0\u6b64\uff0c\u5982\u679c\u8fd9\u662f\u60a8\u60f3\u8981\u68c0\u67e5\u4f59\u989d\u7684\u5408\u6210 Warp \u8def\u7531\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u4e4b\u524d\u67e5\u8be2\u4e2d\u83b7\u5f97\u7684\u94f8\u5e01\u5730\u5740\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u60a8\u8fd8\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u63a5\u6536\u8005\u8d26\u6237\u7684\u6700\u540e\u4ea4\u6613\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u63a2\u7d22\u5176\u4ed6 CLI \u547d\u4ee4"})}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u672c\u6307\u5357\u5927\u91cf\u4f7f\u7528\u4e86\u6765\u81ea ",(0,l.jsx)(n.code,{children:"hyperlane-monorepo"})," \u7684 ",(0,l.jsx)(n.code,{children:"hyperlane-sealevel-client"})," CLI\u3002\u60a8\u53ef\u80fd\u4f1a\u53d1\u73b0\u5176\u5404\u79cd\u547d\u4ee4\u5bf9\u4e8e\u914d\u7f6e Warp \u8def\u7531\u3001\u8fdb\u884c\u72b6\u6001\u67e5\u8be2\u3001\u53d1\u9001\u8f6c\u79fb\u7b49\u975e\u5e38\u6709\u7528\u3002\u67e5\u770b\u5b83\u63d0\u4f9b\u7684\u5176\u4ed6\u5b9e\u7528\u5de5\u5177\uff0c\u7279\u522b\u662f ",(0,l.jsx)(n.code,{children:"token"})," \u5b50\u547d\u4ee4\u4e0b\u7684\u90a3\u4e9b\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u4ece `rust/sealevel/client` \u8fd0\u884c\ncargo run -- --help\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:["\u5bf9\u4e8e\u751f\u4ea7\u90e8\u7f72\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u907f\u514d\u4f7f\u7528\u672c\u6307\u5357\u4e2d\u4f7f\u7528\u7684\u70ed\u5bc6\u94a5\u3002\u76f8\u53cd\uff0c\u5c06\u6240\u6709\u6743\u8f6c\u79fb\u5230 ",(0,l.jsx)(n.strong,{children:"\u591a\u91cd\u7b7e\u540d\u8bbe\u7f6e"}),"\uff0c\u4f8b\u5982 ",(0,l.jsx)(n.a,{href:"https://squads.so/",children:"Squads"}),"\uff0c\u4ee5\u589e\u5f3a\u5b89\u5168\u6027\u3002"]})})]})}function t(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}}}]);