import{i as S,g as $,cm as C,E as l,f as P,T as V,a as L,m as A,z as F,r as h,h as R,H as M,j as z,b as B,P as n,aE as E,d as N,aS as v}from"./Cgppv_Sf.js";function U(e){return $("MuiLink",e)}const H=S("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),W=({theme:e,ownerState:o})=>{const r=o.color,t=C(e,`palette.${r}`,!1)||o.color,s=C(e,`palette.${r}Channel`);return"vars"in e&&s?`rgba(${s} / 0.4)`:l(t,.4)},k={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},q=e=>{const{classes:o,component:r,focusVisible:t,underline:s}=e,c={root:["root",`underline${L(s)}`,r==="button"&&"button",t&&"focusVisible"]};return N(c,U,o)},G=P(V,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[`underline${L(r.underline)}`],r.component==="button"&&o.button]}})(A(({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:o,ownerState:r})=>o==="always"&&r.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter(F()).map(([o])=>({props:{underline:"always",color:o},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[o].mainChannel} / 0.4)`:l(e.palette[o].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:l(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:l(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${H.focusVisible}`]:{outline:"auto"}}}]}))),I=h.forwardRef(function(o,r){const t=R({props:o,name:"MuiLink"}),s=M(),{className:c,color:a="primary",component:y="a",onBlur:d,onFocus:b,TypographyClasses:T,underline:f="always",variant:x="inherit",sx:u,...g}=t,[w,m]=h.useState(!1),D=i=>{v(i.target)||m(!1),d&&d(i)},j=i=>{v(i.target)&&m(!0),b&&b(i)},p={...t,color:a,component:y,focusVisible:w,underline:f,variant:x},O=q(p);return z.jsx(G,{color:a,className:B(O.root,c),classes:T,component:y,onBlur:D,onFocus:j,ref:r,ownerState:p,variant:x,...g,sx:[...k[a]===void 0?[{color:a}]:[],...Array.isArray(u)?u:[u]],style:{...g.style,...f==="always"&&a!=="inherit"&&!k[a]&&{"--Link-underlineColor":W({theme:s,ownerState:p})}}})});I.propTypes={children:n.node,classes:n.object,className:n.string,color:n.oneOfType([n.oneOf(["primary","secondary","success","error","info","warning","textPrimary","textSecondary","textDisabled"]),n.string]),component:E,onBlur:n.func,onFocus:n.func,style:n.object,sx:n.oneOfType([n.arrayOf(n.oneOfType([n.func,n.object,n.bool])),n.func,n.object]),TypographyClasses:n.object,underline:n.oneOf(["always","hover","none"]),variant:n.oneOfType([n.oneOf(["body1","body2","button","caption","h1","h2","h3","h4","h5","h6","inherit","overline","subtitle1","subtitle2"]),n.string])};export{I as L};
