"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1439],{57522:function(e,a,n){n.r(a),n.d(a,{MDXContext:function(){return i},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return l},withMDXComponents:function(){return p}});var t=n(29901);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function m(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?m(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),p=function(e){return function(a){var n=l(a.components);return t.createElement(e,o({},a,{components:n}))}},l=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=l(e.components);return t.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=l(n),c=r,f=p["".concat(m,".").concat(c)]||p[c]||u[c]||o;return n?t.createElement(f,s(s({ref:a},i),{},{components:n})):t.createElement(f,s({ref:a},i))}));function x(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,m=new Array(o);m[0]=f;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,m[1]=s;for(var i=2;i<o;i++)m[i]=n[i];return t.createElement.apply(null,m)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},16575:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var t=n(3920),r=n(50264),o=(n(29901),n(57522)),m=["components"],s={id:"spring",title:"spring()"},d=void 0,i={unversionedId:"spring",id:"spring",isDocsHomePage:!1,title:"spring()",description:"Delightful and smooth animation primitive. Calculates a position based on physical parameters, start and end value, and time.",source:"@site/docs/spring.md",sourceDirName:".",slug:"/spring",permalink:"/docs/spring",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/spring.md",tags:[],version:"current",frontMatter:{id:"spring",title:"spring()"},sidebar:"someSidebar",previous:{title:"registerRoot()",permalink:"/docs/register-root"},next:{title:"useCurrentFrame()",permalink:"/docs/use-current-frame"}},p=[{value:"Parameters",id:"parameters",children:[{value:"frame",id:"frame",children:[],level:3},{value:"from",id:"from",children:[],level:3},{value:"to",id:"to",children:[],level:3},{value:"fps",id:"fps",children:[],level:3},{value:"config",id:"config",children:[{value:"mass",id:"mass",children:[],level:4},{value:"damping",id:"damping",children:[],level:4},{value:"stiffness",id:"stiffness",children:[],level:4},{value:"overshootClamping",id:"overshootclamping",children:[],level:4}],level:3}],level:2},{value:"YouTube video",id:"youtube-video",children:[],level:2},{value:"Credit",id:"credit",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],l={toc:p};function c(e){var a=e.components,n=(0,r.default)(e,m);return(0,o.mdx)("wrapper",(0,t.default)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Delightful and smooth animation primitive. Calculates a position based on physical parameters, start and end value, and time."),(0,o.mdx)("p",null,"Example:"),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useCurrentFrame(): number\nimport useCurrentFrame"},"useCurrentFrame")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"();")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const videoConfig: VideoConfig"},"videoConfig")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useVideoConfig(): VideoConfig\nimport useVideoConfig"},"useVideoConfig")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"();")),(0,o.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const value: number"},"value")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) spring({ frame, fps, config, from, to, }: {\n    frame: number;\n    fps: number;\n    config?: Partial<SpringConfig> | undefined;\n    from?: number | undefined;\n    to?: number | undefined;\n}): number\nimport spring"},"spring")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"({")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) frame: number"},"frame"),",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) from?: number | undefined"},"from"),": "),(0,o.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"0"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) to?: number | undefined"},"to"),": "),(0,o.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"1"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) fps: number"},"fps"),": ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const videoConfig: VideoConfig"},"videoConfig"),".",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) fps: number"},"fps"),",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) config?: Partial<SpringConfig> | undefined"},"config"),": {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) stiffness?: number | undefined"},"stiffness"),": "),(0,o.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"100"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"});"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki github-dark twoslash lsp",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame")),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useCurrentFrame(): number\nimport useCurrentFrame"},"useCurrentFrame")),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"();")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const videoConfig: VideoConfig"},"videoConfig")),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useVideoConfig(): VideoConfig\nimport useVideoConfig"},"useVideoConfig")),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"();")),(0,o.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const value: number"},"value")),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) spring({ frame, fps, config, from, to, }: {\n    frame: number;\n    fps: number;\n    config?: Partial<SpringConfig> | undefined;\n    from?: number | undefined;\n    to?: number | undefined;\n}): number\nimport spring"},"spring")),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"({")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) frame: number"},"frame"),",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) from?: number | undefined"},"from"),": "),(0,o.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"0"),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) to?: number | undefined"},"to"),": "),(0,o.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"1"),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) fps: number"},"fps"),": ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const videoConfig: VideoConfig"},"videoConfig"),".",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) fps: number"},"fps"),",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) config?: Partial<SpringConfig> | undefined"},"config"),": {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) stiffness?: number | undefined"},"stiffness"),": "),(0,o.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"100"),(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  },")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"});")))))),(0,o.mdx)("h2",{id:"parameters"},"Parameters"),(0,o.mdx)("h3",{id:"frame"},"frame"),(0,o.mdx)("p",null,"The current time value. Most of the time you want to pass in the return value of ",(0,o.mdx)("inlineCode",{parentName:"p"},"useCurrentFrame"),". The spring animation starts at frame 0, so if you would like to delay the animation, you can pass a different value like ",(0,o.mdx)("inlineCode",{parentName:"p"},"frame - 20"),"."),(0,o.mdx)("h3",{id:"from"},"from"),(0,o.mdx)("p",null,"The initial value of the animation."),(0,o.mdx)("h3",{id:"to"},"to"),(0,o.mdx)("p",null,"The end value of the animation. Note that depending on the parameters, spring animations may overshoot the target a bit, before they bounce back to their final target."),(0,o.mdx)("h3",{id:"fps"},"fps"),(0,o.mdx)("p",null,"For how many frames per second the spring animation should be calculated. This should always be the ",(0,o.mdx)("inlineCode",{parentName:"p"},"fps")," property of the return value of ",(0,o.mdx)("inlineCode",{parentName:"p"},"useVideoConfig()"),"."),(0,o.mdx)("h3",{id:"config"},"config"),(0,o.mdx)("p",null,"An optional object that allows you to customize the physical properties of the animation."),(0,o.mdx)("h4",{id:"mass"},"mass"),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Default:")," ",(0,o.mdx)("inlineCode",{parentName:"p"},"1")),(0,o.mdx)("p",null,"The weight of the spring. If you reduce the mass, the animation becomes faster!"),(0,o.mdx)("h4",{id:"damping"},"damping"),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Default"),": ",(0,o.mdx)("inlineCode",{parentName:"p"},"10")),(0,o.mdx)("p",null,"How hard the animation decelerates."),(0,o.mdx)("h4",{id:"stiffness"},"stiffness"),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Default"),": ",(0,o.mdx)("inlineCode",{parentName:"p"},"100")),(0,o.mdx)("p",null,"Spring stiffness coefficient. Play with this one and it will affect how bouncy your animation is."),(0,o.mdx)("h4",{id:"overshootclamping"},"overshootClamping"),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Default"),": ",(0,o.mdx)("inlineCode",{parentName:"p"},"false")),(0,o.mdx)("p",null,"Determines whether the animation can shoot over the ",(0,o.mdx)("inlineCode",{parentName:"p"},"to")," value. If set to true, if the animation goes over ",(0,o.mdx)("inlineCode",{parentName:"p"},"to"),", it will just return the value of ",(0,o.mdx)("inlineCode",{parentName:"p"},"to"),"."),(0,o.mdx)("h2",{id:"youtube-video"},"YouTube video"),(0,o.mdx)("p",null,"Want to understand the different properties like ",(0,o.mdx)("inlineCode",{parentName:"p"},"mass"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"stiffness"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"damping")," etc.? We made a video trying to make sense of all the parameters!"),(0,o.mdx)("p",null,"Watch: ",(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=GE8ZqrKqE5g"},"The perfect spring animation"))),(0,o.mdx)("h2",{id:"credit"},"Credit"),(0,o.mdx)("p",null,"This function was taken from ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"Reanimated 2"),", which in itself was a huge inspiration for Remotion."),(0,o.mdx)("h2",{id:"see-also"},"See also"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/interpolate"},"interpolate()")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/measure-spring"},"measureSpring()"))))}c.isMDXComponent=!0}}]);