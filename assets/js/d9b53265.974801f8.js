"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93150],{79108:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=c(85893),s=c(11151);const l={},t="ADR 004: Lock fee module upon escrow out of balance",o={id:"adr-004-ics29-lock-fee-module",title:"ADR 004: Lock fee module upon escrow out of balance",description:"Changelog",source:"@site/architecture/adr-004-ics29-lock-fee-module.md",sourceDirName:".",slug:"/adr-004-ics29-lock-fee-module",permalink:"/architecture/adr-004-ics29-lock-fee-module",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 003: ICS27 Acknowledgement Format",permalink:"/architecture/adr-003-ics27-acknowledgement"},next:{title:"ADR 005: UpdateClient Events - ClientState Consensus Heights",permalink:"/architecture/adr-005-consensus-height-events"}},a={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Sending side",id:"sending-side",level:3},{value:"Receiving side",id:"receiving-side",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"adr-004-lock-fee-module-upon-escrow-out-of-balance",children:"ADR 004: Lock fee module upon escrow out of balance"}),"\n",(0,i.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"03/03/2022: initial draft"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,i.jsx)(n.p,{children:"Accepted"}),"\n",(0,i.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,i.jsx)(n.p,{children:"The fee module maintains an escrow account for all fees escrowed to incentivize packet relays.\nIt also tracks each packet fee escrowed separately from the escrow account. This is because the escrow account only maintains a total balance. It has no reference for which coins belonged to which packet fee.\nIn the presence of a severe bug, it is possible the escrow balance will become out of sync with the packet fees marked as escrowed.\nThe ICS29 module should be capable of elegantly handling such a scenario."}),"\n",(0,i.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,i.jsx)(n.p,{children:'We will allow for the ICS29 module to become "locked" if the escrow balance is determined to be out of sync with the packet fees marked as escrowed.\nA "locked" fee module will not allow for packet escrows to occur nor will it distribute fees. All IBC callbacks will skip performing fee logic, similar to fee disabled channels.'}),"\n",(0,i.jsx)(n.p,{children:"Manual intervention will be needed to unlock the fee module."}),"\n",(0,i.jsx)(n.h3,{id:"sending-side",children:"Sending side"}),"\n",(0,i.jsxs)(n.p,{children:["Special behaviour will have to be accounted for in ",(0,i.jsx)(n.code,{children:"OnAcknowledgementPacket"}),". Since the counterparty will continue to send incentivized acknowledgements for fee enabled channels, the acknowledgement will still need to be unmarshalled into an incentivized acknowledgement before calling the underlying application ",(0,i.jsx)(n.code,{children:"OnAcknowledgePacket"})," callback."]}),"\n",(0,i.jsx)(n.p,{children:"When distributing fees, a cached context should be used. If the escrow account balance would become negative, the current state changes should be discarded and the fee module should be locked using the uncached context. This prevents fees from being partially distributed for a given packetID."}),"\n",(0,i.jsx)(n.h3,{id:"receiving-side",children:"Receiving side"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"OnRecvPacket"})," should remain unaffected by the fee module becoming locked since escrow accounts only affect the sending side."]}),"\n",(0,i.jsx)(n.h2,{id:"consequences",children:"Consequences"}),"\n",(0,i.jsx)(n.h3,{id:"positive",children:"Positive"}),"\n",(0,i.jsx)(n.p,{children:"The fee module can be elegantly disabled in the presence of severe bugs."}),"\n",(0,i.jsx)(n.h3,{id:"negative",children:"Negative"}),"\n",(0,i.jsx)(n.p,{children:"Extra logic is added to account for edge cases which are only possible in the presence of bugs."}),"\n",(0,i.jsx)(n.h3,{id:"neutral",children:"Neutral"}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsx)(n.p,{children:"Issues:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/issues/821",children:"#821"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/issues/860",children:"#860"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"PR's:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/pull/1031",children:"#1031"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/pull/1029",children:"#1029"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/pull/1056",children:"#1056"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>o,a:()=>t});var i=c(67294);const s={},l=i.createContext(s);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);