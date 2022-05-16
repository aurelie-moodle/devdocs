"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[753],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8066:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(7462),a=n(7294),o=n(6010),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(7410).default,theme:l};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=s({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=s({},n,{backgroundColor:null}),a};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=s({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?s({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=s({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?s({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,d=t[l],f=n[l][o];if("string"==typeof f?(d=l>0?d:["plain"],s=f):(d=p(d,f.type),f.alias&&(d=p(d,f.alias)),s=f.content),"string"==typeof s){var y=s.split(u),v=y.length;c.push({types:d,content:y[0]});for(var g=1;g<v;g++)m(c),i.push(c=[]),c.push({types:d,content:y[g]})}else l++,t.push(d),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return m(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),v=y,g=n(5979);var h=n(5999),b="copyButton_eDfN",k="copyButtonCopied_ljy5",E="copyButtonIcons_W9eQ",N="copyButtonIcon_XEyF",Z="copyButtonSuccessIcon_i9w9";function O(e){var t=e.code,n=(0,a.useState)(!1),r=n[0],l=n[1],c=(0,a.useRef)(void 0),i=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(t),l(!0),c.current=window.setTimeout((function(){l(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),a.createElement("button",{type:"button","aria-label":r?(0,h.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,h.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,h.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)(b,"clean-btn",r&&k),onClick:i},a.createElement("span",{className:E,"aria-hidden":"true"},a.createElement("svg",{className:N,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:Z,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var C="codeBlockContainer_I0IT",T="codeBlockContent_wNvx",L="codeBlockTitle_BvAR",x="codeBlock_jd64",_="codeBlockStandalone_csWH",j="codeBlockLines_mRuA";function w(e){var t,n=e.children,l=e.className,i=void 0===l?"":l,s=e.metastring,u=e.title,m=e.language,p=(0,g.LU)().prism,d=(0,a.useState)(!1),f=d[0],y=d[1];(0,a.useEffect)((function(){y(!0)}),[]);var h=(0,g.bc)(s)||u,b=(0,g.pJ)();if(a.Children.toArray(n).some((function(e){return(0,a.isValidElement)(e)})))return a.createElement(v,(0,r.Z)({},c,{key:String(f),theme:b,code:"",language:"text"}),(function(e){var t=e.className,r=e.style;return a.createElement("pre",{tabIndex:0,className:(0,o.Z)(t,_,"thin-scrollbar",C,i,g.kM.common.codeBlock),style:r},a.createElement("code",{className:j},n))}));var k=Array.isArray(n)?n.join(""):n,E=null!=(t=null!=m?m:(0,g.Vo)(i))?t:p.defaultLanguage,N=(0,g.nZ)(k,s,E),Z=N.highlightLines,w=N.code;return a.createElement(v,(0,r.Z)({},c,{key:String(f),theme:b,code:w,language:null!=E?E:"text"}),(function(e){var t,n=e.className,l=e.style,c=e.tokens,s=e.getLineProps,u=e.getTokenProps;return a.createElement("div",{className:(0,o.Z)(C,i,(t={},t["language-"+E]=E&&!i.includes("language-"+E),t),g.kM.common.codeBlock)},h&&a.createElement("div",{style:l,className:L},h),a.createElement("div",{className:T,style:l},a.createElement("pre",{tabIndex:0,className:(0,o.Z)(n,x,"thin-scrollbar")},a.createElement("code",{className:j},c.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return Z.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},u({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement(O,{code:w})))}))}},7488:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7462),a=n(7294),o=n(6010),l=n(5979),c="details_BAp3";function i(e){var t=Object.assign({},e);return a.createElement(l.PO,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",c,t.className)}))}},9649:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(5999),i=n(5979),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",m=["as","id"],p=["as"];function d(e){var t=e.as,n=e.id,p=(0,a.Z)(e,m),d=(0,i.LU)().navbar.hideOnScroll;return n?o.createElement(t,(0,r.Z)({},p,{className:(0,l.Z)("anchor",d?u:s),id:n}),p.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,p)}function f(e){var t=e.as,n=(0,a.Z)(e,p);return"h1"===t?o.createElement("h1",(0,r.Z)({},n,{id:void 0}),n.children):o.createElement(d,(0,r.Z)({as:t},n))}},3183:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7294),a=n(3905),o=n(7462),l=n(3366),c=n(5742),i=["mdxType","originalType"];var s=n(8066);var u=n(9960);var m=n(7488);var p=n(9649);function d(e){return r.createElement(p.Z,e)}var f=n(6010);var y="img_E7b_";var v={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,l.Z)(a,i));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(c.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(s.Z,e)},a:function(e){return r.createElement(u.Z,e)},pre:function(e){var t;return r.createElement(s.Z,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(m.Z,(0,o.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,f.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return r.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,f.Z)(t,y))}));var t},h1:function(e){return r.createElement(d,(0,o.Z)({as:"h1"},e))},h2:function(e){return r.createElement(d,(0,o.Z)({as:"h2"},e))},h3:function(e){return r.createElement(d,(0,o.Z)({as:"h3"},e))},h4:function(e){return r.createElement(d,(0,o.Z)({as:"h4"},e))},h5:function(e){return r.createElement(d,(0,o.Z)({as:"h5"},e))},h6:function(e){return r.createElement(d,(0,o.Z)({as:"h6"},e))}};function g(e){var t=e.children;return r.createElement(a.Zo,{components:v},t)}},1575:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(5002),i="tableOfContents_cNA8",s=["className"];function u(e){var t=e.className,n=(0,a.Z)(e,s);return o.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar",t)},o.createElement(c.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),a=n(3366),o=n(7294),l=n(5979),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function i(e){var t=e.toc,n=e.className,r=e.linkClassName,a=e.isChild;return t.length?o.createElement("ul",{className:a?void 0:n},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(i,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}function s(e){var t=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,p=e.linkActiveClassName,d=void 0===p?void 0:p,f=e.minHeadingLevel,y=e.maxHeadingLevel,v=(0,a.Z)(e,c),g=(0,l.LU)(),h=null!=f?f:g.tableOfContents.minHeadingLevel,b=null!=y?y:g.tableOfContents.maxHeadingLevel,k=(0,l.b9)({toc:t,minHeadingLevel:h,maxHeadingLevel:b}),E=(0,o.useMemo)((function(){if(m&&d)return{linkClassName:m,linkActiveClassName:d,minHeadingLevel:h,maxHeadingLevel:b}}),[m,d,h,b]);return(0,l.Si)(E),o.createElement(i,(0,r.Z)({toc:k,className:s,linkClassName:m},v))}}}]);