import{r as c}from"./Cgppv_Sf.js";function m(e,t=300){const[o,n]=c.useState();return(...r)=>{const u=setTimeout(()=>{e(...r)},t);clearTimeout(o),n(u)}}export{m as u};
