import{r as c,k as e,D as ie,I as T,n as le,o as te,S as j,l as V,U as pe,B as Y,V as a,L as W,W as P,A as b,O as $,T as q,b1 as ye}from"./Cgppv_Sf.js";import{R as O,E as be}from"./CtTUZ4Jr.js";import{D as De}from"./DYDlcIIt.js";import{M as Ne}from"./D8IKBRq0.js";import{u as he}from"./C-Jq_Y4P.js";import{c as fe,a as U,e as Pe}from"./CRJpcgJc.js";import{I as ve}from"./BNdv2g09.js";import{u as Ae}from"./gltQ0rpT.js";import{I as ge}from"./D64fhI8f.js";import{D as se}from"./B-98_CNj.js";import{F as G}from"./XPHitdj4.js";import{a as oe,T as H,F as K}from"./BxLAtHuG.js";import{T as Z}from"./CagltWra.js";import{R as xe,l as Se}from"./kx4FOAoQ.js";import{S as Ee}from"./8-7dSsDd.js";import{C as Ce}from"./CAYZvuI-.js";import Le from"./RfaWrcPY.js";import{E as Re}from"./6HgfybZm.js";import{A as Ue,a as Te,b as Ve}from"./C7pzRmL5.js";import"./ChUKxi90.js";import"./D6SqIoha.js";import"./Bp2g836F.js";import"./BESjHuWm.js";import"./DYhLeBIs.js";import"./DaGbQO6h.js";import"./CW6dvan5.js";import"./CB9nuhLI.js";import"./Dho3ZFNS.js";import"./DZd2l5Bl.js";import"./dZX7lgtO.js";import"./DxILc9AR.js";import"./DIGW6AYh.js";import"./BiLTbjOU.js";import"./CAWvjt4G.js";import"./CbCF5Xps.js";import"./BteIfgc7.js";import"./6vuVcGup.js";import"./BJCg17MG.js";import"./DI3-CCgY.js";const We=({open:m,handleClose:v,add:A,policyData:r})=>{const[I,x]=c.useState(!1),S=()=>{o.setFieldValue("policyDocument",null),d.length=0,p.current&&(p.current.value="")},N=()=>{v(!1),S()},w=c.useCallback(l=>{o.setFieldValue("policyDocument",l[0])},[]),{getRootProps:g,getInputProps:F,isDragActive:E,acceptedFiles:d,inputRef:p}=Ae({onDrop:w,multiple:!1}),k=fe({policyName:U().required("Policy name is required"),policyURL:U().when("policyType",{is:"url",then:l=>l.test("is-valid-url","Enter a valid URL",n=>ve.check(n||"")).required("URL is required for URL type"),otherwise:l=>l.notRequired()}),policyContent:U().when("policyType",{is:"content",then:l=>l.required("Policy content is required"),otherwise:l=>l.notRequired()}),policyDocument:Pe().when("policyType",{is:"upload",then:l=>l.required("A document is required for Upload type"),otherwise:l=>l.notRequired()}),policyType:U().required("Policy type is required")}).test("at-least-one","You must provide at least one type of policy detail (URL, Content, or Document)",l=>l.policyType==="url"&&l.policyURL||l.policyType==="content"&&l.policyContent||l.policyType==="upload"&&l.policyDocument),o=he({initialValues:{policyName:r?r.policyName:"",policyURL:r?r.policyURL:"",policyContent:r?r.policyContent:"",policyDocument:r?r.policyDownloadPath:"",policyType:r?r.policyType:"url",policyId:r?r.policyId:""},validationSchema:k,enableReinitialize:!0,onSubmit:l=>{}});d.map(l=>e.jsxDEV("span",{children:[l.path," - ",(l.size/(1024*1024)).toFixed(2)," MB"]},l.path,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:108,columnNumber:9},void 0));const C=l=>{const n=l.target.value;o.setFieldValue("policyType",n),(n==="url"||n==="content")&&S(),n==="url"?(o.setFieldValue("policyContent",""),o.setFieldValue("policyDocument",null)):n==="content"?(o.setFieldValue("policyURL",""),o.setFieldValue("policyDocument",null)):n==="upload"&&(o.setFieldValue("policyURL",""),o.setFieldValue("policyContent",""))},z=()=>{if(x(!0),!o.values.policyName.trim()){a("Please enter a Policy Name","error");return}if(o.values.policyType==="url"&&!o.values.policyURL.trim()){a("Please enter a URL for the URL type","error");return}if(o.values.policyType==="content"&&!o.values.policyContent.trim()){a("Please enter content for the Content type","error");return}if(o.values.policyType==="upload"&&!o.values.policyDocument){a("Please upload a document for the Upload type","error");return}o.validateForm().then(l=>{if(Object.keys(l).length===0){let n={policyName:o.values.policyName,clientId:W.getvalue("clientId")};o.values.policyId&&(n.policyId=o.values.policyId),o.values.policyType==="url"?n.policyURL=o.values.policyURL:o.values.policyType==="content"?n.policyContent=o.values.policyContent:o.values.policyType==="upload"&&(n.policyDocument=o.values.policyDocument);const M=n.policyId?"updated":"saved";P(b.postWithFileData("admin","savePolicy",n).then(h=>{h.data.Success?(a(`Policy has been ${M} successfully`,"success"),o.resetForm(),o.setFieldValue("policyDocument",null),v(!0)):a(h.data.Message?h.data.Message:"An error occurred","error")}).catch(h=>{a("Network or server error occurred","error")}))}else a("Please fill all required fields.","error")})};c.useEffect(()=>{console.log("Current policy type:",o.values.policyType)},[o.values.policyType]),c.useEffect(()=>{p.current&&(p.current.value="")},[p,o.values.policyDocument]);const y=r!=null&&r.policyDownloadPath?`https://ovastorage.s3.us-west-2.amazonaws.com/${r.policyDownloadPath}`:"",L=y?y.split("/").pop():"No file selected",R=l=>{b.saveAuditLog(l)};return e.jsxDEV(ie,{open:m,onClose:()=>v(!1),fullWidth:!0,children:[e.jsxDEV(se,{children:[A?"Add New":"Update"," Policy"]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:221,columnNumber:13},void 0),e.jsxDEV(T,{"aria-label":"close",onClick:N,sx:{position:"absolute",right:8,top:8,color:l=>l.palette.grey[500]},children:e.jsxDEV(le,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:232,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:222,columnNumber:13},void 0),e.jsxDEV(te,{className:"AddPoliciesdialogContent",children:e.jsxDEV("form",{onSubmit:o.handleSubmit,children:[e.jsxDEV(j,{className:"AddPolicyDialogContent",children:e.jsxDEV(G,{fullWidth:!0,children:[e.jsxDEV(oe,{className:"AddPolicyFormControlLabel",children:"Policy Name"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:238,columnNumber:29},void 0),e.jsxDEV(H,{variant:"outlined",name:"policyName",size:"small",value:o.values.policyName,onChange:o.handleChange,error:o.touched.policyName&&!!o.errors.policyName},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:239,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:237,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:236,columnNumber:21},void 0),e.jsxDEV(G,{size:"small",fullWidth:!0,children:[e.jsxDEV(V,{display:"flex",alignItems:"center",children:[e.jsxDEV(oe,{className:"policyDetailsLabel",children:"Provide Policy Details"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:253,columnNumber:29},void 0),e.jsxDEV(Z,{title:"Please select exactly one type of policy detail to provide.",placement:"right",children:e.jsxDEV(ge,{style:{color:"rgba(0, 0, 0, 0.54)",marginLeft:4,marginTop:8,paddingTop:"2"}},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:255,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:254,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:252,columnNumber:25},void 0),e.jsxDEV(xe,{name:"policyType",value:o.values.policyType,onChange:C,className:"policyDetailsLabel",children:e.jsxDEV(j,{spacing:2,direction:"row",children:[e.jsxDEV(K,{value:"url",control:e.jsxDEV(O,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:268,columnNumber:46},void 0),label:"URL"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:266,columnNumber:33},void 0),e.jsxDEV(K,{value:"content",control:e.jsxDEV(O,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:273,columnNumber:46},void 0),label:"Content"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:271,columnNumber:33},void 0),e.jsxDEV(K,{value:"upload",control:e.jsxDEV(O,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:278,columnNumber:46},void 0),label:"Upload"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:276,columnNumber:33},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:265,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:258,columnNumber:25},void 0),o.values.policyType==="url"&&e.jsxDEV("div",{className:o.values.policyType==="url"?"policyDetailsLabel policyInputContainer active":"policyInputContainer",children:e.jsxDEV(H,{fullWidth:!0,variant:"outlined",name:"policyURL",size:"small",placeholder:"Enter Policy URL",value:o.values.policyURL,onChange:o.handleChange,error:o.touched.policyURL&&!!o.errors.policyURL,helperText:o.touched.policyURL&&typeof o.errors.policyURL=="string"?o.errors.policyURL:""},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:286,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:285,columnNumber:29},void 0),o.values.policyType==="content"&&e.jsxDEV("div",{className:o.values.policyType==="content"?" policyDetailsLabel policyInputContainer active":"policyInputContainer",children:e.jsxDEV(H,{fullWidth:!0,multiline:!0,rows:4,variant:"outlined",name:"policyContent",label:"Copy paste Policy Content",value:o.values.policyContent,onChange:o.handleChange,error:o.touched.policyContent&&!!o.errors.policyContent,helperText:o.touched.policyContent&&typeof o.errors.policyContent=="string"?o.errors.policyContent:""},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:304,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:303,columnNumber:29},void 0),o.values.policyType==="upload"&&e.jsxDEV("div",{className:o.values.policyType==="upload"?" policyDetailsLabel policyInputContainer active":"policyInputContainer",children:e.jsxDEV(G,{fullWidth:!0,className:"customDropZone",children:e.jsxDEV("div",{...g({className:`customDropZone dropzone ${d.length>0?"fileDropped":""}`}),children:[e.jsxDEV("input",{...F()},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:324,columnNumber:41},void 0),E?e.jsxDEV("p",{children:"Drop the document here..."},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:326,columnNumber:45},void 0):d.length>0?e.jsxDEV("p",{children:d[0].name},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:328,columnNumber:45},void 0):y?e.jsxDEV("p",{children:L},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:330,columnNumber:45},void 0):e.jsxDEV("p",{children:["Drag 'n' drop document here, or click to select ",e.jsxDEV("span",{style:{color:"red"},children:"*"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:332,columnNumber:96},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:332,columnNumber:45},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:323,columnNumber:37},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:322,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:321,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:251,columnNumber:21},void 0),e.jsxDEV(pe,{children:[e.jsxDEV(Y,{variant:"outlined",type:"button",size:"small",color:"secondary",className:"mr-2",onClick:()=>{R(4284),N()},children:"Cancel"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:351,columnNumber:25},void 0),e.jsxDEV(Y,{type:"submit",color:"primary",onClick:()=>{R(4285),z()},variant:"contained",children:[A?"Add":"Update"," Policy"]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:357,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:350,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:235,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:234,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/AddPolicies.tsx",lineNumber:220,columnNumber:9},void 0)},Po=()=>{let m=W.getvalue("clientId"),v=W.getvalue("recrId");const[A,r]=c.useState([]),[I,x]=c.useState(!1),[S,N]=c.useState(!1),[w,g]=c.useState(!1),[F,E]=c.useState([{policyId:"",policyName:"",policyURL:"",policyContent:"",policyDownloadPath:"",policyType:""}]),[d,p]=c.useState({pageIndex:0,pageSize:10}),[k,o]=c.useState(0),[C,z]=c.useState(""),[y,L]=c.useState(""),R=i=>{ae(i).then(()=>{N(!0),g(!0),f(4286)}).catch(t=>{a("Unable to fetch User Data",t)})},l=()=>{N(!1),E(null),g(!0)},n=i=>{g(!1),i&&B()},M=(i,t)=>{ye(`Are you sure you want to delete ${t} Policy?`,()=>{h(i)})},h=i=>{P(b.deleteById("admin",`deletePolicy/${i}/${v}`,m).then(t=>{t.data.Status===200?(a("Policy has been deleted successfully.","success"),B(),f(4287)):a(t.data.Message?t.data.Message:"An error occured while deleting","error")}).catch(t=>{var s,u,D,ee;a((u=(s=t.response)==null?void 0:s.data)!=null&&u.Message?(ee=(D=t.response)==null?void 0:D.data)==null?void 0:ee.Message:"An error occured while deleting","error")}))};c.useEffect(()=>{p(i=>({...i,pageIndex:0}))},[C]);const B=c.useCallback(Se.debounce(()=>{P(b.getCall("admin",`getPolicyByClientId/${m}`).then(i=>{console.log(i),r(Array.isArray(i.data.Policy)?i.data.Policy:[]),o(i.data.Policy.length)}))},400),[]);c.useEffect(()=>{B(),f(4282)},[]);const f=i=>{b.saveAuditLog(i)},ce=i=>{i>d.pageIndex?f(4288):i<d.pageIndex&&f(4289)},ae=i=>P(b.getCall("admin",`getPolicyById/${i}/${m}`).then(t=>{if(t.data.Policy&&t.data.Policy.length>0){const s=t.data.Policy[0],u=s.policyURL?"url":s.policyContent?"content":s.policyDownloadPath?"upload":"",D={policyId:s.policyId,policyName:s.policyName,policyURL:s.policyURL,policyContent:s.policyContent,policyDownloadPath:s.policyDownloadPath,clientId:W.getvalue("clientId"),policyType:u};return E(D),N(!0),D}else throw a("No policy data found","error"),new Error("No policy data found")}).catch(t=>{throw console.error("Error fetching policy details:",t),a("Unable to fetch policy data","error"),t}));c.useEffect(()=>{if(!m)return;(async()=>{var t,s;try{const u=await P(b.postWithData("admin","getPolicyContent",{clientId:m}));console.log(u),L(((s=(t=u==null?void 0:u.data)==null?void 0:t.policyContentDetails)==null?void 0:s.policyContent)||"")}catch(u){console.error("Error fetching policy details:",u),a("Unable to fetch policy data","error")}})()},[m]);const[re,_]=c.useState(!1),[ne,J]=c.useState(""),Q=i=>{J(i),_(!0)},ue=async()=>{var i,t;if(!m||!y){a("Client ID or policy content is missing","error");return}try{const s=await P(b.postWithData("admin","saveOrUpdatePolicyContent",{clientId:m,policyContent:y}));((i=s==null?void 0:s.data)==null?void 0:i.Status)===200?a("Policy content updated successfully","success"):a(((t=s==null?void 0:s.data)==null?void 0:t.Message)||"Failed to update policy content","error")}catch(s){console.error("Error saving policy content:",s),a("Unable to save policy content","error")}x(!1)},de=(i,t)=>{x(t)},X=()=>{_(!1),J("")},me=c.useMemo(()=>[{accessorKey:"policyName",header:"Policy Name",size:200},{accessorKey:"content",header:"Policy Details",size:400,Cell:({row:i})=>{const t=i.original;let s=t.policyURL||t.policyContent||t.policyDownloadPath;if(s&&s.length>50&&(s=`${s.substring(0,47)}...`),t.policyURL||t.policyDownloadPath){const u=t.policyURL||`https://ovastorage.s3.us-west-2.amazonaws.com/${t.policyDownloadPath}`;return e.jsxDEV("a",{href:u,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"blue",cursor:"pointer"},onClick:D=>{D.preventDefault(),Q(u)},children:s},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:313,columnNumber:13},void 0)}return s||"No details available"}},{accessorKey:"actions",header:"Actions",enableSorting:!1,Cell:({row:i})=>e.jsxDEV(j,{direction:"row",spacing:1,children:[e.jsxDEV(Z,{title:"Edit",placement:"top",children:e.jsxDEV(T,{onClick:()=>{R(i.original.policyId)},children:e.jsxDEV(be,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:340,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:339,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:338,columnNumber:11},void 0),e.jsxDEV(Z,{title:"Delete",placement:"top",children:e.jsxDEV(T,{onClick:()=>{M(i.original.policyId,i.original.policyName)},children:e.jsxDEV(De,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:345,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:344,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:343,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:337,columnNumber:9},void 0),size:100}],[Q]);return e.jsxDEV("div",{className:"policies pt-3 px-5",children:[e.jsxDEV($,{container:!0,direction:"row",className:"customCard px-4 py-2",justifyContent:"space-between",alignItems:"center",display:"flex",sx:{minHeight:"auto !important"},children:[e.jsxDEV(q,{variant:"h6",className:"headerName",children:"Policies"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:365,columnNumber:9},void 0),e.jsxDEV(j,{direction:"row",className:"btn-container",children:e.jsxDEV(Y,{variant:"contained",color:"primary",size:"small",onClick:()=>{f(4283),l()},children:"New Policies"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:369,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:368,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:356,columnNumber:7},void 0),e.jsxDEV(V,{mb:2,children:e.jsxDEV(Ue,{expanded:I,onChange:de,children:[e.jsxDEV(Te,{expandIcon:e.jsxDEV(Re,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:375,columnNumber:25},void 0),"aria-controls":"panel1-content",id:"panel1-header",className:"m-0",sx:{minHeight:"48px !important"},children:e.jsxDEV(q,{children:e.jsxDEV(q,{children:I?"Please provide policy details":e.jsxDEV(e.Fragment,{children:[e.jsxDEV("strong",{children:"Standard policy :"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:387,columnNumber:21},void 0)," ",y.replace(/<[^>]*>/g,"")]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:386,columnNumber:19},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:382,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:381,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:374,columnNumber:11},void 0),e.jsxDEV(Ve,{children:[e.jsxDEV(V,{mb:3,children:e.jsxDEV(Le,{toolbarId:"emailBody",id:"emailBody",placeholder:"Policies",editorHtml:y,handleChange:i=>L(i),policyPlaceholder:!0},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:400,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:398,columnNumber:13},void 0),e.jsxDEV(V,{display:"flex",justifyContent:"flex-end",pt:2,children:e.jsxDEV(Y,{variant:"contained",color:"primary",size:"small",onClick:ue,children:"Save"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:411,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:410,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:397,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:373,columnNumber:9},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:372,columnNumber:7},void 0),e.jsxDEV($,{container:!0,className:"customCard p-4",children:e.jsxDEV($,{sx:{width:"calc(100%)"},children:e.jsxDEV("div",{className:"MRTableCustom  pl-0 ",children:e.jsxDEV(Ne,{columns:me,data:A,enablePinning:!0,enableSorting:!0,enableColumnFilters:!0,enableGlobalFilter:!0,muiTableContainerProps:{sx:{maxHeight:"70vh"}},icons:{ArrowDownwardIcon:i=>e.jsxDEV(Ee,{...i},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:438,columnNumber:61},void 0)},initialState:{columnPinning:{left:["mrt-row-select"]},density:"compact",showGlobalFilter:!0},muiPaginationProps:{rowsPerPageOptions:[10],showFirstButton:!1,showLastButton:!1,SelectProps:{style:{display:"none"}}},enablePagination:!0,renderBottomToolbarCustomActions:()=>e.jsxDEV(Ce,{page:d.pageIndex,rowsPerPage:10,rowCount:k,onChangePage:i=>{p({...d,pageIndex:i,pageSize:10}),ce(i)},showCount:!1},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:455,columnNumber:17},void 0),onGlobalFilterChange:z,state:{pagination:d,globalFilter:C}},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:429,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:428,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:427,columnNumber:9},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:426,columnNumber:7},void 0),e.jsxDEV(ie,{open:re,onClose:X,fullWidth:!0,maxWidth:"md",children:[e.jsxDEV(se,{children:["Document Viewer",e.jsxDEV(T,{"aria-label":"close",onClick:X,sx:{position:"absolute",right:8,top:8},children:e.jsxDEV(le,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:484,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:479,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:477,columnNumber:9},void 0),e.jsxDEV(te,{children:e.jsxDEV("iframe",{src:ne,title:"Document Viewer",width:"100%",height:"600px"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:488,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:487,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:476,columnNumber:7},void 0),A&&e.jsxDEV(We,{open:w,handleClose:n,add:!S,policyData:F},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:492,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/Policies.tsx",lineNumber:355,columnNumber:5},void 0)};export{Po as default};
