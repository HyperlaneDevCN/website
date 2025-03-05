"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[5868],{14345:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var t=r(34164);const s={tabItem:"tabItem_Ymn6"};var l=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:r,children:n})}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(96540);const s={},l=t.createContext(s);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:n},e.children)}},38983:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"operate/set-up-agent-keys","title":"\u4ee3\u7406\u5bc6\u94a5","description":"Hyperlane \u4ee3\u7406 - \u9a8c\u8bc1\u8005\u548c\u4e2d\u7ee7\u5668 - \u5fc5\u987b\u914d\u7f6e\u79c1\u94a5\u624d\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002\u9a8c\u8bc1\u8005\u4f7f\u7528\u79c1\u94a5\u6765\u7b7e\u7f72 \u6d88\u606f\u68c0\u67e5\u70b9\uff0c\u800c\u4e2d\u7ee7\u5668\u4f7f\u7528\u79c1\u94a5\u6765\u7b7e\u7f72\u4f20\u9012\u6d88\u606f\u7684\u4ea4\u6613\u3002","source":"@site/docs/operate/set-up-agent-keys.mdx","sourceDirName":"operate","slug":"/operate/set-up-agent-keys","permalink":"/website/docs/operate/set-up-agent-keys","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/operate/set-up-agent-keys.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"operateSidebar","previous":{"title":"\u6982\u8ff0","permalink":"/website/docs/operate/overview-agents"},"next":{"title":"\u8fd0\u884c\u9a8c\u8bc1\u5668","permalink":"/website/docs/operate/validators/run-validators"}}');var s=r(74848),l=r(28453),a=r(62464),i=r(14345);const c={},o="\u4ee3\u7406\u5bc6\u94a5",d={},u=[{value:"1. \u5341\u516d\u8fdb\u5236\u5bc6\u94a5",id:"1-\u5341\u516d\u8fdb\u5236\u5bc6\u94a5",level:2},{value:"\u751f\u6210\u5341\u516d\u8fdb\u5236\u5bc6\u94a5",id:"\u751f\u6210\u5341\u516d\u8fdb\u5236\u5bc6\u94a5",level:3},{value:"2. AWS KMS",id:"2-aws-kms",level:2},{value:"\u521b\u5efa IAM \u7528\u6237",id:"\u521b\u5efa-iam-\u7528\u6237",level:3},{value:"\u521b\u5efa KMS \u5bc6\u94a5",id:"\u521b\u5efa-kms-\u5bc6\u94a5",level:3},{value:"\u67e5\u8be2\u5730\u5740",id:"\u67e5\u8be2\u5730\u5740",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u4ee3\u7406\u5bc6\u94a5",children:"\u4ee3\u7406\u5bc6\u94a5"})}),"\n",(0,s.jsxs)(n.p,{children:["Hyperlane \u4ee3\u7406 - \u9a8c\u8bc1\u8005\u548c\u4e2d\u7ee7\u5668 - \u5fc5\u987b\u914d\u7f6e\u79c1\u94a5\u624d\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002\u9a8c\u8bc1\u8005\u4f7f\u7528\u79c1\u94a5\u6765\u7b7e\u7f72 ",(0,s.jsx)(n.a,{href:"/website/docs/reference/glossary#checkpoint",children:"\u6d88\u606f\u68c0\u67e5\u70b9"}),"\uff0c\u800c\u4e2d\u7ee7\u5668\u4f7f\u7528\u79c1\u94a5\u6765\u7b7e\u7f72\u4f20\u9012\u6d88\u606f\u7684\u4ea4\u6613\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"Hyperlane \u4ee3\u7406\u76ee\u524d\u652f\u6301\u4ee5\u4e24\u79cd\u65b9\u5f0f\u914d\u7f6e\u79c1\u94a5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"1-\u5341\u516d\u8fdb\u5236\u5bc6\u94a5",children:"1. \u5341\u516d\u8fdb\u5236\u5bc6\u94a5"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u4e8e\u5185\u5b58\u7b7e\u540d\u7684\u539f\u59cb\u5341\u516d\u8fdb\u5236\u79c1\u94a5\u3002\u8fd9\u662f\u6700\u7b80\u5355\u548c\u6700\u5feb\u7684\u8bbe\u7f6e\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"\u5341\u516d\u8fdb\u5236\u5bc6\u94a5\u7684\u5b89\u5168\u6027\u4f4e\u4e8e AWS KMS \u5bc6\u94a5\u3002"})}),"\n",(0,s.jsx)(n.h3,{id:"\u751f\u6210\u5341\u516d\u8fdb\u5236\u5bc6\u94a5",children:"\u751f\u6210\u5341\u516d\u8fdb\u5236\u5bc6\u94a5"}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u59a5\u5584\u4fdd\u7ba1\u60a8\u7684\u5730\u5740\u548c\u79c1\u94a5\uff0c\u4ee5\u4fbf\u4e0e\u60a8\u7684\u4ee3\u7406\u4e00\u8d77\u4f7f\u7528\u3002\u8bf7\u52ff\u4e22\u5931\u6216\u6cc4\u9732\u5b83\u3002"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsxs)(i.A,{value:"cast",label:"Cast CLI",children:[(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://book.getfoundry.sh/cast/",children:"Foundry \u7684 cast"}),"\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bc6\u94a5\u5bf9\uff1a"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cast wallet new\n"})}),(0,s.jsx)(n.p,{children:"\u8f93\u51fa\u5c06\u7c7b\u4f3c\u4e8e\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u6210\u529f\u521b\u5efa\u65b0\u7684\u5bc6\u94a5\u5bf9\u3002\n\u5730\u5740: 0x32e6d32E7b1C8691Ef4ad3841003371214a0eebC\n\u79c1\u94a5: 0x2958f0eb2ab71bbfb5ea1422835e20e488778b61e3c107f369572e2b53b578f9\n"})})]}),(0,s.jsxs)(i.A,{value:"privatekeys",label:"Using privatekeys.pw",children:[(0,s.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u8bbf\u95ee ",(0,s.jsx)(n.a,{href:"https://privatekeys.pw/keys/ethereum/random",children:"https://privatekeys.pw/keys/ethereum/random"}),"\uff0c\u8be5\u7f51\u7ad9\u5c06\u81ea\u52a8\u663e\u793a\u4e00\u7cfb\u5217\u5341\u516d\u8fdb\u5236\u79c1\u94a5\u53ca\u5176\u5730\u5740\u3002"]}),(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u7531\u4e8e\u8fd9\u4e9b\u5bc6\u94a5\u662f\u7531\u7f51\u7ad9\u751f\u6210\u7684\uff0c\u56e0\u6b64\u5e94\u5c06\u8fd9\u4e9b\u79c1\u94a5\u89c6\u4e3a\u4e0d\u5b89\u5168\u7684\uff0c\u4e0d\u5e94\u7528\u4e8e\u4efb\u4f55\u5176\u4ed6\u76ee\u7684\uff0c\u9664\u4e86\u6d4b\u8bd5\uff01"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"2-aws-kms",children:"2. AWS KMS"}),"\n",(0,s.jsx)(n.p,{children:"\u7531 AWS \u751f\u6210\u5e76\u5b58\u50a8\u5728 CloudHSM \u4e2d\u7684\u5bc6\u94a5\u3002\u8fd9\u662f\u751f\u4ea7\u4ee3\u7406\u7684\u63a8\u8350\u8bbe\u7f6e\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u521b\u5efa-iam-\u7528\u6237",children:"\u521b\u5efa IAM \u7528\u6237"}),"\n",(0,s.jsx)(n.p,{children:"\u6b64 IAM \u7528\u6237\u5c06\u88ab\u6388\u4e88\u4f7f\u7528\u60a8\u7a0d\u540e\u914d\u7f6e\u7684 KMS \u5bc6\u94a5\u8fdb\u884c\u7b7e\u540d\u7684\u6743\u9650\u3002\u60a8\u7684 Hyperlane \u4ee3\u7406\u5c06\u5728\u7b7e\u7f72\u4ea4\u6613\u65f6\u4f7f\u7528\u6b64\u8eab\u4efd\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u8f6c\u5230 AWS \u63a7\u5236\u53f0\u4e2d\u7684 AWS \u8eab\u4efd\u4e0e\u8bbf\u95ee\u7ba1\u7406 (IAM)\u3002"}),"\n",(0,s.jsx)(n.li,{children:'\u5728\u5de6\u4fa7\u7684"\u8bbf\u95ee\u7ba1\u7406"\u4e0b\uff0c\u70b9\u51fb"\u7528\u6237"\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u70b9\u51fb\u6a59\u8272\u6309\u94ae"\u6dfb\u52a0\u7528\u6237"\u3002'}),"\n",(0,s.jsxs)(n.li,{children:["\u9009\u62e9\u4e00\u4e2a\u53cb\u597d\u4e14\u4fe1\u606f\u4e30\u5bcc\u7684\u7528\u6237\u540d\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"hyperlane-validator-${chain_name}"})," \u6216 ",(0,s.jsx)(n.code,{children:"hyperlane-relayer-${chain_name}"}),"\u3002\u6b64\u7528\u6237\u540d\u5c06\u5728\u540e\u7eed\u6b65\u9aa4\u4e2d\u5f15\u7528\uff0c\u56e0\u6b64\u5982\u679c\u60a8\u9009\u62e9\u4e86\u4e0d\u540c\u7684\u7528\u6237\u540d\uff0c\u8bf7\u786e\u4fdd\u5728\u5c06\u6765\u4f7f\u7528\u6b63\u786e\u7684\u7528\u6237\u540d\u3002"]}),"\n",(0,s.jsx)(n.li,{children:'\u70b9\u51fb"\u4e0b\u4e00\u6b65"\uff0c\u60a8\u65e0\u9700\u4e3a\u7528\u6237\u5206\u914d\u4efb\u4f55\u6743\u9650\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u70b9\u51fb"\u521b\u5efa\u7528\u6237"\u3002'}),"\n",(0,s.jsx)(n.li,{children:"\u70b9\u51fb\u60a8\u521a\u521a\u521b\u5efa\u7684\u7528\u6237\u3002"}),"\n",(0,s.jsx)(n.li,{children:'\u70b9\u51fb"\u5b89\u5168\u51ed\u8bc1"\u9009\u9879\u5361\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u5411\u4e0b\u6eda\u52a8\u5230"\u8bbf\u95ee\u5bc6\u94a5"\uff0c\u7136\u540e\u70b9\u51fb"\u521b\u5efa\u8bbf\u95ee\u5bc6\u94a5"\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u9009\u62e9"\u5728 AWS \u4e4b\u5916\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f"\uff0c\u7136\u540e\u70b9\u51fb"\u4e0b\u4e00\u6b65"\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u70b9\u51fb"\u4e0b\u4e00\u6b65"\uff0c\u65e0\u9700\u6dfb\u52a0\u63cf\u8ff0\u6807\u7b7e\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u70b9\u51fb"\u521b\u5efa\u8bbf\u95ee\u5bc6\u94a5"\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u5c06"\u8bbf\u95ee\u5bc6\u94a5 ID"\u548c"\u79d8\u5bc6\u8bbf\u95ee\u5bc6\u94a5"\u590d\u5236\u5230\u5b89\u5168\u7684\u5730\u65b9\u3002\u8fd9\u4e9b\u5c06\u4f5c\u4e3a\u73af\u5883\u53d8\u91cf\u4f20\u9012\u7ed9\u60a8\u7684 Hyperlane \u4e2d\u7ee7\u5668\u3002'}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u521b\u5efa-kms-\u5bc6\u94a5",children:"\u521b\u5efa KMS \u5bc6\u94a5"}),"\n",(0,s.jsx)(n.p,{children:"\u6b64\u5bc6\u94a5\u5c06\u7531\u60a8\u7684\u4ee3\u7406\u7528\u4e8e\u7b7e\u540d\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u8f6c\u5230 AWS \u63a7\u5236\u53f0\u4e2d\u7684 AWS \u5bc6\u94a5\u7ba1\u7406\u670d\u52a1 (KMS)\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u786e\u4fdd\u60a8\u5728\u8981\u521b\u5efa\u5bc6\u94a5\u7684\u533a\u57df\u3002\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u63a7\u5236\u53f0\u53f3\u4e0a\u89d2\u7684\u533a\u57df\uff0c\u6216\u5728 URL \u7684\u5b50\u57df\u4e2d\u627e\u5230\u540d\u79f0\uff08\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"us-west-2.console.aws.amazon.com"})," \u8868\u793a\u60a8\u5728\u533a\u57df ",(0,s.jsx)(n.code,{children:"us-west-2"})," \u4e2d\u64cd\u4f5c\uff09\u6765\u786e\u8ba4\u3002"]}),"\n",(0,s.jsx)(n.li,{children:'\u5728\u5de6\u4fa7\uff0c\u70b9\u51fb"\u5ba2\u6237\u7ba1\u7406\u7684\u5bc6\u94a5"\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u70b9\u51fb"\u521b\u5efa\u5bc6\u94a5"\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u9009\u62e9"\u975e\u5bf9\u79f0"\u5bc6\u94a5\u7c7b\u578b\u3002'}),"\n",(0,s.jsx)(n.li,{children:'\u9009\u62e9"\u7b7e\u540d\u548c\u9a8c\u8bc1"\u5bc6\u94a5\u7528\u6cd5\u3002'}),"\n",(0,s.jsxs)(n.li,{children:["\u9009\u62e9 ",(0,s.jsx)(n.code,{children:"ECC_SECG_P256K1"})," \u5bc6\u94a5\u89c4\u683c\u3002"]}),"\n",(0,s.jsx)(n.li,{children:'\u70b9\u51fb"\u4e0b\u4e00\u6b65"\u3002'}),"\n",(0,s.jsxs)(n.li,{children:["\u5c06\u522b\u540d\u8bbe\u7f6e\u4e3a\u53cb\u597d\u4e14\u4fe1\u606f\u4e30\u5bcc\u7684\u540d\u79f0\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"hyperlane-validator-signer-${chain_name}"})," \u6216 ",(0,s.jsx)(n.code,{children:"hyperlane-relayer-signer-${chain_name}"}),"\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u867d\u7136\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u60a8\u53ef\u4ee5\u5199\u4e0b\u63cf\u8ff0\u5e76\u6dfb\u52a0\u4efb\u4f55\u60a8\u8ba4\u4e3a\u6709\u7528\u7684\u6807\u7b7e\u3002"}),"\n",(0,s.jsx)(n.li,{children:'\u70b9\u51fb"\u4e0b\u4e00\u6b65"\u3002'}),"\n",(0,s.jsx)(n.li,{children:"\u4e0d\u9700\u8981\u9009\u62e9\u5bc6\u94a5\u7ba1\u7406\u5458\uff0c\u4f46\u5982\u679c\u60a8\u613f\u610f\uff0c\u53ef\u4ee5\u9009\u62e9\u4e00\u4e2a\u3002"}),"\n",(0,s.jsx)(n.li,{children:'\u70b9\u51fb"\u4e0b\u4e00\u6b65"\u3002'}),"\n",(0,s.jsx)(n.li,{children:"\u4e3a\u60a8\u5728\u7b2c 1 \u8282\u4e2d\u521b\u5efa\u7684 IAM \u7528\u6237\u6388\u4e88\u4f7f\u7528\u6743\u9650\u3002"}),"\n",(0,s.jsx)(n.li,{children:'\u70b9\u51fb"\u4e0b\u4e00\u6b65"\u3002'}),"\n",(0,s.jsxs)(n.li,{children:['\u5728\u5ba1\u6838\u9875\u9762\uff0c\u5411\u4e0b\u6eda\u52a8\u5230"\u5bc6\u94a5\u7b56\u7565"\u3002\u751f\u6210\u7684\u5bc6\u94a5\u7b56\u7565\u662f\u53ef\u4ee5\u63a5\u53d7\u7684\uff0c\u4f46\u5982\u679c\u60a8\u5e0c\u671b\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4f7f\u8bbf\u95ee\u6743\u9650\u66f4\u5c11\uff1a',"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:['\u4ece"\u5141\u8bb8\u4f7f\u7528\u5bc6\u94a5"\u7684\u8bed\u53e5\u4e2d\u5220\u9664 ',(0,s.jsx)(n.code,{children:"kms:DescribeKey"})," \u548c ",(0,s.jsx)(n.code,{children:"kms:Verify"})," \u64cd\u4f5c\u3002"]}),"\n",(0,s.jsx)(n.li,{children:'\u5220\u9664"\u5141\u8bb8\u9644\u52a0\u6301\u4e45\u8d44\u6e90"\u7684\u6574\u4e2a\u8bed\u53e5\u3002'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:'\u70b9\u51fb"\u5b8c\u6210"\u3002'}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u9ad8\u7ea7\u7528\u6237\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/website/docs/operate/deploy-with-terraform#iam--kms",children:"IAM/KMS Terraform \u6a21\u5757"})," \u6765\u521b\u5efa IAM \u7528\u6237\u548c KMS \u5bc6\u94a5\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u67e5\u8be2\u5730\u5740",children:"\u67e5\u8be2\u5730\u5740"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u77e5\u9053\u4e0e\u60a8\u751f\u6210\u7684 KMS \u5bc6\u94a5\u76f8\u5173\u8054\u7684\u5730\u5740\u3002"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"cast",label:"With `cast`",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID=<redacted> AWS_SECRET_ACCESS_KEY=<redacted> AWS_KMS_KEY_ID=alias/your-key-alias cast wallet address --aws\n"})})}),(0,s.jsx)(i.A,{value:"script",label:"Using a script",children:(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u4ed3\u5e93\u4e2d\u7684\u811a\u672c\u5c06\u5141\u8bb8\u60a8\u67e5\u8be2\u6b64\u5730\u5740\uff1a",(0,s.jsx)(n.a,{href:"https://github.com/tkporter/get-aws-kms-address",children:"https://github.com/tkporter/get-aws-kms-address"})]})})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},62464:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),s=r(34164),l=r(80052),a=r(56347),i=r(35793),c=r(99025),o=r(4430),d=r(44148);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,l=h(e),[a,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[o,u]=x({queryString:r,groupId:s}),[j,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,d.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),b=(()=>{const e=o??j;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=r(75251);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),s=i[r].value;s!==t&&(o(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...l,className:(0,s.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:l}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function g(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(y,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,f.jsx)(g,{...e,children:u(e.children)},String(n))}}}]);