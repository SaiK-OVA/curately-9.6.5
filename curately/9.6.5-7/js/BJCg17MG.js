import{i as m,g as f,f as w,r as x,h as y,j as F,b as d,P as o,d as C}from"./Cgppv_Sf.js";import{a as G,g as b}from"./XPHitdj4.js";function g(r){return f("MuiFormGroup",r)}m("MuiFormGroup",["root","row","error"]);const j=r=>{const{classes:s,row:e,error:t}=r;return C({root:["root",e&&"row",t&&"error"]},g,s)},R=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.root,e.row&&s.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),v=x.forwardRef(function(s,e){const t=y({props:s,name:"MuiFormGroup"}),{className:a,row:l=!1,...c}=t,p=G(),i=b({props:t,muiFormControl:p,states:["error"]}),n={...t,row:l,error:i.error},u=j(n);return F.jsx(R,{className:d(u.root,a),ownerState:n,ref:e,...c})});v.propTypes={children:o.node,classes:o.object,className:o.string,row:o.bool,sx:o.oneOfType([o.arrayOf(o.oneOfType([o.func,o.object,o.bool])),o.func,o.object])};export{v as F};
