(this["webpackJsonpshoppies-client"]=this["webpackJsonpshoppies-client"]||[]).push([[0],{41:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),r=n(11),i=n.n(r),c=n(3);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))},l=n(6),d=n(8),u=n(7),m=(n(41),n(9)),h=n(30),j=function(e,t){return f(t).filter((function(t){var n=t.userID;return e===n}))},b=function(e,t,n){return j(e,n).map((function(e){return e.imdbID})).includes(t)},p=function(e,t){return(null===t||void 0===t?void 0:t.userID)===e},f=function(e){var t=e.dbNom,n=e.storeNom;return("nominate"===n.action?[].concat(Object(h.a)(t),[null===n||void 0===n?void 0:n.nomination]):t.filter((function(e){var t,a;return e.imdbID!==(null===n||void 0===n||null===(t=n.nomination)||void 0===t?void 0:t.imdbID)&&e.userID!==(null===n||void 0===n||null===(a=n.nomination)||void 0===a?void 0:a.userID)}))).sort((function(e,t){return e.createdAt<t.createdAt?1:t.createdAt<e.createdAt?-1:0}))},v=n(12),O=n.n(v),x=O.a.create({baseURL:"http://localhost:8008/api",timeout:6e4}),g=function(e){return{type:"RECEIVE_NOMINATIONS",nominations:e}},N=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:"my-2",children:["cancel","nominate"].map((function(t){var n="cancel"===t?"danger":"success",o=e.ifNominatedByAuthedUser&&"cancel"===t||!e.ifNominatedByAuthedUser&&!e.ifInMyNominations&&"nominate"===t;return Object(a.jsxs)("button",{className:"btn btn-outline-".concat(n," ").concat(!o&&"d-none"," rounded-pill text-uppercase"),type:"button",onClick:function(n){n.stopPropagation(),e.handleUpdateNominations(t,{userID:e.authedUser,imdbID:e.imdbID})},children:[Object(a.jsx)("span",{className:"mr-2",children:"cancel"===t?Object(a.jsx)(m.d,{}):Object(a.jsx)(m.c,{})}),t]},t)}))})})};N.defaultProps={authedUser:"",handleUpdateNominations:function(){},ifInMyNominations:!1,ifNominatedByAuthedUser:!1,imdbID:""};var I=Object(c.connect)((function(e){return{authedUser:e.authedUser}}),{handleUpdateNominations:function(e,t){return function(n,a){var o=a(),r=o.authedUser,i=o.nominations,c=j(r,i);return"nominate"===e&&5===c.length?alert("The maximum amount of nominations is 5"):(n(function(e,t){return{type:"nominate"===e?"SAVE_NOMINATION":"REMOVE_NOMINATION",action:e,nomination:t}}(e,t)),x["nominate"===e?"post":"delete"]("/nominations".concat("cancel"===e?"?imdbID=".concat(t.imdbID,"&&userID=").concat(t.userID):""),t).then((function(e){var t=e.data;return n(g(t.data))})).catch((function(e){return console.log(e)})).finally((function(){return n({type:"RESOLVE_NOMINATIONS"})})))}}})(N),y=O.a.create({baseURL:"http://www.omdbapi.com",timeout:6e4}),w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movie:{}},e.fetchMovie=function(t){return y.get("/?apikey=ce4b5ffd",{params:{i:t}}).then((function(t){var n=t.data;return e.setState((function(){return{movie:n}}))})).catch((function(e){return console.log(e)}))},e.componentDidMount=function(){var t=e.props,n=t.imdbID,a=t.movie;return n?e.fetchMovie(n):e.setState((function(){return{movie:a}}))},e.render=function(){var t=e.state.movie,n=t.Genre,o=t.imdbID,r=t.Poster,i=t.Title,c=t.Year,s=e.props,l=s.ifInMyNominations,d=s.ifNominatedByAuthedUser,u=s.nomination,m=s.xtraClassName;return Object(a.jsxs)("div",{className:"bg-white ".concat(null===m||void 0===m?void 0:m.card),children:[r&&"N/A"!==r&&Object(a.jsx)("div",{className:"img-holder",children:Object(a.jsx)("img",{src:r,className:"img-fluid ".concat(null===m||void 0===m?void 0:m.img),alt:i,srcSet:"".concat(r," 4.18x"),width:"100"})}),Object(a.jsxs)("div",{className:null===m||void 0===m?void 0:m.info,children:[Object(a.jsx)("p",{className:"lead text-truncate",children:Object(a.jsx)("strong",{children:i})}),Object(a.jsx)("p",{className:"text-truncate",children:Object(a.jsxs)("span",{className:"badge badge-primary--custom text-white",children:[c," ",e.props.imdbID&&" | ".concat(n)]})}),e.props.imdbID&&Object(a.jsxs)("p",{className:"text-right",children:["by ",d?"me":null===u||void 0===u?void 0:u.userID]}),Object(a.jsx)(I,{ifNominatedByAuthedUser:e.props.imdbID?d:l,ifInMyNominations:l,imdbID:o})]})]})},e}return n}(o.Component);w.defaultProps={ifNominatedByAuthedUser:!1,imdbID:"",movie:{},nomination:{},xtraClassName:{}};var D=Object(c.connect)((function(e,t){var n=e.authedUser,a=e.nominations,o=t.movie,r=t.nomination;return{ifInMyNominations:b(n,null===o||void 0===o?void 0:o.imdbID,a),ifNominatedByAuthedUser:p(n,r)}}))(w),U=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={page:1,results:[],s:"",status:"Type at least 3 characters to trigger a search...",totalResults:0},e.search=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.s;arguments.length>1&&void 0!==arguments[1]||e.state.page;return e.setState({results:[],status:"Loading movie results",totalResults:0},(function(){return y.get("/?apikey=ce4b5ffd",{params:{s:t,page:e.state.page}}).then((function(t){var n=t.data,a=n.Search;return e.setState((function(){return a?{results:a,status:"Type at least 3 characters to trigger a search...",totalResults:n.totalResults}:{status:n.Error}}))})).catch((function(t){return e.setState((function(){return{results:[],status:"Movie not found!",totalResults:0}}),(function(){return console.log(t)}))}))}))},e.setPage=function(t){return e.setState((function(e){var n=e.page;return{page:"prev"===t?n-1:n+1}}),(function(){return e.search()}))},e.render=function(){var t=e.state,n=t.page,o=t.results,r=t.status,i=t.totalResults;return Object(a.jsx)("form",{className:"form-inline form--header flex-grow-1 mr-lg-5",children:Object(a.jsxs)("div",{className:"input-group input-group--custom input--search rounded-pill",children:[Object(a.jsx)("div",{className:"input-group-prepend--custom border-0 py-2",children:Object(a.jsx)("div",{className:"input-group-text bg-transparent border-0 text-primary--custom",children:Object(a.jsx)("i",{className:"fas fa-search"})})}),Object(a.jsx)("input",{type:"search",className:"form-control form-control--custom rounded-pill py-1 dropdown-toggle",placeholder:"Search movie...","aria-label":"Search",id:"dropdownSearchInput","data-toggle":"dropdown","aria-haspopup":"true",onChange:function(t){var n=t.target;return e.setState((function(){return{s:n.value,results:[],status:"Type at least 3 characters to trigger a search..."}}),(function(){return n.value.length>2&&e.search(n.value)}))}}),Object(a.jsx)("ul",{className:"dropdown-menu dropdown-menu-bottom p-4 w-100 rounded","aria-labelledby":"dropdownSearchInput",children:o.length>0?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{className:"dropdown-header px-0 text-uppercase",children:"Related movies"}),o.map((function(e){return Object(a.jsxs)("li",{className:"dropdown-item p-0 mb-3",children:[Object(a.jsx)(D,{movie:e,xtraClassName:{card:"d-flex align-items-start",img:"img-fluid--search ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}",info:"p-3"}}),Object(a.jsx)("div",{className:"dropdown-divider"})]},null===e||void 0===e?void 0:e.imdbID)})),Object(a.jsx)("p",{children:["prev","next"].map((function(t){return("prev"===t&&1!==n||"next"===t&&0!==i&&n<=Math.floor(i/10))&&Object(a.jsx)("button",{className:"btn btn-outline--primary-2 btn-prop ml-auto",type:"button",onClick:function(n){n.stopPropagation(),e.setPage(t)},children:t},t)}))})]}):Object(a.jsx)("li",{className:"dropdown-text px-0",children:r})})]})})},e}return n}(o.Component),S=n.p+"static/media/logo.fd535fbe.png",A=(n(60),function(){return Object(a.jsx)("header",{children:Object(a.jsx)("nav",{className:"navbar navbar-expand navbar-light bg-transparent fixed-top",id:"header",children:Object(a.jsxs)("div",{className:"container d-flex align-items-center",children:[Object(a.jsx)("a",{className:"navbar-brand d-block just-height",href:"/#",children:Object(a.jsx)("img",{src:S,alt:"Shoppies logo",className:"img-fluid",width:"100",loading:"lazy"})}),Object(a.jsx)(U,{}),Object(a.jsx)("ul",{className:"navbar-nav mr-auto ml-auto",children:Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link nav-link--custom",href:"#nominations",children:"Nominations"})})})]})})})}),E=n.p+"static/media/award1.7a972d81.png",M=(n(61),function(){return Object(a.jsxs)("section",{className:"jumbotron jumbotron-fluid bg-primary--custom text-white",children:[Object(a.jsx)("h2",{className:"d-none",children:"Jumbotron"}),Object(a.jsx)("article",{className:"container h-100",children:Object(a.jsxs)("div",{className:"row align-items-center h-100",children:[Object(a.jsxs)("div",{className:"col-12 col-lg-7",children:[Object(a.jsxs)("h3",{className:"jumbo-title",children:["Shoppies"," ",Object(a.jsx)("span",{className:"award-text text-primary--custom--2 font-weight-bold",children:"Award"}),Object(a.jsx)("span",{className:"p-1 p-sm-2 bg-primary--custom--2 just-width just-height d-inline-block"})]}),Object(a.jsx)("p",{className:"lead my-4",children:"We honour the best. Every movie has a story, but a few become epics. These are the ones we honour"})]}),Object(a.jsx)("div",{className:"d-none d-lg-block col-lg offset-lg-1",children:Object(a.jsx)("div",{className:"img-holder pt-xl-5",children:Object(a.jsx)("img",{src:E,className:"img-fluid",alt:"award"})})})]})})]})}),T=(n(62),function(e){var t=e.authedUser,n=e.authedUserNominations,o=e.nominations,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.map((function(e){return Object(a.jsx)("div",{className:"mb-4 nomination ".concat(t),children:Object(a.jsx)(D,{imdbID:null===e||void 0===e?void 0:e.imdbID,nomination:e,xtraClassName:{card:"shadow",img:"w-100",info:"p-2"}})},null===e||void 0===e?void 0:e._id)}))};return Object(a.jsxs)("section",{id:"nominations",children:[Object(a.jsx)("h2",{className:"d-none",children:"Nominations"}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-12 col-lg",children:Object(a.jsxs)("div",{className:"my-3 rounded",children:[Object(a.jsx)("h4",{className:"text-gold font-weight-bold",children:"Recent Nominations"}),Object(a.jsx)("div",{className:"d-flex flex-wrap mt-3 row--nomination",children:r(o)})]})}),t&&Object(a.jsx)("div",{className:"col-12 col-lg-3 col-xl-5",children:Object(a.jsxs)("div",{className:"my-3 rounded",children:[Object(a.jsx)("h4",{className:"text-gold font-weight-bold",children:"Your Nominations"}),Object(a.jsx)("div",{className:"d-flex flex-wrap mt-3 row--nomination",children:r(n,"nomination--yours")})]})})]})})]})});T.defaultProps={authedUser:"",authedUserNominations:[],nominations:[]};var R=Object(c.connect)((function(e){var t=e.authedUser,n=e.nominations;return{authedUser:t,authedUserNominations:j(t,n),nominations:f(n)}}))(T),k=function(){return Object(a.jsx)("footer",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"d-flex shadow bg-white p-3",children:[Object(a.jsx)("div",{className:"flex-grow-1",children:"amjedidiah \xa9 2021"}),Object(a.jsxs)("div",{className:"text-right",children:[Object(a.jsx)("a",{href:"https://github.com/amjedidiah",className:"mr-3 large text-primary--custom-2",children:Object(a.jsx)("span",{"aria-label":"Github",className:"text-primary--custom-2",children:Object(a.jsx)(m.a,{})})}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/am-jedidiah/",className:"mr-3 large text-primary--custom-2",children:Object(a.jsx)("span",{"aria-label":"LinkedIn",className:"text-primary--custom-2",children:Object(a.jsx)(m.b,{})})})]})]})})})},C=n(13),B=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=n.length,o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*a));return t},_=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){return e.props.handleInitialData()},e.render=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(A,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(M,{}),Object(a.jsx)(R,{})]}),Object(a.jsx)(k,{})]})},e}return n}(o.Component),P=Object(c.connect)(null,{handleInitialData:function(){return function(e){return e(Object(C.showLoading)()),e((function(e,t){if(!t().authedUser){var n=B(12);return localStorage.setItem("authedUser",n),{type:"SET_AUTHED_USER",userID:n}}})),x.get("/nominations").then((function(t){var n=t.data;return e(g(n.data))})).catch((function(e){return console.log(e)}))}}})(_),L=(n(66),n(5)),V=function(){var e=arguments.length>1?arguments[1]:void 0;return{SET_AUTHED_USER:e.userID}[e.type]||localStorage.getItem("authedUser")},F=n(4),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{dbNom:[],storeNom:{}},t=arguments.length>1?arguments[1]:void 0;return console.log(t,e),{RECEIVE_NOMINATIONS:Object(F.a)(Object(F.a)({},e),{},{dbNom:t.nominations,storeNom:{}}),SAVE_NOMINATION:Object(F.a)(Object(F.a)({},e),{},{storeNom:{action:t.action,nomination:t.nomination}}),REMOVE_NOMINATION:Object(F.a)(Object(F.a)({},e),{},{storeNom:{action:t.action,nomination:t.nomination}}),RESOLVE_NOMINATIONS:Object(F.a)(Object(F.a)({},e),{},{storeNom:{}})}[t.type]||e},W=Object(L.c)({authedUser:V,loadingBar:C.loadingBarReducer,nominations:J}),G=n(29),H=function(e){return function(t){return function(n){console.group(n.type),console.log("The action: ",n);var a=t(n);return console.log("The new state: ",e.getState()),console.groupEnd(),a}}},Y=Object(L.a)(G.a,H),z=Object(L.d)(W,Y);i.a.render(Object(a.jsx)(c.Provider,{store:z,children:Object(a.jsx)(P,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),s()}},[[67,1,2]]]);
//# sourceMappingURL=main.25ab27fe.chunk.js.map