import{i as d,g as u,f as p,G as f,r as C,h as y,j as m,b,P as s,ae as h,d as v}from"./Cgppv_Sf.js";function x(e){return u("MuiCard",e)}d("MuiCard",["root"]);const g=e=>{const{classes:o}=e;return v({root:["root"]},x,o)},j=p(f,{name:"MuiCard",slot:"Root",overridesResolver:(e,o)=>o.root})({overflow:"hidden"}),w=C.forwardRef(function(o,r){const t=y({props:o,name:"MuiCard"}),{className:i,raised:a=!1,...l}=t,n={...t,raised:a},c=g(n);return m.jsx(j,{className:b(c.root,i),elevation:a?8:void 0,ref:r,ownerState:n,...l})});w.propTypes={children:s.node,classes:s.object,className:s.string,raised:h(s.bool,e=>e.raised&&e.variant==="outlined"?new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.'):null),sx:s.oneOfType([s.arrayOf(s.oneOfType([s.func,s.object,s.bool])),s.func,s.object])};export{w as C};
