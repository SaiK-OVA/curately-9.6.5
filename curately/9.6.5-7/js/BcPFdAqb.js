import{r as i,k as e,S as v,I as j,T as O,cr as ce,al as ne,W as U,A as V,L as r,D as ue,l as me,n as de,o as fe,Y as Le,b2 as $,a4 as F,V as q,bV as _,b1 as be,O as G,B as z}from"./Cgppv_Sf.js";import{A as Q}from"./DEbMl7Ub.js";import{S as ae}from"./8-7dSsDd.js";import{M as se}from"./D8IKBRq0.js";import{D as pe}from"./CMCYaaxo.js";import{a as Ne}from"./BhLB-J02.js";import{D as De,R as Se}from"./kx4FOAoQ.js";import{C as ie}from"./CAYZvuI-.js";import{K as he,a as Ce,V as ye}from"./Cwk2pgKd.js";import ge from"./DnjgexvS.js";import{C as K}from"./B93O5liC.js";import{D as xe}from"./XFArKoHE.js";import{S as re}from"./GDwwTdj-.js";import{D as Ae}from"./B-98_CNj.js";import{I as J}from"./Bp2g836F.js";import{T as X}from"./CagltWra.js";import{F as Ee}from"./XPHitdj4.js";import{F as Z,T as Te}from"./BxLAtHuG.js";import{R as ee,b as qe,c as te}from"./CtTUZ4Jr.js";import"./BESjHuWm.js";import"./DYhLeBIs.js";import"./DaGbQO6h.js";import"./6HgfybZm.js";import"./CW6dvan5.js";import"./CB9nuhLI.js";import"./Dho3ZFNS.js";import"./DZd2l5Bl.js";import"./ChUKxi90.js";import"./dZX7lgtO.js";import"./DxILc9AR.js";import"./D6SqIoha.js";import"./DIGW6AYh.js";import"./BiLTbjOU.js";import"./CAWvjt4G.js";import"./CbCF5Xps.js";import"./BteIfgc7.js";import"./BJCg17MG.js";import"./DOrKn708.js";import"./C-Jq_Y4P.js";import"./CRJpcgJc.js";import"./rv0X_E0P.js";import"./CIF9obRo.js";import"./jMXFmExr.js";import"./BTJXnY9n.js";import"./BfS1khEl.js";import"./PyTvx8hA.js";import"./BwODXlAG.js";import"./CkGdyBwG.js";import"./BGveyHVg.js";import"./FVe6lIVR.js";import"./DKC21gSL.js";import"./B7NoFbgU.js";import"./CVn_imtJ.js";import"./B_ivY0h5.js";import"./Dau3miA7.js";import"./rYcqsWUw.js";import"./CtuCFr0K.js";import"./CbbOXEJA.js";import"./C7pzRmL5.js";import"./CVtbaTfk.js";import"./gltQ0rpT.js";import"./6vuVcGup.js";import"./Cph3grji.js";import"./DfUMYGn5.js";import"./DpxQD_8Z.js";import"./CUgjgqL5.js";import"./RfaWrcPY.js";import"./DI3-CCgY.js";import"./BUeBsI1N.js";import"./D64fhI8f.js";import"./BDDXo8MR.js";import"./BNdv2g09.js";import"./BFeG3Rrm.js";import"./BJotH55m.js";import"./BkKnc3pH.js";import"./DfZvsVaa.js";import"./CB9QYnGm.js";import"./oe9WjlWR.js";import"./BP4ZMwX4.js";import"./C148XJoK.js";import"./C-VMvMKD.js";import"./BAcuJNx9.js";import"./B8i2ItYi.js";import"./BKUcwd0Z.js";import"./DThR_4yw.js";import"./D-cgBsUJ.js";import"./CRgVoItN.js";import"./CMcHlfne.js";import"./DiQ5_FKt.js";import"./DYpVgzu1.js";import"./Jw20iAvk.js";import"./CykLBdg1.js";import"./CTm9rAjf.js";import"./CicR4FO4.js";import"./CrXtTJmX.js";import"./DGz-IBxG.js";/* empty css        */import"./3Gqd8Nje.js";import"./zAWdIVxY.js";import"./DUrHk-MO.js";import"./CPvg8iC8.js";const ve=({open:c,closeDrawer:h,contactIdsList:s,contactId:C})=>{const[g,L]=i.useState(""),n=i.useRef(0);i.useEffect(()=>(L(C),n.current=R(C),()=>{n.current=0}),[C,s]);const R=D=>{if(s!=null&&s.length){let u=s.findIndex(b=>(b==null?void 0:b.toString())===(D==null?void 0:D.toString()))||0;return u>=0?u:0}else return 0},m=D=>{switch(L(null),D){case"BACKWARD":n.current>=0?new Promise(u=>{setTimeout(()=>{u(!0)},100)}).then(()=>{L(s[n.current-1]),n.current=n.current-1}):L(s[n.current]);break;case"FORWARD":n.current+1!==s.length?new Promise(u=>{setTimeout(()=>{u(!0)},100)}).then(()=>{L(s[n.current+1]),n.current=n.current+1}):L(s[n.current]);break}};return e.jsxDEV(xe,{open:c,onClose:h,sx:{zIndex:999,height:"100vh"},anchor:"right",id:"ViewCandidateDrawer",children:e.jsxDEV(v,{width:"85vw",minHeight:"110vh",position:"relative",children:[e.jsxDEV(v,{className:"viewContactModalHeader",children:e.jsxDEV(v,{alignItems:"center",justifyContent:"right",direction:"row",px:1,width:"100%",children:[!!(s!=null&&s.length)&&e.jsxDEV(v,{direction:"row",spacing:1,alignItems:"center",children:[e.jsxDEV(j,{disabled:n.current===0,size:"small",onClick:()=>m("BACKWARD"),children:e.jsxDEV(he,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Contacts/View/ViewContactModal.tsx",lineNumber:71,columnNumber:144},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Contacts/View/ViewContactModal.tsx",lineNumber:71,columnNumber:29},void 0),e.jsxDEV(O,{children:`${n.current+1} of ${s==null?void 0:s.length}`},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Contacts/View/ViewContactModal.tsx",lineNumber:72,columnNumber:29},void 0),e.jsxDEV(j,{disabled:n.current+1===s.length,size:"small",onClick:()=>m("FORWARD"),children:e.jsxDEV(Ce,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Contacts/View/ViewContactModal.tsx",lineNumber:73,columnNumber:169},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Contacts/View/ViewContactModal.tsx",lineNumber:73,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Contacts/View/ViewContactModal.tsx",lineNumber:70,columnNumber:54},void 0),e.jsxDEV(j,{size:"small",onClick:h,children:e.jsxDEV(K,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Contacts/View/ViewContactModal.tsx",lineNumber:75,columnNumber:72},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Contacts/View/ViewContactModal.tsx",lineNumber:75,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Contacts/View/ViewContactModal.tsx",lineNumber:69,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Contacts/View/ViewContactModal.tsx",lineNumber:68,columnNumber:17},void 0),e.jsxDEV("div",{style:{padding:"5rem 1rem 1rem",background:"var(--c-neutral-10)"},children:g&&e.jsxDEV(ge,{viewContactId:g,isInModal:!0},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Contacts/View/ViewContactModal.tsx",lineNumber:79,columnNumber:39},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Contacts/View/ViewContactModal.tsx",lineNumber:78,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Contacts/View/ViewContactModal.tsx",lineNumber:67,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Contacts/View/ViewContactModal.tsx",lineNumber:66,columnNumber:9},void 0)},le=ce(c=>({id:"",type:"",candidateOrContact:"",onSubmit:void 0,close:()=>c({onSubmit:void 0,id:"",type:"",candidateOrContact:""})})),B=(c,h,s,C)=>{le.setState({id:c,type:h,candidateOrContact:s,onSubmit:C})},Ve=()=>{const{id:c,type:h,candidateOrContact:s,onSubmit:C,close:g}=le(),[L,n]=i.useState([]),{jobId:R}=ne(),[m,D]=i.useState(!1),u=i.useRef(""),b=i.useRef(""),[p,Y]=i.useState(""),W=a=>{if(s==="candidate")u.current=a;else if(s==="contact")b.current=a;else return null;D(!0)},I=()=>{D(!1)},y=[{accessorFn:a=>`${a.firstName} ${a.lastName}`,header:"Name",Cell:({row:a})=>e.jsxDEV("span",{className:"hightLightTd",onClick:()=>W(a.original.userId+""),children:a.original.firstName+" "+a.original.lastName},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:363,columnNumber:17},void 0)},{accessorKey:"email",header:"Email"}];i.useEffect(()=>{A(a=>({...a,pageIndex:0})),c&&x()},[c]);const x=()=>{s==="candidate"?U(V.postWithData("admin","getSequenceUsersList",{sequenceId:c,clientId:r.getvalue("clientId"),type:h}).then(a=>{if(a.data.Success){let f=[...a.data.list];for(let l=0;l<f.length;l++)f[l].id=l+1,f[l].actions="";n(f)}})):s==="contact"&&U(V.postWithData("admin","getSequenceContactUserList",{sequenceId:c,clientId:r.getvalue("clientId"),type:h}).then(a=>{if(a.data.Success){let f=[...a.data.List];for(let l=0;l<f.length;l++)f[l].id=l+1,f[l].actions="";n(f)}}))},[S,A]=i.useState({pageIndex:0,pageSize:10}),N=i.useMemo(()=>p?L.filter(f=>`${f.firstName} ${f.lastName}`.toLowerCase().includes(p.toLowerCase())):L,[L,p]),P=i.useMemo(()=>N.length,[N]),M=i.useMemo(()=>N.map(a=>a.userId),[N]),k=i.useMemo(()=>N.map(a=>a.userId),[N]);return e.jsxDEV("div",{children:[m&&(s==="candidate"?e.jsxDEV(ye,{candidateId:u.current,closePopup:I,jobId:R||"",open:m,candidateIdsList:M},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:452,columnNumber:21},void 0):s==="contact"?e.jsxDEV(ve,{open:m,closeDrawer:I,contactId:b.current,contactIdsList:k},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:460,columnNumber:25},void 0):null),e.jsxDEV(ue,{open:!!C&&!m,onClose:g,maxWidth:"md",fullWidth:!0,id:"TotalList",children:[e.jsxDEV(me,{display:"flex",justifyContent:"space-between",alignItems:"center",className:"TotalList",children:[e.jsxDEV(Ae,{p:1.75,children:["Assigned ",s==="contact"?"Contacts":"Candidates"," List"]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:470,columnNumber:21},void 0),e.jsxDEV(j,{onClick:g,children:e.jsxDEV(de,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:472,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:471,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:469,columnNumber:17},void 0),e.jsxDEV(fe,{children:e.jsxDEV("div",{className:"MRTableCustom pl-0",children:e.jsxDEV(se,{columns:y,data:N,enablePinning:!0,initialState:{columnPinning:{left:["mrt-row-select"]},density:"compact",showGlobalFilter:!0},enableDensityToggle:!1,enableFullScreenToggle:!1,enableGlobalFilterModes:!0,columnResizeMode:"onChange",getRowId:a=>a.userId,enableStickyHeader:!0,muiPaginationProps:{showFirstButton:!1,showLastButton:!1,SelectProps:{style:{display:"none"}}},enablePagination:!0,icons:{ArrowDownwardIcon:a=>e.jsxDEV(ae,{...a},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:499,columnNumber:68},void 0)},state:{pagination:S},renderBottomToolbarCustomActions:()=>e.jsxDEV(ie,{page:S.pageIndex,rowsPerPage:S.pageSize,rowCount:P,onChangePage:a=>A({...S,pageIndex:a,pageSize:S.pageSize})},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:503,columnNumber:33},void 0),muiSearchTextFieldProps:{placeholder:`Search ${s==="candidate"?"Candidates":"Contacts"}`,value:p,onChange:a=>{A({...S,pageIndex:0}),Y(a.target.value)},InputProps:{startAdornment:e.jsxDEV(J,{position:"start",children:e.jsxDEV(re,{fontSize:"small",htmlColor:"#757575"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:524,columnNumber:86},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:524,columnNumber:53},void 0),endAdornment:e.jsxDEV(J,{position:"end",disablePointerEvents:!p,children:e.jsxDEV(K,{fontSize:"small",htmlColor:p?"#757575":"#ebebeb",sx:{cursor:"pointer"},onClick:()=>{A({...S,pageIndex:0}),Y("")}},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:526,columnNumber:41},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:525,columnNumber:51},void 0)}}},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:477,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:476,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:475,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:468,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/TotalList/TotalList.tsx",lineNumber:449,columnNumber:9},void 0)},An=()=>{const{sequenceType:c}=ne(),h=Le();i.useEffect(()=>{c&&(R(c),x(""))},[c]);const[s,C]=i.useState([]),g=r.getvalue("recrId"),L=r.getvalue("clientId"),[n,R]=i.useState(c||(r.checkIntegration($)?"candidate":r.checkIntegration(F)?"contact":"candidate")),[m,D]=i.useState("mySequences"),[u,b]=i.useState({pageIndex:0,pageSize:10}),[p,Y]=i.useState(""),[W,I]=i.useState([]),[y,x]=i.useState(""),S=i.useMemo(()=>["",null,void 0].includes(y)?W||[]:W.filter(t=>{var o;let d=((o=y==null?void 0:y.toLowerCase())==null?void 0:o.trim())||"";return t.sequenceName.toLowerCase().includes(d)||(n==="candidate"?t.sequenceType.toLowerCase().includes(d):!1)}),[y,W]);i.useEffect(()=>()=>x(""),[]);const A=i.useRef(!0);i.useEffect(()=>{A.current?A.current=!1:N()},[n,m]);const N=()=>{const t=r.getvalue("clientId"),d=r.getvalue("recrId"),o=m==="mySequences"?{recrId:d,clientId:t,all:!1}:r.isChromeExtensionEnabled()?{clientId:t,recrId:d,all:!0,recrIds:r.getvalue("invitedAndReferredRecrIds")}:{clientId:t,all:!0};P("admin",n==="candidate"?"getSequenceList":"getContactSequenceList","postWithData",o)},P=(t,d,o,H)=>{U(V[o](t,d,H||{}).then(E=>{if(E.data.Success===!0||E.data.Message==="Success"){let T=E.data.Data||E.data.List||E.data.list;T=T!=null&&T.length?T.map((w,oe)=>({...w,id:oe+1,actions:"",sequence_name:w.sequence_name||w.Sequence_Name,sequenceType:[null,void 0,""].includes(w.jobId)?"Manual":"AI"})):[],C(T||[])}else q("Failed to fetch campaigns","error")}).catch(E=>{console.error("Failed to fetch campaigns:",E),q("Failed to fetch campaigns","error")}))};i.useEffect(()=>{const t=p?p.toLowerCase():"",d=s.filter(o=>o.recrName&&o.recrName.toLowerCase().includes(t)||o.sequenceName&&o.sequenceName.toLowerCase().includes(t)||o.recrId&&`${o.recrId}`.includes(t)||o.sequenceId&&`${o.sequenceId}`.includes(t));I(d),b(o=>({...o,pageIndex:0}))},[p,s]);const M=S.length,k=t=>{console.log(t),console.log(n),n==="candidate"?U(V.deleteById("admin","deleteSequence",t+"/"+L).then(d=>{d.data.Status===200?(q("Campaign has been Deleted Successfully.","success"),N()):q("An error occurred while Deleting Campaign. Please try again.","error")})):n==="contact"&&U(V.deleteById("admin","deleteContactSequence",t+"/"+L).then(d=>{d.data.Status===200?(q("Campaign has been Deleted Successfully.","success"),N()):q("An error occurred while Deleting Campaign. Please try again.","error")}))},a=t=>["",null,void 0].includes(t.jobId)?`campaigns/${n}/edit/${t.sequenceId}`:`aicampaigns/${n}/edit/${t.sequenceId}`,f=i.useMemo(()=>[{accessorKey:"sequenceName",header:"Campaign Name",size:60,enableColumnPinning:!0,Cell:({row:t})=>m==="mySequences"?e.jsxDEV(_,{to:`/${r.getvalue("clientName")}/letter/${a(t.original)}`,className:"hightLightTd",children:t.original.sequenceName},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:221,columnNumber:25},void 0):m==="allSequences"&&t.original.recrId===r.getvalue("recrId")?e.jsxDEV(_,{to:`/${r.getvalue("clientName")}/letter/${a(t.original)}`,className:"hightLightTd",children:t.original.sequenceName},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:226,columnNumber:29},void 0):e.jsxDEV("span",{children:t.original.sequenceName},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:230,columnNumber:29},void 0)},{accessorKey:"sequenceType",header:"Type",size:60,enableColumnPinning:!0},{accessorKey:"createdDate",header:"Created Date",muiTableHeadCellProps:{align:"center",width:"100px"},muiTableBodyCellProps:{align:"center",width:"100px"},Cell:({row:t})=>e.jsxDEV("span",{children:De.fromSQL(t.original.createdDate.substring(0,10)).toFormat("MM/dd/yyyy")},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:252,columnNumber:21},void 0),size:80,minSize:80,maxSize:80},{accessorKey:"stages_count",header:"No of Stages",muiTableHeadCellProps:{align:"center"},muiTableBodyCellProps:{align:"center"}},{accessorKey:"users_total",header:"Total",muiTableHeadCellProps:{align:"center"},muiTableBodyCellProps:{align:"center"},Cell:({row:t})=>t.original.users_total&&t.original.users_total!=="0"?e.jsxDEV("span",{className:"editLink",onClick:()=>{B(t.original.sequenceId,"",n,()=>{})},children:t.original.users_total},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:284,columnNumber:25},void 0):e.jsxDEV("span",{children:t.original.users_total},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:297,columnNumber:25},void 0)},{accessorKey:"finish_total",header:"Finished",muiTableHeadCellProps:{align:"center"},muiTableBodyCellProps:{align:"center"},Cell:({row:t})=>t.original.finish_total&&t.original.finish_total!=="0"?e.jsxDEV("span",{className:"editLink",onClick:()=>{B(t.original.sequenceId,"finished",n,()=>{})},children:t.original.finish_total},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:313,columnNumber:25},void 0):e.jsxDEV("span",{children:t.original.finish_total},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:327,columnNumber:25},void 0)},{accessorKey:"fail_count",header:"Failed",muiTableHeadCellProps:{align:"center"},muiTableBodyCellProps:{align:"center"},Cell:({row:t})=>t.original.fail_count&&t.original.fail_count!=="0"?e.jsxDEV("span",{className:"editLink",onClick:()=>{B(t.original.sequenceId,"failed",n,()=>{})},children:t.original.fail_count},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:342,columnNumber:25},void 0):e.jsxDEV("span",{children:t.original.fail_count},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:355,columnNumber:25},void 0)},{accessorKey:"actions",header:"Actions",enableSorting:!1,muiTableHeadCellProps:{align:"center"},muiTableBodyCellProps:{align:"center"},Cell:({row:t})=>e.jsxDEV("span",{className:"actions",children:[t.original.recrId===g||m==="mySequences"?e.jsxDEV("span",{className:"actionIcons",children:e.jsxDEV(X,{title:"Delete",children:e.jsxDEV(pe,{onClick:()=>{be(`Are you sure you want to delete ${t.original.sequenceName} Campaign ?`,()=>k(t.original.sequenceId))}},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:374,columnNumber:37},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:373,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:372,columnNumber:29},void 0):e.jsxDEV("span",{className:"actionIcons",children:" "},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:383,columnNumber:29},void 0),e.jsxDEV("span",{className:"actionIcons",children:e.jsxDEV(X,{title:"View Statistics",children:e.jsxDEV(_,{to:`/${r.getvalue("clientName")}/letter/campaigns/${n}/report/${t.original.sequenceId}`,children:e.jsxDEV(Ne,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:390,columnNumber:37},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:389,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:388,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:387,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:370,columnNumber:21},void 0)}],[n,m]),l=t=>{V.saveAuditLog(t)};return i.useEffect(()=>{l(4192)},[]),e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"pt-3",id:"sequenceList",children:e.jsxDEV("div",{className:"",children:[e.jsxDEV(G,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",className:"customCard px-4 py-2 mb-2",sx:{minHeight:"auto !important"},children:[e.jsxDEV(v,{direction:"row",spacing:3,children:[e.jsxDEV(O,{variant:"h6",className:"header pt-1",children:" Campaign Lists"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:413,columnNumber:25},void 0),r.checkIntegration($)&&r.checkIntegration(F)?e.jsxDEV(Ee,{component:"fieldset",children:e.jsxDEV(Se,{row:!0,value:n,onChange:t=>{h(`/${r.getvalue("clientName")}/letter/campaigns/${t.target.value}/list/`)},name:"sequenceType",children:[e.jsxDEV(Z,{value:"candidate",control:e.jsxDEV(ee,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:425,columnNumber:86},void 0),label:"Candidate",onClick:()=>l(4193)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:425,columnNumber:41},void 0),e.jsxDEV(Z,{value:"contact",control:e.jsxDEV(ee,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:426,columnNumber:84},void 0),label:"Contact",onClick:()=>l(4194)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:426,columnNumber:41},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:418,columnNumber:37},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:417,columnNumber:33},void 0):e.jsxDEV(O,{variant:"h6",className:"header pt-1 ml-2",children:["  ",r.checkIntegration($)?" - Candidate":r.checkIntegration(F)?" - Contact":""]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:431,columnNumber:33},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:412,columnNumber:21},void 0),e.jsxDEV("div",{className:"d-flex",children:[e.jsxDEV(z,{variant:"outlined",color:"secondary",href:`#/${r.getvalue("clientName")}/letter/campaigns/${n}/auditlog`,onClick:()=>l(4195),className:"mr-3",children:"Audit Log"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:435,columnNumber:25},void 0),n==="candidate"&&!r.isChromeExtensionEnabled()&&e.jsxDEV(z,{variant:"contained",color:"primary",startIcon:e.jsxDEV(Q,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:438,columnNumber:168},void 0),href:`#/${r.getvalue("clientName")}/letter/aicampaigns/${n}/add`,onClick:()=>l(4197),className:"mr-3",children:"Add New AI Campaign"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:438,columnNumber:113},void 0),e.jsxDEV(z,{variant:"contained",color:"primary",startIcon:e.jsxDEV(Q,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:443,columnNumber:80},void 0),href:`#/${r.getvalue("clientName")}/letter/campaigns/${n}/add`,onClick:()=>l(4198),children:"Add New Campaign"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:443,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:434,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:411,columnNumber:17},void 0),e.jsxDEV(G,{children:e.jsxDEV(qe,{value:m,onChange:(t,d)=>{D(d),x("")},className:"tableTabs",children:[e.jsxDEV(te,{value:"mySequences",label:"My Campaigns",onClick:()=>l(4199)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:459,columnNumber:25},void 0),e.jsxDEV(te,{value:"allSequences",label:"All Campaigns",onClick:()=>l(4200)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:460,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:449,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:448,columnNumber:17},void 0),e.jsxDEV(v,{alignItems:"end",justifyContent:"center",bgcolor:"white",p:1.75,children:e.jsxDEV(Te,{fullWidth:!1,placeholder:"Search Campaigns here...",size:"small",InputProps:{startAdornment:e.jsxDEV(re,{fontSize:"small",sx:{mr:.75},color:"inherit"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:470,columnNumber:45},void 0),endAdornment:e.jsxDEV(j,{size:"small",sx:{ml:.75},disabled:["",null,void 0].includes(y),onClick:()=>{b({...u,pageIndex:0}),x("")},children:e.jsxDEV(K,{fontSize:"small"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:478,columnNumber:30},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:471,columnNumber:43},void 0)},value:y,onChange:t=>{b({...u,pageIndex:0}),x(t.target.value)}},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:465,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:464,columnNumber:17},void 0),e.jsxDEV("div",{className:"MRTableCustom pl-0",children:e.jsxDEV(se,{columns:f,data:S,enableTopToolbar:!1,enablePinning:!0,initialState:{columnPinning:{left:["mrt-row-select","id","sequenceName"]},density:"compact",showGlobalFilter:!1},enableDensityToggle:!1,enableFullScreenToggle:!1,enableGlobalFilterModes:!0,columnResizeMode:"onChange",getRowId:t=>t.sequenceId,enableStickyHeader:!0,icons:{ArrowDownwardIcon:t=>e.jsxDEV(ae,{...t},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:511,columnNumber:33},void 0)},state:{pagination:u,globalFilter:p,columnVisibility:{sequenceType:n==="candidate"}},muiPaginationProps:{rowsPerPageOptions:[10],showFirstButton:!1,showLastButton:!1,SelectProps:{style:{display:"none"}}},enablePagination:!0,renderBottomToolbarCustomActions:()=>e.jsxDEV(ie,{page:u.pageIndex,rowsPerPage:u.pageSize,rowCount:M,onChangePage:t=>b({...u,pageIndex:t}),showCount:!1},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:532,columnNumber:29},void 0),onGlobalFilterChange:Y},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:489,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:487,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:410,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:409,columnNumber:9},void 0),e.jsxDEV(Ve,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:547,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Letters/Sequence/List/ListSequence.tsx",lineNumber:408,columnNumber:12},void 0)};export{An as default};
