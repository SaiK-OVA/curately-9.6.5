import{r as V,V as t,L as d,k as e,D as I,O as o,B as A,o as z,Q as F,W as k,A as v}from"./Cgppv_Sf.js";import{u as M}from"./gltQ0rpT.js";import{u as $}from"./C-Jq_Y4P.js";import{c as q,a as b,g as p,d as S,e as O}from"./CRJpcgJc.js";import{D as G}from"./kx4FOAoQ.js";import{E as f}from"./CVtbaTfk.js";import{D as H}from"./B-98_CNj.js";import{D as Q}from"./BiLTbjOU.js";import{T as C}from"./BxLAtHuG.js";import"./6vuVcGup.js";import"./CtTUZ4Jr.js";import"./XPHitdj4.js";import"./ChUKxi90.js";import"./D6SqIoha.js";import"./Bp2g836F.js";import"./BJCg17MG.js";import"./CagltWra.js";const pe=({open:U,closePopup:N,userId:_,jobId:R,openId:w,refreshSourcedData:j})=>{const P=V.useCallback(i=>{console.log(i),i!=null&&i.length?i[0].path.split(".").pop()==="docx"?s.setFieldValue("resume",i&&i.length?i[0]:null):(t("File should be docx format","error"),s.setFieldValue("resume",null)):s.setFieldValue("resume",null)},[]),{getRootProps:L,getInputProps:g,isDragActive:W,acceptedFiles:D}=M({onDrop:P,multiple:!1,accept:{"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"]}}),[u,T]=V.useState(!1),J={mmdd:G.now().toFormat("MMdd"),employee_Number:_,ssn:"",residential_status:21,ratesEnable:!0,formerContractor:!0,former_Employee_of_Client:!0,pay_rate:"",bill_rate:"",resume:null},Y=q({mmdd:b(),employee_Number:b(),ssn:b(),residential_status:p(),ratesEnable:S(),formerContractor:S(),former_Employee_of_Client:S(),pay_rate:p().test("test-billGreater","Pay Rate should be less than Bill Rate.",function(){const{pay_rate:i,bill_rate:n}=this.parent;return!!(n&&i&&n>i)}).required("Bill Rate is required."),bill_rate:p().test("test-billGreater","Bill Rate should be greater than Pay Rate.",function(){const{pay_rate:i,bill_rate:n}=this.parent;return!!(n&&i&&n>i)}).required("Bill Rate is required."),resume:O().required("Resume is required.").test("fileFormat","Only Docx files are allowed",i=>i?["docx"].includes(i.name.split(".").pop()):!0).test("fileSize","File size must be less than 5MB",i=>i?i.size<=5242880:!0)}),s=$({initialValues:J,validationSchema:Y,onSubmit:()=>{y()},validateOnMount:!0}),y=()=>{console.log(s.values),T(!0);let i=Number(s.values.pay_rate),n=Number(s.values.bill_rate);if(i&&n&&i>n){t("PayRate should be less than BillRate","error");return}let a=localStorage.getItem(`curately_${d.getvalue("clientId")}_jobId_${R}`);if(s.values.resume&&s.isValid){let r=new FormData;r.append("mmdd",s.values.mmdd?s.values.mmdd:""),r.append("employee_Number",s.values.employee_Number?s.values.employee_Number:""),r.append("ssn",s.values.ssn?s.values.ssn:""),r.append("residential_status",""+s.values.residential_status),r.append("ratesEnable",""+s.values.ratesEnable),r.append("formerContractor",""+s.values.formerContractor),r.append("former_Employee_of_Client",""+s.values.former_Employee_of_Client),r.append("pay_rate",s.values.pay_rate?s.values.pay_rate:""),r.append("bill_rate",s.values.bill_rate?s.values.bill_rate:""),r.append("resume",s.values.resume?s.values.resume:""),r.append("jobId",a||""),k(v.postWithFileData(2168095,"rw1/addCandateDetails",r).then(l=>{var x,E;if(l.data.Success)B(),t("Candidate has been Submitted Successfully.","success"),s.resetForm(),N();else{let c=l.data.message?l.data.message:"An error occured while Submitting the Candidate.";(x=l.data.non_field_errors)!=null&&x.length?c=l.data.non_field_errors[0]:(E=l.data.error_list)!=null&&E.length&&(c=l.data.error_list[0]),t(c,"error")}}))}else t("Please fill all required fields.","error")},h=[{recrId:d.getvalue("recrId"),openId:w,status:1009,clientId:d.getvalue("clientId"),stageId:100,json:""}],B=()=>{for(let i=0;i<h.length;i++){const n=h[i];setTimeout(()=>{v.getByParams(193,"Curately/Candidate/shortlistSave.jsp",n).then(a=>{a.data.Message==="Success"?j():t(a.data.Message,"error")})},1e3*i)}},m=D.map(i=>e.jsxDEV("span",{children:[i.path," - ",(i.size/(1024*1024)).toFixed(2)," MB"]},i.path,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:254,columnNumber:9},void 0));return e.jsxDEV(I,{maxWidth:"sm",fullWidth:!1,open:U,id:"ClientSubmissionPopup",className:"customInputs",children:[e.jsxDEV(H,{className:"py-2",children:e.jsxDEV(o,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsxDEV("span",{className:"addHeader",children:"Client Submission"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:275,columnNumber:21},void 0),e.jsxDEV("div",{children:e.jsxDEV(o,{container:!0,direction:"row",justifyContent:"end",alignItems:"center",children:[e.jsxDEV(A,{variant:"outlined",type:"button",color:"secondary",className:"mr-2",onClick:N,children:"Cancel"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:283,columnNumber:29},void 0),e.jsxDEV(A,{variant:"contained",type:"button",color:"primary",onClick:y,children:"Submit Candidate"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:289,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:277,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:276,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:268,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:265,columnNumber:13},void 0),e.jsxDEV(Q,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:298,columnNumber:13},void 0),e.jsxDEV(z,{className:"px-5",children:[e.jsxDEV(F,{},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:300,columnNumber:17},void 0),e.jsxDEV(o,{container:!0,className:"mb-1",spacing:0,children:[e.jsxDEV(o,{size:6,className:"mt-1",children:[e.jsxDEV("label",{className:"inputLabel",children:"SSN "},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:303,columnNumber:25},void 0),e.jsxDEV("span",{style:{color:"red"},children:"*"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:303,columnNumber:67},void 0),e.jsxDEV(C,{fullWidth:!0,className:"mt-1",id:"ssn",name:"ssn",variant:"outlined",size:"small",value:s.values.ssn,onChange:s.handleChange,error:!!(s.errors.ssn&&u),type:"number"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:304,columnNumber:25},void 0),e.jsxDEV(f,{formikObj:s,name:"ssn",isFormSubmitted:u},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:314,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:302,columnNumber:21},void 0),e.jsxDEV(o,{size:12,className:"mt-1",children:e.jsxDEV(o,{container:!0,direction:"row",justifyContent:"start",alignItems:"center",spacing:2,children:[e.jsxDEV(o,{size:6,className:"mt-1",children:[e.jsxDEV("label",{className:"inputLabel",children:"Pay Rate "},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:353,columnNumber:33},void 0),e.jsxDEV("span",{style:{color:"red"},children:"*"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:353,columnNumber:80},void 0),e.jsxDEV(C,{size:"small",fullWidth:!0,id:"pay_rate",name:"pay_rate",value:s.values.pay_rate,onChange:s.handleChange,onBlur:()=>{const i=Number(s.values.pay_rate),n=Number(s.values.bill_rate);i&&n&&i>n&&s.setFieldError("pay_rate","PayRate should be less than BillRate")},type:"number"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:354,columnNumber:33},void 0),e.jsxDEV(f,{formikObj:s,name:"pay_rate",isFormSubmitted:u},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:372,columnNumber:33},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:352,columnNumber:29},void 0),e.jsxDEV(o,{size:6,className:"mt-1",children:[e.jsxDEV("label",{className:"inputLabel",children:"Bill Rate "},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:375,columnNumber:33},void 0),e.jsxDEV("span",{style:{color:"red"},children:"*"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:375,columnNumber:81},void 0),e.jsxDEV(C,{size:"small",fullWidth:!0,id:"bill_rate",name:"bill_rate",value:s.values.bill_rate,onChange:s.handleChange,onBlur:()=>{},type:"number"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:376,columnNumber:33},void 0),e.jsxDEV(f,{formikObj:s,name:"bill_rate",isFormSubmitted:u},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:392,columnNumber:33},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:374,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:351,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:350,columnNumber:21},void 0),e.jsxDEV(o,{size:12,className:"mt-1",children:e.jsxDEV("div",{className:"customDropZone",children:e.jsxDEV("div",{...L({className:`dropzone ${D.length>0?"fileDroped":""}`}),children:[e.jsxDEV("input",{...g(),multiple:!1,accept:".docx"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:403,columnNumber:33},void 0),W?e.jsxDEV("p",{children:"Drop the resume here ... *"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:406,columnNumber:41},void 0):m&&m.length?e.jsxDEV("p",{children:m},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:408,columnNumber:45},void 0):e.jsxDEV(e.Fragment,{children:[e.jsxDEV("p",{children:["Drag 'n' drop resume here, or click to select ",e.jsxDEV("span",{style:{color:"red"},children:"*"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:411,columnNumber:98},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:411,columnNumber:49},void 0),e.jsxDEV("em",{children:"(Only *.docx file will be accepted)"},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:412,columnNumber:49},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:410,columnNumber:45},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:400,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:399,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:397,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:301,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:299,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/AWS-CURATELY-9.6.5/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Job/View/Sourced/PopUps/ClientSubmission/ClientSubmission.tsx",lineNumber:261,columnNumber:9},void 0)};export{pe as default};
