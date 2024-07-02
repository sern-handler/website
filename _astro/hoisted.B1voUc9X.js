const __vite__fileDeps=["_astro/ui-core.bdiRWing.js","_astro/Tabs.astro_astro_type_script_index_0_lang.CCIyraCc.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"./Tabs.astro_astro_type_script_index_0_lang.CCIyraCc.js";class L extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",s=>{s.currentTarget instanceof HTMLSelectElement&&this.querySelectorAll("[data-starlight-multi-sidebar-label]").forEach(l=>{l instanceof HTMLDivElement&&(l.hidden=l.dataset.starlightMultiSidebarLabel!==e.value)})})}}customElements.define("starlight-multi-sidebar-select",L);let T=class extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",s=>{s.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=s.currentTarget.value)})}};customElements.define("starlight-lang-select",T);const w="modulepreload",M=function(r){return"/"+r},E={},k=function(e,s,o){let l=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");l=Promise.all(s.map(c=>{if(c=M(c),c in E)return;E[c]=!0;const u=c.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${g}`))return;const t=document.createElement("link");if(t.rel=u?"stylesheet":w,u||(t.as="script",t.crossOrigin=""),t.href=c,i&&t.setAttribute("nonce",i),document.head.appendChild(t),u)return new Promise((d,n)=>{t.addEventListener("load",d),t.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${c}`)))})}))}return l.then(()=>e()).catch(a=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a})};class H extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),s=this.querySelector("button[data-close-modal]"),o=this.querySelector("dialog"),l=this.querySelector(".dialog-frame"),a=n=>{("href"in(n.target||{})||document.body.contains(n.target)&&!l.contains(n.target))&&c()},i=n=>{o.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),n?.stopPropagation(),window.addEventListener("click",a)},c=()=>o.close();e.addEventListener("click",i),e.disabled=!1,s.addEventListener("click",c),o.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",a)}),window.addEventListener("keydown",n=>{const h=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);(n.metaKey===!0||n.ctrlKey===!0)&&n.key==="k"?(o.open?c():i(),n.preventDefault()):n.key==="/"&&!o.open&&!h&&(i(),n.preventDefault())});let u={};try{u=JSON.parse(this.dataset.translations||"{}")}catch{}const d=this.dataset.stripTrailingSlash!==void 0?n=>n.replace(/(.)\/(#.*)?$/,"$1$2"):n=>n;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(h=>setTimeout(h,1)))(async()=>{const{PagefindUI:h}=await k(()=>import("./ui-core.bdiRWing.js"),__vite__mapDeps([0,1]));new h({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:u,showSubResults:!0,processResult:m=>{m.url=d(m.url),m.sub_results=m.sub_results.map(f=>(f.url=d(f.url),f))}})})})}}customElements.define("site-search",H);class q extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",s=>{s.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=s.currentTarget.value)})}}customElements.define("starlight-select",q);const S="starlight-theme",v=r=>r==="auto"||r==="dark"||r==="light"?r:"auto",b=()=>v(typeof localStorage<"u"&&localStorage.getItem(S));function x(r){typeof localStorage<"u"&&localStorage.setItem(S,r==="light"||r==="dark"?r:"")}const C=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function p(r){StarlightThemeProvider.updatePickers(r),document.documentElement.dataset.theme=r==="auto"?C():r,x(r)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{b()==="auto"&&p("auto")});class I extends HTMLElement{constructor(){super(),p(b()),this.querySelector("select")?.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&p(v(e.currentTarget.value))})}}customElements.define("starlight-theme-select",I);class _ extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",s=>this.closeOnEscape(s))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",_);const A="_top";class y extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const e=[...this.querySelectorAll("a")],s=t=>{if(t instanceof HTMLHeadingElement){if(t.id===A)return!0;const d=t.tagName[1];if(d){const n=parseInt(d,10);if(n>=this.minH&&n<=this.maxH)return!0}}return!1},o=t=>{if(!t)return null;const d=t;for(;t;){if(s(t))return t;for(t=t.previousElementSibling;t?.lastElementChild;)t=t.lastElementChild;const n=o(t);if(n)return n}return o(d.parentElement)},l=t=>{for(const{isIntersecting:d,target:n}of t){if(!d)continue;const h=o(n);if(!h)continue;const m=e.find(f=>f.hash==="#"+encodeURIComponent(h.id));if(m){this.current=m;break}}},a=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let i;const c=()=>{i&&i.disconnect(),i=new IntersectionObserver(l,{rootMargin:this.getRootMargin()}),a.forEach(t=>i.observe(t))};c();const u=window.requestIdleCallback||(t=>setTimeout(t,1));let g;window.addEventListener("resize",()=>{i&&i.disconnect(),clearTimeout(g),g=setTimeout(()=>u(c),200)})}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,s=this.querySelector("summary")?.getBoundingClientRect().height||0,o=e+s+32,l=o+53,a=document.documentElement.clientHeight;return`-${o}px 0% ${l-a}px`}}customElements.define("starlight-toc",y);class P extends y{set current(e){super.current=e;const s=this.querySelector(".display-current");s&&(s.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const s=()=>{e.open=!1};e.querySelectorAll("a").forEach(o=>{o.addEventListener("click",s)}),window.addEventListener("click",o=>{e.contains(o.target)||s()}),window.addEventListener("keydown",o=>{if(o.key==="Escape"&&e.open){const l=e.contains(document.activeElement);if(s(),l){const a=e.querySelector("summary");a&&a.focus()}}})}}customElements.define("mobile-starlight-toc",P);export{k as _};
