(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},165:function(e,t){},168:function(e,t,a){},169:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(18),c=a.n(r),s=a(98),i=a(25),o=a(15),u=a(6),m=a(19),d=a.n(m),p={createUser:function(e){return d()({method:"post",headers:{"content-type":"application/json"},url:"http://localhost:7001/user",data:e})},login:function(e){return d()({method:"post",headers:{"content-type":"application/json"},url:"http://localhost:7001/api/login",data:e})},logout:function(){return d.a.get("/logout")},userGreeting:function(e){return d()({method:"post",headers:{"content-type":"application/json"},url:"http://localhost:7001/api/user",data:e})},budget:function(e){return d()({method:"post",headers:{"content-type":"application/json"},url:"http://localhost:7001/setBudget",data:e})},bills:function(e){return d()({method:"post",headers:{"content-type":"application/json"},url:"http://localhost:7001/setBills",data:e})},addBills:function(e){return d()({method:"post",headers:{"content-type":"application/json"},url:"http://localhost:7001/addBills",data:e})},recentBills:function(e){return d()({method:"post",headers:{"content-type":"application/json"},url:"http://localhost:7001/recentBills",data:e})},getLeaders:function(){return d()({method:"post",headers:{"content-type":"application/json"},url:"http://localhost:7001/getleaders"})}},f=a(12),b=a.n(f),E={isAuthenticated:!1,authenticate:function(e){E.isAuthenticated=!0,setTimeout(e,100)},signout:function(e){E.isAuthenticated=!1,b.a.remove("userId",{path:""}),b.a.remove("userUn",{path:""}),b.a.remove("userPw",{path:""}),setTimeout(e,100)}},h=E,g=a(8),j=(a(31),a(195)),v=a(196),O=a(197),N=a(215),y=a(30),S=a.n(y);a(120);var w=Object(g.b)(function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),o=Object(u.a)(s,2),m=o[0],d=o[1],f=b.a.get("userUn"),E=b.a.get("userPw"),g=Object(i.g)(),y=b.a.get("url");Object(n.useEffect)(function(){f&&E&&p.login({username:f,password:E}).then(function(t){t&&e.setGlobalState({user:t.data})}).then(function(){h.authenticate(function(){g.replace(y)})}).catch(function(e){if(e)throw e})},[]);var w=Object(n.useState)({text:"",there:!1,type:""}),k=Object(u.a)(w,2),x=k[0],C=k[1];return l.a.createElement("div",{className:"main-body"},l.a.createElement(j.a,{className:"loginForm",onSubmit:function(t){t.preventDefault(),p.login({username:r,password:m}).then(function(t){t&&e.setGlobalState({user:t.data})}).then(function(){b.a.set("userUn",r,{path:""}),b.a.set("userPw",m,{path:""})}).then(function(){h.authenticate(function(){g.replace("/member")})}).catch(function(e){e&&C({text:"Uh oh! Email or Password is Incorrect!",there:!0,type:"danger"})})}},l.a.createElement("h1",{className:"h3"},l.a.createElement("img",{className:"logo",src:S.a})),l.a.createElement(v.a,{className:"form-group"},l.a.createElement(O.a,{className:"form-control username-input",type:"text",placeholder:"Username",name:"username",id:"username",required:!0,onChange:function(e){return c(e.target.value)}}),l.a.createElement(O.a,{className:"form-control password-input",type:"password",placeholder:"Password",id:"password",name:"password",required:!0,onChange:function(e){return d(e.target.value)}}),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",className:"log-btn"},"Log In")),l.a.createElement(N.a,{color:x.type,style:{opacity:x.there?1:0}},x.text)),l.a.createElement("div",{className:"signup-div"},l.a.createElement("a",{className:"signUp",href:"/signup"},"Sign up"),l.a.createElement("a",{className:"github-link",target:"_blank",href:"https://github.com/Phoenix4721/penny-pinchers-v2"},"Github"))))}),k=a(27);a(132);var x=Object(g.b)(function(){var e,t,a=Object(n.useState)(""),r=Object(u.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),m=o[0],d=o[1],f=Object(n.useState)(""),b=Object(u.a)(f,2),E=b[0],h=b[1],g=Object(n.useState)(""),y=Object(u.a)(g,2),w=y[0],x=y[1],C=Object(n.useState)(""),B=Object(u.a)(C,2),U=B[0],T=B[1],I=Object(n.useState)(0),P=Object(u.a)(I,2),G=P[0],A=P[1],D=Object(n.useState)(""),L=Object(u.a)(D,2),M=L[0],q=L[1],F=Object(n.useState)({text:"",there:!1,type:""}),W=Object(u.a)(F,2),$=W[0],H=W[1],Y=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;return l.a.createElement("body",{className:"main-body"},l.a.createElement(j.a,{className:"loginForm signUpForm",id:"create-course-form",onSubmit:function(e){e.preventDefault(),c.match(Y)?E.length<5?H({text:"Password must be more than 5 characters!",there:!0,type:"danger"}):E===w?p.createUser({username:m,email:c,password:E}).then(function(e){if("user"===e.data)H({text:"Uh oh! This username is taken!",there:!0,type:"danger"});else if("email"===e.data)H({text:"Uh oh! This email is already in use!",there:!0,type:"danger"});else{if("userCreated"!==e.data)return;H({text:"Welcome! Go back to login and login!",there:!0,type:"success"}),document.getElementById("create-course-form").reset(),T(0)}}):H({text:"Password don't match! Make sure they do!",there:!0,type:"danger"}):H({text:"Uh oh! Invalid Email Address!",there:!0,type:"danger"})}},l.a.createElement("h1",{className:"h3"},l.a.createElement("img",{className:"logo",src:S.a})),l.a.createElement(v.a,{className:"form-group"},l.a.createElement(O.a,{className:"form-control email-input",id:"email",type:"email",placeholder:"Email",name:"email",required:!0,onChange:function(e){return s(e.target.value)}}),l.a.createElement(O.a,{className:"form-control username-input",id:"username",type:"text",placeholder:"Username",name:"username",required:!0,onChange:function(e){return d(e.target.value)}}),l.a.createElement(O.a,(e={className:"form-control password-input",id:"password",type:"password",placeholder:"Password",name:"password"},Object(k.a)(e,"id","password-input"),Object(k.a)(e,"required",!0),Object(k.a)(e,"onChange",function(e){var t;h(e.target.value),T(e.target.value.length),t=e.target.value.length,A(10*t),G>=0&&q("red"),G>=40&&q("yellow"),G>=70&&q("green")}),e)),l.a.createElement(O.a,(t={className:"form-control passwordCon-input",id:"passwordCon",type:"password",placeholder:"Confirm Password"},Object(k.a)(t,"id","passwordCon-input"),Object(k.a)(t,"name","confirm password"),Object(k.a)(t,"required",!0),Object(k.a)(t,"onChange",function(e){return x(e.target.value)}),t)),l.a.createElement("div",{class:"progressBar",style:{opacity:U>0?1:0}},l.a.createElement("div",{class:"progress",style:{opacity:U>0?1:0,width:"".concat(G,"%"),backgroundColor:"".concat(M)}})),l.a.createElement("button",{type:"submit",className:"subBut log-btn"},"Sign Up"),l.a.createElement(N.a,{color:$.type,style:{opacity:$.there?1:0}},$.text)),l.a.createElement("div",{className:"signup-div"},l.a.createElement("a",{className:"signUp",href:"/"},"Log in"),l.a.createElement("a",{className:"github-link",target:"_blank",href:"https://github.com/Phoenix4721/penny-pinchers-v2"},"Github"))))}),C=(a(133),a(201)),B=a(202),U=a(198),T=a(199),I=a(200),P=a(203),G=a(204);a(134),a(135);var A=function(){var e=Object(i.g)();return h.isAuthenticated?l.a.createElement("p",null,l.a.createElement("a",{className:" list-group-item list-group-item-action logout-btn",onClick:function(){h.signout(function(){return e.push("/")})}},l.a.createElement("div",{class:"d-flex w-100 justify-content-start align-items-center"},l.a.createElement("span",{class:"fa fa-sign-out fa-fw mr-3"}),l.a.createElement("span",{class:"menu-collapsed"},"Log out")))):void 0},D=(a(136),a(37)),L=a.n(D),M=a(97),q=(a(168),a(38)),F=a(39),W=a(43),$=a(40),H=a(44),Y=(a(169),function(e){function t(){var e,a;Object(q.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(W.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(l)))).onClick=function(){var e=a.props,t=e.label;(0,e.onClick)(t)},a}return Object(H.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.onClick,t=this.props,a=t.activeTab,n=t.label,r="tab-list-item";return a===n&&(r+=" tab-list-active"),l.a.createElement("li",{className:r,onClick:e},n)}}]),t}(n.Component)),z=(n.Component,L()("http://localhost:7001"));var J=Object(g.b)(function(e){var t=Object(n.useState)(z.id),a=Object(u.a)(t,2),r=a[0],c=(a[1],Object(n.useState)("")),s=Object(u.a)(c,2),i=(s[0],s[1]),o=Object(n.useState)(""),m=Object(u.a)(o,2),d=m[0],p=m[1],f=Object(n.useState)([]),b=Object(u.a)(f,2),E=b[0],h=b[1];return Object(n.useEffect)(function(){z.emit("log-user-info",{username:e.globalState.user.username,socket:z.id}),console.log("logging user "+z.id)},[]),Object(n.useEffect)(function(){z.on("update-chat",function(e){i(e[0].socket)})},[]),Object(n.useEffect)(function(){z.on("send-chat-to-client",function(e){console.log(e),h(function(t){return[].concat(Object(M.a)(t),[e])})})},[]),l.a.createElement("div",{className:"chat-main",style:e.style},l.a.createElement("div",{label:"Chat",className:"chatty"},e.icon,l.a.createElement("h3",{className:"chatUser"},e.name),l.a.createElement("div",{className:"messages"},l.a.createElement("ul",{className:"message"},E.map(function(e){return l.a.createElement("li",null,e)}))),l.a.createElement("input",{className:"msg",value:d,name:"message",placeholder:"Chat",onChange:function(e){p(e.target.value)}}),l.a.createElement("button",{className:"sendMsg",onClick:function(){return console.log("remote = "+e.sock),z.emit("send-chat-to-server",{message:d,remoteUser:e.sock,localUser:r}),void p("")}},"Send")))}),_=L()("http://localhost:7001");var R=Object(g.b)(function(e){var t=Object(n.useState)(_.id),a=Object(u.a)(t,2),r=a[0],c=(a[1],Object(n.useState)("")),s=Object(u.a)(c,2),i=s[0],o=s[1],m=Object(n.useState)([]),d=Object(u.a)(m,2),p=d[0],f=d[1],b=Object(n.useState)(!1),E=Object(u.a)(b,2),h=E[0],g=E[1],j=Object(n.useState)(""),v=Object(u.a)(j,2),O=v[0],N=v[1];return Object(n.useEffect)(function(){setInterval(function(){_.emit("request-friends-list")},1e3)},[]),_.on("send-friends-list",function(e){f(e)}),l.a.createElement("div",{className:"chatApp"},l.a.createElement("div",{className:"onOff",style:h?{visibility:"hidden"}:{visibility:"visible"}},l.a.createElement("div",{className:"online"},l.a.createElement("h4",{className:"onlineHead"},"Online"),l.a.createElement("ul",null,p.map(function(e){return e.socket?l.a.createElement("li",{key:e.userId,className:"friendList",onClick:function(){return t=e.username,a=e.socket,N(t),o(a),_.emit("switch-chat",{localUser:r,remoteUser:t}),void g(!0);var t,a}},e.username):void 0}))),l.a.createElement("div",{className:"offline"},l.a.createElement("h4",{className:"onlineHead"},"Offline"),l.a.createElement("ul",null,p.map(function(e){return e.socket?void 0:l.a.createElement("li",{key:e.userId,className:"friendListOff"},e.username)})))),l.a.createElement(J,{sock:i,localUser:r,name:O,icon:l.a.createElement("i",{class:"fa fa-arrow-left back","aria-hidden":"true",onClick:function(){g(!1)}}),style:h?{visibility:"visible"}:{visibility:"hidden"}}))});var K=function(){var e=Object(i.g)(),t=function(t){h.authenticate(function(){e.replace(t)})},a=Object(n.useState)(!1),r=Object(u.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(!1),m=Object(u.a)(o,2),d=m[0],p=m[1];return Object(n.useEffect)(function(){window.innerWidth>768&&s(!0)}),l.a.createElement("div",null,l.a.createElement("div",{className:"mainWrapper"},l.a.createElement("div",{className:"row",id:"body-row"},l.a.createElement("div",{id:"sidebar-container",className:"sidebar-expanded  d-md-block"},l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed"},l.a.createElement("small",null,"MAIN MENU")),l.a.createElement("a",{onClick:function(){t("/member")},"data-toggle":"collapse","aria-expanded":"false",className:"hii  list-group-item list-group-item-action flex-column align-items-start"},l.a.createElement("div",{className:"d-flex w-100 justify-content-start align-items-center"},l.a.createElement("span",{className:"fa fa-home fa-fw mr-3"}),l.a.createElement("span",{className:"menu-collapsed"},"Home"))),l.a.createElement("a",{onClick:function(){t("/setBudget")},"data-toggle":"collapse","aria-expanded":"false",className:"hii  list-group-item list-group-item-action flex-column align-items-start"},l.a.createElement("div",{className:"d-flex w-100 justify-content-start align-items-center"},l.a.createElement("span",{className:"fa fa-usd fa-fw mr-3"}),l.a.createElement("span",{className:"menu-collapsed"},"Budget"))),l.a.createElement("a",{onClick:function(){t("/setBills")},"data-toggle":"collapse","aria-expanded":"false",className:"hii  list-group-item list-group-item-action flex-column align-items-start"},l.a.createElement("div",{className:"d-flex w-100 justify-content-start align-items-center"},l.a.createElement("span",{className:"fa fa-money fa-fw mr-3"}),l.a.createElement("span",{className:"menu-collapsed"},"Bills"))),l.a.createElement("a",{onClick:function(){t("/leaderboard")},className:"hii list-group-item list-group-item-action"},l.a.createElement("div",{className:"d-flex w-100 justify-content-start align-items-center"},l.a.createElement("span",{className:"fa fa-tasks fa-fw mr-3"}),l.a.createElement("span",{className:"menu-collapsed"},"Leaderboard"))),l.a.createElement("li",{className:"list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed"},l.a.createElement("small",null,"OPTIONS")),l.a.createElement("a",{onClick:function(){t("/progress")},className:"hii list-group-item list-group-item-action"},l.a.createElement("div",{className:"d-flex w-100 justify-content-start align-items-center"},l.a.createElement("span",{className:"fa fa-dashboard fa-fw mr-3"}),l.a.createElement("span",{className:"menu-collapsed"},"Progress"))),l.a.createElement("li",{className:"list-group-item sidebar-separator menu-collapsed"}),l.a.createElement(A,null))))),l.a.createElement("div",{className:"hiii"},l.a.createElement(U.a,{className:"toggleMe",onClick:function(){s(!c),p(!d)}},l.a.createElement("i",{class:"fa fa-users","aria-hidden":"true"}),l.a.createElement("span",{className:"friends"}," Friends")),l.a.createElement(T.a,{isOpen:c},l.a.createElement(I.a,{className:"mr-auto",navbar:!0},l.a.createElement(R,null)))))};var Q=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(u.a)(c,2),o=s[0],m=s[1],d=Object(i.g)(),p=function(e){h.authenticate(function(){d.replace(e)})};return l.a.createElement("div",null,l.a.createElement(C.a,{expand:"md"},l.a.createElement(B.a,{onClick:function(){p("/member")},className:"hii"},"Penny Pinchers"),l.a.createElement(U.a,{onClick:function(){r(!a),m(!o)}},l.a.createElement("span",null,l.a.createElement("i",{class:"fa fa-angle-down","aria-hidden":"true"}))),o?l.a.createElement(T.a,{isOpen:a,navbar:!0},l.a.createElement(I.a,{className:"mdr-auto",navbar:!0},l.a.createElement(P.a,null,l.a.createElement(G.a,{onClick:function(){p("/setBudget")}},"Budgets")),l.a.createElement(P.a,null,l.a.createElement(G.a,{onClick:function(){p("/setBills")}},"Bills")),l.a.createElement(P.a,null,l.a.createElement(G.a,{onClick:function(){p("/leaderboard")}},"Leader Board")),l.a.createElement(P.a,null,l.a.createElement(G.a,{onClick:function(){p("/progress")}},"Progress")),l.a.createElement(P.a,null,l.a.createElement(G.a,null,l.a.createElement(A,null))))):void 0),o?l.a.createElement("div",null):l.a.createElement(K,null))},V=a(205),X=a(206),Z=a(207),ee=a(208),te=a(209);var ae=Object(g.b)(function(e){console.log(e);var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1],s=e.globalState.user.userId;return Object(n.useEffect)(function(){p.recentBills({userId:s}).then(function(e){c(e.data)})},[]),l.a.createElement("div",null,r.map(function(e){return l.a.createElement(V.a,{className:"bills-row"},l.a.createElement(X.a,{sm:"12"},l.a.createElement(Z.a,{body:!0,className:"body"},l.a.createElement(ee.a,{className:"title"},e.billType),l.a.createElement(ee.a,{className:"title"},"$",e.billAmount),l.a.createElement(ee.a,{className:"title"},e.date),l.a.createElement(te.a,{className:"text"},e.billDescription))))}))});var ne=Object(g.b)(function(e){b.a.set("url","/member",{path:""});var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(),i=Object(u.a)(s,2),o=i[0];return i[1],Object(n.useEffect)(function(){p.userGreeting({id:e.globalState.user.userId}).then(function(e){c(e.data[0].username)})},[]),l.a.createElement("div",{className:"main-body"},l.a.createElement(Q,null),l.a.createElement("div",{className:"member-div"},l.a.createElement("p",{className:"main-div"},"Welcome, ",r,"!",l.a.createElement("span",{className:"name"}))),l.a.createElement("div",{className:"bills-div"},l.a.createElement("div",{className:"bills-span"},l.a.createElement("h1",{className:"recent-header"},"Your Recent Bills")),l.a.createElement(ae,{notes:o})))}),le=a(216),re=a(210),ce=a(211),se=a(212),ie=a(213),oe=a(214),ue=a(217),me=a(92),de=Object(g.b)(function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),o=i[0],m=i[1],d=Object(n.useState)(!1),f=Object(u.a)(d,2),b=f[0],E=f[1],h=Object(n.useState)(""),g=Object(u.a)(h,2),v=g[0],N=g[1],y=o.replace(/ /g,"");function S(e){m(e),E(!0)}return l.a.createElement(j.a,null,l.a.createElement(le.a,{isOpen:r,toggle:function(){return c(!r)}},l.a.createElement(re.a,{caret:!0},b?o:"Set Your Budgets"),l.a.createElement(ce.a,null,l.a.createElement(se.a,{onClick:function(){return S("Groceries Budget")}},"Grocery "),l.a.createElement(se.a,{onClick:function(){return S("Transportation Budget")}},"Transportation "),l.a.createElement(se.a,{onClick:function(){return S("Dining Budget")}},"Dining "),l.a.createElement(se.a,{onClick:function(){return S("Shopping Budget")}},"Shopping "))),b?l.a.createElement(V.a,{form:!0,className:"justify-content-md-center"},l.a.createElement(X.a,{md:6},l.a.createElement(ie.a,{for:"exampleNumber"}),l.a.createElement(oe.a,null,l.a.createElement(ue.a,{addonType:"prepend"},"$"),l.a.createElement(O.a,{name:y,placeholder:"Enter the amount",min:0,max:1e3,type:"number",step:"1",value:v,onChange:function(e){return function(e){N(Number(e.target.value))}(e)}}),l.a.createElement(ue.a,{addonType:"append"},".00")),l.a.createElement(me.a,{id:"submit",color:"secondary",size:"sm",onClick:function(){return console.log(v),p.budget({val:y,budget:v,user:e.globalState.user.userId}),void N("")},method:"user",className:"right"},"Add Budget"))):void 0)}),pe=a(42),fe=a.n(pe);var be=function(){return Object(i.g)(),b.a.set("url","/setBudget",{path:""}),l.a.createElement("div",{className:"main-body"},l.a.createElement("div",null,l.a.createElement(Q,null),l.a.createElement(j.a,null,l.a.createElement(de,null))),l.a.createElement("img",{className:"logo",style:{marginTop:"160px"},src:fe.a}))},Ee=(a(184),Object(g.b)(function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),o=i[0],m=i[1],d=Object(n.useState)(!1),f=Object(u.a)(d,2),b=f[0],E=f[1],h=Object(n.useState)(""),g=Object(u.a)(h,2),v=g[0],N=g[1],y=Object(n.useState)(""),S=Object(u.a)(y,2),w=S[0],k=S[1],x=o.toLowerCase();function C(e){m(e),E(!0)}function B(){console.log(v),p.bills({val:x,bill:v,user:e.globalState.user.userId}),N(""),p.addBills({billType:o,billAmount:v,billDesc:w,date:new Date(Date.now()).toLocaleString().split(",")[0],userId:e.globalState.user.userId}),k("")}return l.a.createElement(j.a,null,l.a.createElement(le.a,{isOpen:r,toggle:function(){return c(!r)}},l.a.createElement(re.a,{caret:!0},b?o:"Set Your Bills"),l.a.createElement(ce.a,null,l.a.createElement(se.a,{onClick:function(){return C("Groceries")}},"Grocery"),l.a.createElement(se.a,{onClick:function(){return C("Transportation")}},"Transportation"),l.a.createElement(se.a,{onClick:function(){return C("Dining")}},"Dining"),l.a.createElement(se.a,{onClick:function(){return C("Shopping")}},"Shopping"))),b?l.a.createElement("div",null,l.a.createElement(V.a,{form:!0,className:"justify-content-md-center"},l.a.createElement(X.a,{md:6},l.a.createElement(ie.a,{for:"exampleNumber"}),l.a.createElement(oe.a,null,l.a.createElement(ue.a,{addonType:"prepend"},"$"),l.a.createElement(O.a,{name:x,placeholder:"Enter the amount",min:0,max:1e3,type:"number",step:"1",value:v,onChange:function(e){return function(e){N(Number(e.target.value))}(e)}}),l.a.createElement(ue.a,{addonType:"append"},".00")),l.a.createElement("div",null,l.a.createElement("textarea",{style:{width:"300px",height:"60px"},value:w,onChange:function(e){return function(e){k(e.target.value)}(e)}})),l.a.createElement(me.a,{color:"secondary",size:"sm",onClick:function(){return B()},method:"user",className:"right"},"Add Bill")))):void 0)}));var he=Object(g.b)(function(){return Object(i.g)(),b.a.set("url","/setBills",{path:""}),l.a.createElement("div",{className:"main-body"},l.a.createElement("div",null,l.a.createElement(Q,null),l.a.createElement(j.a,null,l.a.createElement(Ee,null)),l.a.createElement("img",{className:"logo",style:{marginTop:"160px"},src:fe.a})))});a(185);var ge=Object(g.b)(function(e){var t=[],a=Object(n.useState)([]),r=Object(u.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)(function(){p.getLeaders().then(function(e){e.data.map(function(e){e.score=function(e,t){var a=(e-t)/e;return NaN==Math.floor(100*a)||Math.floor(100*a)==1/0?0:Math.floor(100*a)}(e.allBudgets,e.allBills),t.push(e)}),s(t.sort(function(e,t){return t.score-e.score}))})},[]),l.a.createElement("div",{className:"leader-body"},l.a.createElement(Q,null),l.a.createElement("h2",null,l.a.createElement("img",{className:"leader-logo",src:S.a})),l.a.createElement(Z.a,{body:!0,className:"text-left card-div"},l.a.createElement(ee.a,{className:"leader-title"},"Leaderboard")),c.map(function(e){return l.a.createElement("div",{className:"card-div"},l.a.createElement(Z.a,{body:!0,className:"text-left card-body"},l.a.createElement(ee.a,{className:"card-title"},e.username),l.a.createElement(te.a,{className:"card-text"},"Score: ",e.score)))}))}),je=a(33);a(189);var ve=function(e){return console.log(e),l.a.createElement("div",null,l.a.createElement("h2",null,"Percentage of Budget Used"),l.a.createElement("br",null),l.a.createElement("h4",null,"Groceries"),l.a.createElement(je.f,{className:"percent",material:!0,value:e.groc,height:"60px",animated:!0},Math.round(e.groc)," %"),l.a.createElement("br",null),l.a.createElement("h4",null,"Transportation"),l.a.createElement(je.f,{className:"percent",material:!0,value:e.trans,height:"60px",animated:!0},Math.round(e.trans)," %")," ",l.a.createElement("br",null),l.a.createElement("h4",null,"Dining"),l.a.createElement(je.f,{className:"percent",material:!0,value:e.dine,height:"60px",animated:!0},Math.round(e.dine)," %")," ",l.a.createElement("br",null),l.a.createElement("h4",null,"Shopping"),l.a.createElement(je.f,{className:"percent",material:!0,value:e.shop,height:"60px",animated:!0},Math.round(e.shop)," %"),l.a.createElement("br",null))};var Oe=Object(g.b)(function(e){b.a.set("url","/member",{path:""});var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=(a[0],a[1]),c=Object(n.useState)(0),s=Object(u.a)(c,2),i=s[0],o=s[1],m=Object(n.useState)(0),d=Object(u.a)(m,2),f=d[0],E=d[1],h=Object(n.useState)(0),g=Object(u.a)(h,2),j=g[0],v=g[1],O=Object(n.useState)(0),N=Object(u.a)(O,2),y=N[0],S=N[1];return Object(n.useEffect)(function(){p.userGreeting({id:e.globalState.user.userId}).then(function(e){o(e.data[0].groceries/e.data[0].GroceriesBudget*100),E(e.data[0].transportation/e.data[0].TransportationBudget*100),v(e.data[0].dining/e.data[0].DiningBudget*100),S(e.data[0].shopping/e.data[0].ShoppingBudget*100),r(e.data[0].username)})},[]),l.a.createElement("div",{className:"main-body"},l.a.createElement(Q,null),l.a.createElement(ve,{groc:i,trans:f,dine:j,shop:y}))});var Ne=function(){function e(e){var t=e.children,a=Object(s.a)(e,["children"]);return l.a.createElement(i.b,Object.assign({},a,{render:function(e){var a=e.location;return h.isAuthenticated?t:l.a.createElement(i.a,{to:{pathname:"/login",state:{from:a}}})}}))}return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/"},l.a.createElement(w,null)),l.a.createElement(i.b,{path:"/login"},l.a.createElement(w,null)),l.a.createElement(i.b,{path:"/signup"},l.a.createElement(x,null)),l.a.createElement(e,{path:"/member"},l.a.createElement(ne,null)),l.a.createElement(e,{path:"/setBudget"},l.a.createElement(be,null)),l.a.createElement(e,{path:"/setBills"},l.a.createElement(he,null)),l.a.createElement(e,{path:"/leaderboard"},l.a.createElement(ge,null)),l.a.createElement(e,{path:"/progress"},l.a.createElement(Oe,null)))))};c.a.render(l.a.createElement(g.a,{globalState:{id:""}},l.a.createElement(Ne,null)),document.getElementById("root"))},30:function(e,t,a){e.exports=a.p+"static/media/logo2.3ae4114a.png"},42:function(e,t,a){e.exports=a.p+"static/media/white-logo.c481eac3.png"},99:function(e,t,a){e.exports=a(190)}},[[99,1,2]]]);
//# sourceMappingURL=main.d35f9836.chunk.js.map