(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),s=n(6),i=n(5),l=n.n(i),u=n(9),d=n(1),m=n(2),p=n(4),f=n(3),h=(n(16),n(17),"https://mate-api.herokuapp.com");function v(){return fetch("".concat(h,"/todos/")).then((function(e){return e.json()}))}function _(e){return fetch("".concat(h,"/users/").concat(e)).then((function(e){return e.json()}))}n(18);var b=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={queryTitle:"",conditionFilter:"all"},e.setQueryTitle=function(t){e.setState({queryTitle:t})},e.setConditionFilter=function(t){e.setState({conditionFilter:t})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.todos,a=t.selectedUserId,o=t.userSelector,c=t.randomizeOrder,s=this.state,i=s.queryTitle,l=s.conditionFilter;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("div",{className:"TodoList__top"},r.a.createElement("select",{name:"perPage",defaultValue:l,onChange:function(t){return e.setConditionFilter(t.target.value)},className:"page-selector"},["all","active","completed"].map((function(e){return r.a.createElement("option",{value:e,key:e},e)}))),r.a.createElement("input",{type:"text",onChange:function(t){return e.setQueryTitle(t.target.value)},className:"TodoList__input",placeholder:"Search by title"}),r.a.createElement("button",{className:"button",type:"button",onClick:function(){return c()}},"Randomize")),r.a.createElement("ul",{className:"TodoList__list"},n.filter((function(e){return!!e.title&&e.title.includes(i)})).filter((function(e){switch(l){case"completed":return e.completed;case"active":return!e.completed;default:return!0}})).map((function(e){var t=e.id,n=e.userId,c=e.title,s=e.completed;return r.a.createElement("li",{key:t,className:"TodoList__item ".concat(s?"TodoList__item--checked":"TodoList__item--unchecked")},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:s,readOnly:!0}),r.a.createElement("p",null,c)),r.a.createElement("button",{className:"TodoList__user-button button ".concat(a===n?"TodoList__user-button--selected":""),type:"button",onClick:function(){return o(n)}},"User\xa0#",n))})))))}}]),n}(r.a.Component),y=(n(19),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:[]},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;_(this.props.userId).then((function(t){e.setState({user:t.data})}))}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.props.userId;e.userId!==n&&_(n).then((function(e){t.setState({user:e.data})}))}},{key:"render",value:function(){var e=this.props,t=e.userId,n=e.clear,a=this.state.user,o=a.name,c=a.email,s=a.phone;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",t),r.a.createElement("button",{className:"button button-clear",type:"button",onClick:n},"Clear")),r.a.createElement("h3",{className:"CurrentUser__name"},o),r.a.createElement("p",{className:"CurrentUser__email"},c),r.a.createElement("p",{className:"CurrentUser__phone"},s))}}]),n}(r.a.Component)),E=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,randomizedTodos:null},e.loadTodos=function(){var t=Object(u.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:a=t.sent,e.setState({todos:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setSelectedUser=function(t){e.setState({selectedUserId:t})},e.clear=function(){e.setState({selectedUserId:0})},e.randomizeOrder=function(){var t=e.state.todos;e.setState({randomizedTodos:t.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{randomId:Math.random()})})).sort((function(e,t){return e.randomId-t.randomId}))})},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.loadTodos(v)}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId,a=e.randomizedTodos;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(b,{todos:a||t,userSelector:this.setSelectedUser,selectedUserId:n,setQueryTitle:this.setQueryTitle,randomizeOrder:this.randomizeOrder})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(y,{userId:n,clear:this.clear}):"No user selected")))}}]),n}(r.a.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.3fee39a0.chunk.js.map