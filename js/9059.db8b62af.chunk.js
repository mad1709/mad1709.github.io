"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[9059],{49059:function(e,s,l){l.r(s),l.d(s,{default:function(){return Q}});var t=l(23132),a=l(47313),i=l(22408),r=l(58970),n=l(53996),o=l(67677),c=l(61113),d=l(9038),m=l(4942),x=l(74165),h=l(15861),f=l(80827),u=l(56573),g=(0,f.hg)("analyticsDashboardApp/widgets/getWidgets",(0,h.Z)((0,x.Z)().mark((function e(){var s,l;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/api/dashboards/analytics/widgets");case 2:return s=e.sent,e.next=5,s.data;case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}}),e)})))),v=(0,f.oM)({name:"analyticsDashboardApp/widgets",initialState:null,reducers:{},extraReducers:(0,m.Z)({},g.fulfilled,(function(e,s){return s.payload}))}),p=function(e){return e.analyticsDashboardApp.widgets},j=v.reducer,N=(0,d.UY)({widgets:j}),y=l(24193),b=l(56993),w=l(46417);var Z=function(e){return(0,w.jsx)("div",{className:"flex w-full container",children:(0,w.jsxs)("div",{className:"flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 p-24 md:p-32 pb-0 md:pb-0",children:[(0,w.jsxs)("div",{className:"flex flex-col flex-auto",children:[(0,w.jsx)(c.Z,{className:"text-3xl font-semibold tracking-tight leading-8",children:"Analytics dashboard"}),(0,w.jsx)(c.Z,{className:"font-medium tracking-tight",color:"text.secondary",children:"Monitor metrics, check reports and review performance"})]}),(0,w.jsxs)("div",{className:"flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12",children:[(0,w.jsx)(y.Z,{className:"whitespace-nowrap",startIcon:(0,w.jsx)(b.Z,{size:20,children:"heroicons-solid:cog"}),children:"Settings"}),(0,w.jsx)(y.Z,{className:"whitespace-nowrap",variant:"contained",color:"secondary",startIcon:(0,w.jsx)(b.Z,{size:20,children:"heroicons-solid:save"}),children:"Export"})]})]})})},k=l(29439),C=l(17592),S=l(19860),z=l(82910),E=l(58446),A=l(5297),V=l(9506),F=l(65280),O=l(62201),D=l(70501),L=(0,C.ZP)(D.Z)((function(e){var s=e.theme;return{background:s.palette.primary.main,color:s.palette.primary.contrastText}}));var R=function(){var e=(0,S.Z)(),s=(0,i.v9)((0,O.lK)(e.palette.primary.main)),l=(0,i.v9)(p),t=null===l||void 0===l?void 0:l.visitors,r=t.series,n=t.ranges,o=(0,a.useState)(0),d=(0,k.Z)(o,2),m=d[0],x=d[1],h=Object.keys(n)[m],f={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"area",toolbar:{show:!1},zoom:{enabled:!1}},colors:[s.palette.secondary.light],dataLabels:{enabled:!1},fill:{colors:[s.palette.secondary.dark]},grid:{show:!0,borderColor:s.palette.divider,padding:{top:10,bottom:-40,left:0,right:0},position:"back",xaxis:{lines:{show:!0}}},stroke:{width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"},y:{formatter:function(e){return"".concat(e)}}},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{stroke:{color:s.palette.divider,dashArray:0,width:2}},labels:{offsetY:-20,style:{colors:s.palette.text.secondary}},tickAmount:20,tooltip:{enabled:!1},type:"datetime"},yaxis:{axisTicks:{show:!1},axisBorder:{show:!1},min:function(e){return e-1},max:function(e){return e+1},tickAmount:5,show:!1}};return(0,w.jsx)(z.Z,{theme:s,children:(0,w.jsxs)(L,{className:"sm:col-span-2 lg:col-span-3 dark flex flex-col flex-auto shadow rounded-2xl overflow-hidden",children:[(0,w.jsxs)("div",{className:"flex items-center justify-between mt-40 ml-40 mr-24 sm:mr-40",children:[(0,w.jsxs)("div",{className:"flex flex-col",children:[(0,w.jsx)(c.Z,{className:"mr-16 text-2xl md:text-3xl font-semibold tracking-tight leading-7",children:"Visitors Overview"}),(0,w.jsx)(c.Z,{className:"font-medium",color:"text.secondary",children:"Number of unique visitors"})]}),(0,w.jsx)("div",{className:"mt-12 sm:mt-0 sm:ml-8",children:(0,w.jsx)(A.Z,{value:m,onChange:function(e,s){return x(s)},indicatorColor:"secondary",textColor:"inherit",variant:"scrollable",scrollButtons:!1,className:"-mx-4 min-h-40",classes:{indicator:"flex justify-center bg-transparent w-full h-full"},TabIndicatorProps:{children:(0,w.jsx)(V.Z,{sx:{bgcolor:"text.disabled"},className:"w-full h-full rounded-full opacity-20"})},children:Object.entries(n).map((function(e){var s=(0,k.Z)(e,2),l=s[0],t=s[1];return(0,w.jsx)(F.Z,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 px-12",disableRipple:!0,label:t},l)}))})})]}),(0,w.jsx)("div",{className:"flex flex-col flex-auto h-320",children:(0,w.jsx)(E.Z,{options:f,series:r[h],type:f.chart.type,height:f.chart.height})})]})})},I=l(66212);var M=function(e){var s=(0,S.Z)(),l=(0,i.v9)(p),t=null===l||void 0===l?void 0:l.conversions,a=t.series,r=t.amount,n=t.labels,o={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:[s.palette.secondary.main],fill:{colors:[s.palette.secondary.light],opacity:.5},stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"category",categories:n}};return(0,w.jsxs)(D.Z,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden",children:[(0,w.jsxs)("div",{className:"flex items-start justify-between m-24 mb-0",children:[(0,w.jsx)(c.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Conversions"}),(0,w.jsx)("div",{className:"ml-8",children:(0,w.jsx)(I.Z,{size:"small",className:"font-medium text-sm",label:" 30 days"})})]}),(0,w.jsxs)("div",{className:"flex flex-col lg:flex-row lg:items-center mx-24 mt-12",children:[(0,w.jsx)(c.Z,{className:"text-7xl font-bold tracking-tighter leading-tight",children:r.toLocaleString("en-US")}),(0,w.jsxs)("div",{className:"flex lg:flex-col lg:ml-12",children:[(0,w.jsx)(b.Z,{size:20,className:"text-red-500",children:"heroicons-solid:trending-down"}),(0,w.jsxs)(c.Z,{className:"flex items-center ml-4 lg:ml-0 lg:mt-2 text-md leading-none whitespace-nowrap",color:"text.secondary",children:[(0,w.jsx)("span",{className:"font-medium text-red-500",children:"2%"}),(0,w.jsx)("span",{className:"ml-4",children:"below target"})]})]})]}),(0,w.jsx)("div",{className:"flex flex-col flex-auto h-80",children:(0,w.jsx)(E.Z,{options:o,series:a,type:o.chart.type,height:o.chart.height})})]})};var B=function(e){var s=(0,S.Z)(),l=(0,i.v9)(p),t=null===l||void 0===l?void 0:l.impressions,a=t.series,r=t.amount,n=t.labels,o={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:[s.palette.success.main],fill:{colors:[s.palette.success.light],opacity:.5},stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"category",categories:n}};return(0,w.jsxs)(D.Z,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden",children:[(0,w.jsxs)("div",{className:"flex items-start justify-between m-24 mb-0",children:[(0,w.jsx)(c.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Impressions"}),(0,w.jsx)("div",{className:"ml-8",children:(0,w.jsx)(I.Z,{size:"small",className:"font-medium text-sm",label:" 30 days"})})]}),(0,w.jsxs)("div",{className:"flex flex-col lg:flex-row lg:items-center mx-24 mt-12",children:[(0,w.jsx)(c.Z,{className:"text-7xl font-bold tracking-tighter leading-tight",children:r.toLocaleString("en-US")}),(0,w.jsxs)("div",{className:"flex lg:flex-col lg:ml-12",children:[(0,w.jsx)(b.Z,{size:20,className:"text-red-500",children:"heroicons-solid:trending-down"}),(0,w.jsxs)(c.Z,{className:"flex items-center ml-4 lg:ml-0 lg:mt-2 text-md leading-none whitespace-nowrap",color:"text.secondary",children:[(0,w.jsx)("span",{className:"font-medium text-red-500",children:"4%"}),(0,w.jsx)("span",{className:"ml-4",children:"below target"})]})]})]}),(0,w.jsx)("div",{className:"flex flex-col flex-auto h-80",children:(0,w.jsx)(E.Z,{options:o,series:a,type:o.chart.type,height:o.chart.height})})]})};var P=function(e){var s=(0,S.Z)(),l=(0,i.v9)(p),t=null===l||void 0===l?void 0:l.visits,a=t.series,r=t.amount,n=t.labels,o={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:[s.palette.error.main],fill:{colors:[s.palette.error.light],opacity:.5},stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"category",categories:n}};return(0,w.jsxs)(D.Z,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden",children:[(0,w.jsxs)("div",{className:"flex items-start justify-between m-24 mb-0",children:[(0,w.jsx)(c.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Visits"}),(0,w.jsx)("div",{className:"ml-8",children:(0,w.jsx)(I.Z,{size:"small",className:"font-medium text-sm",label:" 30 days"})})]}),(0,w.jsxs)("div",{className:"flex flex-col lg:flex-row lg:items-center mx-24 mt-12",children:[(0,w.jsx)(c.Z,{className:"text-7xl font-bold tracking-tighter leading-tight",children:r.toLocaleString("en-US")}),(0,w.jsxs)("div",{className:"flex lg:flex-col lg:ml-12",children:[(0,w.jsx)(b.Z,{size:20,className:"text-red-500",children:"heroicons-solid:trending-down"}),(0,w.jsxs)(c.Z,{className:"flex items-center ml-4 lg:ml-0 lg:mt-2 text-md leading-none whitespace-nowrap",color:"text.secondary",children:[(0,w.jsx)("span",{className:"font-medium text-red-500",children:"4%"}),(0,w.jsx)("span",{className:"ml-4",children:"below target"})]})]})]}),(0,w.jsx)("div",{className:"flex flex-col flex-auto h-80",children:(0,w.jsx)(E.Z,{options:o,series:a,type:o.chart.type,height:o.chart.height})})]})},U=l(49709);var G=function(e){var s=(0,S.Z)(),l=(0,i.v9)(p),t=null===l||void 0===l?void 0:l.visitorsVsPageViews,a=t.series,r=t.averageRatio,n=t.predictedRatio,o=t.overallScore,d=(t.labels,{chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",toolbar:{show:!1},zoom:{enabled:!1}},colors:[s.palette.primary.light,s.palette.primary.light],dataLabels:{enabled:!1},fill:{colors:[s.palette.primary.dark,s.palette.primary.light],opacity:.5},grid:{show:!1,padding:{bottom:-40,left:0,right:0}},legend:{show:!1},stroke:{curve:"smooth",width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"}},xaxis:{axisBorder:{show:!1},labels:{offsetY:-20,rotate:0,style:{colors:s.palette.text.secondary}},tickAmount:3,tooltip:{enabled:!1},type:"datetime"},yaxis:{labels:{style:{colors:s.palette.divider}},max:function(e){return e+250},min:function(e){return e-250},show:!1,tickAmount:5}});return(0,w.jsxs)(D.Z,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden",children:[(0,w.jsxs)("div",{className:"flex items-start justify-between m-24 mb-0",children:[(0,w.jsx)(c.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Visitors vs. Page Views"}),(0,w.jsx)("div",{className:"ml-8",children:(0,w.jsx)(I.Z,{size:"small",className:"font-medium text-sm",label:" 30 days"})})]}),(0,w.jsx)("div",{className:"flex items-start mt-24 mx-24",children:(0,w.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-42 sm:gap-48",children:[(0,w.jsxs)("div",{className:"flex flex-col",children:[(0,w.jsxs)("div",{className:"flex items-center",children:[(0,w.jsx)("div",{className:"font-medium text-secondary leading-5",children:"Overall Score"}),(0,w.jsx)(U.Z,{title:"Score is calculated by using the historical ratio between Page Views and Visitors. Best score is 1000, worst score is 0.",children:(0,w.jsx)(b.Z,{className:"ml-6",size:16,color:"disabled",children:"heroicons-solid:information-circle"})})]}),(0,w.jsxs)("div",{className:"flex items-start mt-8",children:[(0,w.jsx)("div",{className:"text-4xl font-bold tracking-tight leading-none",children:o}),(0,w.jsxs)("div",{className:"flex items-center ml-8",children:[(0,w.jsx)(b.Z,{className:"text-green-500",size:20,children:"heroicons-solid:arrow-circle-up"}),(0,w.jsx)(c.Z,{className:"ml-4 text-md font-medium text-green-500",children:"42.9%"})]})]})]}),(0,w.jsxs)("div",{className:"flex flex-col",children:[(0,w.jsxs)("div",{className:"flex items-center",children:[(0,w.jsx)("div",{className:"font-medium text-secondary leading-5",children:"Average Ratio"}),(0,w.jsx)(U.Z,{title:"Average Ratio is the average ratio between Page Views and Visitors",children:(0,w.jsx)(b.Z,{className:"ml-6",size:16,color:"disabled",children:"heroicons-solid:arrow-circle-up"})})]}),(0,w.jsxs)("div",{className:"flex items-start mt-8",children:[(0,w.jsxs)("div",{className:"text-4xl font-bold tracking-tight leading-none",children:[r,"%"]}),(0,w.jsxs)("div",{className:"flex items-center ml-8",children:[(0,w.jsx)(b.Z,{className:"text-red-500",size:20,children:"heroicons-solid:arrow-circle-down"}),(0,w.jsx)(c.Z,{className:"ml-4 text-md font-medium text-red-500",children:"13.1%"})]})]})]}),(0,w.jsxs)("div",{className:"flex flex-col",children:[(0,w.jsxs)("div",{className:"flex items-center",children:[(0,w.jsx)("div",{className:"font-medium text-secondary leading-5",children:"Predicted Ratio"}),(0,w.jsx)(U.Z,{title:"Predicted Ratio is calculated by using historical ratio, current trends and your goal targets.",children:(0,w.jsx)(b.Z,{className:"ml-6",size:16,color:"disabled",children:"heroicons-solid:information-circle"})})]}),(0,w.jsxs)("div",{className:"flex items-start mt-8",children:[(0,w.jsxs)("div",{className:"text-4xl font-bold tracking-tight leading-none",children:[n,"%"]}),(0,w.jsxs)("div",{className:"flex items-center ml-8",children:[(0,w.jsx)(b.Z,{className:"text-green-500",size:20,children:"heroicons-solid:arrow-circle-up"}),(0,w.jsx)(c.Z,{className:"ml-4 text-md font-medium text-green-500",children:"22.2%"})]})]})]})]})}),(0,w.jsx)("div",{className:"flex flex-col flex-auto h-320 mt-12",children:(0,w.jsx)(E.Z,{className:"flex-auto w-full h-full",options:d,series:a,type:d.chart.type,height:d.chart.height})})]})};function q(e){var s=(0,i.v9)(p),l=null===s||void 0===s?void 0:s.newVsReturning,t=l.series,r=l.labels,n=l.uniqueVisitors,o=(0,a.useState)(!0),d=(0,k.Z)(o,2),m=d[0],x=d[1],h=(0,S.Z)(),f={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#3182CE","#63B3ED"],labels:r,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},stroke:{colors:[h.palette.background.paper]},series:t,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:function(e){var s=e.seriesIndex,l=e.w;return'<div class="flex items-center h-32 min-h-32 max-h-23 px-12">\n            <div class="w-12 h-12 rounded-full" style="background-color: '.concat(l.config.colors[s],';"></div>\n            <div class="ml-8 text-md leading-none">').concat(l.config.labels[s],':</div>\n            <div class="ml-8 text-md font-bold leading-none">').concat(l.config.series[s],"%</div>\n        </div>")}}};return(0,a.useEffect)((function(){x(!1)}),[]),m?null:(0,w.jsxs)(D.Z,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24",children:[(0,w.jsxs)("div",{className:"flex flex-col sm:flex-row items-start justify-between",children:[(0,w.jsx)(c.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"New vs. Returning"}),(0,w.jsx)("div",{className:"ml-8",children:(0,w.jsx)(I.Z,{size:"small",className:"font-medium text-sm",label:" 30 days"})})]}),(0,w.jsx)("div",{className:"flex flex-col flex-auto mt-24 h-192",children:(0,w.jsx)(E.Z,{className:"flex flex-auto items-center justify-center w-full h-full",options:f,series:t,type:f.chart.type,height:f.chart.height})}),(0,w.jsx)("div",{className:"mt-32",children:(0,w.jsx)("div",{className:"-my-12 divide-y",children:t.map((function(e,s){return(0,w.jsxs)("div",{className:"grid grid-cols-3 py-12",children:[(0,w.jsxs)("div",{className:"flex items-center",children:[(0,w.jsx)(V.Z,{className:"flex-0 w-8 h-8 rounded-full",sx:{backgroundColor:f.colors[s]}}),(0,w.jsx)(c.Z,{className:"ml-12 truncate",children:r[s]})]}),(0,w.jsx)(c.Z,{className:"font-medium text-right",children:(n*e/100).toLocaleString("en-US")}),(0,w.jsxs)(c.Z,{className:"text-right",color:"text.secondary",children:[e,"%"]})]},s)}))})})]})}var T=(0,a.memo)(q);function Y(e){var s=(0,i.v9)(p),l=null===s||void 0===s?void 0:s.age,t=l.series,r=l.labels,n=l.uniqueVisitors,o=(0,a.useState)(!0),d=(0,k.Z)(o,2),m=d[0],x=d[1],h=(0,S.Z)(),f={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#DD6B20","#F6AD55"],labels:r,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},stroke:{colors:[h.palette.background.paper]},series:t,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:function(e){var s=e.seriesIndex,l=e.w;return'<div class="flex items-center h-32 min-h-32 max-h-23 px-12">\n            <div class="w-12 h-12 rounded-full" style="background-color: '.concat(l.config.colors[s],';"></div>\n            <div class="ml-8 text-md leading-none">').concat(l.config.labels[s],':</div>\n            <div class="ml-8 text-md font-bold leading-none">').concat(l.config.series[s],"%</div>\n        </div>")}}};return(0,a.useEffect)((function(){x(!1)}),[]),m?null:(0,w.jsxs)(D.Z,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24",children:[(0,w.jsxs)("div",{className:"flex flex-col sm:flex-row items-start justify-between",children:[(0,w.jsx)(c.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Age"}),(0,w.jsx)("div",{className:"ml-8",children:(0,w.jsx)(I.Z,{size:"small",className:"font-medium text-sm",label:" 30 days"})})]}),(0,w.jsx)("div",{className:"flex flex-col flex-auto mt-24 h-192",children:(0,w.jsx)(E.Z,{className:"flex flex-auto items-center justify-center w-full h-full",options:f,series:t,type:f.chart.type,height:f.chart.height})}),(0,w.jsx)("div",{className:"mt-32",children:(0,w.jsx)("div",{className:"-my-12 divide-y",children:t.map((function(e,s){return(0,w.jsxs)("div",{className:"grid grid-cols-3 py-12",children:[(0,w.jsxs)("div",{className:"flex items-center",children:[(0,w.jsx)(V.Z,{className:"flex-0 w-8 h-8 rounded-full",sx:{backgroundColor:f.colors[s]}}),(0,w.jsx)(c.Z,{className:"ml-12 truncate",children:r[s]})]}),(0,w.jsx)(c.Z,{className:"font-medium text-right",children:(n*e/100).toLocaleString("en-US")}),(0,w.jsxs)(c.Z,{className:"text-right",color:"text.secondary",children:[e,"%"]})]},s)}))})})]})}var _=(0,a.memo)(Y);function K(e){var s=(0,i.v9)(p),l=null===s||void 0===s?void 0:s.language,t=l.series,r=l.labels,n=l.uniqueVisitors,o=(0,a.useState)(!0),d=(0,k.Z)(o,2),m=d[0],x=d[1],h=(0,S.Z)(),f={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#805AD5","#B794F4"],labels:r,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},stroke:{colors:[h.palette.background.paper]},series:t,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:function(e){var s=e.seriesIndex,l=e.w;return'<div class="flex items-center h-32 min-h-32 max-h-23 px-12">\n            <div class="w-12 h-12 rounded-full" style="background-color: '.concat(l.config.colors[s],';"></div>\n            <div class="ml-8 text-md leading-none">').concat(l.config.labels[s],':</div>\n            <div class="ml-8 text-md font-bold leading-none">').concat(l.config.series[s],"%</div>\n        </div>")}}};return(0,a.useEffect)((function(){x(!1)}),[]),m?null:(0,w.jsxs)(D.Z,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24",children:[(0,w.jsxs)("div",{className:"flex flex-col sm:flex-row items-start justify-between",children:[(0,w.jsx)(c.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Language"}),(0,w.jsx)("div",{className:"ml-8",children:(0,w.jsx)(I.Z,{size:"small",className:"font-medium text-sm",label:" 30 days"})})]}),(0,w.jsx)("div",{className:"flex flex-col flex-auto mt-24 h-192",children:(0,w.jsx)(E.Z,{className:"flex flex-auto items-center justify-center w-full h-full",options:f,series:t,type:f.chart.type,height:f.chart.height})}),(0,w.jsx)("div",{className:"mt-32",children:(0,w.jsx)("div",{className:"-my-12 divide-y",children:t.map((function(e,s){return(0,w.jsxs)("div",{className:"grid grid-cols-3 py-12",children:[(0,w.jsxs)("div",{className:"flex items-center",children:[(0,w.jsx)(V.Z,{className:"flex-0 w-8 h-8 rounded-full",sx:{backgroundColor:f.colors[s]}}),(0,w.jsx)(c.Z,{className:"ml-12 truncate",children:r[s]})]}),(0,w.jsx)(c.Z,{className:"font-medium text-right",children:(n*e/100).toLocaleString("en-US")}),(0,w.jsxs)(c.Z,{className:"text-right",color:"text.secondary",children:[e,"%"]})]},s)}))})})]})}var W=(0,a.memo)(K);function H(e){var s=(0,i.v9)(p),l=null===s||void 0===s?void 0:s.gender,t=l.series,r=l.labels,n=l.uniqueVisitors,o=(0,a.useState)(!0),d=(0,k.Z)(o,2),m=d[0],x=d[1],h=(0,S.Z)(),f={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#319795","#4FD1C5"],labels:r,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},stroke:{colors:[h.palette.background.paper]},series:t,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:function(e){var s=e.seriesIndex,l=e.w;return'<div class="flex items-center h-32 min-h-32 max-h-23 px-12">\n            <div class="w-12 h-12 rounded-full" style="background-color: '.concat(l.config.colors[s],';"></div>\n            <div class="ml-8 text-md leading-none">').concat(l.config.labels[s],':</div>\n            <div class="ml-8 text-md font-bold leading-none">').concat(l.config.series[s],"%</div>\n        </div>")}}};return(0,a.useEffect)((function(){x(!1)}),[]),m?null:(0,w.jsxs)(D.Z,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24",children:[(0,w.jsxs)("div",{className:"flex flex-col sm:flex-row items-start justify-between",children:[(0,w.jsx)(c.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Gender"}),(0,w.jsx)("div",{className:"ml-8",children:(0,w.jsx)(I.Z,{size:"small",className:"font-medium text-sm",label:" 30 days"})})]}),(0,w.jsx)("div",{className:"flex flex-col flex-auto mt-24 h-192",children:(0,w.jsx)(E.Z,{className:"flex flex-auto items-center justify-center w-full h-full",options:f,series:t,type:f.chart.type,height:f.chart.height})}),(0,w.jsx)("div",{className:"mt-32",children:(0,w.jsx)("div",{className:"-my-12 divide-y",children:t.map((function(e,s){return(0,w.jsxs)("div",{className:"grid grid-cols-3 py-12",children:[(0,w.jsxs)("div",{className:"flex items-center",children:[(0,w.jsx)(V.Z,{className:"flex-0 w-8 h-8 rounded-full",sx:{backgroundColor:f.colors[s]}}),(0,w.jsx)(c.Z,{className:"ml-12 truncate",children:r[s]})]}),(0,w.jsx)(c.Z,{className:"font-medium text-right",children:(n*e/100).toLocaleString("en-US")}),(0,w.jsxs)(c.Z,{className:"text-right",color:"text.secondary",children:[e,"%"]})]},s)}))})})]})}var J=(0,a.memo)(H);var Q=(0,t.Z)("analyticsDashboardApp",N)((function(){var e=(0,i.I0)(),s=(0,i.v9)(p);return(0,a.useEffect)((function(){e(g())}),[e]),(0,w.jsx)(n.Z,{header:(0,w.jsx)(Z,{}),content:(0,w.jsx)(w.Fragment,{children:(0,a.useMemo)((function(){var e={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return!r.Z.isEmpty(s)&&(0,w.jsxs)(o.E.div,{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24 md:p-32",variants:{show:{transition:{staggerChildren:.06}}},initial:"hidden",animate:"show",children:[(0,w.jsx)(o.E.div,{variants:e,className:"sm:col-span-2 lg:col-span-3",children:(0,w.jsx)(R,{})}),(0,w.jsx)(o.E.div,{variants:e,className:"sm:col-span-2 lg:col-span-1 ",children:(0,w.jsx)(M,{})}),(0,w.jsx)(o.E.div,{variants:e,className:"sm:col-span-2 lg:col-span-1 ",children:(0,w.jsx)(B,{})}),(0,w.jsx)(o.E.div,{variants:e,className:"sm:col-span-2 lg:col-span-1 ",children:(0,w.jsx)(P,{})}),(0,w.jsx)(o.E.div,{variants:e,className:"sm:col-span-2 lg:col-span-3",children:(0,w.jsx)(G,{})}),(0,w.jsxs)("div",{className:"w-full mt-16 sm:col-span-3",children:[(0,w.jsx)(c.Z,{className:"text-2xl font-semibold tracking-tight leading-6",children:"Your Audience"}),(0,w.jsx)(c.Z,{className:"font-medium tracking-tight",color:"text.secondary",children:"Demographic properties of your users"})]}),(0,w.jsxs)("div",{className:"sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 w-full",children:[(0,w.jsx)(o.E.div,{variants:e,className:"",children:(0,w.jsx)(T,{})}),(0,w.jsx)(o.E.div,{variants:e,className:"",children:(0,w.jsx)(J,{})}),(0,w.jsx)(o.E.div,{variants:e,className:"",children:(0,w.jsx)(_,{})}),(0,w.jsx)(o.E.div,{variants:e,className:"",children:(0,w.jsx)(W,{})})]})]})}),[s])})})}))}}]);