(this["webpackJsonpreact-three-fiber-autoshop"]=this["webpackJsonpreact-three-fiber-autoshop"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n.n(c),s=n(35),i=n.n(s),a=(n(45),n(46),n(15)),o=n(24),j=n(0),b=n(9),l=function(e){var t=Object(a.d)(j.TextureLoader,"/react-three-autoshop/autoshop.jpg"),n=Object(a.e)().gl,r=Object(c.useMemo)((function(){return new j.WebGLCubeRenderTarget(t.image.height).fromEquirectangularTexture(n,t)}),[]);return Object(b.jsx)("primitive",{attach:"background",object:r.texture})},u=n(8),h=n(10),d=function(e){var t=Object(o.b)((function(){return Object(u.a)({args:[20,1,10]},e)})),n=Object(h.a)(t,2),c=n[0];n[1];return Object(b.jsxs)("mesh",Object(u.a)(Object(u.a)({ref:c},e),{},{receiveShadow:!0,children:[Object(b.jsx)("boxBufferGeometry",{args:[200,1,200]}),Object(b.jsx)("meshPhysicalMaterial",{transparent:!0,opacity:.2})]}))},O={activeMeshName:"Capot001_CAR_PAINT_0",cameraPos:new j.Vector3(9,2,4),target:new j.Vector3(4,0,0),shouldUpdate:!0},f=function(e){var t=function(e){O.activeMesh&&(O.activeMesh.material.color=new j.Color(e.target.style.background))};return Object(b.jsxs)("div",{style:{position:"absolute",zIndex:1,left:0,right:0,margin:"auto",width:"fit-content",display:"flex",top:"20px"},children:[Object(b.jsx)("div",{onClick:t,style:{background:"blue",height:50,width:50}}),Object(b.jsx)("div",{onClick:t,style:{background:"yellow",height:50,width:50}}),Object(b.jsx)("div",{onClick:t,style:{background:"white",height:50,width:50}})]})},p=function(e){var t=e.position,n=void 0===t?[0,0,0]:t,c=e.offset,r=void 0===c?[0,0,0]:c,s=e.dims,i=void 0===s?[1,1,1]:s,a=e.visible,j=void 0!==a&&a,l=e.children,u=Object(o.b)((function(){return{mass:1,args:i,position:n}})),d=Object(h.a)(u,2),O=d[0],f=d[1];return Object(b.jsxs)("group",{ref:O,api:f,children:[Object(b.jsxs)("mesh",{scale:i,visible:j,children:[Object(b.jsx)("boxBufferGeometry",{}),Object(b.jsx)("meshPhysicalMaterial",{wireframe:!0})]}),Object(b.jsx)("group",{position:r,children:l})]})},g=n(39);Object(a.b)({DragControls:g.a});var x=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useState)([]),s=Object(h.a)(r,2),i=s[0],o=s[1],j=Object(a.e)(),l=j.camera,u=j.gl,d=j.scene;return Object(c.useEffect)((function(){o(t.current.children)}),[]),Object(c.useEffect)((function(){n.current.addEventListener("hoveron",(function(e){d.orbitControls.enabled=!1})),n.current.addEventListener("hoveroff",(function(e){d.orbitControls.enabled=!0})),n.current.addEventListener("drag",(function(e){var t,n;null===(t=e.object.api)||void 0===t||t.position.copy(e.object.position),null===(n=e.object.api)||void 0===n||n.velocity.set(0,0,0)})),n.current.addEventListener("dragstart",(function(e){var t;null===(t=e.object.api)||void 0===t||t.mass.set(0)})),n.current.addEventListener("dragend",(function(e){var t;null===(t=e.object.api)||void 0===t||t.mass.set(1)}))}),[i]),Object(b.jsxs)("group",{ref:t,children:[Object(b.jsx)("dragControls",{transformGroup:e.transformGroup,ref:n,args:[i,l,u.domElement]}),e.children]})},m=n(40),v=function(e){var t,n=Object(a.d)(m.a,"/react-three-autoshop"+e.path);return n.animations.length>0&&(t=new j.AnimationMixer(n.scene),n.animations.forEach((function(e){t.clipAction(e).play()}))),Object(a.c)((function(e,n){var c;null===(c=t)||void 0===c||c.update(n)})),n.scene.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material.side=j.FrontSide)})),Object(b.jsx)("primitive",{object:n.scene,scale:e.scale})},w=function(){return Object(b.jsxs)(c.Suspense,{fallback:null,children:[Object(b.jsx)(x,{transformGroup:!0,children:Object(b.jsx)(p,{visible:!0,position:[4,2,0],dims:[3,2,6],offset:[0,-.4,.8],children:Object(b.jsx)(v,{path:"/tesla_model_3/scene.gltf",scale:new Array(3).fill(.01)})})}),Object(b.jsx)(x,{transformGroup:!0,children:Object(b.jsx)(p,{visible:!0,position:[-4,2,0],dims:[3,2,7],offset:[0,-.8,.2],children:Object(b.jsx)(v,{path:"/tesla_model_s/scene.gltf",scale:new Array(3).fill(.012),position:[-4,.2,0]})})}),Object(b.jsx)("group",{rotation:[0,Math.PI,0],children:Object(b.jsx)(v,{path:"/mech_drone/scene.gltf",scale:new Array(3).fill(.01)})})]})},y=n(20),C=function(e){return Object(y.a)(e),Object(a.c)((function(e){var t=e.camera,n=e.scene;(O.activeMeshName.name!==O.activeMeshName&&(O.activeMesh=n.getObjectByName(O.activeMeshName)||{}),O.shouldUpdate)&&(t.position.lerp(O.cameraPos,.1),n.orbitControls.target.lerp(O.target,.1),n.orbitControls.update(),t.position.clone().sub(O.cameraPos).length()<.1&&(O.shouldUpdate=!1))})),null},M=n(14),k={zIndex:1,position:"absolute",bottom:"30vh",height:"30px",width:"30px",background:"white",textAlign:"center",borderRadius:"100%",fontSize:20,fontWeight:"bold",opacity:.7,border:"1px solid black",cursor:"pointer"},P=function(e){Object(y.a)(e);var t={1:{cameraPos:[9,2,4],target:[4,0,0],name:"Capot001_CAR_PAINT_0"},2:{cameraPos:[1,2,5],target:[-4,0,0],name:"object005_bod_0"}},n=function(e){var n,c;(n=O.cameraPos).set.apply(n,Object(M.a)(t[e].cameraPos)),(c=O.target).set.apply(c,Object(M.a)(t[e].cameraPos)),O.shouldUpdate=!0,O.activeMeshName=t[e].name};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:function(e){return n(2)},style:Object(u.a)(Object(u.a)({},k),{},{left:"40vw"}),children:"<"}),Object(b.jsx)("button",{onClick:function(e){return n(1)},style:Object(u.a)(Object(u.a)({},k),{},{right:"40vw"}),children:">"})]})},E=function(e){var t=Object(c.useRef)(),n=Object(a.e)().scene;return Object(c.useEffect)((function(){n.lights?n.light.push(t):n.light=[t]}),[]),Object(b.jsxs)("mesh",Object(u.a)(Object(u.a)({},e),{},{ref:t,children:[Object(b.jsx)("pointLight",{castShadow:!0,shadowMapHeight:Math.pow(2,10),shadowMapWidth:Math.pow(2,10),"shadow-radius":10}),Object(b.jsx)("sphereBufferGeometry",{args:[.2,20,20]}),Object(b.jsx)("meshPhongMaterial",{emissive:"white"})]}))},S=n(41);Object(a.b)({OrbitControls:S.a});var L=function(){var e=Object(a.e)(),t=e.camera,n=e.gl;return Object(b.jsx)("orbitControls",{attach:"orbitControls",args:[t,n.domElement]})},_=function(e){return Object(y.a)(e),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ambientLight",{intensity:.2}),Object(b.jsx)("directionalLight",{position:[6,3,0],intensity:2,castShadow:!0}),Object(b.jsx)(L,{}),Object(b.jsx)("axesHelper",{args:[5]}),Object(b.jsx)(E,{position:[-6,3,0]}),Object(b.jsx)(E,{position:[0,3,0]}),Object(b.jsx)(E,{position:[6,3,0]})]})},A=n(27),G=function(e){Object(y.a)(e);var t=Object(c.useState)([]),n=Object(h.a)(t,2),r=n[0],s=n[1],i=Object(a.e)().scene;return Object(c.useEffect)((function(){i.lights&&3===i.lights.length&&s(i.lights)}),[i.lights]),r?Object(b.jsxs)(A.c,{children:[Object(b.jsx)(A.b,{focusDistance:0,focalLength:.02,bokehScale:2,height:480}),Object(b.jsx)(A.a,{}),r.map((function(e){return Object(b.jsx)(A.d,{sun:e.current},e.current.uuid)}))]}):null};var N=function(){return Object(b.jsxs)("div",{style:{height:"100vh",width:"100vw"},children:[Object(b.jsx)(f,{}),Object(b.jsx)(P,{}),Object(b.jsxs)(a.a,{gl:{powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!1},shadows:!0,style:{background:"yellow"},camera:{position:[7,7,7]},children:[Object(b.jsx)(c.Suspense,{fallback:null,children:Object(b.jsx)(l,{})}),Object(b.jsx)(C,{}),Object(b.jsx)(_,{}),Object(b.jsxs)(o.a,{children:[Object(b.jsx)(w,{}),Object(b.jsx)(d,{position:[0,-.5,0]})]}),Object(b.jsx)(G,{})]})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),F()}},[[51,1,2]]]);
//# sourceMappingURL=main.6fed142b.chunk.js.map