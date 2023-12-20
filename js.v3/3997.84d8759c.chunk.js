"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[3997],{43997:function(e,n,t){t.r(n);var s=t(98655),i=t(70501),o=t(66835),r=t(57861),a=t(70941),l=t(23477),c=t(24076),m=t(61113),d=t(46417);n.default=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m.Z,{variant:"h4",className:"mb-40 font-700",children:"FuseAuthorization"}),(0,d.jsxs)(m.Z,{className:"mb-16",component:"p",children:[(0,d.jsx)("code",{children:"FuseAuthorization"})," is the authorization component of the Fuse React. It restricts unauthorized user access by looking at ",(0,d.jsx)("b",{children:"route configs"})," and ",(0,d.jsx)("b",{children:"user.role"}),"."]}),(0,d.jsx)(m.Z,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Setup"}),(0,d.jsx)(m.Z,{className:"inline-block mb-8 italic",component:"code",children:"src/app/App.js"}),(0,d.jsx)(s.Z,{component:"pre",className:"language-jsx",children:t(39025)}),(0,d.jsx)(m.Z,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Configuration"}),(0,d.jsx)(m.Z,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Route Configuration:"}),(0,d.jsxs)(m.Z,{className:"mb-16",component:"p",children:["You need to define authorization (auth) in the ",(0,d.jsx)("b",{children:"route config files"})," to control the access via permission roles."]}),(0,d.jsx)(m.Z,{className:"mt-32 mb-8",variant:"subtitle2",children:"Example Usage:"}),(0,d.jsx)(m.Z,{className:"inline-block mb-8 italic",component:"code",children:"src/app/main/auth/admin-role-example/AdminRoleExampleConfig.js"}),(0,d.jsx)(s.Z,{component:"pre",className:"language-jsx",children:t(44657)}),(0,d.jsx)(m.Z,{className:"my-16",component:"p",children:"You can also give different auth values for individual routes with writing auth value inside the route object."}),(0,d.jsx)(i.Z,{className:"max-w-md my-16",children:(0,d.jsxs)(o.Z,{children:[(0,d.jsx)(l.Z,{children:(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(a.Z,{className:"font-semibold text-14",children:"Authorization Role (auth) options"}),(0,d.jsx)(a.Z,{})]})}),(0,d.jsxs)(r.Z,{children:[(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)("code",{children:"null"})}),(0,d.jsx)(a.Z,{children:"Do not check, allow everyone"})]}),(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)("code",{children:"[]"})}),(0,d.jsx)(a.Z,{children:"Only guest allowed"})]}),(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)("code",{children:"[admin,user]"})}),(0,d.jsx)(a.Z,{children:"Only 'admin' and 'user' roles are allowed"})]})]})]})}),(0,d.jsx)(m.Z,{className:"mt-48 mb-8",variant:"h6",children:"User.role Configuration:"}),(0,d.jsxs)(m.Z,{className:"mb-16",component:"p",children:["User ",(0,d.jsx)("b",{children:"role"})," and ",(0,d.jsx)("b",{children:"data"})," are stored at ",(0,d.jsx)("b",{children:"user"})," in the redux store."]}),(0,d.jsx)(m.Z,{className:"mb-16",component:"p",children:"After successful login user.role will be updated and the FuseAuthorization automatically redirects the authorized user."}),(0,d.jsx)(m.Z,{className:"inline-block mb-8 italic",component:"code",children:"app/store/userSlice.js (initial user state)"}),(0,d.jsx)(s.Z,{component:"pre",className:"language-js",children:"  \n                const initialState = {\n                role: [],//guest\n                data: {\n                    'displayName': 'John Doe',\n                    'photoURL'   : 'assets/images/avatars/Velazquez.jpg',\n                    'email'      : 'johndoe@withinpixels.com',\n                    shortcuts    : [\n                      'calendar',\n                      'mail',\n                      'contacts',\n                      'todo'\n                    ]\n                  }\n                };\n       "}),(0,d.jsx)(i.Z,{className:"max-w-md my-16",children:(0,d.jsxs)(o.Z,{children:[(0,d.jsx)(l.Z,{children:(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(a.Z,{className:"font-semibold text-14",children:"User Role options"}),(0,d.jsx)(a.Z,{})]})}),(0,d.jsxs)(r.Z,{children:[(0,d.jsxs)(c.Z,{children:[(0,d.jsxs)(a.Z,{children:[(0,d.jsx)("code",{children:"null"})," or ",(0,d.jsx)("code",{children:"undefined"})," or ",(0,d.jsx)("code",{children:"[]"})]}),(0,d.jsx)(a.Z,{children:"Guest"})]}),(0,d.jsxs)(c.Z,{children:[(0,d.jsxs)(a.Z,{children:[(0,d.jsx)("code",{children:"['admin','user']"})," (array)"]}),(0,d.jsx)(a.Z,{children:"User has roles 'admin' and 'user'"})]}),(0,d.jsxs)(c.Z,{children:[(0,d.jsxs)(a.Z,{children:[(0,d.jsx)("code",{children:'"admin"'})," (string)"]}),(0,d.jsx)(a.Z,{children:"User has 'admin' role"})]})]})]})}),(0,d.jsx)(m.Z,{className:"mt-48 mb-8",variant:"h6",children:"Navigation Item Configuration:"}),(0,d.jsxs)(m.Z,{className:"mb-16",component:"p",children:["You can control the navigation ",(0,d.jsx)("b",{children:"item/group/collapse"})," visibility by adding ",(0,d.jsx)("b",{children:"auth"}),"property in ",(0,d.jsx)("code",{children:"app/configs/NavigationConfig.js"}),"."]}),(0,d.jsx)(m.Z,{className:"mt-32 mb-8",variant:"subtitle2",children:"Example Usage:"}),(0,d.jsx)(s.Z,{component:"pre",className:"language-js",children:"\n\t\t\t\t\t {\n\t\t\t\t\t\t'id'   : 'only-admin-navigation-item',\n\t\t\t\t\t\t'title': 'Nav item only for Admin',\n\t\t\t\t\t\t'type' : 'item',\n\t\t\t\t\t\t'auth' : authRoles.admin,//['admin']\n\t\t\t\t\t\t'url'  : '/auth/admin-role-example',\n\t\t\t\t\t\t'icon' : 'verified_user'\n\t\t\t\t\t  },\n\t\t\t\t"}),(0,d.jsx)(m.Z,{className:"mt-48 mb-4",variant:"h5",children:"Default Auth value:"}),(0,d.jsxs)(m.Z,{className:"",component:"p",children:["If you don't want to set auth on every page config;",(0,d.jsx)("br",{}),"you can give defaultAuth role value in the file"," ",(0,d.jsx)("code",{children:"src/app/configs/settingsConfig.js"}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"The individual route configs which has auth option won't be overridden."]}),(0,d.jsx)(m.Z,{className:"mt-24 mb-4",variant:"h6",children:"Making the whole app auth protected by default:"}),(0,d.jsx)(m.Z,{className:"mb-12",variant:"subtitle2",children:"src/app/configs/settingsConfig.js"}),(0,d.jsx)(s.Z,{component:"pre",className:"language-js",children:"\n\t\t\t\t\tdefaultAuth:['admin','staff','user']\n\t\t\t\t"}),(0,d.jsx)(m.Z,{className:"mt-24 mb-4",variant:"h6",children:"Making the whole app without authorization by default"}),(0,d.jsx)(m.Z,{className:"mb-12",variant:"subtitle2",children:"src/app/configs/settingsConfig.js"}),(0,d.jsx)(s.Z,{component:"pre",className:"language-js",children:"\n\t\t\t\tdefaultAuth: null\n\t\t\t\t"}),(0,d.jsx)(m.Z,{className:"mt-48 mb-4",variant:"h5",children:"Redirect the logged-in user to a specific route depending on his role"}),(0,d.jsxs)(m.Z,{className:"mb-16",component:"p",children:["Before dispatching ",(0,d.jsx)("b",{children:"SET_USER_DATA"})," action you can set loginRedirectUrl on"]}),(0,d.jsx)(m.Z,{className:"inline-block mb-8 italic",component:"code",children:"app/store/userSlice.js"}),(0,d.jsx)(s.Z,{component:"pre",className:"language-js",children:"\n\t\t\t\texport const setUser = createAsyncThunk('user/setUser', async (user, { dispatch, getState }) => {\n            /*\n              You can redirect the logged-in user to a specific route depending on his role\n              */\n            if (user.loginRedirectUrl) {\n              settingsConfig.loginRedirectUrl = user.loginRedirectUrl; // for example 'apps/academy'\n            }\n          \n            return user;\n          });\n\t\t\t\t"}),(0,d.jsx)(m.Z,{className:"mt-48 mb-4",variant:"h5",children:"Uncaught Error: Maximum update depth exceeded: Infinite loops"}),(0,d.jsxs)(m.Z,{className:"mb-16",component:"p",children:["If you are getting this error, make sure authenticated user has rights to access main route"," ",(0,d.jsx)("b",{children:'"/"'}),"or it's redirected route path."]}),(0,d.jsxs)(m.Z,{className:"mb-16",component:"p",children:["After successful login, every authenticated user should be able to access to main route path"," ",(0,d.jsx)("b",{children:'"/"'})," or redirected route path."]})]})}},39025:function(e,n,t){t.r(n),n.default="import '@mock-api';\nimport BrowserRouter from '@fuse/core/BrowserRouter';\nimport FuseLayout from '@fuse/core/FuseLayout';\nimport FuseTheme from '@fuse/core/FuseTheme';\nimport { SnackbarProvider } from 'notistack';\nimport { useSelector } from 'react-redux';\nimport rtlPlugin from 'stylis-plugin-rtl';\nimport createCache from '@emotion/cache';\nimport { CacheProvider } from '@emotion/react';\nimport { selectCurrentLanguageDirection } from 'app/store/i18nSlice';\nimport { selectUser } from 'app/store/userSlice';\nimport themeLayouts from 'app/theme-layouts/themeLayouts';\nimport { selectMainTheme } from 'app/store/fuse/settingsSlice';\nimport FuseAuthorization from '@fuse/core/FuseAuthorization';\nimport settingsConfig from 'app/configs/settingsConfig';\nimport withAppProviders from './withAppProviders';\nimport { AuthProvider } from './auth/AuthContext';\n\n// import axios from 'axios';\n/**\n * Axios HTTP Request defaults\n */\n// axios.defaults.baseURL = \"\";\n// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';\n// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';\n\nconst emotionCacheOptions = {\n  rtl: {\n    key: 'muirtl',\n    stylisPlugins: [rtlPlugin],\n    insertionPoint: document.getElementById('emotion-insertion-point'),\n  },\n  ltr: {\n    key: 'muiltr',\n    stylisPlugins: [],\n    insertionPoint: document.getElementById('emotion-insertion-point'),\n  },\n};\n\nfunction App() {\n  const user = useSelector(selectUser);\n  const langDirection = useSelector(selectCurrentLanguageDirection);\n  const mainTheme = useSelector(selectMainTheme);\n\n  return (\n    <CacheProvider value={createCache(emotionCacheOptions[langDirection])}>\n      <FuseTheme theme={mainTheme} direction={langDirection}>\n        <AuthProvider>\n          <BrowserRouter>\n            <FuseAuthorization\n              userRole={user.role}\n              loginRedirectUrl={settingsConfig.loginRedirectUrl}\n            >\n              <SnackbarProvider\n                maxSnack={5}\n                anchorOrigin={{\n                  vertical: 'bottom',\n                  horizontal: 'right',\n                }}\n                classes={{\n                  containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',\n                }}\n              >\n                <FuseLayout layouts={themeLayouts} />\n              </SnackbarProvider>\n            </FuseAuthorization>\n          </BrowserRouter>\n        </AuthProvider>\n      </FuseTheme>\n    </CacheProvider>\n  );\n}\n\nexport default withAppProviders(App)();\n"},44657:function(e,n,t){t.r(n),n.default="import AdminRoleExample from './AdminRoleExample';\nimport authRoles from '../../../auth/authRoles';\n\nconst AdminRoleExampleConfig = {\n  settings: {\n    layout: {\n      config: {},\n    },\n  },\n  auth: authRoles.admin, // ['admin']\n  routes: [\n    {\n      path: 'auth/admin-role-example',\n      element: <AdminRoleExample />,\n    },\n  ],\n};\n\nexport default AdminRoleExampleConfig;\n"}}]);