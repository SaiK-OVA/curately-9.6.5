import{r,L as N,A as p,V as i,k as e,O as a,T as l,S as v,B as y,l as T,D as L,I as j,n as W,o as R}from"./Cgppv_Sf.js";import f from"./RfaWrcPY.js";import{D as U}from"./B-98_CNj.js";import"./DI3-CCgY.js";import"./C-Jq_Y4P.js";import"./CtTUZ4Jr.js";import"./BxLAtHuG.js";import"./XPHitdj4.js";import"./ChUKxi90.js";import"./D6SqIoha.js";import"./Bp2g836F.js";import"./kx4FOAoQ.js";import"./BJCg17MG.js";import"./CagltWra.js";function G(){const[o,c]=r.useState(""),[s,m]=r.useState(""),S=t=>{c(t)},x=t=>{m(t)},E=()=>{const t={clientId:N.getvalue("clientId"),header:o!=null&&o.trim()?o.toString():"",footer:s!=null&&s.trim()?s.toString():""};p.postWithData("admin","saveOrUpdateHeaderFooterDetails",t).then(n=>{n.data.Success?i(n.data.Message?n.data.Message:"Content saved Successfully.","success"):i("Error","error")})};r.useEffect(()=>{A()},[]);const A=()=>{const t={clientId:N.getvalue("clientId")};p.postWithData("admin","getHeaderFooterDetails",t).then(n=>{var d,h,C,D;n.data.Success==!0?(c((h=(d=n.data)==null?void 0:d.headerFooterDetails)==null?void 0:h.header),m((D=(C=n.data)==null?void 0:C.headerFooterDetails)==null?void 0:D.footer)):i("Something Error is there!","error")})},[J,u]=r.useState(!1),g=()=>u(!0),b=()=>u(!1);return e.jsxDEV("div",{id:"jobContent1",children:[e.jsxDEV(a,{container:!0,direction:"row",className:"customCard px-4 py-2 mt-4 ml-5",justifyContent:"space-between",alignItems:"center",display:"flex",sx:{minHeight:"auto !important",width:"96% !important"},children:[e.jsxDEV(l,{variant:"h6",className:"headerName",children:"Job Content"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:79,columnNumber:17},this),e.jsxDEV(v,{direction:"row",className:"btn-container",children:[e.jsxDEV(y,{variant:"contained",color:"primary",onClick:E,children:"Save"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:83,columnNumber:21},this),e.jsxDEV(y,{variant:"outlined",type:"button",className:"ml-2",size:"small",color:"secondary",onClick:g,children:"Preview"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:87,columnNumber:21},this)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:82,columnNumber:17},this)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:70,columnNumber:13},this),e.jsxDEV(T,{className:"header_footer_box",children:e.jsxDEV(a,{container:!0,spacing:1,className:"header_footer_subbox",children:[e.jsxDEV(a,{size:12,sx:{ml:2},style:{width:"97%"},children:[e.jsxDEV(l,{variant:"h6",className:"preview-heading",children:"Header:"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:100,columnNumber:25},this),e.jsxDEV(f,{toolbarId:"header",placeholder:"",id:"header",handleChange:t=>{S(t)},editorHtml:o,mentions:!0,saveTemplate:!1},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:101,columnNumber:25},this)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:99,columnNumber:21},this),e.jsxDEV(a,{size:1},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:115,columnNumber:21},this),e.jsxDEV(a,{size:12,sx:{mr:0,ml:2},style:{width:"97%"},children:[e.jsxDEV(l,{variant:"h6",className:"preview-heading",children:"Footer:"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:117,columnNumber:25},this),e.jsxDEV(f,{toolbarId:"footer",placeholder:"",id:"footer",handleChange:t=>{x(t)},editorHtml:s,mentions:!0,saveTemplate:!1},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:120,columnNumber:25},this)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:116,columnNumber:21},this)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:98,columnNumber:17},this)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:94,columnNumber:13},this),e.jsxDEV(L,{open:J,onClose:b,maxWidth:"md",fullWidth:!0,id:"jobContent",children:[e.jsxDEV(U,{className:"header",children:["  ",e.jsxDEV("span",{children:"Preview"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:138,columnNumber:51},this),e.jsxDEV(j,{"aria-label":"close",onClick:b,className:"closeBtn",children:e.jsxDEV(W,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:145,columnNumber:25},this)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:140,columnNumber:21},this)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:138,columnNumber:17},this),e.jsxDEV(R,{dividers:!0,children:[e.jsxDEV("div",{className:"description-con",children:[e.jsxDEV("p",{className:"description-text",children:e.jsxDEV("b",{children:"Description"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:152,columnNumber:86},this)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:152,columnNumber:54},this),e.jsxDEV("span",{dangerouslySetInnerHTML:{__html:o}},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:153,columnNumber:25},this),e.jsxDEV("p",{children:"Role: Collections Agent"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:25},this),e.jsxDEV("p",{children:"Location: Winterville, NC 28590"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:55},this),e.jsxDEV("p",{children:"Duration: 12 Months Contract"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:93},this),e.jsxDEV("p",{children:"Pay Scale: $13 - $15/hr"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:128},this),e.jsxDEV("p",{children:e.jsxDEV("br",{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:161},this)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:158},this),e.jsxDEV("p",{children:"Primary Purpose:"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:171},this),e.jsxDEV("p",{children:"Collect delinquent accounts in a timely, orderly and professional manner while following all standardized collections procedures. Make supervisor aware of problem accounts that may result in repossession, foreclosure, or charge-off."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:194},this),e.jsxDEV("p",{children:e.jsxDEV("br",{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:436},this)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:433},this),e.jsxDEV("p",{children:"Essential Duties and Responsibilities:"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:446},this),e.jsxDEV("p",{children:"Following is a summary of the essential functions for this job. Other duties may be performed, both major and minor, which are not mentioned below. Specific activities may change from time to time."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:491},this),e.jsxDEV("p",{children:"1. Meet performance expectations for collection efforts for assigned accounts based upon individual goals and objectives, e.g., a minimum calls per day, contact percentage, promises/calls ratio, promises kept."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:695},this),e.jsxDEV("p",{children:"2. Place or receive calls in priority order as established by management. Negotiate payment arrangements with clients to cure delinquency, evaluating ability and willingness to pay. Navigate and interpret various screens and relay information to clients accurately and professionally."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:911},this),e.jsxDEV("p",{children:"3. Determine cause of delinquency and best course of action to assist delinquent customer."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:1202},this),e.jsxDEV("p",{children:"4. Document all collection efforts for each assigned account in accordance with established procedures, which may include using action and reaction codes, rescheduling feature, scratch pad entries, etc. in the collection system."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:1299},this),e.jsxDEV("p",{children:"5. Communicate collection efforts to branch lenders on assigned accounts in accordance with established standards, if applicable."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:1534},this),e.jsxDEV("p",{children:"6. Order updated credit bureau report or initiate skip tracing process in accordance with established standards."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:1670},this),e.jsxDEV("p",{children:"7. Review files from Loan Services in accordance with established standards, if applicable."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:1789},this),e.jsxDEV("p",{children:"8. Initiate deferrals on accounts based upon written policy guidelines."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:1887},this),e.jsxDEV("p",{children:"9. Communicate regularly with collections supervisor on status of problem accounts in accordance with established standards."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:1965},this),e.jsxDEV("p",{children:"10. Ensure that all delinquent accounts and assigned queues have been thoroughly worked according to standardized collection procedures."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:2096},this),e.jsxDEV("p",{children:"11. Ensure that appropriate letters are sent to debtors."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:2239},this),e.jsxDEV("p",{children:"12. Process customers payments through electronic draft, if applicable."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:2302},this),e.jsxDEV("p",{children:"13. Process account maintenance transactions according to established guidelines."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:2380},this),e.jsxDEV("p",{children:e.jsxDEV("br",{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:2471},this)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:2468},this),e.jsxDEV("p",{children:"Required Skills and Competencies:"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:2481},this),e.jsxDEV("p",{children:"The requirements listed below are representative of the knowledge, skill and/or ability required. Reasonable accommodations may be made to enable individuals with disabilities to perform the essential functions."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:2521},this),e.jsxDEV("p",{children:"1. High school diploma or equivalent"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:2739},this),e.jsxDEV("p",{children:"2. Good verbal and written communication skills"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:2782},this),e.jsxDEV("p",{children:"3. Good decision-making and problem-solving skills"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:2836},this),e.jsxDEV("p",{children:"4. Good time management/organizational skills"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:2893},this),e.jsxDEV("p",{children:"5. Ability to utilize Microsoft applications, including Outlook, Word, Excel, Access, and PowerPoint"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:2945},this),e.jsxDEV("p",{children:"6. Ability to work in a team environment"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3052},this),e.jsxDEV("p",{children:"7. Ability to work flexible schedule, including overtime as needed"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3099},this),e.jsxDEV("p",{children:e.jsxDEV("br",{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3175},this)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3172},this),e.jsxDEV("p",{children:"Desired Skills:"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3185},this),e.jsxDEV("p",{children:"1. Previous customer service, collections, or sales experience"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3207},this),e.jsxDEV("p",{children:"2. Bilingual"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3276},this),e.jsxDEV("p",{children:e.jsxDEV("br",{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3298},this)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3295},this),e.jsxDEV("p",{children:"Schedule:"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3308},this),e.jsxDEV("p",{children:e.jsxDEV("br",{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3327},this)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3324},this),e.jsxDEV("p",{children:e.jsxDEV("br",{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3340},this)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3337},this),e.jsxDEV("p",{children:"Days"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3350},this),e.jsxDEV("p",{children:"Assigned hours"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3361},this),e.jsxDEV("p",{children:"Monday Thursday"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3382},this),e.jsxDEV("p",{children:"2 days at 8-5 and 2 days at 12-9"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3404},this),e.jsxDEV("p",{children:"Friday"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3443},this),e.jsxDEV("p",{children:"Twice a month 11-8 if assigned or 8-5 if not"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3456},this),e.jsxDEV("p",{children:"Saturday"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3507},this),e.jsxDEV("p",{children:"As assigned usually twice a month 1 @ 8-12 and last Saturday is 8-2 all teammates"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3522},this),e.jsxDEV("p",{children:"Sunday"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3610},this),e.jsxDEV("p",{children:"As assigned usually once every 3-4 month except if the last day of the month falls on Monday, Tuesday or Wednesday then all teammates will work the Sunday prior from 3-9"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3623},this),e.jsxDEV("p",{children:"Last day of the Month"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3799},this),e.jsxDEV("p",{children:"All teammates will work 8am to 9pm unless the last day falls on Sunday then they will work 12pm to 9pm"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:154,columnNumber:3827},this)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:152,columnNumber:21},this),e.jsxDEV("div",{className:"preview-text",dangerouslySetInnerHTML:{__html:s}},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:156,columnNumber:21},this)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:149,columnNumber:17},this)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:137,columnNumber:13},this)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/JobContent/JobContent.tsx",lineNumber:69,columnNumber:9},this)}export{G as default};
