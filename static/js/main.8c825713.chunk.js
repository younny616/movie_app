(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{59:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(0),i=s.n(n),r=s(29),c=s.n(r),o=s(9),l=s(2),m=s(17),j=s.n(m),u=s(30),d=s(11),v=s(12),b=s(14),h=s(13),p=s(31),O=s.n(p),x=s(5),_=s.n(x);s(59);function y(e){var t=e.id,s=e.year,n=e.title,i=e.summary,r=e.poster,c=e.genres;return Object(a.jsx)("div",{className:"movie",children:Object(a.jsxs)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:n,summary:i,poster:r,genres:c}},children:[Object(a.jsx)("img",{src:r,alt:n}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:n}),Object(a.jsx)("h5",{className:"movie__year",children:s}),Object(a.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(a.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie__summary",children:[i.slice(0,140),"..."]})]})]})})}y.prototype={id:_.a.number.isRequired,year:_.a.number.isRequired,title:_.a.string.isRequired,summary:_.a.string.isRequired,poster:_.a.string.isRequired,genres:_.a.arrayOf(_.a.string).isRequired};var f=y,g=(s(63),function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(j.a.mark((function t(){var s,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(i.a.Component));s(64);var N=function(e){return console.log(e),Object(a.jsxs)("div",{className:"about__container",children:[Object(a.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(a.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},w=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(v.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/"),console.log(t.state)}},{key:"render",value:function(){var e=this.props.location;return Object(a.jsx)("div",{className:"movies",children:Object(a.jsx)("div",{className:"movie movie__detail",children:Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:e.state.title}),Object(a.jsx)("h5",{className:"movie__year",children:e.state.year}),Object(a.jsx)("p",{className:"movie__summary",children:e.state.summary})]})})})}}]),s}(i.a.Component);s(65);var k=function(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(o.b,{to:"/",children:"Home"}),Object(a.jsx)(o.b,{to:"/about",children:"About"})]})};s(66);var q=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(k,{}),Object(a.jsx)(l.a,{path:"/",exact:!0,component:g}),Object(a.jsx)(l.a,{path:"/about",component:N}),Object(a.jsx)(l.a,{path:"/movie/:id",component:w})]})};c.a.render(Object(a.jsx)(q,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.8c825713.chunk.js.map