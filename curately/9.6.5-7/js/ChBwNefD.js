import{r as c,k as e,W as u,A as m}from"./Cgppv_Sf.js";const A=()=>{const[a,d]=c.useState(""),[n,s]=c.useState([]),l=i=>{d(i.target.value)},r=()=>{o(a)},o=i=>{u(m.getCall(216,`/QADemoCurately/getactivityLog/${i}`).then(t=>{t.data.Success?s(t.data.activityLog):console.error("Error fetching activity log:",t.data)}).catch(t=>{console.error("API call failed:",t)}))};return e.jsxDEV("div",{className:"activity-log-container",children:[e.jsxDEV("div",{className:"input-container",children:[e.jsxDEV("label",{htmlFor:"candidateId",children:"Enter Candidate ID"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Candidate/ViewCandidate/GetActivities.tsx",lineNumber:38,columnNumber:17},void 0),e.jsxDEV("input",{type:"text",id:"candidateId",value:a,onChange:l},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Candidate/ViewCandidate/GetActivities.tsx",lineNumber:39,columnNumber:17},void 0),e.jsxDEV("button",{onClick:r,children:"Get Activities"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Candidate/ViewCandidate/GetActivities.tsx",lineNumber:45,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Candidate/ViewCandidate/GetActivities.tsx",lineNumber:37,columnNumber:13},void 0),n.length>0&&e.jsxDEV("div",{className:"activity-log",children:[e.jsxDEV("h2",{children:"Recent Activities"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Candidate/ViewCandidate/GetActivities.tsx",lineNumber:50,columnNumber:21},void 0),e.jsxDEV("ul",{className:"activity-log-list",children:n.map((i,t)=>e.jsxDEV("li",{className:"activity-log-item",children:[e.jsxDEV("span",{className:"activity-bullet",children:"•"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Candidate/ViewCandidate/GetActivities.tsx",lineNumber:54,columnNumber:33},void 0),e.jsxDEV("div",{className:"activity-content",children:[e.jsxDEV("span",{className:"activity-description",children:i.descr},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Candidate/ViewCandidate/GetActivities.tsx",lineNumber:56,columnNumber:37},void 0),e.jsxDEV("span",{className:"activity-date",children:new Date(i.actionDate).toLocaleString()},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Candidate/ViewCandidate/GetActivities.tsx",lineNumber:57,columnNumber:37},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Candidate/ViewCandidate/GetActivities.tsx",lineNumber:55,columnNumber:33},void 0)]},t,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Candidate/ViewCandidate/GetActivities.tsx",lineNumber:53,columnNumber:29},void 0))},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Candidate/ViewCandidate/GetActivities.tsx",lineNumber:51,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Candidate/ViewCandidate/GetActivities.tsx",lineNumber:49,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Candidate/ViewCandidate/GetActivities.tsx",lineNumber:36,columnNumber:9},void 0)};export{A as default};
