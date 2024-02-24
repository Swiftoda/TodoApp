(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{9008:function(e,t,r){e.exports=r(6665)},1163:function(e,t,r){e.exports=r(3035)},4920:function(e,t,r){"use strict";r.d(t,{z:function(){return E}});var n=r(7294),o=r(9429),i=r(3637),a=r(987),s=r(9581),p=r(4207),c=r(3362),l=r(6556),u=r(1166),d=r(8565),m=r(9535),f={root:"m-77c9d27d",inner:"m-80f1301b",loader:"m-a25b86ee",label:"m-811560b9",section:"m-a74036a",group:"m-80d6d844"};let y={orientation:"horizontal"},v=(0,i.Z)((e,{borderWidth:t})=>({group:{"--button-border-width":(0,d.h)(t)}})),b=(0,m.d)((e,t)=>{let r=(0,a.w)("ButtonGroup",y,e),{className:o,style:i,classNames:c,styles:l,unstyled:u,orientation:d,vars:m,borderWidth:b,variant:g,mod:h,...E}=(0,a.w)("ButtonGroup",y,e),w=(0,s.y)({name:"ButtonGroup",props:r,classes:f,className:o,style:i,classNames:c,styles:l,unstyled:u,vars:m,varsResolver:v,rootSelector:"group"});return n.createElement(p.x,{...w("group"),ref:t,variant:g,mod:[{"data-orientation":d},h],role:"group",...E})});b.classes=f,b.displayName="@mantine/core/ButtonGroup";let g={},h=(0,i.Z)((e,{radius:t,color:r,gradient:n,variant:i,size:a,justify:s,autoContrast:p})=>{let c=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:n,variant:i||"filled",autoContrast:p});return{root:{"--button-justify":s,"--button-height":(0,o.ap)(a,"button-height"),"--button-padding-x":(0,o.ap)(a,"button-padding-x"),"--button-fz":a?.includes("compact")?(0,o.yv)(a.replace("compact-","")):(0,o.yv)(a),"--button-radius":void 0===t?void 0:(0,o.H5)(t),"--button-bg":r||i?c.background:void 0,"--button-hover":r||i?c.hover:void 0,"--button-color":c.color,"--button-bd":r||i?c.border:void 0,"--button-hover-color":r||i?c.hoverColor:void 0}}}),E=(0,c.b)((e,t)=>{let r=(0,a.w)("Button",g,e),{style:o,vars:i,className:c,color:d,disabled:m,children:y,leftSection:v,rightSection:b,fullWidth:E,variant:w,radius:x,loading:$,loaderProps:S,gradient:z,classNames:I,styles:N,unstyled:k,"data-disabled":A,autoContrast:B,mod:L,...R}=r,W=(0,s.y)({name:"Button",props:r,classes:f,className:c,style:o,classNames:I,styles:N,unstyled:k,vars:i,varsResolver:h}),Z=!!v,P=!!b;return n.createElement(u.k,{ref:t,...W("root",{active:!m&&!$&&!A}),unstyled:k,variant:w,disabled:m||$,mod:[{disabled:m||A,loading:$,block:E,"with-left-section":Z,"with-right-section":P},L],...R},n.createElement(p.x,{component:"span",...W("loader"),"aria-hidden":!0},n.createElement(l.a,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...S})),n.createElement("span",{...W("inner")},v&&n.createElement(p.x,{component:"span",...W("section"),mod:{position:"left"}},v),n.createElement(p.x,{component:"span",mod:{loading:$},...W("label")},y),b&&n.createElement(p.x,{component:"span",...W("section"),mod:{position:"right"}},b)))});E.classes=f,E.displayName="@mantine/core/Button",E.Group=b},2468:function(e,t,r){"use strict";r.d(t,{I:function(){return W}});var n=r(7294),o=r(8565),i=r(9429),a=r(3637),s=r(987),p=r(9581),c=r(9996),l=r(4207),u=r(3362),d=r(9535);let[m,f]=function(e=null){let t=(0,n.createContext)(e);return[({children:e,value:r})=>n.createElement(t.Provider,{value:r},e),()=>(0,n.useContext)(t)]}({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var y={wrapper:"m-6c018570",input:"m-8fb7ebe7",section:"m-82577fc2",placeholder:"m-88bacfd0",root:"m-46b77525",label:"m-8fdc1311",required:"m-78a94662",error:"m-8f816625",description:"m-fe47ce59"};let v={},b=(0,a.Z)((e,{size:t})=>({description:{"--input-description-size":void 0===t?void 0:`calc(${(0,i.yv)(t)} - ${(0,o.h)(2)})`}})),g=(0,d.d)((e,t)=>{let r=(0,s.w)("InputDescription",v,e),{classNames:o,className:i,style:a,styles:c,unstyled:u,vars:d,size:m,__staticSelector:g,__inheritStyles:h=!0,variant:E,...w}=(0,s.w)("InputDescription",v,r),x=f(),$=(0,p.y)({name:["InputWrapper",g],props:r,classes:y,className:i,style:a,classNames:o,styles:c,unstyled:u,rootSelector:"description",vars:d,varsResolver:b}),S=h&&x?.getStyles||$;return n.createElement(l.x,{component:"p",ref:t,variant:E,size:m,...S("description"),...w})});g.classes=y,g.displayName="@mantine/core/InputDescription";let h={},E=(0,a.Z)((e,{size:t})=>({error:{"--input-error-size":void 0===t?void 0:`calc(${(0,i.yv)(t)} - ${(0,o.h)(2)})`}})),w=(0,d.d)((e,t)=>{let r=(0,s.w)("InputError",h,e),{classNames:o,className:i,style:a,styles:c,unstyled:u,vars:d,size:m,__staticSelector:v,__inheritStyles:b=!0,variant:g,...w}=r,x=(0,p.y)({name:["InputWrapper",v],props:r,classes:y,className:i,style:a,classNames:o,styles:c,unstyled:u,rootSelector:"error",vars:d,varsResolver:E}),$=f(),S=b&&$?.getStyles||x;return n.createElement(l.x,{component:"p",ref:t,variant:g,size:m,...S("error"),...w})});w.classes=y,w.displayName="@mantine/core/InputError";let x={labelElement:"label"},$=(0,a.Z)((e,{size:t})=>({label:{"--input-label-size":(0,i.yv)(t),"--input-asterisk-color":void 0}})),S=(0,d.d)((e,t)=>{let r=(0,s.w)("InputLabel",x,e),{classNames:o,className:i,style:a,styles:c,unstyled:u,vars:d,labelElement:m,size:v,required:b,htmlFor:g,onMouseDown:h,children:E,__staticSelector:w,variant:S,mod:z,...I}=(0,s.w)("InputLabel",x,r),N=(0,p.y)({name:["InputWrapper",w],props:r,classes:y,className:i,style:a,classNames:o,styles:c,unstyled:u,rootSelector:"label",vars:d,varsResolver:$}),k=f(),A=k?.getStyles||N;return n.createElement(l.x,{...A("label"),component:m,variant:S,size:v,ref:t,htmlFor:"label"===m?g:void 0,mod:[{required:b},z],onMouseDown:e=>{h?.(e),!e.defaultPrevented&&e.detail>1&&e.preventDefault()},...I},E,b&&n.createElement("span",{...A("required"),"aria-hidden":!0}," *"))});S.classes=y,S.displayName="@mantine/core/InputLabel";let z={},I=(0,d.d)((e,t)=>{let r=(0,s.w)("InputPlaceholder",z,e),{classNames:o,className:i,style:a,styles:c,unstyled:u,vars:d,__staticSelector:m,variant:f,error:v,mod:b,...g}=(0,s.w)("InputPlaceholder",z,r),h=(0,p.y)({name:["InputPlaceholder",m],props:r,classes:y,className:i,style:a,classNames:o,styles:c,unstyled:u,rootSelector:"placeholder"});return n.createElement(l.x,{...h("placeholder"),mod:[{error:!!v},b],component:"span",variant:f,ref:t,...g})});I.classes=y,I.displayName="@mantine/core/InputPlaceholder";var N=r(7845);let k={labelElement:"label",inputContainer:e=>e,inputWrapperOrder:["label","description","input","error"]},A=(0,a.Z)((e,{size:t})=>({label:{"--input-label-size":(0,i.yv)(t),"--input-asterisk-color":void 0},error:{"--input-error-size":void 0===t?void 0:`calc(${(0,i.yv)(t)} - ${(0,o.h)(2)})`},description:{"--input-description-size":void 0===t?void 0:`calc(${(0,i.yv)(t)} - ${(0,o.h)(2)})`}})),B=(0,d.d)((e,t)=>{let r=(0,s.w)("InputWrapper",k,e),{classNames:o,className:i,style:a,styles:c,unstyled:u,vars:d,size:f,variant:v,__staticSelector:b,inputContainer:h,inputWrapperOrder:E,label:x,error:$,description:z,labelProps:I,descriptionProps:B,errorProps:L,labelElement:R,children:W,withAsterisk:Z,id:P,required:_,__stylesApiProps:C,mod:T,...j}=r,H=(0,p.y)({name:["InputWrapper",b],props:C||r,classes:y,className:i,style:a,classNames:o,styles:c,unstyled:u,vars:d,varsResolver:A}),F={size:f,variant:v,__staticSelector:b},D=(0,N.M)(P),M=L?.id||`${D}-error`,O=B?.id||`${D}-description`,G=!!$&&"boolean"!=typeof $,q=!!z,U=`${G?M:""} ${q?O:""}`,X=U.trim().length>0?U.trim():void 0,K=I?.id||`${D}-label`,Y=x&&n.createElement(S,{key:"label",labelElement:R,id:K,htmlFor:D,required:"boolean"==typeof Z?Z:_,...F,...I},x),J=q&&n.createElement(g,{key:"description",...B,...F,size:B?.size||F.size,id:B?.id||O},z),Q=n.createElement(n.Fragment,{key:"input"},h(W)),V=G&&n.createElement(w,{...L,...F,size:L?.size||F.size,key:"error",id:L?.id||M},$),ee=E.map(e=>{switch(e){case"label":return Y;case"input":return Q;case"description":return J;case"error":return V;default:return null}});return n.createElement(m,{value:{getStyles:H,describedBy:X,inputId:D,labelId:K,...function(e,{hasDescription:t,hasError:r}){let n=e.findIndex(e=>"input"===e),o=e[n-1],i=e[n+1];return{offsetBottom:t&&"description"===i||r&&"error"===i,offsetTop:t&&"description"===o||r&&"error"===o}}(E,{hasDescription:q,hasError:G})}},n.createElement(l.x,{ref:t,variant:v,size:f,mod:[{error:!!$},T],...H("root"),...j},ee))});B.classes=y,B.displayName="@mantine/core/InputWrapper";let L={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},R=(0,a.Z)((e,t,r)=>({wrapper:{"--input-margin-top":r.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":r.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":(0,i.ap)(t.size,"input-height"),"--input-fz":(0,i.yv)(t.size),"--input-radius":void 0===t.radius?void 0:(0,i.H5)(t.radius),"--input-left-section-width":void 0!==t.leftSectionWidth?(0,o.h)(t.leftSectionWidth):void 0,"--input-right-section-width":void 0!==t.rightSectionWidth?(0,o.h)(t.rightSectionWidth):void 0,"--input-padding-y":t.multiline?(0,i.ap)(t.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":t.leftSectionPointerEvents,"--input-right-section-pointer-events":t.rightSectionPointerEvents}})),W=(0,u.b)((e,t)=>{let r=(0,s.w)("Input",L,e),{classNames:o,className:i,style:a,styles:u,unstyled:d,required:m,__staticSelector:v,__stylesApiProps:b,size:g,wrapperProps:h,error:E,disabled:w,leftSection:x,leftSectionProps:$,leftSectionWidth:S,rightSection:z,rightSectionProps:I,rightSectionWidth:N,rightSectionPointerEvents:k,leftSectionPointerEvents:A,variant:B,vars:W,pointer:Z,multiline:P,radius:_,id:C,withAria:T,withErrorStyles:j,mod:H,...F}=r,{styleProps:D,rest:M}=(0,c.c)(F),O=f(),G={offsetBottom:O?.offsetBottom,offsetTop:O?.offsetTop},q=(0,p.y)({name:["Input",v],props:b||r,classes:y,className:i,style:a,classNames:o,styles:u,unstyled:d,stylesCtx:G,rootSelector:"wrapper",vars:W,varsResolver:R}),U=T?{required:m,disabled:w,"aria-invalid":!!E,"aria-describedby":O?.describedBy,id:O?.inputId||C}:{};return n.createElement(l.x,{...q("wrapper"),...D,...h,mod:[{error:!!E&&j,pointer:Z,disabled:w,multiline:P,"data-with-right-section":!!z,"data-with-left-section":!!x},H],variant:B,size:g},x&&n.createElement("div",{...$,"data-position":"left",...q("section",{className:$?.className,style:$?.style})},x),n.createElement(l.x,{component:"input",...M,...U,ref:t,required:m,mod:{disabled:w,error:!!E&&j},variant:B,...q("input")}),z&&n.createElement("div",{...I,"data-position":"right",...q("section",{className:I?.className,style:I?.style})},z))});W.classes=y,W.Wrapper=B,W.Label=S,W.Error=w,W.Description=g,W.Placeholder=I,W.displayName="@mantine/core/Input"},9938:function(e,t,r){"use strict";r.d(t,{M:function(){return c}});var n=r(7294),o=r(3362),i=r(2468),a=r(987),s=r(9996);let p={__staticSelector:"InputBase",withAria:!0},c=(0,o.b)((e,t)=>{let{inputProps:r,wrapperProps:o,...c}=function(e,t,r){let n=(0,a.w)(e,t,r),{label:o,description:i,error:p,required:c,classNames:l,styles:u,className:d,unstyled:m,__staticSelector:f,__stylesApiProps:y,errorProps:v,labelProps:b,descriptionProps:g,wrapperProps:h,id:E,size:w,style:x,inputContainer:$,inputWrapperOrder:S,withAsterisk:z,variant:I,vars:N,mod:k,...A}=n,{styleProps:B,rest:L}=(0,s.c)(A),R={label:o,description:i,error:p,required:c,classNames:l,className:d,__staticSelector:f,__stylesApiProps:y||n,errorProps:v,labelProps:b,descriptionProps:g,unstyled:m,styles:u,size:w,style:x,inputContainer:$,inputWrapperOrder:S,withAsterisk:z,variant:I,id:E,mod:k,...h};return{...L,classNames:l,styles:u,unstyled:m,wrapperProps:{...R,...B},inputProps:{required:c,classNames:l,styles:u,unstyled:m,size:w,__staticSelector:f,__stylesApiProps:y||n,error:p,variant:I,id:E}}}("InputBase",p,e);return n.createElement(i.I.Wrapper,{...o},n.createElement(i.I,{...r,...c,ref:t}))});c.classes={...i.I.classes,...i.I.Wrapper.classes},c.displayName="@mantine/core/InputBase"},6556:function(e,t,r){"use strict";r.d(t,{a:function(){return g}});var n=r(7294),o=r(9429),i=r(3637),a=r(2979),s=r(987),p=r(9581),c=r(4207),l=r(9535),u=r(512),d={root:"m-5ae2e3c",barsLoader:"m-7a2bd4cd",bar:"m-870bb79","bars-loader-animation":"m-5d2b3b9d",dotsLoader:"m-4e3f22d7",dot:"m-870c4af","loader-dots-animation":"m-aac34a1",ovalLoader:"m-b34414df","oval-loader-animation":"m-f8e89c4b"};let m=(0,n.forwardRef)(({className:e,...t},r)=>n.createElement(c.x,{component:"span",className:(0,u.Z)(d.barsLoader,e),...t,ref:r},n.createElement("span",{className:d.bar}),n.createElement("span",{className:d.bar}),n.createElement("span",{className:d.bar}))),f=(0,n.forwardRef)(({className:e,...t},r)=>n.createElement(c.x,{component:"span",className:(0,u.Z)(d.dotsLoader,e),...t,ref:r},n.createElement("span",{className:d.dot}),n.createElement("span",{className:d.dot}),n.createElement("span",{className:d.dot}))),y={bars:m,oval:(0,n.forwardRef)(({className:e,...t},r)=>n.createElement(c.x,{component:"span",className:(0,u.Z)(d.ovalLoader,e),...t,ref:r})),dots:f},v={loaders:y,type:"oval"},b=(0,i.Z)((e,{size:t,color:r})=>({root:{"--loader-size":(0,o.ap)(t,"loader-size"),"--loader-color":r?(0,a.p)(r,e):void 0}})),g=(0,l.d)((e,t)=>{let r=(0,s.w)("Loader",v,e),{size:o,color:i,type:a,vars:l,className:u,style:m,classNames:f,styles:y,unstyled:g,loaders:h,variant:E,children:w,...x}=r,$=(0,p.y)({name:"Loader",props:r,classes:d,className:u,style:m,classNames:f,styles:y,unstyled:g,vars:l,varsResolver:b});return w?n.createElement(c.x,{...$("root"),ref:t,...x},w):n.createElement(c.x,{...$("root"),ref:t,component:h[a],variant:E,size:o,...x})});g.defaultLoaders=y,g.classes=d,g.displayName="@mantine/core/Loader"},6414:function(e,t,r){"use strict";r.d(t,{o:function(){return p}});var n=r(7294),o=r(987),i=r(9535),a=r(9938);let s={},p=(0,i.d)((e,t)=>{let r=(0,o.w)("TextInput",s,e);return n.createElement(a.M,{component:"input",ref:t,...r,__staticSelector:"TextInput"})});p.classes=a.M.classes,p.displayName="@mantine/core/TextInput"},1166:function(e,t,r){"use strict";r.d(t,{k:function(){return l}});var n=r(7294),o=r(987),i=r(9581),a=r(4207),s=r(3362),p={root:"m-87cf2631"};let c={__staticSelector:"UnstyledButton"},l=(0,s.b)((e,t)=>{let r=(0,o.w)("UnstyledButton",c,e),{className:s,component:l="button",__staticSelector:u,unstyled:d,classNames:m,styles:f,style:y,...v}=r,b=(0,i.y)({name:u,props:r,classes:p,className:s,style:y,classNames:m,styles:f,unstyled:d});return n.createElement(a.x,{...b("root",{focusable:!0}),component:l,ref:t,type:"button"===l?"button":void 0,...v})});l.classes=p,l.displayName="@mantine/core/UnstyledButton"},4207:function(e,t,r){"use strict";r.d(t,{x:function(){return x}});var n=r(7294),o=r(512),i=r(2145),a=r(3877);function s(e){return(0,a.X)(e).reduce((t,r)=>void 0!==e[r]?`${t}${r.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}:${e[r]};`:t,"").trim()}function p({selector:e,styles:t,media:r}){let o=(0,i.R7)();return n.createElement("style",{"data-mantine-styles":"inline",nonce:o?.(),dangerouslySetInnerHTML:{__html:function({selector:e,styles:t,media:r}){let n=t?s(t):"",o=Array.isArray(r)?r.map(t=>`@media${t.query}{${e}{${s(t.styles)}}}`):[];return`${n?`${e}{${n}}`:""}${o.join("")}`.trim()}({selector:e,styles:t,media:r})}})}var c=r(1462),l=r(5984);function u(e){return e.startsWith("data-")?e:`data-${e}`}function d(e,t){return Array.isArray(e)?[...e].reduce((e,r)=>({...e,...d(r,t)}),{}):"function"==typeof e?e(t):null==e?{}:e}var m=r(9996);let f={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},mx:{type:"spacing",property:["marginRight","marginLeft"]},my:{type:"spacing",property:["marginTop","marginBottom"]},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},px:{type:"spacing",property:["paddingRight","paddingLeft"]},py:{type:"spacing",property:["paddingTop","paddingBottom"]},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}};var y=r(6167);function v(e,t){let r=(0,y.E)({color:e,theme:t});return"dimmed"===r.color?"var(--mantine-color-dimmed)":"bright"===r.color?"var(--mantine-color-bright)":r.variable?`var(${r.variable})`:r.color}let b={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)"};var g=r(8565);let h={color:v,textColor:function(e,t){let r=(0,y.E)({color:e,theme:t});return r.isThemeColor&&void 0===r.shade?`var(--mantine-color-${r.color}-text)`:v(e,t)},fontSize:function(e,t){return"string"==typeof e&&e in t.fontSizes?`var(--mantine-font-size-${e})`:"number"==typeof e||"string"==typeof e?(0,g.h)(e):e},spacing:function(e,t){if("number"==typeof e)return(0,g.h)(e);if("string"==typeof e){let r=e.replace("-","");if(!(r in t.spacing))return(0,g.h)(e);let n=`--mantine-spacing-${r}`;return e.startsWith("-")?`calc(var(${n}) * -1)`:`var(${n})`}return e},identity:function(e){return e},size:function(e){return"number"==typeof e?(0,g.h)(e):e},lineHeight:function(e,t){return"string"==typeof e&&e in t.lineHeights?`var(--mantine-line-height-${e})`:e},fontFamily:function(e){return"string"==typeof e&&e in b?b[e]:e}};function E(e){return e.replace("(min-width: ","").replace("em)","")}let w=(0,n.forwardRef)(({component:e,style:t,__vars:r,className:i,variant:s,mod:y,size:v,hiddenFrom:b,visibleFrom:g,lightHidden:w,darkHidden:x,renderRoot:$,...S},z)=>{let I=(0,l.rZ)(),{styleProps:N,rest:k}=(0,m.c)(S),A=function(){let e=(0,n.useId)().replace(/:/g,"");return`__m__-${e}`}(),B=function({styleProps:e,data:t,theme:r}){return function({media:e,...t}){let r=Object.keys(e).sort((e,t)=>Number(E(e))-Number(E(t))).map(t=>({query:t,styles:e[t]}));return{...t,media:r}}((0,a.X)(e).reduce((n,o)=>{var i,s;if("hiddenFrom"===o||"visibleFrom"===o)return n;let p=t[o],c=Array.isArray(p.property)?p.property:[p.property],l="object"==typeof(s=e[o])&&null!==s?"base"in s?s.base:void 0:s;if(!function(e){if("object"!=typeof e||null===e)return!1;let t=Object.keys(e);return 1!==t.length||"base"!==t[0]}(e[o]))return c.forEach(e=>{n.inlineStyles[e]=h[p.type](l,r)}),n;n.hasResponsiveStyles=!0;let u="object"==typeof(i=e[o])&&null!==i?(0,a.X)(i).filter(e=>"base"!==e):[];return c.forEach(t=>{l&&(n.styles[t]=h[p.type](l,r)),u.forEach(i=>{var a;let s=`(min-width: ${r.breakpoints[i]})`;n.media[s]={...n.media[s],[t]:h[p.type]("object"==typeof(a=e[o])&&null!==a&&i in a?a[i]:a,r)}})}),n},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}({styleProps:N,theme:I,data:f}),L={ref:z,style:function({theme:e,style:t,vars:r,styleProps:n}){let o=d(t,e),i=d(r,e);return{...o,...i,...n}}({theme:I,style:t,vars:r,styleProps:B.inlineStyles}),className:(0,o.Z)(i,{[A]:B.hasResponsiveStyles,"mantine-light-hidden":w,"mantine-dark-hidden":x,[`mantine-hidden-from-${b}`]:b,[`mantine-visible-from-${g}`]:g}),"data-variant":s,"data-size":(0,c.s)(v)?void 0:v||void 0,...function e(t){return t?"string"==typeof t?{[u(t)]:!0}:Array.isArray(t)?[...t].reduce((t,r)=>({...t,...e(r)}),{}):Object.keys(t).reduce((e,r)=>{let n=t[r];return void 0===n||""===n||!1===n||null===n||(e[u(r)]=t[r]),e},{}):null}(y),...k};return n.createElement(n.Fragment,null,B.hasResponsiveStyles&&n.createElement(p,{selector:`.${A}`,styles:B.styles,media:B.media}),"function"==typeof $?$(L):n.createElement(e||"div",{...L}))});w.displayName="@mantine/core/Box";let x=w},9996:function(e,t,r){"use strict";r.d(t,{c:function(){return o}});var n=r(8626);function o(e){let{m:t,mx:r,my:o,mt:i,mb:a,ml:s,mr:p,p:c,px:l,py:u,pt:d,pb:m,pl:f,pr:y,bg:v,c:b,opacity:g,ff:h,fz:E,fw:w,lts:x,ta:$,lh:S,fs:z,tt:I,td:N,w:k,miw:A,maw:B,h:L,mih:R,mah:W,bgsz:Z,bgp:P,bgr:_,bga:C,pos:T,top:j,left:H,bottom:F,right:D,inset:M,display:O,flex:G,hiddenFrom:q,visibleFrom:U,lightHidden:X,darkHidden:K,...Y}=e;return{styleProps:(0,n.L)({m:t,mx:r,my:o,mt:i,mb:a,ml:s,mr:p,p:c,px:l,py:u,pt:d,pb:m,pl:f,pr:y,bg:v,c:b,opacity:g,ff:h,fz:E,fw:w,lts:x,ta:$,lh:S,fs:z,tt:I,td:N,w:k,miw:A,maw:B,h:L,mih:R,mah:W,bgsz:Z,bgp:P,bgr:_,bga:C,pos:T,top:j,left:H,bottom:F,right:D,inset:M,display:O,flex:G,hiddenFrom:q,visibleFrom:U,lightHidden:X,darkHidden:K}),rest:Y}}r(7294)},987:function(e,t,r){"use strict";r.d(t,{w:function(){return i}});var n=r(8626);r(7294);var o=r(5984);function i(e,t,r){let i=(0,o.rZ)(),a=i.components[e]?.defaultProps,s="function"==typeof a?a(i):a;return{...t,...s,...(0,n.L)(r)}}},9535:function(e,t,r){"use strict";r.d(t,{d:function(){return i},y:function(){return o}});var n=r(7294);function o(e){return e}function i(e){let t=(0,n.forwardRef)(e);return t.extend=o,t}},3362:function(e,t,r){"use strict";r.d(t,{b:function(){return i}});var n=r(7294),o=r(9535);function i(e){let t=(0,n.forwardRef)(e);return t.extend=o.y,t}},3637:function(e,t,r){"use strict";function n(e){return e}r.d(t,{Z:function(){return n}})},202:function(e,t,r){"use strict";r.d(t,{m:function(){return i}});var n=r(512);let o={};function i({theme:e,classNames:t,props:r,stylesCtx:i}){return function(e){let t={};return e.forEach(e=>{Object.entries(e).forEach(([e,r])=>{t[e]?t[e]=(0,n.Z)(t[e],r):t[e]=r})}),t}((Array.isArray(t)?t:[t]).map(t=>"function"==typeof t?t(e,r,i):t||o))}},8489:function(e,t,r){"use strict";function n({theme:e,styles:t,props:r,stylesCtx:n}){return(Array.isArray(t)?t:[t]).reduce((t,o)=>"function"==typeof o?{...t,...o(e,r,n)}:{...t,...o},{})}r.d(t,{i:function(){return n}})},9581:function(e,t,r){"use strict";r.d(t,{y:function(){return u}}),r(7294);var n=r(2145),o=r(5984),i=r(512);let a={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"};var s=r(202),p=r(8489);function c({style:e,theme:t}){return Array.isArray(e)?[...e].reduce((e,r)=>({...e,...c({style:r,theme:t})}),{}):"function"==typeof e?e(t):null==e?{}:e}var l=r(8626);function u({name:e,classes:t,props:r,stylesCtx:u,className:d,style:m,rootSelector:f="root",unstyled:y,classNames:v,styles:b,vars:g,varsResolver:h}){let E=(0,o.rZ)(),w=(0,n.uK)(),x=(Array.isArray(e)?e:[e]).filter(e=>e);return(e,n)=>({className:function({theme:e,options:t,themeName:r,selector:n,classNamesPrefix:o,classNames:p,classes:c,unstyled:l,className:u,rootSelector:d,props:m,stylesCtx:f}){return(0,i.Z)(function({theme:e,options:t,unstyled:r}){return(0,i.Z)(t?.focusable&&!r&&(e.focusClassName||a[e.focusRing]),t?.active&&!r&&e.activeClassName)}({theme:e,options:t,unstyled:l}),function({themeName:e,theme:t,selector:r,props:n,stylesCtx:o}){return e.map(e=>s.m({theme:t,classNames:t.components[e]?.classNames,props:n,stylesCtx:o})?.[r])}({theme:e,themeName:r,selector:n,props:m,stylesCtx:f}),function({options:e,classes:t,selector:r,unstyled:n}){return e?.variant&&!n?t[`${r}--${e.variant}`]:void 0}({options:t,classes:c,selector:n,unstyled:l}),function({selector:e,stylesCtx:t,theme:r,classNames:n,props:o}){return(0,s.m)({theme:r,classNames:n,props:o,stylesCtx:t})[e]}({selector:n,stylesCtx:f,theme:e,classNames:p,props:m}),function({selector:e,stylesCtx:t,options:r,props:n,theme:o}){return(0,s.m)({theme:o,classNames:r?.classNames,props:r?.props||n,stylesCtx:t})[e]}({selector:n,stylesCtx:f,options:t,props:m,theme:e}),function({rootSelector:e,selector:t,className:r}){return e===t?r:void 0}({rootSelector:d,selector:n,className:u}),function({selector:e,classes:t,unstyled:r}){return r?void 0:t[e]}({selector:n,classes:c,unstyled:l}),function({themeName:e,classNamesPrefix:t,selector:r,withStaticClass:n}){return!1===n?[]:e.map(e=>`${t}-${e}-${r}`)}({themeName:r,classNamesPrefix:o,selector:n,withStaticClass:t?.withStaticClass}),t?.className)}({theme:E,options:n,themeName:x,selector:e,classNamesPrefix:w,classNames:v,classes:t,unstyled:y,className:d,rootSelector:f,props:r,stylesCtx:u}),style:function({theme:e,themeName:t,selector:r,options:n,props:o,stylesCtx:i,rootSelector:a,styles:s,style:u,vars:d,varsResolver:m}){return{...function({theme:e,themeName:t,props:r,stylesCtx:n,selector:o}){return t.map(t=>(0,p.i)({theme:e,styles:e.components[t]?.styles,props:r,stylesCtx:n})[o]).reduce((e,t)=>({...e,...t}),{})}({theme:e,themeName:t,props:o,stylesCtx:i,selector:r}),...(0,p.i)({theme:e,styles:s,props:o,stylesCtx:i})[r],...(0,p.i)({theme:e,styles:n?.styles,props:n?.props||o,stylesCtx:i})[r],...function({vars:e,varsResolver:t,theme:r,props:n,stylesCtx:o,selector:i,themeName:a}){return[t?.(r,n,o),...a.map(e=>r.components?.[e]?.vars?.(r,n,o)),e?.(r,n,o)].reduce((e,t)=>(t&&Object.keys(t).forEach(r=>{e[r]={...e[r],...(0,l.L)(t[r])}}),e),{})?.[i]}({theme:e,props:o,stylesCtx:i,vars:d,varsResolver:m,selector:r,themeName:t}),...a===r?c({style:u,theme:e}):null,...c({style:n?.style,theme:e})}}({theme:E,themeName:x,selector:e,options:n,props:r,stylesCtx:u,rootSelector:f,styles:b,style:m,vars:g,varsResolver:h})})}},8626:function(e,t,r){"use strict";function n(e){return Object.keys(e).reduce((t,r)=>(void 0!==e[r]&&(t[r]=e[r]),t),{})}r.d(t,{L:function(){return n}})},9429:function(e,t,r){"use strict";r.d(t,{Dp:function(){return c},H5:function(){return s},ap:function(){return i},bG:function(){return a},yv:function(){return p}});var n=r(1462),o=r(8565);function i(e,t="size",r=!0){if(void 0!==e)return(0,n.s)(e)?r?(0,o.h)(e):e:`var(--${t}-${e})`}function a(e){return i(e,"mantine-spacing")}function s(e){return void 0===e?"var(--mantine-radius-default)":i(e,"mantine-radius")}function p(e){return i(e,"mantine-font-size")}function c(e){return i(e,"mantine-line-height",!1)}},1462:function(e,t,r){"use strict";function n(e){return"number"==typeof e||"string"==typeof e&&(!!(e.startsWith("calc(")||e.startsWith("var(")||e.includes(" ")&&""!==e.trim())||/[0-9]/.test(e.trim().replace("-","")[0]))}r.d(t,{s:function(){return n}})},7845:function(e,t,r){"use strict";r.d(t,{M:function(){return a}});var n=r(7294),o=r(464);let i=n["useId".toString()]||(()=>void 0);function a(e){let t=function(){let e=i();return e?`mantine-${e.replace(/:/g,"")}`:""}(),[r,a]=(0,n.useState)(t);return((0,o.Y)(()=>{a(`mantine-${Math.random().toString(36).slice(2,11)}`)},[]),"string"==typeof e)?e:"undefined"==typeof window?t:r}},512:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(n&&(n+=" "),n+=t);return n}}}]);