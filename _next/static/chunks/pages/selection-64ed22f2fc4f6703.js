(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{3214:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/selection",function(){return i(4626)}])},4626:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return k}});var n=i(5893),t=i(7294),r=i(5675),c=i.n(r),l=i(1181),a=i(7357),d=i(5861),m=i(6936),u=i(1163),o=i(4184),h=i.n(o),p=i(4572),f=i(6154),g=i(1752),x=i.n(g);let{publicRuntimeConfig:y}=x()(),_=y.baseUrl,j=(0,p.Z)(()=>({container:{display:"flex",flexDirection:"column",alignItems:"center"},card:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"5%",marginLeft:"2%"},selected:{boxShadow:"0 0 0 5px #37A8FA"},image:{width:200,height:200,overflow:"hidden",borderRadius:"50%",display:"flex",justifyContent:"center"},musicians:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}));function k(){let e=j(),[s,i]=(0,t.useState)([{id:1,name:"Bass Drum",selected:!1,img:"https://server.pickyourdrum.link/files/instruments/BD_pic.png"},{id:2,name:"Snare Drum",selected:!1,img:"https://server.pickyourdrum.link/files/instruments/SD_pic.png"},{id:3,name:"Tenor Drum",selected:!1,img:"https://server.pickyourdrum.link/files/instruments/TD_pic.png"},{id:4,name:"Cymbals",selected:!1,img:"https://server.pickyourdrum.link/files/instruments/Cym_pic.png"},{id:5,name:"BD & Cym",selected:!1,img:"https://server.pickyourdrum.link/files/instruments/BD_Cym_pic.png"}]),[r,o]=(0,t.useState)(!0),[p,g]=(0,t.useState)([]);(0,t.useEffect)(()=>{let e=async()=>{try{let e=await f.Z.get("https://server.pickyourdrum.link/users");g(e.data),o(!1)}catch(e){console.error("Error fetching data:",e)}};e()},[]);let x=s.filter(e=>e.selected).length===p.filter(e=>e.selected).length,y=e=>{let s=p.map(s=>s.user_id===e.user_id?{...s,selected:!e.selected}:s);g(s)},k=e=>{let n=s.map(s=>s.name===e.name?{...s,selected:!e.selected}:s);i(n)},v=(0,u.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.ZP,{container:!0,children:[(0,n.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,n.jsxs)(a.Z,{className:h()(e.container),children:[(0,n.jsx)("h2",{children:"Select Musicians"}),(0,n.jsx)("div",{className:h()(e.musicians),children:r?(0,n.jsx)("p",{children:"Loading..."}):(0,n.jsx)(n.Fragment,{children:p.map(s=>(0,n.jsxs)("div",{className:h()(e.card),children:[(0,n.jsx)("div",{className:h()(e.image,{[e.selected]:s.selected}),onClick:()=>y(s),children:(0,n.jsx)(c(),{priority:!0,src:s.image,alt:"select ".concat(s.first_name),width:200,height:280})},s.user_id),(0,n.jsxs)(d.Z,{style:{marginTop:"5%"},children:[s.first_name," ",s.last_name]})]},s.user_id))})})]})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,n.jsxs)(a.Z,{className:h()(e.container),children:[(0,n.jsx)("h2",{children:"Select Instruments"}),(0,n.jsx)("div",{className:h()(e.musicians),children:s.map(s=>(0,n.jsxs)("div",{className:h()(e.card),children:[(0,n.jsx)("div",{className:h()(e.image,{[e.selected]:s.selected}),onClick:()=>k(s),children:(0,n.jsx)(c(),{src:s.img,alt:"select ".concat(s.name),width:200,height:200})},s.name),(0,n.jsx)(d.Z,{style:{marginTop:"5%"},children:s.name})]},s.name))})]})})]}),(0,n.jsx)(m.Z,{variant:"contained",onClick:e=>{e.preventDefault();let i=p.filter(e=>e.selected),n=s.filter(e=>e.selected);v.push({pathname:"".concat(_,"/selection"),query:{musicians:JSON.stringify(i),instruments:JSON.stringify(n)}})},disabled:!x,type:"button",children:"Give me assignments!"})]})}}},function(e){e.O(0,[556,896,535,774,888,179],function(){return e(e.s=3214)}),_N_E=e.O()}]);