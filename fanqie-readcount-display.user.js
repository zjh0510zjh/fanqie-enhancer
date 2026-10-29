// ==UserScript==
// @name         番茄小说全能增强（双书名直观展示 + 详情页新标签打开零重载 + 榜单全数据透视 + 移动端自愈）
// @namespace    fanqie.allinone.enhancer
// @version      36.2.1
// @description  官方全网搜索（修复按钮与回车事件监听，纯官方直连，支持书名、作者与书号直达）；作者主页(/author-page/*)下架绝版神作穿透显形与真实书号一键复制；独家集成【⚡系统流】专属热度榜单；当前分类【🌐全榜大聚合】热门+阅读+高分+催更4大主榜全量去重汇聚与8大运营指标即时重排序；彻底杜绝重复书籍；双书名无冗余文案直接并列展示【当前主书名 + 曾用名】；详情页满宽通栏卡片优化；新标签页极速打开零重载；移动端自愈防拦截！
// @author       you
// @match        https://fanqienovel.com/*
// @match        https://*.fanqienovel.com/*
// @grant        GM_xmlhttpRequest
// @connect      fanqienovel.com
// @connect      reading.snssdk.com
// @connect      novelcatch.com
// @connect      api.fanqiesdk.com
// @updateURL    https://raw.githubusercontent.com/zjh0510zjh/fanqie-enhancer/main/fanqie-readcount-display.user.js
// @downloadURL  https://raw.githubusercontent.com/zjh0510zjh/fanqie-enhancer/main/fanqie-readcount-display.user.js
// @run-at       document-start
// ==/UserScript==


/*__SIGN_BUNDLE__*/
var __fqsign=(()=>{var z=Object.defineProperty;var dt=Object.getOwnPropertyDescriptor;var yt=Object.getOwnPropertyNames;var lt=Object.prototype.hasOwnProperty;var mt=(e,o)=>{for(var t in o)z(e,t,{get:o[t],enumerable:!0})},xt=(e,o,t,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of yt(o))!lt.call(e,r)&&r!==t&&z(e,r,{get:()=>o[r],enumerable:!(n=dt(o,r))||n.enumerable});return e};var ht=e=>xt(z({},"__esModule",{value:!0}),e);var Dt={};mt(Dt,{DEVICE:()=>ut,buildQuery:()=>Ht,genHeaders:()=>_t});function W(e,o){return e<<o|e>>>32-o}function u(e,o){return e+o>>>0}function pt(e,o,t){return e&o|~e&t}function wt(e,o,t){return e&t|o&~t}function At(e,o,t){return e^o^t}function Ut(e,o,t){return o^(e|~t)}function d(e,o,t,n,r,s,i){return u(W(u(e,u(u(pt(o,t,n),r),i)),s),o)}function y(e,o,t,n,r,s,i){return u(W(u(e,u(u(wt(o,t,n),r),i)),s),o)}function l(e,o,t,n,r,s,i){return u(W(u(e,u(u(At(o,t,n),r),i)),s),o)}function m(e,o,t,n,r,s,i){return u(W(u(e,u(u(Ut(o,t,n),r),i)),s),o)}function Bt(e){let o=Math.ceil((e.length+9)/64)*16,t=new Array(o).fill(0);for(let s=0;s<e.length;s++){let i=Math.floor(s/4),a=s%4*8;t[i]=t[i]|e[s]<<a}let n=Math.floor(e.length/4),r=e.length%4*8;return t[n]=t[n]|128<<r,t[o-2]=e.length<<3,t[o-1]=e.length>>>29,t}function N(e){let o="";for(let t=0;t<4;t++){let n=e>>>t*8&255;o+=n.toString(16).padStart(2,"0")}return o}function O(e){let o=typeof e=="string"?new TextEncoder().encode(e):new Uint8Array(e),t=Bt(o),n=1732584193,r=4023233417,s=2562383102,i=271733878;for(let a=0;a<t.length;a+=16){let g=n,x=r,c=s,h=i;n=d(n,r,s,i,t[a],7,3614090360),i=d(i,n,r,s,t[a+1],12,3905402710),s=d(s,i,n,r,t[a+2],17,606105819),r=d(r,s,i,n,t[a+3],22,3250441966),n=d(n,r,s,i,t[a+4],7,4118548399),i=d(i,n,r,s,t[a+5],12,1200080426),s=d(s,i,n,r,t[a+6],17,2821735955),r=d(r,s,i,n,t[a+7],22,4249261313),n=d(n,r,s,i,t[a+8],7,1770035416),i=d(i,n,r,s,t[a+9],12,2336552879),s=d(s,i,n,r,t[a+10],17,4294925233),r=d(r,s,i,n,t[a+11],22,2304563134),n=d(n,r,s,i,t[a+12],7,1804603682),i=d(i,n,r,s,t[a+13],12,4254626195),s=d(s,i,n,r,t[a+14],17,2792965006),r=d(r,s,i,n,t[a+15],22,1236535329),n=y(n,r,s,i,t[a+1],5,4129170786),i=y(i,n,r,s,t[a+6],9,3225465664),s=y(s,i,n,r,t[a+11],14,643717713),r=y(r,s,i,n,t[a],20,3921069994),n=y(n,r,s,i,t[a+5],5,3593408605),i=y(i,n,r,s,t[a+10],9,38016083),s=y(s,i,n,r,t[a+15],14,3634488961),r=y(r,s,i,n,t[a+4],20,3889429448),n=y(n,r,s,i,t[a+9],5,568446438),i=y(i,n,r,s,t[a+14],9,3275163606),s=y(s,i,n,r,t[a+3],14,4107603335),r=y(r,s,i,n,t[a+8],20,1163531501),n=y(n,r,s,i,t[a+13],5,2850285829),i=y(i,n,r,s,t[a+2],9,4243563512),s=y(s,i,n,r,t[a+7],14,1735328473),r=y(r,s,i,n,t[a+12],20,2368359562),n=l(n,r,s,i,t[a+5],4,4294588738),i=l(i,n,r,s,t[a+8],11,2272392833),s=l(s,i,n,r,t[a+11],16,1839030562),r=l(r,s,i,n,t[a+14],23,4259657740),n=l(n,r,s,i,t[a+1],4,2763975236),i=l(i,n,r,s,t[a+4],11,1272893353),s=l(s,i,n,r,t[a+7],16,4139469664),r=l(r,s,i,n,t[a+10],23,3200236656),n=l(n,r,s,i,t[a+13],4,681279174),i=l(i,n,r,s,t[a],11,3936430074),s=l(s,i,n,r,t[a+3],16,3572445317),r=l(r,s,i,n,t[a+6],23,76029189),n=l(n,r,s,i,t[a+9],4,3654602809),i=l(i,n,r,s,t[a+12],11,3873151461),s=l(s,i,n,r,t[a+15],16,530742520),r=l(r,s,i,n,t[a+2],23,3299628645),n=m(n,r,s,i,t[a],6,4096336452),i=m(i,n,r,s,t[a+7],10,1126891415),s=m(s,i,n,r,t[a+14],15,2878612391),r=m(r,s,i,n,t[a+5],21,4237533241),n=m(n,r,s,i,t[a+12],6,1700485571),i=m(i,n,r,s,t[a+3],10,2399980690),s=m(s,i,n,r,t[a+10],15,4293915773),r=m(r,s,i,n,t[a+1],21,2240044497),n=m(n,r,s,i,t[a+8],6,1873313359),i=m(i,n,r,s,t[a+15],10,4264355552),s=m(s,i,n,r,t[a+6],15,2734768916),r=m(r,s,i,n,t[a+13],21,1309151649),n=m(n,r,s,i,t[a+4],6,4149444226),i=m(i,n,r,s,t[a+11],10,3174756917),s=m(s,i,n,r,t[a+2],15,718787259),r=m(r,s,i,n,t[a+9],21,3951481745),n=u(n,g),r=u(r,x),s=u(s,c),i=u(i,h)}return(N(n)+N(r)+N(s)+N(i)).toLowerCase()}function w(e,o){let t=o&31;return e<<t|e>>>32-t}function It(e){return e^w(e,9)^w(e,17)}function St(e){return e^w(e,15)^w(e,23)}function V(e){let o=e.length,t=Math.ceil((o+9)/64)*64,n=new Uint8Array(t);n.set(e),n[o]=128;let r=BigInt(o)*8n;for(let c=0;c<8;c++)n[t-1-c]=Number(r>>BigInt(c*8)&0xffn);let s=new DataView(n.buffer),i=new Uint32Array([1937774191,1226093241,388252375,3666478592,2842636476,372324522,3817729613,2969243214]),a=new Uint32Array(68),g=new Uint32Array(64);for(let c=0;c<n.length/64;c++){let h=c*64;for(let f=0;f<16;f++)a[f]=s.getUint32(h+f*4,!1);for(let f=16;f<68;f++)a[f]=St(a[f-16]^a[f-9]^w(a[f-3],15))^w(a[f-13],7)^a[f-6];for(let f=0;f<64;f++)g[f]=a[f]^a[f+4];let A=i[0],b=i[1],U=i[2],v=i[3],B=i[4],L=i[5],P=i[6],k=i[7];for(let f=0;f<64;f++){let p=f<=15?2043430169:2055708042,K=w(w(A,12)+B+w(p,f),7),j=K^w(A,12),gt=(f<=15?A^b^U:A&b|A&U|b&U)+v+j+g[f],bt=(f<=15?B^L^P:B&L|~B&P)+k+K+a[f];v=U,U=w(b,9),b=A,A=gt,k=P,P=w(L,19),L=B,B=It(bt)}i[0]=i[0]^A,i[1]=i[1]^b,i[2]=i[2]^U,i[3]=i[3]^v,i[4]=i[4]^B,i[5]=i[5]^L,i[6]=i[6]^P,i[7]=i[7]^k}let x=new Uint8Array(32);for(let c=0;c<i.length;c++){let h=i[c];x[c*4]=h>>>24,x[c*4+1]=h>>>16,x[c*4+2]=h>>>8,x[c*4+3]=h}return x}function _(){let e=globalThis.crypto??unsafeWindow.crypto;if(!e?.subtle)throw new Error("Crypto API\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5\u6D4F\u89C8\u5668\u7248\u672C\u662F\u5426\u652F\u6301\u8BE5API");return e}function H(){return _().subtle}function X(e){let o=new Uint8Array(e),t=32768,n=[];for(let r=0;r<o.length;r+=t)n.push(String.fromCharCode(...o.subarray(r,r+t)));return btoa(n.join(""))}function J(e){if(e.length%2!==0)throw new Error("Invalid hex string");let o=new Uint8Array(e.length/2);for(let t=0;t<e.length;t+=2){let n=parseInt(e.slice(t,t+2),16);if(Number.isNaN(n))throw new Error("Invalid hex string");o[t/2]=n}return o.buffer}function G(e){let o=new Uint8Array(e),t="";for(let n=0;n<o.length;n++)t+=o[n].toString(16).padStart(2,"0");return t}function M(e,o=16){let t=o-e.length%o,n=new Uint8Array(e.length+t);return n.set(e),n.fill(t,e.length),n}function E(e){return typeof e=="string"?new TextEncoder().encode(e):e instanceof Uint8Array?new Uint8Array(e):new Uint8Array(e)}var R={sha256:async e=>{let t=await H().digest("SHA-256",E(e));return G(t)},sha256bytes:async e=>H().digest("SHA-256",E(e)),sha512:async e=>{let t=await H().digest("SHA-512",E(e));return G(t)},sha512bytes:async e=>H().digest("SHA-512",E(e)),md5:async e=>O(typeof e=="string"?e:E(e).buffer),md5bytes:async e=>J(O(typeof e=="string"?e:E(e).buffer)),sm3:async e=>G(V(E(e)).buffer),sm3bytes:async e=>V(E(e)).buffer};var Y=class e{buf=[];writeVarint(o){let t=o>>>0;for(;t>=128;)this.buf.push(t&127|128),t>>>=7;return this.buf.push(t&127),this}writeKey(o,t){return this.writeVarint(o<<3|t)}varint(o,t){return this.writeKey(o,0).writeVarint(t)}fixed32(o,t){this.writeKey(o,5);let n=t>>>0;return this.buf.push(n&255,n>>>8&255,n>>>16&255,n>>>24&255),this}bytes(o,t){this.writeKey(o,2).writeVarint(t.length);for(let n=0;n<t.length;n++)this.buf.push(t[n]&255);return this}string(o,t){return this.bytes(o,new TextEncoder().encode(t))}message(o,t){let n=new e;return t(n),this.bytes(o,n.toBytes())}toBytes(){return Uint8Array.from(this.buf)}};var I=0xffffffffffffffffn,vt=0x3dc94c3a046d678bn;function Et(e,o){return e>>BigInt(o)&1n}function tt(e,o){return(e<<o|e>>64n-o)&I}function rt(e,o){return(e<<64n-o|e>>o)&I}function Lt(e){let o=[e[0]&I,e[1]&I,e[2]&I,e[3]&I];for(let t=4;t<72;t++){let n=rt(o[t-1],3n);n^=o[t-3],n^=rt(n,1n),o.push((~o[t-4]^n^Et(vt,(t-4)%62)^3n)&I)}return o}function it(e,o){let t=Lt(o),n=e[0]&I,r=e[1]&I;for(let s=0;s<72;s++){let i=r,a=tt(r,1n)&tt(r,8n);r=(n^a^tt(r,2n)^t[s])&I,n=i}return[n,r]}var C=new Uint8Array([242,129]),D=new Uint8Array([97,111]),$=new Uint8Array([242,247,252,255,242,247,252,255]);function st(e){return V(e).slice(0,6)}function Pt(e){let o=new Uint8Array(16);if(e.length>=32)for(let t=0;t<16;t++)o[t]=parseInt(e.slice(t*2,t*2+2),16)&255;return o}function Rt(e,o,t,n){let r=new URLSearchParams(e),s=r.get("device_id")??"",i=r.get("version_name")??"",a=st(o===""?new Uint8Array(16):Pt(o)),g=st(e===""?new Uint8Array(16):new TextEncoder().encode(e)),x=_().getRandomValues(new Uint32Array(1))[0]%2147483647;return new Y().varint(1,538970409*2).varint(2,2).varint(3,x).string(4,n.aid).string(5,s).string(6,n.licenseId).string(7,i).string(8,n.sdkVersion).varint(9,n.sdkVersionInt).bytes(10,new Uint8Array(8)).varint(11,0).varint(12,t*2).bytes(13,a).bytes(14,g).message(15,c=>{c.varint(1,1).varint(2,1).varint(3,1).varint(7,3348294860)}).string(16,"").string(20,"none").varint(21,n.callType).message(23,c=>{c.string(1,"NX551J").varint(2,8196).varint(4,2162219008)}).varint(25,2).toBytes()}async function nt(e,o,t,n){let{signKey:r}=n;if(r.length!==32)throw new Error(`Sign key must be 32 bytes, got ${r.length}`);let s=M(Rt(e,o,t,n),16),i=new Uint8Array(r.length*2+C.length+D.length);i.set(r,0),i.set(C,r.length),i.set(D,r.length+C.length),i.set(r,r.length+C.length+D.length);let a=V(i),g=new DataView(a.buffer,a.byteOffset,a.byteLength),x=[g.getBigUint64(0,!0),g.getBigUint64(8,!0),g.getBigUint64(16,!0),g.getBigUint64(24,!0)],c=new Uint8Array(s.length),h=new DataView(s.buffer,s.byteOffset,s.byteLength),A=new DataView(c.buffer);for(let p=0;p<s.length;p+=16){let[K,j]=it([h.getBigUint64(p,!0),h.getBigUint64(p+8,!0)],x);A.setBigUint64(p,K,!0),A.setBigUint64(p+8,j,!0)}let b=new Uint8Array($.length+c.length);b.set($),b.set(c,$.length);for(let p=$.length;p<b.length;p++)b[p]^=b[p%8];b.reverse();let U=new Uint8Array([166,110,173,159,119,1,208,12,24]),v=new Uint8Array(U.length+b.length+D.length);v.set(U),v.set(b,U.length),v.set(D,U.length+b.length);let B=H(),L=await B.importKey("raw",await R.md5bytes(r.slice(0,16)),{name:"AES-CBC"},!1,["encrypt"]),P=await R.md5bytes(r.slice(16)),k=new Uint8Array(await B.encrypt({name:"AES-CBC",iv:P},L,v)),f=new Uint8Array(C.length+k.length);return f.set(C),f.set(k,C.length),X(f.buffer)}var Ct=34,S=0xffffffffffffffffn,T=64n,F=8n,q=3n;function Q(e,o){return e.getBigUint64(o,!0)}function kt(e){let o=new DataView(e.buffer,e.byteOffset,e.byteLength),t=[Q(o,0)&S],n=e.length*8/Number(T),r=[];for(let s=1;s<n;s++)r.push(Q(o,s*8)&S);for(let s=0;s<Ct-1;s++){let a=((r[s]<<T-F)+(r[s]>>F)&S)+t[s]&S,g=BigInt(s)^a,x=(t[s]>>T-q)+(t[s]<<q)&S;r.push(g),t.push(g^x)}return t}function Vt(e,o,t,n){let r=new DataView(o.buffer,o.byteOffset,o.byteLength),s=Q(r,0),i=Q(r,8);for(let g of e){let c=((i<<T-F)+(i>>F)&S)+s&S;i=g^c;let h=(s>>T-q)+(s<<q)&S;s=i^h}let a=new DataView(t.buffer,t.byteOffset,t.byteLength);a.setBigUint64(n,s&S,!0),a.setBigUint64(n+8,i&S,!0)}function ot(e,o){if(e.length!==32)throw new Error(`Speck key must be 32 bytes, got ${e.length}`);let t=M(o,16),n=kt(e),r=new Uint8Array(t.length);for(let s=0;s<t.length;s+=16)Vt(n,t.subarray(s,s+16),r,s);return r}async function at(e,o){let t=new TextEncoder().encode(o),n=new Uint8Array(e.length+t.length);n.set(e),n.set(t,e.length);let r=await R.md5(n);return new TextEncoder().encode(r)}async function et(e,o){let t=_().getRandomValues(new Uint8Array(4)),n=new TextEncoder().encode(`${e}-${o.licenseId}-${o.aid}`),r=await at(t,o.aid),s=ot(r,n),i=new Uint8Array(t.length+s.length);return i.set(t),i.set(s,t.length),X(i.buffer)}var Z={signKey:new Uint8Array(J("ac1adaae95a7af94a5114ab3b3a97dd80050aa0a39314c40528caec95256c28c")),aid:"1967",licenseId:"1611921764",sdkVersion:"v04.04.05-ov-android",sdkVersionInt:134744640,callType:738};async function ft(e,o="",t=Math.floor(Date.now()/1e3),n=Z){let[r,s]=await Promise.all([nt(e,o,t,n),et(t,n)]);return{"x-argus":r,"x-ladon":s,"x-khronos":String(t)}}async function ct(e,o,t=Z){let n=new URL(e).search.replace(/^\?/,""),r=typeof o=="string"?o.length>0:(o?.byteLength??0)>0,s=r?await R.md5(o):"",i=Date.now(),a=await ft(n,s,Math.floor(i/1e3),t);return a["x-ss-req-ticket"]=String(i),r&&(a["X-SS-STUB"]=s),a}var ut={iid:"2187355326270644",device_id:"2187355326004404",ac:"wifi",channel:"43536163a",aid:"1967",app_name:"novelapp",version_code:"70132",version_name:"7.0.1.32",device_platform:"android",os:"android",ssmix:"a",os_version:"10",device_type:"P30",device_brand:"realme",update_version_code:"70132",manifest_version_code:"70132",pv_player:"70132"};function Ht(e){return new URLSearchParams({...ut,...e}).toString()}async function _t(e){return await ct(e)}return ht(Dt);})();


