import{r as c,u as h,j as e,I as R,g as m,J as S,T,c as K,a as l}from"./index.2d7b4441.js";function x(o,t){return Array.isArray(o)?o.includes(t):o===t}const w=c.exports.createContext({});w.displayName="AccordionContext";const y=w,A=c.exports.forwardRef(({as:o="div",bsPrefix:t,className:n,children:r,eventKey:a,...i},s)=>{const{activeEventKey:u}=c.exports.useContext(y);return t=h(t,"accordion-collapse"),e(R,{ref:s,in:x(u,a),...i,className:m(n,t),children:e(o,{children:c.exports.Children.only(r)})})});A.displayName="AccordionCollapse";const v=A,N=c.exports.createContext({eventKey:""});N.displayName="AccordionItemContext";const b=N,g=c.exports.forwardRef(({as:o="div",bsPrefix:t,className:n,...r},a)=>{t=h(t,"accordion-body");const{eventKey:i}=c.exports.useContext(b);return e(v,{eventKey:i,children:e(o,{ref:a,...r,className:m(n,t)})})});g.displayName="AccordionBody";const O=g;function F(o,t){const{activeEventKey:n,onSelect:r,alwaysOpen:a}=c.exports.useContext(y);return i=>{let s=o===n?null:o;a&&(Array.isArray(n)?n.includes(o)?s=n.filter(u=>u!==o):s=[...n,o]:s=[o]),r==null||r(s,i),t==null||t(i)}}const C=c.exports.forwardRef(({as:o="button",bsPrefix:t,className:n,onClick:r,...a},i)=>{t=h(t,"accordion-button");const{eventKey:s}=c.exports.useContext(b),u=F(s,r),{activeEventKey:p}=c.exports.useContext(y);return o==="button"&&(a.type="button"),e(o,{ref:i,onClick:u,...a,"aria-expanded":s===p,className:m(n,t,!x(p,s)&&"collapsed")})});C.displayName="AccordionButton";const B=C,I=c.exports.forwardRef(({as:o="h2",bsPrefix:t,className:n,children:r,onClick:a,...i},s)=>(t=h(t,"accordion-header"),e(o,{ref:s,...i,className:m(n,t),children:e(B,{onClick:a,children:r})})));I.displayName="AccordionHeader";const M=I,j=c.exports.forwardRef(({as:o="div",bsPrefix:t,className:n,eventKey:r,...a},i)=>{t=h(t,"accordion-item");const s=c.exports.useMemo(()=>({eventKey:r}),[r]);return e(b.Provider,{value:s,children:e(o,{ref:i,...a,className:m(n,t)})})});j.displayName="AccordionItem";const W=j,$=c.exports.forwardRef((o,t)=>{const{as:n="div",activeKey:r,bsPrefix:a,className:i,onSelect:s,flush:u,alwaysOpen:p,...H}=S(o,{activeKey:"onSelect"}),f=h(a,"accordion"),k=c.exports.useMemo(()=>({activeEventKey:r,onSelect:s,alwaysOpen:p}),[r,s,p]);return e(y.Provider,{value:k,children:e(n,{ref:t,...H,className:m(i,f,u&&`${f}-flush`)})})});$.displayName="Accordion";const d=Object.assign($,{Button:B,Collapse:v,Item:W,Header:M,Body:O});function V(){const{theme:o}=c.exports.useContext(T);return e(K,{children:e("div",{className:`page-container body-${o} h-100`,children:l("div",{className:"page-content-container my-4",children:[e("div",{className:`page-title-area mb-5 components-${o} `,children:e("div",{className:"title-grid-holder ms-3",children:e("div",{className:"page-title p-0",children:e("h1",{className:"m-0",children:"About Us"})})})}),l("div",{className:`p-4 components-${o} `,children:[e("h3",{children:"Welcome to Busycard!"}),l("p",{children:["This website is my little project to truly understand how to code in React.js. ",e("br",{}),"On this website you'll be able to decide if you want to register as a regular user or business user."," ",e("br",{})," By choosing regular account you will be able to watch others business cards. ",e("br",{})," By choosing business account you will be able to watch, create and edit your own business cards."]}),e("h4",{children:"FAQ"}),l(d,{className:"p-3",children:[l(d.Item,{eventKey:"0",children:[e(d.Header,{children:"Which account should I choose?"}),l(d.Body,{children:["The best way to have a full experience on this website is by creating a business account. This website is not industrial website so you should feel free to create a business account without feeling any guilt.",e("br",{}),e("br",{}),"Hope you will enjoy this site!"]})]}),l(d.Item,{eventKey:"1",children:[e(d.Header,{children:"What coding languages did you use?"}),e(d.Body,{children:"This website is fully developt with HTML, CSS and JavaScript"})]}),l(d.Item,{eventKey:"2",children:[e(d.Header,{children:"Which packages did you use?"}),l(d.Body,{children:["I used many packages to build this website.",e("br",{}),"But mainly I built this website with Vite with React.js, Bootstrap and Font Awesome for the frontend.",e("br",{}),"For the backend I used mainly Express.js, Mongoose, Bcrypt.js and jsonwebtoken"]})]}),l(d.Item,{eventKey:"3",children:[e(d.Header,{children:"Do I need to put my real email address?"}),e(d.Body,{children:"No, you can feel free to put whatever email address you can think of just make sure it has name@somthing.something"})]})]})]})]})})})}export{V as default};
