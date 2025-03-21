"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[5818],{31937:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"reference/addresses/interchain-account-router","title":"\u8de8\u94fe\u8d26\u6237\u8def\u7531\u5668","description":"","source":"@site/docs/reference/addresses/interchain-account-router.mdx","sourceDirName":"reference/addresses","slug":"/reference/addresses/interchain-account-router","permalink":"/website/docs/reference/addresses/interchain-account-router","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/reference/addresses/interchain-account-router.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"protocolSidebar","previous":{"title":"\u6d4b\u8bd5\u63a5\u6536\u8005","permalink":"/website/docs/reference/addresses/test-recipient"},"next":{"title":"\u9ed8\u8ba4 ISM \u9a8c\u8bc1\u5668","permalink":"/website/docs/reference/default-ism-validators"}}');var s=n(74848),c=n(28453),i=n(65537),a=n(79329),d=n(99625);const o={},l="\u8de8\u94fe\u8d26\u6237\u8def\u7531\u5668",h={},u=[];function m(e){const r={h1:"h1",header:"header",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"\u8de8\u94fe\u8d26\u6237\u8def\u7531\u5668",children:"\u8de8\u94fe\u8d26\u6237\u8def\u7531\u5668"})}),"\n",(0,s.jsxs)(i.A,{groupId:"environment",children:[(0,s.jsx)(a.A,{value:"mainnet",label:"\u4e3b\u7f51",children:(0,s.jsx)(d.Ay,{environment:"mainnet",contract:"interchainAccountRouter"})}),(0,s.jsx)(a.A,{value:"testnet",label:"\u6d4b\u8bd5\u7f51",children:(0,s.jsx)(d.Ay,{environment:"testnet",contract:"interchainAccountRouter"})})]})]})}function x(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},57929:(e,r,n)=>{n.d(r,{sZ:()=>o});var t=n(92293),s=n(96506),c=n(96540);const i="abacus works",a=[];function d(e){return void 0===e&&(e=!1),function(e,r){return void 0===e&&(e=!1),void 0===r&&(r=!0),Object.values(t.F).filter((n=>{const t=n.deployer?.name.trim().toLowerCase()===i,c=!!n.isTestnet===e,d=!r||!!s.y[n.name]?.mailbox,o=a.includes(n.name);return t&&c&&d&&!o}))}(e).map((e=>e.name))}function o(e){return void 0===e&&(e=!1),(0,c.useMemo)((()=>d(e)),[e])}},99625:(e,r,n)=>{n.d(r,{Ay:()=>o,ZH:()=>a,_R:()=>d});var t=n(96506),s=n(92293),c=n(57929),i=n(74848);function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(e){return e.replace(/([A-Z])/g," $1").trim().split(" ").map((e=>a(e))).join(" ")}function o(e){let{contract:r,environment:n,withChainId:d=!1}=e;const o=(0,c.sZ)("mainnet"!==n);return(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Chain"}),(0,i.jsx)("th",{children:"Domain"}),d&&(0,i.jsx)("th",{children:"Chain ID"}),(0,i.jsx)("th",{children:"Address"}),(0,i.jsx)("th",{children:"Explorer"})]})}),(0,i.jsx)("tbody",{children:o.map((e=>{const n=t.y[e]?.[r];if(!n)return null;const c=s.F[e],o=c.blockExplorers?.[0]?.url,l=o?new URL(o):null;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:c.displayName??a(e)}),(0,i.jsx)("td",{children:c.domainId}),d&&(0,i.jsx)("td",{children:c.chainId}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:n})}),(0,i.jsx)("td",{children:o?(0,i.jsx)("a",{href:`${o}/address/${n}`,target:"_blank",rel:"noopener noreferrer",children:l.hostname}):"N/A"})]},e)}))})]})}}}]);