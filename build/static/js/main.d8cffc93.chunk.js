(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},38:function(e,t,a){e.exports=a(75)},43:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=(a(43),a(12),a(34)),o=a(9),s=a(15),m=a(8),u=a(37),d={articles:[],loading:!0},p=Object(m.combineReducers)({articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case"GET_ARTICLES":return Object(u.a)({},e,{articles:a,loading:!1});default:return e}}}),E=a(29),f=a(30),v=[E.a],h=Object(m.createStore)(p,{},Object(f.composeWithDevTools)(m.applyMiddleware.apply(void 0,v))),g=a(36),b=a(31),k=a.n(b),w=function(e){var t=e.title,a=e.author,n=e.link,c=e.description,l=e.pubDate,i=e.categories,o=e.img;return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("span",{className:"close-button"},"\xd7"),r.a.createElement("h3",null,t," ",a&&r.a.createElement("span",null," by ",a)),r.a.createElement("hr",null),r.a.createElement("img",{src:o,className:"image",alt:""}),r.a.createElement("div",{className:"text"},r.a.createElement("p",null,c)),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,l)),i.map(function(e){return r.a.createElement("li",null,e)}),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n},"See more")))},N=function(e){var t=e.article,a=Object(n.useState)(!1),c=Object(g.a)(a,2),l=c[0],i=c[1];var o=t.author,s=t.enclosure,m=t.description,u=t.title,d=t.pubDate,p=t.categories,E=t.link;return r.a.createElement("div",{className:"box",onClick:function(){i(!l)}},l&&r.a.createElement(w,{title:u,author:o,description:m,pubDate:d,categories:p,link:E,img:s.link}),r.a.createElement("div",{className:"header"},r.a.createElement("h4",null,u&&u),E&&r.a.createElement("img",{alt:s.link,src:s.link?s.link:"https://makitweb.com/demo/broken_image/images/noimage.png"})),r.a.createElement("div",{className:"center"},r.a.createElement("hr",{className:"hide-sm"})),r.a.createElement("div",{className:"text hide-sm"},r.a.createElement("p",{className:"lead"},m&&m)),o&&r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Posted by ",o," ",r.a.createElement(k.a,{fromNow:!0},d))))},y=a(19),j=a.n(y),O=a(32),x=a(33),T=a.n(x),_=function(){return r.a.createElement("div",{className:"spinner4"},r.a.createElement("div",{className:"spinner5"}))},S=Object(s.b)(function(e){return{articles:e.articles}},{getArticles:function(){return function(){var e=Object(O.a)(j.a.mark(function e(t){var a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={api_key:"b7q66uq8nhpnas8endeaoadalgwafdbmj1fcdcpg",count:100},e.next=6,T.a.get("https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss",{params:a});case 6:n=e.sent,setTimeout(function(){t({type:"GET_ARTICLES",payload:n.data.items})},500),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()}})(function(e){var t=e.getArticles,a=e.articles,c=a.loading,l=a.articles;return Object(n.useEffect)(function(){t()},[t]),r.a.createElement("div",{className:"gridContainer"},c?r.a.createElement(_,null):l.map(function(e){return r.a.createElement(N,{key:e.guid,article:e})}))}),A=function(){return r.a.createElement(s.a,{store:h},r.a.createElement(i.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:S})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.d8cffc93.chunk.js.map