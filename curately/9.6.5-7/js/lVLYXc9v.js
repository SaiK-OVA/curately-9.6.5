import{e as A,j as c,g as w,i as T,f as g,G as E,a as C,m as j,aW as U,r as b,h as V,b as S,K as I,P as s,d as W,Y,k as t,T as M,l as k,B as N,W as P,A as B,L as v}from"./Cgppv_Sf.js";import{l as z}from"./C1Tzjq_F.js";import{I as O}from"./DGa0xRrN.js";import{I as F}from"./BNdv2g09.js";import{D as _}from"./BiLTbjOU.js";import{L as $}from"./DIGW6AYh.js";import"./6HgfybZm.js";import"./CMcHlfne.js";import"./CysGkNnQ.js";import"./CRJpcgJc.js";import"./CAWvjt4G.js";import"./XPHitdj4.js";import"./D6SqIoha.js";import"./CbCF5Xps.js";import"./BxLAtHuG.js";import"./ChUKxi90.js";import"./C7pzRmL5.js";import"./dZX7lgtO.js";import"./BJCg17MG.js";const q=A(c.jsx("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft"),K=A(c.jsx("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew");function G(e){return w("MuiMobileStepper",e)}T("MuiMobileStepper",["root","positionBottom","positionTop","positionStatic","dots","dot","dotActive","progress"]);const H=e=>{const{classes:o,position:a}=e,i={root:["root",`position${C(a)}`],dots:["dots"],dot:["dot"],dotActive:["dotActive"],progress:["progress"]};return W(i,G,o)},J=g(E,{name:"MuiMobileStepper",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,o[`position${C(a.position)}`]]}})(j(({theme:e})=>({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:(e.vars||e).palette.background.default,padding:8,variants:[{props:({position:o})=>o==="top"||o==="bottom",style:{position:"fixed",left:0,right:0,zIndex:(e.vars||e).zIndex.mobileStepper}},{props:{position:"top"},style:{top:0}},{props:{position:"bottom"},style:{bottom:0}}]}))),Q=g("div",{name:"MuiMobileStepper",slot:"Dots",overridesResolver:(e,o)=>o.dots})({variants:[{props:{variant:"dots"},style:{display:"flex",flexDirection:"row"}}]}),X=g("div",{name:"MuiMobileStepper",slot:"Dot",shouldForwardProp:e=>U(e)&&e!=="dotActive",overridesResolver:(e,o)=>{const{dotActive:a}=e;return[o.dot,a&&o.dotActive]}})(j(({theme:e})=>({variants:[{props:{variant:"dots"},style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),backgroundColor:(e.vars||e).palette.action.disabled,borderRadius:"50%",width:8,height:8,margin:"0 2px"}},{props:{variant:"dots",dotActive:!0},style:{backgroundColor:(e.vars||e).palette.primary.main}}]}))),Z=g($,{name:"MuiMobileStepper",slot:"Progress",overridesResolver:(e,o)=>o.progress})({variants:[{props:{variant:"progress"},style:{width:"50%"}}]}),L=b.forwardRef(function(o,a){const i=V({props:o,name:"MuiMobileStepper"}),{activeStep:r=0,backButton:f,className:u,LinearProgressProps:y,nextButton:x,position:n="bottom",steps:l,variant:d="dots",...R}=i,m={...i,activeStep:r,position:n,variant:d};let D;d==="progress"&&(l===1?D=100:D=Math.ceil(r/(l-1)*100));const p=H(m);return c.jsxs(J,{square:!0,elevation:0,className:S(p.root,u),ref:a,ownerState:m,...R,children:[f,d==="text"&&c.jsxs(b.Fragment,{children:[r+1," / ",l]}),d==="dots"&&c.jsx(Q,{ownerState:m,className:p.dots,children:[...new Array(l)].map((ee,h)=>c.jsx(X,{className:S(p.dot,h===r&&p.dotActive),ownerState:m,dotActive:h===r},h))}),d==="progress"&&c.jsx(Z,{ownerState:m,className:p.progress,variant:"determinate",value:D,...y}),x]})});L.propTypes={activeStep:I,backButton:s.node,classes:s.object,className:s.string,LinearProgressProps:s.object,nextButton:s.node,position:s.oneOf(["bottom","static","top"]),steps:I.isRequired,sx:s.oneOfType([s.arrayOf(s.oneOfType([s.func,s.object,s.bool])),s.func,s.object]),variant:s.oneOf(["dots","progress","text"])};const xe=()=>{const e=Y(),[o,a]=b.useState([]),[i,r]=b.useState(0),f=o.length,u=()=>{i===f-1?e("/"):r(n=>n+1)},y=()=>{r(n=>n-1)};b.useEffect(()=>{let n=[];localStorage.getItem("curatelyExtensionForLinkedinInstalled")||n.push({label:"Download Chrome Extension",stepName:"extension"}),n.push({label:"Connect your Email",stepName:"email"}),a(n)},[]);const x=()=>{P(B.getByParams(193,"/Curately/EmailEngine/createAccount.jsp",{clientId:v.getvalue("clientId"),account:`${v.getvalue("clientId")}_${v.getvalue("recrId")}`,name:v.getvalue("recrFullName"),email:"",redirectUrl:window.location.origin+"/#/"+v.getvalue("clientName")+"/home"}).then(n=>{if(console.log(n.data),n.data.url){let l=n.data.url.replace("http://54.187.123.62:3000","https://emailengine.curately.ai");F.check(l)&&(window.location.href=l)}}))};return t.jsxDEV("div",{id:"Invite",children:[t.jsxDEV("div",{className:"logo_container",children:t.jsxDEV("img",{src:z,alt:"",className:"logoImg"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:119,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:118,columnNumber:13},void 0),o.length?t.jsxDEV("div",{className:"form_container",children:[t.jsxDEV(E,{square:!0,elevation:0,sx:{display:"flex",alignItems:"center",height:50,pl:2,bgcolor:"background.default"},children:t.jsxDEV(M,{className:"fw-6 fs-16",children:o[i].label},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:125,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:124,columnNumber:25},void 0),t.jsxDEV(_,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:127,columnNumber:25},void 0),t.jsxDEV("div",{className:"body",children:t.jsxDEV(k,{sx:{height:430,width:"100%",p:2},children:[o[i].stepName==="teammates"?t.jsxDEV(O,{closeInvitePopup:n=>{n&&u()}},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:133,columnNumber:41},void 0):null,o[i].stepName==="extension"?t.jsxDEV("div",{id:"download",children:t.jsxDEV("div",{className:"teamContent",children:[t.jsxDEV("h3",{children:"Download our chrome extension and start smarter onboarding."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:155,columnNumber:49},void 0),t.jsxDEV("p",{className:"info",children:"Curately.ai Chrome extension works right inside LinkedIn, letting you source candidates with one click. You also can use Curately web app simultaneously."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:156,columnNumber:49},void 0),t.jsxDEV(N,{className:"download-btn",variant:"contained",endIcon:t.jsxDEV(K,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:157,columnNumber:111},void 0),size:"large",onClick:()=>{window.open("https://chromewebstore.google.com/detail/curatelyai/bllnefaigeffjgfhpgkpacnlbbldbblm"),u()},children:"Download the Chrome Extension"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:157,columnNumber:49},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:154,columnNumber:45},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:143,columnNumber:41},void 0):null,o[i].stepName==="email"?t.jsxDEV("div",{id:"",children:t.jsxDEV("div",{className:"teamContent",children:[t.jsxDEV("h3",{children:"Let’s link your mailbox."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:174,columnNumber:49},void 0),t.jsxDEV("p",{className:"info",children:"Link your mailboxes with Curately to gain full functionality of core engagement tools, like emails, Campaigns, meetings and more."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:175,columnNumber:49},void 0),t.jsxDEV(N,{className:"download-btn",variant:"contained",size:"large",onClick:x,children:"Connect Email"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:176,columnNumber:49},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:173,columnNumber:45},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:172,columnNumber:41},void 0):null]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:130,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:128,columnNumber:25},void 0),t.jsxDEV("div",{className:"footer",children:t.jsxDEV(L,{variant:"dots",steps:f,position:"static",activeStep:i,sx:{flexGrow:1,justifyContent:"space-between"},nextButton:t.jsxDEV(N,{size:"small",onClick:u,variant:"outlined",color:"primary",children:"I'll do it later"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:196,columnNumber:37},void 0),backButton:t.jsxDEV(N,{size:"small",onClick:y,disabled:i===0,children:t.jsxDEV(q,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:220,columnNumber:41},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:216,columnNumber:37},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:189,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:187,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:123,columnNumber:21},void 0):null]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Invite/Invite.tsx",lineNumber:117,columnNumber:9},void 0)};export{xe as default};
