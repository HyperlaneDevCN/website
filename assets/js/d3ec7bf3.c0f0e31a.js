"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[3254],{39400:(e,n,r)=>{r.d(n,{Ay:()=>o,ZH:()=>i,_R:()=>c});var t=r(96506),s=r(92293),a=r(88308),d=r(74848);function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}function c(e){return e.replace(/([A-Z])/g," $1").trim().split(" ").map((e=>i(e))).join(" ")}function o(e){let{contract:n,environment:r,withChainId:c=!1}=e;const o=(0,a.sZ)("mainnet"!==r);return(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Chain"}),(0,d.jsx)("th",{children:"Domain"}),c&&(0,d.jsx)("th",{children:"Chain ID"}),(0,d.jsx)("th",{children:"Address"}),(0,d.jsx)("th",{children:"Explorer"})]})}),(0,d.jsx)("tbody",{children:o.map((e=>{const r=t.y[e]?.[n];if(!r)return null;const a=s.F[e],o=a.blockExplorers?.[0]?.url,l=o?new URL(o):null;return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:a.displayName??i(e)}),(0,d.jsx)("td",{children:a.domainId}),c&&(0,d.jsx)("td",{children:a.chainId}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:r})}),(0,d.jsx)("td",{children:o?(0,d.jsx)("a",{href:`${o}/address/${r}`,target:"_blank",rel:"noopener noreferrer",children:l.hostname}):"N/A"})]},e)}))})]})}},54529:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"reference/addresses/validator-announce","title":"\u9a8c\u8bc1\u8005\u516c\u544a","description":"","source":"@site/docs/reference/addresses/validator-announce.mdx","sourceDirName":"reference/addresses","slug":"/reference/addresses/validator-announce","permalink":"/website/docs/reference/addresses/validator-announce","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/reference/addresses/validator-announce.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"protocolSidebar","previous":{"title":"\u9ed8\u514b\u5c14\u6811\uff08Hook\uff09","permalink":"/website/docs/reference/addresses/merkle-tree"},"next":{"title":"\u4ee3\u7406\u7ba1\u7406\u5458","permalink":"/website/docs/reference/addresses/proxy-admin"}}');var s=r(74848),a=r(28453),d=r(62464),i=r(14345),c=r(39400);const o={},l="\u9a8c\u8bc1\u8005\u516c\u544a",h={},u=[];function m(e){const n={h1:"h1",header:"header",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u9a8c\u8bc1\u8005\u516c\u544a",children:"\u9a8c\u8bc1\u8005\u516c\u544a"})}),"\n",(0,s.jsxs)(d.A,{groupId:"environment",children:[(0,s.jsx)(i.A,{value:"mainnet",label:"\u4e3b\u7f51",children:(0,s.jsx)(c.Ay,{environment:"mainnet",contract:"validatorAnnounce"})}),(0,s.jsx)(i.A,{value:"testnet",label:"\u6d4b\u8bd5\u7f51",children:(0,s.jsx)(c.Ay,{environment:"testnet",contract:"validatorAnnounce"})})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},88308:(e,n,r)=>{r.d(n,{sZ:()=>o});var t=r(92293),s=r(96506),a=r(96540);const d="abacus works",i=[];function c(e){return void 0===e&&(e=!1),function(e,n){return void 0===e&&(e=!1),void 0===n&&(n=!0),Object.values(t.F).filter((r=>{const t=r.deployer?.name.trim().toLowerCase()===d,a=!!r.isTestnet===e,c=!n||!!s.y[r.name]?.mailbox,o=i.includes(r.name);return t&&a&&c&&!o}))}(e).map((e=>e.name))}function o(e){return void 0===e&&(e=!1),(0,a.useMemo)((()=>c(e)),[e])}}}]);