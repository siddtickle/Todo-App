(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(10),o=n.n(a),r=(n(67),n(68),n(13)),j=n(15),l=n(108),s=n(76),d=n(104),u=n(42),b=n.n(u),O=n(43),h=n.n(O),x=n(44),v=n.n(x),f=n(57),m=n.n(f),p=n(45),g=n.n(p),C=n(4);var y=function(e){var t=e.index,n=e.item,i=e.moveUp,a=e.moveDown,o=e.markComplete,r=e.removeTodo,u=e.editTodo,O=Object(c.useState)(""),x=Object(j.a)(O,2),f=x[0],p=x[1],y=Object(c.useState)(!1),k=Object(j.a)(y,2),T=k[0],w=k[1];return Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"center",width:800,marginLeft:"auto",marginRight:"auto",paddingBottom:15,alignItems:"center"},children:[Object(C.jsxs)(d.a,{orientation:"vertical",children:[Object(C.jsx)(s.a,{onClick:function(){return i(t)},children:Object(C.jsx)(b.a,{})}),Object(C.jsx)(s.a,{onClick:function(){return a(t)},children:Object(C.jsx)(h.a,{})})]}),Object(C.jsx)(s.a,{children:Object(C.jsx)(m.a,{onClick:function(){return o(t)}})}),!T&&Object(C.jsx)("h2",{style:{width:"100% "},children:n}),T&&Object(C.jsx)(l.a,{style:{margin:8,borderColor:"transparent !important"},value:f,helperText:"Type to edit, click the pencil you're done!",fullWidth:!0,margin:"normal",onChange:function(e){p(e.target.value)}}),Object(C.jsxs)(d.a,{children:[Object(C.jsx)(s.a,{onClick:function(){f&&(u(t,f),p("")),w(!T)},children:Object(C.jsx)(v.a,{})}),Object(C.jsx)(s.a,{onClick:function(){r(t)},children:Object(C.jsx)(g.a,{})})]})]})};var k=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),o=Object(j.a)(a,2),d=o[0],u=o[1],b=function(e){if(0!==e&&d.length>1){var t=Object(r.a)(d),n=t[e-1];t[e-1]=t[e],t[e]=n,u(t)}},O=function(e){if(e!==d.length-1&&d.length>1){var t=Object(r.a)(d),n=t[e+1];t[e+1]=t[e],t[e]=n,u(t)}},h=function(e){var t=Object(r.a)(d);t.splice(e,1),u(t)},x=function(e,t){var n=Object(r.a)(d);n[e]=t,u(n)},v=function(e){var t=Object(r.a)(d);t[e]="Done!",u(t)};return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{style:{display:"flex"},children:[Object(C.jsx)(l.a,{placeholder:"enter a todo list item",variant:"outlined",multiline:!0,value:n,fullWidth:!0,onChange:function(e){i(e.target.value)}}),Object(C.jsx)(s.a,{variant:"contained",onClick:function(){n&&(u([].concat(Object(r.a)(d),[n])),console.log(d),i(""))},children:"Add Todo Item"})]}),Object(C.jsx)("div",{children:d.map((function(e,t){return Object(C.jsx)(y,{index:t,item:e,moveUp:b,moveDown:O,markComplete:v,removeTodo:h,editTodo:x})}))})]})};var T=function(e){var t=e.index,n=e.item,i=e.moveUp,a=e.moveDown,o=e.removeTodo,r=e.editTodo,u=Object(c.useState)(""),O=Object(j.a)(u,2),x=O[0],f=O[1],m=Object(c.useState)(!1),p=Object(j.a)(m,2),y=p[0],k=p[1];return Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"center",width:800,marginLeft:"auto",marginRight:"auto",paddingBottom:15,alignItems:"center"},children:[Object(C.jsxs)(d.a,{orientation:"vertical",children:[Object(C.jsx)(s.a,{onClick:function(){return i(t)},children:Object(C.jsx)(b.a,{})}),Object(C.jsx)(s.a,{onClick:function(){return a(t)},children:Object(C.jsx)(h.a,{})})]}),!y&&Object(C.jsx)("h4",{style:{width:"100% "},children:n}),y&&Object(C.jsx)(l.a,{style:{margin:8,borderColor:"transparent !important"},value:x,helperText:"Type to edit, click the pencil you're done!",fullWidth:!0,margin:"normal",onChange:function(e){f(e.target.value)}}),Object(C.jsxs)(d.a,{children:[Object(C.jsx)(s.a,{onClick:function(){x&&(r(1,t,x),f("")),k(!y)},children:Object(C.jsx)(v.a,{})}),Object(C.jsx)(s.a,{onClick:function(){o(t)},children:Object(C.jsx)(g.a,{})})]})]})};var w=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),o=Object(j.a)(a,2),d=o[0],u=o[1],b=function(e){if(0!==e&&d.length>1){var t=Object(r.a)(d),n=t[e-1];t[e-1]=t[e],t[e]=n,u(t)}},O=function(e){if(e!==d.length-1&&d.length>1){var t=Object(r.a)(d),n=t[e+1];t[e+1]=t[e],t[e]=n,u(t)}},h=function(e){var t=Object(r.a)(d);t.splice(e,1),u(t)},x=function(e,t){var n=Object(r.a)(d);n[e]=t,u(n)};return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{style:{display:"flex"},children:[Object(C.jsx)(l.a,{placeholder:"enter a note",variant:"outlined",multiline:!0,value:n,style:{width:"100%"},onChange:function(e){i(e.target.value)}}),Object(C.jsx)(s.a,{variant:"contained",onClick:function(){n&&(u([].concat(Object(r.a)(d),[n])),console.log(d),i(""))},children:"Add Note"})]}),Object(C.jsx)("div",{children:d.map((function(e,t){return Object(C.jsx)(T,{index:t,item:e,moveUp:b,moveDown:O,removeTodo:h,editTodo:x})}))})]})};var S=function(){return Object(C.jsxs)("div",{style:{display:"flex"},children:[Object(C.jsx)(k,{}),Object(C.jsx)(w,{style:{border:"4px dotted red"}})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(S,{})}),document.getElementById("root")),D()}},[[74,1,2]]]);
//# sourceMappingURL=main.260b8fe9.chunk.js.map