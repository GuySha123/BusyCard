import{r as l,j as n,g as i,u,v as X,w as Y,G as x,a as j,c as Z,e as P}from"./index.77bdaae3.js";function ee(e,o){return l.exports.Children.toArray(e).some(t=>l.exports.isValidElement(t)&&t.type===o)}function oe({as:e,bsPrefix:o,className:t,...s}){o=u(o,"col");const a=X(),r=Y(),c=[],m=[];return a.forEach(d=>{const p=s[d];delete s[d];let f,$,y;typeof p=="object"&&p!=null?{span:f,offset:$,order:y}=p:f=p;const h=d!==r?`-${d}`:"";f&&c.push(f===!0?`${o}${h}`:`${o}${h}-${f}`),y!=null&&m.push(`order${h}-${y}`),$!=null&&m.push(`offset${h}-${$}`)}),[{...s,className:i(t,...c,...m)},{as:e,bsPrefix:o,spans:c}]}const B=l.exports.forwardRef((e,o)=>{const[{className:t,...s},{as:a="div",bsPrefix:r,spans:c}]=oe(e);return n(a,{...s,ref:o,className:i(t,!c.length&&r)})});B.displayName="Col";const te=B,se={type:x.exports.string,tooltip:x.exports.bool,as:x.exports.elementType},k=l.exports.forwardRef(({as:e="div",className:o,type:t="valid",tooltip:s=!1,...a},r)=>n(e,{...a,ref:r,className:i(o,`${t}-${s?"tooltip":"feedback"}`)}));k.displayName="Feedback";k.propTypes=se;const O=k,F=l.exports.createContext({}),S=l.exports.forwardRef(({id:e,bsPrefix:o,className:t,type:s="checkbox",isValid:a=!1,isInvalid:r=!1,as:c="input",...m},d)=>{const{controlId:p}=l.exports.useContext(F);return o=u(o,"form-check-input"),n(c,{...m,ref:d,type:s,id:e||p,className:i(t,o,a&&"is-valid",r&&"is-invalid")})});S.displayName="FormCheckInput";const G=S,b=l.exports.forwardRef(({bsPrefix:e,className:o,htmlFor:t,...s},a)=>{const{controlId:r}=l.exports.useContext(F);return e=u(e,"form-check-label"),n("label",{...s,ref:a,htmlFor:t||r,className:i(o,e)})});b.displayName="FormCheckLabel";const w=b,M=l.exports.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:t,inline:s=!1,reverse:a=!1,disabled:r=!1,isValid:c=!1,isInvalid:m=!1,feedbackTooltip:d=!1,feedback:p,feedbackType:f,className:$,style:y,title:h="",type:C="checkbox",label:g,children:v,as:z="input",...J},K)=>{o=u(o,"form-check"),t=u(t,"form-switch");const{controlId:I}=l.exports.useContext(F),Q=l.exports.useMemo(()=>({controlId:e||I}),[I,e]),T=!v&&g!=null&&g!==!1||ee(v,w),U=n(G,{...J,type:C==="switch"?"checkbox":C,ref:K,isValid:c,isInvalid:m,disabled:r,as:z});return n(F.Provider,{value:Q,children:n("div",{style:y,className:i($,T&&o,s&&`${o}-inline`,a&&`${o}-reverse`,C==="switch"&&t),children:v||j(Z,{children:[U,T&&n(w,{title:h,children:g}),p&&n(O,{type:f,tooltip:d,children:p})]})})})});M.displayName="FormCheck";const N=Object.assign(M,{Input:G,Label:w}),V=l.exports.forwardRef(({bsPrefix:e,type:o,size:t,htmlSize:s,id:a,className:r,isValid:c=!1,isInvalid:m=!1,plaintext:d,readOnly:p,as:f="input",...$},y)=>{const{controlId:h}=l.exports.useContext(F);e=u(e,"form-control");let C;return d?C={[`${e}-plaintext`]:!0}:C={[e]:!0,[`${e}-${t}`]:t},n(f,{...$,type:o,size:s,ref:y,readOnly:p,id:a||h,className:i(r,C,c&&"is-valid",m&&"is-invalid",o==="color"&&`${e}-color`)})});V.displayName="FormControl";const ae=Object.assign(V,{Feedback:O}),re=P("form-floating"),E=l.exports.forwardRef(({controlId:e,as:o="div",...t},s)=>{const a=l.exports.useMemo(()=>({controlId:e}),[e]);return n(F.Provider,{value:a,children:n(o,{...t,ref:s})})});E.displayName="FormGroup";const A=E,le={column:!1,visuallyHidden:!1},R=l.exports.forwardRef(({as:e="label",bsPrefix:o,column:t,visuallyHidden:s,className:a,htmlFor:r,...c},m)=>{const{controlId:d}=l.exports.useContext(F);o=u(o,"form-label");let p="col-form-label";typeof t=="string"&&(p=`${p} ${p}-${t}`);const f=i(a,o,s&&"visually-hidden",t&&p);return r=r||d,t?n(te,{ref:m,as:"label",className:f,htmlFor:r,...c}):n(e,{ref:m,className:f,htmlFor:r,...c})});R.displayName="FormLabel";R.defaultProps=le;const ne=R,D=l.exports.forwardRef(({bsPrefix:e,className:o,id:t,...s},a)=>{const{controlId:r}=l.exports.useContext(F);return e=u(e,"form-range"),n("input",{...s,type:"range",ref:a,className:i(o,e),id:t||r})});D.displayName="FormRange";const ce=D,H=l.exports.forwardRef(({bsPrefix:e,size:o,htmlSize:t,className:s,isValid:a=!1,isInvalid:r=!1,id:c,...m},d)=>{const{controlId:p}=l.exports.useContext(F);return e=u(e,"form-select"),n("select",{...m,size:t,ref:d,className:i(s,e,o&&`${e}-${o}`,a&&"is-valid",r&&"is-invalid"),id:c||p})});H.displayName="FormSelect";const pe=H,W=l.exports.forwardRef(({bsPrefix:e,className:o,as:t="small",muted:s,...a},r)=>(e=u(e,"form-text"),n(t,{...a,ref:r,className:i(o,e,s&&"text-muted")})));W.displayName="FormText";const me=W,_=l.exports.forwardRef((e,o)=>n(N,{...e,ref:o,type:"switch"}));_.displayName="Switch";const de=Object.assign(_,{Input:N.Input,Label:N.Label}),q=l.exports.forwardRef(({bsPrefix:e,className:o,children:t,controlId:s,label:a,...r},c)=>(e=u(e,"form-floating"),j(A,{ref:c,className:i(o,e),controlId:s,...r,children:[t,n("label",{htmlFor:s,children:a})]})));q.displayName="FloatingLabel";const ie=q,fe={_ref:x.exports.any,validated:x.exports.bool,as:x.exports.elementType},L=l.exports.forwardRef(({className:e,validated:o,as:t="form",...s},a)=>n(t,{...s,ref:a,className:i(e,o&&"was-validated")}));L.displayName="Form";L.propTypes=fe;const Fe=Object.assign(L,{Group:A,Control:ae,Floating:re,Check:N,Switch:de,Label:ne,Text:me,Range:ce,Select:pe,FloatingLabel:ie});export{te as C,Fe as F,G as a};