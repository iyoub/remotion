"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5677],{57522:function(e,a,n){n.r(a),n.d(a,{MDXContext:function(){return o},MDXProvider:function(){return c},mdx:function(){return v},useMDXComponents:function(){return i},withMDXComponents:function(){return m}});var t=n(29901);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function d(){return d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(this,arguments)}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},d=Object.keys(e);for(t=0;t<d.length;t++)n=d[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)n=d[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=t.createContext({}),m=function(e){return function(a){var n=i(a.components);return t.createElement(e,d({},a,{components:n}))}},i=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=i(e.components);return t.createElement(o.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},x=t.forwardRef((function(e,a){var n=e.components,s=e.mdxType,d=e.originalType,r=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=i(n),c=s,x=m["".concat(r,".").concat(c)]||m[c]||N[c]||d;return n?t.createElement(x,l(l({ref:a},o),{},{components:n})):t.createElement(x,l({ref:a},o))}));function v(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var d=n.length,r=new Array(d);r[0]=x;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var o=2;o<d;o++)r[o]=n[o];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}x.displayName="MDXCreateElement"},18798:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return m},default:function(){return c}});var t=n(3920),s=n(50264),d=(n(29901),n(57522)),r=["components"],l={id:"delay-render",title:"delayRender() and continueRender()",sidebar_label:"delayRender()"},p=void 0,o={unversionedId:"delay-render",id:"delay-render",isDocsHomePage:!1,title:"delayRender() and continueRender()",description:"By calling delayRender, you are signaling that a frame should not be immediately rendered and instead should wait on an asynchronous task to complete.",source:"@site/docs/delay-render.md",sourceDirName:".",slug:"/delay-render",permalink:"/docs/delay-render",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/delay-render.md",tags:[],version:"current",frontMatter:{id:"delay-render",title:"delayRender() and continueRender()",sidebar_label:"delayRender()"},sidebar:"someSidebar",previous:{title:"continueRender()",permalink:"/docs/continue-render"},next:{title:"interpolate()",permalink:"/docs/interpolate"}},m=[{value:"Useful to know",id:"useful-to-know",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],i={toc:m};function c(e){var a=e.components,n=(0,s.default)(e,r);return(0,d.mdx)("wrapper",(0,t.default)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("p",null,"By calling ",(0,d.mdx)("inlineCode",{parentName:"p"},"delayRender"),", you are signaling that a frame should not be immediately rendered and instead should wait on an asynchronous task to complete."),(0,d.mdx)("p",null,"This method is useful if you for example want to call an API to fetch data before you render."),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"delayRender")," returns an identifier. Once you have fetched data or finished the asynchronous task, you should call ",(0,d.mdx)("inlineCode",{parentName:"p"},"continueRender(identifier)")," to let Remotion know that you are now ready to render."),(0,d.mdx)("h2",{id:"useful-to-know"},"Useful to know"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"You need to call ",(0,d.mdx)("inlineCode",{parentName:"p"},"continueRender()")," within 30 seconds of page load. This is the default timeout of puppeteer and it will throw if you miss to call ",(0,d.mdx)("inlineCode",{parentName:"p"},"continueRender()"),".")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"For every frame that is rendered, the whole page is reloaded, so the whole lifecycle of ",(0,d.mdx)("inlineCode",{parentName:"p"},"delayRender")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"continueRender")," happens on every frame. If you are doing an API request, you can speed up the render and avoid rate limits by caching the request, for example by storing the data in ",(0,d.mdx)("inlineCode",{parentName:"p"},"localStorage"),".")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"You can call ",(0,d.mdx)("inlineCode",{parentName:"p"},"delayRender")," multiple times. The render will be blocked for as long as at least one blocking handle exists and that has not been cleared by ",(0,d.mdx)("inlineCode",{parentName:"p"},"continueRender()"),".")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"You should put ",(0,d.mdx)("inlineCode",{parentName:"p"},"delayRender()")," calls inside your components rather than placing them as a top-level statement, to avoid blocking a render if a different composition is rendered. Also, in the example below the call is wrapped in a ",(0,d.mdx)("inlineCode",{parentName:"p"},"useState()")," to avoid creating multiple blocking calls when the component rerenders."))),(0,d.mdx)("h2",{id:"example"},"Example"),(0,d.mdx)("div",{className:"shiki-twoslash-fragment"},(0,d.mdx)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,d.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,d.mdx)("div",{parentName:"pre",className:"code-container"},(0,d.mdx)("code",{parentName:"div"},(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," { ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) function useEffect(effect: EffectCallback, deps?: DependencyList | undefined): void\nimport useEffect"},"useEffect"),", ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] (+1 overload)\nimport useState"},"useState")," } "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"react"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," { ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const continueRender: (handle: number) => void\nimport continueRender"},"continueRender"),", ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const delayRender: () => number\nimport delayRender"},"delayRender")," } "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"remotion"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"export"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," () "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," ["),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const data: null"},"data")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},", "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const setData: React.Dispatch<React.SetStateAction<null>>"},"setData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"] "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useState<null>(initialState: (() => null) | null): [null, React.Dispatch<React.SetStateAction<null>>] (+1 overload)\nimport useState"},"useState")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"("),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"null"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},");")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," ["),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const handle: number"},"handle")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"] "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useState<number>(initialState: number | (() => number)): [number, React.Dispatch<React.SetStateAction<number>>] (+1 overload)\nimport useState"},"useState")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"(() "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) delayRender(): number\nimport delayRender"},"delayRender")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"());")),(0,d.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const fetchData: () => Promise<void>"},"fetchData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"async"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," () "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const response: Response"},"response")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"await"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"function fetch(input: RequestInfo, init?: RequestInit | undefined): Promise<Response>"},"fetch")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"("),(0,d.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"http://example.com/api"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},");")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const json: any"},"json")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"await"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const response: Response"},"response"),"."),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(method) Body.json(): Promise<any>"},"json")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"();")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const setData: (value: React.SetStateAction<null>) => void"},"setData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"(",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const json: any"},"json"),");")),(0,d.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) continueRender(handle: number): void\nimport continueRender"},"continueRender")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"(",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const handle: number"},"handle"),");")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  };")),(0,d.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void\nimport useEffect"},"useEffect")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"(() "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const fetchData: () => Promise<void>"},"fetchData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"();")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  }, []);")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," (")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    <"),(0,d.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      {",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const data: null"},"data")," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"?"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," (")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"        <"),(0,d.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">This video has data from an API! {"),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"var JSON: JSON"},"JSON")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"."),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"(",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const data: never"},"data"),")}</"),(0,d.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      ) "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},":"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"null"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"}")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    </"),(0,d.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  );")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"};"))))),(0,d.mdx)("pre",{parentName:"div",className:"shiki github-dark twoslash lsp",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,d.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,d.mdx)("div",{parentName:"pre",className:"code-container"},(0,d.mdx)("code",{parentName:"div"},(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"import"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," { ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) function useEffect(effect: EffectCallback, deps?: DependencyList | undefined): void\nimport useEffect"},"useEffect"),", ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] (+1 overload)\nimport useState"},"useState")," } "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"from"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"react"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"import"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," { ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const continueRender: (handle: number) => void\nimport continueRender"},"continueRender"),", ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const delayRender: () => number\nimport delayRender"},"delayRender")," } "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"from"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"remotion"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"export"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," () "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," ["),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const data: null"},"data")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},", "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const setData: React.Dispatch<React.SetStateAction<null>>"},"setData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"] "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useState<null>(initialState: (() => null) | null): [null, React.Dispatch<React.SetStateAction<null>>] (+1 overload)\nimport useState"},"useState")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"("),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"null"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},");")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," ["),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const handle: number"},"handle")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"] "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useState<number>(initialState: number | (() => number)): [number, React.Dispatch<React.SetStateAction<number>>] (+1 overload)\nimport useState"},"useState")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"(() "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) delayRender(): number\nimport delayRender"},"delayRender")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"());")),(0,d.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const fetchData: () => Promise<void>"},"fetchData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"async"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," () "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const response: Response"},"response")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"await"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"function fetch(input: RequestInfo, init?: RequestInit | undefined): Promise<Response>"},"fetch")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"("),(0,d.mdx)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"http://example.com/api"'),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},");")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const json: any"},"json")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"await"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const response: Response"},"response"),"."),(0,d.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(method) Body.json(): Promise<any>"},"json")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"();")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const setData: (value: React.SetStateAction<null>) => void"},"setData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"(",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const json: any"},"json"),");")),(0,d.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) continueRender(handle: number): void\nimport continueRender"},"continueRender")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"(",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const handle: number"},"handle"),");")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  };")),(0,d.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void\nimport useEffect"},"useEffect")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"(() "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const fetchData: () => Promise<void>"},"fetchData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"();")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  }, []);")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"return"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," (")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    <"),(0,d.mdx)("span",{parentName:"div",style:{color:"#7EE787"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},">")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"      {",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const data: null"},"data")," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"?"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," (")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"        <"),(0,d.mdx)("span",{parentName:"div",style:{color:"#7EE787"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},">This video has data from an API! {"),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"var JSON: JSON"},"JSON")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"."),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"(",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const data: never"},"data"),")}</"),(0,d.mdx)("span",{parentName:"div",style:{color:"#7EE787"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},">")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"      ) "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},":"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"null"),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"}")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    </"),(0,d.mdx)("span",{parentName:"div",style:{color:"#7EE787"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},">")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  );")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"};")))))),(0,d.mdx)("h2",{id:"see-also"},"See also"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/docs/data-fetching"},"Data fetching"))))}c.isMDXComponent=!0}}]);