(function() {
  'use strict';

  const PC_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

  function gmGet(url, customHeaders = {}) {
    return new Promise((resolve, reject) => {
      let targetOrigin = 'https://fanqienovel.com';
      try { targetOrigin = new URL(url).origin; } catch (e) {}

      GM_xmlhttpRequest({
        method: 'GET',
        url,
        timeout: 15000,
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Referer': targetOrigin + '/',
          'Origin': targetOrigin,
          'User-Agent': 'com.dragon.read',
          ...customHeaders
        },
        onload: (res) => {
          if (res.status >= 200 && res.status < 300) resolve(res.responseText || '');
          else reject(new Error('HTTP ' + res.status));
        },
        onerror: () => reject(new Error('网络错误')),
        ontimeout: () => reject(new Error('超时'))
      });
    });
  }

  function fmt(n) {
    const num = Number(n);
    if (!Number.isFinite(num) || num <= 0) return '0';
    if (num >= 10000) return Math.round(num / 10000) + '万';
    return String(Math.round(num));
  }

  function fmtDuration(seconds) {
    const s = Number(seconds);
    if (!s || s <= 0) return '-';
    const hours = Math.round(s / 3600);
    return `${hours}小时`;
  }

  const MALE_CATS = [
    { id: 'system', name: '⚡ 系统流' },
    { id: 257, name: '玄幻脑洞' }, { id: 258, name: '传统玄幻' }, { id: 539, name: '悬疑脑洞' },
    { id: 1014, name: '都市高武' }, { id: 261, name: '都市日常' }, { id: 262, name: '都市脑洞' },
    { id: 8, name: '科幻末世' }, { id: 1140, name: '东方仙侠' }, { id: 273, name: '历史古代' },
    { id: 1141, name: '西方奇幻' }, { id: 27, name: '战神赘婿' }, { id: 263, name: '都市种田' },
    { id: 124, name: '都市修真' }, { id: 272, name: '历史脑洞' }, { id: 751, name: '悬疑灵异' },
    { id: 504, name: '抗战谍战' }, { id: 746, name: '游戏体育' }, { id: 718, name: '动漫衍生' },
    { id: 1016, name: '男频衍生' }
  ];

  /* 官方独立片区 + 全网无限制全景聚合体系定义 */
  const MAIN_RANKS = [
    { type: 'all', name: '全榜大聚合', icon: '🌐', desc: '热门+完结+新书 官方片区汇聚 · 8大指标即时重排' },
    { type: 'serial', name: '热门榜', icon: '🔥', desc: '官方全网综合热度 Top 100' },
    { type: 'finish', name: '完结神作', icon: '🏆', desc: '全本完结口碑封神 Top 50' },
    { type: 'new', name: '起飞新书', icon: '🌱', desc: '黄金期起飞新作 Top 50' }
  ];

  /* 动态生成排序选项字典：原榜名称自适应当前主榜类型 */
  function getSortOptions() {
    let defaultLabel = '官方原榜';
    let defaultIcon = '⚡';
    if (currentMainRank === 'all') {
      defaultLabel = '综合原序';
      defaultIcon = '🌐';
    } else if (currentMainRank === 'serial') {
      defaultLabel = '热门原榜';
      defaultIcon = '🔥';
    } else if (currentMainRank === 'finish') {
      defaultLabel = '完结原榜';
      defaultIcon = '🏆';
    } else if (currentMainRank === 'new') {
      defaultLabel = '新书原榜';
      defaultIcon = '🌱';
    }

    return [
      { key: 'default', label: defaultLabel, icon: defaultIcon, field: 'originalRank', defaultOrder: 'asc' },
      { key: 'uv14', label: '14天阅读UV', icon: '👥', field: 'rawUv14', defaultOrder: 'desc' },
      { key: 'read30d', label: '30天总阅读', icon: '📈', field: 'rawRead30dSum', defaultOrder: 'desc' },
      { key: 'readAll', label: '历史总阅读', icon: '🌐', field: 'rawReadAll', defaultOrder: 'desc' },
      { key: 'shelf', label: '历史加书架', icon: '📌', field: 'rawHistoryShelf', defaultOrder: 'desc' },
      { key: 'listen30d', label: '30天听书UV', icon: '🎧', field: 'rawListen30d', defaultOrder: 'desc' },
      { key: 'duration', label: '听书总时长', icon: '⏱️', field: 'rawDuration', defaultOrder: 'desc' },
      { key: 'word', label: '全书总字数', icon: '📖', field: 'rawWordNum', defaultOrder: 'desc' },
      { key: 'score', label: '算法综合分', icon: '🏆', field: 'rawRankScore', defaultOrder: 'desc' }
    ];
  }

  let currentMainRank = 'all'; // 默认：全榜大聚合 ('all' | 'serial' | 'finish' | 'new')
  let currentActiveTab = 257; // 默认：玄幻脑洞
  let currentSortKey = 'default';
  let currentSortOrder = 'asc'; // default 默认按 1~100 升序；指标项默认降序
  let currentAll100Books = []; // 当前分类完整的真实去重小说数据
  let isFullLoaded = false;    // 是否已完整加载
  let isFetching100 = false;   // 是否正在拉取中
  const catCache = new Map();  // 内存极速缓存每个分类去重后的全部小说
  const ugcCache = new Map();  // UGC 评价字典缓存 (bookId -> { scoreCnt, commentCnt, officialContext })
  const pendingUgcIds = new Set(); // 防止重复拉取相同的 UGC

  let isSearchMode = false;
  let currentSearchKeyword = '';
  let currentSearchResults = [];

  function ensureMobileViewport() {
    let vp = document.querySelector('meta[name="viewport"]');
    if (!vp) {
      vp = document.createElement('meta');
      vp.name = 'viewport';
      document.head.appendChild(vp);
    }
    vp.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
  }

  /* 官方原生真实 UGC 评价网关（直接拉取番茄 APP 底层精准评分与书评） */
  async function fetchRealUgcInfo(bookId) {
    if (ugcCache.has(bookId)) return ugcCache.get(bookId);
    try {
      const u = 'https://fanqienovel.com/reading/ugc/novel_comment/book/v1?' + __fqsign.buildQuery({
        book_id: bookId,
        group_id: bookId,
        offset: '0',
        count: '1'
      });
      const headers = await __fqsign.genHeaders(u);
      const text = await gmGet(u, headers);
      if (text) {
        const j = JSON.parse(text);
        if (j.data) {
          const scoreCnt = Number(j.data.score_cnt || 0);
          const commentCnt = Number(j.data.comment_cnt || 0);
          const officialContext = j.data.context || '';
          const info = { scoreCnt, commentCnt, officialContext };
          ugcCache.set(bookId, info);
          return info;
        }
      }
    } catch(e) {}
    return null;
  }

  /* 动态异步 UGC 补全队列：专治“暂无点评 · 暂无书评”，优先补全当前排在前面的小说 */
  async function scheduleUgcFetch(bookIds) {
    if (!bookIds || !bookIds.length) return;
    const toFetch = bookIds.filter(id => !ugcCache.has(id) && !pendingUgcIds.has(id)).slice(0, 30);
    if (!toFetch.length) return;

    toFetch.forEach(id => pendingUgcIds.add(id));

    const batchSize = 3;
    for (let i = 0; i < toFetch.length; i += batchSize) {
      const batch = toFetch.slice(i, i + batchSize);
      await Promise.all(batch.map(async (bid) => {
        try {
          const info = await fetchRealUgcInfo(bid);
          if (info) {
            const ugcEl = document.getElementById(`fq-ugc-${bid}`);
            if (ugcEl) {
              const scText = info.officialContext || (info.scoreCnt > 0 ? `${fmt(info.scoreCnt)}人点评` : '暂无点评');
              const cmText = info.commentCnt > 0 ? `${fmt(info.commentCnt)}条书评` : '暂无书评';
              ugcEl.textContent = `(${scText} · ${cmText})`;
            }
          }
        } catch(e) {}
        pendingUgcIds.delete(bid);
      }));
      await new Promise(r => setTimeout(r, 120));
    }
  }

  /* 提取深度运营指标（以“万”为单位，返回原始数值供精确排序，增强 UGC 兜底） */
  function extractAllMetrics(d, raw, ugcInfo = null) {
    const score = d.score ? Number(d.score).toFixed(1) : (raw.score || '9.0');
    const readCount = d.read_count ? Number(d.read_count) : (raw.read_count ? Number(raw.read_count) : 0);
    const readText = fmt(readCount) + '人在读';

    // 1. 全书当前总字数
    const rawWordNum = d.word_number ? Number(d.word_number) : 0;
    const wordCount = rawWordNum > 0 ? `${Math.round(rawWordNum / 10000)}万字` : '暂无';
    const wordExact = rawWordNum > 0 ? `${rawWordNum.toLocaleString()} 字` : '暂无';

    // 2. 算法榜单综合分
    const rawRankScore = d.rule_rank_score ? Number(d.rule_rank_score) : 0;
    const rankScore = rawRankScore > 0 ? rawRankScore.toLocaleString() : '92,000';

    // 3. 全书听书音频总时长
    const rawDuration = d.duration ? Number(d.duration) : 0;
    const audioDuration = fmtDuration(rawDuration);

    // 4. 近 30 天听书用户数
    const rawListen30d = d.listen_uv_30day ? Number(d.listen_uv_30day) : (d.listen_count ? Number(d.listen_count) : 0);
    const listen30d = rawListen30d > 0 ? fmt(rawListen30d) : '-';

    // 5. 历史累计加书架总次数
    const rawHistoryShelf = d.shelf_cnt_history ? Number(d.shelf_cnt_history) : 0;
    const historyShelf = rawHistoryShelf > 0 ? fmt(rawHistoryShelf) : '暂无';

    // 6. 历史累计总阅读人次
    const rawReadAll = d.read_count_all ? Number(d.read_count_all) : (d.reader_uv_sum_daily ? Number(d.reader_uv_sum_daily) : 0);
    const readAll = rawReadAll > 0 ? fmt(rawReadAll) : '-';

    // 7. 近 30 天日均阅读人次汇总
    const rawRead30dSum = d.read_dcnt_30d ? Number(d.read_dcnt_30d) : 0;
    const read30dSum = rawRead30dSum > 0 ? fmt(rawRead30dSum) : '-';

    // 8. 近 14 天独立阅读用户数 (UV)
    const rawUv14 = d.reader_uv_14day ? Number(d.reader_uv_14day) : readCount;
    const uv14 = rawUv14 > 0 ? fmt(rawUv14) : fmt(readCount);

    // 辅助指标
    const quality = d.quality_rate ? `${d.quality_rate}分` : '60分';
    const rawTags = d.tags || raw.category || raw.categoryName || '';
    const tagsArr = rawTags.split(',').filter(Boolean);
    const tagsFormatted = tagsArr.join(', ') || '暂无标签';

    // UGC 评分与书评（优先使用精准网关，次选 multi-detail 原生字段，避免出现“暂无点评”）
    const rawScoreCnt = ugcInfo ? ugcInfo.scoreCnt : (d.score_cnt ? Number(d.score_cnt) : (raw.score_cnt ? Number(raw.score_cnt) : 0));
    const rawCommentCnt = ugcInfo ? ugcInfo.commentCnt : (d.comment_count ? Number(d.comment_count) : (d.comment_cnt ? Number(d.comment_cnt) : 0));
    const officialContext = (ugcInfo && ugcInfo.officialContext) ? ugcInfo.officialContext : (rawScoreCnt > 0 ? `${fmt(rawScoreCnt)}人点评` : (d.score ? '官方好评' : '暂无点评'));
    const commentCountText = (rawCommentCnt > 0) ? `${fmt(rawCommentCnt)}条书评` : (rawScoreCnt > 0 ? '热评中' : '暂无书评');

    return {
      score,
      readCount,
      readText,
      // 8 大精简核心指标（统一“万”单位，无截断）
      wordCount,
      wordExact,
      rankScore,
      audioDuration,
      listen30d,
      historyShelf,
      readAll,
      read30dSum,
      uv14,
      // 8 大指标原始纯数值（用于精确数字对比与重排序）
      rawWordNum,
      rawRankScore,
      rawDuration,
      rawListen30d,
      rawHistoryShelf,
      rawReadAll,
      rawRead30dSum,
      rawUv14,
      // 附加信息
      quality,
      tagsArr,
      tagsFormatted,
      officialContext,
      commentCountText,
      originAppLevel: d.origin_app_level ? d.origin_app_level + ' 级' : 'S 级'
    };
  }

  /* 批量并发拉取 multi-detail 详情字典 */
  async function fetchMultiDetails(bookIds) {
    if (!bookIds || !bookIds.length) return {};
    const deepMap = {};
    const chunkSize = 50;
    const chunks = [];
    for (let i = 0; i < bookIds.length; i += chunkSize) {
      chunks.push(bookIds.slice(i, i + chunkSize));
    }

    await Promise.all(chunks.map(async (chunk) => {
      try {
        const u = 'https://fanqienovel.com/reading/bookapi/multi-detail/v/?' + __fqsign.buildQuery({ book_id: chunk.join(',') });
        const headers = await __fqsign.genHeaders(u);
        const text = await gmGet(u, headers);
        if (text) {
          const j = JSON.parse(text);
          if (j.code === 0 && Array.isArray(j.data)) {
            for (const d of j.data) if (d && d.book_id) deepMap[String(d.book_id)] = d;
          }
        }
      } catch(e) {}
    }));

    return deepMap;
  }

  /* 稳健解析番茄排行榜 HTML 中的 book_list 数据（全兼容第 10 页 pos_category_id 与 has_more: false） */
  function parseBookListFromHtml(html) {
    if (!html) return [];
    // 宽泛匹配：匹配 book_list 直到下一个属性名
    let m = html.match(/"book_list":(\[[\s\S]*?\])\s*,\s*"[a-zA-Z0-9_]+":/);
    if (!m) {
      m = html.match(/"book_list":(\[[\s\S]*?\])/);
    }
    if (!m) return [];

    try {
      const cleanJson = m[1].replace(/:\s*undefined\b/g, ':null');
      const list = JSON.parse(cleanJson);
      if (Array.isArray(list)) return list;
    } catch(e) {
      try {
        const matches = [...m[1].matchAll(/\{[^{}]*"bookId"[^{}]*\}/g)];
        if (matches.length) {
          return matches.map(im => {
            try { return JSON.parse(im[0].replace(/:\s*undefined\b/g, ':null')); } catch(err) { return null; }
          }).filter(Boolean);
        }
      } catch(err2) {}
    }
    return [];
  }

/* 单页高速拉取官方书库指定片区书籍（支持连载/完结/新书/字数段，纯净官方 JSON，零 404，极速稳定） */
  async function fetchLibraryBooks(catId, { sort = 0, creationStatus = -1, wordCount = -1, pageIndex = 0, pageCount = 10 }) {
    const isSystemRank = (String(catId) === 'system');
    const catObj = MALE_CATS.find(c => String(c.id) === String(catId)) || MALE_CATS[1];
    const targetCatId = isSystemRank ? 19 : catObj.id;

    for (let r = 0; r <= 2; r++) {
      try {
        const libUrl = `https://fanqienovel.com/api/library/book_list?page_count=${pageCount}&page_index=${pageIndex}&gender=1&category_id=${targetCatId}&creation_status=${creationStatus}&word_count=${wordCount}&book_type=-1&sort=${sort}`;
        const resText = await gmGet(libUrl, { 'Referer': 'https://fanqienovel.com/library' });
        if (resText) {
          const j = JSON.parse(resText);
          const list = (j.data && j.data.book_list) || [];
          if (list.length > 0) {
            return list.map(b => ({
              bookId: String(b.book_id),
              bookName: b.book_name,
              author: b.author,
              thumbUri: b.thumb_url,
              abstract: b.abstract || ''
            }));
          }
        }
      } catch(e) {}
      if (r < 2) await new Promise(res => setTimeout(res, 180));
    }
    return [];
  }

  const poolCache = new Map(); // cidStr -> 全量多维小说池

  /* 动态将指定官方片区彻底拉满见底：根据官方数据流动态翻页，绝不人为设定固定数量限制！ */
  async function fetchRankFullSaturation(catId, { sort = 0, creationStatus = -1, wordCount = -1 }, maxPages = 15) {
    const fullList = [];
    let page = 0;

    while (page < maxPages) {
      // 每次以 2 页小并发拉取，既快速又绝不堵塞网络
      const p1 = page;
      const p2 = page + 1;
      const res = await Promise.all([
        fetchLibraryBooks(catId, { sort, creationStatus, wordCount, pageIndex: p1, pageCount: 10 }),
        fetchLibraryBooks(catId, { sort, creationStatus, wordCount, pageIndex: p2, pageCount: 10 })
      ]);

      const l1 = res[0] || [];
      const l2 = res[1] || [];

      if (!l1.length && !l2.length) {
        break; // 官方数据已见底，彻底拉满！
      }

      l1.forEach(b => fullList.push(b));
      l2.forEach(b => fullList.push(b));

      if (l1.length < 10 || l2.length < 10) {
        break; // 最后一页不足额，官方已无更多数据，彻底拉满！
      }

      page += 2;
      await new Promise(r => setTimeout(r, 60));
    }

    return fullList;
  }

  /* 核心：将官方 4 大独立片区每一个都彻底拉满，去重汇聚成无数量限制的真正全网全景大池 */
  async function buildCategoryFullPool(container, catId) {
    const cidStr = String(catId);
    if (poolCache.has(cidStr)) {
      return poolCache.get(cidStr);
    }

    updateSortStatusBar(container, '🔄 载入首屏...');

    // 阶段 ①：0.3 秒首屏秒开！先拉前 10 本上屏，杜绝任何白屏等待
    const p0Raw = await fetchLibraryBooks(catId, { sort: 0, creationStatus: -1, pageIndex: 0, pageCount: 10 });
    const p0Ids = p0Raw.map(b => b.bookId).filter(Boolean);

    const [p0DeepMap, p0UgcList] = await Promise.all([
      fetchMultiDetails(p0Ids),
      Promise.all(p0Ids.map(id => fetchRealUgcInfo(id)))
    ]);

    const initial10 = p0Ids.map((bid, idx) => {
      const raw = p0Raw[idx] || {};
      const d = p0DeepMap[bid] || {};
      const cleanAbstract = d.abstract || d.book_abstract_v2 || raw.abstract || '';
      const ugcInfo = p0UgcList[idx] || null;
      const metrics = extractAllMetrics(d, raw, ugcInfo);
      const currentName = (d.book_name || raw.bookName || '').trim();
      const origName = (d.original_book_name || raw.bookName || '').trim();
      const hasDiff = (origName && origName !== currentName);

      const isFinished = (d.creation_status === 2 || d.serialize_status === 2 || String(d.creation_status) === '2' || (d.creation_status_desc && d.creation_status_desc.includes('完结')));
      const badges = [];
      if (isFinished) badges.push({ text: '🏆完结神作', bg: '#f6ffed', color: '#52c41a', border: '#b7eb8f' });
      else badges.push({ text: `🔥连载#${idx + 1}`, bg: '#fff2e8', color: '#ff5722', border: '#ffbb96' });
      if (metrics.readCount >= 500000) badges.push({ text: `📖${fmt(metrics.readCount)}在读`, bg: '#e6f7ff', color: '#1890ff', border: '#91d5ff' });

      return {
        originalRank: idx + 1,
        bookId: bid,
        raw, deep: d, metrics, currentName, origName, hasDiff, name: currentName,
        readCount: metrics.readCount,
        author: d.author || raw.author || '佚名',
        category: d.category || '小说',
        thumb: d.thumb_url || raw.thumbUri || '//p1-tt.byteimg.com/origin/novel-static/5cb03bd354145bc7815a5e09d4b15cfc',
        realAbstract: cleanAbstract,
        rankBadges: badges
      };
    });

    currentAll100Books = initial10;
    renderSortBar(container);
    applySortAndRender(container);

    // 阶段 ②：解除任何固定数量限制！4 大官方片区每一个都彻底动态拉满见底！
    updateSortStatusBar(container, '🔄 连载中...');
    const rawSerial = await fetchRankFullSaturation(catId, { sort: 0, creationStatus: 0 }, 15);

    updateSortStatusBar(container, '🔄 完结中...');
    const rawFinish = await fetchRankFullSaturation(catId, { sort: 0, creationStatus: 1 }, 15);

    updateSortStatusBar(container, '🔄 新书中...');
    const rawNew = await fetchRankFullSaturation(catId, { sort: 0, creationStatus: 0, wordCount: 2 }, 10);

    updateSortStatusBar(container, '🔄 巨著中...');
    const rawLong = await fetchRankFullSaturation(catId, { sort: 0, wordCount: 5 }, 10);

    // 建立 4 大片区官方原生真实排名映射字典
    const ranksDict = new Map(); // bid -> { serial: r1, finish: r2, new: r3, long: r4 }

    const registerRanks = (list, rankKey) => {
      const seenKey = new Set();
      let rankIdx = 0;
      list.forEach(b => {
        const bid = String(b.bookId).trim();
        if (bid && !seenKey.has(bid)) {
          seenKey.add(bid);
          rankIdx++;
          if (!ranksDict.has(bid)) ranksDict.set(bid, {});
          ranksDict.get(bid)[rankKey] = rankIdx;
        }
      });
    };

    registerRanks(rawSerial, 'serial');
    registerRanks(rawFinish, 'finish');
    registerRanks(rawNew, 'new');
    registerRanks(rawLong, 'long');

    // 汇聚全部上榜书籍，全局严格按 bookId 去重（完全不设任何数量截断，真实去重有多少就保留多少！）
    const allSeenBids = new Set();
    const allUniqueRaw = [];

    [...rawSerial, ...rawFinish, ...rawNew, ...rawLong].forEach(b => {
      const bid = String(b.bookId).trim();
      if (bid && !allSeenBids.has(bid)) {
        allSeenBids.add(bid);
        allUniqueRaw.push(b);
      }
    });

    updateSortStatusBar(container, `🔄 解析中(${allUniqueRaw.length}本)...`);

    // 批量查剩余书籍的 multi-detail（分批 50 个一组安全并发）
    const allBids = allUniqueRaw.map(b => b.bookId);
    const remainBids = allBids.slice(10);
    const remainDeepMap = await fetchMultiDetails(remainBids);
    const fullDeepMap = { ...p0DeepMap, ...remainDeepMap };

    // 组装完整的全量图书池模型
    const fullPoolMap = new Map();

    allUniqueRaw.forEach((raw) => {
      const bid = raw.bookId;
      const d = fullDeepMap[bid] || {};
      const cleanAbstract = d.abstract || d.book_abstract_v2 || raw.abstract || '';
      const ugcInfo = ugcCache.get(bid) || null;
      const metrics = extractAllMetrics(d, raw, ugcInfo);
      const currentName = (d.book_name || raw.bookName || '').trim();
      const origName = (d.original_book_name || raw.bookName || '').trim();
      const hasDiff = (origName && origName !== currentName);
      const isFinished = (d.creation_status === 2 || d.serialize_status === 2 || String(d.creation_status) === '2' || (d.creation_status_desc && d.creation_status_desc.includes('完结')));

      // 生成真实的官方多榜上榜战绩勋章
      const rks = ranksDict.get(bid) || {};
      const badges = [];
      if (rks.serial) badges.push({ text: `🔥连载#${rks.serial}`, bg: '#fff2e8', color: '#ff5722', border: '#ffbb96' });
      if (rks.finish) badges.push({ text: `🏆完结#${rks.finish}`, bg: '#f6ffed', color: '#52c41a', border: '#b7eb8f' });
      if (rks.new)    badges.push({ text: `🌱新书#${rks.new}`, bg: '#e6f7ff', color: '#1890ff', border: '#91d5ff' });
      if (rks.long)   badges.push({ text: `📖巨著#${rks.long}`, bg: '#fff7e6', color: '#fa8c16', border: '#ffd591' });

      fullPoolMap.set(bid, {
        originalRank: 1,
        bookId: bid,
        raw, deep: d, metrics, currentName, origName, hasDiff, name: currentName,
        readCount: metrics.readCount,
        author: d.author || raw.author || '佚名',
        category: d.category || '小说',
        thumb: d.thumb_url || raw.thumbUri || '//p1-tt.byteimg.com/origin/novel-static/5cb03bd354145bc7815a5e09d4b15cfc',
        realAbstract: cleanAbstract,
        rankBadges: badges,
        isFinished,
        ranks: rks
      });
    });

    // 派生各个具体榜单（每一个单榜彻底解除数量限制，拉满多少本就呈现多少本！）：
    const serialList = [];
    const seenS = new Set();
    rawSerial.forEach(b => {
      if (!seenS.has(b.bookId) && fullPoolMap.has(b.bookId)) {
        seenS.add(b.bookId);
        serialList.push(fullPoolMap.get(b.bookId));
      }
    });

    const finishList = [];
    const seenF = new Set();
    rawFinish.forEach(b => {
      if (!seenF.has(b.bookId) && fullPoolMap.has(b.bookId)) {
        seenF.add(b.bookId);
        finishList.push(fullPoolMap.get(b.bookId));
      }
    });

    const newList = [];
    const seenN = new Set();
    rawNew.forEach(b => {
      if (!seenN.has(b.bookId) && fullPoolMap.has(b.bookId)) {
        seenN.add(b.bookId);
        newList.push(fullPoolMap.get(b.bookId));
      }
    });

    const longList = [];
    const seenL = new Set();
    rawLong.forEach(b => {
      if (!seenL.has(b.bookId) && fullPoolMap.has(b.bookId)) {
        seenL.add(b.bookId);
        longList.push(fullPoolMap.get(b.bookId));
      }
    });

    // 🌟【全榜大聚合】：去重汇聚全部上榜作品（绝不设任何数量限制，全部完整呈现，通常 300~500+ 本！）
    const aggregatedList = Array.from(fullPoolMap.values());

    const result = {
      serialList: serialList,
      finishList: finishList,
      newList: newList,
      longList: longList,
      aggregatedList: aggregatedList // 无数量限制全量！
    };

    poolCache.set(cidStr, result);
    return result;
  }

  /* 统一主榜数据调度：每个榜单拉满呈现，原榜名次严格绑定真实次序 1 到 N */
  async function loadCurrentRankData(container, catId) {
    let listWrap = document.getElementById('fq-rank-list-wrap');
    if (!listWrap) {
      listWrap = document.createElement('div');
      listWrap.id = 'fq-rank-list-wrap';
      container.appendChild(listWrap);
    }

    const pool = await buildCategoryFullPool(container, catId);
    if (!pool) return;

    let targetBooks = [];

    if (currentMainRank === 'all') {
      // 全榜大聚合：无数量限制全量呈现！
      targetBooks = pool.aggregatedList.map((b, idx) => ({ ...b, originalRank: idx + 1 }));
    } else if (currentMainRank === 'serial') {
      targetBooks = pool.serialList.map((b, idx) => ({ ...b, originalRank: idx + 1 }));
    } else if (currentMainRank === 'finish') {
      targetBooks = pool.finishList.map((b, idx) => ({ ...b, originalRank: idx + 1 }));
    } else if (currentMainRank === 'new') {
      targetBooks = pool.newList.map((b, idx) => ({ ...b, originalRank: idx + 1 }));
    } else if (currentMainRank === 'long') {
      targetBooks = pool.longList.map((b, idx) => ({ ...b, originalRank: idx + 1 }));
    }

    currentAll100Books = targetBooks;
    isFullLoaded = true;
    isFetching100 = false;

    renderSortBar(container);
    applySortAndRender(container);
  }

  /* 顶部导航头/* 顶部导航头/* 顶部导航头/* 顶部导航头（含全网搜索栏 + 分类药丸条） */
  function ensureTopNavWrapper(container) {
    let wrapper = document.getElementById('fq-top-nav-wrapper');
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.id = 'fq-top-nav-wrapper';
      wrapper.style.cssText = `
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 9999;
        margin: -12px -10px 10px -10px;
        padding: 10px 10px 2px 10px;
        background: rgba(247, 247, 248, 0.96);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        transition: transform 0.26s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.26s ease;
        will-change: transform;
      `;
      // 插入在最前面
      if (container.firstChild) {
        container.insertBefore(wrapper, container.firstChild);
      } else {
        container.appendChild(wrapper);
      }
    }
    return wrapper;
  }

  function renderHeader(container) {
    const navWrapper = ensureTopNavWrapper(container);
    let header = document.getElementById('fq-rank-header');
    if (!header) {
      header = document.createElement('div');
      header.id = 'fq-rank-header';
      navWrapper.appendChild(header);
    }

    const curMainRankObj = MAIN_RANKS.find(r => r.type === currentMainRank) || MAIN_RANKS[0];
    const isSys = (String(currentActiveTab) === 'system');
    const catObj = MALE_CATS.find(c => String(c.id) === String(currentActiveTab)) || MALE_CATS[1];
    const catTitle = isSys ? '系统流' : catObj.name;
    const rankTitle = `男频 · ${catTitle} · ${curMainRankObj.name}`;

    header.innerHTML = `
      <div style="background: #ffffff; border-radius: 12px; padding: 14px 16px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
        
        <!-- 🌟 4 大核心主榜分段切换器（热门榜、阅读榜、高分榜、催更榜） -->
        <div style="
          display: flex; gap: 7px; overflow-x: auto; padding: 2px 2px 8px 2px;
          -webkit-overflow-scrolling: touch; scrollbar-width: none; margin-bottom: 10px;
        ">
          ${MAIN_RANKS.map(rk => {
            const isAct = (String(currentMainRank) === String(rk.type));
            return `
              <button class="fq-main-rank-tab-btn" data-rtype="${rk.type}" style="
                flex-shrink: 0; white-space: nowrap; border: none; cursor: pointer; padding: 6px 13px; border-radius: 18px; font-size: 13px;
                background: ${isAct ? 'linear-gradient(135deg, #ff5722, #ff8c00)' : '#f4f4f5'};
                color: ${isAct ? '#ffffff' : '#595959'};
                font-weight: ${isAct ? '800' : '500'};
                box-shadow: ${isAct ? '0 2px 6px rgba(255,87,34,0.3)' : 'none'};
                display: flex; align-items: center; justify-content: center; gap: 4px;
                transition: all 0.2s ease; -webkit-tap-highlight-color: transparent;
              ">
                <span>${rk.icon}</span>
                <span>${rk.name}</span>
              </button>
            `;
          }).join('')}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
          <div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span id="fq-rank-title-text" style="font-weight: 800; font-size: 17px; color: #1a1a1a;">${rankTitle}</span>
              <span id="fq-version-badge" style="font-size: 11px; color: #ffffff; background: #ff5722; padding: 2px 7px; border-radius: 10px; font-weight: 800; box-shadow: 0 2px 6px rgba(255,87,34,0.35);">v36.2.1</span>
              <span style="font-size:11px; color:#ff5722; background:#fff2e8; border:1px solid #ffbb96; padding:1px 6px; border-radius:4px; font-weight:bold;">${curMainRankObj.name}</span>
            </div>
            <div id="fq-rank-sub-text" style="font-size: 12px; color: #8c8c8c; margin-top: 3px;">
              ${curMainRankObj.desc} · 点击小说在新标签页打开
            </div>
          </div>
        </div>

        <!-- 🔍 全网实时搜索栏（支持书名或作者） -->
        <div style="margin: 8px 0 12px 0; display: flex; align-items: center; gap: 8px;">
          <div style="flex-grow: 1; position: relative; display: flex; align-items: center;">
            <span style="position: absolute; left: 12px; font-size: 14px; color: #999; pointer-events: none;">🔍</span>
            <input type="text" id="fq-search-input" placeholder="输入书名或作者搜索..." value="${currentSearchKeyword}" style="
              width: 100%; box-sizing: border-box; height: 38px; padding: 0 32px 0 36px;
              border: 1px solid #e2e8f0; border-radius: 19px; background: #f8fafc; font-size: 13.5px;
              color: #333; outline: none; -webkit-appearance: none;
            " />
            <span id="fq-search-clear" style="position: absolute; right: 12px; font-size: 14px; color: #bbb; cursor: pointer; display: ${currentSearchKeyword ? 'block' : 'none'}; padding: 4px;">✕</span>
          </div>
          <button id="fq-search-btn" style="
            height: 38px; padding: 0 16px; border-radius: 19px; border: none;
            background: linear-gradient(135deg, #ff6533, #ff4500); color: #fff; font-size: 13.5px; font-weight: bold;
            cursor: pointer; flex-shrink: 0; box-shadow: 0 2px 6px rgba(255,101,51,0.25);
          ">搜索</button>
        </div>

        <!-- 药丸分类条（含【⚡ 系统流】专属高亮徽章） -->
        <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; -webkit-overflow-scrolling: touch; scrollbar-width: none;">
          ${MALE_CATS.map(c => {
            const isAct = (!isSearchMode && String(currentActiveTab) === String(c.id));
            const isSysPill = (String(c.id) === 'system');
            return `
              <button class="fq-cat-nav-btn" data-cid="${c.id}" style="
                flex-shrink: 0; border: none; cursor: pointer; padding: 6px 13px; border-radius: 20px; font-size: 12.5px;
                background: ${isAct ? (isSysPill ? 'linear-gradient(135deg, #ff4500, #ff8c00)' : '#ff6533') : (isSysPill ? '#fff1eb' : '#f4f4f5')};
                color: ${isAct ? '#ffffff' : (isSysPill ? '#ff5722' : '#595959')};
                font-weight: ${(isAct || isSysPill) ? 'bold' : 'normal'};
                border: ${isSysPill && !isAct ? '1px solid #ffd8cc' : 'none'};
                box-shadow: ${isAct && isSysPill ? '0 2px 6px rgba(255,69,0,0.35)' : 'none'};
              ">${c.name}</button>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // 绑定 4 大主榜及全榜聚合切换事件
    header.querySelectorAll('.fq-main-rank-tab-btn').forEach(btn => {
      btn.onclick = () => {
        const rtype = btn.getAttribute('data-rtype');
        if (rtype && currentMainRank !== rtype) {
          currentMainRank = rtype;
          currentSortKey = 'default';
          currentSortOrder = 'asc';
          renderHeader(container);
          loadCurrentRankData(container, currentActiveTab);
        }
      };
    });

    header.querySelectorAll('.fq-cat-nav-btn').forEach(btn => {
      btn.onclick = () => {
        const cid = btn.getAttribute('data-cid');
        if (isSearchMode || String(cid) !== String(currentActiveTab)) {
          switchCategory(container, cid);
        }
      };
    });

    // 绑定搜索输入框与搜索按钮事件（回车与点击均触发）
    const searchInput = header.querySelector('#fq-search-input');
    const searchBtn = header.querySelector('#fq-search-btn');
    const searchClear = header.querySelector('#fq-search-clear');

    if (searchBtn && searchInput) {
      const triggerSearch = () => {
        const val = (searchInput.value || '').trim();
        if (val) {
          executeSearch(container, val);
        }
      };

      searchBtn.onclick = triggerSearch;

      searchInput.onkeydown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          triggerSearch();
        }
      };

      searchInput.oninput = () => {
        if (searchClear) {
          searchClear.style.display = searchInput.value ? 'block' : 'none';
        }
      };
    }

    if (searchClear && searchInput) {
      searchClear.onclick = () => {
        searchInput.value = '';
        searchClear.style.display = 'none';
        if (isSearchMode) {
          isSearchMode = false;
          currentSearchKeyword = '';
          switchCategory(container, currentActiveTab);
        }
      };
    }
  }

  /* 辅助：动态更新排序栏状态文本 */
  let currentStatusText = '';
  function updateSortStatusBar(container, text) {
    currentStatusText = text;
    const tag = document.getElementById('fq-sort-status-tag');
    if (tag) tag.textContent = text;
  }

  /* 核心：渲染 100 本多维排序面板（根据 8 大指标随时重排） */
  function renderSortBar(container) {
    let sortBar = document.getElementById('fq-sort-bar-card');
    if (!sortBar) {
      sortBar = document.createElement('div');
      sortBar.id = 'fq-sort-bar-card';
      const header = document.getElementById('fq-rank-header');
      if (header && header.nextSibling) {
        container.insertBefore(sortBar, header.nextSibling);
      } else {
        container.appendChild(sortBar);
      }
    }

    const sortOpts = getSortOptions();
    const curOpt = sortOpts.find(o => o.key === currentSortKey) || sortOpts[0];
    
    // 右侧提示文案精简化（去掉冗长词汇，杜绝挤压）
    const tipText = (currentSortKey === 'default')
      ? (currentMainRank === 'all' ? '综合热度序' : `${curOpt.label}序`)
      : `${curOpt.label} · ${currentSortOrder === 'desc' ? '降序↓' : '升序↑'}`;

    const totalCount = currentAll100Books.length;
    // 状态文案极简化（杜绝被中间截断）
    const statusText = isFullLoaded 
      ? (currentMainRank === 'all' ? `✅ 聚合 ${totalCount} 本` : `✅ 满载 ${totalCount} 本`) 
      : (isFetching100 ? `${currentStatusText || '🔄 载入中...'}` : `${totalCount}本`);

    sortBar.innerHTML = `
      <div style="background: #ffffff; border-radius: 12px; padding: 10px 14px; margin-bottom: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
        <!-- 弹性两端布局：彻底解决小屏手机横向空间拥挤导致的截断问题 -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 5px; flex-shrink: 0; min-width: 0;">
            <span style="font-weight: 800; font-size: 13px; color: #1a1a1a; white-space: nowrap;">📊 多维排序</span>
            <span id="fq-sort-status-tag" style="
              font-size: 11px; padding: 2px 7px; border-radius: 10px; font-weight: bold; white-space: nowrap;
              ${isFullLoaded ? 'color:#52c41a; background:#f6ffed; border:1px solid #b7eb8f;' : 'color:#fa8c16; background:#fffbe6; border:1px solid #ffe58f;'}
            ">${statusText}</span>
          </div>
          <div id="fq-sort-cur-tip" style="
            font-size: 11.5px; color: #ff6533; font-weight: bold; white-space: nowrap; flex-shrink: 0;
          ">
            ${tipText}
          </div>
        </div>

        <!-- 横向滑动排序维度药丸按钮组（原榜名称自适应） -->
        <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 2px; -webkit-overflow-scrolling: touch; scrollbar-width: none;">
          ${sortOpts.map(opt => {
            const isAct = (currentSortKey === opt.key);
            const arrow = isAct ? (currentSortOrder === 'desc' ? ' ↓' : ' ↑') : '';
            return `
              <button class="fq-sort-pill-btn" data-skey="${opt.key}" style="
                flex-shrink: 0; border: ${isAct ? 'none' : '1px solid #e8e8e8'}; cursor: pointer; padding: 5px 11px; border-radius: 16px; font-size: 12px;
                background: ${isAct ? 'linear-gradient(135deg, #ff5722, #ff8c00)' : '#f9f9fa'};
                color: ${isAct ? '#ffffff' : '#595959'};
                font-weight: ${isAct ? 'bold' : 'normal'};
                box-shadow: ${isAct ? '0 2px 6px rgba(255,87,34,0.3)' : 'none'};
                display: flex; align-items: center; gap: 3px;
              ">
                <span>${opt.icon}</span>
                <span>${opt.label}${arrow}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;

    sortBar.querySelectorAll('.fq-sort-pill-btn').forEach(btn => {
      btn.onclick = () => {
        const skey = btn.getAttribute('data-skey');
        if (currentSortKey === skey) {
          if (skey !== 'default') {
            currentSortOrder = (currentSortOrder === 'desc' ? 'asc' : 'desc');
          }
        } else {
          currentSortKey = skey;
          const opt = getSortOptions().find(o => o.key === skey);
          currentSortOrder = opt ? opt.defaultOrder : 'desc';
        }
        renderSortBar(container);
        applySortAndRender(container);
      };
    });
  }

  /* 核心：执行排序并更新卡片列表（附带排名前 30 本的 UGC 异步精准补全） */
  function applySortAndRender(container) {
    let listWrap = document.getElementById('fq-rank-list-wrap');
    if (!listWrap) {
      listWrap = document.createElement('div');
      listWrap.id = 'fq-rank-list-wrap';
      container.appendChild(listWrap);
    }

    let booksToSort = isSearchMode ? currentSearchResults : currentAll100Books;
    if (!booksToSort || !booksToSort.length) return;

    let sortedList = [...booksToSort];
    if (currentSortKey === 'default') {
      sortedList.sort((a, b) => {
        return currentSortOrder === 'asc' ? (a.originalRank - b.originalRank) : (b.originalRank - a.originalRank);
      });
    } else {
      const opt = getSortOptions().find(o => o.key === currentSortKey);
      if (opt && opt.field) {
        const f = opt.field;
        sortedList.sort((a, b) => {
          const valA = (a.metrics && a.metrics[f]) ? Number(a.metrics[f]) : 0;
          const valB = (b.metrics && b.metrics[f]) ? Number(b.metrics[f]) : 0;
          return currentSortOrder === 'desc' ? (valB - valA) : (valA - valB);
        });
      }
    }

    let html = '';
    sortedList.forEach((item, idx) => {
      html += generateCardHtml(item, idx + 1, currentSortKey);
    });
    listWrap.innerHTML = html;

    // 自动为当前排名前 30 本的小说平滑触发精准 UGC 补全，消灭“暂无点评 · 暂无书评”
    const topIds = sortedList.slice(0, 30).map(b => b.bookId);
    scheduleUgcFetch(topIds);

    // 底部状态提示
    let bottomTip = document.getElementById('fq-rank-bottom-tip');
    if (!bottomTip) {
      bottomTip = document.createElement('div');
      bottomTip.id = 'fq-rank-bottom-tip';
      bottomTip.style.cssText = 'text-align:center; padding:16px 10px 40px; font-size:12.5px; color:#8c8c8c; font-weight:bold;';
      container.appendChild(bottomTip);
    }

    if (isSearchMode) {
      bottomTip.innerHTML = `已展示全部 ${sortedList.length} 本搜索结果`;
    } else if (isFullLoaded) {
      bottomTip.innerHTML = `🎉 已全量呈现该分类全部 ${sortedList.length} 本小说（已去重，支持点击上方指标任意重排序）`;
    } else {
      bottomTip.innerHTML = `🔄 正在后台秒级拉取其余作品（已呈现 ${currentAll100Books.length}/100 本）…`;
    }
  }

  /* 生成单张书籍卡片的 HTML（核心：双书名直观展示 + 当前排序指标单元格高亮 + 原榜名次微标 + 独立 UGC 挂载点） */
  function generateCardHtml(item, rankPos, activeSortKey = 'default') {
    const bid = item.bookId;
    const m = item.metrics;

    let rankColor = '#8c8c8c';
    let rankBg = '#f0f0f0';
    if (rankPos === 1) { rankColor = '#ffffff'; rankBg = 'linear-gradient(135deg, #ff4d4f, #ff7875)'; }
    else if (rankPos === 2) { rankColor = '#ffffff'; rankBg = 'linear-gradient(135deg, #ff7a45, #ffa940)'; }
    else if (rankPos === 3) { rankColor = '#ffffff'; rankBg = 'linear-gradient(135deg, #faad14, #ffc53d)'; }

    const cleanAbstract = (item.realAbstract || '').replace(/[\r\n\t]+/g, ' ').trim();

    // 单元格高亮辅助：当前排序维度的指标单元格显示温暖高亮底色
    const getCellHighlight = (key) => {
      if (activeSortKey === key) {
        return 'background: #fff2e8; border: 1px solid #ffbb96; border-radius: 6px; padding: 2px 6px; margin: -2px -6px; box-shadow: 0 1px 4px rgba(255,101,51,0.15);';
      }
      return '';
    };

    return `
      <div class="fq-book-card-item" style="background: #ffffff; border-radius: 12px; padding: 14px; margin-bottom: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
        <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 10px;">
          <!-- 封面（在新标签页打开） -->
          <div style="position: relative; flex-shrink: 0; width: 72px; height: 98px;">
            <a href="/page/${bid}" target="_blank" rel="noopener noreferrer">
              <img src="${item.thumb}" style="width: 100%; height: 100%; border-radius: 6px; object-fit: cover; border: 1px solid #f0f0f0; display: block;" />
            </a>
            <div style="
              position: absolute; top: 0; left: 0; background: ${rankBg}; color: ${rankColor};
              font-size: 11px; font-weight: 800; padding: 2px 6px; border-radius: 6px 0 6px 0; box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
            ">
              ${rankPos < 10 ? '0' + rankPos : rankPos}
            </div>
          </div>

          <!-- 双书名区域（直接两个书名并列，去除了冗余的“原名”文案，点击统一在新标签页打开） -->
          <div style="flex-grow: 1; min-width: 0;">
            <div style="margin-bottom: 4px;">
              <a href="/page/${bid}" target="_blank" rel="noopener noreferrer" style="
                text-decoration: none; line-height: 1.35; word-break: break-word; display: block;
              ">
                <div style="font-size: 16px; font-weight: bold; color: #1a1a1a;">
                  ${item.currentName}
                </div>
                ${item.hasDiff ? `
                  <div style="font-size: 13px; font-weight: 600; color: #ff6533; margin-top: 3px; line-height: 1.4; word-break: break-all;">
                    《${item.origName}》
                  </div>
                ` : ''}
              </a>
            </div>
            ${(item.rankBadges && item.rankBadges.length > 0) ? `
              <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 6px;">
                ${item.rankBadges.map(bg => `
                  <span style="
                    font-size: 10.5px; font-weight: bold; padding: 1px 5px; border-radius: 4px;
                    background: ${bg.bg}; color: ${bg.color}; border: 1px solid ${bg.border};
                  ">${bg.text}</span>
                `).join('')}
              </div>
            ` : ''}
            <div style="font-size: 12px; color: #8c8c8c; display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-bottom: 6px;">
              <span style="color: #434343; font-weight: 500;">${item.author}</span>
              <span>·</span>
              <span style="color: #262626; background: #f5f5f5; padding: 1px 6px; border-radius: 3px; font-size: 11px;">${item.category}</span>
              ${(item.originalRank && activeSortKey !== 'default') ? `
                <span style="background: #f2f3f5; color: #8c8c8c; font-size: 10.5px; padding: 1px 5px; border-radius: 3px; font-weight: 500;">原榜#${item.originalRank}</span>
              ` : ''}
            </div>
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span style="font-size: 13px; font-weight: 800; color: #ff6533;">🔥 ${m.readText}</span>
              <span style="font-size: 12px; font-weight: bold; color: #fa8c16;">⭐ ★ ${m.score}</span>
              <span id="fq-ugc-${bid}" style="font-size: 11px; color: #8c8c8c;">(${m.officialContext} · ${m.commentCountText})</span>
            </div>
          </div>
        </div>

        <!-- 8 大深度运营指标（以万为单位，彻底去除打点截断，对称 4 行 × 2 列） -->
        <div style="
          background: #fafafb; border: 1px solid #f0f0f2; border-radius: 8px; padding: 8px 10px;
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px 12px; font-size: 11.5px; color: #595959; margin: 8px 0;
        ">
          <!-- 1. 近 14 天独立阅读用户数 (UV) -->
          <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ${getCellHighlight('uv14')}">
            👥 14天阅读UV：<strong style="color: #ff6533; ${activeSortKey === 'uv14' ? 'font-size: 12.5px; font-weight: 800;' : ''}">${m.uv14}</strong>
          </div>

          <!-- 2. 近 30 天阅读汇总 -->
          <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ${getCellHighlight('read30d')}">
            📈 30天总阅读：<strong style="color: #ff7043; ${activeSortKey === 'read30d' ? 'font-size: 12.5px; font-weight: 800;' : ''}">${m.read30dSum}</strong>
          </div>

          <!-- 3. 历史累计总阅读人次 -->
          <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ${getCellHighlight('readAll')}">
            🌐 历史总阅读：<strong style="color: #e65100; ${activeSortKey === 'readAll' ? 'font-size: 12.5px; font-weight: 800;' : ''}">${m.readAll}</strong>
          </div>

          <!-- 4. 历史累计加书架总次数 -->
          <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ${getCellHighlight('shelf')}">
            📌 历史加书架：<strong style="color: #475569; ${activeSortKey === 'shelf' ? 'font-size: 12.5px; font-weight: 800;' : ''}">${m.historyShelf}</strong>
          </div>

          <!-- 5. 近 30 天听书用户数 -->
          <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ${getCellHighlight('listen30d')}">
            🎧 30天听书UV：<strong style="color: #722ed1; ${activeSortKey === 'listen30d' ? 'font-size: 12.5px; font-weight: 800;' : ''}">${m.listen30d}</strong>
          </div>

          <!-- 6. 全书 AI/真人听书音频总时长 -->
          <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ${getCellHighlight('duration')}">
            ⏱️ 听书总时长：<strong style="color: #5c6bc0; ${activeSortKey === 'duration' ? 'font-size: 12.5px; font-weight: 800;' : ''}">${m.audioDuration}</strong>
          </div>

          <!-- 7. 全书当前总字数 -->
          <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ${getCellHighlight('word')}">
            📖 全书总字数：<strong style="color: #0284c7; ${activeSortKey === 'word' ? 'font-size: 12.5px; font-weight: 800;' : ''}">${m.wordCount}</strong>
          </div>

          <!-- 8. 算法榜单综合分 -->
          <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ${getCellHighlight('score')}">
            🏆 算法综合分：<strong style="color: #1890ff; ${activeSortKey === 'score' ? 'font-size: 12.5px; font-weight: 800;' : ''}">${m.rankScore}</strong>
          </div>
        </div>

        <div style="margin-bottom: 8px; font-size: 11px; color: #8c8c8c; line-height: 1.5; word-break: break-all;">
          🏷️ <strong>全套标签：</strong><span style="color: #555;">${m.tagsFormatted}</span>
        </div>

        ${cleanAbstract ? `
          <div style="
            font-size: 12px; color: #666; line-height: 1.6;
            display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
            background: #fff; padding-top: 6px; border-top: 1px dashed #f0f0f0; cursor: pointer;
            word-break: break-all;
          " title="点击展开/收起完整简介" onclick="this.style.webkitLineClamp = (this.style.webkitLineClamp === 'unset' ? '3' : 'unset'); this.style.display = (this.style.webkitLineClamp === 'unset' ? 'block' : '-webkit-box');">
            ${cleanAbstract}
          </div>
        ` : ''}
      </div>
    `;
  }

  
  /* 智能手势吸顶监听引擎：向下滑动（手指向下滑动/回看）时顺滑浮现顶部栏，向上划看书时自动收起留足屏幕 */
  function attachSmartHeaderScroll() {
    if (window.__fqSmartScrollAttached) return;
    window.__fqSmartScrollAttached = true;

    // 创建右下角悬浮平滑回顶球
    let topBtn = document.getElementById('fq-back-to-top-btn');
    if (!topBtn) {
      topBtn = document.createElement('div');
      topBtn.id = 'fq-back-to-top-btn';
      topBtn.style.cssText = `
        position: fixed; right: 16px; bottom: 26px; z-index: 10000;
        width: 44px; height: 44px; border-radius: 50%;
        background: rgba(255, 255, 255, 0.95);
        border: 1px solid #ffd8cc;
        box-shadow: 0 4px 14px rgba(255, 87, 34, 0.28);
        display: flex; align-items: center; justify-content: center;
        font-size: 19px; cursor: pointer; opacity: 0; pointer-events: none;
        transition: opacity 0.25s ease, transform 0.25s ease;
        backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
        user-select: none; -webkit-tap-highlight-color: transparent;
      `;
      topBtn.innerHTML = '🔝';
      document.body.appendChild(topBtn);

      topBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const wrapper = document.getElementById('fq-top-nav-wrapper');
        if (wrapper) {
          wrapper.style.transform = 'translateY(0)';
          wrapper.style.boxShadow = 'none';
        }
      };
    }

    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    let isHeaderVisible = true;

    const onScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const deltaY = currentScrollY - lastScrollY;
      const wrapper = document.getElementById('fq-top-nav-wrapper');

      // 1. 回顶按钮显隐控制
      if (topBtn) {
        if (currentScrollY > 320) {
          topBtn.style.opacity = '1';
          topBtn.style.pointerEvents = 'auto';
          topBtn.style.transform = 'scale(1)';
        } else {
          topBtn.style.opacity = '0';
          topBtn.style.pointerEvents = 'none';
          topBtn.style.transform = 'scale(0.8)';
        }
      }

      if (!wrapper) {
        lastScrollY = currentScrollY;
        return;
      }

      // 2. 页面顶部（100px以内），始终正常归位展示
      if (currentScrollY <= 80) {
        wrapper.style.transform = 'translateY(0)';
        wrapper.style.boxShadow = 'none';
        isHeaderVisible = true;
        lastScrollY = currentScrollY;
        return;
      }

      // 3. 智能手势判定：
      // 手指向下滑动（deltaY < -5，即页面向顶部回滚）：立即顺滑滑出顶部栏！
      if (deltaY < -5) {
        if (!isHeaderVisible) {
          wrapper.style.transform = 'translateY(0)';
          wrapper.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.08)';
          isHeaderVisible = true;
        }
      } 
      // 手指向上划看小说（deltaY > 5，即页面向下滚动且超过 160px）：平滑收起隐藏顶部栏，给阅读留足空间！
      else if (deltaY > 5 && currentScrollY > 160) {
        if (isHeaderVisible) {
          wrapper.style.transform = 'translateY(-102%)';
          wrapper.style.boxShadow = 'none';
          isHeaderVisible = false;
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }


  /* 切换分类（拉取该分类并支持即时多维排序） */
  async function switchCategory(container, catId) {
    ensureMobileViewport();
    isSearchMode = false;
    currentSearchKeyword = '';
    currentActiveTab = catId;

    // 核心保证：第 0 毫秒立即挂载顶部导航栏与排序状态栏，绝不漏掉任何一秒！
    renderHeader(container);
    renderSortBar(container);
    updateSortStatusBar(container, '🔄 载入首屏...');

    await loadCurrentRankData(container, catId);
    attachSmartHeaderScroll();
  }

  /* =========================================================================
   * 功能 1.5：官方全网实时搜索（支持书名或作者，同源透视）
   * ========================================================================= */
  async function executeSearch(container, keyword) {
    const kw = (keyword || '').trim();
    if (!kw) return;

    isSearchMode = true;
    currentSearchKeyword = kw;
    ensureMobileViewport();
    renderHeader(container);

    let listWrap = document.getElementById('fq-rank-list-wrap');
    if (!listWrap) {
      listWrap = document.createElement('div');
      listWrap.id = 'fq-rank-list-wrap';
      container.appendChild(listWrap);
    }

    const oldBottomTip = document.getElementById('fq-rank-bottom-tip');
    if (oldBottomTip) oldBottomTip.innerHTML = '';

    listWrap.innerHTML = `
      <div style="background: #fff; border-radius: 12px; padding: 40px 16px; text-align: center; color: #888; font-size: 13.5px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
        <div style="font-size: 28px; margin-bottom: 8px;">🔍</div>
        正在全网透视搜索：“<strong style="color: #ff6533;">${kw}</strong>” ...
      </div>
    `;

    try {
      let bookIds = [];

      // 规则 1：如果输入内容包含 15~21 位的纯数字（书号/链接直达）
      const idMatch = kw.match(/\d{15,21}/);
      if (idMatch) {
        bookIds.push(idMatch[0]);
      } else {
        // 规则 2：纯官方 fanqiesdk 免签全网检索网关（纯官方直连，零外部依赖）
        let searchRet = null;
        try {
          const sdkUrl = `https://api.fanqiesdk.com/api/novel/channel/homepage/search/search/v1/?q=${encodeURIComponent(kw)}&offset=0&aid=13&app_name=news_article&version_code=708&device_platform=android`;
          const sdkText = await gmGet(sdkUrl);
          if (sdkText) {
            const sj = JSON.parse(sdkText);
            if (sj.code === 0 && sj.data && sj.data.ret_data) {
              searchRet = sj.data.ret_data;
            }
          }
        } catch(e) {}

        // 提取搜索返回的全部书籍 ID
        if (searchRet && Array.isArray(searchRet)) {
          for (const item of searchRet) {
            const bid = item.book_id || (item.book_data && item.book_data[0] && item.book_data[0].book_id);
            if (bid && !bookIds.includes(String(bid))) {
              bookIds.push(String(bid));
            }
          }
        }
      }

      if (bookIds.length === 0) {
        listWrap.innerHTML = `
          <div style="background: #fff; border-radius: 12px; padding: 36px 16px; text-align: center; color: #666; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
            <div style="font-size: 32px; margin-bottom: 10px;">🍃</div>
            <div style="font-size: 15px; font-weight: bold; color: #333; margin-bottom: 6px;">未搜到关于 “${kw}” 的小说</div>
            <div style="font-size: 12.5px; color: #999; margin-bottom: 16px;">请尝试输入更简短的书名或准确的作者名</div>
            <button id="fq-search-back-btn" style="
              padding: 7px 18px; border-radius: 16px; border: 1px solid #ff6533; background: #fff0eb;
              color: #ff6533; font-size: 13px; font-weight: bold; cursor: pointer;
            ">返回榜单</button>
          </div>
        `;
        document.getElementById('fq-search-back-btn')?.addEventListener('click', () => {
          switchCategory(container, currentActiveTab);
        });
        return;
      }

      const deepMap = await fetchMultiDetails(bookIds);
      const ugcList = await Promise.all(bookIds.map(id => fetchRealUgcInfo(id)));

      const books = bookIds.map((bid, idx) => {
        const d = deepMap[bid] || {};
        const ugcInfo = ugcList[idx] || null;
        const metrics = extractAllMetrics(d, {}, ugcInfo);
        const currentName = (d.book_name || '').trim() || '未命名小说';
        const origName = (d.original_book_name || '').trim();
        const hasDiff = (origName && origName !== currentName);
        const cleanAbstract = d.abstract || d.book_abstract_v2 || '';

        return {
          originalRank: idx + 1,
          bookId: bid,
          currentName,
          origName,
          hasDiff,
          metrics,
          author: d.author || '佚名',
          category: d.category || '综合',
          thumb: d.thumb_url || '//p1-tt.byteimg.com/origin/novel-static/5cb03bd354145bc7815a5e09d4b15cfc',
          realAbstract: cleanAbstract
        };
      });

      currentSearchResults = books;
      renderSortBar(container);

      let headerHtml = `
        <div style="
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 12px; margin-bottom: 10px; background: #fff0eb; border: 1px solid #ffd8cc;
          border-radius: 8px; font-size: 13px; color: #ff6533;
        ">
          <div>🔍 搜索 “<strong>${kw}</strong>” 结果（共 ${books.length} 本，可多维排序）</div>
          <button id="fq-search-return-btn" style="
            border: none; background: #ff6533; color: #fff; padding: 4px 10px;
            border-radius: 12px; font-size: 12px; font-weight: bold; cursor: pointer;
          ">返回榜单</button>
        </div>
      `;

      applySortAndRender(container);
      listWrap.insertAdjacentHTML('afterbegin', headerHtml);

      document.getElementById('fq-search-return-btn')?.addEventListener('click', () => {
        switchCategory(container, currentActiveTab);
      });

    } catch(err) {
      listWrap.innerHTML = `
        <div style="background: #fff; border-radius: 12px; padding: 30px 16px; text-align: center; color: #ff4d4f;">
          搜索发生异常，请检查网络或稍后重试
        </div>
      `;
    }
  }

  /* 移动端榜单自愈重构入口 */
  async function checkAndHealMobileRank() {
    if (!location.pathname.startsWith('/rank')) return;
    ensureMobileViewport();

    let container = document.getElementById('fq-mobile-rank-root');
    if (!container) {
      container = document.createElement('div');
      container.id = 'fq-mobile-rank-root';
      container.style.cssText = `
        max-width: 680px; width: 100%; box-sizing: border-box; margin: 0 auto; padding: 12px 10px;
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif;
        background: #f7f7f8; min-height: 100vh; color: #333;
      `;
      document.body.innerHTML = '';
      document.body.appendChild(container);
    }

    await switchCategory(container, 257); // 默认：玄幻脑洞
  }

  /* =========================================================================
   * 功能 2：书籍详情页 (/page/*) 双书名同步展示 + 7大核心指标运营看板
   * ========================================================================= */
  async function runPageDashboard() {
    const m = location.pathname.match(/\/page\/([0-9]{4,})/);
    if (!m) return;
    const bookId = m[1];

    const titleEl = document.querySelector('h1') || document.querySelector('.info-name h1') || document.querySelector('.page-header-info h1') || document.querySelector('.info-name');
    const target = document.querySelector('.page-header-info .info') || document.querySelector('.page-header-info') || (titleEl ? titleEl.parentElement : null);

    let appData = {};
    try {
      const url = 'https://fanqienovel.com/reading/bookapi/multi-detail/v/?' + __fqsign.buildQuery({ book_id: bookId });
      const headers = await __fqsign.genHeaders(url);
      const text = await gmGet(url, headers);
      if (text) {
        const j = JSON.parse(text);
        if (j.code === 0 && j.data && j.data[0]) appData = j.data[0];
      }
    } catch(e) {}

    let webData = {};
    try {
      const text = await gmGet('https://fanqienovel.com/api/book/info?bookId=' + bookId);
      if (text) {
        const j = JSON.parse(text);
        if (j.code === 0 && j.data) webData = j.data;
      }
    } catch(e) {}

    // 核心改进：详情页双书名直观展示
    if (titleEl && appData.book_name) {
      const currentName = appData.book_name.trim();
      const origName = (appData.original_book_name || titleEl.textContent || '').trim();
      const hasDiff = (origName && origName !== currentName);

      // 主标题设为 APP 真实主书名
      titleEl.textContent = currentName;

      // 如果改过名，直接在主标题正下方并列展示另一个书名（无冗余文案）
      if (hasDiff && !document.getElementById('fq-title-alias-tip')) {
        const aliasTip = document.createElement('div');
        aliasTip.id = 'fq-title-alias-tip';
        aliasTip.style.cssText = `
          display: inline-block;
          margin: 4px 0 8px; padding: 3px 8px; border-radius: 4px;
          background: #fff0eb; border: 1px solid #ffd8cc;
          font-size: 13.5px; color: #ff6533; font-weight: 600;
          line-height: 1.4; word-break: break-all; white-space: normal;
        `;
        aliasTip.innerHTML = `《${origName}》`;
        titleEl.parentElement.insertBefore(aliasTip, titleEl.nextSibling);
      }
    }

    if (document.getElementById('fq-deep-dashboard')) return;

    const ugcInfo = await fetchRealUgcInfo(bookId);
    const metrics = extractAllMetrics(appData, webData, ugcInfo);

    const board = document.createElement('div');
    board.id = 'fq-deep-dashboard';
    board.style.cssText = `
      margin: 12px 10px 14px 10px;
      padding: 12px 12px;
      background: #ffffff;
      border: 1px solid #ebecef;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      border-radius: 10px;
      font-size: 13px;
      color: #333;
      box-sizing: border-box;
      clear: both;
      font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
    `;
    board.innerHTML = `
      <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px; color: #ff6533; display: flex; align-items: center; justify-content: space-between;">
        <span>📊 番茄官方深度运营看板</span>
        <span style="font-size: 11.5px; font-weight: normal; color: #999;">数据源：番茄 APP 实时网关</span>
      </div>

      <!-- 评分与在读数据行（与排行榜卡片完全对齐） -->
      <div style="margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px dashed #f0f0f0; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
        <span style="font-size: 13.5px; font-weight: 800; color: #ff6533;">🔥 ${metrics.readText}</span>
        <span style="font-size: 12.5px; font-weight: bold; color: #fa8c16;">⭐ ★ ${metrics.score}</span>
        <span style="font-size: 11.5px; color: #8c8c8c;">(${metrics.officialContext} · ${metrics.commentCountText})</span>
      </div>

      <!-- 8 大核心运营指标网格（对称 4 行 × 2 列，以万为单位无截断） -->
      <div style="
        background: #fafafb; border: 1px solid #f0f0f2; border-radius: 8px; padding: 8px 10px;
        display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px 12px; font-size: 11.5px; color: #595959; margin-bottom: 8px;
      ">
        <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          👥 14天阅读UV：<strong style="color: #ff6533;">${metrics.uv14}</strong>
        </div>
        <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          📈 30天总阅读：<strong style="color: #ff7043;">${metrics.read30dSum}</strong>
        </div>
        <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          🌐 历史总阅读：<strong style="color: #e65100;">${metrics.readAll}</strong>
        </div>
        <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          📌 历史加书架：<strong style="color: #475569;">${metrics.historyShelf}</strong>
        </div>
        <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          🎧 30天听书UV：<strong style="color: #722ed1;">${metrics.listen30d}</strong>
        </div>
        <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          ⏱️ 听书总时长：<strong style="color: #5c6bc0;">${metrics.audioDuration}</strong>
        </div>
        <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          📖 全书总字数：<strong style="color: #0284c7;">${metrics.wordCount}</strong>
        </div>
        <div style="min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          🏆 算法综合分：<strong style="color: #1890ff;">${metrics.rankScore}</strong>
        </div>
      </div>

      <div style="font-size: 11.5px; color: #8c8c8c; line-height: 1.5; word-break: break-all;">
        🏷️ <strong>全套题材标签：</strong><span style="color: #555;">${metrics.tagsFormatted}</span>
      </div>
    `;

    // 优化挂载点：脱离狭窄的封面右侧容器，整块看板满宽通栏插入到整书头部下方
    const pageHeader = document.querySelector('.page-header') || document.querySelector('.page-header-info') || (titleEl ? titleEl.closest('.page-header') || titleEl.parentElement : null);
    if (pageHeader && pageHeader.parentElement) {
      pageHeader.parentElement.insertBefore(board, pageHeader.nextSibling);
    } else {
      document.body.appendChild(board);
    }
  }

  /* =========================================================================
   * 功能 3：作者主页 (/author-page/*) 下架/隐藏绝版神作穿透显形 + 真实书号一键复制 (移动+PC全自适应)
   * ========================================================================= */
  async function runAuthorPageDashboard() {
    if (document.getElementById('fq-author-hidden-injected')) return;

    const m = location.pathname.match(/\/author-page\/([0-9]+)/);
    if (!m) return;
    const authorId = m[1];

    // 兼容移动端和PC端的所有容器选择器 (.author-works / .author-wroks / .book-list / .muye-author-home-page)
    const worksContainer = document.querySelector('.book-list') ||
                           document.querySelector('.author-works') ||
                           document.querySelector('.author-wroks') ||
                           document.querySelector('.muye-author-home-page') ||
                           document.querySelector('.muye-author-page .content');
    if (!worksContainer) return;

    // 收集页面当前已经展示的书籍 ID（避免重复展示）
    const existingBookIds = new Set();
    document.querySelectorAll('a[href*="/page/"]').forEach(a => {
      const match = a.getAttribute('href').match(/\/page\/([0-9]+)/);
      if (match) existingBookIds.add(match[1]);
    });

    // 建立离线常态高分下架神作映射雷达（0毫秒秒出，彻底免疫官方删库）
    const OFFLINE_AUTHOR_RADAR = {
      // 西瓜一斤两块: 《大反派？分明是我方好师兄！》
      '3504898858821816': ['7282023089225862201'],
      '7282023090018587960': ['7282023089225862201'],
      // 玲珑大人: 《永恒仙族》
      '7149395987713234180': ['7149395987063114785'],
      // 爱吃酸菜鱼: 《坏了！萌新群里混进个通天代！》
      '6914855593018660110': ['7472710514896800793'],
      // 十九度的夏天: 《徒儿赶快滚，祸害山下美女去吧》
      '7401067590396679448': ['7478921989600594968']
    };

    const hiddenCandidateIds = new Set(OFFLINE_AUTHOR_RADAR[authorId] || []);

    let authorData = null;

    // 纯官方底层网关直连（内置 __fqsign 官方签名算法，零外部依赖）
    try {
      const u = 'https://api5-normal-sinfonlineb.fqnovel.com/reading/user/basic_info/get/v?' + __fqsign.buildQuery({
        user_id: `2_${authorId}`
      });
      const headers = await __fqsign.genHeaders(u);
      const text = await gmGet(u, headers);
      if (text) {
        const j = JSON.parse(text);
        if (j.code === 0 && j.data) authorData = j.data;
      }
    } catch(e) {}

    if (authorData) {
      // 扫描勋章与运营官头衔
      const titles = authorData.user_title_infos || [];
      titles.forEach(t => {
        if (t.book_ids && Array.isArray(t.book_ids)) {
          t.book_ids.forEach(id => hiddenCandidateIds.add(String(id)));
        }
      });

      // 扫描作品列表
      const books = authorData.author_book_info || [];
      books.forEach(b => {
        if (b.book_id) hiddenCandidateIds.add(String(b.book_id));
      });
    }

    // 过滤掉当前网页页面上已经正常展示的在架书
    const trueHiddenIds = Array.from(hiddenCandidateIds).filter(id => !existingBookIds.has(id));
    if (trueHiddenIds.length === 0) return;

    // 标记已处理
    const marker = document.createElement('div');
    marker.id = 'fq-author-hidden-injected';
    marker.style.display = 'none';
    document.body.appendChild(marker);

    // 4. 批量拉取隐藏下架书籍的详细信息（纯官方 multi-detail 接口直连）
    const hiddenBooksDetails = [];
    for (const bid of trueHiddenIds) {
      let bInfo = null;
      try {
        const u = 'https://fanqienovel.com/reading/bookapi/multi-detail/v/?' + __fqsign.buildQuery({ book_id: bid });
        const headers = await __fqsign.genHeaders(u);
        const text = await gmGet(u, headers);
        if (text) {
          const j = JSON.parse(text);
          if (j.code === 0 && j.data && j.data[0]) bInfo = j.data[0];
        }
      } catch(e) {}

      if (bInfo) {
        hiddenBooksDetails.push(bInfo);
      }
    }

    if (hiddenBooksDetails.length === 0) return;

    // 5. 渲染精美的「已下架·绝版作品归档区」卡片列表（全设备自适应布局）
    const section = document.createElement('div');
    section.id = 'fq-hidden-books-section';
    section.style.cssText = `
      width: 100%;
      margin: 18px 0 25px 0;
      padding: 14px 16px;
      background: #fffdfc;
      border: 1.5px dashed #ff5722;
      border-radius: 12px;
      box-sizing: border-box;
      box-shadow: 0 4px 14px rgba(255, 87, 34, 0.08);
      font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
      clear: both;
    `;

    section.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px solid #ffe8e0; padding-bottom: 8px;">
        <div style="display: flex; align-items: center; gap: 6px;">
          <span style="font-size: 16px;">🔥</span>
          <strong style="font-size: 14px; color: #ff5722;">穿透下架作品库（已发现 ${hiddenBooksDetails.length} 部隐藏神作）</strong>
        </div>
        <span style="font-size: 11px; color: #999;">官方未删库可读</span>
      </div>
    `;

    hiddenBooksDetails.forEach(book => {
      const card = document.createElement('div');
      card.style.cssText = `
        display: flex;
        gap: 12px;
        padding: 12px;
        margin-bottom: 10px;
        background: #ffffff;
        border: 1px solid #ffe3db;
        border-radius: 8px;
        box-sizing: border-box;
        box-shadow: 0 2px 6px rgba(0,0,0,0.02);
      `;

      const thumb = book.thumb_url || book.cover_url || 'https://p3-novel.byteimg.com/origin/novel-static/5d5c4e7be80ba156a2703698120ff4e4';
      const bname = book.book_name || '未命名作品';
      const origName = (book.original_book_name && book.original_book_name !== bname) ? `《${book.original_book_name}》` : '';
      const wordCount = book.word_number ? (typeof book.word_number === 'number' ? (book.word_number / 10000).toFixed(1) + '万字' : book.word_number) : (book.word_count || '未知字数');
      const score = book.score ? `⭐ ${book.score}分` : '';
      const chapters = book.serial_count ? `${book.serial_count}章` : '';
      const abstract = book.abstract || '暂无作品简介';

      card.innerHTML = `
        <img src="${thumb}" style="width: 78px; height: 105px; border-radius: 5px; object-fit: cover; flex-shrink: 0; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
        <div style="flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
              <strong style="font-size: 15px; color: #1a1a1a; word-break: break-all;">${bname}</strong>
              ${origName ? `<span style="font-size: 11px; color: #e65100; background: #fff3e0; padding: 1px 5px; border-radius: 3px;">${origName}</span>` : ''}
              <span style="font-size: 10px; background: #ff5722; color: #ffffff; font-weight: bold; padding: 1px 5px; border-radius: 3px;">已下架</span>
            </div>
            <div style="margin: 4px 0; font-size: 12px; color: #666; display: flex; gap: 8px;">
              <span style="color: #ff6533; font-weight: bold;">${score}</span>
              <span>📖 ${wordCount}</span>
              <span>📑 ${chapters}</span>
            </div>
            <p style="margin: 4px 0; font-size: 11.5px; color: #777; line-height: 1.45; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${abstract}</p>
          </div>
          <div style="margin-top: 8px; display: flex; align-items: center; gap: 8px;">
            <button class="fq-copy-bid-btn" data-bid="${book.book_id}" style="
              background: linear-gradient(135deg, #ff7043, #ff5722);
              color: #ffffff; border: none; padding: 4px 10px; font-size: 11.5px;
              border-radius: 5px; cursor: pointer; font-weight: 500;
            ">📋 复制书号 (${book.book_id})</button>
            <a href="/page/${book.book_id}" target="_blank" style="
              font-size: 11.5px; color: #ff5722; text-decoration: none; border: 1px solid #ffd8cc;
              padding: 3px 8px; border-radius: 5px; background: #fff8f5;
            ">📖 原生详情</a>
          </div>
        </div>
      `;

      section.appendChild(card);
    });

    // 绑定一键复制事件
    section.querySelectorAll('.fq-copy-bid-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const bid = e.currentTarget.getAttribute('data-bid');
        if (navigator.clipboard) {
          navigator.clipboard.writeText(bid).then(() => {
            alert(`✅ 已成功复制 19 位真实书号：\n${bid}\n\n可以直接粘贴到手机「阅读」App 搜索框中畅读！`);
          });
        } else {
          prompt('请手动复制书号：', bid);
        }
      });
    });

    // 智能挂载：移动端插入到 .book-list 或 .author-works 内，PC端插入到容器底部
    const bookList = document.querySelector('.book-list') || worksContainer;
    if (bookList.parentElement) {
      bookList.parentElement.insertBefore(section, bookList.nextSibling);
    } else {
      worksContainer.appendChild(section);
    }

    // 动态纠偏更新顶部的“作品 1”或“全部作品（N）”
    const headerTitle = document.querySelector('.header-title') || document.querySelector('.author-works h2');
    if (headerTitle) {
      const origText = headerTitle.textContent || '';
      const numMatch = origText.match(/\d+/);
      const currentNum = numMatch ? parseInt(numMatch[0]) : 1;
      headerTitle.innerHTML = `作品 ${currentNum} <span style="font-size: 12px; color: #ff5722; font-weight: bold; margin-left: 6px;">(🔥+${hiddenBooksDetails.length}部绝版下架)</span>`;
    }
  }

  /* ---------------- 统一入口调度 ---------------- */
  if (location.pathname.startsWith('/page/')) {
    window.addEventListener('DOMContentLoaded', () => {
      runPageDashboard();
      setTimeout(runPageDashboard, 600);
      setTimeout(runPageDashboard, 1500);
    });
  }
  if (location.pathname.startsWith('/author-page/')) {
    window.addEventListener('DOMContentLoaded', () => {
      runAuthorPageDashboard();
      setTimeout(runAuthorPageDashboard, 600);
      setTimeout(runAuthorPageDashboard, 1500);
    });
  }
  if (location.pathname.startsWith('/rank')) {
    window.addEventListener('DOMContentLoaded', () => {
      checkAndHealMobileRank();
    });
    setTimeout(checkAndHealMobileRank, 400);
    setTimeout(checkAndHealMobileRank, 1000);
  }

})();
