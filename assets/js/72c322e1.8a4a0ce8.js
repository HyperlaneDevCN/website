"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[7648],{53187:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"reference/addresses/merkle-tree","title":"Merkle Tree (Hook)","description":"","source":"@site/docs/reference/addresses/merkle-tree.mdx","sourceDirName":"reference/addresses","slug":"/reference/addresses/merkle-tree","permalink":"/docs/reference/addresses/merkle-tree","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/reference/addresses/merkle-tree.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"protocolSidebar","previous":{"title":"\u5b58\u50a8 Gas \u9884\u8a00\u673a","permalink":"/docs/reference/addresses/storage-gas-oracle"},"next":{"title":"\u9a8c\u8bc1\u5668\u516c\u544a","permalink":"/docs/reference/addresses/validator-announce"}}');var s=n(74848),d=n(28453),a=n(65537),c=n(79329),i=n(99625);const o={},l="Merkle Tree (Hook)",h={},m=[];function u(e){const r={h1:"h1",header:"header",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"merkle-tree-hook",children:"Merkle Tree (Hook)"})}),"\n",(0,s.jsxs)(a.A,{groupId:"environment",children:[(0,s.jsx)(c.A,{value:"mainnet",label:"\u4e3b\u7f51",children:(0,s.jsx)(i.Ay,{environment:"mainnet",contract:"merkleTreeHook"})}),(0,s.jsx)(c.A,{value:"testnet",label:"\u6d4b\u8bd5\u7f51",children:(0,s.jsx)(i.Ay,{environment:"testnet",contract:"merkleTreeHook"})})]})]})}function x(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},57929:(e,r,n)=>{n.d(r,{sZ:()=>o});var t=n(92293),s=n(96506),d=n(96540);const a="abacus works",c=[];function i(e){return void 0===e&&(e=!1),function(e,r){return void 0===e&&(e=!1),void 0===r&&(r=!0),Object.values(t.F).filter((n=>{const t=n.deployer?.name.trim().toLowerCase()===a,d=!!n.isTestnet===e,i=!r||!!s.y[n.name]?.mailbox,o=c.includes(n.name);return t&&d&&i&&!o}))}(e).map((e=>e.name))}function o(e){return void 0===e&&(e=!1),(0,d.useMemo)((()=>i(e)),[e])}},99625:(e,r,n)=>{n.d(r,{Ay:()=>o,ZH:()=>c,_R:()=>i});var t=n(96506),s=n(92293),d=n(57929),a=n(74848);function c(e){return e.charAt(0).toUpperCase()+e.slice(1)}function i(e){return e.replace(/([A-Z])/g," $1").trim().split(" ").map((e=>c(e))).join(" ")}function o(e){let{contract:r,environment:n,withChainId:i=!1}=e;const o=(0,d.sZ)("mainnet"!==n);return(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Chain"}),(0,a.jsx)("th",{children:"Domain"}),i&&(0,a.jsx)("th",{children:"Chain ID"}),(0,a.jsx)("th",{children:"Address"}),(0,a.jsx)("th",{children:"Explorer"})]})}),(0,a.jsx)("tbody",{children:o.map((e=>{const n=t.y[e]?.[r];if(!n)return null;const d=s.F[e],o=d.blockExplorers?.[0]?.url,l=o?new URL(o):null;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:d.displayName??c(e)}),(0,a.jsx)("td",{children:d.domainId}),i&&(0,a.jsx)("td",{children:d.chainId}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:n})}),(0,a.jsx)("td",{children:o?(0,a.jsx)("a",{href:`${o}/address/${n}`,target:"_blank",rel:"noopener noreferrer",children:l.hostname}):"N/A"})]},e)}))})]})}}}]);