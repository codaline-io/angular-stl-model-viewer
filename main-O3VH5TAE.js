var Hg=Object.defineProperty,zg=Object.defineProperties;var Gg=Object.getOwnPropertyDescriptors;var ad=Object.getOwnPropertySymbols;var Wg=Object.prototype.hasOwnProperty,jg=Object.prototype.propertyIsEnumerable;var cd=(n,e,t)=>e in n?Hg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,gn=(n,e)=>{for(var t in e||={})Wg.call(e,t)&&cd(n,t,e[t]);if(ad)for(var t of ad(e))jg.call(e,t)&&cd(n,t,e[t]);return n},di=(n,e)=>zg(n,Gg(e));var zr=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var ld=null;var za=1;function Ht(n){let e=ld;return ld=n,e}var ud={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function $g(n){if(!(ja(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===za)){if(!n.producerMustRecompute(n)&&!Ga(n)){n.dirty=!1,n.lastCleanEpoch=za;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=za}}function dd(n){return n&&(n.nextProducerIndex=0),Ht(n)}function fd(n,e){if(Ht(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(ja(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Wa(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Ga(n){ks(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||($g(t),i!==t.version))return!0}return!1}function hd(n){if(ks(n),ja(n))for(let e=0;e<n.producerNode.length;e++)Wa(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Wa(n,e){if(qg(n),ks(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)Wa(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];ks(r),r.producerIndexOfThis[i]=e}}function ja(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function ks(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function qg(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function Xg(){throw new Error}var Yg=Xg;function pd(n){Yg=n}function Ye(n){return typeof n=="function"}function Bs(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Vs=Bs(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Gr(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var zt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ye(i))try{i()}catch(s){e=s instanceof Vs?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{md(s)}catch(o){e=e??[],o instanceof Vs?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Vs(e)}}add(e){var t;if(e&&e!==this)if(this.closed)md(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Gr(t,e)}remove(e){let{_finalizers:t}=this;t&&Gr(t,e),e instanceof n&&e._removeParent(this)}};zt.EMPTY=(()=>{let n=new zt;return n.closed=!0,n})();var $a=zt.EMPTY;function Hs(n){return n instanceof zt||n&&"closed"in n&&Ye(n.remove)&&Ye(n.add)&&Ye(n.unsubscribe)}function md(n){Ye(n)?n():n.unsubscribe()}var tn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Hi={setTimeout(n,e,...t){let{delegate:i}=Hi;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Hi;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function zs(n){Hi.setTimeout(()=>{let{onUnhandledError:e}=tn;if(e)e(n);else throw n})}function qa(){}var gd=(()=>Xa("C",void 0,void 0))();function yd(n){return Xa("E",void 0,n)}function vd(n){return Xa("N",n,void 0)}function Xa(n,e,t){return{kind:n,value:e,error:t}}var fi=null;function zi(n){if(tn.useDeprecatedSynchronousErrorHandling){let e=!fi;if(e&&(fi={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=fi;if(fi=null,t)throw i}}else n()}function _d(n){tn.useDeprecatedSynchronousErrorHandling&&fi&&(fi.errorThrown=!0,fi.error=n)}var hi=class extends zt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Hs(e)&&e.add(this)):this.destination=Kg}static create(e,t,i){return new Sn(e,t,i)}next(e){this.isStopped?Za(vd(e),this):this._next(e)}error(e){this.isStopped?Za(yd(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Za(gd,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Zg=Function.prototype.bind;function Ya(n,e){return Zg.call(n,e)}var Ja=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Gs(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Gs(i)}else Gs(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Gs(t)}}},Sn=class extends hi{constructor(e,t,i){super();let r;if(Ye(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&tn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Ya(e.next,s),error:e.error&&Ya(e.error,s),complete:e.complete&&Ya(e.complete,s)}):r=e}this.destination=new Ja(r)}};function Gs(n){tn.useDeprecatedSynchronousErrorHandling?_d(n):zs(n)}function Jg(n){throw n}function Za(n,e){let{onStoppedNotification:t}=tn;t&&Hi.setTimeout(()=>t(n,e))}var Kg={closed:!0,next:qa,error:Jg,complete:qa};var Gi=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")();function Wi(n){return n}function xd(n){return n.length===0?Wi:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var at=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=ey(t)?t:new Sn(t,i,r);return zi(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Md(i),new i((r,s)=>{let o=new Sn({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Gi](){return this}pipe(...t){return xd(t)(this)}toPromise(t){return t=Md(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Md(n){var e;return(e=n??tn.Promise)!==null&&e!==void 0?e:Promise}function Qg(n){return n&&Ye(n.next)&&Ye(n.error)&&Ye(n.complete)}function ey(n){return n&&n instanceof hi||Qg(n)&&Hs(n)}function ty(n){return Ye(n?.lift)}function Ft(n){return e=>{if(ty(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Xt(n,e,t,i,r){return new Ka(n,e,t,i,r)}var Ka=class extends hi{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var Ed=Bs(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var zn=(()=>{class n extends at{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Ws(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Ed}next(t){zi(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){zi(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){zi(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?$a:(this.currentObservers=null,s.push(t),new zt(()=>{this.currentObservers=null,Gr(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new at;return t.source=this,t}}return n.create=(e,t)=>new Ws(e,t),n})(),Ws=class extends zn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:$a}};var Wr=class extends zn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var bd=new at(n=>n.complete());function wd(n){return n&&Ye(n.schedule)}function Sd(n){return n[n.length-1]}function js(n){return wd(Sd(n))?n.pop():void 0}function Td(n,e){return typeof Sd(n)=="number"?n.pop():e}function Cd(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Ad(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function pi(n){return this instanceof pi?(this.v=n,this):new pi(n)}function Dd(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(f){i[f]&&(r[f]=function(p){return new Promise(function(g,y){s.push([f,p,g,y])>1||a(f,p)})})}function a(f,p){try{c(i[f](p))}catch(g){d(s[0][3],g)}}function c(f){f.value instanceof pi?Promise.resolve(f.value.v).then(l,u):d(s[0][2],f)}function l(f){a("next",f)}function u(f){a("throw",f)}function d(f,p){f(p),s.shift(),s.length&&a(s[0][0],s[0][1])}}function Id(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Ad=="function"?Ad(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var $s=n=>n&&typeof n.length=="number"&&typeof n!="function";function qs(n){return Ye(n?.then)}function Xs(n){return Ye(n[Gi])}function Ys(n){return Symbol.asyncIterator&&Ye(n?.[Symbol.asyncIterator])}function Zs(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function ny(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Js=ny();function Ks(n){return Ye(n?.[Js])}function Qs(n){return Dd(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield pi(t.read());if(r)return yield pi(void 0);yield yield pi(i)}}finally{t.releaseLock()}})}function eo(n){return Ye(n?.getReader)}function bt(n){if(n instanceof at)return n;if(n!=null){if(Xs(n))return iy(n);if($s(n))return ry(n);if(qs(n))return sy(n);if(Ys(n))return Rd(n);if(Ks(n))return oy(n);if(eo(n))return ay(n)}throw Zs(n)}function iy(n){return new at(e=>{let t=n[Gi]();if(Ye(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ry(n){return new at(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function sy(n){return new at(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,zs)})}function oy(n){return new at(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Rd(n){return new at(e=>{cy(n,e).catch(t=>e.error(t))})}function ay(n){return Rd(Qs(n))}function cy(n,e){var t,i,r,s;return Cd(this,void 0,void 0,function*(){try{for(t=Id(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Yt(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function to(n,e=0){return Ft((t,i)=>{t.subscribe(Xt(i,r=>Yt(i,n,()=>i.next(r),e),()=>Yt(i,n,()=>i.complete(),e),r=>Yt(i,n,()=>i.error(r),e)))})}function no(n,e=0){return Ft((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Pd(n,e){return bt(n).pipe(no(e),to(e))}function Nd(n,e){return bt(n).pipe(no(e),to(e))}function Ld(n,e){return new at(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Od(n,e){return new at(t=>{let i;return Yt(t,e,()=>{i=n[Js](),Yt(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Ye(i?.return)&&i.return()})}function io(n,e){if(!n)throw new Error("Iterable cannot be null");return new at(t=>{Yt(t,e,()=>{let i=n[Symbol.asyncIterator]();Yt(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Fd(n,e){return io(Qs(n),e)}function Ud(n,e){if(n!=null){if(Xs(n))return Pd(n,e);if($s(n))return Ld(n,e);if(qs(n))return Nd(n,e);if(Ys(n))return io(n,e);if(Ks(n))return Od(n,e);if(eo(n))return Fd(n,e)}throw Zs(n)}function ro(n,e){return e?Ud(n,e):bt(n)}function Qa(...n){let e=js(n);return ro(n,e)}function kd(n,e){return Ft((t,i)=>{let r=0;t.subscribe(Xt(i,s=>{i.next(n.call(e,s,r++))}))})}function Bd(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},p=y=>l<i?g(y):c.push(y),g=y=>{s&&e.next(y),l++;let m=!1;bt(t(y,u++)).subscribe(Xt(e,h=>{r?.(h),s?p(h):e.next(h)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let h=c.shift();o?Yt(e,o,()=>g(h)):g(h)}f()}catch(h){e.error(h)}}))};return n.subscribe(Xt(e,p,()=>{d=!0,f()})),()=>{a?.()}}function ec(n,e,t=1/0){return Ye(e)?ec((i,r)=>kd((s,o)=>e(i,s,r,o))(bt(n(i,r))),t):(typeof e=="number"&&(t=e),Ft((i,r)=>Bd(i,r,n,t)))}function Vd(n=1/0){return ec(Wi,n)}function tc(...n){let e=js(n),t=Td(n,1/0),i=n;return i.length?i.length===1?bt(i[0]):Vd(t)(ro(i,e)):bd}function nc(n,e=Wi){return n=n??ly,Ft((t,i)=>{let r,s=!0;t.subscribe(Xt(i,o=>{let a=e(o);(s||!n(r,a))&&(s=!1,r=a,i.next(o))}))})}function ly(n,e){return n===e}function rc(n={}){let{connector:e=()=>new zn,resetOnError:t=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=n;return s=>{let o,a,c,l=0,u=!1,d=!1,f=()=>{a?.unsubscribe(),a=void 0},p=()=>{f(),o=c=void 0,u=d=!1},g=()=>{let y=o;p(),y?.unsubscribe()};return Ft((y,m)=>{l++,!d&&!u&&f();let h=c=c??e();m.add(()=>{l--,l===0&&!d&&!u&&(a=ic(g,r))}),h.subscribe(m),!o&&l>0&&(o=new Sn({next:b=>h.next(b),error:b=>{d=!0,f(),a=ic(p,t,b),h.error(b)},complete:()=>{u=!0,f(),a=ic(p,i),h.complete()}}),bt(y).subscribe(o))})(s)}}function ic(n,e,...t){if(e===!0){n();return}if(e===!1)return;let i=new Sn({next:()=>{i.unsubscribe(),n()}});return bt(e(...t)).subscribe(i)}function sc(n,e){return Ft((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Xt(i,c=>{r?.unsubscribe();let l=0,u=s++;bt(n(c,u)).subscribe(r=Xt(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function et(n){for(let e in n)if(n[e]===et)return e;throw Error("Could not find renamed property on target object.")}function Ut(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(Ut).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function Hd(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var uy=et({__forward_ref__:et});function xf(n){return n.__forward_ref__=xf,n.toString=function(){return Ut(this())},n}function rn(n){return dy(n)?n():n}function dy(n){return typeof n=="function"&&n.hasOwnProperty(uy)&&n.__forward_ref__===xf}function Mf(n){return n&&!!n.\u0275providers}var Xe=class extends Error{constructor(e,t){super(jc(e,t)),this.code=e}};function jc(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var fy=et({\u0275cmp:et}),hy=et({\u0275dir:et}),py=et({\u0275pipe:et}),my=et({\u0275mod:et}),zd=et({\u0275fac:et}),jr=et({__NG_ELEMENT_ID__:et}),Gd=et({__NG_ENV_ID__:et});function Ef(n){return typeof n=="string"?n:n==null?"":String(n)}function gy(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Ef(n)}function yy(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Xe(-200,`Circular dependency in DI detected for ${n}${t}`)}function $c(n,e){let t=e?` in ${e}`:"";throw new Xe(-201,!1)}function vy(n,e){n==null&&_y(e,n,null,"!=")}function _y(n,e,t,i){throw new Error(`ASSERTION ERROR: ${n}`+(i==null?"":` [Expected=> ${t} ${i} ${e} <=Actual]`))}function ut(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function An(n){return{providers:n.providers||[],imports:n.imports||[]}}function qc(n){return Wd(n,bf)||Wd(n,wf)}function Wd(n,e){return n.hasOwnProperty(e)?n[e]:null}function xy(n){let e=n&&(n[bf]||n[wf]);return e||null}function jd(n){return n&&(n.hasOwnProperty($d)||n.hasOwnProperty(My))?n[$d]:null}var bf=et({\u0275prov:et}),$d=et({\u0275inj:et}),wf=et({ngInjectableDef:et}),My=et({ngInjectorDef:et}),je=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(je||{}),pc;function Ey(){return pc}function yn(n){let e=pc;return pc=n,e}function Sf(n,e,t){let i=qc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&je.Optional)return null;if(e!==void 0)return e;$c(Ut(n),"Injector")}var Gt=globalThis;var Ke=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=ut({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};var by={},Yr=by,wy="__NG_DI_FLAG__",uo="ngTempTokenPath",Sy="ngTokenPath",Ty=/\n/gm,Ay="\u0275",qd="__source",$r;function ji(n){let e=$r;return $r=n,e}function Cy(n,e=je.Default){if($r===void 0)throw new Xe(-203,!1);return $r===null?Sf(n,void 0,e):$r.get(n,e&je.Optional?null:void 0,e)}function qe(n,e=je.Default){return(Ey()||Cy)(rn(n),e)}function Pt(n,e=je.Default){return qe(n,Mo(e))}function Mo(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function mc(n){let e=[];for(let t=0;t<n.length;t++){let i=rn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Xe(900,!1);let r,s=je.Default;for(let o=0;o<i.length;o++){let a=i[o],c=Dy(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(qe(r,s))}else e.push(qe(i))}return e}function Dy(n){return n[wy]}function Iy(n,e,t,i){let r=n[uo];throw e[qd]&&r.unshift(e[qd]),n.message=Ry(`
`+n.message,r,t,i),n[Sy]=r,n[uo]=null,n}function Ry(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==Ay?n.slice(2):n;let r=Ut(e);if(Array.isArray(e))r=e.map(Ut).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):Ut(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(Ty,`
  `)}`}function Tf(n){return{toString:n}.toString()}var Af=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Af||{}),xn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(xn||{}),Zr={},vn=[];function Cf(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function gc(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];Ny(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function Py(n){return n===3||n===4||n===6}function Ny(n){return n.charCodeAt(0)===64}function Xc(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Xd(n,t,r,null,e[++i]):Xd(n,t,r,null,null))}}return n}function Xd(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var Df="ng-template";function Ly(n,e,t){let i=0,r=!0;for(;i<n.length;){let s=n[i++];if(typeof s=="string"&&r){let o=n[i++];if(t&&s==="class"&&Cf(o.toLowerCase(),e,0)!==-1)return!0}else if(s===1){for(;i<n.length&&typeof(s=n[i++])=="string";)if(s.toLowerCase()===e)return!0;return!1}else typeof s=="number"&&(r=!1)}return!1}function If(n){return n.type===4&&n.value!==Df}function Oy(n,e,t){let i=n.type===4&&!t?Df:n.value;return e===i}function Fy(n,e,t){let i=4,r=n.attrs||[],s=By(r),o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!nn(i)&&!nn(c))return!1;if(o&&nn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!Oy(n,c,t)||c===""&&e.length===1){if(nn(i))return!1;o=!0}}else{let l=i&8?c:e[++a];if(i&8&&n.attrs!==null){if(!Ly(n.attrs,l,t)){if(nn(i))return!1;o=!0}continue}let u=i&8?"class":c,d=Uy(u,r,If(n),t);if(d===-1){if(nn(i))return!1;o=!0;continue}if(l!==""){let f;d>s?f="":f=r[d+1].toLowerCase();let p=i&8?f:null;if(p&&Cf(p,l,0)!==-1||i&2&&l!==f){if(nn(i))return!1;o=!0}}}}return nn(i)||o}function nn(n){return(n&1)===0}function Uy(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Vy(e,n)}function ky(n,e,t=!1){for(let i=0;i<e.length;i++)if(Fy(n,e[i],t))return!0;return!1}function By(n){for(let e=0;e<n.length;e++){let t=n[e];if(Py(t))return e}return n.length}function Vy(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Yd(n,e){return n?":not("+e.trim()+")":e}function Hy(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!nn(o)&&(e+=Yd(s,r),r=""),i=o,s=s||!nn(i);t++}return r!==""&&(e+=Yd(s,r)),e}function zy(n){return n.map(Hy).join(",")}function Gy(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!nn(r))break;r=s}i++}return{attrs:e,classes:t}}function Eo(n){return Tf(()=>{let e=Xy(n),t=di(gn({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Af.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||xn.Emulated,styles:n.styles||vn,_:null,schemas:n.schemas||null,tView:null,id:""});Yy(t);let i=n.dependencies;return t.directiveDefs=Jd(i,!1),t.pipeDefs=Jd(i,!0),t.id=Zy(t),t})}function Wy(n){return bo(n)||Rf(n)}function jy(n){return n!==null}function Cn(n){return Tf(()=>({type:n.type,bootstrap:n.bootstrap||vn,declarations:n.declarations||vn,imports:n.imports||vn,exports:n.exports||vn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function Zd(n,e){if(n==null)return Zr;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s=r;Array.isArray(r)&&(s=r[1],r=r[0]),t[r]=i,e&&(e[r]=s)}return t}function bo(n){return n[fy]||null}function Rf(n){return n[hy]||null}function Pf(n){return n[py]||null}function $y(n){let e=bo(n)||Rf(n)||Pf(n);return e!==null?e.standalone:!1}function qy(n,e){let t=n[my]||null;if(!t&&e===!0)throw new Error(`Type ${Ut(n)} does not have '\u0275mod' property.`);return t}function Xy(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||Zr,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||vn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Zd(n.inputs,e),outputs:Zd(n.outputs),debugInfo:null}}function Yy(n){n.features?.forEach(e=>e(n))}function Jd(n,e){if(!n)return null;let t=e?Pf:Wy;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(jy)}function Zy(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483647+1,"c"+e}var Xn=0,Je=1,Ne=2,Wt=3,Wn=4,Yn=5,yc=6,Kd=7,jn=8,Zi=9,Jr=10,on=11,Kr=12,Qd=13,os=14,yi=15,Nf=16,$i=17,Lf=18,wo=19,Of=20,qr=21,oc=22,vi=23,_i=25,Ff=1;var vc=7,Jy=8,Uf=9,mi=10,Qr=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n[n.HasChildViewsToRefresh=4]="HasChildViewsToRefresh",n}(Qr||{});function gi(n){return Array.isArray(n)&&typeof n[Ff]=="object"}function $n(n){return Array.isArray(n)&&n[Ff]===!0}function kf(n){return(n.flags&4)!==0}function So(n){return n.componentOffset>-1}function Ky(n){return(n.flags&1)===1}function as(n){return!!n.template}function Qy(n){return(n[Ne]&512)!==0}function es(n,e){let t=n.hasOwnProperty(zd);return t?n[zd]:null}var _c=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Bf(){return Vf}function Vf(n){return n.type.prototype.ngOnChanges&&(n.setInput=tv),ev}Bf.ngInherit=!0;function ev(){let n=zf(this),e=n?.current;if(e){let t=n.previous;if(t===Zr)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function tv(n,e,t,i){let r=this.declaredInputs[t],s=zf(n)||nv(n,{previous:Zr,current:null}),o=s.current||(s.current={}),a=s.previous,c=a[r];o[r]=new _c(c&&c.currentValue,e,a===Zr),n[i]=e}var Hf="__ngSimpleChanges__";function zf(n){return n[Hf]||null}function nv(n,e){return n[Hf]=e}var ef=null;var Gn=function(n,e,t){ef?.(n,e,t)},iv="svg",rv="math";function Ki(n){for(;Array.isArray(n);)n=n[Xn];return n}function sv(n,e){return Ki(e[n])}function Zn(n,e){return Ki(e[n.index])}function Gf(n,e){return n.data[e]}function Qi(n,e){let t=e[n];return gi(t)?t:t[Xn]}function Yc(n){return(n[Ne]&128)===128}function tf(n,e){return e==null?null:n[e]}function Wf(n){n[$i]=0}function ov(n){n[Ne]&1024||(n[Ne]|=1024,Yc(n)&&To(n))}function jf(n){return n[Ne]&9216||n[vi]?.dirty}function av(n){jf(n)&&To(n)}function To(n){let e=n[Wt];for(;e!==null&&!($n(e)&&e[Ne]&Qr.HasChildViewsToRefresh||gi(e)&&e[Ne]&8192);){if($n(e))e[Ne]|=Qr.HasChildViewsToRefresh;else if(e[Ne]|=8192,!Yc(e))break;e=e[Wt]}}function cv(n,e){if((n[Ne]&256)===256)throw new Xe(911,!1);n[qr]===null&&(n[qr]=[]),n[qr].push(e)}var Ze={lFrame:eh(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function lv(){return Ze.lFrame.elementDepthCount}function uv(){Ze.lFrame.elementDepthCount++}function dv(){Ze.lFrame.elementDepthCount--}function $f(){return Ze.bindingsEnabled}function fv(){return Ze.skipHydrationRootTNode!==null}function hv(n){return Ze.skipHydrationRootTNode===n}function pv(){Ze.skipHydrationRootTNode=null}function kt(){return Ze.lFrame.lView}function cs(){return Ze.lFrame.tView}function Ei(){let n=qf();for(;n!==null&&n.type===64;)n=n.parent;return n}function qf(){return Ze.lFrame.currentTNode}function mv(){let n=Ze.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Ao(n,e){let t=Ze.lFrame;t.currentTNode=n,t.isParent=e}function Xf(){return Ze.lFrame.isParent}function gv(){Ze.lFrame.isParent=!1}function Yf(){let n=Ze.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function yv(n){return Ze.lFrame.bindingIndex=n}function Zf(){return Ze.lFrame.bindingIndex++}function vv(){return Ze.lFrame.inI18n}function _v(n,e){let t=Ze.lFrame;t.bindingIndex=t.bindingRootIndex=n,xc(e)}function xv(){return Ze.lFrame.currentDirectiveIndex}function xc(n){Ze.lFrame.currentDirectiveIndex=n}function Jf(n){Ze.lFrame.currentQueryIndex=n}function Mv(n){let e=n[Je];return e.type===2?e.declTNode:e.type===1?n[Yn]:null}function Kf(n,e,t){if(t&je.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&je.Host);)if(r=Mv(s),r===null||(s=s[os],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Ze.lFrame=Qf();return i.currentTNode=e,i.lView=n,!0}function Zc(n){let e=Qf(),t=n[Je];Ze.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Qf(){let n=Ze.lFrame,e=n===null?null:n.child;return e===null?eh(n):e}function eh(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function th(){let n=Ze.lFrame;return Ze.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var nh=th;function Jc(){let n=th();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Kc(){return Ze.lFrame.selectedIndex}function xi(n){Ze.lFrame.selectedIndex=n}function Ev(){let n=Ze.lFrame;return Gf(n.tView,n.selectedIndex)}function bv(){return Ze.lFrame.currentNamespace}var ih=!0;function rh(){return ih}function sh(n){ih=n}function wv(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=Vf(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function oh(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function oo(n,e,t){ah(n,e,3,t)}function ao(n,e,t,i){(n[Ne]&3)===t&&ah(n,e,t,i)}function ac(n,e){let t=n[Ne];(t&3)===e&&(t&=16383,t+=1,n[Ne]=t)}function ah(n,e,t,i){let r=i!==void 0?n[$i]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[$i]+=65536),(a<s||s==-1)&&(Sv(n,t,e,c),n[$i]=(n[$i]&4294901760)+c+2),c++}function nf(n,e){Gn(4,n,e);let t=Ht(null);try{e.call(n)}finally{Ht(t),Gn(5,n,e)}}function Sv(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ne]>>14<n[$i]>>16&&(n[Ne]&3)===e&&(n[Ne]+=16384,nf(a,s)):nf(a,s)}var Yi=-1,ts=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function Tv(n){return n instanceof ts}function Av(n){return(n.flags&8)!==0}function Cv(n){return(n.flags&16)!==0}function Dv(n){return n!==Yi}function Mc(n){let e=n&32767;return n&32767}function Iv(n){return n>>16}function Ec(n,e){let t=Iv(n),i=e;for(;t>0;)i=i[os],t--;return i}var bc=!0;function rf(n){let e=bc;return bc=n,e}var Rv=256,ch=Rv-1,lh=5,Pv=0,_n={};function Nv(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(jr)&&(i=t[jr]),i==null&&(i=t[jr]=Pv++);let r=i&ch,s=1<<r;e.data[n+(r>>lh)]|=s}function uh(n,e){let t=dh(n,e);if(t!==-1)return t;let i=e[Je];i.firstCreatePass&&(n.injectorIndex=e.length,cc(i.data,n),cc(e,null),cc(i.blueprint,null));let r=fh(n,e),s=n.injectorIndex;if(Dv(r)){let o=Mc(r),a=Ec(r,e),c=a[Je].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function cc(n,e){n.push(0,0,0,0,0,0,0,0,e)}function dh(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function fh(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=yh(r),i===null)return Yi;if(t++,r=r[os],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Yi}function Lv(n,e,t){Nv(n,e,t)}function hh(n,e,t){if(t&je.Optional||n!==void 0)return n;$c(e,"NodeInjector")}function ph(n,e,t,i){if(t&je.Optional&&i===void 0&&(i=null),!(t&(je.Self|je.Host))){let r=n[Zi],s=yn(void 0);try{return r?r.get(e,i,t&je.Optional):Sf(e,i,t&je.Optional)}finally{yn(s)}}return hh(i,e,t)}function mh(n,e,t,i=je.Default,r){if(n!==null){if(e[Ne]&2048&&!(i&je.Self)){let o=Bv(n,e,t,i,_n);if(o!==_n)return o}let s=gh(n,e,t,i,_n);if(s!==_n)return s}return ph(e,t,i,r)}function gh(n,e,t,i,r){let s=Uv(t);if(typeof s=="function"){if(!Kf(e,n,i))return i&je.Host?hh(r,t,i):ph(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&je.Optional))$c(t);else return o}finally{nh()}}else if(typeof s=="number"){let o=null,a=dh(n,e),c=Yi,l=i&je.Host?e[yi][Yn]:null;for((a===-1||i&je.SkipSelf)&&(c=a===-1?fh(n,e):e[a+8],c===Yi||!of(i,!1)?a=-1:(o=e[Je],a=Mc(c),e=Ec(c,e)));a!==-1;){let u=e[Je];if(sf(s,a,u.data)){let d=Ov(a,e,t,o,i,l);if(d!==_n)return d}c=e[a+8],c!==Yi&&of(i,e[Je].data[a+8]===l)&&sf(s,a,e)?(o=u,a=Mc(c),e=Ec(c,e)):a=-1}}return r}function Ov(n,e,t,i,r,s){let o=e[Je],a=o.data[n+8],c=i==null?So(a)&&bc:i!=o&&(a.type&3)!==0,l=r&je.Host&&s===a,u=Fv(a,o,t,c,l);return u!==null?ns(e,o,u,a):_n}function Fv(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let p=d;p<f;p++){let g=o[p];if(p<c&&t===g||p>=c&&g.type===t)return p}if(r){let p=o[c];if(p&&as(p)&&p.type===t)return c}return null}function ns(n,e,t,i){let r=n[t],s=e.data;if(Tv(r)){let o=r;o.resolving&&yy(gy(s[t]));let a=rf(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?yn(o.injectImpl):null,u=Kf(n,i,je.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&wv(t,s[t],e)}finally{l!==null&&yn(l),rf(a),o.resolving=!1,nh()}}return r}function Uv(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(jr)?n[jr]:void 0;return typeof e=="number"?e>=0?e&ch:kv:e}function sf(n,e,t){let i=1<<n;return!!(t[e+(n>>lh)]&i)}function of(n,e){return!(n&je.Self)&&!(n&je.Host&&e)}var fo=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return mh(this._tNode,this._lView,e,Mo(i),t)}};function kv(){return new fo(Ei(),kt())}function Bv(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ne]&2048&&!(o[Ne]&512);){let a=gh(s,o,t,i|je.Self,_n);if(a!==_n)return a;let c=s.parent;if(!c){let l=o[Of];if(l){let u=l.get(t,_n,i);if(u!==_n)return u}c=yh(o),o=o[os]}s=c}return r}function yh(n){let e=n[Je],t=e.type;return t===2?e.declTNode:t===1?n[Yn]:null}function Vv(n){let e=Gt.ng;if(e&&e.\u0275compilerFacade)return e.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function Qc(n,e){n.forEach(t=>Array.isArray(t)?Qc(t,e):e(t))}function vh(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function Hv(n,e){let t=[];for(let i=0;i<n;i++)t.push(e);return t}function zv(n){let e=[],t=new Map;function i(r){let s=t.get(r);if(!s){let o=n(r);t.set(r,s=o.then($v))}return s}return ho.forEach((r,s)=>{let o=[];r.templateUrl&&o.push(i(r.templateUrl).then(l=>{r.template=l}));let a=typeof r.styles=="string"?[r.styles]:r.styles||[];if(r.styles=a,r.styleUrl&&r.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");if(r.styleUrls?.length){let l=r.styles.length,u=r.styleUrls;r.styleUrls.forEach((d,f)=>{a.push(""),o.push(i(d).then(p=>{a[l+f]=p,u.splice(u.indexOf(d),1),u.length==0&&(r.styleUrls=void 0)}))})}else r.styleUrl&&o.push(i(r.styleUrl).then(l=>{a.push(l),r.styleUrl=void 0}));let c=Promise.all(o).then(()=>qv(s));e.push(c)}),Wv(),Promise.all(e).then(()=>{})}var ho=new Map,Gv=new Set;function Wv(){let n=ho;return ho=new Map,n}function jv(){return ho.size===0}function $v(n){return typeof n=="string"?n:n.text()}function qv(n){Gv.delete(n)}var Co=new Ke("ENVIRONMENT_INITIALIZER"),_h=new Ke("INJECTOR",-1),xh=new Ke("INJECTOR_DEF_TYPES"),po=class{get(e,t=Yr){if(t===Yr){let i=new Error(`NullInjectorError: No provider for ${Ut(e)}!`);throw i.name="NullInjectorError",i}return t}};function Xv(...n){return{\u0275providers:Mh(!0,n),\u0275fromNgModule:!0}}function Mh(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Qc(e,o=>{let a=o;wc(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Eh(r,s),t}function Eh(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];el(r,s=>{e(s,i)})}}function wc(n,e,t,i){if(n=rn(n),!n)return!1;let r=null,s=jd(n),o=!s&&bo(n);if(!s&&!o){let c=n.ngModule;if(s=jd(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)wc(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Qc(s.imports,u=>{wc(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Eh(l,e)}if(!a){let l=es(r)||(()=>new r);e({provide:r,useFactory:l,deps:vn},r),e({provide:xh,useValue:r,multi:!0},r),e({provide:Co,useValue:()=>qe(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;el(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function el(n,e){for(let t of n)Mf(t)&&(t=t.\u0275providers),Array.isArray(t)?el(t,e):e(t)}var Yv=et({provide:String,useValue:et});function bh(n){return n!==null&&typeof n=="object"&&Yv in n}function Zv(n){return!!(n&&n.useExisting)}function Jv(n){return!!(n&&n.useFactory)}function Sc(n){return typeof n=="function"}var Do=new Ke("Set Injector scope."),co={},Kv={},lc;function tl(){return lc===void 0&&(lc=new po),lc}var Mi=class{},mo=class extends Mi{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Ac(e,o=>this.processProvider(o)),this.records.set(_h,qi(void 0,this)),r.has("environment")&&this.records.set(Mi,qi(void 0,this));let s=this.records.get(Do);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(xh,vn,je.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(let t of this._ngOnDestroyHooks)t.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let t of e)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear()}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=ji(this),i=yn(void 0),r;try{return e()}finally{ji(t),yn(i)}}get(e,t=Yr,i=je.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Gd))return e[Gd](this);i=Mo(i);let r,s=ji(this),o=yn(void 0);try{if(!(i&je.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=r_(e)&&qc(e);l&&this.injectableDefInScope(l)?c=qi(Tc(e),co):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&je.Self?tl():this.parent;return t=i&je.Optional&&t===Yr?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[uo]=a[uo]||[]).unshift(Ut(e)),s)throw a;return Iy(a,e,"R3InjectorError",this.source)}else throw a}finally{yn(o),ji(s)}}resolveInjectorInitializers(){let e=ji(this),t=yn(void 0),i;try{let r=this.get(Co,vn,je.Self);for(let s of r)s()}finally{ji(e),yn(t)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(Ut(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Xe(205,!1)}processProvider(e){e=rn(e);let t=Sc(e)?e:rn(e&&e.provide),i=e_(e);if(!Sc(e)&&e.multi===!0){let r=this.records.get(t);r||(r=qi(void 0,co,!0),r.factory=()=>mc(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}else{let r=this.records.get(t)}this.records.set(t,i)}hydrate(e,t){return t.value===co&&(t.value=Kv,t.value=t.factory()),typeof t.value=="object"&&t.value&&i_(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}injectableDefInScope(e){if(!e.providedIn)return!1;let t=rn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Tc(n){let e=qc(n),t=e!==null?e.factory:es(n);if(t!==null)return t;if(n instanceof Ke)throw new Xe(204,!1);if(n instanceof Function)return Qv(n);throw new Xe(204,!1)}function Qv(n){let e=n.length;if(e>0){let i=Hv(e,"?");throw new Xe(204,!1)}let t=xy(n);return t!==null?()=>t.factory(n):()=>new n}function e_(n){if(bh(n))return qi(void 0,n.useValue);{let e=t_(n);return qi(e,co)}}function t_(n,e,t){let i;if(Sc(n)){let r=rn(n);return es(r)||Tc(r)}else if(bh(n))i=()=>rn(n.useValue);else if(Jv(n))i=()=>n.useFactory(...mc(n.deps||[]));else if(Zv(n))i=()=>qe(rn(n.useExisting));else{let r=rn(n&&(n.useClass||n.provide));if(n_(n))i=()=>new r(...mc(n.deps));else return es(r)||Tc(r)}return i}function qi(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function n_(n){return!!n.deps}function i_(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function r_(n){return typeof n=="function"||typeof n=="object"&&n instanceof Ke}function Ac(n,e){for(let t of n)Array.isArray(t)?Ac(t,e):t&&Mf(t)?Ac(t.\u0275providers,e):e(t)}function af(n,e=null,t=null,i){let r=wh(n,e,t,i);return r.resolveInjectorInitializers(),r}function wh(n,e=null,t=null,i,r=new Set){let s=[t||vn,Xv(n)];return i=i||(typeof n=="object"?void 0:Ut(n)),new mo(s,e||tl(),i||null,r)}var er=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return af({name:""},r,i,"");{let s=i.name??"";return af({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=Yr,e.NULL=new po,e.\u0275prov=ut({token:e,providedIn:"any",factory:()=>qe(_h)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})();var Cc;function Sh(n){Cc=n}function s_(){if(Cc!==void 0)return Cc;if(typeof document<"u")return document;throw new Xe(210,!1)}var Io=new Ke("AppId",{providedIn:"root",factory:()=>o_}),o_="ng",nl=new Ke("Platform Initializer"),tr=new Ke("Platform ID",{providedIn:"platform",factory:()=>"unknown"});var il=new Ke("CSP nonce",{providedIn:"root",factory:()=>s_().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function a_(n){return n instanceof Function?n():n}function c_(n){return(n.flags&128)===128}var bi=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(bi||{});var Th=new Map,l_=0;function u_(){return l_++}function d_(n){Th.set(n[wo],n)}function f_(n){Th.delete(n[wo])}var cf="__ngContext__";function Ji(n,e){gi(e)?(n[cf]=e[wo],d_(e)):n[cf]=e}var h_;function Ah(n,e){return h_(n,e)}function Ch(n){let e=n[Wt];return $n(e)?e[Wt]:e}function Dh(n){return Rh(n[Kr])}function Ih(n){return Rh(n[Wn])}function Rh(n){for(;n!==null&&!$n(n);)n=n[Wn];return n}function Xi(n,e,t,i,r){if(i!=null){let s,o=!1;$n(i)?s=i:gi(i)&&(o=!0,i=i[Xn]);let a=Ki(i);n===0&&t!==null?r==null?Lh(e,t,a):Dc(e,t,a,r||null,!0):n===1&&t!==null?Dc(e,t,a,r||null,!0):n===2?R_(e,a,o):n===3&&e.destroyNode(a),s!=null&&N_(e,n,s,t,r)}}function p_(n,e){return n.createText(e)}function m_(n,e,t){n.setValue(e,t)}function Ph(n,e,t){return n.createElement(e,t)}function g_(n,e){let t=e[on];Ro(n,e,t,2,null,null),e[Xn]=null,e[Yn]=null}function y_(n,e){Ro(n,e,e[on],2,null,null)}function v_(n){let e=n[Kr];if(!e)return uc(n[Je],n);for(;e;){let t=null;if(gi(e))t=e[Kr];else{let i=e[mi];i&&(t=i)}if(!t){for(;e&&!e[Wn]&&e!==n;)gi(e)&&uc(e[Je],e),e=e[Wt];e===null&&(e=n),gi(e)&&uc(e[Je],e),t=e&&e[Wn]}e=t}}function Nh(n,e){let t=n[Uf],i=t.indexOf(e),r=e[Wt];t.splice(i,1)}function __(n,e){if(n.length<=mi)return;let t=mi+e,i=n[t];if(i){let r=i[Nf];r!==null&&r!==n&&Nh(r,i),e>0&&(n[t-1][Wn]=i[Wn]);let s=vh(n,mi+e);g_(i[Je],i);let o=s[Lf];o!==null&&o.detachView(s[Je]),i[Wt]=null,i[Wn]=null,i[Ne]&=-129}return i}function x_(n,e){if(!(e[Ne]&256)){let t=e[on];t.destroyNode&&Ro(n,e,t,3,null,null),v_(e)}}function uc(n,e){if(!(e[Ne]&256)){e[Ne]&=-129,e[Ne]|=256,e[vi]&&hd(e[vi]),E_(n,e),M_(n,e),e[Je].type===1&&e[on].destroy();let t=e[Nf];if(t!==null&&$n(e[Wt])){t!==e[Wt]&&Nh(t,e);let i=e[Lf];i!==null&&i.detachView(n)}f_(e)}}function M_(n,e){let t=n.cleanup,i=e[Kd];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[Kd]=null);let r=e[qr];if(r!==null){e[qr]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function E_(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof ts)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Gn(4,a,c);try{c.call(a)}finally{Gn(5,a,c)}}else{Gn(4,r,s);try{s.call(r)}finally{Gn(5,r,s)}}}}}function b_(n,e,t){return w_(n,e.parent,t)}function w_(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[Xn];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===xn.None||s===xn.Emulated)return null}return Zn(i,t)}}function Dc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function Lh(n,e,t){n.appendChild(e,t)}function lf(n,e,t,i,r){i!==null?Dc(n,e,t,i,r):Lh(n,e,t)}function S_(n,e,t,i){n.removeChild(e,t,i)}function T_(n,e){return n.parentNode(e)}function A_(n,e,t){return D_(n,e,t)}function C_(n,e,t){return n.type&40?Zn(n,t):null}var D_=C_,uf;function Oh(n,e,t,i){let r=b_(n,i,e),s=e[on],o=i.parent||e[Yn],a=A_(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)lf(s,r,t[c],a,!1);else lf(s,r,t,a,!1);uf!==void 0&&uf(s,i,e,t,r)}function I_(n,e){if(e!==null){let i=n[yi][Yn],r=e.projection;return i.projection[r]}return null}function R_(n,e,t){let i=T_(n,e);i&&S_(n,i,e,t)}function rl(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Ji(Ki(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)rl(n,e,t.child,i,r,s,!1),Xi(e,n,r,a,s);else if(c&32){let l=Ah(t,i),u;for(;u=l();)Xi(e,n,r,u,s);Xi(e,n,r,a,s)}else c&16?P_(n,e,i,t,r,s):Xi(e,n,r,a,s);t=o?t.projectionNext:t.next}}function Ro(n,e,t,i,r,s){rl(t,i,n.firstChild,e,r,s,!1)}function P_(n,e,t,i,r,s){let o=t[yi],c=o[Yn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Xi(e,n,r,u,s)}else{let l=c,u=o[Wt];c_(i)&&(l.flags|=128),rl(n,e,l,u,r,s,!0)}}function N_(n,e,t,i,r){let s=t[vc],o=Ki(t);s!==o&&Xi(e,n,i,s,r);for(let a=mi;a<t.length;a++){let c=t[a];Ro(c[Je],c,n,e,i,s)}}function L_(n,e,t){n.setAttribute(e,"style",t)}function Fh(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Uh(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&gc(n,e,i),r!==null&&Fh(n,e,r),s!==null&&L_(n,e,s)}var O_="h",F_="b";var U_=(n,e,t)=>null;function sl(n,e,t=!1){return U_(n,e,t)}var Ic=class{},go=class{};function k_(n){let e=Error(`No component factory found for ${Ut(n)}.`);return e[B_]=n,e}var B_="ngComponent";var Rc=class{resolveComponentFactory(e){throw k_(e)}},Po=(()=>{let e=class e{};e.NULL=new Rc;let n=e;return n})();function V_(){return kh(Ei(),kt())}function kh(n,e){return new ls(Zn(n,e))}var ls=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=V_;let n=e;return n})();var is=class{};var H_=(()=>{let e=class e{};e.\u0275prov=ut({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),rs=class{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}},z_=new rs("17.0.7"),dc={};function yo(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(Ki(s)),$n(s)&&G_(s,i);let o=t.type;if(o&8)yo(n,e,t.child,i);else if(o&32){let a=Ah(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=I_(e,t);if(Array.isArray(a))i.push(...a);else{let c=Ch(e[yi]);yo(c[Je],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function G_(n,e){for(let t=mi;t<n.length;t++){let i=n[t],r=i[Je].firstChild;r!==null&&yo(i[Je],i,r,e)}n[vc]!==n[Xn]&&e.push(n[vc])}var Bh=[];function W_(n){return n[vi]??j_(n)}function j_(n){let e=Bh.pop()??Object.create(q_);return e.lView=n,e}function $_(n){n.lView[vi]!==n&&(n.lView=null,Bh.push(n))}var q_=di(gn({},ud),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{To(n.lView)},consumerOnSignalRead(){this.lView[vi]=this}}),X_="ngOriginalError";function fc(n){return n[X_]}var Tn=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&fc(e);for(;t&&fc(t);)t=fc(t);return t||null}},Vh=new Ke("",{providedIn:"root",factory:()=>Pt(Tn).handleError.bind(void 0)});var Hh=!1,Y_=new Ke("",{providedIn:"root",factory:()=>Hh});var nr={};function us(n){zh(cs(),kt(),Kc()+n,!1)}function zh(n,e,t,i){if(!i)if((e[Ne]&3)===3){let s=n.preOrderCheckHooks;s!==null&&oo(e,s,t)}else{let s=n.preOrderHooks;s!==null&&ao(e,s,0,t)}xi(t)}function ir(n,e=je.Default){let t=kt();if(t===null)return qe(n,e);let i=Ei();return mh(i,t,rn(n),e)}function Z_(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)xi(~r);else{let s=r,o=t[++i],a=t[++i];_v(o,s);let c=e[s];a(2,c)}}}finally{xi(-1)}}function ol(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[Xn]=r,d[Ne]=i|4|128|8,(l!==null||n&&n[Ne]&2048)&&(d[Ne]|=2048),Wf(d),d[Wt]=d[os]=n,d[jn]=t,d[Jr]=o||n&&n[Jr],d[on]=a||n&&n[on],d[Zi]=c||n&&n[Zi]||null,d[Yn]=s,d[wo]=u_(),d[yc]=u,d[Of]=l,d[yi]=e.type==2?n[yi]:d,d}function al(n,e,t,i,r){let s=n.data[e];if(s===null)s=J_(n,e,t,i,r),vv()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=mv();s.injectorIndex=o===null?-1:o.injectorIndex}return Ao(s,!0),s}function J_(n,e,t,i,r){let s=qf(),o=Xf(),a=o?s:s&&s.parent,c=n.data[e]=r0(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function Gh(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Wh(n,e,t,i,r){let s=Kc(),o=i&2;try{xi(-1),o&&e.length>_i&&zh(n,e,_i,!1),Gn(o?2:0,r),t(i,r)}finally{xi(s),Gn(o?3:1,r)}}function jh(n,e,t){if(kf(e)){let i=Ht(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];a.contentQueries&&a.contentQueries(1,t[o],o)}}finally{Ht(i)}}}function K_(n,e,t){$f()&&(f0(n,e,t,Zn(t,e)),(t.flags&64)===64&&Yh(n,e,t))}function Q_(n,e,t=Zn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function $h(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=qh(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function qh(n,e,t,i,r,s,o,a,c,l,u){let d=_i+i,f=d+r,p=e0(d,f),g=typeof l=="function"?l():l;return p[Je]={type:n,blueprint:p,template:t,queries:null,viewQuery:a,declTNode:e,data:p.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function e0(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:nr);return t}function t0(n,e,t,i){let s=i.get(Y_,Hh)||t===xn.ShadowDom,o=n.selectRootElement(e,s);return n0(o),o}function n0(n){i0(n)}var i0=n=>null;function r0(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return fv()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function df(n,e,t,i){for(let r in n)if(n.hasOwnProperty(r)){t=t===null?{}:t;let s=n[r];i===null?ff(t,e,r,s):i.hasOwnProperty(r)&&ff(t,e,i[r],s)}return t}function ff(n,e,t,i){n.hasOwnProperty(t)?n[t].push(e,i):n[t]=[e,i]}function s0(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],f=t?t.get(d):null,p=f?f.inputs:null,g=f?f.outputs:null;c=df(d.inputs,u,c,p),l=df(d.outputs,u,l,g);let y=c!==null&&o!==null&&!If(e)?M0(c,u,o):null;a.push(y)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function o0(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function a0(n,e,t,i,r,s,o,a){let c=Zn(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(cl(n,t,u,i,r),So(e)&&c0(t,e.index)):e.type&3?(i=o0(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function c0(n,e){let t=Qi(e,n);t[Ne]&16||(t[Ne]|=64)}function l0(n,e,t,i){if($f()){let r=i===null?null:{"":-1},s=p0(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&Xh(n,e,t,o,r,a),r&&m0(t,i,r)}t.mergedAttrs=Xc(t.mergedAttrs,t.attrs)}function Xh(n,e,t,i,r,s){for(let l=0;l<i.length;l++)Lv(uh(t,e),n,i[l].type);y0(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=Gh(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Xc(t.mergedAttrs,u.hostAttrs),v0(n,t,e,c,u),g0(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}s0(n,t,s)}function u0(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;d0(o)!=a&&o.push(a),o.push(t,i,s)}}function d0(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function f0(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;So(t)&&_0(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||uh(t,e),Ji(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=ns(e,n,a,t);if(Ji(l,e),o!==null&&x0(e,a-r,l,c,t,o),as(c)){let u=Qi(t.index,e);u[jn]=ns(e,n,a,t)}}}function Yh(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=xv();try{xi(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];xc(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&h0(c,l)}}finally{xi(-1),xc(o)}}function h0(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function p0(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(ky(e,o.selectors,!1))if(i||(i=[]),as(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;Pc(n,e,c)}else i.unshift(o),Pc(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function Pc(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function m0(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Xe(-301,!1);i.push(e[r],s)}}}function g0(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;as(e)&&(t[""]=n)}}function y0(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function v0(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=es(r.type,!0)),o=new ts(s,as(r),ir);n.blueprint[i]=o,t[i]=o,u0(n,e,i,Gh(n,t,r.hostVars,nr),r)}function _0(n,e,t){let i=Zn(e,n),r=$h(t),s=n[Jr].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Kh(n,ol(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function x0(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++];Zh(i,t,c,l,u)}}function Zh(n,e,t,i,r){let s=Ht(null);try{let o=n.inputTransforms;o!==null&&o.hasOwnProperty(i)&&(r=o[i].call(e,r)),n.setInput!==null?n.setInput(e,r,t,i):e[i]=r}finally{Ht(s)}}function M0(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=2)if(o[a]===e){i.push(s,o[a+1],t[r+1]);break}}r+=2}return i}function Jh(n,e){let t=n.contentQueries;if(t!==null){let i=Ht(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Jf(s),a.contentQueries(2,e[o],o)}}}finally{Ht(i)}}}function Kh(n,e){return n[Kr]?n[Qd][Wn]=e:n[Kr]=e,n[Qd]=e,e}function Nc(n,e,t){Jf(0);let i=Ht(null);try{e(n,t)}finally{Ht(i)}}function E0(n,e){let t=n[Zi],i=t?t.get(Tn,null):null;i&&i.handleError(e)}function cl(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=e[o],l=n.data[o];Zh(l,c,i,a,r)}}function b0(n,e,t){let i=sv(e,n);m_(n[on],i,t)}var w0=100;function S0(n,e=!0){let t=n[Jr],i=t.rendererFactory,r=t.afterRenderEventManager,s=!1;s||(i.begin?.(),r?.begin());try{T0(n)}catch(o){throw e&&E0(n,o),o}finally{s||(i.end?.(),t.inlineEffectRunner?.flush(),r?.end())}}function T0(n){Lc(n,0);let e=0;for(;jf(n);){if(e===w0)throw new Xe(103,!1);e++,Lc(n,1)}}function A0(n,e,t,i){let r=e[Ne];if((r&256)===256)return;let s=!1;!s&&e[Jr].inlineEffectRunner?.flush(),Zc(e);let o=null,a=null;!s&&C0(n)&&(a=W_(e),o=dd(a));try{Wf(e),yv(n.bindingStartIndex),t!==null&&Wh(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&oo(e,d,null)}else{let d=n.preOrderHooks;d!==null&&ao(e,d,0,null),ac(e,0)}if(D0(e),Qh(e,0),n.contentQueries!==null&&Jh(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&oo(e,d)}else{let d=n.contentHooks;d!==null&&ao(e,d,1),ac(e,1)}Z_(n,e);let l=n.components;l!==null&&tp(e,l,0);let u=n.viewQuery;if(u!==null&&Nc(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&oo(e,d)}else{let d=n.viewHooks;d!==null&&ao(e,d,2),ac(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[oc]){for(let d of e[oc])d();e[oc]=null}s||(e[Ne]&=-73)}catch(c){throw To(e),c}finally{a!==null&&(fd(a,o),$_(a)),Jc()}}function C0(n){return n.type!==2}function Qh(n,e){for(let t=Dh(n);t!==null;t=Ih(t)){t[Ne]&=~Qr.HasChildViewsToRefresh;for(let i=mi;i<t.length;i++){let r=t[i];ep(r,e)}}}function D0(n){for(let e=Dh(n);e!==null;e=Ih(e)){if(!(e[Ne]&Qr.HasTransplantedViews))continue;let t=e[Uf];for(let i=0;i<t.length;i++){let r=t[i],s=r[Wt];ov(r)}}}function I0(n,e,t){let i=Qi(e,n);ep(i,t)}function ep(n,e){Yc(n)&&Lc(n,e)}function Lc(n,e){let i=n[Je],r=n[Ne],s=n[vi],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Ga(s)),s&&(s.dirty=!1),n[Ne]&=-9217,o)A0(i,n,i.template,n[jn]);else if(r&8192){Qh(n,1);let a=i.components;a!==null&&tp(n,a,1)}}function tp(n,e,t){for(let i=0;i<e.length;i++)I0(n,e[i],t)}function np(n){for(;n;){n[Ne]|=64;let e=Ch(n);if(Qy(n)&&!e)return n;n=e}return null}var ss=class{get rootNodes(){let e=this._lView,t=e[Je];return yo(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[jn]}set context(e){this._lView[jn]=e}get destroyed(){return(this._lView[Ne]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Wt];if($n(e)){let t=e[Jy],i=t?t.indexOf(this):-1;i>-1&&(__(e,i),vh(t,i))}this._attachedToViewContainer=!1}x_(this._lView[Je],this._lView)}onDestroy(e){cv(this._lView,e)}markForCheck(){np(this._cdRefInjectingView||this._lView)}detach(){this._lView[Ne]&=-129}reattach(){av(this._lView),this._lView[Ne]|=128}detectChanges(){this._lView[Ne]|=1024,S0(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Xe(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,y_(this._lView[Je],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Xe(902,!1);this._appRef=e}},ll=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=R0;let n=e;return n})();function R0(n){return P0(Ei(),kt(),(n&16)===16)}function P0(n,e,t){if(So(n)&&!t){let i=Qi(n.index,e);return new ss(i,i)}else if(n.type&47){let i=e[yi];return new ss(i,e)}return null}var hf=new Set;function ip(n){hf.has(n)||(hf.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var Oc=class extends zn{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=hc(s),r&&(r=hc(r)),o&&(o=hc(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof zt&&e.add(a),a}};function hc(n){return e=>{setTimeout(n,void 0,e)}}var sn=Oc;function pf(...n){}function N0(){let n=typeof Gt.requestAnimationFrame=="function",e=Gt[n?"requestAnimationFrame":"setTimeout"],t=Gt[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var lt=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new sn(!1),this.onMicrotaskEmpty=new sn(!1),this.onStable=new sn(!1),this.onError=new sn(!1),typeof Zone>"u")throw new Xe(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=N0().nativeRequestAnimationFrame,F0(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Xe(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Xe(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,L0,pf,pf);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},L0={};function ul(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function O0(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(Gt,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,Fc(n),n.isCheckStableRunning=!0,ul(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),Fc(n))}function F0(n){let e=()=>{O0(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(U0(a))return t.invokeTask(r,s,o,a);try{return mf(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),gf(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return mf(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),gf(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Fc(n),ul(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Fc(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function mf(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function gf(n){n._nesting--,ul(n)}var Uc=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new sn,this.onMicrotaskEmpty=new sn,this.onStable=new sn,this.onError=new sn}run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}},rp=new Ke("",{providedIn:"root",factory:sp});function sp(){let n=Pt(lt),e=!0,t=new at(r=>{e=n.isStable&&!n.hasPendingMacrotasks&&!n.hasPendingMicrotasks,n.runOutsideAngular(()=>{r.next(e),r.complete()})}),i=new at(r=>{let s;n.runOutsideAngular(()=>{s=n.onStable.subscribe(()=>{lt.assertNotInAngularZone(),queueMicrotask(()=>{!e&&!n.hasPendingMacrotasks&&!n.hasPendingMicrotasks&&(e=!0,r.next(!0))})})});let o=n.onUnstable.subscribe(()=>{lt.assertInAngularZone(),e&&(e=!1,n.runOutsideAngular(()=>{r.next(!1)}))});return()=>{s.unsubscribe(),o.unsubscribe()}});return tc(t,i.pipe(rc()))}function U0(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}function k0(n="zone.js",e){return n==="noop"?new Uc:n==="zone.js"?new lt(e):n}var B0=(()=>{let e=class e{constructor(){this.renderDepth=0,this.handler=null,this.internalCallbacks=[]}begin(){this.handler?.validateBegin(),this.renderDepth++}end(){if(this.renderDepth--,this.renderDepth===0){for(let i of this.internalCallbacks)i();this.internalCallbacks.length=0,this.handler?.execute()}}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=ut({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function V0(n,e){let t=Qi(e,n),i=t[Je];H0(i,t);let r=t[Xn];r!==null&&t[yc]===null&&(t[yc]=sl(r,t[Zi])),op(i,t,t[jn])}function H0(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function op(n,e,t){Zc(e);try{let i=n.viewQuery;i!==null&&Nc(1,i,t);let r=n.template;r!==null&&Wh(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),n.staticContentQueries&&Jh(n,e),n.staticViewQueries&&Nc(2,n.viewQuery,t);let s=n.components;s!==null&&z0(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ne]&=-5,Jc()}}function z0(n,e){for(let t=0;t<e.length;t++)V0(n,e[t])}function kc(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Hd(r,a);else if(s==2){let c=a,l=e[++o];i=Hd(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var vo=class extends Po{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=bo(e);return new Vc(t,this.ngModule)}};function yf(n){let e=[];for(let t in n)if(n.hasOwnProperty(t)){let i=n[t];e.push({propName:i,templateName:t})}return e}function G0(n){let e=n.toLowerCase();return e==="svg"?iv:e==="math"?rv:null}var Bc=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Mo(i);let r=this.injector.get(e,dc,i);return r!==dc||t===dc?r:this.parentInjector.get(e,t,i)}},Vc=class extends go{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=yf(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return yf(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=zy(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){r=r||this.ngModule;let s=r instanceof Mi?r:r?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let o=s?new Bc(e,s):e,a=o.get(is,null);if(a===null)throw new Xe(407,!1);let c=o.get(H_,null),l=o.get(B0,null),u={rendererFactory:a,sanitizer:c,inlineEffectRunner:null,afterRenderEventManager:l},d=a.createRenderer(null,this.componentDef),f=this.componentDef.selectors[0][0]||"div",p=i?t0(d,i,this.componentDef.encapsulation,o):Ph(d,f,G0(f)),g=4608,y=this.componentDef.onPush?576:528,m=this.componentDef.signals?g:y,h=null;p!==null&&(h=sl(p,o,!0));let b=qh(0,null,null,1,0,null,null,null,null,null,null),x=ol(null,b,null,m,null,null,u,d,o,null,h);Zc(x);let D,w;try{let A=this.componentDef,T,H=null;A.findHostDirectiveDefs?(T=[],H=new Map,A.findHostDirectiveDefs(A,T,H),T.push(A)):T=[A];let _=W0(x,p),S=j0(_,p,A,T,x,u,d);w=Gf(b,_i),p&&X0(d,A,p,i),t!==void 0&&Y0(w,this.ngContentSelectors,t),D=q0(S,A,T,H,x,[Z0]),op(b,x,null)}finally{Jc()}return new Hc(this.componentType,D,kh(w,x),x,w)}},Hc=class extends Ic{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new ss(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;cl(s[Je],s,r,e,t),this.previousInputValues.set(e,t);let o=Qi(this._tNode.index,s);np(o)}}get injector(){return new fo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function W0(n,e){let t=n[Je],i=_i;return n[i]=e,al(t,i,2,"#host",null)}function j0(n,e,t,i,r,s,o){let a=r[Je];$0(i,n,e,o);let c=null;e!==null&&(c=sl(e,r[Zi]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=ol(r,$h(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&Pc(a,n,i.length-1),Kh(r,d),r[n.index]=d}function $0(n,e,t,i){for(let r of n)e.mergedAttrs=Xc(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(kc(e,e.mergedAttrs,!0),t!==null&&Uh(i,t,e))}function q0(n,e,t,i,r,s){let o=Ei(),a=r[Je],c=Zn(o,r);Xh(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,f=ns(r,a,d,o);Ji(f,r)}Yh(a,r,o),c&&Ji(c,r);let l=ns(r,a,o.directiveStart+o.componentOffset,o);if(n[jn]=r[jn]=l,s!==null)for(let u of s)u(l,e);return jh(a,o,n),l}function X0(n,e,t,i){if(i)gc(n,t,["ng-version",z_.full]);else{let{attrs:r,classes:s}=Gy(e.selectors[0]);r&&gc(n,t,r),s&&s.length>0&&Fh(n,t,s.join(" "))}}function Y0(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function Z0(){let n=Ei();oh(kt()[Je],n)}function ap(n,e,t){return n[e]=t}function J0(n,e){return n[e]}function dl(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function K0(n,e,t,i){return dl(n,Zf(),t)?e+Ef(t)+i:nr}function ds(n,e,t){let i=kt(),r=Zf();if(dl(i,r,e)){let s=cs(),o=Ev();a0(s,o,i,n,e,i[on],t,!1)}return ds}function vf(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";cl(n,t,s[o],o,i)}var i1=new RegExp(`^(\\d+)*(${F_}|${O_})*(.*)`);function Q0(n,e,t,i,r,s){let o=e.consts,a=tf(o,r),c=al(e,n,2,i,a);return l0(e,t,c,tf(o,s)),c.attrs!==null&&kc(c,c.attrs,!1),c.mergedAttrs!==null&&kc(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function rr(n,e,t,i){let r=kt(),s=cs(),o=_i+n,a=r[on],c=s.firstCreatePass?Q0(o,s,r,e,t,i):s.data[o],l=ex(s,r,c,a,e,n);r[o]=l;let u=Ky(c);return Ao(c,!0),Uh(a,l,c),(c.flags&32)!==32&&rh()&&Oh(s,r,l,c),lv()===0&&Ji(l,r),uv(),u&&(K_(s,r,c),jh(s,c,r)),i!==null&&Q_(r,c),rr}function sr(){let n=Ei();Xf()?gv():(n=n.parent,Ao(n,!1));let e=n;hv(e)&&pv(),dv();let t=cs();return t.firstCreatePass&&(oh(t,n),kf(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&Av(e)&&vf(t,e,kt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Cv(e)&&vf(t,e,kt(),e.stylesWithoutHost,!1),sr}function No(n,e,t,i){return rr(n,e,t,i),sr(),No}var ex=(n,e,t,i,r,s)=>(sh(!0),Ph(i,r,bv()));var _o="en-US";var tx=_o;function nx(n){vy(n,"Expected localeId to be defined"),typeof n=="string"&&(tx=n.toLowerCase().replace(/_/g,"-"))}function fl(n){return!!n&&typeof n.then=="function"}function cp(n){return!!n&&typeof n.subscribe=="function"}function hl(n,e=""){let t=kt(),i=cs(),r=n+_i,s=i.firstCreatePass?al(i,r,1,e,null):i.data[r],o=ix(i,t,s,e,n);t[r]=o,rh()&&Oh(i,t,o,s),Ao(s,!1)}var ix=(n,e,t,i,r)=>(sh(!0),p_(e[on],i));function pl(n){return lp("",n,""),pl}function lp(n,e,t){let i=kt(),r=K0(i,n,e,t);return r!==nr&&b0(i,Kc(),r),lp}var qn=class{},zc=class{};var xo=class extends qn{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new vo(this);let r=qy(e);this._bootstrapComponents=a_(r.bootstrap),this._r3Injector=wh(e,t,[{provide:qn,useValue:this},{provide:Po,useValue:this.componentFactoryResolver},...i],Ut(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Gc=class extends zc{constructor(e){super(),this.moduleType=e}create(e){return new xo(this.moduleType,e,[])}};function rx(n,e,t){return new xo(n,e,t)}var Wc=class extends qn{constructor(e){super(),this.componentFactoryResolver=new vo(this),this.instance=null;let t=new mo([...e.providers,{provide:qn,useValue:this},{provide:Po,useValue:this.componentFactoryResolver}],e.parent||tl(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function sx(n,e,t=null){return new Wc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var ox=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=Mh(!1,i.type),s=r.length>0?sx([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=ut({token:e,providedIn:"environment",factory:()=>new e(qe(Mi))});let n=e;return n})();function up(n){ip("NgStandalone"),n.getStandaloneInjector=e=>e.get(ox).getOrCreateStandaloneInjector(n)}function fs(n,e,t){let i=Yf()+n,r=kt();return r[i]===nr?ap(r,i,t?e.call(t):e()):J0(r,i)}function ml(n,e,t,i){return cx(kt(),Yf(),n,e,t,i)}function ax(n,e){let t=n[e];return t===nr?void 0:t}function cx(n,e,t,i,r,s){let o=e+t;return dl(n,o,r)?ap(n,o+1,s?i.call(s,r):i(r)):ax(n,o+1)}var so=null;function lx(n){so!==null&&(n.defaultEncapsulation!==so.defaultEncapsulation||n.preserveWhitespaces!==so.preserveWhitespaces)||(so=n)}var ux=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Wr(!1)}add(){this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ut({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var dx=new Ke("compilerOptions");var gl=new Ke(""),hs=new Ke(""),Lo=(()=>{let e=class e{constructor(i,r,s){this._ngZone=i,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,yl||(fx(s),s.addToWindow(r)),this._watchAngularEvents(),i.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{lt.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&this._pendingCount===0&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let i=this._callbacks.pop();clearTimeout(i.timeoutId),i.doneCb(this._didWork)}this._didWork=!1});else{let i=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>r.updateCb&&r.updateCb(i)?(clearTimeout(r.timeoutId),!1):!0),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(i=>({source:i.source,creationLocation:i.creationLocation,data:i.data})):[]}addCallback(i,r,s){let o=-1;r&&r>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(a=>a.timeoutId!==o),i(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:i,timeoutId:o,updateCb:s})}whenStable(i,r,s){if(s&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(i,r,s),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(i){this.registry.registerApplication(i,this)}unregisterApplication(i){this.registry.unregisterApplication(i)}findProviders(i,r,s){return[]}};e.\u0275fac=function(r){return new(r||e)(qe(lt),qe(Oo),qe(hs))},e.\u0275prov=ut({token:e,factory:e.\u0275fac});let n=e;return n})(),Oo=(()=>{let e=class e{constructor(){this._applications=new Map}registerApplication(i,r){this._applications.set(i,r)}unregisterApplication(i){this._applications.delete(i)}unregisterAllApplications(){this._applications.clear()}getTestability(i){return this._applications.get(i)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(i,r=!0){return yl?.findTestabilityInTree(this,i,r)??null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ut({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();function fx(n){yl=n}var yl,hx=new Ke("Application Initializer"),dp=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=Pt(hx,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(fl(o))i.push(o);else if(cp(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ut({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),px=new Ke("appBootstrapListener");function mx(n,e,t){let i=new Gc(t);return Promise.resolve(i)}function gx(){pd(()=>{throw new Xe(600,!1)})}function yx(n){return n.isBoundToModule}function vx(n,e,t){try{let i=t();return fl(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}function fp(n,e){return Array.isArray(e)?e.reduce(fp,n):gn(gn({},n),e)}var Fo=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=Pt(Vh),this.zoneIsStable=Pt(rp),this.componentTypes=[],this.components=[],this.isStable=Pt(ux).hasPendingTasks.pipe(sc(i=>i?Qa(!1):this.zoneIsStable),nc()),this._injector=Pt(Mi)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof go;if(!this._injector.get(dp).done){let g="Cannot bootstrap as there are still asynchronous initializers running."+(!s&&$y(i)?"":" Bootstrap components in the `ngDoBootstrap` method of the root module.");throw new Xe(405,!1)}let a;s?a=i:a=this._injector.get(Po).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=yx(a)?void 0:this._injector.get(qn),l=r||a.selector,u=a.create(er.NULL,[],l,c),d=u.location.nativeElement,f=u.injector.get(gl,null);return f?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),lo(this.components,u),f?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new Xe(101,!1);try{this._runningTick=!0;for(let i of this._views)i.detectChanges()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1}}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;lo(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(px,[]);[...this._bootstrapListeners,...r].forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>lo(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new Xe(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ut({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function lo(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function _f(n){for(let e=n.length-1;e>=0;e--)if(n[e]!==void 0)return n[e]}var _x=(()=>{let e=class e{constructor(){this.zone=Pt(lt),this.applicationRef=Pt(Fo)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ut({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function xx(n){return[{provide:lt,useFactory:n},{provide:Co,multi:!0,useFactory:()=>{let e=Pt(_x,{optional:!0});return()=>e.initialize()}},{provide:Vh,useFactory:Mx},{provide:rp,useFactory:sp}]}function Mx(){let n=Pt(lt),e=Pt(Tn);return t=>n.runOutsideAngular(()=>e.handleError(t))}function Ex(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}function bx(){return typeof $localize<"u"&&$localize.locale||_o}var vl=new Ke("LocaleId",{providedIn:"root",factory:()=>Pt(vl,je.Optional|je.SkipSelf)||bx()});var hp=new Ke("PlatformDestroyListeners"),pp=(()=>{let e=class e{constructor(i){this._injector=i,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(i,r){let s=k0(r?.ngZone,Ex({eventCoalescing:r?.ngZoneEventCoalescing,runCoalescing:r?.ngZoneRunCoalescing}));return s.run(()=>{let o=rx(i.moduleType,this.injector,xx(()=>s)),a=o.injector.get(Tn,null);return s.runOutsideAngular(()=>{let c=s.onError.subscribe({next:l=>{a.handleError(l)}});o.onDestroy(()=>{lo(this._modules,o),c.unsubscribe()})}),vx(a,s,()=>{let c=o.injector.get(dp);return c.runInitializers(),c.donePromise.then(()=>{let l=o.injector.get(vl,_o);return nx(l||_o),this._moduleDoBootstrap(o),o})})})}bootstrapModule(i,r=[]){let s=fp({},r);return mx(this.injector,s,i).then(o=>this.bootstrapModuleFactory(o,s))}_moduleDoBootstrap(i){let r=i.injector.get(Fo);if(i._bootstrapComponents.length>0)i._bootstrapComponents.forEach(s=>r.bootstrap(s));else if(i.instance.ngDoBootstrap)i.instance.ngDoBootstrap(r);else throw new Xe(-403,!1);this._modules.push(i)}onDestroy(i){this._destroyListeners.push(i)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Xe(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());let i=this._injector.get(hp,null);i&&(i.forEach(r=>r()),i.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}};e.\u0275fac=function(r){return new(r||e)(qe(er))},e.\u0275prov=ut({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})(),Xr=null,mp=new Ke("AllowMultipleToken");function wx(n){if(Xr&&!Xr.get(mp,!1))throw new Xe(400,!1);gx(),Xr=n;let e=n.get(pp);return Ax(n),e}function _l(n,e,t=[]){let i=`Platform: ${e}`,r=new Ke(i);return(s=[])=>{let o=gp();if(!o||o.injector.get(mp,!1)){let a=[...t,...s,{provide:r,useValue:!0}];n?n(a):wx(Sx(a,i))}return Tx(r)}}function Sx(n=[],e){return er.create({name:e,providers:[{provide:Do,useValue:"platform"},{provide:hp,useValue:new Set([()=>Xr=null])},...n]})}function Tx(n){let e=gp();if(!e)throw new Xe(401,!1);return e}function gp(){return Xr?.get(pp)??null}function Ax(n){n.get(nl,null)?.forEach(t=>t())}var yp=_l(null,"core",[]),vp=(()=>{let e=class e{constructor(i){}};e.\u0275fac=function(r){return new(r||e)(qe(Fo))},e.\u0275mod=Cn({type:e}),e.\u0275inj=An({});let n=e;return n})();var xl=null;function Bo(){return xl}function _p(n){xl||(xl=n)}var Uo=class{},Jn=new Ke("DocumentToken");function xp(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Mp=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Cn({type:e}),e.\u0275inj=An({});let n=e;return n})(),Ep="browser",Ix="server";function Ml(n){return n===Ix}var ko=class{};var wl=class extends Uo{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Sl=class n extends wl{static makeCurrent(){_p(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=Px();return t==null?null:Nx(t)}resetBaseElement(){ps=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return xp(document.cookie,e)}},ps=null;function Px(){return ps=ps||document.querySelector("base"),ps?ps.getAttribute("href"):null}function Nx(n){return new URL(n,document.baseURI).pathname}var Tl=class{addToWindow(e){Gt.getAngularTestability=(i,r=!0)=>{let s=e.findTestabilityInTree(i,r);if(s==null)throw new Xe(5103,!1);return s},Gt.getAllAngularTestabilities=()=>e.getAllTestabilities(),Gt.getAllAngularRootElements=()=>e.getAllRootElements();let t=i=>{let r=Gt.getAllAngularTestabilities(),s=r.length,o=!1,a=function(c){o=o||c,s--,s==0&&i(o)};r.forEach(c=>{c.whenStable(a)})};Gt.frameworkStabilizers||(Gt.frameworkStabilizers=[]),Gt.frameworkStabilizers.push(t)}findTestabilityInTree(e,t,i){if(t==null)return null;let r=e.getTestability(t);return r??(i?Bo().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null)}},Lx=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ut({token:e,factory:e.\u0275fac});let n=e;return n})(),Al=new Ke("EventManagerPlugins"),Tp=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new Xe(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(qe(Al),qe(lt))},e.\u0275prov=ut({token:e,factory:e.\u0275fac});let n=e;return n})(),Vo=class{constructor(e){this._doc=e}},El="ng-app-id",Ap=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Ml(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${El}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(El),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(El,this.appId),i.appendChild(a),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(qe(Jn),qe(Io),qe(il,8),qe(tr))},e.\u0275prov=ut({token:e,factory:e.\u0275fac});let n=e;return n})(),bl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Dl=/%COMP%/g,Cp="%COMP%",Ox=`_nghost-${Cp}`,Fx=`_ngcontent-${Cp}`,Ux=!0,kx=new Ke("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>Ux});function Bx(n){return Fx.replace(Dl,n)}function Vx(n){return Ox.replace(Dl,n)}function Dp(n,e){return e.map(t=>t.replace(Dl,n))}var bp=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=Ml(c),this.defaultRenderer=new ms(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===xn.ShadowDom&&(r=di(gn({},r),{encapsulation:xn.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof Ho?s.applyToHost(i):s instanceof gs&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.platformIsServer;switch(r.encapsulation){case xn.Emulated:o=new Ho(l,u,r,this.appId,d,a,c,f);break;case xn.ShadowDom:return new Cl(l,u,i,r,a,c,this.nonce,f);default:o=new gs(l,u,r,d,a,c,f);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(qe(Tp),qe(Ap),qe(Io),qe(kx),qe(Jn),qe(tr),qe(lt),qe(il))},e.\u0275prov=ut({token:e,factory:e.\u0275fac});let n=e;return n})(),ms=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(bl[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(wp(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(wp(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Xe(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=bl[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=bl[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(bi.DashCase|bi.Important)?e.style.setProperty(t,i,r&bi.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&bi.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Bo().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function wp(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Cl=class extends ms{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=Dp(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},gs=class extends ms{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?Dp(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Ho=class extends gs{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=Bx(l),this.hostAttr=Vx(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},Hx=(()=>{let e=class e extends Vo{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(qe(Jn))},e.\u0275prov=ut({token:e,factory:e.\u0275fac});let n=e;return n})(),Sp=["alt","control","meta","shift"],zx={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Gx={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Wx=(()=>{let e=class e extends Vo{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Bo().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),Sp.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=zx[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),Sp.forEach(a=>{if(a!==s){let c=Gx[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(qe(Jn))},e.\u0275prov=ut({token:e,factory:e.\u0275fac});let n=e;return n})();function jx(){Sl.makeCurrent()}function $x(){return new Tn}function qx(){return Sh(document),document}var Xx=[{provide:tr,useValue:Ep},{provide:nl,useValue:jx,multi:!0},{provide:Jn,useFactory:qx,deps:[]}],Ip=_l(yp,"browser",Xx),Yx=new Ke(""),Zx=[{provide:hs,useClass:Tl,deps:[]},{provide:gl,useClass:Lo,deps:[lt,Oo,hs]},{provide:Lo,useClass:Lo,deps:[lt,Oo,hs]}],Jx=[{provide:Do,useValue:"root"},{provide:Tn,useFactory:$x,deps:[]},{provide:Al,useClass:Hx,multi:!0,deps:[Jn,lt,tr]},{provide:Al,useClass:Wx,multi:!0,deps:[Jn]},bp,Ap,Tp,{provide:is,useExisting:bp},{provide:ko,useClass:Lx,deps:[]},[]],Rp=(()=>{let e=class e{constructor(i){}static withServerTransition(i){return{ngModule:e,providers:[{provide:Io,useValue:i.appId}]}}};e.\u0275fac=function(r){return new(r||e)(qe(Yx,12))},e.\u0275mod=Cn({type:e}),e.\u0275inj=An({providers:[...Jx,...Zx],imports:[Mp,vp]});let n=e;return n})();var ju="159",Bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qx=0,Pp=1,eM=2;var sg=1,tM=2,On=3,ci=0,Bt=1,Fn=2;var si=0,Ar=1,Np=2,Lp=3,Op=4,nM=5,Di=100,iM=101,rM=102,Fp=103,Up=104,sM=200,oM=201,aM=202,cM=203,au=204,cu=205,lM=206,uM=207,dM=208,fM=209,hM=210,pM=211,mM=212,gM=213,yM=214,vM=0,_M=1,xM=2,da=3,MM=4,EM=5,bM=6,wM=7,$u=0,SM=1,TM=2,oi=0,AM=1,CM=2,DM=3,IM=4,RM=5;var kp=300,Ir=301,Rr=302,lu=303,uu=304,Na=306,du=1e3,dn=1001,fu=1002,Ot=1003,Bp=1004;var Il=1005;var Jt=1006,PM=1007;var As=1008;var ai=1009,NM=1010,LM=1011,qu=1012,og=1013,ii=1014,ri=1015,Cs=1016,ag=1017,cg=1018,Ri=1020,OM=1021,fn=1023,FM=1024,UM=1025,Pi=1026,Pr=1027,kM=1028,lg=1029,BM=1030,ug=1031,dg=1033,Rl=33776,Pl=33777,Nl=33778,Ll=33779,Vp=35840,Hp=35841,zp=35842,Gp=35843,fg=36196,Wp=37492,jp=37496,$p=37808,qp=37809,Xp=37810,Yp=37811,Zp=37812,Jp=37813,Kp=37814,Qp=37815,em=37816,tm=37817,nm=37818,im=37819,rm=37820,sm=37821,Ol=36492,om=36494,am=36495,VM=36283,cm=36284,lm=36285,um=36286;var fa=2300,ha=2301,Fl=2302,dm=2400,fm=2401,hm=2402;var hg=3e3,Ni=3001,HM=3200,zM=3201,pg=0,GM=1,Kt="",wt="srgb",kn="srgb-linear",Xu="display-p3",La="display-p3-linear",pa="linear",it="srgb",ma="rec709",ga="p3";var ar=7680;var pm=519,WM=512,jM=513,$M=514,mg=515,qM=516,XM=517,YM=518,ZM=519,mm=35044;var gm="300 es",hu=1035,Un=2e3,ya=2001,En=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ym=1234567,bs=Math.PI/180,Ds=180/Math.PI;function Ur(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function Yu(n,e){return(n%e+e)%e}function JM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function KM(n,e,t){return n!==e?(t-n)/(e-n):0}function ws(n,e,t){return(1-t)*n+t*e}function QM(n,e,t,i){return ws(n,e,1-Math.exp(-t*i))}function eE(n,e=1){return e-Math.abs(Yu(n,e*2)-e)}function tE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function nE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function iE(n,e){return n+Math.floor(Math.random()*(e-n+1))}function rE(n,e){return n+Math.random()*(e-n)}function sE(n){return n*(.5-Math.random())}function oE(n){n!==void 0&&(ym=n);let e=ym+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aE(n){return n*bs}function cE(n){return n*Ds}function pu(n){return(n&n-1)===0&&n!==0}function lE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function va(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function uE(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function br(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var gg={DEG2RAD:bs,RAD2DEG:Ds,generateUUID:Ur,clamp:Ct,euclideanModulo:Yu,mapLinear:JM,inverseLerp:KM,lerp:ws,damp:QM,pingpong:eE,smoothstep:tE,smootherstep:nE,randInt:iE,randFloat:rE,randFloatSpread:sE,seededRandom:oE,degToRad:aE,radToDeg:cE,isPowerOfTwo:pu,ceilPowerOfTwo:lE,floorPowerOfTwo:va,setQuaternionFromProperEuler:uE,normalize:Nt,denormalize:br},Ie=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],y=r[0],m=r[3],h=r[6],b=r[1],x=r[4],D=r[7],w=r[2],A=r[5],T=r[8];return s[0]=o*y+a*b+c*w,s[3]=o*m+a*x+c*A,s[6]=o*h+a*D+c*T,s[1]=l*y+u*b+d*w,s[4]=l*m+u*x+d*A,s[7]=l*h+u*D+d*T,s[2]=f*y+p*b+g*w,s[5]=f*m+p*x+g*A,s[8]=f*h+p*D+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,p=l*s-o*c,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ul.makeScale(e,t)),this}rotate(e){return this.premultiply(Ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ul=new We;function yg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dE(){let n=_a("canvas");return n.style.display="block",n}var vm={};function Ss(n){n in vm||(vm[n]=!0,console.warn(n))}var _m=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xm=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zo={[kn]:{transfer:pa,primaries:ma,toReference:n=>n,fromReference:n=>n},[wt]:{transfer:it,primaries:ma,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[La]:{transfer:pa,primaries:ga,toReference:n=>n.applyMatrix3(xm),fromReference:n=>n.applyMatrix3(_m)},[Xu]:{transfer:it,primaries:ga,toReference:n=>n.convertSRGBToLinear().applyMatrix3(xm),fromReference:n=>n.applyMatrix3(_m).convertLinearToSRGB()}},fE=new Set([kn,La]),Qe={enabled:!0,_workingColorSpace:kn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=zo[e].toReference,r=zo[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return zo[n].primaries},getTransfer:function(n){return n===Kt?pa:zo[n].transfer}};function Cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var cr,xa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cr===void 0&&(cr=_a("canvas")),cr.width=e.width,cr.height=e.height;let i=cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_a("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cr(t[i]/255)*255):t[i]=Cr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hE=0,Ma=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bl(r[o].image)):s.push(Bl(r[o]))}else s=Bl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Bl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pE=0,kr=(()=>{class n extends En{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=dn,s=dn,o=Jt,a=As,c=fn,l=ai,u=n.DEFAULT_ANISOTROPY,d=Kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Ur(),this.name="",this.source=new Ma(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ni?wt:Kt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case du:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case fu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case du:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case fu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wt?Ni:hg}set encoding(t){Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ni?wt:Kt}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=kp,n.DEFAULT_ANISOTROPY=1,n})(),rt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],y=c[2],m=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,D=(p+1)/2,w=(h+1)/2,A=(u+f)/4,T=(d+y)/4,H=(g+m)/4;return x>D&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=T/i):D>w?D<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(D),i=A/r,s=H/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=T/s,r=H/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-y)/b,this.z=(f-u)/b,this.w=Math.acos((l+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mu=class extends En{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ss("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ni?wt:Kt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new kr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ma(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends mu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ea=class extends kr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gu=class extends kr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==f||l!==p||u!==g){let m=1-a,h=c*f+l*p+u*g+d*y,b=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){let w=Math.sqrt(x),A=Math.atan2(w,h*b);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}let D=a*b;if(c=c*m+f*D,l=l*m+p*D,u=u*m+g*D,d=d*m+y*D,m===1-a){let w=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=w,l*=w,u*=w,d*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*p-l*f,e[t+1]=c*g+u*f+l*d-a*p,e[t+2]=l*g+u*p+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vl.copy(this).projectOnVector(e),this.sub(Vl)}reflect(e){return this.sub(Vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vl=new P,Mm=new hn,Li=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(s,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Go.copy(i.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),Wo.subVectors(this.max,ys),lr.subVectors(e.a,ys),ur.subVectors(e.b,ys),dr.subVectors(e.c,ys),Kn.subVectors(ur,lr),Qn.subVectors(dr,ur),wi.subVectors(lr,dr);let t=[0,-Kn.z,Kn.y,0,-Qn.z,Qn.y,0,-wi.z,wi.y,Kn.z,0,-Kn.x,Qn.z,0,-Qn.x,wi.z,0,-wi.x,-Kn.y,Kn.x,0,-Qn.y,Qn.x,0,-wi.y,wi.x,0];return!Hl(t,lr,ur,dr,Wo)||(t=[1,0,0,0,1,0,0,0,1],!Hl(t,lr,ur,dr,Wo))?!1:(jo.crossVectors(Kn,Qn),t=[jo.x,jo.y,jo.z],Hl(t,lr,ur,dr,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Dn=[new P,new P,new P,new P,new P,new P,new P,new P],an=new P,Go=new Li,lr=new P,ur=new P,dr=new P,Kn=new P,Qn=new P,wi=new P,ys=new P,Wo=new P,jo=new P,Si=new P;function Hl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Si.fromArray(n,s);let a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),c=e.dot(Si),l=t.dot(Si),u=i.dot(Si);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var mE=new Li,vs=new P,zl=new P,Is=class{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):mE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);let t=vs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(vs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(zl)),this.expandByPoint(vs.copy(e.center).sub(zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},In=new P,Gl=new P,$o=new P,ei=new P,Wl=new P,qo=new P,jl=new P,Rs=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gl.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Gl);let s=e.distanceTo(t)*.5,o=-this.direction.dot($o),a=ei.dot(this.direction),c=-ei.dot($o),l=ei.lengthSq(),u=Math.abs(1-o*o),d,f,p,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Gl).addScaledVector($o,f),p}intersectSphere(e,t){In.subVectors(e.center,this.origin);let i=In.dot(this.direction),r=In.dot(In)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,i,r,s){Wl.subVectors(t,e),qo.subVectors(i,e),jl.crossVectors(Wl,qo);let o=this.direction.dot(jl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);let c=a*this.direction.dot(qo.crossVectors(ei,qo));if(c<0)return null;let l=a*this.direction.dot(Wl.cross(ei));if(l<0||c+l>o)return null;let u=-a*ei.dot(jl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,p,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,p,g,y,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,p,g,y,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/fr.setFromMatrixColumn(e,0).length(),s=1/fr.setFromMatrixColumn(e,1).length(),o=1/fr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,p=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,p=c*d,g=l*u,y=l*d;t[0]=f+y*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,p=c*d,g=l*u,y=l*d;t[0]=f-y*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,p=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gE,e,yE)}lookAt(e,t,i){let r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ti.crossVectors(i,jt),ti.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ti.crossVectors(i,jt)),ti.normalize(),Xo.crossVectors(jt,ti),r[0]=ti.x,r[4]=Xo.x,r[8]=jt.x,r[1]=ti.y,r[5]=Xo.y,r[9]=jt.y,r[2]=ti.z,r[6]=Xo.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],y=i[6],m=i[10],h=i[14],b=i[3],x=i[7],D=i[11],w=i[15],A=r[0],T=r[4],H=r[8],_=r[12],S=r[1],k=r[5],$=r[9],ee=r[13],R=r[2],B=r[6],j=r[10],W=r[14],J=r[3],q=r[7],K=r[11],te=r[15];return s[0]=o*A+a*S+c*R+l*J,s[4]=o*T+a*k+c*B+l*q,s[8]=o*H+a*$+c*j+l*K,s[12]=o*_+a*ee+c*W+l*te,s[1]=u*A+d*S+f*R+p*J,s[5]=u*T+d*k+f*B+p*q,s[9]=u*H+d*$+f*j+p*K,s[13]=u*_+d*ee+f*W+p*te,s[2]=g*A+y*S+m*R+h*J,s[6]=g*T+y*k+m*B+h*q,s[10]=g*H+y*$+m*j+h*K,s[14]=g*_+y*ee+m*W+h*te,s[3]=b*A+x*S+D*R+w*J,s[7]=b*T+x*k+D*B+w*q,s[11]=b*H+x*$+D*j+w*K,s[15]=b*_+x*ee+D*W+w*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],y=e[7],m=e[11],h=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*p-i*c*p)+y*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+m*(+t*l*d-t*a*p-s*o*d+i*o*p+s*a*u-i*l*u)+h*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],y=e[13],m=e[14],h=e[15],b=d*m*l-y*f*l+y*c*p-a*m*p-d*c*h+a*f*h,x=g*f*l-u*m*l-g*c*p+o*m*p+u*c*h-o*f*h,D=u*y*l-g*d*l+g*a*p-o*y*p-u*a*h+o*d*h,w=g*d*c-u*y*c-g*a*f+o*y*f+u*a*m-o*d*m,A=t*b+i*x+r*D+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=b*T,e[1]=(y*f*s-d*m*s-y*r*p+i*m*p+d*r*h-i*f*h)*T,e[2]=(a*m*s-y*c*s+y*r*l-i*m*l-a*r*h+i*c*h)*T,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*p-i*c*p)*T,e[4]=x*T,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*h+t*f*h)*T,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*h-t*c*h)*T,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*p+t*c*p)*T,e[8]=D*T,e[9]=(g*d*s-u*y*s-g*i*p+t*y*p+u*i*h-t*d*h)*T,e[10]=(o*y*s-g*a*s+g*i*l-t*y*l-o*i*h+t*a*h)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*p-t*a*p)*T,e[12]=w*T,e[13]=(u*y*r-g*d*r+g*i*f-t*y*f-u*i*m+t*d*m)*T,e[14]=(g*a*r-o*y*r-g*i*c+t*y*c+o*i*m-t*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,p=s*u,g=s*d,y=o*u,m=o*d,h=a*d,b=c*l,x=c*u,D=c*d,w=i.x,A=i.y,T=i.z;return r[0]=(1-(y+h))*w,r[1]=(p+D)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(p-D)*A,r[5]=(1-(f+h))*A,r[6]=(m+b)*A,r[7]=0,r[8]=(g+x)*T,r[9]=(m-b)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=fr.set(r[0],r[1],r[2]).length(),o=fr.set(r[4],r[5],r[6]).length(),a=fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);let l=1/s,u=1/o,d=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,t.setFromRotationMatrix(cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Un){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),p,g;if(a===Un)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ya)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Un){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,p=(i+r)*u,g,y;if(a===Un)g=(o+s)*d,y=-2*d;else if(a===ya)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},fr=new P,cn=new ft,gE=new P(0,0,0),yE=new P(1,1,1),ti=new P,Xo=new P,jt=new P,Em=new ft,bm=new hn,vE=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],p=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Em.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Em,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return bm.setFromEuler(this),this.setFromQuaternion(bm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_E=0,wm=new P,hr=new hn,Rn=new ft,Yo=new P,_s=new P,xE=new P,ME=new hn,Sm=new P(1,0,0),Tm=new P(0,1,0),Am=new P(0,0,1),EE={type:"added"},bE={type:"removed"},Hn=(()=>{class n extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,i=new vE,r=new hn,s=new P(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new We}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(Sm,t)}rotateY(t){return this.rotateOnAxis(Tm,t)}rotateZ(t){return this.rotateOnAxis(Am,t)}translateOnAxis(t,i){return wm.copy(t).applyQuaternion(this.quaternion),this.position.add(wm.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Sm,t)}translateY(t){return this.translateOnAxis(Tm,t)}translateZ(t){return this.translateOnAxis(Am,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Yo.copy(t):Yo.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(_s,Yo,this.up):Rn.lookAt(Yo,_s,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Rn),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(EE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(bE)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,xE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,ME,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let o=i[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),p=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new P(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),ln=new P,Pn=new P,$l=new P,Nn=new P,pr=new P,mr=new P,Cm=new P,ql=new P,Xl=new P,Yl=new P,Zo=!1,wr=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ln.subVectors(e,t),r.cross(ln);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ln.subVectors(r,t),Pn.subVectors(i,t),$l.subVectors(e,t);let o=ln.dot(ln),a=ln.dot(Pn),c=ln.dot($l),l=Pn.dot(Pn),u=Pn.dot($l),d=o*l-a*a;if(d===0)return s.set(-2,-1,-1);let f=1/d,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nn),Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getUV(e,t,i,r,s,o,a,c){return Zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zo=!0),this.getInterpolation(e,t,i,r,s,o,a,c)}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Nn),c.setScalar(0),c.addScaledVector(s,Nn.x),c.addScaledVector(o,Nn.y),c.addScaledVector(a,Nn.z),c}static isFrontFacing(e,t,i,r){return ln.subVectors(i,t),Pn.subVectors(e,t),ln.cross(Pn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),ln.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zo=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;pr.subVectors(r,i),mr.subVectors(s,i),ql.subVectors(e,i);let c=pr.dot(ql),l=mr.dot(ql);if(c<=0&&l<=0)return t.copy(i);Xl.subVectors(e,r);let u=pr.dot(Xl),d=mr.dot(Xl);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(pr,o);Yl.subVectors(e,s);let p=pr.dot(Yl),g=mr.dot(Yl);if(g>=0&&p<=g)return t.copy(s);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(mr,a);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Cm.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(Cm,a);let h=1/(m+y+f);return o=y*h,a=f*h,t.copy(i).addScaledVector(pr,o).addScaledVector(mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Zl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=Yu(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Zl(o,s,e+1/3),this.g=Zl(o,s,e),this.b=Zl(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let i=vg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=kl(e.r),this.g=kl(e.g),this.b=kl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Qe.fromWorkingColorSpace(At.copy(this),e),Math.round(Ct(At.r*255,0,255))*65536+Math.round(Ct(At.g*255,0,255))*256+Math.round(Ct(At.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(At.copy(this),t);let i=At.r,r=At.g,s=At.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=wt){Qe.fromWorkingColorSpace(At.copy(this),e);let t=At.r,i=At.g,r=At.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Jo);let i=ws(ni.h,Jo.h,t),r=ws(ni.s,Jo.s,t),s=ws(ni.l,Jo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},At=new Be;Be.NAMES=vg;var wE=0,Oi=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=Ar,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=au,this.blendDst=cu,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==au&&(i.blendSrc=this.blendSrc),this.blendDst!==cu&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==da&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wa=class extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ht=new P,Ko=new Ie,Dt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=mm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ko.fromBufferAttribute(this,t),Ko.applyMatrix3(e),this.setXY(t,Ko.x,Ko.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=br(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=br(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=br(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=br(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mm&&(e.usage=this.usage),e}};var Sa=class extends Dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ta=class extends Dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var en=class extends Dt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var SE=0,Zt=new ft,Jl=new Hn,gr=new P,$t=new Li,xs=new Li,Mt=new P,bn=class n extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yg(e)?Ta:Sa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return Jl.lookAt(e),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new en(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors($t.min,xs.min),$t.expandByPoint(Mt),Mt.addVectors($t.max,xs.max),$t.expandByPoint(Mt)):($t.expandByPoint(xs.min),$t.expandByPoint(xs.max))}$t.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Mt.fromBufferAttribute(a,l),c&&(gr.fromBufferAttribute(e,l),Mt.add(gr)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let S=0;S<a;S++)l[S]=new P,u[S]=new P;let d=new P,f=new P,p=new P,g=new Ie,y=new Ie,m=new Ie,h=new P,b=new P;function x(S,k,$){d.fromArray(r,S*3),f.fromArray(r,k*3),p.fromArray(r,$*3),g.fromArray(o,S*2),y.fromArray(o,k*2),m.fromArray(o,$*2),f.sub(d),p.sub(d),y.sub(g),m.sub(g);let ee=1/(y.x*m.y-m.x*y.y);isFinite(ee)&&(h.copy(f).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(ee),b.copy(p).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(ee),l[S].add(h),l[k].add(h),l[$].add(h),u[S].add(b),u[k].add(b),u[$].add(b))}let D=this.groups;D.length===0&&(D=[{start:0,count:i.length}]);for(let S=0,k=D.length;S<k;++S){let $=D[S],ee=$.start,R=$.count;for(let B=ee,j=ee+R;B<j;B+=3)x(i[B+0],i[B+1],i[B+2])}let w=new P,A=new P,T=new P,H=new P;function _(S){T.fromArray(s,S*3),H.copy(T);let k=l[S];w.copy(k),w.sub(T.multiplyScalar(T.dot(k))).normalize(),A.crossVectors(H,k);let ee=A.dot(u[S])<0?-1:1;c[S*4]=w.x,c[S*4+1]=w.y,c[S*4+2]=w.z,c[S*4+3]=ee}for(let S=0,k=D.length;S<k;++S){let $=D[S],ee=$.start,R=$.count;for(let B=ee,j=ee+R;B<j;B+=3)_(i[B+0]),_(i[B+1]),_(i[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,d=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*u;for(let h=0;h<u;h++)f[g++]=l[p++]}return new Dt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dm=new ft,Ti=new Rs,Qo=new Is,Im=new P,yr=new P,vr=new P,_r=new P,Kl=new P,ea=new P,ta=new Ie,na=new Ie,ia=new Ie,Rm=new P,Pm=new P,Nm=new P,ra=new P,sa=new P,Qt=class extends Hn{constructor(e=new bn,t=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ea.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Kl.fromBufferAttribute(d,e),o?ea.addScaledVector(Kl,u):ea.addScaledVector(Kl.sub(t),u))}t.add(ea)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(Qo.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Qo,Im)===null||Ti.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Dm.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(Dm),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],h=o[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let D=b,w=x;D<w;D+=3){let A=a.getX(D),T=a.getX(D+1),H=a.getX(D+2);r=oa(this,h,e,i,l,u,d,A,T,H),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){let b=a.getX(m),x=a.getX(m+1),D=a.getX(m+2);r=oa(this,o,e,i,l,u,d,b,x,D),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],h=o[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let D=b,w=x;D<w;D+=3){let A=D,T=D+1,H=D+2;r=oa(this,h,e,i,l,u,d,A,T,H),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){let b=m,x=m+1,D=m+2;r=oa(this,o,e,i,l,u,d,b,x,D),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function TE(n,e,t,i,r,s,o,a){let c;if(e.side===Bt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===ci,a),c===null)return null;sa.copy(a),sa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(sa);return l<t.near||l>t.far?null:{distance:l,point:sa.clone(),object:n}}function oa(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,yr),n.getVertexPosition(c,vr),n.getVertexPosition(l,_r);let u=TE(n,e,t,i,yr,vr,_r,ra);if(u){r&&(ta.fromBufferAttribute(r,a),na.fromBufferAttribute(r,c),ia.fromBufferAttribute(r,l),u.uv=wr.getInterpolation(ra,yr,vr,_r,ta,na,ia,new Ie)),s&&(ta.fromBufferAttribute(s,a),na.fromBufferAttribute(s,c),ia.fromBufferAttribute(s,l),u.uv1=wr.getInterpolation(ra,yr,vr,_r,ta,na,ia,new Ie),u.uv2=u.uv1),o&&(Rm.fromBufferAttribute(o,a),Pm.fromBufferAttribute(o,c),Nm.fromBufferAttribute(o,l),u.normal=wr.getInterpolation(ra,yr,vr,_r,Rm,Pm,Nm,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new P,materialIndex:0};wr.getNormal(yr,vr,_r,d.normal),u.face=d}return u}var Ps=class n extends bn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(d,2));function g(y,m,h,b,x,D,w,A,T,H,_){let S=D/T,k=w/H,$=D/2,ee=w/2,R=A/2,B=T+1,j=H+1,W=0,J=0,q=new P;for(let K=0;K<j;K++){let te=K*k-ee;for(let fe=0;fe<B;fe++){let z=fe*S-$;q[y]=z*b,q[m]=te*x,q[h]=R,l.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[h]=A>0?1:-1,u.push(q.x,q.y,q.z),d.push(fe/T),d.push(1-K/H),W+=1}}for(let K=0;K<H;K++)for(let te=0;te<T;te++){let fe=f+te+B*K,z=f+te+B*(K+1),Y=f+(te+1)+B*(K+1),ue=f+(te+1)+B*K;c.push(fe,z,ue),c.push(z,Y,ue),J+=6}a.addGroup(p,J,_),p+=J,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Nr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){let e={};for(let t=0;t<n.length;t++){let i=Nr(n[t]);for(let r in i)e[r]=i[r]}return e}function AE(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _g(n){return n.getRenderTarget()===null?n.outputColorSpace:Qe.workingColorSpace}var CE={clone:Nr,merge:Lt},DE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DE,this.fragmentShader=IE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=AE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Aa=class extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Et=class extends Aa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xr=-90,Mr=1,yu=class extends Hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Et(xr,Mr,e,t);r.layers=this.layers,this.add(r);let s=new Et(xr,Mr,e,t);s.layers=this.layers,this.add(s);let o=new Et(xr,Mr,e,t);o.layers=this.layers,this.add(o);let a=new Et(xr,Mr,e,t);a.layers=this.layers,this.add(a);let c=new Et(xr,Mr,e,t);c.layers=this.layers,this.add(c);let l=new Et(xr,Mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ca=class extends kr{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ir,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vu=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ss("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ni?wt:Kt),this.texture=new Ca(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ps(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:Nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:si});s.uniforms.tEquirect.value=t;let o=new Qt(r,s),a=t.minFilter;return t.minFilter===As&&(t.minFilter=Jt),new yu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Ql=new P,RE=new P,PE=new We,un=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Ql.subVectors(i,t).cross(RE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ql),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||PE.getNormalMatrix(e),r=this.coplanarPoint(Ql).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new Is,aa=new P,Ns=class{constructor(e=new un,t=new un,i=new un,r=new un,s=new un,o=new un){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],y=r[10],m=r[11],h=r[12],b=r[13],x=r[14],D=r[15];if(i[0].setComponents(c-s,f-l,m-p,D-h).normalize(),i[1].setComponents(c+s,f+l,m+p,D+h).normalize(),i[2].setComponents(c+o,f+u,m+g,D+b).normalize(),i[3].setComponents(c-o,f-u,m-g,D-b).normalize(),i[4].setComponents(c-a,f-d,m-y,D-x).normalize(),t===Un)i[5].setComponents(c+a,f+d,m+y,D+x).normalize();else if(t===ya)i[5].setComponents(a,d,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(aa.x=r.normal.x>0?e.max.x:e.min.x,aa.y=r.normal.y>0?e.max.y:e.min.y,aa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function NE(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,u){let d=l.array,f=l.usage,p=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,f),l.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:p}}function s(l,u,d){let f=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,l),p.count===-1&&g.length===0&&n.bufferSubData(d,0,f),g.length!==0){for(let y=0,m=g.length;y<m;y++){let h=g[y];t?n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=i.get(l);if(d===void 0)i.set(l,r(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,u),d.version=l.version}}return{get:o,remove:a,update:c}}var _u=class n extends bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,p=[],g=[],y=[],m=[];for(let h=0;h<u;h++){let b=h*f-o;for(let x=0;x<l;x++){let D=x*d-s;g.push(D,-b,0),y.push(0,0,1),m.push(x/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<a;b++){let x=b+l*h,D=b+l*(h+1),w=b+1+l*(h+1),A=b+1+l*h;p.push(x,D,A),p.push(D,w,A)}this.setIndex(p),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},LE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,BE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,WE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$E=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ib=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",db=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Eb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ab=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Db=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ob=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ub=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yb=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Jb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ew=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ow=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_w=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ew=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ww=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Aw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Hw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ww=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:LE,alphahash_pars_fragment:OE,alphamap_fragment:FE,alphamap_pars_fragment:UE,alphatest_fragment:kE,alphatest_pars_fragment:BE,aomap_fragment:VE,aomap_pars_fragment:HE,batching_pars_vertex:zE,batching_vertex:GE,begin_vertex:WE,beginnormal_vertex:jE,bsdfs:$E,iridescence_fragment:qE,bumpmap_pars_fragment:XE,clipping_planes_fragment:YE,clipping_planes_pars_fragment:ZE,clipping_planes_pars_vertex:JE,clipping_planes_vertex:KE,color_fragment:QE,color_pars_fragment:eb,color_pars_vertex:tb,color_vertex:nb,common:ib,cube_uv_reflection_fragment:rb,defaultnormal_vertex:sb,displacementmap_pars_vertex:ob,displacementmap_vertex:ab,emissivemap_fragment:cb,emissivemap_pars_fragment:lb,colorspace_fragment:ub,colorspace_pars_fragment:db,envmap_fragment:fb,envmap_common_pars_fragment:hb,envmap_pars_fragment:pb,envmap_pars_vertex:mb,envmap_physical_pars_fragment:Ab,envmap_vertex:gb,fog_vertex:yb,fog_pars_vertex:vb,fog_fragment:_b,fog_pars_fragment:xb,gradientmap_pars_fragment:Mb,lightmap_fragment:Eb,lightmap_pars_fragment:bb,lights_lambert_fragment:wb,lights_lambert_pars_fragment:Sb,lights_pars_begin:Tb,lights_toon_fragment:Cb,lights_toon_pars_fragment:Db,lights_phong_fragment:Ib,lights_phong_pars_fragment:Rb,lights_physical_fragment:Pb,lights_physical_pars_fragment:Nb,lights_fragment_begin:Lb,lights_fragment_maps:Ob,lights_fragment_end:Fb,logdepthbuf_fragment:Ub,logdepthbuf_pars_fragment:kb,logdepthbuf_pars_vertex:Bb,logdepthbuf_vertex:Vb,map_fragment:Hb,map_pars_fragment:zb,map_particle_fragment:Gb,map_particle_pars_fragment:Wb,metalnessmap_fragment:jb,metalnessmap_pars_fragment:$b,morphcolor_vertex:qb,morphnormal_vertex:Xb,morphtarget_pars_vertex:Yb,morphtarget_vertex:Zb,normal_fragment_begin:Jb,normal_fragment_maps:Kb,normal_pars_fragment:Qb,normal_pars_vertex:ew,normal_vertex:tw,normalmap_pars_fragment:nw,clearcoat_normal_fragment_begin:iw,clearcoat_normal_fragment_maps:rw,clearcoat_pars_fragment:sw,iridescence_pars_fragment:ow,opaque_fragment:aw,packing:cw,premultiplied_alpha_fragment:lw,project_vertex:uw,dithering_fragment:dw,dithering_pars_fragment:fw,roughnessmap_fragment:hw,roughnessmap_pars_fragment:pw,shadowmap_pars_fragment:mw,shadowmap_pars_vertex:gw,shadowmap_vertex:yw,shadowmask_pars_fragment:vw,skinbase_vertex:_w,skinning_pars_vertex:xw,skinning_vertex:Mw,skinnormal_vertex:Ew,specularmap_fragment:bw,specularmap_pars_fragment:ww,tonemapping_fragment:Sw,tonemapping_pars_fragment:Tw,transmission_fragment:Aw,transmission_pars_fragment:Cw,uv_pars_fragment:Dw,uv_pars_vertex:Iw,uv_vertex:Rw,worldpos_vertex:Pw,background_vert:Nw,background_frag:Lw,backgroundCube_vert:Ow,backgroundCube_frag:Fw,cube_vert:Uw,cube_frag:kw,depth_vert:Bw,depth_frag:Vw,distanceRGBA_vert:Hw,distanceRGBA_frag:zw,equirect_vert:Gw,equirect_frag:Ww,linedashed_vert:jw,linedashed_frag:$w,meshbasic_vert:qw,meshbasic_frag:Xw,meshlambert_vert:Yw,meshlambert_frag:Zw,meshmatcap_vert:Jw,meshmatcap_frag:Kw,meshnormal_vert:Qw,meshnormal_frag:eS,meshphong_vert:tS,meshphong_frag:nS,meshphysical_vert:iS,meshphysical_frag:rS,meshtoon_vert:sS,meshtoon_frag:oS,points_vert:aS,points_frag:cS,shadow_vert:lS,shadow_frag:uS,sprite_vert:dS,sprite_frag:fS},ce={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Mn={basic:{uniforms:Lt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Lt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Lt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Lt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Lt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Lt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Lt([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Lt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Lt([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Lt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Lt([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Lt([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Lt([ce.lights,ce.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Mn.physical={uniforms:Lt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var ca={r:0,b:0,g:0};function hS(n,e,t,i,r,s,o){let a=new Be(0),c=s===!0?0:1,l,u,d=null,f=0,p=null;function g(m,h){let b=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?y(a,c):x&&x.isColor&&(y(x,1),b=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Na)?(u===void 0&&(u=new Qt(new Ps(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Nr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(x.colorSpace)!==it,(d!==x||f!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Qt(new _u(2,2),new Vn({name:"BackgroundMaterial",uniforms:Nr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(x.colorSpace)!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=x,f=x.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,h){m.getRGB(ca,_g(n)),i.buffers.color.setClear(ca.r,ca.g,ca.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),c=h,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(a,c)},render:g}}function pS(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=m(null),l=c,u=!1;function d(R,B,j,W,J){let q=!1;if(o){let K=y(W,j,B);l!==K&&(l=K,p(l.object)),q=h(R,W,j,J),q&&b(R,W,j,J)}else{let K=B.wireframe===!0;(l.geometry!==W.id||l.program!==j.id||l.wireframe!==K)&&(l.geometry=W.id,l.program=j.id,l.wireframe=K,q=!0)}J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,H(R,B,j,W),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(R){return i.isWebGL2?n.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?n.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function y(R,B,j){let W=j.wireframe===!0,J=a[R.id];J===void 0&&(J={},a[R.id]=J);let q=J[B.id];q===void 0&&(q={},J[B.id]=q);let K=q[W];return K===void 0&&(K=m(f()),q[W]=K),K}function m(R){let B=[],j=[],W=[];for(let J=0;J<r;J++)B[J]=0,j[J]=0,W[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:j,attributeDivisors:W,object:R,attributes:{},index:null}}function h(R,B,j,W){let J=l.attributes,q=B.attributes,K=0,te=j.getAttributes();for(let fe in te)if(te[fe].location>=0){let Y=J[fe],ue=q[fe];if(ue===void 0&&(fe==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),fe==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),Y===void 0||Y.attribute!==ue||ue&&Y.data!==ue.data)return!0;K++}return l.attributesNum!==K||l.index!==W}function b(R,B,j,W){let J={},q=B.attributes,K=0,te=j.getAttributes();for(let fe in te)if(te[fe].location>=0){let Y=q[fe];Y===void 0&&(fe==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),fe==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor));let ue={};ue.attribute=Y,Y&&Y.data&&(ue.data=Y.data),J[fe]=ue,K++}l.attributes=J,l.attributesNum=K,l.index=W}function x(){let R=l.newAttributes;for(let B=0,j=R.length;B<j;B++)R[B]=0}function D(R){w(R,0)}function w(R,B){let j=l.newAttributes,W=l.enabledAttributes,J=l.attributeDivisors;j[R]=1,W[R]===0&&(n.enableVertexAttribArray(R),W[R]=1),J[R]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),J[R]=B)}function A(){let R=l.newAttributes,B=l.enabledAttributes;for(let j=0,W=B.length;j<W;j++)B[j]!==R[j]&&(n.disableVertexAttribArray(j),B[j]=0)}function T(R,B,j,W,J,q,K){K===!0?n.vertexAttribIPointer(R,B,j,J,q):n.vertexAttribPointer(R,B,j,W,J,q)}function H(R,B,j,W){if(i.isWebGL2===!1&&(R.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let J=W.attributes,q=j.getAttributes(),K=B.defaultAttributeValues;for(let te in q){let fe=q[te];if(fe.location>=0){let z=J[te];if(z===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),z!==void 0){let Y=z.normalized,ue=z.itemSize,ye=t.get(z);if(ye===void 0)continue;let _e=ye.buffer,Re=ye.type,Ae=ye.bytesPerElement,Se=i.isWebGL2===!0&&(Re===n.INT||Re===n.UNSIGNED_INT||z.gpuType===og);if(z.isInterleavedBufferAttribute){let Le=z.data,L=Le.stride,vt=z.offset;if(Le.isInstancedInterleavedBuffer){for(let xe=0;xe<fe.locationSize;xe++)w(fe.location+xe,Le.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let xe=0;xe<fe.locationSize;xe++)D(fe.location+xe);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let xe=0;xe<fe.locationSize;xe++)T(fe.location+xe,ue/fe.locationSize,Re,Y,L*Ae,(vt+ue/fe.locationSize*xe)*Ae,Se)}else{if(z.isInstancedBufferAttribute){for(let Le=0;Le<fe.locationSize;Le++)w(fe.location+Le,z.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Le=0;Le<fe.locationSize;Le++)D(fe.location+Le);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Le=0;Le<fe.locationSize;Le++)T(fe.location+Le,ue/fe.locationSize,Re,Y,ue*Ae,ue/fe.locationSize*Le*Ae,Se)}}else if(K!==void 0){let Y=K[te];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(fe.location,Y);break;case 3:n.vertexAttrib3fv(fe.location,Y);break;case 4:n.vertexAttrib4fv(fe.location,Y);break;default:n.vertexAttrib1fv(fe.location,Y)}}}}A()}function _(){$();for(let R in a){let B=a[R];for(let j in B){let W=B[j];for(let J in W)g(W[J].object),delete W[J];delete B[j]}delete a[R]}}function S(R){if(a[R.id]===void 0)return;let B=a[R.id];for(let j in B){let W=B[j];for(let J in W)g(W[J].object),delete W[J];delete B[j]}delete a[R.id]}function k(R){for(let B in a){let j=a[B];if(j[R.id]===void 0)continue;let W=j[R.id];for(let J in W)g(W[J].object),delete W[J];delete j[R.id]}}function $(){ee(),u=!0,l!==c&&(l=c,p(l.object))}function ee(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:$,resetDefaultState:ee,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:D,disableUnusedAttributes:A}}function mS(n,e,t,i){let r=i.isWebGL2,s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function c(u,d,f){if(f===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,d,f),t.update(d,s,f)}function l(u,d,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(u[g],d[g]);else{p.multiDrawArraysWEBGL(s,u,0,d,0,f);let g=0;for(let y=0;y<f;y++)g+=d[y];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function gS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,D=o||e.has("OES_texture_float"),w=x&&D,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:D,floatVertexTextures:w,maxSamples:A}}function yS(n){let e=this,t=null,i=0,r=!1,s=!1,o=new un,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let b=s?0:i,x=b*4,D=h.clippingState||null;c.value=D,D=u(g,f,x,p);for(let w=0;w!==x;++w)D[w]=t[w];h.clippingState=D,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let h=p+y*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,D=p;x!==y;++x,D+=4)o.copy(d[x]).applyMatrix4(b,a),o.normal.toArray(m,D),m[D+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function vS(n){let e=new WeakMap;function t(o,a){return a===lu?o.mapping=Ir:a===uu&&(o.mapping=Rr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===lu||a===uu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new vu(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var xu=class extends Aa{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sr=4,Lm=[.125,.215,.35,.446,.526,.582],Ii=20,eu=new xu,Om=new Be,tu=null,nu=0,iu=0,Ci=(1+Math.sqrt(5))/2,Er=1/Ci,Fm=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Ci,Er),new P(0,Ci,-Er),new P(Er,0,Ci),new P(-Er,0,Ci),new P(Ci,Er,0),new P(-Ci,Er,0)],Da=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tu,nu,iu),e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Cs,format:fn,colorSpace:kn,depthBuffer:!1},r=Um(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_S(s)),this._blurMaterial=xS(s,e,t)}return r}_compileMaterial(e){let t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,eu)}_sceneToCubeUV(e,t,i,r){let a=new Et(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Om),u.toneMapping=oi,u.autoClear=!1;let p=new wa({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new Qt(new Ps,p),y=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Om),y=!0);for(let h=0;h<6;h++){let b=h%3;b===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):b===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));let x=this._cubeSize;la(r,b*x,h>2?x:0,x,x),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ir||e.mapping===Rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=km());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;la(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,eu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fm[(r-1)%Fm.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Qt(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ii-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):Ii;m>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let h=[],b=0;for(let T=0;T<Ii;++T){let H=T/y,_=Math.exp(-H*H/2);h.push(_),T===0?b+=_:T<m&&(b+=2*_)}for(let T=0;T<h.length;T++)h[T]=h[T]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;let D=this._sizeLods[r],w=3*D*(r>x-Sr?r-x+Sr:0),A=4*(this._cubeSize-D);la(t,w,A,3*D,2*D),c.setRenderTarget(t),c.render(d,eu)}};function _S(n){let e=[],t=[],i=[],r=n,s=n-Sr+1+Lm.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Sr?c=Lm[o-n+Sr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,y=3,m=2,h=1,b=new Float32Array(y*g*p),x=new Float32Array(m*g*p),D=new Float32Array(h*g*p);for(let A=0;A<p;A++){let T=A%3*2/3-1,H=A>2?0:-1,_=[T,H,0,T+2/3,H,0,T+2/3,H+1,0,T,H,0,T+2/3,H+1,0,T,H+1,0];b.set(_,y*g*A),x.set(f,m*g*A);let S=[A,A,A,A,A,A];D.set(S,h*g*A)}let w=new bn;w.setAttribute("position",new Dt(b,y)),w.setAttribute("uv",new Dt(x,m)),w.setAttribute("faceIndex",new Dt(D,h)),e.push(w),r>Sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Um(n,e,t){let i=new Bn(n,e,t);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xS(n,e,t){let i=new Float32Array(Ii),r=new P(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function km(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Bm(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Zu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function MS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===lu||c===uu,u=c===Ir||c===Rr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Da(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new Da(n));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ES(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bS(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let y=p[g];for(let m=0,h=y.length;m<h;m++)e.update(y[m],n.ARRAY_BUFFER)}}function l(d){let f=[],p=d.index,g=d.attributes.position,y=0;if(p!==null){let b=p.array;y=p.version;for(let x=0,D=b.length;x<D;x+=3){let w=b[x+0],A=b[x+1],T=b[x+2];f.push(w,A,A,T,T,w)}}else if(g!==void 0){let b=g.array;y=g.version;for(let x=0,D=b.length/3-1;x<D;x+=3){let w=x+0,A=x+1,T=x+2;f.push(w,A,A,T,T,w)}}else return;let m=new(yg(f)?Ta:Sa)(f,1);m.version=y;let h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){let f=s.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function wS(n,e,t,i){let r=i.isWebGL2,s;function o(p){s=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function u(p,g){n.drawElements(s,g,a,p*c),t.update(g,s,1)}function d(p,g,y){if(y===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,a,p*c,y),t.update(g,s,y)}function f(p,g,y){if(y===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<y;h++)this.render(p[h]/c,g[h]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,y);let h=0;for(let b=0;b<y;b++)h+=g[b];t.update(h,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function SS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function TS(n,e){return n[0]-e[0]}function AS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function CS(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new rt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0,y=s.get(u);if(y===void 0||y.count!==g){let R=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",R)};y!==void 0&&y.texture.dispose();let b=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],T=u.morphAttributes.color||[],H=0;b===!0&&(H=1),x===!0&&(H=2),D===!0&&(H=3);let _=u.attributes.position.count*H,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let k=new Float32Array(_*S*4*g),$=new Ea(k,_,S,g);$.type=ri,$.needsUpdate=!0;let ee=H*4;for(let B=0;B<g;B++){let j=w[B],W=A[B],J=T[B],q=_*S*4*B;for(let K=0;K<j.count;K++){let te=K*ee;b===!0&&(o.fromBufferAttribute(j,K),k[q+te+0]=o.x,k[q+te+1]=o.y,k[q+te+2]=o.z,k[q+te+3]=0),x===!0&&(o.fromBufferAttribute(W,K),k[q+te+4]=o.x,k[q+te+5]=o.y,k[q+te+6]=o.z,k[q+te+7]=0),D===!0&&(o.fromBufferAttribute(J,K),k[q+te+8]=o.x,k[q+te+9]=o.y,k[q+te+10]=o.z,k[q+te+11]=J.itemSize===4?o.w:1)}}y={count:g,texture:$,size:new Ie(_,S)},s.set(u,y),u.addEventListener("dispose",R)}let m=0;for(let b=0;b<f.length;b++)m+=f[b];let h=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",h),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let p=f===void 0?0:f.length,g=i[u.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];i[u.id]=g}for(let x=0;x<p;x++){let D=g[x];D[0]=x,D[1]=f[x]}g.sort(AS);for(let x=0;x<8;x++)x<p&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(TS);let y=u.morphAttributes.position,m=u.morphAttributes.normal,h=0;for(let x=0;x<8;x++){let D=a[x],w=D[0],A=D[1];w!==Number.MAX_SAFE_INTEGER&&A?(y&&u.getAttribute("morphTarget"+x)!==y[w]&&u.setAttribute("morphTarget"+x,y[w]),m&&u.getAttribute("morphNormal"+x)!==m[w]&&u.setAttribute("morphNormal"+x,m[w]),r[x]=A,h+=A):(y&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}let b=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",b),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function DS(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Ia=class extends kr{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Pi,u!==Pi&&u!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pi&&(i=ii),i===void 0&&u===Pr&&(i=Ri),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ot,this.minFilter=c!==void 0?c:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mg=new kr,Eg=new Ia(1,1);Eg.compareFunction=mg;var bg=new Ea,wg=new gu,Sg=new Ca,Vm=[],Hm=[],zm=new Float32Array(16),Gm=new Float32Array(9),Wm=new Float32Array(4);function Br(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Vm[r];if(s===void 0&&(s=new Float32Array(r),Vm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oa(n,e){let t=Hm[e];t===void 0&&(t=new Int32Array(e),Hm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function IS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function PS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function NS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function LS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(gt(t,i))return;Wm.set(i),n.uniformMatrix2fv(this.addr,!1,Wm),yt(t,i)}}function OS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(gt(t,i))return;Gm.set(i),n.uniformMatrix3fv(this.addr,!1,Gm),yt(t,i)}}function FS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(gt(t,i))return;zm.set(i),n.uniformMatrix4fv(this.addr,!1,zm),yt(t,i)}}function US(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function BS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function VS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function HS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function GS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function WS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function jS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?Eg:Mg;t.setTexture2D(e||s,r)}function $S(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wg,r)}function qS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Sg,r)}function XS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bg,r)}function YS(n){switch(n){case 5126:return IS;case 35664:return RS;case 35665:return PS;case 35666:return NS;case 35674:return LS;case 35675:return OS;case 35676:return FS;case 5124:case 35670:return US;case 35667:case 35671:return kS;case 35668:case 35672:return BS;case 35669:case 35673:return VS;case 5125:return HS;case 36294:return zS;case 36295:return GS;case 36296:return WS;case 35678:case 36198:case 36298:case 36306:case 35682:return jS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return qS;case 36289:case 36303:case 36311:case 36292:return XS}}function ZS(n,e){n.uniform1fv(this.addr,e)}function JS(n,e){let t=Br(e,this.size,2);n.uniform2fv(this.addr,t)}function KS(n,e){let t=Br(e,this.size,3);n.uniform3fv(this.addr,t)}function QS(n,e){let t=Br(e,this.size,4);n.uniform4fv(this.addr,t)}function eT(n,e){let t=Br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tT(n,e){let t=Br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nT(n,e){let t=Br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iT(n,e){n.uniform1iv(this.addr,e)}function rT(n,e){n.uniform2iv(this.addr,e)}function sT(n,e){n.uniform3iv(this.addr,e)}function oT(n,e){n.uniform4iv(this.addr,e)}function aT(n,e){n.uniform1uiv(this.addr,e)}function cT(n,e){n.uniform2uiv(this.addr,e)}function lT(n,e){n.uniform3uiv(this.addr,e)}function uT(n,e){n.uniform4uiv(this.addr,e)}function dT(n,e,t){let i=this.cache,r=e.length,s=Oa(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Mg,s[o])}function fT(n,e,t){let i=this.cache,r=e.length,s=Oa(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||wg,s[o])}function hT(n,e,t){let i=this.cache,r=e.length,s=Oa(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Sg,s[o])}function pT(n,e,t){let i=this.cache,r=e.length,s=Oa(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||bg,s[o])}function mT(n){switch(n){case 5126:return ZS;case 35664:return JS;case 35665:return KS;case 35666:return QS;case 35674:return eT;case 35675:return tT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return rT;case 35668:case 35672:return sT;case 35669:case 35673:return oT;case 5125:return aT;case 36294:return cT;case 36295:return lT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return pT}}var Mu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=YS(t.type)}},Eu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mT(t.type)}},bu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},ru=/(\w+)(\])?(\[|\.)?/g;function jm(n,e){n.seq.push(e),n.map[e.id]=e}function gT(n,e,t){let i=n.name,r=i.length;for(ru.lastIndex=0;;){let s=ru.exec(i),o=ru.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){jm(t,l===void 0?new Mu(a,n,e):new Eu(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new bu(a),jm(t,d)),t=d}}}var Dr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);gT(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function $m(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var yT=37297,vT=0;function _T(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function xT(n){let e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n),i;switch(e===t?i="":e===ga&&t===ma?i="LinearDisplayP3ToLinearSRGB":e===ma&&t===ga&&(i="LinearSRGBToLinearDisplayP3"),n){case kn:case La:return[i,"LinearTransferOETF"];case wt:case Xu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function qm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+_T(n.getShaderSource(e),o)}else return r}function MT(n,e){let t=xT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ET(n,e){let t;switch(e){case AM:t="Linear";break;case CM:t="Reinhard";break;case DM:t="OptimizedCineon";break;case IM:t="ACESFilmic";break;case RM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bT(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Es).join(`
`)}function wT(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ST(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Es(n){return n!==""}function Xm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var TT=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(n){return n.replace(TT,CT)}var AT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function CT(n,e){let t=ke[e];if(t===void 0){let i=AT.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wu(t)}var DT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zm(n){return n.replace(DT,IT)}function IT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function RT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function PT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ir:case Rr:e="ENVMAP_TYPE_CUBE";break;case Na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function LT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $u:e="ENVMAP_BLENDING_MULTIPLY";break;case SM:e="ENVMAP_BLENDING_MIX";break;case TM:e="ENVMAP_BLENDING_ADD";break}return e}function OT(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function FT(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=RT(t),l=PT(t),u=NT(t),d=LT(t),f=OT(t),p=t.isWebGL2?"":bT(t),g=wT(s),y=r.createProgram(),m,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),h.length>0&&(h+=`
`)):(m=[Jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),h=[p,Jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?ke.tonemapping_pars_fragment:"",t.toneMapping!==oi?ET("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,MT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),o=wu(o),o=Xm(o,t),o=Ym(o,t),a=wu(a),a=Xm(a,t),a=Ym(a,t),o=Zm(o),a=Zm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let x=b+m+o,D=b+h+a,w=$m(r,r.VERTEX_SHADER,x),A=$m(r,r.FRAGMENT_SHADER,D);r.attachShader(y,w),r.attachShader(y,A),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(k){if(n.debug.checkShaderErrors){let $=r.getProgramInfoLog(y).trim(),ee=r.getShaderInfoLog(w).trim(),R=r.getShaderInfoLog(A).trim(),B=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,w,A);else{let W=qm(r,w,"vertex"),J=qm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+W+`
`+J)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(ee===""||R==="")&&(j=!1);j&&(k.diagnostics={runnable:B,programLog:$,vertexShader:{log:ee,prefix:m},fragmentShader:{log:R,prefix:h}})}r.deleteShader(w),r.deleteShader(A),H=new Dr(r,y),_=ST(r,y)}let H;this.getUniforms=function(){return H===void 0&&T(this),H};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,yT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=A,this}var UT=0,Su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Tu(e),t.set(e,i)),i}},Tu=class{constructor(e){this.id=UT++,this.code=e,this.usedTimes=0}};function kT(n,e,t,i,r,s,o){let a=new ba,c=new Su,l=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return _===0?"uv":`uv${_}`}function m(_,S,k,$,ee){let R=$.fog,B=ee.geometry,j=_.isMeshStandardMaterial?$.environment:null,W=(_.isMeshStandardMaterial?t:e).get(_.envMap||j),J=W&&W.mapping===Na?W.image.height:null,q=g[_.type];_.precision!==null&&(p=r.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,te=K!==void 0?K.length:0,fe=0;B.morphAttributes.position!==void 0&&(fe=1),B.morphAttributes.normal!==void 0&&(fe=2),B.morphAttributes.color!==void 0&&(fe=3);let z,Y,ue,ye;if(q){let It=Mn[q];z=It.vertexShader,Y=It.fragmentShader}else z=_.vertexShader,Y=_.fragmentShader,c.update(_),ue=c.getVertexShaderID(_),ye=c.getFragmentShaderID(_);let _e=n.getRenderTarget(),Re=ee.isInstancedMesh===!0,Ae=ee.isBatchedMesh===!0,Se=!!_.map,Le=!!_.matcap,L=!!W,vt=!!_.aoMap,xe=!!_.lightMap,Ue=!!_.bumpMap,Te=!!_.normalMap,nt=!!_.displacementMap,Oe=!!_.emissiveMap,Ce=!!_.metalnessMap,$e=!!_.roughnessMap,pt=_.anisotropy>0,mt=_.clearcoat>0,E=_.iridescence>0,v=_.sheen>0,O=_.transmission>0,ne=pt&&!!_.anisotropyMap,Q=mt&&!!_.clearcoatMap,ie=mt&&!!_.clearcoatNormalMap,me=mt&&!!_.clearcoatRoughnessMap,oe=E&&!!_.iridescenceMap,le=E&&!!_.iridescenceThicknessMap,C=v&&!!_.sheenColorMap,se=v&&!!_.sheenRoughnessMap,X=!!_.specularMap,be=!!_.specularColorMap,ge=!!_.specularIntensityMap,Ee=O&&!!_.transmissionMap,pe=O&&!!_.thicknessMap,he=!!_.gradientMap,He=!!_.alphaMap,I=_.alphaTest>0,ae=!!_.alphaHash,Z=!!_.extensions,G=!!B.attributes.uv1,re=!!B.attributes.uv2,Me=!!B.attributes.uv3,ze=oi;return _.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ze=n.toneMapping),{isWebGL2:u,shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:z,fragmentShader:Y,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Ae,instancing:Re,instancingColor:Re&&ee.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:kn,map:Se,matcap:Le,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:J,aoMap:vt,lightMap:xe,bumpMap:Ue,normalMap:Te,displacementMap:f&&nt,emissiveMap:Oe,normalMapObjectSpace:Te&&_.normalMapType===GM,normalMapTangentSpace:Te&&_.normalMapType===pg,metalnessMap:Ce,roughnessMap:$e,anisotropy:pt,anisotropyMap:ne,clearcoat:mt,clearcoatMap:Q,clearcoatNormalMap:ie,clearcoatRoughnessMap:me,iridescence:E,iridescenceMap:oe,iridescenceThicknessMap:le,sheen:v,sheenColorMap:C,sheenRoughnessMap:se,specularMap:X,specularColorMap:be,specularIntensityMap:ge,transmission:O,transmissionMap:Ee,thicknessMap:pe,gradientMap:he,opaque:_.transparent===!1&&_.blending===Ar,alphaMap:He,alphaTest:I,alphaHash:ae,combine:_.combine,mapUv:Se&&y(_.map.channel),aoMapUv:vt&&y(_.aoMap.channel),lightMapUv:xe&&y(_.lightMap.channel),bumpMapUv:Ue&&y(_.bumpMap.channel),normalMapUv:Te&&y(_.normalMap.channel),displacementMapUv:nt&&y(_.displacementMap.channel),emissiveMapUv:Oe&&y(_.emissiveMap.channel),metalnessMapUv:Ce&&y(_.metalnessMap.channel),roughnessMapUv:$e&&y(_.roughnessMap.channel),anisotropyMapUv:ne&&y(_.anisotropyMap.channel),clearcoatMapUv:Q&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:ie&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:C&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:se&&y(_.sheenRoughnessMap.channel),specularMapUv:X&&y(_.specularMap.channel),specularColorMapUv:be&&y(_.specularColorMap.channel),specularIntensityMapUv:ge&&y(_.specularIntensityMap.channel),transmissionMapUv:Ee&&y(_.transmissionMap.channel),thicknessMapUv:pe&&y(_.thicknessMap.channel),alphaMapUv:He&&y(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Te||pt),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:G,vertexUv2s:re,vertexUv3s:Me,pointsUvs:ee.isPoints===!0&&!!B.attributes.uv&&(Se||He),fog:!!R,useFog:_.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ee.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Se&&_.map.isVideoTexture===!0&&Qe.getTransfer(_.map.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fn,flipSided:_.side===Bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:Z&&_.extensions.derivatives===!0,extensionFragDepth:Z&&_.extensions.fragDepth===!0,extensionDrawBuffers:Z&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:Z&&_.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function h(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let k in _.defines)S.push(k),S.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(b(S,_),x(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function b(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function x(_,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),_.push(a.mask)}function D(_){let S=g[_.type],k;if(S){let $=Mn[S];k=CE.clone($.uniforms)}else k=_.uniforms;return k}function w(_,S){let k;for(let $=0,ee=l.length;$<ee;$++){let R=l[$];if(R.cacheKey===S){k=R,++k.usedTimes;break}}return k===void 0&&(k=new FT(n,S,_,s),l.push(k)),k}function A(_){if(--_.usedTimes===0){let S=l.indexOf(_);l[S]=l[l.length-1],l.pop(),_.destroy()}}function T(_){c.remove(_)}function H(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:D,acquireProgram:w,releaseProgram:A,releaseShaderCache:T,programs:l,dispose:H}}function BT(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function VT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Km(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qm(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,y,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=y,h.group=m),e++,h}function a(d,f,p,g,y,m){let h=o(d,f,p,g,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(d,f,p,g,y,m){let h=o(d,f,p,g,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||VT),i.length>1&&i.sort(f||Km),r.length>1&&r.sort(f||Km)}function u(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function HT(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new Qm,n.set(i,[o])):r>=s.length?(o=new Qm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Be};break;case"SpotLight":t={position:new P,direction:new P,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function GT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var WT=0;function jT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $T(n,e){let t=new zT,i=GT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new P);let s=new P,o=new ft,a=new ft;function c(u,d){let f=0,p=0,g=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,m=0,h=0,b=0,x=0,D=0,w=0,A=0,T=0,H=0,_=0;u.sort(jT);let S=d===!0?Math.PI:1;for(let $=0,ee=u.length;$<ee;$++){let R=u[$],B=R.color,j=R.intensity,W=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=B.r*j*S,p+=B.g*j*S,g+=B.b*j*S;else if(R.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(R.sh.coefficients[q],j);_++}else if(R.isDirectionalLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity*S),R.castShadow){let K=R.shadow,te=i.get(R);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,r.directionalShadow[y]=te,r.directionalShadowMap[y]=J,r.directionalShadowMatrix[y]=R.shadow.matrix,D++}r.directional[y]=q,y++}else if(R.isSpotLight){let q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(B).multiplyScalar(j*S),q.distance=W,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,r.spot[h]=q;let K=R.shadow;if(R.map&&(r.spotLightMap[T]=R.map,T++,K.updateMatrices(R),R.castShadow&&H++),r.spotLightMatrix[h]=K.matrix,R.castShadow){let te=i.get(R);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,r.spotShadow[h]=te,r.spotShadowMap[h]=J,A++}h++}else if(R.isRectAreaLight){let q=t.get(R);q.color.copy(B).multiplyScalar(j),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),r.rectArea[b]=q,b++}else if(R.isPointLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity*S),q.distance=R.distance,q.decay=R.decay,R.castShadow){let K=R.shadow,te=i.get(R);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,r.pointShadow[m]=te,r.pointShadowMap[m]=J,r.pointShadowMatrix[m]=R.shadow.matrix,w++}r.point[m]=q,m++}else if(R.isHemisphereLight){let q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(j*S),q.groundColor.copy(R.groundColor).multiplyScalar(j*S),r.hemi[x]=q,x++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;let k=r.hash;(k.directionalLength!==y||k.pointLength!==m||k.spotLength!==h||k.rectAreaLength!==b||k.hemiLength!==x||k.numDirectionalShadows!==D||k.numPointShadows!==w||k.numSpotShadows!==A||k.numSpotMaps!==T||k.numLightProbes!==_)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=b,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=A+T-H,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=_,k.directionalLength=y,k.pointLength=m,k.spotLength=h,k.rectAreaLength=b,k.hemiLength=x,k.numDirectionalShadows=D,k.numPointShadows=w,k.numSpotShadows=A,k.numSpotMaps=T,k.numLightProbes=_,r.version=WT++)}function l(u,d){let f=0,p=0,g=0,y=0,m=0,h=d.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){let D=u[b];if(D.isDirectionalLight){let w=r.directional[f];w.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),f++}else if(D.isSpotLight){let w=r.spot[g];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),g++}else if(D.isRectAreaLight){let w=r.rectArea[y];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(h),a.identity(),o.copy(D.matrixWorld),o.premultiply(h),a.extractRotation(o),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(D.isPointLight){let w=r.point[p];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(h),p++}else if(D.isHemisphereLight){let w=r.hemi[m];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(h),m++}}}return{setup:c,setupView:l,state:r}}function eg(n,e){let t=new $T(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function qT(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),c;return a===void 0?(c=new eg(n,e),t.set(s,[c])):o>=a.length?(c=new eg(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}var Au=class extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cu=class extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},XT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ZT(n,e,t){let i=new Ns,r=new Ie,s=new Ie,o=new rt,a=new Au({depthPacking:zM}),c=new Cu,l={},u=t.maxTextureSize,d={[ci]:Bt,[Bt]:ci,[Fn]:Fn},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:XT,fragmentShader:YT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new bn;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Qt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sg;let h=this.type;this.render=function(w,A,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let H=n.getRenderTarget(),_=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),k=n.state;k.setBlending(si),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let $=h!==On&&this.type===On,ee=h===On&&this.type!==On;for(let R=0,B=w.length;R<B;R++){let j=w[R],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let J=W.getFrameExtents();if(r.multiply(J),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,W.mapSize.y=s.y)),W.map===null||$===!0||ee===!0){let K=this.type!==On?{minFilter:Ot,magFilter:Ot}:{};W.map!==null&&W.map.dispose(),W.map=new Bn(r.x,r.y,K),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let q=W.getViewportCount();for(let K=0;K<q;K++){let te=W.getViewport(K);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),k.viewport(o),W.updateMatrices(j,K),i=W.getFrustum(),D(A,T,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===On&&b(W,T),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(H,_,S)};function b(w,A){let T=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Bn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,T,f,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,T,p,y,null)}function x(w,A,T,H){let _=null,S=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)_=S;else if(_=T.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let k=_.uuid,$=A.uuid,ee=l[k];ee===void 0&&(ee={},l[k]=ee);let R=ee[$];R===void 0&&(R=_.clone(),ee[$]=R),_=R}if(_.visible=A.visible,_.wireframe=A.wireframe,H===On?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:d[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let k=n.properties.get(_);k.light=T}return _}function D(w,A,T,H,_){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===On)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let $=e.update(w),ee=w.material;if(Array.isArray(ee)){let R=$.groups;for(let B=0,j=R.length;B<j;B++){let W=R[B],J=ee[W.materialIndex];if(J&&J.visible){let q=x(w,J,H,_);w.onBeforeShadow(n,w,A,T,$,q,W),n.renderBufferDirect(T,null,$,q,w,W),w.onAfterShadow(n,w,A,T,$,q,W)}}}else if(ee.visible){let R=x(w,ee,H,_);w.onBeforeShadow(n,w,A,T,$,R,null),n.renderBufferDirect(T,null,$,R,w,null),w.onAfterShadow(n,w,A,T,$,R,null)}}let k=w.children;for(let $=0,ee=k.length;$<ee;$++)D(k[$],A,T,H,_)}}function JT(n,e,t){let i=t.isWebGL2;function r(){let I=!1,ae=new rt,Z=null,G=new rt(0,0,0,0);return{setMask:function(re){Z!==re&&!I&&(n.colorMask(re,re,re,re),Z=re)},setLocked:function(re){I=re},setClear:function(re,Me,ze,_t,It){It===!0&&(re*=_t,Me*=_t,ze*=_t),ae.set(re,Me,ze,_t),G.equals(ae)===!1&&(n.clearColor(re,Me,ze,_t),G.copy(ae))},reset:function(){I=!1,Z=null,G.set(-1,0,0,0)}}}function s(){let I=!1,ae=null,Z=null,G=null;return{setTest:function(re){re?Ae(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(re){ae!==re&&!I&&(n.depthMask(re),ae=re)},setFunc:function(re){if(Z!==re){switch(re){case vM:n.depthFunc(n.NEVER);break;case _M:n.depthFunc(n.ALWAYS);break;case xM:n.depthFunc(n.LESS);break;case da:n.depthFunc(n.LEQUAL);break;case MM:n.depthFunc(n.EQUAL);break;case EM:n.depthFunc(n.GEQUAL);break;case bM:n.depthFunc(n.GREATER);break;case wM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=re}},setLocked:function(re){I=re},setClear:function(re){G!==re&&(n.clearDepth(re),G=re)},reset:function(){I=!1,ae=null,Z=null,G=null}}}function o(){let I=!1,ae=null,Z=null,G=null,re=null,Me=null,ze=null,_t=null,It=null;return{setTest:function(tt){I||(tt?Ae(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(tt){ae!==tt&&!I&&(n.stencilMask(tt),ae=tt)},setFunc:function(tt,Rt,mn){(Z!==tt||G!==Rt||re!==mn)&&(n.stencilFunc(tt,Rt,mn),Z=tt,G=Rt,re=mn)},setOp:function(tt,Rt,mn){(Me!==tt||ze!==Rt||_t!==mn)&&(n.stencilOp(tt,Rt,mn),Me=tt,ze=Rt,_t=mn)},setLocked:function(tt){I=tt},setClear:function(tt){It!==tt&&(n.clearStencil(tt),It=tt)},reset:function(){I=!1,ae=null,Z=null,G=null,re=null,Me=null,ze=null,_t=null,It=null}}}let a=new r,c=new s,l=new o,u=new WeakMap,d=new WeakMap,f={},p={},g=new WeakMap,y=[],m=null,h=!1,b=null,x=null,D=null,w=null,A=null,T=null,H=null,_=new Be(0,0,0),S=0,k=!1,$=null,ee=null,R=null,B=null,j=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,q=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=q>=1):K.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=q>=2);let te=null,fe={},z=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),ue=new rt().fromArray(z),ye=new rt().fromArray(Y);function _e(I,ae,Z,G){let re=new Uint8Array(4),Me=n.createTexture();n.bindTexture(I,Me),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<Z;ze++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(ae,0,n.RGBA,1,1,G,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ae+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return Me}let Re={};Re[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ae(n.DEPTH_TEST),c.setFunc(da),Oe(!1),Ce(Pp),Ae(n.CULL_FACE),Te(si);function Ae(I){f[I]!==!0&&(n.enable(I),f[I]=!0)}function Se(I){f[I]!==!1&&(n.disable(I),f[I]=!1)}function Le(I,ae){return p[I]!==ae?(n.bindFramebuffer(I,ae),p[I]=ae,i&&(I===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ae),I===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ae)),!0):!1}function L(I,ae){let Z=y,G=!1;if(I)if(Z=g.get(ae),Z===void 0&&(Z=[],g.set(ae,Z)),I.isWebGLMultipleRenderTargets){let re=I.texture;if(Z.length!==re.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,ze=re.length;Me<ze;Me++)Z[Me]=n.COLOR_ATTACHMENT0+Me;Z.length=re.length,G=!0}}else Z[0]!==n.COLOR_ATTACHMENT0&&(Z[0]=n.COLOR_ATTACHMENT0,G=!0);else Z[0]!==n.BACK&&(Z[0]=n.BACK,G=!0);G&&(t.isWebGL2?n.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function vt(I){return m!==I?(n.useProgram(I),m=I,!0):!1}let xe={[Di]:n.FUNC_ADD,[iM]:n.FUNC_SUBTRACT,[rM]:n.FUNC_REVERSE_SUBTRACT};if(i)xe[Fp]=n.MIN,xe[Up]=n.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(xe[Fp]=I.MIN_EXT,xe[Up]=I.MAX_EXT)}let Ue={[sM]:n.ZERO,[oM]:n.ONE,[aM]:n.SRC_COLOR,[au]:n.SRC_ALPHA,[hM]:n.SRC_ALPHA_SATURATE,[dM]:n.DST_COLOR,[lM]:n.DST_ALPHA,[cM]:n.ONE_MINUS_SRC_COLOR,[cu]:n.ONE_MINUS_SRC_ALPHA,[fM]:n.ONE_MINUS_DST_COLOR,[uM]:n.ONE_MINUS_DST_ALPHA,[pM]:n.CONSTANT_COLOR,[mM]:n.ONE_MINUS_CONSTANT_COLOR,[gM]:n.CONSTANT_ALPHA,[yM]:n.ONE_MINUS_CONSTANT_ALPHA};function Te(I,ae,Z,G,re,Me,ze,_t,It,tt){if(I===si){h===!0&&(Se(n.BLEND),h=!1);return}if(h===!1&&(Ae(n.BLEND),h=!0),I!==nM){if(I!==b||tt!==k){if((x!==Di||A!==Di)&&(n.blendEquation(n.FUNC_ADD),x=Di,A=Di),tt)switch(I){case Ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Np:n.blendFunc(n.ONE,n.ONE);break;case Lp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Op:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Np:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Op:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}D=null,w=null,T=null,H=null,_.set(0,0,0),S=0,b=I,k=tt}return}re=re||ae,Me=Me||Z,ze=ze||G,(ae!==x||re!==A)&&(n.blendEquationSeparate(xe[ae],xe[re]),x=ae,A=re),(Z!==D||G!==w||Me!==T||ze!==H)&&(n.blendFuncSeparate(Ue[Z],Ue[G],Ue[Me],Ue[ze]),D=Z,w=G,T=Me,H=ze),(_t.equals(_)===!1||It!==S)&&(n.blendColor(_t.r,_t.g,_t.b,It),_.copy(_t),S=It),b=I,k=!1}function nt(I,ae){I.side===Fn?Se(n.CULL_FACE):Ae(n.CULL_FACE);let Z=I.side===Bt;ae&&(Z=!Z),Oe(Z),I.blending===Ar&&I.transparent===!1?Te(si):Te(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);let G=I.stencilWrite;l.setTest(G),G&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ae(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(I){$!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),$=I)}function Ce(I){I!==Qx?(Ae(n.CULL_FACE),I!==ee&&(I===Pp?n.cullFace(n.BACK):I===eM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),ee=I}function $e(I){I!==R&&(J&&n.lineWidth(I),R=I)}function pt(I,ae,Z){I?(Ae(n.POLYGON_OFFSET_FILL),(B!==ae||j!==Z)&&(n.polygonOffset(ae,Z),B=ae,j=Z)):Se(n.POLYGON_OFFSET_FILL)}function mt(I){I?Ae(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function E(I){I===void 0&&(I=n.TEXTURE0+W-1),te!==I&&(n.activeTexture(I),te=I)}function v(I,ae,Z){Z===void 0&&(te===null?Z=n.TEXTURE0+W-1:Z=te);let G=fe[Z];G===void 0&&(G={type:void 0,texture:void 0},fe[Z]=G),(G.type!==I||G.texture!==ae)&&(te!==Z&&(n.activeTexture(Z),te=Z),n.bindTexture(I,ae||Re[I]),G.type=I,G.texture=ae)}function O(){let I=fe[te];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(I){ue.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ue.copy(I))}function Ee(I){ye.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ye.copy(I))}function pe(I,ae){let Z=d.get(ae);Z===void 0&&(Z=new WeakMap,d.set(ae,Z));let G=Z.get(I);G===void 0&&(G=n.getUniformBlockIndex(ae,I.name),Z.set(I,G))}function he(I,ae){let G=d.get(ae).get(I);u.get(ae)!==G&&(n.uniformBlockBinding(ae,G,I.__bindingPointIndex),u.set(ae,G))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},te=null,fe={},p={},g=new WeakMap,y=[],m=null,h=!1,b=null,x=null,D=null,w=null,A=null,T=null,H=null,_=new Be(0,0,0),S=0,k=!1,$=null,ee=null,R=null,B=null,j=null,ue.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ae,disable:Se,bindFramebuffer:Le,drawBuffers:L,useProgram:vt,setBlending:Te,setMaterial:nt,setFlipSided:Oe,setCullFace:Ce,setLineWidth:$e,setPolygonOffset:pt,setScissorTest:mt,activeTexture:E,bindTexture:v,unbindTexture:O,compressedTexImage2D:ne,compressedTexImage3D:Q,texImage2D:X,texImage3D:be,updateUBOMapping:pe,uniformBlockBinding:he,texStorage2D:C,texStorage3D:se,texSubImage2D:ie,texSubImage3D:me,compressedTexSubImage2D:oe,compressedTexSubImage3D:le,scissor:ge,viewport:Ee,reset:He}}function KT(n,e,t,i,r,s,o){let a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,y,m=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,v){return h?new OffscreenCanvas(E,v):_a("canvas")}function x(E,v,O,ne){let Q=1;if((E.width>ne||E.height>ne)&&(Q=ne/Math.max(E.width,E.height)),Q<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let ie=v?va:Math.floor,me=ie(Q*E.width),oe=ie(Q*E.height);y===void 0&&(y=b(me,oe));let le=O?b(me,oe):y;return le.width=me,le.height=oe,le.getContext("2d").drawImage(E,0,0,me,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+me+"x"+oe+")."),le}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function D(E){return pu(E.width)&&pu(E.height)}function w(E){return a?!1:E.wrapS!==dn||E.wrapT!==dn||E.minFilter!==Ot&&E.minFilter!==Jt}function A(E,v){return E.generateMipmaps&&v&&E.minFilter!==Ot&&E.minFilter!==Jt}function T(E){n.generateMipmap(E)}function H(E,v,O,ne,Q=!1){if(a===!1)return v;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ie=v;if(v===n.RED&&(O===n.FLOAT&&(ie=n.R32F),O===n.HALF_FLOAT&&(ie=n.R16F),O===n.UNSIGNED_BYTE&&(ie=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(ie=n.R8UI),O===n.UNSIGNED_SHORT&&(ie=n.R16UI),O===n.UNSIGNED_INT&&(ie=n.R32UI),O===n.BYTE&&(ie=n.R8I),O===n.SHORT&&(ie=n.R16I),O===n.INT&&(ie=n.R32I)),v===n.RG&&(O===n.FLOAT&&(ie=n.RG32F),O===n.HALF_FLOAT&&(ie=n.RG16F),O===n.UNSIGNED_BYTE&&(ie=n.RG8)),v===n.RGBA){let me=Q?pa:Qe.getTransfer(ne);O===n.FLOAT&&(ie=n.RGBA32F),O===n.HALF_FLOAT&&(ie=n.RGBA16F),O===n.UNSIGNED_BYTE&&(ie=me===it?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function _(E,v,O){return A(E,O)===!0||E.isFramebufferTexture&&E.minFilter!==Ot&&E.minFilter!==Jt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function S(E){return E===Ot||E===Bp||E===Il?n.NEAREST:n.LINEAR}function k(E){let v=E.target;v.removeEventListener("dispose",k),ee(v),v.isVideoTexture&&g.delete(v)}function $(E){let v=E.target;v.removeEventListener("dispose",$),B(v)}function ee(E){let v=i.get(E);if(v.__webglInit===void 0)return;let O=E.source,ne=m.get(O);if(ne){let Q=ne[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(E),Object.keys(ne).length===0&&m.delete(O)}i.remove(E)}function R(E){let v=i.get(E);n.deleteTexture(v.__webglTexture);let O=E.source,ne=m.get(O);delete ne[v.__cacheKey],o.memory.textures--}function B(E){let v=E.texture,O=i.get(E),ne=i.get(v);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(O.__webglFramebuffer[Q]))for(let ie=0;ie<O.__webglFramebuffer[Q].length;ie++)n.deleteFramebuffer(O.__webglFramebuffer[Q][ie]);else n.deleteFramebuffer(O.__webglFramebuffer[Q]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[Q])}else{if(Array.isArray(O.__webglFramebuffer))for(let Q=0;Q<O.__webglFramebuffer.length;Q++)n.deleteFramebuffer(O.__webglFramebuffer[Q]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Q=0;Q<O.__webglColorRenderbuffer.length;Q++)O.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[Q]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Q=0,ie=v.length;Q<ie;Q++){let me=i.get(v[Q]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(v[Q])}i.remove(v),i.remove(E)}let j=0;function W(){j=0}function J(){let E=j;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),j+=1,E}function q(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function K(E,v){let O=i.get(E);if(E.isVideoTexture&&pt(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){let ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(O,E,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function te(E,v){let O=i.get(E);if(E.version>0&&O.__version!==E.version){Ae(O,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function fe(E,v){let O=i.get(E);if(E.version>0&&O.__version!==E.version){Ae(O,E,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function z(E,v){let O=i.get(E);if(E.version>0&&O.__version!==E.version){Se(O,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}let Y={[du]:n.REPEAT,[dn]:n.CLAMP_TO_EDGE,[fu]:n.MIRRORED_REPEAT},ue={[Ot]:n.NEAREST,[Bp]:n.NEAREST_MIPMAP_NEAREST,[Il]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[PM]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},ye={[WM]:n.NEVER,[ZM]:n.ALWAYS,[jM]:n.LESS,[mg]:n.LEQUAL,[$M]:n.EQUAL,[YM]:n.GEQUAL,[qM]:n.GREATER,[XM]:n.NOTEQUAL};function _e(E,v,O){if(O?(n.texParameteri(E,n.TEXTURE_WRAP_S,Y[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Y[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Y[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ue[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ue[v.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==dn||v.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,S(v.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,S(v.minFilter)),v.minFilter!==Ot&&v.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ye[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ne=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ot||v.minFilter!==Il&&v.minFilter!==As||v.type===ri&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Cs&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(E,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Re(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",k));let ne=v.source,Q=m.get(ne);Q===void 0&&(Q={},m.set(ne,Q));let ie=q(v);if(ie!==E.__cacheKey){Q[ie]===void 0&&(Q[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[ie].usedTimes++;let me=Q[E.__cacheKey];me!==void 0&&(Q[E.__cacheKey].usedTimes--,me.usedTimes===0&&R(v)),E.__cacheKey=ie,E.__webglTexture=Q[ie].texture}return O}function Ae(E,v,O){let ne=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=n.TEXTURE_3D);let Q=Re(E,v),ie=v.source;t.bindTexture(ne,E.__webglTexture,n.TEXTURE0+O);let me=i.get(ie);if(ie.version!==me.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);let oe=Qe.getPrimaries(Qe.workingColorSpace),le=v.colorSpace===Kt?null:Qe.getPrimaries(v.colorSpace),C=v.colorSpace===Kt||oe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);let se=w(v)&&D(v.image)===!1,X=x(v.image,se,!1,u);X=mt(v,X);let be=D(X)||a,ge=s.convert(v.format,v.colorSpace),Ee=s.convert(v.type),pe=H(v.internalFormat,ge,Ee,v.colorSpace,v.isVideoTexture);_e(ne,v,be);let he,He=v.mipmaps,I=a&&v.isVideoTexture!==!0&&pe!==fg,ae=me.__version===void 0||Q===!0,Z=_(v,X,be);if(v.isDepthTexture)pe=n.DEPTH_COMPONENT,a?v.type===ri?pe=n.DEPTH_COMPONENT32F:v.type===ii?pe=n.DEPTH_COMPONENT24:v.type===Ri?pe=n.DEPTH24_STENCIL8:pe=n.DEPTH_COMPONENT16:v.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Pi&&pe===n.DEPTH_COMPONENT&&v.type!==qu&&v.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ii,Ee=s.convert(v.type)),v.format===Pr&&pe===n.DEPTH_COMPONENT&&(pe=n.DEPTH_STENCIL,v.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Ri,Ee=s.convert(v.type))),ae&&(I?t.texStorage2D(n.TEXTURE_2D,1,pe,X.width,X.height):t.texImage2D(n.TEXTURE_2D,0,pe,X.width,X.height,0,ge,Ee,null));else if(v.isDataTexture)if(He.length>0&&be){I&&ae&&t.texStorage2D(n.TEXTURE_2D,Z,pe,He[0].width,He[0].height);for(let G=0,re=He.length;G<re;G++)he=He[G],I?t.texSubImage2D(n.TEXTURE_2D,G,0,0,he.width,he.height,ge,Ee,he.data):t.texImage2D(n.TEXTURE_2D,G,pe,he.width,he.height,0,ge,Ee,he.data);v.generateMipmaps=!1}else I?(ae&&t.texStorage2D(n.TEXTURE_2D,Z,pe,X.width,X.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,X.width,X.height,ge,Ee,X.data)):t.texImage2D(n.TEXTURE_2D,0,pe,X.width,X.height,0,ge,Ee,X.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Z,pe,He[0].width,He[0].height,X.depth);for(let G=0,re=He.length;G<re;G++)he=He[G],v.format!==fn?ge!==null?I?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,he.width,he.height,X.depth,ge,he.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,pe,he.width,he.height,X.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,he.width,he.height,X.depth,ge,Ee,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,pe,he.width,he.height,X.depth,0,ge,Ee,he.data)}else{I&&ae&&t.texStorage2D(n.TEXTURE_2D,Z,pe,He[0].width,He[0].height);for(let G=0,re=He.length;G<re;G++)he=He[G],v.format!==fn?ge!==null?I?t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,he.width,he.height,ge,he.data):t.compressedTexImage2D(n.TEXTURE_2D,G,pe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage2D(n.TEXTURE_2D,G,0,0,he.width,he.height,ge,Ee,he.data):t.texImage2D(n.TEXTURE_2D,G,pe,he.width,he.height,0,ge,Ee,he.data)}else if(v.isDataArrayTexture)I?(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Z,pe,X.width,X.height,X.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,ge,Ee,X.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,X.width,X.height,X.depth,0,ge,Ee,X.data);else if(v.isData3DTexture)I?(ae&&t.texStorage3D(n.TEXTURE_3D,Z,pe,X.width,X.height,X.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,ge,Ee,X.data)):t.texImage3D(n.TEXTURE_3D,0,pe,X.width,X.height,X.depth,0,ge,Ee,X.data);else if(v.isFramebufferTexture){if(ae)if(I)t.texStorage2D(n.TEXTURE_2D,Z,pe,X.width,X.height);else{let G=X.width,re=X.height;for(let Me=0;Me<Z;Me++)t.texImage2D(n.TEXTURE_2D,Me,pe,G,re,0,ge,Ee,null),G>>=1,re>>=1}}else if(He.length>0&&be){I&&ae&&t.texStorage2D(n.TEXTURE_2D,Z,pe,He[0].width,He[0].height);for(let G=0,re=He.length;G<re;G++)he=He[G],I?t.texSubImage2D(n.TEXTURE_2D,G,0,0,ge,Ee,he):t.texImage2D(n.TEXTURE_2D,G,pe,ge,Ee,he);v.generateMipmaps=!1}else I?(ae&&t.texStorage2D(n.TEXTURE_2D,Z,pe,X.width,X.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Ee,X)):t.texImage2D(n.TEXTURE_2D,0,pe,ge,Ee,X);A(v,be)&&T(ne),me.__version=ie.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Se(E,v,O){if(v.image.length!==6)return;let ne=Re(E,v),Q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+O);let ie=i.get(Q);if(Q.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+O);let me=Qe.getPrimaries(Qe.workingColorSpace),oe=v.colorSpace===Kt?null:Qe.getPrimaries(v.colorSpace),le=v.colorSpace===Kt||me===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let C=v.isCompressedTexture||v.image[0].isCompressedTexture,se=v.image[0]&&v.image[0].isDataTexture,X=[];for(let G=0;G<6;G++)!C&&!se?X[G]=x(v.image[G],!1,!0,l):X[G]=se?v.image[G].image:v.image[G],X[G]=mt(v,X[G]);let be=X[0],ge=D(be)||a,Ee=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),he=H(v.internalFormat,Ee,pe,v.colorSpace),He=a&&v.isVideoTexture!==!0,I=ie.__version===void 0||ne===!0,ae=_(v,be,ge);_e(n.TEXTURE_CUBE_MAP,v,ge);let Z;if(C){He&&I&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,he,be.width,be.height);for(let G=0;G<6;G++){Z=X[G].mipmaps;for(let re=0;re<Z.length;re++){let Me=Z[re];v.format!==fn?Ee!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,0,0,Me.width,Me.height,Ee,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,he,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,0,0,Me.width,Me.height,Ee,pe,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,he,Me.width,Me.height,0,Ee,pe,Me.data)}}}else{Z=v.mipmaps,He&&I&&(Z.length>0&&ae++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,he,X[0].width,X[0].height));for(let G=0;G<6;G++)if(se){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,X[G].width,X[G].height,Ee,pe,X[G].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,he,X[G].width,X[G].height,0,Ee,pe,X[G].data);for(let re=0;re<Z.length;re++){let ze=Z[re].image[G].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,0,0,ze.width,ze.height,Ee,pe,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,he,ze.width,ze.height,0,Ee,pe,ze.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ee,pe,X[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,he,Ee,pe,X[G]);for(let re=0;re<Z.length;re++){let Me=Z[re];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,0,0,Ee,pe,Me.image[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,he,Ee,pe,Me.image[G])}}}A(v,ge)&&T(n.TEXTURE_CUBE_MAP),ie.__version=Q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Le(E,v,O,ne,Q,ie){let me=s.convert(O.format,O.colorSpace),oe=s.convert(O.type),le=H(O.internalFormat,me,oe,O.colorSpace);if(!i.get(v).__hasExternalTextures){let se=Math.max(1,v.width>>ie),X=Math.max(1,v.height>>ie);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ie,le,se,X,v.depth,0,me,oe,null):t.texImage2D(Q,ie,le,se,X,0,me,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),$e(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,Q,i.get(O).__webglTexture,0,Ce(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,Q,i.get(O).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(E,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||$e(v)){let Q=v.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ri?ne=n.DEPTH_COMPONENT32F:Q.type===ii&&(ne=n.DEPTH_COMPONENT24));let ie=Ce(v);$e(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){let ne=Ce(v);O&&$e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,v.width,v.height):$e(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{let ne=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Q=0;Q<ne.length;Q++){let ie=ne[Q],me=s.convert(ie.format,ie.colorSpace),oe=s.convert(ie.type),le=H(ie.internalFormat,me,oe,ie.colorSpace),C=Ce(v);O&&$e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,C,le,v.width,v.height):$e(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C,le,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,le,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function vt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);let ne=i.get(v.depthTexture).__webglTexture,Q=Ce(v);if(v.depthTexture.format===Pi)$e(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(v.depthTexture.format===Pr)$e(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function xe(E){let v=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");vt(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]=n.createRenderbuffer(),L(v.__webglDepthbuffer[ne],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),L(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(E,v,O){let ne=i.get(E);v!==void 0&&Le(ne.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&xe(E)}function Te(E){let v=E.texture,O=i.get(E),ne=i.get(v);E.addEventListener("dispose",$),E.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=v.version,o.memory.textures++);let Q=E.isWebGLCubeRenderTarget===!0,ie=E.isWebGLMultipleRenderTargets===!0,me=D(E)||a;if(Q){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let le=0;le<v.mipmaps.length;le++)O.__webglFramebuffer[oe][le]=n.createFramebuffer()}else O.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)O.__webglFramebuffer[oe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){let oe=E.texture;for(let le=0,C=oe.length;le<C;le++){let se=i.get(oe[le]);se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&$e(E)===!1){let oe=ie?v:[v];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<oe.length;le++){let C=oe[le];O.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[le]);let se=s.convert(C.format,C.colorSpace),X=s.convert(C.type),be=H(C.internalFormat,se,X,C.colorSpace,E.isXRRenderTarget===!0),ge=Ce(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,be,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,O.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),L(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),_e(n.TEXTURE_CUBE_MAP,v,me);for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)Le(O.__webglFramebuffer[oe][le],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else Le(O.__webglFramebuffer[oe],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);A(v,me)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){let oe=E.texture;for(let le=0,C=oe.length;le<C;le++){let se=oe[le],X=i.get(se);t.bindTexture(n.TEXTURE_2D,X.__webglTexture),_e(n.TEXTURE_2D,se,me),Le(O.__webglFramebuffer,E,se,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),A(se,me)&&T(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?oe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ne.__webglTexture),_e(oe,v,me),a&&v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)Le(O.__webglFramebuffer[le],E,v,n.COLOR_ATTACHMENT0,oe,le);else Le(O.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,oe,0);A(v,me)&&T(oe),t.unbindTexture()}E.depthBuffer&&xe(E)}function nt(E){let v=D(E)||a,O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0,Q=O.length;ne<Q;ne++){let ie=O[ne];if(A(ie,v)){let me=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(ie).__webglTexture;t.bindTexture(me,oe),T(me),t.unbindTexture()}}}function Oe(E){if(a&&E.samples>0&&$e(E)===!1){let v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],O=E.width,ne=E.height,Q=n.COLOR_BUFFER_BIT,ie=[],me=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(E),le=E.isWebGLMultipleRenderTargets===!0;if(le)for(let C=0;C<v.length;C++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let C=0;C<v.length;C++){ie.push(n.COLOR_ATTACHMENT0+C),E.depthBuffer&&ie.push(me);let se=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(se===!1&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),le&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[C]),se===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[me])),le){let X=i.get(v[C]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,X,0)}n.blitFramebuffer(0,0,O,ne,0,0,O,ne,Q,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let C=0;C<v.length;C++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,oe.__webglColorRenderbuffer[C]);let se=i.get(v[C]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ce(E){return Math.min(d,E.samples)}function $e(E){let v=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function pt(E){let v=o.render.frame;g.get(E)!==v&&(g.set(E,v),E.update())}function mt(E,v){let O=E.colorSpace,ne=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===hu||O!==kn&&O!==Kt&&(Qe.getTransfer(O)===it?a===!1?e.has("EXT_sRGB")===!0&&ne===fn?(E.format=hu,E.minFilter=Jt,E.generateMipmaps=!1):v=xa.sRGBToLinear(v):(ne!==fn||Q!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=J,this.resetTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=te,this.setTexture3D=fe,this.setTextureCube=z,this.rebindTextures=Ue,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=$e}function QT(n,e,t){let i=t.isWebGL2;function r(s,o=Kt){let a,c=Qe.getTransfer(o);if(s===ai)return n.UNSIGNED_BYTE;if(s===ag)return n.UNSIGNED_SHORT_4_4_4_4;if(s===cg)return n.UNSIGNED_SHORT_5_5_5_1;if(s===NM)return n.BYTE;if(s===LM)return n.SHORT;if(s===qu)return n.UNSIGNED_SHORT;if(s===og)return n.INT;if(s===ii)return n.UNSIGNED_INT;if(s===ri)return n.FLOAT;if(s===Cs)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===OM)return n.ALPHA;if(s===fn)return n.RGBA;if(s===FM)return n.LUMINANCE;if(s===UM)return n.LUMINANCE_ALPHA;if(s===Pi)return n.DEPTH_COMPONENT;if(s===Pr)return n.DEPTH_STENCIL;if(s===hu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===kM)return n.RED;if(s===lg)return n.RED_INTEGER;if(s===BM)return n.RG;if(s===ug)return n.RG_INTEGER;if(s===dg)return n.RGBA_INTEGER;if(s===Rl||s===Pl||s===Nl||s===Ll)if(c===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Rl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Rl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ll)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vp||s===Hp||s===zp||s===Gp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Vp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wp||s===jp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Wp)return c===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===jp)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$p||s===qp||s===Xp||s===Yp||s===Zp||s===Jp||s===Kp||s===Qp||s===em||s===tm||s===nm||s===im||s===rm||s===sm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===$p)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qp)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xp)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yp)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zp)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jp)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kp)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qp)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===em)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tm)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nm)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===im)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rm)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sm)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ol||s===om||s===am)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ol)return c===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===om)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===am)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===VM||s===cm||s===lm||s===um)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ol)return a.COMPRESSED_RED_RGTC1_EXT;if(s===cm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===lm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===um)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ri?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Du=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Tr=class extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},eA={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),h=this._getHandJoint(l,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eA)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Tr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Iu=class extends En{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,g=null,y=t.getContextAttributes(),m=null,h=null,b=[],x=[],D=new Ie,w=null,A=new Et;A.layers.enable(1),A.viewport=new rt;let T=new Et;T.layers.enable(2),T.viewport=new rt;let H=[A,T],_=new Du;_.layers.enable(1),_.layers.enable(2);let S=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Y=b[z];return Y===void 0&&(Y=new Ts,b[z]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(z){let Y=b[z];return Y===void 0&&(Y=new Ts,b[z]=Y),Y.getGripSpace()},this.getHand=function(z){let Y=b[z];return Y===void 0&&(Y=new Ts,b[z]=Y),Y.getHandSpace()};function $(z){let Y=x.indexOf(z.inputSource);if(Y===-1)return;let ue=b[Y];ue!==void 0&&(ue.update(z.inputSource,z.frame,l||o),ue.dispatchEvent({type:z.type,data:z.inputSource}))}function ee(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",R);for(let z=0;z<b.length;z++){let Y=x[z];Y!==null&&(x[z]=null,b[z].disconnect(Y))}S=null,k=null,e.setRenderTarget(m),p=null,f=null,d=null,r=null,h=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(z){return zr(this,null,function*(){if(r=z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",R),y.xrCompatible!==!0&&(yield t.makeXRCompatible()),w=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new Bn(p.framebufferWidth,p.framebufferHeight,{format:fn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Y=null,ue=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=y.stencil?Pr:Pi,ue=y.stencil?Ri:ii);let _e={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(_e),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new Bn(f.textureWidth,f.textureHeight,{format:fn,type:ai,depthTexture:new Ia(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let Re=e.properties.get(h);Re.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function R(z){for(let Y=0;Y<z.removed.length;Y++){let ue=z.removed[Y],ye=x.indexOf(ue);ye>=0&&(x[ye]=null,b[ye].disconnect(ue))}for(let Y=0;Y<z.added.length;Y++){let ue=z.added[Y],ye=x.indexOf(ue);if(ye===-1){for(let Re=0;Re<b.length;Re++)if(Re>=x.length){x.push(ue),ye=Re;break}else if(x[Re]===null){x[Re]=ue,ye=Re;break}if(ye===-1)break}let _e=b[ye];_e&&_e.connect(ue)}}let B=new P,j=new P;function W(z,Y,ue){B.setFromMatrixPosition(Y.matrixWorld),j.setFromMatrixPosition(ue.matrixWorld);let ye=B.distanceTo(j),_e=Y.projectionMatrix.elements,Re=ue.projectionMatrix.elements,Ae=_e[14]/(_e[10]-1),Se=_e[14]/(_e[10]+1),Le=(_e[9]+1)/_e[5],L=(_e[9]-1)/_e[5],vt=(_e[8]-1)/_e[0],xe=(Re[8]+1)/Re[0],Ue=Ae*vt,Te=Ae*xe,nt=ye/(-vt+xe),Oe=nt*-vt;Y.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Oe),z.translateZ(nt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let Ce=Ae+nt,$e=Se+nt,pt=Ue-Oe,mt=Te+(ye-Oe),E=Le*Se/$e*Ce,v=L*Se/$e*Ce;z.projectionMatrix.makePerspective(pt,mt,E,v,Ce,$e),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function J(z,Y){Y===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Y.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;_.near=T.near=A.near=z.near,_.far=T.far=A.far=z.far,(S!==_.near||k!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,k=_.far);let Y=z.parent,ue=_.cameras;J(_,Y);for(let ye=0;ye<ue.length;ye++)J(ue[ye],Y);ue.length===2?W(_,A,T):_.projectionMatrix.copy(A.projectionMatrix),q(z,_,Y)};function q(z,Y,ue){ue===null?z.matrix.copy(Y.matrixWorld):(z.matrix.copy(ue.matrixWorld),z.matrix.invert(),z.matrix.multiply(Y.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Y.projectionMatrix),z.projectionMatrixInverse.copy(Y.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ds*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(z){c=z,f!==null&&(f.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let K=null;function te(z,Y){if(u=Y.getViewerPose(l||o),g=Y,u!==null){let ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ye=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,ye=!0);for(let _e=0;_e<ue.length;_e++){let Re=ue[_e],Ae=null;if(p!==null)Ae=p.getViewport(Re);else{let Le=d.getViewSubImage(f,Re);Ae=Le.viewport,_e===0&&(e.setRenderTargetTextures(h,Le.colorTexture,f.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(h))}let Se=H[_e];Se===void 0&&(Se=new Et,Se.layers.enable(_e),Se.viewport=new rt,H[_e]=Se),Se.matrix.fromArray(Re.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Re.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),_e===0&&(_.matrix.copy(Se.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ye===!0&&_.cameras.push(Se)}}for(let ue=0;ue<b.length;ue++){let ye=x[ue],_e=b[ue];ye!==null&&_e!==void 0&&_e.update(ye,Y,l||o)}K&&K(z,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}let fe=new xg;fe.setAnimationLoop(te),this.setAnimationLoop=function(z){K=z},this.dispose=function(){}}};function tA(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,_g(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,b,x,D){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,D)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,b,x):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Bt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Bt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let b=e.get(h).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,b,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Bt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){let b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nA(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,x){let D=x.program;i.uniformBlockBinding(b,D)}function l(b,x){let D=r[b.id];D===void 0&&(g(b),D=u(b),r[b.id]=D,b.addEventListener("dispose",m));let w=x.program;i.updateUBOMapping(b,w);let A=e.render.frame;s[b.id]!==A&&(f(b),s[b.id]=A)}function u(b){let x=d();b.__bindingPointIndex=x;let D=n.createBuffer(),w=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,w,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,D),D}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let x=r[b.id],D=b.uniforms,w=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,T=D.length;A<T;A++){let H=D[A];if(p(H,A,w)===!0){let _=H.__offset,S=Array.isArray(H.value)?H.value:[H.value],k=0;for(let $=0;$<S.length;$++){let ee=S[$],R=y(ee);typeof ee=="number"?(H.__data[0]=ee,n.bufferSubData(n.UNIFORM_BUFFER,_+k,H.__data)):ee.isMatrix3?(H.__data[0]=ee.elements[0],H.__data[1]=ee.elements[1],H.__data[2]=ee.elements[2],H.__data[3]=ee.elements[0],H.__data[4]=ee.elements[3],H.__data[5]=ee.elements[4],H.__data[6]=ee.elements[5],H.__data[7]=ee.elements[0],H.__data[8]=ee.elements[6],H.__data[9]=ee.elements[7],H.__data[10]=ee.elements[8],H.__data[11]=ee.elements[0]):(ee.toArray(H.__data,k),k+=R.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,_,H.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,x,D){let w=b.value;if(D[x]===void 0){if(typeof w=="number")D[x]=w;else{let A=Array.isArray(w)?w:[w],T=[];for(let H=0;H<A.length;H++)T.push(A[H].clone());D[x]=T}return!0}else if(typeof w=="number"){if(D[x]!==w)return D[x]=w,!0}else{let A=Array.isArray(D[x])?D[x]:[D[x]],T=Array.isArray(w)?w:[w];for(let H=0;H<A.length;H++){let _=A[H];if(_.equals(T[H])===!1)return _.copy(T[H]),!0}}return!1}function g(b){let x=b.uniforms,D=0,w=16,A=0;for(let T=0,H=x.length;T<H;T++){let _=x[T],S={boundary:0,storage:0},k=Array.isArray(_.value)?_.value:[_.value];for(let $=0,ee=k.length;$<ee;$++){let R=k[$],B=y(R);S.boundary+=B.boundary,S.storage+=B.storage}if(_.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),_.__offset=D,T>0){A=D%w;let $=w-A;A!==0&&$-S.boundary<0&&(D+=w-A,_.__offset=D)}D+=S.storage}return A=D%w,A>0&&(D+=w-A),b.__size=D,b.__cache={},this}function y(b){let x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){let x=b.target;x.removeEventListener("dispose",m);let D=o.indexOf(x.__bindingPointIndex);o.splice(D,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}var Fi=class{constructor(e={}){let{canvas:t=dE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,h=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;let x=this,D=!1,w=0,A=0,T=null,H=-1,_=null,S=new rt,k=new rt,$=null,ee=new Be(0),R=0,B=t.width,j=t.height,W=1,J=null,q=null,K=new rt(0,0,B,j),te=new rt(0,0,B,j),fe=!1,z=new Ns,Y=!1,ue=!1,ye=null,_e=new ft,Re=new Ie,Ae=new P,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return T===null?W:1}let L=i;function vt(M,N){for(let U=0;U<M.length;U++){let V=M[U],F=t.getContext(V,N);if(F!==null)return F}return null}try{let M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ju}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ae,!1),L===null){let N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),L=vt(N,M),L===null)throw vt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let xe,Ue,Te,nt,Oe,Ce,$e,pt,mt,E,v,O,ne,Q,ie,me,oe,le,C,se,X,be,ge,Ee;function pe(){xe=new ES(L),Ue=new gS(L,xe,e),xe.init(Ue),be=new QT(L,xe,Ue),Te=new JT(L,xe,Ue),nt=new SS(L),Oe=new BT,Ce=new KT(L,xe,Te,Oe,Ue,be,nt),$e=new vS(x),pt=new MS(x),mt=new NE(L,Ue),ge=new pS(L,xe,mt,Ue),E=new bS(L,mt,nt,ge),v=new DS(L,E,mt,nt),C=new CS(L,Ue,Ce),me=new yS(Oe),O=new kT(x,$e,pt,xe,Ue,ge,me),ne=new tA(x,Oe),Q=new HT,ie=new qT(xe,Ue),le=new hS(x,$e,pt,Te,v,f,c),oe=new ZT(x,v,Ue),Ee=new nA(L,nt,Ue,Te),se=new mS(L,xe,nt,Ue),X=new wS(L,xe,nt,Ue),nt.programs=O.programs,x.capabilities=Ue,x.extensions=xe,x.properties=Oe,x.renderLists=Q,x.shadowMap=oe,x.state=Te,x.info=nt}pe();let he=new Iu(x,L);this.xr=he,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=xe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=xe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(B,j,!1))},this.getSize=function(M){return M.set(B,j)},this.setSize=function(M,N,U=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,j=N,t.width=Math.floor(M*W),t.height=Math.floor(N*W),U===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(B*W,j*W).floor()},this.setDrawingBufferSize=function(M,N,U){B=M,j=N,W=U,t.width=Math.floor(M*U),t.height=Math.floor(N*U),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(K)},this.setViewport=function(M,N,U,V){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,N,U,V),Te.viewport(S.copy(K).multiplyScalar(W).floor())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,N,U,V){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,N,U,V),Te.scissor(k.copy(te).multiplyScalar(W).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(M){Te.setScissorTest(fe=M)},this.setOpaqueSort=function(M){J=M},this.setTransparentSort=function(M){q=M},this.getClearColor=function(M){return M.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(M=!0,N=!0,U=!0){let V=0;if(M){let F=!1;if(T!==null){let de=T.texture.format;F=de===dg||de===ug||de===lg}if(F){let de=T.texture.type,ve=de===ai||de===ii||de===qu||de===Ri||de===ag||de===cg,we=le.getClearColor(),De=le.getClearAlpha(),Ve=we.r,Pe=we.g,Fe=we.b;ve?(p[0]=Ve,p[1]=Pe,p[2]=Fe,p[3]=De,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=Ve,g[1]=Pe,g[2]=Fe,g[3]=De,L.clearBufferiv(L.COLOR,0,g))}else V|=L.COLOR_BUFFER_BIT}N&&(V|=L.DEPTH_BUFFER_BIT),U&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Q.dispose(),ie.dispose(),Oe.dispose(),$e.dispose(),pt.dispose(),v.dispose(),ge.dispose(),Ee.dispose(),O.dispose(),he.dispose(),he.removeEventListener("sessionstart",It),he.removeEventListener("sessionend",tt),ye&&(ye.dispose(),ye=null),Rt.stop()};function He(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let M=nt.autoReset,N=oe.enabled,U=oe.autoUpdate,V=oe.needsUpdate,F=oe.type;pe(),nt.autoReset=M,oe.enabled=N,oe.autoUpdate=U,oe.needsUpdate=V,oe.type=F}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Z(M){let N=M.target;N.removeEventListener("dispose",Z),G(N)}function G(M){re(M),Oe.remove(M)}function re(M){let N=Oe.get(M).programs;N!==void 0&&(N.forEach(function(U){O.releaseProgram(U)}),M.isShaderMaterial&&O.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,U,V,F,de){N===null&&(N=Se);let ve=F.isMesh&&F.matrixWorld.determinant()<0,we=Ug(M,N,U,V,F);Te.setMaterial(V,ve);let De=U.index,Ve=1;if(V.wireframe===!0){if(De=E.getWireframeAttribute(U),De===void 0)return;Ve=2}let Pe=U.drawRange,Fe=U.attributes.position,ct=Pe.start*Ve,Vt=(Pe.start+Pe.count)*Ve;de!==null&&(ct=Math.max(ct,de.start*Ve),Vt=Math.min(Vt,(de.start+de.count)*Ve)),De!==null?(ct=Math.max(ct,0),Vt=Math.min(Vt,De.count)):Fe!=null&&(ct=Math.max(ct,0),Vt=Math.min(Vt,Fe.count));let xt=Vt-ct;if(xt<0||xt===1/0)return;ge.setup(F,V,we,U,De);let wn,st=se;if(De!==null&&(wn=mt.get(De),st=X,st.setIndex(wn)),F.isMesh)V.wireframe===!0?(Te.setLineWidth(V.wireframeLinewidth*Le()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(F.isLine){let Ge=V.linewidth;Ge===void 0&&(Ge=1),Te.setLineWidth(Ge*Le()),F.isLineSegments?st.setMode(L.LINES):F.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else F.isPoints?st.setMode(L.POINTS):F.isSprite&&st.setMode(L.TRIANGLES);if(F.isBatchedMesh)st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)st.renderInstances(ct,xt,F.count);else if(U.isInstancedBufferGeometry){let Ge=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,ka=Math.min(U.instanceCount,Ge);st.renderInstances(ct,xt,ka)}else st.render(ct,xt)};function Me(M,N,U){M.transparent===!0&&M.side===Fn&&M.forceSinglePass===!1?(M.side=Bt,M.needsUpdate=!0,Us(M,N,U),M.side=ci,M.needsUpdate=!0,Us(M,N,U),M.side=Fn):Us(M,N,U)}this.compile=function(M,N,U=null){U===null&&(U=M),m=ie.get(U),m.init(),b.push(m),U.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),M!==U&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(x._useLegacyLights);let V=new Set;return M.traverse(function(F){let de=F.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){let we=de[ve];Me(we,U,F),V.add(we)}else Me(de,U,F),V.add(de)}),b.pop(),m=null,V},this.compileAsync=function(M,N,U=null){let V=this.compile(M,N,U);return new Promise(F=>{function de(){if(V.forEach(function(ve){Oe.get(ve).currentProgram.isReady()&&V.delete(ve)}),V.size===0){F(M);return}setTimeout(de,10)}xe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ze=null;function _t(M){ze&&ze(M)}function It(){Rt.stop()}function tt(){Rt.start()}let Rt=new xg;Rt.setAnimationLoop(_t),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(M){ze=M,he.setAnimationLoop(M),M===null?Rt.stop():Rt.start()},he.addEventListener("sessionstart",It),he.addEventListener("sessionend",tt),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(N),N=he.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,N,T),m=ie.get(M,b.length),m.init(),b.push(m),_e.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),z.setFromProjectionMatrix(_e),ue=this.localClippingEnabled,Y=me.init(this.clippingPlanes,ue),y=Q.get(M,h.length),y.init(),h.push(y),mn(M,N,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(J,q),this.info.render.frame++,Y===!0&&me.beginShadows();let U=m.state.shadowsArray;if(oe.render(U,M,N),Y===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),le.render(y,M),m.setupLights(x._useLegacyLights),N.isArrayCamera){let V=N.cameras;for(let F=0,de=V.length;F<de;F++){let ve=V[F];td(y,M,ve,ve.viewport)}}else td(y,M,N);T!==null&&(Ce.updateMultisampleRenderTarget(T),Ce.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(x,M,N),ge.resetDefaultState(),H=-1,_=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function mn(M,N,U,V){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)U=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||z.intersectsSprite(M)){V&&Ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_e);let ve=v.update(M),we=M.material;we.visible&&y.push(M,ve,we,U,Ae.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||z.intersectsObject(M))){let ve=v.update(M),we=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ae.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ae.copy(ve.boundingSphere.center)),Ae.applyMatrix4(M.matrixWorld).applyMatrix4(_e)),Array.isArray(we)){let De=ve.groups;for(let Ve=0,Pe=De.length;Ve<Pe;Ve++){let Fe=De[Ve],ct=we[Fe.materialIndex];ct&&ct.visible&&y.push(M,ve,ct,U,Ae.z,Fe)}}else we.visible&&y.push(M,ve,we,U,Ae.z,null)}}let de=M.children;for(let ve=0,we=de.length;ve<we;ve++)mn(de[ve],N,U,V)}function td(M,N,U,V){let F=M.opaque,de=M.transmissive,ve=M.transparent;m.setupLightsView(U),Y===!0&&me.setGlobalState(x.clippingPlanes,U),de.length>0&&Fg(F,de,N,U),V&&Te.viewport(S.copy(V)),F.length>0&&Fs(F,N,U),de.length>0&&Fs(de,N,U),ve.length>0&&Fs(ve,N,U),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Fg(M,N,U,V){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;let de=Ue.isWebGL2;ye===null&&(ye=new Bn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Cs:ai,minFilter:As,samples:de?4:0})),x.getDrawingBufferSize(Re),de?ye.setSize(Re.x,Re.y):ye.setSize(va(Re.x),va(Re.y));let ve=x.getRenderTarget();x.setRenderTarget(ye),x.getClearColor(ee),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();let we=x.toneMapping;x.toneMapping=oi,Fs(M,U,V),Ce.updateMultisampleRenderTarget(ye),Ce.updateRenderTargetMipmap(ye);let De=!1;for(let Ve=0,Pe=N.length;Ve<Pe;Ve++){let Fe=N[Ve],ct=Fe.object,Vt=Fe.geometry,xt=Fe.material,wn=Fe.group;if(xt.side===Fn&&ct.layers.test(V.layers)){let st=xt.side;xt.side=Bt,xt.needsUpdate=!0,nd(ct,U,V,Vt,xt,wn),xt.side=st,xt.needsUpdate=!0,De=!0}}De===!0&&(Ce.updateMultisampleRenderTarget(ye),Ce.updateRenderTargetMipmap(ye)),x.setRenderTarget(ve),x.setClearColor(ee,R),x.toneMapping=we}function Fs(M,N,U){let V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,de=M.length;F<de;F++){let ve=M[F],we=ve.object,De=ve.geometry,Ve=V===null?ve.material:V,Pe=ve.group;we.layers.test(U.layers)&&nd(we,N,U,De,Ve,Pe)}}function nd(M,N,U,V,F,de){M.onBeforeRender(x,N,U,V,F,de),M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,N,U,V,M,de),F.transparent===!0&&F.side===Fn&&F.forceSinglePass===!1?(F.side=Bt,F.needsUpdate=!0,x.renderBufferDirect(U,N,V,F,M,de),F.side=ci,F.needsUpdate=!0,x.renderBufferDirect(U,N,V,F,M,de),F.side=Fn):x.renderBufferDirect(U,N,V,F,M,de),M.onAfterRender(x,N,U,V,F,de)}function Us(M,N,U){N.isScene!==!0&&(N=Se);let V=Oe.get(M),F=m.state.lights,de=m.state.shadowsArray,ve=F.state.version,we=O.getParameters(M,F.state,de,N,U),De=O.getProgramCacheKey(we),Ve=V.programs;V.environment=M.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(M.isMeshStandardMaterial?pt:$e).get(M.envMap||V.environment),Ve===void 0&&(M.addEventListener("dispose",Z),Ve=new Map,V.programs=Ve);let Pe=Ve.get(De);if(Pe!==void 0){if(V.currentProgram===Pe&&V.lightsStateVersion===ve)return rd(M,we),Pe}else we.uniforms=O.getUniforms(M),M.onBuild(U,we,x),M.onBeforeCompile(we,x),Pe=O.acquireProgram(we,De),Ve.set(De,Pe),V.uniforms=we.uniforms;let Fe=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Fe.clippingPlanes=me.uniform),rd(M,we),V.needsLights=Bg(M),V.lightsStateVersion=ve,V.needsLights&&(Fe.ambientLightColor.value=F.state.ambient,Fe.lightProbe.value=F.state.probe,Fe.directionalLights.value=F.state.directional,Fe.directionalLightShadows.value=F.state.directionalShadow,Fe.spotLights.value=F.state.spot,Fe.spotLightShadows.value=F.state.spotShadow,Fe.rectAreaLights.value=F.state.rectArea,Fe.ltc_1.value=F.state.rectAreaLTC1,Fe.ltc_2.value=F.state.rectAreaLTC2,Fe.pointLights.value=F.state.point,Fe.pointLightShadows.value=F.state.pointShadow,Fe.hemisphereLights.value=F.state.hemi,Fe.directionalShadowMap.value=F.state.directionalShadowMap,Fe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Fe.spotShadowMap.value=F.state.spotShadowMap,Fe.spotLightMatrix.value=F.state.spotLightMatrix,Fe.spotLightMap.value=F.state.spotLightMap,Fe.pointShadowMap.value=F.state.pointShadowMap,Fe.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Pe,V.uniformsList=null,Pe}function id(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=Dr.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function rd(M,N){let U=Oe.get(M);U.outputColorSpace=N.outputColorSpace,U.batching=N.batching,U.instancing=N.instancing,U.instancingColor=N.instancingColor,U.skinning=N.skinning,U.morphTargets=N.morphTargets,U.morphNormals=N.morphNormals,U.morphColors=N.morphColors,U.morphTargetsCount=N.morphTargetsCount,U.numClippingPlanes=N.numClippingPlanes,U.numIntersection=N.numClipIntersection,U.vertexAlphas=N.vertexAlphas,U.vertexTangents=N.vertexTangents,U.toneMapping=N.toneMapping}function Ug(M,N,U,V,F){N.isScene!==!0&&(N=Se),Ce.resetTextureUnits();let de=N.fog,ve=V.isMeshStandardMaterial?N.environment:null,we=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:kn,De=(V.isMeshStandardMaterial?pt:$e).get(V.envMap||ve),Ve=V.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Pe=!!U.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Fe=!!U.morphAttributes.position,ct=!!U.morphAttributes.normal,Vt=!!U.morphAttributes.color,xt=oi;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xt=x.toneMapping);let wn=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,st=wn!==void 0?wn.length:0,Ge=Oe.get(V),ka=m.state.lights;if(Y===!0&&(ue===!0||M!==_)){let qt=M===_&&V.id===H;me.setState(V,M,qt)}let ot=!1;V.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==ka.state.version||Ge.outputColorSpace!==we||F.isBatchedMesh&&Ge.batching===!1||!F.isBatchedMesh&&Ge.batching===!0||F.isInstancedMesh&&Ge.instancing===!1||!F.isInstancedMesh&&Ge.instancing===!0||F.isSkinnedMesh&&Ge.skinning===!1||!F.isSkinnedMesh&&Ge.skinning===!0||F.isInstancedMesh&&Ge.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ge.instancingColor===!1&&F.instanceColor!==null||Ge.envMap!==De||V.fog===!0&&Ge.fog!==de||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==me.numPlanes||Ge.numIntersection!==me.numIntersection)||Ge.vertexAlphas!==Ve||Ge.vertexTangents!==Pe||Ge.morphTargets!==Fe||Ge.morphNormals!==ct||Ge.morphColors!==Vt||Ge.toneMapping!==xt||Ue.isWebGL2===!0&&Ge.morphTargetsCount!==st)&&(ot=!0):(ot=!0,Ge.__version=V.version);let li=Ge.currentProgram;ot===!0&&(li=Us(V,N,F));let sd=!1,Hr=!1,Ba=!1,St=li.getUniforms(),ui=Ge.uniforms;if(Te.useProgram(li.program)&&(sd=!0,Hr=!0,Ba=!0),V.id!==H&&(H=V.id,Hr=!0),sd||_!==M){St.setValue(L,"projectionMatrix",M.projectionMatrix),St.setValue(L,"viewMatrix",M.matrixWorldInverse);let qt=St.map.cameraPosition;qt!==void 0&&qt.setValue(L,Ae.setFromMatrixPosition(M.matrixWorld)),Ue.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),_!==M&&(_=M,Hr=!0,Ba=!0)}if(F.isSkinnedMesh){St.setOptional(L,F,"bindMatrix"),St.setOptional(L,F,"bindMatrixInverse");let qt=F.skeleton;qt&&(Ue.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),St.setValue(L,"boneTexture",qt.boneTexture,Ce)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(St.setOptional(L,F,"batchingTexture"),St.setValue(L,"batchingTexture",F._matricesTexture,Ce));let Va=U.morphAttributes;if((Va.position!==void 0||Va.normal!==void 0||Va.color!==void 0&&Ue.isWebGL2===!0)&&C.update(F,U,li),(Hr||Ge.receiveShadow!==F.receiveShadow)&&(Ge.receiveShadow=F.receiveShadow,St.setValue(L,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ui.envMap.value=De,ui.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Hr&&(St.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&kg(ui,Ba),de&&V.fog===!0&&ne.refreshFogUniforms(ui,de),ne.refreshMaterialUniforms(ui,V,W,j,ye),Dr.upload(L,id(Ge),ui,Ce)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Dr.upload(L,id(Ge),ui,Ce),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(L,"center",F.center),St.setValue(L,"modelViewMatrix",F.modelViewMatrix),St.setValue(L,"normalMatrix",F.normalMatrix),St.setValue(L,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let qt=V.uniformsGroups;for(let Ha=0,Vg=qt.length;Ha<Vg;Ha++)if(Ue.isWebGL2){let od=qt[Ha];Ee.update(od,li),Ee.bind(od,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function kg(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Bg(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,N,U){Oe.get(M.texture).__webglTexture=N,Oe.get(M.depthTexture).__webglTexture=U;let V=Oe.get(M);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=U===void 0,V.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,N){let U=Oe.get(M);U.__webglFramebuffer=N,U.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,U=0){T=M,w=N,A=U;let V=!0,F=null,de=!1,ve=!1;if(M){let De=Oe.get(M);De.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(L.FRAMEBUFFER,null),V=!1):De.__webglFramebuffer===void 0?Ce.setupRenderTarget(M):De.__hasExternalTextures&&Ce.rebindTextures(M,Oe.get(M.texture).__webglTexture,Oe.get(M.depthTexture).__webglTexture);let Ve=M.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ve=!0);let Pe=Oe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[N])?F=Pe[N][U]:F=Pe[N],de=!0):Ue.isWebGL2&&M.samples>0&&Ce.useMultisampledRTT(M)===!1?F=Oe.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[U]:F=Pe,S.copy(M.viewport),k.copy(M.scissor),$=M.scissorTest}else S.copy(K).multiplyScalar(W).floor(),k.copy(te).multiplyScalar(W).floor(),$=fe;if(Te.bindFramebuffer(L.FRAMEBUFFER,F)&&Ue.drawBuffers&&V&&Te.drawBuffers(M,F),Te.viewport(S),Te.scissor(k),Te.setScissorTest($),de){let De=Oe.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,De.__webglTexture,U)}else if(ve){let De=Oe.get(M.texture),Ve=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,De.__webglTexture,U||0,Ve)}H=-1},this.readRenderTargetPixels=function(M,N,U,V,F,de,ve){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we){Te.bindFramebuffer(L.FRAMEBUFFER,we);try{let De=M.texture,Ve=De.format,Pe=De.type;if(Ve!==fn&&be.convert(Ve)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Fe=Pe===Cs&&(xe.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Pe!==ai&&be.convert(Pe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===ri&&(Ue.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-V&&U>=0&&U<=M.height-F&&L.readPixels(N,U,V,F,be.convert(Ve),be.convert(Pe),de)}finally{let De=T!==null?Oe.get(T).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(M,N,U=0){let V=Math.pow(2,-U),F=Math.floor(N.image.width*V),de=Math.floor(N.image.height*V);Ce.setTexture2D(N,0),L.copyTexSubImage2D(L.TEXTURE_2D,U,0,0,M.x,M.y,F,de),Te.unbindTexture()},this.copyTextureToTexture=function(M,N,U,V=0){let F=N.image.width,de=N.image.height,ve=be.convert(U.format),we=be.convert(U.type);Ce.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment),N.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,V,M.x,M.y,F,de,ve,we,N.image.data):N.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,V,M.x,M.y,N.mipmaps[0].width,N.mipmaps[0].height,ve,N.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,V,M.x,M.y,ve,we,N.image),V===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(M,N,U,V,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let de=M.max.x-M.min.x+1,ve=M.max.y-M.min.y+1,we=M.max.z-M.min.z+1,De=be.convert(V.format),Ve=be.convert(V.type),Pe;if(V.isData3DTexture)Ce.setTexture3D(V,0),Pe=L.TEXTURE_3D;else if(V.isDataArrayTexture)Ce.setTexture2DArray(V,0),Pe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);let Fe=L.getParameter(L.UNPACK_ROW_LENGTH),ct=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Vt=L.getParameter(L.UNPACK_SKIP_PIXELS),xt=L.getParameter(L.UNPACK_SKIP_ROWS),wn=L.getParameter(L.UNPACK_SKIP_IMAGES),st=U.isCompressedTexture?U.mipmaps[0]:U.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,st.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,M.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,M.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,M.min.z),U.isDataTexture||U.isData3DTexture?L.texSubImage3D(Pe,F,N.x,N.y,N.z,de,ve,we,De,Ve,st.data):U.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Pe,F,N.x,N.y,N.z,de,ve,we,De,st.data)):L.texSubImage3D(Pe,F,N.x,N.y,N.z,de,ve,we,De,Ve,st),L.pixelStorei(L.UNPACK_ROW_LENGTH,Fe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,xt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wn),F===0&&V.generateMipmaps&&L.generateMipmap(Pe),Te.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Ce.setTextureCube(M,0):M.isData3DTexture?Ce.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ce.setTexture2DArray(M,0):Ce.setTexture2D(M,0),Te.unbindTexture()},this.resetState=function(){w=0,A=0,T=null,Te.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Xu?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===La?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wt?Ni:hg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ni?wt:kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ru=class extends Fi{};Ru.prototype.isWebGL1Renderer=!0;var Lr=class extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ra=class extends Oi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pg,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ua(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function iA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Or=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pu=class extends Or{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dm,endingEnd:dm}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case fm:s=e,a=2*t-i;break;case hm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case fm:o=e,c=2*i-t;break;case hm:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,h=-f*m+2*f*y-f*g,b=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*y+.5*g,D=p*m-p*y;for(let w=0;w!==a;++w)s[w]=h*o[u+w]+b*o[l+w]+x*o[c+w]+D*o[d+w];return s}},Nu=class extends Or{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},Lu=class extends Or{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ua(t,this.TimeBufferType),this.values=ua(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ua(e.times,Array),values:ua(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Lu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fa:t=this.InterpolantFactoryMethodDiscrete;break;case ha:t=this.InterpolantFactoryMethodLinear;break;case Fl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fa;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&iA(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Fl,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[f+g]||y!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=ha;var Ui=class extends pn{};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=fa;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ou=class extends pn{};Ou.prototype.ValueTypeName="color";var Fu=class extends pn{};Fu.prototype.ValueTypeName="number";var Uu=class extends Or{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)hn.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ls=class extends pn{InterpolantFactoryMethodLinear(e){return new Uu(this.times,this.values,this.getValueSize(),e)}};Ls.prototype.ValueTypeName="quaternion";Ls.prototype.DefaultInterpolation=ha;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends pn{};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=fa;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var ku=class extends pn{};ku.prototype.ValueTypeName="vector";var tg={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Bu=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},rA=new Bu,Ju=(()=>{class n{constructor(t){this.manager=t!==void 0?t:rA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})(),Ln={},Vu=class extends Error{constructor(e,t){super(e),this.response=t}},Pa=class extends Ju{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=tg.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ln[e]!==void 0){Ln[e].push({onLoad:t,onProgress:i,onError:r});return}Ln[e]=[],Ln[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Ln[e],d=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0,y=0,m=new ReadableStream({start(h){b();function b(){d.read().then(({done:x,value:D})=>{if(x)h.close();else{y+=D.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let A=0,T=u.length;A<T;A++){let H=u[A];H.onProgress&&H.onProgress(w)}h.enqueue(D),b()}})}}});return new Response(m)}else throw new Vu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{tg.add(e,l);let u=Ln[e];delete Ln[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=Ln[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ln[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Hu=class extends Hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var su=new ft,ng=new P,ig=new P,zu=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ng.setFromMatrixPosition(e.matrixWorld),t.position.copy(ng),ig.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ig),t.updateMatrixWorld(),su.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var rg=new ft,Ms=new P,ou=new P,Gu=class extends zu{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ms.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ms),ou.copy(i.position),ou.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ou),i.updateMatrixWorld(),r.makeTranslation(-Ms.x,-Ms.y,-Ms.z),rg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rg)}},Fr=class extends Hu{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Gu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};var Ku="\\[\\]\\.:\\/",sA=new RegExp("["+Ku+"]","g"),Qu="[^"+Ku+"]",oA="[^"+Ku.replace("\\.","")+"]",aA=/((?:WC+[\/:])*)/.source.replace("WC",Qu),cA=/(WCOD+)?/.source.replace("WCOD",oA),lA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),uA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),dA=new RegExp("^"+aA+cA+lA+uA+"$"),fA=["material","materials","bones","map"],Wu=class{constructor(e,t,i){let r=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sA,"")}static parseTrackName(t){let i=dA.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);fA.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Wu,n})();dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cR=new Float32Array(1);var Os=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ju}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ju);var Ag={type:"change"},ed={type:"start"},Cg={type:"end"},Fa=new Rs,Dg=new un,hA=Math.cos(70*gg.DEG2RAD),Vr=class extends En{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",v),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",v),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ag),i.update(),s=r.NONE},this.update=function(){let C=new P,se=new hn().setFromUnitVectors(e.up,new P(0,1,0)),X=se.clone().invert(),be=new P,ge=new hn,Ee=new P,pe=2*Math.PI;return function(He=null){let I=i.object.position;C.copy(I).sub(i.target),C.applyQuaternion(se),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&k(_(He)),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ae=i.minAzimuthAngle,Z=i.maxAzimuthAngle;isFinite(ae)&&isFinite(Z)&&(ae<-Math.PI?ae+=pe:ae>Math.PI&&(ae-=pe),Z<-Math.PI?Z+=pe:Z>Math.PI&&(Z-=pe),ae<=Z?a.theta=Math.max(ae,Math.min(Z,a.theta)):a.theta=a.theta>(ae+Z)/2?Math.max(ae,a.theta):Math.min(Z,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&A||i.object.isOrthographicCamera?a.radius=q(a.radius):a.radius=q(a.radius*l),C.setFromSpherical(a),C.applyQuaternion(X),I.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let G=!1;if(i.zoomToCursor&&A){let re=null;if(i.object.isPerspectiveCamera){let Me=C.length();re=q(Me*l);let ze=Me-re;i.object.position.addScaledVector(D,ze),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let Me=new P(w.x,w.y,0);Me.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),G=!0;let ze=new P(w.x,w.y,0);ze.unproject(i.object),i.object.position.sub(ze).add(Me),i.object.updateMatrixWorld(),re=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(re).add(i.object.position):(Fa.origin.copy(i.object.position),Fa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Fa.direction))<hA?e.lookAt(i.target):(Dg.setFromNormalAndCoplanarPoint(i.object.up,i.target),Fa.intersectPlane(Dg,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),G=!0);return l=1,A=!1,G||be.distanceToSquared(i.object.position)>o||8*(1-ge.dot(i.object.quaternion))>o||Ee.distanceToSquared(i.target)>0?(i.dispatchEvent(Ag),be.copy(i.object.position),ge.copy(i.object.quaternion),Ee.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Q),i.domElement.removeEventListener("pointerdown",Oe),i.domElement.removeEventListener("pointercancel",$e),i.domElement.removeEventListener("wheel",E),i.domElement.removeEventListener("pointermove",Ce),i.domElement.removeEventListener("pointerup",$e),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",v),i._domElementKeyEvents=null)};let i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=r.NONE,o=1e-6,a=new Os,c=new Os,l=1,u=new P,d=new Ie,f=new Ie,p=new Ie,g=new Ie,y=new Ie,m=new Ie,h=new Ie,b=new Ie,x=new Ie,D=new P,w=new Ie,A=!1,T=[],H={};function _(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function S(){return Math.pow(.95,i.zoomSpeed)}function k(C){c.theta-=C}function $(C){c.phi-=C}let ee=function(){let C=new P;return function(X,be){C.setFromMatrixColumn(be,0),C.multiplyScalar(-X),u.add(C)}}(),R=function(){let C=new P;return function(X,be){i.screenSpacePanning===!0?C.setFromMatrixColumn(be,1):(C.setFromMatrixColumn(be,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(X),u.add(C)}}(),B=function(){let C=new P;return function(X,be){let ge=i.domElement;if(i.object.isPerspectiveCamera){let Ee=i.object.position;C.copy(Ee).sub(i.target);let pe=C.length();pe*=Math.tan(i.object.fov/2*Math.PI/180),ee(2*X*pe/ge.clientHeight,i.object.matrix),R(2*be*pe/ge.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ee(X*(i.object.right-i.object.left)/i.object.zoom/ge.clientWidth,i.object.matrix),R(be*(i.object.top-i.object.bottom)/i.object.zoom/ge.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function j(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(C){if(!i.zoomToCursor)return;A=!0;let se=i.domElement.getBoundingClientRect(),X=C.clientX-se.left,be=C.clientY-se.top,ge=se.width,Ee=se.height;w.x=X/ge*2-1,w.y=-(be/Ee)*2+1,D.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function q(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function K(C){d.set(C.clientX,C.clientY)}function te(C){J(C),h.set(C.clientX,C.clientY)}function fe(C){g.set(C.clientX,C.clientY)}function z(C){f.set(C.clientX,C.clientY),p.subVectors(f,d).multiplyScalar(i.rotateSpeed);let se=i.domElement;k(2*Math.PI*p.x/se.clientHeight),$(2*Math.PI*p.y/se.clientHeight),d.copy(f),i.update()}function Y(C){b.set(C.clientX,C.clientY),x.subVectors(b,h),x.y>0?j(S()):x.y<0&&W(S()),h.copy(b),i.update()}function ue(C){y.set(C.clientX,C.clientY),m.subVectors(y,g).multiplyScalar(i.panSpeed),B(m.x,m.y),g.copy(y),i.update()}function ye(C){J(C),C.deltaY<0?W(S()):C.deltaY>0&&j(S()),i.update()}function _e(C){let se=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),se=!0;break}se&&(C.preventDefault(),i.update())}function Re(){if(T.length===1)d.set(T[0].pageX,T[0].pageY);else{let C=.5*(T[0].pageX+T[1].pageX),se=.5*(T[0].pageY+T[1].pageY);d.set(C,se)}}function Ae(){if(T.length===1)g.set(T[0].pageX,T[0].pageY);else{let C=.5*(T[0].pageX+T[1].pageX),se=.5*(T[0].pageY+T[1].pageY);g.set(C,se)}}function Se(){let C=T[0].pageX-T[1].pageX,se=T[0].pageY-T[1].pageY,X=Math.sqrt(C*C+se*se);h.set(0,X)}function Le(){i.enableZoom&&Se(),i.enablePan&&Ae()}function L(){i.enableZoom&&Se(),i.enableRotate&&Re()}function vt(C){if(T.length==1)f.set(C.pageX,C.pageY);else{let X=le(C),be=.5*(C.pageX+X.x),ge=.5*(C.pageY+X.y);f.set(be,ge)}p.subVectors(f,d).multiplyScalar(i.rotateSpeed);let se=i.domElement;k(2*Math.PI*p.x/se.clientHeight),$(2*Math.PI*p.y/se.clientHeight),d.copy(f)}function xe(C){if(T.length===1)y.set(C.pageX,C.pageY);else{let se=le(C),X=.5*(C.pageX+se.x),be=.5*(C.pageY+se.y);y.set(X,be)}m.subVectors(y,g).multiplyScalar(i.panSpeed),B(m.x,m.y),g.copy(y)}function Ue(C){let se=le(C),X=C.pageX-se.x,be=C.pageY-se.y,ge=Math.sqrt(X*X+be*be);b.set(0,ge),x.set(0,Math.pow(b.y/h.y,i.zoomSpeed)),j(x.y),h.copy(b)}function Te(C){i.enableZoom&&Ue(C),i.enablePan&&xe(C)}function nt(C){i.enableZoom&&Ue(C),i.enableRotate&&vt(C)}function Oe(C){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",Ce),i.domElement.addEventListener("pointerup",$e)),ie(C),C.pointerType==="touch"?O(C):pt(C))}function Ce(C){i.enabled!==!1&&(C.pointerType==="touch"?ne(C):mt(C))}function $e(C){me(C),T.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",Ce),i.domElement.removeEventListener("pointerup",$e)),i.dispatchEvent(Cg),s=r.NONE}function pt(C){let se;switch(C.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Bi.DOLLY:if(i.enableZoom===!1)return;te(C),s=r.DOLLY;break;case Bi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;fe(C),s=r.PAN}else{if(i.enableRotate===!1)return;K(C),s=r.ROTATE}break;case Bi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;K(C),s=r.ROTATE}else{if(i.enablePan===!1)return;fe(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ed)}function mt(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;z(C);break;case r.DOLLY:if(i.enableZoom===!1)return;Y(C);break;case r.PAN:if(i.enablePan===!1)return;ue(C);break}}function E(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(ed),ye(C),i.dispatchEvent(Cg))}function v(C){i.enabled===!1||i.enablePan===!1||_e(C)}function O(C){switch(oe(C),T.length){case 1:switch(i.touches.ONE){case Vi.ROTATE:if(i.enableRotate===!1)return;Re(),s=r.TOUCH_ROTATE;break;case Vi.PAN:if(i.enablePan===!1)return;Ae(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Vi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(),s=r.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;L(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ed)}function ne(C){switch(oe(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;vt(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;xe(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Te(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;nt(C),i.update();break;default:s=r.NONE}}function Q(C){i.enabled!==!1&&C.preventDefault()}function ie(C){T.push(C)}function me(C){delete H[C.pointerId];for(let se=0;se<T.length;se++)if(T[se].pointerId==C.pointerId){T.splice(se,1);return}}function oe(C){let se=H[C.pointerId];se===void 0&&(se=new Ie,H[C.pointerId]=se),se.set(C.pageX,C.pageY)}function le(C){let se=C.pointerId===T[0].pointerId?T[1]:T[0];return H[se.pointerId]}i.domElement.addEventListener("contextmenu",Q),i.domElement.addEventListener("pointerdown",Oe),i.domElement.addEventListener("pointercancel",$e),i.domElement.addEventListener("wheel",E,{passive:!1}),this.update()}};var Ua=class extends Ju{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new Pa(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){function t(l){let u=new DataView(l),d=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*d===u.byteLength)return!0;let g=[115,111,108,105,100];for(let y=0;y<5;y++)if(i(g,u,y))return!1;return!0}function i(l,u,d){for(let f=0,p=l.length;f<p;f++)if(l[f]!==u.getUint8(d+f))return!1;return!0}function r(l){let u=new DataView(l),d=u.getUint32(80,!0),f,p,g,y=!1,m,h,b,x,D;for(let k=0;k<80-10;k++)u.getUint32(k,!1)==1129270351&&u.getUint8(k+4)==82&&u.getUint8(k+5)==61&&(y=!0,m=new Float32Array(d*3*3),h=u.getUint8(k+6)/255,b=u.getUint8(k+7)/255,x=u.getUint8(k+8)/255,D=u.getUint8(k+9)/255);let w=84,A=12*4+2,T=new bn,H=new Float32Array(d*3*3),_=new Float32Array(d*3*3),S=new Be;for(let k=0;k<d;k++){let $=w+k*A,ee=u.getFloat32($,!0),R=u.getFloat32($+4,!0),B=u.getFloat32($+8,!0);if(y){let j=u.getUint16($+48,!0);j&32768?(f=h,p=b,g=x):(f=(j&31)/31,p=(j>>5&31)/31,g=(j>>10&31)/31)}for(let j=1;j<=3;j++){let W=$+j*12,J=k*3*3+(j-1)*3;H[J]=u.getFloat32(W,!0),H[J+1]=u.getFloat32(W+4,!0),H[J+2]=u.getFloat32(W+8,!0),_[J]=ee,_[J+1]=R,_[J+2]=B,y&&(S.set(f,p,g).convertSRGBToLinear(),m[J]=S.r,m[J+1]=S.g,m[J+2]=S.b)}}return T.setAttribute("position",new Dt(H,3)),T.setAttribute("normal",new Dt(_,3)),y&&(T.setAttribute("color",new Dt(m,3)),T.hasColors=!0,T.alpha=D),T}function s(l){let u=new bn,d=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/,g=0,y=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+y+y+y,"g"),h=new RegExp("normal"+y+y+y,"g"),b=[],x=[],D=[],w=new P,A,T=0,H=0,_=0;for(;(A=d.exec(l))!==null;){H=_;let S=A[0],k=(A=p.exec(S))!==null?A[1]:"";for(D.push(k);(A=f.exec(S))!==null;){let R=0,B=0,j=A[0];for(;(A=h.exec(j))!==null;)w.x=parseFloat(A[1]),w.y=parseFloat(A[2]),w.z=parseFloat(A[3]),B++;for(;(A=m.exec(j))!==null;)b.push(parseFloat(A[1]),parseFloat(A[2]),parseFloat(A[3])),x.push(w.x,w.y,w.z),R++,_++;B!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),R!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}let $=H,ee=_-H;u.userData.groupNames=D,u.addGroup($,ee,T),T++}return u.setAttribute("position",new en(b,3)),u.setAttribute("normal",new en(x,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){let u=new Uint8Array(l.length);for(let d=0;d<l.length;d++)u[d]=l.charCodeAt(d)&255;return u.buffer||u}else return l}let c=a(e);return t(c)?r(c):s(o(e))}};var pA={castShadow:!0,position:new P(0,0,0),receiveShadow:!0,scale:new P(.03,.03,.03)},mA=()=>{try{let n=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(n.getContext("webgl")||n.getContext("experimental-webgl")))}catch{return!1}},Ig=(()=>{let e=class e{constructor(i,r,s){this.cdr=i,this.eleRef=r,this.ngZone=s,this.stlModels=[],this.stlModelFiles=[],this.hasControls=!0,this.camera=new Et(35,window.innerWidth/window.innerHeight,1,15),this.cameraTarget=new P(0,0,0),this.light=new Fr(16777215,80),this.material=new Ra({color:10066329,shininess:400,specular:2236962}),this.scene=new Lr,this.renderer=new Fi({antialias:!0}),this.controls=null,this.meshOptions=[],this.centered=!0,this.rendered=new sn,this.hasWebGL=mA(),this.meshGroup=new Hn,this.isRendered=!1,this.showStlModel=!0,this.stlLoader=new Ua,this.middle=new P,this.render=()=>{this.renderer.render(this.scene,this.camera)},this.onWindowResize=()=>{this.setSizes(),this.render()},this.cdr.detach(),this.light.position.set(1,1,2),this.camera.position.set(3,3,3),this.scene.background=new Be(16777215),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0}ngOnInit(){if(!this.hasWebGL){console.error("stl-model-viewer: Seems like your system does not support webgl.");return}this.ngZone.runOutsideAngular(()=>{this.init()})}ngOnDestroy(){window.removeEventListener("resize",this.onWindowResize,!1),this.meshGroup.children.forEach(i=>this.meshGroup.remove(i)),this.scene.children.forEach(i=>this.scene.remove(i)),this.camera.remove(this.light),this.material&&this.material.dispose(),this.controls&&(this.controls.removeEventListener("change",this.render),this.controls.dispose()),this.eleRef&&this.eleRef.nativeElement.children.length>1&&this.eleRef.nativeElement.removeChild(this.renderer.domElement),this.renderer.renderLists.dispose(),this.renderer.domElement.remove(),this.renderer.dispose()}createMesh(o){return zr(this,arguments,function*(i,r={},s=!1){let a=null;s?a=this.stlLoader.parse(i):a=yield this.stlLoader.loadAsync(i),this.material.shininess=100;let c=new Qt(a,this.material);this.centered&&(a.computeBoundingBox(),a.boundingBox.getCenter(this.middle),c.geometry.applyMatrix4(new ft().makeTranslation(-this.middle.x,-this.middle.y,-this.middle.z)));let l=["position","scale","up"],u=Object.assign({},pA,r);return Object.getOwnPropertyNames(u).forEach(d=>{if(l.indexOf(d)>-1){let f=u[d];c[d].set(f.x,f.y,f.z)}else c[d]=u[d]}),c})}setSizes(){let i=this.eleRef.nativeElement.offsetWidth,r=this.eleRef.nativeElement.offsetHeight;this.camera.aspect=i/r,this.camera.updateProjectionMatrix(),this.renderer.setSize(i,r)}init(){return zr(this,null,function*(){this.camera.add(this.light),this.scene.add(this.camera),this.hasControls&&(this.controls||(this.controls=new Vr(this.camera,this.renderer.domElement),this.controls.enableZoom=!0,this.controls.minDistance=1,this.controls.maxDistance=7),this.controls.addEventListener("change",this.render)),window.addEventListener("resize",this.onWindowResize,!1);let i=[];this.stlModels.length>0?i=this.stlModels.map((s,o)=>this.createMesh(s,this.meshOptions[o])):i=this.stlModelFiles.map((s,o)=>this.createMesh(s,this.meshOptions[o],!0)),(yield Promise.all(i)).map(s=>this.meshGroup.add(s)),this.scene.add(this.meshGroup),this.eleRef.nativeElement.appendChild(this.renderer.domElement),this.setSizes(),this.render(),this.ngZone.run(()=>{this.isRendered=!0,this.rendered.emit(),this.cdr.detectChanges()})})}};e.\u0275fac=function(r){return new(r||e)(ir(ll),ir(ls),ir(lt))},e.\u0275cmp=Eo({type:e,selectors:[["stl-model-viewer"]],inputs:{stlModels:"stlModels",stlModelFiles:"stlModelFiles",hasControls:"hasControls",camera:"camera",cameraTarget:"cameraTarget",light:"light",material:"material",scene:"scene",renderer:"renderer",controls:"controls",meshOptions:"meshOptions",centered:"centered"},outputs:{rendered:"rendered"},standalone:!0,features:[up],decls:0,vars:0,template:function(r,s){},styles:["[_nghost-%COMP%]{width:100%;height:100%;display:block}"],changeDetection:0});let n=e;return n})();var yA=()=>["./assets/peter.stl"],Rg=()=>["./assets/strap.stl"],vA=()=>({x:0,y:0,z:0}),_A=n=>({position:n}),xA=n=>[n],Pg=(()=>{let e=class e{constructor(){this.title="Examples",this.renderer=new Fi({antialias:!0}),this.camera=new Et(35,window.innerWidth/window.innerHeight,1,15),this.controls=new Vr(this.camera,this.renderer.domElement),this.scene=new Lr,this.light=new Fr(16777215,80),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.camera.position.set(3,3,3),this.light.position.set(1,1,2),this.scene.background=new Be(16777215),this.controls.enableZoom=!0,this.controls.minDistance=1,this.controls.maxDistance=7,this.controls.update()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Eo({type:e,selectors:[["app-root"]],decls:8,vars:19,consts:[[3,"centered","stlModels"],[3,"stlModels"],[3,"light","scene","camera","renderer","controls","meshOptions","stlModels"]],template:function(r,s){r&1&&(rr(0,"h1"),hl(1),sr(),rr(2,"div"),No(3,"stl-model-viewer",0)(4,"stl-model-viewer",1),rr(5,"h3"),hl(6,"Custom controls, light, scene, camera, renderer"),sr(),No(7,"stl-model-viewer",2),sr()),r&2&&(us(1),pl(s.title),us(2),ds("centered",!1)("stlModels",fs(11,yA)),us(1),ds("stlModels",fs(12,Rg)),us(3),ds("light",s.light)("scene",s.scene)("camera",s.camera)("renderer",s.renderer)("controls",s.controls)("meshOptions",ml(16,xA,ml(14,_A,fs(13,vA))))("stlModels",fs(18,Rg)))},dependencies:[Ig],styles:["stl-model-viewer[_ngcontent-%COMP%]{width:100%;height:100%;display:block}"]});let n=e;return n})();var Ng=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Cn({type:e}),e.\u0275inj=An({});let n=e;return n})();var Lg=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Cn({type:e,bootstrap:[Pg]}),e.\u0275inj=An({imports:[Rp,Ng]});let n=e;return n})();var Og={production:!0};Og.production&&void 0;Ip().bootstrapModule(Lg).catch(n=>console.error(n));
