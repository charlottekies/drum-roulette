(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[338],{5688:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/assignments",function(){return n(6192)}])},6192:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return h}});var s=n(5893),t=n(5861),a=n(1163),r=n(7294),c=n(6486),u=n(5675),l=n.n(u),d=n(4572),m=n(4184),f=n.n(m);let o=(0,d.Z)(()=>({container:{display:"flex",alignItems:"center",justifyContent:"space-around",margin:"0 5em"},card:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"5%",marginLeft:"2%"},image:{width:200,height:200,overflow:"hidden",borderRadius:"50%",display:"flex",justifyContent:"center"}}));function h(){let e=o(),[i,n]=(0,r.useState)([]),u=(0,a.useRouter)(),{musicians:d,instruments:m}=u.query,h=d?JSON.parse(d):[],x=m?JSON.parse(m):[],g=(e,i)=>{let s=(0,c.shuffle)(e),t=(0,c.shuffle)(i),a=s.map((e,i)=>({musician:e,instrument:t[i],id:i}));n(a)};return(0,r.useEffect)(()=>{g(h,x)},[]),(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,s.jsx)(t.Z,{children:"Return to main page"}),i.map(i=>(0,s.jsxs)("div",{className:f()(e.container),children:[(0,s.jsxs)("div",{className:f()(e.card),children:[(0,s.jsx)("div",{className:f()(e.image),children:(0,s.jsx)(l(),{priority:!0,src:i.musician.image,alt:"assigned musician is ".concat(i.musician.first_name),width:200,height:280})}),(0,s.jsx)(t.Z,{children:i.musician.first_name})]}),(0,s.jsxs)("div",{className:f()(e.card),children:[(0,s.jsx)("div",{className:f()(e.image),children:(0,s.jsx)(l(),{src:i.instrument.img,alt:"assigned instrument is ".concat(i.instrument.name),width:200})}),(0,s.jsx)(t.Z,{children:i.instrument.name})]})]},i.musician.user_id))]})}}},function(e){e.O(0,[662,556,896,774,888,179],function(){return e(e.s=5688)}),_N_E=e.O()}]);