(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7485)}])},2351:function(e,s,t){"use strict";var i=t(5893),a=t(9008),n=t.n(a);s.Z=e=>{let{children:s,title:t="Nextjs"}=e;return(0,i.jsxs)("div",{className:"flex min-h-screen flex-col items-center justift",children:[(0,i.jsx)(n(),{children:(0,i.jsx)("title",{children:t})}),(0,i.jsx)("main",{className:"flex w-screen flex-1 flex-col items-center justify-center",children:s})]})}},7485:function(e,s,t){"use strict";t.r(s);var i=t(5893),a=t(7294),n=t(1163),l=t(9669),r=t.n(l),o=t(4231),c=t(3991),u=t(3902),d=t(3404),m=t(6414),p=t(151),h=t(356),x=t(3383),f=t(4920),w=t(2290),j=t(7317),v=t(2351);let _=o.Ry().shape({email:o.Z_().email("invalid email").required("no email provided"),password:o.Z_().required("no passsword provided").min(5,"password should be min 5 chars")});s.default=function(){let e=(0,n.useRouter)(),[s,t]=(0,a.useState)(!1),[l,o]=(0,a.useState)(""),b=(0,w.c)({validate:(0,j.X)(_),initialValues:{email:"",password:""}}),g=async()=>{try{s||await r().post("".concat("http://localhost:3005","/auth/signup"),{email:b.values.email,password:b.values.password}),await r().post("".concat("http://localhost:3005","/auth/login"),{email:b.values.email,password:b.values.password}),b.reset(),e.push("/dashboard")}catch(e){o(e.responce.message)}};return(0,i.jsxs)(v.Z,{title:"Auth",children:[l&&(0,i.jsx)(d.b,{my:"md",variant:"filled",icon:(0,i.jsx)(u.Z,{}),title:"Authorization Error",color:"red",radius:"md",children:l}),(0,i.jsxs)("form",{onSubmit:b.onSubmit(g),children:[(0,i.jsx)(m.o,{mt:"md",id:"email",label:"Email*",placeholder:"example@gmail.com",...b.getInputProps("email")}),(0,i.jsx)(p.W,{mt:"md",id:"password",label:"Password*",description:"must be min 5 chars",...b.getInputProps("password")}),(0,i.jsxs)(h.Z,{mt:"xl",children:[(0,i.jsx)(x.e,{component:"button",size:"xs",className:"text-gray-300",onClick:()=>{t(!s),o("")},children:s?"Have an account? Login":"Don't have an account? Register"}),(0,i.jsx)(f.z,{leftSection:(0,i.jsx)(c.OQ8,{size:14}),color:"cyan",type:"submit",children:s?"Register":"Login"})]})]})]})}}},function(e){e.O(0,[584,785,132,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);