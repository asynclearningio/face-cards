(this.webpackJsonpfacecards=this.webpackJsonpfacecards||[]).push([[0],[,,,,,,,,,,,,,,function(e,n,t){},,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var s=t(1),c=t.n(s),r=t(4),a=t.n(r),o=(t(14),t(3)),i=t.n(o),u=t(5),h=t(6),l=t(7),d=t(9),p=t(8),j=(t.p,t(16),t(17),t(0)),f=function(e){return Object(j.jsxs)("div",{className:"card-container",children:[Object(j.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.person.id,"?set=set2&size=180x180")}),Object(j.jsx)("h2",{children:e.person.name}),Object(j.jsx)("p",{children:e.person.email})]})},b=(t(19),function(e){return Object(j.jsx)("div",{className:"card-list",children:e.persons.map((function(e){return Object(j.jsx)(f,{person:e},e.id)}))})}),O=(t(20),function(e){var n=e.placeholder,t=e.handleChange;return Object(j.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})}),x=function(e){Object(d.a)(t,e);var n=Object(p.a)(t);function t(){var e;return Object(h.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={persons:[],searchField:""},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,this.setState({persons:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.persons,t=e.searchField,s=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Face Cards"}),Object(j.jsx)(O,{placeholder:"search persons",handleChange:this.handleChange}),Object(j.jsx)(b,{persons:s})]})}}]),t}(s.Component),m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,s=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),m()}],[[21,1,2]]]);
//# sourceMappingURL=main.5205e42b.chunk.js.map