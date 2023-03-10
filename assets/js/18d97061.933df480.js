"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[4110],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>v});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(i),h=n,v=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return i?o.createElement(v,a(a({ref:t},c),{},{components:i})):o.createElement(v,a({ref:t},c))}));function v(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<r;u++)a[u]=i[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},58285:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=i(87462),n=(i(67294),i(3905));const r={sidebar_position:2,description:"An overview of the Obol network"},a=void 0,l={unversionedId:"int/Overview",id:"version-v0.14.0/int/Overview",title:"Overview",description:"An overview of the Obol network",source:"@site/versioned_docs/version-v0.14.0/int/Overview.md",sourceDirName:"int",slug:"/int/Overview",permalink:"/docs/int/Overview",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.14.0/int/Overview.md",tags:[],version:"v0.14.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"An overview of the Obol network"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Key concepts",permalink:"/docs/int/key-concepts"}},s={},u=[{value:"The Network",id:"the-network",level:2},{value:"Sustainable Public Goods",id:"sustainable-public-goods",level:3},{value:"The Vision",id:"the-vision",level:2},{value:"V1 - Trusted Distributed Validators",id:"v1---trusted-distributed-validators",level:3},{value:"V2 - Trustless Distributed Validators",id:"v2---trustless-distributed-validators",level:3}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"the-network"},"The Network"),(0,n.kt)("p",null,"The network can be best visualized as a work layer that sits directly on top of base layer consensus. This work layer is designed to provide the base layer with more resiliency and promote decentralization as it scales. As Ethereum matures over the coming years, the community will move onto the next great scaling challenge, which is stake centralization. To effectively mitigate these risks, community building and credible neutrality must be used as primary design principles. "),(0,n.kt)("p",null,"Obol is focused on scaling consensus by providing permissionless access to Distributed Validators (DV's). We believe that distributed validators will and should make up a large portion of mainnet validator configurations. In preparation for the first wave of adoption, the network currently utilizes a middleware implementation of Distributed Validator Technology (DVT), to enable the operation of distributed validator clusters that can preserve validators current client and remote signing infrastructure."),(0,n.kt)("p",null,"Similar to how roll-up technology laid the foundation for L2 scaling implementations, we believe DVT will do the same for scaling consensus while preserving decentralization. Staking infrastructure is entering its protocol phase of evolution, which must include trust-minimized staking networks that can be plugged into at scale. Layers like Obol are critical to the long term viability and resiliency of public networks, especially networks like Ethereum. We believe DVT will evolve into a widely used primitive and will ensure the security, resiliency, and decentralization of the public blockchain networks that adopt it."),(0,n.kt)("p",null,"The Obol Network consists of four core public goods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"../dvl/intro"},"Distributed Validator Launchpad"),", a ",(0,n.kt)("a",{parentName:"li",href:"https://goerli.launchpad.obol.tech/"},"User Interface")," for bootstrapping Distributed Validators"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../charon/intro"},"Charon"),", a middleware client that enables validators to run in a fault-tolerant, distributed manner"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sc/introducing-obol-managers"},"Obol Managers"),", a set of solidity smart contracts for the formation of Distributed Validators"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/testnet"},"Obol Testnets"),", a set of on-going public incentivized testnets that enable any sized operator to test their deployment before serving for the mainnet Obol Network")),(0,n.kt)("h3",{id:"sustainable-public-goods"},"Sustainable Public Goods"),(0,n.kt)("p",null,"The Obol Ecosystem is inspired by previous work on Ethereum public goods and experimenting with circular economics. We believe that to unlock innovation in staking use cases, a credibly neutral layer must exist for innovation to flow and evolve vertically. Without this layer highly available uptime will continue to be a moat and stake will accumulate amongst a few products."),(0,n.kt)("p",null,"The Obol Network will become an open, community governed, self-sustaining project over the coming months and years. Together we will incentivize, build, and maintain distributed validator technology that makes public networks a more secure and resilient foundation to build on top of."),(0,n.kt)("h2",{id:"the-vision"},"The Vision"),(0,n.kt)("p",null,"The road to decentralizing stake is a long one. At Obol we have divided our vision into two key versions of distributed validators. "),(0,n.kt)("h3",{id:"v1---trusted-distributed-validators"},"V1 - Trusted Distributed Validators"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Multi Operator DV Cluster",src:i(86673).Z,width:"1200",height:"630"})),(0,n.kt)("p",null,"The first version of distributed validators will have dispute resolution out of band. Meaning you need to know and communicate with your counterparty operators if there is an issue with your shared cluster. "),(0,n.kt)("p",null,"A DV without in-band dispute resolution/incentivization is still extremely valuable. Individuals and staking as a service providers can deploy DVs on their own to make their validators fault tolerant. Groups can run DVs together, but need to bring their own dispute resolution to the table, whether that be a smart contract of their own, a traditional legal service agreement, or simply high trust between the group."),(0,n.kt)("p",null,"Obol V1 will utilize retroactive public goods principles to lay the foundation of its economic ecosystem. The Obol Community will responsibly allocate the collected ETH as grants to projects in the staking ecosystem for the entirety of V1."),(0,n.kt)("h3",{id:"v2---trustless-distributed-validators"},"V2 - Trustless Distributed Validators"),(0,n.kt)("p",null,"V1 of charon serves a small by count, large by stake-weight group of individuals. The long tail of home and small stakers also deserve to have access to fault tolerant validation, but they may not know enough other operators personally to a sufficient level of trust to run a DV cluster together. "),(0,n.kt)("p",null,"Version 2 of charon will layer in an incentivization scheme to ensure any operator not online and taking part in validation is not earning any rewards. Further incentivization alignment can be achieved with operator bonding requirements that can be slashed for unacceptable performance. "),(0,n.kt)("p",null,"To add an un-gameable incentivization layer to threshold validation requires complex interactive cryptography schemes, secure off-chain dispute resolution, and EVM support for proofs of the consensus layer state, as a result, this will be a longer and more complex undertaking than V1, hence the delineation between the two."))}d.isMDXComponent=!0},86673:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/MultiOperator7-4edfd43fd723b1fc7a9c42ea8e79cbf0.png"}}]);