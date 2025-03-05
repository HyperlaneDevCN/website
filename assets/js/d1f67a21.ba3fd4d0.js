"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[1025],{39400:(e,n,r)=>{r.d(n,{Ay:()=>o,ZH:()=>d,_R:()=>c});var s=r(96506),t=r(92293),i=r(88308),a=r(74848);function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}function c(e){return e.replace(/([A-Z])/g," $1").trim().split(" ").map((e=>d(e))).join(" ")}function o(e){let{contract:n,environment:r,withChainId:c=!1}=e;const o=(0,i.sZ)("mainnet"!==r);return(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Chain"}),(0,a.jsx)("th",{children:"Domain"}),c&&(0,a.jsx)("th",{children:"Chain ID"}),(0,a.jsx)("th",{children:"Address"}),(0,a.jsx)("th",{children:"Explorer"})]})}),(0,a.jsx)("tbody",{children:o.map((e=>{const r=s.y[e]?.[n];if(!r)return null;const i=t.F[e],o=i.blockExplorers?.[0]?.url,l=o?new URL(o):null;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:i.displayName??d(e)}),(0,a.jsx)("td",{children:i.domainId}),c&&(0,a.jsx)("td",{children:i.chainId}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:r})}),(0,a.jsx)("td",{children:o?(0,a.jsx)("a",{href:`${o}/address/${r}`,target:"_blank",rel:"noopener noreferrer",children:l.hostname}):"N/A"})]},e)}))})]})}},72472:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"reference/addresses/mailbox-addresses","title":"\u90ae\u7bb1","description":"Hyperlane \u57df ID \u5e76\u4e0d\u4fdd\u8bc1\u4e0e\u94fe ID \u5339\u914d\u3002","source":"@site/docs/reference/addresses/mailbox-addresses.mdx","sourceDirName":"reference/addresses","slug":"/reference/addresses/mailbox-addresses","permalink":"/website/docs/reference/addresses/mailbox-addresses","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/reference/addresses/mailbox-addresses.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"protocolSidebar","previous":{"title":"\u5b9e\u73b0\u6307\u5357","permalink":"/website/docs/guides/implementation-guide"},"next":{"title":"\u8de8\u94fe gas \u652f\u4ed8\u4e3b\u7ba1\uff08Hook\uff09","permalink":"/website/docs/reference/addresses/interchain-gas-paymaster"}}');var t=r(74848),i=r(28453),a=r(62464),d=r(14345),c=r(39400);const o={},l="\u90ae\u7bb1",h={},m=[];function x(e){const n={a:"a",admonition:"admonition",h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u90ae\u7bb1",children:"\u90ae\u7bb1"})}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"Hyperlane \u57df ID \u5e76\u4e0d\u4fdd\u8bc1\u4e0e\u94fe ID \u5339\u914d\u3002"}),(0,t.jsxs)(n.p,{children:["\u8bf7\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"/website/docs/reference/domains",children:"Domains"})," \u9875\u9762\u4ee5\u83b7\u53d6\u5b8c\u6574\u7684 Hyperlane \u57df ID \u5217\u8868\u3002"]})]}),"\n",(0,t.jsxs)(a.A,{groupId:"environment",children:[(0,t.jsx)(d.A,{value:"mainnet",label:"\u4e3b\u7f51",children:(0,t.jsx)(c.Ay,{environment:"mainnet",contract:"mailbox",withChainId:!0})}),(0,t.jsx)(d.A,{value:"testnet",label:"\u6d4b\u8bd5\u7f51",children:(0,t.jsx)(c.Ay,{environment:"testnet",contract:"mailbox",withChainId:!0})})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},88308:(e,n,r)=>{r.d(n,{sZ:()=>o});var s=r(92293),t=r(96506),i=r(96540);const a="abacus works",d=[];function c(e){return void 0===e&&(e=!1),function(e,n){return void 0===e&&(e=!1),void 0===n&&(n=!0),Object.values(s.F).filter((r=>{const s=r.deployer?.name.trim().toLowerCase()===a,i=!!r.isTestnet===e,c=!n||!!t.y[r.name]?.mailbox,o=d.includes(r.name);return s&&i&&c&&!o}))}(e).map((e=>e.name))}function o(e){return void 0===e&&(e=!1),(0,i.useMemo)((()=>c(e)),[e])}}}]);