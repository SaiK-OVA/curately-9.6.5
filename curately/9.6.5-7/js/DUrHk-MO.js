import{g as N,i as q,f as G,G as J,a as E,m as K,r as y,h as Q,j as I,b as Z,P as n,d as _,z as tt,H as et,aa as nt,ab as rt,ac as $,ad as ot,ae as at,af as st,ag as it,ah as lt,ai as S}from"./Cgppv_Sf.js";import{d as pt}from"./XPHitdj4.js";function ct(t){return N("MuiAppBar",t)}q("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const ut=t=>{const{color:e,position:a,classes:o}=t,s={root:["root",`color${E(e)}`,`position${E(a)}`]};return _(s,ct,o)},O=(t,e)=>t?`${t==null?void 0:t.replace(")","")}, ${e})`:e,ft=G(J,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[`position${E(a.position)}`],e[`color${E(a.color)}`]]}})(K(({theme:t})=>({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":t.vars?t.vars.palette.AppBar.defaultBg:t.palette.grey[100],"--AppBar-color":t.vars?t.vars.palette.text.primary:t.palette.getContrastText(t.palette.grey[100]),...t.applyStyles("dark",{"--AppBar-background":t.vars?t.vars.palette.AppBar.defaultBg:t.palette.grey[900],"--AppBar-color":t.vars?t.vars.palette.text.primary:t.palette.getContrastText(t.palette.grey[900])})}},...Object.entries(t.palette).filter(tt(["contrastText"])).map(([e])=>({props:{color:e},style:{"--AppBar-background":(t.vars??t).palette[e].main,"--AppBar-color":(t.vars??t).palette[e].contrastText}})),{props:e=>e.enableColorOnDark===!0&&!["inherit","transparent"].includes(e.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:e=>e.enableColorOnDark===!1&&!["inherit","transparent"].includes(e.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...t.applyStyles("dark",{backgroundColor:t.vars?O(t.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:t.vars?O(t.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...t.applyStyles("dark",{backgroundImage:"none"})}}]}))),dt=y.forwardRef(function(e,a){const o=Q({props:e,name:"MuiAppBar"}),{className:s,color:g="primary",enableColorOnDark:p=!1,position:u="fixed",...c}=o,i={...o,color:g,position:u,enableColorOnDark:p},f=ut(i);return I.jsx(ft,{square:!0,component:"header",ownerState:i,elevation:4,className:Z(f.root,s,u==="fixed"&&"mui-fixed"),ref:a,...c})});dt.propTypes={children:n.node,classes:n.object,className:n.string,color:n.oneOfType([n.oneOf(["default","inherit","primary","secondary","transparent","error","info","success","warning"]),n.string]),enableColorOnDark:n.bool,position:n.oneOf(["absolute","fixed","relative","static","sticky"]),sx:n.oneOfType([n.arrayOf(n.oneOfType([n.func,n.object,n.bool])),n.func,n.object])};function gt(t,e,a){const o=e.getBoundingClientRect(),s=a&&a.getBoundingClientRect(),g=$(e);let p;if(e.fakeTransform)p=e.fakeTransform;else{const i=g.getComputedStyle(e);p=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}let u=0,c=0;if(p&&p!=="none"&&typeof p=="string"){const i=p.split("(")[1].split(")")[0].split(",");u=parseInt(i[4],10),c=parseInt(i[5],10)}return t==="left"?s?`translateX(${s.right+u-o.left}px)`:`translateX(${g.innerWidth+u-o.left}px)`:t==="right"?s?`translateX(-${o.right-s.left-u}px)`:`translateX(-${o.left+o.width-u}px)`:t==="up"?s?`translateY(${s.bottom+c-o.top}px)`:`translateY(${g.innerHeight+c-o.top}px)`:s?`translateY(-${o.top-s.top+o.height-c}px)`:`translateY(-${o.top+o.height-c}px)`}function z(t){return typeof t=="function"?t():t}function m(t,e,a){const o=z(a),s=gt(t,e,o);s&&(e.style.webkitTransform=s,e.style.transform=s)}const yt=y.forwardRef(function(e,a){const o=et(),s={enter:o.transitions.easing.easeOut,exit:o.transitions.easing.sharp},g={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:p,appear:u=!0,children:c,container:i,direction:f="down",easing:B=s,in:x,onEnter:T,onEntered:j,onEntering:h,onExit:A,onExited:C,onExiting:P,style:v,timeout:k=g,TransitionComponent:M=it,...L}=e,d=y.useRef(null),D=nt(rt(c),d,a),b=r=>l=>{r&&(l===void 0?r(d.current):r(d.current,l))},V=b((r,l)=>{m(f,r,i),lt(r),T&&T(r,l)}),U=b((r,l)=>{const R=S({timeout:k,style:v,easing:B},{mode:"enter"});r.style.webkitTransition=o.transitions.create("-webkit-transform",{...R}),r.style.transition=o.transitions.create("transform",{...R}),r.style.webkitTransform="none",r.style.transform="none",h&&h(r,l)}),W=b(j),X=b(P),Y=b(r=>{const l=S({timeout:k,style:v,easing:B},{mode:"exit"});r.style.webkitTransition=o.transitions.create("-webkit-transform",l),r.style.transition=o.transitions.create("transform",l),m(f,r,i),A&&A(r)}),H=b(r=>{r.style.webkitTransition="",r.style.transition="",C&&C(r)}),F=r=>{p&&p(d.current,r)},w=y.useCallback(()=>{d.current&&m(f,d.current,i)},[f,i]);return y.useEffect(()=>{if(x||f==="down"||f==="right")return;const r=pt(()=>{d.current&&m(f,d.current,i)}),l=$(d.current);return l.addEventListener("resize",r),()=>{r.clear(),l.removeEventListener("resize",r)}},[f,x,i]),y.useEffect(()=>{x||w()},[x,w]),I.jsx(M,{nodeRef:d,onEnter:V,onEntered:W,onEntering:U,onExit:Y,onExited:H,onExiting:X,addEndListener:F,appear:u,in:x,timeout:k,...L,children:(r,l)=>y.cloneElement(c,{ref:D,style:{visibility:r==="exited"&&!x?"hidden":void 0,...v,...c.props.style},...l})})});yt.propTypes={addEndListener:n.func,appear:n.bool,children:ot.isRequired,container:at(n.oneOfType([st,n.func]),t=>{if(t.open){const e=z(t.container);if(e&&e.nodeType===1){const a=e.getBoundingClientRect();if(a.top===0&&a.left===0&&a.right===0&&a.bottom===0)return new Error(["MUI: The `container` prop provided to the component is invalid.","The anchor element should be part of the document layout.","Make sure the element is present in the document or that it's not display none."].join(`
`))}else if(!e||typeof e.getBoundingClientRect!="function"||e.contextElement!=null&&e.contextElement.nodeType!==1)return new Error(["MUI: The `container` prop provided to the component is invalid.","It should be an HTML element instance."].join(`
`))}return null}),direction:n.oneOf(["down","left","right","up"]),easing:n.oneOfType([n.shape({enter:n.string,exit:n.string}),n.string]),in:n.bool,onEnter:n.func,onEntered:n.func,onEntering:n.func,onExit:n.func,onExited:n.func,onExiting:n.func,style:n.object,timeout:n.oneOfType([n.number,n.shape({appear:n.number,enter:n.number,exit:n.number})])};export{dt as A,yt as S};
