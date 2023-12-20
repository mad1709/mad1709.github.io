"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[6739],{44269:function(e,n,r){r.d(n,{Z:function(){return I}});var t=r(29439),l=r(98655),o=r(73428),a=r(65280),i=r(5297),s=r(83061),m=r(47313),c=r(17551),d=r(9506),u=r(1413),h=r(45987),p=r(1168),x=r(87327),f=r(9692),v=r(3346),b=r(54097),g=r(19860),j=r(17592),y=r(52437),N=r(46417),Z=["children","name"];function C(e){var n=e.children,r=e.document,t=(0,g.Z)();m.useEffect((function(){r.body.dir=t.direction}),[r,t.direction]);var l=m.useMemo((function(){return(0,f.Z)({key:"iframe-demo-".concat(t.direction),prepend:!0,container:r.head,stylisPlugins:"rtl"===t.direction?[x.Z]:[]})}),[r,t.direction]),o=m.useCallback((function(){return r.defaultView}),[r]);return(0,N.jsx)(b.StyleSheetManager,{target:r.head,stylisPlugins:"rtl"===t.direction?[x.Z]:[],children:(0,N.jsxs)(v.C,{value:l,children:[(0,N.jsx)(y.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),m.cloneElement(n,{window:o})]})})}var F=(0,j.ZP)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function T(e){var n,r=e.children,l=e.name,o=(0,h.Z)(e,Z),a="".concat(l," demo"),i=m.useRef(null),s=m.useReducer((function(){return!0}),!1),c=(0,t.Z)(s,2),d=c[0],x=c[1];m.useEffect((function(){var e=i.current.contentDocument;null==e||"complete"!==e.readyState||d||x()}),[d]);var f=null===(n=i.current)||void 0===n?void 0:n.contentDocument;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(F,(0,u.Z)({onLoad:x,ref:i,title:a},o)),!1!==d?p.createPortal((0,N.jsx)(C,{document:f,children:r}),f.body):null]})}var k=m.memo(T),S=r(56993);function w(e){var n=(0,m.useState)(e.currentTabIndex),r=(0,t.Z)(n,2),u=r[0],h=r[1],p=e.component,x=e.raw,f=e.iframe,v=e.className,b=e.name;return(0,N.jsxs)(o.Z,{className:(0,s.default)(v,"shadow"),sx:{backgroundColor:function(e){return(0,c._j)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)}},children:[(0,N.jsx)(d.Z,{sx:{backgroundColor:function(e){return(0,c._j)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)}},children:(0,N.jsxs)(i.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(e,n){h(n)},textColor:"secondary",indicatorColor:"secondary",children:[p&&(0,N.jsx)(a.Z,{classes:{root:"min-w-64"},icon:(0,N.jsx)(S.Z,{children:"heroicons-outline:eye"})}),x&&(0,N.jsx)(a.Z,{classes:{root:"min-w-64"},icon:(0,N.jsx)(S.Z,{children:"heroicons-outline:code"})})]})}),(0,N.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,N.jsx)("div",{className:0===u?"flex flex-1 max-w-full":"hidden",children:p&&(f?(0,N.jsx)(k,{name:b,children:(0,N.jsx)(p,{})}):(0,N.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,N.jsx)(p,{})}))}),(0,N.jsx)("div",{className:1===u?"flex flex-1":"hidden",children:(0,m.useMemo)((function(){return x&&1===u?(0,N.jsx)("div",{className:"flex flex-1",children:(0,N.jsx)(l.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:x.default})}):null}),[x,u])})]})]})}w.defaultProps={name:"",currentTabIndex:0};var I=w},46739:function(e,n,r){r.r(n);var t=r(44269),l=r(24193),o=r(61113),a=r(56993),i=r(46417);n.default=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex w-full items-center justify-between mb-24",children:[(0,i.jsx)(o.Z,{variant:"h4",className:"",children:"React Hook Form"}),(0,i.jsx)(l.Z,{variant:"contained",color:"secondary",component:"a",href:"http://react-hook-form.com",target:"_blank",role:"button",startIcon:(0,i.jsx)(a.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})]}),(0,i.jsx)(o.Z,{className:"mb-16",component:"p",children:"Performant, flexible and extensible forms with easy to use validation."}),(0,i.jsx)("hr",{}),(0,i.jsx)(o.Z,{className:"text-24 mt-32 mb-16",component:"h4",children:"Example usage with Material-UI elements and form validation"}),(0,i.jsx)(t.Z,{className:"mb-64",component:r(32396).Z,raw:r(21331)}),(0,i.jsx)(o.Z,{className:"text-32 mt-32 mb-8",component:"h2",children:"Examples"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"mb-8",children:"src/app/main/sign-in/SignInPage.js"}),(0,i.jsx)("li",{className:"mb-8",children:"src/app/main/sign-up/SignUpPage.js"}),(0,i.jsx)("li",{className:"mb-8",children:"."}),(0,i.jsx)("li",{className:"mb-8",children:"."}),(0,i.jsx)("li",{className:"mb-8",children:"."})]})]})}},32396:function(e,n,r){var t=r(1413),l=r(75627),o=r(24193),a=r(24631),i=r(44758),s=r(40454),m=r(51405),c=r(67426),d=r(54299),u=r(83929),h=r(31058),p=r(61113),x=r(48182),f=r(21933),v=r(62563),b=r(58970),g=r(83061),j=r(1550),y=r(5178),N=r(15480),Z=r(94253),C=r(56993),F=r(46417),T=0,k=[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],S={Native:"",TextField:"",Select:"",Autocomplete:[],Checkbox:!1,Switch:!1,RadioGroup:"",DateTimePicker:""},w=f.Ry().shape({TextField:f.Z_().required("You must enter a value"),Native:f.Z_().required("You must enter a value"),Select:f.Z_().required("You must select a value").oneOf(["20","30"],"Select 20 or 30."),Checkbox:f.O7().oneOf([!0],"You must check."),Switch:f.O7().oneOf([!0],"You must turn it on."),RadioGroup:f.Z_().oneOf(["female"],"You must select female."),Autocomplete:f.IX().min(2,"Select at least two."),DateTimePicker:f.Z_().nullable().required("You must select a date")});n.Z=function(){var e,n=(0,l.cI)({defaultValues:S,mode:"all",resolver:(0,v.X)(w)}),r=n.handleSubmit,f=n.register,I=n.reset,R=n.control,P=n.watch,q=n.formState,B=q.isValid,M=q.dirtyFields,L=q.errors,D=q.touchedFields;T+=1;var V=P();return(0,F.jsxs)("div",{className:"flex w-full max-w-screen-md justify-start items-start",children:[(0,F.jsxs)("form",{className:"w-1/2",onSubmit:r((function(e){return console.info(e)})),children:[(0,F.jsxs)("div",{className:"mt-48 mb-16",children:[(0,F.jsx)(p.Z,{className:"mb-24 font-medium text-14",children:"Native Input:"}),(0,F.jsx)("input",(0,t.Z)((0,t.Z)({className:(0,g.default)("border-1 outline-none rounded-8 p-8",!!L.Native&&"border-red")},f("Native")),{},{required:!0})),!!L.Native&&(0,F.jsx)(p.Z,{className:"px-4 py-8 font-medium text-14",color:"error",children:null===L||void 0===L||null===(e=L.Native)||void 0===e?void 0:e.message})]}),(0,F.jsx)("div",{className:"mt-48 mb-16",children:(0,F.jsx)(l.Qr,{name:"Checkbox",type:"checkbox",control:R,render:function(e){var n,r=e.field,t=r.onChange,l=r.value,o=r.onBlur,a=r.ref;return(0,F.jsxs)(j.Z,{error:!!L.Checkbox,required:!0,children:[(0,F.jsx)(y.Z,{className:"font-medium text-14",component:"legend",children:"MUI Checkbox"}),(0,F.jsx)(u.Z,{label:"I agree",control:(0,F.jsx)(i.Z,{checked:l,onBlur:o,onChange:function(e){return t(e.target.checked)},inputRef:a,required:!0})}),(0,F.jsx)(N.Z,{children:null===L||void 0===L||null===(n=L.Checkbox)||void 0===n?void 0:n.message})]})}})}),(0,F.jsx)("div",{className:"mt-48 mb-16",children:(0,F.jsx)(l.Qr,{render:function(e){var n,r=e.field;return(0,F.jsxs)(j.Z,{error:!!L.RadioGroup,required:!0,children:[(0,F.jsx)(y.Z,{className:"font-medium text-14",component:"legend",children:"Radio Group"}),(0,F.jsxs)(d.Z,(0,t.Z)((0,t.Z)({},r),{},{"aria-label":"gender",name:"gender1",children:[(0,F.jsx)(u.Z,{value:"female",control:(0,F.jsx)(h.Z,{}),label:"Female"}),(0,F.jsx)(u.Z,{value:"male",control:(0,F.jsx)(h.Z,{}),label:"Male"})]})),(0,F.jsx)(N.Z,{children:null===L||void 0===L||null===(n=L.RadioGroup)||void 0===n?void 0:n.message})]})},name:"RadioGroup",control:R})}),(0,F.jsx)("div",{className:"mt-48 mb-16",children:(0,F.jsx)(l.Qr,{render:function(e){var n,r=e.field;return(0,F.jsx)(a.Z,(0,t.Z)((0,t.Z)({},r),{},{label:"MUI TextField",variant:"outlined",error:!!L.TextField,helperText:null===L||void 0===L||null===(n=L.TextField)||void 0===n?void 0:n.message,required:!0,fullWidth:!0}))},name:"TextField",control:R})}),(0,F.jsx)("div",{className:"mt-48 mb-16",children:(0,F.jsx)(l.Qr,{render:function(e){var n,r=e.field;return(0,F.jsxs)(j.Z,{error:!!L.Select,required:!0,fullWidth:!0,children:[(0,F.jsx)(y.Z,{className:"font-medium text-14",component:"legend",children:"MUI Select"}),(0,F.jsxs)(s.Z,(0,t.Z)((0,t.Z)({},r),{},{variant:"outlined",fullWidth:!0,children:[(0,F.jsx)(m.Z,{value:"10",children:"Ten (10)"}),(0,F.jsx)(m.Z,{value:"20",children:"Twenty (20)"}),(0,F.jsx)(m.Z,{value:"30",children:"Thirty (30)"})]})),(0,F.jsx)(N.Z,{children:null===L||void 0===L||null===(n=L.Select)||void 0===n?void 0:n.message})]})},name:"Select",control:R})}),(0,F.jsx)("div",{className:"mt-48 mb-16",children:(0,F.jsx)(l.Qr,{name:"Switch",type:"checkbox",control:R,render:function(e){var n,r=e.field,t=r.onChange,l=r.value,o=r.ref,a=r.onBlur;return(0,F.jsxs)(j.Z,{required:!0,error:!!L.Switch,children:[(0,F.jsx)(y.Z,{className:"font-medium text-14",component:"legend",children:"MUI Switch"}),(0,F.jsx)(c.Z,{checked:l,onBlur:a,onChange:function(e){return t(e.target.checked)},inputRef:o,required:!0}),(0,F.jsx)(N.Z,{children:null===L||void 0===L||null===(n=L.Switch)||void 0===n?void 0:n.message})]})}})}),(0,F.jsxs)("div",{className:"mt-48 mb-16",children:[(0,F.jsx)(p.Z,{className:"mb-24 font-medium text-14",children:"Autocomplete"}),(0,F.jsx)(l.Qr,{name:"Autocomplete",control:R,defaultValue:[],render:function(e){var n=e.field,r=n.onChange,l=n.value,o=n.onBlur,i=n.ref;return(0,F.jsx)(x.Z,{className:"mt-8 mb-16",multiple:!0,freeSolo:!0,options:k,value:l,onChange:function(e,n){r(n)},renderInput:function(e){var n;return(0,F.jsx)(a.Z,(0,t.Z)((0,t.Z)({},e),{},{placeholder:"Select multiple tags",label:"Tags",variant:"outlined",InputLabelProps:{shrink:!0},error:!!L.Autocomplete,helperText:null===L||void 0===L||null===(n=L.Autocomplete)||void 0===n?void 0:n.message,onBlur:o,inputRef:i}))}})}})]}),(0,F.jsxs)("div",{className:"mt-48 mb-16",children:[(0,F.jsx)(p.Z,{className:"mb-24 font-medium text-14",children:"DateTimePicker"}),(0,F.jsx)(l.Qr,{name:"DateTimePicker",control:R,render:function(e){var n,r=e.field,t=r.onChange,l=r.value;r.onBlur;return(0,F.jsx)(Z.x,{value:new Date(l),onChange:t,required:!0,slotProps:{textField:{id:"birthday",label:"Birthday",InputLabelProps:{shrink:!0},fullWidth:!0,variant:"outlined",error:!!L.DateTimePicker,helperText:null===L||void 0===L||null===(n=L.DateTimePicker)||void 0===n?void 0:n.message},inputAdornment:{position:"start",children:(0,F.jsx)(C.Z,{size:20,children:"heroicons-solid:cake"})}}})}})]}),(0,F.jsxs)("div",{className:"flex my-48 items-center",children:[(0,F.jsx)(o.Z,{className:"mx-8",variant:"contained",color:"secondary",type:"submit",disabled:b.Z.isEmpty(M)||!B,children:"Submit"}),(0,F.jsx)(o.Z,{className:"mx-8",type:"button",onClick:function(){I(S)},children:"Reset Form"})]})]}),(0,F.jsxs)("div",{className:"w-1/2 my-48 p-24",children:[(0,F.jsx)("div",{className:"mb-12",children:(0,F.jsxs)(p.Z,{children:["Is Valid: ",B?"true":"false"]})}),(0,F.jsx)("div",{className:"mb-12",children:(0,F.jsx)(p.Z,{children:"Form data"})}),(0,F.jsx)("div",{className:"mb-12",children:(0,F.jsx)("pre",{className:"language-js p-24 w-400",children:JSON.stringify(V,null,2)})}),(0,F.jsxs)("div",{className:"mb-12",children:[(0,F.jsx)(p.Z,{children:"Touched fields"}),(0,F.jsx)("pre",{className:"language-js p-24 w-400",children:JSON.stringify(D,null,2)})]}),(0,F.jsx)("div",{className:"mb-12",children:(0,F.jsxs)(p.Z,{className:"mt-16 font-medium text-12 italic",color:"text.secondary",children:["Render Count: ",T]})})]})]})}},21331:function(e,n,r){r.r(n),n.default='import { Controller, useForm } from \'react-hook-form\';\nimport Button from \'@mui/material/Button\';\nimport TextField from \'@mui/material/TextField\';\nimport Checkbox from \'@mui/material/Checkbox\';\nimport Select from \'@mui/material/Select\';\nimport MenuItem from \'@mui/material/MenuItem\';\nimport Switch from \'@mui/material/Switch\';\nimport RadioGroup from \'@mui/material/RadioGroup\';\nimport FormControlLabel from \'@mui/material/FormControlLabel\';\nimport Radio from \'@mui/material/Radio\';\nimport Typography from \'@mui/material/Typography\';\nimport Autocomplete from \'@mui/material/Autocomplete\';\nimport * as yup from \'yup\';\nimport { yupResolver } from \'@hookform/resolvers/yup\';\nimport _ from \'@lodash\';\nimport clsx from \'clsx\';\nimport FormControl from \'@mui/material/FormControl\';\nimport FormLabel from \'@mui/material/FormLabel\';\nimport FormHelperText from \'@mui/material/FormHelperText\';\nimport { DateTimePicker } from \'@mui/x-date-pickers\';\nimport FuseSvgIcon from \'@fuse/core/FuseSvgIcon\';\n\nlet renderCount = 0;\n\nconst options = [\n  {\n    value: \'chocolate\',\n    label: \'Chocolate\',\n  },\n  {\n    value: \'strawberry\',\n    label: \'Strawberry\',\n  },\n  {\n    value: \'vanilla\',\n    label: \'Vanilla\',\n  },\n];\n\nconst defaultValues = {\n  Native: \'\',\n  TextField: \'\',\n  Select: \'\',\n  Autocomplete: [],\n  Checkbox: false,\n  Switch: false,\n  RadioGroup: \'\',\n  DateTimePicker: \'\',\n};\n\n/**\n * Form Validation Schema\n */\nconst schema = yup.object().shape({\n  TextField: yup.string().required(\'You must enter a value\'),\n  Native: yup.string().required(\'You must enter a value\'),\n  Select: yup.string().required(\'You must select a value\').oneOf([\'20\', \'30\'], \'Select 20 or 30.\'),\n  Checkbox: yup.boolean().oneOf([true], \'You must check.\'),\n  Switch: yup.boolean().oneOf([true], \'You must turn it on.\'),\n  RadioGroup: yup.string().oneOf([\'female\'], \'You must select female.\'),\n  Autocomplete: yup.array().min(2, \'Select at least two.\'),\n  DateTimePicker: yup.string().nullable().required(\'You must select a date\'),\n});\n\nfunction SimpleFormExample() {\n  const { handleSubmit, register, reset, control, watch, formState } = useForm({\n    defaultValues,\n    mode: \'all\',\n    resolver: yupResolver(schema),\n  });\n\n  const { isValid, dirtyFields, errors, touchedFields } = formState;\n\n  renderCount += 1;\n\n  const data = watch();\n\n  return (\n    <div className="flex w-full max-w-screen-md justify-start items-start">\n      <form className="w-1/2" onSubmit={handleSubmit((_data) => console.info(_data))}>\n        <div className="mt-48 mb-16">\n          <Typography className="mb-24 font-medium text-14">Native Input:</Typography>\n\n          <input\n            className={clsx(\'border-1 outline-none rounded-8 p-8\', !!errors.Native && \'border-red\')}\n            {...register(\'Native\')}\n            required\n          />\n\n          {!!errors.Native && (\n            <Typography className="px-4 py-8 font-medium text-14" color="error">\n              {errors?.Native?.message}\n            </Typography>\n          )}\n        </div>\n\n        <div className="mt-48 mb-16">\n          <Controller\n            name="Checkbox"\n            type="checkbox"\n            control={control}\n            render={({ field: { onChange, value, onBlur, ref } }) => (\n              <FormControl error={!!errors.Checkbox} required>\n                <FormLabel className="font-medium text-14" component="legend">\n                  MUI Checkbox\n                </FormLabel>\n                <FormControlLabel\n                  label="I agree"\n                  control={\n                    <Checkbox\n                      checked={value}\n                      onBlur={onBlur}\n                      onChange={(ev) => onChange(ev.target.checked)}\n                      inputRef={ref}\n                      required\n                    />\n                  }\n                />\n                <FormHelperText>{errors?.Checkbox?.message}</FormHelperText>\n              </FormControl>\n            )}\n          />\n        </div>\n\n        <div className="mt-48 mb-16">\n          <Controller\n            render={({ field }) => (\n              <FormControl error={!!errors.RadioGroup} required>\n                <FormLabel className="font-medium text-14" component="legend">\n                  Radio Group\n                </FormLabel>\n                <RadioGroup {...field} aria-label="gender" name="gender1">\n                  <FormControlLabel value="female" control={<Radio />} label="Female" />\n                  <FormControlLabel value="male" control={<Radio />} label="Male" />\n                </RadioGroup>\n                <FormHelperText>{errors?.RadioGroup?.message}</FormHelperText>\n              </FormControl>\n            )}\n            name="RadioGroup"\n            control={control}\n          />\n        </div>\n\n        <div className="mt-48 mb-16">\n          <Controller\n            render={({ field }) => (\n              <TextField\n                {...field}\n                label="MUI TextField"\n                variant="outlined"\n                error={!!errors.TextField}\n                helperText={errors?.TextField?.message}\n                required\n                fullWidth\n              />\n            )}\n            name="TextField"\n            control={control}\n          />\n        </div>\n\n        <div className="mt-48 mb-16">\n          <Controller\n            render={({ field }) => (\n              <FormControl error={!!errors.Select} required fullWidth>\n                <FormLabel className="font-medium text-14" component="legend">\n                  MUI Select\n                </FormLabel>\n                <Select {...field} variant="outlined" fullWidth>\n                  <MenuItem value="10">Ten (10)</MenuItem>\n                  <MenuItem value="20">Twenty (20)</MenuItem>\n                  <MenuItem value="30">Thirty (30)</MenuItem>\n                </Select>\n                <FormHelperText>{errors?.Select?.message}</FormHelperText>\n              </FormControl>\n            )}\n            name="Select"\n            control={control}\n          />\n        </div>\n\n        <div className="mt-48 mb-16">\n          <Controller\n            name="Switch"\n            type="checkbox"\n            control={control}\n            render={({ field: { onChange, value, ref, onBlur } }) => (\n              <FormControl required error={!!errors.Switch}>\n                <FormLabel className="font-medium text-14" component="legend">\n                  MUI Switch\n                </FormLabel>\n                <Switch\n                  checked={value}\n                  onBlur={onBlur}\n                  onChange={(ev) => onChange(ev.target.checked)}\n                  inputRef={ref}\n                  required\n                />\n                <FormHelperText>{errors?.Switch?.message}</FormHelperText>\n              </FormControl>\n            )}\n          />\n        </div>\n\n        <div className="mt-48 mb-16">\n          <Typography className="mb-24 font-medium text-14">Autocomplete</Typography>\n          <Controller\n            name="Autocomplete"\n            control={control}\n            defaultValue={[]}\n            render={({ field: { onChange, value, onBlur, ref } }) => (\n              <Autocomplete\n                className="mt-8 mb-16"\n                multiple\n                freeSolo\n                options={options}\n                value={value}\n                onChange={(event, newValue) => {\n                  onChange(newValue);\n                }}\n                renderInput={(params) => (\n                  <TextField\n                    {...params}\n                    placeholder="Select multiple tags"\n                    label="Tags"\n                    variant="outlined"\n                    InputLabelProps={{\n                      shrink: true,\n                    }}\n                    error={!!errors.Autocomplete}\n                    helperText={errors?.Autocomplete?.message}\n                    onBlur={onBlur}\n                    inputRef={ref}\n                  />\n                )}\n              />\n            )}\n          />\n        </div>\n\n        <div className="mt-48 mb-16">\n          <Typography className="mb-24 font-medium text-14">DateTimePicker</Typography>\n\n          <Controller\n            name="DateTimePicker"\n            control={control}\n            render={({ field: { onChange, value, onBlur } }) => (\n              <DateTimePicker\n                value={new Date(value)}\n                onChange={onChange}\n                required\n                slotProps={{\n                  textField: {\n                    id: \'birthday\',\n                    label: \'Birthday\',\n                    InputLabelProps: {\n                      shrink: true,\n                    },\n                    fullWidth: true,\n                    variant: \'outlined\',\n                    error:!!errors.DateTimePicker,\n                    helperText:errors?.DateTimePicker?.message\n                  },\n                  inputAdornment: {\n                    position: \'start\',\n                    children: <FuseSvgIcon size={20}>heroicons-solid:cake</FuseSvgIcon>,\n                  }}}\n          />)}\n          />\n        </div>\n\n        <div className="flex my-48 items-center">\n          <Button\n            className="mx-8"\n            variant="contained"\n            color="secondary"\n            type="submit"\n            disabled={_.isEmpty(dirtyFields) || !isValid}\n          >\n            Submit\n          </Button>\n\n          <Button\n            className="mx-8"\n            type="button"\n            onClick={() => {\n              reset(defaultValues);\n            }}\n          >\n            Reset Form\n          </Button>\n        </div>\n      </form>\n\n      <div className="w-1/2 my-48 p-24">\n        <div className="mb-12">\n          <Typography>Is Valid: {isValid ? \'true\' : \'false\'}</Typography>\n        </div>\n\n        <div className="mb-12">\n          <Typography>Form data</Typography>\n        </div>\n\n        <div className="mb-12">\n          <pre className="language-js p-24 w-400">{JSON.stringify(data, null, 2)}</pre>\n        </div>\n\n        <div className="mb-12">\n          <Typography>Touched fields</Typography>\n\n          <pre className="language-js p-24 w-400">{JSON.stringify(touchedFields, null, 2)}</pre>\n        </div>\n\n        <div className="mb-12">\n          <Typography className="mt-16 font-medium text-12 italic" color="text.secondary">\n            Render Count: {renderCount}\n          </Typography>\n        </div>\n      </div>\n    </div>\n  );\n}\n\nexport default SimpleFormExample;\n'}}]);