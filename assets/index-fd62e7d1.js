(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rs="155",fl=0,Xs=1,pl=2,Po=1,ml=2,En=3,Nn=0,He=1,wn=2,Un=0,vi=1,qs=2,Ys=3,js=4,vl=5,fi=100,gl=101,_l=102,Zs=103,Ks=104,xl=200,yl=201,Ml=202,Sl=203,Lo=204,Io=205,El=206,wl=207,Tl=208,bl=209,Al=210,Rl=0,Cl=1,Pl=2,vs=3,Ll=4,Il=5,Ul=6,Dl=7,Cr=0,Fl=1,Nl=2,Dn=0,Bl=1,Ol=2,zl=3,Vl=4,Hl=5,Uo=300,_i=301,xi=302,gs=303,_s=304,Pr=306,xs=1e3,sn=1001,ys=1002,ze=1003,$s=1004,Nr=1005,$e=1006,Gl=1007,Hi=1008,Fn=1009,Wl=1010,kl=1011,Cs=1012,Do=1013,Ln=1014,In=1015,Gi=1016,Fo=1017,No=1018,Xn=1020,Xl=1021,an=1023,ql=1024,Yl=1025,qn=1026,yi=1027,jl=1028,Bo=1029,Zl=1030,Oo=1031,zo=1033,Br=33776,Or=33777,zr=33778,Vr=33779,Js=35840,Qs=35841,ta=35842,ea=35843,Kl=36196,na=37492,ia=37496,ra=37808,sa=37809,aa=37810,oa=37811,la=37812,ca=37813,ha=37814,ua=37815,da=37816,fa=37817,pa=37818,ma=37819,va=37820,ga=37821,Hr=36492,$l=36283,_a=36284,xa=36285,ya=36286,Vo=3e3,Yn=3001,Jl=3200,Ql=3201,Ps=0,tc=1,jn="",ie="srgb",hn="srgb-linear",Ho="display-p3",Gr=7680,ec=519,nc=512,ic=513,rc=514,sc=515,ac=516,oc=517,lc=518,cc=519,Ma=35044,Sa="300 es",Ms=1035,Tn=2e3,wr=2001;class Ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ea=1234567;const Bi=Math.PI/180,Mi=180/Math.PI;function wi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function Ls(i,t){return(i%t+t)%t}function hc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function uc(i,t,e){return i!==t?(e-i)/(t-i):0}function Oi(i,t,e){return(1-e)*i+e*t}function dc(i,t,e,n){return Oi(i,t,1-Math.exp(-e*n))}function fc(i,t=1){return t-Math.abs(Ls(i,t*2)-t)}function pc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function gc(i,t){return i+Math.random()*(t-i)}function _c(i){return i*(.5-Math.random())}function xc(i){i!==void 0&&(Ea=i);let t=Ea+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yc(i){return i*Bi}function Mc(i){return i*Mi}function Ss(i){return(i&i-1)===0&&i!==0}function Sc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ec(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),u=r((t+n)/2),h=a((t+n)/2),l=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*l,c*d,o*u);break;case"YZY":i.set(c*d,o*h,c*l,o*u);break;case"ZXZ":i.set(c*l,c*d,o*h,o*u);break;case"XZX":i.set(o*h,c*v,c*f,o*u);break;case"YXY":i.set(c*f,o*h,c*v,o*u);break;case"ZYZ":i.set(c*v,c*f,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Go={DEG2RAD:Bi,RAD2DEG:Mi,generateUUID:wi,clamp:Fe,euclideanModulo:Ls,mapLinear:hc,inverseLerp:uc,lerp:Oi,damp:dc,pingpong:fc,smoothstep:pc,smootherstep:mc,randInt:vc,randFloat:gc,randFloatSpread:_c,seededRandom:xc,degToRad:yc,radToDeg:Mc,isPowerOfTwo:Ss,ceilPowerOfTwo:Sc,floorPowerOfTwo:Tr,setQuaternionFromProperEuler:Ec,normalize:Be,denormalize:pi};class he{constructor(t=0,e=0){he.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,e,n,s,r,a,o,c,u){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,u)}set(t,e,n,s,r,a,o,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],l=n[7],d=n[2],f=n[5],v=n[8],g=s[0],m=s[3],p=s[6],x=s[1],y=s[4],_=s[7],S=s[2],b=s[5],C=s[8];return r[0]=a*g+o*x+c*S,r[3]=a*m+o*y+c*b,r[6]=a*p+o*_+c*C,r[1]=u*g+h*x+l*S,r[4]=u*m+h*y+l*b,r[7]=u*p+h*_+l*C,r[2]=d*g+f*x+v*S,r[5]=d*m+f*y+v*b,r[8]=d*p+f*_+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8];return e*a*h-e*o*u-n*r*h+n*o*c+s*r*u-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],l=h*a-o*u,d=o*c-h*r,f=u*r-a*c,v=e*l+n*d+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(s*u-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-o*e)*g,t[6]=f*g,t[7]=(n*c-u*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-s*u,s*c,-s*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wr.makeScale(t,e)),this}rotate(t){return this.premultiply(Wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wr=new se;function Wo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const wa={};function zi(i){i in wa||(wa[i]=!0,console.warn(i))}function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const wc=new se().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Tc=new se().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function bc(i){return i.convertSRGBToLinear().applyMatrix3(Tc)}function Ac(i){return i.applyMatrix3(wc).convertLinearToSRGB()}const Rc={[hn]:i=>i,[ie]:i=>i.convertSRGBToLinear(),[Ho]:bc},Cc={[hn]:i=>i,[ie]:i=>i.convertLinearToSRGB(),[Ho]:Ac},Qe={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return hn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Rc[t],s=Cc[e];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}};let $n;class ko{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$n===void 0&&($n=br("canvas")),$n.width=t.width,$n.height=t.height;const n=$n.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pc=0;class Xo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=wi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xr(s[a].image)):r.push(Xr(s[a]))}else r=Xr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lc=0;class je extends Ei{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=sn,s=sn,r=$e,a=Hi,o=an,c=Fn,u=je.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=wi(),this.name="",this.source=new Xo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Yn?ie:jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xs:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case ys:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xs:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case ys:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ie?Yn:Vo}set encoding(t){zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Yn?ie:jn}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Uo;je.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],h=c[4],l=c[8],d=c[1],f=c[5],v=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,_=(f+1)/2,S=(p+1)/2,b=(h+d)/4,C=(l+g)/4,D=(v+m)/4;return y>_&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=C/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=D/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=C/r,s=D/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(l-g)/x,this.z=(d-h)/x,this.w=Math.acos((u+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ic extends Ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yn?ie:jn),this.texture=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$e,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Ic{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qo extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],l=n[s+3];const d=r[a+0],f=r[a+1],v=r[a+2],g=r[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(l!==g||c!==d||u!==f||h!==v){let m=1-o;const p=c*d+u*f+h*v+l*g,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),b=Math.atan2(S,p*x);m=Math.sin(m*b)/S,o=Math.sin(o*b)/S}const _=o*x;if(c=c*m+d*_,u=u*m+f*_,h=h*m+v*_,l=l*m+g*_,m===1-o){const S=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=S,u*=S,h*=S,l*=S}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],l=r[a],d=r[a+1],f=r[a+2],v=r[a+3];return t[e]=o*v+h*l+c*f-u*d,t[e+1]=c*v+h*d+u*l-o*f,t[e+2]=u*v+h*f+o*d-c*l,t[e+3]=h*v-o*l-c*d-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),l=o(r/2),d=c(n/2),f=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=d*h*l+u*f*v,this._y=u*f*l-d*h*v,this._z=u*h*v+d*f*l,this._w=u*h*l-d*f*v;break;case"YXZ":this._x=d*h*l+u*f*v,this._y=u*f*l-d*h*v,this._z=u*h*v-d*f*l,this._w=u*h*l+d*f*v;break;case"ZXY":this._x=d*h*l-u*f*v,this._y=u*f*l+d*h*v,this._z=u*h*v+d*f*l,this._w=u*h*l-d*f*v;break;case"ZYX":this._x=d*h*l-u*f*v,this._y=u*f*l+d*h*v,this._z=u*h*v-d*f*l,this._w=u*h*l+d*f*v;break;case"YZX":this._x=d*h*l+u*f*v,this._y=u*f*l+d*h*v,this._z=u*h*v-d*f*l,this._w=u*h*l-d*f*v;break;case"XZY":this._x=d*h*l-u*f*v,this._y=u*f*l-d*h*v,this._z=u*h*v+d*f*l,this._w=u*h*l+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],u=e[2],h=e[6],l=e[10],d=n+o+l;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-u)*f,this._z=(a-s)*f}else if(n>o&&n>l){const f=2*Math.sqrt(1+n-o-l);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+u)/f}else if(o>l){const f=2*Math.sqrt(1+o-n-l);this._w=(r-u)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+l-n-o);this._w=(a-s)/f,this._x=(r+u)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-n*u,this._z=r*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),l=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=a*l+this._w*d,this._x=n*l+this._x*d,this._y=s*l+this._y*d,this._z=r*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ta.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ta.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,u=c*e+a*s-o*n,h=c*n+o*e-r*s,l=c*s+r*n-a*e,d=-r*e-a*n-o*s;return this.x=u*c+d*-r+h*-o-l*-a,this.y=h*c+d*-a+l*-r-u*-o,this.z=l*c+d*-o+u*-a-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qr.copy(this).projectOnVector(t),this.sub(qr)}reflect(t){return this.sub(qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new $,Ta=new Wi;class Ti{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Jn.copy(t.boundingBox),Jn.applyMatrix4(t.matrixWorld),this.union(Jn);else{const s=t.geometry;if(s!==void 0)if(e&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let a=0,o=r.count;a<o;a++)gn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(gn)}else s.boundingBox===null&&s.computeBoundingBox(),Jn.copy(s.boundingBox),Jn.applyMatrix4(t.matrixWorld),this.union(Jn)}const n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pi),qi.subVectors(this.max,Pi),Qn.subVectors(t.a,Pi),ti.subVectors(t.b,Pi),ei.subVectors(t.c,Pi),bn.subVectors(ti,Qn),An.subVectors(ei,ti),zn.subVectors(Qn,ei);let e=[0,-bn.z,bn.y,0,-An.z,An.y,0,-zn.z,zn.y,bn.z,0,-bn.x,An.z,0,-An.x,zn.z,0,-zn.x,-bn.y,bn.x,0,-An.y,An.x,0,-zn.y,zn.x,0];return!Yr(e,Qn,ti,ei,qi)||(e=[1,0,0,0,1,0,0,0,1],!Yr(e,Qn,ti,ei,qi))?!1:(Yi.crossVectors(bn,An),e=[Yi.x,Yi.y,Yi.z],Yr(e,Qn,ti,ei,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new $,new $,new $,new $,new $,new $,new $,new $],gn=new $,Jn=new Ti,Qn=new $,ti=new $,ei=new $,bn=new $,An=new $,zn=new $,Pi=new $,qi=new $,Yi=new $,Vn=new $;function Yr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vn.fromArray(i,r);const o=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),c=t.dot(Vn),u=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Dc=new Ti,Li=new $,jr=new $;class ki{constructor(t=new $,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Li.subVectors(t,this.center);const e=Li.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Li,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Li.copy(t.center).add(jr)),this.expandByPoint(Li.copy(t.center).sub(jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new $,Zr=new $,ji=new $,Rn=new $,Kr=new $,Zi=new $,$r=new $;class Lr{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zr.copy(t).add(e).multiplyScalar(.5),ji.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(Zr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ji),o=Rn.dot(this.direction),c=-Rn.dot(ji),u=Rn.lengthSq(),h=Math.abs(1-a*a);let l,d,f,v;if(h>0)if(l=a*c-o,d=a*o-c,v=r*h,l>=0)if(d>=-v)if(d<=v){const g=1/h;l*=g,d*=g,f=l*(l+a*d+2*o)+d*(a*l+d+2*c)+u}else d=r,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*c)+u;else d=-r,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*c)+u;else d<=-v?(l=Math.max(0,-(-a*r+o)),d=l>0?-r:Math.min(Math.max(-r,-c),r),f=-l*l+d*(d+2*c)+u):d<=v?(l=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+u):(l=Math.max(0,-(a*r+o)),d=l>0?r:Math.min(Math.max(-r,-c),r),f=-l*l+d*(d+2*c)+u);else d=a>0?-r:r,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(Zr).addScaledVector(ji,d),f}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),l>=0?(o=(t.min.z-d.z)*l,c=(t.max.z-d.z)*l):(o=(t.max.z-d.z)*l,c=(t.min.z-d.z)*l),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){Kr.subVectors(e,t),Zi.subVectors(n,t),$r.crossVectors(Kr,Zi);let a=this.direction.dot($r),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,t);const c=o*this.direction.dot(Zi.crossVectors(Rn,Zi));if(c<0)return null;const u=o*this.direction.dot(Kr.cross(Rn));if(u<0||c+u>a)return null;const h=-o*Rn.dot($r);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,s,r,a,o,c,u,h,l,d,f,v,g,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,u,h,l,d,f,v,g,m)}set(t,e,n,s,r,a,o,c,u,h,l,d,f,v,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=u,p[6]=h,p[10]=l,p[14]=d,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ni.setFromMatrixColumn(t,0).length(),r=1/ni.setFromMatrixColumn(t,1).length(),a=1/ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*l,v=o*h,g=o*l;e[0]=c*h,e[4]=-c*l,e[8]=u,e[1]=f+v*u,e[5]=d-g*u,e[9]=-o*c,e[2]=g-d*u,e[6]=v+f*u,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*l,v=u*h,g=u*l;e[0]=d+g*o,e[4]=v*o-f,e[8]=a*u,e[1]=a*l,e[5]=a*h,e[9]=-o,e[2]=f*o-v,e[6]=g+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*l,v=u*h,g=u*l;e[0]=d-g*o,e[4]=-a*l,e[8]=v+f*o,e[1]=f+v*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*l,v=o*h,g=o*l;e[0]=c*h,e[4]=v*u-f,e[8]=d*u+g,e[1]=c*l,e[5]=g*u+d,e[9]=f*u-v,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*u,v=o*c,g=o*u;e[0]=c*h,e[4]=g-d*l,e[8]=v*l+f,e[1]=l,e[5]=a*h,e[9]=-o*h,e[2]=-u*h,e[6]=f*l+v,e[10]=d-g*l}else if(t.order==="XZY"){const d=a*c,f=a*u,v=o*c,g=o*u;e[0]=c*h,e[4]=-l,e[8]=u*h,e[1]=d*l+g,e[5]=a*h,e[9]=f*l-v,e[2]=v*l-f,e[6]=o*h,e[10]=g*l+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fc,t,Nc)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Cn.crossVectors(n,We),Cn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Cn.crossVectors(n,We)),Cn.normalize(),Ki.crossVectors(We,Cn),s[0]=Cn.x,s[4]=Ki.x,s[8]=We.x,s[1]=Cn.y,s[5]=Ki.y,s[9]=We.y,s[2]=Cn.z,s[6]=Ki.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],l=n[5],d=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],x=n[3],y=n[7],_=n[11],S=n[15],b=s[0],C=s[4],D=s[8],M=s[12],E=s[1],I=s[5],V=s[9],U=s[13],H=s[2],W=s[6],nt=s[10],O=s[14],N=s[3],K=s[7],k=s[11],A=s[15];return r[0]=a*b+o*E+c*H+u*N,r[4]=a*C+o*I+c*W+u*K,r[8]=a*D+o*V+c*nt+u*k,r[12]=a*M+o*U+c*O+u*A,r[1]=h*b+l*E+d*H+f*N,r[5]=h*C+l*I+d*W+f*K,r[9]=h*D+l*V+d*nt+f*k,r[13]=h*M+l*U+d*O+f*A,r[2]=v*b+g*E+m*H+p*N,r[6]=v*C+g*I+m*W+p*K,r[10]=v*D+g*V+m*nt+p*k,r[14]=v*M+g*U+m*O+p*A,r[3]=x*b+y*E+_*H+S*N,r[7]=x*C+y*I+_*W+S*K,r[11]=x*D+y*V+_*nt+S*k,r[15]=x*M+y*U+_*O+S*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],u=t[13],h=t[2],l=t[6],d=t[10],f=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+r*c*l-s*u*l-r*o*d+n*u*d+s*o*f-n*c*f)+g*(+e*c*f-e*u*d+r*a*d-s*a*f+s*u*h-r*c*h)+m*(+e*u*l-e*o*f-r*a*l+n*a*f+r*o*h-n*u*h)+p*(-s*o*h-e*c*l+e*o*d+s*a*l-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],l=t[9],d=t[10],f=t[11],v=t[12],g=t[13],m=t[14],p=t[15],x=l*m*u-g*d*u+g*c*f-o*m*f-l*c*p+o*d*p,y=v*d*u-h*m*u-v*c*f+a*m*f+h*c*p-a*d*p,_=h*g*u-v*l*u+v*o*f-a*g*f-h*o*p+a*l*p,S=v*l*c-h*g*c-v*o*d+a*g*d+h*o*m-a*l*m,b=e*x+n*y+s*_+r*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=x*C,t[1]=(g*d*r-l*m*r-g*s*f+n*m*f+l*s*p-n*d*p)*C,t[2]=(o*m*r-g*c*r+g*s*u-n*m*u-o*s*p+n*c*p)*C,t[3]=(l*c*r-o*d*r-l*s*u+n*d*u+o*s*f-n*c*f)*C,t[4]=y*C,t[5]=(h*m*r-v*d*r+v*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(v*c*r-a*m*r-v*s*u+e*m*u+a*s*p-e*c*p)*C,t[7]=(a*d*r-h*c*r+h*s*u-e*d*u-a*s*f+e*c*f)*C,t[8]=_*C,t[9]=(v*l*r-h*g*r-v*n*f+e*g*f+h*n*p-e*l*p)*C,t[10]=(a*g*r-v*o*r+v*n*u-e*g*u-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*l*r-h*n*u+e*l*u+a*n*f-e*o*f)*C,t[12]=S*C,t[13]=(h*g*s-v*l*s+v*n*d-e*g*d-h*n*m+e*l*m)*C,t[14]=(v*o*s-a*g*s-v*n*c+e*g*c+a*n*m-e*o*m)*C,t[15]=(a*l*s-h*o*s+h*n*c-e*l*c-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,u=r+r,h=a+a,l=o+o,d=r*u,f=r*h,v=r*l,g=a*h,m=a*l,p=o*l,x=c*u,y=c*h,_=c*l,S=n.x,b=n.y,C=n.z;return s[0]=(1-(g+p))*S,s[1]=(f+_)*S,s[2]=(v-y)*S,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(d+p))*b,s[6]=(m+x)*b,s[7]=0,s[8]=(v+y)*C,s[9]=(m-x)*C,s[10]=(1-(d+g))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ni.set(s[0],s[1],s[2]).length();const a=ni.set(s[4],s[5],s[6]).length(),o=ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);const u=1/r,h=1/a,l=1/o;return tn.elements[0]*=u,tn.elements[1]*=u,tn.elements[2]*=u,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=l,tn.elements[9]*=l,tn.elements[10]*=l,e.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Tn){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),d=(n+s)/(n-s);let f,v;if(o===Tn)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===wr)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Tn){const c=this.elements,u=1/(e-t),h=1/(n-s),l=1/(a-r),d=(e+t)*u,f=(n+s)*h;let v,g;if(o===Tn)v=(a+r)*l,g=-2*l;else if(o===wr)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ni=new $,tn=new Me,Fc=new $(0,0,0),Nc=new $(1,1,1),Cn=new $,Ki=new $,We=new $,ba=new Me,Aa=new Wi;class Ir{constructor(t=0,e=0,n=0,s=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],l=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ba.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ba,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Aa.setFromEuler(this),this.setFromQuaternion(Aa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class Is{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bc=0;const Ra=new $,ii=new Wi,xn=new Me,$i=new $,Ii=new $,Oc=new $,zc=new Wi,Ca=new $(1,0,0),Pa=new $(0,1,0),La=new $(0,0,1),Vc={type:"added"},Ia={type:"removed"};class Re extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new $,e=new Ir,n=new Wi,s=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new se}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(Ca,t)}rotateY(t){return this.rotateOnAxis(Pa,t)}rotateZ(t){return this.rotateOnAxis(La,t)}translateOnAxis(t,e){return Ra.copy(t).applyQuaternion(this.quaternion),this.position.add(Ra.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ca,t)}translateY(t){return this.translateOnAxis(Pa,t)}translateZ(t){return this.translateOnAxis(La,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$i.copy(t):$i.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Ii,$i,this.up):xn.lookAt($i,Ii,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),ii.setFromRotationMatrix(xn),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ia)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ia)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,t,Oc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,zc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),l=a(t.shapes),d=a(t.skeletons),f=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new $(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new $,yn=new $,Jr=new $,Mn=new $,ri=new $,si=new $,Ua=new $,Qr=new $,ts=new $,es=new $;let Ji=!1;class Je{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),yn.subVectors(n,e),Jr.subVectors(t,e);const a=en.dot(en),o=en.dot(yn),c=en.dot(Jr),u=yn.dot(yn),h=yn.dot(Jr),l=a*u-o*o;if(l===0)return r.set(-2,-1,-1);const d=1/l,f=(u*c-o*h)*d,v=(a*h-o*c)*d;return r.set(1-f-v,v,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mn),Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(t,e,n,s,r,a,o,c){return Ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ji=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Mn),c.setScalar(0),c.addScaledVector(r,Mn.x),c.addScaledVector(a,Mn.y),c.addScaledVector(o,Mn.z),c}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),yn.subVectors(t,e),en.cross(yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),en.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ji=!0),Je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ri.subVectors(s,n),si.subVectors(r,n),Qr.subVectors(t,n);const c=ri.dot(Qr),u=si.dot(Qr);if(c<=0&&u<=0)return e.copy(n);ts.subVectors(t,s);const h=ri.dot(ts),l=si.dot(ts);if(h>=0&&l<=h)return e.copy(s);const d=c*l-h*u;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ri,a);es.subVectors(t,r);const f=ri.dot(es),v=si.dot(es);if(v>=0&&f<=v)return e.copy(r);const g=f*u-c*v;if(g<=0&&u>=0&&v<=0)return o=u/(u-v),e.copy(n).addScaledVector(si,o);const m=h*v-f*l;if(m<=0&&l-h>=0&&f-v>=0)return Ua.subVectors(r,s),o=(l-h)/(l-h+(f-v)),e.copy(s).addScaledVector(Ua,o);const p=1/(m+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(ri,a).addScaledVector(si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Hc=0;class un extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=vi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Io,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Yo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function ns(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qe.workingColorSpace){if(t=Ls(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ns(a,r,t+1/3),this.g=ns(a,r,t),this.b=ns(a,r,t-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(t,e=ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ie){const n=Yo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ie){return Qe.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Fe(Ue.r*255,0,255))*65536+Math.round(Fe(Ue.g*255,0,255))*256+Math.round(Fe(Ue.b*255,0,255))}getHexString(t=ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const l=a-o;switch(u=h<=.5?l/(a+o):l/(2-a-o),a){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=ie){Qe.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(nn),nn.h+=t,nn.s+=e,nn.l+=n,this.setHSL(nn.h,nn.s,nn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nn),t.getHSL(Qi);const n=Oi(nn.h,Qi.h,e),s=Oi(nn.s,Qi.s,e),r=Oi(nn.l,Qi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new ce;ce.NAMES=Yo;class Us extends un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new $,tr=new he;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ma,this.updateRange={offset:0,count:-1},this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ma&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class jo extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zo extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gc=0;const Ze=new Me,is=new Re,ai=new $,ke=new Ti,Ui=new Ti,be=new $;class Ve extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wo(t)?Zo:jo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return is.lookAt(t),is.updateMatrix(),this.applyMatrix4(is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(ke.min,Ui.min),ke.expandByPoint(be),be.addVectors(ke.max,Ui.max),ke.expandByPoint(be)):(ke.expandByPoint(Ui.min),ke.expandByPoint(Ui.max))}ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)be.fromBufferAttribute(o,u),c&&(ai.fromBufferAttribute(t,u),be.add(ai)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,u=[],h=[];for(let E=0;E<o;E++)u[E]=new $,h[E]=new $;const l=new $,d=new $,f=new $,v=new he,g=new he,m=new he,p=new $,x=new $;function y(E,I,V){l.fromArray(s,E*3),d.fromArray(s,I*3),f.fromArray(s,V*3),v.fromArray(a,E*2),g.fromArray(a,I*2),m.fromArray(a,V*2),d.sub(l),f.sub(l),g.sub(v),m.sub(v);const U=1/(g.x*m.y-m.x*g.y);isFinite(U)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(U),x.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(U),u[E].add(p),u[I].add(p),u[V].add(p),h[E].add(x),h[I].add(x),h[V].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let E=0,I=_.length;E<I;++E){const V=_[E],U=V.start,H=V.count;for(let W=U,nt=U+H;W<nt;W+=3)y(n[W+0],n[W+1],n[W+2])}const S=new $,b=new $,C=new $,D=new $;function M(E){C.fromArray(r,E*3),D.copy(C);const I=u[E];S.copy(I),S.sub(C.multiplyScalar(C.dot(I))).normalize(),b.crossVectors(D,I);const U=b.dot(h[E])<0?-1:1;c[E*4]=S.x,c[E*4+1]=S.y,c[E*4+2]=S.z,c[E*4+3]=U}for(let E=0,I=_.length;E<I;++E){const V=_[E],U=V.start,H=V.count;for(let W=U,nt=U+H;W<nt;W+=3)M(n[W+0]),M(n[W+1]),M(n[W+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new $,r=new $,a=new $,o=new $,c=new $,u=new $,h=new $,l=new $;if(t)for(let d=0,f=t.count;d<f;d+=3){const v=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),o.add(h),c.add(h),u.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,c){const u=o.array,h=o.itemSize,l=o.normalized,d=new u.constructor(c.length*h);let f=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let p=0;p<h;p++)d[v++]=u[f++]}return new cn(d,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],u=t(c,n);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const c=[],u=r[o];for(let h=0,l=u.length;h<l;h++){const d=u[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,d=u.length;l<d;l++){const f=u[l];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],l=r[u];for(let d=0,f=l.length;d<f;d++)h.push(l[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Da=new Me,Hn=new Lr,er=new ki,Fa=new $,oi=new $,li=new $,ci=new $,rs=new $,nr=new $,ir=new he,rr=new he,sr=new he,Na=new $,Ba=new $,Oa=new $,ar=new $,or=new $;class Ye extends Re{constructor(t=new Ve,e=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=o[c],l=r[c];h!==0&&(rs.fromBufferAttribute(l,t),a?nr.addScaledVector(rs,h):nr.addScaledVector(rs.sub(e),h))}e.add(nr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),Hn.copy(t.ray).recast(t.near),!(er.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(er,Fa)===null||Hn.origin.distanceToSquared(Fa)>(t.far-t.near)**2))&&(Da.copy(r).invert(),Hn.copy(t.ray).applyMatrix4(Da),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,S=y;_<S;_+=3){const b=o.getX(_),C=o.getX(_+1),D=o.getX(_+2);s=lr(this,p,t,n,u,h,l,b,C,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const x=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);s=lr(this,a,t,n,u,h,l,x,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,S=y;_<S;_+=3){const b=_,C=_+1,D=_+2;s=lr(this,p,t,n,u,h,l,b,C,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const x=m,y=m+1,_=m+2;s=lr(this,a,t,n,u,h,l,x,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Wc(i,t,e,n,s,r,a,o){let c;if(t.side===He?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Nn,o),c===null)return null;or.copy(o),or.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(or);return u<e.near||u>e.far?null:{distance:u,point:or.clone(),object:i}}function lr(i,t,e,n,s,r,a,o,c,u){i.getVertexPosition(o,oi),i.getVertexPosition(c,li),i.getVertexPosition(u,ci);const h=Wc(i,t,e,n,oi,li,ci,ar);if(h){s&&(ir.fromBufferAttribute(s,o),rr.fromBufferAttribute(s,c),sr.fromBufferAttribute(s,u),h.uv=Je.getInterpolation(ar,oi,li,ci,ir,rr,sr,new he)),r&&(ir.fromBufferAttribute(r,o),rr.fromBufferAttribute(r,c),sr.fromBufferAttribute(r,u),h.uv1=Je.getInterpolation(ar,oi,li,ci,ir,rr,sr,new he),h.uv2=h.uv1),a&&(Na.fromBufferAttribute(a,o),Ba.fromBufferAttribute(a,c),Oa.fromBufferAttribute(a,u),h.normal=Je.getInterpolation(ar,oi,li,ci,Na,Ba,Oa,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const l={a:o,b:c,c:u,normal:new $,materialIndex:0};Je.getNormal(oi,li,ci,l.normal),h.face=l}return h}class bi extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],u=[],h=[],l=[];let d=0,f=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ve(u,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(l,2));function v(g,m,p,x,y,_,S,b,C,D,M){const E=_/C,I=S/D,V=_/2,U=S/2,H=b/2,W=C+1,nt=D+1;let O=0,N=0;const K=new $;for(let k=0;k<nt;k++){const A=k*I-U;for(let B=0;B<W;B++){const F=B*E-V;K[g]=F*x,K[m]=A*y,K[p]=H,u.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[p]=b>0?1:-1,h.push(K.x,K.y,K.z),l.push(B/C),l.push(1-k/D),O+=1}}for(let k=0;k<D;k++)for(let A=0;A<C;A++){const B=d+A+W*k,F=d+A+W*(k+1),P=d+(A+1)+W*(k+1),R=d+(A+1)+W*k;c.push(B,F,R),c.push(F,P,R),N+=6}o.addGroup(f,N,M),f+=N,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Si(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=Si(i[e]);for(const s in n)t[s]=n[s]}return t}function kc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ko(i){return i.getRenderTarget()===null?i.outputColorSpace:hn}const Xc={clone:Si,merge:Oe};var qc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qc,this.fragmentShader=Yc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=kc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $o extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qe extends $o{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mi*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hi=-90,ui=1;class jc extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const s=new qe(hi,ui,t,e);s.layers=this.layers,this.add(s);const r=new qe(hi,ui,t,e);r.layers=this.layers,this.add(r);const a=new qe(hi,ui,t,e);a.layers=this.layers,this.add(a);const o=new qe(hi,ui,t,e);o.layers=this.layers,this.add(o);const c=new qe(hi,ui,t,e);c.layers=this.layers,this.add(c);const u=new qe(hi,ui,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const u of e)this.remove(u);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,o,c,u]=this.children,h=t.getRenderTarget(),l=t.xr.enabled;t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,s),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,u),t.setRenderTarget(h),t.xr.enabled=l,n.texture.needsPMREMUpdate=!0}}class Jo extends je{constructor(t,e,n,s,r,a,o,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zc extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Yn?ie:jn),this.texture=new Jo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bi(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Un});r.uniforms.tEquirect.value=e;const a=new Ye(s,r),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=$e),new jc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ss=new $,Kc=new $,$c=new se;class Pn{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ss.subVectors(n,e).cross(Kc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ss),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$c.getNormalMatrix(t),s=this.coplanarPoint(ss).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new ki,cr=new $;class Ds{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],u=s[4],h=s[5],l=s[6],d=s[7],f=s[8],v=s[9],g=s[10],m=s[11],p=s[12],x=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,d-u,m-f,_-p).normalize(),n[1].setComponents(c+r,d+u,m+f,_+p).normalize(),n[2].setComponents(c+a,d+h,m+v,_+x).normalize(),n[3].setComponents(c-a,d-h,m-v,_-x).normalize(),n[4].setComponents(c-o,d-l,m-g,_-y).normalize(),e===Tn)n[5].setComponents(c+o,d+l,m+g,_+y).normalize();else if(e===wr)n[5].setComponents(o,l,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qo(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Jc(i,t){const e=t.isWebGL2,n=new WeakMap;function s(u,h){const l=u.array,d=u.usage,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,l,d),u.onUploadCallback();let v;if(l instanceof Float32Array)v=i.FLOAT;else if(l instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)v=i.SHORT;else if(l instanceof Uint32Array)v=i.UNSIGNED_INT;else if(l instanceof Int32Array)v=i.INT;else if(l instanceof Int8Array)v=i.BYTE;else if(l instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:v,bytesPerElement:l.BYTES_PER_ELEMENT,version:u.version}}function r(u,h,l){const d=h.array,f=h.updateRange;i.bindBuffer(l,u),f.count===-1?i.bufferSubData(l,0,d):(e?i.bufferSubData(l,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(l,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const l=n.get(u);l===void 0?n.set(u,s(u,h)):l.version<u.version&&(r(l.buffer,u,h),l.version=u.version)}return{get:a,remove:o,update:c}}class Ur extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,l=t/o,d=e/c,f=[],v=[],g=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let y=0;y<u;y++){const _=y*l-r;v.push(_,-x,0),g.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const y=x+u*p,_=x+u*(p+1),S=x+1+u*(p+1),b=x+1+u*p;f.push(y,_,b),f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new ve(v,3)),this.setAttribute("normal",new ve(g,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.width,t.height,t.widthSegments,t.heightSegments)}}var Qc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,th=`#ifdef USE_ALPHAHASH
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
#endif`,eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ih=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ch=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hh=`#ifdef USE_IRIDESCENCE
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
#endif`,uh=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yh=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
} // validated`,Mh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ah="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Ph=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Ih=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oh=`#ifdef USE_GRADIENTMAP
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
}`,zh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,kh=`#ifdef USE_ENVMAP
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
#endif`,Xh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Kh=`struct PhysicalMaterial {
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,$h=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,tu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,iu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ru=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,su=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,au=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ou=`#if defined( USE_POINTS_UV )
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
#endif`,lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uu=`#ifdef USE_MORPHNORMALS
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
#endif`,du=`#ifdef USE_MORPHTARGETS
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
#endif`,fu=`#ifdef USE_MORPHTARGETS
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
#endif`,pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,mu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_u=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xu=`#ifdef USE_NORMALMAP
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
#endif`,yu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Au=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ru=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Du=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fu=`float getShadowMask() {
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
}`,Nu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ou=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zu=`#ifdef USE_SKINNING
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
#endif`,Vu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ku=`#ifdef USE_TRANSMISSION
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
#endif`,Xu=`#ifdef USE_TRANSMISSION
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
#endif`,qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ku=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$u=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ed=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,id=`#if DEPTH_PACKING == 3200
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
}`,rd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,sd=`#define DISTANCE
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
}`,ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,od=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ld=`uniform float scale;
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
}`,cd=`uniform vec3 diffuse;
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
}`,hd=`#include <common>
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
}`,ud=`uniform vec3 diffuse;
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
}`,dd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,fd=`#define LAMBERT
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
}`,pd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,md=`#define MATCAP
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
}`,vd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,gd=`#define NORMAL
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
}`,_d=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,xd=`#define PHONG
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
}`,yd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
}`,Md=`#define STANDARD
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
}`,Ed=`#define TOON
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
}`,wd=`uniform float size;
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
}`,Td=`uniform vec3 diffuse;
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
}`,bd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,Ad=`uniform vec3 color;
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
}`,Rd=`uniform float rotation;
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
}`,Cd=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Qc,alphahash_pars_fragment:th,alphamap_fragment:eh,alphamap_pars_fragment:nh,alphatest_fragment:ih,alphatest_pars_fragment:rh,aomap_fragment:sh,aomap_pars_fragment:ah,begin_vertex:oh,beginnormal_vertex:lh,bsdfs:ch,iridescence_fragment:hh,bumpmap_pars_fragment:uh,clipping_planes_fragment:dh,clipping_planes_pars_fragment:fh,clipping_planes_pars_vertex:ph,clipping_planes_vertex:mh,color_fragment:vh,color_pars_fragment:gh,color_pars_vertex:_h,color_vertex:xh,common:yh,cube_uv_reflection_fragment:Mh,defaultnormal_vertex:Sh,displacementmap_pars_vertex:Eh,displacementmap_vertex:wh,emissivemap_fragment:Th,emissivemap_pars_fragment:bh,colorspace_fragment:Ah,colorspace_pars_fragment:Rh,envmap_fragment:Ch,envmap_common_pars_fragment:Ph,envmap_pars_fragment:Lh,envmap_pars_vertex:Ih,envmap_physical_pars_fragment:kh,envmap_vertex:Uh,fog_vertex:Dh,fog_pars_vertex:Fh,fog_fragment:Nh,fog_pars_fragment:Bh,gradientmap_pars_fragment:Oh,lightmap_fragment:zh,lightmap_pars_fragment:Vh,lights_lambert_fragment:Hh,lights_lambert_pars_fragment:Gh,lights_pars_begin:Wh,lights_toon_fragment:Xh,lights_toon_pars_fragment:qh,lights_phong_fragment:Yh,lights_phong_pars_fragment:jh,lights_physical_fragment:Zh,lights_physical_pars_fragment:Kh,lights_fragment_begin:$h,lights_fragment_maps:Jh,lights_fragment_end:Qh,logdepthbuf_fragment:tu,logdepthbuf_pars_fragment:eu,logdepthbuf_pars_vertex:nu,logdepthbuf_vertex:iu,map_fragment:ru,map_pars_fragment:su,map_particle_fragment:au,map_particle_pars_fragment:ou,metalnessmap_fragment:lu,metalnessmap_pars_fragment:cu,morphcolor_vertex:hu,morphnormal_vertex:uu,morphtarget_pars_vertex:du,morphtarget_vertex:fu,normal_fragment_begin:pu,normal_fragment_maps:mu,normal_pars_fragment:vu,normal_pars_vertex:gu,normal_vertex:_u,normalmap_pars_fragment:xu,clearcoat_normal_fragment_begin:yu,clearcoat_normal_fragment_maps:Mu,clearcoat_pars_fragment:Su,iridescence_pars_fragment:Eu,opaque_fragment:wu,packing:Tu,premultiplied_alpha_fragment:bu,project_vertex:Au,dithering_fragment:Ru,dithering_pars_fragment:Cu,roughnessmap_fragment:Pu,roughnessmap_pars_fragment:Lu,shadowmap_pars_fragment:Iu,shadowmap_pars_vertex:Uu,shadowmap_vertex:Du,shadowmask_pars_fragment:Fu,skinbase_vertex:Nu,skinning_pars_vertex:Bu,skinning_vertex:Ou,skinnormal_vertex:zu,specularmap_fragment:Vu,specularmap_pars_fragment:Hu,tonemapping_fragment:Gu,tonemapping_pars_fragment:Wu,transmission_fragment:ku,transmission_pars_fragment:Xu,uv_pars_fragment:qu,uv_pars_vertex:Yu,uv_vertex:ju,worldpos_vertex:Zu,background_vert:Ku,background_frag:$u,backgroundCube_vert:Ju,backgroundCube_frag:Qu,cube_vert:td,cube_frag:ed,depth_vert:nd,depth_frag:id,distanceRGBA_vert:rd,distanceRGBA_frag:sd,equirect_vert:ad,equirect_frag:od,linedashed_vert:ld,linedashed_frag:cd,meshbasic_vert:hd,meshbasic_frag:ud,meshlambert_vert:dd,meshlambert_frag:fd,meshmatcap_vert:pd,meshmatcap_frag:md,meshnormal_vert:vd,meshnormal_frag:gd,meshphong_vert:_d,meshphong_frag:xd,meshphysical_vert:yd,meshphysical_frag:Md,meshtoon_vert:Sd,meshtoon_frag:Ed,points_vert:wd,points_frag:Td,shadow_vert:bd,shadow_frag:Ad,sprite_vert:Rd,sprite_frag:Cd},Ft={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ln={basic:{uniforms:Oe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Oe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ce(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Oe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Oe([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Oe([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new ce(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Oe([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Oe([Ft.points,Ft.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Oe([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Oe([Ft.common,Ft.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Oe([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Oe([Ft.sprite,Ft.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Oe([Ft.common,Ft.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Oe([Ft.lights,Ft.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};ln.physical={uniforms:Oe([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const hr={r:0,b:0,g:0};function Pd(i,t,e,n,s,r,a){const o=new ce(0);let c=r===!0?0:1,u,h,l=null,d=0,f=null;function v(m,p){let x=!1,y=p.isScene===!0?p.background:null;switch(y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y)),y===null?g(o,c):y&&y.isColor&&(g(y,1),x=!0),i.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),x=!0;break}(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Pr)?(h===void 0&&(h=new Ye(new bi(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Si(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=y.colorSpace!==ie,(l!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,l=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Ye(new Ur(2,2),new Kn({name:"BackgroundMaterial",uniforms:Si(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=y.colorSpace!==ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(l!==y||d!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,l=y,d=y.version,f=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,p){m.getRGB(hr,Ko(i)),n.buffers.color.setClear(hr.r,hr.g,hr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(o,c)},render:v}}function Ld(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let u=c,h=!1;function l(H,W,nt,O,N){let K=!1;if(a){const k=g(O,nt,W);u!==k&&(u=k,f(u.object)),K=p(H,O,nt,N),K&&x(H,O,nt,N)}else{const k=W.wireframe===!0;(u.geometry!==O.id||u.program!==nt.id||u.wireframe!==k)&&(u.geometry=O.id,u.program=nt.id,u.wireframe=k,K=!0)}N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,D(H,W,nt,O),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(H){return n.isWebGL2?i.bindVertexArray(H):r.bindVertexArrayOES(H)}function v(H){return n.isWebGL2?i.deleteVertexArray(H):r.deleteVertexArrayOES(H)}function g(H,W,nt){const O=nt.wireframe===!0;let N=o[H.id];N===void 0&&(N={},o[H.id]=N);let K=N[W.id];K===void 0&&(K={},N[W.id]=K);let k=K[O];return k===void 0&&(k=m(d()),K[O]=k),k}function m(H){const W=[],nt=[],O=[];for(let N=0;N<s;N++)W[N]=0,nt[N]=0,O[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:nt,attributeDivisors:O,object:H,attributes:{},index:null}}function p(H,W,nt,O){const N=u.attributes,K=W.attributes;let k=0;const A=nt.getAttributes();for(const B in A)if(A[B].location>=0){const P=N[B];let R=K[B];if(R===void 0&&(B==="instanceMatrix"&&H.instanceMatrix&&(R=H.instanceMatrix),B==="instanceColor"&&H.instanceColor&&(R=H.instanceColor)),P===void 0||P.attribute!==R||R&&P.data!==R.data)return!0;k++}return u.attributesNum!==k||u.index!==O}function x(H,W,nt,O){const N={},K=W.attributes;let k=0;const A=nt.getAttributes();for(const B in A)if(A[B].location>=0){let P=K[B];P===void 0&&(B==="instanceMatrix"&&H.instanceMatrix&&(P=H.instanceMatrix),B==="instanceColor"&&H.instanceColor&&(P=H.instanceColor));const R={};R.attribute=P,P&&P.data&&(R.data=P.data),N[B]=R,k++}u.attributes=N,u.attributesNum=k,u.index=O}function y(){const H=u.newAttributes;for(let W=0,nt=H.length;W<nt;W++)H[W]=0}function _(H){S(H,0)}function S(H,W){const nt=u.newAttributes,O=u.enabledAttributes,N=u.attributeDivisors;nt[H]=1,O[H]===0&&(i.enableVertexAttribArray(H),O[H]=1),N[H]!==W&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,W),N[H]=W)}function b(){const H=u.newAttributes,W=u.enabledAttributes;for(let nt=0,O=W.length;nt<O;nt++)W[nt]!==H[nt]&&(i.disableVertexAttribArray(nt),W[nt]=0)}function C(H,W,nt,O,N,K,k){k===!0?i.vertexAttribIPointer(H,W,nt,N,K):i.vertexAttribPointer(H,W,nt,O,N,K)}function D(H,W,nt,O){if(n.isWebGL2===!1&&(H.isInstancedMesh||O.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const N=O.attributes,K=nt.getAttributes(),k=W.defaultAttributeValues;for(const A in K){const B=K[A];if(B.location>=0){let F=N[A];if(F===void 0&&(A==="instanceMatrix"&&H.instanceMatrix&&(F=H.instanceMatrix),A==="instanceColor"&&H.instanceColor&&(F=H.instanceColor)),F!==void 0){const P=F.normalized,R=F.itemSize,j=e.get(F);if(j===void 0)continue;const st=j.buffer,tt=j.type,Z=j.bytesPerElement,dt=n.isWebGL2===!0&&(tt===i.INT||tt===i.UNSIGNED_INT||F.gpuType===Do);if(F.isInterleavedBufferAttribute){const ht=F.data,X=ht.stride,Tt=F.offset;if(ht.isInstancedInterleavedBuffer){for(let pt=0;pt<B.locationSize;pt++)S(B.location+pt,ht.meshPerAttribute);H.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let pt=0;pt<B.locationSize;pt++)_(B.location+pt);i.bindBuffer(i.ARRAY_BUFFER,st);for(let pt=0;pt<B.locationSize;pt++)C(B.location+pt,R/B.locationSize,tt,P,X*Z,(Tt+R/B.locationSize*pt)*Z,dt)}else{if(F.isInstancedBufferAttribute){for(let ht=0;ht<B.locationSize;ht++)S(B.location+ht,F.meshPerAttribute);H.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ht=0;ht<B.locationSize;ht++)_(B.location+ht);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ht=0;ht<B.locationSize;ht++)C(B.location+ht,R/B.locationSize,tt,P,R*Z,R/B.locationSize*ht*Z,dt)}}else if(k!==void 0){const P=k[A];if(P!==void 0)switch(P.length){case 2:i.vertexAttrib2fv(B.location,P);break;case 3:i.vertexAttrib3fv(B.location,P);break;case 4:i.vertexAttrib4fv(B.location,P);break;default:i.vertexAttrib1fv(B.location,P)}}}}b()}function M(){V();for(const H in o){const W=o[H];for(const nt in W){const O=W[nt];for(const N in O)v(O[N].object),delete O[N];delete W[nt]}delete o[H]}}function E(H){if(o[H.id]===void 0)return;const W=o[H.id];for(const nt in W){const O=W[nt];for(const N in O)v(O[N].object),delete O[N];delete W[nt]}delete o[H.id]}function I(H){for(const W in o){const nt=o[W];if(nt[H.id]===void 0)continue;const O=nt[H.id];for(const N in O)v(O[N].object),delete O[N];delete nt[H.id]}}function V(){U(),h=!0,u!==c&&(u=c,f(u.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:V,resetDefaultState:U,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:_,disableUnusedAttributes:b}}function Id(i,t,e,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,l){if(l===0)return;let d,f;if(s)d=i,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,u,h,l),e.update(h,r,l)}this.setMode=a,this.render=o,this.renderInstances=c}function Ud(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,_=a||t.has("OES_texture_float"),S=y&&_,b=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:l,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:_,floatVertexTextures:S,maxSamples:b}}function Dd(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Pn,o=new se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const f=l.length!==0||d||n!==0||s;return s=d,n=l.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,d){e=h(l,d,0)},this.setState=function(l,d,f){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,p=i.get(l);if(!s||v===null||v.length===0||r&&!m)r?h(null):u();else{const x=r?0:n,y=x*4;let _=p.clippingState||null;c.value=_,_=h(v,d,y,f);for(let S=0;S!==y;++S)_[S]=e[S];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,d,f,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const p=f+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==g;++y,_+=4)a.copy(l[y]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Fd(i){let t=new WeakMap;function e(a,o){return o===gs?a.mapping=_i:o===_s&&(a.mapping=xi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===gs||o===_s)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Zc(c.height/2);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",s),e(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Nd extends $o{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mi=4,za=[.125,.215,.35,.446,.526,.582],kn=20,as=new Nd,Va=new ce;let os=null;const Wn=(1+Math.sqrt(5))/2,di=1/Wn,Ha=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,Wn,di),new $(0,Wn,-di),new $(di,0,Wn),new $(-di,0,Wn),new $(Wn,di,0),new $(-Wn,di,0)];class Ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){os=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(os),t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),os=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Gi,format:an,colorSpace:hn,depthBuffer:!1},s=Wa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bd(r)),this._blurMaterial=Od(r,t,e)}return s}_compileMaterial(t){const e=new Ye(this._lodPlanes[0],t);this._renderer.compile(e,as)}_sceneToCubeUV(t,e,n,s){const o=new qe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,d=h.toneMapping;h.getClearColor(Va),h.toneMapping=Dn,h.autoClear=!1;const f=new Us({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),v=new Ye(new bi,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Va),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(u[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,u[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,u[p]));const y=this._cubeSize;ur(s,x*y,p>2?y:0,y,y),h.setRenderTarget(s),g&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===_i||t.mapping===xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ka());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;ur(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,as)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ha[(s-1)%Ha.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new Ye(this._lodPlanes[s],u),d=u.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*kn-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):kn;m>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const p=[];let x=0;for(let C=0;C<kn;++C){const D=C/g,M=Math.exp(-D*D/2);p.push(M),C===0?x+=M:C<m&&(x+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-n;const _=this._sizeLods[s],S=3*_*(s>y-mi?s-y+mi:0),b=4*(this._cubeSize-_);ur(e,S,b,3*_,2*_),c.setRenderTarget(e),c.render(l,as)}}function Bd(i){const t=[],e=[],n=[];let s=i;const r=i-mi+1+za.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-mi?c=za[a-i+mi-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),h=-u,l=1+u,d=[h,h,l,h,l,l,h,h,l,l,h,l],f=6,v=6,g=3,m=2,p=1,x=new Float32Array(g*v*f),y=new Float32Array(m*v*f),_=new Float32Array(p*v*f);for(let b=0;b<f;b++){const C=b%3*2/3-1,D=b>2?0:-1,M=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];x.set(M,g*v*b),y.set(d,m*v*b);const E=[b,b,b,b,b,b];_.set(E,p*v*b)}const S=new Ve;S.setAttribute("position",new cn(x,g)),S.setAttribute("uv",new cn(y,m)),S.setAttribute("faceIndex",new cn(_,p)),t.push(S),s>mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wa(i,t,e){const n=new Zn(i,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Od(i,t,e){const n=new Float32Array(kn),s=new $(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fs(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ka(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fs(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Xa(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Fs(){return`

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
	`}function zd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===gs||c===_s,h=c===_i||c===xi;if(u||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=t.get(o);return e===null&&(e=new Ga(i)),l=u?e.fromEquirectangular(o,l):e.fromCubemap(o,l),t.set(o,l),l.texture}else{if(t.has(o))return t.get(o).texture;{const l=o.image;if(u&&l&&l.height>0||h&&l&&s(l)){e===null&&(e=new Ga(i));const d=u?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function r(o){const c=o.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Vd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hd(i,t,e,n){const s={},r=new WeakMap;function a(l){const d=l.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(l,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(l){const d=l.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const f=l.morphAttributes;for(const v in f){const g=f[v];for(let m=0,p=g.length;m<p;m++)t.update(g[m],i.ARRAY_BUFFER)}}function u(l){const d=[],f=l.index,v=l.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let y=0,_=x.length;y<_;y+=3){const S=x[y+0],b=x[y+1],C=x[y+2];d.push(S,b,b,C,C,S)}}else if(v!==void 0){const x=v.array;g=v.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const S=y+0,b=y+1,C=y+2;d.push(S,b,b,C,C,S)}}else return;const m=new(Wo(d)?Zo:jo)(d,1);m.version=g;const p=r.get(l);p&&t.remove(p),r.set(l,m)}function h(l){const d=r.get(l);if(d){const f=l.index;f!==null&&d.version<f.version&&u(l)}else u(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:h}}function Gd(i,t,e,n){const s=n.isWebGL2;let r;function a(d){r=d}let o,c;function u(d){o=d.type,c=d.bytesPerElement}function h(d,f){i.drawElements(r,f,o,d*c),e.update(f,r,1)}function l(d,f,v){if(v===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,f,o,d*c,v),e.update(f,r,v)}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=l}function Wd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function kd(i,t){return i[0]-t[0]}function Xd(i,t){return Math.abs(t[1])-Math.abs(i[1])}function qd(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new Ae,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,h,l){const d=u.morphTargetInfluences;if(t.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let m=r.get(h);if(m===void 0||m.count!==g){let W=function(){U.dispose(),r.delete(h),h.removeEventListener("dispose",W)};var f=W;m!==void 0&&m.texture.dispose();const y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let M=0;y===!0&&(M=1),_===!0&&(M=2),S===!0&&(M=3);let E=h.attributes.position.count*M,I=1;E>t.maxTextureSize&&(I=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const V=new Float32Array(E*I*4*g),U=new qo(V,E,I,g);U.type=In,U.needsUpdate=!0;const H=M*4;for(let nt=0;nt<g;nt++){const O=b[nt],N=C[nt],K=D[nt],k=E*I*4*nt;for(let A=0;A<O.count;A++){const B=A*H;y===!0&&(a.fromBufferAttribute(O,A),V[k+B+0]=a.x,V[k+B+1]=a.y,V[k+B+2]=a.z,V[k+B+3]=0),_===!0&&(a.fromBufferAttribute(N,A),V[k+B+4]=a.x,V[k+B+5]=a.y,V[k+B+6]=a.z,V[k+B+7]=0),S===!0&&(a.fromBufferAttribute(K,A),V[k+B+8]=a.x,V[k+B+9]=a.y,V[k+B+10]=a.z,V[k+B+11]=K.itemSize===4?a.w:1)}}m={count:g,texture:U,size:new he(E,I)},r.set(h,m),h.addEventListener("dispose",W)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];const x=h.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",d),l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==v){g=[];for(let _=0;_<v;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<v;_++){const S=g[_];S[0]=_,S[1]=d[_]}g.sort(Xd);for(let _=0;_<8;_++)_<v&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(kd);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let x=0;for(let _=0;_<8;_++){const S=o[_],b=S[0],C=S[1];b!==Number.MAX_SAFE_INTEGER&&C?(m&&h.getAttribute("morphTarget"+_)!==m[b]&&h.setAttribute("morphTarget"+_,m[b]),p&&h.getAttribute("morphNormal"+_)!==p[b]&&h.setAttribute("morphNormal"+_,p[b]),s[_]=C,x+=C):(m&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}const y=h.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Yd(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==u&&(t.update(l),s.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return l}function a(){s=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}const tl=new je,el=new qo,nl=new Uc,il=new Jo,qa=[],Ya=[],ja=new Float32Array(16),Za=new Float32Array(9),Ka=new Float32Array(4);function Ai(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=qa[s];if(r===void 0&&(r=new Float32Array(s),qa[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Dr(i,t){let e=Ya[t];e===void 0&&(e=new Int32Array(t),Ya[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function Kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function $d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Jd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Ka.set(n),i.uniformMatrix2fv(this.addr,!1,Ka),Te(e,n)}}function Qd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Za.set(n),i.uniformMatrix3fv(this.addr,!1,Za),Te(e,n)}}function tf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;ja.set(n),i.uniformMatrix4fv(this.addr,!1,ja),Te(e,n)}}function ef(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function af(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function hf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2D(t||tl,s)}function uf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nl,s)}function df(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||il,s)}function ff(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||el,s)}function pf(i){switch(i){case 5126:return jd;case 35664:return Zd;case 35665:return Kd;case 35666:return $d;case 35674:return Jd;case 35675:return Qd;case 35676:return tf;case 5124:case 35670:return ef;case 35667:case 35671:return nf;case 35668:case 35672:return rf;case 35669:case 35673:return sf;case 5125:return af;case 36294:return of;case 36295:return lf;case 36296:return cf;case 35678:case 36198:case 36298:case 36306:case 35682:return hf;case 35679:case 36299:case 36307:return uf;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return ff}}function mf(i,t){i.uniform1fv(this.addr,t)}function vf(i,t){const e=Ai(t,this.size,2);i.uniform2fv(this.addr,e)}function gf(i,t){const e=Ai(t,this.size,3);i.uniform3fv(this.addr,e)}function _f(i,t){const e=Ai(t,this.size,4);i.uniform4fv(this.addr,e)}function xf(i,t){const e=Ai(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function yf(i,t){const e=Ai(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mf(i,t){const e=Ai(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sf(i,t){i.uniform1iv(this.addr,t)}function Ef(i,t){i.uniform2iv(this.addr,t)}function wf(i,t){i.uniform3iv(this.addr,t)}function Tf(i,t){i.uniform4iv(this.addr,t)}function bf(i,t){i.uniform1uiv(this.addr,t)}function Af(i,t){i.uniform2uiv(this.addr,t)}function Rf(i,t){i.uniform3uiv(this.addr,t)}function Cf(i,t){i.uniform4uiv(this.addr,t)}function Pf(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||tl,r[a])}function Lf(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||nl,r[a])}function If(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||il,r[a])}function Uf(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||el,r[a])}function Df(i){switch(i){case 5126:return mf;case 35664:return vf;case 35665:return gf;case 35666:return _f;case 35674:return xf;case 35675:return yf;case 35676:return Mf;case 5124:case 35670:return Sf;case 35667:case 35671:return Ef;case 35668:case 35672:return wf;case 35669:case 35673:return Tf;case 5125:return bf;case 36294:return Af;case 36295:return Rf;case 36296:return Cf;case 35678:case 36198:case 36298:case 36306:case 35682:return Pf;case 35679:case 36299:case 36307:return Lf;case 35680:case 36300:case 36308:case 36293:return If;case 36289:case 36303:case 36311:case 36292:return Uf}}class Ff{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=pf(e.type)}}class Nf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Df(e.type)}}class Bf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ls=/(\w+)(\])?(\[|\.)?/g;function $a(i,t){i.seq.push(t),i.map[t.id]=t}function Of(i,t,e){const n=i.name,s=n.length;for(ls.lastIndex=0;;){const r=ls.exec(n),a=ls.lastIndex;let o=r[1];const c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){$a(e,u===void 0?new Ff(o,i,t):new Nf(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new Bf(o),$a(e,l)),e=l}}}class xr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Of(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ja(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let zf=0;function Vf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Hf(i){switch(i){case hn:return["Linear","( value )"];case ie:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Qa(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vf(i.getShaderSource(t),a)}else return s}function Gf(i,t){const e=Hf(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Wf(i,t){let e;switch(t){case Bl:e="Linear";break;case Ol:e="Reinhard";break;case zl:e="OptimizedCineon";break;case Vl:e="ACESFilmic";break;case Hl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Di).join(`
`)}function Xf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Di(i){return i!==""}function to(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Es(i){return i.replace(Yf,Zf)}const jf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zf(i,t){let e=ne[t];if(e===void 0){const n=jf.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Es(e)}const Kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function no(i){return i.replace(Kf,$f)}function $f(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function io(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Po?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ml?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Qf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case xi:t="ENVMAP_TYPE_CUBE";break;case Pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xi:t="ENVMAP_MODE_REFRACTION";break}return t}function ep(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cr:t="ENVMAP_BLENDING_MULTIPLY";break;case Fl:t="ENVMAP_BLENDING_MIX";break;case Nl:t="ENVMAP_BLENDING_ADD";break}return t}function np(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ip(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Jf(e),u=Qf(e),h=tp(e),l=ep(e),d=np(e),f=e.isWebGL2?"":kf(e),v=Xf(r),g=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Di).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Di).join(`
`),p.length>0&&(p+=`
`)):(m=[io(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),p=[f,io(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?ne.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Wf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Gf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Di).join(`
`)),a=Es(a),a=to(a,e),a=eo(a,e),o=Es(o),o=to(o,e),o=eo(o,e),a=no(a),o=no(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+a,_=x+p+o,S=Ja(s,s.VERTEX_SHADER,y),b=Ja(s,s.FRAGMENT_SHADER,_);if(s.attachShader(g,S),s.attachShader(g,b),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g),i.debug.checkShaderErrors){const M=s.getProgramInfoLog(g).trim(),E=s.getShaderInfoLog(S).trim(),I=s.getShaderInfoLog(b).trim();let V=!0,U=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,b);else{const H=Qa(s,S,"vertex"),W=Qa(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+H+`
`+W)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(E===""||I==="")&&(U=!1);U&&(this.diagnostics={runnable:V,programLog:M,vertexShader:{log:E,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(S),s.deleteShader(b);let C;this.getUniforms=function(){return C===void 0&&(C=new xr(s,g)),C};let D;return this.getAttributes=function(){return D===void 0&&(D=qf(s,g)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=b,this}let rp=0;class sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ap(t),e.set(t,n)),n}}class ap{constructor(t){this.id=rp++,this.code=t,this.usedTimes=0}}function op(i,t,e,n,s,r,a){const o=new Is,c=new sp,u=[],h=s.isWebGL2,l=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,E,I,V,U){const H=V.fog,W=U.geometry,nt=M.isMeshStandardMaterial?V.environment:null,O=(M.isMeshStandardMaterial?e:t).get(M.envMap||nt),N=O&&O.mapping===Pr?O.image.height:null,K=v[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const k=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,A=k!==void 0?k.length:0;let B=0;W.morphAttributes.position!==void 0&&(B=1),W.morphAttributes.normal!==void 0&&(B=2),W.morphAttributes.color!==void 0&&(B=3);let F,P,R,j;if(K){const te=ln[K];F=te.vertexShader,P=te.fragmentShader}else F=M.vertexShader,P=M.fragmentShader,c.update(M),R=c.getVertexShaderID(M),j=c.getFragmentShaderID(M);const st=i.getRenderTarget(),tt=U.isInstancedMesh===!0,Z=!!M.map,dt=!!M.matcap,ht=!!O,X=!!M.aoMap,Tt=!!M.lightMap,pt=!!M.bumpMap,rt=!!M.normalMap,ct=!!M.displacementMap,Yt=!!M.emissiveMap,At=!!M.metalnessMap,Gt=!!M.roughnessMap,yt=M.anisotropy>0,jt=M.clearcoat>0,Jt=M.iridescence>0,L=M.sheen>0,T=M.transmission>0,J=yt&&!!M.anisotropyMap,mt=jt&&!!M.clearcoatMap,ft=jt&&!!M.clearcoatNormalMap,gt=jt&&!!M.clearcoatRoughnessMap,Bt=Jt&&!!M.iridescenceMap,Et=Jt&&!!M.iridescenceThicknessMap,ot=L&&!!M.sheenColorMap,qt=L&&!!M.sheenRoughnessMap,Wt=!!M.specularMap,kt=!!M.specularColorMap,Vt=!!M.specularIntensityMap,Ot=T&&!!M.transmissionMap,$t=T&&!!M.thicknessMap,re=!!M.gradientMap,q=!!M.alphaMap,Ct=M.alphaTest>0,at=!!M.alphaHash,xt=!!M.extensions,Ut=!!W.attributes.uv1,ee=!!W.attributes.uv2,ue=!!W.attributes.uv3;let fe=Dn;return M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(fe=i.toneMapping),{isWebGL2:h,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:F,fragmentShader:P,defines:M.defines,customVertexShaderID:R,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:tt,instancingColor:tt&&U.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:hn,map:Z,matcap:dt,envMap:ht,envMapMode:ht&&O.mapping,envMapCubeUVHeight:N,aoMap:X,lightMap:Tt,bumpMap:pt,normalMap:rt,displacementMap:d&&ct,emissiveMap:Yt,normalMapObjectSpace:rt&&M.normalMapType===tc,normalMapTangentSpace:rt&&M.normalMapType===Ps,metalnessMap:At,roughnessMap:Gt,anisotropy:yt,anisotropyMap:J,clearcoat:jt,clearcoatMap:mt,clearcoatNormalMap:ft,clearcoatRoughnessMap:gt,iridescence:Jt,iridescenceMap:Bt,iridescenceThicknessMap:Et,sheen:L,sheenColorMap:ot,sheenRoughnessMap:qt,specularMap:Wt,specularColorMap:kt,specularIntensityMap:Vt,transmission:T,transmissionMap:Ot,thicknessMap:$t,gradientMap:re,opaque:M.transparent===!1&&M.blending===vi,alphaMap:q,alphaTest:Ct,alphaHash:at,combine:M.combine,mapUv:Z&&g(M.map.channel),aoMapUv:X&&g(M.aoMap.channel),lightMapUv:Tt&&g(M.lightMap.channel),bumpMapUv:pt&&g(M.bumpMap.channel),normalMapUv:rt&&g(M.normalMap.channel),displacementMapUv:ct&&g(M.displacementMap.channel),emissiveMapUv:Yt&&g(M.emissiveMap.channel),metalnessMapUv:At&&g(M.metalnessMap.channel),roughnessMapUv:Gt&&g(M.roughnessMap.channel),anisotropyMapUv:J&&g(M.anisotropyMap.channel),clearcoatMapUv:mt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:qt&&g(M.sheenRoughnessMap.channel),specularMapUv:Wt&&g(M.specularMap.channel),specularColorMapUv:kt&&g(M.specularColorMap.channel),specularIntensityMapUv:Vt&&g(M.specularIntensityMap.channel),transmissionMapUv:Ot&&g(M.transmissionMap.channel),thicknessMapUv:$t&&g(M.thicknessMap.channel),alphaMapUv:q&&g(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(rt||yt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:ee,vertexUv3s:ue,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(Z||q),fog:!!H,useFog:M.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:B,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,useLegacyLights:i._useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===wn,flipSided:M.side===He,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:xt&&M.extensions.derivatives===!0,extensionFragDepth:xt&&M.extensions.fragDepth===!0,extensionDrawBuffers:xt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)E.push(I),E.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(x(E,M),y(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function x(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),M.push(o.mask)}function _(M){const E=v[M.type];let I;if(E){const V=ln[E];I=Xc.clone(V.uniforms)}else I=M.uniforms;return I}function S(M,E){let I;for(let V=0,U=u.length;V<U;V++){const H=u[V];if(H.cacheKey===E){I=H,++I.usedTimes;break}}return I===void 0&&(I=new ip(i,E,M,r),u.push(I)),I}function b(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function C(M){c.remove(M)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:b,releaseShaderCache:C,programs:u,dispose:D}}function lp(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function cp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ro(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function so(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(l,d,f,v,g,m){let p=i[t];return p===void 0?(p={id:l.id,object:l,geometry:d,material:f,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=p):(p.id=l.id,p.object=l,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=l.renderOrder,p.z=g,p.group=m),t++,p}function o(l,d,f,v,g,m){const p=a(l,d,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(l,d,f,v,g,m){const p=a(l,d,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function u(l,d){e.length>1&&e.sort(l||cp),n.length>1&&n.sort(d||ro),s.length>1&&s.sort(d||ro)}function h(){for(let l=t,d=i.length;l<d;l++){const f=i[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:u}}function hp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new so,i.set(n,[a])):s>=r.length?(a=new so,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function up(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new ce};break;case"SpotLight":e={position:new $,direction:new $,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function dp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let fp=0;function pp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mp(i,t){const e=new up,n=dp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)s.probe.push(new $);const r=new $,a=new Me,o=new Me;function c(h,l){let d=0,f=0,v=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let g=0,m=0,p=0,x=0,y=0,_=0,S=0,b=0,C=0,D=0;h.sort(pp);const M=l===!0?Math.PI:1;for(let I=0,V=h.length;I<V;I++){const U=h[I],H=U.color,W=U.intensity,nt=U.distance,O=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=H.r*W*M,f+=H.g*W*M,v+=H.b*W*M;else if(U.isLightProbe)for(let N=0;N<9;N++)s.probe[N].addScaledVector(U.sh.coefficients[N],W);else if(U.isDirectionalLight){const N=e.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const K=U.shadow,k=n.get(U);k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,s.directionalShadow[g]=k,s.directionalShadowMap[g]=O,s.directionalShadowMatrix[g]=U.shadow.matrix,_++}s.directional[g]=N,g++}else if(U.isSpotLight){const N=e.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(H).multiplyScalar(W*M),N.distance=nt,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,s.spot[p]=N;const K=U.shadow;if(U.map&&(s.spotLightMap[C]=U.map,C++,K.updateMatrices(U),U.castShadow&&D++),s.spotLightMatrix[p]=K.matrix,U.castShadow){const k=n.get(U);k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,s.spotShadow[p]=k,s.spotShadowMap[p]=O,b++}p++}else if(U.isRectAreaLight){const N=e.get(U);N.color.copy(H).multiplyScalar(W),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),s.rectArea[x]=N,x++}else if(U.isPointLight){const N=e.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity*M),N.distance=U.distance,N.decay=U.decay,U.castShadow){const K=U.shadow,k=n.get(U);k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,s.pointShadow[m]=k,s.pointShadowMap[m]=O,s.pointShadowMatrix[m]=U.shadow.matrix,S++}s.point[m]=N,m++}else if(U.isHemisphereLight){const N=e.get(U);N.skyColor.copy(U.color).multiplyScalar(W*M),N.groundColor.copy(U.groundColor).multiplyScalar(W*M),s.hemi[y]=N,y++}}x>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=v;const E=s.hash;(E.directionalLength!==g||E.pointLength!==m||E.spotLength!==p||E.rectAreaLength!==x||E.hemiLength!==y||E.numDirectionalShadows!==_||E.numPointShadows!==S||E.numSpotShadows!==b||E.numSpotMaps!==C)&&(s.directional.length=g,s.spot.length=p,s.rectArea.length=x,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=_,s.directionalShadowMap.length=_,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=_,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=b+C-D,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=D,E.directionalLength=g,E.pointLength=m,E.spotLength=p,E.rectAreaLength=x,E.hemiLength=y,E.numDirectionalShadows=_,E.numPointShadows=S,E.numSpotShadows=b,E.numSpotMaps=C,s.version=fp++)}function u(h,l){let d=0,f=0,v=0,g=0,m=0;const p=l.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){const _=h[x];if(_.isDirectionalLight){const S=s.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(_.isSpotLight){const S=s.spot[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),v++}else if(_.isRectAreaLight){const S=s.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),o.identity(),a.copy(_.matrixWorld),a.premultiply(p),o.extractRotation(a),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=s.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const S=s.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:c,setupView:u,state:s}}function ao(i,t){const e=new mp(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(l){n.push(l)}function o(l){s.push(l)}function c(l){e.setup(n,l)}function u(l){e.setupView(n,l)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}function vp(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new ao(i,t),e.set(r,[c])):a>=o.length?(c=new ao(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class gp extends un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _p extends un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yp=`uniform sampler2D shadow_pass;
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
}`;function Mp(i,t,e){let n=new Ds;const s=new he,r=new he,a=new Ae,o=new gp({depthPacking:Ql}),c=new _p,u={},h=e.maxTextureSize,l={[Nn]:He,[He]:Nn,[wn]:wn},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:xp,fragmentShader:yp}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Ve;v.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ye(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po;let p=this.type;this.render=function(S,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const D=i.getRenderTarget(),M=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Un),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const V=p!==En&&this.type===En,U=p===En&&this.type!==En;for(let H=0,W=S.length;H<W;H++){const nt=S[H],O=nt.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const N=O.getFrameExtents();if(s.multiply(N),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/N.x),s.x=r.x*N.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/N.y),s.y=r.y*N.y,O.mapSize.y=r.y)),O.map===null||V===!0||U===!0){const k=this.type!==En?{minFilter:ze,magFilter:ze}:{};O.map!==null&&O.map.dispose(),O.map=new Zn(s.x,s.y,k),O.map.texture.name=nt.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const K=O.getViewportCount();for(let k=0;k<K;k++){const A=O.getViewport(k);a.set(r.x*A.x,r.y*A.y,r.x*A.z,r.y*A.w),I.viewport(a),O.updateMatrices(nt,k),n=O.getFrustum(),_(b,C,O.camera,nt,this.type)}O.isPointLightShadow!==!0&&this.type===En&&x(O,C),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(D,M,E)};function x(S,b){const C=t.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Zn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(b,null,C,d,g,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(b,null,C,f,g,null)}function y(S,b,C,D){let M=null;const E=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)M=E;else if(M=C.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=M.uuid,V=b.uuid;let U=u[I];U===void 0&&(U={},u[I]=U);let H=U[V];H===void 0&&(H=M.clone(),U[V]=H),M=H}if(M.visible=b.visible,M.wireframe=b.wireframe,D===En?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:l[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=C}return M}function _(S,b,C,D,M){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===En)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const V=t.update(S),U=S.material;if(Array.isArray(U)){const H=V.groups;for(let W=0,nt=H.length;W<nt;W++){const O=H[W],N=U[O.materialIndex];if(N&&N.visible){const K=y(S,N,D,M);i.renderBufferDirect(C,null,V,K,S,O)}}}else if(U.visible){const H=y(S,U,D,M);i.renderBufferDirect(C,null,V,H,S,null)}}const I=S.children;for(let V=0,U=I.length;V<U;V++)_(I[V],b,C,D,M)}}function Sp(i,t,e){const n=e.isWebGL2;function s(){let q=!1;const Ct=new Ae;let at=null;const xt=new Ae(0,0,0,0);return{setMask:function(Ut){at!==Ut&&!q&&(i.colorMask(Ut,Ut,Ut,Ut),at=Ut)},setLocked:function(Ut){q=Ut},setClear:function(Ut,ee,ue,fe,Ne){Ne===!0&&(Ut*=fe,ee*=fe,ue*=fe),Ct.set(Ut,ee,ue,fe),xt.equals(Ct)===!1&&(i.clearColor(Ut,ee,ue,fe),xt.copy(Ct))},reset:function(){q=!1,at=null,xt.set(-1,0,0,0)}}}function r(){let q=!1,Ct=null,at=null,xt=null;return{setTest:function(Ut){Ut?st(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(Ut){Ct!==Ut&&!q&&(i.depthMask(Ut),Ct=Ut)},setFunc:function(Ut){if(at!==Ut){switch(Ut){case Rl:i.depthFunc(i.NEVER);break;case Cl:i.depthFunc(i.ALWAYS);break;case Pl:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Ll:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Ul:i.depthFunc(i.GREATER);break;case Dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=Ut}},setLocked:function(Ut){q=Ut},setClear:function(Ut){xt!==Ut&&(i.clearDepth(Ut),xt=Ut)},reset:function(){q=!1,Ct=null,at=null,xt=null}}}function a(){let q=!1,Ct=null,at=null,xt=null,Ut=null,ee=null,ue=null,fe=null,Ne=null;return{setTest:function(te){q||(te?st(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(te){Ct!==te&&!q&&(i.stencilMask(te),Ct=te)},setFunc:function(te,lt,ut){(at!==te||xt!==lt||Ut!==ut)&&(i.stencilFunc(te,lt,ut),at=te,xt=lt,Ut=ut)},setOp:function(te,lt,ut){(ee!==te||ue!==lt||fe!==ut)&&(i.stencilOp(te,lt,ut),ee=te,ue=lt,fe=ut)},setLocked:function(te){q=te},setClear:function(te){Ne!==te&&(i.clearStencil(te),Ne=te)},reset:function(){q=!1,Ct=null,at=null,xt=null,Ut=null,ee=null,ue=null,fe=null,Ne=null}}}const o=new s,c=new r,u=new a,h=new WeakMap,l=new WeakMap;let d={},f={},v=new WeakMap,g=[],m=null,p=!1,x=null,y=null,_=null,S=null,b=null,C=null,D=null,M=!1,E=null,I=null,V=null,U=null,H=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,O=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(N)[1]),nt=O>=1):N.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),nt=O>=2);let K=null,k={};const A=i.getParameter(i.SCISSOR_BOX),B=i.getParameter(i.VIEWPORT),F=new Ae().fromArray(A),P=new Ae().fromArray(B);function R(q,Ct,at,xt){const Ut=new Uint8Array(4),ee=i.createTexture();i.bindTexture(q,ee),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<at;ue++)n&&(q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ct,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Ct+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return ee}const j={};j[i.TEXTURE_2D]=R(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=R(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(j[i.TEXTURE_2D_ARRAY]=R(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=R(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),st(i.DEPTH_TEST),c.setFunc(vs),ct(!1),Yt(Xs),st(i.CULL_FACE),pt(Un);function st(q){d[q]!==!0&&(i.enable(q),d[q]=!0)}function tt(q){d[q]!==!1&&(i.disable(q),d[q]=!1)}function Z(q,Ct){return f[q]!==Ct?(i.bindFramebuffer(q,Ct),f[q]=Ct,n&&(q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ct),q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ct)),!0):!1}function dt(q,Ct){let at=g,xt=!1;if(q)if(at=v.get(Ct),at===void 0&&(at=[],v.set(Ct,at)),q.isWebGLMultipleRenderTargets){const Ut=q.texture;if(at.length!==Ut.length||at[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,ue=Ut.length;ee<ue;ee++)at[ee]=i.COLOR_ATTACHMENT0+ee;at.length=Ut.length,xt=!0}}else at[0]!==i.COLOR_ATTACHMENT0&&(at[0]=i.COLOR_ATTACHMENT0,xt=!0);else at[0]!==i.BACK&&(at[0]=i.BACK,xt=!0);xt&&(e.isWebGL2?i.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function ht(q){return m!==q?(i.useProgram(q),m=q,!0):!1}const X={[fi]:i.FUNC_ADD,[gl]:i.FUNC_SUBTRACT,[_l]:i.FUNC_REVERSE_SUBTRACT};if(n)X[Zs]=i.MIN,X[Ks]=i.MAX;else{const q=t.get("EXT_blend_minmax");q!==null&&(X[Zs]=q.MIN_EXT,X[Ks]=q.MAX_EXT)}const Tt={[xl]:i.ZERO,[yl]:i.ONE,[Ml]:i.SRC_COLOR,[Lo]:i.SRC_ALPHA,[Al]:i.SRC_ALPHA_SATURATE,[Tl]:i.DST_COLOR,[El]:i.DST_ALPHA,[Sl]:i.ONE_MINUS_SRC_COLOR,[Io]:i.ONE_MINUS_SRC_ALPHA,[bl]:i.ONE_MINUS_DST_COLOR,[wl]:i.ONE_MINUS_DST_ALPHA};function pt(q,Ct,at,xt,Ut,ee,ue,fe){if(q===Un){p===!0&&(tt(i.BLEND),p=!1);return}if(p===!1&&(st(i.BLEND),p=!0),q!==vl){if(q!==x||fe!==M){if((y!==fi||b!==fi)&&(i.blendEquation(i.FUNC_ADD),y=fi,b=fi),fe)switch(q){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qs:i.blendFunc(i.ONE,i.ONE);break;case Ys:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case js:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ys:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case js:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}_=null,S=null,C=null,D=null,x=q,M=fe}return}Ut=Ut||Ct,ee=ee||at,ue=ue||xt,(Ct!==y||Ut!==b)&&(i.blendEquationSeparate(X[Ct],X[Ut]),y=Ct,b=Ut),(at!==_||xt!==S||ee!==C||ue!==D)&&(i.blendFuncSeparate(Tt[at],Tt[xt],Tt[ee],Tt[ue]),_=at,S=xt,C=ee,D=ue),x=q,M=!1}function rt(q,Ct){q.side===wn?tt(i.CULL_FACE):st(i.CULL_FACE);let at=q.side===He;Ct&&(at=!at),ct(at),q.blending===vi&&q.transparent===!1?pt(Un):pt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),o.setMask(q.colorWrite);const xt=q.stencilWrite;u.setTest(xt),xt&&(u.setMask(q.stencilWriteMask),u.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),u.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Gt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(q){E!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),E=q)}function Yt(q){q!==fl?(st(i.CULL_FACE),q!==I&&(q===Xs?i.cullFace(i.BACK):q===pl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),I=q}function At(q){q!==V&&(nt&&i.lineWidth(q),V=q)}function Gt(q,Ct,at){q?(st(i.POLYGON_OFFSET_FILL),(U!==Ct||H!==at)&&(i.polygonOffset(Ct,at),U=Ct,H=at)):tt(i.POLYGON_OFFSET_FILL)}function yt(q){q?st(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function jt(q){q===void 0&&(q=i.TEXTURE0+W-1),K!==q&&(i.activeTexture(q),K=q)}function Jt(q,Ct,at){at===void 0&&(K===null?at=i.TEXTURE0+W-1:at=K);let xt=k[at];xt===void 0&&(xt={type:void 0,texture:void 0},k[at]=xt),(xt.type!==q||xt.texture!==Ct)&&(K!==at&&(i.activeTexture(at),K=at),i.bindTexture(q,Ct||j[q]),xt.type=q,xt.texture=Ct)}function L(){const q=k[K];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function T(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function mt(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Et(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qt(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function kt(q){F.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),F.copy(q))}function Vt(q){P.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),P.copy(q))}function Ot(q,Ct){let at=l.get(Ct);at===void 0&&(at=new WeakMap,l.set(Ct,at));let xt=at.get(q);xt===void 0&&(xt=i.getUniformBlockIndex(Ct,q.name),at.set(q,xt))}function $t(q,Ct){const xt=l.get(Ct).get(q);h.get(Ct)!==xt&&(i.uniformBlockBinding(Ct,xt,q.__bindingPointIndex),h.set(Ct,xt))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},K=null,k={},f={},v=new WeakMap,g=[],m=null,p=!1,x=null,y=null,_=null,S=null,b=null,C=null,D=null,M=!1,E=null,I=null,V=null,U=null,H=null,F.set(0,0,i.canvas.width,i.canvas.height),P.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:st,disable:tt,bindFramebuffer:Z,drawBuffers:dt,useProgram:ht,setBlending:pt,setMaterial:rt,setFlipSided:ct,setCullFace:Yt,setLineWidth:At,setPolygonOffset:Gt,setScissorTest:yt,activeTexture:jt,bindTexture:Jt,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:J,texImage2D:qt,texImage3D:Wt,updateUBOMapping:Ot,uniformBlockBinding:$t,texStorage2D:Et,texStorage3D:ot,texSubImage2D:mt,texSubImage3D:ft,compressedTexSubImage2D:gt,compressedTexSubImage3D:Bt,scissor:kt,viewport:Vt,reset:re}}function Ep(i,t,e,n,s,r,a){const o=s.isWebGL2,c=s.maxTextures,u=s.maxCubemapSize,h=s.maxTextureSize,l=s.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,T){return p?new OffscreenCanvas(L,T):br("canvas")}function y(L,T,J,mt){let ft=1;if((L.width>mt||L.height>mt)&&(ft=mt/Math.max(L.width,L.height)),ft<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const gt=T?Tr:Math.floor,Bt=gt(ft*L.width),Et=gt(ft*L.height);g===void 0&&(g=x(Bt,Et));const ot=J?x(Bt,Et):g;return ot.width=Bt,ot.height=Et,ot.getContext("2d").drawImage(L,0,0,Bt,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Bt+"x"+Et+")."),ot}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function _(L){return Ss(L.width)&&Ss(L.height)}function S(L){return o?!1:L.wrapS!==sn||L.wrapT!==sn||L.minFilter!==ze&&L.minFilter!==$e}function b(L,T){return L.generateMipmaps&&T&&L.minFilter!==ze&&L.minFilter!==$e}function C(L){i.generateMipmap(L)}function D(L,T,J,mt,ft=!1){if(o===!1)return T;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let gt=T;return T===i.RED&&(J===i.FLOAT&&(gt=i.R32F),J===i.HALF_FLOAT&&(gt=i.R16F),J===i.UNSIGNED_BYTE&&(gt=i.R8)),T===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(gt=i.R8UI),J===i.UNSIGNED_SHORT&&(gt=i.R16UI),J===i.UNSIGNED_INT&&(gt=i.R32UI),J===i.BYTE&&(gt=i.R8I),J===i.SHORT&&(gt=i.R16I),J===i.INT&&(gt=i.R32I)),T===i.RG&&(J===i.FLOAT&&(gt=i.RG32F),J===i.HALF_FLOAT&&(gt=i.RG16F),J===i.UNSIGNED_BYTE&&(gt=i.RG8)),T===i.RGBA&&(J===i.FLOAT&&(gt=i.RGBA32F),J===i.HALF_FLOAT&&(gt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(gt=mt===ie&&ft===!1?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)),(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function M(L,T,J){return b(L,J)===!0||L.isFramebufferTexture&&L.minFilter!==ze&&L.minFilter!==$e?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function E(L){return L===ze||L===$s||L===Nr?i.NEAREST:i.LINEAR}function I(L){const T=L.target;T.removeEventListener("dispose",I),U(T),T.isVideoTexture&&v.delete(T)}function V(L){const T=L.target;T.removeEventListener("dispose",V),W(T)}function U(L){const T=n.get(L);if(T.__webglInit===void 0)return;const J=L.source,mt=m.get(J);if(mt){const ft=mt[T.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&H(L),Object.keys(mt).length===0&&m.delete(J)}n.remove(L)}function H(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const J=L.source,mt=m.get(J);delete mt[T.__cacheKey],a.memory.textures--}function W(L){const T=L.texture,J=n.get(L),mt=n.get(T);if(mt.__webglTexture!==void 0&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(J.__webglFramebuffer[ft]))for(let gt=0;gt<J.__webglFramebuffer[ft].length;gt++)i.deleteFramebuffer(J.__webglFramebuffer[ft][gt]);else i.deleteFramebuffer(J.__webglFramebuffer[ft]);J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[ft])}else{if(Array.isArray(J.__webglFramebuffer))for(let ft=0;ft<J.__webglFramebuffer.length;ft++)i.deleteFramebuffer(J.__webglFramebuffer[ft]);else i.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let ft=0;ft<J.__webglColorRenderbuffer.length;ft++)J.__webglColorRenderbuffer[ft]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[ft]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ft=0,gt=T.length;ft<gt;ft++){const Bt=n.get(T[ft]);Bt.__webglTexture&&(i.deleteTexture(Bt.__webglTexture),a.memory.textures--),n.remove(T[ft])}n.remove(T),n.remove(L)}let nt=0;function O(){nt=0}function N(){const L=nt;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),nt+=1,L}function K(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function k(L,T){const J=n.get(L);if(L.isVideoTexture&&jt(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const mt=L.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(J,L,T);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+T)}function A(L,T){const J=n.get(L);if(L.version>0&&J.__version!==L.version){Z(J,L,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+T)}function B(L,T){const J=n.get(L);if(L.version>0&&J.__version!==L.version){Z(J,L,T);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+T)}function F(L,T){const J=n.get(L);if(L.version>0&&J.__version!==L.version){dt(J,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+T)}const P={[xs]:i.REPEAT,[sn]:i.CLAMP_TO_EDGE,[ys]:i.MIRRORED_REPEAT},R={[ze]:i.NEAREST,[$s]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[Gl]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},j={[nc]:i.NEVER,[cc]:i.ALWAYS,[ic]:i.LESS,[sc]:i.LEQUAL,[rc]:i.EQUAL,[lc]:i.GEQUAL,[ac]:i.GREATER,[oc]:i.NOTEQUAL};function st(L,T,J){if(J?(i.texParameteri(L,i.TEXTURE_WRAP_S,P[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,P[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,P[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,R[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,R[T.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==sn||T.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,E(T.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,E(T.minFilter)),T.minFilter!==ze&&T.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,j[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const mt=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===ze||T.minFilter!==Nr&&T.minFilter!==Hi||T.type===In&&t.has("OES_texture_float_linear")===!1||o===!1&&T.type===Gi&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(L,mt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function tt(L,T){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",I));const mt=T.source;let ft=m.get(mt);ft===void 0&&(ft={},m.set(mt,ft));const gt=K(T);if(gt!==L.__cacheKey){ft[gt]===void 0&&(ft[gt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ft[gt].usedTimes++;const Bt=ft[L.__cacheKey];Bt!==void 0&&(ft[L.__cacheKey].usedTimes--,Bt.usedTimes===0&&H(T)),L.__cacheKey=gt,L.__webglTexture=ft[gt].texture}return J}function Z(L,T,J){let mt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=i.TEXTURE_3D);const ft=tt(L,T),gt=T.source;e.bindTexture(mt,L.__webglTexture,i.TEXTURE0+J);const Bt=n.get(gt);if(gt.version!==Bt.__version||ft===!0){e.activeTexture(i.TEXTURE0+J),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Et=S(T)&&_(T.image)===!1;let ot=y(T.image,Et,!1,h);ot=Jt(T,ot);const qt=_(ot)||o,Wt=r.convert(T.format,T.colorSpace);let kt=r.convert(T.type),Vt=D(T.internalFormat,Wt,kt,T.colorSpace);st(mt,T,qt);let Ot;const $t=T.mipmaps,re=o&&T.isVideoTexture!==!0,q=Bt.__version===void 0||ft===!0,Ct=M(T,ot,qt);if(T.isDepthTexture)Vt=i.DEPTH_COMPONENT,o?T.type===In?Vt=i.DEPTH_COMPONENT32F:T.type===Ln?Vt=i.DEPTH_COMPONENT24:T.type===Xn?Vt=i.DEPTH24_STENCIL8:Vt=i.DEPTH_COMPONENT16:T.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===qn&&Vt===i.DEPTH_COMPONENT&&T.type!==Cs&&T.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ln,kt=r.convert(T.type)),T.format===yi&&Vt===i.DEPTH_COMPONENT&&(Vt=i.DEPTH_STENCIL,T.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Xn,kt=r.convert(T.type))),q&&(re?e.texStorage2D(i.TEXTURE_2D,1,Vt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Vt,ot.width,ot.height,0,Wt,kt,null));else if(T.isDataTexture)if($t.length>0&&qt){re&&q&&e.texStorage2D(i.TEXTURE_2D,Ct,Vt,$t[0].width,$t[0].height);for(let at=0,xt=$t.length;at<xt;at++)Ot=$t[at],re?e.texSubImage2D(i.TEXTURE_2D,at,0,0,Ot.width,Ot.height,Wt,kt,Ot.data):e.texImage2D(i.TEXTURE_2D,at,Vt,Ot.width,Ot.height,0,Wt,kt,Ot.data);T.generateMipmaps=!1}else re?(q&&e.texStorage2D(i.TEXTURE_2D,Ct,Vt,ot.width,ot.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,Wt,kt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,ot.width,ot.height,0,Wt,kt,ot.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){re&&q&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Vt,$t[0].width,$t[0].height,ot.depth);for(let at=0,xt=$t.length;at<xt;at++)Ot=$t[at],T.format!==an?Wt!==null?re?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Ot.width,Ot.height,ot.depth,Wt,Ot.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Vt,Ot.width,Ot.height,ot.depth,0,Ot.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Ot.width,Ot.height,ot.depth,Wt,kt,Ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Vt,Ot.width,Ot.height,ot.depth,0,Wt,kt,Ot.data)}else{re&&q&&e.texStorage2D(i.TEXTURE_2D,Ct,Vt,$t[0].width,$t[0].height);for(let at=0,xt=$t.length;at<xt;at++)Ot=$t[at],T.format!==an?Wt!==null?re?e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,Ot.width,Ot.height,Wt,Ot.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Vt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?e.texSubImage2D(i.TEXTURE_2D,at,0,0,Ot.width,Ot.height,Wt,kt,Ot.data):e.texImage2D(i.TEXTURE_2D,at,Vt,Ot.width,Ot.height,0,Wt,kt,Ot.data)}else if(T.isDataArrayTexture)re?(q&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Vt,ot.width,ot.height,ot.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Wt,kt,ot.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,ot.width,ot.height,ot.depth,0,Wt,kt,ot.data);else if(T.isData3DTexture)re?(q&&e.texStorage3D(i.TEXTURE_3D,Ct,Vt,ot.width,ot.height,ot.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Wt,kt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,ot.width,ot.height,ot.depth,0,Wt,kt,ot.data);else if(T.isFramebufferTexture){if(q)if(re)e.texStorage2D(i.TEXTURE_2D,Ct,Vt,ot.width,ot.height);else{let at=ot.width,xt=ot.height;for(let Ut=0;Ut<Ct;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Vt,at,xt,0,Wt,kt,null),at>>=1,xt>>=1}}else if($t.length>0&&qt){re&&q&&e.texStorage2D(i.TEXTURE_2D,Ct,Vt,$t[0].width,$t[0].height);for(let at=0,xt=$t.length;at<xt;at++)Ot=$t[at],re?e.texSubImage2D(i.TEXTURE_2D,at,0,0,Wt,kt,Ot):e.texImage2D(i.TEXTURE_2D,at,Vt,Wt,kt,Ot);T.generateMipmaps=!1}else re?(q&&e.texStorage2D(i.TEXTURE_2D,Ct,Vt,ot.width,ot.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,kt,ot)):e.texImage2D(i.TEXTURE_2D,0,Vt,Wt,kt,ot);b(T,qt)&&C(mt),Bt.__version=gt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function dt(L,T,J){if(T.image.length!==6)return;const mt=tt(L,T),ft=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);const gt=n.get(ft);if(ft.version!==gt.__version||mt===!0){e.activeTexture(i.TEXTURE0+J),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Bt=T.isCompressedTexture||T.image[0].isCompressedTexture,Et=T.image[0]&&T.image[0].isDataTexture,ot=[];for(let at=0;at<6;at++)!Bt&&!Et?ot[at]=y(T.image[at],!1,!0,u):ot[at]=Et?T.image[at].image:T.image[at],ot[at]=Jt(T,ot[at]);const qt=ot[0],Wt=_(qt)||o,kt=r.convert(T.format,T.colorSpace),Vt=r.convert(T.type),Ot=D(T.internalFormat,kt,Vt,T.colorSpace),$t=o&&T.isVideoTexture!==!0,re=gt.__version===void 0||mt===!0;let q=M(T,qt,Wt);st(i.TEXTURE_CUBE_MAP,T,Wt);let Ct;if(Bt){$t&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,q,Ot,qt.width,qt.height);for(let at=0;at<6;at++){Ct=ot[at].mipmaps;for(let xt=0;xt<Ct.length;xt++){const Ut=Ct[xt];T.format!==an?kt!==null?$t?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,0,0,Ut.width,Ut.height,kt,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,Ot,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,0,0,Ut.width,Ut.height,kt,Vt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,Ot,Ut.width,Ut.height,0,kt,Vt,Ut.data)}}}else{Ct=T.mipmaps,$t&&re&&(Ct.length>0&&q++,e.texStorage2D(i.TEXTURE_CUBE_MAP,q,Ot,ot[0].width,ot[0].height));for(let at=0;at<6;at++)if(Et){$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,ot[at].width,ot[at].height,kt,Vt,ot[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Ot,ot[at].width,ot[at].height,0,kt,Vt,ot[at].data);for(let xt=0;xt<Ct.length;xt++){const ee=Ct[xt].image[at].image;$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,0,0,ee.width,ee.height,kt,Vt,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,Ot,ee.width,ee.height,0,kt,Vt,ee.data)}}else{$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,kt,Vt,ot[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Ot,kt,Vt,ot[at]);for(let xt=0;xt<Ct.length;xt++){const Ut=Ct[xt];$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,0,0,kt,Vt,Ut.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,Ot,kt,Vt,Ut.image[at])}}}b(T,Wt)&&C(i.TEXTURE_CUBE_MAP),gt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ht(L,T,J,mt,ft,gt){const Bt=r.convert(J.format,J.colorSpace),Et=r.convert(J.type),ot=D(J.internalFormat,Bt,Et,J.colorSpace);if(!n.get(T).__hasExternalTextures){const Wt=Math.max(1,T.width>>gt),kt=Math.max(1,T.height>>gt);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,gt,ot,Wt,kt,T.depth,0,Bt,Et,null):e.texImage2D(ft,gt,ot,Wt,kt,0,Bt,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),yt(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,ft,n.get(J).__webglTexture,0,Gt(T)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,mt,ft,n.get(J).__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(L,T,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer&&!T.stencilBuffer){let mt=i.DEPTH_COMPONENT16;if(J||yt(T)){const ft=T.depthTexture;ft&&ft.isDepthTexture&&(ft.type===In?mt=i.DEPTH_COMPONENT32F:ft.type===Ln&&(mt=i.DEPTH_COMPONENT24));const gt=Gt(T);yt(T)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,mt,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,mt,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,mt,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(T.depthBuffer&&T.stencilBuffer){const mt=Gt(T);J&&yt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,i.DEPTH24_STENCIL8,T.width,T.height):yt(T)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{const mt=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ft=0;ft<mt.length;ft++){const gt=mt[ft],Bt=r.convert(gt.format,gt.colorSpace),Et=r.convert(gt.type),ot=D(gt.internalFormat,Bt,Et,gt.colorSpace),qt=Gt(T);J&&yt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,ot,T.width,T.height):yt(T)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,ot,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ot,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const mt=n.get(T.depthTexture).__webglTexture,ft=Gt(T);if(T.depthTexture.format===qn)yt(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0);else if(T.depthTexture.format===yi)yt(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function pt(L){const T=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Tt(T.__webglFramebuffer,L)}else if(J){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]=i.createRenderbuffer(),X(T.__webglDepthbuffer[mt],L,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),X(T.__webglDepthbuffer,L,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(L,T,J){const mt=n.get(L);T!==void 0&&ht(mt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&pt(L)}function ct(L){const T=L.texture,J=n.get(L),mt=n.get(T);L.addEventListener("dispose",V),L.isWebGLMultipleRenderTargets!==!0&&(mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture()),mt.__version=T.version,a.memory.textures++);const ft=L.isWebGLCubeRenderTarget===!0,gt=L.isWebGLMultipleRenderTargets===!0,Bt=_(L)||o;if(ft){J.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(o&&T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Et]=[];for(let ot=0;ot<T.mipmaps.length;ot++)J.__webglFramebuffer[Et][ot]=i.createFramebuffer()}else J.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Et=0;Et<T.mipmaps.length;Et++)J.__webglFramebuffer[Et]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(gt)if(s.drawBuffers){const Et=L.texture;for(let ot=0,qt=Et.length;ot<qt;ot++){const Wt=n.get(Et[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&yt(L)===!1){const Et=gt?T:[T];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ot=0;ot<Et.length;ot++){const qt=Et[ot];J.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ot]);const Wt=r.convert(qt.format,qt.colorSpace),kt=r.convert(qt.type),Vt=D(qt.internalFormat,Wt,kt,qt.colorSpace,L.isXRRenderTarget===!0),Ot=Gt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Vt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,J.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),X(J.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),st(i.TEXTURE_CUBE_MAP,T,Bt);for(let Et=0;Et<6;Et++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let ot=0;ot<T.mipmaps.length;ot++)ht(J.__webglFramebuffer[Et][ot],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ot);else ht(J.__webglFramebuffer[Et],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);b(T,Bt)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){const Et=L.texture;for(let ot=0,qt=Et.length;ot<qt;ot++){const Wt=Et[ot],kt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,kt.__webglTexture),st(i.TEXTURE_2D,Wt,Bt),ht(J.__webglFramebuffer,L,Wt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),b(Wt,Bt)&&C(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?Et=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Et,mt.__webglTexture),st(Et,T,Bt),o&&T.mipmaps&&T.mipmaps.length>0)for(let ot=0;ot<T.mipmaps.length;ot++)ht(J.__webglFramebuffer[ot],L,T,i.COLOR_ATTACHMENT0,Et,ot);else ht(J.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,Et,0);b(T,Bt)&&C(Et),e.unbindTexture()}L.depthBuffer&&pt(L)}function Yt(L){const T=_(L)||o,J=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let mt=0,ft=J.length;mt<ft;mt++){const gt=J[mt];if(b(gt,T)){const Bt=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(gt).__webglTexture;e.bindTexture(Bt,Et),C(Bt),e.unbindTexture()}}}function At(L){if(o&&L.samples>0&&yt(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],J=L.width,mt=L.height;let ft=i.COLOR_BUFFER_BIT;const gt=[],Bt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(L),ot=L.isWebGLMultipleRenderTargets===!0;if(ot)for(let qt=0;qt<T.length;qt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let qt=0;qt<T.length;qt++){gt.push(i.COLOR_ATTACHMENT0+qt),L.depthBuffer&&gt.push(Bt);const Wt=Et.__ignoreDepthValues!==void 0?Et.__ignoreDepthValues:!1;if(Wt===!1&&(L.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),ot&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[qt]),Wt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Bt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Bt])),ot){const kt=n.get(T[qt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,J,mt,0,0,J,mt,ft,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let qt=0;qt<T.length;qt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[qt]);const Wt=n.get(T[qt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}}function Gt(L){return Math.min(l,L.samples)}function yt(L){const T=n.get(L);return o&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function jt(L){const T=a.render.frame;v.get(L)!==T&&(v.set(L,T),L.update())}function Jt(L,T){const J=L.colorSpace,mt=L.format,ft=L.type;return L.isCompressedTexture===!0||L.format===Ms||J!==hn&&J!==jn&&(J===ie?o===!1?t.has("EXT_sRGB")===!0&&mt===an?(L.format=Ms,L.minFilter=$e,L.generateMipmaps=!1):T=ko.sRGBToLinear(T):(mt!==an||ft!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=A,this.setTexture3D=B,this.setTextureCube=F,this.rebindTextures=rt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=yt}function wp(i,t,e){const n=e.isWebGL2;function s(r,a=jn){let o;if(r===Fn)return i.UNSIGNED_BYTE;if(r===Fo)return i.UNSIGNED_SHORT_4_4_4_4;if(r===No)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Wl)return i.BYTE;if(r===kl)return i.SHORT;if(r===Cs)return i.UNSIGNED_SHORT;if(r===Do)return i.INT;if(r===Ln)return i.UNSIGNED_INT;if(r===In)return i.FLOAT;if(r===Gi)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Xl)return i.ALPHA;if(r===an)return i.RGBA;if(r===ql)return i.LUMINANCE;if(r===Yl)return i.LUMINANCE_ALPHA;if(r===qn)return i.DEPTH_COMPONENT;if(r===yi)return i.DEPTH_STENCIL;if(r===Ms)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===jl)return i.RED;if(r===Bo)return i.RED_INTEGER;if(r===Zl)return i.RG;if(r===Oo)return i.RG_INTEGER;if(r===zo)return i.RGBA_INTEGER;if(r===Br||r===Or||r===zr||r===Vr)if(a===ie)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Br)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Br)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Or)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Js||r===Qs||r===ta||r===ea)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Js)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qs)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ta)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ea)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kl)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===na||r===ia)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===na)return a===ie?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ia)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ra||r===sa||r===aa||r===oa||r===la||r===ca||r===ha||r===ua||r===da||r===fa||r===pa||r===ma||r===va||r===ga)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ra)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sa)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===aa)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===oa)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===la)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ca)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ha)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ua)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===da)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fa)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pa)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ma)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===va)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ga)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Hr)return a===ie?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===$l||r===_a||r===xa||r===ya)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Hr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===_a)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ya)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xn?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Tp extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Fi extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bp={type:"move"};class cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(u,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],d=h.position.distanceTo(l.position),f=.02,v=.005;u.inputState.pinching&&d>f+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=f-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ap extends je{constructor(t,e,n,s,r,a,o,c,u,h){if(h=h!==void 0?h:qn,h!==qn&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qn&&(n=Ln),n===void 0&&h===yi&&(n=Xn),super(null,s,r,a,o,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=c!==void 0?c:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Rp extends Ei{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,l=null,d=null,f=null,v=null;const g=e.getContextAttributes();let m=null,p=null;const x=[],y=[],_=new qe;_.layers.enable(1),_.viewport=new Ae;const S=new qe;S.layers.enable(2),S.viewport=new Ae;const b=[_,S],C=new Tp;C.layers.enable(1),C.layers.enable(2);let D=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let B=x[A];return B===void 0&&(B=new cs,x[A]=B),B.getTargetRaySpace()},this.getControllerGrip=function(A){let B=x[A];return B===void 0&&(B=new cs,x[A]=B),B.getGripSpace()},this.getHand=function(A){let B=x[A];return B===void 0&&(B=new cs,x[A]=B),B.getHandSpace()};function E(A){const B=y.indexOf(A.inputSource);if(B===-1)return;const F=x[B];F!==void 0&&(F.update(A.inputSource,A.frame,u||a),F.dispatchEvent({type:A.type,data:A.inputSource}))}function I(){s.removeEventListener("select",E),s.removeEventListener("selectstart",E),s.removeEventListener("selectend",E),s.removeEventListener("squeeze",E),s.removeEventListener("squeezestart",E),s.removeEventListener("squeezeend",E),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",V);for(let A=0;A<x.length;A++){const B=y[A];B!==null&&(y[A]=null,x[A].disconnect(B))}D=null,M=null,t.setRenderTarget(m),f=null,d=null,l=null,s=null,p=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){r=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){o=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(A){u=A},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(A){if(s=A,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",E),s.addEventListener("selectstart",E),s.addEventListener("selectend",E),s.addEventListener("squeeze",E),s.addEventListener("squeezestart",E),s.addEventListener("squeezeend",E),s.addEventListener("end",I),s.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const B={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,B),s.updateRenderState({baseLayer:f}),p=new Zn(f.framebufferWidth,f.framebufferHeight,{format:an,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let B=null,F=null,P=null;g.depth&&(P=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,B=g.stencil?yi:qn,F=g.stencil?Xn:Ln);const R={colorFormat:e.RGBA8,depthFormat:P,scaleFactor:r};l=new XRWebGLBinding(s,e),d=l.createProjectionLayer(R),s.updateRenderState({layers:[d]}),p=new Zn(d.textureWidth,d.textureHeight,{format:an,type:Fn,depthTexture:new Ap(d.textureWidth,d.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const j=t.properties.get(p);j.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),k.setContext(s),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function V(A){for(let B=0;B<A.removed.length;B++){const F=A.removed[B],P=y.indexOf(F);P>=0&&(y[P]=null,x[P].disconnect(F))}for(let B=0;B<A.added.length;B++){const F=A.added[B];let P=y.indexOf(F);if(P===-1){for(let j=0;j<x.length;j++)if(j>=y.length){y.push(F),P=j;break}else if(y[j]===null){y[j]=F,P=j;break}if(P===-1)break}const R=x[P];R&&R.connect(F)}}const U=new $,H=new $;function W(A,B,F){U.setFromMatrixPosition(B.matrixWorld),H.setFromMatrixPosition(F.matrixWorld);const P=U.distanceTo(H),R=B.projectionMatrix.elements,j=F.projectionMatrix.elements,st=R[14]/(R[10]-1),tt=R[14]/(R[10]+1),Z=(R[9]+1)/R[5],dt=(R[9]-1)/R[5],ht=(R[8]-1)/R[0],X=(j[8]+1)/j[0],Tt=st*ht,pt=st*X,rt=P/(-ht+X),ct=rt*-ht;B.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(ct),A.translateZ(rt),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const Yt=st+rt,At=tt+rt,Gt=Tt-ct,yt=pt+(P-ct),jt=Z*tt/At*Yt,Jt=dt*tt/At*Yt;A.projectionMatrix.makePerspective(Gt,yt,jt,Jt,Yt,At),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}function nt(A,B){B===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(B.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(s===null)return;C.near=S.near=_.near=A.near,C.far=S.far=_.far=A.far,(D!==C.near||M!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),D=C.near,M=C.far);const B=A.parent,F=C.cameras;nt(C,B);for(let P=0;P<F.length;P++)nt(F[P],B);F.length===2?W(C,_,S):C.projectionMatrix.copy(_.projectionMatrix),O(A,C,B)};function O(A,B,F){F===null?A.matrix.copy(B.matrixWorld):(A.matrix.copy(F.matrixWorld),A.matrix.invert(),A.matrix.multiply(B.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0);const P=A.children;for(let R=0,j=P.length;R<j;R++)P[R].updateMatrixWorld(!0);A.projectionMatrix.copy(B.projectionMatrix),A.projectionMatrixInverse.copy(B.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=Mi*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(A){c=A,d!==null&&(d.fixedFoveation=A),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=A)};let N=null;function K(A,B){if(h=B.getViewerPose(u||a),v=B,h!==null){const F=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let P=!1;F.length!==C.cameras.length&&(C.cameras.length=0,P=!0);for(let R=0;R<F.length;R++){const j=F[R];let st=null;if(f!==null)st=f.getViewport(j);else{const Z=l.getViewSubImage(d,j);st=Z.viewport,R===0&&(t.setRenderTargetTextures(p,Z.colorTexture,d.ignoreDepthValues?void 0:Z.depthStencilTexture),t.setRenderTarget(p))}let tt=b[R];tt===void 0&&(tt=new qe,tt.layers.enable(R),tt.viewport=new Ae,b[R]=tt),tt.matrix.fromArray(j.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(j.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(st.x,st.y,st.width,st.height),R===0&&(C.matrix.copy(tt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),P===!0&&C.cameras.push(tt)}}for(let F=0;F<x.length;F++){const P=y[F],R=x[F];P!==null&&R!==void 0&&R.update(P,B,u||a)}N&&N(A,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),v=null}const k=new Qo;k.setAnimationLoop(K),this.setAnimationLoop=function(A){N=A},this.dispose=function(){}}}function Cp(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ko(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),l(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pp(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,y){const _=y.program;n.uniformBlockBinding(x,_)}function u(x,y){let _=s[x.id];_===void 0&&(v(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));const S=y.program;n.updateUBOMapping(x,S);const b=t.render.frame;r[x.id]!==b&&(d(x),r[x.id]=b)}function h(x){const y=l();x.__bindingPointIndex=y;const _=i.createBuffer(),S=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,S,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function l(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],_=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,C=_.length;b<C;b++){const D=_[b];if(f(D,b,S)===!0){const M=D.__offset,E=Array.isArray(D.value)?D.value:[D.value];let I=0;for(let V=0;V<E.length;V++){const U=E[V],H=g(U);typeof U=="number"?(D.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,M+I,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=U.elements[0],D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=U.elements[0],D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=U.elements[0]):(U.toArray(D.__data,I),I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,D.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,_){const S=x.value;if(_[y]===void 0){if(typeof S=="number")_[y]=S;else{const b=Array.isArray(S)?S:[S],C=[];for(let D=0;D<b.length;D++)C.push(b[D].clone());_[y]=C}return!0}else if(typeof S=="number"){if(_[y]!==S)return _[y]=S,!0}else{const b=Array.isArray(_[y])?_[y]:[_[y]],C=Array.isArray(S)?S:[S];for(let D=0;D<b.length;D++){const M=b[D];if(M.equals(C[D])===!1)return M.copy(C[D]),!0}}return!1}function v(x){const y=x.uniforms;let _=0;const S=16;let b=0;for(let C=0,D=y.length;C<D;C++){const M=y[C],E={boundary:0,storage:0},I=Array.isArray(M.value)?M.value:[M.value];for(let V=0,U=I.length;V<U;V++){const H=I[V],W=g(H);E.boundary+=W.boundary,E.storage+=W.storage}if(M.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=_,C>0){b=_%S;const V=S-b;b!==0&&V-E.boundary<0&&(_+=S-b,M.__offset=_)}_+=E.storage}return b=_%S,b>0&&(_+=S-b),x.__size=_,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:u,dispose:p}}function Lp(){const i=br("canvas");return i.style.display="block",i}class Ip{constructor(t={}){const{canvas:e=Lp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ie,this._useLegacyLights=!1,this.toneMapping=Dn,this.toneMappingExposure=1;const y=this;let _=!1,S=0,b=0,C=null,D=-1,M=null;const E=new Ae,I=new Ae;let V=null;const U=new ce(0);let H=0,W=e.width,nt=e.height,O=1,N=null,K=null;const k=new Ae(0,0,W,nt),A=new Ae(0,0,W,nt);let B=!1;const F=new Ds;let P=!1,R=!1,j=null;const st=new Me,tt=new he,Z=new $,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return C===null?O:1}let X=n;function Tt(w,z){for(let Y=0;Y<w.length;Y++){const G=w[Y],Q=e.getContext(G,z);if(Q!==null)return Q}return null}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rs}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",xt,!1),X===null){const z=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&z.shift(),X=Tt(z,w),X===null)throw Tt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let pt,rt,ct,Yt,At,Gt,yt,jt,Jt,L,T,J,mt,ft,gt,Bt,Et,ot,qt,Wt,kt,Vt,Ot,$t;function re(){pt=new Vd(X),rt=new Ud(X,pt,t),pt.init(rt),Vt=new wp(X,pt,rt),ct=new Sp(X,pt,rt),Yt=new Wd(X),At=new lp,Gt=new Ep(X,pt,ct,At,rt,Vt,Yt),yt=new Fd(y),jt=new zd(y),Jt=new Jc(X,rt),Ot=new Ld(X,pt,Jt,rt),L=new Hd(X,Jt,Yt,Ot),T=new Yd(X,L,Jt,Yt),qt=new qd(X,rt,Gt),Bt=new Dd(At),J=new op(y,yt,jt,pt,rt,Ot,Bt),mt=new Cp(y,At),ft=new hp,gt=new vp(pt,rt),ot=new Pd(y,yt,jt,ct,T,d,c),Et=new Mp(y,T,rt),$t=new Pp(X,Yt,rt,ct),Wt=new Id(X,pt,Yt,rt),kt=new Gd(X,pt,Yt,rt),Yt.programs=J.programs,y.capabilities=rt,y.extensions=pt,y.properties=At,y.renderLists=ft,y.shadowMap=Et,y.state=ct,y.info=Yt}re();const q=new Rp(y,X);this.xr=q,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(W,nt,!1))},this.getSize=function(w){return w.set(W,nt)},this.setSize=function(w,z,Y=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,nt=z,e.width=Math.floor(w*O),e.height=Math.floor(z*O),Y===!0&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(W*O,nt*O).floor()},this.setDrawingBufferSize=function(w,z,Y){W=w,nt=z,O=Y,e.width=Math.floor(w*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(k)},this.setViewport=function(w,z,Y,G){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,z,Y,G),ct.viewport(E.copy(k).multiplyScalar(O).floor())},this.getScissor=function(w){return w.copy(A)},this.setScissor=function(w,z,Y,G){w.isVector4?A.set(w.x,w.y,w.z,w.w):A.set(w,z,Y,G),ct.scissor(I.copy(A).multiplyScalar(O).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(w){ct.setScissorTest(B=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(w=!0,z=!0,Y=!0){let G=0;if(w){let Q=!1;if(C!==null){const et=C.texture.format;Q=et===zo||et===Oo||et===Bo}if(Q){const et=C.texture.type,Mt=et===Fn||et===Ln||et===Cs||et===Xn||et===Fo||et===No,Rt=ot.getClearColor(),Ht=ot.getClearAlpha(),Nt=Rt.r,Lt=Rt.g,St=Rt.b;Mt?(f[0]=Nt,f[1]=Lt,f[2]=St,f[3]=Ht,X.clearBufferuiv(X.COLOR,0,f)):(v[0]=Nt,v[1]=Lt,v[2]=St,v[3]=Ht,X.clearBufferiv(X.COLOR,0,v))}else G|=X.COLOR_BUFFER_BIT}z&&(G|=X.DEPTH_BUFFER_BIT),Y&&(G|=X.STENCIL_BUFFER_BIT),X.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),ft.dispose(),gt.dispose(),At.dispose(),yt.dispose(),jt.dispose(),T.dispose(),Ot.dispose(),$t.dispose(),J.dispose(),q.dispose(),q.removeEventListener("sessionstart",te),q.removeEventListener("sessionend",lt),j&&(j.dispose(),j=null),ut.stop()};function Ct(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const w=Yt.autoReset,z=Et.enabled,Y=Et.autoUpdate,G=Et.needsUpdate,Q=Et.type;re(),Yt.autoReset=w,Et.enabled=z,Et.autoUpdate=Y,Et.needsUpdate=G,Et.type=Q}function xt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ut(w){const z=w.target;z.removeEventListener("dispose",Ut),ee(z)}function ee(w){ue(w),At.remove(w)}function ue(w){const z=At.get(w).programs;z!==void 0&&(z.forEach(function(Y){J.releaseProgram(Y)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,Y,G,Q,et){z===null&&(z=dt);const Mt=Q.isMesh&&Q.matrixWorld.determinant()<0,Rt=bt(w,z,Y,G,Q);ct.setMaterial(G,Mt);let Ht=Y.index,Nt=1;if(G.wireframe===!0){if(Ht=L.getWireframeAttribute(Y),Ht===void 0)return;Nt=2}const Lt=Y.drawRange,St=Y.attributes.position;let ae=Lt.start*Nt,le=(Lt.start+Lt.count)*Nt;et!==null&&(ae=Math.max(ae,et.start*Nt),le=Math.min(le,(et.start+et.count)*Nt)),Ht!==null?(ae=Math.max(ae,0),le=Math.min(le,Ht.count)):St!=null&&(ae=Math.max(ae,0),le=Math.min(le,St.count));const pe=le-ae;if(pe<0||pe===1/0)return;Ot.setup(Q,G,Rt,Y,Ht);let Ee,oe=Wt;if(Ht!==null&&(Ee=Jt.get(Ht),oe=kt,oe.setIndex(Ee)),Q.isMesh)G.wireframe===!0?(ct.setLineWidth(G.wireframeLinewidth*ht()),oe.setMode(X.LINES)):oe.setMode(X.TRIANGLES);else if(Q.isLine){let Xt=G.linewidth;Xt===void 0&&(Xt=1),ct.setLineWidth(Xt*ht()),Q.isLineSegments?oe.setMode(X.LINES):Q.isLineLoop?oe.setMode(X.LINE_LOOP):oe.setMode(X.LINE_STRIP)}else Q.isPoints?oe.setMode(X.POINTS):Q.isSprite&&oe.setMode(X.TRIANGLES);if(Q.isInstancedMesh)oe.renderInstances(ae,pe,Q.count);else if(Y.isInstancedBufferGeometry){const Xt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ge=Math.min(Y.instanceCount,Xt);oe.renderInstances(ae,pe,Ge)}else oe.render(ae,pe)},this.compile=function(w,z){function Y(G,Q,et){G.transparent===!0&&G.side===wn&&G.forceSinglePass===!1?(G.side=He,G.needsUpdate=!0,Pt(G,Q,et),G.side=Nn,G.needsUpdate=!0,Pt(G,Q,et),G.side=wn):Pt(G,Q,et)}m=gt.get(w),m.init(),x.push(m),w.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(y._useLegacyLights),w.traverse(function(G){const Q=G.material;if(Q)if(Array.isArray(Q))for(let et=0;et<Q.length;et++){const Mt=Q[et];Y(Mt,w,G)}else Y(Q,w,G)}),x.pop(),m=null};let fe=null;function Ne(w){fe&&fe(w)}function te(){ut.stop()}function lt(){ut.start()}const ut=new Qo;ut.setAnimationLoop(Ne),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(w){fe=w,q.setAnimationLoop(w),w===null?ut.stop():ut.start()},q.addEventListener("sessionstart",te),q.addEventListener("sessionend",lt),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(z),z=q.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,z,C),m=gt.get(w,x.length),m.init(),x.push(m),st.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),F.setFromProjectionMatrix(st),R=this.localClippingEnabled,P=Bt.init(this.clippingPlanes,R),g=ft.get(w,p.length),g.init(),p.push(g),vt(w,z,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(N,K),this.info.render.frame++,P===!0&&Bt.beginShadows();const Y=m.state.shadowsArray;if(Et.render(Y,w,z),P===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(g,w),m.setupLights(y._useLegacyLights),z.isArrayCamera){const G=z.cameras;for(let Q=0,et=G.length;Q<et;Q++){const Mt=G[Q];_t(g,w,Mt,Mt.viewport)}}else _t(g,w,z);C!==null&&(Gt.updateMultisampleRenderTarget(C),Gt.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(y,w,z),Ot.resetDefaultState(),D=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function vt(w,z,Y,G){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||F.intersectsSprite(w)){G&&Z.setFromMatrixPosition(w.matrixWorld).applyMatrix4(st);const Mt=T.update(w),Rt=w.material;Rt.visible&&g.push(w,Mt,Rt,Y,Z.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||F.intersectsObject(w))){const Mt=T.update(w),Rt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Z.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Z.copy(Mt.boundingSphere.center)),Z.applyMatrix4(w.matrixWorld).applyMatrix4(st)),Array.isArray(Rt)){const Ht=Mt.groups;for(let Nt=0,Lt=Ht.length;Nt<Lt;Nt++){const St=Ht[Nt],ae=Rt[St.materialIndex];ae&&ae.visible&&g.push(w,Mt,ae,Y,Z.z,St)}}else Rt.visible&&g.push(w,Mt,Rt,Y,Z.z,null)}}const et=w.children;for(let Mt=0,Rt=et.length;Mt<Rt;Mt++)vt(et[Mt],z,Y,G)}function _t(w,z,Y,G){const Q=w.opaque,et=w.transmissive,Mt=w.transparent;m.setupLightsView(Y),P===!0&&Bt.setGlobalState(y.clippingPlanes,Y),et.length>0&&Zt(Q,et,z,Y),G&&ct.viewport(E.copy(G)),Q.length>0&&It(Q,z,Y),et.length>0&&It(et,z,Y),Mt.length>0&&It(Mt,z,Y),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Zt(w,z,Y,G){const Q=rt.isWebGL2;j===null&&(j=new Zn(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")?Gi:Fn,minFilter:Hi,samples:Q?4:0})),y.getDrawingBufferSize(tt),Q?j.setSize(tt.x,tt.y):j.setSize(Tr(tt.x),Tr(tt.y));const et=y.getRenderTarget();y.setRenderTarget(j),y.getClearColor(U),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear();const Mt=y.toneMapping;y.toneMapping=Dn,It(w,Y,G),Gt.updateMultisampleRenderTarget(j),Gt.updateRenderTargetMipmap(j);let Rt=!1;for(let Ht=0,Nt=z.length;Ht<Nt;Ht++){const Lt=z[Ht],St=Lt.object,ae=Lt.geometry,le=Lt.material,pe=Lt.group;if(le.side===wn&&St.layers.test(G.layers)){const Ee=le.side;le.side=He,le.needsUpdate=!0,wt(St,Y,G,ae,le,pe),le.side=Ee,le.needsUpdate=!0,Rt=!0}}Rt===!0&&(Gt.updateMultisampleRenderTarget(j),Gt.updateRenderTargetMipmap(j)),y.setRenderTarget(et),y.setClearColor(U,H),y.toneMapping=Mt}function It(w,z,Y){const G=z.isScene===!0?z.overrideMaterial:null;for(let Q=0,et=w.length;Q<et;Q++){const Mt=w[Q],Rt=Mt.object,Ht=Mt.geometry,Nt=G===null?Mt.material:G,Lt=Mt.group;Rt.layers.test(Y.layers)&&wt(Rt,z,Y,Ht,Nt,Lt)}}function wt(w,z,Y,G,Q,et){w.onBeforeRender(y,z,Y,G,Q,et),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(y,z,Y,G,w,et),Q.transparent===!0&&Q.side===wn&&Q.forceSinglePass===!1?(Q.side=He,Q.needsUpdate=!0,y.renderBufferDirect(Y,z,G,Q,w,et),Q.side=Nn,Q.needsUpdate=!0,y.renderBufferDirect(Y,z,G,Q,w,et),Q.side=wn):y.renderBufferDirect(Y,z,G,Q,w,et),w.onAfterRender(y,z,Y,G,Q,et)}function Pt(w,z,Y){z.isScene!==!0&&(z=dt);const G=At.get(w),Q=m.state.lights,et=m.state.shadowsArray,Mt=Q.state.version,Rt=J.getParameters(w,Q.state,et,z,Y),Ht=J.getProgramCacheKey(Rt);let Nt=G.programs;G.environment=w.isMeshStandardMaterial?z.environment:null,G.fog=z.fog,G.envMap=(w.isMeshStandardMaterial?jt:yt).get(w.envMap||G.environment),Nt===void 0&&(w.addEventListener("dispose",Ut),Nt=new Map,G.programs=Nt);let Lt=Nt.get(Ht);if(Lt!==void 0){if(G.currentProgram===Lt&&G.lightsStateVersion===Mt)return it(w,Rt),Lt}else Rt.uniforms=J.getUniforms(w),w.onBuild(Y,Rt,y),w.onBeforeCompile(Rt,y),Lt=J.acquireProgram(Rt,Ht),Nt.set(Ht,Lt),G.uniforms=Rt.uniforms;const St=G.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(St.clippingPlanes=Bt.uniform),it(w,Rt),G.needsLights=zt(w),G.lightsStateVersion=Mt,G.needsLights&&(St.ambientLightColor.value=Q.state.ambient,St.lightProbe.value=Q.state.probe,St.directionalLights.value=Q.state.directional,St.directionalLightShadows.value=Q.state.directionalShadow,St.spotLights.value=Q.state.spot,St.spotLightShadows.value=Q.state.spotShadow,St.rectAreaLights.value=Q.state.rectArea,St.ltc_1.value=Q.state.rectAreaLTC1,St.ltc_2.value=Q.state.rectAreaLTC2,St.pointLights.value=Q.state.point,St.pointLightShadows.value=Q.state.pointShadow,St.hemisphereLights.value=Q.state.hemi,St.directionalShadowMap.value=Q.state.directionalShadowMap,St.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,St.spotShadowMap.value=Q.state.spotShadowMap,St.spotLightMatrix.value=Q.state.spotLightMatrix,St.spotLightMap.value=Q.state.spotLightMap,St.pointShadowMap.value=Q.state.pointShadowMap,St.pointShadowMatrix.value=Q.state.pointShadowMatrix);const ae=Lt.getUniforms(),le=xr.seqWithValue(ae.seq,St);return G.currentProgram=Lt,G.uniformsList=le,Lt}function it(w,z){const Y=At.get(w);Y.outputColorSpace=z.outputColorSpace,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function bt(w,z,Y,G,Q){z.isScene!==!0&&(z=dt),Gt.resetTextureUnits();const et=z.fog,Mt=G.isMeshStandardMaterial?z.environment:null,Rt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:hn,Ht=(G.isMeshStandardMaterial?jt:yt).get(G.envMap||Mt),Nt=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Lt=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!Y.morphAttributes.position,ae=!!Y.morphAttributes.normal,le=!!Y.morphAttributes.color;let pe=Dn;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pe=y.toneMapping);const Ee=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=Ee!==void 0?Ee.length:0,Xt=At.get(G),Ge=m.state.lights;if(P===!0&&(R===!0||w!==M)){const me=w===M&&G.id===D;Bt.setState(G,w,me)}let Qt=!1;G.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Ge.state.version||Xt.outputColorSpace!==Rt||Q.isInstancedMesh&&Xt.instancing===!1||!Q.isInstancedMesh&&Xt.instancing===!0||Q.isSkinnedMesh&&Xt.skinning===!1||!Q.isSkinnedMesh&&Xt.skinning===!0||Q.isInstancedMesh&&Xt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xt.instancingColor===!1&&Q.instanceColor!==null||Xt.envMap!==Ht||G.fog===!0&&Xt.fog!==et||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Bt.numPlanes||Xt.numIntersection!==Bt.numIntersection)||Xt.vertexAlphas!==Nt||Xt.vertexTangents!==Lt||Xt.morphTargets!==St||Xt.morphNormals!==ae||Xt.morphColors!==le||Xt.toneMapping!==pe||rt.isWebGL2===!0&&Xt.morphTargetsCount!==oe)&&(Qt=!0):(Qt=!0,Xt.__version=G.version);let Ce=Xt.currentProgram;Qt===!0&&(Ce=Pt(G,z,Q));let Pe=!1,_e=!1,ye=!1;const de=Ce.getUniforms(),Le=Xt.uniforms;if(ct.useProgram(Ce.program)&&(Pe=!0,_e=!0,ye=!0),G.id!==D&&(D=G.id,_e=!0),Pe||M!==w){if(de.setValue(X,"projectionMatrix",w.projectionMatrix),rt.logarithmicDepthBuffer&&de.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),M!==w&&(M=w,_e=!0,ye=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const me=de.map.cameraPosition;me!==void 0&&me.setValue(X,Z.setFromMatrixPosition(w.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&de.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||Q.isSkinnedMesh)&&de.setValue(X,"viewMatrix",w.matrixWorldInverse)}if(Q.isSkinnedMesh){de.setOptional(X,Q,"bindMatrix"),de.setOptional(X,Q,"bindMatrixInverse");const me=Q.skeleton;me&&(rt.floatVertexTextures?(me.boneTexture===null&&me.computeBoneTexture(),de.setValue(X,"boneTexture",me.boneTexture,Gt),de.setValue(X,"boneTextureSize",me.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Kt=Y.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0&&rt.isWebGL2===!0)&&qt.update(Q,Y,Ce),(_e||Xt.receiveShadow!==Q.receiveShadow)&&(Xt.receiveShadow=Q.receiveShadow,de.setValue(X,"receiveShadow",Q.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Le.envMap.value=Ht,Le.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),_e&&(de.setValue(X,"toneMappingExposure",y.toneMappingExposure),Xt.needsLights&&Dt(Le,ye),et&&G.fog===!0&&mt.refreshFogUniforms(Le,et),mt.refreshMaterialUniforms(Le,G,O,nt,j),xr.upload(X,Xt.uniformsList,Le,Gt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(xr.upload(X,Xt.uniformsList,Le,Gt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&de.setValue(X,"center",Q.center),de.setValue(X,"modelViewMatrix",Q.modelViewMatrix),de.setValue(X,"normalMatrix",Q.normalMatrix),de.setValue(X,"modelMatrix",Q.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const me=G.uniformsGroups;for(let xe=0,mn=me.length;xe<mn;xe++)if(rt.isWebGL2){const on=me[xe];$t.update(on,Ce),$t.bind(on,Ce)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ce}function Dt(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function zt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,z,Y){At.get(w.texture).__webglTexture=z,At.get(w.depthTexture).__webglTexture=Y;const G=At.get(w);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Y===void 0,G.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,z){const Y=At.get(w);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,Y=0){C=w,S=z,b=Y;let G=!0,Q=null,et=!1,Mt=!1;if(w){const Ht=At.get(w);Ht.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(X.FRAMEBUFFER,null),G=!1):Ht.__webglFramebuffer===void 0?Gt.setupRenderTarget(w):Ht.__hasExternalTextures&&Gt.rebindTextures(w,At.get(w.texture).__webglTexture,At.get(w.depthTexture).__webglTexture);const Nt=w.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Mt=!0);const Lt=At.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Lt[z])?Q=Lt[z][Y]:Q=Lt[z],et=!0):rt.isWebGL2&&w.samples>0&&Gt.useMultisampledRTT(w)===!1?Q=At.get(w).__webglMultisampledFramebuffer:Array.isArray(Lt)?Q=Lt[Y]:Q=Lt,E.copy(w.viewport),I.copy(w.scissor),V=w.scissorTest}else E.copy(k).multiplyScalar(O).floor(),I.copy(A).multiplyScalar(O).floor(),V=B;if(ct.bindFramebuffer(X.FRAMEBUFFER,Q)&&rt.drawBuffers&&G&&ct.drawBuffers(w,Q),ct.viewport(E),ct.scissor(I),ct.setScissorTest(V),et){const Ht=At.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ht.__webglTexture,Y)}else if(Mt){const Ht=At.get(w.texture),Nt=z||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ht.__webglTexture,Y||0,Nt)}D=-1},this.readRenderTargetPixels=function(w,z,Y,G,Q,et,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt){ct.bindFramebuffer(X.FRAMEBUFFER,Rt);try{const Ht=w.texture,Nt=Ht.format,Lt=Ht.type;if(Nt!==an&&Vt.convert(Nt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const St=Lt===Gi&&(pt.has("EXT_color_buffer_half_float")||rt.isWebGL2&&pt.has("EXT_color_buffer_float"));if(Lt!==Fn&&Vt.convert(Lt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Lt===In&&(rt.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!St){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-G&&Y>=0&&Y<=w.height-Q&&X.readPixels(z,Y,G,Q,Vt.convert(Nt),Vt.convert(Lt),et)}finally{const Ht=C!==null?At.get(C).__webglFramebuffer:null;ct.bindFramebuffer(X.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(w,z,Y=0){const G=Math.pow(2,-Y),Q=Math.floor(z.image.width*G),et=Math.floor(z.image.height*G);Gt.setTexture2D(z,0),X.copyTexSubImage2D(X.TEXTURE_2D,Y,0,0,w.x,w.y,Q,et),ct.unbindTexture()},this.copyTextureToTexture=function(w,z,Y,G=0){const Q=z.image.width,et=z.image.height,Mt=Vt.convert(Y.format),Rt=Vt.convert(Y.type);Gt.setTexture2D(Y,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment),z.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,G,w.x,w.y,Q,et,Mt,Rt,z.image.data):z.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,G,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,Mt,z.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,G,w.x,w.y,Mt,Rt,z.image),G===0&&Y.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(w,z,Y,G,Q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const et=w.max.x-w.min.x+1,Mt=w.max.y-w.min.y+1,Rt=w.max.z-w.min.z+1,Ht=Vt.convert(G.format),Nt=Vt.convert(G.type);let Lt;if(G.isData3DTexture)Gt.setTexture3D(G,0),Lt=X.TEXTURE_3D;else if(G.isDataArrayTexture)Gt.setTexture2DArray(G,0),Lt=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const St=X.getParameter(X.UNPACK_ROW_LENGTH),ae=X.getParameter(X.UNPACK_IMAGE_HEIGHT),le=X.getParameter(X.UNPACK_SKIP_PIXELS),pe=X.getParameter(X.UNPACK_SKIP_ROWS),Ee=X.getParameter(X.UNPACK_SKIP_IMAGES),oe=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,oe.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,oe.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,w.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,w.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,w.min.z),Y.isDataTexture||Y.isData3DTexture?X.texSubImage3D(Lt,Q,z.x,z.y,z.z,et,Mt,Rt,Ht,Nt,oe.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Lt,Q,z.x,z.y,z.z,et,Mt,Rt,Ht,oe.data)):X.texSubImage3D(Lt,Q,z.x,z.y,z.z,et,Mt,Rt,Ht,Nt,oe),X.pixelStorei(X.UNPACK_ROW_LENGTH,St),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ae),X.pixelStorei(X.UNPACK_SKIP_PIXELS,le),X.pixelStorei(X.UNPACK_SKIP_ROWS,pe),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ee),Q===0&&G.generateMipmaps&&X.generateMipmap(Lt),ct.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Gt.setTextureCube(w,0):w.isData3DTexture?Gt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Gt.setTexture2DArray(w,0):Gt.setTexture2D(w,0),ct.unbindTexture()},this.resetState=function(){S=0,b=0,C=null,ct.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ie?Yn:Vo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Yn?ie:hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class rl extends Ip{}rl.prototype.isWebGL1Renderer=!0;class Up extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class yr extends un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oo=new $,lo=new $,co=new Me,hs=new Lr,dr=new ki;class Dp extends Re{constructor(t=new Ve,e=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)oo.fromBufferAttribute(e,s-1),lo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=oo.distanceTo(lo);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(s),dr.radius+=r,t.ray.intersectsSphere(dr)===!1)return;co.copy(s).invert(),hs.copy(t.ray).applyMatrix4(co);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=new $,h=new $,l=new $,d=new $,f=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const p=Math.max(0,a.start),x=Math.min(v.count,a.start+a.count);for(let y=p,_=x-1;y<_;y+=f){const S=v.getX(y),b=v.getX(y+1);if(u.fromBufferAttribute(m,S),h.fromBufferAttribute(m,b),hs.distanceSqToSegment(u,h,d,l)>c)continue;d.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(d);D<t.near||D>t.far||e.push({distance:D,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let y=p,_=x-1;y<_;y+=f){if(u.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),hs.distanceSqToSegment(u,h,d,l)>c)continue;d.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(d);b<t.near||b>t.far||e.push({distance:b,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const ho=new $,uo=new $;class fo extends Dp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ho.fromBufferAttribute(e,s),uo.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ho.distanceTo(uo);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ni extends un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const po=new Me,ws=new Lr,fr=new ki,pr=new $;class us extends Re{constructor(t=new Ve,e=new Ni){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),fr.radius+=r,t.ray.intersectsSphere(fr)===!1)return;po.copy(s).invert(),ws.copy(t.ray).applyMatrix4(po);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,l=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let v=d,g=f;v<g;v++){const m=u.getX(v);pr.fromBufferAttribute(l,m),mo(pr,m,c,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let v=d,g=f;v<g;v++)pr.fromBufferAttribute(l,v),mo(pr,v,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function mo(i,t,e,n,s,r,a){const o=ws.distanceSqToPoint(i);if(o<e){const c=new $;ws.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class Fr extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const h=[],l=[],d=[],f=[];let v=0;const g=[],m=n/2;let p=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(f,2));function x(){const _=new $,S=new $;let b=0;const C=(e-t)/n;for(let D=0;D<=r;D++){const M=[],E=D/r,I=E*(e-t)+t;for(let V=0;V<=s;V++){const U=V/s,H=U*c+o,W=Math.sin(H),nt=Math.cos(H);S.x=I*W,S.y=-E*n+m,S.z=I*nt,l.push(S.x,S.y,S.z),_.set(W,C,nt).normalize(),d.push(_.x,_.y,_.z),f.push(U,1-E),M.push(v++)}g.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){const E=g[M][D],I=g[M+1][D],V=g[M+1][D+1],U=g[M][D+1];h.push(E,I,U),h.push(I,V,U),b+=6}u.addGroup(p,b,0),p+=b}function y(_){const S=v,b=new he,C=new $;let D=0;const M=_===!0?t:e,E=_===!0?1:-1;for(let V=1;V<=s;V++)l.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),v++;const I=v;for(let V=0;V<=s;V++){const H=V/s*c+o,W=Math.cos(H),nt=Math.sin(H);C.x=M*nt,C.y=m*E,C.z=M*W,l.push(C.x,C.y,C.z),d.push(0,E,0),b.x=W*.5+.5,b.y=nt*.5*E+.5,f.push(b.x,b.y),v++}for(let V=0;V<s;V++){const U=S+V,H=I+V;_===!0?h.push(H,H+1,U):h.push(H+1,H,U),D+=3}u.addGroup(p,D,_===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ns extends Ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],u=[],h=new $,l=new $,d=new $;for(let f=0;f<=n;f++)for(let v=0;v<=s;v++){const g=v/s*r,m=f/n*Math.PI*2;l.x=(t+e*Math.cos(m))*Math.cos(g),l.y=(t+e*Math.cos(m))*Math.sin(g),l.z=e*Math.sin(m),o.push(l.x,l.y,l.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(l,h).normalize(),c.push(d.x,d.y,d.z),u.push(v/s),u.push(f/n)}for(let f=1;f<=n;f++)for(let v=1;v<=s;v++){const g=(s+1)*f+v-1,m=(s+1)*(f-1)+v-1,p=(s+1)*(f-1)+v,x=(s+1)*f+v;a.push(g,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Bs extends Ve{constructor(t=1,e=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);const o=[],c=[],u=[],h=[],l=new $,d=new $,f=new $,v=new $,g=new $,m=new $,p=new $;for(let y=0;y<=n;++y){const _=y/n*r*Math.PI*2;x(_,r,a,t,f),x(_+.01,r,a,t,v),m.subVectors(v,f),p.addVectors(v,f),g.crossVectors(m,p),p.crossVectors(g,m),g.normalize(),p.normalize();for(let S=0;S<=s;++S){const b=S/s*Math.PI*2,C=-e*Math.cos(b),D=e*Math.sin(b);l.x=f.x+(C*p.x+D*g.x),l.y=f.y+(C*p.y+D*g.y),l.z=f.z+(C*p.z+D*g.z),c.push(l.x,l.y,l.z),d.subVectors(l,f).normalize(),u.push(d.x,d.y,d.z),h.push(y/n),h.push(S/s)}}for(let y=1;y<=n;y++)for(let _=1;_<=s;_++){const S=(s+1)*(y-1)+(_-1),b=(s+1)*y+(_-1),C=(s+1)*y+_,D=(s+1)*(y-1)+_;o.push(S,b,D),o.push(b,C,D)}this.setIndex(o),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(h,2));function x(y,_,S,b,C){const D=Math.cos(y),M=Math.sin(y),E=S/_*y,I=Math.cos(E);C.x=b*(2+I)*.5*D,C.y=b*(2+I)*M*.5,C.z=b*Math.sin(E)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class sl extends un{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ce(16777215),this.specular=new ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fp extends un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const vo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Np{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return u.push(h,l),this},this.removeHandler=function(h){const l=u.indexOf(h);return l!==-1&&u.splice(l,2),this},this.getHandler=function(h){for(let l=0,d=u.length;l<d;l+=2){const f=u[l],v=u[l+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null}}}const Bp=new Np;class Os{constructor(t){this.manager=t!==void 0?t:Bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const Sn={};class Op extends Error{constructor(t,e){super(t),this.response=e}}class zp extends Os{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=vo.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Sn[t]!==void 0){Sn[t].push({onLoad:e,onProgress:n,onError:s});return}Sn[t]=[],Sn[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=Sn[t],l=u.body.getReader(),d=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),f=d?parseInt(d):0,v=f!==0;let g=0;const m=new ReadableStream({start(p){x();function x(){l.read().then(({done:y,value:_})=>{if(y)p.close();else{g+=_.byteLength;const S=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:f});for(let b=0,C=h.length;b<C;b++){const D=h[b];D.onProgress&&D.onProgress(S)}p.enqueue(_),x()}})}}});return new Response(m)}else throw new Op(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return u.json();default:if(o===void 0)return u.text();{const l=/charset="?([^;"\s]*)"?/i.exec(o),d=l&&l[1]?l[1].toLowerCase():void 0,f=new TextDecoder(d);return u.arrayBuffer().then(v=>f.decode(v))}}}).then(u=>{vo.add(t,u);const h=Sn[t];delete Sn[t];for(let l=0,d=h.length;l<d;l++){const f=h[l];f.onLoad&&f.onLoad(u)}}).catch(u=>{const h=Sn[t];if(h===void 0)throw this.manager.itemError(t),u;delete Sn[t];for(let l=0,d=h.length;l<d;l++){const f=h[l];f.onError&&f.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Vp extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ds=new Me,go=new $,_o=new $;class Hp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;go.setFromMatrixPosition(t.matrixWorld),e.position.copy(go),_o.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_o),e.updateMatrixWorld(),ds.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ds),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ds)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gp extends Hp{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Mi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class zs extends Vp{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Gp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Wp{constructor(t,e,n=0,s=1/0){this.ray=new Lr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ts(t,this,n,e),n.sort(xo),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ts(t[s],this,n,e);return n.sort(xo),n}}function xo(i,t){return i.distance-t.distance}function Ts(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Ts(s[r],t,e,!0)}}const yo=new $,mr=new $;class kp{constructor(t=new $,e=new $){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){yo.subVectors(t,this.start),mr.subVectors(this.end,this.start);const n=mr.dot(mr);let r=mr.dot(yo)/n;return e&&(r=Fe(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rs);function vr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var al={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,s,r){function a(u,h){if(!s[u]){if(!n[u]){var l=typeof vr=="function"&&vr;if(!h&&l)return l(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var d=s[u]={exports:{}};n[u][0].call(d.exports,function(f){var v=n[u][1][f];return a(v||f)},d,d.exports,e,n,s,r)}return s[u].exports}for(var o=typeof vr=="function"&&vr,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,n,s){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,s){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,s){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=a;function a(u){u=u||{},this.lowerBound=new r,u.lowerBound&&this.lowerBound.copy(u.lowerBound),this.upperBound=new r,u.upperBound&&this.upperBound.copy(u.upperBound)}var o=new r;a.prototype.setFromPoints=function(u,h,l,d){var f=this.lowerBound,v=this.upperBound,g=l;f.copy(u[0]),g&&g.vmult(f,f),v.copy(f);for(var m=1;m<u.length;m++){var p=u[m];g&&(g.vmult(p,o),p=o),p.x>v.x&&(v.x=p.x),p.x<f.x&&(f.x=p.x),p.y>v.y&&(v.y=p.y),p.y<f.y&&(f.y=p.y),p.z>v.z&&(v.z=p.z),p.z<f.z&&(f.z=p.z)}return h&&(h.vadd(f,f),h.vadd(v,v)),d&&(f.x-=d,f.y-=d,f.z-=d,v.x+=d,v.y+=d,v.z+=d),this},a.prototype.copy=function(u){return this.lowerBound.copy(u.lowerBound),this.upperBound.copy(u.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(u){var h=u.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var l=u.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var h=u.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var l=u.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var h=u.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var l=u.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},a.prototype.overlaps=function(u){var h=this.lowerBound,l=this.upperBound,d=u.lowerBound,f=u.upperBound;return(d.x<=l.x&&l.x<=f.x||h.x<=f.x&&f.x<=l.x)&&(d.y<=l.y&&l.y<=f.y||h.y<=f.y&&f.y<=l.y)&&(d.z<=l.z&&l.z<=f.z||h.z<=f.z&&f.z<=l.z)},a.prototype.contains=function(u){var h=this.lowerBound,l=this.upperBound,d=u.lowerBound,f=u.upperBound;return h.x<=d.x&&l.x>=f.x&&h.y<=d.y&&l.y>=f.y&&h.z<=d.z&&l.z>=f.z},a.prototype.getCorners=function(u,h,l,d,f,v,g,m){var p=this.lowerBound,x=this.upperBound;u.copy(p),h.set(x.x,p.y,p.z),l.set(x.x,x.y,p.z),d.set(p.x,x.y,x.z),f.set(x.x,p.y,p.z),v.set(p.x,x.y,p.z),g.set(p.x,p.y,x.z),m.copy(x)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];a.prototype.toLocalFrame=function(u,h){var l=c,d=l[0],f=l[1],v=l[2],g=l[3],m=l[4],p=l[5],x=l[6],y=l[7];this.getCorners(d,f,v,g,m,p,x,y);for(var _=0;_!==8;_++){var S=l[_];u.pointToLocal(S,S)}return h.setFromPoints(l)},a.prototype.toWorldFrame=function(u,h){var l=c,d=l[0],f=l[1],v=l[2],g=l[3],m=l[4],p=l[5],x=l[6],y=l[7];this.getCorners(d,f,v,g,m,p,x,y);for(var _=0;_!==8;_++){var S=l[_];u.pointToWorld(S,S)}return h.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,s){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var c=o;o=a,a=c}return this.matrix[(a*(a+1)>>1)+o-1]},r.prototype.set=function(a,o,c){if(a=a.index,o=o.index,o>a){var u=o;o=a,a=u}this.matrix[(a*(a+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},r.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(e,n,s){var r=e("../objects/Body"),a=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var u=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&u||g.sleepState===r.SLEEPING)&&(m.type&u||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(g,m,p,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,x):this.doBoundingSphereBroadphase(g,m,p,x)};var h=new a;new a,new o,new a,c.prototype.doBoundingSphereBroadphase=function(g,m,p,x){var y=h;m.position.vsub(g.position,y);var _=Math.pow(g.boundingRadius+m.boundingRadius,2),S=y.norm2();S<_&&(p.push(g),x.push(m))},c.prototype.doBoundingBoxBroadphase=function(g,m,p,x){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),x.push(m))};var l={keys:[]},d=[],f=[];c.prototype.makePairsUnique=function(g,m){for(var p=l,x=d,y=f,_=g.length,S=0;S!==_;S++)x[S]=g[S],y[S]=m[S];g.length=0,m.length=0;for(var S=0;S!==_;S++){var b=x[S].id,C=y[S].id,D=b<C?b+","+C:C+","+b;p[D]=S,p.keys.push(D)}for(var S=0;S!==p.keys.length;S++){var D=p.keys.pop(),M=p[D];g.push(x[M]),m.push(y[M]),delete p[D]}},c.prototype.setWorld=function(g){};var v=new a;c.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},c.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,s){n.exports=c;var r=e("./Broadphase"),a=e("../math/Vec3"),o=e("../shapes/Shape");function c(h,l,d,f,v){r.apply(this),this.nx=d||10,this.ny=f||10,this.nz=v||10,this.aabbMin=h||new a(100,100,100),this.aabbMax=l||new a(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var u=new a;new a,c.prototype.collisionPairs=function(h,l,d){var f=h.numObjects(),v=h.bodies,st=this.aabbMax,j=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,x=m*p,y=p,_=1,S=st.x,b=st.y,C=st.z,D=j.x,M=j.y,E=j.z,I=g/(S-D),V=m/(b-M),U=p/(C-E),H=(S-D)/g,W=(b-M)/m,nt=(C-E)/p,O=Math.sqrt(H*H+W*W+nt*nt)*.5,N=o.types,K=N.SPHERE,k=N.PLANE;N.BOX,N.COMPOUND,N.CONVEXPOLYHEDRON;for(var A=this.bins,B=this.binLengths,F=this.bins.length,P=0;P!==F;P++)B[P]=0;var R=Math.ceil,j=Math.min,st=Math.max;function tt(Et,ot,qt,Wt,kt,Vt,Ot){var $t=(Et-D)*I|0,re=(ot-M)*V|0,q=(qt-E)*U|0,Ct=R((Wt-D)*I),at=R((kt-M)*V),xt=R((Vt-E)*U);$t<0?$t=0:$t>=g&&($t=g-1),re<0?re=0:re>=m&&(re=m-1),q<0?q=0:q>=p&&(q=p-1),Ct<0?Ct=0:Ct>=g&&(Ct=g-1),at<0?at=0:at>=m&&(at=m-1),xt<0?xt=0:xt>=p&&(xt=p-1),$t*=x,re*=y,q*=_,Ct*=x,at*=y,xt*=_;for(var Ut=$t;Ut<=Ct;Ut+=x)for(var ee=re;ee<=at;ee+=y)for(var ue=q;ue<=xt;ue+=_){var fe=Ut+ee+ue;A[fe][B[fe]++]=Ot}}for(var P=0;P!==f;P++){var Z=v[P],dt=Z.shape;switch(dt.type){case K:var ht=Z.position.x,X=Z.position.y,Tt=Z.position.z,pt=dt.radius;tt(ht-pt,X-pt,Tt-pt,ht+pt,X+pt,Tt+pt,Z);break;case k:dt.worldNormalNeedsUpdate&&dt.computeWorldNormal(Z.quaternion);var rt=dt.worldNormal,ct=D+H*.5-Z.position.x,Yt=M+W*.5-Z.position.y,At=E+nt*.5-Z.position.z,Gt=u;Gt.set(ct,Yt,At);for(var yt=0,jt=0;yt!==g;yt++,jt+=x,Gt.y=Yt,Gt.x+=H)for(var Jt=0,L=0;Jt!==m;Jt++,L+=y,Gt.z=At,Gt.y+=W)for(var T=0,J=0;T!==p;T++,J+=_,Gt.z+=nt)if(Gt.dot(rt)<O){var mt=jt+L+J;A[mt][B[mt]++]=Z}break;default:Z.aabbNeedsUpdate&&Z.computeAABB(),tt(Z.aabb.lowerBound.x,Z.aabb.lowerBound.y,Z.aabb.lowerBound.z,Z.aabb.upperBound.x,Z.aabb.upperBound.y,Z.aabb.upperBound.z,Z);break}}for(var P=0;P!==F;P++){var ft=B[P];if(ft>1)for(var gt=A[P],yt=0;yt!==ft;yt++)for(var Z=gt[yt],Jt=0;Jt!==yt;Jt++){var Bt=gt[Jt];this.needBroadphaseCollision(Z,Bt)&&this.intersectionTest(Z,Bt,l,d)}}this.makePairsUnique(l,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,s){n.exports=o;var r=e("./Broadphase"),a=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,u,h){var l=c.bodies,d=l.length,f,v,g,m;for(f=0;f!==d;f++)for(v=0;v!==f;v++)g=l[f],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,u,h)},new a,o.prototype.aabbQuery=function(c,u,h){h=h||[];for(var l=0;l<c.bodies.length;l++){var d=c.bodies[l];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(u)&&h.push(d)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,s){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var c=o;o=a,a=c}return a+"-"+o in this.matrix},r.prototype.set=function(a,o,c){if(a=a.id,o=o.id,o>a){var u=o;o=a,a=u}c?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(a){}},{}],9:[function(e,n,s){n.exports=l;var r=e("../math/Vec3"),a=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),u=e("../shapes/Shape"),h=e("../collision/AABB");function l(F,P){this.from=F?F.clone():new r,this.to=P?P.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(R){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var d=new h,f=[];l.prototype.intersectWorld=function(F,P){return this.mode=P.mode||l.ANY,this.result=P.result||new c,this.skipBackfaces=!!P.skipBackfaces,this.collisionFilterMask=typeof P.collisionFilterMask<"u"?P.collisionFilterMask:-1,this.collisionFilterGroup=typeof P.collisionFilterGroup<"u"?P.collisionFilterGroup:-1,P.from&&this.from.copy(P.from),P.to&&this.to.copy(P.to),this.callback=P.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,F.broadphase.aabbQuery(F,d,f),this.intersectBodies(f),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(F,P,R,j){j.vsub(P,k),R.vsub(P,v),F.vsub(P,g);var st=k.dot(k),tt=k.dot(v),Z=k.dot(g),dt=v.dot(v),ht=v.dot(g),X,Tt;return(X=dt*Z-tt*ht)>=0&&(Tt=st*ht-tt*Z)>=0&&X+Tt<st*dt-tt*tt}var p=new r,x=new a;l.prototype.intersectBody=function(F,P){P&&(this.result=P,this._updateDirection());var R=this.checkCollisionResponse;if(!(R&&!F.collisionResponse)&&!(!(this.collisionFilterGroup&F.collisionFilterMask)||!(F.collisionFilterGroup&this.collisionFilterMask)))for(var j=p,st=x,tt=0,Z=F.shapes.length;tt<Z;tt++){var dt=F.shapes[tt];if(!(R&&!dt.collisionResponse)&&(F.quaternion.mult(F.shapeOrientations[tt],st),F.quaternion.vmult(F.shapeOffsets[tt],j),j.vadd(F.position,j),this.intersectShape(dt,st,j,F),this.result._shouldStop))break}},l.prototype.intersectBodies=function(F,P){P&&(this.result=P,this._updateDirection());for(var R=0,j=F.length;!this.result._shouldStop&&R<j;R++)this.intersectBody(F[R])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(F,P,R,j){var st=this.from,tt=B(st,this._direction,R);if(!(tt>F.boundingSphereRadius)){var Z=this[F.type];Z&&Z.call(this,F,P,R,j)}},new r,new r;var y=new r,_=new r,S=new r,b=new r;new r,new c,l.prototype.intersectBox=function(F,P,R,j){return this.intersectConvex(F.convexPolyhedronRepresentation,P,R,j)},l.prototype[u.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(F,P,R,j){var st=this.from,tt=this.to,Z=this._direction,dt=new r(0,0,1);P.vmult(dt,dt);var ht=new r;st.vsub(R,ht);var X=ht.dot(dt);tt.vsub(R,ht);var Tt=ht.dot(dt);if(!(X*Tt>0)&&!(st.distanceTo(tt)<X)){var pt=dt.dot(Z);if(!(Math.abs(pt)<this.precision)){var rt=new r,ct=new r,Yt=new r;st.vsub(R,rt);var At=-dt.dot(rt)/pt;Z.scale(At,ct),st.vadd(ct,Yt),this.reportIntersection(dt,Yt,F,j,-1)}}},l.prototype[u.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(F){var P=this.to,R=this.from;F.lowerBound.x=Math.min(P.x,R.x),F.lowerBound.y=Math.min(P.y,R.y),F.lowerBound.z=Math.min(P.z,R.z),F.upperBound.x=Math.max(P.x,R.x),F.upperBound.y=Math.max(P.y,R.y),F.upperBound.z=Math.max(P.z,R.z)};var C={faceList:[0]};l.prototype.intersectHeightfield=function(F,P,R,j){F.data,F.elementSize;var st=new r,tt=new l(this.from,this.to);o.pointToLocalFrame(R,P,tt.from,tt.from),o.pointToLocalFrame(R,P,tt.to,tt.to);var Z=[],dt=null,ht=null,X=null,Tt=null,pt=F.getIndexOfPosition(tt.from.x,tt.from.y,Z,!1);if(pt&&(dt=Z[0],ht=Z[1],X=Z[0],Tt=Z[1]),pt=F.getIndexOfPosition(tt.to.x,tt.to.y,Z,!1),pt&&((dt===null||Z[0]<dt)&&(dt=Z[0]),(X===null||Z[0]>X)&&(X=Z[0]),(ht===null||Z[1]<ht)&&(ht=Z[1]),(Tt===null||Z[1]>Tt)&&(Tt=Z[1])),dt!==null){var rt=[];F.getRectMinMax(dt,ht,X,Tt,rt),rt[0],rt[1];for(var ct=dt;ct<=X;ct++)for(var Yt=ht;Yt<=Tt;Yt++){if(this.result._shouldStop||(F.getConvexTrianglePillar(ct,Yt,!1),o.pointToWorldFrame(R,P,F.pillarOffset,st),this.intersectConvex(F.pillarConvex,P,st,j,C),this.result._shouldStop))return;F.getConvexTrianglePillar(ct,Yt,!0),o.pointToWorldFrame(R,P,F.pillarOffset,st),this.intersectConvex(F.pillarConvex,P,st,j,C)}}},l.prototype[u.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var D=new r,M=new r;l.prototype.intersectSphere=function(F,P,R,j){var st=this.from,tt=this.to,Z=F.radius,dt=Math.pow(tt.x-st.x,2)+Math.pow(tt.y-st.y,2)+Math.pow(tt.z-st.z,2),ht=2*((tt.x-st.x)*(st.x-R.x)+(tt.y-st.y)*(st.y-R.y)+(tt.z-st.z)*(st.z-R.z)),X=Math.pow(st.x-R.x,2)+Math.pow(st.y-R.y,2)+Math.pow(st.z-R.z,2)-Math.pow(Z,2),Tt=Math.pow(ht,2)-4*dt*X,pt=D,rt=M;if(!(Tt<0))if(Tt===0)st.lerp(tt,Tt,pt),pt.vsub(R,rt),rt.normalize(),this.reportIntersection(rt,pt,F,j,-1);else{var ct=(-ht-Math.sqrt(Tt))/(2*dt),Yt=(-ht+Math.sqrt(Tt))/(2*dt);if(ct>=0&&ct<=1&&(st.lerp(tt,ct,pt),pt.vsub(R,rt),rt.normalize(),this.reportIntersection(rt,pt,F,j,-1)),this.result._shouldStop)return;Yt>=0&&Yt<=1&&(st.lerp(tt,Yt,pt),pt.vsub(R,rt),rt.normalize(),this.reportIntersection(rt,pt,F,j,-1))}},l.prototype[u.types.SPHERE]=l.prototype.intersectSphere;var E=new r;new r,new r;var I=new r;l.prototype.intersectConvex=function(P,R,j,st,tt){for(var Z=E,dt=I,ht=tt&&tt.faceList||null,X=P.faces,Tt=P.vertices,pt=P.faceNormals,rt=this._direction,ct=this.from,Yt=this.to,At=ct.distanceTo(Yt),Gt=ht?ht.length:X.length,yt=this.result,jt=0;!yt._shouldStop&&jt<Gt;jt++){var Jt=ht?ht[jt]:jt,L=X[Jt],T=pt[Jt],J=R,mt=j;dt.copy(Tt[L[0]]),J.vmult(dt,dt),dt.vadd(mt,dt),dt.vsub(ct,dt),J.vmult(T,Z);var ft=rt.dot(Z);if(!(Math.abs(ft)<this.precision)){var gt=Z.dot(dt)/ft;if(!(gt<0)){rt.mult(gt,y),y.vadd(ct,y),_.copy(Tt[L[0]]),J.vmult(_,_),mt.vadd(_,_);for(var Bt=1;!yt._shouldStop&&Bt<L.length-1;Bt++){S.copy(Tt[L[Bt]]),b.copy(Tt[L[Bt+1]]),J.vmult(S,S),J.vmult(b,b),mt.vadd(S,S),mt.vadd(b,b);var Et=y.distanceTo(ct);!(m(y,_,S,b)||m(y,S,_,b))||Et>At||this.reportIntersection(Z,y,P,st,Jt)}}}}},l.prototype[u.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var V=new r,U=new r,H=new r,W=new r,nt=new r,O=new r;new h;var N=[],K=new o;l.prototype.intersectTrimesh=function(P,R,j,st,tt){var Z=V,dt=N,ht=K,X=I,Tt=U,pt=H,rt=W,ct=O,Yt=nt;tt&&tt.faceList;var At=P.indices;P.vertices,P.faceNormals;var Gt=this.from,yt=this.to,jt=this._direction;ht.position.copy(j),ht.quaternion.copy(R),o.vectorToLocalFrame(j,R,jt,Tt),o.pointToLocalFrame(j,R,Gt,pt),o.pointToLocalFrame(j,R,yt,rt);var Jt=pt.distanceSquared(rt);P.tree.rayQuery(this,ht,dt);for(var L=0,T=dt.length;!this.result._shouldStop&&L!==T;L++){var J=dt[L];P.getNormal(J,Z),P.getVertex(At[J*3],_),_.vsub(pt,X);var mt=Tt.dot(Z),ft=Z.dot(X)/mt;if(!(ft<0)){Tt.scale(ft,y),y.vadd(pt,y),P.getVertex(At[J*3+1],S),P.getVertex(At[J*3+2],b);var gt=y.distanceSquared(pt);!(m(y,S,_,b)||m(y,_,S,b))||gt>Jt||(o.vectorToWorldFrame(R,Z,Yt),o.pointToWorldFrame(j,R,y,ct),this.reportIntersection(Yt,ct,P,st,J))}}dt.length=0},l.prototype[u.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(F,P,R,j,st){var tt=this.from,Z=this.to,dt=tt.distanceTo(P),ht=this.result;if(!(this.skipBackfaces&&F.dot(this._direction)>0))switch(ht.hitFaceIndex=typeof st<"u"?st:-1,this.mode){case l.ALL:this.hasHit=!0,ht.set(tt,Z,F,P,R,j,dt),ht.hasHit=!0,this.callback(ht);break;case l.CLOSEST:(dt<ht.distance||!ht.hasHit)&&(this.hasHit=!0,ht.hasHit=!0,ht.set(tt,Z,F,P,R,j,dt));break;case l.ANY:this.hasHit=!0,ht.hasHit=!0,ht.set(tt,Z,F,P,R,j,dt),ht._shouldStop=!0;break}};var k=new r,A=new r;function B(F,P,R){R.vsub(F,k);var j=k.dot(P);P.mult(j,A),A.vadd(F,A);var st=R.distanceTo(A);return st}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,c,u,h,l,d,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(u),this.hitPointWorld.copy(h),this.shape=l,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,s){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=a;function a(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(u){c.push(u.body)},this._removeBodyHandler=function(u){var h=c.indexOf(u.body);h!==-1&&c.splice(h,1)},o&&this.setWorld(o)}a.prototype=new r,a.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=h.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortY=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=h.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortZ=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=h.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=h}return o},a.prototype.collisionPairs=function(o,c,u){var h=this.axisList,l=h.length,d=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==l;f++){var g=h[f];for(v=f+1;v<l;v++){var m=h[v];if(this.needBroadphaseCollision(g,m)){if(!a.checkBounds(g,m,d))break;this.intersectionTest(g,m,c,u)}}}},a.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,u=o.length,h=0;h!==u;h++){var l=o[h];l.aabbNeedsUpdate&&l.computeAABB()}c===0?a.insertionSortX(o):c===1?a.insertionSortY(o):c===2&&a.insertionSortZ(o)},a.checkBounds=function(o,c,u){var h,l;u===0?(h=o.position.x,l=c.position.x):u===1?(h=o.position.y,l=c.position.y):u===2&&(h=o.position.z,l=c.position.z);var d=o.boundingRadius,f=c.boundingRadius,v=h+d,g=l-f;return g<v},a.prototype.autoDetectAxis=function(){for(var o=0,c=0,u=0,h=0,l=0,d=0,f=this.axisList,v=f.length,g=1/v,m=0;m!==v;m++){var p=f[m],x=p.position.x;o+=x,c+=x*x;var y=p.position.y;u+=y,h+=y*y;var _=p.position.z;l+=_,d+=_*_}var S=c-o*o*g,b=h-u*u*g,C=d-l*l*g;S>b?S>C?this.axisIndex=0:this.axisIndex=2:b>C?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,c,u){u=u||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,l="x";h===1&&(l="y"),h===2&&(l="z");var d=this.axisList;c.lowerBound[l],c.upperBound[l];for(var f=0;f<d.length;f++){var v=d[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&u.push(v)}return u}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function u(h,l,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new c,g=d.pivotB?d.pivotB.clone():new c;this.axisA=d.axisA?d.axisA.clone():new c,this.axisB=d.axisB?d.axisB.clone():new c,r.call(this,h,v,l,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new a(h,l,d),p=this.twistEquation=new o(h,l,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}u.prototype=new r,u.constructor=u,new c,new c,u.prototype.update=function(){var h=this.bodyA,l=this.bodyB,d=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,d.axisA),l.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),h.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),l.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,s){n.exports=a;var r=e("../utils/Utils");function a(o,c,u){u=r.defaults(u,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=a.idCounter++,this.collideConnected=u.collideConnected,u.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,s){n.exports=o;var r=e("./Constraint"),a=e("../equations/ContactEquation");function o(c,u,h,l){r.call(this,c,u),typeof h>"u"&&(h=c.position.distanceTo(u.position)),typeof l>"u"&&(l=1e6),this.distance=h;var d=this.distanceEquation=new a(c,u);this.equations.push(d),d.minForce=-l,d.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,u=this.bodyB,h=this.distanceEquation,l=this.distance*.5,d=h.ni;u.position.vsub(c.position,d),d.normalize(),d.mult(l,h.ri),d.mult(-l,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function u(d,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new c,p=v.pivotB?v.pivotB.clone():new c;r.call(this,d,m,f,p,g);var x=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);x.normalize();var y=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);y.normalize();var _=this.rotationalEquation1=new a(d,f,v),S=this.rotationalEquation2=new a(d,f,v),b=this.motorEquation=new o(d,f,g);b.enabled=!1,this.equations.push(_,S,b)}u.prototype=new r,u.constructor=u,u.prototype.enableMotor=function(){this.motorEquation.enabled=!0},u.prototype.disableMotor=function(){this.motorEquation.enabled=!1},u.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},u.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var h=new c,l=new c;u.prototype.update=function(){var d=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=h,x=l,y=this.axisA,_=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(y,p),f.quaternion.vmult(_,x),p.tangents(g.axisA,m.axisA),g.axisB.copy(x),m.axisB.copy(x),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,s){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(u,h,l){l=l||{};var d=typeof l.maxForce<"u"?l.maxForce:1e6,f=new o,v=new o,g=new o;u.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),u.pointToLocalFrame(g,f),r.call(this,u,f,h,v,d);var m=this.rotationalEquation1=new a(u,h,l),p=this.rotationalEquation2=new a(u,h,l),x=this.rotationalEquation3=new a(u,h,l);this.equations.push(m,p,x)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var u=this.bodyA,h=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),u.vectorToWorldFrame(o.UNIT_X,l.axisA),h.vectorToWorldFrame(o.UNIT_Y,l.axisB),u.vectorToWorldFrame(o.UNIT_Y,d.axisA),h.vectorToWorldFrame(o.UNIT_Z,d.axisB),u.vectorToWorldFrame(o.UNIT_Z,f.axisA),h.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,s){n.exports=c;var r=e("./Constraint"),a=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(u,h,l,d,f){r.call(this,u,l),f=typeof f<"u"?f:1e6,this.pivotA=h?h.clone():new o,this.pivotB=d?d.clone():new o;var v=this.equationX=new a(u,l),g=this.equationY=new a(u,l),m=this.equationZ=new a(u,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-f,v.maxForce=g.maxForce=m.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var u=this.bodyA,h=this.bodyB,l=this.equationX,d=this.equationY,f=this.equationZ;u.quaternion.vmult(this.pivotA,l.ri),h.quaternion.vmult(this.pivotB,l.rj),d.ri.copy(l.ri),d.rj.copy(l.rj),f.ri.copy(l.ri),f.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,h,l,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new a,o.prototype.constructor=o;var c=new r,u=new r;o.prototype.computeB=function(h){var l=this.a,d=this.b,f=this.axisA,v=this.axisB,g=c,m=u,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),x.rotational.copy(g);var y=Math.cos(this.angle)-f.dot(v),_=this.computeGW(),S=this.computeGiMf(),b=-y*l-_*d-h*S;return b}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(m,p,x){x=typeof x<"u"?x:1e6,r.call(this,m,p,0,x),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,u=new a,h=new a;o.prototype.computeB=function(m){var p=this.a,x=this.b,y=this.bi,_=this.bj,S=this.ri,b=this.rj,C=c,D=u,M=y.velocity,E=y.angularVelocity;y.force,y.torque;var I=_.velocity,V=_.angularVelocity;_.force,_.torque;var U=h,H=this.jacobianElementA,W=this.jacobianElementB,nt=this.ni;S.cross(nt,C),b.cross(nt,D),nt.negate(H.spatial),C.negate(H.rotational),W.spatial.copy(nt),W.rotational.copy(D),U.copy(_.position),U.vadd(b,U),U.vsub(y.position,U),U.vsub(S,U);var O=nt.dot(U),N=this.restitution+1,K=N*I.dot(nt)-N*M.dot(nt)+V.dot(D)-E.dot(C),k=this.computeGiMf(),A=-O*p-K*x-m*k;return A};var l=new a,d=new a,f=new a,v=new a,g=new a;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,p=d,x=f,y=v,_=g;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(x,m),this.bj.getVelocityAtWorldPoint(y,p),m.vsub(p,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,s){n.exports=o;var r=e("../math/JacobianElement"),a=e("../math/Vec3");function o(g,m,p,x){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof x>"u"?1e6:x,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,p){var x=m,y=g,_=p;this.a=4/(_*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(_*_*y*(1+4*x))},o.prototype.computeB=function(g,m,p){var x=this.computeGW(),y=this.computeGq(),_=this.computeGiMf();return-y*g-x*m-_*p},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,y=p.position,_=x.position;return g.spatial.dot(y)+m.spatial.dot(_)};var c=new a;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,y=p.velocity,_=x.velocity,S=p.angularVelocity||c,b=x.angularVelocity||c;return g.multiplyVectors(y,S)+m.multiplyVectors(_,b)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,y=p.vlambda,_=x.vlambda,S=p.wlambda||c,b=x.wlambda||c;return g.multiplyVectors(y,S)+m.multiplyVectors(_,b)};var u=new a,h=new a,l=new a,d=new a;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,y=p.force,_=p.torque,S=x.force,b=x.torque,C=p.invMassSolve,D=x.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(_,l):l.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(b,d):d.set(0,0,0),y.mult(C,u),S.mult(D,h),g.multiplyVectors(u,l)+m.multiplyVectors(h,d)};var f=new a;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,y=p.invMassSolve,_=x.invMassSolve,S=p.invInertiaWorldSolve,b=x.invInertiaWorldSolve,C=y+_;return S&&(S.vmult(g.rotational,f),C+=f.dot(g.rotational)),b&&(b.vmult(m.rotational,f),C+=f.dot(m.rotational)),C};var v=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,x=this.bi,y=this.bj,_=v;m.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),p.spatial.mult(y.invMassSolve*g,_),y.vlambda.vadd(_,y.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(m.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(p.rotational,_),_.mult(g,_),y.wlambda.vadd(_,y.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(h,l,d){r.call(this,h,l,-d,d),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,u=new a;o.prototype.computeB=function(h){this.a;var l=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,v=c,g=u,m=this.t;d.cross(m,v),f.cross(m,g);var p=this.jacobianElementA,x=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),x.spatial.copy(m),x.rotational.copy(g);var y=this.computeGW(),_=this.computeGiMf(),S=-y*l-h*_;return S}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,h,l,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var c=new r,u=new r;o.prototype.computeB=function(h){var l=this.a,d=this.b,f=this.axisA,v=this.axisB,g=c,m=u,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),x.rotational.copy(g);var y=Math.cos(this.maxAngle)-f.dot(v),_=this.computeGW(),S=this.computeGiMf(),b=-y*l-_*d-h*S;return b}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(c,u,h){h=typeof h<"u"?h:1e6,a.call(this,c,u,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var u=this.b;this.bi,this.bj;var h=this.axisA,l=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(h),l.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*u-c*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,s){var r=e("../utils/Utils");n.exports=a;function a(o,c,u){u=r.defaults(u,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,c],this.friction=u.friction,this.restitution=u.restitution,this.contactEquationStiffness=u.contactEquationStiffness,this.contactEquationRelaxation=u.contactEquationRelaxation,this.frictionEquationStiffness=u.frictionEquationStiffness,this.frictionEquationRelaxation=u.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,s){n.exports=r;function r(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}r.idCounter=0},{}],26:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(){this.spatial=new r,this.rotational=new r}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},a.prototype.getTrace=function(c){var c=c||new r,u=this.elements;c.x=u[0],c.y=u[4],c.z=u[8]},a.prototype.vmult=function(o,c){c=c||new r;var u=this.elements,h=o.x,l=o.y,d=o.z;return c.x=u[0]*h+u[1]*l+u[2]*d,c.y=u[3]*h+u[4]*l+u[5]*d,c.z=u[6]*h+u[7]*l+u[8]*d,c},a.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},a.prototype.mmult=function(o,c){for(var u=c||new a,h=0;h<3;h++)for(var l=0;l<3;l++){for(var d=0,f=0;f<3;f++)d+=o.elements[h+f*3]*this.elements[f+l*3];u.elements[h+l*3]=d}return u},a.prototype.scale=function(o,c){c=c||new a;for(var u=this.elements,h=c.elements,l=0;l!==3;l++)h[3*l+0]=o.x*u[3*l+0],h[3*l+1]=o.y*u[3*l+1],h[3*l+2]=o.z*u[3*l+2];return c},a.prototype.solve=function(o,c){c=c||new r;for(var u=3,h=4,l=[],d=0;d<u*h;d++)l.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)l[d+h*f]=this.elements[d+3*f];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,p=4,x;do{if(d=g-v,l[d+h*d]===0){for(f=d+1;f<g;f++)if(l[d+h*f]!==0){m=p;do x=p-m,l[x+h*d]+=l[x+h*f];while(--m);break}}if(l[d+h*d]!==0)for(f=d+1;f<g;f++){var y=l[d+h*f]/l[d+h*d];m=p;do x=p-m,l[x+h*f]=x<=d?0:l[x+h*f]-l[x+h*d]*y;while(--m)}}while(--v);if(c.z=l[2*h+3]/l[2*h+2],c.y=(l[1*h+3]-l[1*h+2]*c.z)/l[1*h+1],c.x=(l[0*h+3]-l[0*h+2]*c.z-l[0*h+1]*c.y)/l[0*h+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},a.prototype.e=function(o,c,u){if(u===void 0)return this.elements[c+3*o];this.elements[c+3*o]=u},a.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},a.prototype.toString=function(){for(var o="",c=",",u=0;u<9;u++)o+=this.elements[u]+c;return o},a.prototype.reverse=function(o){o=o||new a;for(var c=3,u=6,h=[],l=0;l<c*u;l++)h.push(0);var l,d;for(l=0;l<3;l++)for(d=0;d<3;d++)h[l+u*d]=this.elements[l+3*d];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var f=3,v=f,g,m=u,p;do{if(l=v-f,h[l+u*l]===0){for(d=l+1;d<v;d++)if(h[l+u*d]!==0){g=m;do p=m-g,h[p+u*l]+=h[p+u*d];while(--g);break}}if(h[l+u*l]!==0)for(d=l+1;d<v;d++){var x=h[l+u*d]/h[l+u*l];g=m;do p=m-g,h[p+u*d]=p<=l?0:h[p+u*d]-h[p+u*l]*x;while(--g)}}while(--f);l=2;do{d=l-1;do{var x=h[l+u*d]/h[l+u*l];g=u;do p=u-g,h[p+u*d]=h[p+u*d]-h[p+u*l]*x;while(--g)}while(d--)}while(--l);l=2;do{var x=1/h[l+u*l];g=u;do p=u-g,h[p+u*l]=h[p+u*l]*x;while(--g)}while(l--);l=2;do{d=2;do{if(p=h[c+d+u*l],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,d,p)}while(d--)}while(l--);return o},a.prototype.setRotationFromQuaternion=function(o){var c=o.x,u=o.y,h=o.z,l=o.w,d=c+c,f=u+u,v=h+h,g=c*d,m=c*f,p=c*v,x=u*f,y=u*v,_=h*v,S=l*d,b=l*f,C=l*v,D=this.elements;return D[3*0+0]=1-(x+_),D[3*0+1]=m-C,D[3*0+2]=p+b,D[3*1+0]=m+C,D[3*1+1]=1-(g+_),D[3*1+2]=y-S,D[3*2+0]=p-b,D[3*2+1]=y+S,D[3*2+2]=1-(g+x),this},a.prototype.transpose=function(o){o=o||new a;for(var c=o.elements,u=this.elements,h=0;h!==3;h++)for(var l=0;l!==3;l++)c[3*h+l]=u[3*l+h];return o}},{"./Vec3":30}],28:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(d,f,v,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}a.prototype.set=function(d,f,v,g){this.x=d,this.y=f,this.z=v,this.w=g},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(d,f){var v=Math.sin(f*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f*.5)},a.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,f]};var o=new r,c=new r;a.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var v=o,g=c;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=d.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var u=new r,h=new r,l=new r;a.prototype.mult=function(d,f){f=f||new a;var v=this.w,g=u,m=h,p=l;return g.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),f.w=v*d.w-g.dot(m),g.cross(m,p),f.x=v*m.x+d.w*g.x+p.x,f.y=v*m.y+d.w*g.y+p.y,f.z=v*m.z+d.w*g.z+p.z,f},a.prototype.inverse=function(d){var f=this.x,v=this.y,g=this.z,m=this.w;d=d||new a,this.conjugate(d);var p=1/(f*f+v*v+g*g+m*m);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},a.prototype.conjugate=function(d){return d=d||new a,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},a.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.vmult=function(d,f){f=f||new r;var v=d.x,g=d.y,m=d.z,p=this.x,x=this.y,y=this.z,_=this.w,S=_*v+x*m-y*g,b=_*g+y*v-p*m,C=_*m+p*g-x*v,D=-p*v-x*g-y*m;return f.x=S*_+D*-p+b*-y-C*-x,f.y=b*_+D*-x+C*-p-S*-y,f.z=C*_+D*-y+S*-x-b*-p,f},a.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},a.prototype.toEuler=function(d,f){f=f||"YZX";var v,g,m,p=this.x,x=this.y,y=this.z,_=this.w;switch(f){case"YZX":var S=p*x+y*_;if(S>.499&&(v=2*Math.atan2(p,_),g=Math.PI/2,m=0),S<-.499&&(v=-2*Math.atan2(p,_),g=-Math.PI/2,m=0),isNaN(v)){var b=p*p,C=x*x,D=y*y;v=Math.atan2(2*x*_-2*p*y,1-2*C-2*D),g=Math.asin(2*S),m=Math.atan2(2*p*_-2*x*y,1-2*b-2*D)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=v,d.z=g,d.x=m},a.prototype.setFromEuler=function(d,f,v,g){g=g||"XYZ";var m=Math.cos(d/2),p=Math.cos(f/2),x=Math.cos(v/2),y=Math.sin(d/2),_=Math.sin(f/2),S=Math.sin(v/2);return g==="XYZ"?(this.x=y*p*x+m*_*S,this.y=m*_*x-y*p*S,this.z=m*p*S+y*_*x,this.w=m*p*x-y*_*S):g==="YXZ"?(this.x=y*p*x+m*_*S,this.y=m*_*x-y*p*S,this.z=m*p*S-y*_*x,this.w=m*p*x+y*_*S):g==="ZXY"?(this.x=y*p*x-m*_*S,this.y=m*_*x+y*p*S,this.z=m*p*S+y*_*x,this.w=m*p*x-y*_*S):g==="ZYX"?(this.x=y*p*x-m*_*S,this.y=m*_*x+y*p*S,this.z=m*p*S-y*_*x,this.w=m*p*x+y*_*S):g==="YZX"?(this.x=y*p*x+m*_*S,this.y=m*_*x+y*p*S,this.z=m*p*S-y*_*x,this.w=m*p*x-y*_*S):g==="XZY"&&(this.x=y*p*x-m*_*S,this.y=m*_*x-y*p*S,this.z=m*p*S+y*_*x,this.w=m*p*x+y*_*S),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,s){var r=e("./Vec3"),a=e("./Quaternion");n.exports=o;function o(u){u=u||{},this.position=new r,u.position&&this.position.copy(u.position),this.quaternion=new a,u.quaternion&&this.quaternion.copy(u.quaternion)}var c=new a;o.pointToLocalFrame=function(u,h,l,f){var f=f||new r;return l.vsub(u,f),h.conjugate(c),c.vmult(f,f),f},o.prototype.pointToLocal=function(u,h){return o.pointToLocalFrame(this.position,this.quaternion,u,h)},o.pointToWorldFrame=function(u,h,l,f){var f=f||new r;return h.vmult(l,f),f.vadd(u,f),f},o.prototype.pointToWorld=function(u,h){return o.pointToWorldFrame(this.position,this.quaternion,u,h)},o.prototype.vectorToWorldFrame=function(u,l){var l=l||new r;return this.quaternion.vmult(u,l),l},o.vectorToWorldFrame=function(u,h,l){return u.vmult(h,l),l},o.vectorToLocalFrame=function(u,h,l,f){var f=f||new r;return h.w*=-1,h.vmult(l,f),h.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,s){n.exports=a;var r=e("./Mat3");function a(h,l,d){this.x=h||0,this.y=l||0,this.z=d||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(h,l){var d=h.x,f=h.y,v=h.z,g=this.x,m=this.y,p=this.z;return l=l||new a,l.x=m*v-p*f,l.y=p*d-g*v,l.z=g*f-m*d,l},a.prototype.set=function(h,l,d){return this.x=h,this.y=l,this.z=d,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(h,l){if(l)l.x=h.x+this.x,l.y=h.y+this.y,l.z=h.z+this.z;else return new a(this.x+h.x,this.y+h.y,this.z+h.z)},a.prototype.vsub=function(h,l){if(l)l.x=this.x-h.x,l.y=this.y-h.y,l.z=this.z-h.z;else return new a(this.x-h.x,this.y-h.y,this.z-h.z)},a.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var h=this.x,l=this.y,d=this.z,f=Math.sqrt(h*h+l*l+d*d);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},a.prototype.unit=function(h){h=h||new a;var l=this.x,d=this.y,f=this.z,v=Math.sqrt(l*l+d*d+f*f);return v>0?(v=1/v,h.x=l*v,h.y=d*v,h.z=f*v):(h.x=1,h.y=0,h.z=0),h},a.prototype.norm=function(){var h=this.x,l=this.y,d=this.z;return Math.sqrt(h*h+l*l+d*d)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(h){var l=this.x,d=this.y,f=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-l)*(v-l)+(g-d)*(g-d)+(m-f)*(m-f))},a.prototype.distanceSquared=function(h){var l=this.x,d=this.y,f=this.z,v=h.x,g=h.y,m=h.z;return(v-l)*(v-l)+(g-d)*(g-d)+(m-f)*(m-f)},a.prototype.mult=function(h,l){l=l||new a;var d=this.x,f=this.y,v=this.z;return l.x=h*d,l.y=h*f,l.z=h*v,l},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(h){return h=h||new a,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new a,c=new a;a.prototype.tangents=function(h,l){var d=this.norm();if(d>0){var f=o,v=1/d;f.set(this.x*v,this.y*v,this.z*v);var g=c;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,h)):(g.set(0,1,0),f.cross(g,h)),f.cross(h,l)}else h.set(1,0,0),l.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},a.prototype.lerp=function(h,l,d){var f=this.x,v=this.y,g=this.z;d.x=f+(h.x-f)*l,d.y=v+(h.y-v)*l,d.z=g+(h.z-g)*l},a.prototype.almostEquals=function(h,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-h.x)>l||Math.abs(this.y-h.y)>l||Math.abs(this.z-h.z)>l)},a.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var u=new a;a.prototype.isAntiparallelTo=function(h,l){return this.negate(u),u.almostEquals(h,l)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,s){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var a=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var u=e("../collision/AABB"),h=e("../shapes/Box");function l(I){I=I||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof I.collisionFilterGroup=="number"?I.collisionFilterGroup:1,this.collisionFilterMask=typeof I.collisionFilterMask=="number"?I.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,I.position&&this.position.copy(I.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,I.velocity&&this.velocity.copy(I.velocity),this.initVelocity=new a,this.force=new a;var V=typeof I.mass=="number"?I.mass:0;this.mass=V,this.invMass=V>0?1/V:0,this.material=I.material||null,this.linearDamping=typeof I.linearDamping=="number"?I.linearDamping:.01,this.type=V<=0?l.STATIC:l.DYNAMIC,typeof I.type==typeof l.STATIC&&(this.type=I.type),this.allowSleep=typeof I.allowSleep<"u"?I.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof I.sleepSpeedLimit<"u"?I.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof I.sleepTimeLimit<"u"?I.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new c,I.quaternion&&this.quaternion.copy(I.quaternion),this.initQuaternion=new c,this.angularVelocity=new a,I.angularVelocity&&this.angularVelocity.copy(I.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof I.fixedRotation<"u"?I.fixedRotation:!1,this.angularDamping=typeof I.angularDamping<"u"?I.angularDamping:.01,this.aabb=new u,this.aabbNeedsUpdate=!0,this.wlambda=new a,I.shape&&this.addShape(I.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var I=this.sleepState;this.sleepState=0,I===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(I){if(this.allowSleep){var V=this.sleepState,U=this.velocity.norm2()+this.angularVelocity.norm2(),H=Math.pow(this.sleepSpeedLimit,2);V===l.AWAKE&&U<H?(this.sleepState=l.SLEEPY,this.timeLastSleepy=I,this.dispatchEvent(l.sleepyEvent)):V===l.SLEEPY&&U>H?this.wakeUp():V===l.SLEEPY&&I-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(I,U){var U=U||new a;return I.vsub(this.position,U),this.quaternion.conjugate().vmult(U,U),U},l.prototype.vectorToLocalFrame=function(I,U){var U=U||new a;return this.quaternion.conjugate().vmult(I,U),U},l.prototype.pointToWorldFrame=function(I,U){var U=U||new a;return this.quaternion.vmult(I,U),U.vadd(this.position,U),U},l.prototype.vectorToWorldFrame=function(I,U){var U=U||new a;return this.quaternion.vmult(I,U),U};var d=new a,f=new c;l.prototype.addShape=function(I,V,U){var H=new a,W=new c;return V&&H.copy(V),U&&W.copy(U),this.shapes.push(I),this.shapeOffsets.push(H),this.shapeOrientations.push(W),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var I=this.shapes,V=this.shapeOffsets,U=I.length,H=0,W=0;W!==U;W++){var nt=I[W];nt.updateBoundingSphereRadius();var O=V[W].norm(),N=nt.boundingSphereRadius;O+N>H&&(H=O+N)}this.boundingRadius=H};var v=new u;l.prototype.computeAABB=function(){for(var I=this.shapes,V=this.shapeOffsets,U=this.shapeOrientations,H=I.length,W=d,nt=f,O=this.quaternion,N=this.aabb,K=v,k=0;k!==H;k++){var A=I[k];U[k].mult(O,nt),nt.vmult(V[k],W),W.vadd(this.position,W),A.calculateWorldAABB(W,nt,K.lowerBound,K.upperBound),k===0?N.copy(K):N.extend(K)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(I){var V=this.invInertia;if(!(V.x===V.y&&V.y===V.z&&!I)){var U=g,H=m;U.setRotationFromQuaternion(this.quaternion),U.transpose(H),U.scale(V,U),U.mmult(H,this.invInertiaWorld)}};var p=new a,x=new a;l.prototype.applyForce=function(I,V){if(this.type===l.DYNAMIC){var U=p;V.vsub(this.position,U);var H=x;U.cross(I,H),this.force.vadd(I,this.force),this.torque.vadd(H,this.torque)}};var y=new a,_=new a;l.prototype.applyLocalForce=function(I,V){if(this.type===l.DYNAMIC){var U=y,H=_;this.vectorToWorldFrame(I,U),this.pointToWorldFrame(V,H),this.applyForce(U,H)}};var S=new a,b=new a,C=new a;l.prototype.applyImpulse=function(I,V){if(this.type===l.DYNAMIC){var U=S;V.vsub(this.position,U);var H=b;H.copy(I),H.mult(this.invMass,H),this.velocity.vadd(H,this.velocity);var W=C;U.cross(I,W),this.invInertiaWorld.vmult(W,W),this.angularVelocity.vadd(W,this.angularVelocity)}};var D=new a,M=new a;l.prototype.applyLocalImpulse=function(I,V){if(this.type===l.DYNAMIC){var U=D,H=M;this.vectorToWorldFrame(I,U),this.pointToWorldFrame(V,H),this.applyImpulse(U,H)}};var E=new a;l.prototype.updateMassProperties=function(){var I=E;this.invMass=this.mass>0?1/this.mass:0;var V=this.inertia,U=this.fixedRotation;this.computeAABB(),I.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(I,this.mass,V),this.invInertia.set(V.x>0&&!U?1/V.x:0,V.y>0&&!U?1/V.y:0,V.z>0&&!U?1/V.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(I,V){var U=new a;return I.vsub(this.position,U),this.angularVelocity.cross(U,V),this.velocity.vadd(V,V),V}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,s){e("./Body");var r=e("../math/Vec3"),a=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=u;function u(O){this.chassisBody=O.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof O.indexRightAxis<"u"?O.indexRightAxis:1,this.indexForwardAxis=typeof O.indexForwardAxis<"u"?O.indexForwardAxis:0,this.indexUpAxis=typeof O.indexUpAxis<"u"?O.indexUpAxis:2}new r,new r,new r;var h=new r,l=new r,d=new r;new o,u.prototype.addWheel=function(O){O=O||{};var N=new c(O),K=this.wheelInfos.length;return this.wheelInfos.push(N),K},u.prototype.setSteeringValue=function(O,N){var K=this.wheelInfos[N];K.steering=O},new r,u.prototype.applyEngineForce=function(O,N){this.wheelInfos[N].engineForce=O},u.prototype.setBrake=function(O,N){this.wheelInfos[N].brake=O},u.prototype.addToWorld=function(O){this.constraints,O.add(this.chassisBody);var N=this;this.preStepCallback=function(){N.updateVehicle(O.dt)},O.addEventListener("preStep",this.preStepCallback),this.world=O},u.prototype.getVehicleAxisWorld=function(O,N){N.set(O===0?1:0,O===1?1:0,O===2?1:0),this.chassisBody.vectorToWorldFrame(N,N)},u.prototype.updateVehicle=function(O){for(var N=this.wheelInfos,K=N.length,k=this.chassisBody,A=0;A<K;A++)this.updateWheelTransform(A);this.currentVehicleSpeedKmHour=3.6*k.velocity.norm();var B=new r;this.getVehicleAxisWorld(this.indexForwardAxis,B),B.dot(k.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var A=0;A<K;A++)this.castRay(N[A]);this.updateSuspension(O);for(var F=new r,P=new r,A=0;A<K;A++){var R=N[A],j=R.suspensionForce;j>R.maxSuspensionForce&&(j=R.maxSuspensionForce),R.raycastResult.hitNormalWorld.scale(j*O,F),R.raycastResult.hitPointWorld.vsub(k.position,P),k.applyImpulse(F,R.raycastResult.hitPointWorld)}this.updateFriction(O);var st=new r,tt=new r,Z=new r;for(A=0;A<K;A++){var R=N[A];k.getVelocityAtWorldPoint(R.chassisConnectionPointWorld,Z);var dt=1;switch(this.indexUpAxis){case 1:dt=-1;break}if(R.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,tt);var ht=tt.dot(R.raycastResult.hitNormalWorld);R.raycastResult.hitNormalWorld.scale(ht,st),tt.vsub(st,tt);var X=tt.dot(Z);R.deltaRotation=dt*X*O/R.radius}(R.sliding||!R.isInContact)&&R.engineForce!==0&&R.useCustomSlidingRotationalSpeed&&(R.deltaRotation=(R.engineForce>0?1:-1)*R.customSlidingRotationalSpeed*O),Math.abs(R.brake)>Math.abs(R.engineForce)&&(R.deltaRotation=0),R.rotation+=R.deltaRotation,R.deltaRotation*=.99}},u.prototype.updateSuspension=function(O){for(var N=this.chassisBody,K=N.mass,k=this.wheelInfos,A=k.length,B=0;B<A;B++){var F=k[B];if(F.isInContact){var P,R=F.suspensionRestLength,j=F.suspensionLength,st=R-j;P=F.suspensionStiffness*st*F.clippedInvContactDotSuspension;var tt=F.suspensionRelativeVelocity,Z;tt<0?Z=F.dampingCompression:Z=F.dampingRelaxation,P-=Z*tt,F.suspensionForce=P*K,F.suspensionForce<0&&(F.suspensionForce=0)}else F.suspensionForce=0}},u.prototype.removeFromWorld=function(O){this.constraints,O.remove(this.chassisBody),O.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,v=new r;u.prototype.castRay=function(O){var N=f,K=v;this.updateWheelTransformWorld(O);var k=this.chassisBody,A=-1,B=O.suspensionRestLength+O.radius;O.directionWorld.scale(B,N);var F=O.chassisConnectionPointWorld;F.vadd(N,K);var P=O.raycastResult;P.reset();var R=k.collisionResponse;k.collisionResponse=!1,this.world.rayTest(F,K,P),k.collisionResponse=R;var j=P.body;if(O.raycastResult.groundObject=0,j){A=P.distance,O.raycastResult.hitNormalWorld=P.hitNormalWorld,O.isInContact=!0;var st=P.distance;O.suspensionLength=st-O.radius;var tt=O.suspensionRestLength-O.maxSuspensionTravel,Z=O.suspensionRestLength+O.maxSuspensionTravel;O.suspensionLength<tt&&(O.suspensionLength=tt),O.suspensionLength>Z&&(O.suspensionLength=Z,O.raycastResult.reset());var dt=O.raycastResult.hitNormalWorld.dot(O.directionWorld),ht=new r;k.getVelocityAtWorldPoint(O.raycastResult.hitPointWorld,ht);var X=O.raycastResult.hitNormalWorld.dot(ht);if(dt>=-.1)O.suspensionRelativeVelocity=0,O.clippedInvContactDotSuspension=1/.1;else{var Tt=-1/dt;O.suspensionRelativeVelocity=X*Tt,O.clippedInvContactDotSuspension=Tt}}else O.suspensionLength=O.suspensionRestLength+0*O.maxSuspensionTravel,O.suspensionRelativeVelocity=0,O.directionWorld.scale(-1,O.raycastResult.hitNormalWorld),O.clippedInvContactDotSuspension=1;return A},u.prototype.updateWheelTransformWorld=function(O){O.isInContact=!1;var N=this.chassisBody;N.pointToWorldFrame(O.chassisConnectionPointLocal,O.chassisConnectionPointWorld),N.vectorToWorldFrame(O.directionLocal,O.directionWorld),N.vectorToWorldFrame(O.axleLocal,O.axleWorld)},u.prototype.updateWheelTransform=function(O){var N=h,K=l,k=d,A=this.wheelInfos[O];this.updateWheelTransformWorld(A),A.directionLocal.scale(-1,N),K.copy(A.axleLocal),N.cross(K,k),k.normalize(),K.normalize();var B=A.steering,F=new a;F.setFromAxisAngle(N,B);var P=new a;P.setFromAxisAngle(K,A.rotation);var R=A.worldTransform.quaternion;this.chassisBody.quaternion.mult(F,R),R.mult(P,R),R.normalize();var j=A.worldTransform.position;j.copy(A.directionWorld),j.scale(A.suspensionLength,j),j.vadd(A.chassisConnectionPointWorld,j)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];u.prototype.getWheelTransformWorld=function(O){return this.wheelInfos[O].worldTransform};var m=new r,p=[],x=[],y=1;u.prototype.updateFriction=function(O){for(var N=m,K=this.wheelInfos,k=K.length,A=this.chassisBody,B=x,F=p,P=0;P<k;P++){var R=K[P],j=R.raycastResult.body;R.sideImpulse=0,R.forwardImpulse=0,B[P]||(B[P]=new r),F[P]||(F[P]=new r)}for(var P=0;P<k;P++){var R=K[P],j=R.raycastResult.body;if(j){var st=F[P],tt=this.getWheelTransformWorld(P);tt.vectorToWorldFrame(g[this.indexRightAxis],st);var Z=R.raycastResult.hitNormalWorld,dt=st.dot(Z);Z.scale(dt,N),st.vsub(N,st),st.normalize(),Z.cross(st,B[P]),B[P].normalize(),R.sideImpulse=nt(A,R.raycastResult.hitPointWorld,j,R.raycastResult.hitPointWorld,st),R.sideImpulse*=y}}var ht=1,X=.5;this.sliding=!1;for(var P=0;P<k;P++){var R=K[P],j=R.raycastResult.body,Tt=0;if(R.slipInfo=1,j){var pt=0,rt=R.brake?R.brake:pt;Tt=C(A,j,R.raycastResult.hitPointWorld,B[P],rt),Tt+=R.engineForce*O;var ct=rt/Tt;R.slipInfo*=ct}if(R.forwardImpulse=0,R.skidInfo=1,j){R.skidInfo=1;var Yt=R.suspensionForce*O*R.frictionSlip,At=Yt,Gt=Yt*At;R.forwardImpulse=Tt;var yt=R.forwardImpulse*X,jt=R.sideImpulse*ht,Jt=yt*yt+jt*jt;if(R.sliding=!1,Jt>Gt){this.sliding=!0,R.sliding=!0;var ct=Yt/Math.sqrt(Jt);R.skidInfo*=ct}}}if(this.sliding)for(var P=0;P<k;P++){var R=K[P];R.sideImpulse!==0&&R.skidInfo<1&&(R.forwardImpulse*=R.skidInfo,R.sideImpulse*=R.skidInfo)}for(var P=0;P<k;P++){var R=K[P],L=new r;if(L.copy(R.raycastResult.hitPointWorld),R.forwardImpulse!==0){var T=new r;B[P].scale(R.forwardImpulse,T),A.applyImpulse(T,L)}if(R.sideImpulse!==0){var j=R.raycastResult.body,J=new r;J.copy(R.raycastResult.hitPointWorld);var mt=new r;F[P].scale(R.sideImpulse,mt),A.pointToLocalFrame(L,L),L["xyz"[this.indexUpAxis]]*=R.rollInfluence,A.pointToWorldFrame(L,L),A.applyImpulse(mt,L),mt.scale(-1,mt),j.applyImpulse(mt,J)}}};var _=new r,S=new r,b=new r;function C(O,N,K,k,A){var B=0,F=K,P=_,R=S,j=b;O.getVelocityAtWorldPoint(F,P),N.getVelocityAtWorldPoint(F,R),P.vsub(R,j);var st=k.dot(j),tt=V(O,K,k),Z=V(N,K,k),dt=1,ht=dt/(tt+Z);return B=-st*ht,A<B&&(B=A),B<-A&&(B=-A),B}var D=new r,M=new r,E=new r,I=new r;function V(O,N,K){var k=D,A=M,B=E,F=I;return N.vsub(O.position,k),k.cross(K,A),O.invInertiaWorld.vmult(A,F),F.cross(k,B),O.invMass+K.dot(B)}var U=new r,H=new r,W=new r;function nt(O,N,K,k,A,dt){var F=A.norm2();if(F>1.1)return 0;var P=U,R=H,j=W;O.getVelocityAtWorldPoint(N,P),K.getVelocityAtWorldPoint(k,R),P.vsub(R,j);var st=A.dot(j),tt=.2,Z=1/(O.invMass+K.invMass),dt=-tt*st*Z;return dt}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,s){var r=e("./Body"),a=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),u=e("../constraints/HingeConstraint");n.exports=h;function h(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new c(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new o(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new r(1,new a(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var g=typeof f.position<"u"?f.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new c(0,1,0);this.wheelAxes.push(p);var x=new u(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:c.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],m=Math.cos(f),p=Math.sin(f),x=g.x,y=g.y;this.constraints[v].axisA.set(m*x-p*y,p*x+m*y,0)},h.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},h.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var l=new c;h.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},h.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(f,l),m.vectorToWorldFrame(l,l),p.vadd(l,p)},h.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.add(g[m]);for(var m=0;m<v.length;m++)f.addConstraint(v[m]);f.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},h.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.remove(g[m]);for(var m=0;m<v.length;m++)f.removeConstraint(v[m])};var d=new c;h.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,s){n.exports=a,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;a.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,x=this.smoothingRadius*this.smoothingRadius,y=o,_=0;_!==m;_++){var S=this.particles[_];S.position.vsub(v.position,y),p!==S.id&&y.norm2()<x&&g.push(S)}};var c=new r,u=new r,h=new r,l=new r,d=new r,f=new r;a.prototype.update=function(){for(var v=this.particles.length,g=c,m=this.speedOfSound,p=this.eps,x=0;x!==v;x++){var y=this.particles[x],_=this.neighbors[x];_.length=0,this.getNeighbors(y,_),_.push(this.particles[x]);for(var S=_.length,b=0,C=0;C!==S;C++){y.position.vsub(_[C].position,g);var D=g.norm(),M=this.w(D);b+=_[C].mass*M}this.densities[x]=b,this.pressures[x]=m*m*(this.densities[x]-this.density)}for(var E=u,I=h,V=l,U=d,H=f,x=0;x!==v;x++){var W=this.particles[x];E.set(0,0,0),I.set(0,0,0);for(var nt,O,_=this.neighbors[x],S=_.length,C=0;C!==S;C++){var N=_[C];W.position.vsub(N.position,U);var K=U.norm();nt=-N.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+p)+this.pressures[C]/(this.densities[C]*this.densities[C]+p)),this.gradw(U,V),V.mult(nt,V),E.vadd(V,E),N.velocity.vsub(W.velocity,H),H.mult(1/(1e-4+this.densities[x]*this.densities[C])*this.viscosity*N.mass,H),O=this.nablaw(K),H.mult(O,H),I.vadd(H,I)}I.mult(W.mass,I),E.mult(W.mass,E),W.force.vadd(I,W.force),W.force.vadd(E,W.force)}},a.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},a.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},a.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(x,y,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=x,this.bodyB=y,this.localAnchorA=new r,this.localAnchorB=new r,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}a.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},a.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},a.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},a.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var o=new r,c=new r,u=new r,h=new r,l=new r,d=new r,f=new r,v=new r,g=new r,m=new r,p=new r;a.prototype.applyForce=function(){var x=this.stiffness,y=this.damping,_=this.restLength,S=this.bodyA,b=this.bodyB,C=o,D=c,M=u,E=h,I=p,V=l,U=d,H=f,W=v,nt=g,O=m;this.getWorldAnchorA(V),this.getWorldAnchorB(U),V.vsub(S.position,H),U.vsub(b.position,W),U.vsub(V,C);var N=C.norm();D.copy(C),D.normalize(),b.velocity.vsub(S.velocity,M),b.angularVelocity.cross(W,I),M.vadd(I,M),S.angularVelocity.cross(H,I),M.vsub(I,M),D.mult(-x*(N-_)-y*M.dot(D),E),S.force.vsub(E,S.force),b.force.vadd(E,b.force),H.cross(E,nt),W.cross(E,O),S.torque.vsub(nt,S.torque),b.torque.vadd(O,b.torque)}},{"../math/Vec3":30}],36:[function(e,n,s){var r=e("../math/Vec3"),a=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=u;function u(d){d=c.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var l=new r,h=new r,l=new r;u.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,h),d.getVelocityAtWorldPoint(h,l);var g=f.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,v=a,g=[new v(-l,-d,-f),new v(l,-d,-f),new v(l,d,-f),new v(-l,d,-f),new v(-l,-d,f),new v(l,-d,f),new v(l,d,f),new v(-l,d,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new o(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},c.prototype.calculateLocalInertia=function(l,d){return d=d||new a,c.calculateInertia(this.halfExtents,l,d),d},c.calculateInertia=function(l,d,f){var v=l;f.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(l,d){var f=l,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var u=new a;new a,c.prototype.forEachWorldCorner=function(l,d,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)u.set(g[m][0],g[m][1],g[m][2]),d.vmult(u,u),l.vadd(u,u),f(u.x,u.y,u.z)};var h=[new a,new a,new a,new a,new a,new a,new a,new a];c.prototype.calculateWorldAABB=function(l,d,f,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];d.vmult(m,m),l.vadd(m,m),v.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=h[p];d.vmult(m,m),l.vadd(m,m);var x=m.x,y=m.y,_=m.z;x>v.x&&(v.x=x),y>v.y&&(v.y=y),_>v.z&&(v.z=_),x<f.x&&(f.x=x),y<f.y&&(f.y=y),_<f.z&&(f.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(A,B,F){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=A||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=B||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=F?F.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var u=new a;c.prototype.computeEdges=function(){var A=this.faces,B=this.vertices;B.length;var F=this.uniqueEdges;F.length=0;for(var P=u,R=0;R!==A.length;R++)for(var j=A[R],st=j.length,tt=0;tt!==st;tt++){var Z=(tt+1)%st;B[j[tt]].vsub(B[j[Z]],P),P.normalize();for(var dt=!1,ht=0;ht!==F.length;ht++)if(F[ht].almostEquals(P)||F[ht].almostEquals(P)){dt=!0;break}dt||F.push(P.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var A=0;A<this.faces.length;A++){for(var B=0;B<this.faces[A].length;B++)if(!this.vertices[this.faces[A][B]])throw new Error("Vertex "+this.faces[A][B]+" not found!");var F=this.faceNormals[A]||new a;this.getFaceNormal(A,F),F.negate(F),this.faceNormals[A]=F;var P=this.vertices[this.faces[A][0]];if(F.dot(P)<0){console.error(".faceNormals["+A+"] = Vec3("+F.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var B=0;B<this.faces[A].length;B++)console.warn(".vertices["+this.faces[A][B]+"] = Vec3("+this.vertices[this.faces[A][B]].toString()+")")}}};var h=new a,l=new a;c.computeNormal=function(A,B,F,P){B.vsub(A,l),F.vsub(B,h),h.cross(l,P),P.isZero()||P.normalize()},c.prototype.getFaceNormal=function(A,B){var F=this.faces[A],P=this.vertices[F[0]],R=this.vertices[F[1]],j=this.vertices[F[2]];return c.computeNormal(P,R,j,B)};var d=new a;c.prototype.clipAgainstHull=function(A,B,F,P,R,j,st,tt,Z){for(var dt=d,ht=-1,X=-Number.MAX_VALUE,Tt=0;Tt<F.faces.length;Tt++){dt.copy(F.faceNormals[Tt]),R.vmult(dt,dt);var pt=dt.dot(j);pt>X&&(X=pt,ht=Tt)}for(var rt=[],ct=F.faces[ht],Yt=ct.length,At=0;At<Yt;At++){var Gt=F.vertices[ct[At]],yt=new a;yt.copy(Gt),R.vmult(yt,yt),P.vadd(yt,yt),rt.push(yt)}ht>=0&&this.clipFaceAgainstHull(j,A,B,rt,st,tt,Z)};var f=new a,v=new a,g=new a,m=new a,p=new a,x=new a;c.prototype.findSeparatingAxis=function(A,B,F,P,R,j,st,tt){var Z=f,dt=v,ht=g,X=m,Tt=p,pt=x,rt=Number.MAX_VALUE,ct=this;if(ct.uniqueAxes)for(var At=0;At!==ct.uniqueAxes.length;At++){F.vmult(ct.uniqueAxes[At],Z);var yt=ct.testSepAxis(Z,A,B,F,P,R);if(yt===!1)return!1;yt<rt&&(rt=yt,j.copy(Z))}else for(var Yt=st?st.length:ct.faces.length,At=0;At<Yt;At++){var Gt=st?st[At]:At;Z.copy(ct.faceNormals[Gt]),F.vmult(Z,Z);var yt=ct.testSepAxis(Z,A,B,F,P,R);if(yt===!1)return!1;yt<rt&&(rt=yt,j.copy(Z))}if(A.uniqueAxes)for(var At=0;At!==A.uniqueAxes.length;At++){R.vmult(A.uniqueAxes[At],dt);var yt=ct.testSepAxis(dt,A,B,F,P,R);if(yt===!1)return!1;yt<rt&&(rt=yt,j.copy(dt))}else for(var jt=tt?tt.length:A.faces.length,At=0;At<jt;At++){var Gt=tt?tt[At]:At;dt.copy(A.faceNormals[Gt]),R.vmult(dt,dt);var yt=ct.testSepAxis(dt,A,B,F,P,R);if(yt===!1)return!1;yt<rt&&(rt=yt,j.copy(dt))}for(var Jt=0;Jt!==ct.uniqueEdges.length;Jt++){F.vmult(ct.uniqueEdges[Jt],X);for(var L=0;L!==A.uniqueEdges.length;L++)if(R.vmult(A.uniqueEdges[L],Tt),X.cross(Tt,pt),!pt.almostZero()){pt.normalize();var T=ct.testSepAxis(pt,A,B,F,P,R);if(T===!1)return!1;T<rt&&(rt=T,j.copy(pt))}}return P.vsub(B,ht),ht.dot(j)>0&&j.negate(j),!0};var y=[],_=[];c.prototype.testSepAxis=function(A,B,F,P,R,j){var st=this;c.project(st,A,F,P,y),c.project(B,A,R,j,_);var tt=y[0],Z=y[1],dt=_[0],ht=_[1],X=tt-ht,Tt=dt-Z,pt=X<Tt?X:Tt;return pt};var S=new a,b=new a;c.prototype.calculateLocalInertia=function(A,B){this.computeLocalAABB(S,b);var F=b.x-S.x,P=b.y-S.y,R=b.z-S.z;B.x=1/12*A*(2*P*2*P+2*R*2*R),B.y=1/12*A*(2*F*2*F+2*R*2*R),B.z=1/12*A*(2*P*2*P+2*F*2*F)},c.prototype.getPlaneConstantOfFace=function(A){var B=this.faces[A],F=this.faceNormals[A],P=this.vertices[B[0]],R=-F.dot(P);return R};var C=new a,D=new a,M=new a,E=new a,I=new a,V=new a,U=new a,H=new a;c.prototype.clipFaceAgainstHull=function(A,B,F,P,R,j,st){for(var tt=C,Z=D,dt=M,ht=E,X=I,Tt=V,pt=U,rt=H,ct=this,Yt=[],At=P,Gt=Yt,yt=-1,jt=Number.MAX_VALUE,Jt=0;Jt<ct.faces.length;Jt++){tt.copy(ct.faceNormals[Jt]),F.vmult(tt,tt);var L=tt.dot(A);L<jt&&(jt=L,yt=Jt)}if(!(yt<0)){var T=ct.faces[yt];T.connectedFaces=[];for(var J=0;J<ct.faces.length;J++)for(var mt=0;mt<ct.faces[J].length;mt++)T.indexOf(ct.faces[J][mt])!==-1&&J!==yt&&T.connectedFaces.indexOf(J)===-1&&T.connectedFaces.push(J);At.length;for(var ft=T.length,gt=0;gt<ft;gt++){var Bt=ct.vertices[T[gt]],Et=ct.vertices[T[(gt+1)%ft]];Bt.vsub(Et,Z),dt.copy(Z),F.vmult(dt,dt),B.vadd(dt,dt),ht.copy(this.faceNormals[yt]),F.vmult(ht,ht),B.vadd(ht,ht),dt.cross(ht,X),X.negate(X),Tt.copy(Bt),F.vmult(Tt,Tt),B.vadd(Tt,Tt),-Tt.dot(X);var Wt;{var ot=T.connectedFaces[gt];pt.copy(this.faceNormals[ot]);var qt=this.getPlaneConstantOfFace(ot);rt.copy(pt),F.vmult(rt,rt);var Wt=qt-rt.dot(B)}for(this.clipFaceAgainstPlane(At,Gt,rt,Wt);At.length;)At.shift();for(;Gt.length;)At.push(Gt.shift())}pt.copy(this.faceNormals[yt]);var qt=this.getPlaneConstantOfFace(yt);rt.copy(pt),F.vmult(rt,rt);for(var Wt=qt-rt.dot(B),J=0;J<At.length;J++){var kt=rt.dot(At[J])+Wt;if(kt<=R&&(console.log("clamped: depth="+kt+" to minDist="+(R+"")),kt=R),kt<=j){var Vt=At[J];if(kt<=0){var Ot={point:Vt,normal:rt,depth:kt};st.push(Ot)}}}}},c.prototype.clipFaceAgainstPlane=function(A,B,F,P){var R,j,st=A.length;if(st<2)return B;var tt=A[A.length-1],Z=A[0];R=F.dot(tt)+P;for(var dt=0;dt<st;dt++){if(Z=A[dt],j=F.dot(Z)+P,R<0)if(j<0){var ht=new a;ht.copy(Z),B.push(ht)}else{var ht=new a;tt.lerp(Z,R/(R-j),ht),B.push(ht)}else if(j<0){var ht=new a;tt.lerp(Z,R/(R-j),ht),B.push(ht),B.push(Z)}tt=Z,R=j}return B},c.prototype.computeWorldVertices=function(A,B){for(var F=this.vertices.length;this.worldVertices.length<F;)this.worldVertices.push(new a);for(var P=this.vertices,R=this.worldVertices,j=0;j!==F;j++)B.vmult(P[j],R[j]),A.vadd(R[j],R[j]);this.worldVerticesNeedsUpdate=!1},new a,c.prototype.computeLocalAABB=function(A,B){var F=this.vertices.length,P=this.vertices;A.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),B.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var R=0;R<F;R++){var j=P[R];j.x<A.x?A.x=j.x:j.x>B.x&&(B.x=j.x),j.y<A.y?A.y=j.y:j.y>B.y&&(B.y=j.y),j.z<A.z?A.z=j.z:j.z>B.z&&(B.z=j.z)}},c.prototype.computeWorldFaceNormals=function(A){for(var B=this.faceNormals.length;this.worldFaceNormals.length<B;)this.worldFaceNormals.push(new a);for(var F=this.faceNormals,P=this.worldFaceNormals,R=0;R!==B;R++)A.vmult(F[R],P[R]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var A=0,B=this.vertices,F=0,P=B.length;F!==P;F++){var R=B[F].norm2();R>A&&(A=R)}this.boundingSphereRadius=Math.sqrt(A)};var W=new a;c.prototype.calculateWorldAABB=function(A,B,F,P){for(var R=this.vertices.length,j=this.vertices,st,tt,Z,dt,ht,X,Tt=0;Tt<R;Tt++){W.copy(j[Tt]),B.vmult(W,W),A.vadd(W,W);var pt=W;pt.x<st||st===void 0?st=pt.x:(pt.x>dt||dt===void 0)&&(dt=pt.x),pt.y<tt||tt===void 0?tt=pt.y:(pt.y>ht||ht===void 0)&&(ht=pt.y),pt.z<Z||Z===void 0?Z=pt.z:(pt.z>X||X===void 0)&&(X=pt.z)}F.set(st,tt,Z),P.set(dt,ht,X)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(A){A=A||new a;for(var B=this.vertices.length,F=this.vertices,P=0;P<B;P++)A.vadd(F[P],A);return A.mult(1/B,A),A},c.prototype.transformAllPoints=function(A,B){var F=this.vertices.length,P=this.vertices;if(B){for(var R=0;R<F;R++){var j=P[R];B.vmult(j,j)}for(var R=0;R<this.faceNormals.length;R++){var j=this.faceNormals[R];B.vmult(j,j)}}if(A)for(var R=0;R<F;R++){var j=P[R];j.vadd(A,j)}};var nt=new a,O=new a,N=new a;c.prototype.pointIsInside=function(A){var B=this.vertices.length,F=this.vertices,P=this.faces,R=this.faceNormals,j=null,st=this.faces.length,tt=nt;this.getAveragePointLocal(tt);for(var Z=0;Z<st;Z++){this.faces[Z].length;var B=R[Z],dt=F[P[Z][0]],ht=O;A.vsub(dt,ht);var X=B.dot(ht),Tt=N;tt.vsub(dt,Tt);var pt=B.dot(Tt);if(X<0&&pt>0||X>0&&pt<0)return!1}return j?1:-1},new a;var K=new a,k=new a;c.project=function(A,B,F,P,R){var j=A.vertices.length,st=K,tt=0,Z=0,dt=k,ht=A.vertices;dt.setZero(),o.vectorToLocalFrame(F,P,B,st),o.pointToLocalFrame(F,P,dt,dt);var X=dt.dot(st);Z=tt=ht[0].dot(st);for(var Tt=1;Tt<j;Tt++){var pt=ht[Tt].dot(st);pt>tt&&(tt=pt),pt<Z&&(Z=pt)}if(Z-=X,tt-=X,Z>tt){var rt=Z;Z=tt,tt=rt}R[0]=tt,R[1]=Z}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(u,h,l,d){var f=d,v=[],g=[],m=[],p=[],x=[],y=Math.cos,_=Math.sin;v.push(new a(h*y(0),h*_(0),-l*.5)),p.push(0),v.push(new a(u*y(0),u*_(0),l*.5)),x.push(1);for(var S=0;S<f;S++){var b=2*Math.PI/f*(S+1),C=2*Math.PI/f*(S+.5);S<f-1?(v.push(new a(h*y(b),h*_(b),-l*.5)),p.push(2*S+2),v.push(new a(u*y(b),u*_(b),l*.5)),x.push(2*S+3),m.push([2*S+2,2*S+3,2*S+1,2*S])):m.push([0,1,2*S+1,2*S]),(f%2===1||S<f/2)&&g.push(new a(y(C),_(C),0))}m.push(x),g.push(new a(0,0,1));for(var D=[],S=0;S<p.length;S++)D.push(p[p.length-S-1]);m.push(D),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,s){var r=e("./Shape"),a=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=u;function u(h,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}u.prototype=new r,u.prototype.update=function(){this._cachedPillars={}},u.prototype.updateMinValue=function(){for(var h=this.data,l=h[0][0],d=0;d!==h.length;d++)for(var f=0;f!==h[d].length;f++){var v=h[d][f];v<l&&(l=v)}this.minValue=l},u.prototype.updateMaxValue=function(){for(var h=this.data,l=h[0][0],d=0;d!==h.length;d++)for(var f=0;f!==h[d].length;f++){var v=h[d][f];v>l&&(l=v)}this.maxValue=l},u.prototype.setHeightValueAtIndex=function(h,l,d){var f=this.data;f[h][l]=d,this.clearCachedConvexTrianglePillar(h,l,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,l,!0),this.clearCachedConvexTrianglePillar(h-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(h,l-1,!0),this.clearCachedConvexTrianglePillar(h,l-1,!1)),l>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,l-1,!0)},u.prototype.getRectMinMax=function(h,l,d,f,v){v=v||[];for(var g=this.data,m=this.minValue,p=h;p<=d;p++)for(var x=l;x<=f;x++){var y=g[p][x];y>m&&(m=y)}v[0]=this.minValue,v[1]=m},u.prototype.getIndexOfPosition=function(h,l,d,f){var v=this.elementSize,g=this.data,m=Math.floor(h/v),p=Math.floor(l/v);return d[0]=m,d[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},u.prototype.getHeightAt=function(h,l,d){var f=[];this.getIndexOfPosition(h,l,f,d);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},u.prototype.getCacheConvexTrianglePillarKey=function(h,l,d){return h+"_"+l+"_"+(d?1:0)},u.prototype.getCachedConvexTrianglePillar=function(h,l,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,d)]},u.prototype.setCachedConvexTrianglePillar=function(h,l,d,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,d)]={convex:f,offset:v}},u.prototype.clearCachedConvexTrianglePillar=function(h,l,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,d)]},u.prototype.getConvexTrianglePillar=function(h,l,d){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,l,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new a,v=new o,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var x=0;x<6;x++)f.vertices[x]||(f.vertices[x]=new o);p.length=5;for(var x=0;x<5;x++)p[x]||(p[x]=[]);var y=f.vertices,_=(Math.min(g[h][l],g[h+1][l],g[h][l+1],g[h+1][l+1])-this.minValue)/2+this.minValue;d?(v.set((h+.75)*m,(l+.75)*m,_),y[0].set(.25*m,.25*m,g[h+1][l+1]-_),y[1].set(-.75*m,.25*m,g[h][l+1]-_),y[2].set(.25*m,-.75*m,g[h+1][l]-_),y[3].set(.25*m,.25*m,-_-1),y[4].set(-.75*m,.25*m,-_-1),y[5].set(.25*m,-.75*m,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((h+.25)*m,(l+.25)*m,_),y[0].set(-.25*m,-.25*m,g[h][l]-_),y[1].set(.75*m,-.25*m,g[h+1][l]-_),y[2].set(-.25*m,.75*m,g[h][l+1]-_),y[3].set(-.25*m,-.25*m,-_-1),y[4].set(.75*m,-.25*m,-_-1),y[5].set(-.25*m,.75*m,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,l,d,f,v)},u.prototype.calculateLocalInertia=function(h,l){return l=l||new o,l.set(0,0,0),l},u.prototype.volume=function(){return Number.MAX_VALUE},u.prototype.calculateWorldAABB=function(h,l,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},u.prototype.updateBoundingSphereRadius=function(){var h=this.data,l=this.elementSize;this.boundingSphereRadius=new o(h.length*l,h[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,u){return u=u||new a,u.set(0,0,0),u},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,u,h,l){h.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(u){var h=this.worldNormal;h.set(0,0,1),u.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(u,h){return h=h||new a,h},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new a;o.prototype.calculateWorldAABB=function(u,h,l,d){c.set(0,0,1),h.vmult(c,c);var f=Number.MAX_VALUE;l.set(-f,-f,-f),d.set(f,f,f),c.x===1&&(d.x=u.x),c.y===1&&(d.y=u.y),c.z===1&&(d.z=u.z),c.x===-1&&(l.x=u.x),c.y===-1&&(l.y=u.y),c.z===-1&&(l.z=u.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,s){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,u){u=u||new a;var h=2*c*this.radius*this.radius/5;return u.x=h,u.y=h,u.z=h,u},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,u,h,l){for(var d=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];h[g]=c[g]-d,l[g]=c[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,s){n.exports=h;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),u=e("../utils/Octree");function h(D,M){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(D),this.indices=new Int16Array(M),this.normals=new Float32Array(M.length),this.aabb=new c,this.edges=null,this.scale=new a(1,1,1),this.tree=new u,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var l=new a;h.prototype.updateTree=function(){var D=this.tree;D.reset(),D.aabb.copy(this.aabb);var M=this.scale;D.aabb.lowerBound.x*=1/M.x,D.aabb.lowerBound.y*=1/M.y,D.aabb.lowerBound.z*=1/M.z,D.aabb.upperBound.x*=1/M.x,D.aabb.upperBound.y*=1/M.y,D.aabb.upperBound.z*=1/M.z;for(var E=new c,I=new a,V=new a,U=new a,H=[I,V,U],W=0;W<this.indices.length/3;W++){var nt=W*3;this._getUnscaledVertex(this.indices[nt],I),this._getUnscaledVertex(this.indices[nt+1],V),this._getUnscaledVertex(this.indices[nt+2],U),E.setFromPoints(H),D.insert(E,W)}D.removeEmptyNodes()};var d=new c;h.prototype.getTrianglesInAABB=function(D,M){d.copy(D);var E=this.scale,I=E.x,V=E.y,U=E.z,H=d.lowerBound,W=d.upperBound;return H.x/=I,H.y/=V,H.z/=U,W.x/=I,W.y/=V,W.z/=U,this.tree.aabbQuery(d,M)},h.prototype.setScale=function(D){var M=this.scale.x===this.scale.y===this.scale.z,E=D.x===D.y===D.z;M&&E||this.updateNormals(),this.scale.copy(D),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var D=l,M=this.normals,E=0;E<this.indices.length/3;E++){var I=E*3,V=this.indices[I],U=this.indices[I+1],H=this.indices[I+2];this.getVertex(V,p),this.getVertex(U,x),this.getVertex(H,y),h.computeNormal(x,p,y,D),M[I]=D.x,M[I+1]=D.y,M[I+2]=D.z}},h.prototype.updateEdges=function(){for(var D={},M=function(nt,O){var N=V<U?V+"_"+U:U+"_"+V;D[N]=!0},E=0;E<this.indices.length/3;E++){var I=E*3,V=this.indices[I],U=this.indices[I+1];this.indices[I+2],M(),M(),M()}var H=Object.keys(D);this.edges=new Int16Array(H.length*2);for(var E=0;E<H.length;E++){var W=H[E].split("_");this.edges[2*E]=parseInt(W[0],10),this.edges[2*E+1]=parseInt(W[1],10)}},h.prototype.getEdgeVertex=function(D,M,E){var I=this.edges[D*2+(M?1:0)];this.getVertex(I,E)};var f=new a,v=new a;h.prototype.getEdgeVector=function(D,M){var E=f,I=v;this.getEdgeVertex(D,0,E),this.getEdgeVertex(D,1,I),I.vsub(E,M)};var g=new a,m=new a;h.computeNormal=function(D,M,E,I){M.vsub(D,m),E.vsub(M,g),g.cross(m,I),I.isZero()||I.normalize()};var p=new a,x=new a,y=new a;h.prototype.getVertex=function(D,M){var E=this.scale;return this._getUnscaledVertex(D,M),M.x*=E.x,M.y*=E.y,M.z*=E.z,M},h.prototype._getUnscaledVertex=function(D,M){var E=D*3,I=this.vertices;return M.set(I[E],I[E+1],I[E+2])},h.prototype.getWorldVertex=function(D,M,E,I){return this.getVertex(D,I),o.pointToWorldFrame(M,E,I,I),I},h.prototype.getTriangleVertices=function(D,M,E,I){var V=D*3;this.getVertex(this.indices[V],M),this.getVertex(this.indices[V+1],E),this.getVertex(this.indices[V+2],I)},h.prototype.getNormal=function(D,M){var E=D*3;return M.set(this.normals[E],this.normals[E+1],this.normals[E+2])};var _=new c;h.prototype.calculateLocalInertia=function(D,M){this.computeLocalAABB(_);var E=_.upperBound.x-_.lowerBound.x,I=_.upperBound.y-_.lowerBound.y,V=_.upperBound.z-_.lowerBound.z;return M.set(1/12*D*(2*I*2*I+2*V*2*V),1/12*D*(2*E*2*E+2*V*2*V),1/12*D*(2*I*2*I+2*E*2*E))};var S=new a;h.prototype.computeLocalAABB=function(D){var M=D.lowerBound,E=D.upperBound,I=this.vertices.length;this.vertices;var V=S;this.getVertex(0,V),M.copy(V),E.copy(V);for(var U=0;U!==I;U++)this.getVertex(U,V),V.x<M.x?M.x=V.x:V.x>E.x&&(E.x=V.x),V.y<M.y?M.y=V.y:V.y>E.y&&(E.y=V.y),V.z<M.z?M.z=V.z:V.z>E.z&&(E.z=V.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var D=0,M=this.vertices,E=new a,I=0,V=M.length/3;I!==V;I++){this.getVertex(I,E);var U=E.norm2();U>D&&(D=U)}this.boundingSphereRadius=Math.sqrt(D)},new a;var b=new o,C=new c;h.prototype.calculateWorldAABB=function(D,M,E,I){var V=b,U=C;V.position=D,V.quaternion=M,this.aabb.toWorldFrame(V,U),E.copy(U.lowerBound),I.copy(U.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(D,M,E,I,V){D=D||1,M=M||.5,E=E||8,I=I||6,V=V||Math.PI*2;for(var U=[],H=[],W=0;W<=E;W++)for(var nt=0;nt<=I;nt++){var O=nt/I*V,N=W/E*Math.PI*2,K=(D+M*Math.cos(N))*Math.cos(O),k=(D+M*Math.cos(N))*Math.sin(O),A=M*Math.sin(N);U.push(K,k,A)}for(var W=1;W<=E;W++)for(var nt=1;nt<=I;nt++){var B=(I+1)*W+nt-1,F=(I+1)*(W-1)+nt-1,P=(I+1)*(W-1)+nt,R=(I+1)*W+nt;H.push(B,F,R),H.push(F,P,R)}return new h(U,H)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,s){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function a(){r.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new r;var o=[],c=[],u=[];a.prototype.solve=function(h,l){var d=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=l.bodies,x=p.length,y=h,_,S,b,C,D,M;if(m!==0)for(var E=0;E!==x;E++)p[E].updateSolveMassProperties();var I=c,V=u,U=o;I.length=m,V.length=m,U.length=m;for(var E=0;E!==m;E++){var H=g[E];U[E]=0,V[E]=H.computeB(y),I[E]=1/H.computeC()}if(m!==0){for(var E=0;E!==x;E++){var W=p[E],nt=W.vlambda,O=W.wlambda;nt.set(0,0,0),O&&O.set(0,0,0)}for(d=0;d!==f;d++){C=0;for(var N=0;N!==m;N++){var H=g[N];_=V[N],S=I[N],M=U[N],D=H.computeGWlambda(),b=S*(_-D-H.eps*M),M+b<H.minForce?b=H.minForce-M:M+b>H.maxForce&&(b=H.maxForce-M),U[N]+=b,C+=b>0?b:-b,H.addToWlambda(b)}if(C*C<v)break}for(var E=0;E!==x;E++){var W=p[E],K=W.velocity,k=W.angularVelocity;K.vadd(W.vlambda,K),k&&k.vadd(W.wlambda,k)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,s){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(a,o){return 0},r.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},r.prototype.removeEquation=function(a){var o=this.equations,c=o.indexOf(a);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,s){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),a=e("../objects/Body");function o(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],u=[],h={bodies:[]},l=a.STATIC;function d(p){for(var x=p.length,y=0;y!==x;y++){var _=p[y];if(!_.visited&&!(_.body.type&l))return _}return!1}var f=[];function v(p,x,y,_){for(f.push(p),p.visited=!0,x(p,y,_);f.length;)for(var S=f.pop(),b;b=d(S.children);)b.visited=!0,x(b,y,_),f.push(b)}function g(p,x,y){x.push(p.body);for(var _=p.eqs.length,S=0;S!==_;S++){var b=p.eqs[S];y.indexOf(b)===-1&&y.push(b)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,x){for(var y=c,_=this.nodePool,S=x.bodies,b=this.equations,C=b.length,D=S.length,M=this.subsolver;_.length<D;)_.push(this.createNode());y.length=D;for(var E=0;E<D;E++)y[E]=_[E];for(var E=0;E!==D;E++){var I=y[E];I.body=S[E],I.children.length=0,I.eqs.length=0,I.visited=!1}for(var V=0;V!==C;V++){var U=b[V],E=S.indexOf(U.bi),H=S.indexOf(U.bj),W=y[E],nt=y[H];W.children.push(nt),W.eqs.push(U),nt.children.push(W),nt.eqs.push(U)}var O,N=0,K=u;M.tolerance=this.tolerance,M.iterations=this.iterations;for(var k=h;O=d(y);){K.length=0,k.bodies.length=0,v(O,g,k.bodies,K);var A=K.length;K=K.sort(m);for(var E=0;E!==A;E++)M.addEquation(K[E]);M.solve(p,k),M.removeAllEquations(),N++}return N};function m(p,x){return x.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,s){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[a]===void 0&&(c[a]=[]),c[a].indexOf(o)===-1&&c[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[a]!==void 0&&c[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[a]===void 0)return this;var u=c[a].indexOf(o);return u!==-1&&c[a].splice(u,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,c=o[a.type];if(c!==void 0){a.target=this;for(var u=0,h=c.length;u<h;u++)c[u].call(this,a)}return this}}},{}],50:[function(e,n,s){var r=e("../collision/AABB"),a=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,d){d=d||{},d.root=null,d.aabb=l,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,d){this.children.length=this.data.length=0},o.prototype.insert=function(l,d,f){var v=this.data;if(f=f||0,!this.aabb.contains(l))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(l,d,f+1))return!0;m&&(g.length=0)}return v.push(d),!0};var u=new a;o.prototype.subdivide=function(){var l=this.aabb,d=l.lowerBound,f=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new a(0,0,0)})}),new o({aabb:new r({lowerBound:new a(1,0,0)})}),new o({aabb:new r({lowerBound:new a(1,1,0)})}),new o({aabb:new r({lowerBound:new a(1,1,1)})}),new o({aabb:new r({lowerBound:new a(0,1,1)})}),new o({aabb:new r({lowerBound:new a(0,0,1)})}),new o({aabb:new r({lowerBound:new a(1,0,1)})}),new o({aabb:new r({lowerBound:new a(0,1,0)})})),f.vsub(d,u),u.scale(.5,u);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var x=p.aabb.lowerBound;x.x*=u.x,x.y*=u.y,x.z*=u.z,x.vadd(d,x),x.vadd(u,p.aabb.upperBound)}},o.prototype.aabbQuery=function(l,d){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(f,v.children)}return d};var h=new r;o.prototype.rayQuery=function(l,d,f){return l.getAABB(h),h.toLocalFrame(d,h),this.aabbQuery(h,f),f},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var d=l.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(l,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,s){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,s){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(a,o){if(a>o){var c=o;o=a,a=c}return this.data[a+"-"+o]},r.prototype.set=function(a,o,c){if(a>o){var u=o;o=a,a=u}var h=a+"-"+o;this.get(a,o)||this.data.keys.push(h),this.data[h]=c},r.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var c=o.pop();delete a[c]}}},{}],53:[function(e,n,s){function r(){}n.exports=r,r.defaults=function(a,o){a=a||{};for(var c in o)c in a||(a[c]=o[c]);return a}},{}],54:[function(e,n,s){n.exports=o;var r=e("../math/Vec3"),a=e("./Pool");function o(){a.call(this),this.type=r}o.prototype=new a,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,s){n.exports=v;var r=e("../collision/AABB"),a=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),u=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function v(lt){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=lt,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(lt,ut,vt,_t,Zt,It){var wt;this.contactPointPool.length?(wt=this.contactPointPool.pop(),wt.bi=lt,wt.bj=ut):wt=new d(lt,ut),wt.enabled=lt.collisionResponse&&ut.collisionResponse&&vt.collisionResponse&&_t.collisionResponse;var Pt=this.currentContactMaterial;wt.restitution=Pt.restitution,wt.setSpookParams(Pt.contactEquationStiffness,Pt.contactEquationRelaxation,this.world.dt);var it=vt.material||lt.material,bt=_t.material||ut.material;return it&&bt&&it.restitution>=0&&bt.restitution>=0&&(wt.restitution=it.restitution*bt.restitution),wt.si=Zt||vt,wt.sj=It||_t,wt},v.prototype.createFrictionEquationsFromContact=function(lt,ut){var vt=lt.bi,_t=lt.bj,Zt=lt.si,It=lt.sj,wt=this.world,Pt=this.currentContactMaterial,it=Pt.friction,bt=Zt.material||vt.material,Dt=It.material||_t.material;if(bt&&Dt&&bt.friction>=0&&Dt.friction>=0&&(it=bt.friction*Dt.friction),it>0){var zt=it*wt.gravity.length(),w=vt.invMass+_t.invMass;w>0&&(w=1/w);var z=this.frictionEquationPool,Y=z.length?z.pop():new f(vt,_t,zt*w),G=z.length?z.pop():new f(vt,_t,zt*w);return Y.bi=G.bi=vt,Y.bj=G.bj=_t,Y.minForce=G.minForce=-zt*w,Y.maxForce=G.maxForce=zt*w,Y.ri.copy(lt.ri),Y.rj.copy(lt.rj),G.ri.copy(lt.ri),G.rj.copy(lt.rj),lt.ni.tangents(Y.t,G.t),Y.setSpookParams(Pt.frictionEquationStiffness,Pt.frictionEquationRelaxation,wt.dt),G.setSpookParams(Pt.frictionEquationStiffness,Pt.frictionEquationRelaxation,wt.dt),Y.enabled=G.enabled=lt.enabled,ut.push(Y,G),!0}return!1};var g=new c,m=new c,p=new c;v.prototype.createFrictionFromAverage=function(lt){var ut=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ut,this.frictionResult)||lt===1)){var vt=this.frictionResult[this.frictionResult.length-2],_t=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var Zt=ut.bi;ut.bj;for(var It=0;It!==lt;It++)ut=this.result[this.result.length-1-It],ut.bodyA!==Zt?(g.vadd(ut.ni,g),m.vadd(ut.ri,m),p.vadd(ut.rj,p)):(g.vsub(ut.ni,g),m.vadd(ut.rj,m),p.vadd(ut.ri,p));var wt=1/lt;m.scale(wt,vt.ri),p.scale(wt,vt.rj),_t.ri.copy(vt.ri),_t.rj.copy(vt.rj),g.normalize(),g.tangents(vt.t,_t.t)}};var x=new c,y=new c,_=new h,S=new h;v.prototype.getContacts=function(lt,ut,vt,_t,Zt,It,wt){this.contactPointPool=Zt,this.frictionEquationPool=wt,this.result=_t,this.frictionResult=It;for(var Pt=_,it=S,bt=x,Dt=y,zt=0,w=lt.length;zt!==w;zt++){var z=lt[zt],Y=ut[zt],G=null;z.material&&Y.material&&(G=vt.getContactMaterial(z.material,Y.material)||null);for(var Q=0;Q<z.shapes.length;Q++){z.quaternion.mult(z.shapeOrientations[Q],Pt),z.quaternion.vmult(z.shapeOffsets[Q],bt),bt.vadd(z.position,bt);for(var et=z.shapes[Q],Mt=0;Mt<Y.shapes.length;Mt++){Y.quaternion.mult(Y.shapeOrientations[Mt],it),Y.quaternion.vmult(Y.shapeOffsets[Mt],Dt),Dt.vadd(Y.position,Dt);var Rt=Y.shapes[Mt];if(!(bt.distanceTo(Dt)>et.boundingSphereRadius+Rt.boundingSphereRadius)){var Ht=null;et.material&&Rt.material&&(Ht=vt.getContactMaterial(et.material,Rt.material)||null),this.currentContactMaterial=Ht||G||vt.defaultContactMaterial;var Nt=this[et.type|Rt.type];Nt&&(et.type<Rt.type?Nt.call(this,et,Rt,bt,Dt,Pt,it,z,Y,et,Rt):Nt.call(this,Rt,et,Dt,bt,it,Pt,Y,z,et,Rt))}}}}},v.prototype[a.types.BOX|a.types.BOX]=v.prototype.boxBox=function(lt,ut,vt,_t,Zt,It,wt,Pt){lt.convexPolyhedronRepresentation.material=lt.material,ut.convexPolyhedronRepresentation.material=ut.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,ut.convexPolyhedronRepresentation.collisionResponse=ut.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,ut.convexPolyhedronRepresentation,vt,_t,Zt,It,wt,Pt,lt,ut)},v.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(lt,ut,vt,_t,Zt,It,wt,Pt){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,ut,vt,_t,Zt,It,wt,Pt,lt,ut)},v.prototype[a.types.BOX|a.types.PARTICLE]=v.prototype.boxParticle=function(lt,ut,vt,_t,Zt,It,wt,Pt){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexParticle(lt.convexPolyhedronRepresentation,ut,vt,_t,Zt,It,wt,Pt,lt,ut)},v.prototype[a.types.SPHERE]=v.prototype.sphereSphere=function(lt,ut,vt,_t,Zt,It,wt,Pt){var it=this.createContactEquation(wt,Pt,lt,ut);_t.vsub(vt,it.ni),it.ni.normalize(),it.ri.copy(it.ni),it.rj.copy(it.ni),it.ri.mult(lt.radius,it.ri),it.rj.mult(-ut.radius,it.rj),it.ri.vadd(vt,it.ri),it.ri.vsub(wt.position,it.ri),it.rj.vadd(_t,it.rj),it.rj.vsub(Pt.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)};var b=new c,C=new c,D=new c;v.prototype[a.types.PLANE|a.types.TRIMESH]=v.prototype.planeTrimesh=function(lt,ut,vt,_t,Zt,It,wt,Pt){var it=new c,bt=b;bt.set(0,0,1),Zt.vmult(bt,bt);for(var Dt=0;Dt<ut.vertices.length/3;Dt++){ut.getVertex(Dt,it);var zt=new c;zt.copy(it),u.pointToWorldFrame(_t,It,zt,it);var w=C;it.vsub(vt,w);var z=bt.dot(w);if(z<=0){var Y=this.createContactEquation(wt,Pt,lt,ut);Y.ni.copy(bt);var G=D;bt.scale(w.dot(bt),G),it.vsub(G,G),Y.ri.copy(G),Y.ri.vsub(wt.position,Y.ri),Y.rj.copy(it),Y.rj.vsub(Pt.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}}};var M=new c,E=new c;new c;var I=new c,V=new c,U=new c,H=new c,W=new c,nt=new c,O=new c,N=new c,K=new c,k=new c,A=new c,B=new r,F=[];v.prototype[a.types.SPHERE|a.types.TRIMESH]=v.prototype.sphereTrimesh=function(lt,ut,vt,_t,Zt,It,wt,Pt){var it=U,bt=H,Dt=W,zt=nt,w=O,z=N,Y=B,G=V,Q=E,et=F;u.pointToLocalFrame(_t,It,vt,w);var Mt=lt.radius;Y.lowerBound.set(w.x-Mt,w.y-Mt,w.z-Mt),Y.upperBound.set(w.x+Mt,w.y+Mt,w.z+Mt),ut.getTrianglesInAABB(Y,et);for(var Rt=I,Ht=lt.radius*lt.radius,Nt=0;Nt<et.length;Nt++)for(var Lt=0;Lt<3;Lt++)if(ut.getVertex(ut.indices[et[Nt]*3+Lt],Rt),Rt.vsub(w,Q),Q.norm2()<=Ht){G.copy(Rt),u.pointToWorldFrame(_t,It,G,Rt),Rt.vsub(vt,Q);var St=this.createContactEquation(wt,Pt,lt,ut);St.ni.copy(Q),St.ni.normalize(),St.ri.copy(St.ni),St.ri.scale(lt.radius,St.ri),St.ri.vadd(vt,St.ri),St.ri.vsub(wt.position,St.ri),St.rj.copy(Rt),St.rj.vsub(Pt.position,St.rj),this.result.push(St),this.createFrictionEquationsFromContact(St,this.frictionResult)}for(var Nt=0;Nt<et.length;Nt++)for(var Lt=0;Lt<3;Lt++){ut.getVertex(ut.indices[et[Nt]*3+Lt],it),ut.getVertex(ut.indices[et[Nt]*3+(Lt+1)%3],bt),bt.vsub(it,Dt),w.vsub(bt,z);var ae=z.dot(Dt);w.vsub(it,z);var le=z.dot(Dt);if(le>0&&ae<0){w.vsub(it,z),zt.copy(Dt),zt.normalize(),le=z.dot(zt),zt.scale(le,z),z.vadd(it,z);var pe=z.distanceTo(w);if(pe<lt.radius){var St=this.createContactEquation(wt,Pt,lt,ut);z.vsub(w,St.ni),St.ni.normalize(),St.ni.scale(lt.radius,St.ri),u.pointToWorldFrame(_t,It,z,z),z.vsub(Pt.position,St.rj),u.vectorToWorldFrame(It,St.ni,St.ni),u.vectorToWorldFrame(It,St.ri,St.ri),this.result.push(St),this.createFrictionEquationsFromContact(St,this.frictionResult)}}}for(var Ee=K,oe=k,Xt=A,Ge=M,Nt=0,Qt=et.length;Nt!==Qt;Nt++){ut.getTriangleVertices(et[Nt],Ee,oe,Xt),ut.getNormal(et[Nt],Ge),w.vsub(Ee,z);var pe=z.dot(Ge);if(Ge.scale(pe,z),w.vsub(z,z),pe=z.distanceTo(w),o.pointInTriangle(z,Ee,oe,Xt)&&pe<lt.radius){var St=this.createContactEquation(wt,Pt,lt,ut);z.vsub(w,St.ni),St.ni.normalize(),St.ni.scale(lt.radius,St.ri),u.pointToWorldFrame(_t,It,z,z),z.vsub(Pt.position,St.rj),u.vectorToWorldFrame(It,St.ni,St.ni),u.vectorToWorldFrame(It,St.ri,St.ri),this.result.push(St),this.createFrictionEquationsFromContact(St,this.frictionResult)}}et.length=0};var P=new c,R=new c;v.prototype[a.types.SPHERE|a.types.PLANE]=v.prototype.spherePlane=function(lt,ut,vt,_t,Zt,It,wt,Pt){var it=this.createContactEquation(wt,Pt,lt,ut);if(it.ni.set(0,0,1),It.vmult(it.ni,it.ni),it.ni.negate(it.ni),it.ni.normalize(),it.ni.mult(lt.radius,it.ri),vt.vsub(_t,P),it.ni.mult(it.ni.dot(P),R),P.vsub(R,it.rj),-P.dot(it.ni)<=lt.radius){var bt=it.ri,Dt=it.rj;bt.vadd(vt,bt),bt.vsub(wt.position,bt),Dt.vadd(_t,Dt),Dt.vsub(Pt.position,Dt),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}};var j=new c,st=new c,tt=new c;function Z(lt,ut,vt){for(var _t=null,Zt=lt.length,It=0;It!==Zt;It++){var wt=lt[It],Pt=j;lt[(It+1)%Zt].vsub(wt,Pt);var it=st;Pt.cross(ut,it);var bt=tt;vt.vsub(wt,bt);var Dt=it.dot(bt);if(_t===null||Dt>0&&_t===!0||Dt<=0&&_t===!1){_t===null&&(_t=Dt>0);continue}else return!1}return!0}var dt=new c,ht=new c,X=new c,Tt=new c,pt=[new c,new c,new c,new c,new c,new c],rt=new c,ct=new c,Yt=new c,At=new c;v.prototype[a.types.SPHERE|a.types.BOX]=v.prototype.sphereBox=function(lt,ut,vt,_t,Zt,It,wt,Pt){var it=this.v3pool,bt=pt;vt.vsub(_t,dt),ut.getSideNormals(bt,It);for(var Dt=lt.radius,zt=!1,w=ct,z=Yt,Y=At,G=null,Q=0,et=0,Mt=0,Rt=null,Ht=0,Nt=bt.length;Ht!==Nt&&zt===!1;Ht++){var Lt=ht;Lt.copy(bt[Ht]);var St=Lt.norm();Lt.normalize();var ae=dt.dot(Lt);if(ae<St+Dt&&ae>0){var le=X,pe=Tt;le.copy(bt[(Ht+1)%3]),pe.copy(bt[(Ht+2)%3]);var Ee=le.norm(),oe=pe.norm();le.normalize(),pe.normalize();var Xt=dt.dot(le),Ge=dt.dot(pe);if(Xt<Ee&&Xt>-Ee&&Ge<oe&&Ge>-oe){var xe=Math.abs(ae-St-Dt);(Rt===null||xe<Rt)&&(Rt=xe,et=Xt,Mt=Ge,G=St,w.copy(Lt),z.copy(le),Y.copy(pe),Q++)}}}if(Q){zt=!0;var Kt=this.createContactEquation(wt,Pt,lt,ut);w.mult(-Dt,Kt.ri),Kt.ni.copy(w),Kt.ni.negate(Kt.ni),w.mult(G,w),z.mult(et,z),w.vadd(z,w),Y.mult(Mt,Y),w.vadd(Y,Kt.rj),Kt.ri.vadd(vt,Kt.ri),Kt.ri.vsub(wt.position,Kt.ri),Kt.rj.vadd(_t,Kt.rj),Kt.rj.vsub(Pt.position,Kt.rj),this.result.push(Kt),this.createFrictionEquationsFromContact(Kt,this.frictionResult)}for(var Qt=it.get(),Ce=rt,Pe=0;Pe!==2&&!zt;Pe++)for(var _e=0;_e!==2&&!zt;_e++)for(var ye=0;ye!==2&&!zt;ye++)if(Qt.set(0,0,0),Pe?Qt.vadd(bt[0],Qt):Qt.vsub(bt[0],Qt),_e?Qt.vadd(bt[1],Qt):Qt.vsub(bt[1],Qt),ye?Qt.vadd(bt[2],Qt):Qt.vsub(bt[2],Qt),_t.vadd(Qt,Ce),Ce.vsub(vt,Ce),Ce.norm2()<Dt*Dt){zt=!0;var Kt=this.createContactEquation(wt,Pt,lt,ut);Kt.ri.copy(Ce),Kt.ri.normalize(),Kt.ni.copy(Kt.ri),Kt.ri.mult(Dt,Kt.ri),Kt.rj.copy(Qt),Kt.ri.vadd(vt,Kt.ri),Kt.ri.vsub(wt.position,Kt.ri),Kt.rj.vadd(_t,Kt.rj),Kt.rj.vsub(Pt.position,Kt.rj),this.result.push(Kt),this.createFrictionEquationsFromContact(Kt,this.frictionResult)}it.release(Qt),Qt=null;for(var de=it.get(),Le=it.get(),Kt=it.get(),me=it.get(),xe=it.get(),mn=bt.length,Pe=0;Pe!==mn&&!zt;Pe++)for(var _e=0;_e!==mn&&!zt;_e++)if(Pe%3!==_e%3){bt[_e].cross(bt[Pe],de),de.normalize(),bt[Pe].vadd(bt[_e],Le),Kt.copy(vt),Kt.vsub(Le,Kt),Kt.vsub(_t,Kt);var on=Kt.dot(de);de.mult(on,me);for(var ye=0;ye===Pe%3||ye===_e%3;)ye++;xe.copy(vt),xe.vsub(me,xe),xe.vsub(Le,xe),xe.vsub(_t,xe);var ul=Math.abs(on),dl=xe.norm();if(ul<bt[ye].norm()&&dl<Dt){zt=!0;var ge=this.createContactEquation(wt,Pt,lt,ut);Le.vadd(me,ge.rj),ge.rj.copy(ge.rj),xe.negate(ge.ni),ge.ni.normalize(),ge.ri.copy(ge.rj),ge.ri.vadd(_t,ge.ri),ge.ri.vsub(vt,ge.ri),ge.ri.normalize(),ge.ri.mult(Dt,ge.ri),ge.ri.vadd(vt,ge.ri),ge.ri.vsub(wt.position,ge.ri),ge.rj.vadd(_t,ge.rj),ge.rj.vsub(Pt.position,ge.rj),this.result.push(ge),this.createFrictionEquationsFromContact(ge,this.frictionResult)}}it.release(de,Le,Kt,me,xe)};var Gt=new c,yt=new c,jt=new c,Jt=new c,L=new c,T=new c,J=new c,mt=new c,ft=new c,gt=new c;v.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(lt,ut,vt,_t,Zt,It,wt,Pt){var it=this.v3pool;vt.vsub(_t,Gt);for(var bt=ut.faceNormals,Dt=ut.faces,zt=ut.vertices,w=lt.radius,z=0;z!==zt.length;z++){var Y=zt[z],G=L;It.vmult(Y,G),_t.vadd(G,G);var Q=Jt;if(G.vsub(vt,Q),Q.norm2()<w*w){Mt=!0;var et=this.createContactEquation(wt,Pt,lt,ut);et.ri.copy(Q),et.ri.normalize(),et.ni.copy(et.ri),et.ri.mult(w,et.ri),G.vsub(_t,et.rj),et.ri.vadd(vt,et.ri),et.ri.vsub(wt.position,et.ri),et.rj.vadd(_t,et.rj),et.rj.vsub(Pt.position,et.rj),this.result.push(et),this.createFrictionEquationsFromContact(et,this.frictionResult);return}}for(var Mt=!1,z=0,Rt=Dt.length;z!==Rt&&Mt===!1;z++){var Ht=bt[z],Nt=Dt[z],Lt=T;It.vmult(Ht,Lt);var St=J;It.vmult(zt[Nt[0]],St),St.vadd(_t,St);var ae=mt;Lt.mult(-w,ae),vt.vadd(ae,ae);var le=ft;ae.vsub(St,le);var pe=le.dot(Lt),Ee=gt;if(vt.vsub(St,Ee),pe<0&&Ee.dot(Lt)>0){for(var oe=[],Xt=0,Ge=Nt.length;Xt!==Ge;Xt++){var Qt=it.get();It.vmult(zt[Nt[Xt]],Qt),_t.vadd(Qt,Qt),oe.push(Qt)}if(Z(oe,Lt,vt)){Mt=!0;var et=this.createContactEquation(wt,Pt,lt,ut);Lt.mult(-w,et.ri),Lt.negate(et.ni);var Ce=it.get();Lt.mult(-pe,Ce);var Pe=it.get();Lt.mult(-w,Pe),vt.vsub(_t,et.rj),et.rj.vadd(Pe,et.rj),et.rj.vadd(Ce,et.rj),et.rj.vadd(_t,et.rj),et.rj.vsub(Pt.position,et.rj),et.ri.vadd(vt,et.ri),et.ri.vsub(wt.position,et.ri),it.release(Ce),it.release(Pe),this.result.push(et),this.createFrictionEquationsFromContact(et,this.frictionResult);for(var Xt=0,_e=oe.length;Xt!==_e;Xt++)it.release(oe[Xt]);return}else for(var Xt=0;Xt!==Nt.length;Xt++){var ye=it.get(),de=it.get();It.vmult(zt[Nt[(Xt+1)%Nt.length]],ye),It.vmult(zt[Nt[(Xt+2)%Nt.length]],de),_t.vadd(ye,ye),_t.vadd(de,de);var Le=yt;de.vsub(ye,Le);var Kt=jt;Le.unit(Kt);var me=it.get(),xe=it.get();vt.vsub(ye,xe);var mn=xe.dot(Kt);Kt.mult(mn,me),me.vadd(ye,me);var on=it.get();if(me.vsub(vt,on),mn>0&&mn*mn<Le.norm2()&&on.norm2()<w*w){var et=this.createContactEquation(wt,Pt,lt,ut);me.vsub(_t,et.rj),me.vsub(vt,et.ni),et.ni.normalize(),et.ni.mult(w,et.ri),et.rj.vadd(_t,et.rj),et.rj.vsub(Pt.position,et.rj),et.ri.vadd(vt,et.ri),et.ri.vsub(wt.position,et.ri),this.result.push(et),this.createFrictionEquationsFromContact(et,this.frictionResult);for(var Xt=0,_e=oe.length;Xt!==_e;Xt++)it.release(oe[Xt]);it.release(ye),it.release(de),it.release(me),it.release(on),it.release(xe);return}it.release(ye),it.release(de),it.release(me),it.release(on),it.release(xe)}for(var Xt=0,_e=oe.length;Xt!==_e;Xt++)it.release(oe[Xt])}}},new c,new c,v.prototype[a.types.PLANE|a.types.BOX]=v.prototype.planeBox=function(lt,ut,vt,_t,Zt,It,wt,Pt){ut.convexPolyhedronRepresentation.material=ut.material,ut.convexPolyhedronRepresentation.collisionResponse=ut.collisionResponse,this.planeConvex(lt,ut.convexPolyhedronRepresentation,vt,_t,Zt,It,wt,Pt)};var Bt=new c,Et=new c,ot=new c,qt=new c;v.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(lt,ut,vt,_t,Zt,It,wt,Pt){var it=Bt,bt=Et;bt.set(0,0,1),Zt.vmult(bt,bt);for(var Dt=0,zt=ot,w=0;w!==ut.vertices.length;w++){it.copy(ut.vertices[w]),It.vmult(it,it),_t.vadd(it,it),it.vsub(vt,zt);var z=bt.dot(zt);if(z<=0){var Y=this.createContactEquation(wt,Pt,lt,ut),G=qt;bt.mult(bt.dot(zt),G),it.vsub(G,G),G.vsub(vt,Y.ri),Y.ni.copy(bt),it.vsub(_t,Y.rj),Y.ri.vadd(vt,Y.ri),Y.ri.vsub(wt.position,Y.ri),Y.rj.vadd(_t,Y.rj),Y.rj.vsub(Pt.position,Y.rj),this.result.push(Y),Dt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(Y,this.frictionResult)}}this.enableFrictionReduction&&Dt&&this.createFrictionFromAverage(Dt)};var Wt=new c,kt=new c;v.prototype[a.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(lt,ut,vt,_t,Zt,It,wt,Pt,it,bt,Dt,zt){var w=Wt;if(!(vt.distanceTo(_t)>lt.boundingSphereRadius+ut.boundingSphereRadius)&&lt.findSeparatingAxis(ut,vt,Zt,_t,It,w,Dt,zt)){var z=[],Y=kt;lt.clipAgainstHull(vt,Zt,ut,_t,It,w,-100,100,z);for(var G=0,Q=0;Q!==z.length;Q++){var et=this.createContactEquation(wt,Pt,lt,ut,it,bt),Mt=et.ri,Rt=et.rj;w.negate(et.ni),z[Q].normal.negate(Y),Y.mult(z[Q].depth,Y),z[Q].point.vadd(Y,Mt),Rt.copy(z[Q].point),Mt.vsub(vt,Mt),Rt.vsub(_t,Rt),Mt.vadd(vt,Mt),Mt.vsub(wt.position,Mt),Rt.vadd(_t,Rt),Rt.vsub(Pt.position,Rt),this.result.push(et),G++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(et,this.frictionResult)}this.enableFrictionReduction&&G&&this.createFrictionFromAverage(G)}};var Vt=new c,Ot=new c,$t=new c;v.prototype[a.types.PLANE|a.types.PARTICLE]=v.prototype.planeParticle=function(lt,ut,vt,_t,Zt,It,wt,Pt){var it=Vt;it.set(0,0,1),wt.quaternion.vmult(it,it);var bt=Ot;_t.vsub(wt.position,bt);var Dt=it.dot(bt);if(Dt<=0){var zt=this.createContactEquation(Pt,wt,ut,lt);zt.ni.copy(it),zt.ni.negate(zt.ni),zt.ri.set(0,0,0);var w=$t;it.mult(it.dot(_t),w),_t.vsub(w,w),zt.rj.copy(w),this.result.push(zt),this.createFrictionEquationsFromContact(zt,this.frictionResult)}};var re=new c;v.prototype[a.types.PARTICLE|a.types.SPHERE]=v.prototype.sphereParticle=function(lt,ut,vt,_t,Zt,It,wt,Pt){var it=re;it.set(0,0,1),_t.vsub(vt,it);var bt=it.norm2();if(bt<=lt.radius*lt.radius){var Dt=this.createContactEquation(Pt,wt,ut,lt);it.normalize(),Dt.rj.copy(it),Dt.rj.mult(lt.radius,Dt.rj),Dt.ni.copy(it),Dt.ni.negate(Dt.ni),Dt.ri.set(0,0,0),this.result.push(Dt),this.createFrictionEquationsFromContact(Dt,this.frictionResult)}};var q=new h,Ct=new c;new c;var at=new c,xt=new c,Ut=new c;v.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(lt,ut,vt,_t,Zt,It,wt,Pt){var it=-1,bt=at,Dt=Ut,zt=null,w=Ct;if(w.copy(_t),w.vsub(vt,w),Zt.conjugate(q),q.vmult(w,w),lt.pointIsInside(w)){lt.worldVerticesNeedsUpdate&&lt.computeWorldVertices(vt,Zt),lt.worldFaceNormalsNeedsUpdate&&lt.computeWorldFaceNormals(Zt);for(var z=0,Y=lt.faces.length;z!==Y;z++){var G=[lt.worldVertices[lt.faces[z][0]]],Q=lt.worldFaceNormals[z];_t.vsub(G[0],xt);var et=-Q.dot(xt);(zt===null||Math.abs(et)<Math.abs(zt))&&(zt=et,it=z,bt.copy(Q))}if(it!==-1){var Mt=this.createContactEquation(Pt,wt,ut,lt);bt.mult(zt,Dt),Dt.vadd(_t,Dt),Dt.vsub(vt,Dt),Mt.rj.copy(Dt),bt.negate(Mt.ni),Mt.ri.set(0,0,0);var Rt=Mt.ri,Ht=Mt.rj;Rt.vadd(_t,Rt),Rt.vsub(Pt.position,Rt),Ht.vadd(vt,Ht),Ht.vsub(wt.position,Ht),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[a.types.BOX|a.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(lt,ut,vt,_t,Zt,It,wt,Pt){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexHeightfield(lt.convexPolyhedronRepresentation,ut,vt,_t,Zt,It,wt,Pt)};var ee=new c,ue=new c,fe=[0];v.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(lt,ut,vt,_t,Zt,It,wt,Pt){var it=ut.data,bt=ut.elementSize,Dt=lt.boundingSphereRadius,zt=ue,w=fe,z=ee;u.pointToLocalFrame(_t,It,vt,z);var Y=Math.floor((z.x-Dt)/bt)-1,G=Math.ceil((z.x+Dt)/bt)+1,Q=Math.floor((z.y-Dt)/bt)-1,et=Math.ceil((z.y+Dt)/bt)+1;if(!(G<0||et<0||Y>it.length||Q>it[0].length)){Y<0&&(Y=0),G<0&&(G=0),Q<0&&(Q=0),et<0&&(et=0),Y>=it.length&&(Y=it.length-1),G>=it.length&&(G=it.length-1),et>=it[0].length&&(et=it[0].length-1),Q>=it[0].length&&(Q=it[0].length-1);var Mt=[];ut.getRectMinMax(Y,Q,G,et,Mt);var Rt=Mt[0],Ht=Mt[1];if(!(z.z-Dt>Ht||z.z+Dt<Rt))for(var Nt=Y;Nt<G;Nt++)for(var Lt=Q;Lt<et;Lt++)ut.getConvexTrianglePillar(Nt,Lt,!1),u.pointToWorldFrame(_t,It,ut.pillarOffset,zt),vt.distanceTo(zt)<ut.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,ut.pillarConvex,vt,zt,Zt,It,wt,Pt,null,null,w,null),ut.getConvexTrianglePillar(Nt,Lt,!0),u.pointToWorldFrame(_t,It,ut.pillarOffset,zt),vt.distanceTo(zt)<ut.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,ut.pillarConvex,vt,zt,Zt,It,wt,Pt,null,null,w,null)}};var Ne=new c,te=new c;v.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(lt,ut,vt,_t,Zt,It,wt,Pt){var it=ut.data,bt=lt.radius,Dt=ut.elementSize,zt=te,w=Ne;u.pointToLocalFrame(_t,It,vt,w);var z=Math.floor((w.x-bt)/Dt)-1,Y=Math.ceil((w.x+bt)/Dt)+1,G=Math.floor((w.y-bt)/Dt)-1,Q=Math.ceil((w.y+bt)/Dt)+1;if(!(Y<0||Q<0||z>it.length||Q>it[0].length)){z<0&&(z=0),Y<0&&(Y=0),G<0&&(G=0),Q<0&&(Q=0),z>=it.length&&(z=it.length-1),Y>=it.length&&(Y=it.length-1),Q>=it[0].length&&(Q=it[0].length-1),G>=it[0].length&&(G=it[0].length-1);var et=[];ut.getRectMinMax(z,G,Y,Q,et);var Mt=et[0],Rt=et[1];if(!(w.z-bt>Rt||w.z+bt<Mt))for(var Ht=this.result,Nt=z;Nt<Y;Nt++)for(var Lt=G;Lt<Q;Lt++){var St=Ht.length;ut.getConvexTrianglePillar(Nt,Lt,!1),u.pointToWorldFrame(_t,It,ut.pillarOffset,zt),vt.distanceTo(zt)<ut.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,ut.pillarConvex,vt,zt,Zt,It,wt,Pt),ut.getConvexTrianglePillar(Nt,Lt,!0),u.pointToWorldFrame(_t,It,ut.pillarOffset,zt),vt.distanceTo(zt)<ut.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,ut.pillarConvex,vt,zt,Zt,It,wt,Pt);var ae=Ht.length-St;if(ae>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,s){n.exports=_;var r=e("../shapes/Shape"),a=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var u=e("./Narrowphase"),h=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),f=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),p=e("../collision/AABB"),x=e("../collision/Ray"),y=e("../collision/NaiveBroadphase");function _(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new y,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new u(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new h,new p;var S=new x;if(_.prototype.getContactMaterial=function(N,K){return this.contactMaterialTable.get(N.id,K.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var N=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=N,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(N){this.bodies.indexOf(N)===-1&&(N.index=this.bodies.length,this.bodies.push(N),N.world=this,N.initPosition.copy(N.position),N.initVelocity.copy(N.velocity),N.timeLastSleepy=this.time,N instanceof v&&(N.initAngularVelocity.copy(N.angularVelocity),N.initQuaternion.copy(N.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=N,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(N){this.constraints.push(N)},_.prototype.removeConstraint=function(N){var K=this.constraints.indexOf(N);K!==-1&&this.constraints.splice(K,1)},_.prototype.rayTest=function(N,K,k){k instanceof m?this.raycastClosest(N,K,{skipBackfaces:!0},k):this.raycastAll(N,K,{skipBackfaces:!0},k)},_.prototype.raycastAll=function(N,K,k,A){return k.mode=x.ALL,k.from=N,k.to=K,k.callback=A,S.intersectWorld(this,k)},_.prototype.raycastAny=function(N,K,k,A){return k.mode=x.ANY,k.from=N,k.to=K,k.result=A,S.intersectWorld(this,k)},_.prototype.raycastClosest=function(N,K,k,A){return k.mode=x.CLOSEST,k.from=N,k.to=K,k.result=A,S.intersectWorld(this,k)},_.prototype.remove=function(N){N.world=null;var K=this.bodies.length-1,k=this.bodies,A=k.indexOf(N);if(A!==-1){k.splice(A,1);for(var B=0;B!==k.length;B++)k[B].index=B;this.collisionMatrix.setNumObjects(K),this.removeBodyEvent.body=N,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(N){this.materials.push(N)},_.prototype.addContactMaterial=function(N){this.contactmaterials.push(N),this.contactMaterialTable.set(N.materials[0].id,N.materials[1].id,N)},typeof performance>"u"&&(performance={}),!performance.now){var b=Date.now();performance.timing&&performance.timing.navigationStart&&(b=performance.timing.navigationStart),performance.now=function(){return Date.now()-b}}var C=new a;_.prototype.step=function(N,K,k){if(k=k||10,K=K||0,K===0)this.internalStep(N),this.time+=N;else{var A=Math.floor((this.time+K)/N)-Math.floor(this.time/N);A=Math.min(A,k);for(var B=performance.now(),F=0;F!==A&&(this.internalStep(N),!(performance.now()-B>N*1e3));F++);this.time+=K;for(var P=this.time%N,R=P/N,j=C,st=this.bodies,tt=0;tt!==st.length;tt++){var Z=st[tt];Z.type!==v.STATIC&&Z.sleepState!==v.SLEEPING?(Z.position.vsub(Z.previousPosition,j),j.scale(R,j),Z.position.vadd(j,Z.interpolatedPosition)):(Z.interpolatedPosition.copy(Z.position),Z.interpolatedQuaternion.copy(Z.quaternion))}}};var D={type:"postStep"},M={type:"preStep"},E={type:"collide",body:null,contact:null},I=[],V=[],U=[],H=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var W=new o,nt=new o,O=new a;_.prototype.internalStep=function(N){this.dt=N;var K=this.contacts,k=U,A=H,B=this.numObjects(),F=this.bodies,P=this.solver,R=this.gravity,j=this.doProfiling,st=this.profile,tt=v.DYNAMIC,Z,dt=this.constraints,ht=V;R.norm();var X=R.x,Tt=R.y,pt=R.z,rt=0;for(j&&(Z=performance.now()),rt=0;rt!==B;rt++){var ct=F[rt];if(ct.type&tt){var Yt=ct.force,At=ct.mass;Yt.x+=At*X,Yt.y+=At*Tt,Yt.z+=At*pt}}for(var rt=0,Gt=this.subsystems.length;rt!==Gt;rt++)this.subsystems[rt].update();j&&(Z=performance.now()),k.length=0,A.length=0,this.broadphase.collisionPairs(this,k,A),j&&(st.broadphase=performance.now()-Z);var Wt=dt.length;for(rt=0;rt!==Wt;rt++){var yt=dt[rt];if(!yt.collideConnected)for(var jt=k.length-1;jt>=0;jt-=1)(yt.bodyA===k[jt]&&yt.bodyB===A[jt]||yt.bodyB===k[jt]&&yt.bodyA===A[jt])&&(k.splice(jt,1),A.splice(jt,1))}this.collisionMatrixTick(),j&&(Z=performance.now());var Jt=I,L=K.length;for(rt=0;rt!==L;rt++)Jt.push(K[rt]);K.length=0;var T=this.frictionEquations.length;for(rt=0;rt!==T;rt++)ht.push(this.frictionEquations[rt]);this.frictionEquations.length=0,this.narrowphase.getContacts(k,A,this,K,Jt,this.frictionEquations,ht),j&&(st.narrowphase=performance.now()-Z),j&&(Z=performance.now());for(var rt=0;rt<this.frictionEquations.length;rt++)P.addEquation(this.frictionEquations[rt]);for(var J=K.length,mt=0;mt!==J;mt++){var yt=K[mt],ct=yt.bi,ft=yt.bj;yt.si,yt.sj;var gt;if(ct.material&&ft.material?gt=this.getContactMaterial(ct.material,ft.material)||this.defaultContactMaterial:gt=this.defaultContactMaterial,gt.friction,ct.material&&ft.material&&(ct.material.friction>=0&&ft.material.friction>=0&&ct.material.friction*ft.material.friction,ct.material.restitution>=0&&ft.material.restitution>=0&&(yt.restitution=ct.material.restitution*ft.material.restitution)),P.addEquation(yt),ct.allowSleep&&ct.type===v.DYNAMIC&&ct.sleepState===v.SLEEPING&&ft.sleepState===v.AWAKE&&ft.type!==v.STATIC){var Bt=ft.velocity.norm2()+ft.angularVelocity.norm2(),Et=Math.pow(ft.sleepSpeedLimit,2);Bt>=Et*2&&(ct._wakeUpAfterNarrowphase=!0)}if(ft.allowSleep&&ft.type===v.DYNAMIC&&ft.sleepState===v.SLEEPING&&ct.sleepState===v.AWAKE&&ct.type!==v.STATIC){var ot=ct.velocity.norm2()+ct.angularVelocity.norm2(),qt=Math.pow(ct.sleepSpeedLimit,2);ot>=qt*2&&(ft._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ct,ft,!0),this.collisionMatrixPrevious.get(ct,ft)||(E.body=ft,E.contact=yt,ct.dispatchEvent(E),E.body=ct,ft.dispatchEvent(E))}for(j&&(st.makeContactConstraints=performance.now()-Z,Z=performance.now()),rt=0;rt!==B;rt++){var ct=F[rt];ct._wakeUpAfterNarrowphase&&(ct.wakeUp(),ct._wakeUpAfterNarrowphase=!1)}var Wt=dt.length;for(rt=0;rt!==Wt;rt++){var yt=dt[rt];yt.update();for(var jt=0,kt=yt.equations.length;jt!==kt;jt++){var Vt=yt.equations[jt];P.addEquation(Vt)}}P.solve(N,this),j&&(st.solve=performance.now()-Z),P.removeAllEquations();var Ot=Math.pow;for(rt=0;rt!==B;rt++){var ct=F[rt];if(ct.type&tt){var $t=Ot(1-ct.linearDamping,N),re=ct.velocity;re.mult($t,re);var q=ct.angularVelocity;if(q){var Ct=Ot(1-ct.angularDamping,N);q.mult(Ct,q)}}}for(this.dispatchEvent(M),rt=0;rt!==B;rt++){var ct=F[rt];ct.preStep&&ct.preStep.call(ct)}j&&(Z=performance.now());var at=W,xt=nt,Ut=this.stepnumber,ee=v.DYNAMIC|v.KINEMATIC,ue=Ut%(this.quatNormalizeSkip+1)===0,fe=this.quatNormalizeFast,Ne=N*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,rt=0;rt!==B;rt++){var te=F[rt],lt=te.force,ut=te.torque;if(te.type&ee&&te.sleepState!==v.SLEEPING){var vt=te.velocity,_t=te.angularVelocity,Zt=te.position,It=te.quaternion,wt=te.invMass,Pt=te.invInertiaWorld;vt.x+=lt.x*wt*N,vt.y+=lt.y*wt*N,vt.z+=lt.z*wt*N,te.angularVelocity&&(Pt.vmult(ut,O),O.mult(N,O),O.vadd(_t,_t)),Zt.x+=vt.x*N,Zt.y+=vt.y*N,Zt.z+=vt.z*N,te.angularVelocity&&(at.set(_t.x,_t.y,_t.z,0),at.mult(It,xt),It.x+=Ne*xt.x,It.y+=Ne*xt.y,It.z+=Ne*xt.z,It.w+=Ne*xt.w,ue&&(fe?It.normalizeFast():It.normalize())),te.aabb&&(te.aabbNeedsUpdate=!0),te.updateInertiaWorld&&te.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,j&&(st.integrate=performance.now()-Z),this.time+=N,this.stepnumber+=1,this.dispatchEvent(D),rt=0;rt!==B;rt++){var ct=F[rt],it=ct.postStep;it&&it.call(ct)}if(this.allowSleep)for(rt=0;rt!==B;rt++)F[rt].sleepTick(this.time)},_.prototype.clearForces=function(){for(var N=this.bodies,K=N.length,k=0;k!==K;k++){var A=N[k];A.force,A.torque,A.force.set(0,0,0),A.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(al);var Ri=al.exports;const Mr=0,Xp=1,qp=new $,Mo=new kp,fs=new Pn,So=new $,gr=new Je;class Yp{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Eo,this.unassigned=new Eo,this.vertices=[]}setFromPoints(t){if(t.length>=4){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.vertices.push(new jp(t[e]));this.compute()}return this}setFromObject(t){const e=[];return t.updateMatrixWorld(!0),t.traverse(function(n){const s=n.geometry;if(s!==void 0){const r=s.attributes.position;if(r!==void 0)for(let a=0,o=r.count;a<o;a++){const c=new $;c.fromBufferAttribute(r,a).applyMatrix4(n.matrixWorld),e.push(c)}}}),this.setFromPoints(e)}containsPoint(t){const e=this.faces;for(let n=0,s=e.length;n<s;n++)if(e[n].distanceToPoint(t)>this.tolerance)return!1;return!0}intersectRay(t,e){const n=this.faces;let s=-1/0,r=1/0;for(let a=0,o=n.length;a<o;a++){const c=n[a],u=c.distanceToPoint(t.origin),h=c.normal.dot(t.direction);if(u>0&&h>=0)return null;const l=h!==0?-u/h:0;if(!(l<=0)&&(h>0?r=Math.min(l,r):s=Math.max(l,s),s>r))return null}return s!==-1/0?t.at(s,e):t.at(r,e),e}intersectsRay(t){return this.intersectRay(t,qp)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(t,e){return t.face=e,e.outside===null?this.assigned.append(t):this.assigned.insertBefore(e.outside,t),e.outside=t,this}removeVertexFromFace(t,e){return t===e.outside&&(t.next!==null&&t.next.face===e?e.outside=t.next:e.outside=null),this.assigned.remove(t),this}removeAllVerticesFromFace(t){if(t.outside!==null){const e=t.outside;let n=t.outside;for(;n.next!==null&&n.next.face===t;)n=n.next;return this.assigned.removeSubList(e,n),e.prev=n.next=null,t.outside=null,e}}deleteFaceVertices(t,e){const n=this.removeAllVerticesFromFace(t);if(n!==void 0)if(e===void 0)this.unassigned.appendChain(n);else{let s=n;do{const r=s.next;e.distanceToPoint(s.point)>this.tolerance?this.addVertexToFace(s,e):this.unassigned.append(s),s=r}while(s!==null)}return this}resolveUnassignedPoints(t){if(this.unassigned.isEmpty()===!1){let e=this.unassigned.first();do{const n=e.next;let s=this.tolerance,r=null;for(let a=0;a<t.length;a++){const o=t[a];if(o.mark===Mr){const c=o.distanceToPoint(e.point);if(c>s&&(s=c,r=o),s>1e3*this.tolerance)break}}r!==null&&this.addVertexToFace(e,r),e=n}while(e!==null)}return this}computeExtremes(){const t=new $,e=new $,n=[],s=[];for(let r=0;r<3;r++)n[r]=s[r]=this.vertices[0];t.copy(this.vertices[0].point),e.copy(this.vertices[0].point);for(let r=0,a=this.vertices.length;r<a;r++){const o=this.vertices[r],c=o.point;for(let u=0;u<3;u++)c.getComponent(u)<t.getComponent(u)&&(t.setComponent(u,c.getComponent(u)),n[u]=o);for(let u=0;u<3;u++)c.getComponent(u)>e.getComponent(u)&&(e.setComponent(u,c.getComponent(u)),s[u]=o)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(t.x),Math.abs(e.x))+Math.max(Math.abs(t.y),Math.abs(e.y))+Math.max(Math.abs(t.z),Math.abs(e.z))),{min:n,max:s}}computeInitialHull(){const t=this.vertices,e=this.computeExtremes(),n=e.min,s=e.max;let r=0,a=0;for(let d=0;d<3;d++){const f=s[d].point.getComponent(d)-n[d].point.getComponent(d);f>r&&(r=f,a=d)}const o=n[a],c=s[a];let u,h;r=0,Mo.set(o.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){const v=t[d];if(v!==o&&v!==c){Mo.closestPointToPoint(v.point,!0,So);const g=So.distanceToSquared(v.point);g>r&&(r=g,u=v)}}r=-1,fs.setFromCoplanarPoints(o.point,c.point,u.point);for(let d=0,f=this.vertices.length;d<f;d++){const v=t[d];if(v!==o&&v!==c&&v!==u){const g=Math.abs(fs.distanceToPoint(v.point));g>r&&(r=g,h=v)}}const l=[];if(fs.distanceToPoint(h.point)<0){l.push(rn.create(o,c,u),rn.create(h,c,o),rn.create(h,u,c),rn.create(h,o,u));for(let d=0;d<3;d++){const f=(d+1)%3;l[d+1].getEdge(2).setTwin(l[0].getEdge(f)),l[d+1].getEdge(1).setTwin(l[f+1].getEdge(0))}}else{l.push(rn.create(o,u,c),rn.create(h,o,c),rn.create(h,c,u),rn.create(h,u,o));for(let d=0;d<3;d++){const f=(d+1)%3;l[d+1].getEdge(2).setTwin(l[0].getEdge((3-d)%3)),l[d+1].getEdge(0).setTwin(l[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(l[d]);for(let d=0,f=t.length;d<f;d++){const v=t[d];if(v!==o&&v!==c&&v!==u&&v!==h){r=this.tolerance;let g=null;for(let m=0;m<4;m++){const p=this.faces[m].distanceToPoint(v.point);p>r&&(r=p,g=this.faces[m])}g!==null&&this.addVertexToFace(v,g)}}return this}reindexFaces(){const t=[];for(let e=0;e<this.faces.length;e++){const n=this.faces[e];n.mark===Mr&&t.push(n)}return this.faces=t,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let t,e=0;const n=this.assigned.first().face;let s=n.outside;do{const r=n.distanceToPoint(s.point);r>e&&(e=r,t=s),s=s.next}while(s!==null&&s.face===n);return t}}computeHorizon(t,e,n,s){this.deleteFaceVertices(n),n.mark=Xp;let r;e===null?r=e=n.getEdge(0):r=e.next;do{const a=r.twin,o=a.face;o.mark===Mr&&(o.distanceToPoint(t)>this.tolerance?this.computeHorizon(t,a,o,s):s.push(r)),r=r.next}while(r!==e);return this}addAdjoiningFace(t,e){const n=rn.create(t,e.tail(),e.head());return this.faces.push(n),n.getEdge(-1).setTwin(e.twin),n.getEdge(0)}addNewFaces(t,e){this.newFaces=[];let n=null,s=null;for(let r=0;r<e.length;r++){const a=e[r],o=this.addAdjoiningFace(t,a);n===null?n=o:o.next.setTwin(s),this.newFaces.push(o.face),s=o}return n.next.setTwin(s),this}addVertexToHull(t){const e=[];return this.unassigned.clear(),this.removeVertexFromFace(t,t.face),this.computeHorizon(t.point,null,t.face,e),this.addNewFaces(t,e),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let t;for(this.computeInitialHull();(t=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(t);return this.reindexFaces(),this.cleanup(),this}}class rn{constructor(){this.normal=new $,this.midpoint=new $,this.area=0,this.constant=0,this.outside=null,this.mark=Mr,this.edge=null}static create(t,e,n){const s=new rn,r=new ps(t,s),a=new ps(e,s),o=new ps(n,s);return r.next=o.prev=a,a.next=r.prev=o,o.next=a.prev=r,s.edge=r,s.compute()}getEdge(t){let e=this.edge;for(;t>0;)e=e.next,t--;for(;t<0;)e=e.prev,t++;return e}compute(){const t=this.edge.tail(),e=this.edge.head(),n=this.edge.next.head();return gr.set(t.point,e.point,n.point),gr.getNormal(this.normal),gr.getMidpoint(this.midpoint),this.area=gr.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(t){return this.normal.dot(t)-this.constant}}class ps{constructor(t,e){this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=e}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const t=this.head(),e=this.tail();return e!==null?e.point.distanceTo(t.point):-1}lengthSquared(){const t=this.head(),e=this.tail();return e!==null?e.point.distanceToSquared(t.point):-1}setTwin(t){return this.twin=t,t.twin=this,this}}class jp{constructor(t){this.point=t,this.prev=null,this.next=null,this.face=null}}class Eo{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(t,e){return e.prev=t.prev,e.next=t,e.prev===null?this.head=e:e.prev.next=e,t.prev=e,this}insertAfter(t,e){return e.prev=t,e.next=t.next,e.next===null?this.tail=e:e.next.prev=e,t.next=e,this}append(t){return this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this}appendChain(t){for(this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail;t.next!==null;)t=t.next;return this.tail=t,this}remove(t){return t.prev===null?this.head=t.next:t.prev.next=t.next,t.next===null?this.tail=t.prev:t.next.prev=t.prev,this}removeSubList(t,e){return t.prev===null?this.head=e.next:t.prev.next=e.next,e.next===null?this.tail=t.prev:e.next.prev=t.prev,this}isEmpty(){return this.head===null}}class Zp extends Ve{constructor(t=[]){super();const e=[],n=[],r=new Yp().setFromPoints(t).faces;for(let a=0;a<r.length;a++){const o=r[a];let c=o.edge;do{const u=c.head().point;e.push(u.x,u.y,u.z),n.push(o.normal.x,o.normal.y,o.normal.z),c=c.next}while(c!==o.edge)}this.setAttribute("position",new ve(e,3)),this.setAttribute("normal",new ve(n,3))}}function wo(i,t){return i+Math.floor(Math.random()*(t-i+1))}const Kp=/^[og]\s*(.+)?/,$p=/^mtllib /,Jp=/^usemtl /,Qp=/^usemap /,To=/\s+/,bo=new $,ms=new $,Ao=new $,Ro=new $,Ke=new $,_r=new ce;function tm(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const u={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return u.clone=this.clone.bind(u),u}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(t,e,n){const s=this.vertices,r=this.object.geometry.normals;bo.fromArray(s,t),ms.fromArray(s,e),Ao.fromArray(s,n),Ke.subVectors(Ao,ms),Ro.subVectors(bo,ms),Ke.cross(Ro),Ke.normalize(),r.push(Ke.x,Ke.y,Ke.z),r.push(Ke.x,Ke.y,Ke.z),r.push(Ke.x,Ke.y,Ke.z)},addColor:function(t,e,n){const s=this.colors,r=this.object.geometry.colors;s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(t,e,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[t+0],s[t+1]),r.push(s[e+0],s[e+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,s,r,a,o,c,u){const h=this.vertices.length;let l=this.parseVertexIndex(t,h),d=this.parseVertexIndex(e,h),f=this.parseVertexIndex(n,h);if(this.addVertex(l,d,f),this.addColor(l,d,f),o!==void 0&&o!==""){const v=this.normals.length;l=this.parseNormalIndex(o,v),d=this.parseNormalIndex(c,v),f=this.parseNormalIndex(u,v),this.addNormal(l,d,f)}else this.addFaceNormal(l,d,f);if(s!==void 0&&s!==""){const v=this.uvs.length;l=this.parseUVIndex(s,v),d=this.parseUVIndex(r,v),f=this.parseUVIndex(a,v),this.addUV(l,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,s=t.length;n<s;n++){const r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=t.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,a=e.length;r<a;r++)this.addUVLine(this.parseUVIndex(e[r],s))}};return i.startObject("",!1),i}class em extends Os{constructor(t){super(t),this.materials=null}load(t,e,n,s){const r=this,a=new zp(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}setMaterials(t){return this.materials=t,this}parse(t){const e=new tm;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let s=[];for(let o=0,c=n.length;o<c;o++){const u=n[o].trimStart();if(u.length===0)continue;const h=u.charAt(0);if(h!=="#")if(h==="v"){const l=u.split(To);switch(l[0]){case"v":e.vertices.push(parseFloat(l[1]),parseFloat(l[2]),parseFloat(l[3])),l.length>=7?(_r.setRGB(parseFloat(l[4]),parseFloat(l[5]),parseFloat(l[6])).convertSRGBToLinear(),e.colors.push(_r.r,_r.g,_r.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(l[1]),parseFloat(l[2]),parseFloat(l[3]));break;case"vt":e.uvs.push(parseFloat(l[1]),parseFloat(l[2]));break}}else if(h==="f"){const d=u.slice(1).trim().split(To),f=[];for(let g=0,m=d.length;g<m;g++){const p=d[g];if(p.length>0){const x=p.split("/");f.push(x)}}const v=f[0];for(let g=1,m=f.length-1;g<m;g++){const p=f[g],x=f[g+1];e.addFace(v[0],p[0],x[0],v[1],p[1],x[1],v[2],p[2],x[2])}}else if(h==="l"){const l=u.substring(1).trim().split(" ");let d=[];const f=[];if(u.indexOf("/")===-1)d=l;else for(let v=0,g=l.length;v<g;v++){const m=l[v].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}e.addLineGeometry(d,f)}else if(h==="p"){const d=u.slice(1).trim().split(" ");e.addPointGeometry(d)}else if((s=Kp.exec(u))!==null){const l=(" "+s[0].slice(1).trim()).slice(1);e.startObject(l)}else if(Jp.test(u))e.object.startMaterial(u.substring(7).trim(),e.materialLibraries);else if($p.test(u))e.materialLibraries.push(u.substring(7).trim());else if(Qp.test(u))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=u.split(" "),s.length>1){const d=s[1].trim().toLowerCase();e.object.smooth=d!=="0"&&d!=="off"}else e.object.smooth=!0;const l=e.object.currentMaterial();l&&(l.smooth=e.object.smooth)}else{if(u==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+u+'"')}}e.finalize();const r=new Fi;if(r.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=e.objects.length;o<c;o++){const u=e.objects[o],h=u.geometry,l=u.materials,d=h.type==="Line",f=h.type==="Points";let v=!1;if(h.vertices.length===0)continue;const g=new Ve;g.setAttribute("position",new ve(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new ve(h.normals,3)),h.colors.length>0&&(v=!0,g.setAttribute("color",new ve(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new ve(h.uvs,2));const m=[];for(let x=0,y=l.length;x<y;x++){const _=l[x],S=_.name+"_"+_.smooth+"_"+v;let b=e.materials[S];if(this.materials!==null){if(b=this.materials.create(_.name),d&&b&&!(b instanceof yr)){const C=new yr;un.prototype.copy.call(C,b),C.color.copy(b.color),b=C}else if(f&&b&&!(b instanceof Ni)){const C=new Ni({size:10,sizeAttenuation:!1});un.prototype.copy.call(C,b),C.color.copy(b.color),C.map=b.map,b=C}}b===void 0&&(d?b=new yr:f?b=new Ni({size:1,sizeAttenuation:!1}):b=new sl,b.name=_.name,b.flatShading=!_.smooth,b.vertexColors=v,e.materials[S]=b),m.push(b)}let p;if(m.length>1){for(let x=0,y=l.length;x<y;x++){const _=l[x];g.addGroup(_.groupStart,_.groupCount,x)}d?p=new fo(g,m):f?p=new us(g,m):p=new Ye(g,m)}else d?p=new fo(g,m[0]):f?p=new us(g,m[0]):p=new Ye(g,m[0]);p.name=u.name,r.add(p)}else if(e.vertices.length>0){const o=new Ni({size:1,sizeAttenuation:!1}),c=new Ve;c.setAttribute("position",new ve(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(c.setAttribute("color",new ve(e.colors,3)),o.vertexColors=!0);const u=new us(c,o);r.add(u)}return r}}const On=new Up,ol=new em;var Co=5,bs,Sr;ol.load("/public/house.obj",i=>{bs=i.children[0].geometry,bs.scale(2,2,2)});ol.load("/public/Cop.obj",i=>{Sr=i.children[0].geometry,Sr.scale(2,2,2),console.log(Sr)});window.addEventListener("resize",nm);function nm(){const i=window.innerWidth,t=window.innerHeight;Bn.aspect=i/t,Bn.updateProjectionMatrix(),Ci.setSize(i,t)}const Bn=new qe(75,window.innerWidth/window.innerHeight,.1,1e3),Xi=new Ri.World;Xi.gravity.set(0,-9.82,0);const Ci=new rl({canvas:document.querySelector("#bg")});Ci.domElement;new Wp;new he;const dn=new zs(16777215,0);dn.position.set(5,20,10);dn.angle=Math.PI/4;dn.penumbra=.5;dn.castShadow=!0;dn.shadow.mapSize.width=2048;dn.shadow.mapSize.height=2048;dn.shadow.camera.near=.5;dn.shadowCameraVisible=!0;dn.shadow.camera.far=100;On.add(dn);const fn=new zs(14381306,90);fn.position.set(-1,11,10);fn.angle=Math.PI/2;fn.penumbra=.6;fn.castShadow=!0;fn.shadow.mapSize.width=2048;fn.shadow.mapSize.height=2048;fn.shadowCameraVisible=!0;fn.shadow.camera.near=.5;fn.shadow.camera.far=100;On.add(fn);const pn=new zs(7404279,30);pn.position.set(1,10,10);pn.angle=Math.PI/2;pn.penumbra=.6;pn.castShadow=!0;pn.shadow.mapSize.width=2048;pn.shadow.mapSize.height=2048;pn.shadowCameraVisible=!0;pn.shadow.camera.near=.5;pn.shadow.camera.far=100;On.add(pn);Bn.position.setZ(10);Bn.position.setY(10);Bn.rotation.x=Go.degToRad(-20);Ci.setPixelRatio(window.devicePixelRatio);Ci.setSize(window.innerWidth,window.innerHeight);Ci.render(On,Bn);new Fr(3,3,10,100);let Er,Xe,De;hl(!0);function im(i){const t=new Fp({color:16777215,flatShading:!1});Xe=new Ye(i,t);let n=new Ti().setFromObject(Xe).getSize(new $);Xe.position.setY(n.y/2+1),Xe.castShadow=!0,om(Xe),De=lm(),De.position.x=Xe.position.x,De.position.y=Xe.position.y,De.position.z=Xe.position.z,Xi.addBody(De),On.add(Xe)}const rm=new Ur(100,100),sm=new sl({color:11184810}),Vs=new Ye(rm,sm);Vs.rotateX(-Math.PI/2);Vs.receiveShadow=!0;On.add(Vs);const am=new Ri.Plane,Hs=new Ri.Body({mass:0});Hs.addShape(am);Hs.quaternion.setFromAxisAngle(new Ri.Vec3(1,0,0),-Math.PI/2);Xi.addBody(Hs);function ll(){requestAnimationFrame(ll),Bn.position.x=De.position.x,Xe.position.set(De.position.x,De.position.y,De.position.z),Xe.quaternion.set(De.quaternion.x,De.quaternion.y,De.quaternion.z,De.quaternion.w),Ci.render(On,Bn)}function om(i){const t=i.geometry.attributes.position.array,e=[];for(let s=0;s<t.length;s+=3)e.push(new $(t[s],t[s+1],t[s+2]));const n=new Zp(e);Er=new Ye(n,new Us({color:65280,wireframe:!0})),Er.visible=!1,i.add(Er)}function lm(i){const t=cm(Er.geometry);let e=new Ri.Body({mass:1});return e.allowSleep=!0,e.addShape(t),e}document.addEventListener("scroll",Gs);document.onkeypress=function(i){i=i||window.event;var t=typeof i.which=="number"?i.which:i.keyCode;t&&String.fromCharCode(t)=="a"&&Gs()};let As=0;function Gs(i){As+=1,As!=1&&(Ar=10,Ws=.01,Vi=100,(Rr||ks)&&cl())}let Vi=0,Ar,Ws,Rr=!0,ks=!1;function cl(){if(Vi==0){Rr=!0;return}if((As==0||De.angularVelocity.x>0)&&De.angularVelocity.set(0,0,-1),Go.radToDeg(Xe.rotation.z)<-90){ks=!0;return}Rr=!1,Xi.step(.01),Vi<20&&(Ar+=5,Ws-=.005),Vi-=1,setTimeout(()=>cl(),Ar)}function cm(i){const t=i.attributes.position.array,e=Object.keys(t).map(Number);return new Ri.Trimesh(t,e)}ll();function hl(i){let t,e=0;do e=wo(0,5);while(e==Co);switch(Co=e,i&&(e=wo(0,2)),e){case 0:t=new bi(5,7,5);break;case 1:t=new Ns(3,2,50,50).rotateY(90);break;case 3:t=bs;break;case 2:t=new Bs;break;case 4:t=Sr;break;default:t=new Fr(3,3,10,100);break}im(t)}function hm(){Ar=10,Ws=.01,ks=!1,Vi=100,Rr=!0,console.log("reloading"),On.remove(Xe),Xi.remove(De),hl()}document.querySelector("#refresh").addEventListener("click",hm);document.querySelector("#a").addEventListener("click",Gs);
