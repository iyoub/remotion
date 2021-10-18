"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6358],{57522:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return h},useMDXComponents:function(){return s},withMDXComponents:function(){return u}});var r=n(29901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),u=function(e){return function(t){var n=s(t.components);return r.createElement(e,i({},t,{components:n}))}},s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),u=s(n),c=o,f=u["".concat(a,".").concat(c)]||u[c]||p[c]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86431:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return d},assets:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(3920),o=n(50264),i=(n(29901),n(57522)),a=["components"],l={slug:"1-2",title:"Remotion 1.2",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},m=void 0,d={permalink:"/blog/1-2",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/blog/blog/2021-02-13-remotion-1-2.md",source:"@site/blog/2021-02-13-remotion-1-2.md",title:"Remotion 1.2",description:"You have tested Remotion and provided an enormous amount of feedback! Thanks to it, this version of Remotion is vastly improved \ud83c\udf89",date:"2021-02-13T00:00:00.000Z",formattedDate:"February 13, 2021",tags:[],readingTime:1.34,truncated:!1,authors:[{name:"Jonny Burger",title:"Indie Hacker",url:"https://github.com/JonnyBurger",imageURL:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"}],prevItem:{title:"Remotion 1.3",permalink:"/blog/1-3"},nextItem:{title:"Remotion 1.1",permalink:"/blog/1-1"}},u={authorsImageUrls:[void 0]},s=[{value:"Rendering time cut in half!",id:"rendering-time-cut-in-half",children:[],level:2},{value:"Windows support",id:"windows-support",children:[],level:2},{value:"Discord community",id:"discord-community",children:[],level:2},{value:"Licensing now available",id:"licensing-now-available",children:[],level:2},{value:"Roadmap",id:"roadmap",children:[],level:2},{value:"Miscellaneous",id:"miscellaneous",children:[],level:2}],c={toc:s};function p(e){var t=e.components,n=(0,o.default)(e,a);return(0,i.mdx)("wrapper",(0,r.default)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"You have tested Remotion and provided an enormous amount of feedback! Thanks to it, this version of Remotion is vastly improved \ud83c\udf89"),(0,i.mdx)("h2",{id:"rendering-time-cut-in-half"},"Rendering time cut in half!"),(0,i.mdx)("p",null,"It turns out rendering each frame as JPEG is much faster than rendering them in PNG and results in no visible quality difference. Using this trick, the time of the 'Rendering Frames...' of an example video went down from 14 seconds to 6.5 seconds! That's more than twice as fast."),(0,i.mdx)("p",null,"Now that the rendering process is JPEG-based, ",(0,i.mdx)("a",{parentName:"p",href:"/docs/cli#flags"},"a new flag ",(0,i.mdx)("inlineCode",{parentName:"a"},"--quality"))," was added to command line. ",(0,i.mdx)("a",{parentName:"p",href:"/docs/ssr#render-a-video-programmatically"},"For server-side rendering, you may pass in a new ",(0,i.mdx)("inlineCode",{parentName:"a"},"imageFormat"))," option.\nIf you ",(0,i.mdx)("a",{parentName:"p",href:"/docs/cli#flags"},"render a PNG sequence"),", Remotion will of course still deliver PNGs."),(0,i.mdx)("p",null,"The goal is to make rendering even faster, finding further optimizations is going to be a very interesting task!"),(0,i.mdx)("h2",{id:"windows-support"},"Windows support"),(0,i.mdx)("p",null,"Windows support is very important (",(0,i.mdx)("a",{parentName:"p",href:"https://www.youtube.com/watch?t=74&v=jo_B4LTHi3I&feature=youtu.be"},(0,i.mdx)("em",{parentName:"a"},"just like PHP")),"). All the bugs that prevented proper Windows installation have now been fixed. Plus I now have a proper Windows setup so from now on Remotion will be tested on Windows as well!"),(0,i.mdx)("h2",{id:"discord-community"},"Discord community"),(0,i.mdx)("p",null,"We now have a Discord! ",(0,i.mdx)("a",{parentName:"p",href:"https://discord.gg/6VzzNDwUwV"},"Join now and chat about Remotion!")),(0,i.mdx)("h2",{id:"licensing-now-available"},"Licensing now available"),(0,i.mdx)("p",null,"The terms of ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/remotion-dev/remotion/blob/main/LICENSE.md#company-license"},"the company license")," have now been worked out and a billing system with Stripe has been set up. Contact me for pricing!"),(0,i.mdx)("h2",{id:"roadmap"},"Roadmap"),(0,i.mdx)("p",null,"A GitHub Project board has been setup with the goal ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/remotion-dev/remotion/projects/3"},"of indicating the next priorities"),". Check it out!"),(0,i.mdx)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/remotion-dev/remotion/pull/54"},"Add .dockerignore")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/remotion-dev/remotion/pull/49"},"Use ",(0,i.mdx)("inlineCode",{parentName:"a"},"npm init video")," instead of ",(0,i.mdx)("inlineCode",{parentName:"a"},"npx create-video"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/remotion-dev/remotion/pull/66"},"Fix refs of ",(0,i.mdx)("inlineCode",{parentName:"a"},"<Image/>")," component")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/remotion-dev/remotion/pull/48"},"Improve page management pool"))))}p.isMDXComponent=!0}}]);