"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3089],{2949:function(e,a,t){var l=t(66664).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(29901)),i=l(t(40095)),r=l(t(59323)),s=l(t(44659)),d=l(t(94142)),o=t(97307);var u=function(e){var a=e.metadata,t=e.items,l=e.sidebar,u=(0,i.default)().siteConfig.title,m=a.blogDescription,c=a.blogTitle,f="/"===a.permalink?u:c;return n.default.createElement(r.default,{title:f,description:m,wrapperClassName:o.ThemeClassNames.wrapper.blogPages,pageClassName:o.ThemeClassNames.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:l},t.map((function(e){var a=e.content;return n.default.createElement(s.default,{key:a.metadata.permalink,frontMatter:a.frontMatter,assets:a.assets,metadata:a.metadata,truncated:a.metadata.truncated},n.default.createElement(a,null))})),n.default.createElement(d.default,{metadata:a}))};a.default=u},94142:function(e,a,t){var l=t(32089).default,n=t(66664).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(29901)),r=n(t(10302)),s=l(t(83669));var d=function(e){var a=e.metadata,t=a.previousPage,l=a.nextPage;return i.default.createElement("nav",{className:"pagination-nav","aria-label":(0,s.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},i.default.createElement("div",{className:"pagination-nav__item"},t&&i.default.createElement(r.default,{className:"pagination-nav__link",to:t},i.default.createElement("div",{className:"pagination-nav__label"},"\xab"," ",i.default.createElement(s.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),i.default.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&i.default.createElement(r.default,{className:"pagination-nav__link",to:l},i.default.createElement("div",{className:"pagination-nav__label"},i.default.createElement(s.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};a.default=d}}]);