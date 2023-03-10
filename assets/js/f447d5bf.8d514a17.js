"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[2119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},17753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={description:"How do distributed validator clients communicate with one another securely?",sidebar_position:4},a="Peer discovery",s={unversionedId:"charon/peer-discovery",id:"version-v0.13.0/charon/peer-discovery",title:"Peer discovery",description:"How do distributed validator clients communicate with one another securely?",source:"@site/versioned_docs/version-v0.13.0/charon/peer-discovery.md",sourceDirName:"charon",slug:"/charon/peer-discovery",permalink:"/docs/v0.13.0/charon/peer-discovery",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.13.0/charon/peer-discovery.md",tags:[],version:"v0.13.0",sidebarPosition:4,frontMatter:{description:"How do distributed validator clients communicate with one another securely?",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Cluster Configuration",permalink:"/docs/v0.13.0/charon/cluster-configuration"},next:{title:"P2P interface",permalink:"/docs/v0.13.0/charon/p2p-interface"}},c={},l=[{value:"Authenticating a distributed validator client",id:"authenticating-a-distributed-validator-client",level:2},{value:"Node database",id:"node-database",level:2},{value:"Node discovery",id:"node-discovery",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"peer-discovery"},"Peer discovery"),(0,i.kt)("p",null,"In order to maintain security and sybil-resistance, charon clients need to be able to authenticate one another. We achieve this by giving each charon client a public/private key pair that they can sign with such that other clients in the cluster will be able to recognise them as legitimate no matter which IP address they communicate from."),(0,i.kt)("h2",{id:"authenticating-a-distributed-validator-client"},"Authenticating a distributed validator client"),(0,i.kt)("p",null,"Before a DKG process begins, all operators must run ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.13.0/charon/charon_cli_reference#creating-an-enr-for-charon"},(0,i.kt)("inlineCode",{parentName:"a"},"charon create enr")),", or just ",(0,i.kt)("inlineCode",{parentName:"p"},"charon enr"),", to create or get the Ethereum Node Record for their client. These ENRs are included in the configuration of a Distributed Key Generation ceremony. "),(0,i.kt)("p",null,"The file that outlines a DKG ceremony is known as a ",(0,i.kt)("a",{parentName:"p",href:"./cluster-configuration"},(0,i.kt)("inlineCode",{parentName:"a"},"cluster-definition.json"))," file. This file is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"charon dkg")," which uses it to create private keys, a ",(0,i.kt)("a",{parentName:"p",href:"./cluster-configuration"},(0,i.kt)("inlineCode",{parentName:"a"},"cluster-lock.json"))," file and ",(0,i.kt)("inlineCode",{parentName:"p"},"deposit-data.json")," for the configured number of distributed validators. The ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-lock")," file will be made available to ",(0,i.kt)("inlineCode",{parentName:"p"},"charon run"),", and the validator key stores will be made available to the configured validator client. "),(0,i.kt)("p",null,"When ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.13.0/charon/charon_cli_reference#run-the-charon-middleware"},(0,i.kt)("inlineCode",{parentName:"a"},"charon run"))," starts up and ingests its configuration from the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," file, it checks if its observed/configured public IP address differs from what is listed in the lock file. If it is different; it updates the IP address, increments the nonce of the ENR and reissues it before beginning to establish connections with the other operators in the cluster."),(0,i.kt)("h2",{id:"node-database"},"Node database"),(0,i.kt)("p",null,"Distributed Validator Clusters are permissioned networks with a fully meshed topology. Each node will permanently store the ENRs of all other known Obol nodes in their node database."),(0,i.kt)("p",null,"Unlike with node databases of public permissionless networks (such as ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/ethereum/go-ethereum@v1.10.13/p2p/enode#DB"},"Go-Ethereum"),"), there is no inbuilt eviction logic \u2013 the database will keep growing indefinitely. This is acceptable as the number of operators in a cluster is expected to stay constant. Mutable cluster operators will be introduced in future. "),(0,i.kt)("h2",{id:"node-discovery"},"Node discovery"),(0,i.kt)("p",null,"At boot, a charon client will ingest its configured ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," file. This file contains a list of ENRs of the client's peers. The client will attempt to establish a connection with these peers, and will perform a handshake if they connect to establish an end to end encrypted communication channel between the clients. "),(0,i.kt)("p",null,"However, the IP addresses within an ENR can become stale. This could result in a cluster not being able to establish a connection with all nodes. To be tolerant to operator IP addresses changing, charon also supports the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md"},"discv5")," discovery protocol. This allows a charon client to find another operator that might have moved IP address, but still retains the same ENR private key."))}p.isMDXComponent=!0}}]);