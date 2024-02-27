import{o,c as p,a as s,b as _,F as g,j as c,d as u,t as n,e as d,n as v,q as m,s as f,v as h,w as j,x as w,y as k,z as y,B as x,C as R,D as F,E as M,G as C,H as N,I as S,J as G,K as I,L as J,M as T,N as z,O as A,P as B,Q as E,R as H,S as L,T as P,U,V,W,X as $,Y as q,Z as D,$ as K,a0 as O,a1 as Q,a2 as X,a3 as Y,a4 as Z,a5 as __,a6 as i_,a7 as e_,a8 as a_,a9 as t_,aa as l_,ab as o_,ac as p_,ad as s_,ae as g_,af as n_,ag as b_,ah as r_,ai as c_,aj as u_,ak as d_,al as v_,am as m_,an as f_,ao as h_,ap as j_,aq as w_,ar as k_,as as y_,at as x_,au as R_,av as F_,aw as M_,ax as C_,ay as N_}from"./index-65c42053.js";const S_={class:"py-8 px-8 lg:py-20 lg:px-20 mob:px-4",style:{"background-color":"#EAF7F3","min-height":"100vh"}},G_=_("div",{class:"row text-center mb-5"},[_("div",{class:"text-[2.8rem] md:text-[3.08rem] font-extrabold cabin uppercase"}," flood maps ")],-1),I_={class:""},J_={class:""},T_={class:"grid grid-cols-2 mob:grid-cols-1 gap-6"},z_=["href"],A_={class:"pic hover:scale-105 duration-500"},B_=["src"],E_={class:"C31 mt-3 uppercase text-[#134A39] text-[1rem] lg:text-[1rem] font-bold mob:text-[0.7rem]"},H_={class:"bg-brandgreen text-white px-4 py-4 rounded-md font-bold hover:bg-primary500 transition w-[40%] text-center mx-auto cursor-pointer text-[0.7rem] uppercase mt-4"},U_={__name:"FloodEvent",setup(L_){function l(i){return i.trim().split(/\s+/).length}function a(i,t){return l(i),l(i)>12?i.split(" ").splice(0,t).join(" ")+"...":i}const b=[{link:"https://www.arcgis.com/apps/webappviewer/index.html?id=2b0fa66b05534e7780e7396234b7c6f3",title:"Flood Susceptibility Map of Ikorodu",formatTitle:a("Global Flood Risk Assessment - Regional Realities",11),src:"floodmap3.jpeg",id:1,tag:"map"},{link:"https://africageoportal.maps.arcgis.com/apps/webappviewer/index.html?id=d07dba63dbd84fbbb555d6c6087759f3",title:"Flood Susceptibility Map of Ilorin",formatTitle:a("using geospatial technology in geohazard mapping saves lives",11),src:"floodmap2.jpeg",id:3,tag:"map"},{link:"https://africageoportal.maps.arcgis.com/apps/webappviewer/index.html?id=7cba8204d65c4ceda63c7c89e632606b",title:"Flood Susceptibility Map of Maiduguri City",formatTitle:a("All about GRMI hashnode mapathon",11),src:"floodmap1.jpeg",id:4,tag:"map"},{link:"https://africageoportal.maps.arcgis.com/apps/webappviewer/index.html?id=1205a4ecde984a55841f93e837828a70",title:"Flood Susceptibility Map of Ilorin",src:"ins20.png",id:2,tag:"map"},{link:"https://storymaps.arcgis.com/stories/39d5b1d1e2114b74aebdf8fe73ecb993",title:"Strengthening Community Resilience through Collaborative Geo-Hazard Risk Mapping in Jos North, Nigeria",formatTitle:a("Strengthening Community Resilience through Collaborative Geo-Hazard Risk Mapping in Jos North, Nigeria",11),src:"ins7.png",tag:"storymap",id:7},{link:"https://storymaps.arcgis.com/stories/528572dd623141589a03bbba059df683",title:"Mapping of Flood-Prone Areas in Kogi State Nigeria",formatTitle:a("Strengthening Community Resilience through Collaborative Geo-Hazard Risk Mapping in Jos North, Nigeria",11),src:"ins21.png",tag:"storymap",id:7}],r=i=>new URL(Object.assign({"../../public/GRMI.ico":v,"../../public/amuwo.png":m,"../../public/award1.jpeg":f,"../../public/award2.jpeg":h,"../../public/award3.jpeg":j,"../../public/award4.jpeg":w,"../../public/award5.jpeg":k,"../../public/awareness.JPG":y,"../../public/bama.png":x,"../../public/birnin-kebbi.png":R,"../../public/damboa.png":F,"../../public/default.jfif":M,"../../public/default1.png":C,"../../public/esri - Copy.jpeg":N,"../../public/esri.jpeg":S,"../../public/etsako.png":G,"../../public/fair.png":I,"../../public/flood-risk.JPG":J,"../../public/floodmap1.jpeg":T,"../../public/floodmap2.jpeg":z,"../../public/floodmap3.jpeg":A,"../../public/fufore.png":B,"../../public/girei.png":E,"../../public/ikorodu.png":H,"../../public/ikorodu1.png":L,"../../public/ins1.png":P,"../../public/ins10.png":U,"../../public/ins11.png":V,"../../public/ins12.jpg":W,"../../public/ins13.jpg":$,"../../public/ins15.jpeg":q,"../../public/ins16.jpeg":D,"../../public/ins17.jpeg":K,"../../public/ins18.jpg":O,"../../public/ins19.png":Q,"../../public/ins2.png":X,"../../public/ins20.png":Y,"../../public/ins21.png":Z,"../../public/ins3.png":__,"../../public/ins4.png":i_,"../../public/ins5.png":e_,"../../public/ins6.png":a_,"../../public/ins7.png":t_,"../../public/ins8.png":l_,"../../public/ins9.png":o_,"../../public/insight1.png":p_,"../../public/lagos.png":s_,"../../public/lagos1.png":g_,"../../public/leeds.jpeg":n_,"../../public/lekki.png":b_,"../../public/lekki1.png":r_,"../../public/logoBenue.png":c_,"../../public/maiduguri.png":u_,"../../public/mapathon.jpeg":d_,"../../public/mapathon1.jpeg":v_,"../../public/monguno1.png":m_,"../../public/paper1.jpeg":f_,"../../public/paper2.jpeg":h_,"../../public/paper3.jpeg":j_,"../../public/paper4.jpeg":w_,"../../public/paper5.jpeg":k_,"../../public/partner1.png":y_,"../../public/partner2.png":x_,"../../public/partner3.png":R_,"../../public/partner4.png":F_,"../../public/podcast.jpeg":M_,"../../public/pub-2.jpg":C_,"../../public/report1.png":N_})[`../../public/${i}`],self.location).href;return(i,t)=>(o(),p(g,null,[s(u),_("div",S_,[_("div",null,[G_,_("div",I_,[_("div",J_,[_("div",T_,[(o(),p(g,null,c(b,e=>_("a",{href:e.link,key:e.id,class:"transition p-4 rounded-[0.5rem] cursor-pointer",target:"_blank"},[_("div",A_,[_("img",{src:r(e.src),class:"img-fluid overflow-hidden h-[15rem] w-full object-fill rounded-t-[0.5rem]",alt:"Responsive image"},null,8,B_)]),_("div",E_,n(e.title),1),_("div",H_," view "+n(e.tag),1)],8,z_)),64))])])])])]),s(d)],64))}};export{U_ as default};
