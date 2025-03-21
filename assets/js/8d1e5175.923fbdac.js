"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[5243],{28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var l=r(96540);const i={},s=l.createContext(i);function t(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(s.Provider,{value:n},e.children)}},99894:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"protocol/warp-routes/warp-routes-yield-routes","title":"\u90e8\u7f72\u6536\u76ca\u8def\u7531","description":"\u672c\u6307\u5357\u7684\u76ee\u6807\u662f\u8bf4\u660e\u5982\u4f55\u4f7f\u7528 Hyperlane \u7684\u4f20\u8f93\u8def\u7ebf\u521b\u5efa\u6536\u76ca\u751f\u6210\u6865\u6881\uff0c\u786e\u4fdd\u95f2\u7f6e\u7684\u6865\u63a5\u8d44\u4ea7\u901a\u8fc7\u65f6\u95f4\u590d\u5229\u4ea7\u751f\u6536\u76ca\u3002\u6839\u636e\u4e0d\u540c\u7684\u53d8\u4f53\uff08\u8be6\u7ec6\u4fe1\u606f\u89c1\u4e0b\u6587\uff09\uff0c\u6536\u76ca\u5c06\u5206\u914d\u7ed9\u6536\u76ca\u8def\u7531\u7684\u62e5\u6709\u8005\u6216\u7528\u6237\u3002","source":"@site/docs/protocol/warp-routes/warp-routes-yield-routes.mdx","sourceDirName":"protocol/warp-routes","slug":"/protocol/warp-routes/warp-routes-yield-routes","permalink":"/website/docs/protocol/warp-routes/warp-routes-yield-routes","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/protocol/warp-routes/warp-routes-yield-routes.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"getstartedSidebar","previous":{"title":"\u672c\u5730\u8bbe\u7f6e\uff1a\u5728Anvil\u8282\u70b9\u95f4\u53d1\u9001\u6d88\u606f","permalink":"/website/docs/guides/local-testnet-setup"},"next":{"title":"\u901a\u8fc7\u81ea\u5b9a\u4e49Gas\u4ee3\u5e01\u5feb\u901f\u539f\u751f\u8f6c\u8d26","permalink":"/website/docs/protocol/warp-routes/warp-routes-custom-gas-fast-native"}}');var i=r(74848),s=r(28453);const t={},c="\u90e8\u7f72\u6536\u76ca\u8def\u7531",d={},o=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u64cd\u4f5c\u6307\u5357",id:"\u64cd\u4f5c\u6307\u5357",level:2},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:3},{value:"\u6536\u76ca\u8def\u7531\u90e8\u7f72\u6b65\u9aa4",id:"\u6536\u76ca\u8def\u7531\u90e8\u7f72\u6b65\u9aa4",level:3},{value:"1. \u8fd0\u884c <code>hyperlane warp init</code> \u751f\u6210\u4f20\u8f93\u8def\u7ebf\u914d\u7f6e\uff1a",id:"1-\u8fd0\u884c-hyperlane-warp-init-\u751f\u6210\u4f20\u8f93\u8def\u7ebf\u914d\u7f6e",level:4},{value:"2. \u8fd0\u884c <code>hyperlane warp deploy</code> \u90e8\u7f72\u4f20\u8f93\u8def\u7ebf\u3002",id:"2-\u8fd0\u884c-hyperlane-warp-deploy-\u90e8\u7f72\u4f20\u8f93\u8def\u7ebf",level:4},{value:"\u9886\u53d6\u6536\u76ca",id:"\u9886\u53d6\u6536\u76ca",level:3},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u90e8\u7f72\u6536\u76ca\u8def\u7531",children:"\u90e8\u7f72\u6536\u76ca\u8def\u7531"})}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u6307\u5357\u7684\u76ee\u6807\u662f\u8bf4\u660e\u5982\u4f55\u4f7f\u7528 Hyperlane \u7684\u4f20\u8f93\u8def\u7ebf\u521b\u5efa\u6536\u76ca\u751f\u6210\u6865\u6881\uff0c\u786e\u4fdd\u95f2\u7f6e\u7684\u6865\u63a5\u8d44\u4ea7\u901a\u8fc7\u65f6\u95f4\u590d\u5229\u4ea7\u751f\u6536\u76ca\u3002\u6839\u636e\u4e0d\u540c\u7684\u53d8\u4f53\uff08\u8be6\u7ec6\u4fe1\u606f\u89c1\u4e0b\u6587\uff09\uff0c\u6536\u76ca\u5c06\u5206\u914d\u7ed9\u6536\u76ca\u8def\u7531\u7684\u62e5\u6709\u8005\u6216\u7528\u6237\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u8981\u5b8c\u6210\u4ee5\u4e0b\u64cd\u4f5c\u6307\u5357\uff0c\u60a8\u9700\u8981\u5177\u5907\u4ee5\u4e0b\u6761\u4ef6\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e00\u4e2a\u60a8\u9009\u62e9\u7684\u8d77\u59cb\u7f51\u7edc\u548c\u76ee\u6807\u7f51\u7edc\uff0c\u60a8\u5e0c\u671b\u5728\u8fd9\u4e24\u4e2a\u7f51\u7edc\u4e4b\u95f4\u90e8\u7f72\u6536\u76ca\u8def\u7531\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u8d77\u59cb\u7f51\u7edc\u4e0a\uff0c\u60a8\u5e0c\u671b\u751f\u6210\u6536\u76ca\u7684 ",(0,i.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/",children:"ERC-4626 \u4fdd\u9669\u5e93"})," \u5730\u5740\u3002\u8be5\u4fdd\u9669\u5e93\u7684\u57fa\u7840\u8d44\u4ea7\u5c06\u88ab\u8bbe\u7f6e\u4e3a\u4f20\u8f93\u8def\u7ebf\u7684\u62b5\u62bc\u54c1\uff08\u4f8b\u5982\uff0c\u5982\u679c\u4fdd\u9669\u5e93\u662f USDC \u8d44\u91d1\uff0c\u5219\u4f20\u8f93\u8def\u7ebf\u4e5f\u5c06\u652f\u6301 USDC \u8f6c\u79fb\uff09\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5b89\u88c5\u4e86 ",(0,i.jsx)(n.a,{href:"https://hyperlanedevcn.github.io/website/docs/reference/cli",children:"Hyperlane CLI"})," \u7684\u5b9e\u4f8b\uff0c\u5e76\u5c06\u94b1\u5305\u79c1\u94a5\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.code,{children:"HYP_KEY"})," \u73af\u5883\u53d8\u91cf\uff0c\u8be5\u79c1\u94a5\u5728\u60a8\u7684\u8d77\u59cb\u548c\u76ee\u6807\u7f51\u7edc\u4e0a\u6709\u8d44\u91d1\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u64cd\u4f5c\u6307\u5357",children:"\u64cd\u4f5c\u6307\u5357"}),"\n",(0,i.jsx)(n.h3,{id:"\u6982\u5ff5",children:"\u6982\u5ff5"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ERC-4626 \u4fdd\u9669\u5e93"}),"\uff1a\u4ee5\u592a\u574a\u6807\u51c6\u7684\u4ee3\u5e01\u5316\u6536\u76ca\u4fdd\u9669\u5e93\u3002\u5b58\u5165\u65f6\uff0c\u4f1a\u94f8\u9020\u4ee3\u8868\u57fa\u7840\u8d44\u4ea7\u6240\u6709\u6743\u7684\u80a1\u4efd\u4ee3\u5e01\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6536\u76ca\u8def\u7531 (EvmHypOwnerCollateral & EvmHypSynthetic)"}),"\uff1aHyperlane \u8868\u793a\u6536\u76ca\u578b EVM \u62b5\u62bc\u4ee3\u5e01\u7684\u65b9\u5f0f\u3002\u8bf7\u6ce8\u610f\uff0c\u6536\u76ca\u8def\u7531\u7684\u4fdd\u9669\u5e93\u4e2d\u5b58\u5165\u7684\u8d44\u4ea7\u5730\u5740\u88ab\u7528\u4f5c\u4f20\u8f93\u8def\u7ebf\u7684\u62b5\u62bc\u4ee3\u5e01\u3002","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8be5\u7279\u5b9a\u6536\u76ca\u8def\u7531\u53d8\u4f53\u5c06\u4fdd\u9669\u5e93\u7684\u6536\u76ca\u5206\u914d\u7ed9 ",(0,i.jsx)(n.strong,{children:"\u62e5\u6709\u8005"}),"\u3002\u8fd8\u6709\u4e00\u79cd\u66ff\u4ee3\u8bbe\u7f6e\u662f\u5c06\u6536\u76ca\u5206\u914d\u7ed9\u7528\u6237\uff08EvmHypCollateral & EvmHypSyntheticRebase\uff09\u3002\u5728\u672c\u6307\u5357\u7684\u5927\u90e8\u5206\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u5c06\u5f15\u7528\u524d\u8005\u7684\u53d8\u4f53\u3002\u6982\u5ff5\u4fdd\u6301\u4e0d\u53d8\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:'\u4e3a\u4e86\u672c\u64cd\u4f5c\u6307\u5357\u7684\u65b9\u4fbf\uff0c"\u8d77\u59cb"\u7f51\u7edc\u5c06\u6307\u751f\u6210\u6536\u76ca\u7684\u7f51\u7edc\uff08\u4f8b\u5982\uff0c\u4ee5\u592a\u574a\u6709\u4e00\u4e2a\u53ef\u4ee5\u9886\u53d6\u6536\u76ca\u7684 USDC \u501f\u8d37\u4fdd\u9669\u5e93\u3002\u5728\u76ee\u6807\u94fe\u4e0a\u94f8\u9020\u7684\u5408\u6210 USDC \u88ab\u79f0\u4e3a yourchain\uff09\u3002'})}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4ee5\u592a\u574a\u4e0e yourchain \u4e4b\u95f4\u7684\u6865\u63a5\u6d41\u7a0b"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6865\u63a5 USDC\uff1a\u4ee5\u592a\u574a \u2192 yourchain"})}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart LR\n    A[Ethereum:<br>Alice] --\x3e|Deposit USDC| B[yourchain:<br>EvmHypOwnerCollateral]\n    B --\x3e|USDC Deposit into Vault| C[Ethereum:<br>ERC-4626 Vault]\n    C --\x3e|Yield Generation| C\n    B ==>|Bridge| E[yourchain:<br>EvmHypSynthetic]\n    E --\x3e|Mint Synthetic USDC| F[yourchain:<br>Alice]\n    C[Ethereum:<br>ERC-4626 Vault] --\x3e|Withdraw Yield| G[Ethereum:<br>Vault Owner]"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0cAlice \u5e0c\u671b\u5728\u4ee5\u592a\u574a\u548c yourchain \u4e4b\u95f4\u6865\u63a5 USDC\u3002\u6536\u76ca\u8def\u7531\u5c06\u628a\u5979\u7684 USDC \u8f6c\u79fb\u5230\u4e00\u4e2a\u6536\u76ca\u578b ERC-4626 \u4fdd\u9669\u5e93\uff0c\u7136\u540e\u5728 yourchain \u4e0a\u94f8\u9020\u5979\u7684\u5408\u6210 USDC\u3002\u8bf7\u6ce8\u610f\uff0c\u6536\u76ca\u8def\u7531\u7684\u62e5\u6709\u8005\u53ef\u4ee5\u9886\u53d6\u4ece\u8be5\u4fdd\u9669\u5e93\u751f\u6210\u7684\u6536\u76ca\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6865\u63a5 USDC\uff1ayourchain \u2192 \u4ee5\u592a\u574a"})}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart LR\n    A[yourchain:<br>Alice] --\x3e|Burn Synthetic USDC| B[yourchain:<br>EvmHypSynthetic]\n    B ==>|Bridge| C[Ethereum:<br>EvmHypOwnerCollateral]\n    D[Ethereum:<br>ERC-4626 Vault] --\x3e|USDC Withdraw from Vault| C\n    C --\x3e|Withdraw USDC| F[Ethereum:<br>Alice]\n"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53Alice \u60f3\u8981\u8fd4\u56de\u4ee5\u592a\u574a\u65f6\uff0c\u53cd\u5411\u64cd\u4f5c\u4f1a\u53d1\u751f\u3002\u6536\u76ca\u8def\u7531\u5c06\u9500\u6bc1\u5979\u7684\u5408\u6210 USDC\uff0c\u4ece\u4ee5\u592a\u574a\u7684\u4fdd\u9669\u5e93\u4e2d\u63d0\u53d6 USDC\uff0c\u5e76\u5c06\u5176\u8fd4\u56de\u7ed9\u5979\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6536\u76ca\u8def\u7531\u90e8\u7f72\u6b65\u9aa4",children:"\u6536\u76ca\u8def\u7531\u90e8\u7f72\u6b65\u9aa4"}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528 Hyperlane CLI\uff0c\u5728\u4ee5\u592a\u574a\u548c yourchain \u4e0a\u5206\u522b\u90e8\u7f72 USDC EvmHypOwnerCollateral \u548c EvmHypSynthetic \u4ee3\u5e01\uff1a"}),"\n",(0,i.jsxs)(n.h4,{id:"1-\u8fd0\u884c-hyperlane-warp-init-\u751f\u6210\u4f20\u8f93\u8def\u7ebf\u914d\u7f6e",children:["1. \u8fd0\u884c ",(0,i.jsx)(n.code,{children:"hyperlane warp init"})," \u751f\u6210\u4f20\u8f93\u8def\u7ebf\u914d\u7f6e\uff1a"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u9009\u62e9 ",(0,i.jsx)(n.code,{children:"yourchain"})," \u548c ",(0,i.jsx)(n.code,{children:"Ethereum"}),"\uff0c\u4f7f\u7528\u7a7a\u683c\u9009\u62e9\uff0c\u7136\u540e\u6309\u56de\u8f66\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4ee5\u592a\u574a\uff0c\u9009\u62e9 ",(0,i.jsx)(n.code,{children:"collateralVault"}),"\uff0c\u63a5\u53d7\u90ae\u7bb1\uff0c\u5e76\u8f93\u5165 yourchain \u4e0a\u7684 USDC \u4fdd\u9669\u5e93\u5730\u5740\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9 ",(0,i.jsx)(n.code,{children:"collateralVaultRebase"}),"\uff0c\u8fd9\u662f\u4e00\u4e2a\u901a\u8fc7\u589e\u52a0\u6301\u6709\u91cf\u6765\u5206\u914d\u6536\u76ca\u7ed9\u7528\u6237\u7684\u6536\u76ca\u8def\u7531\u53d8\u4f53\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e yourchain\uff0c\u9009\u62e9 ",(0,i.jsx)(n.code,{children:"synthetic"})," \u5e76\u63a5\u53d7\u90ae\u7bb1\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c\u60a8\u9009\u62e9\u4e86 ",(0,i.jsx)(n.code,{children:"collateralVaultRebase"}),"\uff0c\u5219\u5fc5\u987b\u4e0e ",(0,i.jsx)(n.code,{children:"syntheticRebase"})," \u914d\u5bf9\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"2-\u8fd0\u884c-hyperlane-warp-deploy-\u90e8\u7f72\u4f20\u8f93\u8def\u7ebf",children:["2. \u8fd0\u884c ",(0,i.jsx)(n.code,{children:"hyperlane warp deploy"})," \u90e8\u7f72\u4f20\u8f93\u8def\u7ebf\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u9886\u53d6\u6536\u76ca",children:"\u9886\u53d6\u6536\u76ca"}),"\n",(0,i.jsxs)(n.p,{children:["\u6839\u636e\u6536\u76ca\u8def\u7531\u7684\u53d8\u4f53\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"HypERC4626OwnerCollateral.sweep()"})," \u6216 ",(0,i.jsx)(n.code,{children:"HypERC4626Collateral.rebase()"})," \u5728\u5404\u81ea\u7684\u5408\u7ea6\u4e0a\u9886\u53d6\u6536\u76ca\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"success",children:(0,i.jsx)(n.p,{children:"\ud83c\udf89 \u606d\u559c\uff01\u60a8\u73b0\u5728\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684\u6536\u76ca\u8def\u7531\u4e0e\u60a8\u7684\u4fdd\u9669\u5e93\u3002\u6865\u63a5\u7684\u7528\u6237\u8d44\u4ea7\u73b0\u5728\u53ef\u4ee5\u5728\u8d77\u59cb\u4f20\u8f93\u8def\u7ebf\u4e2d\u8d5a\u53d6\u88ab\u52a8\u6536\u76ca\u3002"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u8fd9\u79cd\u62b5\u62bc\u7b56\u7565\u627f\u62c5\u67d0\u4e9b ISM \u4fe1\u4efb\u5047\u8bbe\uff0c\u5e76\u4e14\u5b58\u5728\u57fa\u7840 ",(0,i.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/",children:"ERC-4626 \u4fdd\u9669\u5e93"})," \u53d8\u5f97\u4e0d\u8db3\u62b5\u62bc\u7684\u56fa\u6709\u98ce\u9669\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u8d44\u6e90",children:"\u8d44\u6e90"}),"\n",(0,i.jsxs)(n.p,{children:["\u6709\u5173\u8fd9\u4e9b\u6b65\u9aa4\u7684\u66f4\u6df1\u5165\u7ec6\u8282\uff0c\u8bf7\u53c2\u9605 ",(0,i.jsx)(n.a,{href:"/docs/guides/deploy-warp-route",children:"\u6865\u63a5\u4ee3\u5e01"})," \u6307\u5357\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u4e00\u4e9b\u7531 Hyperlane \u652f\u6301\u56e2\u961f\u3001Cheese Chain \u548c\u4ee5\u592a\u574a\u57fa\u91d1\u4f1a\u53d1\u5e03\u7684\u989d\u5916\u4fe1\u606f\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://medium.com/hyperlane/introducing-yield-routes-f7e8fd091443",children:"Hyperlane\uff1a\u4ecb\u7ecd\u6536\u76ca\u8def\u7531"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/",children:"ERC-4626 \u4ee3\u5e01\u5316\u4fdd\u9669\u5e93\u6807\u51c6"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);