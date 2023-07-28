"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[84749],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>D});var r=a(87462),n=a(67294),o=a(86010),i=a(72957),l=a(16550),s=a(75238),c=a(33609),u=a(92560);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=s??d;return h({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var b=a(51048);const k="tabList__CuJ",v="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==l&&(d(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:p},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function D(e){const t=(0,b.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},66962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(73992),i=a(18679);const l={sidebar_position:1,description:"Create a DV cluster using the Obol Typescript SDK"},s="Create a DV using the SDK",c={unversionedId:"int/quickstart/advanced/quickstart-sdk",id:"int/quickstart/advanced/quickstart-sdk",title:"Create a DV using the SDK",description:"Create a DV cluster using the Obol Typescript SDK",source:"@site/docs/int/quickstart/advanced/quickstart-sdk.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/quickstart-sdk",permalink:"/docs/next/int/quickstart/advanced/quickstart-sdk",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/int/quickstart/advanced/quickstart-sdk.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Create a DV cluster using the Obol Typescript SDK"},sidebar:"tutorialSidebar",previous:{title:"Run a DV on mainnet",permalink:"/docs/next/int/quickstart/quickstart-mainnet"},next:{title:"Run a cluster with MEV-Boost",permalink:"/docs/next/int/quickstart/advanced/quickstart-builder-api"}},u={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Install the package",id:"install-the-package",level:2},{value:"Instantiate the client",id:"instantiate-the-client",level:2},{value:"Propose the cluster",id:"propose-the-cluster",level:2},{value:"Invite the Operators to complete the DKG",id:"invite-the-operators-to-complete-the-dkg",level:2},{value:"Retrieve the created Distributed Validators using the SDK",id:"retrieve-the-created-distributed-validators-using-the-sdk",level:2},{value:"Activate the DVs using the deposit contract",id:"activate-the-dvs-using-the-deposit-contract",level:2}],p={toc:d};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-dv-using-the-sdk"},"Create a DV using the SDK"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The Obol-SDK is in an alpha state and should be used with caution.")),(0,n.kt)("p",null,"This is a walkthrough of using the ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@obolnetwork/obol-sdk"},"Obol-SDK")," to propose a four-node distributed validator cluster for creation using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/dvl/intro"},"DV Launchpad"),". "),(0,n.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have ",(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/en"},"node.js")," installed.")),(0,n.kt)("h2",{id:"install-the-package"},"Install the package"),(0,n.kt)("p",null,"Install the Obol-SDK package into your development environment"),(0,n.kt)(o.Z,{groupId:"install-sdk",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"npm install --save @obolnetwork/obol-sdk"))),(0,n.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"yarn add @obolnetwork/obol-sdk")))),(0,n.kt)("h2",{id:"instantiate-the-client"},"Instantiate the client"),(0,n.kt)("p",null,"The first thing you need to do is create a instance of the Obol SDK client. The client takes two constructor parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"chainID")," for the chain you intend to use."),(0,n.kt)("li",{parentName:"ul"},"An ethers.js ",(0,n.kt)("a",{parentName:"li",href:"https://docs.ethers.org/v6/api/providers/#Signer-signTypedData"},"signer")," object.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { Client } from "@obolnetwork/obol-sdk";\nimport { ethers } from "ethers";\n\n// Create a dummy ethers signer object with a throwaway private key\nconst mnemonic = ethers.Wallet.createRandom().mnemonic?.phrase || "";\nconst privateKey = ethers.Wallet.fromPhrase(mnemonic).privateKey;\nconst wallet = new ethers.Wallet(privateKey);\nconst signer = wallet.connect(null);\n\n// Instantiate the Obol Client for goerli \nconst obol = new Client({chainId: 5}, signer);\n')),(0,n.kt)("h2",{id:"propose-the-cluster"},"Propose the cluster"),(0,n.kt)("p",null,"List the Ethereum addresses of participating operators, along with withdrawal and fee recipient address data for each validator you intend for the operators to create."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'// A config hash is a deterministic hash of the proposed DV cluster configuration\nconst configHash = await obol.createClusterDefinition({\n  name: "SDK Demo Cluster",\n  operators:\n    [\n      { address: "0xC35CfCd67b9C27345a54EDEcC1033F2284148c81" },\n      { address: "0x33807D6F1DCe44b9C599fFE03640762A6F08C496" },\n      { address: "0xc6e76F72Ea672FAe05C357157CfC37720F0aF26f" },\n      { address: "0x86B8145c98e5BD25BA722645b15eD65f024a87EC" }\n    ],\n  validators: [{\n    fee_recipient_address: "0x3CD4958e76C317abcEA19faDd076348808424F99",\n    withdrawal_address: "0xE0C5ceA4D3869F156717C66E188Ae81C80914a6e"\n  }],\n});\n\nconsole.log(`Direct the operators to https://goerli.launchpad.obol.tech/dv?configHash=${configHash} to complete the key generation process`)\n')),(0,n.kt)("h2",{id:"invite-the-operators-to-complete-the-dkg"},"Invite the Operators to complete the DKG"),(0,n.kt)("p",null,"Once the Obol-API returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"configHash")," string from the ",(0,n.kt)("inlineCode",{parentName:"p"},"createClusterDefinition")," method, you can use this identifier to invite the operators to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/dvl/intro"},"Launchpad")," to complete the process"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Operators navigate to ",(0,n.kt)("inlineCode",{parentName:"li"},"https://<NETWORK_NAME_HERE>.launchpad.obol.tech/dv?configHash=<CONFIG_HASH_HERE>")," and complete the ",(0,n.kt)("a",{parentName:"li",href:"/docs/next/int/quickstart/group/quickstart-group-operator"},"run a DV with others")," flow."),(0,n.kt)("li",{parentName:"ol"},"Once the DKG is complete, and operators are using the ",(0,n.kt)("inlineCode",{parentName:"li"},"--publish")," flag, the created cluster details will be posted to the Obol API"),(0,n.kt)("li",{parentName:"ol"},"The creator will be able to retrieve this data with ",(0,n.kt)("inlineCode",{parentName:"li"},"obol.getClusterLock(configHash)"),", to use for activating the newly created validator. ")),(0,n.kt)("h2",{id:"retrieve-the-created-distributed-validators-using-the-sdk"},"Retrieve the created Distributed Validators using the SDK"),(0,n.kt)("p",null,"Once the DKG is complete, the proposer of the cluster can retrieve key data such as the validator public keys and their associated deposit data messages. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const clusterLock = await obol.getClusterLock(configHash);\n")),(0,n.kt)("p",null,"Reference lock files can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/tree/main/cluster/testdata"},"here"),". "),(0,n.kt)("h2",{id:"activate-the-dvs-using-the-deposit-contract"},"Activate the DVs using the deposit contract"),(0,n.kt)("p",null,"This guide will in future cover activating the deposit data from a lock file."))}h.isMDXComponent=!0}}]);