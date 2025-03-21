"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[1419],{7656:(e,n,s)=>{s.d(n,{Ay:()=>a,RM:()=>t});var r=s(74848),i=s(28453);const t=[];function l(e){const n={mermaid:"mermaid",...(0,i.R)(),...e.components};return(0,r.jsx)(n.mermaid,{value:'flowchart LR\n    subgraph Origin Chain\n      Sender\n      M_O[(Mailbox)]\n      Sender -- "dispatch(destination, recipient, body)" --\x3e M_O\n    end\n\n    subgraph Destination Chain\n      Recipient[Recipient]\n      M_D[(Mailbox)]\n\n      M_D -- "handle(origin, sender, body)" --\x3e Recipient\n    end\n\n    M_O -. "relay" .-> M_D'})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50445:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>j,contentTitle:()=>p,default:()=>y,frontMatter:()=>m,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"your-first-message","title":"\u53d1\u9001\u4f60\u7684\u7b2c\u4e00\u6761\u8de8\u94fe\u6d88\u606f","description":"\u672c\u6559\u7a0b\u6f14\u793a\u5982\u4f55\u53d1\u9001\u8de8\u94fe\u6d88\u606f\u5230\u9884\u5148\u90e8\u7f72\u7684TestRecipient\u5408\u7ea6\u3002","source":"@site/docs/your-first-message.mdx","sourceDirName":".","slug":"/your-first-message","permalink":"/website/docs/your-first-message","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/your-first-message.mdx","tags":[],"version":"current","frontMatter":{}}');var i=s(74848),t=s(28453),l=s(65537),a=s(79329),o=s(7656),d=s(99625),c=s(72891),h=s(92293),x=s(58069);function u(){return(0,c.A)({exampleCode:e=>{let{mailbox:n,originChain:s,destinationChain:r,paddedRecipient:t,body:o,value:d}=e;const c=h.F[s].rpcUrls[0].http,u=h.F[s]?.blockExplorers[0].url,m=new URL(u),p=`${u}/address/${n}#writeProxyContract#F3`,j=h.F[r].domainId;return(0,i.jsxs)(l.A,{children:[(0,i.jsxs)(a.A,{value:"cli",label:"Hyperlane CLI",default:!0,children:["Install the CLI:",(0,i.jsx)(x.A,{language:"shell",children:"npm install -g @hyperlane-xyz/cli"}),"Send the message:",(0,i.jsxs)(x.A,{language:"shell",children:["hyperlane send message --origin ",s," --destination"," ",r,' --body "',o,'"']})]}),(0,i.jsxs)(a.A,{value:"cast",label:"Cast",children:["Install ",(0,i.jsx)("code",{children:"cast"}),":",(0,i.jsx)(x.A,{language:"shell",children:"curl -L https://foundry.paradigm.xyz | bash"}),"Send the message:",(0,i.jsxs)(x.A,{language:"shell",children:["cast send ",n,' "dispatch(uint32,bytes32,bytes)"'," ",j," ",t,' $(cast --from-utf8 "',o,'")'," ","--rpc-url ",c," --value ",d,"ether"]})]}),(0,i.jsx)(a.A,{value:"explorer",label:"Explorer",children:(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["Navigate to the"," ",(0,i.jsxs)("a",{href:p,target:"_blank",children:[m.hostname," ",(0,i.jsx)("code",{children:"dispatch"})," interface"]})]}),(0,i.jsxs)("li",{children:["Click on the ",(0,i.jsx)("code",{children:"Connect to Web3"})," button to connect your Wallet. Make sure you are on ",(0,i.jsx)("code",{children:s}),"."]}),(0,i.jsxs)("li",{children:["Fill in value: ",(0,i.jsx)("code",{children:d}),", destination:"," ",(0,i.jsx)("code",{children:j}),", recipient:"," ",(0,i.jsx)("code",{children:t}),', and message the hex representation of "',o,'". For example if you have'," ",(0,i.jsx)("code",{children:"cast"})," installed,"," ",(0,i.jsx)("code",{children:'cast --from-utf8 "Hello, world"'})," returns"," ",(0,i.jsx)("code",{children:"0x48656c6c6f2c20776f726c64"}),"."]}),(0,i.jsxs)("li",{children:["Click the ",(0,i.jsx)("code",{children:"Write"})," button to submit the transaction!"]})]})})]})}})}const m={},p="\u53d1\u9001\u4f60\u7684\u7b2c\u4e00\u6761\u8de8\u94fe\u6d88\u606f",j={},g=[...o.RM,{value:"\u68c0\u67e5\u7ed3\u679c",id:"\u68c0\u67e5\u7ed3\u679c",level:2}];function b(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u53d1\u9001\u4f60\u7684\u7b2c\u4e00\u6761\u8de8\u94fe\u6d88\u606f",children:"\u53d1\u9001\u4f60\u7684\u7b2c\u4e00\u6761\u8de8\u94fe\u6d88\u606f"})}),"\n",(0,i.jsxs)(n.p,{children:["\u672c\u6559\u7a0b\u6f14\u793a\u5982\u4f55",(0,i.jsx)(n.a,{href:"/website/docs/reference/messaging/send",children:"\u53d1\u9001"}),"\u8de8\u94fe\u6d88\u606f\u5230\u9884\u5148\u90e8\u7f72\u7684",(0,i.jsx)(n.code,{children:"TestRecipient"}),"\u5408\u7ea6\u3002"]}),"\n",(0,i.jsx)(o.Ay,{}),"\n",(0,i.jsxs)(n.p,{children:["\u53d1\u9001\u6d88\u606f\u53ea\u9700\u8c03\u7528",(0,i.jsx)(n.code,{children:"Mailbox.dispatch"}),"\u3002\u8bf7\u786e\u4fdd\u4f60\u5728\u6e90\u94fe\u4e0a\u6709\u4e00\u4e2a\u62e5\u6709\u8d44\u91d1\u7684\u8d26\u6237\u3002"]}),"\n",(0,i.jsx)(u,{}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728",(0,i.jsx)(n.a,{href:"https://explorer.hyperlane.xyz/",children:"explorer.hyperlane.xyz"}),"\u4e0a\u901a\u8fc7\u641c\u7d22\u4f60\u7684",(0,i.jsx)(n.code,{children:"Mailbox.dispatch"}),"\u8c03\u7528\u7684",(0,i.jsx)(n.strong,{children:"\u4ea4\u6613\u54c8\u5e0c"}),"\u6765\u67e5\u770b\u6d88\u606f\u7684\u5904\u7406\u8fdb\u5ea6\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u68c0\u67e5\u7ed3\u679c",children:"\u68c0\u67e5\u7ed3\u679c"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TestRecipient"}),"\u6709\u4ee5\u4e0b",(0,i.jsx)(n.a,{href:"/website/docs/reference/messaging/receive",children:"handle"}),"\u5b9e\u73b0\uff1a"]}),"\n",(0,i.jsx)(l.A,{groupId:"lang",children:(0,i.jsx)(a.A,{value:"sol",label:"Solidity",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",metastring:"file=<rootDir>/node_modules/@hyperlane-xyz/core/contracts/test/TestRecipient.sol#L30-L38",children:"function handle(\n    uint32 _origin,\n    bytes32 _sender,\n    bytes calldata _data\n) external payable virtual override {\n    emit ReceivedMessage(_origin, _sender, msg.value, string(_data));\n    lastSender = _sender;\n    lastData = _data;\n}\n"})})})}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u65e5\u5fd7\u4ee5\u67e5\u770b\u4f60\u7684\u6d88\u606f\u4f20\u9012\u60c5\u51b5\uff01"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsxs)("summary",{children:["\u6d4b\u8bd5\u7f51",(0,i.jsx)(n.code,{children:"TestRecipient"}),"\u5730\u5740"]}),(0,i.jsx)(d.Ay,{environment:"testnet",contract:"testRecipient"})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsxs)("summary",{children:["\u6d4b\u8bd5\u7f51",(0,i.jsx)(n.code,{children:"Mailbox"}),"\u5730\u5740"]}),(0,i.jsx)(d.Ay,{environment:"testnet",contract:"mailbox"})]})]})}function y(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},57929:(e,n,s)=>{s.d(n,{sZ:()=>d});var r=s(92293),i=s(96506),t=s(96540);const l="abacus works",a=[];function o(e){return void 0===e&&(e=!1),function(e,n){return void 0===e&&(e=!1),void 0===n&&(n=!0),Object.values(r.F).filter((s=>{const r=s.deployer?.name.trim().toLowerCase()===l,t=!!s.isTestnet===e,o=!n||!!i.y[s.name]?.mailbox,d=a.includes(s.name);return r&&t&&o&&!d}))}(e).map((e=>e.name))}function d(e){return void 0===e&&(e=!1),(0,t.useMemo)((()=>o(e)),[e])}},65032:(e,n,s)=>{s.d(n,{on:()=>d,Ay:()=>o});var r,i=s(57929);!function(e){e.Ethereum="ethereum",e.Sealevel="sealevel",e.Cosmos="cosmos"}(r||(r={}));r.Ethereum,r.Sealevel,r.Cosmos;var t;!function(e){e[e.NONE=0]="NONE",e[e.PROCESSED=1]="PROCESSED"}(t||(t={}));var l=s(92293),a=s(74848);function o(e){let{chains:n,label:s,onChange:r,chain:i}=e;return(0,a.jsxs)("div",{children:[s,":",(0,a.jsxs)("div",{className:"dropdown dropdown--hoverable margin-left--xs",children:[(0,a.jsx)("button",{className:"button button--secondary navbar__link",children:i}),(0,a.jsx)("ul",{className:"dropdown__menu",children:n.map((e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"dropdown__link",href:`#${s}=${e}`,onClick:()=>r(e),children:e})},e)))})]})]})}function d(e){return o({chains:(0,i.sZ)(!0).filter((e=>l.F[e].protocol===r.Ethereum)),...e})}},72891:(e,n,s)=>{s.d(n,{A:()=>x,W:()=>u});var r=s(96540),i=s(65032),t=s(92293),l=s(96506),a=s(58069),o=s(79329),d=s(65537),c=s(57929),h=s(74848);function x(e){const n=(0,c.sZ)(!0),[s,a]=(0,r.useState)(n[0]),[o,d]=(0,r.useState)(n[1]),[x,u]=(0,r.useState)("Hello, world"),m=t.F[s].domainId,p=t.F[o].domainId,j=l.y[s]?.mailbox,g=l.y[s]?.merkleTreeHook,b=l.y[s]?.testRecipient,y=(void 0===v&&(v=32),(f=b).startsWith("0x")&&(f=f.slice(2)),"0x"+f.padStart(2*v,"0"));var f,v;return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"container row",children:[(0,h.jsx)("div",{className:"margin-horiz--sm",children:(0,h.jsx)(i.on,{label:"origin",chain:s,onChange:a})}),(0,h.jsx)("div",{className:"margin-horiz--sm",children:(0,h.jsx)(i.on,{label:"destination",chain:o,onChange:d})}),(0,h.jsxs)("div",{className:"margin-horiz--sm",children:["body:","\t",(0,h.jsx)("input",{defaultValue:x,onChange:e=>u(e.target.value)})]})]}),e.exampleCode({mailbox:j,merkleTreeHook:g,originChain:s,originDomain:m,destinationChain:o,destinationDomain:p,recipient:b,paddedRecipient:y,body:x,value:"0.01"})]})}const u=e=>x({exampleCode:n=>(0,h.jsxs)(d.A,{groupId:"lang",children:[(0,h.jsx)(o.A,{value:"sol",label:"Solidity",children:(0,h.jsx)(a.A,{language:"solidity",children:e.solidity(n)})}),(0,h.jsx)(o.A,{value:"cw",label:"CosmWasm",children:"\ud83d\udea7 Coming soon! \ud83d\udea7"}),(0,h.jsx)(o.A,{value:"sl",label:"Sealevel",children:"\ud83d\udea7 Coming soon! \ud83d\udea7"})]})})},99625:(e,n,s)=>{s.d(n,{Ay:()=>d,ZH:()=>a,_R:()=>o});var r=s(96506),i=s(92293),t=s(57929),l=s(74848);function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}function o(e){return e.replace(/([A-Z])/g," $1").trim().split(" ").map((e=>a(e))).join(" ")}function d(e){let{contract:n,environment:s,withChainId:o=!1}=e;const d=(0,t.sZ)("mainnet"!==s);return(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Chain"}),(0,l.jsx)("th",{children:"Domain"}),o&&(0,l.jsx)("th",{children:"Chain ID"}),(0,l.jsx)("th",{children:"Address"}),(0,l.jsx)("th",{children:"Explorer"})]})}),(0,l.jsx)("tbody",{children:d.map((e=>{const s=r.y[e]?.[n];if(!s)return null;const t=i.F[e],d=t.blockExplorers?.[0]?.url,c=d?new URL(d):null;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:t.displayName??a(e)}),(0,l.jsx)("td",{children:t.domainId}),o&&(0,l.jsx)("td",{children:t.chainId}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{children:s})}),(0,l.jsx)("td",{children:d?(0,l.jsx)("a",{href:`${d}/address/${s}`,target:"_blank",rel:"noopener noreferrer",children:c.hostname}):"N/A"})]},e)}))})]})}}}]);