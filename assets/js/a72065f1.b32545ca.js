"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[9609],{14087:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>g,contentTitle:()=>p,default:()=>b,frontMatter:()=>j,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"guides/message-debugging","title":"\u6d88\u606f\u8c03\u8bd5","description":"\u4ece\u539f\u59cb\u4ea4\u6613\u4e2d\u67e5\u627e\u6d88\u606f ID","source":"@site/docs/guides/message-debugging.mdx","sourceDirName":"guides","slug":"/guides/message-debugging","permalink":"/docs/guides/message-debugging","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/guides/message-debugging.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"protocolSidebar","previous":{"title":"\u6ce8\u518c\u8868","permalink":"/docs/reference/registries"},"next":{"title":"\u672f\u8bed\u8868","permalink":"/docs/reference/glossary"}}');var i=n(74848),d=n(28453),c=n(62464),l=n(14345),t=n(96540),o=n(92293),f=n(60496);const a={neutron:"neutron1sjzzd4gwkggy6hrrs8kxxatexzcuz3jecsxm3wqgregkulzj8r7qlnuef4",injective:"inj1palm2wtp6urg0c6j4f2ukv5u5ahdcrqek0sapt"},h=Object.keys(a);function x(e){let{}=e;const[s,n]=(0,t.useState)(h[0]),[r,d]=(0,t.useState)(""),[c,l]=(0,t.useState)("");return(0,i.jsxs)("div",{style:{padding:"10px",borderRadius:"5px",border:"1px solid #ccc"},children:[(0,i.jsx)(f.Ay,{chain:s,chains:h,label:"Destination Chain",onChange:n}),(0,i.jsxs)("div",{children:["Message ID:","\t",(0,i.jsx)("input",{defaultValue:r,onChange:e=>d(e.target.value),placeholder:"0x...",style:{width:"100%",padding:"5px",borderRadius:"5px",border:"1px solid #ccc",fontSize:"1.05em"}})]}),(0,i.jsx)("button",{onClick:async()=>{const e=(n=r).startsWith("0x")?n.slice(2):n;var n;if(64!==e.length)return void l("\u26d4\ufe0f Invalid message ID, must be 32 bytes (64 hex characters)");const i=o.F[s],d=a[s];if(!d)return void l(`\u26d4\ufe0f No known Mailbox found for chain ${s}`);if(!i)return void l(`\u26d4\ufe0f No known Mailbox found for chain ${s}`);const c=i.restUrls?.[0]?.http;if(!c)return void l(`\u26d4\ufe0f No available API set for chain ${s}`);const t={mailbox:{message_delivered:{id:e}}},f=`${c}/cosmwasm/wasm/v1/contract/${d}/smart/${window.btoa(JSON.stringify(t))}`;let h;l("\u23f3 Checking if message is delivered..."),console.log(`Fetching from ${f}`);try{const e=await fetch(f,{method:"GET",headers:{"Content-Type":"application/json"}});h=await e.json()}catch(x){return void l(`\u26d4\ufe0f Error checking message delivery: ${x}`)}l(h?.data?.delivered??!1?"Message successfully delivered: \u2705":"Message not yet delivered: \u274c")},style:{padding:"10px",borderRadius:"5px",border:"1px solid #ccc",marginTop:"10px",fontSize:"1em"},className:"button button--secondary",children:"Check if delivered"}),(0,i.jsx)("div",{style:{margin:"10px"},children:c})]})}const j={},p="\u6d88\u606f\u8c03\u8bd5",g={},m=[];function u(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"\u6d88\u606f\u8c03\u8bd5",children:"\u6d88\u606f\u8c03\u8bd5"})}),"\n",(0,i.jsx)(s.h3,{id:""}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(s.strong,{children:"\u4ece\u539f\u59cb\u4ea4\u6613\u4e2d\u67e5\u627e\u6d88\u606f ID"})}),(0,i.jsx)("div",{children:(0,i.jsxs)(c.A,{groupId:"finding-message-id",children:[(0,i.jsxs)(l.A,{value:"evm",label:"EVM Origin",children:[(0,i.jsxs)(s.p,{children:["\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,i.jsx)(s.a,{href:"https://explorer.hyperlane.xyz",children:"Hyperlane Explorer"}),"\uff0c\u5982\u679c\u60a8\u7684\u94fe\u88ab\u652f\u6301\u3002\u5982\u679c\u60a8\u7684\u94fe\u4e0d\u88ab\u652f\u6301\uff0c\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u539f\u59cb\u4ea4\u6613\u6765\u627e\u5230\u6d88\u606f ID\u3002"]}),(0,i.jsxs)(s.p,{children:["\u5728\u539f\u59cb\u94fe\u7684\u533a\u5757\u6d4f\u89c8\u5668\u4e0a\u67e5\u770b\u539f\u59cb\u4ea4\u6613\u65f6\uff0c\u5bfc\u822a\u5230 ",(0,i.jsx)(s.strong,{children:"\u65e5\u5fd7"})," \u6807\u7b7e\u3002"]}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"DispatchId"})})," \u65e5\u5fd7\u5305\u542b\u6d88\u606f ID\uff0c\u4f5c\u4e3a\u4e3b\u9898\u7f16\u53f7 1\uff08\u7b2c\u4e8c\u4e2a\u4e3b\u9898\uff09\u3002"]}),(0,i.jsxs)(s.p,{children:['\u6709\u65f6\uff0c\u94fe\u533a\u5757\u6d4f\u89c8\u5668\u4e0d\u4f1a\u663e\u793a\u4eba\u6027\u5316\u7684 "DispatchId" \u540d\u79f0\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5176\u4e3b\u9898 0 \u67e5\u627e\u65e5\u5fd7\uff1a',(0,i.jsx)(s.code,{children:"0x788dbc1b7152732178210e7f4d9d010ef016f9eafbe66786bd7169f56e0c353a"}),"\u3002"]}),(0,i.jsx)("figure",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{src:n(82007).A+"",width:"894",height:"257"}),"\n",(0,i.jsx)("figcaption",{children:"\u5728\u539f\u59cb\u4ea4\u6613\u4e0a\u663e\u793a DispatchId \u65e5\u5fd7\u7684 Arbiscan \u793a\u4f8b\u3002"})]})})]}),(0,i.jsxs)(l.A,{value:"cosmos",label:"Cosmos Origin",children:[(0,i.jsxs)(s.p,{children:["\u5728\u539f\u59cb\u94fe\u7684\u533a\u5757\u6d4f\u89c8\u5668\u4e0a\u67e5\u770b\u539f\u59cb\u4ea4\u6613\u65f6\uff0c\u5bfc\u822a\u5230 ",(0,i.jsx)(s.strong,{children:"\u4e8b\u4ef6\u65e5\u5fd7"})," \u6807\u7b7e\u3002"]}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Wasm Mailbox Dispatch Id"})," \u65e5\u5fd7\u5305\u542b\u6d88\u606f ID\u3002"]}),(0,i.jsx)("figure",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{src:n(28253).A+"",width:"546",height:"263"}),"\n",(0,i.jsx)("figcaption",{children:"\u5728\u539f\u59cb\u4ea4\u6613\u4e0a\u663e\u793a\u65e5\u5fd7\u7684 Mintscan \u793a\u4f8b\u3002"})]})})]})]})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(s.strong,{children:"\u8c03\u8bd5\u53d1\u9001\u5230 Cosmos \u94fe\u7684\u6d88\u606f"})}),(0,i.jsxs)("div",{children:[(0,i.jsxs)(s.p,{children:["\u76ee\u524d\uff0c",(0,i.jsx)(s.a,{href:"https://explorer.hyperlane.xyz",children:"Hyperlane Explorer"})," \u4e0d\u652f\u6301\u975e EVM \u94fe\u3002"]}),(0,i.jsx)(s.p,{children:"\u8981\u68c0\u67e5\u60a8\u7684\u6d88\u606f\u662f\u5426\u5df2\u9001\u8fbe\uff0c\u8bf7\u9009\u62e9\u76ee\u6807\u94fe\u5e76\u5728\u4e0b\u9762\u8f93\u5165\u60a8\u7684\u6d88\u606f ID\uff1a"}),(0,i.jsx)(x,{})]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(s.strong,{children:"\u6211\u7684 Warp Route \u8f6c\u8d26\u663e\u793a\u5df2\u9001\u8fbe\uff0c\u4f46\u6211\u6ca1\u6709\u770b\u5230"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)(s.p,{children:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e24\u4e2a\u6b65\u9aa4\u6765\u8c03\u8bd5\u8fd9\u4e2a\u95ee\u9898\uff1a"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u9a8c\u8bc1\u8d44\u91d1\u662f\u5426\u5df2\u6536\u5230\uff1a"})}),(0,i.jsxs)(c.A,{groupId:"verifying-received-funds",children:[(0,i.jsx)(l.A,{value:"evm",label:"EVM Destination",children:(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"\u6253\u5f00\u76ee\u6807\u94fe\u7684\u533a\u5757\u6d4f\u89c8\u5668\uff0c\u5bfc\u822a\u5230\u60a8\u9884\u671f\u7684\u63a5\u6536\u5730\u5740\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u5982\u679c\u60a8\u671f\u671b\u6536\u5230\u4ee3\u5e01\uff08\u4f8b\u5982 ERC-20\uff09\uff0c\u8bf7\u68c0\u67e5\u4ee3\u5e01\u8f6c\u8d26\u6807\u7b7e\uff0c\u67e5\u770b\u8f6c\u8d26\u5230\u60a8\u5730\u5740\u7684\u4ee3\u5e01\u3002"}),"\n",(0,i.jsx)(s.li,{children:'\u5982\u679c\u60a8\u671f\u671b\u6536\u5230\u539f\u751f\u4ee3\u5e01\uff08\u4f8b\u5982 ETH\uff0c\u5728\u4ee5\u592a\u574a\u4e0a\uff09\uff0c\u8bf7\u68c0\u67e5 "\u5185\u90e8\u4ea4\u6613" \u6807\u7b7e\uff0c\u67e5\u770b\u8f6c\u8d26\u5230\u60a8\u5730\u5740\u7684\u539f\u751f\u4ee3\u5e01\u3002'}),"\n"]})}),(0,i.jsx)(l.A,{value:"cosmos",label:"Cosmos Destination",children:(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"\u6253\u5f00\u76ee\u6807\u94fe\u7684\u533a\u5757\u6d4f\u89c8\u5668\uff0c\u5bfc\u822a\u5230\u60a8\u9884\u671f\u7684\u63a5\u6536\u5730\u5740\u3002"}),"\n",(0,i.jsx)(s.li,{children:'\u67e5\u770b\u60a8\u7684 "Coins" \u6216 "Tokens" \u6807\u7b7e\uff0c\u67e5\u627e\u9884\u671f\u7684\u4f59\u989d\u3002'}),"\n",(0,i.jsx)(s.li,{children:'\u5982\u679c\u4e0d\u6e05\u695a\u60a8\u7684\u4f59\u989d\u662f\u5426\u7b26\u5408\u9884\u671f\uff0c\u8bf7\u68c0\u67e5\u4ea4\u6613\u5217\u8868\u3002\u67e5\u627e\u4efb\u4f55\u5305\u542b "Process" \u7684\u4ea4\u6613\u3002'}),"\n"]})})]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u9a8c\u8bc1\u60a8\u7684\u8f6c\u8d26\u63a5\u6536\u8005"})}),(0,i.jsxs)(c.A,{groupId:"verifying-recipient",children:[(0,i.jsxs)(l.A,{value:"evm",label:"EVM Origin",children:[(0,i.jsxs)(s.p,{children:["\u5728\u539f\u59cb\u94fe\u7684\u533a\u5757\u6d4f\u89c8\u5668\u4e0a\u67e5\u770b\u539f\u59cb\u4ea4\u6613\u65f6\uff0c\u5bfc\u822a\u5230 ",(0,i.jsx)(s.strong,{children:"\u65e5\u5fd7"})," \u6807\u7b7e\u3002"]}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"SentTransferRemote"})})," \u65e5\u5fd7\u5305\u542b\u63a5\u6536\u8005\uff0c\u4f5c\u4e3a\u4e3b\u9898\u7f16\u53f7 1\uff08\u7b2c\u4e8c\u4e2a\u4e3b\u9898\uff09\u3002"]}),(0,i.jsxs)(s.p,{children:['\u6709\u65f6\uff0c\u94fe\u533a\u5757\u6d4f\u89c8\u5668\u4e0d\u4f1a\u663e\u793a\u4eba\u6027\u5316\u7684 "SentTransferRemote" \u540d\u79f0\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5176\u4e3b\u9898 0 \u67e5\u627e\u65e5\u5fd7\uff1a',(0,i.jsx)(s.code,{children:"0xd229aacb94204188fe8042965fa6b269c62dc5818b21238779ab64bdd17efeec"}),"\u3002"]}),(0,i.jsx)(s.p,{children:"\u63a5\u6536\u8005\u5730\u5740\u662f\u5c06\u5728\u76ee\u6807\u94fe\u4e0a\u63a5\u6536\u626d\u66f2\u4ee3\u5e01\u7684\u8d26\u6237\u3002\u5982\u679c\u9700\u8981\uff0c\u5730\u5740\u5de6\u4fa7\u4f1a\u586b\u5145\u96f6\u3002"}),(0,i.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u7684\u76ee\u6807\u94fe\u662f EVM \u94fe\uff0c\u65e5\u5fd7\u5c06\u663e\u793a ",(0,i.jsx)(s.code,{children:"0x0000000000000000000000ffffffffffffffffffffffffffffffffffffffff"}),"\uff0c\u8868\u793a ",(0,i.jsx)(s.code,{children:"0xffffffffffffffffffffffffffffffffffffffff"})," \u662f\u8f6c\u8d26\u63a5\u6536\u8005\u3002"]}),(0,i.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u7684\u76ee\u6807\u94fe\u662f Cosmos \u94fe\uff0c\u60a8\u53ef\u4ee5\u5c06\u5341\u516d\u8fdb\u5236\u5185\u5bb9\u8f6c\u6362\u4e3a bech32 \u5730\u5740\uff0c\u4f7f\u7528\u50cf ",(0,i.jsx)(s.a,{href:"https://www.bech32converter.com",children:"\u8fd9\u4e2a\u5de5\u5177"})," \u8fd9\u6837\u7684\u5de5\u5177\u3002\u4e00\u4e9b Cosmos \u94fe\u6709\u4e0d\u540c\u7684\u5730\u5740\u957f\u5ea6\uff0c\u56e0\u6b64\u8bf7\u6ce8\u610f\u590d\u5236\u591a\u5c11\u4e2a\u5b57\u7b26\u3002"]}),(0,i.jsx)("figure",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{src:n(32626).A+"",width:"1230",height:"296"}),"\n",(0,i.jsx)("figcaption",{children:"\u5728\u539f\u59cb\u4ea4\u6613\u4e0a\u663e\u793a DispatchId \u65e5\u5fd7\u7684 Arbiscan \u793a\u4f8b\u3002"})]})})]}),(0,i.jsxs)(l.A,{value:"cosmos",label:"Cosmos Origin",children:[(0,i.jsxs)(s.p,{children:["\u5728\u539f\u59cb\u94fe\u7684\u533a\u5757\u6d4f\u89c8\u5668\u4e0a\u67e5\u770b\u539f\u59cb\u4ea4\u6613\u65f6\uff0c\u5bfc\u822a\u5230 ",(0,i.jsx)(s.strong,{children:"\u4e8b\u4ef6\u65e5\u5fd7"})," \u6807\u7b7e\u3002"]}),(0,i.jsxs)(s.p,{children:["\u5305\u542b ",(0,i.jsx)(s.strong,{children:"Transfer Remote"})," \u7684\u65e5\u5fd7\u5305\u542b\u6d88\u606f ID\uff0c\u4f8b\u5982\uff1a",(0,i.jsx)(s.code,{children:"Wasm Hpl Warp Native Transfer Remote"}),"\u3002"]}),(0,i.jsx)(s.p,{children:"\u63a5\u6536\u8005\u5730\u5740\u662f\u5c06\u5728\u76ee\u6807\u94fe\u4e0a\u63a5\u6536\u626d\u66f2\u4ee3\u5e01\u7684\u8d26\u6237\u3002\u5982\u679c\u9700\u8981\uff0c\u5730\u5740\u5de6\u4fa7\u4f1a\u586b\u5145\u96f6\u3002"}),(0,i.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u7684\u76ee\u6807\u94fe\u662f EVM \u94fe\uff0c\u65e5\u5fd7\u5c06\u663e\u793a ",(0,i.jsx)(s.code,{children:"0x0000000000000000000000ffffffffffffffffffffffffffffffffffffffff"}),"\uff0c\u8868\u793a ",(0,i.jsx)(s.code,{children:"0xffffffffffffffffffffffffffffffffffffffff"})," \u662f\u8f6c\u8d26\u63a5\u6536\u8005\u3002"]}),(0,i.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u7684\u76ee\u6807\u94fe\u662f Cosmos \u94fe\uff0c\u60a8\u53ef\u4ee5\u5c06\u5341\u516d\u8fdb\u5236\u5185\u5bb9\u8f6c\u6362\u4e3a bech32 \u5730\u5740\uff0c\u4f7f\u7528\u50cf ",(0,i.jsx)(s.a,{href:"https://www.bech32converter.com",children:"\u8fd9\u4e2a\u5de5\u5177"})," \u8fd9\u6837\u7684\u5de5\u5177\u3002\u4e00\u4e9b Cosmos \u94fe\u6709\u4e0d\u540c\u7684\u5730\u5740\u957f\u5ea6\uff0c\u56e0\u6b64\u8bf7\u6ce8\u610f\u590d\u5236\u591a\u5c11\u4e2a\u5b57\u7b26\u3002"]}),(0,i.jsx)("figure",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{src:n(19278).A+"",width:"739",height:"444"}),"\n",(0,i.jsx)("figcaption",{children:"\u5728\u539f\u59cb\u4ea4\u6613\u4e0a\u663e\u793a\u65e5\u5fd7\u7684 Mintscan \u793a\u4f8b\u3002"})]})})]})]})]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(s.strong,{children:"\u6211\u7684 Warp Route \u8f6c\u8d26\u63a5\u6536\u8005\u4e0d\u662f\u6211\u60f3\u8981\u7684\u5730\u5740"})}),(0,i.jsx)("div",{children:(0,i.jsxs)(s.p,{children:["\u6709\u65f6\u6d4f\u89c8\u5668\u6269\u5c55\u94b1\u5305\u4e4b\u95f4\u53ef\u80fd\u4f1a\u76f8\u4e92\u7ade\u4e89\uff0c\u60a8\u4e0d\u5e38\u7528\u7684\u94b1\u5305\u7684\u5730\u5740\u4f18\u5148\u4e8e\u60a8\u60f3\u8981\u7684\u94b1\u5305\u3002\u6211\u4eec\u5df2\u7ecf\u770b\u5230\u8fd9\u79cd\u60c5\u51b5\u53d1\u751f\u5728 ",(0,i.jsx)(s.strong,{children:"OKX Wallet"})," \u4e0a\u3002\u8bf7\u68c0\u67e5\u60a8\u6240\u6709\u7684\u94b1\u5305\u5730\u5740\u4ee5\u627e\u5230\u60a8\u7684\u63a5\u6536\u5730\u5740\u3002"]})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(s.strong,{children:"\u81ea\u5df1\u4e2d\u7ee7 EVM \u2192 EVM \u6d88\u606f"})}),(0,i.jsxs)("div",{children:[(0,i.jsxs)(s.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(s.a,{href:"/docs/reference/cli",children:"Hyperlane CLI"}),"\uff0c\u5982\u679c\u5728\u4e24\u4e2a EVM \u94fe\u4e4b\u95f4\uff0c\u53ef\u4ee5\u81ea\u5df1\u4e2d\u7ee7\u6d88\u606f\u3002"]}),(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\u6309\u7167 ",(0,i.jsx)(s.a,{href:"/docs/reference/cli",children:"\u8fd9\u4e9b\u8bf4\u660e"})," \u5728\u672c\u5730\u8bbe\u7f6e CLI\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:["\u6309\u7167 ",(0,i.jsx)(s.a,{href:"#finding-a-message-id-from-an-origin-transaction",children:"\u4e0a\u8ff0\u8bf4\u660e"})," \u67e5\u627e\u60a8\u7684\u6d88\u606f ID\u3002"]}),"\n",(0,i.jsx)(s.li,{children:"\u83b7\u53d6\u4e00\u4e2a\u5728\u76ee\u6807\u94fe\u4e0a\u6709\u8d44\u91d1\u7684\u8d26\u6237\u7684\u79c1\u94a5\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u8fd0\u884c\u547d\u4ee4\u4ee5\u4e2d\u7ee7\u6d88\u606f\uff1a"}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"HYP_KEY=<your-private-key> hyperlane status --relay --origin <origin-chain> --destination <destination-chain> --id <message-id>\n"})}),(0,i.jsx)(s.p,{children:"\u4f8b\u5982\uff1a"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"HYP_KEY=0xffff00000000000000000000000000000000000000000000000000000000ffff hyperlane status --relay --origin base --destination blast --id 0xabcd00000000000000000000000000000000000000000000000000000000abcd\n"})})]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(s.strong,{children:"\u6211\u4ecd\u7136\u9700\u8981\u5e2e\u52a9\u6211\u7684\u6d88\u606f\u672a\u9001\u8fbe"})}),(0,i.jsx)("div",{children:(0,i.jsxs)(s.p,{children:["\u5982\u679c\u4e0a\u8ff0\u6b65\u9aa4\u6ca1\u6709\u5e2e\u52a9\uff0c\u60a8\u53ef\u4ee5\u52a0\u5165\u6211\u4eec\u7684 ",(0,i.jsx)(s.a,{href:"https://discord.com/invite/hyperlane",children:"Discord"})," \u5e76\u5728 ",(0,i.jsx)(s.strong,{children:"#support-forum"})," \u9891\u9053\u521b\u5efa\u65b0\u5e16\u5b50\u3002"]})})]})]})}function b(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19278:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/transfer-remote-cosmos-49af79af2869e412c8a1b6285e7d95de.png"},28253:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/dispatch-id-log-cosmos-943e24d3c9cfe5d3893fded566edeb21.png"},32626:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/transfer-remote-evm-80da0b9008b8324868dfbd4648d109be.png"},60496:(e,s,n)=>{n.d(s,{on:()=>o,Ay:()=>t});var r,i=n(88308);!function(e){e.Ethereum="ethereum",e.Sealevel="sealevel",e.Cosmos="cosmos"}(r||(r={}));r.Ethereum,r.Sealevel,r.Cosmos;var d;!function(e){e[e.NONE=0]="NONE",e[e.PROCESSED=1]="PROCESSED"}(d||(d={}));var c=n(92293),l=n(74848);function t(e){let{chains:s,label:n,onChange:r,chain:i}=e;return(0,l.jsxs)("div",{children:[n,":",(0,l.jsxs)("div",{className:"dropdown dropdown--hoverable margin-left--xs",children:[(0,l.jsx)("button",{className:"button button--secondary navbar__link",children:i}),(0,l.jsx)("ul",{className:"dropdown__menu",children:s.map((e=>(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"dropdown__link",href:`#${n}=${e}`,onClick:()=>r(e),children:e})},e)))})]})]})}function o(e){return t({chains:(0,i.sZ)(!0).filter((e=>c.F[e].protocol===r.Ethereum)),...e})}},82007:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/dispatch-id-log-evm-deaeb1c9c8719a08aadcdc5e1f3ad9ff.png"},88308:(e,s,n)=>{n.d(s,{sZ:()=>o});var r=n(92293),i=n(96506),d=n(96540);const c="abacus works",l=[];function t(e){return void 0===e&&(e=!1),function(e,s){return void 0===e&&(e=!1),void 0===s&&(s=!0),Object.values(r.F).filter((n=>{const r=n.deployer?.name.trim().toLowerCase()===c,d=!!n.isTestnet===e,t=!s||!!i.y[n.name]?.mailbox,o=l.includes(n.name);return r&&d&&t&&!o}))}(e).map((e=>e.name))}function o(e){return void 0===e&&(e=!1),(0,d.useMemo)((()=>t(e)),[e])}}}]);