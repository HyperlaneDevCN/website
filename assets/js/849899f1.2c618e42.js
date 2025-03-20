"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[8609],{28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var i=r(96540);const l={},t=i.createContext(l);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(t.Provider,{value:n},e.children)}},88234:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"protocol/warp-routes/warp-routes-example-usage","title":"Warp Routes: \u793a\u4f8b\u7528\u6cd5","description":"Warp Routes \u5b9a\u4e49\u4e86\u8d44\u4ea7\u5728\u94fe\u4e4b\u95f4\u7684\u79fb\u52a8\u65b9\u5f0f\uff0c\u65e0\u8bba\u662f\u4f5c\u4e3a\u539f\u751f\u4ee3\u5e01\u3001\u5408\u6210\u8868\u793a\uff0c\u8fd8\u662f\u62b5\u62bc\u652f\u6301\u7684\u8d44\u4ea7\u3002\u9009\u62e9\u8def\u7ebf\u53d6\u51b3\u4e8e\u8d44\u4ea7\u7c7b\u578b\u548c\u5728\u76ee\u6807\u94fe\u4e0a\u7684\u671f\u671b\u884c\u4e3a\u3002","source":"@site/docs/protocol/warp-routes/warp-routes-example-usage.mdx","sourceDirName":"protocol/warp-routes","slug":"/protocol/warp-routes/warp-routes-example-usage","permalink":"/docs/protocol/warp-routes/warp-routes-example-usage","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/protocol/warp-routes/warp-routes-example-usage.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"getstartedSidebar","previous":{"title":"Warp \u8def\u7531\u7c7b\u578b","permalink":"/docs/protocol/warp-routes/warp-routes-types"},"next":{"title":"\u8de8\u94fe\u8d26\u6237","permalink":"/docs/reference/applications/interchain-account"}}');var l=r(74848),t=r(28453);const s={},o="Warp Routes: \u793a\u4f8b\u7528\u6cd5",a={},d=[{value:"Warp Route \u7ec4\u5408",id:"warp-route-\u7ec4\u5408",level:2},{value:"1. \u539f\u751f\u5230\u539f\u751f",id:"1-\u539f\u751f\u5230\u539f\u751f",level:3},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:4},{value:"\u793a\u4f8b\u6d41\u7a0b",id:"\u793a\u4f8b\u6d41\u7a0b",level:4},{value:"\u56fe\u793a",id:"\u56fe\u793a",level:4},{value:"\u7528\u4f8b",id:"\u7528\u4f8b",level:4},{value:"2. \u539f\u751f\u5230\u5408\u6210",id:"2-\u539f\u751f\u5230\u5408\u6210",level:3},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e-1",level:4},{value:"\u793a\u4f8b\u6d41\u7a0b",id:"\u793a\u4f8b\u6d41\u7a0b-1",level:4},{value:"\u56fe\u793a",id:"\u56fe\u793a-1",level:4},{value:"\u7528\u4f8b",id:"\u7528\u4f8b-1",level:4},{value:"3. \u62b5\u62bc\u5230\u5408\u6210",id:"3-\u62b5\u62bc\u5230\u5408\u6210",level:3},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e-2",level:4},{value:"\u793a\u4f8b\u6d41\u7a0b",id:"\u793a\u4f8b\u6d41\u7a0b-2",level:4},{value:"\u56fe\u793a",id:"\u56fe\u793a-2",level:4},{value:"\u7528\u4f8b",id:"\u7528\u4f8b-2",level:4}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"warp-routes-\u793a\u4f8b\u7528\u6cd5",children:"Warp Routes: \u793a\u4f8b\u7528\u6cd5"})}),"\n",(0,l.jsx)(n.p,{children:"Warp Routes \u5b9a\u4e49\u4e86\u8d44\u4ea7\u5728\u94fe\u4e4b\u95f4\u7684\u79fb\u52a8\u65b9\u5f0f\uff0c\u65e0\u8bba\u662f\u4f5c\u4e3a\u539f\u751f\u4ee3\u5e01\u3001\u5408\u6210\u8868\u793a\uff0c\u8fd8\u662f\u62b5\u62bc\u652f\u6301\u7684\u8d44\u4ea7\u3002\u9009\u62e9\u8def\u7ebf\u53d6\u51b3\u4e8e\u8d44\u4ea7\u7c7b\u578b\u548c\u5728\u76ee\u6807\u94fe\u4e0a\u7684\u671f\u671b\u884c\u4e3a\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"warp-route-\u7ec4\u5408",children:"Warp Route \u7ec4\u5408"}),"\n",(0,l.jsx)(n.h3,{id:"1-\u539f\u751f\u5230\u539f\u751f",children:"1. \u539f\u751f\u5230\u539f\u751f"}),"\n",(0,l.jsx)(n.p,{children:"\u6b64\u8def\u7ebf\u5141\u8bb8\u5728\u4e24\u4e2a\u90fd\u4f7f\u7528\u81ea\u5df1\u539f\u751f\u4ee3\u5e01\u7684\u94fe\u4e4b\u95f4\u8f6c\u79fb\u539f\u751f\u4ee3\u5e01\u3002"}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"\u6b64\u7c7b\u578b\u7684\u8def\u7ebf\u4ec5\u5e94\u5728\u4e24\u4e2a\u7f51\u7edc\u5177\u6709\u7b49\u503c\u7684\u539f\u751f\u4ee3\u5e01\u65f6\u4f7f\u7528\uff0c\u4f8b\u5982 inEVM \u548c\u4ee5\u592a\u574a\u3002"})}),"\n",(0,l.jsx)(n.h4,{id:"\u8bbe\u7f6e",children:"\u8bbe\u7f6e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"HypNative"})," \u5408\u7ea6\u5df2\u5728\u4e24\u4e2a\u94fe\u4e0a\u90e8\u7f72\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u793a\u4f8b\u6d41\u7a0b",children:"\u793a\u4f8b\u6d41\u7a0b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Transaction Type: Native to Native Transfer\nFrom: Ethereum (ETH)\nTo: inEVM (ETH)\nAmount: 1 ETH\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u56fe\u793a",children:"\u56fe\u793a"}),"\n",(0,l.jsx)(n.mermaid,{value:"graph LR\n    A[Alice on Ethereum] --\x3e|1 ETH| B(Ethereum HypNative)\n    B --\x3e|Message| C(inEVM HypNative)\n    C --\x3e|ETH equivalent| D[Alice on inEVM]"}),"\n",(0,l.jsx)(n.h4,{id:"\u7528\u4f8b",children:"\u7528\u4f8b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Alice \u60f3\u8981\u5feb\u901f\u5c06\u4ef7\u503c\u4ece\u4ee5\u592a\u574a\u8f6c\u79fb\u5230 inEVM\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"2-\u539f\u751f\u5230\u5408\u6210",children:"2. \u539f\u751f\u5230\u5408\u6210"}),"\n",(0,l.jsx)(n.p,{children:"\u6b64\u8def\u7ebf\u5728\u53e6\u4e00\u6761\u94fe\u4e0a\u521b\u5efa\u539f\u751f\u4ee3\u5e01\u7684\u5408\u6210\u8868\u793a\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u8bbe\u7f6e-1",children:"\u8bbe\u7f6e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"HypNative"})," \u5408\u7ea6\u5df2\u5728\u539f\u94fe\u4e0a\u90e8\u7f72\uff0c\u539f\u94fe\u4e0a\u5b58\u5728\u539f\u751f\u8d44\u4ea7\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"HypERC20"})," \u5408\u7ea6\u5df2\u5728\u76ee\u6807\u94fe\u4e0a\u90e8\u7f72\uff0c\u5408\u6210\u4ee3\u5e01\u5728\u6b64\u94f8\u9020\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u793a\u4f8b\u6d41\u7a0b-1",children:"\u793a\u4f8b\u6d41\u7a0b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Transaction Type: Minting Synthetic Token from Native Token\nFrom: Celo (CELO)\nTo: Optimism (wCELO)\nAmount: 100 CELO\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u56fe\u793a-1",children:"\u56fe\u793a"}),"\n",(0,l.jsx)(n.mermaid,{value:"graph LR\n    A[Alice on Celo] --\x3e|100 CELO| B(Celo HypNative)\n    B --\x3e|Message| C(Optimism HypERC20)\n    C --\x3e|Mint 100 wCELO| D[Alice on Optimism]"}),"\n",(0,l.jsx)(n.h4,{id:"\u7528\u4f8b-1",children:"\u7528\u4f8b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e00\u4e2a\u57fa\u4e8e Celo \u7684\u9879\u76ee\u5e0c\u671b\u5728 Optimism \u4e0a\u4f7f\u7528\u4ed6\u4eec\u7684\u539f\u751f CELO \u4ee3\u5e01\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"3-\u62b5\u62bc\u5230\u5408\u6210",children:"3. \u62b5\u62bc\u5230\u5408\u6210"}),"\n",(0,l.jsx)(n.p,{children:"\u6b64\u8def\u7ebf\u5141\u8bb8\u57fa\u4e8e\u62b5\u62bc\u7684 ERC20 \u4ee3\u5e01\u521b\u5efa\u5408\u6210\u4ee3\u5e01\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u8bbe\u7f6e-2",children:"\u8bbe\u7f6e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u62b5\u62bc\u5408\u7ea6 (HypERC20Collateral)"})," \u5df2\u5728\u6e90\u94fe\u4e0a\u90e8\u7f72\uff0c\u539f\u59cb\u8d44\u4ea7\u5b58\u5728\u4e8e\u6b64\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u5408\u6210\u5408\u7ea6 (HypERC20)"})," \u5df2\u5728\u76ee\u6807\u94fe\u4e0a\u90e8\u7f72\uff0c\u8d44\u4ea7\u5728\u6b64\u94f8\u9020\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u793a\u4f8b\u6d41\u7a0b-2",children:"\u793a\u4f8b\u6d41\u7a0b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Transaction Type: Minting Synthetic Token from Collateral Token\nFrom: Ethereum (USDC - Original Asset) - Collateral Source\nTo: Arbitrum (wUSDC - Minted Synthetic Asset) - Synthetic Destination\nAmount: 1000 USDC\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u56fe\u793a-2",children:"\u56fe\u793a"}),"\n",(0,l.jsx)(n.mermaid,{value:"graph LR\n    A[Alice on Ethereum] --\x3e|1000 USDC| B(Ethereum HypERC20Collateral)\n    B --\x3e|Message| C(Arbitrum HypERC20)\n    C --\x3e|Mint 1000 wUSDC| D[Alice on Arbitrum]"}),"\n",(0,l.jsx)(n.h4,{id:"\u7528\u4f8b-2",children:"\u7528\u4f8b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Alice \u5e0c\u671b\u5728 Arbitrum \u4e0a\u4f7f\u7528\u5979\u7684 USDC\uff0c\u800c\u65e0\u9700\u5c06\u5b9e\u9645\u7684 USDC \u79fb\u52a8\u5230 Arbitrum \u6216\u4f9d\u8d56 Arbitrum \u7684\u6865\u63a5 USDC\u3002"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}}}]);