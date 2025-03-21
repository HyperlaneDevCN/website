"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[1463],{28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var s=r(96540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}},35976:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"reference/ISM/multisig-ISM-interface","title":"\u591a\u91cd\u7b7e\u540d\u6a21\u5757","description":"\u4f7f\u7528\u9a8c\u8bc1\u8005\u7b7e\u540d\u9a8c\u8bc1\u6d88\u606f","source":"@site/docs/reference/ISM/multisig-ISM-interface.mdx","sourceDirName":"reference/ISM","slug":"/reference/ISM/multisig-ISM-interface","permalink":"/docs/reference/ISM/multisig-ISM-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/reference/ISM/multisig-ISM-interface.mdx","tags":[],"version":"current","frontMatter":{}}');var i=r(74848),t=r(28453);const o={},c="\u591a\u91cd\u7b7e\u540d\u6a21\u5757",l={},d=[{value:"\u63a5\u53e3",id:"\u63a5\u53e3",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u81ea\u5b9a\u4e49",id:"\u81ea\u5b9a\u4e49",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u591a\u91cd\u7b7e\u540d\u6a21\u5757",children:"\u591a\u91cd\u7b7e\u540d\u6a21\u5757"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"\u4f7f\u7528\u9a8c\u8bc1\u8005\u7b7e\u540d\u9a8c\u8bc1\u6d88\u606f"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MultisigISM"})," \u662f\u6700\u5e38\u7528\u7684 ISM \u7c7b\u578b\u4e4b\u4e00\u3002\u8fd9\u4e9b ISM \u9a8c\u8bc1 ",(0,i.jsx)(n.code,{children:"n"})," \u4e2a\u9a8c\u8bc1\u8005\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"m"})," \u4e2a\u662f\u5426\u5df2\u7ecf\u8bc1\u5b9e\u4e86\u7279\u5b9a\u8de8\u94fe\u6d88\u606f\u7684\u6709\u6548\u6027\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u63a5\u53e3",children:"\u63a5\u53e3"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MultisigISM"})," \u5fc5\u987b\u5b9e\u73b0 ",(0,i.jsx)(n.code,{children:"IMultisigIsm"})," \u63a5\u53e3\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",metastring:"file=<rootDir>/node_modules/@hyperlane-xyz/core/contracts/interfaces/isms/IMultisigIsm.sol",children:'// SPDX-License-Identifier: MIT OR Apache-2.0\npragma solidity >=0.6.11;\n\nimport {IInterchainSecurityModule} from "../IInterchainSecurityModule.sol";\n\ninterface IMultisigIsm is IInterchainSecurityModule {\n    /**\n     * @notice Returns the set of validators responsible for verifying _message\n     * and the number of signatures required\n     * @dev Can change based on the content of _message\n     * @dev Signatures provided to `verify` must be consistent with validator ordering\n     * @param _message Hyperlane formatted interchain message\n     * @return validators The array of validator addresses\n     * @return threshold The number of validator signatures needed\n     */\n    function validatorsAndThreshold(\n        bytes calldata _message\n    ) external view returns (address[] memory validators, uint8 threshold);\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["hyperlane-monorepo \u5305\u542b ",(0,i.jsxs)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/tree/main/solidity/contracts/isms/multisig",children:[(0,i.jsx)(n.code,{children:"MultisigISM"})," \u5b9e\u73b0"]}),"\uff08\u5305\u62ec",(0,i.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/solidity/contracts/isms/multisig/LegacyMultisigIsm.sol",children:"\u65e7\u7248\u672c"}),"\u548c\u66f4\u8282\u7701 gas \u7684",(0,i.jsx)(n.a,{href:"https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/solidity/contracts/isms/multisig/StaticMultisigIsm.sol",children:"\u7248\u672c"}),"\uff0c\u53ef\u901a\u8fc7\u5de5\u5382\u5408\u7ea6\u90e8\u7f72\uff09\uff0c\u5e94\u7528\u5f00\u53d1\u8005\u53ef\u4ee5\u76f4\u63a5\u90e8\u7f72\u8fd9\u4e9b\u73b0\u6210\u7684\u5b9e\u73b0\uff0c\u5e76\u6307\u5b9a\u6240\u9700\u7684\u914d\u7f6e\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5f00\u53d1\u8005\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u6e90\u94fe\u914d\u7f6e\u4e00\u7ec4 ",(0,i.jsx)(n.code,{children:"n"})," \u4e2a\u9a8c\u8bc1\u8005\uff0c\u4ee5\u53ca\u9a8c\u8bc1\u6d88\u606f\u6240\u9700\u7684\u9a8c\u8bc1\u8005\u7b7e\u540d\u6570\u91cf\uff08",(0,i.jsx)(n.code,{children:"m"}),"\uff09\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9a8c\u8bc1\u8005\u7b7e\u540d",(0,i.jsx)(n.strong,{children:"\u4e0d"}),"\u662f\u7279\u5b9a\u4e8e\u67d0\u4e2a ISM \u7684\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u914d\u7f6e\u4ed6\u4eec\u7684 ",(0,i.jsx)(n.code,{children:"MultisigISM"})," \u4f7f\u7528\u5728 Hyperlane \u4e0a\u8fd0\u884c\u7684",(0,i.jsx)(n.strong,{children:"\u4efb\u4f55"}),"\u9a8c\u8bc1\u8005\uff0c\u5b83\u90fd\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49",children:"\u81ea\u5b9a\u4e49"}),"\n",(0,i.jsxs)(n.p,{children:["hyperlane-monorepo \u5305\u542b\u4e00\u4e2a\u62bd\u8c61\u7684 ",(0,i.jsx)(n.code,{children:"MultisigISM"})," \u5b9e\u73b0\uff0c\u5e94\u7528\u5f00\u53d1\u8005\u53ef\u4ee5\u57fa\u4e8e\u6b64\u8fdb\u884c\u6269\u5c55\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5f00\u53d1\u8005\u53ea\u9700\u8981\u5b9e\u73b0 ",(0,i.jsx)(n.code,{children:"validatorsAndThreshold()"})," \u51fd\u6570\u5373\u53ef\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7\u521b\u5efa\u81ea\u5b9a\u4e49\u5b9e\u73b0\uff0c\u5e94\u7528\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u5176\u5e94\u7528\u9700\u6c42\u5b9a\u5236 ",(0,i.jsx)(n.code,{children:"MultisigISM"})," \u63d0\u4f9b\u7684\u5b89\u5168\u6027\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u81ea\u5b9a\u4e49\u5b9e\u73b0\u53ef\u4ee5\u6839\u636e\u5f85\u9a8c\u8bc1\u6d88\u606f\u7684\u5185\u5bb9\u6765\u6539\u53d8\u6240\u9700\u7684\u7b7e\u540d\u6570\u91cf\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);