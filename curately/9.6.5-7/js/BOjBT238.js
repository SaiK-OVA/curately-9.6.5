import{r as a,L as c,k as e,D as Q,I as L,n as X,o as Z,S as y,U as _,B as I,V as l,W as O,A as b,O as T,T as ee,b1 as ne}from"./Cgppv_Sf.js";import{E as te}from"./CtTUZ4Jr.js";import{D as ae}from"./DYDlcIIt.js";import{D as ie}from"./kx4FOAoQ.js";import{S as oe}from"./8-7dSsDd.js";import{M as se}from"./D8IKBRq0.js";import{u as re}from"./C-Jq_Y4P.js";import{c as le,a as f}from"./CRJpcgJc.js";import{D as ce}from"./B-98_CNj.js";import{T as j}from"./BxLAtHuG.js";import{C as de}from"./CAYZvuI-.js";import{d as ue}from"./XPHitdj4.js";import{T as Y}from"./CagltWra.js";import"./ChUKxi90.js";import"./D6SqIoha.js";import"./Bp2g836F.js";import"./BJCg17MG.js";import"./BESjHuWm.js";import"./DYhLeBIs.js";import"./DaGbQO6h.js";import"./6HgfybZm.js";import"./CW6dvan5.js";import"./CB9nuhLI.js";import"./Dho3ZFNS.js";import"./DZd2l5Bl.js";import"./dZX7lgtO.js";import"./DxILc9AR.js";import"./DIGW6AYh.js";import"./BiLTbjOU.js";import"./CAWvjt4G.js";import"./CbCF5Xps.js";import"./BteIfgc7.js";const me=({open:S,handleClose:m,add:d,optionData:t})=>{const[R,k]=a.useState(!1),D=t?{optionBankName:t.optionBankName||"",list:(t==null?void 0:t.options)||"",optionBankId:(t==null?void 0:t.optionBankId)||"",createdby:(t==null?void 0:t.createdby)||"",clientId:c.getvalue("clientId")}:{optionBankName:"",list:"",createdby:c.getvalue("recrId"),optionBankId:"",clientId:c.getvalue("clientId")},A=le().shape({optionBankName:f().required("Option name is required"),list:f().required("Option list is required"),optionBankId:f(),createdby:f(),clientId:f()}),s=re({initialValues:D,validationSchema:A,onSubmit:()=>{k(!0)},validateOnMount:!0}),g=()=>{if(s.values.optionBankName.trim()==="")return l("Please Enter Option Bank Name","error"),!1;if(s.values.list.trim()==="")return l("Please enter Option List","error"),!1;k(!0),s.isValid?O(b.postWithData("admin","saveOptionBank",{...s.values}).then(o=>{o.data.Success?(l(o.data.Message,"success"),s.resetForm(),m(!0)):l(o.data.Message?o.data.Message:"An error occured while saving the Option Bank.","error")})):l("Please fill all required fields.","error")},x=o=>{b.saveAuditLog(o)};return e.jsxDEV(Q,{open:S,onClose:()=>m(!1),maxWidth:"sm",fullWidth:!0,children:[e.jsxDEV(ce,{children:[" ",d?"Add":"Update"," Option"]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/AddOptionBank.tsx",lineNumber:116,columnNumber:13},void 0),e.jsxDEV(L,{"aria-label":"close",onClick:()=>m(!1),sx:{position:"absolute",right:8,top:8,color:o=>o.palette.grey[500]},children:e.jsxDEV(X,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/AddOptionBank.tsx",lineNumber:127,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/AddOptionBank.tsx",lineNumber:117,columnNumber:13},void 0),e.jsxDEV(Z,{children:e.jsxDEV("form",{children:e.jsxDEV(y,{spacing:2,children:[e.jsxDEV(j,{autoFocus:!0,id:"OptionBankName",label:"Option Name",size:"small",type:"text",fullWidth:!0,variant:"outlined",value:s.values.optionBankName,onChange:o=>{s.setFieldValue("optionBankName",o.target.value)}},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/AddOptionBank.tsx",lineNumber:133,columnNumber:25},void 0),e.jsxDEV(j,{id:"options",label:"Options (Write each option in separate line)",multiline:!0,rows:4,fullWidth:!0,variant:"outlined",value:s.values.list,onChange:o=>{const p=o.target.value.split(",");s.setFieldValue("list",p.toString())}},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/AddOptionBank.tsx",lineNumber:149,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/AddOptionBank.tsx",lineNumber:132,columnNumber:21},void 0)},t==null?void 0:t.optionBankId,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/AddOptionBank.tsx",lineNumber:131,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/AddOptionBank.tsx",lineNumber:129,columnNumber:13},void 0),e.jsxDEV(_,{children:[e.jsxDEV(I,{variant:"outlined",type:"button",color:"secondary",className:"mr-2",onClick:()=>m(!1),children:"Cancel"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/AddOptionBank.tsx",lineNumber:167,columnNumber:17},void 0),e.jsxDEV(I,{variant:"contained",type:"button",color:"primary",onClick:()=>{x(4269),g()},children:[d?"Save":"Update"," Option"]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/AddOptionBank.tsx",lineNumber:173,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/AddOptionBank.tsx",lineNumber:166,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/AddOptionBank.tsx",lineNumber:115,columnNumber:9},void 0)},qe=()=>{const S=c.checkSettings(130004)===5||c.checkSettings(130004)===6,m=c.checkSettings(130004)===6;let d=c.getvalue("clientId");const[t,R]=a.useState([]),[k]=a.useState(!1),[D,A]=a.useState([{desc:!0,id:"createddate"}]),[s,g]=a.useState({optionBankId:"",optionBankName:"",options:"",createdby:"",clientId:""}),[x,o]=a.useState({}),[p,E]=a.useState(!1),[w,W]=a.useState(!1),[C,v]=a.useState({pageIndex:0,pageSize:10}),[M,P]=a.useState(0),[U,F]=a.useState(""),z=n=>new Promise((i,h)=>{O(b.getCall("admin",`getOptionBankListbyId/${n}/${d}`).then(r=>{if(r.data.list&&r.data.list[0].optionbankId){const u=r.data.list[0];g({optionBankId:u.optionbankId,optionBankName:u.optionbankname,options:u.list,createdby:u.createdby,clientId:c.getvalue("clientId")})}W(!0),i(r)}).catch(r=>{console.error("Error fetching User details:",r),h(r)}))});a.useEffect(()=>{v(n=>({...n,pageIndex:0}))},[U]);const $=n=>{z(n).then(()=>{E(!0),B(4270)}).catch(i=>{l("Unable to fetch User Data",i)})},q=()=>{g({optionBankId:"",optionBankName:"",options:"",createdby:"",clientId:""}),E(!0),W(!1)},G=n=>{E(!1),n&&N()},N=a.useCallback(ue(()=>{O(b.getCall("admin",`getOptionBankList/${d}`).then(n=>{R(n.data.list),P(n.data.list.length)}))},400),[d]);a.useEffect(()=>{p||N()},[p,N]);const K=(n,i)=>{ne(`Are you sure you want to delete ${i} OptionBank?`,()=>{H(n),B(4271)})},H=n=>{O(b.deleteById("admin",`deleteOptionBank/${n}`,d).then(i=>{i.data.Success?(l("OptionBank has been deleted successfully.","success"),N()):l(i.data.Message?i.data.Message:"An error occured while deleting","error")}).catch(i=>{var h,r,u,V;l((r=(h=i.response)==null?void 0:h.data)!=null&&r.Message?(V=(u=i.response)==null?void 0:u.data)==null?void 0:V.Message:"An error occured while deleting","error")}))},J=a.useMemo(()=>[{accessorKey:"optionbankname",header:"Name",enableColumnPinning:!0,size:350},{accessorKey:"list",header:"Options",Cell:({renderedCellValue:n})=>Array.isArray(n)?n.join(", "):n,size:350},{accessorKey:"createddate",header:"Created On",Cell:({renderedCellValue:n,row:i})=>e.jsxDEV("span",{children:i.original.createddate?ie.fromFormat(i.original.createddate.substring(0,19),"yyyy-MM-dd hh:mm:ss").toFormat("MM/dd/yyyy"):""},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:239,columnNumber:11},void 0),size:350},{accessorKey:"Actions",header:"Actions",enableSorting:!1,Cell:({row:n})=>e.jsxDEV(y,{children:e.jsxDEV(y,{direction:"row",children:[S?e.jsxDEV(Y,{title:"Edit",placement:"top",color:"primary",children:e.jsxDEV(L,{onClick:()=>{$(n.original.optionbankId)},children:e.jsxDEV(te,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:261,columnNumber:23},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:260,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:259,columnNumber:19},void 0):null,m?e.jsxDEV(Y,{title:"Delete",placement:"top",color:"primary",children:e.jsxDEV(L,{onClick:()=>{K(n.original.optionbankId,n.original.optionbankname)},children:e.jsxDEV(ae,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:271,columnNumber:23},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:270,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:269,columnNumber:19},void 0):null]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:256,columnNumber:13},void 0)},n.original.optionbankId,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:255,columnNumber:11},void 0),size:350}],[]),B=n=>{b.saveAuditLog(n)};return a.useEffect(()=>{B(4267)},[]),e.jsxDEV("div",{className:"emailTemplateList pt-3 px-5",id:"optionBankList",children:[e.jsxDEV(T,{container:!0,direction:"row",className:"customCard px-4 py-2",justifyContent:"space-between",alignItems:"center",display:"flex",sx:{minHeight:"auto !important"},children:[e.jsxDEV(ee,{variant:"h6",className:"headerName",children:"OptionBanks"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:305,columnNumber:9},void 0),e.jsxDEV(y,{direction:"row",className:"btn-container",children:e.jsxDEV(I,{variant:"contained",color:"primary",size:"small",onClick:()=>{B(4268),q()},children:"New OptionBank"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:309,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:308,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:296,columnNumber:7},void 0),e.jsxDEV(T,{container:!0,className:"customCard p-0 filterExpand-grid",children:[e.jsxDEV(T,{sx:{width:k?"calc(100%)":"calc(100% - 0px)"},children:e.jsxDEV("div",{className:"MRTableCustom  pl-0 ",children:e.jsxDEV(se,{columns:J,data:t,onRowSelectionChange:o,state:{rowSelection:x,sorting:D,pagination:C,globalFilter:U},enablePinning:!0,enableStickyHeader:!0,initialState:{columnPinning:{left:["mrt-row-select","optionbankname"]},density:"compact",showGlobalFilter:!0},onSortingChange:A,enableDensityToggle:!1,enableFullScreenToggle:!0,enableGlobalFilterModes:!0,columnResizeMode:"onChange",onPaginationChange:v,getRowId:n=>n.optionbankId,icons:{ArrowDownwardIcon:n=>e.jsxDEV(oe,{...n},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:340,columnNumber:61},void 0)},rowCount:t.length,muiPaginationProps:{rowsPerPageOptions:[10],showFirstButton:!1,showLastButton:!1,SelectProps:{style:{display:"none"}}},enablePagination:!0,renderBottomToolbarCustomActions:()=>e.jsxDEV(de,{page:C.pageIndex,rowsPerPage:10,rowCount:M,onChangePage:n=>v({...C,pageIndex:n,pageSize:10}),showCount:!1},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:353,columnNumber:17},void 0),onGlobalFilterChange:F},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:316,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:314,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:313,columnNumber:9},void 0),p?e.jsxDEV(me,{open:p,handleClose:G,optionData:s,add:!w},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:368,columnNumber:13},void 0):null]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:312,columnNumber:7},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/OptionBank/OptionBank.tsx",lineNumber:295,columnNumber:5},void 0)};export{qe as default};
