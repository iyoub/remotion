"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4895],{57522:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return N},useMDXComponents:function(){return i},withMDXComponents:function(){return p}});var n=t(29901);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(){return d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){return function(a){var t=i(a.components);return n.createElement(e,d({},a,{components:t}))}},i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},x=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),p=i(t),c=r,x=p["".concat(o,".").concat(c)]||p[c]||u[c]||d;return t?n.createElement(x,s(s({ref:a},l),{},{components:t})):n.createElement(x,s({ref:a},l))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var d=t.length,o=new Array(d);o[0]=x;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<d;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}x.displayName="MDXCreateElement"},63013:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=t(3920),r=t(50264),d=(t(29901),t(57522)),o=["components"],s={title:"useAudioData()",id:"use-audio-data"},m=void 0,l={unversionedId:"use-audio-data",id:"use-audio-data",isDocsHomePage:!1,title:"useAudioData()",description:"Part of the @remotion/media-utils package of helper functions.",source:"@site/docs/use-audio-data.md",sourceDirName:".",slug:"/use-audio-data",permalink:"/docs/use-audio-data",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/use-audio-data.md",tags:[],version:"current",frontMatter:{title:"useAudioData()",id:"use-audio-data"},sidebar:"someSidebar",previous:{title:"getWaveformPortion()",permalink:"/docs/get-waveform-portion"},next:{title:"visualizeAudio()",permalink:"/docs/visualize-audio"}},p=[{value:"Arguments",id:"arguments",children:[{value:"<code>src</code>",id:"src",children:[],level:3}],level:2},{value:"Return value",id:"return-value",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],i={toc:p};function c(e){var a=e.components,t=(0,r.default)(e,o);return(0,d.mdx)("wrapper",(0,n.default)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Part of the ",(0,d.mdx)("inlineCode",{parentName:"em"},"@remotion/media-utils"))," package of helper functions."),(0,d.mdx)("p",null,"This convienience function wraps the ",(0,d.mdx)("a",{parentName:"p",href:"/docs/get-audio-data"},(0,d.mdx)("inlineCode",{parentName:"a"},"getAudioData()"))," function into a hook and does 3 things:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Keeps the audio data in a state"),(0,d.mdx)("li",{parentName:"ul"},"Wraps the function in a ",(0,d.mdx)("a",{parentName:"li",href:"/docs/data-fetching"},(0,d.mdx)("inlineCode",{parentName:"a"},"delayRender()")," / ",(0,d.mdx)("inlineCode",{parentName:"a"},"continueRender()"))," pattern."),(0,d.mdx)("li",{parentName:"ul"},"Handles the case where the component gets unmounted while the fetching is in progress and a React error is thrown.")),(0,d.mdx)("p",null,"Using this function, you can elegantly render a component based on audio properties, for example together with the ",(0,d.mdx)("a",{parentName:"p",href:"/docs/visualize-audio"},(0,d.mdx)("inlineCode",{parentName:"a"},"visualizeAudio()"))," function."),(0,d.mdx)("h2",{id:"arguments"},"Arguments"),(0,d.mdx)("h3",{id:"src"},(0,d.mdx)("inlineCode",{parentName:"h3"},"src")),(0,d.mdx)("p",null,"A string pointing to an audio asset."),(0,d.mdx)("h2",{id:"return-value"},"Return value"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"AudioData | null")," - An object containing audio data (see documentation of ",(0,d.mdx)("a",{parentName:"p",href:"/docs/get-audio-data"},(0,d.mdx)("inlineCode",{parentName:"a"},"getAudioData()")),") or ",(0,d.mdx)("inlineCode",{parentName:"p"},"null")," if the data has not been loaded."),(0,d.mdx)("h2",{id:"example"},"Example"),(0,d.mdx)("div",{className:"shiki-twoslash-fragment"},(0,d.mdx)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,d.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,d.mdx)("div",{parentName:"pre",className:"code-container"},(0,d.mdx)("code",{parentName:"div"},(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," { ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const useAudioData: (src: string) => AudioData | null\nimport useAudioData"},"useAudioData")," } "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"@remotion/media-utils"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music")," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"./music.mp3"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"export"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const MyComponent: React.FC<{}>"},"MyComponent")),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},":"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#E36209"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) namespace React\nimport React"},"React")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"."),(0,d.mdx)("span",{parentName:"div",style:{color:"#E36209"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"type React.FC<P = {}> = React.FunctionComponent<P>"},"FC")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," () "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const audioData: AudioData | null"},"audioData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useAudioData(src: string): AudioData | null\nimport useAudioData"},"useAudioData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"(",(0,d.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music"),");")),(0,d.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"if"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," ("),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"!"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const audioData: AudioData | null"},"audioData"),") {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"null"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  }")),(0,d.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," <"),(0,d.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">This file has a {",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const audioData: AudioData"},"audioData"),".",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) sampleRate: number"},"sampleRate"),"} sampleRate.</"),(0,d.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">;")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"};"))))),(0,d.mdx)("pre",{parentName:"div",className:"shiki github-dark twoslash lsp",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,d.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,d.mdx)("div",{parentName:"pre",className:"code-container"},(0,d.mdx)("code",{parentName:"div"},(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"import"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," { ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const useAudioData: (src: string) => AudioData | null\nimport useAudioData"},"useAudioData")," } "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"from"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"@remotion/media-utils"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"import"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music")," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"from"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"./music.mp3"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"export"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const MyComponent: React.FC<{}>"},"MyComponent")),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},":"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFA657"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) namespace React\nimport React"},"React")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"."),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFA657"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"type React.FC<P = {}> = React.FunctionComponent<P>"},"FC")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," () "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const audioData: AudioData | null"},"audioData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useAudioData(src: string): AudioData | null\nimport useAudioData"},"useAudioData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"(",(0,d.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music"),");")),(0,d.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"if"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," ("),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"!"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const audioData: AudioData | null"},"audioData"),") {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"return"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"null"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  }")),(0,d.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"return"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," <"),(0,d.mdx)("span",{parentName:"div",style:{color:"#7EE787"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},">This file has a {",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const audioData: AudioData"},"audioData"),".",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) sampleRate: number"},"sampleRate"),"} sampleRate.</"),(0,d.mdx)("span",{parentName:"div",style:{color:"#7EE787"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},">;")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"};")))))),(0,d.mdx)("h2",{id:"see-also"},"See also"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/docs/get-audio-data"},(0,d.mdx)("inlineCode",{parentName:"a"},"getAudioData()"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/docs/visualize-audio"},(0,d.mdx)("inlineCode",{parentName:"a"},"visualizeAudio()"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/docs/audio-visualization"},"Audio visualization"))))}c.isMDXComponent=!0}}]);