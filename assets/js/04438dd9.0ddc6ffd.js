"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[1101],{14345:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:r,children:n})}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var t=r(96540);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}},62464:(e,n,r)=>{r.d(n,{A:()=>g});var t=r(96540),a=r(34164),i=r(80052),s=r(56347),l=r(35793),c=r(99025),o=r(4430),u=r(44148);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,i=h(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[o,d]=m({queryString:r,groupId:a}),[f,y]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),I=(()=>{const e=o??f;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{I&&c(I)}),[I]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),y(e)}),[d,y,i]),tabValues:i}}var y=r(75251);const I={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function M(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),u=e=>{const n=e.currentTarget,r=c.indexOf(n),a=l[r].value;a!==t&&(o(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{c.push(e)},onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",I.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function S(e){let{lazy:n,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",I.tabList),children:[(0,x.jsx)(M,{...n,...e}),(0,x.jsx)(S,{...n,...e})]})}function g(e){const n=(0,y.A)();return(0,x.jsx)(b,{...e,children:d(e.children)},String(n))}},67774:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"reference/ISM/specify-your-ISM","title":"\u8de8\u94fe\u5b89\u5168\u6a21\u5757\u63a5\u53e3","description":"Hyperlane \u901a\u8fc7\u901a\u7528\u7684\u667a\u80fd\u5408\u7ea6\u63a5\u53e3\u6a21\u5757\u5316\u8de8\u94fe\u6d88\u606f\u5b89\u5168\u3002\u5b9e\u73b0\u8d1f\u8d23\u9a8c\u8bc1\u5728\u76ee\u6807\u94fe\u4e0a\u4f20\u9012\u7684\u6d88\u606f\u786e\u5b9e\u662f\u5728\u6e90\u94fe\u4e0a\u53d1\u9001\u7684\uff0c\u8fd9\u9700\u8981\u4f7f\u7528\u67d0\u4e9b\u8bc1\u660e\u5143\u6570\u636e\u3002","source":"@site/docs/reference/ISM/specify-your-ISM.mdx","sourceDirName":"reference/ISM","slug":"/reference/ISM/specify-your-ISM","permalink":"/docs/reference/ISM/specify-your-ISM","draft":false,"unlisted":false,"editUrl":"https://github.com/HyperlaneDevCN/website/tree/master/docs/reference/ISM/specify-your-ISM.mdx","tags":[],"version":"current","frontMatter":{}}');var a=r(74848),i=r(28453),s=r(62464),l=r(14345),c=r(95898);const o={},u="\u8de8\u94fe\u5b89\u5168\u6a21\u5757\u63a5\u53e3",d={},h=[...c.RM,{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:2},{value:"\u6a21\u5757\u7c7b\u578b",id:"\u6a21\u5757\u7c7b\u578b",level:3},{value:"\u6307\u5b9a ISM",id:"\u6307\u5b9a-ism",level:2},{value:"\u65f6\u5e8f\u56fe",id:"\u65f6\u5e8f\u56fe",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\u8de8\u94fe\u5b89\u5168\u6a21\u5757\u63a5\u53e3",children:"\u8de8\u94fe\u5b89\u5168\u6a21\u5757\u63a5\u53e3"})}),"\n",(0,a.jsx)(n.p,{children:"Hyperlane \u901a\u8fc7\u901a\u7528\u7684\u667a\u80fd\u5408\u7ea6\u63a5\u53e3\u6a21\u5757\u5316\u8de8\u94fe\u6d88\u606f\u5b89\u5168\u3002\u5b9e\u73b0\u8d1f\u8d23\u9a8c\u8bc1\u5728\u76ee\u6807\u94fe\u4e0a\u4f20\u9012\u7684\u6d88\u606f\u786e\u5b9e\u662f\u5728\u6e90\u94fe\u4e0a\u53d1\u9001\u7684\uff0c\u8fd9\u9700\u8981\u4f7f\u7528\u67d0\u4e9b\u8bc1\u660e\u5143\u6570\u636e\u3002"}),"\n",(0,a.jsx)(c.Ay,{}),"\n",(0,a.jsxs)(n.p,{children:["\u6d88\u606f\u63a5\u6536\u8005\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,a.jsx)(n.code,{children:"InterchainSecurityModule"})," \u5730\u5740\u6765\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u7684\u5b89\u5168\u7ea6\u675f\u3002\u8fd9\u4e2a\u5b9e\u73b0\u53ef\u4ee5\u6839\u636e\u5e94\u7528\u7a0b\u5e8f\u7684\u9700\u6c42\u8fdb\u884c\u914d\u7f6e\u3001\u7ec4\u5408\u548c\u5b9a\u5236\u3002"]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsxs)("summary",{children:[(0,a.jsx)(n.code,{children:"IInterchainSecurityModule"})," \u63a5\u53e3"]}),(0,a.jsx)(s.A,{groupId:"lang",children:(0,a.jsx)(l.A,{value:"sol",label:"Solidity",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",metastring:"file=<rootDir>/node_modules/@hyperlane-xyz/core/contracts/interfaces/IInterchainSecurityModule.sol",children:"// SPDX-License-Identifier: MIT OR Apache-2.0\npragma solidity >=0.6.11;\n\ninterface IInterchainSecurityModule {\n    enum Types {\n        UNUSED,\n        ROUTING,\n        AGGREGATION,\n        LEGACY_MULTISIG,\n        MERKLE_ROOT_MULTISIG,\n        MESSAGE_ID_MULTISIG,\n        NULL, // used with relayer carrying no metadata\n        CCIP_READ,\n        ARB_L2_TO_L1,\n        WEIGHTED_MERKLE_ROOT_MULTISIG,\n        WEIGHTED_MESSAGE_ID_MULTISIG,\n        OP_L2_TO_L1\n    }\n\n    /**\n     * @notice Returns an enum that represents the type of security model\n     * encoded by this ISM.\n     * @dev Relayers infer how to fetch and format metadata.\n     */\n    function moduleType() external view returns (uint8);\n\n    /**\n     * @notice Defines a security model responsible for verifying interchain\n     * messages based on the provided metadata.\n     * @param _metadata Off-chain metadata provided by a relayer, specific to\n     * the security model encoded by the module (e.g. validator signatures)\n     * @param _message Hyperlane encoded interchain message\n     * @return True if the message was verified\n     */\n    function verify(\n        bytes calldata _metadata,\n        bytes calldata _message\n    ) external returns (bool);\n}\n\ninterface ISpecifiesInterchainSecurityModule {\n    function interchainSecurityModule()\n        external\n        view\n        returns (IInterchainSecurityModule);\n}\n"})})})})]}),"\n",(0,a.jsx)(n.h2,{id:"\u9a8c\u8bc1",children:"\u9a8c\u8bc1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",metastring:"file=<rootDir>/node_modules/@hyperlane-xyz/core/contracts/interfaces/IInterchainSecurityModule.sol#L31-L34",children:"* the security model encoded by the module (e.g. validator signatures)\n* @param _message Hyperlane encoded interchain message\n* @return True if the message was verified\n*/\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Mailbox \u5728\u5411\u63a5\u6536\u8005\u4f20\u9012\u6d88\u606f\u4e4b\u524d\u4f1a\u8c03\u7528 ",(0,a.jsx)(n.code,{children:"verify"}),"\u3002\u5982\u679c ",(0,a.jsx)(n.code,{children:"verify"})," \u56de\u6eda\u6216\u8fd4\u56de ",(0,a.jsx)(n.code,{children:"false"}),"\uff0c\u6d88\u606f\u5c06\u4e0d\u4f1a\u88ab\u4f20\u9012\u3002"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"_metadata"})," \u7531\u4e2d\u7ee7\u5668\u63d0\u4f9b\u7684\u4efb\u610f\u5b57\u8282\u7ec4\u6210\u3002\u901a\u5e38\uff0c\u8fd9\u4e9b\u5b57\u8282\u662f\u7279\u5b9a\u4e8e ISM \u7684\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e",(0,a.jsx)(n.a,{href:"/docs/reference/ISM/multisig-ISM-interface",children:"\u591a\u91cd\u7b7e\u540d ISM"}),"\uff0c",(0,a.jsx)(n.code,{children:"_metadata"})," \u5fc5\u987b\u5305\u542b\u9a8c\u8bc1\u8005\u7b7e\u540d\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"_message"})," \u7531\u5f85\u9a8c\u8bc1\u7684 Hyperlane \u6d88\u606f\u7ec4\u6210\u3002ISM \u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u68c0\u67e5\u5f85\u9a8c\u8bc1\u6d88\u606f\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\u4f8b\u5982\uff0c",(0,a.jsx)(n.a,{href:"/docs/reference/ISM/multisig-ISM-interface",children:"\u591a\u91cd\u7b7e\u540d ISM"})," \u53ef\u4ee5\u6839\u636e\u6d88\u606f\u7684\u6e90\u94fe\u66f4\u6539\u9a8c\u8bc1\u8005\u96c6\u5408\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u6a21\u5757\u7c7b\u578b",children:"\u6a21\u5757\u7c7b\u578b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",metastring:"file=<rootDir>/node_modules/@hyperlane-xyz/core/contracts/interfaces/IInterchainSecurityModule.sol#L21",children:"* @notice Returns an enum that represents the type of security model\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u7528\u4e8e\u5411\u4e2d\u7ee7\u5668\u8868\u660e\u5982\u4f55\u7f16\u7801 ",(0,a.jsx)(n.code,{children:"_metadata"}),"\u3002ISM ",(0,a.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u8fd4\u56de\u652f\u6301\u7684\u6a21\u5757\u7c7b\u578b\u4e4b\u4e00\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",metastring:"file=<rootDir>/node_modules/@hyperlane-xyz/core/contracts/interfaces/IInterchainSecurityModule.sol#L5-L14",children:"enum Types {\n    UNUSED,\n    ROUTING,\n    AGGREGATION,\n    LEGACY_MULTISIG,\n    MERKLE_ROOT_MULTISIG,\n    MESSAGE_ID_MULTISIG,\n    NULL, // used with relayer carrying no metadata\n    CCIP_READ,\n    ARB_L2_TO_L1,\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u6240\u6709 ISM \u5408\u7ea6\u90fd\u5b9e\u73b0\u4e86 ISM \u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u8981\u6c42\u5b9a\u4e49 ",(0,a.jsx)(n.code,{children:"moduleType"}),"\u3002\n\u4e2d\u7ee7\u5668\u6839\u636e\u8fd9\u4e2a\u7c7b\u578b\u6765\u786e\u5b9a\u8be5 ISM \u6240\u9700\u7684\u5143\u6570\u636e\u3002\n\u6709\u5173\u6a21\u5757\u7c7b\u578b\u53ca\u5176\u5143\u6570\u636e\u683c\u5f0f\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,a.jsx)(n.a,{href:"/docs/protocol/ISM/modular-security#module-type",children:"\u534f\u8bae"}),"\u3002"]})}),"\n",(0,a.jsx)(n.h2,{id:"\u6307\u5b9a-ism",children:"\u6307\u5b9a ISM"}),"\n",(0,a.jsxs)(n.p,{children:["\u8981\u6307\u5b9a\u60f3\u8981\u4f7f\u7528\u7684 ISM\uff0c\u5f00\u53d1\u8005\u9700\u8981\u5728\u4efb\u4f55\u901a\u8fc7 ",(0,a.jsx)(n.code,{children:"handle()"})," \u63a5\u6536\u8de8\u94fe\u6d88\u606f\u7684\u5408\u7ea6\u4e2d\u5b9e\u73b0 ",(0,a.jsx)(n.code,{children:"ISpecifiesInterchainSecurityModule"})," \u63a5\u53e3\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",children:"interface ISpecifiesInterchainSecurityModule {\n    function interchainSecurityModule()\n        external\n        view\n        returns (IInterchainSecurityModule);\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u672a\u6307\u5b9a ISM\uff0c\u6216\u8005\u6307\u5b9a\u7684 ISM \u662f\u7a7a\u5730\u5740\uff0c\u5c06\u4f7f\u7528\u5728\u76ee\u6807\u94fe Mailbox \u4e0a\u914d\u7f6e\u7684\u9ed8\u8ba4 ISM\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u65f6\u5e8f\u56fe",children:"\u65f6\u5e8f\u56fe"}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u8de8\u94fe\u6d88\u606f\u5728\u76ee\u6807\u94fe\u4e0a\u88ab\u9a8c\u8bc1\u548c\u4f20\u9012\u7684\u8be6\u7ec6\u65f6\u5e8f\u56fe\u3002"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["\u5982\u679c\u63a5\u6536\u8005\u6ca1\u6709\u5b9e\u73b0 ",(0,a.jsx)(n.code,{children:"ISpecifiesInterchainSecurityModule"})," \u6216 ",(0,a.jsx)(n.code,{children:"recipient.interchainSecurityModule()"})," \u8fd4\u56de ",(0,a.jsx)(n.code,{children:"address(0)"}),"\uff0c\u5c06\u4f7f\u7528\u5728 Mailbox \u4e0a\u914d\u7f6e\u7684\u9ed8\u8ba4 ISM \u6765\u9a8c\u8bc1\u6d88\u606f\u3002"]})}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n\n\n    participant Relayer\n    participant Mailbox\n    participant ISM\n    participant Recipient\n\n    Relayer--\x3e>ISM: moduleType()\n    ISM--\x3e>Relayer: ISM type\n    Relayer->>Mailbox: process(metadata, message)\n    Mailbox--\x3e>Recipient: interchainSecurityModule()\n    Recipient--\x3e>Mailbox: ISM address\n    Mailbox->>ISM: verify(metadata, message)\n    ISM--\x3e>Mailbox: true\n    Mailbox->>Recipient: handle(origin, sender, body)\n"})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},95898:(e,n,r)=>{r.d(n,{Ay:()=>l,RM:()=>i});var t=r(74848),a=r(28453);const i=[];function s(e){const n={mermaid:"mermaid",...(0,a.R)(),...e.components};return(0,t.jsx)(n.mermaid,{value:'flowchart LR\n    subgraph Destination Chain\n      ISM[InterchainSecurityModule]\n      Recipient[Recipient]\n      M_D[(Mailbox)]\n\n      M_D -- "verify(metadata, message)" --\x3e ISM\n      ISM -. "interchainSecurityModule()" .- Recipient\n      M_D -- "handle(origin, sender, body)" --\x3e Recipient\n\n    end'})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}}}]);