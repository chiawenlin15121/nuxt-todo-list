(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{251:function(e,t,o){var content=o(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(131).default)("59b48fde",content,!0,{sourceMap:!1})},253:function(e,t,o){var content=o(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(131).default)("15df7af8",content,!0,{sourceMap:!1})},254:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEdSURBVHgB7VVdTsJAEJ5vujYhxkRuUE4gnsD2CN5AH0j66gmIt+CBRK7gCeAG9gbuDSCRBzDujluMpm26jRAaAuF7/GZ2vuz8ghowT9Powto3ANceF/0JJN3RSPtiYDkYPAgQ1RkD4E6IYmpGZkVea4OLaAXmF3heCv0LfQb6tRaAmFqGcul5FGsjagEuO5raxib9H2kas8iU9ghrTHI1Hs9ar8HhBFzr9SzwXORcM9w6LilxIk+579YCnZ/pnBW5yzCcKze9FdGs0zDJJ1yDs8BZ4AgE8nsciNwUueV63TPMpfvMzHHu64ujfIZQ5L16MjkIpmRMmQSGznfoi7P5wddqldGeoZTSfwLdyWRhRO5RWWQ7QWSRb9jfBfgNSWNih2TaaWMAAAAASUVORK5CYII="},255:function(e,t,o){"use strict";var n=o(11),r=o(0),c=o(3),d=o(104),l=o(18),f=o(13),A=o(186),x=o(40),M=o(103),m=o(185),v=o(4),I=o(74).f,N=o(33).f,y=o(16).f,T=o(256),h=o(257).trim,w="Number",j=r.Number,E=j.prototype,k=r.TypeError,D=c("".slice),C=c("".charCodeAt),z=function(e){var t=m(e,"number");return"bigint"==typeof t?t:S(t)},S=function(e){var t,o,n,r,c,d,l,code,f=m(e,"number");if(M(f))throw k("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=h(f),43===(t=C(f,0))||45===t){if(88===(o=C(f,2))||120===o)return NaN}else if(48===t){switch(C(f,1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+f}for(d=(c=D(f,2)).length,l=0;l<d;l++)if((code=C(c,l))<48||code>r)return NaN;return parseInt(c,n)}return+f};if(d(w,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var L,O=function(e){var t=arguments.length<1?0:j(z(e)),o=this;return x(E,o)&&v((function(){T(o)}))?A(Object(t),o,O):t},R=n?I(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),U=0;R.length>U;U++)f(j,L=R[U])&&!f(O,L)&&y(O,L,N(j,L));O.prototype=E,E.constructor=O,l(r,w,O)}},256:function(e,t,o){var n=o(3);e.exports=n(1..valueOf)},257:function(e,t,o){var n=o(3),r=o(21),c=o(12),d=o(258),l=n("".replace),f="["+d+"]",A=RegExp("^"+f+f+"*"),x=RegExp(f+f+"*$"),M=function(e){return function(t){var o=c(r(t));return 1&e&&(o=l(o,A,"")),2&e&&(o=l(o,x,"")),o}};e.exports={start:M(1),end:M(2),trim:M(3)}},258:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},259:function(e,t,o){"use strict";o(251)},260:function(e,t,o){var n=o(130)((function(i){return i[1]}));n.push([e.i,'.item[data-v-78cb4eea]{display:flex;align-items:center;margin-bottom:.5em}.checkbox-wrapper[data-v-78cb4eea]{flex-shrink:0;user-select:none;display:flex;justify-content:center;align-items:center;border:1px solid #c7c3c6;border-radius:2px;flex-basis:22px;height:20px}.checkbox-wrapper[data-v-78cb4eea]:hover{cursor:pointer}.checkbox-wrapper.checked[data-v-78cb4eea]{border-color:#8dc8ff}.text-primary[data-v-78cb4eea]{color:#8dc8ff}.todo-content[data-v-78cb4eea]{margin:0 1em;flex-grow:1;flex-basis:100%;overflow:scroll}.skeleton[data-v-78cb4eea]{position:relative;user-select:none}.skeleton[data-v-78cb4eea]::after{content:"";position:absolute;opacity:.6;width:100%;height:100%;display:block;background:linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80%),#d3d3d3;background-repeat:repeat-y;background-size:50px 500px;background-position:0 0;animation:shine-data-v-78cb4eea 1s infinite}@keyframes shine-data-v-78cb4eea{to{background-position:100% 0}}',""]),n.locals={},e.exports=n},261:function(e,t,o){"use strict";o.r(t);o(255);var n={props:{index:{type:Number,default:0},todo:{type:Object,default:function(){return{}}},onTodoToggled:{type:Function,default:function(){}},onTodoAdded:{type:Function,default:function(){}},onTodoRemoved:{type:Function,default:function(){}}},computed:{processing:function(){return this.todo.processing},itemClass:function(){return{skeleton:this.processing}}}},r=(o(259),o(49)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item",class:e.itemClass},[n("div",{staticClass:"checkbox-wrapper",class:{checked:e.todo.done},on:{click:function(t){return t.preventDefault(),e.onTodoToggled(e.index)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.todo.done,expression:"todo.done"}],staticClass:"text-primary"},[e._v("v")])]),n("div",{staticClass:"todo-content",class:{"text-primary":e.todo.done}},[e._v(e._s(e.todo.text))]),n("button",{staticClass:"delete-btn",attrs:{disabled:e.processing},on:{click:function(t){return e.onTodoRemoved(e.index)}}},[n("img",{staticClass:"cursor-pointer",attrs:{src:o(254)}})])])}),[],!1,null,"78cb4eea",null);t.default=component.exports},266:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyMSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjUgNy41MzEyNUgxMi43NVYxLjYyNUMxMi43NSAwLjkwMDI1NCAxMi4wNzgzIDAuMzEyNSAxMS4yNSAwLjMxMjVIOS43NUM4LjkyMTcyIDAuMzEyNSA4LjI1IDAuOTAwMjU0IDguMjUgMS42MjVWNy41MzEyNUgxLjVDMC42NzE3MTkgNy41MzEyNSAwIDguMTE5IDAgOC44NDM3NVYxMC4xNTYyQzAgMTAuODgxIDAuNjcxNzE5IDExLjQ2ODggMS41IDExLjQ2ODhIOC4yNVYxNy4zNzVDOC4yNSAxOC4wOTk3IDguOTIxNzIgMTguNjg3NSA5Ljc1IDE4LjY4NzVIMTEuMjVDMTIuMDc4MyAxOC42ODc1IDEyLjc1IDE4LjA5OTcgMTIuNzUgMTcuMzc1VjExLjQ2ODhIMTkuNUMyMC4zMjgzIDExLjQ2ODggMjEgMTAuODgxIDIxIDEwLjE1NjJWOC44NDM3NUMyMSA4LjExOSAyMC4zMjgzIDcuNTMxMjUgMTkuNSA3LjUzMTI1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},267:function(e,t,o){"use strict";o(253)},268:function(e,t,o){var n=o(130)((function(i){return i[1]}));n.push([e.i,".title[data-v-db4e1af4]{font-size:1.5em;font-weight:700}.input[data-v-db4e1af4]{margin-top:5px;display:flex;align-items:stretch}.input input[data-v-db4e1af4]{margin:0;border:2px solid #c7c3c6;border-radius:2px;flex-basis:100px;flex-grow:1}.container[data-v-db4e1af4]{display:flex;flex-direction:column;padding:1em;background-color:#fff;border:1px solid #c7c3c6;border-radius:.6em}.todo-list-wrapper[data-v-db4e1af4]{flex-grow:1;flex-basis:0;overflow:scroll}.add-btn[data-v-db4e1af4]{width:24px;height:24px;margin-left:5px;background-color:#8dc8ff;color:#fff;border-radius:3px;padding:3px;display:flex;justify-content:center;align-content:center}",""]),n.locals={},e.exports=n},272:function(e,t,o){"use strict";o.r(t);var n={props:{list:{type:Array,default:function(){return[]}},onTodoToggled:{type:Function,default:function(){}},onTodoAdded:{type:Function,default:function(){}},onTodoRemoved:{type:Function,default:function(){}}},data:function(){return{newTodo:""}},methods:{addTodo:function(){this.newTodo.length&&(this.onTodoAdded(this.newTodo),this.newTodo="")}}},r=(o(267),o(49)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v("Todo List")]),n("section",{staticClass:"todo-list-wrapper"},e._l(e.list,(function(t,o){return n("TodoListItem",e._b({key:o,attrs:{todo:t,index:o}},"TodoListItem",e.$props,!1))})),1),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],attrs:{type:"text",placeholder:"請輸入要做的事情"},domProps:{value:e.newTodo},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo.apply(null,arguments)},input:function(t){t.target.composing||(e.newTodo=t.target.value)}}}),n("div",{staticClass:"add-btn cursor-pointer"},[n("img",{attrs:{src:o(266)},on:{click:e.addTodo}})])])])}),[],!1,null,"db4e1af4",null);t.default=component.exports;installComponents(component,{TodoListItem:o(261).default})}}]);