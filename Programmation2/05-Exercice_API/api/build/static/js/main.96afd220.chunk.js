(this.webpackJsonpbottin=this.webpackJsonpbottin||[]).push([[0],{103:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),o=t.n(l),c=(t(85),t(86),t(9)),i=t(10),m=t(11),s=t(12),d=t(39),p=t(23),u=t(8),h=t(106),g=t(61),E=t(40),f=t(28),b=t.n(f),v=t(109),y=t(105),x=function(){return!!b.a.get("loggedIn")},w=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleConnexion=n.handleConnexion.bind(Object(E.a)(n)),n}return Object(i.a)(t,[{key:"handleConnexion",value:function(){var e=this.props.history,a=document.getElementById("userEmail").value,t=document.getElementById("userPassword").value;"user@a.com"===a.toLowerCase()&&"a"===t&&(!0,b.a.set("loggedIn",!0),e.push("/home"))}},{key:"render",value:function(){return x()?r.a.createElement(p.a,{to:"/home"}):r.a.createElement(j,null,r.a.createElement(v.a,null,r.a.createElement("fieldset",null,r.a.createElement(v.a.Group,{controlId:"userEmail"},r.a.createElement(v.a.Label,null,"Email",r.a.createElement("span",{className:"input-required"}," *")),r.a.createElement(v.a.Control,{type:"email",placeholder:"email@user.com",required:!0})),r.a.createElement(v.a.Group,{controlId:"userPassword"},r.a.createElement(v.a.Label,null,"Mot de passe",r.a.createElement("span",{className:"input-required"}," *")),r.a.createElement(v.a.Control,{type:"password",placeholder:"Mot de passe",required:!0})),r.a.createElement(v.a.Control.Feedback,null,"Votre adresse et mot de passe sont incorrects.")),r.a.createElement(y.a,{variant:"primary",type:"submit",block:!0,onClick:this.handleConnexion},"Connexion")))}}]),t}(n.PureComponent),N=Object(p.g)(w),j=u.a.div.withConfig({displayName:"login-form__Wrapper",componentId:"sc-1bjuj0o-0"})([""]),C=t(42),O=t.n(C),k=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(I,null,r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement(h.a,{noGutters:!0},r.a.createElement(g.a,{sm:6},r.a.createElement("div",{className:"content-left"},r.a.createElement("img",{src:O.a,alt:"logo",className:"img-fluid"}))),r.a.createElement(g.a,{sm:6},r.a.createElement("div",{className:"content-right"},r.a.createElement("h1",null,"Connexion"),r.a.createElement(N,null),r.a.createElement("div",{className:"form-link-wrapper"},r.a.createElement("a",{href:"/",className:"primary-link"},"Mot de passe oubli\xe9?"))))))))}}]),t}(n.PureComponent),I=u.a.div.withConfig({displayName:"LoginScreen__Wrapper",componentId:"sc-1qvoeis-0"})(["background-color:#19172e;height:100vh;.auth-wrapper{width:100%;height:100%;display:flex;align-items:center;margin:0 auto;padding-right:15px;padding-left:15px;}.auth-inner{width:100%;max-width:760px;margin:0 auto;border-radius:7.5px;overflow:hidden;}.content-left{display:flex;align-items:center;justify-content:center;height:100%;text-align:center;background-color:#272447;img{height:200px;}}.content-right{padding:50px;background:#ffffff;form{margin-bottom:15px;}.form-link-wrapper{text-align:center;}}@media (max-width:991.98px){.content-left img{height:150px;}}@media (max-width:575.98px){.auth-wrapper{padding-top:30px;align-items:flex-start;}.content-right h1{text-align:center;}.content-left{padding:15px;img{height:auto;max-width:100%}}}"]),_=t(65),q=t.n(_),P=t(110),L=t(111),W=t(78),B=t(108),S=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(A,null,r.a.createElement(v.a,null,r.a.createElement("fieldset",null,r.a.createElement(h.a,null,r.a.createElement(g.a,{sm:6},r.a.createElement(v.a.Group,{controlId:"newName"},r.a.createElement(v.a.Label,null,"Pr\xe9nom & Nom",r.a.createElement("span",{className:"input-required"}," *")),r.a.createElement(v.a.Control,{type:"text",placeholder:"Pr\xe9nom Nom",name:"name",required:!0})),r.a.createElement(v.a.Group,{controlId:"newEmail"},r.a.createElement(v.a.Label,null,"Email",r.a.createElement("span",{className:"input-required"}," *")),r.a.createElement(v.a.Control,{type:"email",placeholder:"email@user.com",name:"email",required:!0}))),r.a.createElement(g.a,{sm:6},r.a.createElement(v.a.Group,{controlId:"newOccupation"},r.a.createElement(v.a.Label,null,"Poste Occup\xe9",r.a.createElement("span",{className:"input-required"}," *")),r.a.createElement(v.a.Control,{type:"text",placeholder:"Poste",name:"occupation",required:!0})),r.a.createElement(v.a.Group,{controlId:"newPhone"},r.a.createElement(v.a.Label,null,"Num\xe9ro de t\xe9l\xe9phone",r.a.createElement("span",{className:"input-required"}," *")),r.a.createElement(v.a.Control,{type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",placeholder:"514-555-5555",name:"phone",required:!0}))),r.a.createElement(g.a,{xs:12},r.a.createElement(v.a.Group,{controlId:"newAddress"},r.a.createElement(v.a.Label,null,"Adresse",r.a.createElement("span",{className:"input-required"}," *")),r.a.createElement(v.a.Control,{type:"text",placeholder:"Adresse",name:"address",required:!0})))),r.a.createElement(v.a.Control.Feedback,null,"Ce champ est invalide.")),r.a.createElement("div",{className:"form-btn-container"},r.a.createElement(y.a,{variant:"primary",type:"submit"},"Ajouter"))))}}]),t}(n.PureComponent),A=u.a.div.withConfig({displayName:"addEmployeeForm__Wrapper",componentId:"sc-1h431rd-0"})([".form-btn-container{text-align:right;}"]),D=t(66),G=t.n(D);function F(e){return r.a.createElement("div",null,r.a.createElement(B.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(J,null,r.a.createElement(B.a.Header,{closeButton:!0},r.a.createElement(B.a.Title,{id:"contained-modal-title-vcenter"},"Ajouter un nouveau contact \xe0 l'annuaire")),r.a.createElement(B.a.Body,null,r.a.createElement(S,null)))))}var M=function(){var e=r.a.useState(!1),a=Object(W.a)(e,2),t=a[0],n=a[1];return r.a.createElement(z,null,r.a.createElement(y.a,{variant:"icon",className:"nav-link",onClick:function(){return n(!0)}},r.a.createElement("img",{src:G.a,alt:"add",className:"img-fluid"})),r.a.createElement(F,{show:t,onHide:function(){return n(!1)}}))},z=u.a.div.withConfig({displayName:"addEmployeeModal__Wrapper",componentId:"so3bpz-0"})([""]),J=u.a.div.withConfig({displayName:"addEmployeeModal__ModalWrapper",componentId:"so3bpz-1"})([".modal-header{position:relative;align-items:center;justify-content:center;background:#272447;color:#ffffff;.h4{margin-bottom:0;}.close{position:absolute;right:0;margin:0;color:#ffffff;text-shadow:none;opacity:1;}}.modal-body{padding:50px;}"]),H=function(e){return function(){b.a.remove("loggedIn"),e.push("/")}},T=Object(p.g)((function(e){var a=e.history;return x()?r.a.createElement(V,null,r.a.createElement(P.a,{expand:"lg"},r.a.createElement(P.a.Brand,{href:"/"},r.a.createElement("img",{src:O.a,alt:"logo",className:"img-fluid"})),r.a.createElement(L.a,null,r.a.createElement(M,null),r.a.createElement(L.a.Link,{onClick:H(a)},r.a.createElement("img",{src:q.a,alt:"logout",className:"img-fluid"}))))):r.a.createElement(p.a,{to:"/"})})),V=u.a.div.withConfig({displayName:"Navigation__Wrapper",componentId:"p2yfaz-0"})([".navbar{display:flex;flex-direction:column;align-items:center;padding:0;.navbar-brand{margin-bottom:50px;margin-right:0;}.navbar-nav{display:flex;flex-direction:column;width:100%;padding:0;border-bottom:0.5px solid rgba(255,255,255,0.5);}.nav-link{display:flex;align-items:center;justify-content:center;width:100%;height:80px;transition:all .2s ease;&:hover{background:#19172e;}}}"]),R=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement($,null,r.a.createElement("div",{className:"navigation-wrapper"},r.a.createElement(T,null)),r.a.createElement("div",{className:"page-content"},this.props.children))}}]),t}(n.PureComponent),$=u.a.div.withConfig({displayName:"BaseScreen__Wrapper",componentId:"xt4686-0"})(["position:relative;display:flex;.navigation-wrapper{position:fixed;height:100%;background:#272447;width:100%;max-width:100px;}"]),K=t(112),Q=t(113),U=t(74),X=t.n(U),Y=t(75),Z=t.n(Y),ee=t(76),ae=t.n(ee),te=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.title,n=e.email,l=e.telephone,o=e.address;return r.a.createElement(ne,{className:"col"},r.a.createElement(K.a,{className:"employee-card-single"},r.a.createElement("div",{className:"employee-card-single-img"}),r.a.createElement(K.a.Body,null,r.a.createElement("div",{className:"employee-info"},r.a.createElement(K.a.Title,null,a),r.a.createElement(K.a.Subtitle,null,t)),r.a.createElement(Q.a,{variant:"flush"},r.a.createElement(Q.a.Item,null,r.a.createElement("img",{src:X.a,alt:"search",className:"img-fluid"}),r.a.createElement("a",{href:"mailto:".concat(this.props.email)},n)),r.a.createElement(Q.a.Item,null,r.a.createElement("img",{src:Z.a,alt:"search",className:"img-fluid"}),r.a.createElement("a",{href:"tel:+".concat(this.props.telephone)},l)),r.a.createElement(Q.a.Item,null,r.a.createElement("img",{src:ae.a,alt:"search",className:"img-fluid"}),o)))))}}]),t}(n.PureComponent),ne=u.a.div.withConfig({displayName:"EmployeeCardSingle__Wrapper",componentId:"sc-118scz4-0"})(["margin-bottom:30px;.employee-card-single{height:100%;border-radius:7.5px;border:none;box-shadow:4px 4px 8px rgba(0,0,0,0.15);overflow:hidden;.card-body{padding:0;}}.employee-info{padding:.75rem 1.25rem;.h5{margin-bottom:10px;}.h6{margin-bottom:0;}.card-subtitle{color:#9a9a9a;text-transform:uppercase;font-size:12px;}}.list-group-item{display:flex;align-items:center;border:none;border-top:1px solid rgba(0,0,0,.125);&:first-child{border-top:1px solid rgba(0,0,0,.125);}img{margin-right:8px;}}.employee-card-single-img{display:block;height:150px;width:100%;background:#cccccc;}"]),re=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(le,{className:"row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3  row-cols-xl-5"},r.a.createElement(te,{color:"#eeeeee",name:"Shany Carl",title:"Enseignant en Informatique",email:"shany@random.com",telephone:"418-666-6666",address:"1234, rue Thiers"}),r.a.createElement(te,{color:"#cccccc",name:"Francisca Vargas",title:"Developpeur Front-End",email:"francisca@random.com",telephone:"+514-555-5555",address:"1234, rue St-Denis"}),r.a.createElement(te,{color:"#9a9a9a",name:"Julien Laplanche",title:"Developpeur Back-End",email:"julien@random.com",telephone:"+514-444-4444",address:"1234, rue St-Catherine"}),r.a.createElement(te,{color:"#9a9a9a",name:"Jane Doe",title:"Developpeur Front-End",email:"jane@random.com",telephone:"+514-333-3333",address:"1234, rue Papineau"}),r.a.createElement(te,{color:"#9a9a9a",name:"Bob Doe",title:"Developpeur Full-Stack",email:"bob@random.com",telephone:"+514-222-2222",address:"1234, rue Laurier"}),r.a.createElement(te,{color:"#9a9a9a",name:"Jody Doe",title:"Charg\xe9 de projet",email:"jody@random.com",telephone:"+514-111-1111",address:"1234, rue Chabot"}))}}]),t}(n.PureComponent),le=u.a.div.withConfig({displayName:"EmployeeCardList__Wrapper",componentId:"cq5f74-0"})(["align-items:stretch;"]),oe=t(107),ce=t(60),ie=t(77),me=t.n(ie),se=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(R,null,r.a.createElement(de,{className:"directory"},r.a.createElement("div",{className:"directory-header"},r.a.createElement("h1",null,"Annuaire Employ\xe9s"),r.a.createElement(v.a,{inline:!0},r.a.createElement(oe.a,{className:"mb-0 input-search"},r.a.createElement(ce.a,{type:"text",placeholder:"Rechercher",className:""}),r.a.createElement(oe.a.Append,null,r.a.createElement(y.a,{variant:"primary",type:"submit"},r.a.createElement("img",{src:me.a,alt:"search",className:"img-fluid"})))))),r.a.createElement(re,null),r.a.createElement(M,null)))}}]),t}(n.PureComponent),de=u.a.div.withConfig({displayName:"HomepageScreen__Wrapper",componentId:"us0x3q-0"})(["margin:0 auto;padding-right:15px;padding-left:15px;.directory-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:30px;h1{margin-bottom:0;}}"]),pe=function(e){return r.a.createElement(d.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,component:k}),r.a.createElement(p.b,{path:"/home",exact:!0,component:se})))},ue=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(pe,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,a,t){e.exports=t.p+"static/media/logo-random.2b74f4c1.svg"},65:function(e,a,t){e.exports=t.p+"static/media/icn-logout.6ed5768b.svg"},66:function(e,a,t){e.exports=t.p+"static/media/icn-plus.0f7ddb0e.svg"},74:function(e,a,t){e.exports=t.p+"static/media/icn-email.80573950.svg"},75:function(e,a,t){e.exports=t.p+"static/media/icn-phone.cd9f3e79.svg"},76:function(e,a,t){e.exports=t.p+"static/media/icn-home.adb80bec.svg"},77:function(e,a,t){e.exports=t.p+"static/media/icn-search.f44287b3.svg"},80:function(e,a,t){e.exports=t(103)},86:function(e,a,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.96afd220.chunk.js.map