"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43231],{68398:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=i(85893),l=i(11151);const o={title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/ibc/light-clients/localhost/integration"},s="Integration",c={id:"light-clients/localhost/integration",title:"Integration",description:"The 09-localhost light client module registers codec types within the core IBC module. This differs from other light client module implementations which are expected to register codec types using the AppModuleBasic interface.",source:"@site/versioned_docs/version-v9.0.x/03-light-clients/02-localhost/02-integration.md",sourceDirName:"03-light-clients/02-localhost",slug:"/ibc/light-clients/localhost/integration",permalink:"/v9/ibc/light-clients/localhost/integration",draft:!1,unlisted:!1,tags:[],version:"v9.0.x",sidebarPosition:2,frontMatter:{title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/ibc/light-clients/localhost/integration"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/v9/ibc/light-clients/localhost/overview"},next:{title:"ClientState",permalink:"/v9/ibc/light-clients/localhost/client-state"}},r={},a=[];function d(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"integration",children:"Integration"}),"\n",(0,n.jsxs)(t.p,{children:["The 09-localhost light client module registers codec types within the core IBC module. This differs from other light client module implementations which are expected to register codec types using the ",(0,n.jsx)(t.code,{children:"AppModuleBasic"})," interface."]}),"\n",(0,n.jsxs)(t.p,{children:["The localhost client is implicitly enabled by using the ",(0,n.jsx)(t.code,{children:"AllowAllClients"})," wildcard (",(0,n.jsx)(t.code,{children:'"*"'}),") in the 02-client submodule default value for param  ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/proto/ibc/core/client/v1/client.proto#L102",children:(0,n.jsx)(t.code,{children:"allowed_clients"})}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"// DefaultAllowedClients are the default clients for the AllowedClients parameter.\n// By default it allows all client types.\nvar DefaultAllowedClients = []string{AllowAllClients}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>s});var n=i(67294);const l={},o=n.createContext(l);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);