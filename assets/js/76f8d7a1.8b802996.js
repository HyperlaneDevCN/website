"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[7927],{53472:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"reference/addresses/interchain-gas-paymaster","title":"\u8de8\u94fe Gas \u652f\u4ed8\u8005\uff08Hook\uff09","description":"","source":"@site/docs/reference/addresses/interchain-gas-paymaster.mdx","sourceDirName":"reference/addresses","slug":"/reference/addresses/interchain-gas-paymaster","permalink":"/website/docs/reference/addresses/interchain-gas-paymaster","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/reference/addresses/interchain-gas-paymaster.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"protocolSidebar","previous":{"title":"\u90ae\u7bb1","permalink":"/website/docs/reference/addresses/mailbox-addresses"},"next":{"title":"\u5b58\u50a8 Gas \u9884\u8a00\u673a","permalink":"/website/docs/reference/addresses/storage-gas-oracle"}}');var t=n(74848),a=n(28453),i=n(65537),c=n(79329),d=n(99625);const o={},l="\u8de8\u94fe Gas \u652f\u4ed8\u8005\uff08Hook\uff09",h={},m=[];function u(e){const r={h1:"h1",header:"header",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"\u8de8\u94fe-gas-\u652f\u4ed8\u8005hook",children:"\u8de8\u94fe Gas \u652f\u4ed8\u8005\uff08Hook\uff09"})}),"\n",(0,t.jsxs)(i.A,{groupId:"environment",children:[(0,t.jsx)(c.A,{value:"mainnet",label:"\u4e3b\u7f51",children:(0,t.jsx)(d.Ay,{environment:"mainnet",contract:"interchainGasPaymaster"})}),(0,t.jsx)(c.A,{value:"testnet",label:"\u6d4b\u8bd5\u7f51",children:(0,t.jsx)(d.Ay,{environment:"testnet",contract:"interchainGasPaymaster"})})]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},57929:(e,r,n)=>{n.d(r,{sZ:()=>o});var s=n(92293),t=n(96506),a=n(96540);const i="abacus works",c=[];function d(e){return void 0===e&&(e=!1),function(e,r){return void 0===e&&(e=!1),void 0===r&&(r=!0),Object.values(s.F).filter((n=>{const s=n.deployer?.name.trim().toLowerCase()===i,a=!!n.isTestnet===e,d=!r||!!t.y[n.name]?.mailbox,o=c.includes(n.name);return s&&a&&d&&!o}))}(e).map((e=>e.name))}function o(e){return void 0===e&&(e=!1),(0,a.useMemo)((()=>d(e)),[e])}},99625:(e,r,n)=>{n.d(r,{Ay:()=>o,ZH:()=>c,_R:()=>d});var s=n(96506),t=n(92293),a=n(57929),i=n(74848);function c(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(e){return e.replace(/([A-Z])/g," $1").trim().split(" ").map((e=>c(e))).join(" ")}function o(e){let{contract:r,environment:n,withChainId:d=!1}=e;const o=(0,a.sZ)("mainnet"!==n);return(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Chain"}),(0,i.jsx)("th",{children:"Domain"}),d&&(0,i.jsx)("th",{children:"Chain ID"}),(0,i.jsx)("th",{children:"Address"}),(0,i.jsx)("th",{children:"Explorer"})]})}),(0,i.jsx)("tbody",{children:o.map((e=>{const n=s.y[e]?.[r];if(!n)return null;const a=t.F[e],o=a.blockExplorers?.[0]?.url,l=o?new URL(o):null;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:a.displayName??c(e)}),(0,i.jsx)("td",{children:a.domainId}),d&&(0,i.jsx)("td",{children:a.chainId}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:n})}),(0,i.jsx)("td",{children:o?(0,i.jsx)("a",{href:`${o}/address/${n}`,target:"_blank",rel:"noopener noreferrer",children:l.hostname}):"N/A"})]},e)}))})]})}}}]);