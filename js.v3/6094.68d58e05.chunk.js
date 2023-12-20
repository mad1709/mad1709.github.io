"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[6094],{56094:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var s=n(23132),r=n(47313),l=n(22408),a=n(47619),i=n(58467),c=n(38768),o=n(61113),d=n(67677),m=n(47131),u=n(56993),f=n(17551),x=n(15743),h=n(24193),p=n(4942),j=n(74165),y=n(15861),v=n(80827),Z=n(76747),g=n(56573),N=(0,v.hg)("fileManagerApp/items/getItems",function(){var e=(0,y.Z)((0,j.Z)().mark((function e(t){var n,s;return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.get("/api/file-manager/".concat(t));case 2:return n=e.sent,e.next=5,n.data;case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=(0,v.HF)({}),w=b.getSelectors((function(e){return e.fileManagerApp.items})),k=w.selectAll,I=(w.selectEntities,w.selectById),C=(0,v.oM)({name:"fileManagerApp/items",initialState:b.getInitialState({selectedItemId:null,path:[]}),reducers:{setSelectedItem:function(e,t){e.selectedItemId=t.payload}},extraReducers:(0,p.Z)({},N.fulfilled,(function(e,t){var n=t.payload,s=n.items,r=n.path;b.setAll(e,s),e.path=r,e.selectedItemId=null}))}),A=(0,Z.P1)([k],(function(e){return e.filter((function(e){return"folder"===e.type}))})),M=(0,Z.P1)([k],(function(e){return e.filter((function(e){return"folder"!==e.type}))})),S=function(e){return e.fileManagerApp.items.selectedItemId},z=function(e){return e.fileManagerApp.items.path},E=C.actions.setSelectedItem,F=C.reducer,$=n(45987),D=n(17592),P=n(51293),U=n(89994),B=n(23837),_=n(24929),O=n(5365),L=n(46417),T=["theme"],X=(0,D.ZP)(x.Z)((function(e){e.theme;var t=(0,$.Z)(e,T);return{backgroundColor:{PDF:P.Z[600],DOC:U.Z[600],XLS:B.Z[600],TXT:_.Z[600],JPG:O.Z[600]}[t.color]}}));var G=function(e){var t=e.type;return"folder"===t?(0,L.jsx)(u.Z,{className:"",size:56,color:"disabled",children:"heroicons-outline:folder"}):(0,L.jsxs)("div",{className:"relative",children:[(0,L.jsx)(u.Z,{className:"",size:56,color:"disabled",children:"heroicons-outline:document"}),(0,L.jsx)(X,{color:t,className:"absolute left-0 bottom-0 px-6 rounded text-12 font-semibold leading-20 text-white",children:t})]})};var H=function(e){var t=(0,l.I0)(),n=(0,l.v9)((function(e){return I(e,e.fileManagerApp.items.selectedItemId)}));return n?(0,L.jsxs)(d.E.div,{initial:{y:50,opacity:.8},animate:{y:0,opacity:1,transition:{delay:.3}},className:"file-details p-24 sm:p-32",children:[(0,L.jsx)("div",{className:"flex items-center justify-end w-full",children:(0,L.jsx)(m.Z,{className:"",size:"large",onClick:function(){return t(E(null))},children:(0,L.jsx)(u.Z,{children:"heroicons-outline:x"})})}),(0,L.jsx)(x.Z,{className:" w-full rounded-8 border preview h-128 sm:h-256 file-icon flex items-center justify-center my-32",sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,f.$n)(e.palette.background.default,.4):(0,f.$n)(e.palette.background.default,.02)}},children:(0,L.jsx)(d.E.div,{initial:{scale:0},animate:{scale:1,transition:{delay:.3}},children:(0,L.jsx)(G,{className:"",type:n.type})})}),(0,L.jsx)(o.Z,{className:"text-18 font-medium",children:n.name}),(0,L.jsx)("div",{className:"text-16 font-medium mt-32",children:"Information"}),(0,L.jsxs)("div",{className:"flex flex-col mt-16 border-t border-b divide-y font-medium",children:[(0,L.jsxs)("div",{className:"flex items-center justify-between py-12",children:[(0,L.jsx)(o.Z,{color:"text.secondary",children:"Created By"}),(0,L.jsx)(o.Z,{children:n.createdBy})]}),(0,L.jsxs)("div",{className:"flex items-center justify-between py-12",children:[(0,L.jsx)(o.Z,{color:"text.secondary",children:"Created At"}),(0,L.jsx)(o.Z,{children:n.createdAt})]}),(0,L.jsxs)("div",{className:"flex items-center justify-between py-12",children:[(0,L.jsx)(o.Z,{color:"text.secondary",children:"Modified At"}),(0,L.jsx)(o.Z,{children:n.modifiedAt})]}),(0,L.jsxs)("div",{className:"flex items-center justify-between py-12",children:[(0,L.jsx)(o.Z,{color:"text.secondary",children:"Size"}),(0,L.jsx)(o.Z,{children:n.size})]}),n.contents&&(0,L.jsxs)("div",{className:"flex items-center justify-between py-12",children:[(0,L.jsx)(o.Z,{color:"text.secondary",children:"Contents"}),(0,L.jsx)(o.Z,{children:n.contents})]})]}),n.description&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:"text-16 font-medium mt-32 pb-16 border-b",children:"Description"}),(0,L.jsx)(o.Z,{className:"py-12",children:n.description})]}),(0,L.jsxs)("div",{className:"grid grid-cols-2 gap-16 w-full mt-32",children:[(0,L.jsx)(h.Z,{className:"flex-auto",color:"secondary",variant:"contained",children:"Download"}),(0,L.jsx)(h.Z,{className:"flex-auto",children:"Delete"})]})]}):null},J=(0,n(9038).UY)({items:F}),R=n(3404),W=n(2135),Y=n(59018);var q=function(e){var t=(0,l.v9)(A),n=(0,l.v9)(M),s=(0,l.v9)(z);return(0,L.jsxs)("div",{className:"p-24 sm:p-32 w-full flex flex-col sm:flex-row space-y-8 sm:space-y-0 items-center justify-between",children:[(0,L.jsxs)("div",{className:"flex flex-col items-center sm:items-start space-y-8 sm:space-y-0",children:[(0,L.jsxs)(d.E.span,{className:"flex items-end",initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,children:[(0,L.jsx)(o.Z,{component:W.rU,to:"/apps/file-manager",className:"text-20 md:text-32 font-extrabold tracking-tight leading-none",role:"button",children:"File Manager"}),s.length>0&&(0,L.jsxs)(R.Z,{"aria-label":"breadcrumb",className:"mx-12",separator:(0,L.jsx)(Y.Z,{fontSize:"small"}),children:[(0,L.jsx)("div",{}),s.map((function(e,t){return t+1===s.length?(0,L.jsx)(o.Z,{children:e.name},t):(0,L.jsx)(W.rU,{color:"text.primary",to:"/apps/file-manager/".concat(e.id),children:e.name},t)}))]})]}),(0,L.jsx)(o.Z,{component:d.E.span,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},delay:500,className:"text-14 font-medium mx-2",color:"text.secondary",children:"".concat(t.length," folders, ").concat(n.length," files")})]}),(0,L.jsx)("div",{className:"flex items-center -mx-8",children:(0,L.jsx)(h.Z,{className:"mx-8 whitespace-nowrap",variant:"contained",color:"secondary",startIcon:(0,L.jsx)(u.Z,{size:20,children:"heroicons-outline:plus"}),children:"Upload file"})})]})},K=n(5227);var Q=function(e){var t=e.item,n=(0,l.I0)();return t?(0,L.jsxs)(x.Z,{sx:{backgroundColor:"background.paper"},className:"relative w-full sm:w-160 h-160 m-8 p-16 shadow rounded-16",children:[(0,L.jsx)(m.Z,{className:"absolute z-20 top-0 right-0 m-6 w-32 h-32 min-h-32",onClick:function(){return n(E(t.id))},children:(0,L.jsx)(u.Z,{size:20,children:"heroicons-solid:information-circle"})}),(0,L.jsxs)(K.Z,{className:"flex flex-col h-full w-full",to:"/apps/file-manager/".concat(t.id),role:"button",children:[(0,L.jsx)("div",{className:"flex flex-auto w-full items-center justify-center",children:(0,L.jsx)(G,{className:"",type:t.type})}),(0,L.jsxs)("div",{className:"flex shrink flex-col justify-center text-center",children:[(0,L.jsx)(o.Z,{className:"truncate text-12 font-medium",children:t.name}),t.contents&&(0,L.jsx)(o.Z,{className:"truncate text-12 font-medium",color:"text.secondary",children:t.contents})]})]})]}):null};var V=function(e){var t=e.item,n=(0,l.I0)();return t?(0,L.jsxs)(x.Z,{sx:{backgroundColor:"background.paper"},className:"flex flex-col relative w-full sm:w-160 h-160 m-8 p-16 shadow rounded-16 cursor-pointer",onClick:function(){return n(E(t.id))},children:[(0,L.jsx)("div",{className:"flex flex-auto w-full items-center justify-center",children:(0,L.jsx)(G,{className:"",type:t.type})}),(0,L.jsxs)("div",{className:"flex shrink flex-col justify-center text-center",children:[(0,L.jsx)(o.Z,{className:"truncate text-12 font-medium",children:t.name}),t.contents&&(0,L.jsx)(o.Z,{className:"truncate text-12 font-medium",color:"text.secondary",children:t.contents})]})]}):null};var ee=function(){var e=(0,l.v9)(A),t=(0,l.v9)(M);return(0,L.jsxs)("div",{className:"p-32",children:[e.length>0&&(0,L.jsxs)(x.Z,{className:"p-16 w-full rounded-16 mb-24 border",sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,f.$n)(e.palette.background.default,.4):(0,f.$n)(e.palette.background.default,.02)}},children:[(0,L.jsx)(o.Z,{className:"font-medium",children:"Folders"}),(0,L.jsx)("div",{className:"flex flex-wrap -m-8 mt-8",children:e.map((function(e){return(0,L.jsx)(Q,{item:e},e.id)}))})]}),t.length>0&&(0,L.jsxs)(x.Z,{className:"p-16 w-full rounded-16 mb-24 border",sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,f.$n)(e.palette.background.default,.4):(0,f.$n)(e.palette.background.default,.02)}},children:[(0,L.jsx)(o.Z,{className:"font-medium",children:"Files"}),(0,L.jsx)("div",{className:"flex flex-wrap -m-8 mt-8",children:t.map((function(e){return(0,L.jsx)(V,{item:e},e.id)}))})]})]})};var te=(0,s.Z)("fileManagerApp",J)((function(){var e=(0,l.I0)(),t=(0,l.v9)(S),n=(0,i.UO)(),s=(0,c.Z)((function(e){return e.breakpoints.down("lg")}));return(0,r.useEffect)((function(){e(N(n.folderId))}),[e,n.folderId]),(0,L.jsx)(a.Z,{header:(0,L.jsx)(q,{}),content:(0,L.jsx)(ee,{}),rightSidebarOpen:Boolean(t),rightSidebarContent:(0,L.jsx)(H,{}),rightSidebarWidth:400,scroll:s?"normal":"content"})}))},59018:function(e,t,n){var s=n(64836);t.Z=void 0;var r=s(n(45045)),l=n(46417),a=(0,r.default)((0,l.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.Z=a}}]);