(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[9],{456:function(t,e,n){"use strict";function c(t,e){if(null==t)return{};var n,c,i=function(t,e){if(null==t)return{};var n,c,i={},a=Object.keys(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(e,"a",(function(){return c}))},457:function(t,e,n){"use strict";var c=n(2),i=n(456),a=n(0),s=n(44),r=function(){return Object(a.g)("section",{id:"footer"},Object(a.g)("div",{class:"content-section"},Object(a.g)("footer",null,Object(a.g)("hr",null),"Developed with ",Object(a.g)("i",{class:"fas fa-heart"})," and"," ",Object(a.g)("i",{class:"fas fa-coffee"})," using"," ",Object(a.g)("a",{href:"https://getbootstrap.com/"},"Bootstrap"),","," ",Object(a.g)("a",{href:"https://reactjs.org/"},"React")," and"," ",Object(a.g)("a",{href:"https://fontawesome.com/"},"Font Awesome"),Object(a.g)("a",{href:"".concat(Object(s.c)(),"/atom.xml"),class:"float-right"},Object(a.g)("i",{class:"fas fa-rss"})," Subscribe via RSS"))))},l=["children","fullWidth"];e.a=function(t){var e=t.children,n=t.fullWidth,s=Object(i.a)(t,l);return s.class=s.class?"container "+s.class:"container",s.style=Object(c.a)(Object(c.a)({},s.style||{}),{},{maxWidth:n?"100%":""}),Object(a.g)("div",Object.assign({},s,{id:"layout"}),e,Object(a.g)(r,null))}},458:function(t,e,n){"use strict";var c=n(95),i=n(96),a=n(100),s=n(99),r=n(0),l=function(){return Object(r.g)("div",{style:{display:"table",width:"100%",height:"100%"}},Object(r.g)("div",{style:{display:"table-cell",verticalAlign:"middle"}},Object(r.g)("div",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",fontWeight:700,color:"white"}},Object(r.g)("div",{class:"fa-4x"},Object(r.g)("i",{class:"fas fa-spinner fa-spin"})))))};e.a=function(t){return function(e){return function(n){Object(a.a)(o,n);var u=Object(s.a)(o);function o(){var t;return Object(c.a)(this,o),(t=u.call(this)).state={loading:!0},t}return Object(i.a)(o,[{key:"componentDidMount",value:function(){var e=this,n=t(this.props);n instanceof Promise?n.then((function(){return e.setState({loading:!1})})):this.setState({loading:!1})}},{key:"render",value:function(t){return this.state.loading?Object(r.g)(l,null):Object(r.g)(e,t)}}]),o}(r.a)}}},464:function(t,e,n){},599:function(t,e,n){"use strict";var c=n(0);n(605);e.a=function(t){var e=t.value,n=t.onInput;return Object(c.g)("div",{class:"search input-group mb-3"},Object(c.g)("div",{class:"input-group-prepend"},Object(c.g)("span",{class:"input-group-text"},Object(c.g)("i",{class:"fas fa-search"}))),Object(c.g)("input",{type:"text",class:"form-control",placeholder:"Search...",value:e,onInput:n,ref:function(t){return t&&t.focus()}}))}},605:function(t,e,n){},606:function(t,e,n){"use strict";var c=n(0);e.a=function(t){var e=t.prefix,n=t.choices,i=t.value,a=t.onClick;return Object(c.g)("div",{class:"dropdown"},Object(c.g)("button",{class:"dropdown-toggle btn btn-block btn-dark",id:"choice"+e},e," ",i),Object(c.g)("div",{class:"dropdown-menu"},n.map((function(t){return Object(c.g)("button",{class:"dropdown-item",onClick:function(){return a(t)}},e," ",t)}))))}},764:function(t,e,n){"use strict";n.r(e);var c=n(4),i=n.n(c),a=n(9),s=n(2),r=n(0),l=n(97),u=n(45),o=n(458),b=n(457),g=(n(464),n(44)),d=function(t){var e=t.displayName,n=t.author,c=t.description,i=t.internalName,a=t.imageUrl,s=t.installed,l=t.count;return Object(r.g)("div",{class:"col-md-4 col-sm-6 col-xs-12 mb-2"},Object(r.g)("div",{class:"card"},Object(r.g)("div",{class:"card-body d-flex align-self-stretch"},Object(r.g)("div",{class:"m-2"},Object(r.g)("img",{width:"36",alt:"",src:a||"/img/plugin-hub/missingicon.png"})),Object(r.g)("div",null,Object(r.g)("h5",{class:"card-title"},Object(r.g)("a",{href:"/plugin-hub/show/".concat(i)},e)),Object(r.g)("h6",{class:"card-subtitle mb-2 text-muted"},Object(r.g)("a",{href:"/plugin-hub/".concat(n)},n)),l>0&&Object(r.g)("p",{class:"card-text"},Object(r.g)("span",{class:"badge badge-primary"},Object(g.e)(l)," ",l>1?"active installs":"active install")," ",s&&Object(r.g)("span",{class:"badge badge-success"},"installed")),Object(r.g)("p",{class:"card-text"},c)))))},f=n(35),O=n.n(f),j=n(158),h=n(20),p=n(163),v=n(599),m=n(98),y=n(606),w="The Plugin Hub is a repository of plugins that are created and maintained by members of the community who are not officially affiliated with RuneLite. These plugins are verified by RuneLite Developers to ensure they comply with Jagex's 3rd party client rules and are not malicious in some other way.",x=function(){var t=Object(a.a)(i.a.mark((function t(e){var n,c,a,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.fetchBootstrap,c=e.fetchConfig,a=e.fetchExternalPlugins,s=e.fetchPluginHubStats,t.next=3,n();case 3:return t.next=5,c();case 5:return t.next=7,a();case 7:return t.next=9,s();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.default=Object(l.b)((function(t,e){return Object(s.a)(Object(s.a)({},e),{},{externalPlugins:Object(p.h)(t),pluginFilter:Object(p.f)(t),pluginSorting:Object(p.g)(t)})}),(function(t){return Object(u.b)({fetchBootstrap:h.b,fetchConfig:m.c,fetchExternalPlugins:p.c,fetchPluginHubStats:p.d,setPluginFilter:p.i,setPluginSorting:p.j},t)}))(Object(o.a)(x)((function(t){var e=t.author,n=t.externalPlugins,c=t.pluginFilter,i=t.pluginSorting,a=t.setPluginFilter,s=t.setPluginSorting,l=(n=n.filter((function(t){return!e||t.author===e}))).length,u=n.filter((function(t){return t.installed})).length,o=n.reduce((function(t,e){return t+e.count}),0),f=["active installs","name","time updated","time added"];return u>0&&f.push("installed"),Object(r.g)(b.a,null,Object(r.g)(j.a,{title:"".concat(e?e+" ":"","Plugin Hub - ").concat(O.a.title),description:w}),Object(r.g)("section",{id:"externalPlugins"},Object(r.g)("div",{class:"content-section"},Object(r.g)("h1",{class:"page-header"},e?e+" ":"","Plugin Hub"),Object(r.g)("div",{class:"row"},Object(r.g)("div",{class:"col-sm-8"},Object(r.g)("p",null,w),Object(r.g)("p",null,"For more information about the Plugin Hub and how to install these plugins, read the"," ",Object(r.g)("a",{href:"https://github.com/runelite/runelite/wiki/Information-about-the-Plugin-Hub"},"guide on our wiki"),".")),Object(r.g)("div",{class:"col-sm-4"},o>0&&Object(r.g)("div",{class:"btn btn-block btn-dark disabled"},Object(r.g)("b",null,Object(g.e)(o))," ",o>1?"active installs":"active install"),l>0&&Object(r.g)("div",{class:"btn btn-block btn-dark disabled"},Object(r.g)("b",null,Object(g.e)(l))," ",l>1?"plugins":"plugin"),u>0&&Object(r.g)("div",{class:"btn btn-block btn-dark disabled"},Object(r.g)("b",null,Object(g.e)(u))," ",u>1?"installed plugins":"installed plugin"))),Object(r.g)("div",{class:"row"},Object(r.g)("div",{class:"col-sm-8"},Object(r.g)(v.a,{value:c.name,onInput:function(t){return function(t,e){return e({name:t.target.value})}(t,a)}})),Object(r.g)("div",{class:"col-sm-4"},Object(r.g)(y.a,{prefix:"Sort by",value:i,choices:f,onClick:s}))),Object(r.g)("div",{class:"row"},n.map((function(t){return Object(r.g)(d,Object.assign({key:t.internalName},t))}))))))})))}}]);
//# sourceMappingURL=9.d8d04ecb.chunk.js.map