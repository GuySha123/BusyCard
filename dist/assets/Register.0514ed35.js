import{r as i,u as O,v as V,w as Y,j as e,g as q,T as U,c as z,x as F,a as u,F as R,y as J,z as K,D as Q,E as W,U as X}from"./index.2d7b4441.js";import{F as n,C as S}from"./DeleteMsg.ec351c71.js";import{M as A}from"./Modal.b65dbbdd.js";const M=i.exports.forwardRef(({bsPrefix:c,className:a,as:d="div",...l},p)=>{const s=O(c,"row"),N=V(),w=Y(),x=`${s}-cols`,g=[];return N.forEach(h=>{const f=l[h];delete l[h];let o;f!=null&&typeof f=="object"?{cols:o}=f:o=f;const C=h!==w?`-${h}`:"";o!=null&&g.push(`${x}${C}-${o}`)}),e(d,{ref:p,...l,className:q(a,s,...g)})});M.displayName="Row";const Z=M;function _({showConfirm:c,handleCloseConfirm:a,fistName:d,lastName:l}){const{theme:p}=i.exports.useContext(U);return e(z,{children:e(A,{show:c,onHide:a,children:e(A.Body,{className:`msg-container components-${p} `,children:e(A.Title,{className:"msg-title",children:`You have been registered successfully ${d} ${l}!`})})})})}function ee(){const{theme:c}=i.exports.useContext(U),[a,d]=i.exports.useState({}),[l,p]=i.exports.useState(""),[s,N]=i.exports.useState({email:"",password:"",firstName:"",lastName:"",isBusinessAccount:!1,isAdminAccount:!1}),w=F(),[x,g]=i.exports.useState(!1),h=()=>{g(!1),w("/signin")},f=()=>{g(!0),setTimeout(h,3e3)};function o(t){const{name:r,value:v,type:b,checked:y}=t.target;N({...s,[r]:b==="checkbox"?y:v})}function C(){return!(s.email.length<6||!s.email.includes("@")||!s.email.includes("."))}function j(){return!(s.password.length<6)}function G(){return!(s.firstName.length<2||s.firstName.match(/\d/)!==null)}function T(){return!(s.lastName.length<2||s.lastName.match(/\d/)!==null)}function D(){return s.password===l&&l.length>0}function I(t){t.preventDefault();try{const{email:r,password:v,firstName:b,lastName:y,isBusinessAccount:L,isAdminAccount:H}=s;Q({email:r,password:v,firstName:b,lastName:y,isBusinessAccount:L,isAdminAccount:H});const B=[];C()||B.push("Email is invalid");const P=[];j()||P.push("Password must be at least 6 charecters");const k=[];D()||k.push("Password does not match");const E=[];G()||E.push("Please enter a valid name");const $=[];T()||$.push("Please enter a valid name");const m={};if(B.length>0&&(m.email=B),P.length>0&&(m.password=P),k.length>0&&(m.matchPassword=k),E.length>0&&(m.firstName=E),$.length>0&&(m.lastName=$),Object.keys(m).length>0)throw d(m),console.log(m),new Error;f()}catch(r){return console.log(r)}}return u(z,{children:[e("div",{className:`register-user-container body-${c} d-grid h-100`,children:u(n,{className:"register-user-form text-center w-100",onSubmit:I,children:[s.isBusinessAccount?e(R,{icon:K,className:"fa-5x"}):e(R,{icon:J,className:"fa-5x"}),e("h1",{className:"fs-3 fw-normal mb-3",children:"Create a user"}),u(n.Group,{className:"mb-3",children:[e(n.Control,{type:"email",name:"email",size:"lg",placeholder:"Email address",value:s.email,onChange:o}),a.email&&a.email.map((t,r)=>e("div",{className:"error text-danger",children:t},r))]}),u(n.Group,{className:"mb-3",children:[e(n.Control,{type:"password",name:"password",size:"lg",placeholder:"Password",autoComplete:"new-password",value:s.password,onChange:o}),a.password&&a.password.map((t,r)=>e("div",{className:"error text-danger",children:t},r))]}),u(n.Group,{className:"mb-3",children:[e(n.Control,{type:"password",name:"matchPassword",size:"lg",placeholder:"Confirm Password",autoComplete:"new-password",value:l,onChange:t=>p(t.target.value)}),a.matchPassword&&a.matchPassword.map((t,r)=>e("div",{className:"error text-danger",children:t},r))]}),u(Z,{className:"mb-3",children:[u(n.Group,{className:"mb-3",as:S,md:"6",children:[e(n.Control,{type:"text",name:"firstName",size:"lg",placeholder:"First name",value:s.firstName,onChange:o}),a.firstName&&a.firstName.map((t,r)=>e("div",{className:"error text-danger",children:t},r))]}),u(n.Group,{as:S,md:"6",children:[e(n.Control,{type:"text",name:"lastName",size:"lg",placeholder:"Last name",value:s.lastName,onChange:o}),a.lastName&&a.lastName.map((t,r)=>e("div",{className:"error text-danger",children:t},r))]})]}),e(n.Group,{className:"d-flex justify-content-center mb-4",children:e(n.Check,{label:"Business Account",type:"checkbox",name:"isBusinessAccount",value:s.isBusinessAccount,onChange:o})}),e("div",{className:"d-grid",children:e("button",{type:"submit",className:`buttons-${c} sign-in-register-btn`,size:"lg",children:"Sign-Up"})})]})}),e(_,{showConfirm:x,handleCloseConfirm:h,fistName:s.firstName,lastName:s.lastName})]})}function re(){const{user:c}=i.exports.useContext(W),{token:a}=i.exports.useContext(X),d=F();return(c||a)&&d("/404"),e(ee,{})}export{re as default};
