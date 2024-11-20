var iy=Object.defineProperty,ry=Object.defineProperties;var sy=Object.getOwnPropertyDescriptors;var Jd=Object.getOwnPropertySymbols;var oy=Object.prototype.hasOwnProperty,ay=Object.prototype.propertyIsEnumerable;var Kd=(n,e,t)=>e in n?iy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Bt=(n,e)=>{for(var t in e||={})oy.call(e,t)&&Kd(n,t,e[t]);if(Jd)for(var t of Jd(e))ay.call(e,t)&&Kd(n,t,e[t]);return n},Kt=(n,e)=>ry(n,sy(e));var jn=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var Ba=null;var Qd=1,ts=Symbol("SIGNAL");function rt(n){let e=Ba;return Ba=n,e}function ef(){return Ba}var Ha={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function tf(n){if(!($a(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Qd)){if(!n.producerMustRecompute(n)&&!Ga(n)){Va(n);return}n.producerRecomputeValue(n),Va(n)}}function Va(n){n.dirty=!1,n.lastCleanEpoch=Qd}function za(n){return n&&(n.nextProducerIndex=0),rt(n)}function nf(n,e){if(rt(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if($a(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)ja(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Ga(n){qa(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(tf(t),i!==t.version))return!0}return!1}function Wa(n){if(qa(n),$a(n))for(let e=0;e<n.producerNode.length;e++)ja(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function ja(n,e){if(cy(n),n.liveConsumerNode.length===1&&ly(n))for(let i=0;i<n.producerNode.length;i++)ja(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];qa(r),r.producerIndexOfThis[i]=e}}function $a(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function qa(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function cy(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function ly(n){return n.producerNode!==void 0}function uy(){throw new Error}var dy=uy;function rf(n){dy=n}function Lt(n){return typeof n=="function"}function Xs(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Ys=Xs(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function ns(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var At=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Lt(i))try{i()}catch(s){e=s instanceof Ys?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{sf(s)}catch(o){e=e??[],o instanceof Ys?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Ys(e)}}add(e){var t;if(e&&e!==this)if(this.closed)sf(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&ns(t,e)}remove(e){let{_finalizers:t}=this;t&&ns(t,e),e instanceof n&&e._removeParent(this)}};At.EMPTY=(()=>{let n=new At;return n.closed=!0,n})();var Xa=At.EMPTY;function Zs(n){return n instanceof At||n&&"closed"in n&&Lt(n.remove)&&Lt(n.add)&&Lt(n.unsubscribe)}function sf(n){Lt(n)?n():n.unsubscribe()}var Qt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Yi={setTimeout(n,e,...t){let{delegate:i}=Yi;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Yi;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function of(n){Yi.setTimeout(()=>{let{onUnhandledError:e}=Qt;if(e)e(n);else throw n})}function Ya(){}var af=Za("C",void 0,void 0);function cf(n){return Za("E",void 0,n)}function lf(n){return Za("N",n,void 0)}function Za(n,e,t){return{kind:n,value:e,error:t}}var vi=null;function Zi(n){if(Qt.useDeprecatedSynchronousErrorHandling){let e=!vi;if(e&&(vi={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=vi;if(vi=null,t)throw i}}else n()}function uf(n){Qt.useDeprecatedSynchronousErrorHandling&&vi&&(vi.errorThrown=!0,vi.error=n)}var _i=class extends At{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Zs(e)&&e.add(this)):this.destination=py}static create(e,t,i){return new Ji(e,t,i)}next(e){this.isStopped?Ka(lf(e),this):this._next(e)}error(e){this.isStopped?Ka(cf(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Ka(af,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},fy=Function.prototype.bind;function Ja(n,e){return fy.call(n,e)}var Qa=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Js(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Js(i)}else Js(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Js(t)}}},Ji=class extends _i{constructor(e,t,i){super();let r;if(Lt(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Qt.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Ja(e.next,s),error:e.error&&Ja(e.error,s),complete:e.complete&&Ja(e.complete,s)}):r=e}this.destination=new Qa(r)}};function Js(n){Qt.useDeprecatedSynchronousErrorHandling?uf(n):of(n)}function hy(n){throw n}function Ka(n,e){let{onStoppedNotification:t}=Qt;t&&Yi.setTimeout(()=>t(n,e))}var py={closed:!0,next:Ya,error:hy,complete:Ya};var df=typeof Symbol=="function"&&Symbol.observable||"@@observable";function ff(n){return n}function hf(n){return n.length===0?ff:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var ec=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=gy(t)?t:new Ji(t,i,r);return Zi(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=pf(i),new i((r,s)=>{let o=new Ji({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[df](){return this}pipe(...t){return hf(t)(this)}toPromise(t){return t=pf(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function pf(n){var e;return(e=n??Qt.Promise)!==null&&e!==void 0?e:Promise}function my(n){return n&&Lt(n.next)&&Lt(n.error)&&Lt(n.complete)}function gy(n){return n&&n instanceof _i||my(n)&&Zs(n)}function yy(n){return Lt(n?.lift)}function mf(n){return e=>{if(yy(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function gf(n,e,t,i,r){return new tc(n,e,t,i,r)}var tc=class extends _i{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var yf=Xs(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var xi=(()=>{class n extends ec{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Ks(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new yf}next(t){Zi(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Zi(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Zi(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Xa:(this.currentObservers=null,s.push(t),new At(()=>{this.currentObservers=null,ns(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new ec;return t.source=this,t}}return n.create=(e,t)=>new Ks(e,t),n})(),Ks=class extends xi{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Xa}};var is=class extends xi{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};function nc(n,e){return mf((t,i)=>{let r=0;t.subscribe(gf(i,s=>{i.next(n.call(e,s,r++))}))})}var Ue=class extends Error{code;constructor(e,t){super(Wc(e,t)),this.code=e}};function Wc(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function Qf(n){return{toString:n}.toString()}var bn=globalThis;function st(n){for(let e in n)if(n[e]===st)return e;throw Error("Could not find renamed property on target object.")}function Vt(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(Vt).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function vf(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var vy=st({__forward_ref__:st});function eh(n){return n.__forward_ref__=eh,n.toString=function(){return Vt(this())},n}function tn(n){return _y(n)?n():n}function _y(n){return typeof n=="function"&&n.hasOwnProperty(vy)&&n.__forward_ref__===eh}function ft(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Tn(n){return{providers:n.providers||[],imports:n.imports||[]}}function jc(n){return _f(n,th)||_f(n,nh)}function _f(n,e){return n.hasOwnProperty(e)?n[e]:null}function xy(n){let e=n&&(n[th]||n[nh]);return e||null}function xf(n){return n&&(n.hasOwnProperty(Mf)||n.hasOwnProperty(My))?n[Mf]:null}var th=st({\u0275prov:st}),Mf=st({\u0275inj:st}),nh=st({ngInjectableDef:st}),My=st({ngInjectorDef:st}),je=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=ft({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function ih(n){return n&&!!n.\u0275providers}var Ey=st({\u0275cmp:st}),Sy=st({\u0275dir:st}),wy=st({\u0275pipe:st}),by=st({\u0275mod:st}),Ef=st({\u0275fac:st}),ss=st({__NG_ELEMENT_ID__:st}),Sf=st({__NG_ENV_ID__:st});function rh(n){return typeof n=="string"?n:n==null?"":String(n)}function Ty(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():rh(n)}function Dy(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Ue(-200,n)}function $c(n,e){throw new Ue(-201,!1)}var ke=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(ke||{}),lc;function sh(){return lc}function qt(n){let e=lc;return lc=n,e}function oh(n,e,t){let i=jc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&ke.Optional)return null;if(e!==void 0)return e;$c(n,"Injector")}var Cy={},as=Cy,Ay="__NG_DI_FLAG__",so="ngTempTokenPath",Iy="ngTokenPath",Ry=/\n/gm,Ny="\u0275",wf="__source",tr;function Py(){return tr}function $n(n){let e=tr;return tr=n,e}function Ly(n,e=ke.Default){if(tr===void 0)throw new Ue(-203,!1);return tr===null?oh(n,void 0,e):tr.get(n,e&ke.Optional?null:void 0,e)}function We(n,e=ke.Default){return(sh()||Ly)(tn(n),e)}function Qe(n,e=ke.Default){return We(n,So(e))}function So(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function uc(n){let e=[];for(let t=0;t<n.length;t++){let i=tn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ue(900,!1);let r,s=ke.Default;for(let o=0;o<i.length;o++){let a=i[o],c=Oy(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(We(r,s))}else e.push(We(i))}return e}function Oy(n){return n[Ay]}function Fy(n,e,t,i){let r=n[so];throw e[wf]&&r.unshift(e[wf]),n.message=ky(`
`+n.message,r,t,i),n[Iy]=r,n[so]=null,n}function ky(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==Ny?n.slice(2):n;let r=Vt(e);if(Array.isArray(e))r=e.map(Vt).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):Vt(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(Ry,`
  `)}`}function cs(n,e){let t=n.hasOwnProperty(Ef);return t?n[Ef]:null}function qc(n,e){n.forEach(t=>Array.isArray(t)?qc(t,e):e(t))}function ah(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var ls={},hn=[],us=new je(""),ch=new je("",-1),lh=new je(""),oo=class{get(e,t=as){if(t===as){let i=new Error(`NullInjectorError: No provider for ${Vt(e)}!`);throw i.name="NullInjectorError",i}return t}};function Uy(n,e){let t=n[by]||null;if(!t&&e===!0)throw new Error(`Type ${Vt(n)} does not have '\u0275mod' property.`);return t}function wo(n){return n[Ey]||null}function uh(n){return n[Sy]||null}function dh(n){return n[wy]||null}function By(n){let e=wo(n)||uh(n)||dh(n);return e!==null?e.standalone:!1}function Vy(...n){return{\u0275providers:fh(!0,n),\u0275fromNgModule:!0}}function fh(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return qc(e,o=>{let a=o;dc(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&hh(r,s),t}function hh(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Xc(r,s=>{e(s,i)})}}function dc(n,e,t,i){if(n=tn(n),!n)return!1;let r=null,s=xf(n),o=!s&&wo(n);if(!s&&!o){let c=n.ngModule;if(s=xf(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)dc(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{qc(s.imports,u=>{dc(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&hh(l,e)}if(!a){let l=cs(r)||(()=>new r);e({provide:r,useFactory:l,deps:hn},r),e({provide:lh,useValue:r,multi:!0},r),e({provide:us,useValue:()=>We(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Xc(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Xc(n,e){for(let t of n)ih(t)&&(t=t.\u0275providers),Array.isArray(t)?Xc(t,e):e(t)}var Hy=st({provide:String,useValue:st});function ph(n){return n!==null&&typeof n=="object"&&Hy in n}function zy(n){return!!(n&&n.useExisting)}function Gy(n){return!!(n&&n.useFactory)}function fc(n){return typeof n=="function"}var bo=new je(""),to={},Wy={},ic;function Yc(){return ic===void 0&&(ic=new oo),ic}var Si=class{},ds=class extends Si{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,pc(e,o=>this.processProvider(o)),this.records.set(ch,Ki(void 0,this)),r.has("environment")&&this.records.set(Si,Ki(void 0,this));let s=this.records.get(bo);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(lh,hn,ke.Self))}destroy(){rs(this),this._destroyed=!0;let e=rt(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),rt(e)}}onDestroy(e){return rs(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){rs(this);let t=$n(this),i=qt(void 0),r;try{return e()}finally{$n(t),qt(i)}}get(e,t=as,i=ke.Default){if(rs(this),e.hasOwnProperty(Sf))return e[Sf](this);i=So(i);let r,s=$n(this),o=qt(void 0);try{if(!(i&ke.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=Zy(e)&&jc(e);l&&this.injectableDefInScope(l)?c=Ki(hc(e),to):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&ke.Self?Yc():this.parent;return t=i&ke.Optional&&t===as?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[so]=a[so]||[]).unshift(Vt(e)),s)throw a;return Fy(a,e,"R3InjectorError",this.source)}else throw a}finally{qt(o),$n(s)}}resolveInjectorInitializers(){let e=rt(null),t=$n(this),i=qt(void 0),r;try{let s=this.get(us,hn,ke.Self);for(let o of s)o()}finally{$n(t),qt(i),rt(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(Vt(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=tn(e);let t=fc(e)?e:tn(e&&e.provide),i=$y(e);if(!fc(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Ki(void 0,to,!0),r.factory=()=>uc(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=rt(null);try{return t.value===to&&(t.value=Wy,t.value=t.factory()),typeof t.value=="object"&&t.value&&Yy(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{rt(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=tn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function hc(n){let e=jc(n),t=e!==null?e.factory:cs(n);if(t!==null)return t;if(n instanceof je)throw new Ue(204,!1);if(n instanceof Function)return jy(n);throw new Ue(204,!1)}function jy(n){if(n.length>0)throw new Ue(204,!1);let t=xy(n);return t!==null?()=>t.factory(n):()=>new n}function $y(n){if(ph(n))return Ki(void 0,n.useValue);{let e=qy(n);return Ki(e,to)}}function qy(n,e,t){let i;if(fc(n)){let r=tn(n);return cs(r)||hc(r)}else if(ph(n))i=()=>tn(n.useValue);else if(Gy(n))i=()=>n.useFactory(...uc(n.deps||[]));else if(zy(n))i=()=>We(tn(n.useExisting));else{let r=tn(n&&(n.useClass||n.provide));if(Xy(n))i=()=>new r(...uc(n.deps));else return cs(r)||hc(r)}return i}function rs(n){if(n.destroyed)throw new Ue(205,!1)}function Ki(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function Xy(n){return!!n.deps}function Yy(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function Zy(n){return typeof n=="function"||typeof n=="object"&&n instanceof je}function pc(n,e){for(let t of n)Array.isArray(t)?pc(t,e):t&&ih(t)?pc(t.\u0275providers,e):e(t)}function mh(n,e){n instanceof ds&&rs(n);let t,i=$n(n),r=qt(void 0);try{return e()}finally{$n(i),qt(r)}}function Jy(){return sh()!==void 0||Py()!=null}function Ky(n){let e=bn.ng;if(e&&e.\u0275compilerFacade)return e.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}var ni=0,Xe=1,be=2,nn=3,Xn=4,ii=5,mc=6,bf=7,Zn=8,ir=9,Jn=10,gn=11,fs=12,Tf=13,ys=14,wn=15,ao=16,Qi=17,Zc=18,To=19,gh=20,Yn=21,rc=22,co=23,Ht=24,wi=25,yh=1;var gc=7,Qy=8,lo=9,Mi=10,uo=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(uo||{});function Ei(n){return Array.isArray(n)&&typeof n[yh]=="object"}function cr(n){return Array.isArray(n)&&n[yh]===!0}function vh(n){return(n.flags&4)!==0}function Do(n){return n.componentOffset>-1}function ev(n){return(n.flags&1)===1}function vs(n){return!!n.template}function yc(n){return(n[be]&512)!==0}var vc=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function _h(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function tv(n){return n.type.prototype.ngOnChanges&&(n.setInput=iv),nv}function nv(){let n=Mh(this),e=n?.current;if(e){let t=n.previous;if(t===ls)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function iv(n,e,t,i,r){let s=this.declaredInputs[i],o=Mh(n)||rv(n,{previous:ls,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new vc(l&&l.currentValue,t,c===ls),_h(n,e,r,t)}var xh="__ngSimpleChanges__";function Mh(n){return n[xh]||null}function rv(n,e){return n[xh]=e}var Df=null;var qn=function(n,e,t){Df?.(n,e,t)},sv="svg",ov="math";function lr(n){for(;Array.isArray(n);)n=n[ni];return n}function av(n,e){return lr(e[n])}function ri(n,e){return lr(e[n.index])}function Eh(n,e){return n.data[e]}function ur(n,e){let t=e[n];return Ei(t)?t:t[ni]}function Jc(n){return(n[be]&128)===128}function Cf(n,e){return e==null?null:n[e]}function Sh(n){n[Qi]=0}function Kc(n){n[be]&1024||(n[be]|=1024,Jc(n)&&Ao(n))}function Co(n){return!!(n[be]&9216||n[Ht]?.dirty)}function Af(n){n[Jn].changeDetectionScheduler?.notify(9),n[be]&64&&(n[be]|=1024),Co(n)&&Ao(n)}function Ao(n){n[Jn].changeDetectionScheduler?.notify(0);let e=rr(n);for(;e!==null&&!(e[be]&8192||(e[be]|=8192,!Jc(e)));)e=rr(e)}function wh(n,e){if((n[be]&256)===256)throw new Ue(911,!1);n[Yn]===null&&(n[Yn]=[]),n[Yn].push(e)}function cv(n,e){if(n[Yn]===null)return;let t=n[Yn].indexOf(e);t!==-1&&n[Yn].splice(t,1)}function rr(n){let e=n[nn];return cr(e)?e[nn]:e}var Ye={lFrame:Lh(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var _c=!1;function lv(){return Ye.lFrame.elementDepthCount}function uv(){Ye.lFrame.elementDepthCount++}function dv(){Ye.lFrame.elementDepthCount--}function bh(){return Ye.bindingsEnabled}function fv(){return Ye.skipHydrationRootTNode!==null}function hv(n){return Ye.skipHydrationRootTNode===n}function pv(){Ye.skipHydrationRootTNode=null}function It(){return Ye.lFrame.lView}function _s(){return Ye.lFrame.tView}function si(){let n=Th();for(;n!==null&&n.type===64;)n=n.parent;return n}function Th(){return Ye.lFrame.currentTNode}function mv(){let n=Ye.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Io(n,e){let t=Ye.lFrame;t.currentTNode=n,t.isParent=e}function Dh(){return Ye.lFrame.isParent}function gv(){Ye.lFrame.isParent=!1}function Ch(){return _c}function If(n){let e=_c;return _c=n,e}function Ah(){let n=Ye.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function yv(n){return Ye.lFrame.bindingIndex=n}function Ih(){return Ye.lFrame.bindingIndex++}function vv(){return Ye.lFrame.inI18n}function _v(n,e){let t=Ye.lFrame;t.bindingIndex=t.bindingRootIndex=n,xc(e)}function xv(){return Ye.lFrame.currentDirectiveIndex}function xc(n){Ye.lFrame.currentDirectiveIndex=n}function Rh(n){Ye.lFrame.currentQueryIndex=n}function Mv(n){let e=n[Xe];return e.type===2?e.declTNode:e.type===1?n[ii]:null}function Nh(n,e,t){if(t&ke.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&ke.Host);)if(r=Mv(s),r===null||(s=s[ys],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Ye.lFrame=Ph();return i.currentTNode=e,i.lView=n,!0}function Qc(n){let e=Ph(),t=n[Xe];Ye.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Ph(){let n=Ye.lFrame,e=n===null?null:n.child;return e===null?Lh(n):e}function Lh(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Oh(){let n=Ye.lFrame;return Ye.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Fh=Oh;function el(){let n=Oh();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function tl(){return Ye.lFrame.selectedIndex}function bi(n){Ye.lFrame.selectedIndex=n}function Ev(){let n=Ye.lFrame;return Eh(n.tView,n.selectedIndex)}function Sv(){return Ye.lFrame.currentNamespace}var kh=!0;function Uh(){return kh}function Bh(n){kh=n}function wv(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=tv(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Vh(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function no(n,e,t){Hh(n,e,3,t)}function io(n,e,t,i){(n[be]&3)===t&&Hh(n,e,t,i)}function sc(n,e){let t=n[be];(t&3)===e&&(t&=16383,t+=1,n[be]=t)}function Hh(n,e,t,i){let r=i!==void 0?n[Qi]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Qi]+=65536),(a<s||s==-1)&&(bv(n,t,e,c),n[Qi]=(n[Qi]&4294901760)+c+2),c++}function Rf(n,e){qn(4,n,e);let t=rt(null);try{e.call(n)}finally{rt(t),qn(5,n,e)}}function bv(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[be]>>14<n[Qi]>>16&&(n[be]&3)===e&&(n[be]+=16384,Rf(a,s)):Rf(a,s)}var nr=-1,hs=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function Tv(n){return n instanceof hs}function Dv(n){return(n.flags&8)!==0}function Cv(n){return(n.flags&16)!==0}function Mc(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];Iv(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function Av(n){return n===3||n===4||n===6}function Iv(n){return n.charCodeAt(0)===64}function nl(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Nf(n,t,r,null,e[++i]):Nf(n,t,r,null,null))}}return n}function Nf(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var oc={},Ec=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=So(i);let r=this.injector.get(e,oc,i);return r!==oc||t===oc?r:this.parentInjector.get(e,t,i)}};function Rv(n){return n!==nr}function Sc(n){return n&32767}function Nv(n){return n>>16}function wc(n,e){let t=Nv(n),i=e;for(;t>0;)i=i[ys],t--;return i}var bc=!0;function Pf(n){let e=bc;return bc=n,e}var Pv=256,zh=Pv-1,Gh=5,Lv=0,pn={};function Ov(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(ss)&&(i=t[ss]),i==null&&(i=t[ss]=Lv++);let r=i&zh,s=1<<r;e.data[n+(r>>Gh)]|=s}function Wh(n,e){let t=jh(n,e);if(t!==-1)return t;let i=e[Xe];i.firstCreatePass&&(n.injectorIndex=e.length,ac(i.data,n),ac(e,null),ac(i.blueprint,null));let r=$h(n,e),s=n.injectorIndex;if(Rv(r)){let o=Sc(r),a=wc(r,e),c=a[Xe].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function ac(n,e){n.push(0,0,0,0,0,0,0,0,e)}function jh(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function $h(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Jh(r),i===null)return nr;if(t++,r=r[ys],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return nr}function Fv(n,e,t){Ov(n,e,t)}function qh(n,e,t){if(t&ke.Optional||n!==void 0)return n;$c(e,"NodeInjector")}function Xh(n,e,t,i){if(t&ke.Optional&&i===void 0&&(i=null),!(t&(ke.Self|ke.Host))){let r=n[ir],s=qt(void 0);try{return r?r.get(e,i,t&ke.Optional):oh(e,i,t&ke.Optional)}finally{qt(s)}}return qh(i,e,t)}function Yh(n,e,t,i=ke.Default,r){if(n!==null){if(e[be]&2048&&!(i&ke.Self)){let o=Hv(n,e,t,i,pn);if(o!==pn)return o}let s=Zh(n,e,t,i,pn);if(s!==pn)return s}return Xh(e,t,i,r)}function Zh(n,e,t,i,r){let s=Bv(t);if(typeof s=="function"){if(!Nh(e,n,i))return i&ke.Host?qh(r,t,i):Xh(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&ke.Optional))$c(t);else return o}finally{Fh()}}else if(typeof s=="number"){let o=null,a=jh(n,e),c=nr,l=i&ke.Host?e[wn][ii]:null;for((a===-1||i&ke.SkipSelf)&&(c=a===-1?$h(n,e):e[a+8],c===nr||!Of(i,!1)?a=-1:(o=e[Xe],a=Sc(c),e=wc(c,e)));a!==-1;){let u=e[Xe];if(Lf(s,a,u.data)){let d=kv(a,e,t,o,i,l);if(d!==pn)return d}c=e[a+8],c!==nr&&Of(i,e[Xe].data[a+8]===l)&&Lf(s,a,e)?(o=u,a=Sc(c),e=wc(c,e)):a=-1}}return r}function kv(n,e,t,i,r,s){let o=e[Xe],a=o.data[n+8],c=i==null?Do(a)&&bc:i!=o&&(a.type&3)!==0,l=r&ke.Host&&s===a,u=Uv(a,o,t,c,l);return u!==null?ps(e,o,u,a):pn}function Uv(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let p=d;p<f;p++){let g=o[p];if(p<c&&t===g||p>=c&&g.type===t)return p}if(r){let p=o[c];if(p&&vs(p)&&p.type===t)return c}return null}function ps(n,e,t,i){let r=n[t],s=e.data;if(Tv(r)){let o=r;o.resolving&&Dy(Ty(s[t]));let a=Pf(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?qt(o.injectImpl):null,u=Nh(n,i,ke.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&wv(t,s[t],e)}finally{l!==null&&qt(l),Pf(a),o.resolving=!1,Fh()}}return r}function Bv(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(ss)?n[ss]:void 0;return typeof e=="number"?e>=0?e&zh:Vv:e}function Lf(n,e,t){let i=1<<n;return!!(t[e+(n>>Gh)]&i)}function Of(n,e){return!(n&ke.Self)&&!(n&ke.Host&&e)}var fo=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Yh(this._tNode,this._lView,e,So(i),t)}};function Vv(){return new fo(si(),It())}function Hv(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[be]&2048&&!(o[be]&512);){let a=Zh(s,o,t,i|ke.Self,pn);if(a!==pn)return a;let c=s.parent;if(!c){let l=o[gh];if(l){let u=l.get(t,pn,i);if(u!==pn)return u}c=Jh(o),o=o[ys]}s=c}return r}function Jh(n){let e=n[Xe],t=e.type;return t===2?e.declTNode:t===1?n[ii]:null}function Ff(n,e=null,t=null,i){let r=Kh(n,e,t,i);return r.resolveInjectorInitializers(),r}function Kh(n,e=null,t=null,i,r=new Set){let s=[t||hn,Vy(n)];return i=i||(typeof n=="object"?void 0:Vt(n)),new ds(s,e||Yc(),i||null,r)}var Kn=class n{static THROW_IF_NOT_FOUND=as;static NULL=new oo;static create(e,t){if(Array.isArray(e))return Ff({name:""},t,e,"");{let i=e.name??"";return Ff({name:i},e.parent,e.providers,i)}}static \u0275prov=ft({token:n,providedIn:"any",factory:()=>We(ch)});static __NG_ELEMENT_ID__=-1};var zv=new je("");zv.__NG_ELEMENT_ID__=n=>{let e=si();if(e===null)throw new Ue(204,!1);if(e.type&2)return e.value;if(n&ke.Optional)return null;throw new Ue(204,!1)};var Qh=!1,ep=(()=>{class n{static __NG_ELEMENT_ID__=Gv;static __NG_ENV_ID__=t=>t}return n})(),Tc=class extends ep{_lView;constructor(e){super(),this._lView=e}onDestroy(e){return wh(this._lView,e),()=>cv(this._lView,e)}};function Gv(){return new Tc(It())}var ms=class{},il=new je("",{providedIn:"root",factory:()=>!1});var tp=new je(""),np=new je(""),Ro=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new is(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=ft({token:n,providedIn:"root",factory:()=>new n})}return n})();var Dc=class extends xi{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,Jy()&&(this.destroyRef=Qe(ep,{optional:!0})??void 0,this.pendingTasks=Qe(Ro,{optional:!0})??void 0)}emit(e){let t=rt(null);try{super.next(e)}finally{rt(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof At&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},mn=Dc;function ho(...n){}function ip(n){let e,t;function i(){n=ho;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function kf(n){return queueMicrotask(()=>n()),()=>{n=ho}}var rl="isAngularZone",po=rl+"_ID",Wv=0,dt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new mn(!1);onMicrotaskEmpty=new mn(!1);onStable=new mn(!1);onError=new mn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=Qh}=e;if(typeof Zone>"u")throw new Ue(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,qv(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(rl)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ue(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ue(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,jv,ho,ho);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},jv={};function sl(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function $v(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){ip(()=>{n.callbackScheduled=!1,Cc(n),n.isCheckStableRunning=!0,sl(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Cc(n)}function qv(n){let e=()=>{$v(n)},t=Wv++;n._inner=n._inner.fork({name:"angular",properties:{[rl]:!0,[po]:t,[po+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(Xv(c))return i.invokeTask(s,o,a,c);try{return Uf(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Bf(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return Uf(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!Yv(c)&&e(),Bf(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Cc(n),sl(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Cc(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Uf(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Bf(n){n._nesting--,sl(n)}var mo=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new mn;onMicrotaskEmpty=new mn;onStable=new mn;onError=new mn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function Xv(n){return rp(n,"__ignore_ng_zone__")}function Yv(n){return rp(n,"__scheduler_tick__")}function rp(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}function Zv(n="zone.js",e){return n==="noop"?new mo:n==="zone.js"?new dt(e):n}var Qn=class{_console=console;handleError(e){this._console.error("ERROR",e)}},Jv=new je("",{providedIn:"root",factory:()=>{let n=Qe(dt),e=Qe(Qn);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function Kv(){return sp(si(),It())}function sp(n,e){return new xs(ri(n,e))}var xs=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=Kv}return n})();function Qv(n){return(n.flags&128)===128}var op=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(op||{}),ap=new Map,e_=0;function t_(){return e_++}function n_(n){ap.set(n[To],n)}function Ac(n){ap.delete(n[To])}var Vf="__ngContext__";function sr(n,e){Ei(e)?(n[Vf]=e[To],n_(e)):n[Vf]=e}function cp(n){return up(n[fs])}function lp(n){return up(n[Xn])}function up(n){for(;n!==null&&!cr(n);)n=n[Xn];return n}var Ic;function dp(n){Ic=n}function i_(){if(Ic!==void 0)return Ic;if(typeof document<"u")return document;throw new Ue(210,!1)}var ol=new je("",{providedIn:"root",factory:()=>r_}),r_="ng",al=new je(""),dr=new je("",{providedIn:"platform",factory:()=>"unknown"});var cl=new je("",{providedIn:"root",factory:()=>i_().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var s_="h",o_="b";var fp=!1,a_=new je("",{providedIn:"root",factory:()=>fp});var Hf=new Set;function hp(n){Hf.has(n)||(Hf.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var c_=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=ft({token:n,providedIn:"root",factory:()=>new n})}return n})();var l_=()=>null;function ll(n,e,t=!1){return l_(n,e,t)}var yn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(yn||{});function u_(n){return n instanceof Function?n():n}var ei=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(ei||{}),Ti=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Ti||{}),d_;function pp(n,e){return d_(n,e)}function er(n,e,t,i,r){if(i!=null){let s,o=!1;cr(i)?s=i:Ei(i)&&(o=!0,i=i[ni]);let a=lr(i);n===0&&t!==null?r==null?yp(e,t,a):Rc(e,t,a,r||null,!0):n===1&&t!==null?Rc(e,t,a,r||null,!0):n===2?D_(e,a,o):n===3&&e.destroyNode(a),s!=null&&A_(e,n,s,t,r)}}function f_(n,e){return n.createText(e)}function h_(n,e,t){n.setValue(e,t)}function mp(n,e,t){return n.createElement(e,t)}function p_(n,e){gp(n,e),e[ni]=null,e[ii]=null}function gp(n,e){e[Jn].changeDetectionScheduler?.notify(10),fl(n,e,e[gn],2,null,null)}function m_(n){let e=n[fs];if(!e)return cc(n[Xe],n);for(;e;){let t=null;if(Ei(e))t=e[fs];else{let i=e[Mi];i&&(t=i)}if(!t){for(;e&&!e[Xn]&&e!==n;)Ei(e)&&cc(e[Xe],e),e=e[nn];e===null&&(e=n),Ei(e)&&cc(e[Xe],e),t=e&&e[Xn]}e=t}}function g_(n,e){let t=n[lo],i=e[nn];if(Ei(i))n[be]|=uo.HasTransplantedViews;else{let r=i[nn][wn];e[wn]!==r&&(n[be]|=uo.HasTransplantedViews)}t===null?n[lo]=[e]:t.push(e)}function ul(n,e){let t=n[lo],i=t.indexOf(e);t.splice(i,1)}function y_(n,e){if(n.length<=Mi)return;let t=Mi+e,i=n[t];if(i){let r=i[ao];r!==null&&r!==n&&ul(r,i),e>0&&(n[t-1][Xn]=i[Xn]);let s=ah(n,Mi+e);p_(i[Xe],i);let o=s[Zc];o!==null&&o.detachView(s[Xe]),i[nn]=null,i[Xn]=null,i[be]&=-129}return i}function v_(n,e){if(!(e[be]&256)){let t=e[gn];t.destroyNode&&fl(n,e,t,3,null,null),m_(e)}}function cc(n,e){if(e[be]&256)return;let t=rt(null);try{e[be]&=-129,e[be]|=256,e[Ht]&&Wa(e[Ht]),x_(n,e),__(n,e),e[Xe].type===1&&e[gn].destroy();let i=e[ao];if(i!==null&&cr(e[nn])){i!==e[nn]&&ul(i,e);let r=e[Zc];r!==null&&r.detachView(n)}Ac(e)}finally{rt(t)}}function __(n,e){let t=n.cleanup,i=e[bf];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[bf]=null);let r=e[Yn];if(r!==null){e[Yn]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[co];if(s!==null){e[co]=null;for(let o of s)o.destroy()}}function x_(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof hs)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];qn(4,a,c);try{c.call(a)}finally{qn(5,a,c)}}else{qn(4,r,s);try{s.call(r)}finally{qn(5,r,s)}}}}}function M_(n,e,t){return E_(n,e.parent,t)}function E_(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[ni];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===yn.None||s===yn.Emulated)return null}return ri(i,t)}}function Rc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function yp(n,e,t){n.appendChild(e,t)}function zf(n,e,t,i,r){i!==null?Rc(n,e,t,i,r):yp(n,e,t)}function S_(n,e,t){return b_(n,e,t)}function w_(n,e,t){return n.type&40?ri(n,t):null}var b_=w_,Gf;function vp(n,e,t,i){let r=M_(n,i,e),s=e[gn],o=i.parent||e[ii],a=S_(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)zf(s,r,t[c],a,!1);else zf(s,r,t,a,!1);Gf!==void 0&&Gf(s,i,e,t,r)}function T_(n,e){if(e!==null){let i=n[wn][ii],r=e.projection;return i.projection[r]}return null}function D_(n,e,t){n.removeChild(null,e,t)}function dl(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&sr(lr(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)dl(n,e,t.child,i,r,s,!1),er(e,n,r,a,s);else if(c&32){let l=pp(t,i),u;for(;u=l();)er(e,n,r,u,s);er(e,n,r,a,s)}else c&16?C_(n,e,i,t,r,s):er(e,n,r,a,s);t=o?t.projectionNext:t.next}}function fl(n,e,t,i,r,s){dl(t,i,n.firstChild,e,r,s,!1)}function C_(n,e,t,i,r,s){let o=t[wn],c=o[ii].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];er(e,n,r,u,s)}else{let l=c,u=o[nn];Qv(i)&&(l.flags|=128),dl(n,e,l,u,r,s,!0)}}function A_(n,e,t,i,r){let s=t[gc],o=lr(t);s!==o&&er(e,n,i,s,r);for(let a=Mi;a<t.length;a++){let c=t[a];fl(c[Xe],c,n,e,i,s)}}function I_(n,e,t){n.setAttribute(e,"style",t)}function _p(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function xp(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Mc(n,e,i),r!==null&&_p(n,e,r),s!==null&&I_(n,e,s)}function R_(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var Mp="ng-template";function N_(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&R_(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(hl(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function hl(n){return n.type===4&&n.value!==Mp}function P_(n,e,t){let i=n.type===4&&!t?Mp:n.value;return e===i}function L_(n,e,t){let i=4,r=n.attrs,s=r!==null?k_(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!en(i)&&!en(c))return!1;if(o&&en(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!P_(n,c,t)||c===""&&e.length===1){if(en(i))return!1;o=!0}}else if(i&8){if(r===null||!N_(n,r,c,t)){if(en(i))return!1;o=!0}}else{let l=e[++a],u=O_(c,r,hl(n),t);if(u===-1){if(en(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(en(i))return!1;o=!0}}}}return en(i)||o}function en(n){return(n&1)===0}function O_(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return U_(e,n)}function F_(n,e,t=!1){for(let i=0;i<e.length;i++)if(L_(n,e[i],t))return!0;return!1}function k_(n){for(let e=0;e<n.length;e++){let t=n[e];if(Av(t))return e}return n.length}function U_(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Wf(n,e){return n?":not("+e.trim()+")":e}function B_(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!en(o)&&(e+=Wf(s,r),r=""),i=o,s=s||!en(i);t++}return r!==""&&(e+=Wf(s,r)),e}function V_(n){return n.map(B_).join(",")}function H_(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!en(r))break;r=s}i++}return{attrs:e,classes:t}}var fr={};function Ms(n=1){Ep(_s(),It(),tl()+n,!1)}function Ep(n,e,t,i){if(!i)if((e[be]&3)===3){let s=n.preOrderCheckHooks;s!==null&&no(e,s,t)}else{let s=n.preOrderHooks;s!==null&&io(e,s,0,t)}bi(t)}function hr(n,e=ke.Default){let t=It();if(t===null)return We(n,e);let i=si();return Yh(i,t,tn(n),e)}function Sp(n,e,t,i,r,s){let o=rt(null);try{let a=null;r&ei.SignalBased&&(a=e[i][ts]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&ei.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):_h(e,a,i,s)}finally{rt(o)}}function z_(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)bi(~r);else{let s=r,o=t[++i],a=t[++i];_v(o,s);let c=e[s];a(2,c)}}}finally{bi(-1)}}function pl(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[ni]=r,d[be]=i|4|128|8|64|1024,(l!==null||n&&n[be]&2048)&&(d[be]|=2048),Sh(d),d[nn]=d[ys]=n,d[Zn]=t,d[Jn]=o||n&&n[Jn],d[gn]=a||n&&n[gn],d[ir]=c||n&&n[ir]||null,d[ii]=s,d[To]=t_(),d[mc]=u,d[gh]=l,d[wn]=e.type==2?n[wn]:d,d}function ml(n,e,t,i,r){let s=n.data[e];if(s===null)s=G_(n,e,t,i,r),vv()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=mv();s.injectorIndex=o===null?-1:o.injectorIndex}return Io(s,!0),s}function G_(n,e,t,i,r){let s=Th(),o=Dh(),a=o?s:s&&s.parent,c=n.data[e]=Z_(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function wp(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function bp(n,e,t,i,r){let s=tl(),o=i&2;try{bi(-1),o&&e.length>wi&&Ep(n,e,wi,!1),qn(o?2:0,r),t(i,r)}finally{bi(s),qn(o?3:1,r)}}function Tp(n,e,t){if(vh(e)){let i=rt(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{rt(i)}}}function W_(n,e,t){bh()&&(r0(n,e,t,ri(t,e)),(t.flags&64)===64&&Ip(n,e,t))}function j_(n,e,t=ri){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function Dp(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Cp(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Cp(n,e,t,i,r,s,o,a,c,l,u){let d=wi+i,f=d+r,p=$_(d,f),g=typeof l=="function"?l():l;return p[Xe]={type:n,blueprint:p,template:t,queries:null,viewQuery:a,declTNode:e,data:p.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function $_(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:fr);return t}function q_(n,e,t,i){let s=i.get(a_,fp)||t===yn.ShadowDom,o=n.selectRootElement(e,s);return X_(o),o}function X_(n){Y_(n)}var Y_=()=>null;function Z_(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return fv()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function jf(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=ei.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?$f(i,t,l,a,c):$f(i,t,l,a)}return i}function $f(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function J_(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],f=t?t.get(d):null,p=f?f.inputs:null,g=f?f.outputs:null;c=jf(0,d.inputs,u,c,p),l=jf(1,d.outputs,u,l,g);let _=c!==null&&o!==null&&!hl(e)?h0(c,u,o):null;a.push(_)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function K_(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function Q_(n,e,t,i,r,s,o,a){let c=ri(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(gl(n,t,u,i,r),Do(e)&&e0(t,e.index)):e.type&3?(i=K_(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function e0(n,e){let t=ur(e,n);t[be]&16||(t[be]|=64)}function t0(n,e,t,i){if(bh()){let r=i===null?null:{"":-1},s=o0(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&Ap(n,e,t,o,r,a),r&&a0(t,i,r)}t.mergedAttrs=nl(t.mergedAttrs,t.attrs)}function Ap(n,e,t,i,r,s){for(let l=0;l<i.length;l++)Fv(Wh(t,e),n,i[l].type);l0(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=wp(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=nl(t.mergedAttrs,u.hostAttrs),u0(n,t,e,c,u),c0(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}J_(n,t,s)}function n0(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;i0(o)!=a&&o.push(a),o.push(t,i,s)}}function i0(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function r0(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;Do(t)&&d0(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||Wh(t,e),sr(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=ps(e,n,a,t);if(sr(l,e),o!==null&&f0(e,a-r,l,c,t,o),vs(c)){let u=ur(t.index,e);u[Zn]=ps(e,n,a,t)}}}function Ip(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=xv();try{bi(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];xc(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&s0(c,l)}}finally{bi(-1),xc(o)}}function s0(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function o0(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(F_(e,o.selectors,!1))if(i||(i=[]),vs(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;Nc(n,e,c)}else i.unshift(o),Nc(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function Nc(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function a0(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ue(-301,!1);i.push(e[r],s)}}}function c0(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;vs(e)&&(t[""]=n)}}function l0(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function u0(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=cs(r.type,!0)),o=new hs(s,vs(r),hr);n.blueprint[i]=o,t[i]=o,n0(n,e,i,wp(n,t,r.hostVars,fr),r)}function Rp(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function d0(n,e,t){let i=ri(e,n),r=Dp(t),s=n[Jn].rendererFactory,o=Pp(n,pl(n,r,null,Rp(t),i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=o}function f0(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];Sp(i,t,c,l,u,d)}}function h0(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function Np(n,e){let t=n.contentQueries;if(t!==null){let i=rt(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Rh(s),a.contentQueries(2,e[o],o)}}}finally{rt(i)}}}function Pp(n,e){return n[fs]?n[Tf][Xn]=e:n[fs]=e,n[Tf]=e,e}function Pc(n,e,t){Rh(0);let i=rt(null);try{e(n,t)}finally{rt(i)}}function p0(n,e){let t=n[ir],i=t?t.get(Qn,null):null;i&&i.handleError(e)}function gl(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];Sp(u,l,i,a,c,r)}}function m0(n,e,t){let i=av(e,n);h_(n[gn],i,t)}function g0(n,e){let t=ur(e,n),i=t[Xe];y0(i,t);let r=t[ni];r!==null&&t[mc]===null&&(t[mc]=ll(r,t[ir])),Lp(i,t,t[Zn])}function y0(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Lp(n,e,t){Qc(e);try{let i=n.viewQuery;i!==null&&Pc(1,i,t);let r=n.template;r!==null&&bp(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Zc]?.finishViewCreation(n),n.staticContentQueries&&Np(n,e),n.staticViewQueries&&Pc(2,n.viewQuery,t);let s=n.components;s!==null&&v0(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[be]&=-5,el()}}function v0(n,e){for(let t=0;t<e.length;t++)g0(n,e[t])}function go(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(lr(s)),cr(s)&&_0(s,i);let o=t.type;if(o&8)go(n,e,t.child,i);else if(o&32){let a=pp(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=T_(e,t);if(Array.isArray(a))i.push(...a);else{let c=rr(e[wn]);go(c[Xe],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function _0(n,e){for(let t=Mi;t<n.length;t++){let i=n[t],r=i[Xe].firstChild;r!==null&&go(i[Xe],i,r,e)}n[gc]!==n[ni]&&e.push(n[gc])}var Op=[];function x0(n){return n[Ht]??M0(n)}function M0(n){let e=Op.pop()??Object.create(S0);return e.lView=n,e}function E0(n){n.lView[Ht]!==n&&(n.lView=null,Op.push(n))}var S0=Kt(Bt({},Ha),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{Ao(n.lView)},consumerOnSignalRead(){this.lView[Ht]=this}});function w0(n){let e=n[Ht]??Object.create(b0);return e.lView=n,e}var b0=Kt(Bt({},Ha),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{let e=rr(n.lView);for(;e&&!Fp(e[Xe]);)e=rr(e);e&&Kc(e)},consumerOnSignalRead(){this.lView[Ht]=this}});function Fp(n){return n.type!==2}function kp(n){if(n[co]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[co])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[be]&8192)}}var T0=100;function Up(n,e=!0,t=0){let r=n[Jn].rendererFactory,s=!1;s||r.begin?.();try{D0(n,t)}catch(o){throw e&&p0(n,o),o}finally{s||r.end?.()}}function D0(n,e){let t=Ch();try{If(!0),Lc(n,e);let i=0;for(;Co(n);){if(i===T0)throw new Ue(103,!1);i++,Lc(n,1)}}finally{If(t)}}function C0(n,e,t,i){let r=e[be];if((r&256)===256)return;let s=!1,o=!1;Qc(e);let a=!0,c=null,l=null;s||(Fp(n)?(l=x0(e),c=za(l)):ef()===null?(a=!1,l=w0(e),c=za(l)):e[Ht]&&(Wa(e[Ht]),e[Ht]=null));try{Sh(e),yv(n.bindingStartIndex),t!==null&&bp(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let p=n.preOrderCheckHooks;p!==null&&no(e,p,null)}else{let p=n.preOrderHooks;p!==null&&io(e,p,0,null),sc(e,0)}if(o||A0(e),kp(e),Bp(e,0),n.contentQueries!==null&&Np(n,e),!s)if(u){let p=n.contentCheckHooks;p!==null&&no(e,p)}else{let p=n.contentHooks;p!==null&&io(e,p,1),sc(e,1)}z_(n,e);let d=n.components;d!==null&&Hp(e,d,0);let f=n.viewQuery;if(f!==null&&Pc(2,f,i),!s)if(u){let p=n.viewCheckHooks;p!==null&&no(e,p)}else{let p=n.viewHooks;p!==null&&io(e,p,2),sc(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[rc]){for(let p of e[rc])p();e[rc]=null}s||(e[be]&=-73)}catch(u){throw s||Ao(e),u}finally{l!==null&&(nf(l,c),a&&E0(l)),el()}}function Bp(n,e){for(let t=cp(n);t!==null;t=lp(t))for(let i=Mi;i<t.length;i++){let r=t[i];Vp(r,e)}}function A0(n){for(let e=cp(n);e!==null;e=lp(e)){if(!(e[be]&uo.HasTransplantedViews))continue;let t=e[lo];for(let i=0;i<t.length;i++){let r=t[i];Kc(r)}}}function I0(n,e,t){let i=ur(e,n);Vp(i,t)}function Vp(n,e){Jc(n)&&Lc(n,e)}function Lc(n,e){let i=n[Xe],r=n[be],s=n[Ht],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Ga(s)),o||=!1,s&&(s.dirty=!1),n[be]&=-9217,o)C0(i,n,i.template,n[Zn]);else if(r&8192){kp(n),Bp(n,1);let a=i.components;a!==null&&Hp(n,a,1)}}function Hp(n,e,t){for(let i=0;i<e.length;i++)I0(n,e[i],t)}function zp(n,e){let t=Ch()?64:1088;for(n[Jn].changeDetectionScheduler?.notify(e);n;){n[be]|=t;let i=rr(n);if(yc(n)&&!i)return n;n=i}return null}var gs=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[Xe];return go(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[Zn]}get dirty(){return!!(this._lView[be]&9280)||!!this._lView[Ht]?.dirty}set context(e){this._lView[Zn]=e}get destroyed(){return(this._lView[be]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[nn];if(cr(e)){let t=e[Qy],i=t?t.indexOf(this):-1;i>-1&&(y_(e,i),ah(t,i))}this._attachedToViewContainer=!1}v_(this._lView[Xe],this._lView)}onDestroy(e){wh(this._lView,e)}markForCheck(){zp(this._cdRefInjectingView||this._lView,4)}markForRefresh(){Kc(this._cdRefInjectingView||this._lView)}detach(){this._lView[be]&=-129}reattach(){Af(this._lView),this._lView[be]|=128}detectChanges(){this._lView[be]|=1024,Up(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ue(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=yc(this._lView),t=this._lView[ao];t!==null&&!e&&ul(t,this._lView),gp(this._lView[Xe],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ue(902,!1);this._appRef=e;let t=yc(this._lView),i=this._lView[ao];i!==null&&!t&&g_(i,this._lView),Af(this._lView)}};var Oc=class{resolveComponentFactory(e){throw Error(`No component factory found for ${Vt(e)}.`)}},or=class{static NULL=new Oc},ti=class{},Fc=class{},kc=class{},yo=class{},ar=class{};var R0=(()=>{class n{static \u0275prov=ft({token:n,providedIn:"root",factory:()=>null})}return n})();function Uc(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=vf(r,a);else if(s==2){let c=a,l=e[++o];i=vf(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var vo=class extends or{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=wo(e);return new Bc(t,this.ngModule)}};function qf(n,e){let t=[];for(let i in n){if(!n.hasOwnProperty(i))continue;let r=n[i];if(r===void 0)continue;let s=Array.isArray(r),o=s?r[0]:r,a=s?r[1]:ei.None;e?t.push({propName:o,templateName:i,isSignal:(a&ei.SignalBased)!==0}):t.push({propName:o,templateName:i})}return t}function N0(n){let e=n.toLowerCase();return e==="svg"?sv:e==="math"?ov:null}var Bc=class extends yo{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;get inputs(){let e=this.componentDef,t=e.inputTransforms,i=qf(e.inputs,!0);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return qf(this.componentDef.outputs,!1)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=V_(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=rt(null);try{r=r||this.ngModule;let o=r instanceof Si?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new Ec(e,o):e,c=a.get(ar,null);if(c===null)throw new Ue(407,!1);let l=a.get(R0,null),u=a.get(ms,null),d={rendererFactory:c,sanitizer:l,changeDetectionScheduler:u},f=c.createRenderer(null,this.componentDef),p=this.componentDef.selectors[0][0]||"div",g=i?q_(f,i,this.componentDef.encapsulation,a):mp(f,p,N0(p)),_=512;this.componentDef.signals?_|=4096:this.componentDef.onPush||(_|=16);let m=null;g!==null&&(m=ll(g,a,!0));let h=Cp(0,null,null,1,0,null,null,null,null,null,null),b=pl(null,h,null,_,null,null,d,f,a,null,m);Qc(b);let w,M,O=null;try{let T=this.componentDef,D,L=null;T.findHostDirectiveDefs?(D=[],L=new Map,T.findHostDirectiveDefs(T,D,L),D.push(T)):D=[T];let E=P0(b,g);O=L0(E,g,T,D,b,d,f),M=Eh(h,wi),g&&k0(f,T,g,i),t!==void 0&&U0(M,this.ngContentSelectors,t),w=F0(O,T,D,L,b,[B0]),Lp(h,b,null)}catch(T){throw O!==null&&Ac(O),Ac(b),T}finally{el()}return new Vc(this.componentType,w,sp(M,b),b,M)}finally{rt(s)}}},Vc=class extends kc{location;_rootLView;_tNode;instance;hostView;changeDetectorRef;componentType;previousInputValues=null;constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.instance=t,this.hostView=this.changeDetectorRef=new gs(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;gl(s[Xe],s,r,e,t),this.previousInputValues.set(e,t);let o=ur(this._tNode.index,s);zp(o,1)}}get injector(){return new fo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function P0(n,e){let t=n[Xe],i=wi;return n[i]=e,ml(t,i,2,"#host",null)}function L0(n,e,t,i,r,s,o){let a=r[Xe];O0(i,n,e,o);let c=null;e!==null&&(c=ll(e,r[ir]));let l=s.rendererFactory.createRenderer(e,t),u=pl(r,Dp(t),null,Rp(t),r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&Nc(a,n,i.length-1),Pp(r,u),r[n.index]=u}function O0(n,e,t,i){for(let r of n)e.mergedAttrs=nl(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(Uc(e,e.mergedAttrs,!0),t!==null&&xp(i,t,e))}function F0(n,e,t,i,r,s){let o=si(),a=r[Xe],c=ri(o,r);Ap(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,f=ps(r,a,d,o);sr(f,r)}Ip(a,r,o),c&&sr(c,r);let l=ps(r,a,o.directiveStart+o.componentOffset,o);if(n[Zn]=r[Zn]=l,s!==null)for(let u of s)u(l,e);return Tp(a,o,r),l}function k0(n,e,t,i){if(i)Mc(n,t,["ng-version","19.0.0"]);else{let{attrs:r,classes:s}=H_(e.selectors[0]);r&&Mc(n,t,r),s&&s.length>0&&_p(n,t,s.join(" "))}}function U0(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}function B0(){let n=si();Vh(It()[Xe],n)}var _o=class extends ti{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new vo(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=Uy(e);this._bootstrapComponents=u_(s.bootstrap),this._r3Injector=Kh(e,t,[{provide:ti,useValue:this},{provide:or,useValue:this.componentFactoryResolver},...i],Vt(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Hc=class extends Fc{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new _o(this.moduleType,e,[])}};function V0(n,e,t){return new _o(n,e,t,!1)}var zc=class extends ti{injector;componentFactoryResolver=new vo(this);instance=null;constructor(e){super();let t=new ds([...e.providers,{provide:ti,useValue:this},{provide:or,useValue:this.componentFactoryResolver}],e.parent||Yc(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function H0(n,e,t=null){return new zc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var z0=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=fh(!1,t.type),r=i.length>0?H0([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=ft({token:n,providedIn:"environment",factory:()=>new n(We(Si))})}return n})();function No(n){return Qf(()=>{let e=j0(n),t=Kt(Bt({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===op.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(z0).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||yn.Emulated,styles:n.styles||hn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&hp("NgStandalone"),$0(t);let i=n.dependencies;return t.directiveDefs=Yf(i,!1),t.pipeDefs=Yf(i,!0),t.id=q0(t),t})}function G0(n){return wo(n)||uh(n)}function W0(n){return n!==null}function Dn(n){return Qf(()=>({type:n.type,bootstrap:n.bootstrap||hn,declarations:n.declarations||hn,imports:n.imports||hn,exports:n.exports||hn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function Xf(n,e){if(n==null)return ls;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=ei.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==ei.None?[i,a]:i,e[s]=o):t[s]=i}return t}function j0(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||ls,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||hn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Xf(n.inputs,e),outputs:Xf(n.outputs),debugInfo:null}}function $0(n){n.features?.forEach(e=>e(n))}function Yf(n,e){if(!n)return null;let t=e?dh:G0;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(W0)}function q0(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var yl=new je(""),Es=new je(""),Po=(()=>{class n{_ngZone;registry;_isZoneStable=!0;_callbacks=[];taskTrackingZone=null;constructor(t,i,r){this._ngZone=t,this.registry=i,vl||(X0(r),r.addToWindow(i)),this._watchAngularEvents(),t.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{dt.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let t=this._callbacks.pop();clearTimeout(t.timeoutId),t.doneCb()}});else{let t=this.getPendingTasks();this._callbacks=this._callbacks.filter(i=>i.updateCb&&i.updateCb(t)?(clearTimeout(i.timeoutId),!1):!0)}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(t=>({source:t.source,creationLocation:t.creationLocation,data:t.data})):[]}addCallback(t,i,r){let s=-1;i&&i>0&&(s=setTimeout(()=>{this._callbacks=this._callbacks.filter(o=>o.timeoutId!==s),t()},i)),this._callbacks.push({doneCb:t,timeoutId:s,updateCb:r})}whenStable(t,i,r){if(r&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(t,i,r),this._runCallbacksIfReady()}registerApplication(t){this.registry.registerApplication(t,this)}unregisterApplication(t){this.registry.unregisterApplication(t)}findProviders(t,i,r){return[]}static \u0275fac=function(i){return new(i||n)(We(dt),We(Lo),We(Es))};static \u0275prov=ft({token:n,factory:n.\u0275fac})}return n})(),Lo=(()=>{class n{_applications=new Map;registerApplication(t,i){this._applications.set(t,i)}unregisterApplication(t){this._applications.delete(t)}unregisterAllApplications(){this._applications.clear()}getTestability(t){return this._applications.get(t)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(t,i=!0){return vl?.findTestabilityInTree(this,t,i)??null}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();function X0(n){vl=n}var vl;function _l(n){return!!n&&typeof n.then=="function"}function Gp(n){return!!n&&typeof n.subscribe=="function"}var Y0=new je("");var Wp=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=Qe(Y0,{optional:!0})??[];injector=Qe(Kn);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=mh(this.injector,r);if(_l(s))t.push(s);else if(Gp(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Z0=(()=>{class n{static \u0275prov=ft({token:n,providedIn:"root",factory:()=>new Gc})}return n})(),Gc=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}},J0=new je("");function K0(){rf(()=>{throw new Ue(600,!1)})}function Q0(n){return n.isBoundToModule}var ex=10;function tx(n,e,t){try{let i=t();return _l(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}function jp(n,e){return Array.isArray(e)?e.reduce(jp,n):Bt(Bt({},n),e)}var pr=(()=>{class n{_bootstrapListeners=[];_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=Qe(Jv);afterRenderManager=Qe(c_);zonelessEnabled=Qe(il);rootEffectScheduler=Qe(Z0);dirtyFlags=0;deferredDirtyFlags=0;externalTestViews=new Set;afterTick=new xi;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=Qe(Ro).hasPendingTasks.pipe(nc(t=>!t));whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=Qe(Si);get injector(){return this._injector}bootstrap(t,i){let r=t instanceof yo;if(!this._injector.get(Wp).done){let f=!r&&By(t),p=!1;throw new Ue(405,p)}let o;r?o=t:o=this._injector.get(or).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=Q0(o)?void 0:this._injector.get(ti),c=i||o.selector,l=o.create(Kn.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(yl,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),ro(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){if(this._runningTick)throw new Ue(101,!1);let t=rt(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,rt(t),this.afterTick.next()}}synchronize(){let t=null;this._injector.destroyed||(t=this._injector.get(ar,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let i=0;for(;this.dirtyFlags!==0&&i++<ex;)this.synchronizeOnce(t)}synchronizeOnce(t){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r,notifyErrorHandler:s}of this.allViews)nx(r,s,i,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else t?.begin?.(),t?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Co(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;ro(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t);let i=this._injector.get(J0,[]);[...this._bootstrapListeners,...i].forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>ro(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ue(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ro(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function nx(n,e,t,i){if(!t&&!Co(n))return;Up(n,e,t&&!i?0:1)}var lA=new RegExp(`^(\\d+)*(${o_}|${s_})*(.*)`);function ix(n){let e=[],t=new Map;function i(r){let s=t.get(r);if(!s){let o=n(r);t.set(r,s=o.then(ax))}return s}return xo.forEach((r,s)=>{let o=[];r.templateUrl&&o.push(i(r.templateUrl).then(l=>{r.template=l}));let a=typeof r.styles=="string"?[r.styles]:r.styles||[];if(r.styles=a,r.styleUrl&&r.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");if(r.styleUrls?.length){let l=r.styles.length,u=r.styleUrls;r.styleUrls.forEach((d,f)=>{a.push(""),o.push(i(d).then(p=>{a[l+f]=p,u.splice(u.indexOf(d),1),u.length==0&&(r.styleUrls=void 0)}))})}else r.styleUrl&&o.push(i(r.styleUrl).then(l=>{a.push(l),r.styleUrl=void 0}));let c=Promise.all(o).then(()=>cx(s));e.push(c)}),sx(),Promise.all(e).then(()=>{})}var xo=new Map,rx=new Set;function sx(){let n=xo;return xo=new Map,n}function ox(){return xo.size===0}function ax(n){return typeof n=="string"?n:n.text()}function cx(n){rx.delete(n)}function $p(n,e,t){return n[e]=t}function lx(n,e){return n[e]}function xl(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function ux(n){return(n.flags&32)===32}function dx(n,e,t,i){return xl(n,Ih(),t)?e+rh(t)+i:fr}function Ss(n,e,t){let i=It(),r=Ih();if(xl(i,r,e)){let s=_s(),o=Ev();Q_(s,o,i,n,e,i[gn],t,!1)}return Ss}function Zf(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";gl(n,t,s[o],o,i)}function fx(n,e,t,i,r,s){let o=e.consts,a=Cf(o,r),c=ml(e,n,2,i,a);return t0(e,t,c,Cf(o,s)),c.attrs!==null&&Uc(c,c.attrs,!1),c.mergedAttrs!==null&&Uc(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function mr(n,e,t,i){let r=It(),s=_s(),o=wi+n,a=r[gn],c=s.firstCreatePass?fx(o,s,r,e,t,i):s.data[o],l=hx(s,r,c,a,e,n);r[o]=l;let u=ev(c);return Io(c,!0),xp(a,l,c),!ux(c)&&Uh()&&vp(s,r,l,c),lv()===0&&sr(l,r),uv(),u&&(W_(s,r,c),Tp(s,c,r)),i!==null&&j_(r,c),mr}function gr(){let n=si();Dh()?gv():(n=n.parent,Io(n,!1));let e=n;hv(e)&&pv(),dv();let t=_s();return t.firstCreatePass&&(Vh(t,n),vh(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&Dv(e)&&Zf(t,e,It(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Cv(e)&&Zf(t,e,It(),e.stylesWithoutHost,!1),gr}function Oo(n,e,t,i){return mr(n,e,t,i),gr(),Oo}var hx=(n,e,t,i,r,s)=>(Bh(!0),mp(i,r,Sv()));var Mo="en-US";var px=Mo;function mx(n){typeof n=="string"&&(px=n.toLowerCase().replace(/_/g,"-"))}function Ml(n,e=""){let t=It(),i=_s(),r=n+wi,s=i.firstCreatePass?ml(i,r,1,e,null):i.data[r],o=gx(i,t,s,e,n);t[r]=o,Uh()&&vp(i,t,o,s),Io(s,!1)}var gx=(n,e,t,i,r)=>(Bh(!0),f_(e[gn],i));function El(n){return qp("",n,""),El}function qp(n,e,t){let i=It(),r=dx(i,n,e,t);return r!==fr&&m0(i,tl(),r),qp}function ws(n,e,t){let i=Ah()+n,r=It();return r[i]===fr?$p(r,i,t?e.call(t):e()):lx(r,i)}function Sl(n,e,t,i){return vx(It(),Ah(),n,e,t,i)}function yx(n,e){let t=n[e];return t===fr?void 0:t}function vx(n,e,t,i,r,s){let o=e+t;return xl(n,o,r)?$p(n,o+1,s?i.call(s,r):i(r)):yx(n,o+1)}var Qs=null;function _x(n){Qs!==null&&(n.defaultEncapsulation!==Qs.defaultEncapsulation||n.preserveWhitespaces!==Qs.preserveWhitespaces)||(Qs=n)}var xx=new je("");function Mx(n,e,t){let i=new Hc(t);return Promise.resolve(i)}function Jf(n){for(let e=n.length-1;e>=0;e--)if(n[e]!==void 0)return n[e]}var Ex=(()=>{class n{zone=Qe(dt);changeDetectionScheduler=Qe(ms);applicationRef=Qe(pr);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Sx({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new dt(Kt(Bt({},Xp()),{scheduleInRootZone:t})),[{provide:dt,useFactory:n},{provide:us,multi:!0,useFactory:()=>{let i=Qe(Ex,{optional:!0});return()=>i.initialize()}},{provide:us,multi:!0,useFactory:()=>{let i=Qe(wx);return()=>{i.initialize()}}},e===!0?{provide:tp,useValue:!0}:[],{provide:np,useValue:t??Qh}]}function Xp(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var wx=(()=>{class n{subscription=new At;initialized=!1;zone=Qe(dt);pendingTasks=Qe(Ro);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{dt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{dt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var bx=(()=>{class n{appRef=Qe(pr);taskService=Qe(Ro);ngZone=Qe(dt);zonelessEnabled=Qe(il);disableScheduling=Qe(tp,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new At;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(po):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(Qe(np,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof mo||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 8:{this.appRef.deferredDirtyFlags|=8;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 13:{this.appRef.dirtyFlags|=16,i=!0;break}case 14:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{i=!0;break}case 10:case 9:case 7:case 11:default:this.appRef.dirtyFlags|=8}if(!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?kf:ip;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(po+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,kf(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Tx(){return typeof $localize<"u"&&$localize.locale||Mo}var wl=new je("",{providedIn:"root",factory:()=>Qe(wl,ke.Optional|ke.SkipSelf)||Tx()});var Eo=new je("");function eo(n){return!n.moduleRef}function Dx(n){let e=eo(n)?n.r3Injector:n.moduleRef.injector,t=e.get(dt);return t.run(()=>{eo(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Qn,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),eo(n)){let s=()=>e.destroy(),o=n.platformInjector.get(Eo);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(Eo);o.add(s),n.moduleRef.onDestroy(()=>{ro(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return tx(i,t,()=>{let s=e.get(Wp);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(wl,Mo);if(mx(o||Mo),eo(n)){let a=e.get(pr);return n.rootComponent!==void 0&&a.bootstrap(n.rootComponent),a}else return Cx(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function Cx(n,e){let t=n.injector.get(pr);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new Ue(-403,!1);e.push(n)}var Yp=(()=>{class n{_injector;_modules=[];_destroyListeners=[];_destroyed=!1;constructor(t){this._injector=t}bootstrapModuleFactory(t,i){let r=i?.scheduleInRootZone,s=()=>Zv(i?.ngZone,Kt(Bt({},Xp({eventCoalescing:i?.ngZoneEventCoalescing,runCoalescing:i?.ngZoneRunCoalescing})),{scheduleInRootZone:r})),o=i?.ignoreChangesOutsideZone,a=[Sx({ngZoneFactory:s,ignoreChangesOutsideZone:o}),{provide:ms,useExisting:bx}],c=V0(t.moduleType,this.injector,a);return Dx({moduleRef:c,allPlatformModules:this._modules,platformInjector:this.injector})}bootstrapModule(t,i=[]){let r=jp({},i);return Mx(this.injector,r,t).then(s=>this.bootstrapModuleFactory(s,r))}onDestroy(t){this._destroyListeners.push(t)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Ue(404,!1);this._modules.slice().forEach(i=>i.destroy()),this._destroyListeners.forEach(i=>i());let t=this._injector.get(Eo,null);t&&(t.forEach(i=>i()),t.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static \u0275fac=function(i){return new(i||n)(We(Kn))};static \u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})(),os=null,Zp=new je("");function Ax(n){if(os&&!os.get(Zp,!1))throw new Ue(400,!1);K0(),os=n;let e=n.get(Yp);return Nx(n),e}function bl(n,e,t=[]){let i=`Platform: ${e}`,r=new je(i);return(s=[])=>{let o=Jp();if(!o||o.injector.get(Zp,!1)){let a=[...t,...s,{provide:r,useValue:!0}];n?n(a):Ax(Ix(a,i))}return Rx(r)}}function Ix(n=[],e){return Kn.create({name:e,providers:[{provide:bo,useValue:"platform"},{provide:Eo,useValue:new Set([()=>os=null])},...n]})}function Rx(n){let e=Jp();if(!e)throw new Ue(401,!1);return e}function Jp(){return os?.get(Yp)??null}function Nx(n){let e=n.get(al,null);mh(n,()=>{e?.forEach(t=>t())})}var Fo=(()=>{class n{static __NG_ELEMENT_ID__=Px}return n})();function Px(n){return Lx(si(),It(),(n&16)===16)}function Lx(n,e,t){if(Do(n)&&!t){let i=ur(n.index,e);return new gs(i,i)}else if(n.type&175){let i=e[wn];return new gs(i,e)}return null}var Kp=bl(null,"core",[]),Qp=(()=>{class n{constructor(t){}static \u0275fac=function(i){return new(i||n)(We(pr))};static \u0275mod=Dn({type:n});static \u0275inj=Tn({})}return n})();var Kf=class{[ts];constructor(e){this[ts]=e}destroy(){this[ts].destroy()}};var em=null;function Bo(){return em}function tm(n){em??=n}var ko=class{};var oi=new je("");function nm(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var im=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Dn({type:n});static \u0275inj=Tn({})}return n})(),rm="browser",Ux="server";function Tl(n){return n===Ux}var Uo=class{};var Cl=class extends ko{supportsDOMEvents=!0},Al=class n extends Cl{static makeCurrent(){tm(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=Vx();return t==null?null:Hx(t)}resetBaseElement(){bs=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return nm(document.cookie,e)}},bs=null;function Vx(){return bs=bs||document.querySelector("base"),bs?bs.getAttribute("href"):null}function Hx(n){return new URL(n,document.baseURI).pathname}var Il=class{addToWindow(e){bn.getAngularTestability=(i,r=!0)=>{let s=e.findTestabilityInTree(i,r);if(s==null)throw new Ue(5103,!1);return s},bn.getAllAngularTestabilities=()=>e.getAllTestabilities(),bn.getAllAngularRootElements=()=>e.getAllRootElements();let t=i=>{let r=bn.getAllAngularTestabilities(),s=r.length,o=function(){s--,s==0&&i()};r.forEach(a=>{a.whenStable(o)})};bn.frameworkStabilizers||(bn.frameworkStabilizers=[]),bn.frameworkStabilizers.push(t)}findTestabilityInTree(e,t,i){if(t==null)return null;let r=e.getTestability(t);return r??(i?Bo().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null)}},zx=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ft({token:n,factory:n.\u0275fac})}return n})(),Rl=new je(""),um=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Ue(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(We(Rl),We(dt))};static \u0275prov=ft({token:n,factory:n.\u0275fac})}return n})(),Vo=class{_doc;constructor(e){this._doc=e}manager},Nl="ng-app-id";function sm(n){for(let e of n)e.remove()}function om(n,e){let t=e.createElement("style");return t.textContent=n,t}function Gx(n,e,t){let i=n.head?.querySelectorAll(`style[${Nl}="${e}"]`);if(i)for(let r of i)r.textContent&&(r.removeAttribute(Nl),t.set(r.textContent,{usage:0,elements:[r]}))}function Pl(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var dm=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=Tl(s),Gx(t,i,this.inline),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,om);i?.forEach(r=>this.addUsage(r,this.external,Pl))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(sm(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])sm(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,om(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Pl(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(Nl,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(We(oi),We(ol),We(cl,8),We(dr))};static \u0275prov=ft({token:n,factory:n.\u0275fac})}return n})(),Dl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ol=/%COMP%/g,fm="%COMP%",Wx=`_nghost-${fm}`,jx=`_ngcontent-${fm}`,$x=!0,qx=new je("",{providedIn:"root",factory:()=>$x});function Xx(n){return jx.replace(Ol,n)}function Yx(n){return Wx.replace(Ol,n)}function hm(n,e){return e.map(t=>t.replace(Ol,n))}var am=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.platformIsServer=Tl(a),this.defaultRenderer=new Ts(t,o,c,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===yn.ShadowDom&&(i=Kt(Bt({},i),{encapsulation:yn.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof Ho?r.applyToHost(t):r instanceof Ds&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(i.encapsulation){case yn.Emulated:s=new Ho(c,l,i,this.appId,u,o,a,d);break;case yn.ShadowDom:return new Ll(c,l,t,i,o,a,this.nonce,d);default:s=new Ds(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(i){return new(i||n)(We(um),We(dm),We(ol),We(qx),We(oi),We(dr),We(dt),We(cl))};static \u0275prov=ft({token:n,factory:n.\u0275fac})}return n})(),Ts=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Dl[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(cm(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(cm(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ue(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Dl[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Dl[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Ti.DashCase|Ti.Important)?e.style.setProperty(t,i,r&Ti.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Ti.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Bo().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function cm(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ll=class extends Ts{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=hm(r.id,r.styles);for(let d of l){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=d,this.shadowRoot.appendChild(f)}let u=r.getExternalStyles?.();if(u)for(let d of u){let f=Pl(d,s);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Ds=class extends Ts{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?hm(c,i.styles):i.styles,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ho=class extends Ds{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=Xx(l),this.hostAttr=Yx(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},Zx=(()=>{class n extends Vo{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static \u0275fac=function(i){return new(i||n)(We(oi))};static \u0275prov=ft({token:n,factory:n.\u0275fac})}return n})(),lm=["alt","control","meta","shift"],Jx={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Kx={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Qx=(()=>{class n extends Vo{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let s=n.parseEventName(i),o=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Bo().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),lm.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=Jx[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),lm.forEach(o=>{if(o!==r){let a=Kx[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(We(oi))};static \u0275prov=ft({token:n,factory:n.\u0275fac})}return n})();function eM(){Al.makeCurrent()}function tM(){return new Qn}function nM(){return dp(document),document}var iM=[{provide:dr,useValue:rm},{provide:al,useValue:eM,multi:!0},{provide:oi,useFactory:nM,deps:[]}],pm=bl(Kp,"browser",iM),rM=new je(""),sM=[{provide:Es,useClass:Il,deps:[]},{provide:yl,useClass:Po,deps:[dt,Lo,Es]},{provide:Po,useClass:Po,deps:[dt,Lo,Es]}],oM=[{provide:bo,useValue:"root"},{provide:Qn,useFactory:tM,deps:[]},{provide:Rl,useClass:Zx,multi:!0,deps:[oi,dt,dr]},{provide:Rl,useClass:Qx,multi:!0,deps:[oi]},am,dm,um,{provide:ar,useExisting:am},{provide:Uo,useClass:zx,deps:[]},[]],mm=(()=>{class n{constructor(t){}static \u0275fac=function(i){return new(i||n)(We(rM,12))};static \u0275mod=Dn({type:n});static \u0275inj=Tn({providers:[...oM,...sM],imports:[im,Qp]})}return n})();var Cd="170",ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cM=0,gm=1,lM=2;var Eg=1,uM=2,Ln=3,gi=0,Ft=1,On=2,pi=0,Or=1,ym=2,vm=3,_m=4,dM=5,Li=100,fM=101,hM=102,pM=103,mM=104,gM=200,yM=201,vM=202,_M=203,fu=204,hu=205,xM=206,MM=207,EM=208,SM=209,wM=210,bM=211,TM=212,DM=213,CM=214,pu=0,mu=1,gu=2,Br=3,yu=4,vu=5,_u=6,xu=7,Ad=0,AM=1,IM=2,mi=0,RM=1,NM=2,PM=3,LM=4,OM=5,FM=6,kM=7;var xm=300,Vr=301,Hr=302,Mu=303,Eu=304,Pa=306,Su=1e3,ki=1001,wu=1002,ln=1003,UM=1004;var zo=1005;var _n=1006,Fl=1007;var Ui=1008;var Bn=1009,Sg=1010,wg=1011,Us=1012,Id=1013,Bi=1014,Fn=1015,js=1016,Rd=1017,Nd=1018,zr=1020,bg=35902,Tg=1021,Dg=1022,cn=1023,Cg=1024,Ag=1025,Fr=1026,Gr=1027,Ig=1028,Pd=1029,Rg=1030,Ld=1031;var Od=1033,ua=33776,da=33777,fa=33778,ha=33779,bu=35840,Tu=35841,Du=35842,Cu=35843,Au=36196,Iu=37492,Ru=37496,Nu=37808,Pu=37809,Lu=37810,Ou=37811,Fu=37812,ku=37813,Uu=37814,Bu=37815,Vu=37816,Hu=37817,zu=37818,Gu=37819,Wu=37820,ju=37821,pa=36492,$u=36494,qu=36495,Ng=36283,Xu=36284,Yu=36285,Zu=36286;var ma=2300,Ju=2301,kl=2302,Mm=2400,Em=2401,Sm=2402;var BM=3200,VM=3201;var Pg=0,HM=1,hi="",Ot="srgb",Yr="srgb-linear",La="linear",et="srgb";var vr=7680;var wm=519,zM=512,GM=513,WM=514,Lg=515,jM=516,$M=517,qM=518,XM=519,bm=35044;var Tm="300 es",kn=2e3,ga=2001,Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dm=1234567,Os=Math.PI/180,Bs=180/Math.PI;function Zr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function Fd(n,e){return(n%e+e)%e}function YM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ZM(n,e,t){return n!==e?(t-n)/(e-n):0}function Fs(n,e,t){return(1-t)*n+t*e}function JM(n,e,t,i){return Fs(n,e,1-Math.exp(-t*i))}function KM(n,e=1){return e-Math.abs(Fd(n,e*2)-e)}function QM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function eE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function tE(n,e){return n+Math.floor(Math.random()*(e-n+1))}function nE(n,e){return n+Math.random()*(e-n)}function iE(n){return n*(.5-Math.random())}function rE(n){n!==void 0&&(Dm=n);let e=Dm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sE(n){return n*Os}function oE(n){return n*Bs}function aE(n){return(n&n-1)===0&&n!==0}function cE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function lE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function uE(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Nr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Og={DEG2RAD:Os,RAD2DEG:Bs,generateUUID:Zr,clamp:Dt,euclideanModulo:Fd,mapLinear:YM,inverseLerp:ZM,lerp:Fs,damp:JM,pingpong:KM,smoothstep:QM,smootherstep:eE,randInt:tE,randFloat:nE,randFloatSpread:iE,seededRandom:rE,degToRad:sE,radToDeg:oE,isPowerOfTwo:aE,ceilPowerOfTwo:cE,floorPowerOfTwo:lE,setQuaternionFromProperEuler:uE,normalize:Rt,denormalize:Nr},De=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Re=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],b=r[1],w=r[4],M=r[7],O=r[2],T=r[5],D=r[8];return s[0]=o*_+a*b+c*O,s[3]=o*m+a*w+c*T,s[6]=o*h+a*M+c*D,s[1]=l*_+u*b+d*O,s[4]=l*m+u*w+d*T,s[7]=l*h+u*M+d*D,s[2]=f*_+p*b+g*O,s[5]=f*m+p*w+g*T,s[8]=f*h+p*M+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,p=l*s-o*c,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ul.makeScale(e,t)),this}rotate(e){return this.premultiply(Ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ul=new Re;function Fg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dE(){let n=ya("canvas");return n.style.display="block",n}var Cm={};function Ps(n){n in Cm||(Cm[n]=!0,console.warn(n))}function fE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function hE(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pE(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var $e={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===et&&(n.r=Un(n.r),n.g=Un(n.g),n.b=Un(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===et&&(n.r=kr(n.r),n.g=kr(n.g),n.b=kr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===hi?La:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Un(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Am=[.64,.33,.3,.6,.15,.06],Im=[.2126,.7152,.0722],Rm=[.3127,.329],Nm=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pm=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[Yr]:{primaries:Am,whitePoint:Rm,transfer:La,toXYZ:Nm,fromXYZ:Pm,luminanceCoefficients:Im,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:Am,whitePoint:Rm,transfer:et,toXYZ:Nm,fromXYZ:Pm,luminanceCoefficients:Im,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}});var _r,Ku=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_r===void 0&&(_r=ya("canvas")),_r.width=e.width,_r.height=e.height;let i=_r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ya("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Un(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Un(t[i]/255)*255):t[i]=Un(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mE=0,va=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Zr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bl(r[o].image)):s.push(Bl(r[o]))}else s=Bl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Bl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ku.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gE=0,qi=(()=>{class n extends Vn{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=ki,s=ki,o=_n,a=Ui,c=cn,l=Bn,u=n.DEFAULT_ANISOTROPY,d=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Zr(),this.name="",this.source=new va(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Su:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case wu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Su:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case wu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=xm,n.DEFAULT_ANISOTROPY=1,n})(),tt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,M=(p+1)/2,O=(h+1)/2,T=(u+f)/4,D=(d+_)/4,L=(g+m)/4;return w>M&&w>O?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=D/i):M>O?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=L/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=D/s,r=L/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(f-u)/b,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qu=class extends Vn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new qi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends Qu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},_a=class extends qi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ed=class extends qi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var un=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==p||u!==g){let m=1-a,h=c*f+l*p+u*g+d*_,b=h>=0?1:-1,w=1-h*h;if(w>Number.EPSILON){let O=Math.sqrt(w),T=Math.atan2(O,h*b);m=Math.sin(m*T)/O,a=Math.sin(a*T)/O}let M=a*b;if(c=c*m+f*M,l=l*m+p*M,u=u*m+g*M,d=d*m+_*M,m===1-a){let O=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=O,l*=O,u*=O,d*=O}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*p-l*f,e[t+1]=c*g+u*f+l*d-a*p,e[t+2]=l*g+u*p+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vl.copy(this).projectOnVector(e),this.sub(Vl)}reflect(e){return this.sub(Vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vl=new P,Lm=new un,Vi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(s,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Go.copy(i.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),Wo.subVectors(this.max,Cs),xr.subVectors(e.a,Cs),Mr.subVectors(e.b,Cs),Er.subVectors(e.c,Cs),ai.subVectors(Mr,xr),ci.subVectors(Er,Mr),Di.subVectors(xr,Er);let t=[0,-ai.z,ai.y,0,-ci.z,ci.y,0,-Di.z,Di.y,ai.z,0,-ai.x,ci.z,0,-ci.x,Di.z,0,-Di.x,-ai.y,ai.x,0,-ci.y,ci.x,0,-Di.y,Di.x,0];return!Hl(t,xr,Mr,Er,Wo)||(t=[1,0,0,0,1,0,0,0,1],!Hl(t,xr,Mr,Er,Wo))?!1:(jo.crossVectors(ai,ci),t=[jo.x,jo.y,jo.z],Hl(t,xr,Mr,Er,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Cn=[new P,new P,new P,new P,new P,new P,new P,new P],rn=new P,Go=new Vi,xr=new P,Mr=new P,Er=new P,ai=new P,ci=new P,Di=new P,Cs=new P,Wo=new P,jo=new P,Ci=new P;function Hl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ci.fromArray(n,s);let a=r.x*Math.abs(Ci.x)+r.y*Math.abs(Ci.y)+r.z*Math.abs(Ci.z),c=e.dot(Ci),l=t.dot(Ci),u=i.dot(Ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var yE=new Vi,As=new P,zl=new P,Vs=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):yE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);let t=As.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(As,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(zl)),this.expandByPoint(As.copy(e.center).sub(zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},An=new P,Gl=new P,$o=new P,li=new P,Wl=new P,qo=new P,jl=new P,Hs=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gl.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Gl);let s=e.distanceTo(t)*.5,o=-this.direction.dot($o),a=li.dot(this.direction),c=-li.dot($o),l=li.lengthSq(),u=Math.abs(1-o*o),d,f,p,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Gl).addScaledVector($o,f),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);let i=An.dot(this.direction),r=An.dot(An)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,r,s){Wl.subVectors(t,e),qo.subVectors(i,e),jl.crossVectors(Wl,qo);let o=this.direction.dot(jl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);let c=a*this.direction.dot(qo.crossVectors(li,qo));if(c<0)return null;let l=a*this.direction.dot(Wl.cross(li));if(l<0||c+l>o)return null;let u=-a*li.dot(jl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,p,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,p,g,_,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,p,g,_,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Sr.setFromMatrixColumn(e,0).length(),s=1/Sr.setFromMatrixColumn(e,1).length(),o=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,p=c*d,g=l*u,_=l*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,p=c*d,g=l*u,_=l*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vE,e,_E)}lookAt(e,t,i){let r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),ui.crossVectors(i,zt),ui.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),ui.crossVectors(i,zt)),ui.normalize(),Xo.crossVectors(zt,ui),r[0]=ui.x,r[4]=Xo.x,r[8]=zt.x,r[1]=ui.y,r[5]=Xo.y,r[9]=zt.y,r[2]=ui.z,r[6]=Xo.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],b=i[3],w=i[7],M=i[11],O=i[15],T=r[0],D=r[4],L=r[8],E=r[12],x=r[1],C=r[5],G=r[9],B=r[13],W=r[2],Y=r[6],H=r[10],J=r[14],V=r[3],ie=r[7],le=r[11],_e=r[15];return s[0]=o*T+a*x+c*W+l*V,s[4]=o*D+a*C+c*Y+l*ie,s[8]=o*L+a*G+c*H+l*le,s[12]=o*E+a*B+c*J+l*_e,s[1]=u*T+d*x+f*W+p*V,s[5]=u*D+d*C+f*Y+p*ie,s[9]=u*L+d*G+f*H+p*le,s[13]=u*E+d*B+f*J+p*_e,s[2]=g*T+_*x+m*W+h*V,s[6]=g*D+_*C+m*Y+h*ie,s[10]=g*L+_*G+m*H+h*le,s[14]=g*E+_*B+m*J+h*_e,s[3]=b*T+w*x+M*W+O*V,s[7]=b*D+w*C+M*Y+O*ie,s[11]=b*L+w*G+M*H+O*le,s[15]=b*E+w*B+M*J+O*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*p-i*c*p)+_*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+m*(+t*l*d-t*a*p-s*o*d+i*o*p+s*a*u-i*l*u)+h*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],b=d*m*l-_*f*l+_*c*p-a*m*p-d*c*h+a*f*h,w=g*f*l-u*m*l-g*c*p+o*m*p+u*c*h-o*f*h,M=u*_*l-g*d*l+g*a*p-o*_*p-u*a*h+o*d*h,O=g*d*c-u*_*c-g*a*f+o*_*f+u*a*m-o*d*m,T=t*b+i*w+r*M+s*O;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/T;return e[0]=b*D,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*D,e[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*h+i*c*h)*D,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*p-i*c*p)*D,e[4]=w*D,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*h+t*f*h)*D,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*h-t*c*h)*D,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*p+t*c*p)*D,e[8]=M*D,e[9]=(g*d*s-u*_*s-g*i*p+t*_*p+u*i*h-t*d*h)*D,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*h+t*a*h)*D,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*p-t*a*p)*D,e[12]=O*D,e[13]=(u*_*r-g*d*r+g*i*f-t*_*f-u*i*m+t*d*m)*D,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*m-t*a*m)*D,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,p=s*u,g=s*d,_=o*u,m=o*d,h=a*d,b=c*l,w=c*u,M=c*d,O=i.x,T=i.y,D=i.z;return r[0]=(1-(_+h))*O,r[1]=(p+M)*O,r[2]=(g-w)*O,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(f+h))*T,r[6]=(m+b)*T,r[7]=0,r[8]=(g+w)*D,r[9]=(m-b)*D,r[10]=(1-(f+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Sr.set(r[0],r[1],r[2]).length(),o=Sr.set(r[4],r[5],r[6]).length(),a=Sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);let l=1/s,u=1/o,d=1/a;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,t.setFromRotationMatrix(sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=kn){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),p,g;if(a===kn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ga)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=kn){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,p=(i+r)*u,g,_;if(a===kn)g=(o+s)*d,_=-2*d;else if(a===ga)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Sr=new P,sn=new ht,vE=new P(0,0,0),_E=new P(1,1,1),ui=new P,Xo=new P,zt=new P,Om=new ht,Fm=new un,Hi=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],p=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Om.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Om,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Fm.setFromEuler(this),this.setFromQuaternion(Fm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xE=0,km=new P,wr=new un,In=new ht,Yo=new P,Is=new P,ME=new P,EE=new un,Um=new P(1,0,0),Bm=new P(0,1,0),Vm=new P(0,0,1),Hm={type:"added"},SE={type:"removed"},br={type:"childadded",child:null},$l={type:"childremoved",child:null},zn=(()=>{class n extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,i=new Hi,r=new un,s=new P(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Re}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(Um,t)}rotateY(t){return this.rotateOnAxis(Bm,t)}rotateZ(t){return this.rotateOnAxis(Vm,t)}translateOnAxis(t,i){return km.copy(t).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Um,t)}translateY(t){return this.translateOnAxis(Bm,t)}translateZ(t){return this.translateOnAxis(Vm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Yo.copy(t):Yo.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Is,Yo,this.up):In.lookAt(Yo,Is,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),wr.setFromRotationMatrix(In),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hm),br.child=t,this.dispatchEvent(br),br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(SE),$l.child=t,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hm),br.child=t,this.dispatchEvent(br),br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,ME),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,EE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),p=a(t.skeletons),g=a(t.animations),_=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),_.length>0&&(r.nodes=_)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new P(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),on=new P,Rn=new P,ql=new P,Nn=new P,Tr=new P,Dr=new P,zm=new P,Xl=new P,Yl=new P,Zl=new P,Jl=new tt,Kl=new tt,Ql=new tt,Oi=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),Rn.subVectors(i,t),ql.subVectors(e,t);let o=on.dot(on),a=on.dot(Rn),c=on.dot(ql),l=Rn.dot(Rn),u=Rn.dot(ql),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Nn.x),c.addScaledVector(o,Nn.y),c.addScaledVector(a,Nn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Jl.setScalar(0),Kl.setScalar(0),Ql.setScalar(0),Jl.fromBufferAttribute(e,t),Kl.fromBufferAttribute(e,i),Ql.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Jl,s.x),o.addScaledVector(Kl,s.y),o.addScaledVector(Ql,s.z),o}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),Rn.subVectors(e,t),on.cross(Rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),on.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Tr.subVectors(r,i),Dr.subVectors(s,i),Xl.subVectors(e,i);let c=Tr.dot(Xl),l=Dr.dot(Xl);if(c<=0&&l<=0)return t.copy(i);Yl.subVectors(e,r);let u=Tr.dot(Yl),d=Dr.dot(Yl);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Tr,o);Zl.subVectors(e,s);let p=Tr.dot(Zl),g=Dr.dot(Zl);if(g>=0&&p<=g)return t.copy(s);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Dr,a);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return zm.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(zm,a);let h=1/(m+_+f);return o=_*h,a=f*h,t.copy(i).addScaledVector(Tr,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function eu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=Fd(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=eu(o,s,e+1/3),this.g=eu(o,s,e),this.b=eu(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let i=kg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return $e.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Dt(Tt.r*255,0,255))*65536+Math.round(Dt(Tt.g*255,0,255))*256+Math.round(Dt(Tt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Tt.copy(this),t);let i=Tt.r,r=Tt.g,s=Tt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Ot){$e.fromWorkingColorSpace(Tt.copy(this),e);let t=Tt.r,i=Tt.g,r=Tt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Zo);let i=Fs(di.h,Zo.h,t),r=Fs(di.s,Zo.s,t),s=Fs(di.l,Zo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new Le;Le.NAMES=kg;var wE=0,zi=class extends Vn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Zr(),this.name="",this.blending=Or,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fu,this.blendDst=hu,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fu&&(i.blendSrc=this.blendSrc),this.blendDst!==hu&&(i.blendDst=this.blendDst),this.blendEquation!==Li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ma=class extends zi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var vt=new P,Jo=new De,Ct=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bm,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Nr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bm&&(e.usage=this.usage),e}};var Ea=class extends Ct{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Sa=class extends Ct{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Yt=class extends Ct{constructor(e,t,i){super(new Float32Array(e),t,i)}},bE=0,Xt=new ht,tu=new zn,Cr=new P,Gt=new Vi,Rs=new Vi,Et=new P,xn=class n extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fg(e)?Sa:Ea)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Re().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(i,3))}else{for(let i=0,r=t.count;i<r;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Gt.min,Rs.min),Gt.expandByPoint(Et),Et.addVectors(Gt.max,Rs.max),Gt.expandByPoint(Et)):(Gt.expandByPoint(Rs.min),Gt.expandByPoint(Rs.max))}Gt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Et.fromBufferAttribute(a,l),c&&(Cr.fromBufferAttribute(e,l),Et.add(Cr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new P,c[L]=new P;let l=new P,u=new P,d=new P,f=new De,p=new De,g=new De,_=new P,m=new P;function h(L,E,x){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,L),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),p.sub(f),g.sub(f);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[L].add(_),a[E].add(_),a[x].add(_),c[L].add(m),c[E].add(m),c[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,E=b.length;L<E;++L){let x=b[L],C=x.start,G=x.count;for(let B=C,W=C+G;B<W;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let w=new P,M=new P,O=new P,T=new P;function D(L){O.fromBufferAttribute(r,L),T.copy(O);let E=a[L];w.copy(E),w.sub(O.multiplyScalar(O.dot(E))).normalize(),M.crossVectors(T,E);let C=M.dot(c[L])<0?-1:1;o.setXYZW(L,w.x,w.y,w.z,C)}for(let L=0,E=b.length;L<E;++L){let x=b[L],C=x.start,G=x.count;for(let B=C,W=C+G;B<W;B+=3)D(e.getX(B+0)),D(e.getX(B+1)),D(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,d=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let h=0;h<u;h++)f[g++]=l[p++]}return new Ct(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gm=new ht,Ai=new Hs,Ko=new Vs,Wm=new P,Qo=new P,ea=new P,ta=new P,nu=new P,na=new P,jm=new P,ia=new P,Wt=class extends zn{constructor(e=new xn,t=new Ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){na.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(nu.fromBufferAttribute(d,e),o?na.addScaledVector(nu,u):na.addScaledVector(nu.sub(t),u))}t.add(na)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(Ko.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Ko,Wm)===null||Ai.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Gm.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(Gm),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],h=o[m.materialIndex],b=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,O=w;M<O;M+=3){let T=a.getX(M),D=a.getX(M+1),L=a.getX(M+2);r=ra(this,h,e,i,l,u,d,T,D,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){let b=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);r=ra(this,o,e,i,l,u,d,b,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],h=o[m.materialIndex],b=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,O=w;M<O;M+=3){let T=M,D=M+1,L=M+2;r=ra(this,h,e,i,l,u,d,T,D,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){let b=m,w=m+1,M=m+2;r=ra(this,o,e,i,l,u,d,b,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function TE(n,e,t,i,r,s,o,a){let c;if(e.side===Ft?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===gi,a),c===null)return null;ia.copy(a),ia.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ia);return l<t.near||l>t.far?null:{distance:l,point:ia.clone(),object:n}}function ra(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Qo),n.getVertexPosition(c,ea),n.getVertexPosition(l,ta);let u=TE(n,e,t,i,Qo,ea,ta,jm);if(u){let d=new P;Oi.getBarycoord(jm,Qo,ea,ta,d),r&&(u.uv=Oi.getInterpolatedAttribute(r,a,c,l,d,new De)),s&&(u.uv1=Oi.getInterpolatedAttribute(s,a,c,l,d,new De)),o&&(u.normal=Oi.getInterpolatedAttribute(o,a,c,l,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new P,materialIndex:0};Oi.getNormal(Qo,ea,ta,f.normal),u.face=f,u.barycoord=d}return u}var zs=class n extends xn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(d,2));function g(_,m,h,b,w,M,O,T,D,L,E){let x=M/D,C=O/L,G=M/2,B=O/2,W=T/2,Y=D+1,H=L+1,J=0,V=0,ie=new P;for(let le=0;le<H;le++){let _e=le*C-B;for(let Oe=0;Oe<Y;Oe++){let it=Oe*x-G;ie[_]=it*b,ie[m]=_e*w,ie[h]=W,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[h]=T>0?1:-1,u.push(ie.x,ie.y,ie.z),d.push(Oe/D),d.push(1-le/L),J+=1}}for(let le=0;le<L;le++)for(let _e=0;_e<D;_e++){let Oe=f+_e+Y*le,it=f+_e+Y*(le+1),$=f+(_e+1)+Y*(le+1),ee=f+(_e+1)+Y*le;c.push(Oe,it,ee),c.push(it,$,ee),V+=6}a.addGroup(p,V,E),p+=V,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Wr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nt(n){let e={};for(let t=0;t<n.length;t++){let i=Wr(n[t]);for(let r in i)e[r]=i[r]}return e}function DE(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ug(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var CE={clone:Wr,merge:Nt},AE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends zi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AE,this.fragmentShader=IE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=DE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},wa=class extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fi=new P,$m=new De,qm=new De,St=class extends wa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,$m,qm),t.subVectors(qm,$m)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Os*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ar=-90,Ir=1,td=class extends zn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new St(Ar,Ir,e,t);r.layers=this.layers,this.add(r);let s=new St(Ar,Ir,e,t);s.layers=this.layers,this.add(s);let o=new St(Ar,Ir,e,t);o.layers=this.layers,this.add(o);let a=new St(Ar,Ir,e,t);a.layers=this.layers,this.add(a);let c=new St(Ar,Ir,e,t);c.layers=this.layers,this.add(c);let l=new St(Ar,Ir,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ba=class extends qi{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Vr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nd=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ba(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zs(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:Wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:pi});s.uniforms.tEquirect.value=t;let o=new Wt(r,s),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=_n),new td(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},iu=new P,RE=new P,NE=new Re,an=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=iu.subVectors(i,t).cross(RE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(iu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||NE.getNormalMatrix(e),r=this.coplanarPoint(iu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ii=new Vs,sa=new P,Gs=class{constructor(e=new an,t=new an,i=new an,r=new an,s=new an,o=new an){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kn){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],b=r[13],w=r[14],M=r[15];if(i[0].setComponents(c-s,f-l,m-p,M-h).normalize(),i[1].setComponents(c+s,f+l,m+p,M+h).normalize(),i[2].setComponents(c+o,f+u,m+g,M+b).normalize(),i[3].setComponents(c-o,f-u,m-g,M-b).normalize(),i[4].setComponents(c-a,f-d,m-_,M-w).normalize(),t===kn)i[5].setComponents(c+a,f+d,m+_,M+w).normalize();else if(t===ga)i[5].setComponents(a,d,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(sa.x=r.normal.x>0?e.max.x:e.min.x,sa.y=r.normal.y>0?e.max.y:e.min.y,sa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function PE(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Ta=class n extends xn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){let b=h*f-o;for(let w=0;w<l;w++){let M=w*d-s;g.push(M,-b,0),_.push(0,0,1),m.push(w/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<a;b++){let w=b+l*h,M=b+l*(h+1),O=b+1+l*(h+1),T=b+1+l*h;p.push(w,M,T),p.push(M,O,T)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},LE=`#ifdef USE_ALPHAHASH
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
#endif`,kE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
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
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,GE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
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
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iS=`#define PI 3.141592653589793
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
} // validated`,rS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,sS=`vec3 transformedNormal = objectNormal;
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
#endif`,oS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uS="gl_FragColor = linearToOutputTexel( gl_FragColor );",dS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,hS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pS=`#ifdef USE_ENVMAP
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
#endif`,mS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
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
#endif`,yS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MS=`#ifdef USE_GRADIENTMAP
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
}`,ES=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bS=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,TS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,DS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RS=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,NS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,PS=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,LS=`#if defined( RE_IndirectDiffuse )
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
#endif`,OS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GS=`#if defined( USE_POINTS_UV )
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
#endif`,WS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$S=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,QS=`#ifndef FLAT_SHADED
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
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
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
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
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
#endif`,Sw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ww=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bw=`#if defined( TONE_MAPPING )
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dw=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pw=`varying vec2 vUv;
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
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uw=`uniform samplerCube tCube;
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
	#include <morphinstance_vertex>
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
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
	#include <morphinstance_vertex>
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#include <morphinstance_vertex>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
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
	#include <morphinstance_vertex>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
	#include <morphinstance_vertex>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
	#include <morphinstance_vertex>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
	#include <morphinstance_vertex>
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
}`,eb=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tb=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,nb=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ib=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,rb=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,sb=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,ob=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ab=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,cb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,lb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ub=`uniform vec3 color;
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
}`,db=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,fb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Pe={alphahash_fragment:LE,alphahash_pars_fragment:OE,alphamap_fragment:FE,alphamap_pars_fragment:kE,alphatest_fragment:UE,alphatest_pars_fragment:BE,aomap_fragment:VE,aomap_pars_fragment:HE,batching_pars_vertex:zE,batching_vertex:GE,begin_vertex:WE,beginnormal_vertex:jE,bsdfs:$E,iridescence_fragment:qE,bumpmap_pars_fragment:XE,clipping_planes_fragment:YE,clipping_planes_pars_fragment:ZE,clipping_planes_pars_vertex:JE,clipping_planes_vertex:KE,color_fragment:QE,color_pars_fragment:eS,color_pars_vertex:tS,color_vertex:nS,common:iS,cube_uv_reflection_fragment:rS,defaultnormal_vertex:sS,displacementmap_pars_vertex:oS,displacementmap_vertex:aS,emissivemap_fragment:cS,emissivemap_pars_fragment:lS,colorspace_fragment:uS,colorspace_pars_fragment:dS,envmap_fragment:fS,envmap_common_pars_fragment:hS,envmap_pars_fragment:pS,envmap_pars_vertex:mS,envmap_physical_pars_fragment:TS,envmap_vertex:gS,fog_vertex:yS,fog_pars_vertex:vS,fog_fragment:_S,fog_pars_fragment:xS,gradientmap_pars_fragment:MS,lightmap_pars_fragment:ES,lights_lambert_fragment:SS,lights_lambert_pars_fragment:wS,lights_pars_begin:bS,lights_toon_fragment:DS,lights_toon_pars_fragment:CS,lights_phong_fragment:AS,lights_phong_pars_fragment:IS,lights_physical_fragment:RS,lights_physical_pars_fragment:NS,lights_fragment_begin:PS,lights_fragment_maps:LS,lights_fragment_end:OS,logdepthbuf_fragment:FS,logdepthbuf_pars_fragment:kS,logdepthbuf_pars_vertex:US,logdepthbuf_vertex:BS,map_fragment:VS,map_pars_fragment:HS,map_particle_fragment:zS,map_particle_pars_fragment:GS,metalnessmap_fragment:WS,metalnessmap_pars_fragment:jS,morphinstance_vertex:$S,morphcolor_vertex:qS,morphnormal_vertex:XS,morphtarget_pars_vertex:YS,morphtarget_vertex:ZS,normal_fragment_begin:JS,normal_fragment_maps:KS,normal_pars_fragment:QS,normal_pars_vertex:ew,normal_vertex:tw,normalmap_pars_fragment:nw,clearcoat_normal_fragment_begin:iw,clearcoat_normal_fragment_maps:rw,clearcoat_pars_fragment:sw,iridescence_pars_fragment:ow,opaque_fragment:aw,packing:cw,premultiplied_alpha_fragment:lw,project_vertex:uw,dithering_fragment:dw,dithering_pars_fragment:fw,roughnessmap_fragment:hw,roughnessmap_pars_fragment:pw,shadowmap_pars_fragment:mw,shadowmap_pars_vertex:gw,shadowmap_vertex:yw,shadowmask_pars_fragment:vw,skinbase_vertex:_w,skinning_pars_vertex:xw,skinning_vertex:Mw,skinnormal_vertex:Ew,specularmap_fragment:Sw,specularmap_pars_fragment:ww,tonemapping_fragment:bw,tonemapping_pars_fragment:Tw,transmission_fragment:Dw,transmission_pars_fragment:Cw,uv_pars_fragment:Aw,uv_pars_vertex:Iw,uv_vertex:Rw,worldpos_vertex:Nw,background_vert:Pw,background_frag:Lw,backgroundCube_vert:Ow,backgroundCube_frag:Fw,cube_vert:kw,cube_frag:Uw,depth_vert:Bw,depth_frag:Vw,distanceRGBA_vert:Hw,distanceRGBA_frag:zw,equirect_vert:Gw,equirect_frag:Ww,linedashed_vert:jw,linedashed_frag:$w,meshbasic_vert:qw,meshbasic_frag:Xw,meshlambert_vert:Yw,meshlambert_frag:Zw,meshmatcap_vert:Jw,meshmatcap_frag:Kw,meshnormal_vert:Qw,meshnormal_frag:eb,meshphong_vert:tb,meshphong_frag:nb,meshphysical_vert:ib,meshphysical_frag:rb,meshtoon_vert:sb,meshtoon_frag:ob,points_vert:ab,points_frag:cb,shadow_vert:lb,shadow_frag:ub,sprite_vert:db,sprite_frag:fb},te={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},vn={basic:{uniforms:Nt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Nt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Le(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Nt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Nt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Nt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Le(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Nt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Nt([te.points,te.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Nt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Nt([te.common,te.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Nt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Nt([te.sprite,te.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Nt([te.common,te.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Nt([te.lights,te.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};vn.physical={uniforms:Nt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};var oa={r:0,b:0,g:0},Ri=new Hi,hb=new ht;function pb(n,e,t,i,r,s,o){let a=new Le(0),c=s===!0?0:1,l,u,d=null,f=0,p=null;function g(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?t:e).get(w)),w}function _(b){let w=!1,M=g(b);M===null?h(a,c):M&&M.isColor&&(h(M,1),w=!0);let O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,w){let M=g(w);M&&(M.isCubeTexture||M.mapping===Pa)?(u===void 0&&(u=new Wt(new zs(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Wr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ri.copy(w.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hb.makeRotationFromEuler(Ri)),u.material.toneMapped=$e.getTransfer(M.colorSpace)!==et,(d!==M||f!==M.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Wt(new Ta(2,2),new Mn({name:"BackgroundMaterial",uniforms:Wr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=$e.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,w){b.getRGB(oa,Ug(n)),i.buffers.color.setClear(oa.r,oa.g,oa.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),c=w,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(a,c)},render:_,addToRenderList:m}}function mb(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(x,C,G,B,W){let Y=!1,H=d(B,G,C);s!==H&&(s=H,l(s.object)),Y=p(x,B,G,W),Y&&g(x,B,G,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,M(x,C,G,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,C,G){let B=G.wireframe===!0,W=i[x.id];W===void 0&&(W={},i[x.id]=W);let Y=W[C.id];Y===void 0&&(Y={},W[C.id]=Y);let H=Y[B];return H===void 0&&(H=f(c()),Y[B]=H),H}function f(x){let C=[],G=[],B=[];for(let W=0;W<t;W++)C[W]=0,G[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,C,G,B){let W=s.attributes,Y=C.attributes,H=0,J=G.getAttributes();for(let V in J)if(J[V].location>=0){let le=W[V],_e=Y[V];if(_e===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor)),le===void 0||le.attribute!==_e||_e&&le.data!==_e.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function g(x,C,G,B){let W={},Y=C.attributes,H=0,J=G.getAttributes();for(let V in J)if(J[V].location>=0){let le=Y[V];le===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(le=x.instanceColor));let _e={};_e.attribute=le,le&&le.data&&(_e.data=le.data),W[V]=_e,H++}s.attributes=W,s.attributesNum=H,s.index=B}function _(){let x=s.newAttributes;for(let C=0,G=x.length;C<G;C++)x[C]=0}function m(x){h(x,0)}function h(x,C){let G=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;G[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),W[x]!==C&&(n.vertexAttribDivisor(x,C),W[x]=C)}function b(){let x=s.newAttributes,C=s.enabledAttributes;for(let G=0,B=C.length;G<B;G++)C[G]!==x[G]&&(n.disableVertexAttribArray(G),C[G]=0)}function w(x,C,G,B,W,Y,H){H===!0?n.vertexAttribIPointer(x,C,G,W,Y):n.vertexAttribPointer(x,C,G,B,W,Y)}function M(x,C,G,B){_();let W=B.attributes,Y=G.getAttributes(),H=C.defaultAttributeValues;for(let J in Y){let V=Y[J];if(V.location>=0){let ie=W[J];if(ie===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor)),ie!==void 0){let le=ie.normalized,_e=ie.itemSize,Oe=e.get(ie);if(Oe===void 0)continue;let it=Oe.buffer,$=Oe.type,ee=Oe.bytesPerElement,ge=$===n.INT||$===n.UNSIGNED_INT||ie.gpuType===Id;if(ie.isInterleavedBufferAttribute){let re=ie.data,Se=re.stride,Ce=ie.offset;if(re.isInstancedInterleavedBuffer){for(let Fe=0;Fe<V.locationSize;Fe++)h(V.location+Fe,re.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Fe=0;Fe<V.locationSize;Fe++)m(V.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,it);for(let Fe=0;Fe<V.locationSize;Fe++)w(V.location+Fe,_e/V.locationSize,$,le,Se*ee,(Ce+_e/V.locationSize*Fe)*ee,ge)}else{if(ie.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)h(V.location+re,ie.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let re=0;re<V.locationSize;re++)m(V.location+re);n.bindBuffer(n.ARRAY_BUFFER,it);for(let re=0;re<V.locationSize;re++)w(V.location+re,_e/V.locationSize,$,le,_e*ee,_e/V.locationSize*re*ee,ge)}}else if(H!==void 0){let le=H[J];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(V.location,le);break;case 3:n.vertexAttrib3fv(V.location,le);break;case 4:n.vertexAttrib4fv(V.location,le);break;default:n.vertexAttrib1fv(V.location,le)}}}}b()}function O(){L();for(let x in i){let C=i[x];for(let G in C){let B=C[G];for(let W in B)u(B[W].object),delete B[W];delete C[G]}delete i[x]}}function T(x){if(i[x.id]===void 0)return;let C=i[x.id];for(let G in C){let B=C[G];for(let W in B)u(B[W].object),delete B[W];delete C[G]}delete i[x.id]}function D(x){for(let C in i){let G=i[C];if(G[x.id]===void 0)continue;let B=G[x.id];for(let W in B)u(B[W].object),delete B[W];delete G[x.id]}}function L(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function gb(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function c(l,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function yb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==cn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let L=D===js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Bn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Fn&&!L)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:O,maxSamples:T}}function vb(n){let e=this,t=null,i=0,r=!1,s=!1,o=new an,a=new Re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let b=s?0:i,w=b*4,M=h.clippingState||null;c.value=M,M=u(g,f,w,p);for(let O=0;O!==w;++O)M[O]=t[O];h.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let h=p+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let w=0,M=p;w!==_;++w,M+=4)o.copy(d[w]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function _b(n){let e=new WeakMap;function t(o,a){return a===Mu?o.mapping=Vr:a===Eu&&(o.mapping=Hr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Mu||a===Eu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new nd(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var id=class extends wa{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pr=4,Xm=[.125,.215,.35,.446,.526,.582],Fi=20,ru=new id,Ym=new Le,su=null,ou=0,au=0,cu=!1,Pi=(1+Math.sqrt(5))/2,Rr=1/Pi,Zm=[new P(-Pi,Rr,0),new P(Pi,Rr,0),new P(-Rr,0,Pi),new P(Rr,0,Pi),new P(0,Pi,-Rr),new P(0,Pi,Rr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Da=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){su=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(su,ou,au),this._renderer.xr.enabled=cu,e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),su=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:js,format:cn,colorSpace:Yr,depthBuffer:!1},r=Jm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jm(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xb(s)),this._blurMaterial=Mb(s,e,t)}return r}_compileMaterial(e){let t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,ru)}_sceneToCubeUV(e,t,i,r){let a=new St(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ym),u.toneMapping=mi,u.autoClear=!1;let p=new Ma({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new Wt(new zs,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ym),_=!0);for(let h=0;h<6;h++){let b=h%3;b===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):b===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));let w=this._cubeSize;aa(r,b*w,h>2?w:0,w,w),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Vr||e.mapping===Hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Km());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;aa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ru)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zm[(r-s-1)%Zm.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Wt(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Fi;m>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);let h=[],b=0;for(let D=0;D<Fi;++D){let L=D/_,E=Math.exp(-L*L/2);h.push(E),D===0?b+=E:D<m&&(b+=2*E)}for(let D=0;D<h.length;D++)h[D]=h[D]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;let M=this._sizeLods[r],O=3*M*(r>w-Pr?r-w+Pr:0),T=4*(this._cubeSize-M);aa(t,O,T,3*M,2*M),c.setRenderTarget(t),c.render(d,ru)}};function xb(n){let e=[],t=[],i=[],r=n,s=n-Pr+1+Xm.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Pr?c=Xm[o-n+Pr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,h=1,b=new Float32Array(_*g*p),w=new Float32Array(m*g*p),M=new Float32Array(h*g*p);for(let T=0;T<p;T++){let D=T%3*2/3-1,L=T>2?0:-1,E=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];b.set(E,_*g*T),w.set(f,m*g*T);let x=[T,T,T,T,T,T];M.set(x,h*g*T)}let O=new xn;O.setAttribute("position",new Ct(b,_)),O.setAttribute("uv",new Ct(w,m)),O.setAttribute("faceIndex",new Ct(M,h)),e.push(O),r>Pr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jm(n,e,t){let i=new Hn(n,e,t);return i.texture.mapping=Pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Mb(n,e,t){let i=new Float32Array(Fi),r=new P(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kd(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Km(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kd(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Qm(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function kd(){return`

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
	`}function Eb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Mu||c===Eu,u=c===Vr||c===Hr;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Da(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Da(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Sb(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Ps("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function wb(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(d){let f=[],p=d.index,g=d.attributes.position,_=0;if(p!==null){let b=p.array;_=p.version;for(let w=0,M=b.length;w<M;w+=3){let O=b[w+0],T=b[w+1],D=b[w+2];f.push(O,T,T,D,D,O)}}else if(g!==void 0){let b=g.array;_=g.version;for(let w=0,M=b.length/3-1;w<M;w+=3){let O=w+0,T=w+1,D=w+2;f.push(O,T,T,D,D,O)}}else return;let m=new(Fg(f)?Sa:Ea)(f,1);m.version=_;let h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){let f=s.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function bb(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function d(f,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let h=0;for(let b=0;b<g;b++)h+=p[b]*_[b];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Tb(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Db(n,e,t){let i=new WeakMap,r=new tt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let E=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],w=0;p===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let M=a.attributes.position.count*w,O=1;M>e.maxTextureSize&&(O=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*O*4*d),D=new _a(T,M,O,d);D.type=Fn,D.needsUpdate=!0;let L=w*4;for(let x=0;x<d;x++){let C=m[x],G=h[x],B=b[x],W=M*O*4*x;for(let Y=0;Y<C.count;Y++){let H=Y*L;p===!0&&(r.fromBufferAttribute(C,Y),T[W+H+0]=r.x,T[W+H+1]=r.y,T[W+H+2]=r.z,T[W+H+3]=0),g===!0&&(r.fromBufferAttribute(G,Y),T[W+H+4]=r.x,T[W+H+5]=r.y,T[W+H+6]=r.z,T[W+H+7]=0),_===!0&&(r.fromBufferAttribute(B,Y),T[W+H+8]=r.x,T[W+H+9]=r.y,T[W+H+10]=r.z,T[W+H+11]=B.itemSize===4?r.w:1)}}f={count:d,texture:D,size:new De(M,O)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Cb(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Ca=class extends qi{constructor(e,t,i,r,s,o,a,c,l,u=Fr){if(u!==Fr&&u!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Fr&&(i=Bi),i===void 0&&u===Gr&&(i=zr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vg=new qi,eg=new Ca(1,1),Hg=new _a,zg=new ed,Gg=new ba,tg=[],ng=[],ig=new Float32Array(16),rg=new Float32Array(9),sg=new Float32Array(4);function Jr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=tg[r];if(s===void 0&&(s=new Float32Array(r),tg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oa(n,e){let t=ng[e];t===void 0&&(t=new Int32Array(e),ng[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ab(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ib(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function Rb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function Nb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function Pb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;sg.set(i),n.uniformMatrix2fv(this.addr,!1,sg),xt(t,i)}}function Lb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;rg.set(i),n.uniformMatrix3fv(this.addr,!1,rg),xt(t,i)}}function Ob(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;ig.set(i),n.uniformMatrix4fv(this.addr,!1,ig),xt(t,i)}}function Fb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function Ub(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function Bb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function Vb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function zb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function Gb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function Wb(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(eg.compareFunction=Lg,s=eg):s=Vg,t.setTexture2D(e||s,r)}function jb(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zg,r)}function $b(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Gg,r)}function qb(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Hg,r)}function Xb(n){switch(n){case 5126:return Ab;case 35664:return Ib;case 35665:return Rb;case 35666:return Nb;case 35674:return Pb;case 35675:return Lb;case 35676:return Ob;case 5124:case 35670:return Fb;case 35667:case 35671:return kb;case 35668:case 35672:return Ub;case 35669:case 35673:return Bb;case 5125:return Vb;case 36294:return Hb;case 36295:return zb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return jb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return qb}}function Yb(n,e){n.uniform1fv(this.addr,e)}function Zb(n,e){let t=Jr(e,this.size,2);n.uniform2fv(this.addr,t)}function Jb(n,e){let t=Jr(e,this.size,3);n.uniform3fv(this.addr,t)}function Kb(n,e){let t=Jr(e,this.size,4);n.uniform4fv(this.addr,t)}function Qb(n,e){let t=Jr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function eT(n,e){let t=Jr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tT(n,e){let t=Jr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nT(n,e){n.uniform1iv(this.addr,e)}function iT(n,e){n.uniform2iv(this.addr,e)}function rT(n,e){n.uniform3iv(this.addr,e)}function sT(n,e){n.uniform4iv(this.addr,e)}function oT(n,e){n.uniform1uiv(this.addr,e)}function aT(n,e){n.uniform2uiv(this.addr,e)}function cT(n,e){n.uniform3uiv(this.addr,e)}function lT(n,e){n.uniform4uiv(this.addr,e)}function uT(n,e,t){let i=this.cache,r=e.length,s=Oa(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Vg,s[o])}function dT(n,e,t){let i=this.cache,r=e.length,s=Oa(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zg,s[o])}function fT(n,e,t){let i=this.cache,r=e.length,s=Oa(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Gg,s[o])}function hT(n,e,t){let i=this.cache,r=e.length,s=Oa(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Hg,s[o])}function pT(n){switch(n){case 5126:return Yb;case 35664:return Zb;case 35665:return Jb;case 35666:return Kb;case 35674:return Qb;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return oT;case 36294:return aT;case 36295:return cT;case 36296:return lT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return hT}}var rd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xb(t.type)}},sd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pT(t.type)}},od=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},lu=/(\w+)(\])?(\[|\.)?/g;function og(n,e){n.seq.push(e),n.map[e.id]=e}function mT(n,e,t){let i=n.name,r=i.length;for(lu.lastIndex=0;;){let s=lu.exec(i),o=lu.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){og(t,l===void 0?new rd(a,n,e):new sd(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new od(a),og(t,d)),t=d}}}var Ur=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);mT(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function ag(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var gT=37297,yT=0;function vT(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var cg=new Re;function _T(n){$e._getMatrix(cg,$e.workingColorSpace,n);let e=`mat3( ${cg.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case La:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function lg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vT(n.getShaderSource(e),o)}else return r}function xT(n,e){let t=_T(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function MT(n,e){let t;switch(e){case RM:t="Linear";break;case NM:t="Reinhard";break;case PM:t="Cineon";break;case LM:t="ACESFilmic";break;case FM:t="AgX";break;case kM:t="Neutral";break;case OM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ca=new P;function ET(){$e.getLuminanceCoefficients(ca);let n=ca.x.toFixed(4),e=ca.y.toFixed(4),t=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ST(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function wT(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bT(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ls(n){return n!==""}function ug(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var TT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(n){return n.replace(TT,CT)}var DT=new Map;function CT(n,e){let t=Pe[e];if(t===void 0){let i=DT.get(e);if(i!==void 0)t=Pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ad(t)}var AT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(n){return n.replace(AT,IT)}function IT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function RT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Eg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function NT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vr:case Hr:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hr:e="ENVMAP_MODE_REFRACTION";break}return e}function LT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ad:e="ENVMAP_BLENDING_MULTIPLY";break;case AM:e="ENVMAP_BLENDING_MIX";break;case IM:e="ENVMAP_BLENDING_ADD";break}return e}function OT(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function FT(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=RT(t),l=NT(t),u=PT(t),d=LT(t),f=OT(t),p=ST(t),g=wT(s),_=r.createProgram(),m,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),h.length>0&&(h+=`
`)):(m=[hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),h=[hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Pe.tonemapping_pars_fragment:"",t.toneMapping!==mi?MT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,xT("linearToOutputTexel",t.outputColorSpace),ET(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),o=ad(o),o=ug(o,t),o=dg(o,t),a=ad(a),a=ug(a,t),a=dg(a,t),o=fg(o),a=fg(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let w=b+m+o,M=b+h+a,O=ag(r,r.VERTEX_SHADER,w),T=ag(r,r.FRAGMENT_SHADER,M);r.attachShader(_,O),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(C){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(O).trim(),W=r.getShaderInfoLog(T).trim(),Y=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,O,T);else{let J=lg(r,O,"vertex"),V=lg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+J+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||W==="")&&(H=!1);H&&(C.diagnostics={runnable:Y,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:h}})}r.deleteShader(O),r.deleteShader(T),L=new Ur(r,_),E=bT(r,_)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,gT)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=T,this}var kT=0,cd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ld(e),t.set(e,i)),i}},ld=class{constructor(e){this.id=kT++,this.code=e,this.usedTimes=0}};function UT(n,e,t,i,r,s,o){let a=new xa,c=new cd,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,x,C,G,B){let W=G.fog,Y=B.geometry,H=E.isMeshStandardMaterial?G.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||H),V=J&&J.mapping===Pa?J.image.height:null,ie=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_e=le!==void 0?le.length:0,Oe=0;Y.morphAttributes.position!==void 0&&(Oe=1),Y.morphAttributes.normal!==void 0&&(Oe=2),Y.morphAttributes.color!==void 0&&(Oe=3);let it,$,ee,ge;if(ie){let Ke=vn[ie];it=Ke.vertexShader,$=Ke.fragmentShader}else it=E.vertexShader,$=E.fragmentShader,c.update(E),ee=c.getVertexShaderID(E),ge=c.getFragmentShaderID(E);let re=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Ce=B.isInstancedMesh===!0,Fe=B.isBatchedMesh===!0,pt=!!E.map,ze=!!E.matcap,gt=!!J,N=!!E.aoMap,jt=!!E.lightMap,Be=!!E.bumpMap,Ve=!!E.normalMap,Me=!!E.displacementMap,ct=!!E.emissiveMap,xe=!!E.metalnessMap,S=!!E.roughnessMap,y=E.anisotropy>0,F=E.clearcoat>0,q=E.dispersion>0,Z=E.iridescence>0,j=E.sheen>0,ye=E.transmission>0,se=y&&!!E.anisotropyMap,ue=F&&!!E.clearcoatMap,Ge=F&&!!E.clearcoatNormalMap,K=F&&!!E.clearcoatRoughnessMap,de=Z&&!!E.iridescenceMap,Ee=Z&&!!E.iridescenceThicknessMap,we=j&&!!E.sheenColorMap,fe=j&&!!E.sheenRoughnessMap,He=!!E.specularMap,Ne=!!E.specularColorMap,ot=!!E.specularIntensityMap,A=ye&&!!E.transmissionMap,ne=ye&&!!E.thicknessMap,z=!!E.gradientMap,X=!!E.alphaMap,ce=E.alphaTest>0,oe=!!E.alphaHash,Ae=!!E.extensions,mt=mi;E.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(mt=n.toneMapping);let wt={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:it,fragmentShader:$,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&B._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&B.instanceColor!==null,instancingMorph:Ce&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Yr,alphaToCoverage:!!E.alphaToCoverage,map:pt,matcap:ze,envMap:gt,envMapMode:gt&&J.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:jt,bumpMap:Be,normalMap:Ve,displacementMap:f&&Me,emissiveMap:ct,normalMapObjectSpace:Ve&&E.normalMapType===HM,normalMapTangentSpace:Ve&&E.normalMapType===Pg,metalnessMap:xe,roughnessMap:S,anisotropy:y,anisotropyMap:se,clearcoat:F,clearcoatMap:ue,clearcoatNormalMap:Ge,clearcoatRoughnessMap:K,dispersion:q,iridescence:Z,iridescenceMap:de,iridescenceThicknessMap:Ee,sheen:j,sheenColorMap:we,sheenRoughnessMap:fe,specularMap:He,specularColorMap:Ne,specularIntensityMap:ot,transmission:ye,transmissionMap:A,thicknessMap:ne,gradientMap:z,opaque:E.transparent===!1&&E.blending===Or&&E.alphaToCoverage===!1,alphaMap:X,alphaTest:ce,alphaHash:oe,combine:E.combine,mapUv:pt&&_(E.map.channel),aoMapUv:N&&_(E.aoMap.channel),lightMapUv:jt&&_(E.lightMap.channel),bumpMapUv:Be&&_(E.bumpMap.channel),normalMapUv:Ve&&_(E.normalMap.channel),displacementMapUv:Me&&_(E.displacementMap.channel),emissiveMapUv:ct&&_(E.emissiveMap.channel),metalnessMapUv:xe&&_(E.metalnessMap.channel),roughnessMapUv:S&&_(E.roughnessMap.channel),anisotropyMapUv:se&&_(E.anisotropyMap.channel),clearcoatMapUv:ue&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(E.sheenRoughnessMap.channel),specularMapUv:He&&_(E.specularMap.channel),specularColorMapUv:Ne&&_(E.specularColorMap.channel),specularIntensityMapUv:ot&&_(E.specularIntensityMap.channel),transmissionMapUv:A&&_(E.transmissionMap.channel),thicknessMapUv:ne&&_(E.thicknessMap.channel),alphaMapUv:X&&_(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ve||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(pt||X),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Se,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Oe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:pt&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===et,decodeVideoTextureEmissive:ct&&E.emissiveMap.isVideoTexture===!0&&$e.getTransfer(E.emissiveMap.colorSpace)===et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===On,flipSided:E.side===Ft,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ae&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&E.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function h(E){let x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(let C in E.defines)x.push(C),x.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(b(x,E),w(x,E),x.push(n.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function b(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function w(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function M(E){let x=g[E.type],C;if(x){let G=vn[x];C=CE.clone(G.uniforms)}else C=E.uniforms;return C}function O(E,x){let C;for(let G=0,B=u.length;G<B;G++){let W=u[G];if(W.cacheKey===x){C=W,++C.usedTimes;break}}return C===void 0&&(C=new FT(n,x,E,s),u.push(C)),C}function T(E){if(--E.usedTimes===0){let x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function D(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:O,releaseProgram:T,releaseShaderCache:D,programs:u,dispose:L}}function BT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function VT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mg(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,g,_,m){let h=o(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(d,f,p,g,_,m){let h=o(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||VT),i.length>1&&i.sort(f||pg),r.length>1&&r.sort(f||pg)}function u(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function HT(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new mg,n.set(i,[o])):r>=s.length?(o=new mg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function GT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var WT=0;function jT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $T(n){let e=new zT,t=GT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let r=new P,s=new ht,o=new ht;function a(l){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,b=0,w=0,M=0,O=0,T=0,D=0;l.sort(jT);for(let E=0,x=l.length;E<x;E++){let C=l[E],G=C.color,B=C.intensity,W=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=G.r*B,d+=G.g*B,f+=G.b*B;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],B);D++}else if(C.isDirectionalLight){let H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let J=C.shadow,V=t.get(C);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=C.shadow.matrix,b++}i.directional[p]=H,p++}else if(C.isSpotLight){let H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(G).multiplyScalar(B),H.distance=W,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[_]=H;let J=C.shadow;if(C.map&&(i.spotLightMap[O]=C.map,O++,J.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[_]=J.matrix,C.castShadow){let V=t.get(C);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=Y,M++}_++}else if(C.isRectAreaLight){let H=e.get(C);H.color.copy(G).multiplyScalar(B),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){let H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){let J=C.shadow,V=t.get(C);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=C.shadow.matrix,w++}i.point[g]=H,g++}else if(C.isHemisphereLight){let H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(B),H.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[h]=H,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==h||L.numDirectionalShadows!==b||L.numPointShadows!==w||L.numSpotShadows!==M||L.numSpotMaps!==O||L.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+O-T,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=h,L.numDirectionalShadows=b,L.numPointShadows=w,L.numSpotShadows=M,L.numSpotMaps=O,L.numLightProbes=D,i.version=WT++)}function c(l,u){let d=0,f=0,p=0,g=0,_=0,m=u.matrixWorldInverse;for(let h=0,b=l.length;h<b;h++){let w=l[h];if(w.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(w.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(w.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let M=i.hemi[_];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function gg(n){let e=new $T(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function qT(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new gg(n),e.set(r,[a])):s>=o.length?(a=new gg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var ud=class extends zi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=BM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dd=class extends zi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},XT=`void main() {
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
}`;function ZT(n,e,t){let i=new Gs,r=new De,s=new De,o=new tt,a=new ud({depthPacking:VM}),c=new dd,l={},u=t.maxTextureSize,d={[gi]:Ft,[Ft]:gi,[On]:On},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:XT,fragmentShader:YT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new xn;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Wt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eg;let h=this.type;this.render=function(T,D,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let E=n.getRenderTarget(),x=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),G=n.state;G.setBlending(pi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=h!==Ln&&this.type===Ln,W=h===Ln&&this.type!==Ln;for(let Y=0,H=T.length;Y<H;Y++){let J=T[Y],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let ie=V.getFrameExtents();if(r.multiply(ie),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,V.mapSize.y=s.y)),V.map===null||B===!0||W===!0){let _e=this.type!==Ln?{minFilter:ln,magFilter:ln}:{};V.map!==null&&V.map.dispose(),V.map=new Hn(r.x,r.y,_e),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let le=V.getViewportCount();for(let _e=0;_e<le;_e++){let Oe=V.getViewport(_e);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),G.viewport(o),V.updateMatrices(J,_e),i=V.getFrustum(),M(D,L,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===Ln&&b(V,L),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,x,C)};function b(T,D){let L=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hn(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(D,null,L,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(D,null,L,p,_,null)}function w(T,D,L,E){let x=null,C=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)x=C;else if(x=L.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let G=x.uuid,B=D.uuid,W=l[G];W===void 0&&(W={},l[G]=W);let Y=W[B];Y===void 0&&(Y=x.clone(),W[B]=Y,D.addEventListener("dispose",O)),x=Y}if(x.visible=D.visible,x.wireframe=D.wireframe,E===Ln?x.side=D.shadowSide!==null?D.shadowSide:D.side:x.side=D.shadowSide!==null?D.shadowSide:d[D.side],x.alphaMap=D.alphaMap,x.alphaTest=D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let G=n.properties.get(x);G.light=L}return x}function M(T,D,L,E,x){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Ln)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let B=e.update(T),W=T.material;if(Array.isArray(W)){let Y=B.groups;for(let H=0,J=Y.length;H<J;H++){let V=Y[H],ie=W[V.materialIndex];if(ie&&ie.visible){let le=w(T,ie,E,x);T.onBeforeShadow(n,T,D,L,B,le,V),n.renderBufferDirect(L,null,B,le,T,V),T.onAfterShadow(n,T,D,L,B,le,V)}}}else if(W.visible){let Y=w(T,W,E,x);T.onBeforeShadow(n,T,D,L,B,Y,null),n.renderBufferDirect(L,null,B,Y,T,null),T.onAfterShadow(n,T,D,L,B,Y,null)}}let G=T.children;for(let B=0,W=G.length;B<W;B++)M(G[B],D,L,E,x)}function O(T){T.target.removeEventListener("dispose",O);for(let L in l){let E=l[L],x=T.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}var JT={[pu]:mu,[gu]:_u,[yu]:xu,[Br]:vu,[mu]:pu,[_u]:gu,[xu]:yu,[vu]:Br};function KT(n,e){function t(){let A=!1,ne=new tt,z=null,X=new tt(0,0,0,0);return{setMask:function(ce){z!==ce&&!A&&(n.colorMask(ce,ce,ce,ce),z=ce)},setLocked:function(ce){A=ce},setClear:function(ce,oe,Ae,mt,wt){wt===!0&&(ce*=mt,oe*=mt,Ae*=mt),ne.set(ce,oe,Ae,mt),X.equals(ne)===!1&&(n.clearColor(ce,oe,Ae,mt),X.copy(ne))},reset:function(){A=!1,z=null,X.set(-1,0,0,0)}}}function i(){let A=!1,ne=!1,z=null,X=null,ce=null;return{setReversed:function(oe){if(ne!==oe){let Ae=e.get("EXT_clip_control");ne?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT);let mt=ce;ce=null,this.setClear(mt)}ne=oe},getReversed:function(){return ne},setTest:function(oe){oe?re(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(oe){z!==oe&&!A&&(n.depthMask(oe),z=oe)},setFunc:function(oe){if(ne&&(oe=JT[oe]),X!==oe){switch(oe){case pu:n.depthFunc(n.NEVER);break;case mu:n.depthFunc(n.ALWAYS);break;case gu:n.depthFunc(n.LESS);break;case Br:n.depthFunc(n.LEQUAL);break;case yu:n.depthFunc(n.EQUAL);break;case vu:n.depthFunc(n.GEQUAL);break;case _u:n.depthFunc(n.GREATER);break;case xu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=oe}},setLocked:function(oe){A=oe},setClear:function(oe){ce!==oe&&(ne&&(oe=1-oe),n.clearDepth(oe),ce=oe)},reset:function(){A=!1,z=null,X=null,ce=null,ne=!1}}}function r(){let A=!1,ne=null,z=null,X=null,ce=null,oe=null,Ae=null,mt=null,wt=null;return{setTest:function(Ke){A||(Ke?re(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(Ke){ne!==Ke&&!A&&(n.stencilMask(Ke),ne=Ke)},setFunc:function(Ke,Zt,En){(z!==Ke||X!==Zt||ce!==En)&&(n.stencilFunc(Ke,Zt,En),z=Ke,X=Zt,ce=En)},setOp:function(Ke,Zt,En){(oe!==Ke||Ae!==Zt||mt!==En)&&(n.stencilOp(Ke,Zt,En),oe=Ke,Ae=Zt,mt=En)},setLocked:function(Ke){A=Ke},setClear:function(Ke){wt!==Ke&&(n.clearStencil(Ke),wt=Ke)},reset:function(){A=!1,ne=null,z=null,X=null,ce=null,oe=null,Ae=null,mt=null,wt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,b=null,w=null,M=null,O=null,T=null,D=new Le(0,0,0),L=0,E=!1,x=null,C=null,G=null,B=null,W=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=J>=2);let ie=null,le={},_e=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),it=new tt().fromArray(_e),$=new tt().fromArray(Oe);function ee(A,ne,z,X){let ce=new Uint8Array(4),oe=n.createTexture();n.bindTexture(A,oe),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<z;Ae++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,X,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(ne+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return oe}let ge={};ge[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(Br),Be(!1),Ve(gm),re(n.CULL_FACE),N(pi);function re(A){u[A]!==!0&&(n.enable(A),u[A]=!0)}function Se(A){u[A]!==!1&&(n.disable(A),u[A]=!1)}function Ce(A,ne){return d[A]!==ne?(n.bindFramebuffer(A,ne),d[A]=ne,A===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ne),A===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Fe(A,ne){let z=p,X=!1;if(A){z=f.get(ne),z===void 0&&(z=[],f.set(ne,z));let ce=A.textures;if(z.length!==ce.length||z[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ae=ce.length;oe<Ae;oe++)z[oe]=n.COLOR_ATTACHMENT0+oe;z.length=ce.length,X=!0}}else z[0]!==n.BACK&&(z[0]=n.BACK,X=!0);X&&n.drawBuffers(z)}function pt(A){return g!==A?(n.useProgram(A),g=A,!0):!1}let ze={[Li]:n.FUNC_ADD,[fM]:n.FUNC_SUBTRACT,[hM]:n.FUNC_REVERSE_SUBTRACT};ze[pM]=n.MIN,ze[mM]=n.MAX;let gt={[gM]:n.ZERO,[yM]:n.ONE,[vM]:n.SRC_COLOR,[fu]:n.SRC_ALPHA,[wM]:n.SRC_ALPHA_SATURATE,[EM]:n.DST_COLOR,[xM]:n.DST_ALPHA,[_M]:n.ONE_MINUS_SRC_COLOR,[hu]:n.ONE_MINUS_SRC_ALPHA,[SM]:n.ONE_MINUS_DST_COLOR,[MM]:n.ONE_MINUS_DST_ALPHA,[bM]:n.CONSTANT_COLOR,[TM]:n.ONE_MINUS_CONSTANT_COLOR,[DM]:n.CONSTANT_ALPHA,[CM]:n.ONE_MINUS_CONSTANT_ALPHA};function N(A,ne,z,X,ce,oe,Ae,mt,wt,Ke){if(A===pi){_===!0&&(Se(n.BLEND),_=!1);return}if(_===!1&&(re(n.BLEND),_=!0),A!==dM){if(A!==m||Ke!==E){if((h!==Li||M!==Li)&&(n.blendEquation(n.FUNC_ADD),h=Li,M=Li),Ke)switch(A){case Or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ym:n.blendFunc(n.ONE,n.ONE);break;case vm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _m:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ym:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _m:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}b=null,w=null,O=null,T=null,D.set(0,0,0),L=0,m=A,E=Ke}return}ce=ce||ne,oe=oe||z,Ae=Ae||X,(ne!==h||ce!==M)&&(n.blendEquationSeparate(ze[ne],ze[ce]),h=ne,M=ce),(z!==b||X!==w||oe!==O||Ae!==T)&&(n.blendFuncSeparate(gt[z],gt[X],gt[oe],gt[Ae]),b=z,w=X,O=oe,T=Ae),(mt.equals(D)===!1||wt!==L)&&(n.blendColor(mt.r,mt.g,mt.b,wt),D.copy(mt),L=wt),m=A,E=!1}function jt(A,ne){A.side===On?Se(n.CULL_FACE):re(n.CULL_FACE);let z=A.side===Ft;ne&&(z=!z),Be(z),A.blending===Or&&A.transparent===!1?N(pi):N(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),s.setMask(A.colorWrite);let X=A.stencilWrite;a.setTest(X),X&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),ct(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(A){x!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),x=A)}function Ve(A){A!==cM?(re(n.CULL_FACE),A!==C&&(A===gm?n.cullFace(n.BACK):A===lM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),C=A}function Me(A){A!==G&&(H&&n.lineWidth(A),G=A)}function ct(A,ne,z){A?(re(n.POLYGON_OFFSET_FILL),(B!==ne||W!==z)&&(n.polygonOffset(ne,z),B=ne,W=z)):Se(n.POLYGON_OFFSET_FILL)}function xe(A){A?re(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function S(A){A===void 0&&(A=n.TEXTURE0+Y-1),ie!==A&&(n.activeTexture(A),ie=A)}function y(A,ne,z){z===void 0&&(ie===null?z=n.TEXTURE0+Y-1:z=ie);let X=le[z];X===void 0&&(X={type:void 0,texture:void 0},le[z]=X),(X.type!==A||X.texture!==ne)&&(ie!==z&&(n.activeTexture(z),ie=z),n.bindTexture(A,ne||ge[A]),X.type=A,X.texture=ne)}function F(){let A=le[ie];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function de(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function we(A){it.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),it.copy(A))}function fe(A){$.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),$.copy(A))}function He(A,ne){let z=l.get(ne);z===void 0&&(z=new WeakMap,l.set(ne,z));let X=z.get(A);X===void 0&&(X=n.getUniformBlockIndex(ne,A.name),z.set(A,X))}function Ne(A,ne){let X=l.get(ne).get(A);c.get(ne)!==X&&(n.uniformBlockBinding(ne,X,A.__bindingPointIndex),c.set(ne,X))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ie=null,le={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,b=null,w=null,M=null,O=null,T=null,D=new Le(0,0,0),L=0,E=!1,x=null,C=null,G=null,B=null,W=null,it.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Se,bindFramebuffer:Ce,drawBuffers:Fe,useProgram:pt,setBlending:N,setMaterial:jt,setFlipSided:Be,setCullFace:Ve,setLineWidth:Me,setPolygonOffset:ct,setScissorTest:xe,activeTexture:S,bindTexture:y,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:de,texImage3D:Ee,updateUBOMapping:He,uniformBlockBinding:Ne,texStorage2D:Ge,texStorage3D:K,texSubImage2D:j,texSubImage3D:ye,compressedTexSubImage2D:se,compressedTexSubImage3D:ue,scissor:we,viewport:fe,reset:ot}}function yg(n,e,t,i){let r=QT(i);switch(t){case Tg:return n*e;case Cg:return n*e;case Ag:return n*e*2;case Ig:return n*e/r.components*r.byteLength;case Pd:return n*e/r.components*r.byteLength;case Rg:return n*e*2/r.components*r.byteLength;case Ld:return n*e*2/r.components*r.byteLength;case Dg:return n*e*3/r.components*r.byteLength;case cn:return n*e*4/r.components*r.byteLength;case Od:return n*e*4/r.components*r.byteLength;case ua:case da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fa:case ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tu:case Cu:return Math.max(n,16)*Math.max(e,8)/4;case bu:case Du:return Math.max(n,8)*Math.max(e,8)/2;case Au:case Iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Lu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ku:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case zu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Gu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ju:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case pa:case $u:case qu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ng:case Xu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yu:case Zu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function QT(n){switch(n){case Bn:case Sg:return{byteLength:1,components:1};case Us:case wg:case js:return{byteLength:2,components:1};case Rd:case Nd:return{byteLength:2,components:4};case Bi:case Id:case Fn:return{byteLength:4,components:1};case bg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function eD(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return p?new OffscreenCanvas(S,y):ya("canvas")}function _(S,y,F){let q=1,Z=xe(S);if((Z.width>F||Z.height>F)&&(q=F/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let j=Math.floor(q*Z.width),ye=Math.floor(q*Z.height);d===void 0&&(d=g(j,ye));let se=y?g(j,ye):d;return se.width=j,se.height=ye,se.getContext("2d").drawImage(S,0,0,j,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+ye+")."),se}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function m(S){return S.generateMipmaps}function h(S){n.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(S,y,F,q,Z=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let j=y;if(y===n.RED&&(F===n.FLOAT&&(j=n.R32F),F===n.HALF_FLOAT&&(j=n.R16F),F===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.R8UI),F===n.UNSIGNED_SHORT&&(j=n.R16UI),F===n.UNSIGNED_INT&&(j=n.R32UI),F===n.BYTE&&(j=n.R8I),F===n.SHORT&&(j=n.R16I),F===n.INT&&(j=n.R32I)),y===n.RG&&(F===n.FLOAT&&(j=n.RG32F),F===n.HALF_FLOAT&&(j=n.RG16F),F===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RG8UI),F===n.UNSIGNED_SHORT&&(j=n.RG16UI),F===n.UNSIGNED_INT&&(j=n.RG32UI),F===n.BYTE&&(j=n.RG8I),F===n.SHORT&&(j=n.RG16I),F===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGB8UI),F===n.UNSIGNED_SHORT&&(j=n.RGB16UI),F===n.UNSIGNED_INT&&(j=n.RGB32UI),F===n.BYTE&&(j=n.RGB8I),F===n.SHORT&&(j=n.RGB16I),F===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),F===n.UNSIGNED_INT&&(j=n.RGBA32UI),F===n.BYTE&&(j=n.RGBA8I),F===n.SHORT&&(j=n.RGBA16I),F===n.INT&&(j=n.RGBA32I)),y===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),y===n.RGBA){let ye=Z?La:$e.getTransfer(q);F===n.FLOAT&&(j=n.RGBA32F),F===n.HALF_FLOAT&&(j=n.RGBA16F),F===n.UNSIGNED_BYTE&&(j=ye===et?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(S,y){let F;return S?y===null||y===Bi||y===zr?F=n.DEPTH24_STENCIL8:y===Fn?F=n.DEPTH32F_STENCIL8:y===Us&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Bi||y===zr?F=n.DEPTH_COMPONENT24:y===Fn?F=n.DEPTH_COMPONENT32F:y===Us&&(F=n.DEPTH_COMPONENT16),F}function O(S,y){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==ln&&S.minFilter!==_n?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function T(S){let y=S.target;y.removeEventListener("dispose",T),L(y),y.isVideoTexture&&u.delete(y)}function D(S){let y=S.target;y.removeEventListener("dispose",D),x(y)}function L(S){let y=i.get(S);if(y.__webglInit===void 0)return;let F=S.source,q=f.get(F);if(q){let Z=q[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(S),Object.keys(q).length===0&&f.delete(F)}i.remove(S)}function E(S){let y=i.get(S);n.deleteTexture(y.__webglTexture);let F=S.source,q=f.get(F);delete q[y.__cacheKey],o.memory.textures--}function x(S){let y=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Z=0;Z<y.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let F=S.textures;for(let q=0,Z=F.length;q<Z;q++){let j=i.get(F[q]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(S)}let C=0;function G(){C=0}function B(){let S=C;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),C+=1,S}function W(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function Y(S,y){let F=i.get(S);if(S.isVideoTexture&&Me(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){let q=S.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,S,y);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function H(S,y){let F=i.get(S);if(S.version>0&&F.__version!==S.version){$(F,S,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function J(S,y){let F=i.get(S);if(S.version>0&&F.__version!==S.version){$(F,S,y);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function V(S,y){let F=i.get(S);if(S.version>0&&F.__version!==S.version){ee(F,S,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}let ie={[Su]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[wu]:n.MIRRORED_REPEAT},le={[ln]:n.NEAREST,[UM]:n.NEAREST_MIPMAP_NEAREST,[zo]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[Fl]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},_e={[zM]:n.NEVER,[XM]:n.ALWAYS,[GM]:n.LESS,[Lg]:n.LEQUAL,[WM]:n.EQUAL,[qM]:n.GEQUAL,[jM]:n.GREATER,[$M]:n.NOTEQUAL};function Oe(S,y){if(y.type===Fn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===_n||y.magFilter===Fl||y.magFilter===zo||y.magFilter===Ui||y.minFilter===_n||y.minFilter===Fl||y.minFilter===zo||y.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ie[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ie[y.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ie[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,le[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,_e[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ln||y.minFilter!==zo&&y.minFilter!==Ui||y.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function it(S,y){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",T));let q=y.source,Z=f.get(q);Z===void 0&&(Z={},f.set(q,Z));let j=W(y);if(j!==S.__cacheKey){Z[j]===void 0&&(Z[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[j].usedTimes++;let ye=Z[S.__cacheKey];ye!==void 0&&(Z[S.__cacheKey].usedTimes--,ye.usedTimes===0&&E(y)),S.__cacheKey=j,S.__webglTexture=Z[j].texture}return F}function $(S,y,F){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);let Z=it(S,y),j=y.source;t.bindTexture(q,S.__webglTexture,n.TEXTURE0+F);let ye=i.get(j);if(j.version!==ye.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);let se=$e.getPrimaries($e.workingColorSpace),ue=y.colorSpace===hi?null:$e.getPrimaries(y.colorSpace),Ge=y.colorSpace===hi||se===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let K=_(y.image,!1,r.maxTextureSize);K=ct(y,K);let de=s.convert(y.format,y.colorSpace),Ee=s.convert(y.type),we=w(y.internalFormat,de,Ee,y.colorSpace,y.isVideoTexture);Oe(q,y);let fe,He=y.mipmaps,Ne=y.isVideoTexture!==!0,ot=ye.__version===void 0||Z===!0,A=j.dataReady,ne=O(y,K);if(y.isDepthTexture)we=M(y.format===Gr,y.type),ot&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,we,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,we,K.width,K.height,0,de,Ee,null));else if(y.isDataTexture)if(He.length>0){Ne&&ot&&t.texStorage2D(n.TEXTURE_2D,ne,we,He[0].width,He[0].height);for(let z=0,X=He.length;z<X;z++)fe=He[z],Ne?A&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,de,Ee,fe.data):t.texImage2D(n.TEXTURE_2D,z,we,fe.width,fe.height,0,de,Ee,fe.data);y.generateMipmaps=!1}else Ne?(ot&&t.texStorage2D(n.TEXTURE_2D,ne,we,K.width,K.height),A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,de,Ee,K.data)):t.texImage2D(n.TEXTURE_2D,0,we,K.width,K.height,0,de,Ee,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ne&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,we,He[0].width,He[0].height,K.depth);for(let z=0,X=He.length;z<X;z++)if(fe=He[z],y.format!==cn)if(de!==null)if(Ne){if(A)if(y.layerUpdates.size>0){let ce=yg(fe.width,fe.height,y.format,y.type);for(let oe of y.layerUpdates){let Ae=fe.data.subarray(oe*ce/fe.data.BYTES_PER_ELEMENT,(oe+1)*ce/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,oe,fe.width,fe.height,1,de,Ae)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,K.depth,de,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,z,we,fe.width,fe.height,K.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,K.depth,de,Ee,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,z,we,fe.width,fe.height,K.depth,0,de,Ee,fe.data)}else{Ne&&ot&&t.texStorage2D(n.TEXTURE_2D,ne,we,He[0].width,He[0].height);for(let z=0,X=He.length;z<X;z++)fe=He[z],y.format!==cn?de!==null?Ne?A&&t.compressedTexSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,z,we,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?A&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,de,Ee,fe.data):t.texImage2D(n.TEXTURE_2D,z,we,fe.width,fe.height,0,de,Ee,fe.data)}else if(y.isDataArrayTexture)if(Ne){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,we,K.width,K.height,K.depth),A)if(y.layerUpdates.size>0){let z=yg(K.width,K.height,y.format,y.type);for(let X of y.layerUpdates){let ce=K.data.subarray(X*z/K.data.BYTES_PER_ELEMENT,(X+1)*z/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,K.width,K.height,1,de,Ee,ce)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,de,Ee,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,K.width,K.height,K.depth,0,de,Ee,K.data);else if(y.isData3DTexture)Ne?(ot&&t.texStorage3D(n.TEXTURE_3D,ne,we,K.width,K.height,K.depth),A&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,de,Ee,K.data)):t.texImage3D(n.TEXTURE_3D,0,we,K.width,K.height,K.depth,0,de,Ee,K.data);else if(y.isFramebufferTexture){if(ot)if(Ne)t.texStorage2D(n.TEXTURE_2D,ne,we,K.width,K.height);else{let z=K.width,X=K.height;for(let ce=0;ce<ne;ce++)t.texImage2D(n.TEXTURE_2D,ce,we,z,X,0,de,Ee,null),z>>=1,X>>=1}}else if(He.length>0){if(Ne&&ot){let z=xe(He[0]);t.texStorage2D(n.TEXTURE_2D,ne,we,z.width,z.height)}for(let z=0,X=He.length;z<X;z++)fe=He[z],Ne?A&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,de,Ee,fe):t.texImage2D(n.TEXTURE_2D,z,we,de,Ee,fe);y.generateMipmaps=!1}else if(Ne){if(ot){let z=xe(K);t.texStorage2D(n.TEXTURE_2D,ne,we,z.width,z.height)}A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Ee,K)}else t.texImage2D(n.TEXTURE_2D,0,we,de,Ee,K);m(y)&&h(q),ye.__version=j.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function ee(S,y,F){if(y.image.length!==6)return;let q=it(S,y),Z=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+F);let j=i.get(Z);if(Z.version!==j.__version||q===!0){t.activeTexture(n.TEXTURE0+F);let ye=$e.getPrimaries($e.workingColorSpace),se=y.colorSpace===hi?null:$e.getPrimaries(y.colorSpace),ue=y.colorSpace===hi||ye===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ge=y.isCompressedTexture||y.image[0].isCompressedTexture,K=y.image[0]&&y.image[0].isDataTexture,de=[];for(let X=0;X<6;X++)!Ge&&!K?de[X]=_(y.image[X],!0,r.maxCubemapSize):de[X]=K?y.image[X].image:y.image[X],de[X]=ct(y,de[X]);let Ee=de[0],we=s.convert(y.format,y.colorSpace),fe=s.convert(y.type),He=w(y.internalFormat,we,fe,y.colorSpace),Ne=y.isVideoTexture!==!0,ot=j.__version===void 0||q===!0,A=Z.dataReady,ne=O(y,Ee);Oe(n.TEXTURE_CUBE_MAP,y);let z;if(Ge){Ne&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,He,Ee.width,Ee.height);for(let X=0;X<6;X++){z=de[X].mipmaps;for(let ce=0;ce<z.length;ce++){let oe=z[ce];y.format!==cn?we!==null?Ne?A&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce,0,0,oe.width,oe.height,we,oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce,He,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce,0,0,oe.width,oe.height,we,fe,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce,He,oe.width,oe.height,0,we,fe,oe.data)}}}else{if(z=y.mipmaps,Ne&&ot){z.length>0&&ne++;let X=xe(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,He,X.width,X.height)}for(let X=0;X<6;X++)if(K){Ne?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,de[X].width,de[X].height,we,fe,de[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,He,de[X].width,de[X].height,0,we,fe,de[X].data);for(let ce=0;ce<z.length;ce++){let Ae=z[ce].image[X].image;Ne?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce+1,0,0,Ae.width,Ae.height,we,fe,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce+1,He,Ae.width,Ae.height,0,we,fe,Ae.data)}}else{Ne?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,we,fe,de[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,He,we,fe,de[X]);for(let ce=0;ce<z.length;ce++){let oe=z[ce];Ne?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce+1,0,0,we,fe,oe.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce+1,He,we,fe,oe.image[X])}}}m(y)&&h(n.TEXTURE_CUBE_MAP),j.__version=Z.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function ge(S,y,F,q,Z,j){let ye=s.convert(F.format,F.colorSpace),se=s.convert(F.type),ue=w(F.internalFormat,ye,se,F.colorSpace),Ge=i.get(y),K=i.get(F);if(K.__renderTarget=y,!Ge.__hasExternalTextures){let de=Math.max(1,y.width>>j),Ee=Math.max(1,y.height>>j);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,j,ue,de,Ee,y.depth,0,ye,se,null):t.texImage2D(Z,j,ue,de,Ee,0,ye,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Ve(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,K.__webglTexture,0,Be(y)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,K.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(S,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer){let q=y.depthTexture,Z=q&&q.isDepthTexture?q.type:null,j=M(y.stencilBuffer,Z),ye=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=Be(y);Ve(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,j,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,S)}else{let q=y.textures;for(let Z=0;Z<q.length;Z++){let j=q[Z],ye=s.convert(j.format,j.colorSpace),se=s.convert(j.type),ue=w(j.internalFormat,ye,se,j.colorSpace),Ge=Be(y);F&&Ve(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,ue,y.width,y.height):Ve(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,ue,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ue,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);let Z=q.__webglTexture,j=Be(y);if(y.depthTexture.format===Fr)Ve(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(y.depthTexture.format===Gr)Ve(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ce(S){let y=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==S.depthTexture){let q=S.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=q}if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Se(y.__webglFramebuffer,S)}else if(F){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),re(y.__webglDepthbuffer[q],S,!1);else{let Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),re(y.__webglDepthbuffer,S,!1);else{let q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(S,y,F){let q=i.get(S);y!==void 0&&ge(q.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ce(S)}function pt(S){let y=S.texture,F=i.get(S),q=i.get(y);S.addEventListener("dispose",D);let Z=S.textures,j=S.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,o.memory.textures++),j){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let ue=0;ue<y.mipmaps.length;ue++)F.__webglFramebuffer[se][ue]=n.createFramebuffer()}else F.__webglFramebuffer[se]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)F.__webglFramebuffer[se]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ye)for(let se=0,ue=Z.length;se<ue;se++){let Ge=i.get(Z[se]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&Ve(S)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){let ue=Z[se];F.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[se]);let Ge=s.convert(ue.format,ue.colorSpace),K=s.convert(ue.type),de=w(ue.internalFormat,Ge,K,ue.colorSpace,S.isXRRenderTarget===!0),Ee=Be(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,de,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,F.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),re(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,y);for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)ge(F.__webglFramebuffer[se][ue],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue);else ge(F.__webglFramebuffer[se],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(y)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let se=0,ue=Z.length;se<ue;se++){let Ge=Z[se],K=i.get(Ge);t.bindTexture(n.TEXTURE_2D,K.__webglTexture),Oe(n.TEXTURE_2D,Ge),ge(F.__webglFramebuffer,S,Ge,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),m(Ge)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(se=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,q.__webglTexture),Oe(se,y),y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)ge(F.__webglFramebuffer[ue],S,y,n.COLOR_ATTACHMENT0,se,ue);else ge(F.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,se,0);m(y)&&h(se),t.unbindTexture()}S.depthBuffer&&Ce(S)}function ze(S){let y=S.textures;for(let F=0,q=y.length;F<q;F++){let Z=y[F];if(m(Z)){let j=b(S),ye=i.get(Z).__webglTexture;t.bindTexture(j,ye),h(j),t.unbindTexture()}}}let gt=[],N=[];function jt(S){if(S.samples>0){if(Ve(S)===!1){let y=S.textures,F=S.width,q=S.height,Z=n.COLOR_BUFFER_BIT,j=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(S),se=y.length>1;if(se)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);let Ge=i.get(y[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,Z,n.NEAREST),c===!0&&(gt.length=0,N.length=0,gt.push(n.COLOR_ATTACHMENT0+ue),S.depthBuffer&&S.resolveDepthBuffer===!1&&(gt.push(j),N.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);let Ge=i.get(y[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Be(S){return Math.min(r.maxSamples,S.samples)}function Ve(S){let y=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Me(S){let y=o.render.frame;u.get(S)!==y&&(u.set(S,y),S.update())}function ct(S,y){let F=S.colorSpace,q=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==Yr&&F!==hi&&($e.getTransfer(F)===et?(q!==cn||Z!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function xe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Fe,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ve}function tD(n,e){function t(i,r=hi){let s,o=$e.getTransfer(r);if(i===Bn)return n.UNSIGNED_BYTE;if(i===Rd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sg)return n.BYTE;if(i===wg)return n.SHORT;if(i===Us)return n.UNSIGNED_SHORT;if(i===Id)return n.INT;if(i===Bi)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===js)return n.HALF_FLOAT;if(i===Tg)return n.ALPHA;if(i===Dg)return n.RGB;if(i===cn)return n.RGBA;if(i===Cg)return n.LUMINANCE;if(i===Ag)return n.LUMINANCE_ALPHA;if(i===Fr)return n.DEPTH_COMPONENT;if(i===Gr)return n.DEPTH_STENCIL;if(i===Ig)return n.RED;if(i===Pd)return n.RED_INTEGER;if(i===Rg)return n.RG;if(i===Ld)return n.RG_INTEGER;if(i===Od)return n.RGBA_INTEGER;if(i===ua||i===da||i===fa||i===ha)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ua)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ua)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===da)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bu||i===Tu||i===Du||i===Cu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Du)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Au||i===Iu||i===Ru)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Au||i===Iu)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ru)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nu||i===Pu||i===Lu||i===Ou||i===Fu||i===ku||i===Uu||i===Bu||i===Vu||i===Hu||i===zu||i===Gu||i===Wu||i===ju)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nu)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pu)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lu)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ou)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fu)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ku)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uu)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bu)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vu)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hu)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zu)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gu)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wu)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ju)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pa||i===$u||i===qu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pa)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$u)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ng||i===Xu||i===Yu||i===Zu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===pa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var fd=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Lr=class extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}},nD={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nD)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Lr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},iD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new qi,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mn({vertexShader:iD,fragmentShader:rD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new Ta(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pd=class extends Vn{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,g=null,_=new hd,m=t.getContextAttributes(),h=null,b=null,w=[],M=[],O=new De,T=null,D=new St;D.viewport=new tt;let L=new St;L.viewport=new tt;let E=[D,L],x=new fd,C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=w[$];return ee===void 0&&(ee=new ks,w[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=w[$];return ee===void 0&&(ee=new ks,w[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=w[$];return ee===void 0&&(ee=new ks,w[$]=ee),ee.getHandSpace()};function B($){let ee=M.indexOf($.inputSource);if(ee===-1)return;let ge=w[ee];ge!==void 0&&(ge.update($.inputSource,$.frame,l||o),ge.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Y);for(let $=0;$<w.length;$++){let ee=M[$];ee!==null&&(M[$]=null,w[$].disconnect(ee))}C=null,G=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,b=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function($){return jn(this,null,function*(){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),T=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){let ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Hn(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ge=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Gr:Fr,ge=m.stencil?zr:Bi);let Se={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Se),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Hn(f.textureWidth,f.textureHeight,{format:cn,type:Bn,depthTexture:new Ca(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),it.setContext(r),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y($){for(let ee=0;ee<$.removed.length;ee++){let ge=$.removed[ee],re=M.indexOf(ge);re>=0&&(M[re]=null,w[re].disconnect(ge))}for(let ee=0;ee<$.added.length;ee++){let ge=$.added[ee],re=M.indexOf(ge);if(re===-1){for(let Ce=0;Ce<w.length;Ce++)if(Ce>=M.length){M.push(ge),re=Ce;break}else if(M[Ce]===null){M[Ce]=ge,re=Ce;break}if(re===-1)break}let Se=w[re];Se&&Se.connect(ge)}}let H=new P,J=new P;function V($,ee,ge){H.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(ge.matrixWorld);let re=H.distanceTo(J),Se=ee.projectionMatrix.elements,Ce=ge.projectionMatrix.elements,Fe=Se[14]/(Se[10]-1),pt=Se[14]/(Se[10]+1),ze=(Se[9]+1)/Se[5],gt=(Se[9]-1)/Se[5],N=(Se[8]-1)/Se[0],jt=(Ce[8]+1)/Ce[0],Be=Fe*N,Ve=Fe*jt,Me=re/(-N+jt),ct=Me*-N;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ct),$.translateZ(Me),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Se[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let xe=Fe+Me,S=pt+Me,y=Be-ct,F=Ve+(re-ct),q=ze*pt/S*xe,Z=gt*pt/S*xe;$.projectionMatrix.makePerspective(y,F,q,Z,xe,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ie($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ee=$.near,ge=$.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),x.near=L.near=D.near=ee,x.far=L.far=D.far=ge,(C!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,G=x.far),D.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,x.layers.mask=D.layers.mask|L.layers.mask;let re=$.parent,Se=x.cameras;ie(x,re);for(let Ce=0;Ce<Se.length;Ce++)ie(Se[Ce],re);Se.length===2?V(x,D,L):x.projectionMatrix.copy(D.projectionMatrix),le($,x,re)};function le($,ee,ge){ge===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(ge.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Bs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let _e=null;function Oe($,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){let ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let re=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,re=!0);for(let Ce=0;Ce<ge.length;Ce++){let Fe=ge[Ce],pt=null;if(p!==null)pt=p.getViewport(Fe);else{let gt=d.getViewSubImage(f,Fe);pt=gt.viewport,Ce===0&&(e.setRenderTargetTextures(b,gt.colorTexture,f.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(b))}let ze=E[Ce];ze===void 0&&(ze=new St,ze.layers.enable(Ce),ze.viewport=new tt,E[Ce]=ze),ze.matrix.fromArray(Fe.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Fe.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(pt.x,pt.y,pt.width,pt.height),Ce===0&&(x.matrix.copy(ze.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),re===!0&&x.cameras.push(ze)}let Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")){let Ce=d.getDepthInformation(ge[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,r.renderState)}}for(let ge=0;ge<w.length;ge++){let re=M[ge],Se=w[ge];re!==null&&Se!==void 0&&Se.update(re,ee,l||o)}_e&&_e($,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let it=new Bg;it.setAnimationLoop(Oe),this.setAnimationLoop=function($){_e=$},this.dispose=function(){}}},Ni=new Hi,sD=new ht;function oD(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Ug(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,b,w,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,b,w):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ft&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ft&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let b=e.get(h),w=b.envMap,M=b.envMapRotation;w&&(m.envMap.value=w,Ni.copy(M),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(sD.makeRotationFromEuler(Ni)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,b,w){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=w*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ft&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){let b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aD(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,w){let M=w.program;i.uniformBlockBinding(b,M)}function l(b,w){let M=r[b.id];M===void 0&&(g(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",m));let O=w.program;i.updateUBOMapping(b,O);let T=e.render.frame;s[b.id]!==T&&(f(b),s[b.id]=T)}function u(b){let w=d();b.__bindingPointIndex=w;let M=n.createBuffer(),O=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,O,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let w=r[b.id],M=b.uniforms,O=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,D=M.length;T<D;T++){let L=Array.isArray(M[T])?M[T]:[M[T]];for(let E=0,x=L.length;E<x;E++){let C=L[E];if(p(C,T,E,O)===!0){let G=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],W=0;for(let Y=0;Y<B.length;Y++){let H=B[Y],J=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,G+W,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,w,M,O){let T=b.value,D=w+"_"+M;if(O[D]===void 0)return typeof T=="number"||typeof T=="boolean"?O[D]=T:O[D]=T.clone(),!0;{let L=O[D];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return O[D]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(b){let w=b.uniforms,M=0,O=16;for(let D=0,L=w.length;D<L;D++){let E=Array.isArray(w[D])?w[D]:[w[D]];for(let x=0,C=E.length;x<C;x++){let G=E[x],B=Array.isArray(G.value)?G.value:[G.value];for(let W=0,Y=B.length;W<Y;W++){let H=B[W],J=_(H),V=M%O,ie=V%J.boundary,le=V+ie;M+=ie,le!==0&&O-le<J.storage&&(M+=O-le),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=J.storage}}}let T=M%O;return T>0&&(M+=O-T),b.__size=M,b.__cache={},this}function _(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){let w=b.target;w.removeEventListener("dispose",m);let M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function h(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}var jr=class{constructor(e={}){let{canvas:t=dE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,h=null,b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=mi,this.toneMappingExposure=1;let M=this,O=!1,T=0,D=0,L=null,E=-1,x=null,C=new tt,G=new tt,B=null,W=new Le(0),Y=0,H=t.width,J=t.height,V=1,ie=null,le=null,_e=new tt(0,0,H,J),Oe=new tt(0,0,H,J),it=!1,$=new Gs,ee=!1,ge=!1,re=new ht,Se=new ht,Ce=new P,Fe=new tt,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function gt(){return L===null?V:1}let N=i;function jt(v,I){return t.getContext(v,I)}try{let v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cd}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",oe,!1),N===null){let I="webgl2";if(N=jt(I,v),N===null)throw jt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Be,Ve,Me,ct,xe,S,y,F,q,Z,j,ye,se,ue,Ge,K,de,Ee,we,fe,He,Ne,ot,A;function ne(){Be=new Sb(N),Be.init(),Ne=new tD(N,Be),Ve=new yb(N,Be,e,Ne),Me=new KT(N,Be),Ve.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),ct=new Tb(N),xe=new BT,S=new eD(N,Be,Me,xe,Ve,Ne,ct),y=new _b(M),F=new Eb(M),q=new PE(N),ot=new mb(N,q),Z=new wb(N,q,ct,ot),j=new Cb(N,Z,q,ct),we=new Db(N,Ve,S),K=new vb(xe),ye=new UT(M,y,F,Be,Ve,ot,K),se=new oD(M,xe),ue=new HT,Ge=new qT(Be),Ee=new pb(M,y,F,Me,j,p,c),de=new ZT(M,j,Ve),A=new aD(N,ct,Ve,Me),fe=new gb(N,Be,ct),He=new bb(N,Be,ct),ct.programs=ye.programs,M.capabilities=Ve,M.extensions=Be,M.properties=xe,M.renderLists=ue,M.shadowMap=de,M.state=Me,M.info=ct}ne();let z=new pd(M,N);this.xr=z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=Be.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Be.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(H,J,!1))},this.getSize=function(v){return v.set(H,J)},this.setSize=function(v,I,k=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=v,J=I,t.width=Math.floor(v*V),t.height=Math.floor(I*V),k===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(H*V,J*V).floor()},this.setDrawingBufferSize=function(v,I,k){H=v,J=I,V=k,t.width=Math.floor(v*k),t.height=Math.floor(I*k),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(_e)},this.setViewport=function(v,I,k,U){v.isVector4?_e.set(v.x,v.y,v.z,v.w):_e.set(v,I,k,U),Me.viewport(C.copy(_e).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(Oe)},this.setScissor=function(v,I,k,U){v.isVector4?Oe.set(v.x,v.y,v.z,v.w):Oe.set(v,I,k,U),Me.scissor(G.copy(Oe).multiplyScalar(V).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(v){Me.setScissorTest(it=v)},this.setOpaqueSort=function(v){ie=v},this.setTransparentSort=function(v){le=v},this.getClearColor=function(v){return v.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(v=!0,I=!0,k=!0){let U=0;if(v){let R=!1;if(L!==null){let Q=L.texture.format;R=Q===Od||Q===Ld||Q===Pd}if(R){let Q=L.texture.type,ae=Q===Bn||Q===Bi||Q===Us||Q===zr||Q===Rd||Q===Nd,he=Ee.getClearColor(),pe=Ee.getClearAlpha(),Te=he.r,Ie=he.g,me=he.b;ae?(g[0]=Te,g[1]=Ie,g[2]=me,g[3]=pe,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Te,_[1]=Ie,_[2]=me,_[3]=pe,N.clearBufferiv(N.COLOR,0,_))}else U|=N.COLOR_BUFFER_BIT}I&&(U|=N.DEPTH_BUFFER_BIT),k&&(U|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ue.dispose(),Ge.dispose(),xe.dispose(),y.dispose(),F.dispose(),j.dispose(),ot.dispose(),A.dispose(),ye.dispose(),z.dispose(),z.removeEventListener("sessionstart",Gd),z.removeEventListener("sessionend",Wd),yi.stop()};function X(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let v=ct.autoReset,I=de.enabled,k=de.autoUpdate,U=de.needsUpdate,R=de.type;ne(),ct.autoReset=v,de.enabled=I,de.autoUpdate=k,de.needsUpdate=U,de.type=R}function oe(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ae(v){let I=v.target;I.removeEventListener("dispose",Ae),mt(I)}function mt(v){wt(v),xe.remove(v)}function wt(v){let I=xe.get(v).programs;I!==void 0&&(I.forEach(function(k){ye.releaseProgram(k)}),v.isShaderMaterial&&ye.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,k,U,R,Q){I===null&&(I=pt);let ae=R.isMesh&&R.matrixWorld.determinant()<0,he=ey(v,I,k,U,R);Me.setMaterial(U,ae);let pe=k.index,Te=1;if(U.wireframe===!0){if(pe=Z.getWireframeAttribute(k),pe===void 0)return;Te=2}let Ie=k.drawRange,me=k.attributes.position,qe=Ie.start*Te,at=(Ie.start+Ie.count)*Te;Q!==null&&(qe=Math.max(qe,Q.start*Te),at=Math.min(at,(Q.start+Q.count)*Te)),pe!==null?(qe=Math.max(qe,0),at=Math.min(at,pe.count)):me!=null&&(qe=Math.max(qe,0),at=Math.min(at,me.count));let lt=at-qe;if(lt<0||lt===1/0)return;ot.setup(R,U,he,k,pe);let Pt,Ze=fe;if(pe!==null&&(Pt=q.get(pe),Ze=He,Ze.setIndex(Pt)),R.isMesh)U.wireframe===!0?(Me.setLineWidth(U.wireframeLinewidth*gt()),Ze.setMode(N.LINES)):Ze.setMode(N.TRIANGLES);else if(R.isLine){let ve=U.linewidth;ve===void 0&&(ve=1),Me.setLineWidth(ve*gt()),R.isLineSegments?Ze.setMode(N.LINES):R.isLineLoop?Ze.setMode(N.LINE_LOOP):Ze.setMode(N.LINE_STRIP)}else R.isPoints?Ze.setMode(N.POINTS):R.isSprite&&Ze.setMode(N.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)Ze.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Ze.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{let ve=R._multiDrawStarts,Sn=R._multiDrawCounts,Je=R._multiDrawCount,Jt=pe?q.get(pe).bytesPerElement:1,Xi=xe.get(U).currentProgram.getUniforms();for(let Ut=0;Ut<Je;Ut++)Xi.setValue(N,"_gl_DrawID",Ut),Ze.render(ve[Ut]/Jt,Sn[Ut])}else if(R.isInstancedMesh)Ze.renderInstances(qe,lt,R.count);else if(k.isInstancedBufferGeometry){let ve=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Sn=Math.min(k.instanceCount,ve);Ze.renderInstances(qe,lt,Sn)}else Ze.render(qe,lt)};function Ke(v,I,k){v.transparent===!0&&v.side===On&&v.forceSinglePass===!1?(v.side=Ft,v.needsUpdate=!0,qs(v,I,k),v.side=gi,v.needsUpdate=!0,qs(v,I,k),v.side=On):qs(v,I,k)}this.compile=function(v,I,k=null){k===null&&(k=v),h=Ge.get(k),h.init(I),w.push(h),k.traverseVisible(function(R){R.isLight&&R.layers.test(I.layers)&&(h.pushLight(R),R.castShadow&&h.pushShadow(R))}),v!==k&&v.traverseVisible(function(R){R.isLight&&R.layers.test(I.layers)&&(h.pushLight(R),R.castShadow&&h.pushShadow(R))}),h.setupLights();let U=new Set;return v.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;let Q=R.material;if(Q)if(Array.isArray(Q))for(let ae=0;ae<Q.length;ae++){let he=Q[ae];Ke(he,k,R),U.add(he)}else Ke(Q,k,R),U.add(Q)}),w.pop(),h=null,U},this.compileAsync=function(v,I,k=null){let U=this.compile(v,I,k);return new Promise(R=>{function Q(){if(U.forEach(function(ae){xe.get(ae).currentProgram.isReady()&&U.delete(ae)}),U.size===0){R(v);return}setTimeout(Q,10)}Be.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Zt=null;function En(v){Zt&&Zt(v)}function Gd(){yi.stop()}function Wd(){yi.start()}let yi=new Bg;yi.setAnimationLoop(En),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(v){Zt=v,z.setAnimationLoop(v),v===null?yi.stop():yi.start()},z.addEventListener("sessionstart",Gd),z.addEventListener("sessionend",Wd),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(I),I=z.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,I,L),h=Ge.get(v,w.length),h.init(I),w.push(h),Se.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$.setFromProjectionMatrix(Se),ge=this.localClippingEnabled,ee=K.init(this.clippingPlanes,ge),m=ue.get(v,b.length),m.init(),b.push(m),z.enabled===!0&&z.isPresenting===!0){let Q=M.xr.getDepthSensingMesh();Q!==null&&Ua(Q,I,-1/0,M.sortObjects)}Ua(v,I,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ie,le),ze=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,ze&&Ee.addToRenderList(m,v),this.info.render.frame++,ee===!0&&K.beginShadows();let k=h.state.shadowsArray;de.render(k,v,I),ee===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();let U=m.opaque,R=m.transmissive;if(h.setupLights(),I.isArrayCamera){let Q=I.cameras;if(R.length>0)for(let ae=0,he=Q.length;ae<he;ae++){let pe=Q[ae];$d(U,R,v,pe)}ze&&Ee.render(v);for(let ae=0,he=Q.length;ae<he;ae++){let pe=Q[ae];jd(m,v,pe,pe.viewport)}}else R.length>0&&$d(U,R,v,I),ze&&Ee.render(v),jd(m,v,I);L!==null&&(S.updateMultisampleRenderTarget(L),S.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(M,v,I),ot.resetDefaultState(),E=-1,x=null,w.pop(),w.length>0?(h=w[w.length-1],ee===!0&&K.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ua(v,I,k,U){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||$.intersectsSprite(v)){U&&Fe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Se);let ae=j.update(v),he=v.material;he.visible&&m.push(v,ae,he,k,Fe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||$.intersectsObject(v))){let ae=j.update(v),he=v.material;if(U&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Fe.copy(v.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Fe.copy(ae.boundingSphere.center)),Fe.applyMatrix4(v.matrixWorld).applyMatrix4(Se)),Array.isArray(he)){let pe=ae.groups;for(let Te=0,Ie=pe.length;Te<Ie;Te++){let me=pe[Te],qe=he[me.materialIndex];qe&&qe.visible&&m.push(v,ae,qe,k,Fe.z,me)}}else he.visible&&m.push(v,ae,he,k,Fe.z,null)}}let Q=v.children;for(let ae=0,he=Q.length;ae<he;ae++)Ua(Q[ae],I,k,U)}function jd(v,I,k,U){let R=v.opaque,Q=v.transmissive,ae=v.transparent;h.setupLightsView(k),ee===!0&&K.setGlobalState(M.clippingPlanes,k),U&&Me.viewport(C.copy(U)),R.length>0&&$s(R,I,k),Q.length>0&&$s(Q,I,k),ae.length>0&&$s(ae,I,k),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function $d(v,I,k,U){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[U.id]===void 0&&(h.state.transmissionRenderTarget[U.id]=new Hn(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?js:Bn,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let Q=h.state.transmissionRenderTarget[U.id],ae=U.viewport||C;Q.setSize(ae.z,ae.w);let he=M.getRenderTarget();M.setRenderTarget(Q),M.getClearColor(W),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),ze&&Ee.render(k);let pe=M.toneMapping;M.toneMapping=mi;let Te=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),h.setupLightsView(U),ee===!0&&K.setGlobalState(M.clippingPlanes,U),$s(v,k,U),S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let me=0,qe=I.length;me<qe;me++){let at=I[me],lt=at.object,Pt=at.geometry,Ze=at.material,ve=at.group;if(Ze.side===On&&lt.layers.test(U.layers)){let Sn=Ze.side;Ze.side=Ft,Ze.needsUpdate=!0,qd(lt,k,U,Pt,Ze,ve),Ze.side=Sn,Ze.needsUpdate=!0,Ie=!0}}Ie===!0&&(S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q))}M.setRenderTarget(he),M.setClearColor(W,Y),Te!==void 0&&(U.viewport=Te),M.toneMapping=pe}function $s(v,I,k){let U=I.isScene===!0?I.overrideMaterial:null;for(let R=0,Q=v.length;R<Q;R++){let ae=v[R],he=ae.object,pe=ae.geometry,Te=U===null?ae.material:U,Ie=ae.group;he.layers.test(k.layers)&&qd(he,I,k,pe,Te,Ie)}}function qd(v,I,k,U,R,Q){v.onBeforeRender(M,I,k,U,R,Q),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),R.onBeforeRender(M,I,k,U,v,Q),R.transparent===!0&&R.side===On&&R.forceSinglePass===!1?(R.side=Ft,R.needsUpdate=!0,M.renderBufferDirect(k,I,U,R,v,Q),R.side=gi,R.needsUpdate=!0,M.renderBufferDirect(k,I,U,R,v,Q),R.side=On):M.renderBufferDirect(k,I,U,R,v,Q),v.onAfterRender(M,I,k,U,R,Q)}function qs(v,I,k){I.isScene!==!0&&(I=pt);let U=xe.get(v),R=h.state.lights,Q=h.state.shadowsArray,ae=R.state.version,he=ye.getParameters(v,R.state,Q,I,k),pe=ye.getProgramCacheKey(he),Te=U.programs;U.environment=v.isMeshStandardMaterial?I.environment:null,U.fog=I.fog,U.envMap=(v.isMeshStandardMaterial?F:y).get(v.envMap||U.environment),U.envMapRotation=U.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Te===void 0&&(v.addEventListener("dispose",Ae),Te=new Map,U.programs=Te);let Ie=Te.get(pe);if(Ie!==void 0){if(U.currentProgram===Ie&&U.lightsStateVersion===ae)return Yd(v,he),Ie}else he.uniforms=ye.getUniforms(v),v.onBeforeCompile(he,M),Ie=ye.acquireProgram(he,pe),Te.set(pe,Ie),U.uniforms=he.uniforms;let me=U.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(me.clippingPlanes=K.uniform),Yd(v,he),U.needsLights=ny(v),U.lightsStateVersion=ae,U.needsLights&&(me.ambientLightColor.value=R.state.ambient,me.lightProbe.value=R.state.probe,me.directionalLights.value=R.state.directional,me.directionalLightShadows.value=R.state.directionalShadow,me.spotLights.value=R.state.spot,me.spotLightShadows.value=R.state.spotShadow,me.rectAreaLights.value=R.state.rectArea,me.ltc_1.value=R.state.rectAreaLTC1,me.ltc_2.value=R.state.rectAreaLTC2,me.pointLights.value=R.state.point,me.pointLightShadows.value=R.state.pointShadow,me.hemisphereLights.value=R.state.hemi,me.directionalShadowMap.value=R.state.directionalShadowMap,me.directionalShadowMatrix.value=R.state.directionalShadowMatrix,me.spotShadowMap.value=R.state.spotShadowMap,me.spotLightMatrix.value=R.state.spotLightMatrix,me.spotLightMap.value=R.state.spotLightMap,me.pointShadowMap.value=R.state.pointShadowMap,me.pointShadowMatrix.value=R.state.pointShadowMatrix),U.currentProgram=Ie,U.uniformsList=null,Ie}function Xd(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=Ur.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Yd(v,I){let k=xe.get(v);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function ey(v,I,k,U,R){I.isScene!==!0&&(I=pt),S.resetTextureUnits();let Q=I.fog,ae=U.isMeshStandardMaterial?I.environment:null,he=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Yr,pe=(U.isMeshStandardMaterial?F:y).get(U.envMap||ae),Te=U.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ie=!!k.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),me=!!k.morphAttributes.position,qe=!!k.morphAttributes.normal,at=!!k.morphAttributes.color,lt=mi;U.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(lt=M.toneMapping);let Pt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ze=Pt!==void 0?Pt.length:0,ve=xe.get(U),Sn=h.state.lights;if(ee===!0&&(ge===!0||v!==x)){let $t=v===x&&U.id===E;K.setState(U,v,$t)}let Je=!1;U.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Sn.state.version||ve.outputColorSpace!==he||R.isBatchedMesh&&ve.batching===!1||!R.isBatchedMesh&&ve.batching===!0||R.isBatchedMesh&&ve.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&ve.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&ve.instancing===!1||!R.isInstancedMesh&&ve.instancing===!0||R.isSkinnedMesh&&ve.skinning===!1||!R.isSkinnedMesh&&ve.skinning===!0||R.isInstancedMesh&&ve.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&ve.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&ve.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&ve.instancingMorph===!1&&R.morphTexture!==null||ve.envMap!==pe||U.fog===!0&&ve.fog!==Q||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==K.numPlanes||ve.numIntersection!==K.numIntersection)||ve.vertexAlphas!==Te||ve.vertexTangents!==Ie||ve.morphTargets!==me||ve.morphNormals!==qe||ve.morphColors!==at||ve.toneMapping!==lt||ve.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,ve.__version=U.version);let Jt=ve.currentProgram;Je===!0&&(Jt=qs(U,I,R));let Xi=!1,Ut=!1,Qr=!1,ut=Jt.getUniforms(),fn=ve.uniforms;if(Me.useProgram(Jt.program)&&(Xi=!0,Ut=!0,Qr=!0),U.id!==E&&(E=U.id,Ut=!0),Xi||x!==v){Me.buffers.depth.getReversed()?(re.copy(v.projectionMatrix),hE(re),pE(re),ut.setValue(N,"projectionMatrix",re)):ut.setValue(N,"projectionMatrix",v.projectionMatrix),ut.setValue(N,"viewMatrix",v.matrixWorldInverse);let Gn=ut.map.cameraPosition;Gn!==void 0&&Gn.setValue(N,Ce.setFromMatrixPosition(v.matrixWorld)),Ve.logarithmicDepthBuffer&&ut.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ut.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,Ut=!0,Qr=!0)}if(R.isSkinnedMesh){ut.setOptional(N,R,"bindMatrix"),ut.setOptional(N,R,"bindMatrixInverse");let $t=R.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),ut.setValue(N,"boneTexture",$t.boneTexture,S))}R.isBatchedMesh&&(ut.setOptional(N,R,"batchingTexture"),ut.setValue(N,"batchingTexture",R._matricesTexture,S),ut.setOptional(N,R,"batchingIdTexture"),ut.setValue(N,"batchingIdTexture",R._indirectTexture,S),ut.setOptional(N,R,"batchingColorTexture"),R._colorsTexture!==null&&ut.setValue(N,"batchingColorTexture",R._colorsTexture,S));let es=k.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0)&&we.update(R,k,Jt),(Ut||ve.receiveShadow!==R.receiveShadow)&&(ve.receiveShadow=R.receiveShadow,ut.setValue(N,"receiveShadow",R.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(fn.envMap.value=pe,fn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&I.environment!==null&&(fn.envMapIntensity.value=I.environmentIntensity),Ut&&(ut.setValue(N,"toneMappingExposure",M.toneMappingExposure),ve.needsLights&&ty(fn,Qr),Q&&U.fog===!0&&se.refreshFogUniforms(fn,Q),se.refreshMaterialUniforms(fn,U,V,J,h.state.transmissionRenderTarget[v.id]),Ur.upload(N,Xd(ve),fn,S)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Ur.upload(N,Xd(ve),fn,S),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ut.setValue(N,"center",R.center),ut.setValue(N,"modelViewMatrix",R.modelViewMatrix),ut.setValue(N,"normalMatrix",R.normalMatrix),ut.setValue(N,"modelMatrix",R.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let $t=U.uniformsGroups;for(let Gn=0,Wn=$t.length;Gn<Wn;Gn++){let Zd=$t[Gn];A.update(Zd,Jt),A.bind(Zd,Jt)}}return Jt}function ty(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function ny(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,I,k){xe.get(v.texture).__webglTexture=I,xe.get(v.depthTexture).__webglTexture=k;let U=xe.get(v);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=k===void 0,U.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,I){let k=xe.get(v);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,k=0){L=v,T=I,D=k;let U=!0,R=null,Q=!1,ae=!1;if(v){let pe=xe.get(v);if(pe.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(N.FRAMEBUFFER,null),U=!1;else if(pe.__webglFramebuffer===void 0)S.setupRenderTarget(v);else if(pe.__hasExternalTextures)S.rebindTextures(v,xe.get(v.texture).__webglTexture,xe.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let me=v.depthTexture;if(pe.__boundDepthTexture!==me){if(me!==null&&xe.has(me)&&(v.width!==me.image.width||v.height!==me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(v)}}let Te=v.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ae=!0);let Ie=xe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?R=Ie[I][k]:R=Ie[I],Q=!0):v.samples>0&&S.useMultisampledRTT(v)===!1?R=xe.get(v).__webglMultisampledFramebuffer:Array.isArray(Ie)?R=Ie[k]:R=Ie,C.copy(v.viewport),G.copy(v.scissor),B=v.scissorTest}else C.copy(_e).multiplyScalar(V).floor(),G.copy(Oe).multiplyScalar(V).floor(),B=it;if(Me.bindFramebuffer(N.FRAMEBUFFER,R)&&U&&Me.drawBuffers(v,R),Me.viewport(C),Me.scissor(G),Me.setScissorTest(B),Q){let pe=xe.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,pe.__webglTexture,k)}else if(ae){let pe=xe.get(v.texture),Te=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,pe.__webglTexture,k||0,Te)}E=-1},this.readRenderTargetPixels=function(v,I,k,U,R,Q,ae){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=xe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ae!==void 0&&(he=he[ae]),he){Me.bindFramebuffer(N.FRAMEBUFFER,he);try{let pe=v.texture,Te=pe.format,Ie=pe.type;if(!Ve.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-U&&k>=0&&k<=v.height-R&&N.readPixels(I,k,U,R,Ne.convert(Te),Ne.convert(Ie),Q)}finally{let pe=L!==null?xe.get(L).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=function(v,I,k,U,R,Q,ae){return jn(this,null,function*(){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=xe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ae!==void 0&&(he=he[ae]),he){let pe=v.texture,Te=pe.format,Ie=pe.type;if(!Ve.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=v.width-U&&k>=0&&k<=v.height-R){Me.bindFramebuffer(N.FRAMEBUFFER,he);let me=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,me),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(I,k,U,R,Ne.convert(Te),Ne.convert(Ie),0);let qe=L!==null?xe.get(L).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,qe);let at=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),yield fE(N,at,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,me),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(me),N.deleteSync(at),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(v,I=null,k=0){v.isTexture!==!0&&(Ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,v=arguments[1]);let U=Math.pow(2,-k),R=Math.floor(v.image.width*U),Q=Math.floor(v.image.height*U),ae=I!==null?I.x:0,he=I!==null?I.y:0;S.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,ae,he,R,Q),Me.unbindTexture()},this.copyTextureToTexture=function(v,I,k=null,U=null,R=0){v.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture function signature has changed."),U=arguments[0]||null,v=arguments[1],I=arguments[2],R=arguments[3]||0,k=null);let Q,ae,he,pe,Te,Ie,me,qe,at,lt=v.isCompressedTexture?v.mipmaps[R]:v.image;k!==null?(Q=k.max.x-k.min.x,ae=k.max.y-k.min.y,he=k.isBox3?k.max.z-k.min.z:1,pe=k.min.x,Te=k.min.y,Ie=k.isBox3?k.min.z:0):(Q=lt.width,ae=lt.height,he=lt.depth||1,pe=0,Te=0,Ie=0),U!==null?(me=U.x,qe=U.y,at=U.z):(me=0,qe=0,at=0);let Pt=Ne.convert(I.format),Ze=Ne.convert(I.type),ve;I.isData3DTexture?(S.setTexture3D(I,0),ve=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(S.setTexture2DArray(I,0),ve=N.TEXTURE_2D_ARRAY):(S.setTexture2D(I,0),ve=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);let Sn=N.getParameter(N.UNPACK_ROW_LENGTH),Je=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Jt=N.getParameter(N.UNPACK_SKIP_PIXELS),Xi=N.getParameter(N.UNPACK_SKIP_ROWS),Ut=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,lt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,pe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Te),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ie);let Qr=v.isDataArrayTexture||v.isData3DTexture,ut=I.isDataArrayTexture||I.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let fn=xe.get(v),es=xe.get(I),$t=xe.get(fn.__renderTarget),Gn=xe.get(es.__renderTarget);Me.bindFramebuffer(N.READ_FRAMEBUFFER,$t.__webglFramebuffer),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let Wn=0;Wn<he;Wn++)Qr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.get(v).__webglTexture,R,Ie+Wn),v.isDepthTexture?(ut&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.get(I).__webglTexture,R,at+Wn),N.blitFramebuffer(pe,Te,Q,ae,me,qe,Q,ae,N.DEPTH_BUFFER_BIT,N.NEAREST)):ut?N.copyTexSubImage3D(ve,R,me,qe,at+Wn,pe,Te,Q,ae):N.copyTexSubImage2D(ve,R,me,qe,at+Wn,pe,Te,Q,ae);Me.bindFramebuffer(N.READ_FRAMEBUFFER,null),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ut?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(ve,R,me,qe,at,Q,ae,he,Pt,Ze,lt.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(ve,R,me,qe,at,Q,ae,he,Pt,lt.data):N.texSubImage3D(ve,R,me,qe,at,Q,ae,he,Pt,Ze,lt):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,R,me,qe,Q,ae,Pt,Ze,lt.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,R,me,qe,lt.width,lt.height,Pt,lt.data):N.texSubImage2D(N.TEXTURE_2D,R,me,qe,Q,ae,Pt,Ze,lt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Sn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Jt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ut),R===0&&I.generateMipmaps&&N.generateMipmap(ve),Me.unbindTexture()},this.copyTextureToTexture3D=function(v,I,k=null,U=null,R=0){return v.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,U=arguments[1]||null,v=arguments[2],I=arguments[3],R=arguments[4]||0),Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,I,k,U,R)},this.initRenderTarget=function(v){xe.get(v).__webglFramebuffer===void 0&&S.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?S.setTextureCube(v,0):v.isData3DTexture?S.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?S.setTexture2DArray(v,0):S.setTexture2D(v,0),Me.unbindTexture()},this.resetState=function(){T=0,D=0,L=null,Me.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var $r=class extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Aa=class extends zi{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Le(16777215),this.specular=new Le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pg,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function la(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function cD(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var qr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},md=class extends qr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mm,endingEnd:Mm}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Em:s=e,a=2*t-i;break;case Sm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Em:o=e,c=2*i-t;break;case Sm:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,h=-f*m+2*f*_-f*g,b=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,w=(-1-p)*m+(1.5+p)*_+.5*g,M=p*m-p*_;for(let O=0;O!==a;++O)s[O]=h*o[u+O]+b*o[l+O]+w*o[c+O]+M*o[d+O];return s}},gd=class extends qr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},yd=class extends qr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},dn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=la(t,this.TimeBufferType),this.values=la(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:la(e.times,Array),values:la(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new md(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case Ju:t=this.InterpolantFactoryMethodLinear;break;case kl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return Ju;case this.InterpolantFactoryMethodSmooth:return kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&cD(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===kl,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[f+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=Ju;var Gi=class extends dn{constructor(e,t,i){super(e,t,i)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=ma;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var vd=class extends dn{};vd.prototype.ValueTypeName="color";var _d=class extends dn{};_d.prototype.ValueTypeName="number";var xd=class extends qr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)un.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ia=class extends dn{InterpolantFactoryMethodLinear(e){return new xd(this.times,this.values,this.getValueSize(),e)}};Ia.prototype.ValueTypeName="quaternion";Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends dn{constructor(e,t,i){super(e,t,i)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=ma;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Md=class extends dn{};Md.prototype.ValueTypeName="vector";var vg={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Ed=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},lD=new Ed,Ud=(()=>{class n{constructor(t){this.manager=t!==void 0?t:lD,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})(),Pn={},Sd=class extends Error{constructor(e,t){super(e),this.response=t}},Ra=class extends Ud{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=vg.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Pn[e]!==void 0){Pn[e].push({onLoad:t,onProgress:i,onError:r});return}Pn[e]=[],Pn[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Pn[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,_=0,m=new ReadableStream({start(h){b();function b(){d.read().then(({done:w,value:M})=>{if(w)h.close();else{_+=M.byteLength;let O=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,D=u.length;T<D;T++){let L=u[T];L.onProgress&&L.onProgress(O)}h.enqueue(M),b()}},w=>{h.error(w)})}}});return new Response(m)}else throw new Sd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{vg.add(e,l);let u=Pn[e];delete Pn[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=Pn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Pn[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var wd=class extends zn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var uu=new ht,_g=new P,xg=new P,bd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;_g.setFromMatrixPosition(e.matrixWorld),t.position.copy(_g),xg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xg),t.updateMatrixWorld(),uu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Mg=new ht,Ns=new P,du=new P,Td=class extends bd{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ns.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ns),du.copy(i.position),du.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(du),i.updateMatrixWorld(),r.makeTranslation(-Ns.x,-Ns.y,-Ns.z),Mg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mg)}},Xr=class extends wd{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Td}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};var Bd="\\[\\]\\.:\\/",uD=new RegExp("["+Bd+"]","g"),Vd="[^"+Bd+"]",dD="[^"+Bd.replace("\\.","")+"]",fD=/((?:WC+[\/:])*)/.source.replace("WC",Vd),hD=/(WCOD+)?/.source.replace("WCOD",dD),pD=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vd),mD=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vd),gD=new RegExp("^"+fD+hD+pD+mD+"$"),yD=["material","materials","bones","map"],Dd=class{constructor(e,t,i){let r=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},yt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uD,"")}static parseTrackName(t){let i=gD.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);yD.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Dd,n})();yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vI=new Float32Array(1);var Ws=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Na=class extends Vn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cd);var jg={type:"change"},zd={type:"start"},qg={type:"end"},Fa=new Hs,$g=new an,vD=Math.cos(70*Og.DEG2RAD),Mt=new P,kt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hd=1e-6,Kr=class extends Na{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new un,this._lastTargetPosition=new P,this._quat=new un().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ws,this._sphericalDelta=new Ws,this._scale=1,this._panOffset=new P,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new P,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xD.bind(this),this._onPointerDown=_D.bind(this),this._onPointerUp=MD.bind(this),this._onContextMenu=CD.bind(this),this._onMouseWheel=wD.bind(this),this._onKeyDown=bD.bind(this),this._onTouchStart=TD.bind(this),this._onTouchMove=DD.bind(this),this._onMouseDown=ED.bind(this),this._onMouseMove=SD.bind(this),this._interceptControlDown=AD.bind(this),this._interceptControlUp=ID.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jg),this.update(),this.state=nt.NONE}update(e=null){let t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=kt:i>Math.PI&&(i-=kt),r<-Math.PI?r+=kt:r>Math.PI&&(r-=kt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Mt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Fa.origin.copy(this.object.position),Fa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fa.direction))<vD?this.object.lookAt(this.target):($g.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fa.intersectPlane($g,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Hd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hd||this._lastTargetPosition.distanceToSquared(this.target)>Hd?(this.dispatchEvent(jg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kt/60*this.autoRotateSpeed*e:kt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Mt.copy(r).sub(this.target);let s=Mt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function _D(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function xD(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function MD(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qg),this.state=nt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ED(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=nt.DOLLY;break;case ji.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=nt.ROTATE}break;case ji.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(zd)}function SD(n){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function wD(n){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(n.preventDefault(),this.dispatchEvent(zd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(qg))}function bD(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function TD(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case $i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=nt.TOUCH_ROTATE;break;case $i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case $i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=nt.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(zd)}function DD(n){switch(this._trackPointer(n),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=nt.NONE}}function CD(n){this.enabled!==!1&&n.preventDefault()}function AD(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ID(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ka=class extends Ud{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new Ra(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){function t(l){let u=new DataView(l),d=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*d===u.byteLength)return!0;let g=[115,111,108,105,100];for(let _=0;_<5;_++)if(i(g,u,_))return!1;return!0}function i(l,u,d){for(let f=0,p=l.length;f<p;f++)if(l[f]!==u.getUint8(d+f))return!1;return!0}function r(l){let u=new DataView(l),d=u.getUint32(80,!0),f,p,g,_=!1,m,h,b,w,M;for(let C=0;C<70;C++)u.getUint32(C,!1)==1129270351&&u.getUint8(C+4)==82&&u.getUint8(C+5)==61&&(_=!0,m=new Float32Array(d*3*3),h=u.getUint8(C+6)/255,b=u.getUint8(C+7)/255,w=u.getUint8(C+8)/255,M=u.getUint8(C+9)/255);let O=84,T=12*4+2,D=new xn,L=new Float32Array(d*3*3),E=new Float32Array(d*3*3),x=new Le;for(let C=0;C<d;C++){let G=O+C*T,B=u.getFloat32(G,!0),W=u.getFloat32(G+4,!0),Y=u.getFloat32(G+8,!0);if(_){let H=u.getUint16(G+48,!0);H&32768?(f=h,p=b,g=w):(f=(H&31)/31,p=(H>>5&31)/31,g=(H>>10&31)/31)}for(let H=1;H<=3;H++){let J=G+H*12,V=C*3*3+(H-1)*3;L[V]=u.getFloat32(J,!0),L[V+1]=u.getFloat32(J+4,!0),L[V+2]=u.getFloat32(J+8,!0),E[V]=B,E[V+1]=W,E[V+2]=Y,_&&(x.setRGB(f,p,g,Ot),m[V]=x.r,m[V+1]=x.g,m[V+2]=x.b)}}return D.setAttribute("position",new Ct(L,3)),D.setAttribute("normal",new Ct(E,3)),_&&(D.setAttribute("color",new Ct(m,3)),D.hasColors=!0,D.alpha=M),D}function s(l){let u=new xn,d=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/,g=0,_=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),h=new RegExp("normal"+_+_+_,"g"),b=[],w=[],M=[],O=new P,T,D=0,L=0,E=0;for(;(T=d.exec(l))!==null;){L=E;let x=T[0],C=(T=p.exec(x))!==null?T[1]:"";for(M.push(C);(T=f.exec(x))!==null;){let W=0,Y=0,H=T[0];for(;(T=h.exec(H))!==null;)O.x=parseFloat(T[1]),O.y=parseFloat(T[2]),O.z=parseFloat(T[3]),Y++;for(;(T=m.exec(H))!==null;)b.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),w.push(O.x,O.y,O.z),W++,E++;Y!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),W!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}let G=L,B=E-L;u.userData.groupNames=M,u.addGroup(G,B,D),D++}return u.setAttribute("position",new Yt(b,3)),u.setAttribute("normal",new Yt(w,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){let u=new Uint8Array(l.length);for(let d=0;d<l.length;d++)u[d]=l.charCodeAt(d)&255;return u.buffer||u}else return l}let c=a(e);return t(c)?r(c):s(o(e))}};var RD={castShadow:!0,position:new P(0,0,0),receiveShadow:!0,scale:new P(.03,.03,.03)},ND=()=>{try{let n=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(n.getContext("webgl")||n.getContext("experimental-webgl")))}catch{return!1}},Xg=(()=>{let e=class e{constructor(i,r,s){this.cdr=i,this.eleRef=r,this.ngZone=s,this.stlModels=[],this.stlModelFiles=[],this.hasControls=!0,this.camera=new St(35,window.innerWidth/window.innerHeight,1,15),this.cameraTarget=new P(0,0,0),this.light=new Xr(16777215,80),this.material=new Aa({color:10066329,shininess:400,specular:2236962}),this.scene=new $r,this.renderer=new jr({antialias:!0}),this.controls=null,this.meshOptions=[],this.centered=!0,this.rendered=new mn,this.hasWebGL=ND(),this.meshGroup=new zn,this.isRendered=!1,this.showStlModel=!0,this.stlLoader=new ka,this.middle=new P,this.render=()=>{this.renderer.render(this.scene,this.camera)},this.onWindowResize=()=>{this.setSizes(),this.render()},this.cdr.detach(),this.light.position.set(1,1,2),this.camera.position.set(3,3,3),this.scene.background=new Le(16777215),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0}ngOnInit(){if(!this.hasWebGL){console.error("stl-model-viewer: Seems like your system does not support webgl.");return}this.ngZone.runOutsideAngular(()=>{this.init()})}ngOnDestroy(){window.removeEventListener("resize",this.onWindowResize,!1),this.meshGroup.children.forEach(i=>this.meshGroup.remove(i)),this.scene.children.forEach(i=>this.scene.remove(i)),this.camera.remove(this.light),this.material&&this.material.dispose(),this.controls&&(this.controls.removeEventListener("change",this.render),this.controls.dispose()),this.eleRef&&this.eleRef.nativeElement.children.length>1&&this.eleRef.nativeElement.removeChild(this.renderer.domElement),this.renderer.renderLists.dispose(),this.renderer.domElement.remove(),this.renderer.dispose()}createMesh(o){return jn(this,arguments,function*(i,r={},s=!1){let a=null;s?a=this.stlLoader.parse(i):a=yield this.stlLoader.loadAsync(i),this.material.shininess=100;let c=new Wt(a,this.material);this.centered&&(a.computeBoundingBox(),a.boundingBox.getCenter(this.middle),c.geometry.applyMatrix4(new ht().makeTranslation(-this.middle.x,-this.middle.y,-this.middle.z)));let l=["position","scale","up"],u=Object.assign({},RD,r);return Object.getOwnPropertyNames(u).forEach(d=>{if(l.indexOf(d)>-1){let f=u[d];c[d].set(f.x,f.y,f.z)}else c[d]=u[d]}),c})}setSizes(){let i=this.eleRef.nativeElement.offsetWidth,r=this.eleRef.nativeElement.offsetHeight;this.camera.aspect=i/r,this.camera.updateProjectionMatrix(),this.renderer.setSize(i,r)}init(){return jn(this,null,function*(){this.camera.add(this.light),this.scene.add(this.camera),this.hasControls&&(this.controls||(this.controls=new Kr(this.camera,this.renderer.domElement),this.controls.enableZoom=!0,this.controls.minDistance=1,this.controls.maxDistance=7),this.controls.addEventListener("change",this.render)),window.addEventListener("resize",this.onWindowResize,!1);let i=[];this.stlModels.length>0?i=this.stlModels.map((s,o)=>this.createMesh(s,this.meshOptions[o])):i=this.stlModelFiles.map((s,o)=>this.createMesh(s,this.meshOptions[o],!0)),(yield Promise.all(i)).map(s=>this.meshGroup.add(s)),this.scene.add(this.meshGroup),this.eleRef.nativeElement.appendChild(this.renderer.domElement),this.setSizes(),this.render(),this.ngZone.run(()=>{this.isRendered=!0,this.rendered.emit(),this.cdr.detectChanges()})})}};e.\u0275fac=function(r){return new(r||e)(hr(Fo),hr(xs),hr(dt))},e.\u0275cmp=No({type:e,selectors:[["stl-model-viewer"]],inputs:{stlModels:"stlModels",stlModelFiles:"stlModelFiles",hasControls:"hasControls",camera:"camera",cameraTarget:"cameraTarget",light:"light",material:"material",scene:"scene",renderer:"renderer",controls:"controls",meshOptions:"meshOptions",centered:"centered"},outputs:{rendered:"rendered"},decls:0,vars:0,template:function(r,s){},styles:["[_nghost-%COMP%]{width:100%;height:100%;display:block}"],changeDetection:0});let n=e;return n})();var LD=()=>["./assets/peter.stl"],Yg=()=>["./assets/strap.stl"],OD=()=>({x:0,y:0,z:0}),FD=n=>({position:n}),kD=n=>[n],Zg=(()=>{let e=class e{constructor(){this.title="Examples",this.renderer=new jr({antialias:!0}),this.camera=new St(35,window.innerWidth/window.innerHeight,1,15),this.controls=new Kr(this.camera,this.renderer.domElement),this.scene=new $r,this.light=new Xr(16777215,80),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.camera.position.set(3,3,3),this.light.position.set(1,1,2),this.scene.background=new Le(16777215),this.controls.enableZoom=!0,this.controls.minDistance=1,this.controls.maxDistance=7,this.controls.update()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=No({type:e,selectors:[["app-root"]],standalone:!1,decls:8,vars:19,consts:[[3,"centered","stlModels"],[3,"stlModels"],[3,"light","scene","camera","renderer","controls","meshOptions","stlModels"]],template:function(r,s){r&1&&(mr(0,"h1"),Ml(1),gr(),mr(2,"div"),Oo(3,"stl-model-viewer",0)(4,"stl-model-viewer",1),mr(5,"h3"),Ml(6,"Custom controls, light, scene, camera, renderer"),gr(),Oo(7,"stl-model-viewer",2),gr()),r&2&&(Ms(),El(s.title),Ms(2),Ss("centered",!1)("stlModels",ws(11,LD)),Ms(),Ss("stlModels",ws(12,Yg)),Ms(3),Ss("light",s.light)("scene",s.scene)("camera",s.camera)("renderer",s.renderer)("controls",s.controls)("meshOptions",Sl(16,kD,Sl(14,FD,ws(13,OD))))("stlModels",ws(18,Yg)))},dependencies:[Xg],styles:["stl-model-viewer[_ngcontent-%COMP%]{width:100%;height:100%;display:block}"]});let n=e;return n})();var Jg=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Dn({type:e}),e.\u0275inj=Tn({});let n=e;return n})();var Kg=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Dn({type:e,bootstrap:[Zg]}),e.\u0275inj=Tn({imports:[mm,Jg]});let n=e;return n})();var Qg={production:!0};Qg.production&&void 0;pm().bootstrapModule(Kg).catch(n=>console.error(n));
