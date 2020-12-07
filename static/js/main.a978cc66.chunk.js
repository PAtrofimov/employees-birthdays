(this["webpackJsonpemployee-birthdates"]=this["webpackJsonpemployee-birthdates"]||[]).push([[0],{46:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(16),i=n.n(s),o=(n(46),n(11)),u=n(38),l=n(10),m=n(26),b=n(13),j=n(12),d="GET_USERS_REQUEST",h="GET_USERS_SUCCESS",p="GET_USERS_FAILURE",f="SET_USERS_MARKS",O={loading:!1,users:[],error:""},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case h:var n=JSON.parse(sessionStorage.getItem("activeUsers")),r=t.payload;return n&&n.length>0&&(r=t.payload.map((function(e){return n.includes(e.id)?Object(j.a)(Object(j.a)({},e),{},{active:!0}):e}))),{loading:!1,users:r,error:""};case p:return{loading:!1,users:[],error:t.payload};case f:var a=e.users.map((function(e){return e.id===t.payload?Object(j.a)(Object(j.a)({},e),{},{active:!e.active}):e}));return sessionStorage.setItem("activeUsers",JSON.stringify(a.filter((function(e){return!0===e.active})).map((function(e){return e.id})))),Object(j.a)(Object(j.a)({},e),{},{users:a});default:return e}},x=function(e){return Object(l.c)({router:Object(b.b)(e),user:y})},g=n(36),N=n.n(g),v=n(37),S=Object(u.a)();var E=n(20),U=n(3),F=n(39),D=n.n(F),k=function(){return{type:d}},w=function(e){return{type:h,payload:e}},C=function(e){return{type:p,payload:e}},J=[{number:1,name:"January"},{number:2,name:"February"},{number:3,name:"March"},{number:4,name:"April"},{number:5,name:"May"},{number:6,name:"June"},{number:7,name:"July"},{number:8,name:"August"},{number:9,name:"September"},{number:10,name:"October"},{number:11,name:"November"},{number:12,name:"December"}],M=function(e){var t=e.users,n=function(e,t){return e.filter((function(e){return e.month===t.number&&e.active})).map((function(e){var n="".concat(e.fullName," - ").concat(e.number," ").concat(t.name,", ").concat(e.year," year");return Object(r.jsx)("li",{className:"employees-birthday-item",children:n},e.id)}))};return Object(r.jsx)("nav",{className:"employees-birthday",children:function(e){var t=J.filter((function(t){return void 0!==e.find((function(e){return e.month===t.number&&e.active}))}));return 0===t.length?Object(r.jsx)("p",{children:"No selected employees"}):t.map((function(t){return Object(r.jsxs)("a",{className:"employees-birthday-month",href:"#",children:[Object(r.jsx)("h2",{className:"employees-birthday-heading",children:t.name}),Object(r.jsx)("ul",{className:"employees-birthday-items",children:n(e,t)})]},t.number)}))}(t)})};M.defaultProps={users:[]};var R={},T=Object(o.c)((function(e){return{users:e.user.users}}),(function(e){return Object(l.b)(R,e)}))(M),_=n(40),L=function(e,t){return e.fullName>t.fullName?1:e.fullName<t.fullName?-1:0},I=function(e){var t=e.users,n=e.setUsersMarks,a=function(e,t){var a=e.filter((function(e){return e.firstLetter===t})).sort(L);return 0===a.length?Object(r.jsx)("li",{className:"employee-letter-item",children:"..."}):a.map((function(e){return Object(r.jsx)("li",{className:"employee-letter-item",children:Object(r.jsxs)("label",{className:"employee-letter-fio",children:[Object(r.jsx)("span",{className:"employee-letter-span",children:e.fullName}),Object(r.jsx)("input",{type:"checkbox",className:"employee-checkbox",checked:e.active,onChange:function(t){t.target;n(e.id)}})]})},e.id)}))};return Object(r.jsx)("nav",{className:"employees-letters",children:function(e){return Object(_.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((function(t){return Object(r.jsxs)("a",{className:"employees-letter",href:"#",children:[Object(r.jsx)("h2",{className:"employees-letter-heading",children:t}),Object(r.jsx)("ul",{className:"employees-letter-section",children:a(e,t)})]},t)}))}(t)})};I.defaultProps={users:[]};var A={setUsersMarks:function(e){return{type:f,payload:e}}},G=Object(o.c)((function(e){return{users:e.user.users}}),(function(e){return Object(l.b)(A,e)}))(I);var P,B=Object(o.c)((function(e){return{userData:e.user}}),(function(e){return{getUsers:function(){return e((function(e){e(k()),D.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(t){var n=t.data.map((function(e){return{id:e.id,fullName:"".concat(e.lastName," ").concat(e.firstName),firstLetter:e.lastName.substr(0,1).toUpperCase(),month:new Date(e.dob).getMonth()+1,number:new Date(e.dob).getDate(),year:new Date(e.dob).getFullYear(),active:!1}}));e(w(n))})).catch((function(t){e(C(t.message))}))}))}}}))((function(e){var t=e.userData,n=e.getUsers;return Object(a.useEffect)((function(){n()}),[]),t.loading?Object(r.jsx)("h2",{children:"Loading"}):t.error?Object(r.jsx)("h2",{children:t.error}):Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsxs)("main",{className:"employees-wrapper",children:[Object(r.jsxs)("section",{className:"employees-alphabet",children:[Object(r.jsx)("h1",{className:"employees-heading",children:"Employees"}),Object(r.jsx)(G,{})]}),Object(r.jsxs)("article",{className:"employees-birthday-wrapper",children:[Object(r.jsx)("h1",{className:"employees-heading",children:"Employees birthday"}),Object(r.jsx)("hr",{className:"line line-right"}),Object(r.jsx)(T,{})]})]}),Object(r.jsx)("hr",{className:"line line-bottom"})]})})),H=function(){return Object(r.jsxs)("header",{className:"not-found",children:[Object(r.jsx)("div",{className:"not-found-error",children:"404 Not Found "}),"Go to ",Object(r.jsx)(E.b,{to:"/employees",children:"Home"})," page"]})},K=Object(l.e)(x(S),P,Object(l.d)(Object(l.a)(Object(m.a)(S),N.a,v.a))),Q=function(){return Object(r.jsx)(o.a,{store:K,children:Object(r.jsx)(b.a,{history:S,children:Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(E.a,{history:S,children:[Object(r.jsx)(U.a,{path:"/employees",component:B}),Object(r.jsx)(U.a,{exact:!0,path:"/",component:H})]})})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root")),Y()}},[[69,1,2]]]);
//# sourceMappingURL=main.a978cc66.chunk.js.map