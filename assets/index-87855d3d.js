const Oe="modulepreload",We=function(t,e){return new URL(t,e).href},re={},Be=function(e,n,_){if(!n||n.length===0||typeof window>"u")return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=We(o,_),o in re)return;re[o]=!0;const s=o.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!_)for(let f=r.length-1;f>=0;f--){const i=r[f];if(i.href===o&&(!s||i.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":Oe,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((f,i)=>{c.addEventListener("load",f),c.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};var A,d,ke,S,ie,we,G,be,T={},Ee=[],Re=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ee=Array.isArray;function x(t,e){for(var n in e)t[n]=e[n];return t}function xe(t){var e=t.parentNode;e&&e.removeChild(t)}function Se(t,e,n){var _,r,o,s={};for(o in e)o=="key"?_=e[o]:o=="ref"?r=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?A.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return H(t,s,_,r,null)}function H(t,e,n,_,r){var o={type:t,props:e,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++ke,__i:-1,__u:0};return r==null&&d.vnode!=null&&d.vnode(o),o}function U(t){return t.children}function W(t,e){this.props=t,this.context=e}function $(t,e){if(e==null)return t.__?$(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?$(t):null}function Pe(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Pe(t)}}function X(t){(!t.__d&&(t.__d=!0)&&S.push(t)&&!q.__r++||ie!==d.debounceRendering)&&((ie=d.debounceRendering)||we)(q)}function q(){var t,e,n,_,r,o,s,l,u;for(S.sort(G);t=S.shift();)t.__d&&(e=S.length,_=void 0,o=(r=(n=t).__v).__e,l=[],u=[],(s=n.__P)&&((_=x({},r)).__v=r.__v+1,d.vnode&&d.vnode(_),te(s,_,r,n.__n,s.ownerSVGElement!==void 0,32&r.__u?[o]:null,l,o??$(r),!!(32&r.__u),u),_.__.__k[_.__i]=_,He(l,_,u),_.__e!=o&&Pe(_)),S.length>e&&S.sort(G));q.__r=0}function $e(t,e,n,_,r,o,s,l,u,c,f){var i,p,a,y,w,g=_&&_.__k||Ee,h=e.length;for(n.__d=u,qe(n,e,g),u=n.__d,i=0;i<h;i++)(a=n.__k[i])!=null&&typeof a!="boolean"&&typeof a!="function"&&(p=a.__i===-1?T:g[a.__i]||T,a.__i=i,te(t,a,p,r,o,s,l,u,c,f),y=a.__e,a.ref&&p.ref!=a.ref&&(p.ref&&ne(p.ref,null,a),f.push(a.ref,a.__c||y,a)),w==null&&y!=null&&(w=y),65536&a.__u||p.__k===a.__k?u=Ce(a,u,t):typeof a.type=="function"&&a.__d!==void 0?u=a.__d:y&&(u=y.nextSibling),a.__d=void 0,a.__u&=-196609);n.__d=u,n.__e=w}function qe(t,e,n){var _,r,o,s,l,u=e.length,c=n.length,f=c,i=0;for(t.__k=[],_=0;_<u;_++)(r=t.__k[_]=(r=e[_])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?H(null,r,null,null,r):ee(r)?H(U,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?H(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=t,r.__b=t.__b+1,l=ze(r,n,s=_+i,f),r.__i=l,o=null,l!==-1&&(f--,(o=n[l])&&(o.__u|=131072)),o==null||o.__v===null?(l==-1&&i--,typeof r.type!="function"&&(r.__u|=65536)):l!==s&&(l===s+1?i++:l>s?f>u-s?i+=l-s:i--:i=l<s&&l==s-1?l-s:0,l!==_+i&&(r.__u|=65536))):(o=n[_])&&o.key==null&&o.__e&&(o.__e==t.__d&&(t.__d=$(o)),J(o,o,!1),n[_]=null,f--);if(f)for(_=0;_<c;_++)(o=n[_])!=null&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=$(o)),J(o,o))}function Ce(t,e,n){var _,r;if(typeof t.type=="function"){for(_=t.__k,r=0;_&&r<_.length;r++)_[r]&&(_[r].__=t,e=Ce(_[r],e,n));return e}return t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e),e&&e.nextSibling}function ze(t,e,n,_){var r=t.key,o=t.type,s=n-1,l=n+1,u=e[n];if(u===null||u&&r==u.key&&o===u.type)return n;if(_>(u!=null&&!(131072&u.__u)?1:0))for(;s>=0||l<e.length;){if(s>=0){if((u=e[s])&&!(131072&u.__u)&&r==u.key&&o===u.type)return s;s--}if(l<e.length){if((u=e[l])&&!(131072&u.__u)&&r==u.key&&o===u.type)return l;l++}}return-1}function se(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Re.test(e)?n:n+"px"}function M(t,e,n,_,r){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof _=="string"&&(t.style.cssText=_=""),_)for(e in _)n&&e in n||se(t.style,e,"");if(n)for(e in n)_&&n[e]===_[e]||se(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?_?n.u=_.u:(n.u=Date.now(),t.addEventListener(e,o?ce:le,o)):t.removeEventListener(e,o?ce:le,o);else{if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function le(t){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(d.event?d.event(t):t)}function ce(t){return this.l[t.type+!0](d.event?d.event(t):t)}function te(t,e,n,_,r,o,s,l,u,c){var f,i,p,a,y,w,g,h,m,E,I,C,oe,D,K,b=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),o=[l=e.__e=n.__e]),(f=d.__b)&&f(e);e:if(typeof b=="function")try{if(h=e.props,m=(f=b.contextType)&&_[f.__c],E=f?m?m.props.value:f.__:_,n.__c?g=(i=e.__c=n.__c).__=i.__E:("prototype"in b&&b.prototype.render?e.__c=i=new b(h,E):(e.__c=i=new W(h,E),i.constructor=b,i.render=Ke),m&&m.sub(i),i.props=h,i.state||(i.state={}),i.context=E,i.__n=_,p=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),b.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=x({},i.__s)),x(i.__s,b.getDerivedStateFromProps(h,i.__s))),a=i.props,y=i.state,i.__v=e,p)b.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(b.getDerivedStateFromProps==null&&h!==a&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,E),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,E)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(i.props=h,i.state=i.__s,i.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(L){L&&(L.__=e)}),I=0;I<i._sb.length;I++)i.__h.push(i._sb[I]);i._sb=[],i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,E),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(a,y,w)})}if(i.context=E,i.props=h,i.__P=t,i.__e=!1,C=d.__r,oe=0,"prototype"in b&&b.prototype.render){for(i.state=i.__s,i.__d=!1,C&&C(e),f=i.render(i.props,i.state,i.context),D=0;D<i._sb.length;D++)i.__h.push(i._sb[D]);i._sb=[]}else do i.__d=!1,C&&C(e),f=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++oe<25);i.state=i.__s,i.getChildContext!=null&&(_=x(x({},_),i.getChildContext())),p||i.getSnapshotBeforeUpdate==null||(w=i.getSnapshotBeforeUpdate(a,y)),$e(t,ee(K=f!=null&&f.type===U&&f.key==null?f.props.children:f)?K:[K],e,n,_,r,o,s,l,u,c),i.base=e.__e,e.__u&=-161,i.__h.length&&s.push(i),g&&(i.__E=i.__=null)}catch(L){e.__v=null,u||o!=null?(e.__e=l,e.__u|=u?160:32,o[o.indexOf(l)]=null):(e.__e=n.__e,e.__k=n.__k),d.__e(L,e,n)}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Ve(n.__e,e,n,_,r,o,s,u,c);(f=d.diffed)&&f(e)}function He(t,e,n){e.__d=void 0;for(var _=0;_<n.length;_++)ne(n[_],n[++_],n[++_]);d.__c&&d.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(o){o.call(r)})}catch(o){d.__e(o,r.__v)}})}function Ve(t,e,n,_,r,o,s,l,u){var c,f,i,p,a,y,w,g=n.props,h=e.props,m=e.type;if(m==="svg"&&(r=!0),o!=null){for(c=0;c<o.length;c++)if((a=o[c])&&"setAttribute"in a==!!m&&(m?a.localName===m:a.nodeType===3)){t=a,o[c]=null;break}}if(t==null){if(m===null)return document.createTextNode(h);t=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,h.is&&h),o=null,l=!1}if(m===null)g===h||l&&t.data===h||(t.data=h);else{if(o=o&&A.call(t.childNodes),g=n.props||T,!l&&o!=null)for(g={},c=0;c<t.attributes.length;c++)g[(a=t.attributes[c]).name]=a.value;for(c in g)a=g[c],c=="children"||(c=="dangerouslySetInnerHTML"?i=a:c==="key"||c in h||M(t,c,null,a,r));for(c in h)a=h[c],c=="children"?p=a:c=="dangerouslySetInnerHTML"?f=a:c=="value"?y=a:c=="checked"?w=a:c==="key"||l&&typeof a!="function"||g[c]===a||M(t,c,a,g[c],r);if(f)l||i&&(f.__html===i.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(i&&(t.innerHTML=""),$e(t,ee(p)?p:[p],e,n,_,r&&m!=="foreignObject",o,s,o?o[0]:n.__k&&$(n,0),l,u),o!=null)for(c=o.length;c--;)o[c]!=null&&xe(o[c]);l||(c="value",y!==void 0&&(y!==t[c]||m==="progress"&&!y||m==="option"&&y!==g[c])&&M(t,c,y,g[c],!1),c="checked",w!==void 0&&w!==t[c]&&M(t,c,w,g[c],!1))}return t}function ne(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(_){d.__e(_,n)}}function J(t,e,n){var _,r;if(d.unmount&&d.unmount(t),(_=t.ref)&&(_.current&&_.current!==t.__e||ne(_,null,e)),(_=t.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(o){d.__e(o,e)}_.base=_.__P=null,t.__c=void 0}if(_=t.__k)for(r=0;r<_.length;r++)_[r]&&J(_[r],e,n||typeof t.type!="function");n||t.__e==null||xe(t.__e),t.__=t.__e=t.__d=void 0}function Ke(t,e,n){return this.constructor(t,n)}function Te(t,e,n){var _,r,o,s;d.__&&d.__(t,e),r=(_=typeof n=="function")?null:n&&n.__k||e.__k,o=[],s=[],te(e,t=(!_&&n||e).__k=Se(U,null,[t]),r||T,T,e.ownerSVGElement!==void 0,!_&&n?[n]:r?null:e.firstChild?A.call(e.childNodes):null,o,!_&&n?n:r?r.__e:e.firstChild,_,s),He(o,t,s)}function Ne(t,e){Te(t,e,Ne)}function st(t,e,n){var _,r,o,s,l=x({},t.props);for(o in t.type&&t.type.defaultProps&&(s=t.type.defaultProps),e)o=="key"?_=e[o]:o=="ref"?r=e[o]:l[o]=e[o]===void 0&&s!==void 0?s[o]:e[o];return arguments.length>2&&(l.children=arguments.length>3?A.call(arguments,2):n),H(t.type,l,_||t.key,r||t.ref,null)}function Ae(t,e){var n={__c:e="__cC"+be++,__:t,Consumer:function(_,r){return _.children(r)},Provider:function(_){var r,o;return this.getChildContext||(r=[],(o={})[e]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&r.some(function(l){l.__e=!0,X(l)})},this.sub=function(s){r.push(s);var l=s.componentWillUnmount;s.componentWillUnmount=function(){r.splice(r.indexOf(s),1),l&&l.call(s)}}),_.children}};return n.Provider.__=n.Consumer.contextType=n}A=Ee.slice,d={__e:function(t,e,n,_){for(var r,o,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(t)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,_||{}),s=r.__d),s)return r.__E=r}catch(l){t=l}throw t}},ke=0,W.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof t=="function"&&(t=t(x({},n),this.props)),t&&x(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),X(this))},W.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),X(this))},W.prototype.render=U,S=[],we=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,G=function(t,e){return t.__v.__b-e.__v.__b},q.__r=0,be=0;var N,v,j,ue,Q=0,Ue=[],B=[],ae=d.__b,fe=d.__r,de=d.diffed,pe=d.__c,he=d.unmount;function _e(t,e){d.__h&&d.__h(v,t,Q||e),Q=0;var n=v.__H||(v.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:B}),n.__[t]}function me(t){return Q=1,Ie(Le,t)}function Ie(t,e,n){var _=_e(N++,2);if(_.t=t,!_.__c&&(_.__=[n?n(e):Le(void 0,e),function(l){var u=_.__N?_.__N[0]:_.__[0],c=_.t(u,l);u!==c&&(_.__N=[c,_.__[1]],_.__c.setState({}))}],_.__c=v,!v.u)){var r=function(l,u,c){if(!_.__c.__H)return!0;var f=_.__c.__H.__.filter(function(p){return p.__c});if(f.every(function(p){return!p.__N}))return!o||o.call(this,l,u,c);var i=!1;return f.forEach(function(p){if(p.__N){var a=p.__[0];p.__=p.__N,p.__N=void 0,a!==p.__[0]&&(i=!0)}}),!(!i&&_.__c.props===l)&&(!o||o.call(this,l,u,c))};v.u=!0;var o=v.shouldComponentUpdate,s=v.componentWillUpdate;v.componentWillUpdate=function(l,u,c){if(this.__e){var f=o;o=void 0,r(l,u,c),o=f}s&&s.call(this,l,u,c)},v.shouldComponentUpdate=r}return _.__N||_.__}function je(t,e){var n=_e(N++,4);!d.__s&&De(n.__H,e)&&(n.__=t,n.i=e,v.__h.push(n))}function Ge(t,e){var n=_e(N++,7);return De(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Xe(){for(var t;t=Ue.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(R),t.__H.__h.forEach(Y),t.__H.__h=[]}catch(e){t.__H.__h=[],d.__e(e,t.__v)}}d.__b=function(t){v=null,ae&&ae(t)},d.__r=function(t){fe&&fe(t),N=0;var e=(v=t.__c).__H;e&&(j===v?(e.__h=[],v.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=B,n.__N=n.i=void 0})):(e.__h.forEach(R),e.__h.forEach(Y),e.__h=[],N=0)),j=v},d.diffed=function(t){de&&de(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ue.push(e)!==1&&ue===d.requestAnimationFrame||((ue=d.requestAnimationFrame)||Je)(Xe)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==B&&(n.__=n.__V),n.i=void 0,n.__V=B})),j=v=null},d.__c=function(t,e){e.some(function(n){try{n.__h.forEach(R),n.__h=n.__h.filter(function(_){return!_.__||Y(_)})}catch(_){e.some(function(r){r.__h&&(r.__h=[])}),e=[],d.__e(_,n.__v)}}),pe&&pe(t,e)},d.unmount=function(t){he&&he(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{R(_)}catch(r){e=r}}),n.__H=void 0,e&&d.__e(e,n.__v))};var ve=typeof requestAnimationFrame=="function";function Je(t){var e,n=function(){clearTimeout(_),ve&&cancelAnimationFrame(e),setTimeout(t)},_=setTimeout(n,100);ve&&(e=requestAnimationFrame(n))}function R(t){var e=v,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),v=e}function Y(t){var e=v;t.__c=t.__(),v=e}function De(t,e){return!t||t.length!==e.length||e.some(function(n,_){return n!==t[_]})}function Le(t,e){return typeof e=="function"?e(t):e}let P;const Qe=(t,e)=>{if(P=void 0,e&&e.type==="click"){if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button!==0)return t;const n=e.target.closest("a[href]");if(!n||n.origin!=location.origin||/^#/.test(n.getAttribute("href"))||!/^(_?self)?$/i.test(n.target))return t;P=!0,e.preventDefault(),e=n.href.replace(location.origin,"")}else typeof e=="string"?P=!0:e=location.pathname+location.search;return P===!0?history.pushState(null,"",e):P===!1&&history.replaceState(null,"",e),e};function Me(t){const[e,n]=Ie(Qe,t.url||location.pathname+location.search),_=P===!0,r=Ge(()=>{const o=new URL(e,location.origin),s=o.pathname.replace(/(.)\/$/g,"$1");return{url:e,path:s,query:Object.fromEntries(o.searchParams),route:n,wasPush:_}},[e]);return je(()=>(addEventListener("click",n),addEventListener("popstate",n),()=>{removeEventListener("click",n),removeEventListener("popstate",n)}),[]),Se(Me.ctx.Provider,{value:r},t.children)}Promise.resolve();Me.ctx=Ae({});Ae({});const ye=d.__e;d.__e=(t,e,n)=>{if(t&&t.then){let _=e;for(;_=_.__;)if(_.__c&&_.__c.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),e.__k||(e.__k=[]),_.__c.__c(t,e)}ye&&ye(t,e,n)};let ge;function Ye(t,e){if(typeof window>"u")return;let n=document.querySelector("script[type=isodata]");e=e||n&&n.parentNode||document.body,!ge&&n?Ne(t,e):Te(t,e),ge=!0}function Ze(t,e){return Be(()=>import("./prerender-b9265824.js"),[],import.meta.url).then(n=>n.default(t,e))}var et=0;function k(t,e,n,_,r,o){var s,l,u={};for(l in e)l=="ref"?s=e[l]:u[l]=e[l];var c={type:t,props:u,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--et,__i:-1,__u:0,__source:r,__self:o};if(typeof t=="function"&&(s=t.defaultProps))for(l in s)u[l]===void 0&&(u[l]=s[l]);return d.vnode&&d.vnode(c),c}const tt=({current:t,index:e,segment:n})=>{const _=e===t,r=n.type==="w"?"🟢":"⚪";return k("span",{className:`segment ${_?"active":""}`,children:r})};function nt({exercise:t,timeline:e,currentSegmentIndex:n,elapsed:_}){return k("div",{className:"exercise-view",children:[k("div",{className:"exercise-info",children:k("h1",{children:t.name})}),k("div",{className:"exercise-timer",children:k("div",{className:"exercise-timer__elapsed",children:_})}),k("div",{className:"exercise-timeline",children:e.length>1&&k("div",{className:"exercise-timeline",children:e.map((r,o)=>k(tt,{current:n,index:o,segment:r},o))})})]})}function _t({onStop:t,isPlaying:e,onStart:n,onNext:_}){return k("div",{className:"control-buttons",children:e?k(U,{children:[k("button",{onClick:t,children:"STOP"}),k("button",{onClick:_,children:"NEXT"})]}):k("button",{onClick:n,children:"START"})})}let F=null;const ot=t=>{const e=new SpeechSynthesisUtterance(t);F||(F=window.speechSynthesis.getVoices().filter(_=>_.lang.startsWith("en"))),F.length>0&&(e.voice=F[0]),e.lang="en-GB",window.speechSynthesis.speak(e)};let z,V,Z=!1;function rt(){typeof window>"u"||Z||(z=new Audio("./sounds/220174__gameaudio__spacey-loose.wav"),V=new Audio("./sounds/220202__gameaudio__teleport-casual.wav"),z.load(),V.load(),Z=!0)}const O={name:"Eye exercises",exercises:[{name:"Blink often",duration:60,repetitions:1},{name:"Blinking slow",duration:3,rest:3,repetitions:10},{name:"Head Movement clockwise",duration:15,repetitions:1},{name:"Head Movement counterclockwise",duration:15,repetitions:1},{name:"Head Movement side to side",duration:15,repetitions:1},{name:"Head Movement up and down",duration:15,repetitions:1},{name:"Eye Movement - left and right",duration:30,repetitions:1},{name:"Eye Movement - up and down",duration:30,repetitions:1},{name:"Eye Movement - 8",duration:30,repetitions:1},{name:"Eye Movement - random direction",duration:30,repetitions:1},{name:"Squeezing Eyes Shut",duration:3,rest:3,repetitions:10},{name:"Eyes Shut Movements",duration:60,repetitions:1},{name:"Change Focus",duration:10,rest:10,repetitions:3},{name:"Temple Massage",duration:10,rest:5,repetitions:4},{name:"Eyes Palming",duration:60,repetitions:1}]},it=t=>{let e=[],n=0;for(let _=0;_<t.repetitions;_++)e.push({type:"w",startOffset:n,endOffset:n+t.duration*1e3,duration:t.duration}),n+=t.duration*1e3,t.rest&&(e.push({type:"r",startOffset:n,endOffset:n+t.rest*1e3,duration:t.rest}),n+=t.rest*1e3);return e},Fe=()=>{const[t,e]=me(null),[n,_]=me(null);function r(f){const i=O.exercises[f],p=it(i),a={index:f,segmentIndex:0,timeline:p,startedAt:Date.now(),secondsElapsedInSegment:0};return ot(i.name),o(),console.log(a),a}const o=()=>{if(n)return;const f=window.setInterval(()=>{e(i=>{if(!i)return null;const{timeline:p,segmentIndex:a,index:y,startedAt:w}=i,g=p[a],h=Math.floor((Date.now()-w)/1e3);if(Date.now()<w+g.endOffset)return console.log("No change in segment or exercise"),{...i,secondsElapsedInSegment:h};let m=a+1;if(m<p.length)return Z&&p[m].type==="r"?(z.currentTime=0,z.play()):(V.currentTime=0,V.play()),console.log("Next segment"),{...i,segmentIndex:m,secondsElapsedInSegment:h};{console.log("Next exercise");let E=y+1;return E<O.exercises.length?r(E):(s(),null)}})},1e3);_(f)},s=()=>{n&&(clearInterval(n),_(null))};return k("div",{className:"app",children:[k(_t,{onStop:()=>{s(),e(null)},onStart:()=>{rt(),e(r(0))},onNext:()=>{t&&t.index<O.exercises.length-1&&e(r(t.index+1))},isPlaying:t!==null}),t&&k(nt,{exercise:O.exercises[t.index],timeline:t.timeline,currentSegmentIndex:t.segmentIndex,elapsed:t.secondsElapsedInSegment})]})};typeof window<"u"&&Ye(k(Fe,{}),document.getElementById("app"));async function lt(t){return await Ze(k(Fe,{...t}))}export{st as E,U as g,d as l,lt as prerender,Se as y};
