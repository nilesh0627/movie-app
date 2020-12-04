(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),i=c.n(a),s=c(7),r=c.n(s),o=(c(15),c(9)),l=c(6),j=c.n(l),u=c(8),d=c(4),h=(c(17),function(e){var t=e.favouriteComponent;return Object(n.jsx)(n.Fragment,{children:0!==e.movies.length?e.movies.map((function(c,a){return Object(n.jsxs)("div",{className:"image-container d-flex justify-content-start m-2",children:[Object(n.jsx)("img",{src:c.Poster,alt:c.Title}),Object(n.jsx)("div",{onClick:function(){return e.handleFavouritesClick(c)},className:"overlay",children:Object(n.jsx)(t,{})})]},c.imdbID)})):Object(n.jsx)("div",{className:"text-center",children:"No Movies to show"})})}),m=function(e){return Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("h1",{children:e.heading})})},v=function(e){return Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{className:"form-control",type:"text",placeholder:"Type to Search",value:e.searchValue,onChange:function(t){return e.setSearchValue(t.target.value)}})})},b=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:"mr-2",children:"Add To Favorites"}),Object(n.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-heart-fill",fill:"red",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})},f=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:"mr-2",children:"Remove From Favorite"}),Object(n.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-x-circle-fill",fill:"red",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})})]})};var x=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)(""),r=Object(d.a)(s,2),l=r[0],x=r[1],O=Object(a.useState)([]),p=Object(d.a)(O,2),g=p[0],w=p[1],N=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://www.omdbapi.com/?s=".concat(t,"&apikey=263d22d8"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:(s=e.sent).Search&&i(s.Search),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){localStorage.setItem("react-movie-app-favourites",JSON.stringify(e))};return Object(a.useEffect)((function(){N(l)}),[l]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-favourites"));e&&w(e)}),[]),Object(n.jsxs)("div",{className:"container-fluid movie-app",children:[Object(n.jsxs)("div",{className:"row d-flex align-items-center my-2",children:[Object(n.jsx)(m,{heading:"Movies"}),Object(n.jsx)(v,{searchValue:l,setSearchValue:x})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(h,{handleFavouritesClick:function(e){var t=[].concat(Object(o.a)(g),[e]);w(t),F(t)},movies:c,favouriteComponent:b})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(m,{heading:"Favorites"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(h,{handleFavouritesClick:function(e){var t=g.filter((function(t){return t.imdbID!==e.imdbID}));w(t),F(t)},movies:g,favouriteComponent:f})})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.ba214cdc.chunk.js.map