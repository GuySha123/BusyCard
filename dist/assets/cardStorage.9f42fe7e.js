import{r as h,T as g,a as o,c as w,j as s,C as y,F as u,f as v,b as D}from"./index.2d7b4441.js";import{M as i}from"./Modal.b65dbbdd.js";const k="/BusyCard/assets/businesscard1015419960720.586fa3a0.jpg";function T({card:e}){const{theme:a}=h.exports.useContext(g),[t,n]=h.exports.useState(!1),d=e.businessName,m=e.businessDescription,b=e.businessAddress,f=e.businessPhone,l=e.businessImage,p=e.businessCreateDate,C=e.cardEditor,c=()=>n(!1),N=()=>{n(!0)};return o(w,{children:[s("button",{className:`buttons-${a} button-control`,onClick:N,children:"More details"}),s(i,{show:t,onHide:c,size:"lg",className:"modal-content-details",centered:!0,children:o(i.Body,{className:`components-${a} details-container`,children:[s(i.Title,{className:"card-details-title",children:d}),s(y,{className:"form-close-x","aria-label":"Hide",onClick:c}),s("div",{className:`card-image image-details-container business-cards-image-${a}`,style:{backgroundImage:`url(${l==="businessDefaultCardImage"?k:l})`}}),o("div",{className:"card-detail",children:[s("div",{className:"card-editor",children:o("small",{children:["Card editor: ",C]})}),s("div",{className:"last-update",children:o("small",{children:["Last updated: ",p]})})]}),o("div",{className:"description-details",children:["Description: ",m]}),o("div",{className:"phone-details ",children:[s("div",{className:"phone-address-icon",children:s(u,{icon:v,className:""})}),s("div",{className:"phone-number ms-1",children:f})]}),o("div",{className:"address-details mb-2",children:[s("div",{className:"phone-address-icon",children:s(u,{icon:D,className:""})}),s("div",{className:"address-info ms-1",children:b})]}),s("div",{className:"close-details",children:s("button",{type:"reset",onClick:c,className:`buttons-${a} button-control `,children:"Close"})})]})})]})}const r="http://localhost:5000/cards";async function x(){return fetch(r).then(e=>e.json())}async function A(e,a){const t=await fetch(r+"/getmycards?userId="+a,{method:"GET",headers:{token:e}});if(!t.ok)throw new Error("An error occurred while fetching the your cards");return await t.json()}async function I(e,a){const t=await fetch(r+"/create",{method:"POST",headers:{"Content-Type":"application/json",token:a},body:JSON.stringify(e)});if(!t.ok)throw new Error("An error occurred while fetching the user");const n=await t.json();console.log(n)}async function S(e,a,t){const n=await fetch(r+"/updatecard?cardid="+t,{method:"PUT",headers:{"Content-Type":"application/json",token:a},body:JSON.stringify(e)});if(!n.ok)throw new Error("An error occurred while fetching the your card");return await n.json()}async function $(e,a){return fetch(r+"/deletecard?cardid="+e,{method:"DELETE",headers:{token:a}})}export{T as C,I as a,k as b,A as c,$ as d,x as g,S as u};