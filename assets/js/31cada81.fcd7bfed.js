"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[830],{57522:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var r=t(29901);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){return function(n){var t=m(n.components);return r.createElement(e,a({},n,{components:t}))}},m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=m(t),u=o,f=c["".concat(i,".").concat(u)]||c[u]||p[u]||a;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},65117:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=t(3920),o=t(50264),a=(t(29901),t(57522)),i=["components"],s={id:"non-seekable-media",title:"Non-seekable media"},d=void 0,l={unversionedId:"non-seekable-media",id:"non-seekable-media",isDocsHomePage:!1,title:"Non-seekable media",description:"If you see the following error in the console:",source:"@site/docs/non-seekable-media.md",sourceDirName:".",slug:"/non-seekable-media",permalink:"/docs/non-seekable-media",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/non-seekable-media.md",tags:[],version:"current",frontMatter:{id:"non-seekable-media",title:"Non-seekable media"},sidebar:"someSidebar",previous:{title:"Webpack dynamic imports",permalink:"/docs/webpack-dynamic-imports"},next:{title:"Flickering",permalink:"/docs/flickering"}},c=[{value:"Reproduction",id:"reproduction",children:[],level:2},{value:"Solution",id:"solution",children:[],level:2}],m={toc:c};function u(e){var n=e.components,t=(0,o.default)(e,i);return(0,a.mdx)("wrapper",(0,r.default)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"If you see the following error in the console:"),(0,a.mdx)("div",{className:"shiki-twoslash-fragment"},(0,a.mdx)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,a.mdx)("div",{parentName:"pre",className:"code-container"},(0,a.mdx)("code",{parentName:"div"},(0,a.mdx)("div",{parentName:"code",className:"line"},(0,a.mdx)("span",{parentName:"div",style:{color:"undefined"}},"The media [audio source] does not seem to support seeking. Remotion cannot properly handle it. Please see https://remotion.dev/docs/non-seekable-media for assistance."))))),(0,a.mdx)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,a.mdx)("div",{parentName:"pre",className:"code-container"},(0,a.mdx)("code",{parentName:"div"},(0,a.mdx)("div",{parentName:"code",className:"line"},(0,a.mdx)("span",{parentName:"div",style:{color:"undefined"}},"The media [audio source] does not seem to support seeking. Remotion cannot properly handle it. Please see https://remotion.dev/docs/non-seekable-media for assistance.")))))),(0,a.mdx)("p",null,"it means you have provided a video or audio that cannot be seeked to an arbitrary time. The cause for this is that when requesting the audio file, no ",(0,a.mdx)("inlineCode",{parentName:"p"},"Content-Range")," HTTP header has been sent by the server, making it impossible for the browser and therefore for Remotion to seek the media."),(0,a.mdx)("h2",{id:"reproduction"},"Reproduction"),(0,a.mdx)("p",null,"You can verify that this is the problem by opening the video or audio in a new tab and observe that you cannot seek the media."),(0,a.mdx)("p",null,"So far, this behavior has been observed when serving media from a private Google Cloud Storage bucket."),(0,a.mdx)("h2",{id:"solution"},"Solution"),(0,a.mdx)("p",null,"To fix this problem, you need to serve the media from a webhost that supports the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Range")," header."),(0,a.mdx)("p",null,"Alternatively, you can download the media and import it locally using an ",(0,a.mdx)("inlineCode",{parentName:"p"},"import")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"require()")," statement."))}u.isMDXComponent=!0}}]);