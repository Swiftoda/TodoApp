(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{528:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r(9192)}])},2351:function(e,t,r){"use strict";var s=r(5893),a=r(9008),n=r.n(a);t.Z=e=>{let{children:t,title:r="Nextjs"}=e;return(0,s.jsxs)("div",{className:"flex min-h-screen flex-col items-center justift",children:[(0,s.jsx)(n(),{children:(0,s.jsx)("title",{children:r})}),(0,s.jsx)("main",{className:"flex w-screen flex-1 flex-col items-center justify-center",children:t})]})}},9192:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Y}});var s,a=r(5893),n=r(1163),i=r(9669),l=r.n(i),o=r(7294);let c=o.forwardRef(function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{fillRule:"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",clipRule:"evenodd"}))});var u=r(2351),d=r(3471);let m=()=>{let e=(0,n.useRouter)(),t=async()=>{let{data:e}=await l().get("".concat("http://localhost:3005","/user"));return e};return(0,d.useQuery)({queryKey:["user"],queryFn:t,onError:t=>{(401===t.response.status||403===t.response.status)&&e.push("/")}})};var p=r(6556);let h=()=>{let{data:e,status:t}=m();return"loading"===t?(0,a.jsx)(p.a,{}):(0,a.jsx)("p",{children:null==e?void 0:e.email})};var f=r(6414),v=r(987),x=r(9581),y=r(4207),g=r(3362),w={root:"m-4451eb3a"};let b={},j=(0,g.b)((e,t)=>{let r=(0,v.w)("Center",b,e),{classNames:s,className:a,style:n,styles:i,unstyled:l,vars:c,inline:u,mod:d,...m}=r,p=(0,x.y)({name:"Center",props:r,classes:w,className:a,style:n,classNames:s,styles:i,unstyled:l,vars:c});return o.createElement(y.x,{ref:t,mod:[{inline:u},d],...p("root"),...m})});j.classes=w,j.displayName="@mantine/core/Center";var E=r(4920);let k=e=>{let t;let r=new Set,s=(e,s)=>{let a="function"==typeof e?e(t):e;if(a!==t){let e=t;t=s?a:Object.assign({},t,a),r.forEach(r=>r(t,e))}},a=()=>t,n={setState:s,getState:a,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>r.clear()};return t=e(s,a,n),n},C=e=>e?k(e):k,{useSyncExternalStoreWithSelector:S}=r(2798),N=e=>{let t="function"==typeof e?C(e):e,r=(e,r)=>(function(e,t=e.getState,r){let s=S(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return(0,o.useDebugValue)(s),s})(t,e,r);return Object.assign(r,t),r},R=(s=e=>({editedTask:{id:0,title:"",description:""},updateEditedTask:t=>e({editedTask:{id:t.id,title:t.title,description:t.description}}),resetEditedTask:()=>e({editedTask:{id:0,title:"",description:""}})}))?N(s):N,T=()=>{let e=(0,d.useQueryClient)(),t=(0,n.useRouter)(),r=R(e=>e.resetEditedTask),s=(0,d.useMutation)(async e=>(await l().post("".concat("http://localhost:3005","/todo"),e)).data,{onSuccess:t=>{let s=e.getQueryData(["tasks"]);s&&e.setQueryData(["tasks"],[t,...s]),r()},onError:e=>{r(),(401===e.responce.status||403===e.responce.status)&&t.push("/")}}),a=(0,d.useMutation)(async e=>(await l().patch("".concat("http://localhost:3005","/todo/").concat(e.id),e)).data,{onSuccess:(t,s)=>{let a=e.getQueryData(["tasks"]);a&&e.setQueryData(["tasks"],a.map(e=>e.id===t.id?t:e)),r()},onError:e=>{r(),(401===e.responce.status||403===e.responce.status)&&t.push("/")}});return{createTaskMutation:s,deleteTaskMutation:(0,d.useMutation)(async e=>(await l().delete("".concat("http://localhost:3005","/todo/").concat(e))).data,{onSuccess:(t,s)=>{let a=e.getQueryData(["tasks"]);a&&e.setQueryData(["tasks"],a.filter(e=>e.id!==s)),r()},onError:e=>{r(),(401===e.responce.status||403===e.responce.status)&&t.push("/")}}),updateTaskMutation:a}},z=()=>{let{editedTask:e}=R(),t=R(e=>e.updateEditedTask),{createTaskMutation:r,updateTaskMutation:s}=T();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("form",{onSubmit:t=>{t.preventDefault(),0===e.id?r.mutate({title:e.title,description:e.description}):s.mutate({id:e.id,title:e.title,description:e.description})},children:[(0,a.jsx)(f.o,{mt:"md",placeholder:"title",value:e.title||"",onChange:r=>t({...e,title:r.target.value})}),(0,a.jsx)(f.o,{mt:"md",placeholder:"description",value:e.description||"",onChange:r=>t({...e,description:r.target.value})}),(0,a.jsx)(j,{children:(0,a.jsx)(E.z,{disabled:""===e.title,color:"cyan",type:"submit",children:0===e.id?"Create":"Update"})})]})})},Q=()=>{let e=(0,n.useRouter)(),t=async()=>{let{data:e}=await l().get("".concat("http://localhost:3005","/todo"));return e};return(0,d.useQuery)({queryKey:["tasks"],queryFn:t,onError:t=>{(401===t.responce.status||403===t.responce.status)&&e.push("/")}})};var _=r(9429),V=r(3637),D=r(9535);let[L,M]=function(e){let t=(0,o.createContext)(null);return[({children:e,value:r})=>o.createElement(t.Provider,{value:r},e),()=>{let r=(0,o.useContext)(t);if(null===r)throw Error(e);return r}]}("List component was not found in tree");var I={root:"m-abbac491",item:"m-abb6bec2",itemWrapper:"m-75cd9f71",itemIcon:"m-60f83e5b"};let O={},H=(0,D.d)((e,t)=>{let{classNames:r,className:s,style:a,styles:n,vars:i,icon:l,children:c,mod:u,...d}=(0,v.w)("ListItem",O,e),m=M(),p=l||m.icon,h={classNames:r,styles:n};return o.createElement(y.x,{...m.getStyles("item",{...h,className:s,style:a}),component:"li",mod:[{"with-icon":!!p,centered:m.center},u],ref:t,...d},o.createElement("div",{...m.getStyles("itemWrapper",h)},p&&o.createElement("span",{...m.getStyles("itemIcon",h)},p),o.createElement("span",{...m.getStyles("itemLabel",h)},c)))});H.classes=I,H.displayName="@mantine/core/ListItem";let q={type:"unordered"},B=(0,V.Z)((e,{size:t,spacing:r})=>({root:{"--list-fz":(0,_.yv)(t),"--list-lh":(0,_.Dp)(t),"--list-spacing":(0,_.bG)(r)}})),Z=(0,D.d)((e,t)=>{let r=(0,v.w)("List",q,e),{classNames:s,className:a,style:n,styles:i,unstyled:l,vars:c,children:u,type:d,withPadding:m,icon:p,spacing:h,center:f,listStyleType:g,mod:w,...b}=r,j=(0,x.y)({name:"List",classes:I,props:r,className:a,style:n,classNames:s,styles:i,unstyled:l,vars:c,varsResolver:B});return o.createElement(L,{value:{center:f,icon:p,getStyles:j}},o.createElement(y.x,{...j("root",{style:{listStyleType:g}}),component:"unordered"===d?"ul":"ol",mod:[{"with-padding":m},w],ref:t,...b},u))});Z.classes=I,Z.displayName="@mantine/core/List",Z.Item=H;var F={root:"m-7341320d"};let P={},W=(0,V.Z)((e,{size:t,radius:r,variant:s,gradient:a,color:n,autoContrast:i})=>{let l=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:a,variant:s||"filled",autoContrast:i});return{root:{"--ti-size":(0,_.ap)(t,"ti-size"),"--ti-radius":void 0===r?void 0:(0,_.H5)(r),"--ti-bg":n||s?l.background:void 0,"--ti-color":n||s?l.color:void 0,"--ti-bd":n||s?l.border:void 0}}}),K=(0,D.d)((e,t)=>{let r=(0,v.w)("ThemeIcon",P,e),{classNames:s,className:a,style:n,styles:i,unstyled:l,vars:c,autoContrast:u,...d}=r,m=(0,x.y)({name:"ThemeIcon",classes:F,props:r,className:a,style:n,classNames:s,styles:i,unstyled:l,vars:c,varsResolver:W});return o.createElement(y.x,{ref:t,...m("root"),...d})});K.classes=F,K.displayName="@mantine/core/ThemeIcon";var X=r(3991);let A=o.forwardRef(function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),o.createElement("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"}))}),G=o.forwardRef(function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}))}),U=e=>{let{id:t,title:r,description:s}=e,n=R(e=>e.updateEditedTask),{deleteTaskMutation:i}=T();return(0,a.jsxs)(Z.Item,{children:[(0,a.jsxs)("div",{className:"float-left mr-10",children:[(0,a.jsx)(A,{className:"mx-1 h-5 w-5 cursor-pointer text-blue-500",onClick:()=>{n({id:t,title:r,description:s})}}),(0,a.jsx)(G,{className:"mx-1 h-5 w-5 cursor-pointer text-blue-500",onClick:()=>{i.mutate(t)}})]}),(0,a.jsx)("span",{children:r})]})},J=()=>{let{data:e,status:t}=Q();return"loading"===t?(0,a.jsx)(p.a,{my:"lg",color:"cyan"}):(0,a.jsx)(Z,{my:"lg",spacing:"sm",size:"sm",icon:(0,a.jsx)(K,{color:"cyan",size:24,radius:"xl",children:(0,a.jsx)(X.it3,{size:16})}),children:null==e?void 0:e.map(e=>(0,a.jsx)(U,{id:e.id,title:e.title,description:e.description},e.id))})};var Y=()=>{let e=(0,n.useRouter)(),t=(0,d.useQueryClient)(),r=async()=>{t.removeQueries(["tasks"]),t.removeQueries(["user"]),await l().post("".concat("http://localhost:3005","/auth/logout")),e.push("/")};return(0,a.jsxs)(u.Z,{title:"Task Board",children:[(0,a.jsx)(c,{className:"mb-6 h-6 w-6 cursor-ponter text-blue-500",onClick:r}),(0,a.jsx)(h,{}),(0,a.jsx)(z,{}),(0,a.jsx)(J,{})]})}},139:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r(7294),a=r(1688),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=a.useSyncExternalStore,l=s.useRef,o=s.useEffect,c=s.useMemo,u=s.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,s,a){var d=l(null);if(null===d.current){var m={hasValue:!1,value:null};d.current=m}else m=d.current;var p=i(e,(d=c(function(){function e(e){if(!o){if(o=!0,i=e,e=s(e),void 0!==a&&m.hasValue){var t=m.value;if(a(t,e))return l=t}return l=e}if(t=l,n(i,e))return t;var r=s(e);return void 0!==a&&a(t,r)?t:(i=e,l=r)}var i,l,o=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,s,a]))[0],d[1]);return o(function(){m.hasValue=!0,m.value=p},[p]),u(p),p}},2798:function(e,t,r){"use strict";e.exports=r(139)}},function(e){e.O(0,[584,785,888,774,179],function(){return e(e.s=528)}),_N_E=e.O()}]);