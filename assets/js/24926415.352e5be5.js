"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[3104],{44886:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"reference/addresses/test-recipient","title":"\u6d4b\u8bd5\u6536\u4ef6\u4eba","description":"","source":"@site/docs/reference/addresses/test-recipient.mdx","sourceDirName":"reference/addresses","slug":"/reference/addresses/test-recipient","permalink":"/docs/reference/addresses/test-recipient","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/reference/addresses/test-recipient.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"protocolSidebar","previous":{"title":"\u4ee3\u7406\u7ba1\u7406\u5458","permalink":"/docs/reference/addresses/proxy-admin"},"next":{"title":"\u8de8\u94fe\u8d26\u6237\u8def\u7531\u5668","permalink":"/docs/reference/addresses/interchain-account-router"}}');var s=n(74848),i=n(28453),c=n(65537),d=n(79329),a=n(99625);const o={},l="\u6d4b\u8bd5\u6536\u4ef6\u4eba",h={},u=[];function p(e){const r={h1:"h1",header:"header",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"\u6d4b\u8bd5\u6536\u4ef6\u4eba",children:"\u6d4b\u8bd5\u6536\u4ef6\u4eba"})}),"\n",(0,s.jsxs)(c.A,{groupId:"environment",children:[(0,s.jsx)(d.A,{value:"mainnet",label:"\u4e3b\u7f51",children:(0,s.jsx)(a.Ay,{environment:"mainnet",contract:"testRecipient"})}),(0,s.jsx)(d.A,{value:"testnet",label:"\u6d4b\u8bd5\u7f51",children:(0,s.jsx)(a.Ay,{environment:"testnet",contract:"testRecipient"})})]})]})}function m(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},57929:(e,r,n)=>{n.d(r,{sZ:()=>o});var t=n(92293),s=n(96506),i=n(96540);const c="abacus works",d=[];function a(e){return void 0===e&&(e=!1),function(e,r){return void 0===e&&(e=!1),void 0===r&&(r=!0),Object.values(t.F).filter((n=>{const t=n.deployer?.name.trim().toLowerCase()===c,i=!!n.isTestnet===e,a=!r||!!s.y[n.name]?.mailbox,o=d.includes(n.name);return t&&i&&a&&!o}))}(e).map((e=>e.name))}function o(e){return void 0===e&&(e=!1),(0,i.useMemo)((()=>a(e)),[e])}},99625:(e,r,n)=>{n.d(r,{Ay:()=>o,ZH:()=>d,_R:()=>a});var t=n(96506),s=n(92293),i=n(57929),c=n(74848);function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}function a(e){return e.replace(/([A-Z])/g," $1").trim().split(" ").map((e=>d(e))).join(" ")}function o(e){let{contract:r,environment:n,withChainId:a=!1}=e;const o=(0,i.sZ)("mainnet"!==n);return(0,c.jsxs)("table",{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Chain"}),(0,c.jsx)("th",{children:"Domain"}),a&&(0,c.jsx)("th",{children:"Chain ID"}),(0,c.jsx)("th",{children:"Address"}),(0,c.jsx)("th",{children:"Explorer"})]})}),(0,c.jsx)("tbody",{children:o.map((e=>{const n=t.y[e]?.[r];if(!n)return null;const i=s.F[e],o=i.blockExplorers?.[0]?.url,l=o?new URL(o):null;return(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:i.displayName??d(e)}),(0,c.jsx)("td",{children:i.domainId}),a&&(0,c.jsx)("td",{children:i.chainId}),(0,c.jsx)("td",{children:(0,c.jsx)("code",{children:n})}),(0,c.jsx)("td",{children:o?(0,c.jsx)("a",{href:`${o}/address/${n}`,target:"_blank",rel:"noopener noreferrer",children:l.hostname}):"N/A"})]},e)}))})]})}}}]);