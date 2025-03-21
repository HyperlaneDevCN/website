"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[196],{28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var c=r(96540);const s={},i=c.createContext(s);function d(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(i.Provider,{value:n},e.children)}},98405:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"operate/agent-config","title":"\u4ee3\u7406\u914d\u7f6e","description":"\u6240\u6709\u4ee3\u7406\u4f7f\u7528\u76f8\u540c\u7684\u914d\u7f6e\u65b9\u6cd5\uff0c\u8fd9\u662f\u4e00\u79cd\u591a\u5c42\u6b21\u7684\u914d\u7f6e\u65b9\u5f0f\uff0c\u5141\u8bb8\u8f7b\u677e\u8986\u76d6\u9ed8\u8ba4\u914d\u7f6e\u3002\u6bcf\u4e00\u5c42\u90fd\u4f1a\u8986\u76d6\u524d\u4e00\u5c42\u4e2d\u91cd\u53e0\u7684\u503c\u3002","source":"@site/docs/operate/agent-config.mdx","sourceDirName":"operate","slug":"/operate/agent-config","permalink":"/website/docs/operate/agent-config","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/operate/agent-config.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"operateSidebar","previous":{"title":"\u76d1\u63a7\u4e0e\u8b66\u62a5","permalink":"/website/docs/operate/relayer/monitoring-alerting"},"next":{"title":"\u914d\u7f6e\u53c2\u8003","permalink":"/website/docs/operate/config-reference"}}');var s=r(74848),i=r(28453);const d={},l="\u4ee3\u7406\u914d\u7f6e",o={},h=[{value:"\u914d\u7f6e\u5c42",id:"\u914d\u7f6e\u5c42",level:2},{value:"\u547d\u4ee4\u884c\u53c2\u6570",id:"\u547d\u4ee4\u884c\u53c2\u6570",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2},{value:"\u4f7f\u7528 Docker \u7684\u914d\u7f6e\u6587\u4ef6",id:"\u4f7f\u7528-docker-\u7684\u914d\u7f6e\u6587\u4ef6",level:2}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u4ee3\u7406\u914d\u7f6e",children:"\u4ee3\u7406\u914d\u7f6e"})}),"\n",(0,s.jsx)(n.p,{children:"\u6240\u6709\u4ee3\u7406\u4f7f\u7528\u76f8\u540c\u7684\u914d\u7f6e\u65b9\u6cd5\uff0c\u8fd9\u662f\u4e00\u79cd\u591a\u5c42\u6b21\u7684\u914d\u7f6e\u65b9\u5f0f\uff0c\u5141\u8bb8\u8f7b\u677e\u8986\u76d6\u9ed8\u8ba4\u914d\u7f6e\u3002\u6bcf\u4e00\u5c42\u90fd\u4f1a\u8986\u76d6\u524d\u4e00\u5c42\u4e2d\u91cd\u53e0\u7684\u503c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e\u5c42",children:"\u914d\u7f6e\u5c42"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:['\u6765\u81ea"\u9ed8\u8ba4\u90e8\u7f72"\u7684\u57fa\u7840\u914d\u7f6e\u4f4d\u4e8e ',(0,s.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/tree/main/rust/main/config",children:"monorepo"}),"\uff0c\u6240\u6709\u8fd9\u4e9b\u914d\u7f6e\u4f1a\u81ea\u52a8\u52a0\u8f7d\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"CONFIG_FILES"})," \u73af\u5883\u53d8\u91cf\u4f20\u5165\u7684\u914d\u7f6e\u6587\u4ef6\u4f1a\u88ab\u52a0\u8f7d\uff0c\u73af\u5883\u53d8\u91cf\u5e94\u4e3a\u4e00\u4e2a\u4ee5\u9017\u53f7\u5206\u9694\u7684 JSON \u6587\u4ef6\u8def\u5f84\u5217\u8868\uff0c\u6309\u987a\u5e8f\u4ece\u7b2c\u4e00\u4e2a\u5230\u6700\u540e\u4e00\u4e2a\u52a0\u8f7d\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4ee5 ",(0,s.jsx)(n.code,{children:"HYP_"})," \u4e3a\u524d\u7f00\u7684\u73af\u5883\u53d8\u91cf\u4f1a\u88ab\u63a5\u4e0b\u6765\u8bfb\u53d6\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4ee5 ",(0,s.jsx)(n.code,{children:"HYP_<AGENT>_"})," \u4e3a\u524d\u7f00\u7684\u73af\u5883\u53d8\u91cf\u968f\u540e\u88ab\u8bfb\u53d6\uff0c\u5e76\u4ec5\u9002\u7528\u4e8e\u5f53\u524d\u4ee3\u7406\u3002\u4f8b\u5982\uff0c",(0,s.jsx)(n.code,{children:"RELAYER"}),"\u3001",(0,s.jsx)(n.code,{children:"VALIDATOR"})," \u548c ",(0,s.jsx)(n.code,{children:"SCRAPER"})," \u53ea\u4f1a\u8bfb\u53d6\u5404\u81ea\u7684\u524d\u7f00\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u547d\u4ee4\u884c\u53c2\u6570\u6700\u540e\u88ab\u8bfb\u53d6\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u547d\u4ee4\u884c\u53c2\u6570",children:"\u547d\u4ee4\u884c\u53c2\u6570"}),"\n",(0,s.jsxs)(n.p,{children:["\u547d\u4ee4\u884c\u53c2\u6570\u5728\u5e94\u7528\u7a0b\u5e8f\u540d\u79f0\u540e\u6dfb\u52a0\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:'./relayer --originChainNames="test1,test2,test3"'}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u652f\u6301\u4ee5\u4e0b\u683c\u5f0f\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--argName argValue"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'--argName "argValue"'})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--argName 'argValue'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--argName=argValue"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'--argName="argValue"'})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--argName='argValue'"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53c2\u6570\u540d\u79f0\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u56e0\u6b64\u5728\u672c\u6307\u5357\u4e2d\u6211\u4eec\u53ef\u80fd\u4f1a\u4ee5\u9a7c\u5cf0\u5f0f\u663e\u793a\u5b83\u4eec\u4ee5\u4fbf\u4e8e\u9605\u8bfb\uff0c\u4f46 ",(0,s.jsx)(n.code,{children:"--argName"})," \u7b49\u540c\u4e8e ",(0,s.jsx)(n.code,{children:"--ARGNAME"})," \u548c ",(0,s.jsx)(n.code,{children:"--argname"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'{ "db": "/path/to/dir" }'})," \u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:'--db "/path/to/dir"'})," \u8bbe\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'{ "chains": { "ethereum": { "name": "ethereum" } } }'}),"\uff08\u7f29\u5199\u4e3a ",(0,s.jsx)(n.code,{children:"chains.ethereum.name"})," \u6216 ",(0,s.jsx)(n.code,{children:"chains.<chain_name>.name"}),"\uff09\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"--chains.ethereum.name ethereum"})," \u8bbe\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'{ "chains": { "avalanche": { "customRpcUrls": "https://some-url.com" } } }'}),"\uff08\u7f29\u5199\u4e3a ",(0,s.jsx)(n.code,{children:"chains.<chain_name>.customrpcurls"}),"\uff09\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:'--chains.avalanche.customrpcurls "https://some-url.com"'})," \u8bbe\u7f6e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,s.jsxs)(n.p,{children:["\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u662f\u8bbe\u7f6e\u975e\u673a\u5bc6\u4e14\u4e0d\u9700\u8981\u6bcf\u6b21\u8fd0\u884c\u65f6\u66f4\u6539\u7684\u5185\u5bb9\u7684\u9996\u9009\u65b9\u5f0f\uff0c\u56e0\u4e3a\u5b83\u662f\u6700\u5bb9\u6613\u68c0\u67e5\u548c\u7f16\u8f91\u7684\u683c\u5f0f\u3002\u6bcf\u4e2a\u914d\u7f6e\u503c\u90fd\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u6b63\u786e\u7684\u540d\u79f0\u8bbe\u7f6e\u4e3a\u73af\u5883\u53d8\u91cf\uff0c\u4f46\u6709\u4e00\u4e9b\u73af\u5883\u53d8\u91cf\u65e0\u6cd5\u5728\u914d\u7f6e\u4e2d\u8bbe\u7f6e\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"CONFIG_FILES"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HYP_"})," \u548c ",(0,s.jsx)(n.code,{children:"HYP_<AGENT>_"})," \u662f\u7b49\u6548\u7684\u524d\u7f00\uff0c\u552f\u4e00\u7684\u533a\u522b\u5728\u4e8e\u5b83\u4eec\u7684\u52a0\u8f7d\u987a\u5e8f\uff0c\u5e76\u4e14\u53ef\u4ee5\u5f15\u7528\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u6240\u6709\u914d\u7f6e\u503c\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u73af\u5883\u540d\u79f0\u5c06\u662f\u8fd9\u4e24\u4e2a\u524d\u7f00\u4e4b\u4e00\uff0c\u7136\u540e\u662f\u4e0b\u5212\u7ebf\u5206\u9694\u7684\u8def\u5f84\u7ec4\u4ef6\u7684\u5927\u5199\u8def\u5f84\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'{ "db": "/path/to/dir" }'})," \u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:'HYP_DB="/path/to/dir"'})," \u6216 ",(0,s.jsx)(n.code,{children:'HYP_RELAYER_DB="/path/to/dir"'})," \u8bbe\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'{ "chains": { "ethereum": { "name": "ethereum" } } }'}),"\uff08\u7f29\u5199\u4e3a ",(0,s.jsx)(n.code,{children:"chains.ethereum.name"})," \u6216 ",(0,s.jsx)(n.code,{children:"chains.<chain_name>.name"}),"\uff09\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:'HYP_CHAINS_ETHEREUM_NAME="ethereum"'})," \u6216 ",(0,s.jsx)(n.code,{children:'HYP_VALIDATOR_CHAINS_ETHEREUM_NAME="ethereum"'})," \u6216 ",(0,s.jsx)(n.code,{children:'HYP_RELAYER_CHAINS_ETHEREUM_NAME="ethereum"'})," \u7b49\u8bbe\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'{ "chains": { "avalanche": { "customRpcUrls": "https://some-url.com" } } }'}),"\uff08\u7f29\u5199\u4e3a ",(0,s.jsx)(n.code,{children:"chains.<chain_name>.customrpcurls"}),"\uff09\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:'HYP_CHAINS_AVALANCHE_CUSTOMRPCURLS="https://some-url.com"'})," \u6216 ",(0,s.jsx)(n.code,{children:'HYP_VALIDATOR_AVALANCHE_CUSTOMRPCURLS="https://some-url.com"'})," \u7b49\u8bbe\u7f6e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528-docker-\u7684\u914d\u7f6e\u6587\u4ef6",children:"\u4f7f\u7528 Docker \u7684\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 Docker \u4e2d\u8fd0\u884c\u4ee3\u7406\u589e\u52a0\u4e86\u4e00\u5c42\u590d\u6742\u6027\uff0c\u56e0\u4e3a\u914d\u7f6e\u6587\u4ef6\u9700\u8981\u5728 Docker \u5bb9\u5668\u5185\u53ef\u8bbf\u95ee\u3002\u53ef\u4ee5\u5728 ",(0,s.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/tree/main/rust/main/config",children:"repo"})," \u4e2d\u627e\u5230\u7684\u57fa\u7840\u914d\u7f6e\u5df2\u7ecf\u5305\u542b\u5728\u63d0\u4f9b\u7684 Docker \u955c\u50cf\u4e2d\uff0c\u5e76\u5c06\u9ed8\u8ba4\u52a0\u8f7d\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6302\u8f7d\u5355\u4e2a\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u4f7f\u7528\u6807\u5fd7 ",(0,s.jsx)(n.code,{children:"--mount type=bind,source=$LOCAL_CONFIG_PATH,target=/config/$CONFIG_NAME,readonly"}),"\uff0c\u7136\u540e\u5c06\u914d\u7f6e\u6587\u4ef6\u6dfb\u52a0\u5230 ",(0,s.jsx)(n.code,{children:"CONFIG_FILES"})," \u4e2d\u4ee5\u4fbf\u52a0\u8f7d\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6302\u8f7d\u6574\u4e2a\u76ee\u5f55\u53ef\u4ee5\u4f7f\u7528\u6807\u5fd7 ",(0,s.jsx)(n.code,{children:"--mount source=$LOCAL_CONFIG_DIR_PATH,target=/config,readonly"}),"\uff0c\u7136\u540e\u6dfb\u52a0\u8981\u52a0\u8f7d\u7684\u5355\u4e2a\u914d\u7f6e\u6587\u4ef6\u5230 ",(0,s.jsx)(n.code,{children:"CONFIG_FILES"})," \u4e2d\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5047\u8bbe\u60a8\u5728\u672c\u5730\u673a\u5668\u7684\u8def\u5f84 ",(0,s.jsx)(n.code,{children:"/home/workspace/ethereum.json"})," \u6709\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u5e0c\u671b\u4f7f\u7528\u5b83\u8fd0\u884c\u9a8c\u8bc1\u5668\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -it --mount type=bind,source=/home/workspace/ethereum.json,target=/config/ethereum.json,readonly -e CONFIG_FILES=/config/ethereum.json $DOCKER_IMAGE ./validator\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"source"})," \u8def\u5f84\u662f\u60a8\u672c\u5730\u673a\u5668\u4e0a\u7684\u8def\u5f84\uff0c",(0,s.jsx)(n.code,{children:"target"})," \u8def\u5f84\u662f\u6e90\u8def\u5f84\u5185\u5bb9\u5728 Docker \u5bb9\u5668\u5185\u53ef\u7528\u7684\u4f4d\u7f6e\uff0c",(0,s.jsx)(n.code,{children:"CONFIG_FILES"})," \u5e94\u6307\u5b9a\u8981\u4ece\u76ee\u6807\u8def\u5f84\u52a0\u8f7d\u7684\u914d\u7f6e\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}}}]);