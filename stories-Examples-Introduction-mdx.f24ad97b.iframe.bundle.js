/*! For license information please see stories-Examples-Introduction-mdx.f24ad97b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[851],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Examples/Introduction.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Introduction});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const code_brackets_namespaceObject=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg",colors_namespaceObject=__webpack_require__.p+"static/media/colors.a4bd0486.svg",comments_namespaceObject=__webpack_require__.p+"static/media/comments.a3859089.svg",direction_namespaceObject=__webpack_require__.p+"static/media/direction.b770f9af.svg",flow_namespaceObject=__webpack_require__.p+"static/media/flow.edad2ac1.svg",plugin_namespaceObject=__webpack_require__.p+"static/media/plugin.d494b228.svg",repo_namespaceObject=__webpack_require__.p+"static/media/repo.6d496322.svg",stackalt_namespaceObject=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Example/Introduction"}),"\n",(0,jsx_runtime.jsx)("style",{children:"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 700;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span,\n    .link-item p {\n      margin: 0;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"welcome-to-storybook",children:"Welcome to Storybook"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",(0,jsx_runtime.jsx)(_components.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Browse example stories now by navigating to them in the sidebar.\nView their code in the ",(0,jsx_runtime.jsx)(_components.code,{children:"stories"})," directory to learn how they work.\nWe recommend building UIs with a ",(0,jsx_runtime.jsx)(_components.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,jsx_runtime.jsx)(_components.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"Configure"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"link-list",children:[(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:plugin_namespaceObject,alt:"plugin"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Presets for popular tools"}),"\nEasy setup for TypeScript, SCSS and more."]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:stackalt_namespaceObject,alt:"Build"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Build configuration"}),"\nHow to customize webpack and Babel"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:colors_namespaceObject,alt:"colors"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Styling"}),"\nHow to load and configure CSS libraries"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:flow_namespaceObject,alt:"flow"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Data"}),"\nProviders and mocking for data libraries"]})})]})]}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"Learn"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"link-list",children:[(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:repo_namespaceObject,alt:"repo"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Storybook documentation"}),"\nConfigure, customize, and extend"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:direction_namespaceObject,alt:"direction"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"In-depth guides"}),"\nBest practices from leading teams"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:code_brackets_namespaceObject,alt:"code"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"GitHub project"}),"\nView the source and add issues"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:comments_namespaceObject,alt:"comments"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Discord chat"}),"\nChat with maintainers and the community"]})})]})]}),"\n",(0,jsx_runtime.jsx)("div",{className:"tip-wrapper",children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ","\n",(0,jsx_runtime.jsx)("code",{children:"stories/Introduction.stories.mdx"})]})})]})}const Introduction=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);