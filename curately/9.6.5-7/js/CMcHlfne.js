import{b_ as r,V as i,b$ as o,L as I}from"./Cgppv_Sf.js";r.interceptors.response.use(a=>a,a=>{var t,s,n,p,d,l,u,c,g,h,m,f;const e=a.response?a.response.status:null;return e===401?i((s=(t=a.response)==null?void 0:t.data)!=null&&s.Message?(p=(n=a.response)==null?void 0:n.data)==null?void 0:p.Message:"Unauthorized Request.","error"):e===403?i((l=(d=a.response)==null?void 0:d.data)!=null&&l.Message?(c=(u=a.response)==null?void 0:u.data)==null?void 0:c.Message:"The Request is forbidden.","error"):e===404?i("The Requested API does not exist.","error"):i((h=(g=a.response)==null?void 0:g.data)!=null&&h.Message?(f=(m=a.response)==null?void 0:m.data)==null?void 0:f.Message:"An error occured while fetching data from API.","error"),Promise.reject(a)});class W{getByParams(e,t,s){return r.get(o(e)+t,{params:{...s,clientId:I.getvalue("clientId")}})}getCall(e,t){return r.get(o(e)+t)}getCallWithHeaders(e,t,s){return r.get(o(e)+t,s)}getById(e,t,s){return r.get(o(e)+t+"/"+s)}deleteById(e,t,s){return r.delete(o(e)+t+"/"+s)}postWithData(e,t,s){return r.post(o(e)+t,s)}postWithFormUrlData(e,t,s){return r.post(o(e)+t,s,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})}postWithFileData(e,t,s){return r.post(o(e)+t,s,{headers:{"Content-Type":"multipart/form-data"}})}postWithParams(e,t,s){return r.post(o(e)+t,null,{params:s})}postWithHeaders(e,t,s,n){return r.post(o(e)+t,s,n)}validateWorkEmail(e){return r.post("https://node.curately.ai/validate-email",{data:e})}}const w=new W;export{w as A};
