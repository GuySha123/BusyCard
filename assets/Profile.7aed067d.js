import{r as o,U as K,T as F,E as q,j as e,a as n,F as A,K as J,f as re,b as ce,X as ie,x as Q,c as U,C as W,W as le,H as Z,Y as de,y as ee,z as se,R as me}from"./index.2d7b4441.js";import{C as ue,a as he}from"./CardSettingsDropdown.2c2559a8.js";import{c as pe,b as fe,C as Ne,d as ge}from"./cardStorage.9f42fe7e.js";import{M as y}from"./Modal.b65dbbdd.js";import{F as u}from"./DeleteMsg.ec351c71.js";import{I as L}from"./InputGroup.824e9c80.js";import{U as we}from"./UpdatedUserMsg.db12b969.js";import Ce from"./SignIn.d373a3c9.js";function ve(){const[s,b]=o.exports.useState([]),{token:a}=o.exports.useContext(K),{theme:i}=o.exports.useContext(F),{user:d}=o.exports.useContext(q),[p,w]=o.exports.useState(!1),[C,$]=o.exports.useState(null);let x=o.exports.useRef();const B=d==null?void 0:d._id,v=l=>{const[t,c]=l.split(", "),[f,S,N]=t.split("/"),[m,h,g]=c.split(":");return new Date(N,S-1,f,m,h,g)},D=s.sort((l,t)=>{const c=v(l.businessCreateDate);return v(t.businessCreateDate)-c});o.exports.useEffect(()=>{r()},[]),o.exports.useEffect(()=>{let l=t=>{x.current&&!x.current.contains(t.target)&&document.getElementById("card-num: "+C)&&!document.getElementById("card-num: "+C).contains(t.target)&&w(!1)};return document.addEventListener("mousedown",l),document.addEventListener("touchstart",l),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("touchstart",l)}});function k(l){ge(l,a).then(t=>{r()}).catch(t=>console.error(t))}function r(){pe(a,B).then(l=>{console.log(l),b([...l])}).catch(l=>console.log(l.message))}return s.length==0?e("div",{className:`not-found-container body-${i} d-grid `,children:e("div",{className:`not-found-content-container components-${i}`,children:n("div",{className:"not-found-content ",children:[e("h1",{children:"No Cards"}),e("p",{children:"Time to create a new Card!"})]})})}):e("div",{className:"cards-area-grid",children:(()=>D.map((t,c)=>e("div",{className:"cards-col",children:n("div",{className:`card-container business-cards-${i}`,children:[e("div",{className:`card-image business-cards-image-${i}`,style:{backgroundImage:`url(${t.businessImage==="businessDefaultCardImage"?fe:t.businessImage})`}}),e("div",{className:`card-title-container card-title-container-${i}`,children:n("div",{className:"card-title ps-3 pe-1 pt-2",children:[n("div",{className:"business-title",children:[e("h2",{children:t.businessName}),e("h3",{children:t.cardEditor})]}),n("div",{ref:x,id:"card-num: "+c,className:"card-settings",children:[e("div",{className:"menu-trigger",onClick:()=>{w(!p),$(c)},children:e(A,{icon:J,className:`card-settings-dot ellipsis-${i}`})}),e("div",{className:`dropdown-menu-custom  dropdown-menu-box-${i}  ${p&&C===c?"active":"inactive"} `,children:e("ul",{children:e(ue,{card:t,onDelete:k,setOpen:w})})})]})]})}),n("div",{className:"card-content ",children:[e("div",{className:"last-updated mx-2",children:n("small",{children:["Last updated: ",t.businessCreateDate]})}),e("div",{className:"description my-2 mx-2",children:t.businessDescription}),n("div",{className:"phone my-2",children:[e("div",{className:"phone-address-icon",children:e(A,{icon:re,className:""})}),e("div",{className:"phone-number",children:t.businessPhone})]}),n("div",{className:"address mb-2",children:[e("div",{className:"phone-address-icon",children:e(A,{icon:ce,className:""})}),e("div",{className:"address-info",children:t.businessAddress})]}),e("div",{className:"get-details-btn me-2",children:e(Ne,{card:t})})]})]},t._id)},c)))()})}function be({user:s,setOpen:b}){const{theme:a}=o.exports.useContext(F),[i,d]=o.exports.useContext(ie),{token:p,setToken:w}=o.exports.useContext(K),[C,$]=o.exports.useState({}),[x,B]=o.exports.useState(""),v=Q(),[D,k]=o.exports.useState(!1),r=()=>{k(!1),$({})},I=()=>{k(!0),b(!1)},[l,t]=o.exports.useState(!1),c=()=>{t(!1),d(!1),S(s==null?void 0:s._id),w(null),v("/")},f=()=>{t(!0),r(),setTimeout(c,3e3)};function S(m){p&&le(m).then(h=>{console.log("Account deleted successfully")}).catch(h=>alert(h.message))}async function N(m){m.preventDefault();try{const h=s==null?void 0:s.email;await Z(h,x)&&f()}catch(h){if(h.status===400){const g=[];g.push("Incorrect password");const M={};g.length>0&&(M.password=g),$(M);return}else{console.log(`Error occured: ${h}`);return}}}return n(U,{children:[e("div",{className:`dropdown-item-custom dropdown-item-custom-${a}`,onClick:I,style:{cursor:"pointer"},children:"Delete account"}),e(y,{show:D,onHide:r,children:e(y.Body,{className:`msg-container components-${a} `,children:n("div",{className:"msg-grid",children:[e(y.Title,{className:"msg-title",children:"Delete this account?"}),e(W,{className:"msg-close-x","aria-label":"Hide",onClick:r}),n(u,{className:"update-acc-inputs-group",onSubmit:N,children:[n(u.Group,{className:"update-acc-inputs mb-3",children:[e(L,{hasValidation:!0,children:e(u.Control,{type:"password",name:"password",size:"lg",placeholder:"Old Password",autoComplete:"new-password",value:x,onChange:m=>B(m.target.value)})}),C.password&&C.password.map((m,h)=>e("div",{className:"error text-danger",children:m},h))]}),n("div",{className:"msg-options ",children:[e("button",{type:"reset",className:`buttons-${a} button-control-close `,onClick:r,children:"Close"}),e("button",{type:"submit",className:`buttons-${a} button-control`,onClick:f,children:"Delete"})]})]})]})})}),e(y,{show:l,onHide:c,children:e(y.Body,{className:`msg-container components-${a} `,children:e(y.Title,{className:"msg-title",children:"The account has been deleted"})})})]})}function xe({user:s,token:b,showPws:a,handleClosePws:i,theme:d,password:p,setPassword:w,newPassword:C,setNewPassword:$,matchPassword:x,setMatchPassword:B,errors:v,setErrors:D,handleShowConfirm:k}){function r(){return!(C.length<6)}function I(){return C===x&&x.length>0}async function l(t){t.preventDefault();try{const c=s==null?void 0:s._id,f=s==null?void 0:s.email;if(await Z(f,p)){const N=[];r()||N.push("Password must be at least 6 charecters");const m=[];I()||m.push("Password does not match");const h=[];(!I()||!r())&&h.push("Incorrect password");const g={};if(h.length>0&&(g.password=h),N.length>0&&(g.newPassword=N),m.length>0&&(g.matchPassword=m),Object.keys(g).length>0)throw D(g),console.log(g),new Error;await de(C,b,c),k()}}catch(c){if(c.status===400){const f=[];f.push("Incorrect password");const S=[];r()||S.push("Password must be at least 6 charecters");const N=[];I()||N.push("Password does not match");const m={};f.length>0&&(m.password=f),S.length>0&&(m.newPassword=S),N.length>0&&(m.matchPassword=N),D(m);return}else{console.log(`Error occured: ${c}`);return}}}return e(U,{children:e(y,{show:a,onHide:i,backdrop:"static",keyboard:!1,centered:!0,children:n(y.Body,{className:`components-${d} update-acc-container`,children:[e(y.Title,{className:"form-title mb-2",children:"Update password"}),e(W,{className:"form-close-x","aria-label":"Hide",onClick:i}),n(u,{className:"update-acc-inputs-group",onSubmit:l,children:[n(u.Group,{className:"update-acc-inputs mb-3",children:[e(L,{hasValidation:!0,children:e(u.Control,{type:"password",name:"password",size:"lg",placeholder:"Old Password",autoComplete:"new-password",value:p,onChange:t=>w(t.target.value)})}),v.password&&v.password.map((t,c)=>e("div",{className:"error text-danger",children:t},c))]}),n(u.Group,{className:"update-acc-inputs mb-3",children:[e(L,{hasValidation:!0,children:e(u.Control,{type:"password",name:"newPassword",size:"lg",placeholder:"New Password",autoComplete:"new-password",value:C,onChange:t=>$(t.target.value)})}),v.newPassword&&v.newPassword.map((t,c)=>e("div",{className:"error text-danger",children:t},c))]}),n(u.Group,{className:"update-acc-inputs mb-3",children:[e(L,{hasValidation:!0,children:e(u.Control,{type:"password",name:"matchPassword",size:"lg",placeholder:"Confirm Password",autoComplete:"new-password",value:x,onChange:t=>B(t.target.value)})}),v.matchPassword&&v.matchPassword.map((t,c)=>e("div",{className:"error text-danger",children:t},c))]}),n("div",{className:"update-acc-btn",children:[e("button",{type:"reset",onClick:i,className:`buttons-${d} button-control me-3`,children:"Close"}),e("button",{type:"submit",className:`buttons-${d} button-control`,children:"Update"})]})]})]})})})}function ye({user:s,token:b,setOpen:a}){const{theme:i}=o.exports.useContext(F),[d,p]=o.exports.useState({}),[w,C]=o.exports.useState(s==null?void 0:s._id),[$,x]=o.exports.useState(""),[B,v]=o.exports.useState(""),[D,k]=o.exports.useState(""),[r,I]=o.exports.useState({email:s==null?void 0:s.email,firstName:s==null?void 0:s.firstName,lastName:s==null?void 0:s.lastName,isBusinessAccount:s==null?void 0:s.isBusinessAccount}),l=Q(),[t,c]=o.exports.useState(!1),f=()=>{c(!1),p({})},S=()=>{c(!0),a(!1)},[N,m]=o.exports.useState(!1),h=()=>{m(!1),c(!0),x(""),v(""),k(""),p({})},g=()=>{m(!0),c(!1)},[M,G]=o.exports.useState(!1),X=()=>{N?(h(),G(!1)):(G(!1),l("/profile"))},Y=()=>{G(!0),setTimeout(X,3e3)};function V(P){const{name:E,value:z,type:H,checked:R}=P.target;I({...r,[E]:H==="checkbox"?R:z})}function te(){return!(r.email.length<6||!r.email.includes("@")||!r.email.includes("."))}function ae(){return!(r.firstName.length<2||r.firstName.match(/\d/)!==null)}function ne(){return!(r.lastName.length<2||r.lastName.match(/\d/)!==null)}function oe(P){P.preventDefault();try{const{email:E,firstName:z,lastName:H,isBusinessAccount:R}=r;me({email:E,firstName:z,lastName:H,isBusinessAccount:R},b,w);const j=[];te()||j.push("Email is invalid");const O=[];ae()||O.push("Please enter a valid name");const _=[];ne()||_.push("Please enter a valid name");const T={};if(j.length>0&&(T.email=j),O.length>0&&(T.firstName=O),_.length>0&&(T.lastName=_),Object.keys(T).length>0)throw p(T),console.log(T),new Error;Y()}catch(E){return console.log(E)}}return n(U,{children:[e("div",{className:`dropdown-item-custom dropdown-item-custom-${i}`,onClick:S,style:{cursor:"pointer"},children:"Update account"}),e(y,{show:t,onHide:f,backdrop:"static",keyboard:!1,centered:!0,children:n(y.Body,{className:`components-${i} update-acc-container`,children:[e(y.Title,{className:"form-title mb-2",children:"Update account"}),e(W,{className:"form-close-x","aria-label":"Hide",onClick:f}),r.isBusinessAccount?e("div",{className:"update-profile-img",children:e(A,{icon:se,className:"fa-5x"})}):e("div",{className:"update-profile-img",children:e(A,{icon:ee,className:"fa-5x"})}),n(u,{className:"update-acc-inputs-group",onSubmit:oe,children:[n(u.Group,{className:"update-acc-inputs mb-3",children:[e(L,{hasValidation:!0,children:e(u.Control,{type:"email",name:"email",size:"lg",placeholder:"Email address",value:r.email,onChange:V})}),d.email&&d.email.map((P,E)=>e("div",{className:"error text-danger",children:P},E))]}),n("div",{className:"update-acc-inputs update-user-name mb-3",children:[n(u.Group,{className:"update-user-fist-name me-2",children:[e(L,{hasValidation:!0,children:e(u.Control,{type:"text",name:"firstName",size:"lg",placeholder:"First name",value:r.firstName,onChange:V})}),d.firstName&&d.firstName.map((P,E)=>e("div",{className:"error text-danger",children:P},E))]}),n(u.Group,{className:"update-user-last-name",children:[e(L,{hasValidation:!0,children:e(u.Control,{type:"text",name:"lastName",size:"lg",placeholder:"Last name",value:r.lastName,onChange:V})}),d.lastName&&d.lastName.map((P,E)=>e("div",{className:"error text-danger",children:P},E))]})]}),e("div",{className:"update-psw-btn mb-3",children:e("button",{className:`buttons-${i} change-password-btn button-control`,type:"reset",onClick:g,children:"Change password"})}),e(u.Group,{className:"update-checkbox d-flex justify-content-center mb-4",children:e(u.Check,{label:"Business Account",type:"checkbox",name:"isBusinessAccount",value:r.isBusinessAccount,defaultChecked:r.isBusinessAccount,onChange:V})}),n("div",{className:"update-acc-btn",children:[e("button",{type:"reset",onClick:f,className:`buttons-${i} button-control me-3`,children:"Close"}),e("button",{type:"submit",className:`buttons-${i} button-control`,children:"Update"})]})]})]})}),e(xe,{user:s,token:b,theme:i,showPws:N,handleClosePws:h,password:$,setPassword:x,newPassword:B,setNewPassword:v,matchPassword:D,setMatchPassword:k,errors:d,setErrors:p,handleShowConfirm:Y}),e(we,{showPws:N,showConfirm:M,handleCloseConfirm:X})]})}function Ee({user:s,token:b,setOpen:a}){return n(U,{children:[e(ye,{user:s,token:b,setOpen:a}),e(be,{user:s,setOpen:a})]})}function Ae(){const{theme:s}=o.exports.useContext(F),{token:b}=o.exports.useContext(K),{user:a}=o.exports.useContext(q),[i,d]=o.exports.useState(!1);let p=o.exports.useRef();return o.exports.useEffect(()=>{let w=C=>{p.current&&!p.current.contains(C.target)&&d(!1)};return document.addEventListener("mousedown",w),document.addEventListener("touchstart",w),()=>{document.removeEventListener("mousedown",w),document.removeEventListener("touchstart",w)}}),e(U,{children:!b&&!a?e(Ce,{}):e(U,{children:e("div",{className:`page-container body-${s} h-100`,children:n("div",{className:"page-content-container my-4",children:[e("div",{className:` profile-info-area components-${s} mb-5`,children:n("div",{className:"profile-grid-holder",children:[e("div",{className:`profile-picture-container  ms-3 profile-image-${s}`,children:e("div",{className:"profile-picture ",children:e(A,{icon:a!=null&&a.isBusinessAccount?se:ee,className:"profile-image fa-5x"})})}),n("div",{ref:p,className:"profile-settings mt-3 ",children:[e("div",{className:"profile-menu-trigger",onClick:()=>{d(!i)},children:e(A,{icon:J,className:`profile-settings-dot text-${s}`})}),e("div",{className:`dropdown-profile-menu-custom  dropdown-menu-box-${s}  ${i?"active":"inactive"} `,children:e("ul",{children:e(Ee,{user:a,token:b,setOpen:d})})})]}),e("div",{className:"profile-user-full-name px-3",children:n("h1",{children:[a==null?void 0:a.firstName," ",a==null?void 0:a.lastName]})}),e("div",{className:"profile-user-email px-3",children:e("h3",{className:"mb-4",children:a==null?void 0:a.email})}),e("div",{className:"my-cards-title ms-3",children:e("h3",{children:"My Cards: "})}),a!=null&&a.isBusinessAccount?e("div",{className:"profile-btn-area",children:e(he,{})}):e(U,{})]})}),a!=null&&a.isBusinessAccount?e(ve,{user:a}):e(U,{})]})})})})}export{Ae as default};
