import{r as e,e as m,j as o,u as I,g as h}from"./index.c9a20841.js";import{a as r}from"./DeleteMsg.6b639a15.js";const a=e.exports.createContext(null);a.displayName="InputGroupContext";const G=a,n=m("input-group-text",{Component:"span"}),C=t=>o(n,{children:o(r,{type:"checkbox",...t})}),f=t=>o(n,{children:o(r,{type:"radio",...t})}),s=e.exports.forwardRef(({bsPrefix:t,size:p,hasValidation:u,className:c,as:i="div",...x},d)=>{t=I(t,"input-group");const l=e.exports.useMemo(()=>({}),[]);return o(G.Provider,{value:l,children:o(i,{ref:d,...x,className:h(c,t,p&&`${t}-${p}`,u&&"has-validation")})})});s.displayName="InputGroup";const v=Object.assign(s,{Text:n,Radio:f,Checkbox:C});export{v as I};