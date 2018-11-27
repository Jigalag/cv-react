(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(35)},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(39),s=a(18),c=a.n(s),o=a(19),l=a(40),m=a(37),u=a(36),p=a(5),d=a(6),h=a(8),g=a(7),b=a(9),f=a(38),j=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement(f.a,{href:"#",className:"headerLogo",exact:!0,to:"/react-cv/"},r.a.createElement("img",{src:"/img/logo.png",alt:"Alex.V - Front-End Developer",title:"Alex.V - Front-End Developer"})),r.a.createElement("nav",{className:"headerNavigation"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.a,{href:"#",exact:!0,to:"/react-cv/",activeClassName:"active"},"Home")),r.a.createElement("li",null,r.a.createElement(f.a,{href:"#",to:"/react-cv/about",activeClassName:"active"},"About")),r.a.createElement("li",null,r.a.createElement(f.a,{href:"#",to:"/react-cv/projects",activeClassName:"active",className:"{'active': currentState == 'Project'}"},"Projects")),r.a.createElement("li",null,r.a.createElement(f.a,{href:"#",to:"/react-cv/work",activeClassName:"active"},"Work experience")),r.a.createElement("li",null,r.a.createElement(f.a,{href:"#",to:"/react-cv/contact",activeClassName:"active"},"Contacts"))))))}}]),t}(n.Component),v=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"1")}}]),t}(n.Component),E=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"2")}}]),t}(n.Component);var w=function(e){var t=e.project,a=t.technologies.map(function(e,t){return r.a.createElement("span",{key:t},e)}),n=t.start_date&&r.a.createElement("li",{className:"skill"},r.a.createElement("span",null,"Worked"),r.a.createElement("span",null,t.start_date," - ",t.end_date?t.end_date:"Now")),i=t.web_site&&r.a.createElement("li",{className:"skill"},r.a.createElement("span",null,"Website"),r.a.createElement("span",null,r.a.createElement("a",{href:t.web_site,target:"_blank",rel:"noopener noreferrer"},t.web_site)));return r.a.createElement("div",{className:"container smallContainer"},r.a.createElement("div",{className:"singleProject"},r.a.createElement("img",{src:t.image,alt:t.title}),r.a.createElement("div",{className:"simpleText textLeft floatLeft fullWidth"},r.a.createElement("h2",null,t.title),r.a.createElement("p",null,t.description),r.a.createElement("ul",{className:"skills fullWidth blackList"},r.a.createElement("li",{className:"skill"},r.a.createElement("span",null,"Team Size"),r.a.createElement("span",null,t.team_size)),r.a.createElement("li",{className:"skill"},r.a.createElement("span",null,"Technologies"),a),n,i)),r.a.createElement("div",{className:"textCenter"},r.a.createElement(f.a,{href:"",to:"/projects/",className:"button redButton viewMoreButton"},"View All Projects"))))};var y=function(e){var t=e.project;return r.a.createElement("div",{className:"projectTitle"},t.title)},k=[{id:1,title:"BeinHarim Tours",image:"/img/projects/beinharim.jpg",description:"Bein Harim Tourism Services LTD is a leading Israeli government licensed travel service, specializing in the planning, organization and conducting of custom-made guided tours. Our company employs highly experienced government licensed tour guides. It offers tours in an extensive range of languages and all its vehicles are approved by the Ministry of Tourism to afford customers top comfort sightseeing.",team_size:10,technologies:["AngularJS","Codeigniter","MySQL","PHP","Grunt","HTML","CSS","SASS","JS"],start_date:"Jan 2018",end_date:"",web_site:"https://www.beinharimtours.com/"},{id:2,title:"RealConnex",image:"/img/projects/realconnex.jpg",description:"Where real estate professionals network, build business, connect to services, find opportunities and source capital. Get connected with RealConnex today!",team_size:10,technologies:["AngularJS","Grunt","Webpack","TypeScipt","HTML","CSS","LESS","JS"],start_date:"May 2016",end_date:"Jan 2018",web_site:"https://realconnex.com/"},{id:3,title:"Business Networking",image:"/img/projects/business.jpg",description:"The Business Networking Team app allows you to network smarter, increase your exposure, and generate more referrals for your business. This simple to use tool makes communication easy with your networking team, and allows you to build lasting relationships that can help grow your business. ",team_size:8,technologies:["AngularJS","JS","HTML","CSS","LESS","jQuery"],start_date:"December 2015",end_date:"May 2016",web_site:"http://www.businessnetworkingteam.com/#!/"},{id:4,title:"Expressible",image:"/img/projects/expressible.jpg",description:"EXPRESSIBLE, INC. has created a unique content marketing solution. Expressible is a content hub that provides a \u201cone-stop-shop\u201d for the discovery, formatting, publishing and distribution of fresh and relevant content across multiple distribution channels.",team_size:6,technologies:["HTML","CSS","LESS","jQuery","JS"],start_date:"",end_date:"",web_site:"http://www.expressible.com/"},{id:11,title:"Planck",image:"/img/projects/plank.jpg",description:"Who is next to you? Advanced GPS search Algorithm that finds a new friends within 2 mile radius, become friend and share information by coming up to a person... Technology will not allow you to share information till both people clicks to share.",team_size:5,technologies:["TypeScript","Ionic","HTML5","CSS","jQuery"],start_date:"",end_date:"",web_site:"http://www.letsplanck.com/"},{id:6,title:"Bagman",image:"/img/projects/bagman.jpg",description:"The BagMan store is a place where everyone knows about bags and backpacks, messengers and duffle bags, about waist bags and dapacks, travel bags and hand luggage. We have selected the best assortment of convenient and beautiful city assistants. It is assistants, because a good backpack, like a true friend - he is always there, and with him comfortable.",team_size:3,technologies:["HTML","CSS","jQuery"],start_date:"",end_date:"",web_site:"https://bagman.ua/"},{id:9,title:"Welcome Walks",image:"/img/projects/welcomewalks.jpg",description:"Discover your next adventure with Welcome Walks - digital walking tours for the modern traveler. Our custom-designed tours give you the freedom to explore a destination on your own time schedule at your own pace. Listen on your smartphone. Welcome Walks tours are distinguished by historical discoveries, art and architecture, popular culture and local food information. Each walking tour showcases local scenery and provides fresh air and a fun way to exercise.",team_size:4,technologies:["TypeScript","Ionic","HTML5","CSS","jQuery"],start_date:"",end_date:"",web_site:"http://welcomewalksusa.com/"},{id:10,title:"HOMEBERRY VILLAS",image:"/img/projects/homeberry.jpg",description:"PHomeberry Villas redefines luxury short-term rentals. Online website to rent or buy villas online in United States.",team_size:3,technologies:["HTML5","CSS3","LESS","jQuery","JS"],start_date:"",end_date:"",web_site:"http://www.homeberryvillas.com/"}],S=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).isList=e.isList,a.project=e.project,a.projectId=1*(a.props.match&&a.props.match.params?a.props.match.params:0).id,a.project||0===a.projectId||(a.project=k.find(function(e){return e.id===a.projectId})),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.isList?r.a.createElement(y,{project:this.project}):r.a.createElement(w,{project:this.project})}}]),t}(n.Component),_=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=k.map(function(e){return r.a.createElement(f.a,{href:"#",to:"/projects/"+e.id,key:e.id,className:"project",style:{backgroundImage:"url(".concat(e.image,")")}},r.a.createElement(S,{project:e,isList:!0}))});return r.a.createElement("div",{className:"projectBlock projectMain"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Projects")),e)}}]),t}(n.Component);a(31),a(33);var O=function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement("section",{className:"mainWrapper"},r.a.createElement(l.a,null,r.a.createElement(m.a,{exact:!0,from:"/",to:"/react-cv/"}),r.a.createElement(u.a,{exact:!0,path:"/react-cv/",component:v}),r.a.createElement(u.a,{path:"/react-cv/about",component:E}),r.a.createElement(u.a,{exact:!0,path:"/react-cv/projects",component:_}),r.a.createElement(u.a,{path:"/react-cv/projects/:id",component:S}))))},N=c()();Object(o.render)(r.a.createElement(i.a,{history:N},r.a.createElement(O,null)),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.a5571a8b.chunk.js.map