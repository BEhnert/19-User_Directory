(this.webpackJsonpuser_directory=this.webpackJsonpuser_directory||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),r=n.n(i),s=n(4),a=n.n(s),d=(n(10),n(2));n(11);var l=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)({}),a=Object(d.a)(s,2),l=(a[0],a[1],Object(i.useState)([])),o=Object(d.a)(l,2),j=o[0],u=o[1];return Object(i.useEffect)((function(){fetch("https://randomuser.me/api/?results=50&inc=picture,name,phone,email,dob").then((function(e){return e.json()})).then((function(e){console.log(e.results),r(e.results),u(e.results)}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:"Employee Directory"}),Object(c.jsx)("h5",{children:"Click on carrots to sort by heading or use Search box to narrow your results"})]}),Object(c.jsx)("input",{name:"searchTerm",onChange:function(e){var t=e.target,c=(t.name,t.value),i=n.filter((function(e){return e.name.first.includes(c)||e.name.last.includes(c)||e.phone.includes(c)||e.email.includes(c)||e.dob.date.includes(c)}));console.log(i),u(i)},placeholder:"Search"}),Object(c.jsxs)("div",{className:"employees-grid",children:[Object(c.jsx)("div",{children:"Image"}),Object(c.jsx)("div",{children:"Name"}),Object(c.jsx)("div",{children:"Phone"}),Object(c.jsx)("div",{children:"Email"}),Object(c.jsx)("div",{children:"DOB"})]}),j.map((function(e,t){return Object(c.jsxs)("div",{className:"employees-grid",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:e.picture.thumbnail,alt:t})}),Object(c.jsxs)("div",{children:[e.name.first," ",e.name.last]}),Object(c.jsx)("div",{children:e.phone}),Object(c.jsx)("div",{children:e.email}),Object(c.jsx)("div",{children:e.dob.date})]},t)}))]})},o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),o()}},[[12,1,2]]]);
//# sourceMappingURL=main.840edc0b.chunk.js.map