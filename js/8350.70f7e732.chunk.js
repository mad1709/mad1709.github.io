"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[8350],{44269:function(e,n,t){t.d(n,{Z:function(){return B}});var r=t(29439),o=t(98655),a=t(73428),i=t(65280),s=t(5297),c=t(83061),l=t(47313),d=t(17551),u=t(9506),m=t(1413),f=t(45987),x=t(1168),h=t(87327),p=t(9692),v=t(3346),b=t(54097),g=t(19860),Z=t(17592),j=t(52437),C=t(46417),y=["children","name"];function k(e){var n=e.children,t=e.document,r=(0,g.Z)();l.useEffect((function(){t.body.dir=r.direction}),[t,r.direction]);var o=l.useMemo((function(){return(0,p.Z)({key:"iframe-demo-".concat(r.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===r.direction?[h.Z]:[]})}),[t,r.direction]),a=l.useCallback((function(){return t.defaultView}),[t]);return(0,C.jsx)(b.StyleSheetManager,{target:t.head,stylisPlugins:"rtl"===r.direction?[h.Z]:[],children:(0,C.jsxs)(v.C,{value:o,children:[(0,C.jsx)(j.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),l.cloneElement(n,{window:a})]})})}var w=(0,Z.ZP)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function S(e){var n,t=e.children,o=e.name,a=(0,f.Z)(e,y),i="".concat(o," demo"),s=l.useRef(null),c=l.useReducer((function(){return!0}),!1),d=(0,r.Z)(c,2),u=d[0],h=d[1];l.useEffect((function(){var e=s.current.contentDocument;null==e||"complete"!==e.readyState||u||h()}),[u]);var p=null===(n=s.current)||void 0===n?void 0:n.contentDocument;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(w,(0,m.Z)({onLoad:h,ref:s,title:i},a)),!1!==u?x.createPortal((0,C.jsx)(k,{document:p,children:t}),p.body):null]})}var N=l.memo(S),W=t(56993);function R(e){var n=(0,l.useState)(e.currentTabIndex),t=(0,r.Z)(n,2),m=t[0],f=t[1],x=e.component,h=e.raw,p=e.iframe,v=e.className,b=e.name;return(0,C.jsxs)(a.Z,{className:(0,c.default)(v,"shadow"),sx:{backgroundColor:function(e){return(0,d._j)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)}},children:[(0,C.jsx)(u.Z,{sx:{backgroundColor:function(e){return(0,d._j)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)}},children:(0,C.jsxs)(s.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,n){f(n)},textColor:"secondary",indicatorColor:"secondary",children:[x&&(0,C.jsx)(i.Z,{classes:{root:"min-w-64"},icon:(0,C.jsx)(W.Z,{children:"heroicons-outline:eye"})}),h&&(0,C.jsx)(i.Z,{classes:{root:"min-w-64"},icon:(0,C.jsx)(W.Z,{children:"heroicons-outline:code"})})]})}),(0,C.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,C.jsx)("div",{className:0===m?"flex flex-1 max-w-full":"hidden",children:x&&(p?(0,C.jsx)(N,{name:b,children:(0,C.jsx)(x,{})}):(0,C.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,C.jsx)(x,{})}))}),(0,C.jsx)("div",{className:1===m?"flex flex-1":"hidden",children:(0,l.useMemo)((function(){return h&&1===m?(0,C.jsx)("div",{className:"flex flex-1",children:(0,C.jsx)(o.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:h.default})}):null}),[h,m])})]})]})}R.defaultProps={name:"",currentTabIndex:0};var B=R},51675:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(47313),o=t(62481),a=t(9506),i=t(47825),s=t(46417);function c(){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(o.ZP,{}),(0,s.jsx)(i.Z,{fixed:!0,children:(0,s.jsx)(a.Z,{sx:{bgcolor:"#cfe8fc",height:"100vh"}})})]})}},26495:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(47313),o=t(62481),a=t(9506),i=t(47825),s=t(46417);function c(){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(o.ZP,{}),(0,s.jsx)(i.Z,{maxWidth:"sm",children:(0,s.jsx)(a.Z,{sx:{bgcolor:"#cfe8fc",height:"100vh"}})})]})}},48350:function(e,n,t){t.r(n);var r=t(44269),o=t(98655),a=t(56993),i=t(24193),s=t(61113),c=t(46417);n.default=function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,c.jsx)(i.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/container",target:"_blank",role:"button",startIcon:(0,c.jsx)(a.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,c.jsx)(s.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Container"}),(0,c.jsx)(s.Z,{className:"description",children:"The container centers your content horizontally. It's the most basic layout element."}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:"While containers can be nested, most layouts do not require a nested container."}),(0,c.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Fluid"}),(0,c.jsxs)(s.Z,{className:"mb-40",component:"div",children:["A fluid container width is bounded by the ",(0,c.jsx)("code",{children:"maxWidth"})," prop value."]}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(r.Z,{name:"SimpleContainer.js",className:"my-24",iframe:!0,component:t(26495).Z,raw:t(27954)})}),(0,c.jsx)(o.Z,{component:"pre",className:"language-jsx",children:' \n<Container maxWidth="sm">\n'}),(0,c.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Fixed"}),(0,c.jsxs)(s.Z,{className:"mb-40",component:"div",children:["If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the ",(0,c.jsx)("code",{children:"fixed"})," prop. The max-width matches the min-width of the current breakpoint."]}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(r.Z,{name:"FixedContainer.js",className:"my-24",iframe:!0,component:t(51675).Z,raw:t(48875)})}),(0,c.jsx)(o.Z,{component:"pre",className:"language-jsx",children:" \n<Container fixed>\n"})]})}},47825:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(4942),o=t(63366),a=t(87462),i=t(47313),s=t(83061),c=t(88831),l=t(32298),d=t(21921),u=t(14614),m=t(96694),f=t(9456),x=t(46417),h=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,f.Z)(),v=(0,m.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,c.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),b=function(e){return(0,u.Z)({props:e,name:"MuiContainer",defaultTheme:p})};var g=t(91615),Z=t(17592),j=t(77342),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?v:n,u=e.useThemeProps,m=void 0===u?b:u,f=e.componentName,p=void 0===f?"MuiContainer":f,g=t((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,r.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}))}),(function(e){var n=e.theme;return e.ownerState.fixed&&Object.keys(n.breakpoints.values).reduce((function(e,t){var r=t,o=n.breakpoints.values[r];return 0!==o&&(e[n.breakpoints.up(r)]={maxWidth:"".concat(o).concat(n.breakpoints.unit)}),e}),{})}),(function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({},"xs"===t.maxWidth&&(0,r.Z)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,r.Z)({},n.breakpoints.up(t.maxWidth),{maxWidth:"".concat(n.breakpoints.values[t.maxWidth]).concat(n.breakpoints.unit)}))})),Z=i.forwardRef((function(e,n){var t=m(e),r=t.className,i=t.component,u=void 0===i?"div":i,f=t.disableGutters,v=void 0!==f&&f,b=t.fixed,Z=void 0!==b&&b,j=t.maxWidth,C=void 0===j?"lg":j,y=(0,o.Z)(t,h),k=(0,a.Z)({},t,{component:u,disableGutters:v,fixed:Z,maxWidth:C}),w=function(e,n){var t=e.classes,r=e.fixed,o=e.disableGutters,a=e.maxWidth,i={root:["root",a&&"maxWidth".concat((0,c.Z)(String(a))),r&&"fixed",o&&"disableGutters"]};return(0,d.Z)(i,(function(e){return(0,l.Z)(n,e)}),t)}(k,p);return(0,x.jsx)(g,(0,a.Z)({as:u,ownerState:k,className:(0,s.default)(w.root,r),ref:n},y))}));return Z}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,g.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),useThemeProps:function(e){return(0,j.Z)({props:e,name:"MuiContainer"})}}),y=C},62481:function(e,n,t){var r=t(29439),o=t(87462),a=t(47313),i=t(77342),s=t(52437),c=t(46417),l=function(e,n){return(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},n&&!e.vars&&{colorScheme:e.palette.mode})},d=function(e){return(0,o.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};n.ZP=function(e){var n=(0,i.Z)({props:e,name:"MuiCssBaseline"}),t=n.children,u=n.enableColorScheme,m=void 0!==u&&u;return(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)(s.Z,{styles:function(e){return function(e){var n,t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={};a&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((function(n){var t,o=(0,r.Z)(n,2),a=o[0],s=o[1];i[e.getColorSchemeSelector(a).replace(/\s*&/,"")]={colorScheme:null==(t=s.palette)?void 0:t.mode}}));var s=(0,o.Z)({html:l(e,a),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,o.Z)({margin:0},d(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},i),c=null==(n=e.components)||null==(t=n.MuiCssBaseline)?void 0:t.styleOverrides;return c&&(s=[s,c]),s}(e,m)}}),t]})}},96694:function(e,n,t){var r=(0,t(36541).ZP)();n.Z=r},48875:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport CssBaseline from '@mui/material/CssBaseline';\nimport Box from '@mui/material/Box';\nimport Container from '@mui/material/Container';\n\nexport default function FixedContainer() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      <Container fixed>\n        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />\n      </Container>\n    </React.Fragment>\n  );\n}\n"},27954:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport CssBaseline from '@mui/material/CssBaseline';\nimport Box from '@mui/material/Box';\nimport Container from '@mui/material/Container';\n\nexport default function SimpleContainer() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      <Container maxWidth=\"sm\">\n        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />\n      </Container>\n    </React.Fragment>\n  );\n}\n"}}]);