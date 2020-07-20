(this["webpackJsonpterrybior-client"]=this["webpackJsonpterrybior-client"]||[]).push([[0],{14:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return d})),n.d(t,"i",(function(){return b}));var r=n(8),a=function(){return{type:r.a.GOOGLE_SIGN_IN_START}},c=function(e){return{type:r.a.EMAIL_SIGN_IN_START,payload:e}},i=function(e){return{type:r.a.SIGN_IN_SUCCESS,payload:e}},o=function(e){return{type:r.a.SIGN_IN_FAILURE,payload:e}},u=function(){return{type:r.a.CHECK_USER_SESSION}},s=function(){return{type:r.a.SIGN_OUT_START}},l=function(){return{type:r.a.SIGN_OUT_SUCCESS}},f=function(e){return{type:r.a.SIGN_OUT_FAILURE}},p=function(e){return{type:r.a.SIGN_UP_START,payload:e}},d=function(e){var t=e.user,n=e.additionalData;return{type:r.a.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},b=function(e){return{type:r.a.SIGN_UP_FAILURE,payload:r.a.SIGN_UP_FAILURE}}},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={SHOW_DROP_DOWN:"SHOW_DROP_DOWN",ADD_CART_ITEM:"ADD_CART_ITEM",REMOVE_CART_ITEM:"REMOVE_CART_ITEM",REDUCE_CART_ITEM:"REDUCE_CART_ITEM",CLEAR_CART:"CLEAR_CART"}},20:function(e,t,n){"use strict";t.a={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAIL:"FETCH_COLLECTIONS_FAIL"}},27:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n(17),a=function(){return{type:r.a.SHOW_DROP_DOWN}},c=function(e){return{type:r.a.ADD_CART_ITEM,payload:e}},i=function(e){return{type:r.a.REMOVE_CART_ITEM,payload:e}},o=function(e){return{type:r.a.REDUCE_CART_ITEM,payload:e}},u=function(){return{type:r.a.CLEAR_CART}}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u}));var r=n(13),a=function(e){return e.cart},c=Object(r.a)([a],(function(e){return e.cartItems})),i=Object(r.a)([c],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),o=Object(r.a)([c],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),u=Object(r.a)([a],(function(e){return e.showCartDropdown}))},39:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(20),a=function(){return{type:r.a.FETCH_COLLECTIONS_START}},c=function(e){return{type:r.a.FETCH_COLLECTIONS_SUCCESS,payload:e}},i=function(e){return{type:r.a.FETCH_COLLECTIONS_FAIL,payload:e}}},45:function(e,t,n){"use strict";var r=n(44),a=n(0),c=n.n(a),i=n(10),o=n(11);function u(){var e=Object(i.a)(["\n    min-width: 165px;\n    width: auto;\n    background-color: black;\n    color: white;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    text-transform: uppercase;\n    font-family: 'OPen Sans Condensed';\n    font-weight: bolder;\n    cursor: pointer;\n    border: 1px solid transparent;\n    outline: none;\n    display: flex;\n    justify-content: center;\n\n    ","\n"]);return u=function(){return e},e}function s(){var e=Object(i.a)(["\n    background-color: #4285f4;\n\n    &:hover {\n        background-color: white;\n        color: #4285f4;\n        border: 1px solid #4285f4;\n    }\n"]);return s=function(){return e},e}function l(){var e=Object(i.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n\n    &:hover {\n        background-color: black;\n        color: white;\n        border: 1px solid black;\n"]);return l=function(){return e},e}function f(){var e=Object(i.a)(["\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n    }\n"]);return f=function(){return e},e}var p=Object(o.b)(f()),d=Object(o.b)(l()),b=Object(o.b)(s()),m=o.c.button(u(),(function(e){return e.isGoogleSignIn?b:e.inverted?d:p}));t.a=function(e){var t=e.children,n=Object(r.a)(e,["children"]);return c.a.createElement(m,n,t)}},46:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(10),i=n(11);function o(){var e=Object(c.a)(["\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    border: 3px solid rgba(195, 195, 195, 0.6);\n    border-radius: 50%;\n    border-top-color: #636767;\n    animation: spin 1s ease-in-out infinite;\n    -webkit-animation: spin 1s ease-in-out infinite;\n\n    @keyframes spin {\n        to {\n            -webkit-transform: rotate(360deg);\n        }\n    }\n\n    @-webkit-keyframes spin {\n        to {\n            -webkit-transform: rotate(360deg);\n        }\n    }\n"]);return o=function(){return e},e}function u(){var e=Object(c.a)(["\n    height: 60vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n"]);return u=function(){return e},e}var s=i.c.div(u()),l=i.c.div(o());t.a=function(){return a.a.createElement(s,null,a.a.createElement(l,null))}},66:function(e,t,n){e.exports=n(89)},8:function(e,t,n){"use strict";t.a={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"}},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(33),i=n.n(c),o=n(22),u=n(19),s=n(54),l=n(15),f=n(35),p=(n(75),n(64)),d=n(55),b=n.n(d),m=n(9),O=n(8),E={currentUser:null,error:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.a.SIGN_IN_SUCCESS:return Object(m.a)({},e,{currentUser:t.payload,error:null});case O.a.SIGN_OUT_SUCCESS:return Object(m.a)({},e,{currentUser:null,error:null});case O.a.SIGN_UP_FAILURE:case O.a.SIGN_IN_FAILURE:case O.a.SIGN_OUT_FAILURE:return Object(m.a)({},e,{currentUser:null,error:t.payload});default:return e}},v=n(17),S=n(63),g=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(m.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(S.a)(e),[Object(m.a)({},t,{quantity:1})])},_=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(m.a)({},e,{quantity:e.quantity-1}):e}))},j={showCartDropdown:!1,cartItems:[]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.a.SHOW_DROP_DOWN:return Object(m.a)({},e,{showCartDropdown:!e.showCartDropdown});case v.a.ADD_CART_ITEM:return Object(m.a)({},e,{cartItems:g(e.cartItems,t.payload)});case v.a.REMOVE_CART_ITEM:return Object(m.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case v.a.REDUCE_CART_ITEM:return Object(m.a)({},e,{cartItems:_(e.cartItems,t.payload)});case v.a.CLEAR_CART:return Object(m.a)({},e,{cartItems:[]});default:return e}},C={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},w=n(20),I={collections:null,isFetching:!1,errorMessage:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.a.FETCH_COLLECTIONS_START:return Object(m.a)({},e,{isFetching:!0});case w.a.FETCH_COLLECTIONS_SUCCESS:return Object(m.a)({},e,{isFetching:!1,collections:t.payload});case w.a.FETCH_COLLECTIONS_FAIL:return Object(m.a)({},e,{isFetching:!1,errorMessage:t.payload});default:return e}},N={key:"root",storage:b.a,whitelist:["cart"]},k=Object(l.c)({user:h,cart:x,directory:y,shop:T}),U=Object(f.a)(N,k),R=n(3),A=n.n(R),L=n(5),G=n(37),P=n(30),D=n.n(P);n(79),n(82);D.a.initializeApp({apiKey:"AIzaSyAytW_SLrENoWP6MmcW0sIjFPRMLGdNn1c",authDomain:"terrybior-71fb6.firebaseapp.com",databaseURL:"https://terrybior-71fb6.firebaseio.com",projectId:"terrybior-71fb6",storageBucket:"terrybior-71fb6.appspot.com",messagingSenderId:"781974696527",appId:"1:781974696527:web:48c91e7fc0ec4f9dd8703a",measurementId:"G-1Z9NZQVNR8"});var F=D.a.auth(),H=D.a.firestore(),M=new D.a.auth.GoogleAuthProvider;M.setCustomParameters({prompt:"select_account"});var W=function(){var e=Object(G.a)(A.a.mark((function e(t,n){var r,a,c,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=H.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(m.a)({displayName:a,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),z=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{id:e.id,routeName:encodeURI(n.toLowerCase()),title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},q=(D.a,n(39)),V=A.a.mark(J),B=A.a.mark(Q),K=A.a.mark(Z);function J(){var e,t,n;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=H.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(L.b)(z,t);case 7:return n=r.sent,r.next=10,Object(L.c)(Object(q.c)(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(L.c)(Object(q.a)(r.t0.message));case 16:case"end":return r.stop()}}),V,null,[[0,12]])}function Q(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(w.a.FETCH_COLLECTIONS_START,J);case 2:case"end":return e.stop()}}),B)}function Z(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.b)(Q)]);case 2:case"end":return e.stop()}}),K)}var $=n(14),Y=A.a.mark(pe),X=A.a.mark(de),ee=A.a.mark(be),te=A.a.mark(me),ne=A.a.mark(Oe),re=A.a.mark(Ee),ae=A.a.mark(he),ce=A.a.mark(ve),ie=A.a.mark(Se),oe=A.a.mark(ge),ue=A.a.mark(_e),se=A.a.mark(je),le=A.a.mark(xe),fe=A.a.mark(Ce);function pe(e,t){var n,r;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(L.b)(W,e,t);case 3:return n=a.sent,a.next=6,n.get();case 6:return r=a.sent,a.next=9,Object(L.c)(Object($.e)(Object(m.a)({id:r.id},r.data())));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),a.next=15,Object(L.c)(Object($.d)(a.t0));case 15:case"end":return a.stop()}}),Y,null,[[0,11]])}function de(){var e,t;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F.signInWithPopup(M);case 3:return e=n.sent,t=e.user,n.next=7,pe(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(L.c)(Object($.d)(n.t0));case 13:case"end":return n.stop()}}),X,null,[[0,9]])}function be(e){var t,n,r,a,c;return A.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,F.signInWithEmailAndPassword(n,r);case 4:return a=i.sent,c=a.user,i.next=8,pe(c);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(L.c)(Object($.d)(i.t0));case 14:case"end":return i.stop()}}),ee,null,[[1,10]])}function me(){var e;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=F.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,pe(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(L.c)(Object($.d)(t.t0));case 14:case"end":return t.stop()}}),te,null,[[0,10]])}function Oe(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.signOut();case 3:return e.next=5,Object(L.c)(Object($.h)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(L.c)(Object($.f)(e.t0));case 11:case"end":return e.stop()}}),ne,null,[[0,7]])}function Ee(e){var t,n,r,a,c,i;return A.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.displayName,r=t.email,a=t.password,o.prev=1,o.next=4,F.createUserWithEmailAndPassword(r,a);case 4:return c=o.sent,i=c.user,o.next=8,Object(L.c)(Object($.k)({user:i,additionalData:{displayName:n}}));case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(L.c)(Object($.i)(o.t0));case 14:case"end":return o.stop()}}),re,null,[[1,10]])}function he(e){var t,n,r;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,a.prev=1,a.next=4,pe(n,r);case 4:a.next=10;break;case 6:return a.prev=6,a.t0=a.catch(1),a.next=10,Object(L.c)(Object($.i)(a.t0));case 10:case"end":return a.stop()}}),ae,null,[[1,6]])}function ve(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(O.a.GOOGLE_SIGN_IN_START,de);case 2:case"end":return e.stop()}}),ce)}function Se(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(O.a.EMAIL_SIGN_IN_START,be);case 2:case"end":return e.stop()}}),ie)}function ge(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(O.a.CHECK_USER_SESSION,me);case 2:case"end":return e.stop()}}),oe)}function _e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(O.a.SIGN_OUT_START,Oe);case 2:case"end":return e.stop()}}),ue)}function je(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(O.a.SIGN_UP_START,Ee);case 2:case"end":return e.stop()}}),se)}function xe(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(O.a.SIGN_UP_SUCCESS,he);case 2:case"end":return e.stop()}}),le)}function Ce(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.b)(ge),Object(L.b)(ve),Object(L.b)(Se),Object(L.b)(_e),Object(L.b)(je),Object(L.b)(xe)]);case 2:case"end":return e.stop()}}),fe)}var ye=n(27),we=A.a.mark(Ne),Ie=A.a.mark(ke),Te=A.a.mark(Ue);function Ne(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.c)(Object(ye.b)());case 2:case"end":return e.stop()}}),we)}function ke(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(O.a.SIGN_OUT_SUCCESS,Ne);case 2:case"end":return e.stop()}}),Ie)}function Ue(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.b)(ke)]);case 2:case"end":return e.stop()}}),Te)}var Re=A.a.mark(Ae);function Ae(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.b)(Z),Object(L.b)(Ce),Object(L.b)(Ue)]);case 2:case"end":return e.stop()}}),Re)}var Le=Object(p.a)(),Ge=[Le];var Pe=Object(l.e)(U,l.a.apply(void 0,Ge));Le.run(Ae);var De=Object(f.b)(Pe),Fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function He(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(84);var Me=n(24),We=n(13),ze=n(10),qe=n(11);function Ve(){var e=Object(ze.a)(["\n    body {\n        font-family: 'Open Sans Condensed';\n        padding: 20px 40px;\n\n        @media screen and (max-width: 800px) {\n            padding: 10px;\n        }\n    }\n    \n    a {\n        text-decoration: none;\n        color: black;\n    }\n    \n    * {\n        box-sizing: border-box;\n    }\n"]);return Ve=function(){return e},e}var Be=Object(qe.a)(Ve());function Ke(){return(Ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Je(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Qe=a.a.createElement("title",null,"Group"),Ze=a.a.createElement("desc",null,"Created with Sketch."),$e=a.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Ye=function(e){var t=e.svgRef,n=e.title,r=Je(e,["svgRef","title"]);return a.a.createElement("svg",Ke({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},r),void 0===n?Qe:n?a.a.createElement("title",null,n):null,Ze,$e)},Xe=a.a.forwardRef((function(e,t){return a.a.createElement(Ye,Ke({svgRef:t},e))}));n.p;function et(){return(et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function tt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var nt=a.a.createElement("g",null),rt=a.a.createElement("g",null),at=a.a.createElement("g",null),ct=a.a.createElement("g",null),it=a.a.createElement("g",null),ot=a.a.createElement("g",null),ut=a.a.createElement("g",null),st=a.a.createElement("g",null),lt=a.a.createElement("g",null),ft=a.a.createElement("g",null),pt=a.a.createElement("g",null),dt=a.a.createElement("g",null),bt=a.a.createElement("g",null),mt=a.a.createElement("g",null),Ot=a.a.createElement("g",null),Et=function(e){var t=e.svgRef,n=e.title,r=tt(e,["svgRef","title"]);return a.a.createElement("svg",et({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},r),n?a.a.createElement("title",null,n):null,a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),nt,rt,at,ct,it,ot,ut,st,lt,ft,pt,dt,bt,mt,Ot)},ht=a.a.forwardRef((function(e,t){return a.a.createElement(Et,et({svgRef:t},e))})),vt=(n.p,n(29)),St=(n(85),Object(We.b)({itemCount:vt.b})),gt=Object(u.b)(St,(function(e){return{toggleCartDropdown:function(){return e(Object(ye.e)())}}}))((function(e){var t=e.toggleCartDropdown,n=e.itemCount;return a.a.createElement("div",{className:"cart-icon",onClick:function(){return t()}},a.a.createElement(ht,{className:"shopping-icon"}),a.a.createElement("span",{className:"item-count"},n))})),_t=n(45),jt=(n(86),a.a.memo((function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,i=t.quantity;return a.a.createElement("div",{className:"cart-item"},a.a.createElement("img",{src:n,alt:c}),a.a.createElement("div",{className:"item-details"},a.a.createElement("span",{className:"name"},c),a.a.createElement("span",{className:"price"},i," x $",r)))}))),xt=(n(87),Object(We.b)({cartItems:vt.a})),Ct=a.a.memo(Object(Me.g)(Object(u.b)(xt)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return a.a.createElement("div",{className:"cart-dropdown"},a.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e,t){return a.a.createElement(jt,{key:t,item:e})})):a.a.createElement("span",{className:"empty-message"},"Your cart is empty")),a.a.createElement(_t.a,{onClick:function(){n.push("/checkout"),r(Object(ye.e)())}},"GO TO CHECKOUT"))})))),yt=Object(We.a)([function(e){return e.user}],(function(e){return e.currentUser}));function wt(){var e=Object(ze.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n"]);return wt=function(){return e},e}function It(){var e=Object(ze.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n\n    @media screen and (max-width: 800px) {\n        width: 80%;\n    }\n"]);return It=function(){return e},e}function Tt(){var e=Object(ze.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 25px 0;\n\n    @media screen and (max-width: 800px) {\n        width: 50px;\n        padding: 0;\n    }\n"]);return Tt=function(){return e},e}function Nt(){var e=Object(ze.a)(["\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n\n    @media screen and (max-width: 800px) {\n        height: 60px;\n        padding: 10px;\n        margin-bottom: 20px;\n    }\n"]);return Nt=function(){return e},e}var kt=qe.c.div(Nt()),Ut=Object(qe.c)(o.b)(Tt()),Rt=qe.c.div(It()),At=Object(qe.c)(o.b)(wt()),Lt=Object(We.b)({currentUser:yt,showCartDropdown:vt.d}),Gt=Object(u.b)(Lt,(function(e){return{signOutStart:function(){return e(Object($.g)())}}}))((function(e){var t=e.currentUser,n=e.showCartDropdown,r=e.signOutStart;return a.a.createElement(kt,null,a.a.createElement(Ut,{to:"/"},a.a.createElement(Xe,{className:"logo"})),a.a.createElement(Rt,null,a.a.createElement(At,{to:"/shop"},"SHOP"),a.a.createElement(At,{to:"/contact"},"CONTACT"),t?a.a.createElement(At,{as:"div",onClick:r},"SIGN OUT"):a.a.createElement(o.b,{to:"/signin"},"SIGN IN"),a.a.createElement(gt,null)),n?a.a.createElement(Ct,null):null)})),Pt=n(46),Dt=n(60),Ft=n(61),Ht=n(62),Mt=n(65);function Wt(){var e=Object(ze.a)(["\n    font-size: 25px;\n    color: #2f8e89;\n"]);return Wt=function(){return e},e}function zt(){var e=Object(ze.a)(["\n    display: inline-block;\n    background-image: ",";\n    background-size: cover;\n    background-position: center;\n    width: 40vh;\n    height: 40vh;\n"]);return zt=function(){return e},e}function qt(){var e=Object(ze.a)(["\n    height: 60vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return qt=function(){return e},e}var Vt=qe.c.div(qt()),Bt=qe.c.div(zt(),(function(e){var t=e.imageUrl;return"url(".concat(t,")")})),Kt=qe.c.h2(Wt()),Jt=function(e){Object(Mt.a)(n,e);var t=Object(Ht.a)(n);function n(){var e;return Object(Dt.a)(this,n),(e=t.call(this)).state={hasErrored:!1},e}return Object(Ft.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return this.state.hasErrored?a.a.createElement(Vt,null,a.a.createElement(Bt,{imageUrl:"https://i.imgur.com/yW2W9SC.png"}),a.a.createElement(Kt,null,"Sorry this page is broken")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasErrored:!0}}}]),n}(a.a.Component),Qt=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,135))})),Zt=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,133))})),$t=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(7)]).then(n.bind(null,136))})),Yt=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,134))})),Xt=Object(We.b)({currentUser:yt}),en=Object(u.b)(Xt,(function(e){return{checkUserSession:function(){return e(Object($.a)())}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(r.useEffect)((function(){t()}),[t]),a.a.createElement("div",null,a.a.createElement(Be,null),a.a.createElement(Gt,null),a.a.createElement(Me.d,null,a.a.createElement(Jt,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(Pt.a,null)},a.a.createElement(Me.b,{exact:!0,path:"/",component:Qt}),a.a.createElement(Me.b,{path:"/shop",component:Zt}),a.a.createElement(Me.b,{exact:!0,path:"/checkout",component:$t}),a.a.createElement(Me.b,{exact:!0,path:"/signin",render:function(){return n?a.a.createElement(Me.a,{to:"/"}):a.a.createElement(Yt,null)}})))))}));i.a.render(a.a.createElement(u.a,{store:Pe},a.a.createElement(o.a,null,a.a.createElement(s.a,{persistor:De},a.a.createElement(en,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):He(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):He(t,e)}))}}()}},[[66,1,2]]]);
//# sourceMappingURL=main.1555c2aa.chunk.js.map