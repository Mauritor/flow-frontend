(this["webpackJsonpfront-react"]=this["webpackJsonpfront-react"]||[]).push([[0],{41:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(14),i=c.n(r),o=c(3),j=c(2),l=c.n(j),d=c(6),h=c(4),b=c(5),u=c.n(b),x=(c(11),function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),s=c[0],r=c[1],i=function(){var t=Object(h.a)(l.a.mark((function t(){var c,n,a,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.splice(0,s.length),u.a.locale("es"),t.next=4,e.city.toLowerCase();case 4:return c=t.sent,n="https://api-test-weather.herokuapp.com/forecast/".concat(c),t.prev=6,t.next=9,fetch(n,{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=t.sent,t.next=12,a.json();case 12:return i=t.sent,t.next=15,i.list;case 15:o=t.sent,r([].concat(Object(d.a)(s),[o])),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(6),console.log("OUCH! Error: ",t.t0);case 22:case"end":return t.stop()}}),t,null,[[6,19]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[e.city]),Object(n.jsx)(a.Fragment,{children:s.map((function(t){return t.map((function(t,c){return Object(n.jsx)("div",{className:"card bg-primary mt-4",children:Object(n.jsxs)("div",{className:"card-body text-light",children:[Object(n.jsx)("h6",{children:"Forecast"}),Object(n.jsxs)("h5",{className:"text-info",children:[e.city," "]}),Object(n.jsx)("h5",{className:"text-info",children:t.dt_txt}),Object(n.jsx)("h6",{className:"text-warning",children:t.weather[0].description}),Object(n.jsxs)("h6",{children:["Temp: ",t.main.temp.toFixed(1)," \xb0C"]}),Object(n.jsxs)("h6",{children:["Humedad: ",t.main.humidity," %"]}),Object(n.jsxs)("h6",{children:["Viento: ",t.wind.speed," km/h "]})]})},c)}))}))})}),O=function(e){u.a.locale("es");var t=Object(a.useState)([]),c=Object(o.a)(t,2),s=c[0],r=c[1],i=function(){var t=Object(h.a)(l.a.mark((function t(){var c,n,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.splice(0,s.length),t.next=3,e.city.toLowerCase();case 3:return c=t.sent,n="https://api-test-weather.herokuapp.com/current/".concat(c),t.prev=5,t.next=8,fetch(n,{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 8:return a=t.sent,t.next=11,a.json();case 11:i=t.sent,r([].concat(Object(d.a)(s),[i])),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log("OUCH! Error: ",t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[e.city]),Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)("div",{className:"card border-0",children:s.map((function(t){return Object(n.jsxs)("div",{className:"card-body text-secondary",children:[Object(n.jsx)("h6",{children:"Weather"}),Object(n.jsxs)("h5",{className:"text-info",children:[e.city," "]}),Object(n.jsx)("h5",{className:"text-info",children:u()(Date.now()).format("ddd DD MMM YYYY")}),Object(n.jsx)("h6",{className:"text-warning",children:t.weather[0].description}),Object(n.jsxs)("h6",{children:["Temp: ",t.main.temp.toFixed(1)," \xb0C"]}),Object(n.jsxs)("h6",{children:["Humedad: ",t.main.humidity," %"]}),Object(n.jsxs)("h6",{children:["Viento: ",t.wind.speed," km/h "]})]},t.id)}))}),Object(n.jsx)(x,{city:e.city})]})},p=c(15),m=c.n(p),f=function(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),s=c[0],r=c[1],i=Object(a.useState)([]),j=Object(o.a)(i,2),b=j[0],u=j[1],x=Object(a.useState)(""),p=Object(o.a)(x,2),f=p[0],v=p[1],y=function(){var e=Object(h.a)(l.a.mark((function e(){var t,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.v4();case 2:return t=e.sent,r(t),e.next=6,fetch("https://api-test-weather.herokuapp.com/location",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ip:s})});case 6:return c=e.sent,e.next=9,c.json();case 9:n=e.sent,u([].concat(Object(d.a)(b),[n])),v(n.city);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){y()}),[s]),Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)("div",{className:"card",children:b.map((function(e,t){return Object(n.jsxs)("div",{className:"card-body text-secondary",children:[Object(n.jsx)("h6",{children:"Location"}),Object(n.jsx)("h5",{className:"text-info",children:e.city}),Object(n.jsx)("h6",{children:e.regionName}),Object(n.jsx)("h6",{children:e.country}),Object(n.jsx)("p",{children:e.query})]},t)}))}),Object(n.jsx)(O,{city:f})]})},v=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)("nav",{className:"navbar  navbar-dark bg-dark",children:Object(n.jsx)("div",{className:"navbar-collapse",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col col-sm-12 col-md-6 offset-md-3 ",children:Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Patagonia select"}),Object(n.jsxs)("select",{className:"form-control",onChange:function(e){s(e.target.value)},name:"patagoniaCity",children:[Object(n.jsx)("option",{}),Object(n.jsx)("option",{children:"Bariloche"}),Object(n.jsx)("option",{children:"Calafate"}),Object(n.jsx)("option",{children:"Esquel"}),Object(n.jsx)("option",{children:"Trelew"}),Object(n.jsx)("option",{children:"Ushuaia"})]})]})})})})})}),Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col col-sm-6 col-md-4 offset-md-2 text-center mt-5",children:Object(n.jsx)(f,{city:c})}),Object(n.jsx)("div",{className:"col col-sm-6 col-md-4  text-center mt-5",children:Object(n.jsx)(O,{city:c})})]})})]})};var y=function(){return Object(n.jsx)(v,{})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.20b57564.chunk.js.map