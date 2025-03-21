"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[4507],{12735:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"operate/validators/validator-signatures-aws","title":"AWS \u7b7e\u540d\u6876\u8bbe\u7f6e","description":"\u914d\u7f6e\u60a8\u7684\u7b7e\u540d\u5bc6\u94a5\u548c S3 \u6876","source":"@site/docs/operate/validators/validator-signatures-aws.mdx","sourceDirName":"operate/validators","slug":"/operate/validators/validator-signatures-aws","permalink":"/website/docs/operate/validators/validator-signatures-aws","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/operate/validators/validator-signatures-aws.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"operateSidebar","previous":{"title":"\u8fd0\u884c\u9a8c\u8bc1\u5668","permalink":"/website/docs/operate/validators/run-validators"},"next":{"title":"\u76d1\u63a7\u4e0e\u8b66\u62a5","permalink":"/website/docs/operate/validators/monitoring-alerting"}}');var r=i(74848),t=i(28453);const l={},a="AWS \u7b7e\u540d\u6876\u8bbe\u7f6e",d={},o=[{value:"1. \u521b\u5efa AWS IAM \u7528\u6237\u548c\u7b7e\u540d\u5bc6\u94a5",id:"1-\u521b\u5efa-aws-iam-\u7528\u6237\u548c\u7b7e\u540d\u5bc6\u94a5",level:3},{value:"2. \u521b\u5efa S3 \u6876",id:"2-\u521b\u5efa-s3-\u6876",level:3},{value:"3. \u914d\u7f6e S3 \u6876\u6743\u9650",id:"3-\u914d\u7f6e-s3-\u6876\u6743\u9650",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"aws-\u7b7e\u540d\u6876\u8bbe\u7f6e",children:"AWS \u7b7e\u540d\u6876\u8bbe\u7f6e"})}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u60a8\u7684\u7b7e\u540d\u5bc6\u94a5\u548c S3 \u6876"}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"\u8fd9\u4e9b\u8bf4\u660e\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u5176\u4e2d\u9a8c\u8bc1\u8005\u5bc6\u94a5\u5b58\u5728\u4e8e AWS \u7684\u5bc6\u94a5\u7ba1\u7406\u670d\u52a1\u4e2d\uff0c\u9a8c\u8bc1\u8005\u7b7e\u540d\u516c\u5f00\u53d1\u5e03\u5728 S3 \u6876\u4e2d\u3002"}),(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u4ec5\u6253\u7b97\u8fd0\u884c\u4e00\u4e2a\u7528\u4e8e\u6d4b\u8bd5\u6216\u5f00\u53d1\u76ee\u7684\u7684\u9a8c\u8bc1\u8005\uff0c\u8bf7\u8003\u8651\u9075\u5faa ",(0,r.jsx)(n.a,{href:"/website/docs/guides/deploy-hyperlane-local-agents",children:"\u672c\u5730\u8bbe\u7f6e\u6307\u5357"}),"\u3002"]})]}),"\n",(0,r.jsx)(n.h3,{id:"1-\u521b\u5efa-aws-iam-\u7528\u6237\u548c\u7b7e\u540d\u5bc6\u94a5",children:"1. \u521b\u5efa AWS IAM \u7528\u6237\u548c\u7b7e\u540d\u5bc6\u94a5"}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u6309\u7167 ",(0,r.jsx)(n.a,{href:"/website/docs/operate/set-up-agent-keys",children:"\u4ee3\u7406\u5bc6\u94a5"})," \u4e2d\u7684\u8bf4\u660e\u751f\u6210 AWS IAM \u7528\u6237\uff0c\u5e76\u751f\u6210 KMS \u5bc6\u94a5\u6216\u5341\u516d\u8fdb\u5236\u5bc6\u94a5\u3002\u60a8\u5c06\u5728\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u4e2d\u4f7f\u7528\u6b64\u5bc6\u94a5\u7684\u51ed\u636e\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"2-\u521b\u5efa-s3-\u6876",children:"2. \u521b\u5efa S3 \u6876"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u6b65\u9aa4 1\uff08\u521b\u5efa IAM \u7528\u6237\uff09\u662f\u8bbe\u7f6e S3 \u6876\u6240\u5fc5\u9700\u7684\uff0c\u56e0\u6b64\u65e0\u8bba\u4f7f\u7528\u4f55\u79cd\u7c7b\u578b\u7684\u5bc6\u94a5\u90fd\u5fc5\u987b\u6267\u884c\u6b64\u6b65\u9aa4\u3002"})}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u7684\u9a8c\u8bc1\u8005\u5c06\u628a\u5176\u7b7e\u540d\u53d1\u5e03\u5230\u6b64\u6876\u4e2d\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5728 AWS \u63a7\u5236\u53f0\u4e2d\u8f6c\u5230 AWS \u7684 S3\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5728\u53f3\u4fa7\uff0c\u70b9\u51fb\u6a59\u8272\u7684\u201c\u521b\u5efa\u6876\u201d\u6309\u94ae\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u9009\u62e9\u4e00\u4e2a\u4fe1\u606f\u4e30\u5bcc\u7684\u6876\u540d\u79f0\uff0c\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"hyperlane-validator-signatures-${validator_name}-${chain_name}"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u8003\u8651\u9009\u62e9\u4e0e\u60a8\u5728\u4e0a\u4e00\u6b65\u4e2d\u521b\u5efa\u7684 KMS \u5bc6\u94a5\u76f8\u540c\u7684\u533a\u57df\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4fdd\u6301\u63a8\u8350\u7684\u201c\u7981\u7528 ACL\u201d\u8bbe\u7f6e\u4ee5\u8fdb\u884c\u5bf9\u8c61\u6240\u6709\u6743\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u914d\u7f6e\u516c\u5171\u8bbf\u95ee\u8bbe\u7f6e\uff0c\u4ee5\u4fbf\u4e2d\u7ee7\u5668\u53ef\u4ee5\u8bfb\u53d6\u60a8\u7684\u7b7e\u540d\u3002","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u53d6\u6d88\u9009\u4e2d\u201c\u963b\u6b62\u6240\u6709\u516c\u5171\u8bbf\u95ee\u201d\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u9009\u4e2d\u524d\u4e24\u4e2a\u9009\u9879\u4ee5\u963b\u6b62\u901a\u8fc7\u8bbf\u95ee\u63a7\u5236\u5217\u8868\u7684\u8bbf\u95ee\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4fdd\u6301\u6700\u540e\u4e24\u4e2a\u9009\u9879\u672a\u9009\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u6876\u7b56\u7565\u6388\u4e88\u516c\u5171\u8bfb\u53d6\u8bbf\u95ee\u6743\u9650\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u786e\u8ba4\u8fd9\u4e9b\u8bbe\u7f6e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u60a8\u7684\u6876\u516c\u5f00\u8bbf\u95ee\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u5176\u4f59\u9ed8\u8ba4\u8bbe\u7f6e\u662f\u53ef\u4ee5\u7684\uff0c\u70b9\u51fb\u5e95\u90e8\u7684\u6a59\u8272\u201c\u521b\u5efa\u6876\u201d\u6309\u94ae\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-\u914d\u7f6e-s3-\u6876\u6743\u9650",children:"3. \u914d\u7f6e S3 \u6876\u6743\u9650"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u7684\u9a8c\u8bc1\u8005 IAM \u7528\u6237\u9700\u8981\u5199\u5165\u6743\u9650\uff0c\u5e76\u4e14\u5e94\u8be5\u5bf9\u4e2d\u7ee7\u5668\u516c\u5f00\u53ef\u8bfb\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u8fd4\u56de AWS \u63a7\u5236\u53f0\u4e2d\u7684\u201c\u8eab\u4efd\u548c\u8bbf\u95ee\u7ba1\u7406\uff08IAM\uff09\u201d\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5728\u201cIAM \u8d44\u6e90\u201d\u4e0b\uff0c\u60a8\u5e94\u8be5\u770b\u5230\u81f3\u5c11\u4e00\u4e2a\u201c\u7528\u6237\u201d\uff0c\u70b9\u51fb\u8fdb\u5165\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u70b9\u51fb\u60a8\u4e4b\u524d\u914d\u7f6e\u7684\u7528\u6237\u7684\u540d\u79f0\uff08\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"hyperlane-validator-${chain_name}"}),"\uff09\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5c06\u201c\u7528\u6237 ARN\u201d\u590d\u5236\u5230\u526a\u8d34\u677f\uff0c\u5b83\u5e94\u8be5\u7c7b\u4f3c\u4e8e ",(0,r.jsx)(n.code,{children:"arn:aws:iam::791444913613:user/hyperlane-validator-${chain_name}"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u8fd4\u56de AWS \u63a7\u5236\u53f0\u4e2d\u7684\u201cS3\u201d\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u70b9\u51fb\u60a8\u521a\u521b\u5efa\u7684\u6876\u7684\u540d\u79f0\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5728\u6876\u540d\u79f0\u4e0b\u65b9\uff0c\u70b9\u51fb\u201c\u6743\u9650\u201d\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5411\u4e0b\u6eda\u52a8\u5230\u201c\u6876\u7b56\u7565\u201d\uff0c\u7136\u540e\u70b9\u51fb\u201c\u7f16\u8f91\u201d\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\u3002\u6876 ARN \u663e\u793a\u5728\u60a8\u8f93\u5165\u7b56\u7565\u7684\u5730\u65b9\u4e0a\u65b9\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": "*",\n      "Action": ["s3:GetObject", "s3:ListBucket"],\n      "Resource": ["${BUCKET_ARN}", "${BUCKET_ARN}/*"]\n    },\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "${USER_ARN}"\n      },\n      "Action": ["s3:DeleteObject", "s3:PutObject"],\n      "Resource": "${BUCKET_ARN}/*"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u9ad8\u7ea7\u7528\u6237\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"/website/docs/operate/deploy-with-terraform#iam--kms",children:"S3 Terraform \u6a21\u5757"})," \u6765\u521b\u5efa\u5177\u6709\u6b63\u786e\u6743\u9650\u7684 S3 \u6876\u3002"]})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var s=i(96540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);