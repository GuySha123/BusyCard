import{r,T as c,j as e,c as d}from"./index.0e50fc66.js";import{M as t}from"./Modal.218120cb.js";import"./DeleteMsg.d03de3d3.js";function h({showConfirm:s,handleCloseConfirm:a,showPws:n}){const{theme:o}=r.exports.useContext(c);return e(d,{children:e(t,{show:s,onHide:a,children:e(t.Body,{className:`msg-container components-${o} `,children:n?e(t.Title,{className:"msg-title",children:"Password has been updated"}):e(t.Title,{className:"msg-title",children:"The account has been updated"})})})})}export{h as U};