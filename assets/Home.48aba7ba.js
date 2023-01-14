import{r as n,T as N,j as e,a as t,F as C,f as D,b as $,U as I}from"./index.2d7b4441.js";import{b as w,C as L,g as P,d as B}from"./cardStorage.9f42fe7e.js";import"./Modal.b65dbbdd.js";function H({cards:i}){const{theme:d}=n.exports.useContext(N),[o,u]=n.exports.useState(!0),[c,l]=n.exports.useState(!1),[a,m]=n.exports.useState(!1),g=h=>{const[s,r]=h.split(", "),[p,v,f]=s.split("/"),[x,y,k]=r.split(":");return new Date(f,v-1,p,x,y,k)},b=i.sort((h,s)=>{const r=g(h.businessCreateDate);return g(s.businessCreateDate)-r}).slice(0,3);return i.length==0?e("div",{className:`not-found-container body-${d} d-grid `,children:e("div",{className:`not-found-content-container components-${d}`,children:t("div",{className:"not-found-content ",children:[e("h1",{children:"No Cards"}),e("p",{children:"Time to create a new Card!"})]})})}):t("div",{className:"home-card-area",children:[e("input",{type:"radio",name:"slider",id:"item-1",checked:o,onChange:()=>u(!o)}),e("input",{type:"radio",name:"slider",id:"item-2",checked:c,onChange:()=>l(!c)}),e("input",{type:"radio",name:"slider",id:"item-3",checked:a,onChange:()=>m(!a)}),e("div",{className:"home-cards",children:(()=>b.map((s,r)=>e("label",{htmlFor:`item-${r+1}`,className:"home-card",id:`home-card-${r+1}`,children:t("div",{className:`card-container  business-cards-${d}`,children:[e("div",{className:`card-image business-cards-image-${d}`,style:{backgroundImage:`url(${s.businessImage==="businessDefaultCardImage"?w:s.businessImage})`}}),e("div",{className:`card-title-container card-title-container-${d}`,children:e("div",{className:"card-title ps-3 pe-1 pt-2",children:t("div",{className:"business-title col-10 text-truncate",children:[e("h2",{children:s.businessName}),e("h3",{children:s.cardEditor})]})})}),t("div",{className:"card-content ",children:[e("div",{className:"last-updated mx-2",children:t("small",{children:["Last updated: ",s.businessCreateDate]})}),e("div",{className:"description my-2 mx-2",children:s.businessDescription}),t("div",{className:"phone my-2",children:[e("div",{className:"phone-address-icon",children:e(C,{icon:D,className:""})}),e("div",{className:"phone-number",children:s.businessPhone})]}),t("div",{className:"address mb-2",children:[e("div",{className:"phone-address-icon",children:e(C,{icon:$,className:""})}),e("div",{className:"address-info",children:s.businessAddress})]}),e("div",{className:"get-details-btn me-2",children:e(L,{card:s})})]})]},s._id)},r)))()})]})}const S="/BusyCard/assets/BusyCardLogo.625bf6e9.png",F="/BusyCard/assets/BusyCardLogoLight.e76af846.png";function R(){const{theme:i}=n.exports.useContext(N),[d,o]=n.exports.useState([]),{token:u}=n.exports.useContext(I);n.exports.useEffect(()=>{l()},[]);function c(a){B(a,u).then(m=>{l()}).catch(m=>console.error(m))}function l(){P().then(a=>{console.log(a),o([...a])}).catch(a=>console.log(a.message))}return e("div",{className:`home-page page-container body-${i} h-100`,children:t("div",{className:"page-content-container home-page-content-container my-4",children:[e("div",{className:`page-title-area home-title mb-5 components-${i} `,children:e("div",{className:"title-grid-holder ms-3",children:e("div",{className:"page-title p-0",children:e("div",{className:"website-logo",style:{backgroundImage:`url(${i==="light"?S:F})`}})})})}),e(H,{cards:d,onDelete:c})]})})}export{R as default};
