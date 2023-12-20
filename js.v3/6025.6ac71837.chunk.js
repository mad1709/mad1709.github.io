"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[6025],{44269:function(e,n,t){t.d(n,{Z:function(){return M}});var a=t(29439),s=t(98655),r=t(73428),i=t(65280),o=t(5297),c=t(83061),l=t(47313),u=t(17551),d=t(9506),m=t(1413),p=t(45987),h=t(1168),f=t(87327),x=t(9692),j=t(3346),b=t(54097),v=t(19860),Z=t(17592),S=t(52437),w=t(46417),N=["children","name"];function g(e){var n=e.children,t=e.document,a=(0,v.Z)();l.useEffect((function(){t.body.dir=a.direction}),[t,a.direction]);var s=l.useMemo((function(){return(0,x.Z)({key:"iframe-demo-".concat(a.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===a.direction?[f.Z]:[]})}),[t,a.direction]),r=l.useCallback((function(){return t.defaultView}),[t]);return(0,w.jsx)(b.StyleSheetManager,{target:t.head,stylisPlugins:"rtl"===a.direction?[f.Z]:[],children:(0,w.jsxs)(j.C,{value:s,children:[(0,w.jsx)(S.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),l.cloneElement(n,{window:r})]})})}var y=(0,Z.ZP)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function C(e){var n,t=e.children,s=e.name,r=(0,p.Z)(e,N),i="".concat(s," demo"),o=l.useRef(null),c=l.useReducer((function(){return!0}),!1),u=(0,a.Z)(c,2),d=u[0],f=u[1];l.useEffect((function(){var e=o.current.contentDocument;null==e||"complete"!==e.readyState||d||f()}),[d]);var x=null===(n=o.current)||void 0===n?void 0:n.contentDocument;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(y,(0,m.Z)({onLoad:f,ref:o,title:i},r)),!1!==d?h.createPortal((0,w.jsx)(g,{document:x,children:t}),x.body):null]})}var k=l.memo(C),T=t(56993);function B(e){var n=(0,l.useState)(e.currentTabIndex),t=(0,a.Z)(n,2),m=t[0],p=t[1],h=e.component,f=e.raw,x=e.iframe,j=e.className,b=e.name;return(0,w.jsxs)(r.Z,{className:(0,c.default)(j,"shadow"),sx:{backgroundColor:function(e){return(0,u._j)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)}},children:[(0,w.jsx)(d.Z,{sx:{backgroundColor:function(e){return(0,u._j)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)}},children:(0,w.jsxs)(o.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,n){p(n)},textColor:"secondary",indicatorColor:"secondary",children:[h&&(0,w.jsx)(i.Z,{classes:{root:"min-w-64"},icon:(0,w.jsx)(T.Z,{children:"heroicons-outline:eye"})}),f&&(0,w.jsx)(i.Z,{classes:{root:"min-w-64"},icon:(0,w.jsx)(T.Z,{children:"heroicons-outline:code"})})]})}),(0,w.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,w.jsx)("div",{className:0===m?"flex flex-1 max-w-full":"hidden",children:h&&(x?(0,w.jsx)(k,{name:b,children:(0,w.jsx)(h,{})}):(0,w.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,w.jsx)(h,{})}))}),(0,w.jsx)("div",{className:1===m?"flex flex-1":"hidden",children:(0,l.useMemo)((function(){return f&&1===m?(0,w.jsx)("div",{className:"flex flex-1",children:(0,w.jsx)(s.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:f.default})}):null}),[f,m])})]})]})}B.defaultProps={name:"",currentTabIndex:0};var M=B},36025:function(e,n,t){t.r(n);var a=t(44269),s=t(24193),r=t(61113),i=t(2135),o=t(56993),c=t(46417);n.default=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"flex w-full items-center justify-between mb-24",children:[(0,c.jsx)(r.Z,{variant:"h4",className:"",children:"react-apexcharts"}),(0,c.jsx)(s.Z,{variant:"contained",color:"secondary",component:"a",href:"https://github.com/apexcharts/react-apexcharts",target:"_blank",role:"button",startIcon:(0,c.jsx)(o.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})]}),(0,c.jsx)(r.Z,{className:"mb-16",component:"p",children:"React.js wrapper for ApexCharts to build interactive visualizations in react."}),(0,c.jsx)("hr",{}),(0,c.jsx)(r.Z,{className:"text-32 mt-32 mb-8",component:"h2",children:"Example Usages"}),(0,c.jsx)(a.Z,{className:"mb-64",component:t(64668).Z,raw:t(17774)}),(0,c.jsx)(a.Z,{className:"mb-64",component:t(21956).Z,raw:t(9509)}),(0,c.jsx)(a.Z,{className:"mb-64",component:t(64523).Z,raw:t(49429)}),(0,c.jsx)(a.Z,{className:"mb-64",component:t(59109).Z,raw:t(4693)}),(0,c.jsx)(a.Z,{className:"mb-64",component:t(86640).Z,raw:t(2369)}),(0,c.jsx)(a.Z,{className:"mb-64",component:t(18680).Z,raw:t(85360)}),(0,c.jsx)(r.Z,{className:"text-32 mt-32 mb-8",component:"h2",children:"Demos"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"mb-8",children:(0,c.jsx)(i.rU,{to:"/dashboards/analytics",children:"Analytics Dashboard"})}),(0,c.jsx)("li",{className:"mb-8",children:(0,c.jsx)(i.rU,{to:"/dashboards/project",children:"Project Dashboard"})})]})]})}},64668:function(e,n,t){var a=t(29439),s=t(58446),r=t(47313),i=t(46417);n.Z=function(){var e=(0,r.useState)({options:{xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},series:[{name:"series-1",data:[30,40,25,50,49,21,70,51]},{name:"series-2",data:[23,12,54,61,32,56,81,19]}]}),n=(0,a.Z)(e,2),t=n[0];return n[1],(0,i.jsx)("div",{className:"area",children:(0,i.jsx)(s.Z,{options:t.options,series:t.series,type:"area",width:"500"})})}},21956:function(e,n,t){var a=t(29439),s=t(47313),r=t(58446),i=t(46417);n.Z=function(){var e=(0,s.useState)({options:{dataLabels:{enabled:!1},plotOptions:{bar:{horizontal:!0}},xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},series:[{data:[30,40,25,50,49,21,70,51]}]}),n=(0,a.Z)(e,2),t=n[0];return n[1],(0,i.jsx)("div",{className:"bar",children:(0,i.jsx)(r.Z,{options:t.options,series:t.series,type:"bar",width:"500"})})}},64523:function(e,n,t){var a=t(29439),s=t(47313),r=t(58446),i=t(46417);n.Z=function(){var e=(0,s.useState)({options:{dataLabels:{enabled:!1},xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},series:[{data:[30,40,25,50,49,21,70,51]}]}),n=(0,a.Z)(e,2),t=n[0];return n[1],(0,i.jsx)("div",{className:"column",children:(0,i.jsx)(r.Z,{options:t.options,series:t.series,type:"bar",width:"500"})})}},59109:function(e,n,t){var a=t(29439),s=t(47313),r=t(58446),i=t(46417);n.Z=function(){var e=(0,s.useState)({options:{labels:["A","B","C","D","E"]},series:[44,55,41,17,15]}),n=(0,a.Z)(e,2),t=n[0];return n[1],(0,i.jsx)("div",{className:"donut",children:(0,i.jsx)(r.Z,{options:t.options,series:t.series,type:"donut",width:"380"})})}},86640:function(e,n,t){var a=t(29439),s=t(47313),r=t(58446),i=t(46417);n.Z=function(){var e=(0,s.useState)({options:{stroke:{curve:"smooth"},markers:{size:0},xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},series:[{data:[30,40,25,50,49,21,70,51]}]}),n=(0,a.Z)(e,2),t=n[0];return n[1],(0,i.jsx)("div",{className:"line",children:(0,i.jsx)(r.Z,{options:t.options,series:t.series,type:"line",width:"500"})})}},18680:function(e,n,t){var a=t(29439),s=t(47313),r=t(58446),i=t(46417);n.Z=function(){var e=(0,s.useState)({options:{labels:["RadialBar"],plotOptions:{radialBar:{hollow:{size:"70%"}}}},series:[68]}),n=(0,a.Z)(e,2),t=n[0];return n[1],(0,i.jsx)("div",{className:"radialbar",children:(0,i.jsx)(r.Z,{options:t.options,series:t.series,type:"radialBar",height:"380"})})}},17774:function(e,n,t){t.r(n),n.default="import Chart from 'react-apexcharts';\nimport { useState } from 'react';\n\nfunction Area()\n{\n    const [state, setState] = useState({\n        options: {\n            xaxis: {\n                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n            }\n        },\n        series : [\n            {\n                name: 'series-1',\n                data: [30, 40, 25, 50, 49, 21, 70, 51]\n            }, {\n                name: 'series-2',\n                data: [23, 12, 54, 61, 32, 56, 81, 19]\n            }\n        ],\n    })\n\n    return (\n        <div className=\"area\">\n            <Chart options={state.options} series={state.series} type=\"area\" width=\"500\"/>\n        </div>\n    );\n}\n\nexport default Area;\n"},9509:function(e,n,t){t.r(n),n.default="import { useState } from 'react';\nimport Chart from 'react-apexcharts';\n\nfunction Bar()\n{\n    const [state, setState] = useState({\n        options: {\n            dataLabels : {\n                enabled: false\n            },\n            plotOptions: {\n                bar: {\n                    horizontal: true\n                }\n            },\n            xaxis      : {\n                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n            }\n        },\n        series : [\n            {\n                data: [30, 40, 25, 50, 49, 21, 70, 51]\n            }\n        ],\n    });\n\n    return (\n        <div className=\"bar\">\n            <Chart options={state.options} series={state.series} type=\"bar\" width=\"500\"/>\n        </div>\n    );\n}\n\nexport default Bar;\n"},49429:function(e,n,t){t.r(n),n.default="import { useState } from 'react';\nimport Chart from 'react-apexcharts';\n\nfunction Column()\n{\n    const [state, setState] = useState({\n        options: {\n            dataLabels: {\n                enabled: false\n            },\n            xaxis     : {\n                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n            }\n        },\n        series : [\n            {\n                data: [30, 40, 25, 50, 49, 21, 70, 51]\n            }\n        ],\n    });\n\n    return (\n        <div className=\"column\">\n            <Chart options={state.options} series={state.series} type=\"bar\" width=\"500\"/>\n        </div>\n    );\n}\n\nexport default Column;\n"},4693:function(e,n,t){t.r(n),n.default="import { useState } from 'react';\nimport Chart from 'react-apexcharts';\n\nfunction Donut()\n{\n    const [state, setState] = useState({\n        options: {\n            labels: ['A', 'B', 'C', 'D', 'E']\n        },\n        series : [44, 55, 41, 17, 15]\n\n    });\n    return (\n        <div className=\"donut\">\n            <Chart options={state.options} series={state.series} type=\"donut\" width=\"380\"/>\n        </div>\n    );\n}\n\nexport default Donut;\n"},2369:function(e,n,t){t.r(n),n.default="import { useState } from 'react';\nimport Chart from 'react-apexcharts';\n\nfunction Line()\n{\n    const [state, setState] = useState({\n        options: {\n            stroke : {\n                curve: 'smooth'\n            },\n            markers: {\n                size: 0\n            },\n            xaxis  : {\n                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n            }\n        },\n        series : [\n            {\n                data: [30, 40, 25, 50, 49, 21, 70, 51]\n            }\n        ],\n    });\n\n    return (\n        <div className=\"line\">\n            <Chart options={state.options} series={state.series} type=\"line\" width=\"500\"/>\n        </div>\n    );\n}\n\nexport default Line;\n"},85360:function(e,n,t){t.r(n),n.default="import { useState } from 'react';\nimport Chart from 'react-apexcharts';\n\nfunction RadialBar()\n{\n    const [state, setState] = useState({\n        options: {\n            labels     : ['RadialBar'],\n            plotOptions: {\n                radialBar: {\n                    hollow: {\n                        size: '70%',\n                    }\n                },\n            },\n        },\n        series : [68],\n    });\n\n    return (\n        <div className=\"radialbar\">\n            <Chart options={state.options} series={state.series} type=\"radialBar\" height=\"380\"/>\n        </div>\n    );\n}\n\nexport default RadialBar;\n"}}]);