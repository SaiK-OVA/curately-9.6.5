import{r as l,k as r,O as p,S as U,A as m,L as u,V as c}from"./Cgppv_Sf.js";import{C as y}from"./J28pcZpg.js";import{D as s}from"./kx4FOAoQ.js";import{C as j}from"./B7NoFbgU.js";import{T as g}from"./BxLAtHuG.js";import{M as i}from"./ChUKxi90.js";import"./qqpRMfeL.js";import"./6vuVcGup.js";import"./BtT-fZ71.js";import"./BQPvRSZw.js";import"./DvQNZoLo.js";import"./B5w95FCT.js";import"./CtTUZ4Jr.js";import"./XPHitdj4.js";import"./D6SqIoha.js";import"./Bp2g836F.js";import"./BJCg17MG.js";import"./CagltWra.js";const ee=()=>{const[h,O]=l.useState([]),[d,C]=l.useState([]),[D,E]=l.useState([]),[b,R]=l.useState([]),[f,A]=l.useState([]),[o,x]=l.useState("LAST 30 DAYS"),[n,v]=l.useState({from:s.now().minus({days:30}).toISODate(),to:s.now().toISODate()}),N=(e,t)=>e&&t?Math.round(e/t):0;l.useEffect(()=>{const t=o==="LAST 30 DAYS"?s.now().minus({days:30}).toISODate():o==="LAST 60 DAYS"?s.now().minus({days:60}).toISODate():o==="CURRENT WEEK"?s.now().minus({weeks:1}).toISODate():o==="CURRENT MONTH"?s.now().minus({months:1}).toISODate():o==="LAST 6 MONTHS"?s.now().minus({months:6}).toISODate():o==="LAST 12 MONTHS"?s.now().minus({months:12}).toISODate():s.now().toISODate(),a=s.now().toISODate()??"";v({from:t,to:a})},[o]);const S=()=>{m.postWithData("admin","getOutreachByMonth",{clientId:u.getvalue("clientId"),recrId:u.getvalue("recrId")}).then(e=>{if(e.data.data&&e.data.Success){let t=[];e.data.data.forEach(a=>{t.push({year:a.month,value1:a.sentEmailCount,value2:a.openedEmailCount,value3:a.repliedEmailCount})}),O(t)}else c("Failed to fetch data","error")}).catch(e=>{c("Error fetching data - "+e,"error")})},T=()=>{m.postWithData("admin","getOutreachByCampaign",{clientId:u.getvalue("clientId"),recrId:u.getvalue("recrId"),fromDate:n.from,toDate:n.to}).then(e=>{if(e.data.data&&e.data.Success){let t=[];e.data.data.forEach(a=>{t.push({year:a.sequenceName,value1:a.sent,value2:a.opened,value3:a.replied})}),C(t)}else c("Failed to fetch data","error")}).catch(e=>{c("Error fetching data - "+e,"error")})},L=()=>{m.postWithData("admin","getOutreachByTeamMember",{clientId:u.getvalue("clientId"),recrId:u.getvalue("recrId"),fromDate:n.from,toDate:n.to}).then(e=>{if(e.data.data&&e.data.Success){let t=[];e.data.data.forEach(a=>{t.push({year:a.fullName,value1:a.viewedOnLinkedin,value2:a.addedToCurately,value3:a.sentEmailCount,value4:a.repliedEmailCount})}),E(t)}else c("Failed to fetch data","error")}).catch(e=>{c("Error fetching data - "+e,"error")})},W=()=>{m.postWithData("admin","getLinkedinConnectReportByTeamMember",{clientId:u.getvalue("clientId"),recrId:u.getvalue("recrId"),fromDate:n.from,toDate:n.to}).then(e=>{e.data.data&&e.data.Success?R(e.data.data):c("Failed to fetch data","error")}).catch(e=>{c("Error fetching data - "+e,"error")})},V=()=>{m.postWithData("admin","getLinkedinInMailsReportByTeamMember",{clientId:u.getvalue("clientId"),recrId:u.getvalue("recrId"),fromDate:n.from,toDate:n.to}).then(e=>{e.data.data&&e.data.Success?A(e.data.data):c("Failed to fetch data","error")}).catch(e=>{c("Error fetching data - "+e,"error")})};l.useEffect(()=>{Y()},[n]);const Y=()=>{S(),T(),L(),W(),V()};return r.jsxDEV("div",{id:"Outreach",children:r.jsxDEV(j,{className:"customCard  mt-5",style:{backgroundColor:"var(--c-neutral-10) !important"},children:[r.jsxDEV("div",{className:"outreachBox",children:[r.jsxDEV(p,{container:!0,spacing:2,className:"ml-2 mt-5",children:r.jsxDEV("div",{className:"sourcingHeader",children:r.jsxDEV(U,{direction:"row",spacing:1,alignItems:"center",children:r.jsxDEV("h4",{className:"content",children:"Outreach Activity"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:220,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:217,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:216,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:215,columnNumber:21},void 0),r.jsxDEV(p,{container:!0,justifyContent:"space-between",children:r.jsxDEV(p,{children:r.jsxDEV("div",{className:"GroupBy ",children:r.jsxDEV(g,{fullWidth:!0,size:"small",value:o,onChange:e=>x(e.target.value),select:!0,children:[r.jsxDEV(i,{value:"LAST 30 DAYS",children:"Last 30 Days"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:233,columnNumber:37},void 0),r.jsxDEV(i,{value:"LAST 60 DAYS",children:"Last 60 days"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:234,columnNumber:37},void 0),r.jsxDEV(i,{value:"LAST 6 MONTHS",children:"Last 6 Months"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:235,columnNumber:37},void 0),r.jsxDEV(i,{value:"LAST 12 MONTHS",children:"Last 12 Months"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:236,columnNumber:37},void 0),r.jsxDEV(i,{value:"CURRENT WEEK",children:"Current Week"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:237,columnNumber:37},void 0),r.jsxDEV(i,{value:"CURRENT MONTH",children:"Current Month"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:238,columnNumber:37},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:227,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:226,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:225,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:224,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:214,columnNumber:17},void 0),r.jsxDEV("div",{className:"outreachBox",children:[r.jsxDEV("div",{children:r.jsxDEV(y,{id:"cls",height:"240px",width:"98%",name:"Outreach by month",data:h,labels:["Sent","Opened","Replied"]},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:246,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:245,columnNumber:21},void 0),r.jsxDEV("div",{className:"tablesDiv",children:r.jsxDEV("table",{children:[r.jsxDEV("thead",{children:r.jsxDEV("tr",{children:[r.jsxDEV("th",{children:"Month"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:252,columnNumber:37},void 0),r.jsxDEV("th",{children:"Sent"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:253,columnNumber:37},void 0),r.jsxDEV("th",{children:"Opened"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:254,columnNumber:37},void 0),r.jsxDEV("th",{children:"(Rate) "},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:255,columnNumber:37},void 0),r.jsxDEV("th",{children:"Replied"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:256,columnNumber:37},void 0),r.jsxDEV("th",{children:"(Rate) "},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:257,columnNumber:37},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:251,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:250,columnNumber:29},void 0),r.jsxDEV("tbody",{children:h==null?void 0:h.map((e,t)=>r.jsxDEV("tr",{children:[r.jsxDEV("td",{children:e==null?void 0:e.year},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:264,columnNumber:41},void 0),r.jsxDEV("td",{children:e==null?void 0:e.value1},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:265,columnNumber:41},void 0),r.jsxDEV("td",{children:e==null?void 0:e.value2},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:266,columnNumber:41},void 0),r.jsxDEV("td",{children:[N(e==null?void 0:e.value1,e==null?void 0:e.value2),"%"]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:267,columnNumber:41},void 0),r.jsxDEV("td",{children:e.value3},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:268,columnNumber:41},void 0),r.jsxDEV("td",{children:[N(e==null?void 0:e.value1,e.value3),"%"]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:269,columnNumber:41},void 0)]},t,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:263,columnNumber:37},void 0))},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:261,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:249,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:248,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:244,columnNumber:17},void 0),r.jsxDEV("div",{className:"outreachBox",children:[r.jsxDEV("div",{children:r.jsxDEV(y,{id:"campaign",height:"240px",width:"98%",name:"Outreach by Campaign",data:d,labels:["Sent","Opened","Replied"]},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:279,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:278,columnNumber:21},void 0),r.jsxDEV("div",{className:"tablesDiv",children:r.jsxDEV("table",{children:[r.jsxDEV("thead",{children:r.jsxDEV("tr",{children:[r.jsxDEV("th",{children:"Name"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:285,columnNumber:37},void 0),r.jsxDEV("th",{children:"Sent"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:286,columnNumber:37},void 0),r.jsxDEV("th",{children:"Opened"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:287,columnNumber:37},void 0),r.jsxDEV("th",{children:"(Rate) "},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:288,columnNumber:37},void 0),r.jsxDEV("th",{children:"Replied"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:289,columnNumber:37},void 0),r.jsxDEV("th",{children:"(Rate) "},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:290,columnNumber:37},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:284,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:283,columnNumber:29},void 0),r.jsxDEV("tbody",{children:d==null?void 0:d.map((e,t)=>r.jsxDEV("tr",{children:[r.jsxDEV("td",{children:e==null?void 0:e.year},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:296,columnNumber:41},void 0),r.jsxDEV("td",{children:e==null?void 0:e.value1},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:297,columnNumber:41},void 0),r.jsxDEV("td",{children:e==null?void 0:e.value2},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:298,columnNumber:41},void 0),r.jsxDEV("td",{children:[N(e==null?void 0:e.value1,e==null?void 0:e.value2),"%"]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:299,columnNumber:41},void 0),r.jsxDEV("td",{children:e.value3},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:300,columnNumber:41},void 0),r.jsxDEV("td",{children:[N(e==null?void 0:e.value1,e.value3),"%"]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:301,columnNumber:41},void 0)]},t,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:295,columnNumber:37},void 0))},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:293,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:282,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:281,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:277,columnNumber:17},void 0),r.jsxDEV("div",{className:"outreachBox",children:[r.jsxDEV("div",{children:r.jsxDEV(y,{id:"team member",height:"240px",width:"98%",name:"Outreach by Team Member",data:D,labels:["Viewed on Linkedin","Added to Curately","Emails sent","Replies received"]},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:311,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:310,columnNumber:21},void 0),r.jsxDEV("div",{className:"tablesDiv",children:r.jsxDEV("table",{children:[r.jsxDEV("thead",{children:r.jsxDEV("tr",{children:[r.jsxDEV("th",{children:"Name"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:317,columnNumber:37},void 0),r.jsxDEV("th",{children:"Viewed on Linkedin"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:318,columnNumber:37},void 0),r.jsxDEV("th",{children:"Added to Curately"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:319,columnNumber:37},void 0),r.jsxDEV("th",{children:"Emails sent "},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:320,columnNumber:37},void 0),r.jsxDEV("th",{children:"Replies received"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:321,columnNumber:37},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:316,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:315,columnNumber:29},void 0),r.jsxDEV("tbody",{children:D==null?void 0:D.map((e,t)=>r.jsxDEV("tr",{children:[r.jsxDEV("td",{children:e==null?void 0:e.year},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:327,columnNumber:41},void 0),r.jsxDEV("td",{children:e==null?void 0:e.value1},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:328,columnNumber:41},void 0),r.jsxDEV("td",{children:e==null?void 0:e.value2},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:329,columnNumber:41},void 0),r.jsxDEV("td",{children:e==null?void 0:e.value3},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:330,columnNumber:41},void 0),r.jsxDEV("td",{children:e==null?void 0:e.value4},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:331,columnNumber:41},void 0)]},t,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:326,columnNumber:37},void 0))},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:324,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:314,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:313,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:309,columnNumber:17},void 0),r.jsxDEV("div",{className:"outreachBox",children:[r.jsxDEV("h4",{children:"LinkedIn Viewed Profiles by team member"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:341,columnNumber:21},void 0),r.jsxDEV("table",{children:[r.jsxDEV("thead",{children:r.jsxDEV("tr",{children:[r.jsxDEV("th",{children:"Name"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:345,columnNumber:33},void 0),r.jsxDEV("th",{children:"Viewed Profiles"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:346,columnNumber:33},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:344,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:343,columnNumber:25},void 0),r.jsxDEV("tbody",{children:b==null?void 0:b.map((e,t)=>r.jsxDEV("tr",{children:[r.jsxDEV("td",{children:e==null?void 0:e.fullName},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:352,columnNumber:37},void 0),r.jsxDEV("td",{children:e==null?void 0:e.connectCount},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:353,columnNumber:37},void 0)]},t,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:351,columnNumber:33},void 0))},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:349,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:342,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:340,columnNumber:17},void 0),r.jsxDEV("div",{className:"outreachBox",children:[r.jsxDEV("h4",{children:"Linkedin Inmails sent by team member"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:361,columnNumber:21},void 0),r.jsxDEV("table",{children:[r.jsxDEV("thead",{children:r.jsxDEV("tr",{children:[r.jsxDEV("th",{children:"Name"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:365,columnNumber:33},void 0),r.jsxDEV("th",{children:"Inmails sent"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:366,columnNumber:33},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:364,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:363,columnNumber:25},void 0),r.jsxDEV("tbody",{children:f==null?void 0:f.map((e,t)=>r.jsxDEV("tr",{children:[r.jsxDEV("td",{children:e==null?void 0:e.fullName},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:372,columnNumber:37},void 0),r.jsxDEV("td",{children:e==null?void 0:e.inMailsSent},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:373,columnNumber:37},void 0)]},t,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:371,columnNumber:33},void 0))},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:369,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:362,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:360,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:213,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/Charts/Outreach/Outreach.tsx",lineNumber:212,columnNumber:9},void 0)};export{ee as default};
