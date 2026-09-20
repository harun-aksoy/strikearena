(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="160",Zh=0,Pc=1,$h=2,Bu=1,Jh=2,ii=3,ci=0,nn=1,Vn=2,wi=0,ji=1,Ia=2,Ic=3,Dc=4,Qh=5,Wi=100,ed=101,td=102,Nc=103,Uc=104,nd=200,id=201,rd=202,sd=203,Da=204,Na=205,od=206,ad=207,cd=208,ld=209,ud=210,hd=211,dd=212,fd=213,pd=214,md=0,_d=1,gd=2,To=3,vd=4,xd=5,yd=6,Md=7,ku=0,Sd=1,Td=2,Ri=0,Ed=1,Ad=2,bd=3,Hu=4,wd=5,Rd=6,Oc="attached",Cd="detached",zu=300,Fr=301,Br=302,Ua=303,Oa=304,Uo=306,kr=1e3,Sn=1001,Eo=1002,Nt=1003,Fa=1004,Mo=1005,tn=1006,Gu=1007,Qi=1008,Ci=1009,Ld=1010,Pd=1011,ec=1012,Vu=1013,Ei=1014,si=1015,Ts=1016,Wu=1017,Xu=1018,Ki=1020,Id=1021,Tn=1023,Dd=1024,Nd=1025,Zi=1026,Hr=1027,Ud=1028,qu=1029,Od=1030,Yu=1031,ju=1033,Wo=33776,Xo=33777,qo=33778,Yo=33779,Fc=35840,Bc=35841,kc=35842,Hc=35843,Ku=36196,zc=37492,Gc=37496,Vc=37808,Wc=37809,Xc=37810,qc=37811,Yc=37812,jc=37813,Kc=37814,Zc=37815,$c=37816,Jc=37817,Qc=37818,el=37819,tl=37820,nl=37821,jo=36492,il=36494,rl=36495,Fd=36283,sl=36284,ol=36285,al=36286,Bd=2200,kd=2201,Hd=2202,Es=2300,zr=2301,Ko=2302,wr=2400,Rr=2401,Ao=2402,tc=2500,zd=2501,Gd=0,Zu=1,Ba=2,$u=3e3,$i=3001,Vd=3200,Wd=3201,Ju=0,Xd=1,En="",vt="srgb",Ut="srgb-linear",nc="display-p3",Oo="display-p3-linear",bo="linear",mt="srgb",wo="rec709",Ro="p3",cr=7680,cl=519,qd=512,Yd=513,jd=514,Qu=515,Kd=516,Zd=517,$d=518,Jd=519,ka=35044,ll="300 es",Ha=1035,oi=2e3,Co=2001;class rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ul=1234567;const vs=Math.PI/180,Gr=180/Math.PI;function On(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[r&255]+Gt[r>>8&255]+Gt[r>>16&255]+Gt[r>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Ht(r,e,t){return Math.max(e,Math.min(t,r))}function ic(r,e){return(r%e+e)%e}function Qd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function ef(r,e,t){return r!==e?(t-r)/(e-r):0}function xs(r,e,t){return(1-t)*r+t*e}function tf(r,e,t,n){return xs(r,e,1-Math.exp(-t*n))}function nf(r,e=1){return e-Math.abs(ic(r,e*2)-e)}function rf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function sf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function of(r,e){return r+Math.floor(Math.random()*(e-r+1))}function af(r,e){return r+Math.random()*(e-r)}function cf(r){return r*(.5-Math.random())}function lf(r){r!==void 0&&(ul=r);let e=ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uf(r){return r*vs}function hf(r){return r*Gr}function za(r){return(r&r-1)===0&&r!==0}function df(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Lo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ff(r,e,t,n,i){const s=Math.cos,o=Math.sin,c=s(t/2),l=o(t/2),h=s((e+n)/2),d=o((e+n)/2),a=s((e-n)/2),u=o((e-n)/2),f=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(c*d,l*a,l*u,c*h);break;case"YZY":r.set(l*u,c*d,l*a,c*h);break;case"ZXZ":r.set(l*a,l*u,c*d,c*h);break;case"XZX":r.set(c*d,l*_,l*f,c*h);break;case"YXY":r.set(l*f,c*d,l*_,c*h);break;case"ZYZ":r.set(l*_,l*f,c*d,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const rc={DEG2RAD:vs,RAD2DEG:Gr,generateUUID:On,clamp:Ht,euclideanModulo:ic,mapLinear:Qd,inverseLerp:ef,lerp:xs,damp:tf,pingpong:nf,smoothstep:rf,smootherstep:sf,randInt:of,randFloat:af,randFloatSpread:cf,seededRandom:lf,degToRad:uf,radToDeg:hf,isPowerOfTwo:za,ceilPowerOfTwo:df,floorPowerOfTwo:Lo,setQuaternionFromProperEuler:ff,normalize:ht,denormalize:Wn};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,i,s,o,c,l,h){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,l,h)}set(e,t,n,i,s,o,c,l,h){const d=this.elements;return d[0]=e,d[1]=i,d[2]=c,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[3],l=n[6],h=n[1],d=n[4],a=n[7],u=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],x=i[4],T=i[7],I=i[2],R=i[5],L=i[8];return s[0]=o*g+c*v+l*I,s[3]=o*m+c*x+l*R,s[6]=o*p+c*T+l*L,s[1]=h*g+d*v+a*I,s[4]=h*m+d*x+a*R,s[7]=h*p+d*T+a*L,s[2]=u*g+f*v+_*I,s[5]=u*m+f*x+_*R,s[8]=u*p+f*T+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],l=e[6],h=e[7],d=e[8];return t*o*d-t*c*h-n*s*d+n*c*l+i*s*h-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],l=e[6],h=e[7],d=e[8],a=d*o-c*h,u=c*l-d*s,f=h*s-o*l,_=t*a+n*u+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=a*g,e[1]=(i*h-d*n)*g,e[2]=(c*n-i*o)*g,e[3]=u*g,e[4]=(d*t-i*l)*g,e[5]=(i*s-c*t)*g,e[6]=f*g,e[7]=(n*l-h*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,c){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*o+h*c)+o+e,-i*h,i*l,-i*(-h*o+l*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Zo.makeScale(e,t)),this}rotate(e){return this.premultiply(Zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zo=new je;function eh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function As(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pf(){const r=As("canvas");return r.style.display="block",r}const hl={};function ys(r){r in hl||(hl[r]=!0,console.warn(r))}const dl=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fl=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zs={[Ut]:{transfer:bo,primaries:wo,toReference:r=>r,fromReference:r=>r},[vt]:{transfer:mt,primaries:wo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Oo]:{transfer:bo,primaries:Ro,toReference:r=>r.applyMatrix3(fl),fromReference:r=>r.applyMatrix3(dl)},[nc]:{transfer:mt,primaries:Ro,toReference:r=>r.convertSRGBToLinear().applyMatrix3(fl),fromReference:r=>r.applyMatrix3(dl).convertLinearToSRGB()}},mf=new Set([Ut,Oo]),ot={enabled:!0,_workingColorSpace:Ut,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!mf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=zs[e].toReference,i=zs[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return zs[r].primaries},getTransfer:function(r){return r===En?bo:zs[r].transfer}};function Dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $o(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let lr;class th{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=As("canvas")),lr.width=e.width,lr.height=e.height;const n=lr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=As("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Dr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dr(t[n]/255)*255):t[n]=Dr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _f=0;class nh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=On(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,c=i.length;o<c;o++)i[o].isDataTexture?s.push(Jo(i[o].image)):s.push(Jo(i[o]))}else s=Jo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Jo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?th.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gf=0;class zt extends rr{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=Sn,i=Sn,s=tn,o=Qi,c=Tn,l=Ci,h=zt.DEFAULT_ANISOTROPY,d=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=On(),this.name="",this.source=new nh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===$i?vt:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?$i:$u}set encoding(e){ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$i?vt:En}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=zu;zt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,h=l[0],d=l[4],a=l[8],u=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(a-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(a+g)<.1&&Math.abs(_+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(h+1)/2,T=(f+1)/2,I=(p+1)/2,R=(d+u)/4,L=(a+g)/4,O=(_+m)/4;return x>T&&x>I?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=R/n,s=L/n):T>I?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=R/i,s=O/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=L/s,i=O/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(a-g)*(a-g)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(a-g)/v,this.z=(u-d)/v,this.w=Math.acos((h+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vf extends rr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$i?vt:En),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends vf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ih extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xf extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,c){let l=n[i+0],h=n[i+1],d=n[i+2],a=n[i+3];const u=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(c===0){e[t+0]=l,e[t+1]=h,e[t+2]=d,e[t+3]=a;return}if(c===1){e[t+0]=u,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(a!==g||l!==u||h!==f||d!==_){let m=1-c;const p=l*u+h*f+d*_+a*g,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const I=Math.sqrt(x),R=Math.atan2(I,p*v);m=Math.sin(m*R)/I,c=Math.sin(c*R)/I}const T=c*v;if(l=l*m+u*T,h=h*m+f*T,d=d*m+_*T,a=a*m+g*T,m===1-c){const I=1/Math.sqrt(l*l+h*h+d*d+a*a);l*=I,h*=I,d*=I,a*=I}}e[t]=l,e[t+1]=h,e[t+2]=d,e[t+3]=a}static multiplyQuaternionsFlat(e,t,n,i,s,o){const c=n[i],l=n[i+1],h=n[i+2],d=n[i+3],a=s[o],u=s[o+1],f=s[o+2],_=s[o+3];return e[t]=c*_+d*a+l*f-h*u,e[t+1]=l*_+d*u+h*a-c*f,e[t+2]=h*_+d*f+c*u-l*a,e[t+3]=d*_-c*a-l*u-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,c=Math.cos,l=Math.sin,h=c(n/2),d=c(i/2),a=c(s/2),u=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=u*d*a+h*f*_,this._y=h*f*a-u*d*_,this._z=h*d*_+u*f*a,this._w=h*d*a-u*f*_;break;case"YXZ":this._x=u*d*a+h*f*_,this._y=h*f*a-u*d*_,this._z=h*d*_-u*f*a,this._w=h*d*a+u*f*_;break;case"ZXY":this._x=u*d*a-h*f*_,this._y=h*f*a+u*d*_,this._z=h*d*_+u*f*a,this._w=h*d*a-u*f*_;break;case"ZYX":this._x=u*d*a-h*f*_,this._y=h*f*a+u*d*_,this._z=h*d*_-u*f*a,this._w=h*d*a+u*f*_;break;case"YZX":this._x=u*d*a+h*f*_,this._y=h*f*a+u*d*_,this._z=h*d*_-u*f*a,this._w=h*d*a-u*f*_;break;case"XZY":this._x=u*d*a-h*f*_,this._y=h*f*a-u*d*_,this._z=h*d*_+u*f*a,this._w=h*d*a+u*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],c=t[5],l=t[9],h=t[2],d=t[6],a=t[10],u=n+c+a;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-h)*f,this._z=(o-i)*f}else if(n>c&&n>a){const f=2*Math.sqrt(1+n-c-a);this._w=(d-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+h)/f}else if(c>a){const f=2*Math.sqrt(1+c-n-a);this._w=(s-h)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+a-n-c);this._w=(o-i)/f,this._x=(s+h)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,c=t._x,l=t._y,h=t._z,d=t._w;return this._x=n*d+o*c+i*h-s*l,this._y=i*d+o*l+s*c-n*h,this._z=s*d+o*h+n*l-i*c,this._w=o*d-n*c-i*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let c=o*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-c*c;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,c),a=Math.sin((1-t)*d)/h,u=Math.sin(t*d)/h;return this._w=o*a+this._w*u,this._x=n*a+this._x*u,this._y=i*a+this._y*u,this._z=s*a+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,c=e.z,l=e.w,h=2*(o*i-c*n),d=2*(c*t-s*i),a=2*(s*n-o*t);return this.x=t+l*h+o*a-c*d,this.y=n+l*d+c*h-s*a,this.z=i+l*a+s*d-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,c=t.y,l=t.z;return this.x=i*l-s*c,this.y=s*o-n*l,this.z=n*c-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new C,pl=new Fn;class qt{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),Vs.subVectors(this.max,ns),ur.subVectors(e.a,ns),hr.subVectors(e.b,ns),dr.subVectors(e.c,ns),pi.subVectors(hr,ur),mi.subVectors(dr,hr),Ui.subVectors(ur,dr);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ui.z,Ui.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ui.z,0,-Ui.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ui.y,Ui.x,0];return!ea(t,ur,hr,dr,Vs)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,ur,hr,dr,Vs))?!1:(Ws.crossVectors(pi,mi),t=[Ws.x,Ws.y,Ws.z],ea(t,ur,hr,dr,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new C,new C,new C,new C,new C,new C,new C,new C],Pn=new C,Gs=new qt,ur=new C,hr=new C,dr=new C,pi=new C,mi=new C,Ui=new C,ns=new C,Vs=new C,Ws=new C,Oi=new C;function ea(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Oi.fromArray(r,s);const c=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=e.dot(Oi),h=t.dot(Oi),d=n.dot(Oi);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>c)return!1}return!0}const yf=new qt,is=new C,ta=new C;class hn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);const t=is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(ta)),this.expandByPoint(is.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new C,na=new C,Xs=new C,_i=new C,ia=new C,qs=new C,ra=new C;class ws{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){na.copy(e).add(t).multiplyScalar(.5),Xs.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(na);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Xs),c=_i.dot(this.direction),l=-_i.dot(Xs),h=_i.lengthSq(),d=Math.abs(1-o*o);let a,u,f,_;if(d>0)if(a=o*l-c,u=o*c-l,_=s*d,a>=0)if(u>=-_)if(u<=_){const g=1/d;a*=g,u*=g,f=a*(a+o*u+2*c)+u*(o*a+u+2*l)+h}else u=s,a=Math.max(0,-(o*u+c)),f=-a*a+u*(u+2*l)+h;else u=-s,a=Math.max(0,-(o*u+c)),f=-a*a+u*(u+2*l)+h;else u<=-_?(a=Math.max(0,-(-o*s+c)),u=a>0?-s:Math.min(Math.max(-s,-l),s),f=-a*a+u*(u+2*l)+h):u<=_?(a=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+h):(a=Math.max(0,-(o*s+c)),u=a>0?s:Math.min(Math.max(-s,-l),s),f=-a*a+u*(u+2*l)+h);else u=o>0?-s:s,a=Math.max(0,-(o*u+c)),f=-a*a+u*(u+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,a),i&&i.copy(na).addScaledVector(Xs,u),f}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),c=n-o,l=n+o;return l<0?null:c<0?this.at(l,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,c,l;const h=1/this.direction.x,d=1/this.direction.y,a=1/this.direction.z,u=this.origin;return h>=0?(n=(e.min.x-u.x)*h,i=(e.max.x-u.x)*h):(n=(e.max.x-u.x)*h,i=(e.min.x-u.x)*h),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),a>=0?(c=(e.min.z-u.z)*a,l=(e.max.z-u.z)*a):(c=(e.max.z-u.z)*a,l=(e.min.z-u.z)*a),n>l||c>i)||((c>n||n!==n)&&(n=c),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,i,s){ia.subVectors(t,e),qs.subVectors(n,e),ra.crossVectors(ia,qs);let o=this.direction.dot(ra),c;if(o>0){if(i)return null;c=1}else if(o<0)c=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=c*this.direction.dot(qs.crossVectors(_i,qs));if(l<0)return null;const h=c*this.direction.dot(ia.cross(_i));if(h<0||l+h>o)return null;const d=-c*_i.dot(ra);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,i,s,o,c,l,h,d,a,u,f,_,g,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,l,h,d,a,u,f,_,g,m)}set(e,t,n,i,s,o,c,l,h,d,a,u,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=c,p[13]=l,p[2]=h,p[6]=d,p[10]=a,p[14]=u,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fr.setFromMatrixColumn(e,0).length(),s=1/fr.setFromMatrixColumn(e,1).length(),o=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),c=Math.sin(n),l=Math.cos(i),h=Math.sin(i),d=Math.cos(s),a=Math.sin(s);if(e.order==="XYZ"){const u=o*d,f=o*a,_=c*d,g=c*a;t[0]=l*d,t[4]=-l*a,t[8]=h,t[1]=f+_*h,t[5]=u-g*h,t[9]=-c*l,t[2]=g-u*h,t[6]=_+f*h,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,f=l*a,_=h*d,g=h*a;t[0]=u+g*c,t[4]=_*c-f,t[8]=o*h,t[1]=o*a,t[5]=o*d,t[9]=-c,t[2]=f*c-_,t[6]=g+u*c,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,f=l*a,_=h*d,g=h*a;t[0]=u-g*c,t[4]=-o*a,t[8]=_+f*c,t[1]=f+_*c,t[5]=o*d,t[9]=g-u*c,t[2]=-o*h,t[6]=c,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,f=o*a,_=c*d,g=c*a;t[0]=l*d,t[4]=_*h-f,t[8]=u*h+g,t[1]=l*a,t[5]=g*h+u,t[9]=f*h-_,t[2]=-h,t[6]=c*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*h,_=c*l,g=c*h;t[0]=l*d,t[4]=g-u*a,t[8]=_*a+f,t[1]=a,t[5]=o*d,t[9]=-c*d,t[2]=-h*d,t[6]=f*a+_,t[10]=u-g*a}else if(e.order==="XZY"){const u=o*l,f=o*h,_=c*l,g=c*h;t[0]=l*d,t[4]=-a,t[8]=h*d,t[1]=u*a+g,t[5]=o*d,t[9]=f*a-_,t[2]=_*a-f,t[6]=c*d,t[10]=g*a+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mf,e,Sf)}lookAt(e,t,n){const i=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),gi.crossVectors(n,cn),gi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),gi.crossVectors(n,cn)),gi.normalize(),Ys.crossVectors(cn,gi),i[0]=gi.x,i[4]=Ys.x,i[8]=cn.x,i[1]=gi.y,i[5]=Ys.y,i[9]=cn.y,i[2]=gi.z,i[6]=Ys.z,i[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[4],l=n[8],h=n[12],d=n[1],a=n[5],u=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],x=n[7],T=n[11],I=n[15],R=i[0],L=i[4],O=i[8],y=i[12],b=i[1],V=i[5],X=i[9],ne=i[13],N=i[2],G=i[6],Y=i[10],Z=i[14],j=i[3],K=i[7],$=i[11],oe=i[15];return s[0]=o*R+c*b+l*N+h*j,s[4]=o*L+c*V+l*G+h*K,s[8]=o*O+c*X+l*Y+h*$,s[12]=o*y+c*ne+l*Z+h*oe,s[1]=d*R+a*b+u*N+f*j,s[5]=d*L+a*V+u*G+f*K,s[9]=d*O+a*X+u*Y+f*$,s[13]=d*y+a*ne+u*Z+f*oe,s[2]=_*R+g*b+m*N+p*j,s[6]=_*L+g*V+m*G+p*K,s[10]=_*O+g*X+m*Y+p*$,s[14]=_*y+g*ne+m*Z+p*oe,s[3]=v*R+x*b+T*N+I*j,s[7]=v*L+x*V+T*G+I*K,s[11]=v*O+x*X+T*Y+I*$,s[15]=v*y+x*ne+T*Z+I*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],c=e[5],l=e[9],h=e[13],d=e[2],a=e[6],u=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*a-i*h*a-s*c*u+n*h*u+i*c*f-n*l*f)+g*(+t*l*f-t*h*u+s*o*u-i*o*f+i*h*d-s*l*d)+m*(+t*h*a-t*c*f-s*o*a+n*o*f+s*c*d-n*h*d)+p*(-i*c*d-t*l*a+t*c*u+i*o*a-n*o*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],l=e[6],h=e[7],d=e[8],a=e[9],u=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],v=a*m*h-g*u*h+g*l*f-c*m*f-a*l*p+c*u*p,x=_*u*h-d*m*h-_*l*f+o*m*f+d*l*p-o*u*p,T=d*g*h-_*a*h+_*c*f-o*g*f-d*c*p+o*a*p,I=_*a*l-d*g*l-_*c*u+o*g*u+d*c*m-o*a*m,R=t*v+n*x+i*T+s*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return e[0]=v*L,e[1]=(g*u*s-a*m*s-g*i*f+n*m*f+a*i*p-n*u*p)*L,e[2]=(c*m*s-g*l*s+g*i*h-n*m*h-c*i*p+n*l*p)*L,e[3]=(a*l*s-c*u*s-a*i*h+n*u*h+c*i*f-n*l*f)*L,e[4]=x*L,e[5]=(d*m*s-_*u*s+_*i*f-t*m*f-d*i*p+t*u*p)*L,e[6]=(_*l*s-o*m*s-_*i*h+t*m*h+o*i*p-t*l*p)*L,e[7]=(o*u*s-d*l*s+d*i*h-t*u*h-o*i*f+t*l*f)*L,e[8]=T*L,e[9]=(_*a*s-d*g*s-_*n*f+t*g*f+d*n*p-t*a*p)*L,e[10]=(o*g*s-_*c*s+_*n*h-t*g*h-o*n*p+t*c*p)*L,e[11]=(d*c*s-o*a*s-d*n*h+t*a*h+o*n*f-t*c*f)*L,e[12]=I*L,e[13]=(d*g*i-_*a*i+_*n*u-t*g*u-d*n*m+t*a*m)*L,e[14]=(_*c*i-o*g*i-_*n*l+t*g*l+o*n*m-t*c*m)*L,e[15]=(o*a*i-d*c*i+d*n*l-t*a*l-o*n*u+t*c*u)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,c=e.y,l=e.z,h=s*o,d=s*c;return this.set(h*o+n,h*c-i*l,h*l+i*c,0,h*c+i*l,d*c+n,d*l-i*o,0,h*l-i*c,d*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,c=t._z,l=t._w,h=s+s,d=o+o,a=c+c,u=s*h,f=s*d,_=s*a,g=o*d,m=o*a,p=c*a,v=l*h,x=l*d,T=l*a,I=n.x,R=n.y,L=n.z;return i[0]=(1-(g+p))*I,i[1]=(f+T)*I,i[2]=(_-x)*I,i[3]=0,i[4]=(f-T)*R,i[5]=(1-(u+p))*R,i[6]=(m+v)*R,i[7]=0,i[8]=(_+x)*L,i[9]=(m-v)*L,i[10]=(1-(u+g))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fr.set(i[0],i[1],i[2]).length();const o=fr.set(i[4],i[5],i[6]).length(),c=fr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],In.copy(this);const h=1/s,d=1/o,a=1/c;return In.elements[0]*=h,In.elements[1]*=h,In.elements[2]*=h,In.elements[4]*=d,In.elements[5]*=d,In.elements[6]*=d,In.elements[8]*=a,In.elements[9]*=a,In.elements[10]*=a,t.setFromRotationMatrix(In),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,o,c=oi){const l=this.elements,h=2*s/(t-e),d=2*s/(n-i),a=(t+e)/(t-e),u=(n+i)/(n-i);let f,_;if(c===oi)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(c===Co)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=h,l[4]=0,l[8]=a,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,c=oi){const l=this.elements,h=1/(t-e),d=1/(n-i),a=1/(o-s),u=(t+e)*h,f=(n+i)*d;let _,g;if(c===oi)_=(o+s)*a,g=-2*a;else if(c===Co)_=s*a,g=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fr=new C,In=new Ke,Mf=new C(0,0,0),Sf=new C(1,1,1),gi=new C,Ys=new C,cn=new C,ml=new Ke,_l=new Fn;class Fo{constructor(e=0,t=0,n=0,i=Fo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],c=i[8],l=i[1],h=i[5],d=i[9],a=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-a,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-a,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-a,s)):(this._x=0,this._y=Math.atan2(c,f));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _l.setFromEuler(this),this.setFromQuaternion(_l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fo.DEFAULT_ORDER="XYZ";class sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tf=0;const gl=new C,pr=new Fn,$n=new Ke,js=new C,rs=new C,Ef=new C,Af=new Fn,vl=new C(1,0,0),xl=new C(0,1,0),yl=new C(0,0,1),bf={type:"added"},wf={type:"removed"};class _t extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new C,t=new Fo,n=new Fn,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new je}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(vl,e)}rotateY(e){return this.rotateOnAxis(xl,e)}rotateZ(e){return this.rotateOnAxis(yl,e)}translateOnAxis(e,t){return gl.copy(e).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vl,e)}translateY(e){return this.translateOnAxis(xl,e)}translateZ(e){return this.translateOnAxis(yl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?js.copy(e):js.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(rs,js,this.up):$n.lookAt(js,rs,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),pr.setFromRotationMatrix($n),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,Ef),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const c=i[s];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const l=c.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const a=l[h];s(e.shapes,a)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(s(e.materials,this.material[l]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const l=this.animations[c];i.animations.push(s(e.animations,l))}}if(t){const c=o(e.geometries),l=o(e.materials),h=o(e.textures),d=o(e.images),a=o(e.shapes),u=o(e.skeletons),f=o(e.animations),_=o(e.nodes);c.length>0&&(n.geometries=c),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),a.length>0&&(n.shapes=a),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(c){const l=[];for(const h in c){const d=c[h];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new C(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new C,Jn=new C,sa=new C,Qn=new C,mr=new C,_r=new C,Ml=new C,oa=new C,aa=new C,ca=new C;let Ks=!1;class Mn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Dn.subVectors(i,t),Jn.subVectors(n,t),sa.subVectors(e,t);const o=Dn.dot(Dn),c=Dn.dot(Jn),l=Dn.dot(sa),h=Jn.dot(Jn),d=Jn.dot(sa),a=o*h-c*c;if(a===0)return s.set(0,0,0),null;const u=1/a,f=(h*l-c*d)*u,_=(o*d-c*l)*u;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getUV(e,t,n,i,s,o,c,l){return Ks===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ks=!0),this.getInterpolation(e,t,n,i,s,o,c,l)}static getInterpolation(e,t,n,i,s,o,c,l){return this.getBarycoord(e,t,n,i,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(c,Qn.z),l)}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),Jn.subVectors(e,t),Dn.cross(Jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Dn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ks===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ks=!0),Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,c;mr.subVectors(i,n),_r.subVectors(s,n),oa.subVectors(e,n);const l=mr.dot(oa),h=_r.dot(oa);if(l<=0&&h<=0)return t.copy(n);aa.subVectors(e,i);const d=mr.dot(aa),a=_r.dot(aa);if(d>=0&&a<=d)return t.copy(i);const u=l*a-d*h;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(mr,o);ca.subVectors(e,s);const f=mr.dot(ca),_=_r.dot(ca);if(_>=0&&f<=_)return t.copy(s);const g=f*h-l*_;if(g<=0&&h>=0&&_<=0)return c=h/(h-_),t.copy(n).addScaledVector(_r,c);const m=d*_-f*a;if(m<=0&&a-d>=0&&f-_>=0)return Ml.subVectors(s,i),c=(a-d)/(a-d+(f-_)),t.copy(i).addScaledVector(Ml,c);const p=1/(m+g+u);return o=g*p,c=u*p,t.copy(n).addScaledVector(mr,o).addScaledVector(_r,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function la(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=ic(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=la(o,s,e+1/3),this.g=la(o,s,e),this.b=la(o,s,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],c=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=rh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=$o(e.r),this.g=$o(e.g),this.b=$o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return ot.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Ht(Vt.r*255,0,255))*65536+Math.round(Ht(Vt.g*255,0,255))*256+Math.round(Ht(Vt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,s=Vt.b,o=Math.max(n,i,s),c=Math.min(n,i,s);let l,h;const d=(c+o)/2;if(c===o)l=0,h=0;else{const a=o-c;switch(h=d<=.5?a/(o+c):a/(2-o-c),o){case n:l=(i-s)/a+(i<s?6:0);break;case i:l=(s-n)/a+2;break;case s:l=(n-i)/a+4;break}l/=6}return e.h=l,e.s=h,e.l=d,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=vt){ot.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Zs);const n=xs(vi.h,Zs.h,t),i=xs(vi.s,Zs.s,t),s=xs(vi.l,Zs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Be;Be.NAMES=rh;let Rf=0;class qn extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=On(),this.name="",this.type="Material",this.blending=ji,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Na,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const c in s){const l=s[c];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class un extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new C,$s=new ke;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ka,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ka&&(e.usage=this.usage),e}}class sh extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class oh extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cf=0;const gn=new Ke,ua=new _t,gr=new C,ln=new qt,ss=new qt,It=new C;class an extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eh(e)?oh:sh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];ss.setFromBufferAttribute(c),this.morphTargetsRelative?(It.addVectors(ln.min,ss.min),ln.expandByPoint(It),It.addVectors(ln.max,ss.max),ln.expandByPoint(It)):(ln.expandByPoint(ss.min),ln.expandByPoint(ss.max))}ln.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const c=t[s],l=this.morphTargetsRelative;for(let h=0,d=c.count;h<d;h++)It.fromBufferAttribute(c,h),l&&(gr.fromBufferAttribute(e,h),It.add(gr)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,c=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*c),4));const l=this.getAttribute("tangent").array,h=[],d=[];for(let b=0;b<c;b++)h[b]=new C,d[b]=new C;const a=new C,u=new C,f=new C,_=new ke,g=new ke,m=new ke,p=new C,v=new C;function x(b,V,X){a.fromArray(i,b*3),u.fromArray(i,V*3),f.fromArray(i,X*3),_.fromArray(o,b*2),g.fromArray(o,V*2),m.fromArray(o,X*2),u.sub(a),f.sub(a),g.sub(_),m.sub(_);const ne=1/(g.x*m.y-m.x*g.y);isFinite(ne)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(ne),v.copy(f).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(ne),h[b].add(p),h[V].add(p),h[X].add(p),d[b].add(v),d[V].add(v),d[X].add(v))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let b=0,V=T.length;b<V;++b){const X=T[b],ne=X.start,N=X.count;for(let G=ne,Y=ne+N;G<Y;G+=3)x(n[G+0],n[G+1],n[G+2])}const I=new C,R=new C,L=new C,O=new C;function y(b){L.fromArray(s,b*3),O.copy(L);const V=h[b];I.copy(V),I.sub(L.multiplyScalar(L.dot(V))).normalize(),R.crossVectors(O,V);const ne=R.dot(d[b])<0?-1:1;l[b*4]=I.x,l[b*4+1]=I.y,l[b*4+2]=I.z,l[b*4+3]=ne}for(let b=0,V=T.length;b<V;++b){const X=T[b],ne=X.start,N=X.count;for(let G=ne,Y=ne+N;G<Y;G+=3)y(n[G+0]),y(n[G+1]),y(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,s=new C,o=new C,c=new C,l=new C,h=new C,d=new C,a=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){const _=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),d.subVectors(o,s),a.subVectors(i,s),d.cross(a),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),c.add(d),l.add(d),h.add(d),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),a.subVectors(i,s),d.cross(a),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(c,l){const h=c.array,d=c.itemSize,a=c.normalized,u=new h.constructor(l.length*d);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){c.isInterleavedBufferAttribute?f=l[g]*c.data.stride+c.offset:f=l[g]*d;for(let p=0;p<d;p++)u[_++]=h[f++]}return new yt(u,d,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,i=this.attributes;for(const c in i){const l=i[c],h=e(l,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const l=[],h=s[c];for(let d=0,a=h.length;d<a;d++){const u=h[d],f=e(u,n);l.push(f)}t.morphAttributes[c]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,l=o.length;c<l;c++){const h=o[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let a=0,u=h.length;a<u;a++){const f=h[a];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(t))}const s=e.morphAttributes;for(const h in s){const d=[],a=s[h];for(let u=0,f=a.length;u<f;u++)d.push(a[u].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,d=o.length;h<d;h++){const a=o[h];this.addGroup(a.start,a.count,a.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new Ke,Fi=new ws,Js=new hn,Tl=new C,vr=new C,xr=new C,yr=new C,ha=new C,Qs=new C,eo=new ke,to=new ke,no=new ke,El=new C,Al=new C,bl=new C,io=new C,ro=new C;class Xt extends _t{constructor(e=new an,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){Qs.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const d=c[l],a=s[l];d!==0&&(ha.fromBufferAttribute(a,e),o?Qs.addScaledVector(ha,d):Qs.addScaledVector(ha.sub(t),d))}t.add(Qs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),Fi.copy(e.ray).recast(e.near),!(Js.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Js,Tl)===null||Fi.origin.distanceToSquared(Tl)>(e.far-e.near)**2))&&(Sl.copy(s).invert(),Fi.copy(e.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,c=s.index,l=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,a=s.attributes.normal,u=s.groups,f=s.drawRange;if(c!==null)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let T=v,I=x;T<I;T+=3){const R=c.getX(T),L=c.getX(T+1),O=c.getX(T+2);i=so(this,p,e,n,h,d,a,R,L,O),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=c.getX(m),x=c.getX(m+1),T=c.getX(m+2);i=so(this,o,e,n,h,d,a,v,x,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let T=v,I=x;T<I;T+=3){const R=T,L=T+1,O=T+2;i=so(this,p,e,n,h,d,a,R,L,O),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=m,x=m+1,T=m+2;i=so(this,o,e,n,h,d,a,v,x,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Lf(r,e,t,n,i,s,o,c){let l;if(e.side===nn?l=n.intersectTriangle(o,s,i,!0,c):l=n.intersectTriangle(i,s,o,e.side===ci,c),l===null)return null;ro.copy(c),ro.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(ro);return h<t.near||h>t.far?null:{distance:h,point:ro.clone(),object:r}}function so(r,e,t,n,i,s,o,c,l,h){r.getVertexPosition(c,vr),r.getVertexPosition(l,xr),r.getVertexPosition(h,yr);const d=Lf(r,e,t,n,vr,xr,yr,io);if(d){i&&(eo.fromBufferAttribute(i,c),to.fromBufferAttribute(i,l),no.fromBufferAttribute(i,h),d.uv=Mn.getInterpolation(io,vr,xr,yr,eo,to,no,new ke)),s&&(eo.fromBufferAttribute(s,c),to.fromBufferAttribute(s,l),no.fromBufferAttribute(s,h),d.uv1=Mn.getInterpolation(io,vr,xr,yr,eo,to,no,new ke),d.uv2=d.uv1),o&&(El.fromBufferAttribute(o,c),Al.fromBufferAttribute(o,l),bl.fromBufferAttribute(o,h),d.normal=Mn.getInterpolation(io,vr,xr,yr,El,Al,bl,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const a={a:c,b:l,c:h,normal:new C,materialIndex:0};Mn.getNormal(vr,xr,yr,a.normal),d.face=a}return d}class Kr extends an{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const c=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],h=[],d=[],a=[];let u=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(a,2));function _(g,m,p,v,x,T,I,R,L,O,y){const b=T/L,V=I/O,X=T/2,ne=I/2,N=R/2,G=L+1,Y=O+1;let Z=0,j=0;const K=new C;for(let $=0;$<Y;$++){const oe=$*V-ne;for(let se=0;se<G;se++){const q=se*b-X;K[g]=q*v,K[m]=oe*x,K[p]=N,h.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[p]=R>0?1:-1,d.push(K.x,K.y,K.z),a.push(se/L),a.push(1-$/O),Z+=1}}for(let $=0;$<O;$++)for(let oe=0;oe<L;oe++){const se=u+oe+G*$,q=u+oe+G*($+1),J=u+(oe+1)+G*($+1),fe=u+(oe+1)+G*$;l.push(se,q,fe),l.push(q,J,fe),j+=6}c.addGroup(f,j,y),f+=j,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(r){const e={};for(let t=0;t<r.length;t++){const n=Vr(r[t]);for(const i in n)e[i]=n[i]}return e}function Pf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ah(r){return r.getRenderTarget()===null?r.outputColorSpace:ot.workingColorSpace}const If={clone:Vr,merge:Kt};var Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=Pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ch extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends ch{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/h,i*=o.width/l,n*=o.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mr=-90,Sr=1;class Uf extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(Mr,Sr,e,t);i.layers=this.layers,this.add(i);const s=new $t(Mr,Sr,e,t);s.layers=this.layers,this.add(s);const o=new $t(Mr,Sr,e,t);o.layers=this.layers,this.add(o);const c=new $t(Mr,Sr,e,t);c.layers=this.layers,this.add(c);const l=new $t(Mr,Sr,e,t);l.layers=this.layers,this.add(l);const h=new $t(Mr,Sr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,c,l]=t;for(const h of t)this.remove(h);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,c,l,h,d]=this.children,a=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(a,u,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class oc extends zt{constructor(e,t,n,i,s,o,c,l,h,d){e=e!==void 0?e:[],t=t!==void 0?t:Fr,super(e,t,n,i,s,o,c,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Of extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$i?vt:En),this.texture=new oc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Kr(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:wi});s.uniforms.tEquirect.value=t;const o=new Xt(i,s),c=t.minFilter;return t.minFilter===Qi&&(t.minFilter=tn),new Uf(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const da=new C,Ff=new C,Bf=new je;class Si{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=da.subVectors(n,t).cross(Ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bf.getNormalMatrix(e),i=this.coplanarPoint(da).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new hn,oo=new C;class ac{constructor(e=new Si,t=new Si,n=new Si,i=new Si,s=new Si,o=new Si){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi){const n=this.planes,i=e.elements,s=i[0],o=i[1],c=i[2],l=i[3],h=i[4],d=i[5],a=i[6],u=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],v=i[13],x=i[14],T=i[15];if(n[0].setComponents(l-s,u-h,m-f,T-p).normalize(),n[1].setComponents(l+s,u+h,m+f,T+p).normalize(),n[2].setComponents(l+o,u+d,m+_,T+v).normalize(),n[3].setComponents(l-o,u-d,m-_,T-v).normalize(),n[4].setComponents(l-c,u-a,m-g,T-x).normalize(),t===oi)n[5].setComponents(l+c,u+a,m+g,T+x).normalize();else if(t===Co)n[5].setComponents(c,a,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(oo.x=i.normal.x>0?e.max.x:e.min.x,oo.y=i.normal.y>0?e.max.y:e.min.y,oo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function kf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(h,d){const a=h.array,u=h.usage,f=a.byteLength,_=r.createBuffer();r.bindBuffer(d,_),r.bufferData(d,a,u),h.onUploadCallback();let g;if(a instanceof Float32Array)g=r.FLOAT;else if(a instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(a instanceof Int16Array)g=r.SHORT;else if(a instanceof Uint32Array)g=r.UNSIGNED_INT;else if(a instanceof Int32Array)g=r.INT;else if(a instanceof Int8Array)g=r.BYTE;else if(a instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:_,type:g,bytesPerElement:a.BYTES_PER_ELEMENT,version:h.version,size:f}}function s(h,d,a){const u=d.array,f=d._updateRange,_=d.updateRanges;if(r.bindBuffer(a,h),f.count===-1&&_.length===0&&r.bufferSubData(a,0,u),_.length!==0){for(let g=0,m=_.length;g<m;g++){const p=_[g];t?r.bufferSubData(a,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):r.bufferSubData(a,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(a,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(a,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(r.deleteBuffer(d.buffer),n.delete(h))}function l(h,d){if(h.isGLBufferAttribute){const u=n.get(h);(!u||u.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const a=n.get(h);if(a===void 0)n.set(h,i(h,d));else if(a.version<h.version){if(a.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(a.buffer,h,d),a.version=h.version}}return{get:o,remove:c,update:l}}class cc extends an{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,c=Math.floor(n),l=Math.floor(i),h=c+1,d=l+1,a=e/c,u=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<d;p++){const v=p*u-o;for(let x=0;x<h;x++){const T=x*a-s;_.push(T,-v,0),g.push(0,0,1),m.push(x/c),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<c;v++){const x=v+h*p,T=v+h*(p+1),I=v+1+h*(p+1),R=v+1+h*p;f.push(x,T,R),f.push(T,I,R)}this.setIndex(f),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
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
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qf=`#ifdef USE_AOMAP
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
#endif`,Yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`#ifdef USE_BATCHING
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
#endif`,Kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qf=`#ifdef USE_IRIDESCENCE
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
#endif`,ep=`#ifdef USE_BUMPMAP
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lp=`#define PI 3.141592653589793
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
} // validated`,up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
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
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`
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
}`,vp=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
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
}`,Rp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
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
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bp=`PhysicalMaterial material;
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
#endif`,kp=`struct PhysicalMaterial {
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
}`,Hp=`
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zp=`#if defined( USE_POINTS_UV )
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
#endif`,$p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,em=`#ifdef USE_MORPHNORMALS
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
#endif`,tm=`#ifdef USE_MORPHTARGETS
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
#endif`,nm=`#ifdef USE_MORPHTARGETS
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
#endif`,im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cm=`#ifdef USE_NORMALMAP
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
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Em=`float getShadowMask() {
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
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`#include <common>
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
}`,qm=`#if DEPTH_PACKING == 3200
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
}`,Ym=`#define DISTANCE
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
}`,jm=`#define DISTANCE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,e_=`uniform vec3 diffuse;
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
}`,t_=`#define LAMBERT
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
}`,n_=`#define LAMBERT
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
}`,i_=`#define MATCAP
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
}`,r_=`#define MATCAP
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
}`,s_=`#define NORMAL
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
}`,o_=`#define NORMAL
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
}`,a_=`#define PHONG
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
}`,c_=`#define PHONG
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
}`,l_=`#define STANDARD
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
}`,u_=`#define STANDARD
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
}`,h_=`#define TOON
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
}`,d_=`#define TOON
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
}`,f_=`uniform float size;
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#include <common>
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
}`,__=`uniform vec3 color;
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
}`,g_=`uniform float rotation;
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
}`,v_=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Hf,alphahash_pars_fragment:zf,alphamap_fragment:Gf,alphamap_pars_fragment:Vf,alphatest_fragment:Wf,alphatest_pars_fragment:Xf,aomap_fragment:qf,aomap_pars_fragment:Yf,batching_pars_vertex:jf,batching_vertex:Kf,begin_vertex:Zf,beginnormal_vertex:$f,bsdfs:Jf,iridescence_fragment:Qf,bumpmap_pars_fragment:ep,clipping_planes_fragment:tp,clipping_planes_pars_fragment:np,clipping_planes_pars_vertex:ip,clipping_planes_vertex:rp,color_fragment:sp,color_pars_fragment:op,color_pars_vertex:ap,color_vertex:cp,common:lp,cube_uv_reflection_fragment:up,defaultnormal_vertex:hp,displacementmap_pars_vertex:dp,displacementmap_vertex:fp,emissivemap_fragment:pp,emissivemap_pars_fragment:mp,colorspace_fragment:_p,colorspace_pars_fragment:gp,envmap_fragment:vp,envmap_common_pars_fragment:xp,envmap_pars_fragment:yp,envmap_pars_vertex:Mp,envmap_physical_pars_fragment:Dp,envmap_vertex:Sp,fog_vertex:Tp,fog_pars_vertex:Ep,fog_fragment:Ap,fog_pars_fragment:bp,gradientmap_pars_fragment:wp,lightmap_fragment:Rp,lightmap_pars_fragment:Cp,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Pp,lights_pars_begin:Ip,lights_toon_fragment:Np,lights_toon_pars_fragment:Up,lights_phong_fragment:Op,lights_phong_pars_fragment:Fp,lights_physical_fragment:Bp,lights_physical_pars_fragment:kp,lights_fragment_begin:Hp,lights_fragment_maps:zp,lights_fragment_end:Gp,logdepthbuf_fragment:Vp,logdepthbuf_pars_fragment:Wp,logdepthbuf_pars_vertex:Xp,logdepthbuf_vertex:qp,map_fragment:Yp,map_pars_fragment:jp,map_particle_fragment:Kp,map_particle_pars_fragment:Zp,metalnessmap_fragment:$p,metalnessmap_pars_fragment:Jp,morphcolor_vertex:Qp,morphnormal_vertex:em,morphtarget_pars_vertex:tm,morphtarget_vertex:nm,normal_fragment_begin:im,normal_fragment_maps:rm,normal_pars_fragment:sm,normal_pars_vertex:om,normal_vertex:am,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:hm,iridescence_pars_fragment:dm,opaque_fragment:fm,packing:pm,premultiplied_alpha_fragment:mm,project_vertex:_m,dithering_fragment:gm,dithering_pars_fragment:vm,roughnessmap_fragment:xm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:Mm,shadowmap_pars_vertex:Sm,shadowmap_vertex:Tm,shadowmask_pars_fragment:Em,skinbase_vertex:Am,skinning_pars_vertex:bm,skinning_vertex:wm,skinnormal_vertex:Rm,specularmap_fragment:Cm,specularmap_pars_fragment:Lm,tonemapping_fragment:Pm,tonemapping_pars_fragment:Im,transmission_fragment:Dm,transmission_pars_fragment:Nm,uv_pars_fragment:Um,uv_pars_vertex:Om,uv_vertex:Fm,worldpos_vertex:Bm,background_vert:km,background_frag:Hm,backgroundCube_vert:zm,backgroundCube_frag:Gm,cube_vert:Vm,cube_frag:Wm,depth_vert:Xm,depth_frag:qm,distanceRGBA_vert:Ym,distanceRGBA_frag:jm,equirect_vert:Km,equirect_frag:Zm,linedashed_vert:$m,linedashed_frag:Jm,meshbasic_vert:Qm,meshbasic_frag:e_,meshlambert_vert:t_,meshlambert_frag:n_,meshmatcap_vert:i_,meshmatcap_frag:r_,meshnormal_vert:s_,meshnormal_frag:o_,meshphong_vert:a_,meshphong_frag:c_,meshphysical_vert:l_,meshphysical_frag:u_,meshtoon_vert:h_,meshtoon_frag:d_,points_vert:f_,points_frag:p_,shadow_vert:m_,shadow_frag:__,sprite_vert:g_,sprite_frag:v_},ce={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},zn={basic:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Kt([ce.points,ce.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Kt([ce.common,ce.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Kt([ce.sprite,ce.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Kt([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Kt([ce.lights,ce.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};zn.physical={uniforms:Kt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ao={r:0,b:0,g:0};function x_(r,e,t,n,i,s,o){const c=new Be(0);let l=s===!0?0:1,h,d,a=null,u=0,f=null;function _(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?g(c,l):x&&x.isColor&&(g(x,1),v=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Uo)?(d===void 0&&(d=new Xt(new Kr(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Vr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=ot.getTransfer(x.colorSpace)!==mt,(a!==x||u!==x.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,a=x,u=x.version,f=r.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Xt(new cc(2,2),new li({name:"BackgroundMaterial",uniforms:Vr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ot.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(a!==x||u!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,a=x,u=x.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function g(m,p){m.getRGB(ao,ah(r)),n.buffers.color.setClear(ao.r,ao.g,ao.b,p,o)}return{getClearColor:function(){return c},setClearColor:function(m,p=1){c.set(m),l=p,g(c,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(c,l)},render:_}}function y_(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,c={},l=m(null);let h=l,d=!1;function a(N,G,Y,Z,j){let K=!1;if(o){const $=g(Z,Y,G);h!==$&&(h=$,f(h.object)),K=p(N,Z,Y,j),K&&v(N,Z,Y,j)}else{const $=G.wireframe===!0;(h.geometry!==Z.id||h.program!==Y.id||h.wireframe!==$)&&(h.geometry=Z.id,h.program=Y.id,h.wireframe=$,K=!0)}j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(K||d)&&(d=!1,O(N,G,Y,Z),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function g(N,G,Y){const Z=Y.wireframe===!0;let j=c[N.id];j===void 0&&(j={},c[N.id]=j);let K=j[G.id];K===void 0&&(K={},j[G.id]=K);let $=K[Z];return $===void 0&&($=m(u()),K[Z]=$),$}function m(N){const G=[],Y=[],Z=[];for(let j=0;j<i;j++)G[j]=0,Y[j]=0,Z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:Z,object:N,attributes:{},index:null}}function p(N,G,Y,Z){const j=h.attributes,K=G.attributes;let $=0;const oe=Y.getAttributes();for(const se in oe)if(oe[se].location>=0){const J=j[se];let fe=K[se];if(fe===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(fe=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(fe=N.instanceColor)),J===void 0||J.attribute!==fe||fe&&J.data!==fe.data)return!0;$++}return h.attributesNum!==$||h.index!==Z}function v(N,G,Y,Z){const j={},K=G.attributes;let $=0;const oe=Y.getAttributes();for(const se in oe)if(oe[se].location>=0){let J=K[se];J===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));const fe={};fe.attribute=J,J&&J.data&&(fe.data=J.data),j[se]=fe,$++}h.attributes=j,h.attributesNum=$,h.index=Z}function x(){const N=h.newAttributes;for(let G=0,Y=N.length;G<Y;G++)N[G]=0}function T(N){I(N,0)}function I(N,G){const Y=h.newAttributes,Z=h.enabledAttributes,j=h.attributeDivisors;Y[N]=1,Z[N]===0&&(r.enableVertexAttribArray(N),Z[N]=1),j[N]!==G&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,G),j[N]=G)}function R(){const N=h.newAttributes,G=h.enabledAttributes;for(let Y=0,Z=G.length;Y<Z;Y++)G[Y]!==N[Y]&&(r.disableVertexAttribArray(Y),G[Y]=0)}function L(N,G,Y,Z,j,K,$){$===!0?r.vertexAttribIPointer(N,G,Y,j,K):r.vertexAttribPointer(N,G,Y,Z,j,K)}function O(N,G,Y,Z){if(n.isWebGL2===!1&&(N.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const j=Z.attributes,K=Y.getAttributes(),$=G.defaultAttributeValues;for(const oe in K){const se=K[oe];if(se.location>=0){let q=j[oe];if(q===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(q=N.instanceColor)),q!==void 0){const J=q.normalized,fe=q.itemSize,Te=t.get(q);if(Te===void 0)continue;const pe=Te.buffer,De=Te.type,xe=Te.bytesPerElement,ye=n.isWebGL2===!0&&(De===r.INT||De===r.UNSIGNED_INT||q.gpuType===Vu);if(q.isInterleavedBufferAttribute){const Ye=q.data,B=Ye.stride,xt=q.offset;if(Ye.isInstancedInterleavedBuffer){for(let Ee=0;Ee<se.locationSize;Ee++)I(se.location+Ee,Ye.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Ee=0;Ee<se.locationSize;Ee++)T(se.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let Ee=0;Ee<se.locationSize;Ee++)L(se.location+Ee,fe/se.locationSize,De,J,B*xe,(xt+fe/se.locationSize*Ee)*xe,ye)}else{if(q.isInstancedBufferAttribute){for(let Ye=0;Ye<se.locationSize;Ye++)I(se.location+Ye,q.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ye=0;Ye<se.locationSize;Ye++)T(se.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let Ye=0;Ye<se.locationSize;Ye++)L(se.location+Ye,fe/se.locationSize,De,J,fe*xe,fe/se.locationSize*Ye*xe,ye)}}else if($!==void 0){const J=$[oe];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(se.location,J);break;case 3:r.vertexAttrib3fv(se.location,J);break;case 4:r.vertexAttrib4fv(se.location,J);break;default:r.vertexAttrib1fv(se.location,J)}}}}R()}function y(){X();for(const N in c){const G=c[N];for(const Y in G){const Z=G[Y];for(const j in Z)_(Z[j].object),delete Z[j];delete G[Y]}delete c[N]}}function b(N){if(c[N.id]===void 0)return;const G=c[N.id];for(const Y in G){const Z=G[Y];for(const j in Z)_(Z[j].object),delete Z[j];delete G[Y]}delete c[N.id]}function V(N){for(const G in c){const Y=c[G];if(Y[N.id]===void 0)continue;const Z=Y[N.id];for(const j in Z)_(Z[j].object),delete Z[j];delete Y[N.id]}}function X(){ne(),d=!0,h!==l&&(h=l,f(h.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:a,reset:X,resetDefaultState:ne,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:T,disableUnusedAttributes:R}}function M_(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}function c(d,a){r.drawArrays(s,d,a),t.update(a,s,1)}function l(d,a,u){if(u===0)return;let f,_;if(i)f=r,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](s,d,a,u),t.update(a,s,u)}function h(d,a,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<u;_++)this.render(d[_],a[_]);else{f.multiDrawArraysWEBGL(s,d,0,a,0,u);let _=0;for(let g=0;g<u;g++)_+=a[g];t.update(_,s,1)}}this.setMode=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function S_(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const l=s(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const h=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,a=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,T=o||e.has("OES_texture_float"),I=x&&T,R=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:s,precision:c,logarithmicDepthBuffer:d,maxTextures:a,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:I,maxSamples:R}}function T_(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Si,c=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(a,u){const f=a.length!==0||u||n!==0||i;return i=u,n=a.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(a,u){t=d(a,u,0)},this.setState=function(a,u,f){const _=a.clippingPlanes,g=a.clipIntersection,m=a.clipShadows,p=r.get(a);if(!i||_===null||_.length===0||s&&!m)s?d(null):h();else{const v=s?0:n,x=v*4;let T=p.clippingState||null;l.value=T,T=d(_,u,x,f);for(let I=0;I!==x;++I)T[I]=t[I];p.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(a,u,f,_){const g=a!==null?a.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,v=u.matrixWorldInverse;c.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,T=f;x!==g;++x,T+=4)o.copy(a[x]).applyMatrix4(v,c),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function E_(r){let e=new WeakMap;function t(o,c){return c===Ua?o.mapping=Fr:c===Oa&&(o.mapping=Br),o}function n(o){if(o&&o.isTexture){const c=o.mapping;if(c===Ua||c===Oa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Of(l.height/2);return h.fromEquirectangularTexture(r,o),e.set(o,h),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const c=o.target;c.removeEventListener("dispose",i);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class lc extends ch{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,c=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,c-=d*this.view.offsetY,l=c-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cr=4,wl=[.125,.215,.35,.446,.526,.582],Xi=20,fa=new lc,Rl=new Be;let pa=null,ma=0,_a=0;const Gi=(1+Math.sqrt(5))/2,Tr=1/Gi,Cl=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Gi,Tr),new C(0,Gi,-Tr),new C(Tr,0,Gi),new C(-Tr,0,Gi),new C(Gi,Tr,0),new C(-Gi,Tr,0)];class Ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pa,ma,_a),e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fr||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ts,format:Tn,colorSpace:Ut,depthBuffer:!1},i=Pl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A_(s)),this._blurMaterial=b_(s,e,t)}return i}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,n,i){const c=new $t(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,a=d.autoClear,u=d.toneMapping;d.getClearColor(Rl),d.toneMapping=Ri,d.autoClear=!1;const f=new un({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new Xt(new Kr,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Rl),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(c.up.set(0,l[p],0),c.lookAt(h[p],0,0)):v===1?(c.up.set(0,0,l[p]),c.lookAt(0,h[p],0)):(c.up.set(0,l[p],0),c.lookAt(0,0,h[p]));const x=this._cubeSize;co(i,v*x,p>2?x:0,x,x),d.setRenderTarget(i),g&&d.render(_,c),d.render(e,c)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=u,d.autoClear=a,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fr||e.mapping===Br;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Il());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const l=this._cubeSize;co(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Cl[(i-1)%Cl.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,c){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,a=new Xt(this._lodPlanes[i],h),u=h.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),g=s/_,m=isFinite(s)?1+Math.floor(d*g):Xi;m>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const p=[];let v=0;for(let L=0;L<Xi;++L){const O=L/g,y=Math.exp(-O*O/2);p.push(y),L===0?v+=y:L<m&&(v+=2*y)}for(let L=0;L<p.length;L++)p[L]=p[L]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",c&&(u.poleAxis.value=c);const{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-n;const T=this._sizeLods[i],I=3*T*(i>x-Cr?i-x+Cr:0),R=4*(this._cubeSize-T);co(t,I,R,3*T,2*T),l.setRenderTarget(t),l.render(a,fa)}}function A_(r){const e=[],t=[],n=[];let i=r;const s=r-Cr+1+wl.length;for(let o=0;o<s;o++){const c=Math.pow(2,i);t.push(c);let l=1/c;o>r-Cr?l=wl[o-r+Cr-1]:o===0&&(l=0),n.push(l);const h=1/(c-2),d=-h,a=1+h,u=[d,d,a,d,a,a,d,d,a,a,d,a],f=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*f),x=new Float32Array(m*_*f),T=new Float32Array(p*_*f);for(let R=0;R<f;R++){const L=R%3*2/3-1,O=R>2?0:-1,y=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];v.set(y,g*_*R),x.set(u,m*_*R);const b=[R,R,R,R,R,R];T.set(b,p*_*R)}const I=new an;I.setAttribute("position",new yt(v,g)),I.setAttribute("uv",new yt(x,m)),I.setAttribute("faceIndex",new yt(T,p)),e.push(I),i>Cr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pl(r,e,t){const n=new er(r,e,t);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function b_(r,e,t){const n=new Float32Array(Xi),i=new C(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Il(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Dl(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function w_(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const l=c.mapping,h=l===Ua||l===Oa,d=l===Fr||l===Br;if(h||d)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let a=e.get(c);return t===null&&(t=new Ll(r)),a=h?t.fromEquirectangular(c,a):t.fromCubemap(c,a),e.set(c,a),a.texture}else{if(e.has(c))return e.get(c).texture;{const a=c.image;if(h&&a&&a.height>0||d&&a&&i(a)){t===null&&(t=new Ll(r));const u=h?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,u),c.addEventListener("dispose",s),u.texture}else return null}}}return c}function i(c){let l=0;const h=6;for(let d=0;d<h;d++)c[d]!==void 0&&l++;return l===h}function s(c){const l=c.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function R_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function C_(r,e,t,n){const i={},s=new WeakMap;function o(a){const u=a.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function c(a,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(a){const u=a.attributes;for(const _ in u)e.update(u[_],r.ARRAY_BUFFER);const f=a.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],r.ARRAY_BUFFER)}}function h(a){const u=[],f=a.index,_=a.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let x=0,T=v.length;x<T;x+=3){const I=v[x+0],R=v[x+1],L=v[x+2];u.push(I,R,R,L,L,I)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,T=v.length/3-1;x<T;x+=3){const I=x+0,R=x+1,L=x+2;u.push(I,R,R,L,L,I)}}else return;const m=new(eh(u)?oh:sh)(u,1);m.version=g;const p=s.get(a);p&&e.remove(p),s.set(a,m)}function d(a){const u=s.get(a);if(u){const f=a.index;f!==null&&u.version<f.version&&h(a)}else h(a);return s.get(a)}return{get:c,update:l,getWireframeAttribute:d}}function L_(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let c,l;function h(f){c=f.type,l=f.bytesPerElement}function d(f,_){r.drawElements(s,_,c,f*l),t.update(_,s,1)}function a(f,_,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,_,c,f*l,g),t.update(_,s,g)}function u(f,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(f[p]/l,_[p]);else{m.multiDrawElementsWEBGL(s,_,0,c,f,0,g);let p=0;for(let v=0;v<g;v++)p+=_[v];t.update(p,s,1)}}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=a,this.renderMultiDraw=u}function P_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,c){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function I_(r,e){return r[0]-e[0]}function D_(r,e){return Math.abs(e[1])-Math.abs(r[1])}function N_(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new ft,c=[];for(let h=0;h<8;h++)c[h]=[h,0];function l(h,d,a){const u=h.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(d);if(m===void 0||m.count!==g){let G=function(){ne.dispose(),s.delete(d),d.removeEventListener("dispose",G)};var f=G;m!==void 0&&m.texture.dispose();const x=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,I=d.morphAttributes.color!==void 0,R=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let y=0;x===!0&&(y=1),T===!0&&(y=2),I===!0&&(y=3);let b=d.attributes.position.count*y,V=1;b>e.maxTextureSize&&(V=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const X=new Float32Array(b*V*4*g),ne=new ih(X,b,V,g);ne.type=si,ne.needsUpdate=!0;const N=y*4;for(let Y=0;Y<g;Y++){const Z=R[Y],j=L[Y],K=O[Y],$=b*V*4*Y;for(let oe=0;oe<Z.count;oe++){const se=oe*N;x===!0&&(o.fromBufferAttribute(Z,oe),X[$+se+0]=o.x,X[$+se+1]=o.y,X[$+se+2]=o.z,X[$+se+3]=0),T===!0&&(o.fromBufferAttribute(j,oe),X[$+se+4]=o.x,X[$+se+5]=o.y,X[$+se+6]=o.z,X[$+se+7]=0),I===!0&&(o.fromBufferAttribute(K,oe),X[$+se+8]=o.x,X[$+se+9]=o.y,X[$+se+10]=o.z,X[$+se+11]=K.itemSize===4?o.w:1)}}m={count:g,texture:ne,size:new ke(b,V)},s.set(d,m),d.addEventListener("dispose",G)}let p=0;for(let x=0;x<u.length;x++)p+=u[x];const v=d.morphTargetsRelative?1:1-p;a.getUniforms().setValue(r,"morphTargetBaseInfluence",v),a.getUniforms().setValue(r,"morphTargetInfluences",u),a.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),a.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const _=u===void 0?0:u.length;let g=n[d.id];if(g===void 0||g.length!==_){g=[];for(let T=0;T<_;T++)g[T]=[T,0];n[d.id]=g}for(let T=0;T<_;T++){const I=g[T];I[0]=T,I[1]=u[T]}g.sort(D_);for(let T=0;T<8;T++)T<_&&g[T][1]?(c[T][0]=g[T][0],c[T][1]=g[T][1]):(c[T][0]=Number.MAX_SAFE_INTEGER,c[T][1]=0);c.sort(I_);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let v=0;for(let T=0;T<8;T++){const I=c[T],R=I[0],L=I[1];R!==Number.MAX_SAFE_INTEGER&&L?(m&&d.getAttribute("morphTarget"+T)!==m[R]&&d.setAttribute("morphTarget"+T,m[R]),p&&d.getAttribute("morphNormal"+T)!==p[R]&&d.setAttribute("morphNormal"+T,p[R]),i[T]=L,v+=L):(m&&d.hasAttribute("morphTarget"+T)===!0&&d.deleteAttribute("morphTarget"+T),p&&d.hasAttribute("morphNormal"+T)===!0&&d.deleteAttribute("morphNormal"+T),i[T]=0)}const x=d.morphTargetsRelative?1:1-v;a.getUniforms().setValue(r,"morphTargetBaseInfluence",x),a.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function U_(r,e,t,n){let i=new WeakMap;function s(l){const h=n.render.frame,d=l.geometry,a=e.get(l,d);if(i.get(a)!==h&&(e.update(a),i.set(a,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),i.get(l)!==h&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==h&&(u.update(),i.set(u,h))}return a}function o(){i=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}class uh extends zt{constructor(e,t,n,i,s,o,c,l,h,d){if(d=d!==void 0?d:Zi,d!==Zi&&d!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Zi&&(n=Ei),n===void 0&&d===Hr&&(n=Ki),super(null,i,s,o,c,l,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hh=new zt,dh=new uh(1,1);dh.compareFunction=Qu;const fh=new ih,ph=new xf,mh=new oc,Nl=[],Ul=[],Ol=new Float32Array(16),Fl=new Float32Array(9),Bl=new Float32Array(4);function Zr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Nl[i];if(s===void 0&&(s=new Float32Array(i),Nl[i]=s),e!==0){n.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,r[o].toArray(s,c)}return s}function Ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Lt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Bo(r,e){let t=Ul[e];t===void 0&&(t=new Int32Array(e),Ul[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function O_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function F_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2fv(this.addr,e),Lt(t,e)}}function B_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;r.uniform3fv(this.addr,e),Lt(t,e)}}function k_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4fv(this.addr,e),Lt(t,e)}}function H_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,n))return;Bl.set(n),r.uniformMatrix2fv(this.addr,!1,Bl),Lt(t,n)}}function z_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,n))return;Fl.set(n),r.uniformMatrix3fv(this.addr,!1,Fl),Lt(t,n)}}function G_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,n))return;Ol.set(n),r.uniformMatrix4fv(this.addr,!1,Ol),Lt(t,n)}}function V_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function W_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2iv(this.addr,e),Lt(t,e)}}function X_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3iv(this.addr,e),Lt(t,e)}}function q_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4iv(this.addr,e),Lt(t,e)}}function Y_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function j_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2uiv(this.addr,e),Lt(t,e)}}function K_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3uiv(this.addr,e),Lt(t,e)}}function Z_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4uiv(this.addr,e),Lt(t,e)}}function $_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?dh:hh;t.setTexture2D(e||s,i)}function J_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ph,i)}function Q_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mh,i)}function eg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fh,i)}function tg(r){switch(r){case 5126:return O_;case 35664:return F_;case 35665:return B_;case 35666:return k_;case 35674:return H_;case 35675:return z_;case 35676:return G_;case 5124:case 35670:return V_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return Y_;case 36294:return j_;case 36295:return K_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return eg}}function ng(r,e){r.uniform1fv(this.addr,e)}function ig(r,e){const t=Zr(e,this.size,2);r.uniform2fv(this.addr,t)}function rg(r,e){const t=Zr(e,this.size,3);r.uniform3fv(this.addr,t)}function sg(r,e){const t=Zr(e,this.size,4);r.uniform4fv(this.addr,t)}function og(r,e){const t=Zr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ag(r,e){const t=Zr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cg(r,e){const t=Zr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function lg(r,e){r.uniform1iv(this.addr,e)}function ug(r,e){r.uniform2iv(this.addr,e)}function hg(r,e){r.uniform3iv(this.addr,e)}function dg(r,e){r.uniform4iv(this.addr,e)}function fg(r,e){r.uniform1uiv(this.addr,e)}function pg(r,e){r.uniform2uiv(this.addr,e)}function mg(r,e){r.uniform3uiv(this.addr,e)}function _g(r,e){r.uniform4uiv(this.addr,e)}function gg(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||hh,s[o])}function vg(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ph,s[o])}function xg(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||mh,s[o])}function yg(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||fh,s[o])}function Mg(r){switch(r){case 5126:return ng;case 35664:return ig;case 35665:return rg;case 35666:return sg;case 35674:return og;case 35675:return ag;case 35676:return cg;case 5124:case 35670:return lg;case 35667:case 35671:return ug;case 35668:case 35672:return hg;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return yg}}class Sg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tg(t.type)}}class Tg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mg(t.type)}}class Eg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function kl(r,e){r.seq.push(e),r.map[e.id]=e}function Ag(r,e,t){const n=r.name,i=n.length;for(ga.lastIndex=0;;){const s=ga.exec(n),o=ga.lastIndex;let c=s[1];const l=s[2]==="]",h=s[3];if(l&&(c=c|0),h===void 0||h==="["&&o+2===i){kl(t,h===void 0?new Sg(c,r,e):new Tg(c,r,e));break}else{let a=t.map[c];a===void 0&&(a=new Eg(c),kl(t,a)),t=a}}}class So{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ag(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const c=t[s],l=n[c.id];l.needsUpdate!==!1&&c.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Hl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const bg=37297;let wg=0;function Rg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}function Cg(r){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(r);let n;switch(e===t?n="":e===Ro&&t===wo?n="LinearDisplayP3ToLinearSRGB":e===wo&&t===Ro&&(n="LinearSRGBToLinearDisplayP3"),r){case Ut:case Oo:return[n,"LinearTransferOETF"];case vt:case nc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function zl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Rg(r.getShaderSource(e),o)}else return i}function Lg(r,e){const t=Cg(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Pg(r,e){let t;switch(e){case Ed:t="Linear";break;case Ad:t="Reinhard";break;case bd:t="OptimizedCineon";break;case Hu:t="ACESFilmic";break;case Rd:t="AgX";break;case wd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ig(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lr).join(`
`)}function Dg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Lr).join(`
`)}function Ng(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ug(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:c}}return t}function Lr(r){return r!==""}function Gl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(r){return r.replace(Og,Bg)}const Fg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bg(r,e){let t=qe[e];if(t===void 0){const n=Fg.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ga(t)}const kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wl(r){return r.replace(kg,Hg)}function Hg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Bu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Jh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Gg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fr:case Br:e="ENVMAP_TYPE_CUBE";break;case Uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Br:e="ENVMAP_MODE_REFRACTION";break}return e}function Wg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ku:e="ENVMAP_BLENDING_MULTIPLY";break;case Sd:e="ENVMAP_BLENDING_MIX";break;case Td:e="ENVMAP_BLENDING_ADD";break}return e}function Xg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qg(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,c=t.fragmentShader;const l=zg(t),h=Gg(t),d=Vg(t),a=Wg(t),u=Xg(t),f=t.isWebGL2?"":Ig(t),_=Dg(t),g=Ng(s),m=i.createProgram();let p,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lr).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lr).join(`
`),v.length>0&&(v+=`
`)):(p=[Xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),v=[f,Xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+a:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?qe.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Pg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Lg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),o=Ga(o),o=Gl(o,t),o=Vl(o,t),c=Ga(c),c=Gl(c,t),c=Vl(c,t),o=Wl(o),c=Wl(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const T=x+p+o,I=x+v+c,R=Hl(i,i.VERTEX_SHADER,T),L=Hl(i,i.FRAGMENT_SHADER,I);i.attachShader(m,R),i.attachShader(m,L),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(X){if(r.debug.checkShaderErrors){const ne=i.getProgramInfoLog(m).trim(),N=i.getShaderInfoLog(R).trim(),G=i.getShaderInfoLog(L).trim();let Y=!0,Z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,R,L);else{const j=zl(i,R,"vertex"),K=zl(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+j+`
`+K)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(N===""||G==="")&&(Z=!1);Z&&(X.diagnostics={runnable:Y,programLog:ne,vertexShader:{log:N,prefix:p},fragmentShader:{log:G,prefix:v}})}i.deleteShader(R),i.deleteShader(L),y=new So(i,m),b=Ug(i,m)}let y;this.getUniforms=function(){return y===void 0&&O(this),y};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=i.getProgramParameter(m,bg)),V},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=L,this}let Yg=0;class jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kg(e),t.set(e,n)),n}}class Kg{constructor(e){this.id=Yg++,this.code=e,this.usedTimes=0}}function Zg(r,e,t,n,i,s,o){const c=new sc,l=new jg,h=[],d=i.isWebGL2,a=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,b,V,X,ne){const N=X.fog,G=ne.geometry,Y=y.isMeshStandardMaterial?X.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),j=Z&&Z.mapping===Uo?Z.image.height:null,K=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const $=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=$!==void 0?$.length:0;let se=0;G.morphAttributes.position!==void 0&&(se=1),G.morphAttributes.normal!==void 0&&(se=2),G.morphAttributes.color!==void 0&&(se=3);let q,J,fe,Te;if(K){const Ot=zn[K];q=Ot.vertexShader,J=Ot.fragmentShader}else q=y.vertexShader,J=y.fragmentShader,l.update(y),fe=l.getVertexShaderID(y),Te=l.getFragmentShaderID(y);const pe=r.getRenderTarget(),De=ne.isInstancedMesh===!0,xe=ne.isBatchedMesh===!0,ye=!!y.map,Ye=!!y.matcap,B=!!Z,xt=!!y.aoMap,Ee=!!y.lightMap,Ue=!!y.bumpMap,me=!!y.normalMap,nt=!!y.displacementMap,He=!!y.emissiveMap,w=!!y.metalnessMap,S=!!y.roughnessMap,F=y.anisotropy>0,ie=y.clearcoat>0,te=y.iridescence>0,re=y.sheen>0,Me=y.transmission>0,he=F&&!!y.anisotropyMap,ge=ie&&!!y.clearcoatMap,Ce=ie&&!!y.clearcoatNormalMap,ze=ie&&!!y.clearcoatRoughnessMap,ee=te&&!!y.iridescenceMap,et=te&&!!y.iridescenceThicknessMap,Ve=re&&!!y.sheenColorMap,Fe=re&&!!y.sheenRoughnessMap,be=!!y.specularMap,ve=!!y.specularColorMap,Ge=!!y.specularIntensityMap,it=Me&&!!y.transmissionMap,dt=Me&&!!y.thicknessMap,Xe=!!y.gradientMap,ae=!!y.alphaMap,D=y.alphaTest>0,ue=!!y.alphaHash,le=!!y.extensions,Oe=!!G.attributes.uv1,Re=!!G.attributes.uv2,lt=!!G.attributes.uv3;let at=Ri;return y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(at=r.toneMapping),{isWebGL2:d,shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:J,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:Te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:xe,instancing:De,instancingColor:De&&ne.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ut,map:ye,matcap:Ye,envMap:B,envMapMode:B&&Z.mapping,envMapCubeUVHeight:j,aoMap:xt,lightMap:Ee,bumpMap:Ue,normalMap:me,displacementMap:u&&nt,emissiveMap:He,normalMapObjectSpace:me&&y.normalMapType===Xd,normalMapTangentSpace:me&&y.normalMapType===Ju,metalnessMap:w,roughnessMap:S,anisotropy:F,anisotropyMap:he,clearcoat:ie,clearcoatMap:ge,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ze,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:et,sheen:re,sheenColorMap:Ve,sheenRoughnessMap:Fe,specularMap:be,specularColorMap:ve,specularIntensityMap:Ge,transmission:Me,transmissionMap:it,thicknessMap:dt,gradientMap:Xe,opaque:y.transparent===!1&&y.blending===ji,alphaMap:ae,alphaTest:D,alphaHash:ue,combine:y.combine,mapUv:ye&&g(y.map.channel),aoMapUv:xt&&g(y.aoMap.channel),lightMapUv:Ee&&g(y.lightMap.channel),bumpMapUv:Ue&&g(y.bumpMap.channel),normalMapUv:me&&g(y.normalMap.channel),displacementMapUv:nt&&g(y.displacementMap.channel),emissiveMapUv:He&&g(y.emissiveMap.channel),metalnessMapUv:w&&g(y.metalnessMap.channel),roughnessMapUv:S&&g(y.roughnessMap.channel),anisotropyMapUv:he&&g(y.anisotropyMap.channel),clearcoatMapUv:ge&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(y.sheenRoughnessMap.channel),specularMapUv:be&&g(y.specularMap.channel),specularColorMapUv:ve&&g(y.specularColorMap.channel),specularIntensityMapUv:Ge&&g(y.specularIntensityMap.channel),transmissionMapUv:it&&g(y.transmissionMap.channel),thicknessMapUv:dt&&g(y.thicknessMap.channel),alphaMapUv:ae&&g(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(me||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Re,vertexUv3s:lt,pointsUvs:ne.isPoints===!0&&!!G.attributes.uv&&(ye||ae),fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:a,skinning:ne.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ye&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vn,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:le&&y.extensions.derivatives===!0,extensionFragDepth:le&&y.extensions.fragDepth===!0,extensionDrawBuffers:le&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const V in y.defines)b.push(V),b.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(v(b,y),x(b,y),b.push(r.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function v(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){c.disableAll(),b.isWebGL2&&c.enable(0),b.supportsVertexTextures&&c.enable(1),b.instancing&&c.enable(2),b.instancingColor&&c.enable(3),b.matcap&&c.enable(4),b.envMap&&c.enable(5),b.normalMapObjectSpace&&c.enable(6),b.normalMapTangentSpace&&c.enable(7),b.clearcoat&&c.enable(8),b.iridescence&&c.enable(9),b.alphaTest&&c.enable(10),b.vertexColors&&c.enable(11),b.vertexAlphas&&c.enable(12),b.vertexUv1s&&c.enable(13),b.vertexUv2s&&c.enable(14),b.vertexUv3s&&c.enable(15),b.vertexTangents&&c.enable(16),b.anisotropy&&c.enable(17),b.alphaHash&&c.enable(18),b.batching&&c.enable(19),y.push(c.mask),c.disableAll(),b.fog&&c.enable(0),b.useFog&&c.enable(1),b.flatShading&&c.enable(2),b.logarithmicDepthBuffer&&c.enable(3),b.skinning&&c.enable(4),b.morphTargets&&c.enable(5),b.morphNormals&&c.enable(6),b.morphColors&&c.enable(7),b.premultipliedAlpha&&c.enable(8),b.shadowMapEnabled&&c.enable(9),b.useLegacyLights&&c.enable(10),b.doubleSided&&c.enable(11),b.flipSided&&c.enable(12),b.useDepthPacking&&c.enable(13),b.dithering&&c.enable(14),b.transmission&&c.enable(15),b.sheen&&c.enable(16),b.opaque&&c.enable(17),b.pointsUvs&&c.enable(18),b.decodeVideoTexture&&c.enable(19),y.push(c.mask)}function T(y){const b=_[y.type];let V;if(b){const X=zn[b];V=If.clone(X.uniforms)}else V=y.uniforms;return V}function I(y,b){let V;for(let X=0,ne=h.length;X<ne;X++){const N=h[X];if(N.cacheKey===b){V=N,++V.usedTimes;break}}return V===void 0&&(V=new qg(r,b,y,s),h.push(V)),V}function R(y){if(--y.usedTimes===0){const b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function L(y){l.remove(y)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:I,releaseProgram:R,releaseShaderCache:L,programs:h,dispose:O}}function $g(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,c){r.get(s)[o]=c}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Jg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ql(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(a,u,f,_,g,m){let p=r[e];return p===void 0?(p={id:a.id,object:a,geometry:u,material:f,groupOrder:_,renderOrder:a.renderOrder,z:g,group:m},r[e]=p):(p.id=a.id,p.object=a,p.geometry=u,p.material=f,p.groupOrder=_,p.renderOrder=a.renderOrder,p.z=g,p.group=m),e++,p}function c(a,u,f,_,g,m){const p=o(a,u,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(a,u,f,_,g,m){const p=o(a,u,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function h(a,u){t.length>1&&t.sort(a||Jg),n.length>1&&n.sort(u||ql),i.length>1&&i.sort(u||ql)}function d(){for(let a=e,u=r.length;a<u;a++){const f=r[a];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:d,sort:h}}function Qg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Yl,r.set(n,[o])):i>=s.length?(o=new Yl,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ev(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Be};break;case"SpotLight":t={position:new C,direction:new C,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function tv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let nv=0;function iv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function rv(r,e){const t=new ev,n=tv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new C);const s=new C,o=new Ke,c=new Ke;function l(d,a){let u=0,f=0,_=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let g=0,m=0,p=0,v=0,x=0,T=0,I=0,R=0,L=0,O=0,y=0;d.sort(iv);const b=a===!0?Math.PI:1;for(let X=0,ne=d.length;X<ne;X++){const N=d[X],G=N.color,Y=N.intensity,Z=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=G.r*Y*b,f+=G.g*Y*b,_+=G.b*Y*b;else if(N.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(N.sh.coefficients[K],Y);y++}else if(N.isDirectionalLight){const K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity*b),N.castShadow){const $=N.shadow,oe=n.get(N);oe.shadowBias=$.bias,oe.shadowNormalBias=$.normalBias,oe.shadowRadius=$.radius,oe.shadowMapSize=$.mapSize,i.directionalShadow[g]=oe,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=N.shadow.matrix,T++}i.directional[g]=K,g++}else if(N.isSpotLight){const K=t.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(G).multiplyScalar(Y*b),K.distance=Z,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,i.spot[p]=K;const $=N.shadow;if(N.map&&(i.spotLightMap[L]=N.map,L++,$.updateMatrices(N),N.castShadow&&O++),i.spotLightMatrix[p]=$.matrix,N.castShadow){const oe=n.get(N);oe.shadowBias=$.bias,oe.shadowNormalBias=$.normalBias,oe.shadowRadius=$.radius,oe.shadowMapSize=$.mapSize,i.spotShadow[p]=oe,i.spotShadowMap[p]=j,R++}p++}else if(N.isRectAreaLight){const K=t.get(N);K.color.copy(G).multiplyScalar(Y),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=K,v++}else if(N.isPointLight){const K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity*b),K.distance=N.distance,K.decay=N.decay,N.castShadow){const $=N.shadow,oe=n.get(N);oe.shadowBias=$.bias,oe.shadowNormalBias=$.normalBias,oe.shadowRadius=$.radius,oe.shadowMapSize=$.mapSize,oe.shadowCameraNear=$.camera.near,oe.shadowCameraFar=$.camera.far,i.pointShadow[m]=oe,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=N.shadow.matrix,I++}i.point[m]=K,m++}else if(N.isHemisphereLight){const K=t.get(N);K.skyColor.copy(N.color).multiplyScalar(Y*b),K.groundColor.copy(N.groundColor).multiplyScalar(Y*b),i.hemi[x]=K,x++}}v>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=_;const V=i.hash;(V.directionalLength!==g||V.pointLength!==m||V.spotLength!==p||V.rectAreaLength!==v||V.hemiLength!==x||V.numDirectionalShadows!==T||V.numPointShadows!==I||V.numSpotShadows!==R||V.numSpotMaps!==L||V.numLightProbes!==y)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=R+L-O,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=y,V.directionalLength=g,V.pointLength=m,V.spotLength=p,V.rectAreaLength=v,V.hemiLength=x,V.numDirectionalShadows=T,V.numPointShadows=I,V.numSpotShadows=R,V.numSpotMaps=L,V.numLightProbes=y,i.version=nv++)}function h(d,a){let u=0,f=0,_=0,g=0,m=0;const p=a.matrixWorldInverse;for(let v=0,x=d.length;v<x;v++){const T=d[v];if(T.isDirectionalLight){const I=i.directional[u];I.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(p),u++}else if(T.isSpotLight){const I=i.spot[_];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(p),_++}else if(T.isRectAreaLight){const I=i.rectArea[g];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(p),c.identity(),o.copy(T.matrixWorld),o.premultiply(p),c.extractRotation(o),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),I.halfWidth.applyMatrix4(c),I.halfHeight.applyMatrix4(c),g++}else if(T.isPointLight){const I=i.point[f];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const I=i.hemi[m];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(p),m++}}}return{setup:l,setupView:h,state:i}}function jl(r,e){const t=new rv(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(a){n.push(a)}function c(a){i.push(a)}function l(a){t.setup(n,a)}function h(a){t.setupView(n,a)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:h,pushLight:o,pushShadow:c}}function sv(r,e){let t=new WeakMap;function n(s,o=0){const c=t.get(s);let l;return c===void 0?(l=new jl(r,e),t.set(s,[l])):o>=c.length?(l=new jl(r,e),c.push(l)):l=c[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ov extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class av extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lv=`uniform sampler2D shadow_pass;
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
}`;function uv(r,e,t){let n=new ac;const i=new ke,s=new ke,o=new ft,c=new ov({depthPacking:Wd}),l=new av,h={},d=t.maxTextureSize,a={[ci]:nn,[nn]:ci,[Vn]:Vn},u=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:cv,fragmentShader:lv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new an;_.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Xt(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bu;let p=this.type;this.render=function(R,L,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=r.getRenderTarget(),b=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),X=r.state;X.setBlending(wi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const ne=p!==ii&&this.type===ii,N=p===ii&&this.type!==ii;for(let G=0,Y=R.length;G<Y;G++){const Z=R[G],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const K=j.getFrameExtents();if(i.multiply(K),s.copy(j.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/K.x),i.x=s.x*K.x,j.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/K.y),i.y=s.y*K.y,j.mapSize.y=s.y)),j.map===null||ne===!0||N===!0){const oe=this.type!==ii?{minFilter:Nt,magFilter:Nt}:{};j.map!==null&&j.map.dispose(),j.map=new er(i.x,i.y,oe),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const $=j.getViewportCount();for(let oe=0;oe<$;oe++){const se=j.getViewport(oe);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),X.viewport(o),j.updateMatrices(Z,oe),n=j.getFrustum(),T(L,O,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===ii&&v(j,O),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,b,V)};function v(R,L){const O=e.update(g);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new er(i.x,i.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(L,null,O,u,g,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(L,null,O,f,g,null)}function x(R,L,O,y){let b=null;const V=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(V!==void 0)b=V;else if(b=O.isPointLight===!0?l:c,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const X=b.uuid,ne=L.uuid;let N=h[X];N===void 0&&(N={},h[X]=N);let G=N[ne];G===void 0&&(G=b.clone(),N[ne]=G,L.addEventListener("dispose",I)),b=G}if(b.visible=L.visible,b.wireframe=L.wireframe,y===ii?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:a[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const X=r.properties.get(b);X.light=O}return b}function T(R,L,O,y,b){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===ii)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const ne=e.update(R),N=R.material;if(Array.isArray(N)){const G=ne.groups;for(let Y=0,Z=G.length;Y<Z;Y++){const j=G[Y],K=N[j.materialIndex];if(K&&K.visible){const $=x(R,K,y,b);R.onBeforeShadow(r,R,L,O,ne,$,j),r.renderBufferDirect(O,null,ne,$,R,j),R.onAfterShadow(r,R,L,O,ne,$,j)}}}else if(N.visible){const G=x(R,N,y,b);R.onBeforeShadow(r,R,L,O,ne,G,null),r.renderBufferDirect(O,null,ne,G,R,null),R.onAfterShadow(r,R,L,O,ne,G,null)}}const X=R.children;for(let ne=0,N=X.length;ne<N;ne++)T(X[ne],L,O,y,b)}function I(R){R.target.removeEventListener("dispose",I);for(const O in h){const y=h[O],b=R.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function hv(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const ue=new ft;let le=null;const Oe=new ft(0,0,0,0);return{setMask:function(Re){le!==Re&&!D&&(r.colorMask(Re,Re,Re,Re),le=Re)},setLocked:function(Re){D=Re},setClear:function(Re,lt,at,Mt,Ot){Ot===!0&&(Re*=Mt,lt*=Mt,at*=Mt),ue.set(Re,lt,at,Mt),Oe.equals(ue)===!1&&(r.clearColor(Re,lt,at,Mt),Oe.copy(ue))},reset:function(){D=!1,le=null,Oe.set(-1,0,0,0)}}}function s(){let D=!1,ue=null,le=null,Oe=null;return{setTest:function(Re){Re?xe(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(Re){ue!==Re&&!D&&(r.depthMask(Re),ue=Re)},setFunc:function(Re){if(le!==Re){switch(Re){case md:r.depthFunc(r.NEVER);break;case _d:r.depthFunc(r.ALWAYS);break;case gd:r.depthFunc(r.LESS);break;case To:r.depthFunc(r.LEQUAL);break;case vd:r.depthFunc(r.EQUAL);break;case xd:r.depthFunc(r.GEQUAL);break;case yd:r.depthFunc(r.GREATER);break;case Md:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}le=Re}},setLocked:function(Re){D=Re},setClear:function(Re){Oe!==Re&&(r.clearDepth(Re),Oe=Re)},reset:function(){D=!1,ue=null,le=null,Oe=null}}}function o(){let D=!1,ue=null,le=null,Oe=null,Re=null,lt=null,at=null,Mt=null,Ot=null;return{setTest:function(ut){D||(ut?xe(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(ut){ue!==ut&&!D&&(r.stencilMask(ut),ue=ut)},setFunc:function(ut,St,fn){(le!==ut||Oe!==St||Re!==fn)&&(r.stencilFunc(ut,St,fn),le=ut,Oe=St,Re=fn)},setOp:function(ut,St,fn){(lt!==ut||at!==St||Mt!==fn)&&(r.stencilOp(ut,St,fn),lt=ut,at=St,Mt=fn)},setLocked:function(ut){D=ut},setClear:function(ut){Ot!==ut&&(r.clearStencil(ut),Ot=ut)},reset:function(){D=!1,ue=null,le=null,Oe=null,Re=null,lt=null,at=null,Mt=null,Ot=null}}}const c=new i,l=new s,h=new o,d=new WeakMap,a=new WeakMap;let u={},f={},_=new WeakMap,g=[],m=null,p=!1,v=null,x=null,T=null,I=null,R=null,L=null,O=null,y=new Be(0,0,0),b=0,V=!1,X=null,ne=null,N=null,G=null,Y=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,K=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),j=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=K>=2);let oe=null,se={};const q=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),fe=new ft().fromArray(q),Te=new ft().fromArray(J);function pe(D,ue,le,Oe){const Re=new Uint8Array(4),lt=r.createTexture();r.bindTexture(D,lt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<le;at++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(ue,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,Re):r.texImage2D(ue+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Re);return lt}const De={};De[r.TEXTURE_2D]=pe(r.TEXTURE_2D,r.TEXTURE_2D,1),De[r.TEXTURE_CUBE_MAP]=pe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[r.TEXTURE_2D_ARRAY]=pe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),De[r.TEXTURE_3D]=pe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),l.setClear(1),h.setClear(0),xe(r.DEPTH_TEST),l.setFunc(To),He(!1),w(Pc),xe(r.CULL_FACE),me(wi);function xe(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function ye(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Ye(D,ue){return f[D]!==ue?(r.bindFramebuffer(D,ue),f[D]=ue,n&&(D===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ue),D===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ue)),!0):!1}function B(D,ue){let le=g,Oe=!1;if(D)if(le=_.get(ue),le===void 0&&(le=[],_.set(ue,le)),D.isWebGLMultipleRenderTargets){const Re=D.texture;if(le.length!==Re.length||le[0]!==r.COLOR_ATTACHMENT0){for(let lt=0,at=Re.length;lt<at;lt++)le[lt]=r.COLOR_ATTACHMENT0+lt;le.length=Re.length,Oe=!0}}else le[0]!==r.COLOR_ATTACHMENT0&&(le[0]=r.COLOR_ATTACHMENT0,Oe=!0);else le[0]!==r.BACK&&(le[0]=r.BACK,Oe=!0);Oe&&(t.isWebGL2?r.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function xt(D){return m!==D?(r.useProgram(D),m=D,!0):!1}const Ee={[Wi]:r.FUNC_ADD,[ed]:r.FUNC_SUBTRACT,[td]:r.FUNC_REVERSE_SUBTRACT};if(n)Ee[Nc]=r.MIN,Ee[Uc]=r.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ee[Nc]=D.MIN_EXT,Ee[Uc]=D.MAX_EXT)}const Ue={[nd]:r.ZERO,[id]:r.ONE,[rd]:r.SRC_COLOR,[Da]:r.SRC_ALPHA,[ud]:r.SRC_ALPHA_SATURATE,[cd]:r.DST_COLOR,[od]:r.DST_ALPHA,[sd]:r.ONE_MINUS_SRC_COLOR,[Na]:r.ONE_MINUS_SRC_ALPHA,[ld]:r.ONE_MINUS_DST_COLOR,[ad]:r.ONE_MINUS_DST_ALPHA,[hd]:r.CONSTANT_COLOR,[dd]:r.ONE_MINUS_CONSTANT_COLOR,[fd]:r.CONSTANT_ALPHA,[pd]:r.ONE_MINUS_CONSTANT_ALPHA};function me(D,ue,le,Oe,Re,lt,at,Mt,Ot,ut){if(D===wi){p===!0&&(ye(r.BLEND),p=!1);return}if(p===!1&&(xe(r.BLEND),p=!0),D!==Qh){if(D!==v||ut!==V){if((x!==Wi||R!==Wi)&&(r.blendEquation(r.FUNC_ADD),x=Wi,R=Wi),ut)switch(D){case ji:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ia:r.blendFunc(r.ONE,r.ONE);break;case Ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ji:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ia:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,I=null,L=null,O=null,y.set(0,0,0),b=0,v=D,V=ut}return}Re=Re||ue,lt=lt||le,at=at||Oe,(ue!==x||Re!==R)&&(r.blendEquationSeparate(Ee[ue],Ee[Re]),x=ue,R=Re),(le!==T||Oe!==I||lt!==L||at!==O)&&(r.blendFuncSeparate(Ue[le],Ue[Oe],Ue[lt],Ue[at]),T=le,I=Oe,L=lt,O=at),(Mt.equals(y)===!1||Ot!==b)&&(r.blendColor(Mt.r,Mt.g,Mt.b,Ot),y.copy(Mt),b=Ot),v=D,V=!1}function nt(D,ue){D.side===Vn?ye(r.CULL_FACE):xe(r.CULL_FACE);let le=D.side===nn;ue&&(le=!le),He(le),D.blending===ji&&D.transparent===!1?me(wi):me(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),c.setMask(D.colorWrite);const Oe=D.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(D.stencilWriteMask),h.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),h.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),F(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){X!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),X=D)}function w(D){D!==Zh?(xe(r.CULL_FACE),D!==ne&&(D===Pc?r.cullFace(r.BACK):D===$h?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),ne=D}function S(D){D!==N&&(j&&r.lineWidth(D),N=D)}function F(D,ue,le){D?(xe(r.POLYGON_OFFSET_FILL),(G!==ue||Y!==le)&&(r.polygonOffset(ue,le),G=ue,Y=le)):ye(r.POLYGON_OFFSET_FILL)}function ie(D){D?xe(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function te(D){D===void 0&&(D=r.TEXTURE0+Z-1),oe!==D&&(r.activeTexture(D),oe=D)}function re(D,ue,le){le===void 0&&(oe===null?le=r.TEXTURE0+Z-1:le=oe);let Oe=se[le];Oe===void 0&&(Oe={type:void 0,texture:void 0},se[le]=Oe),(Oe.type!==D||Oe.texture!==ue)&&(oe!==le&&(r.activeTexture(le),oe=le),r.bindTexture(D,ue||De[D]),Oe.type=D,Oe.texture=ue)}function Me(){const D=se[oe];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function he(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(D){fe.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),fe.copy(D))}function it(D){Te.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Te.copy(D))}function dt(D,ue){let le=a.get(ue);le===void 0&&(le=new WeakMap,a.set(ue,le));let Oe=le.get(D);Oe===void 0&&(Oe=r.getUniformBlockIndex(ue,D.name),le.set(D,Oe))}function Xe(D,ue){const Oe=a.get(ue).get(D);d.get(ue)!==Oe&&(r.uniformBlockBinding(ue,Oe,D.__bindingPointIndex),d.set(ue,Oe))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},oe=null,se={},f={},_=new WeakMap,g=[],m=null,p=!1,v=null,x=null,T=null,I=null,R=null,L=null,O=null,y=new Be(0,0,0),b=0,V=!1,X=null,ne=null,N=null,G=null,Y=null,fe.set(0,0,r.canvas.width,r.canvas.height),Te.set(0,0,r.canvas.width,r.canvas.height),c.reset(),l.reset(),h.reset()}return{buffers:{color:c,depth:l,stencil:h},enable:xe,disable:ye,bindFramebuffer:Ye,drawBuffers:B,useProgram:xt,setBlending:me,setMaterial:nt,setFlipSided:He,setCullFace:w,setLineWidth:S,setPolygonOffset:F,setScissorTest:ie,activeTexture:te,bindTexture:re,unbindTexture:Me,compressedTexImage2D:he,compressedTexImage3D:ge,texImage2D:be,texImage3D:ve,updateUBOMapping:dt,uniformBlockBinding:Xe,texStorage2D:Ve,texStorage3D:Fe,texSubImage2D:Ce,texSubImage3D:ze,compressedTexSubImage2D:ee,compressedTexSubImage3D:et,scissor:Ge,viewport:it,reset:ae}}function dv(r,e,t,n,i,s,o){const c=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let a;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return f?new OffscreenCanvas(w,S):As("canvas")}function g(w,S,F,ie){let te=1;if((w.width>ie||w.height>ie)&&(te=ie/Math.max(w.width,w.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const re=S?Lo:Math.floor,Me=re(te*w.width),he=re(te*w.height);a===void 0&&(a=_(Me,he));const ge=F?_(Me,he):a;return ge.width=Me,ge.height=he,ge.getContext("2d").drawImage(w,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Me+"x"+he+")."),ge}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return za(w.width)&&za(w.height)}function p(w){return c?!1:w.wrapS!==Sn||w.wrapT!==Sn||w.minFilter!==Nt&&w.minFilter!==tn}function v(w,S){return w.generateMipmaps&&S&&w.minFilter!==Nt&&w.minFilter!==tn}function x(w){r.generateMipmap(w)}function T(w,S,F,ie,te=!1){if(c===!1)return S;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let re=S;if(S===r.RED&&(F===r.FLOAT&&(re=r.R32F),F===r.HALF_FLOAT&&(re=r.R16F),F===r.UNSIGNED_BYTE&&(re=r.R8)),S===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(re=r.R8UI),F===r.UNSIGNED_SHORT&&(re=r.R16UI),F===r.UNSIGNED_INT&&(re=r.R32UI),F===r.BYTE&&(re=r.R8I),F===r.SHORT&&(re=r.R16I),F===r.INT&&(re=r.R32I)),S===r.RG&&(F===r.FLOAT&&(re=r.RG32F),F===r.HALF_FLOAT&&(re=r.RG16F),F===r.UNSIGNED_BYTE&&(re=r.RG8)),S===r.RGBA){const Me=te?bo:ot.getTransfer(ie);F===r.FLOAT&&(re=r.RGBA32F),F===r.HALF_FLOAT&&(re=r.RGBA16F),F===r.UNSIGNED_BYTE&&(re=Me===mt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)}return(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function I(w,S,F){return v(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==Nt&&w.minFilter!==tn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){return w===Nt||w===Fa||w===Mo?r.NEAREST:r.LINEAR}function L(w){const S=w.target;S.removeEventListener("dispose",L),y(S),S.isVideoTexture&&d.delete(S)}function O(w){const S=w.target;S.removeEventListener("dispose",O),V(S)}function y(w){const S=n.get(w);if(S.__webglInit===void 0)return;const F=w.source,ie=u.get(F);if(ie){const te=ie[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(w),Object.keys(ie).length===0&&u.delete(F)}n.remove(w)}function b(w){const S=n.get(w);r.deleteTexture(S.__webglTexture);const F=w.source,ie=u.get(F);delete ie[S.__cacheKey],o.memory.textures--}function V(w){const S=w.texture,F=n.get(w),ie=n.get(S);if(ie.__webglTexture!==void 0&&(r.deleteTexture(ie.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(F.__webglFramebuffer[te]))for(let re=0;re<F.__webglFramebuffer[te].length;re++)r.deleteFramebuffer(F.__webglFramebuffer[te][re]);else r.deleteFramebuffer(F.__webglFramebuffer[te]);F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[te])}else{if(Array.isArray(F.__webglFramebuffer))for(let te=0;te<F.__webglFramebuffer.length;te++)r.deleteFramebuffer(F.__webglFramebuffer[te]);else r.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let te=0;te<F.__webglColorRenderbuffer.length;te++)F.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[te]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let te=0,re=S.length;te<re;te++){const Me=n.get(S[te]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(S[te])}n.remove(S),n.remove(w)}let X=0;function ne(){X=0}function N(){const w=X;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),X+=1,w}function G(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function Y(w,S){const F=n.get(w);if(w.isVideoTexture&&nt(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const ie=w.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(F,w,S);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+S)}function Z(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){fe(F,w,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+S)}function j(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){fe(F,w,S);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+S)}function K(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Te(F,w,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+S)}const $={[kr]:r.REPEAT,[Sn]:r.CLAMP_TO_EDGE,[Eo]:r.MIRRORED_REPEAT},oe={[Nt]:r.NEAREST,[Fa]:r.NEAREST_MIPMAP_NEAREST,[Mo]:r.NEAREST_MIPMAP_LINEAR,[tn]:r.LINEAR,[Gu]:r.LINEAR_MIPMAP_NEAREST,[Qi]:r.LINEAR_MIPMAP_LINEAR},se={[qd]:r.NEVER,[Jd]:r.ALWAYS,[Yd]:r.LESS,[Qu]:r.LEQUAL,[jd]:r.EQUAL,[$d]:r.GEQUAL,[Kd]:r.GREATER,[Zd]:r.NOTEQUAL};function q(w,S,F){if(F?(r.texParameteri(w,r.TEXTURE_WRAP_S,$[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,$[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,$[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,oe[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,oe[S.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==Sn||S.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,R(S.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==Nt&&S.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Nt||S.minFilter!==Mo&&S.minFilter!==Qi||S.type===si&&e.has("OES_texture_float_linear")===!1||c===!1&&S.type===Ts&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(w,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function J(w,S){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",L));const ie=S.source;let te=u.get(ie);te===void 0&&(te={},u.set(ie,te));const re=G(S);if(re!==w.__cacheKey){te[re]===void 0&&(te[re]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),te[re].usedTimes++;const Me=te[w.__cacheKey];Me!==void 0&&(te[w.__cacheKey].usedTimes--,Me.usedTimes===0&&b(S)),w.__cacheKey=re,w.__webglTexture=te[re].texture}return F}function fe(w,S,F){let ie=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=r.TEXTURE_3D);const te=J(w,S),re=S.source;t.bindTexture(ie,w.__webglTexture,r.TEXTURE0+F);const Me=n.get(re);if(re.version!==Me.__version||te===!0){t.activeTexture(r.TEXTURE0+F);const he=ot.getPrimaries(ot.workingColorSpace),ge=S.colorSpace===En?null:ot.getPrimaries(S.colorSpace),Ce=S.colorSpace===En||he===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const ze=p(S)&&m(S.image)===!1;let ee=g(S.image,ze,!1,i.maxTextureSize);ee=He(S,ee);const et=m(ee)||c,Ve=s.convert(S.format,S.colorSpace);let Fe=s.convert(S.type),be=T(S.internalFormat,Ve,Fe,S.colorSpace,S.isVideoTexture);q(ie,S,et);let ve;const Ge=S.mipmaps,it=c&&S.isVideoTexture!==!0&&be!==Ku,dt=Me.__version===void 0||te===!0,Xe=I(S,ee,et);if(S.isDepthTexture)be=r.DEPTH_COMPONENT,c?S.type===si?be=r.DEPTH_COMPONENT32F:S.type===Ei?be=r.DEPTH_COMPONENT24:S.type===Ki?be=r.DEPTH24_STENCIL8:be=r.DEPTH_COMPONENT16:S.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Zi&&be===r.DEPTH_COMPONENT&&S.type!==ec&&S.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ei,Fe=s.convert(S.type)),S.format===Hr&&be===r.DEPTH_COMPONENT&&(be=r.DEPTH_STENCIL,S.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ki,Fe=s.convert(S.type))),dt&&(it?t.texStorage2D(r.TEXTURE_2D,1,be,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,be,ee.width,ee.height,0,Ve,Fe,null));else if(S.isDataTexture)if(Ge.length>0&&et){it&&dt&&t.texStorage2D(r.TEXTURE_2D,Xe,be,Ge[0].width,Ge[0].height);for(let ae=0,D=Ge.length;ae<D;ae++)ve=Ge[ae],it?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ve.width,ve.height,Ve,Fe,ve.data):t.texImage2D(r.TEXTURE_2D,ae,be,ve.width,ve.height,0,Ve,Fe,ve.data);S.generateMipmaps=!1}else it?(dt&&t.texStorage2D(r.TEXTURE_2D,Xe,be,ee.width,ee.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,Ve,Fe,ee.data)):t.texImage2D(r.TEXTURE_2D,0,be,ee.width,ee.height,0,Ve,Fe,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){it&&dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Xe,be,Ge[0].width,Ge[0].height,ee.depth);for(let ae=0,D=Ge.length;ae<D;ae++)ve=Ge[ae],S.format!==Tn?Ve!==null?it?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,ee.depth,Ve,ve.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,be,ve.width,ve.height,ee.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,ee.depth,Ve,Fe,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,be,ve.width,ve.height,ee.depth,0,Ve,Fe,ve.data)}else{it&&dt&&t.texStorage2D(r.TEXTURE_2D,Xe,be,Ge[0].width,Ge[0].height);for(let ae=0,D=Ge.length;ae<D;ae++)ve=Ge[ae],S.format!==Tn?Ve!==null?it?t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,ve.width,ve.height,Ve,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ve.width,ve.height,Ve,Fe,ve.data):t.texImage2D(r.TEXTURE_2D,ae,be,ve.width,ve.height,0,Ve,Fe,ve.data)}else if(S.isDataArrayTexture)it?(dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Xe,be,ee.width,ee.height,ee.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ve,Fe,ee.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,be,ee.width,ee.height,ee.depth,0,Ve,Fe,ee.data);else if(S.isData3DTexture)it?(dt&&t.texStorage3D(r.TEXTURE_3D,Xe,be,ee.width,ee.height,ee.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ve,Fe,ee.data)):t.texImage3D(r.TEXTURE_3D,0,be,ee.width,ee.height,ee.depth,0,Ve,Fe,ee.data);else if(S.isFramebufferTexture){if(dt)if(it)t.texStorage2D(r.TEXTURE_2D,Xe,be,ee.width,ee.height);else{let ae=ee.width,D=ee.height;for(let ue=0;ue<Xe;ue++)t.texImage2D(r.TEXTURE_2D,ue,be,ae,D,0,Ve,Fe,null),ae>>=1,D>>=1}}else if(Ge.length>0&&et){it&&dt&&t.texStorage2D(r.TEXTURE_2D,Xe,be,Ge[0].width,Ge[0].height);for(let ae=0,D=Ge.length;ae<D;ae++)ve=Ge[ae],it?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Ve,Fe,ve):t.texImage2D(r.TEXTURE_2D,ae,be,Ve,Fe,ve);S.generateMipmaps=!1}else it?(dt&&t.texStorage2D(r.TEXTURE_2D,Xe,be,ee.width,ee.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ve,Fe,ee)):t.texImage2D(r.TEXTURE_2D,0,be,Ve,Fe,ee);v(S,et)&&x(ie),Me.__version=re.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Te(w,S,F){if(S.image.length!==6)return;const ie=J(w,S),te=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+F);const re=n.get(te);if(te.version!==re.__version||ie===!0){t.activeTexture(r.TEXTURE0+F);const Me=ot.getPrimaries(ot.workingColorSpace),he=S.colorSpace===En?null:ot.getPrimaries(S.colorSpace),ge=S.colorSpace===En||Me===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ce=S.isCompressedTexture||S.image[0].isCompressedTexture,ze=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let ae=0;ae<6;ae++)!Ce&&!ze?ee[ae]=g(S.image[ae],!1,!0,i.maxCubemapSize):ee[ae]=ze?S.image[ae].image:S.image[ae],ee[ae]=He(S,ee[ae]);const et=ee[0],Ve=m(et)||c,Fe=s.convert(S.format,S.colorSpace),be=s.convert(S.type),ve=T(S.internalFormat,Fe,be,S.colorSpace),Ge=c&&S.isVideoTexture!==!0,it=re.__version===void 0||ie===!0;let dt=I(S,et,Ve);q(r.TEXTURE_CUBE_MAP,S,Ve);let Xe;if(Ce){Ge&&it&&t.texStorage2D(r.TEXTURE_CUBE_MAP,dt,ve,et.width,et.height);for(let ae=0;ae<6;ae++){Xe=ee[ae].mipmaps;for(let D=0;D<Xe.length;D++){const ue=Xe[D];S.format!==Tn?Fe!==null?Ge?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,0,0,ue.width,ue.height,Fe,ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,ve,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,0,0,ue.width,ue.height,Fe,be,ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,ve,ue.width,ue.height,0,Fe,be,ue.data)}}}else{Xe=S.mipmaps,Ge&&it&&(Xe.length>0&&dt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,dt,ve,ee[0].width,ee[0].height));for(let ae=0;ae<6;ae++)if(ze){Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ee[ae].width,ee[ae].height,Fe,be,ee[ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ve,ee[ae].width,ee[ae].height,0,Fe,be,ee[ae].data);for(let D=0;D<Xe.length;D++){const le=Xe[D].image[ae].image;Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,0,0,le.width,le.height,Fe,be,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,ve,le.width,le.height,0,Fe,be,le.data)}}else{Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Fe,be,ee[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ve,Fe,be,ee[ae]);for(let D=0;D<Xe.length;D++){const ue=Xe[D];Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,0,0,Fe,be,ue.image[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,ve,Fe,be,ue.image[ae])}}}v(S,Ve)&&x(r.TEXTURE_CUBE_MAP),re.__version=te.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function pe(w,S,F,ie,te,re){const Me=s.convert(F.format,F.colorSpace),he=s.convert(F.type),ge=T(F.internalFormat,Me,he,F.colorSpace);if(!n.get(S).__hasExternalTextures){const ze=Math.max(1,S.width>>re),ee=Math.max(1,S.height>>re);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,re,ge,ze,ee,S.depth,0,Me,he,null):t.texImage2D(te,re,ge,ze,ee,0,Me,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),me(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,te,n.get(F).__webglTexture,0,Ue(S)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,te,n.get(F).__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(w,S,F){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let ie=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||me(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===si?ie=r.DEPTH_COMPONENT32F:te.type===Ei&&(ie=r.DEPTH_COMPONENT24));const re=Ue(S);me(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,ie,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,re,ie,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,ie,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const ie=Ue(S);F&&me(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,S.width,S.height):me(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<ie.length;te++){const re=ie[te],Me=s.convert(re.format,re.colorSpace),he=s.convert(re.type),ge=T(re.internalFormat,Me,he,re.colorSpace),Ce=Ue(S);F&&me(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,ge,S.width,S.height):me(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,ge,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ge,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const ie=n.get(S.depthTexture).__webglTexture,te=Ue(S);if(S.depthTexture.format===Zi)me(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Hr)me(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ye(w){const S=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");xe(S.__webglFramebuffer,w)}else if(F){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=r.createRenderbuffer(),De(S.__webglDepthbuffer[ie],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),De(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(w,S,F){const ie=n.get(w);S!==void 0&&pe(ie.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&ye(w)}function B(w){const S=w.texture,F=n.get(w),ie=n.get(S);w.addEventListener("dispose",O),w.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=S.version,o.memory.textures++);const te=w.isWebGLCubeRenderTarget===!0,re=w.isWebGLMultipleRenderTargets===!0,Me=m(w)||c;if(te){F.__webglFramebuffer=[];for(let he=0;he<6;he++)if(c&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[he]=[];for(let ge=0;ge<S.mipmaps.length;ge++)F.__webglFramebuffer[he][ge]=r.createFramebuffer()}else F.__webglFramebuffer[he]=r.createFramebuffer()}else{if(c&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)F.__webglFramebuffer[he]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(re)if(i.drawBuffers){const he=w.texture;for(let ge=0,Ce=he.length;ge<Ce;ge++){const ze=n.get(he[ge]);ze.__webglTexture===void 0&&(ze.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&w.samples>0&&me(w)===!1){const he=re?S:[S];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ge=0;ge<he.length;ge++){const Ce=he[ge];F.__webglColorRenderbuffer[ge]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ge]);const ze=s.convert(Ce.format,Ce.colorSpace),ee=s.convert(Ce.type),et=T(Ce.internalFormat,ze,ee,Ce.colorSpace,w.isXRRenderTarget===!0),Ve=Ue(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,et,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,F.__webglColorRenderbuffer[ge])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),De(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),q(r.TEXTURE_CUBE_MAP,S,Me);for(let he=0;he<6;he++)if(c&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)pe(F.__webglFramebuffer[he][ge],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else pe(F.__webglFramebuffer[he],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);v(S,Me)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const he=w.texture;for(let ge=0,Ce=he.length;ge<Ce;ge++){const ze=he[ge],ee=n.get(ze);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),q(r.TEXTURE_2D,ze,Me),pe(F.__webglFramebuffer,w,ze,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,0),v(ze,Me)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(c?he=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ie.__webglTexture),q(he,S,Me),c&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)pe(F.__webglFramebuffer[ge],w,S,r.COLOR_ATTACHMENT0,he,ge);else pe(F.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,he,0);v(S,Me)&&x(he),t.unbindTexture()}w.depthBuffer&&ye(w)}function xt(w){const S=m(w)||c,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0,te=F.length;ie<te;ie++){const re=F[ie];if(v(re,S)){const Me=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,he=n.get(re).__webglTexture;t.bindTexture(Me,he),x(Me),t.unbindTexture()}}}function Ee(w){if(c&&w.samples>0&&me(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,ie=w.height;let te=r.COLOR_BUFFER_BIT;const re=[],Me=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=n.get(w),ge=w.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){re.push(r.COLOR_ATTACHMENT0+Ce),w.depthBuffer&&re.push(Me);const ze=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ze===!1&&(w.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),ge&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]),ze===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Me]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Me])),ge){const ee=n.get(S[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,F,ie,0,0,F,ie,te,r.NEAREST),h&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ge)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]);const ze=n.get(S[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Ue(w){return Math.min(i.maxSamples,w.samples)}function me(w){const S=n.get(w);return c&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function nt(w){const S=o.render.frame;d.get(w)!==S&&(d.set(w,S),w.update())}function He(w,S){const F=w.colorSpace,ie=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Ha||F!==Ut&&F!==En&&(ot.getTransfer(F)===mt?c===!1?e.has("EXT_sRGB")===!0&&ie===Tn?(w.format=Ha,w.minFilter=tn,w.generateMipmaps=!1):S=th.sRGBToLinear(S):(ie!==Tn||te!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=N,this.resetTextureUnits=ne,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=Ye,this.setupRenderTarget=B,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=me}function fv(r,e,t){const n=t.isWebGL2;function i(s,o=En){let c;const l=ot.getTransfer(o);if(s===Ci)return r.UNSIGNED_BYTE;if(s===Wu)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Xu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ld)return r.BYTE;if(s===Pd)return r.SHORT;if(s===ec)return r.UNSIGNED_SHORT;if(s===Vu)return r.INT;if(s===Ei)return r.UNSIGNED_INT;if(s===si)return r.FLOAT;if(s===Ts)return n?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(s===Id)return r.ALPHA;if(s===Tn)return r.RGBA;if(s===Dd)return r.LUMINANCE;if(s===Nd)return r.LUMINANCE_ALPHA;if(s===Zi)return r.DEPTH_COMPONENT;if(s===Hr)return r.DEPTH_STENCIL;if(s===Ha)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(s===Ud)return r.RED;if(s===qu)return r.RED_INTEGER;if(s===Od)return r.RG;if(s===Yu)return r.RG_INTEGER;if(s===ju)return r.RGBA_INTEGER;if(s===Wo||s===Xo||s===qo||s===Yo)if(l===mt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Wo)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xo)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qo)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yo)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Wo)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xo)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qo)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yo)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fc||s===Bc||s===kc||s===Hc)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Fc)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bc)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kc)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hc)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ku)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===zc||s===Gc)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===zc)return l===mt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Gc)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vc||s===Wc||s===Xc||s===qc||s===Yc||s===jc||s===Kc||s===Zc||s===$c||s===Jc||s===Qc||s===el||s===tl||s===nl)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Vc)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wc)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xc)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qc)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yc)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jc)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kc)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zc)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$c)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jc)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qc)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===el)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tl)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nl)return l===mt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jo||s===il||s===rl)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===jo)return l===mt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===il)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rl)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fd||s===sl||s===ol||s===al)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===jo)return c.COMPRESSED_RED_RGTC1_EXT;if(s===sl)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ol)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===al)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ki?n?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class pv extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xn extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mv={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const c=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(h,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=h.joints["index-finger-tip"],a=h.joints["thumb-tip"],u=d.position.distanceTo(a.position),f=.02,_=.005;h.inputState.pinching&&u>f+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=f-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(mv)))}return c!==null&&(c.visible=i!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _v extends rr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,c="local-floor",l=1,h=null,d=null,a=null,u=null,f=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const v=[],x=[],T=new ke;let I=null;const R=new $t;R.layers.enable(1),R.viewport=new ft;const L=new $t;L.layers.enable(2),L.viewport=new ft;const O=[R,L],y=new pv;y.layers.enable(1),y.layers.enable(2);let b=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=v[q];return J===void 0&&(J=new va,v[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=v[q];return J===void 0&&(J=new va,v[q]=J),J.getGripSpace()},this.getHand=function(q){let J=v[q];return J===void 0&&(J=new va,v[q]=J),J.getHandSpace()};function X(q){const J=x.indexOf(q.inputSource);if(J===-1)return;const fe=v[J];fe!==void 0&&(fe.update(q.inputSource,q.frame,h||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function ne(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",ne),i.removeEventListener("inputsourceschange",N);for(let q=0;q<v.length;q++){const J=x[q];J!==null&&(x[q]=null,v[q].disconnect(J))}b=null,V=null,e.setRenderTarget(m),f=null,u=null,a=null,i=null,p=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){c=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return a},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",ne),i.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new er(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,fe=null,Te=null;g.depth&&(Te=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?Hr:Zi,fe=g.stencil?Ki:Ei);const pe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};a=new XRWebGLBinding(i,t),u=a.createProjectionLayer(pe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new er(u.textureWidth,u.textureHeight,{format:Tn,type:Ci,depthTexture:new uh(u.textureWidth,u.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const De=e.properties.get(p);De.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await i.requestReferenceSpace(c),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(q){for(let J=0;J<q.removed.length;J++){const fe=q.removed[J],Te=x.indexOf(fe);Te>=0&&(x[Te]=null,v[Te].disconnect(fe))}for(let J=0;J<q.added.length;J++){const fe=q.added[J];let Te=x.indexOf(fe);if(Te===-1){for(let De=0;De<v.length;De++)if(De>=x.length){x.push(fe),Te=De;break}else if(x[De]===null){x[De]=fe,Te=De;break}if(Te===-1)break}const pe=v[Te];pe&&pe.connect(fe)}}const G=new C,Y=new C;function Z(q,J,fe){G.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(fe.matrixWorld);const Te=G.distanceTo(Y),pe=J.projectionMatrix.elements,De=fe.projectionMatrix.elements,xe=pe[14]/(pe[10]-1),ye=pe[14]/(pe[10]+1),Ye=(pe[9]+1)/pe[5],B=(pe[9]-1)/pe[5],xt=(pe[8]-1)/pe[0],Ee=(De[8]+1)/De[0],Ue=xe*xt,me=xe*Ee,nt=Te/(-xt+Ee),He=nt*-xt;J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(He),q.translateZ(nt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const w=xe+nt,S=ye+nt,F=Ue-He,ie=me+(Te-He),te=Ye*ye/S*w,re=B*ye/S*w;q.projectionMatrix.makePerspective(F,ie,te,re,w,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function j(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;y.near=L.near=R.near=q.near,y.far=L.far=R.far=q.far,(b!==y.near||V!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,V=y.far);const J=q.parent,fe=y.cameras;j(y,J);for(let Te=0;Te<fe.length;Te++)j(fe[Te],J);fe.length===2?Z(y,R,L):y.projectionMatrix.copy(R.projectionMatrix),K(q,y,J)};function K(q,J,fe){fe===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Gr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let $=null;function oe(q,J){if(d=J.getViewerPose(h||o),_=J,d!==null){const fe=d.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Te=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,Te=!0);for(let pe=0;pe<fe.length;pe++){const De=fe[pe];let xe=null;if(f!==null)xe=f.getViewport(De);else{const Ye=a.getViewSubImage(u,De);xe=Ye.viewport,pe===0&&(e.setRenderTargetTextures(p,Ye.colorTexture,u.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(p))}let ye=O[pe];ye===void 0&&(ye=new $t,ye.layers.enable(pe),ye.viewport=new ft,O[pe]=ye),ye.matrix.fromArray(De.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(De.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(xe.x,xe.y,xe.width,xe.height),pe===0&&(y.matrix.copy(ye.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Te===!0&&y.cameras.push(ye)}}for(let fe=0;fe<v.length;fe++){const Te=x[fe],pe=v[fe];Te!==null&&pe!==void 0&&pe.update(Te,J,h||o)}$&&$(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const se=new lh;se.setAnimationLoop(oe),this.setAnimationLoop=function(q){$=q},this.dispose=function(){}}}function gv(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ah(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),a(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,T)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&c(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function c(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function a(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vv(r,e,t,n){let i={},s={},o=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const T=x.program;n.uniformBlockBinding(v,T)}function h(v,x){let T=i[v.id];T===void 0&&(_(v),T=d(v),i[v.id]=T,v.addEventListener("dispose",m));const I=x.program;n.updateUBOMapping(v,I);const R=e.render.frame;s[v.id]!==R&&(u(v),s[v.id]=R)}function d(v){const x=a();v.__bindingPointIndex=x;const T=r.createBuffer(),I=v.__size,R=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,I,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,T),T}function a(){for(let v=0;v<c;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],T=v.uniforms,I=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let R=0,L=T.length;R<L;R++){const O=Array.isArray(T[R])?T[R]:[T[R]];for(let y=0,b=O.length;y<b;y++){const V=O[y];if(f(V,R,y,I)===!0){const X=V.__offset,ne=Array.isArray(V.value)?V.value:[V.value];let N=0;for(let G=0;G<ne.length;G++){const Y=ne[G],Z=g(Y);typeof Y=="number"||typeof Y=="boolean"?(V.__data[0]=Y,r.bufferSubData(r.UNIFORM_BUFFER,X+N,V.__data)):Y.isMatrix3?(V.__data[0]=Y.elements[0],V.__data[1]=Y.elements[1],V.__data[2]=Y.elements[2],V.__data[3]=0,V.__data[4]=Y.elements[3],V.__data[5]=Y.elements[4],V.__data[6]=Y.elements[5],V.__data[7]=0,V.__data[8]=Y.elements[6],V.__data[9]=Y.elements[7],V.__data[10]=Y.elements[8],V.__data[11]=0):(Y.toArray(V.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,x,T,I){const R=v.value,L=x+"_"+T;if(I[L]===void 0)return typeof R=="number"||typeof R=="boolean"?I[L]=R:I[L]=R.clone(),!0;{const O=I[L];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return I[L]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function _(v){const x=v.uniforms;let T=0;const I=16;for(let L=0,O=x.length;L<O;L++){const y=Array.isArray(x[L])?x[L]:[x[L]];for(let b=0,V=y.length;b<V;b++){const X=y[b],ne=Array.isArray(X.value)?X.value:[X.value];for(let N=0,G=ne.length;N<G;N++){const Y=ne[N],Z=g(Y),j=T%I;j!==0&&I-j<Z.boundary&&(T+=I-j),X.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=Z.storage}}}const R=T%I;return R>0&&(T+=I-R),v.__size=T,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const T=o.indexOf(x.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:h,dispose:p}}class _h{constructor(e={}){const{canvas:t=pf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:a=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;const x=this;let T=!1,I=0,R=0,L=null,O=-1,y=null;const b=new ft,V=new ft;let X=null;const ne=new Be(0);let N=0,G=t.width,Y=t.height,Z=1,j=null,K=null;const $=new ft(0,0,G,Y),oe=new ft(0,0,G,Y);let se=!1;const q=new ac;let J=!1,fe=!1,Te=null;const pe=new Ke,De=new ke,xe=new C,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return L===null?Z:1}let B=n;function xt(A,U){for(let z=0;z<A.length;z++){const W=A[z],k=t.getContext(W,U);if(k!==null)return k}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:a};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ue,!1),B===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),B=xt(U,A),B===null)throw xt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,Ue,me,nt,He,w,S,F,ie,te,re,Me,he,ge,Ce,ze,ee,et,Ve,Fe,be,ve,Ge,it;function dt(){Ee=new R_(B),Ue=new S_(B,Ee,e),Ee.init(Ue),ve=new fv(B,Ee,Ue),me=new hv(B,Ee,Ue),nt=new P_(B),He=new $g,w=new dv(B,Ee,me,He,Ue,ve,nt),S=new E_(x),F=new w_(x),ie=new kf(B,Ue),Ge=new y_(B,Ee,ie,Ue),te=new C_(B,ie,nt,Ge),re=new U_(B,te,ie,nt),Ve=new N_(B,Ue,w),ze=new T_(He),Me=new Zg(x,S,F,Ee,Ue,Ge,ze),he=new gv(x,He),ge=new Qg,Ce=new sv(Ee,Ue),et=new x_(x,S,F,me,re,u,l),ee=new uv(x,re,Ue),it=new vv(B,nt,Ue,me),Fe=new M_(B,Ee,nt,Ue),be=new L_(B,Ee,nt,Ue),nt.programs=Me.programs,x.capabilities=Ue,x.extensions=Ee,x.properties=He,x.renderLists=ge,x.shadowMap=ee,x.state=me,x.info=nt}dt();const Xe=new _v(x,B);this.xr=Xe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(G,Y,!1))},this.getSize=function(A){return A.set(G,Y)},this.setSize=function(A,U,z=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,Y=U,t.width=Math.floor(A*Z),t.height=Math.floor(U*Z),z===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(G*Z,Y*Z).floor()},this.setDrawingBufferSize=function(A,U,z){G=A,Y=U,Z=z,t.width=Math.floor(A*z),t.height=Math.floor(U*z),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,U,z,W){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,U,z,W),me.viewport(b.copy($).multiplyScalar(Z).floor())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,U,z,W){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,U,z,W),me.scissor(V.copy(oe).multiplyScalar(Z).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(A){me.setScissorTest(se=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(A=!0,U=!0,z=!0){let W=0;if(A){let k=!1;if(L!==null){const de=L.texture.format;k=de===ju||de===Yu||de===qu}if(k){const de=L.texture.type,Se=de===Ci||de===Ei||de===ec||de===Ki||de===Wu||de===Xu,Le=et.getClearColor(),Pe=et.getClearAlpha(),we=Le.r,Ne=Le.g,Ie=Le.b;Se?(f[0]=we,f[1]=Ne,f[2]=Ie,f[3]=Pe,B.clearBufferuiv(B.COLOR,0,f)):(_[0]=we,_[1]=Ne,_[2]=Ie,_[3]=Pe,B.clearBufferiv(B.COLOR,0,_))}else W|=B.COLOR_BUFFER_BIT}U&&(W|=B.DEPTH_BUFFER_BIT),z&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ge.dispose(),Ce.dispose(),He.dispose(),S.dispose(),F.dispose(),re.dispose(),Ge.dispose(),it.dispose(),Me.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Ot),Xe.removeEventListener("sessionend",ut),Te&&(Te.dispose(),Te=null),St.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=nt.autoReset,U=ee.enabled,z=ee.autoUpdate,W=ee.needsUpdate,k=ee.type;dt(),nt.autoReset=A,ee.enabled=U,ee.autoUpdate=z,ee.needsUpdate=W,ee.type=k}function ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function le(A){const U=A.target;U.removeEventListener("dispose",le),Oe(U)}function Oe(A){Re(A),He.remove(A)}function Re(A){const U=He.get(A).programs;U!==void 0&&(U.forEach(function(z){Me.releaseProgram(z)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,z,W,k,de){U===null&&(U=ye);const Se=k.isMesh&&k.matrixWorld.determinant()<0,Le=Bs(A,U,z,W,k);me.setMaterial(W,Se);let Pe=z.index,we=1;if(W.wireframe===!0){if(Pe=te.getWireframeAttribute(z),Pe===void 0)return;we=2}const Ne=z.drawRange,Ie=z.attributes.position;let rt=Ne.start*we,At=(Ne.start+Ne.count)*we;de!==null&&(rt=Math.max(rt,de.start*we),At=Math.min(At,(de.start+de.count)*we)),Pe!==null?(rt=Math.max(rt,0),At=Math.min(At,Pe.count)):Ie!=null&&(rt=Math.max(rt,0),At=Math.min(At,Ie.count));const ct=At-rt;if(ct<0||ct===1/0)return;Ge.setup(k,W,Le,z,Pe);let bt,pt=Fe;if(Pe!==null&&(bt=ie.get(Pe),pt=be,pt.setIndex(bt)),k.isMesh)W.wireframe===!0?(me.setLineWidth(W.wireframeLinewidth*Ye()),pt.setMode(B.LINES)):pt.setMode(B.TRIANGLES);else if(k.isLine){let We=W.linewidth;We===void 0&&(We=1),me.setLineWidth(We*Ye()),k.isLineSegments?pt.setMode(B.LINES):k.isLineLoop?pt.setMode(B.LINE_LOOP):pt.setMode(B.LINE_STRIP)}else k.isPoints?pt.setMode(B.POINTS):k.isSprite&&pt.setMode(B.TRIANGLES);if(k.isBatchedMesh)pt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)pt.renderInstances(rt,ct,k.count);else if(z.isInstancedBufferGeometry){const We=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,fi=Math.min(z.instanceCount,We);pt.renderInstances(rt,ct,fi)}else pt.render(rt,ct)};function lt(A,U,z){A.transparent===!0&&A.side===Vn&&A.forceSinglePass===!1?(A.side=nn,A.needsUpdate=!0,Di(A,U,z),A.side=ci,A.needsUpdate=!0,Di(A,U,z),A.side=Vn):Di(A,U,z)}this.compile=function(A,U,z=null){z===null&&(z=A),m=Ce.get(z),m.init(),v.push(m),z.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),A!==z&&A.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(x._useLegacyLights);const W=new Set;return A.traverse(function(k){const de=k.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const Le=de[Se];lt(Le,z,k),W.add(Le)}else lt(de,z,k),W.add(de)}),v.pop(),m=null,W},this.compileAsync=function(A,U,z=null){const W=this.compile(A,U,z);return new Promise(k=>{function de(){if(W.forEach(function(Se){He.get(Se).currentProgram.isReady()&&W.delete(Se)}),W.size===0){k(A);return}setTimeout(de,10)}Ee.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let at=null;function Mt(A){at&&at(A)}function Ot(){St.stop()}function ut(){St.start()}const St=new lh;St.setAnimationLoop(Mt),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(A){at=A,Xe.setAnimationLoop(A),A===null?St.stop():St.start()},Xe.addEventListener("sessionstart",Ot),Xe.addEventListener("sessionend",ut),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(U),U=Xe.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,U,L),m=Ce.get(A,v.length),m.init(),v.push(m),pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(pe),fe=this.localClippingEnabled,J=ze.init(this.clippingPlanes,fe),g=ge.get(A,p.length),g.init(),p.push(g),fn(A,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(j,K),this.info.render.frame++,J===!0&&ze.beginShadows();const z=m.state.shadowsArray;if(ee.render(z,A,U),J===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(g,A),m.setupLights(x._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let k=0,de=W.length;k<de;k++){const Se=W[k];Ns(g,A,Se,Se.viewport)}}else Ns(g,A,U);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(x,A,U),Ge.resetDefaultState(),O=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function fn(A,U,z,W){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){W&&xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const Se=re.update(A),Le=A.material;Le.visible&&g.push(A,Se,Le,z,xe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const Se=re.update(A),Le=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),xe.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),xe.copy(Se.boundingSphere.center)),xe.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(Le)){const Pe=Se.groups;for(let we=0,Ne=Pe.length;we<Ne;we++){const Ie=Pe[we],rt=Le[Ie.materialIndex];rt&&rt.visible&&g.push(A,Se,rt,z,xe.z,Ie)}}else Le.visible&&g.push(A,Se,Le,z,xe.z,null)}}const de=A.children;for(let Se=0,Le=de.length;Se<Le;Se++)fn(de[Se],U,z,W)}function Ns(A,U,z,W){const k=A.opaque,de=A.transmissive,Se=A.transparent;m.setupLightsView(z),J===!0&&ze.setGlobalState(x.clippingPlanes,z),de.length>0&&Us(k,de,U,z),W&&me.viewport(b.copy(W)),k.length>0&&di(k,U,z),de.length>0&&di(de,U,z),Se.length>0&&di(Se,U,z),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Us(A,U,z,W){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const de=Ue.isWebGL2;Te===null&&(Te=new er(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Ts:Ci,minFilter:Qi,samples:de?4:0})),x.getDrawingBufferSize(De),de?Te.setSize(De.x,De.y):Te.setSize(Lo(De.x),Lo(De.y));const Se=x.getRenderTarget();x.setRenderTarget(Te),x.getClearColor(ne),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const Le=x.toneMapping;x.toneMapping=Ri,di(A,z,W),w.updateMultisampleRenderTarget(Te),w.updateRenderTargetMipmap(Te);let Pe=!1;for(let we=0,Ne=U.length;we<Ne;we++){const Ie=U[we],rt=Ie.object,At=Ie.geometry,ct=Ie.material,bt=Ie.group;if(ct.side===Vn&&rt.layers.test(W.layers)){const pt=ct.side;ct.side=nn,ct.needsUpdate=!0,Os(rt,z,W,At,ct,bt),ct.side=pt,ct.needsUpdate=!0,Pe=!0}}Pe===!0&&(w.updateMultisampleRenderTarget(Te),w.updateRenderTargetMipmap(Te)),x.setRenderTarget(Se),x.setClearColor(ne,N),x.toneMapping=Le}function di(A,U,z){const W=U.isScene===!0?U.overrideMaterial:null;for(let k=0,de=A.length;k<de;k++){const Se=A[k],Le=Se.object,Pe=Se.geometry,we=W===null?Se.material:W,Ne=Se.group;Le.layers.test(z.layers)&&Os(Le,U,z,Pe,we,Ne)}}function Os(A,U,z,W,k,de){A.onBeforeRender(x,U,z,W,k,de),A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(x,U,z,W,A,de),k.transparent===!0&&k.side===Vn&&k.forceSinglePass===!1?(k.side=nn,k.needsUpdate=!0,x.renderBufferDirect(z,U,W,k,A,de),k.side=ci,k.needsUpdate=!0,x.renderBufferDirect(z,U,W,k,A,de),k.side=Vn):x.renderBufferDirect(z,U,W,k,A,de),A.onAfterRender(x,U,z,W,k,de)}function Di(A,U,z){U.isScene!==!0&&(U=ye);const W=He.get(A),k=m.state.lights,de=m.state.shadowsArray,Se=k.state.version,Le=Me.getParameters(A,k.state,de,U,z),Pe=Me.getProgramCacheKey(Le);let we=W.programs;W.environment=A.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(A.isMeshStandardMaterial?F:S).get(A.envMap||W.environment),we===void 0&&(A.addEventListener("dispose",le),we=new Map,W.programs=we);let Ne=we.get(Pe);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===Se)return Qr(A,Le),Ne}else Le.uniforms=Me.getUniforms(A),A.onBuild(z,Le,x),A.onBeforeCompile(Le,x),Ne=Me.acquireProgram(Le,Pe),we.set(Pe,Ne),W.uniforms=Le.uniforms;const Ie=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=ze.uniform),Qr(A,Le),W.needsLights=Hs(A),W.lightsStateVersion=Se,W.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.directionalShadowMap.value=k.state.directionalShadowMap,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotShadowMap.value=k.state.spotShadowMap,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMap.value=k.state.pointShadowMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Ne,W.uniformsList=null,Ne}function Fs(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=So.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Qr(A,U){const z=He.get(A);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Bs(A,U,z,W,k){U.isScene!==!0&&(U=ye),w.resetTextureUnits();const de=U.fog,Se=W.isMeshStandardMaterial?U.environment:null,Le=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ut,Pe=(W.isMeshStandardMaterial?F:S).get(W.envMap||Se),we=W.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ne=!!z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ie=!!z.morphAttributes.position,rt=!!z.morphAttributes.normal,At=!!z.morphAttributes.color;let ct=Ri;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ct=x.toneMapping);const bt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,pt=bt!==void 0?bt.length:0,We=He.get(W),fi=m.state.lights;if(J===!0&&(fe===!0||A!==y)){const en=A===y&&W.id===O;ze.setState(W,A,en)}let Qe=!1;W.version===We.__version?(We.needsLights&&We.lightsStateVersion!==fi.state.version||We.outputColorSpace!==Le||k.isBatchedMesh&&We.batching===!1||!k.isBatchedMesh&&We.batching===!0||k.isInstancedMesh&&We.instancing===!1||!k.isInstancedMesh&&We.instancing===!0||k.isSkinnedMesh&&We.skinning===!1||!k.isSkinnedMesh&&We.skinning===!0||k.isInstancedMesh&&We.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&We.instancingColor===!1&&k.instanceColor!==null||We.envMap!==Pe||W.fog===!0&&We.fog!==de||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ze.numPlanes||We.numIntersection!==ze.numIntersection)||We.vertexAlphas!==we||We.vertexTangents!==Ne||We.morphTargets!==Ie||We.morphNormals!==rt||We.morphColors!==At||We.toneMapping!==ct||Ue.isWebGL2===!0&&We.morphTargetsCount!==pt)&&(Qe=!0):(Qe=!0,We.__version=W.version);let pn=We.currentProgram;Qe===!0&&(pn=Di(W,U,k));let or=!1,jn=!1,Ni=!1;const Tt=pn.getUniforms(),mn=We.uniforms;if(me.useProgram(pn.program)&&(or=!0,jn=!0,Ni=!0),W.id!==O&&(O=W.id,jn=!0),or||y!==A){Tt.setValue(B,"projectionMatrix",A.projectionMatrix),Tt.setValue(B,"viewMatrix",A.matrixWorldInverse);const en=Tt.map.cameraPosition;en!==void 0&&en.setValue(B,xe.setFromMatrixPosition(A.matrixWorld)),Ue.logarithmicDepthBuffer&&Tt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Tt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,jn=!0,Ni=!0)}if(k.isSkinnedMesh){Tt.setOptional(B,k,"bindMatrix"),Tt.setOptional(B,k,"bindMatrixInverse");const en=k.skeleton;en&&(Ue.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Tt.setValue(B,"boneTexture",en.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Tt.setOptional(B,k,"batchingTexture"),Tt.setValue(B,"batchingTexture",k._matricesTexture,w));const _n=z.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0&&Ue.isWebGL2===!0)&&Ve.update(k,z,pn),(jn||We.receiveShadow!==k.receiveShadow)&&(We.receiveShadow=k.receiveShadow,Tt.setValue(B,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(mn.envMap.value=Pe,mn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),jn&&(Tt.setValue(B,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&ks(mn,Ni),de&&W.fog===!0&&he.refreshFogUniforms(mn,de),he.refreshMaterialUniforms(mn,W,Z,Y,Te),So.upload(B,Fs(We),mn,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(So.upload(B,Fs(We),mn,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Tt.setValue(B,"center",k.center),Tt.setValue(B,"modelViewMatrix",k.modelViewMatrix),Tt.setValue(B,"normalMatrix",k.normalMatrix),Tt.setValue(B,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const en=W.uniformsGroups;for(let ar=0,es=en.length;ar<es;ar++)if(Ue.isWebGL2){const ts=en[ar];it.update(ts,pn),it.bind(ts,pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pn}function ks(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Hs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,U,z){He.get(A.texture).__webglTexture=U,He.get(A.depthTexture).__webglTexture=z;const W=He.get(A);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=z===void 0,W.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,U){const z=He.get(A);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,z=0){L=A,I=U,R=z;let W=!0,k=null,de=!1,Se=!1;if(A){const Pe=He.get(A);Pe.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(B.FRAMEBUFFER,null),W=!1):Pe.__webglFramebuffer===void 0?w.setupRenderTarget(A):Pe.__hasExternalTextures&&w.rebindTextures(A,He.get(A.texture).__webglTexture,He.get(A.depthTexture).__webglTexture);const we=A.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Se=!0);const Ne=He.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?k=Ne[U][z]:k=Ne[U],de=!0):Ue.isWebGL2&&A.samples>0&&w.useMultisampledRTT(A)===!1?k=He.get(A).__webglMultisampledFramebuffer:Array.isArray(Ne)?k=Ne[z]:k=Ne,b.copy(A.viewport),V.copy(A.scissor),X=A.scissorTest}else b.copy($).multiplyScalar(Z).floor(),V.copy(oe).multiplyScalar(Z).floor(),X=se;if(me.bindFramebuffer(B.FRAMEBUFFER,k)&&Ue.drawBuffers&&W&&me.drawBuffers(A,k),me.viewport(b),me.scissor(V),me.setScissorTest(X),de){const Pe=He.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pe.__webglTexture,z)}else if(Se){const Pe=He.get(A.texture),we=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.__webglTexture,z||0,we)}O=-1},this.readRenderTargetPixels=function(A,U,z,W,k,de,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=He.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Le=Le[Se]),Le){me.bindFramebuffer(B.FRAMEBUFFER,Le);try{const Pe=A.texture,we=Pe.format,Ne=Pe.type;if(we!==Tn&&ve.convert(we)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Ne===Ts&&(Ee.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ne!==Ci&&ve.convert(Ne)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===si&&(Ue.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-W&&z>=0&&z<=A.height-k&&B.readPixels(U,z,W,k,ve.convert(we),ve.convert(Ne),de)}finally{const Pe=L!==null?He.get(L).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(A,U,z=0){const W=Math.pow(2,-z),k=Math.floor(U.image.width*W),de=Math.floor(U.image.height*W);w.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,z,0,0,A.x,A.y,k,de),me.unbindTexture()},this.copyTextureToTexture=function(A,U,z,W=0){const k=U.image.width,de=U.image.height,Se=ve.convert(z.format),Le=ve.convert(z.type);w.setTexture2D(z,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,A.x,A.y,k,de,Se,Le,U.image.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,Se,U.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,W,A.x,A.y,Se,Le,U.image),W===0&&z.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(A,U,z,W,k=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=A.max.x-A.min.x+1,Se=A.max.y-A.min.y+1,Le=A.max.z-A.min.z+1,Pe=ve.convert(W.format),we=ve.convert(W.type);let Ne;if(W.isData3DTexture)w.setTexture3D(W,0),Ne=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)w.setTexture2DArray(W,0),Ne=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Ie=B.getParameter(B.UNPACK_ROW_LENGTH),rt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),At=B.getParameter(B.UNPACK_SKIP_PIXELS),ct=B.getParameter(B.UNPACK_SKIP_ROWS),bt=B.getParameter(B.UNPACK_SKIP_IMAGES),pt=z.isCompressedTexture?z.mipmaps[k]:z.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,pt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,A.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,A.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,A.min.z),z.isDataTexture||z.isData3DTexture?B.texSubImage3D(Ne,k,U.x,U.y,U.z,de,Se,Le,Pe,we,pt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ne,k,U.x,U.y,U.z,de,Se,Le,Pe,pt.data)):B.texSubImage3D(Ne,k,U.x,U.y,U.z,de,Se,Le,Pe,we,pt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ie),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,rt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,At),B.pixelStorei(B.UNPACK_SKIP_ROWS,ct),B.pixelStorei(B.UNPACK_SKIP_IMAGES,bt),k===0&&W.generateMipmaps&&B.generateMipmap(Ne),me.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),me.unbindTexture()},this.resetState=function(){I=0,R=0,L=null,me.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===nc?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Oo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?$i:$u}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$i?vt:Ut}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xv extends _h{}xv.prototype.isWebGL1Renderer=!0;class yv extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Mv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ka,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new C;class hc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kl=new C,Zl=new ft,$l=new ft,Sv=new C,Jl=new Ke,lo=new C,xa=new hn,Ql=new Ke,ya=new ws;class Tv extends Xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Oc,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingBox.expandByPoint(lo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingSphere.expandByPoint(lo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(i),e.ray.intersectsSphere(xa)!==!1&&(Ql.copy(i).invert(),ya.copy(e.ray).applyMatrix4(Ql),!(this.boundingBox!==null&&ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ya)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Oc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Zl.fromBufferAttribute(i.attributes.skinIndex,e),$l.fromBufferAttribute(i.attributes.skinWeight,e),Kl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=$l.getComponent(s);if(o!==0){const c=Zl.getComponent(s);Jl.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(Sv.copy(Kl).applyMatrix4(Jl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class gh extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ev extends zt{constructor(e=null,t=1,n=1,i,s,o,c,l,h=Nt,d=Nt,a,u){super(null,o,c,l,h,d,i,s,a,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eu=new Ke,Av=new Ke;class dc{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const c=e[s]?e[s].matrixWorld:Av;eu.multiplyMatrices(c,t[s]),eu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new dc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ev(t,e,e,Tn,si);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new gh),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Va extends yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Er=new Ke,tu=new Ke,uo=[],nu=new qt,bv=new Ke,os=new Xt,as=new hn;class wv extends Xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Va(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),nu.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(nu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),as.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(as)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),e.ray.intersectsSphere(as)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Er),tu.multiplyMatrices(n,Er),os.matrixWorld=tu,os.raycast(e,uo);for(let o=0,c=uo.length;o<c;o++){const l=uo[o];l.instanceId=s,l.object=this,t.push(l)}uo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Va(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class vh extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const iu=new C,ru=new C,su=new Ke,Ma=new ws,ho=new hn;class fc extends _t{constructor(e=new an,t=new vh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)iu.fromBufferAttribute(t,i-1),ru.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=iu.distanceTo(ru);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(i),ho.radius+=s,e.ray.intersectsSphere(ho)===!1)return;su.copy(i).invert(),Ma.copy(e.ray).applyMatrix4(su);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,h=new C,d=new C,a=new C,u=new C,f=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let x=p,T=v-1;x<T;x+=f){const I=_.getX(x),R=_.getX(x+1);if(h.fromBufferAttribute(m,I),d.fromBufferAttribute(m,R),Ma.distanceSqToSegment(h,d,u,a)>l)continue;u.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(u);O<e.near||O>e.far||t.push({distance:O,point:a.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let x=p,T=v-1;x<T;x+=f){if(h.fromBufferAttribute(m,x),d.fromBufferAttribute(m,x+1),Ma.distanceSqToSegment(h,d,u,a)>l)continue;u.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(u);R<e.near||R>e.far||t.push({distance:R,point:a.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}const ou=new C,au=new C;class Rv extends fc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ou.fromBufferAttribute(t,i),au.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ou.distanceTo(au);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cv extends fc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xh extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cu=new Ke,Wa=new ws,fo=new hn,po=new C;class pc extends _t{constructor(e=new an,t=new xh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(i),fo.radius+=s,e.ray.intersectsSphere(fo)===!1)return;cu.copy(i).invert(),Wa.copy(e.ray).applyMatrix4(cu);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,h=n.index,a=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=u,g=f;_<g;_++){const m=h.getX(_);po.fromBufferAttribute(a,m),lu(po,m,l,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(a.count,o.start+o.count);for(let _=u,g=f;_<g;_++)po.fromBufferAttribute(a,_),lu(po,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function lu(r,e,t,n,i,s,o){const c=Wa.distanceSqToPoint(r);if(c<t){const l=new C;Wa.closestPointToPoint(r,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:l,index:e,face:null,object:o})}}class mc extends an{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:l};const h=this;i=Math.floor(i),s=Math.floor(s);const d=[],a=[],u=[],f=[];let _=0;const g=[],m=n/2;let p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2));function v(){const T=new C,I=new C;let R=0;const L=(t-e)/n;for(let O=0;O<=s;O++){const y=[],b=O/s,V=b*(t-e)+e;for(let X=0;X<=i;X++){const ne=X/i,N=ne*l+c,G=Math.sin(N),Y=Math.cos(N);I.x=V*G,I.y=-b*n+m,I.z=V*Y,a.push(I.x,I.y,I.z),T.set(G,L,Y).normalize(),u.push(T.x,T.y,T.z),f.push(ne,1-b),y.push(_++)}g.push(y)}for(let O=0;O<i;O++)for(let y=0;y<s;y++){const b=g[y][O],V=g[y+1][O],X=g[y+1][O+1],ne=g[y][O+1];d.push(b,V,ne),d.push(V,X,ne),R+=6}h.addGroup(p,R,0),p+=R}function x(T){const I=_,R=new ke,L=new C;let O=0;const y=T===!0?e:t,b=T===!0?1:-1;for(let X=1;X<=i;X++)a.push(0,m*b,0),u.push(0,b,0),f.push(.5,.5),_++;const V=_;for(let X=0;X<=i;X++){const N=X/i*l+c,G=Math.cos(N),Y=Math.sin(N);L.x=y*Y,L.y=m*b,L.z=y*G,a.push(L.x,L.y,L.z),u.push(0,b,0),R.x=G*.5+.5,R.y=Y*.5*b+.5,f.push(R.x,R.y),_++}for(let X=0;X<i;X++){const ne=I+X,N=V+X;T===!0?d.push(N,N+1,ne):d.push(N+1,N,ne),O+=3}h.addGroup(p,O,T===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _c extends an{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];c(i),h(n),d(),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(s.slice(),3)),this.setAttribute("uv",new Jt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(v){const x=new C,T=new C,I=new C;for(let R=0;R<t.length;R+=3)f(t[R+0],x),f(t[R+1],T),f(t[R+2],I),l(x,T,I,v)}function l(v,x,T,I){const R=I+1,L=[];for(let O=0;O<=R;O++){L[O]=[];const y=v.clone().lerp(T,O/R),b=x.clone().lerp(T,O/R),V=R-O;for(let X=0;X<=V;X++)X===0&&O===R?L[O][X]=y:L[O][X]=y.clone().lerp(b,X/V)}for(let O=0;O<R;O++)for(let y=0;y<2*(R-O)-1;y++){const b=Math.floor(y/2);y%2===0?(u(L[O][b+1]),u(L[O+1][b]),u(L[O][b])):(u(L[O][b+1]),u(L[O+1][b+1]),u(L[O+1][b]))}}function h(v){const x=new C;for(let T=0;T<s.length;T+=3)x.x=s[T+0],x.y=s[T+1],x.z=s[T+2],x.normalize().multiplyScalar(v),s[T+0]=x.x,s[T+1]=x.y,s[T+2]=x.z}function d(){const v=new C;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const T=m(v)/2/Math.PI+.5,I=p(v)/Math.PI+.5;o.push(T,1-I)}_(),a()}function a(){for(let v=0;v<o.length;v+=6){const x=o[v+0],T=o[v+2],I=o[v+4],R=Math.max(x,T,I),L=Math.min(x,T,I);R>.9&&L<.1&&(x<.2&&(o[v+0]+=1),T<.2&&(o[v+2]+=1),I<.2&&(o[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function f(v,x){const T=v*3;x.x=e[T+0],x.y=e[T+1],x.z=e[T+2]}function _(){const v=new C,x=new C,T=new C,I=new C,R=new ke,L=new ke,O=new ke;for(let y=0,b=0;y<s.length;y+=9,b+=6){v.set(s[y+0],s[y+1],s[y+2]),x.set(s[y+3],s[y+4],s[y+5]),T.set(s[y+6],s[y+7],s[y+8]),R.set(o[b+0],o[b+1]),L.set(o[b+2],o[b+3]),O.set(o[b+4],o[b+5]),I.copy(v).add(x).add(T).divideScalar(3);const V=m(I);g(R,b+0,v,V),g(L,b+2,x,V),g(O,b+4,T,V)}}function g(v,x,T,I){I<0&&v.x===1&&(o[x]=v.x-1),T.x===0&&T.z===0&&(o[x]=I/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.vertices,e.indices,e.radius,e.details)}}class gc extends _c{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gc(e.radius,e.detail)}}class Rs extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ju,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hi extends Rs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function mo(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Lv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Pv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function uu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const c=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[c+l]}return i}function yh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Cs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const c=n+o>>>1;e<t[c]?o=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Iv extends Cs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wr,endingEnd:wr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,c=i[s],l=i[o];if(c===void 0)switch(this.getSettings_().endingStart){case Rr:s=e,c=2*t-n;break;case Ao:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rr:o=e,l=2*n-t;break;case Ao:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const h=(n-t)*.5,d=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=e*c,h=l-c,d=this._offsetPrev,a=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-u*m+2*u*g-u*_,v=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*_+1,x=(-1-f)*m+(1.5+f)*g+.5*_,T=f*m-f*g;for(let I=0;I!==c;++I)s[I]=p*o[d+I]+v*o[h+I]+x*o[l+I]+T*o[a+I];return s}}class Mh extends Cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=e*c,h=l-c,d=(n-t)/(i-t),a=1-d;for(let u=0;u!==c;++u)s[u]=o[h+u]*a+o[l+u]*d;return s}}class Dv extends Cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mo(t,this.TimeBufferType),this.values=mo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mo(e.times,Array),values:mo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Iv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case Ko:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Ko}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const c=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*c,o*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==s;c++){const l=n[c];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,l,o),e=!1;break}o=l}if(i!==void 0&&Lv(i))for(let c=0,l=i.length;c!==l;++c){const h=i[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ko,s=e.length-1;let o=1;for(let c=1;c<s;++c){let l=!1;const h=e[c],d=e[c+1];if(h!==d&&(c!==1||h!==e[0]))if(i)l=!0;else{const a=c*n,u=a-n,f=a+n;for(let _=0;_!==n;++_){const g=t[a+_];if(g!==t[u+_]||g!==t[f+_]){l=!0;break}}}if(l){if(c!==o){e[o]=e[c];const a=c*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[a+f]}++o}}if(s>0){e[o]=e[s];for(let c=s*n,l=o*n,h=0;h!==n;++h)t[l+h]=t[c+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=zr;class $r extends Yn{}$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=Es;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;class Sh extends Yn{}Sh.prototype.ValueTypeName="color";class Wr extends Yn{}Wr.prototype.ValueTypeName="number";class Nv extends Cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=(n-t)/(i-t);let h=e*c;for(let d=h+c;h!==d;h+=4)Fn.slerpFlat(s,0,o,h-c,o,h,l);return s}}class tr extends Yn{InterpolantFactoryMethodLinear(e){return new Nv(this.times,this.values,this.getValueSize(),e)}}tr.prototype.ValueTypeName="quaternion";tr.prototype.DefaultInterpolation=zr;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Jr extends Yn{}Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=Es;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;class Xr extends Yn{}Xr.prototype.ValueTypeName="vector";class Xa{constructor(e,t=-1,n,i=tc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,c=n.length;o!==c;++o)t.push(Ov(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Yn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let c=0;c<s;c++){let l=[],h=[];l.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const d=Pv(l);l=uu(l,1,d),h=uu(h,1,d),!i&&l[0]===0&&(l.push(s),h.push(h[0])),o.push(new Wr(".morphTargetInfluences["+t[c].name+"]",l,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,l=e.length;c<l;c++){const h=e[c],d=h.name.match(s);if(d&&d.length>1){const a=d[1];let u=i[a];u||(i[a]=u=[]),u.push(h)}}const o=[];for(const c in i)o.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(a,u,f,_,g){if(f.length!==0){const m=[],p=[];yh(f,m,p,_),m.length!==0&&g.push(new a(u,m,p))}},i=[],s=e.name||"default",o=e.fps||30,c=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let a=0;a<h.length;a++){const u=h[a].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let _;for(_=0;_<u.length;_++)if(u[_].morphTargets)for(let g=0;g<u[_].morphTargets.length;g++)f[u[_].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let v=0;v!==u[_].morphTargets.length;++v){const x=u[_];m.push(x.time),p.push(x.morphTarget===g?1:0)}i.push(new Wr(".morphTargetInfluence["+g+"]",m,p))}l=f.length*o}else{const f=".bones["+t[a].name+"]";n(Xr,f+".position",u,"pos",i),n(tr,f+".quaternion",u,"rot",i),n(Xr,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Uv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wr;case"vector":case"vector2":case"vector3":case"vector4":return Xr;case"color":return Sh;case"quaternion":return tr;case"bool":case"boolean":return $r;case"string":return Jr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Ov(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Uv(r.type);if(r.times===void 0){const t=[],n=[];yh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ai={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Fv{constructor(e,t,n){const i=this;let s=!1,o=0,c=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){c++,s===!1&&i.onStart!==void 0&&i.onStart(d,o,c),s=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,c),o===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,a){return h.push(d,a),this},this.removeHandler=function(d){const a=h.indexOf(d);return a!==-1&&h.splice(a,2),this},this.getHandler=function(d){for(let a=0,u=h.length;a<u;a+=2){const f=h[a],_=h[a+1];if(f.global&&(f.lastIndex=0),f.test(d))return _}return null}}}const Bv=new Fv;class sr{constructor(e){this.manager=e!==void 0?e:Bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}sr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class kv extends Error{constructor(e,t){super(e),this.response=t}}class Th extends sr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ai.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:n,onError:i});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,l=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const d=ei[e],a=h.body.getReader(),u=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),f=u?parseInt(u):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){v();function v(){a.read().then(({done:x,value:T})=>{if(x)p.close();else{g+=T.byteLength;const I=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let R=0,L=d.length;R<L;R++){const O=d[R];O.onProgress&&O.onProgress(I)}p.enqueue(T),v()}})}}});return new Response(m)}else throw new kv(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,c));case"json":return h.json();default:if(c===void 0)return h.text();{const a=/charset="?([^;"\s]*)"?/i.exec(c),u=a&&a[1]?a[1].toLowerCase():void 0,f=new TextDecoder(u);return h.arrayBuffer().then(_=>f.decode(_))}}}).then(h=>{Ai.add(e,h);const d=ei[e];delete ei[e];for(let a=0,u=d.length;a<u;a++){const f=d[a];f.onLoad&&f.onLoad(h)}}).catch(h=>{const d=ei[e];if(d===void 0)throw this.manager.itemError(e),h;delete ei[e];for(let a=0,u=d.length;a<u;a++){const f=d[a];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Eh extends sr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ai.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const c=As("img");function l(){d(),Ai.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(a){d(),i&&i(a),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){c.removeEventListener("load",l,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",l,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class Hv extends sr{constructor(e){super(e)}load(e,t,n,i){const s=new oc;s.colorSpace=vt;const o=new Eh(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let c=0;function l(h){o.load(e[h],function(d){s.images[h]=d,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)l(h);return s}}class zv extends sr{constructor(e){super(e)}load(e,t,n,i){const s=new zt,o=new Eh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ko extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Gv extends ko{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Sa=new Ke,hu=new C,du=new C;class vc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(hu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),Sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vv extends vc{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Gr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wv extends ko{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Vv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fu=new Ke,cs=new C,Ta=new C;class Xv extends vc{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),cs.setFromMatrixPosition(e.matrixWorld),n.position.copy(cs),Ta.copy(n.position),Ta.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ta),n.updateMatrixWorld(),i.makeTranslation(-cs.x,-cs.y,-cs.z),fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu)}}class qv extends ko{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yv extends vc{constructor(){super(new lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ah extends ko{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Yv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ms{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class jv extends sr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ai.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const l=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return Ai.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Ai.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Ai.add(e,l),s.manager.itemStart(e)}}class Kv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=pu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function pu(){return(typeof performance>"u"?Date:performance).now()}class Zv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let c=0;c!==i;++c)n[s+c]=n[c];o=t}else{o+=t;const c=t/o;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,h=t+t;l!==h;++l)if(n[l]!==n[l+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Fn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Fn.multiplyQuaternionsFlat(e,o,e,t,e,n),Fn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let c=0;c!==s;++c){const l=t+c;e[l]=e[l]*o+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]+e[n+o]*i}}}const xc="\\[\\]\\.:\\/",$v=new RegExp("["+xc+"]","g"),yc="[^"+xc+"]",Jv="[^"+xc.replace("\\.","")+"]",Qv=/((?:WC+[\/:])*)/.source.replace("WC",yc),e0=/(WCOD+)?/.source.replace("WCOD",Jv),t0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),n0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),i0=new RegExp("^"+Qv+e0+t0+n0+"$"),r0=["material","materials","bones","map"];class s0{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($v,"")}static parseTrackName(e){const t=i0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);r0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const c=s[o];if(c.name===t||c.uuid===t)return c;const l=n(c.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===h){h=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[i];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=s0;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class o0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,c=new Array(o),l={endingStart:wr,endingEnd:wr};for(let h=0;h!==o;++h){const d=s[h].createInterpolant(null);c[h]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=c,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=kd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,c=i/s;e.warp(1,o,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const l=c.parameterPositions,h=c.sampleValues;return l[0]=s,l[1]=s+n,h[0]=e/o,h[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),c=this._updateWeight(e);if(c>0){const l=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case zd:for(let d=0,a=l.length;d!==a;++d)l[d].evaluate(o),h[d].accumulateAdditive(c);break;case tc:default:for(let d=0,a=l.length;d!==a;++d)l[d].evaluate(o),h[d].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Hd;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Bd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const h=e<0;this._setEndings(h,!h,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Rr,i.endingEnd=Rr):(e?i.endingStart=this.zeroSlopeAtStart?Rr:wr:i.endingStart=Ao,t?i.endingEnd=this.zeroSlopeAtEnd?Rr:wr:i.endingEnd=Ao)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,l[0]=t,c[1]=s+e,l[1]=n,this}}const a0=new Float32Array(1);class mu extends rr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,c=e._interpolants,l=n.uuid,h=this._bindingsByRootAndName;let d=h[l];d===void 0&&(d={},h[l]=d);for(let a=0;a!==s;++a){const u=i[a],f=u.name;let _=d[f];if(_!==void 0)++_.referenceCount,o[a]=_;else{if(_=o[a],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,f));continue}const g=t&&t._propertyBindings[a].binding.parsedPath;_=new Zv(st.create(n,f,g),u.ValueTypeName,u.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,f),o[a]=_}c[a].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const c=o.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,c=o[s],l=c.knownActions,h=l[l.length-1],d=e._byClipCacheIndex;h._byClipCacheIndex=d,l[d]=h,l.pop(),e._byClipCacheIndex=null;const a=c.actionByRoot,u=(e._localRoot||this._root).uuid;delete a[u],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,c=o[i],l=t[t.length-1],h=e._cacheIndex;l._cacheIndex=h,t[h]=l,t.pop(),delete c[s],Object.keys(c).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Mh(new Float32Array(2),new Float32Array(2),1,a0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Xa.findByName(i,e):e;const c=o!==null?o.uuid:e,l=this._actionsByClip[c];let h=null;if(n===void 0&&(o!==null?n=o.blendMode:n=tc),l!==void 0){const a=l.actionByRoot[s];if(a!==void 0&&a.blendMode===n)return a;h=l.knownActions[0],o===null&&(o=h._clip)}if(o===null)return null;const d=new o0(this,o,t,n);return this._bindAction(d,h),this._addInactiveAction(d,c,s),d}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Xa.findByName(n,e):e,o=s?s.uuid:e,c=this._actionsByClip[o];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,o);const c=this._bindings,l=this._nActiveBindings;for(let h=0;h!==l;++h)c[h].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let c=0,l=o.length;c!==l;++c){const h=o[c];this._deactivateAction(h);const d=h._cacheIndex,a=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,a._cacheIndex=d,t[d]=a,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const c=n[o].actionByRoot,l=c[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const c=s[o];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Mc{constructor(e,t,n=0,i=1/0){this.ray=new ws(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return qa(e,this,n,t),n.sort(_u),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)qa(e[i],this,n,t);return n.sort(_u),n}}function _u(r,e){return r.distance-e.distance}function qa(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)qa(i[s],e,t,!0)}}const gu=new C,_o=new C;class bh{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){gu.subVectors(e,this.start),_o.subVectors(this.end,this.start);const n=_o.dot(_o);let s=_o.dot(gu)/n;return t&&(s=Ht(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);function vu(r,e){if(e===Gd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ba||e===Zu){let t=r.getIndex();if(t===null){const o=[],c=r.getAttribute("position");if(c!==void 0){for(let l=0;l<c.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ba)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class c0 extends sr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new f0(t)}),this.register(function(t){return new S0(t)}),this.register(function(t){return new T0(t)}),this.register(function(t){return new E0(t)}),this.register(function(t){return new m0(t)}),this.register(function(t){return new _0(t)}),this.register(function(t){return new g0(t)}),this.register(function(t){return new v0(t)}),this.register(function(t){return new d0(t)}),this.register(function(t){return new x0(t)}),this.register(function(t){return new p0(t)}),this.register(function(t){return new M0(t)}),this.register(function(t){return new y0(t)}),this.register(function(t){return new u0(t)}),this.register(function(t){return new A0(t)}),this.register(function(t){return new b0(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const h=Ms.extractUrlBase(e);o=Ms.resolveURL(h,this.path)}else o=Ms.extractUrlBase(e);this.manager.itemStart(e);const c=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Th(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{s.parse(h,o,function(d){t(d),s.manager.itemEnd(e)},c)}catch(d){c(d)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},c={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===wh){try{o[$e.KHR_BINARY_GLTF]=new w0(e)}catch(a){i&&i(a);return}s=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new H0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const a=this.pluginCallbacks[d](h);a.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[a.name]=a,o[a.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const a=s.extensionsUsed[d],u=s.extensionsRequired||[];switch(a){case $e.KHR_MATERIALS_UNLIT:o[a]=new h0;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[a]=new R0(s,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[a]=new C0;break;case $e.KHR_MESH_QUANTIZATION:o[a]=new L0;break;default:u.indexOf(a)>=0&&c[a]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+a+'".')}}h.setExtensions(o),h.setPlugins(c),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function l0(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class u0{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const d=new Be(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Ut);const a=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Ah(d),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new qv(d),h.distance=a;break;case"spot":h=new Wv(d),h.distance=a,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Ti(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],c=(s.extensions&&s.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(l){return n._getNodeRef(t.cache,c,l)})}}class h0{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return un}extendParams(e,t,n){const i=[];e.color=new Be(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ut),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,vt))}return Promise.all(i)}}class d0{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class f0{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const c=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(c,c)}return Promise.all(s)}}class p0{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class m0{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const c=o.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],Ut)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,vt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class _0{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class g0{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const c=o.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(c[0],c[1],c[2],Ut),Promise.all(s)}}class v0{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class x0{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const c=o.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(c[0],c[1],c[2],Ut),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,vt)),Promise.all(s)}}class y0{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class M0{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class S0{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class T0{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],c=i.images[o.source];let l=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class E0{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],c=i.images[o.source];let l=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class A0{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(c){const l=i.byteOffset||0,h=i.byteLength||0,d=i.count,a=i.byteStride,u=new Uint8Array(c,l,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,a,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(d*a);return o.decodeGltfBuffer(new Uint8Array(f),d,a,u,i.mode,i.filter),f})})}else return null}}class b0{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==vn.TRIANGLES&&h.mode!==vn.TRIANGLE_STRIP&&h.mode!==vn.TRIANGLE_FAN&&h.mode!==void 0)return null;const o=n.extensions[this.name].attributes,c=[],l={};for(const h in o)c.push(this.parser.getDependency("accessor",o[h]).then(d=>(l[h]=d,l[h])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(h=>{const d=h.pop(),a=d.isGroup?d.children:[d],u=h[0].count,f=[];for(const _ of a){const g=new Ke,m=new C,p=new Fn,v=new C(1,1,1),x=new wv(_.geometry,_.material,u);for(let T=0;T<u;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&v.fromBufferAttribute(l.SCALE,T),x.setMatrixAt(T,g.compose(m,p,v));for(const T in l)if(T==="_COLOR_0"){const I=l[T];x.instanceColor=new Va(I.array,I.itemSize,I.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&_.geometry.setAttribute(T,l[T]);_t.prototype.copy.call(x,_),this.parser.assignFinalMaterial(x),f.push(x)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const wh="glTF",ls=12,xu={JSON:1313821514,BIN:5130562};class w0{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ls),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ls,s=new DataView(e,ls);let o=0;for(;o<i;){const c=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===xu.JSON){const h=new Uint8Array(e,ls+o,c);this.content=n.decode(h)}else if(l===xu.BIN){const h=ls+o;this.body=e.slice(h,h+c)}o+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class R0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,c={},l={},h={};for(const d in o){const a=Ya[d]||d.toLowerCase();c[a]=o[d]}for(const d in e.attributes){const a=Ya[d]||d.toLowerCase();if(o[d]!==void 0){const u=n.accessors[e.attributes[d]],f=Nr[u.componentType];h[a]=f.name,l[a]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(a,u){i.decodeDracoFile(d,function(f){for(const _ in f.attributes){const g=f.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}a(f)},c,h,Ut,u)})})}}class C0{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class L0{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Rh extends Cs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=c*2,h=c*3,d=i-t,a=(n-t)/d,u=a*a,f=u*a,_=e*h,g=_-h,m=-2*f+3*u,p=f-u,v=1-m,x=p-u+a;for(let T=0;T!==c;T++){const I=o[g+T+c],R=o[g+T+l]*d,L=o[_+T+c],O=o[_+T]*d;s[T]=v*I+x*R+m*L+p*O}return s}}const P0=new Fn;class I0 extends Rh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return P0.fromArray(s).normalize().toArray(s),s}}const vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Nr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yu={9728:Nt,9729:tn,9984:Fa,9985:Gu,9986:Mo,9987:Qi},Mu={33071:Sn,33648:Eo,10497:kr},Ea={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ya={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},D0={CUBICSPLINE:void 0,LINEAR:zr,STEP:Es},Aa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function N0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Rs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),r.DefaultMaterial}function ki(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ti(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function U0(r,e,t){let n=!1,i=!1,s=!1;for(let h=0,d=e.length;h<d;h++){const a=e[h];if(a.POSITION!==void 0&&(n=!0),a.NORMAL!==void 0&&(i=!0),a.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],c=[],l=[];for(let h=0,d=e.length;h<d;h++){const a=e[h];if(n){const u=a.POSITION!==void 0?t.getDependency("accessor",a.POSITION):r.attributes.position;o.push(u)}if(i){const u=a.NORMAL!==void 0?t.getDependency("accessor",a.NORMAL):r.attributes.normal;c.push(u)}if(s){const u=a.COLOR_0!==void 0?t.getDependency("accessor",a.COLOR_0):r.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(l)]).then(function(h){const d=h[0],a=h[1],u=h[2];return n&&(r.morphAttributes.position=d),i&&(r.morphAttributes.normal=a),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function O0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function F0(r){let e;const t=r.extensions&&r.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ba(t.attributes):e=r.indices+":"+ba(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ba(r.targets[n]);return e}function ba(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ja(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function B0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const k0=new Ke;class H0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new l0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new zv(this.options.manager):this.textureLoader=new jv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Th(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const c={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ki(s,c,i),Ti(c,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(c)})).then(function(){e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let c=0,l=o.length;c<l;c++)e[o[c]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,c)=>{const l=this.associations.get(o);l!=null&&this.associations.set(c,l);for(const[h,d]of o.children.entries())s(d,c.children[h])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ms.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ea[i.type],c=Nr[i.componentType],l=i.normalized===!0,h=new c(i.count*o);return Promise.resolve(new yt(h,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const c=o[0],l=Ea[i.type],h=Nr[i.componentType],d=h.BYTES_PER_ELEMENT,a=d*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(f&&f!==a){const p=Math.floor(u/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(v);x||(g=new h(c,p*f,i.count*f/d),x=new Mv(g,f/d),t.cache.add(v,x)),m=new hc(x,l,u%f/d,_)}else c===null?g=new h(i.count*l):g=new h(c,u,i.count*l),m=new yt(g,l,_);if(i.sparse!==void 0){const p=Ea.SCALAR,v=Nr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,I=new v(o[1],x,i.sparse.count*p),R=new h(o[2],T,i.sparse.count*l);c!==null&&(m=new yt(m.array.slice(),m.itemSize,m.normalized));for(let L=0,O=I.length;L<O;L++){const y=I[L];if(m.setX(y,R[L*l]),l>=2&&m.setY(y,R[L*l+1]),l>=3&&m.setZ(y,R[L*l+2]),l>=4&&m.setW(y,R[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let c=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(c=l)}return this.loadTextureImage(e,s,c)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],c=s.images[t],l=(c.uri||c.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||c.name||"",d.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(d.name=c.uri);const u=(s.samplers||{})[o.sampler]||{};return d.magFilter=yu[u.magFilter]||tn,d.minFilter=yu[u.minFilter]||Qi,d.wrapS=Mu[u.wrapS]||kr,d.wrapT=Mu[u.wrapT]||kr,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(a=>a.clone());const o=i.images[e],c=self.URL||self.webkitURL;let l=o.uri||"",h=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(a){h=!0;const u=new Blob([a],{type:o.mimeType});return l=c.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(a){return new Promise(function(u,f){let _=u;t.isImageBitmapLoader===!0&&(_=function(g){const m=new zt(g);m.needsUpdate=!0,u(m)}),t.load(Ms.resolveURL(a,s.path),_,void 0,f)})}).then(function(a){return h===!0&&c.revokeObjectURL(l),a.userData.mimeType=o.mimeType||B0(o.uri),a}).catch(function(a){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),a});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[$e.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const l=s.associations.get(o);o=s.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,c),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let l=this.cache.get(c);l||(l=new xh,qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(c,l)),n=l}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let l=this.cache.get(c);l||(l=new vh,qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(c,l)),n=l}if(i||s||o){let c="ClonedMaterial:"+n.uuid+":";i&&(c+="derivative-tangents:"),s&&(c+="vertex-colors:"),o&&(c+="flat-shading:");let l=this.cache.get(c);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(c,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Rs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const c={},l=s.extensions||{},h=[];if(l[$e.KHR_MATERIALS_UNLIT]){const a=i[$e.KHR_MATERIALS_UNLIT];o=a.getMaterialType(),h.push(a.extendParams(c,s,t))}else{const a=s.pbrMetallicRoughness||{};if(c.color=new Be(1,1,1),c.opacity=1,Array.isArray(a.baseColorFactor)){const u=a.baseColorFactor;c.color.setRGB(u[0],u[1],u[2],Ut),c.opacity=u[3]}a.baseColorTexture!==void 0&&h.push(t.assignTexture(c,"map",a.baseColorTexture,vt)),c.metalness=a.metallicFactor!==void 0?a.metallicFactor:1,c.roughness=a.roughnessFactor!==void 0?a.roughnessFactor:1,a.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(c,"metalnessMap",a.metallicRoughnessTexture)),h.push(t.assignTexture(c,"roughnessMap",a.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,c)})))}s.doubleSided===!0&&(c.side=Vn);const d=s.alphaMode||Aa.OPAQUE;if(d===Aa.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,d===Aa.MASK&&(c.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==un&&(h.push(t.assignTexture(c,"normalMap",s.normalTexture)),c.normalScale=new ke(1,1),s.normalTexture.scale!==void 0)){const a=s.normalTexture.scale;c.normalScale.set(a,a)}if(s.occlusionTexture!==void 0&&o!==un&&(h.push(t.assignTexture(c,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==un){const a=s.emissiveFactor;c.emissive=new Be().setRGB(a[0],a[1],a[2],Ut)}return s.emissiveTexture!==void 0&&o!==un&&h.push(t.assignTexture(c,"emissiveMap",s.emissiveTexture,vt)),Promise.all(h).then(function(){const a=new o(c);return s.name&&(a.name=s.name),Ti(a,s),t.associations.set(a,{materials:e}),s.extensions&&ki(i,a,s),a})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(c){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(l){return Su(l,c,t)})}const o=[];for(let c=0,l=e.length;c<l;c++){const h=e[c],d=F0(h),a=i[d];if(a)o.push(a.promise);else{let u;h.extensions&&h.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?u=s(h):u=Su(new an,h,t),i[d]={primitive:h,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,c=[];for(let l=0,h=o.length;l<h;l++){const d=o[l].material===void 0?N0(this.cache):this.getDependency("material",o[l].material);c.push(d)}return c.push(t.loadGeometries(o)),Promise.all(c).then(function(l){const h=l.slice(0,l.length-1),d=l[l.length-1],a=[];for(let f=0,_=d.length;f<_;f++){const g=d[f],m=o[f];let p;const v=h[f];if(m.mode===vn.TRIANGLES||m.mode===vn.TRIANGLE_STRIP||m.mode===vn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Tv(g,v):new Xt(g,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===vn.TRIANGLE_STRIP?p.geometry=vu(p.geometry,Zu):m.mode===vn.TRIANGLE_FAN&&(p.geometry=vu(p.geometry,Ba));else if(m.mode===vn.LINES)p=new Rv(g,v);else if(m.mode===vn.LINE_STRIP)p=new fc(g,v);else if(m.mode===vn.LINE_LOOP)p=new Cv(g,v);else if(m.mode===vn.POINTS)p=new pc(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&O0(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Ti(p,s),m.extensions&&ki(i,p,m),t.assignFinalMaterial(p),a.push(p)}for(let f=0,_=a.length;f<_;f++)t.associations.set(a[f],{meshes:e,primitives:f});if(a.length===1)return s.extensions&&ki(i,a[0],s),a[0];const u=new Xn;s.extensions&&ki(i,u,s),t.associations.set(u,{meshes:e});for(let f=0,_=a.length;f<_;f++)u.add(a[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(rc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new lc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,c=[],l=[];for(let h=0,d=o.length;h<d;h++){const a=o[h];if(a){c.push(a);const u=new Ke;s!==null&&u.fromArray(s.array,h*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new dc(c,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],c=[],l=[],h=[],d=[];for(let a=0,u=i.channels.length;a<u;a++){const f=i.channels[a],_=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,v=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),c.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),h.push(_),d.push(g))}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h),Promise.all(d)]).then(function(a){const u=a[0],f=a[1],_=a[2],g=a[3],m=a[4],p=[];for(let v=0,x=u.length;v<x;v++){const T=u[v],I=f[v],R=_[v],L=g[v],O=m[v];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const y=n._createAnimationTracks(T,I,R,L,O);if(y)for(let b=0;b<y.length;b++)p.push(y[b])}return new Xa(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(c){if(c.isMesh)for(let l=0,h=i.weights.length;l<h;l++)c.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],c=i.children||[];for(let h=0,d=c.length;h<d;h++)o.push(n.getDependency("node",c[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(h){const d=h[0],a=h[1],u=h[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,k0)});for(let f=0,_=a.length;f<_;f++)d.add(a[f]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",c=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&c.push(l),s.camera!==void 0&&c.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){c.push(h)}),this.nodeCache[e]=Promise.all(c).then(function(h){let d;if(s.isBone===!0?d=new gh:h.length>1?d=new Xn:h.length===1?d=h[0]:d=new _t,d!==h[0])for(let a=0,u=h.length;a<u;a++)d.add(h[a]);if(s.name&&(d.userData.name=s.name,d.name=o),Ti(d,s),s.extensions&&ki(n,d,s),s.matrix!==void 0){const a=new Ke;a.fromArray(s.matrix),d.applyMatrix4(a)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Xn;n.name&&(s.name=i.createUniqueName(n.name)),Ti(s,n),n.extensions&&ki(t,s,n);const o=n.nodes||[],c=[];for(let l=0,h=o.length;l<h;l++)c.push(i.getDependency("node",o[l]));return Promise.all(c).then(function(l){for(let d=0,a=l.length;d<a;d++)s.add(l[d]);const h=d=>{const a=new Map;for(const[u,f]of i.associations)(u instanceof qn||u instanceof zt)&&a.set(u,f);return d.traverse(u=>{const f=i.associations.get(u);f!=null&&a.set(u,f)}),a};return i.associations=h(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],c=e.name?e.name:e.uuid,l=[];xi[s.path]===xi.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(c);let h;switch(xi[s.path]){case xi.weights:h=Wr;break;case xi.rotation:h=tr;break;case xi.position:case xi.scale:h=Xr;break;default:switch(n.itemSize){case 1:h=Wr;break;case 2:case 3:default:h=Xr;break}break}const d=i.interpolation!==void 0?D0[i.interpolation]:zr,a=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){const _=new h(l[u]+"."+xi[s.path],t.array,a,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ja(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof tr?I0:Rh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function z0(r,e,t){const n=e.attributes,i=new qt;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],l=c.min,h=c.max;if(l!==void 0&&h!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(h[0],h[1],h[2])),c.normalized){const d=ja(Nr[c.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const c=new C,l=new C;for(let h=0,d=s.length;h<d;h++){const a=s[h];if(a.POSITION!==void 0){const u=t.json.accessors[a.POSITION],f=u.min,_=u.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),u.normalized){const g=ja(Nr[u.componentType]);l.multiplyScalar(g)}c.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(c)}r.boundingBox=i;const o=new hn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Su(r,e,t){const n=e.attributes,i=[];function s(o,c){return t.getDependency("accessor",o).then(function(l){r.setAttribute(c,l)})}for(const o in n){const c=Ya[o]||o.toLowerCase();c in r.attributes||i.push(s(n[o],c))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(c){r.setIndex(c)});i.push(o)}return ot.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Ti(r,e),z0(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?U0(r,e.targets,t):r})}class Ls{constructor(e=new C(0,0,0),t=new C(0,1,0),n=1){this.start=e,this.end=t,this.radius=n}clone(){return new Ls(this.start.clone(),this.end.clone(),this.radius)}set(e,t,n){this.start.copy(e),this.end.copy(t),this.radius=n}copy(e){this.start.copy(e.start),this.end.copy(e.end),this.radius=e.radius}getCenter(e){return e.copy(this.end).add(this.start).multiplyScalar(.5)}translate(e){this.start.add(e),this.end.add(e)}checkAABBAxis(e,t,n,i,s,o,c,l,h){return(s-e<h||s-n<h)&&(e-o<h||n-o<h)&&(c-t<h||c-i<h)&&(t-l<h||i-l<h)}intersectsBox(e){return this.checkAABBAxis(this.start.x,this.start.y,this.end.x,this.end.y,e.min.x,e.max.x,e.min.y,e.max.y,this.radius)&&this.checkAABBAxis(this.start.x,this.start.z,this.end.x,this.end.z,e.min.x,e.max.x,e.min.z,e.max.z,this.radius)&&this.checkAABBAxis(this.start.y,this.start.z,this.end.y,this.end.z,e.min.y,e.max.y,e.min.z,e.max.z,this.radius)}}const us=new C,hs=new C,go=new C,ds=new C,Hn=new Si,wa=new bh,G0=new bh,vo=new hn,fs=new Ls,V0=new C,W0=new C,X0=new C,q0=1e-10;function Y0(r,e,t=null,n=null){const i=V0.copy(r.end).sub(r.start),s=W0.copy(e.end).sub(e.start),o=X0.copy(e.start).sub(r.start),c=i.dot(s),l=i.dot(i),h=s.dot(s),d=s.dot(o),a=i.dot(o);let u,f;const _=l*h-c*c;if(Math.abs(_)<q0){const g=-d/h,m=(c-d)/h;Math.abs(g-.5)<Math.abs(m-.5)?(u=0,f=g):(u=1,f=m)}else u=(d*c+a*h)/_,f=(u*c-d)/h;f=Math.max(0,Math.min(1,f)),u=Math.max(0,Math.min(1,u)),t&&t.copy(i).multiplyScalar(u).add(r.start),n&&n.copy(s).multiplyScalar(f).add(e.start)}class Sc{constructor(e){this.box=e,this.bounds=new qt,this.subTrees=[],this.triangles=[]}addTriangle(e){return this.bounds.min.x=Math.min(this.bounds.min.x,e.a.x,e.b.x,e.c.x),this.bounds.min.y=Math.min(this.bounds.min.y,e.a.y,e.b.y,e.c.y),this.bounds.min.z=Math.min(this.bounds.min.z,e.a.z,e.b.z,e.c.z),this.bounds.max.x=Math.max(this.bounds.max.x,e.a.x,e.b.x,e.c.x),this.bounds.max.y=Math.max(this.bounds.max.y,e.a.y,e.b.y,e.c.y),this.bounds.max.z=Math.max(this.bounds.max.z,e.a.z,e.b.z,e.c.z),this.triangles.push(e),this}calcBox(){return this.box=this.bounds.clone(),this.box.min.x-=.01,this.box.min.y-=.01,this.box.min.z-=.01,this}split(e){if(!this.box)return;const t=[],n=hs.copy(this.box.max).sub(this.box.min).multiplyScalar(.5);for(let s=0;s<2;s++)for(let o=0;o<2;o++)for(let c=0;c<2;c++){const l=new qt,h=us.set(s,o,c);l.min.copy(this.box.min).add(h.multiply(n)),l.max.copy(l.min).add(n),t.push(new Sc(l))}let i;for(;i=this.triangles.pop();)for(let s=0;s<t.length;s++)t[s].box.intersectsTriangle(i)&&t[s].triangles.push(i);for(let s=0;s<t.length;s++){const o=t[s].triangles.length;o>8&&e<16&&t[s].split(e+1),o!==0&&this.subTrees.push(t[s])}return this}build(){return this.calcBox(),this.split(0),this}getRayTriangles(e,t){for(let n=0;n<this.subTrees.length;n++){const i=this.subTrees[n];if(e.intersectsBox(i.box))if(i.triangles.length>0)for(let s=0;s<i.triangles.length;s++)t.indexOf(i.triangles[s])===-1&&t.push(i.triangles[s]);else i.getRayTriangles(e,t)}return t}triangleCapsuleIntersect(e,t){t.getPlane(Hn);const n=Hn.distanceToPoint(e.start)-e.radius,i=Hn.distanceToPoint(e.end)-e.radius;if(n>0&&i>0||n<-e.radius&&i<-e.radius)return!1;const s=Math.abs(n/(Math.abs(n)+Math.abs(i))),o=us.copy(e.start).lerp(e.end,s);if(t.containsPoint(o))return{normal:Hn.normal.clone(),point:o.clone(),depth:Math.abs(Math.min(n,i))};const c=e.radius*e.radius,l=wa.set(e.start,e.end),h=[[t.a,t.b],[t.b,t.c],[t.c,t.a]];for(let d=0;d<h.length;d++){const a=G0.set(h[d][0],h[d][1]);if(Y0(l,a,go,ds),go.distanceToSquared(ds)<c)return{normal:go.clone().sub(ds).normalize(),point:ds.clone(),depth:e.radius-go.distanceTo(ds)}}return!1}triangleSphereIntersect(e,t){if(t.getPlane(Hn),!e.intersectsPlane(Hn))return!1;const n=Math.abs(Hn.distanceToSphere(e)),i=e.radius*e.radius-n*n,s=Hn.projectPoint(e.center,us);if(t.containsPoint(e.center))return{normal:Hn.normal.clone(),point:s.clone(),depth:Math.abs(Hn.distanceToSphere(e))};const o=[[t.a,t.b],[t.b,t.c],[t.c,t.a]];for(let c=0;c<o.length;c++){wa.set(o[c][0],o[c][1]),wa.closestPointToPoint(s,!0,hs);const l=hs.distanceToSquared(e.center);if(l<i)return{normal:e.center.clone().sub(hs).normalize(),point:hs.clone(),depth:e.radius-Math.sqrt(l)}}return!1}getSphereTriangles(e,t){for(let n=0;n<this.subTrees.length;n++){const i=this.subTrees[n];if(e.intersectsBox(i.box))if(i.triangles.length>0)for(let s=0;s<i.triangles.length;s++)t.indexOf(i.triangles[s])===-1&&t.push(i.triangles[s]);else i.getSphereTriangles(e,t)}}getCapsuleTriangles(e,t){for(let n=0;n<this.subTrees.length;n++){const i=this.subTrees[n];if(e.intersectsBox(i.box))if(i.triangles.length>0)for(let s=0;s<i.triangles.length;s++)t.indexOf(i.triangles[s])===-1&&t.push(i.triangles[s]);else i.getCapsuleTriangles(e,t)}}sphereIntersect(e){vo.copy(e);const t=[];let n,i=!1;this.getSphereTriangles(e,t);for(let s=0;s<t.length;s++)(n=this.triangleSphereIntersect(vo,t[s]))&&(i=!0,vo.center.add(n.normal.multiplyScalar(n.depth)));if(i){const s=vo.center.clone().sub(e.center),o=s.length();return{normal:s.normalize(),depth:o}}return!1}capsuleIntersect(e){fs.copy(e);const t=[];let n,i=!1;this.getCapsuleTriangles(fs,t);for(let s=0;s<t.length;s++)(n=this.triangleCapsuleIntersect(fs,t[s]))&&(i=!0,fs.translate(n.normal.multiplyScalar(n.depth)));if(i){const s=fs.getCenter(new C).sub(e.getCenter(us)),o=s.length();return{normal:s.normalize(),depth:o}}return!1}rayIntersect(e){if(e.direction.length()===0)return;const t=[];let n,i,s=1e100;this.getRayTriangles(e,t);for(let o=0;o<t.length;o++){const c=e.intersectTriangle(t[o].a,t[o].b,t[o].c,!0,us);if(c){const l=c.sub(e.origin).length();s>l&&(i=c.clone().add(e.origin),s=l,n=t[o])}}return s<1e100?{distance:s,triangle:n,position:i}:!1}fromGraphNode(e){return e.updateWorldMatrix(!0,!0),e.traverse(t=>{if(t.isMesh===!0){let n,i=!1;t.geometry.index!==null?(i=!0,n=t.geometry.toNonIndexed()):n=t.geometry;const s=n.getAttribute("position");for(let o=0;o<s.count;o+=3){const c=new C().fromBufferAttribute(s,o),l=new C().fromBufferAttribute(s,o+1),h=new C().fromBufferAttribute(s,o+2);c.applyMatrix4(t.matrixWorld),l.applyMatrix4(t.matrixWorld),h.applyMatrix4(t.matrixWorld),this.addTriangle(new Mn(c,l,h))}i&&n.dispose()}}),this.build(),this}clear(){return this.box=null,this.bounds.makeEmpty(),this.subTrees.length=0,this.triangles.length=0,this}}function Tu(r){const e=new Map,t=new Map,n=r.clone();return Ch(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),c=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=c.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Ch(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Ch(r.children[n],e.children[n],t)}var ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function j0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ps={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(r){(function(){var e=function(){this.init()};e.prototype={init:function(){var a=this||t;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var u=this||t;if(a=parseFloat(a),u.ctx||d(),typeof a<"u"&&a>=0&&a<=1){if(u._volume=a,u._muted)return u;u.usingWebAudio&&u.masterGain.gain.setValueAtTime(a,t.ctx.currentTime);for(var f=0;f<u._howls.length;f++)if(!u._howls[f]._webAudio)for(var _=u._howls[f]._getSoundIds(),g=0;g<_.length;g++){var m=u._howls[f]._soundById(_[g]);m&&m._node&&(m._node.volume=m._volume*a)}return u}return u._volume},mute:function(a){var u=this||t;u.ctx||d(),u._muted=a,u.usingWebAudio&&u.masterGain.gain.setValueAtTime(a?0:u._volume,t.ctx.currentTime);for(var f=0;f<u._howls.length;f++)if(!u._howls[f]._webAudio)for(var _=u._howls[f]._getSoundIds(),g=0;g<_.length;g++){var m=u._howls[f]._soundById(_[g]);m&&m._node&&(m._node.muted=a?!0:m._muted)}return u},stop:function(){for(var a=this||t,u=0;u<a._howls.length;u++)a._howls[u].stop();return a},unload:function(){for(var a=this||t,u=a._howls.length-1;u>=0;u--)a._howls[u].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,d()),a},codecs:function(a){return(this||t)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||t;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var u=new Audio;typeof u.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var u=new Audio;u.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||t,u=null;try{u=typeof Audio<"u"?new Audio:null}catch{return a}if(!u||typeof u.canPlayType!="function")return a;var f=u.canPlayType("audio/mpeg;").replace(/^no$/,""),_=a._navigator?a._navigator.userAgent:"",g=_.match(/OPR\/(\d+)/g),m=g&&parseInt(g[0].split("/")[1],10)<33,p=_.indexOf("Safari")!==-1&&_.indexOf("Chrome")===-1,v=_.match(/Version\/(.*?) /),x=p&&v&&parseInt(v[1],10)<15;return a._codecs={mp3:!!(!m&&(f||u.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!f,opus:!!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(u.canPlayType('audio/wav; codecs="1"')||u.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!u.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!u.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(u.canPlayType("audio/x-m4a;")||u.canPlayType("audio/m4a;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(u.canPlayType("audio/x-m4b;")||u.canPlayType("audio/m4b;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(u.canPlayType("audio/x-mp4;")||u.canPlayType("audio/mp4;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!x&&u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!x&&u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!u.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(u.canPlayType("audio/x-flac;")||u.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||t;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var u=function(f){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var _=new Audio;_._unlocked=!0,a._releaseHtml5Audio(_)}catch{a.noAudio=!0;break}for(var g=0;g<a._howls.length;g++)if(!a._howls[g]._webAudio)for(var m=a._howls[g]._getSoundIds(),p=0;p<m.length;p++){var v=a._howls[g]._soundById(m[p]);v&&v._node&&!v._node._unlocked&&(v._node._unlocked=!0,v._node.load())}a._autoResume();var x=a.ctx.createBufferSource();x.buffer=a._scratchBuffer,x.connect(a.ctx.destination),typeof x.start>"u"?x.noteOn(0):x.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),x.onended=function(){x.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",u,!0),document.removeEventListener("touchend",u,!0),document.removeEventListener("click",u,!0),document.removeEventListener("keydown",u,!0);for(var T=0;T<a._howls.length;T++)a._howls[T]._emit("unlock")}};return document.addEventListener("touchstart",u,!0),document.addEventListener("touchend",u,!0),document.addEventListener("click",u,!0),document.addEventListener("keydown",u,!0),a}},_obtainHtml5Audio:function(){var a=this||t;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var u=new Audio().play();return u&&typeof Promise<"u"&&(u instanceof Promise||typeof u.then=="function")&&u.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var u=this||t;return a._unlocked&&u._html5AudioPool.push(a),u},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!t.usingWebAudio)){for(var u=0;u<a._howls.length;u++)if(a._howls[u]._webAudio){for(var f=0;f<a._howls[u]._sounds.length;f++)if(!a._howls[u]._sounds[f]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var _=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(_,_)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!t.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var u=0;u<a._howls.length;u++)a._howls[u]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var t=new e,n=function(a){var u=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}u.init(a)};n.prototype={init:function(a){var u=this;return t.ctx||d(),u._autoplay=a.autoplay||!1,u._format=typeof a.format!="string"?a.format:[a.format],u._html5=a.html5||!1,u._muted=a.mute||!1,u._loop=a.loop||!1,u._pool=a.pool||5,u._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,u._rate=a.rate||1,u._sprite=a.sprite||{},u._src=typeof a.src!="string"?a.src:[a.src],u._volume=a.volume!==void 0?a.volume:1,u._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},u._duration=0,u._state="unloaded",u._sounds=[],u._endTimers={},u._queue=[],u._playLock=!1,u._onend=a.onend?[{fn:a.onend}]:[],u._onfade=a.onfade?[{fn:a.onfade}]:[],u._onload=a.onload?[{fn:a.onload}]:[],u._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],u._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],u._onpause=a.onpause?[{fn:a.onpause}]:[],u._onplay=a.onplay?[{fn:a.onplay}]:[],u._onstop=a.onstop?[{fn:a.onstop}]:[],u._onmute=a.onmute?[{fn:a.onmute}]:[],u._onvolume=a.onvolume?[{fn:a.onvolume}]:[],u._onrate=a.onrate?[{fn:a.onrate}]:[],u._onseek=a.onseek?[{fn:a.onseek}]:[],u._onunlock=a.onunlock?[{fn:a.onunlock}]:[],u._onresume=[],u._webAudio=t.usingWebAudio&&!u._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(u),u._autoplay&&u._queue.push({event:"play",action:function(){u.play()}}),u._preload&&u._preload!=="none"&&u.load(),u},load:function(){var a=this,u=null;if(t.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var f=0;f<a._src.length;f++){var _,g;if(a._format&&a._format[f])_=a._format[f];else{if(g=a._src[f],typeof g!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}_=/^data:audio\/([^;,]+);/i.exec(g),_||(_=/\.([^.]+)$/.exec(g.split("?",1)[0])),_&&(_=_[1].toLowerCase())}if(_||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),_&&t.codecs(_)){u=a._src[f];break}}if(!u){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=u,a._state="loading",window.location.protocol==="https:"&&u.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new i(a),a._webAudio&&o(a),a},play:function(a,u){var f=this,_=null;if(typeof a=="number")_=a,a=null;else{if(typeof a=="string"&&f._state==="loaded"&&!f._sprite[a])return null;if(typeof a>"u"&&(a="__default",!f._playLock)){for(var g=0,m=0;m<f._sounds.length;m++)f._sounds[m]._paused&&!f._sounds[m]._ended&&(g++,_=f._sounds[m]._id);g===1?a=null:_=null}}var p=_?f._soundById(_):f._inactiveSound();if(!p)return null;if(_&&!a&&(a=p._sprite||"__default"),f._state!=="loaded"){p._sprite=a,p._ended=!1;var v=p._id;return f._queue.push({event:"play",action:function(){f.play(v)}}),v}if(_&&!p._paused)return u||f._loadQueue("play"),p._id;f._webAudio&&t._autoResume();var x=Math.max(0,p._seek>0?p._seek:f._sprite[a][0]/1e3),T=Math.max(0,(f._sprite[a][0]+f._sprite[a][1])/1e3-x),I=T*1e3/Math.abs(p._rate),R=f._sprite[a][0]/1e3,L=(f._sprite[a][0]+f._sprite[a][1])/1e3;p._sprite=a,p._ended=!1;var O=function(){p._paused=!1,p._seek=x,p._start=R,p._stop=L,p._loop=!!(p._loop||f._sprite[a][2])};if(x>=L){f._ended(p);return}var y=p._node;if(f._webAudio){var b=function(){f._playLock=!1,O(),f._refreshBuffer(p);var N=p._muted||f._muted?0:p._volume;y.gain.setValueAtTime(N,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof y.bufferSource.start>"u"?p._loop?y.bufferSource.noteGrainOn(0,x,86400):y.bufferSource.noteGrainOn(0,x,T):p._loop?y.bufferSource.start(0,x,86400):y.bufferSource.start(0,x,T),I!==1/0&&(f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),I)),u||setTimeout(function(){f._emit("play",p._id),f._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?b():(f._playLock=!0,f.once("resume",b),f._clearTimer(p._id))}else{var V=function(){y.currentTime=x,y.muted=p._muted||f._muted||t._muted||y.muted,y.volume=p._volume*t.volume(),y.playbackRate=p._rate;try{var N=y.play();if(N&&typeof Promise<"u"&&(N instanceof Promise||typeof N.then=="function")?(f._playLock=!0,O(),N.then(function(){f._playLock=!1,y._unlocked=!0,u?f._loadQueue():f._emit("play",p._id)}).catch(function(){f._playLock=!1,f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):u||(f._playLock=!1,O(),f._emit("play",p._id)),y.playbackRate=p._rate,y.paused){f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||p._loop?f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),I):(f._endTimers[p._id]=function(){f._ended(p),y.removeEventListener("ended",f._endTimers[p._id],!1)},y.addEventListener("ended",f._endTimers[p._id],!1))}catch(G){f._emit("playerror",p._id,G)}};y.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(y.src=f._src,y.load());var X=window&&window.ejecta||!y.readyState&&t._navigator.isCocoonJS;if(y.readyState>=3||X)V();else{f._playLock=!0,f._state="loading";var ne=function(){f._state="loaded",V(),y.removeEventListener(t._canPlayEvent,ne,!1)};y.addEventListener(t._canPlayEvent,ne,!1),f._clearTimer(p._id)}}return p._id},pause:function(a){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"pause",action:function(){u.pause(a)}}),u;for(var f=u._getSoundIds(a),_=0;_<f.length;_++){u._clearTimer(f[_]);var g=u._soundById(f[_]);if(g&&!g._paused&&(g._seek=u.seek(f[_]),g._rateSeek=0,g._paused=!0,u._stopFade(f[_]),g._node))if(u._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),u._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||u._emit("pause",g?g._id:null)}return u},stop:function(a,u){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"stop",action:function(){f.stop(a)}}),f;for(var _=f._getSoundIds(a),g=0;g<_.length;g++){f._clearTimer(_[g]);var m=f._soundById(_[g]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,f._stopFade(_[g]),m._node&&(f._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),f._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&f._clearSound(m._node))),u||f._emit("stop",m._id))}return f},mute:function(a,u){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"mute",action:function(){f.mute(a,u)}}),f;if(typeof u>"u")if(typeof a=="boolean")f._muted=a;else return f._muted;for(var _=f._getSoundIds(u),g=0;g<_.length;g++){var m=f._soundById(_[g]);m&&(m._muted=a,m._interval&&f._stopFade(m._id),f._webAudio&&m._node?m._node.gain.setValueAtTime(a?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:a),f._emit("mute",m._id))}return f},volume:function(){var a=this,u=arguments,f,_;if(u.length===0)return a._volume;if(u.length===1||u.length===2&&typeof u[1]>"u"){var g=a._getSoundIds(),m=g.indexOf(u[0]);m>=0?_=parseInt(u[0],10):f=parseFloat(u[0])}else u.length>=2&&(f=parseFloat(u[0]),_=parseInt(u[1],10));var p;if(typeof f<"u"&&f>=0&&f<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,u)}}),a;typeof _>"u"&&(a._volume=f),_=a._getSoundIds(_);for(var v=0;v<_.length;v++)p=a._soundById(_[v]),p&&(p._volume=f,u[2]||a._stopFade(_[v]),a._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(f,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=f*t.volume()),a._emit("volume",p._id))}else return p=_?a._soundById(_):a._sounds[0],p?p._volume:0;return a},fade:function(a,u,f,_){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(a,u,f,_)}}),g;a=Math.min(Math.max(0,parseFloat(a)),1),u=Math.min(Math.max(0,parseFloat(u)),1),f=parseFloat(f),g.volume(a,_);for(var m=g._getSoundIds(_),p=0;p<m.length;p++){var v=g._soundById(m[p]);if(v){if(_||g._stopFade(m[p]),g._webAudio&&!v._muted){var x=t.ctx.currentTime,T=x+f/1e3;v._volume=a,v._node.gain.setValueAtTime(a,x),v._node.gain.linearRampToValueAtTime(u,T)}g._startFadeInterval(v,a,u,f,m[p],typeof _>"u")}}return g},_startFadeInterval:function(a,u,f,_,g,m){var p=this,v=u,x=f-u,T=Math.abs(x/.01),I=Math.max(4,T>0?_/T:_),R=Date.now();a._fadeTo=f,a._interval=setInterval(function(){var L=(Date.now()-R)/_;R=Date.now(),v+=x*L,v=Math.round(v*100)/100,x<0?v=Math.max(f,v):v=Math.min(f,v),p._webAudio?a._volume=v:p.volume(v,a._id,!0),m&&(p._volume=v),(f<u&&v<=f||f>u&&v>=f)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,p.volume(f,a._id),p._emit("fade",a._id))},I)},_stopFade:function(a){var u=this,f=u._soundById(a);return f&&f._interval&&(u._webAudio&&f._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(f._interval),f._interval=null,u.volume(f._fadeTo,a),f._fadeTo=null,u._emit("fade",a)),u},loop:function(){var a=this,u=arguments,f,_,g;if(u.length===0)return a._loop;if(u.length===1)if(typeof u[0]=="boolean")f=u[0],a._loop=f;else return g=a._soundById(parseInt(u[0],10)),g?g._loop:!1;else u.length===2&&(f=u[0],_=parseInt(u[1],10));for(var m=a._getSoundIds(_),p=0;p<m.length;p++)g=a._soundById(m[p]),g&&(g._loop=f,a._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=f,f&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,a.playing(m[p])&&(a.pause(m[p],!0),a.play(m[p],!0)))));return a},rate:function(){var a=this,u=arguments,f,_;if(u.length===0)_=a._sounds[0]._id;else if(u.length===1){var g=a._getSoundIds(),m=g.indexOf(u[0]);m>=0?_=parseInt(u[0],10):f=parseFloat(u[0])}else u.length===2&&(f=parseFloat(u[0]),_=parseInt(u[1],10));var p;if(typeof f=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,u)}}),a;typeof _>"u"&&(a._rate=f),_=a._getSoundIds(_);for(var v=0;v<_.length;v++)if(p=a._soundById(_[v]),p){a.playing(_[v])&&(p._rateSeek=a.seek(_[v]),p._playStart=a._webAudio?t.ctx.currentTime:p._playStart),p._rate=f,a._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(f,t.ctx.currentTime):p._node&&(p._node.playbackRate=f);var x=a.seek(_[v]),T=(a._sprite[p._sprite][0]+a._sprite[p._sprite][1])/1e3-x,I=T*1e3/Math.abs(p._rate);(a._endTimers[_[v]]||!p._paused)&&(a._clearTimer(_[v]),a._endTimers[_[v]]=setTimeout(a._ended.bind(a,p),I)),a._emit("rate",p._id)}}else return p=a._soundById(_),p?p._rate:a._rate;return a},seek:function(){var a=this,u=arguments,f,_;if(u.length===0)a._sounds.length&&(_=a._sounds[0]._id);else if(u.length===1){var g=a._getSoundIds(),m=g.indexOf(u[0]);m>=0?_=parseInt(u[0],10):a._sounds.length&&(_=a._sounds[0]._id,f=parseFloat(u[0]))}else u.length===2&&(f=parseFloat(u[0]),_=parseInt(u[1],10));if(typeof _>"u")return 0;if(typeof f=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,u)}}),a;var p=a._soundById(_);if(p)if(typeof f=="number"&&f>=0){var v=a.playing(_);v&&a.pause(_,!0),p._seek=f,p._ended=!1,a._clearTimer(_),!a._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=f);var x=function(){v&&a.play(_,!0),a._emit("seek",_)};if(v&&!a._webAudio){var T=function(){a._playLock?setTimeout(T,0):x()};setTimeout(T,0)}else x()}else if(a._webAudio){var I=a.playing(_)?t.ctx.currentTime-p._playStart:0,R=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(R+I*Math.abs(p._rate))}else return p._node.currentTime;return a},playing:function(a){var u=this;if(typeof a=="number"){var f=u._soundById(a);return f?!f._paused:!1}for(var _=0;_<u._sounds.length;_++)if(!u._sounds[_]._paused)return!0;return!1},duration:function(a){var u=this,f=u._duration,_=u._soundById(a);return _&&(f=u._sprite[_._sprite][1]/1e3),f},state:function(){return this._state},unload:function(){for(var a=this,u=a._sounds,f=0;f<u.length;f++)u[f]._paused||a.stop(u[f]._id),a._webAudio||(a._clearSound(u[f]._node),u[f]._node.removeEventListener("error",u[f]._errorFn,!1),u[f]._node.removeEventListener(t._canPlayEvent,u[f]._loadFn,!1),u[f]._node.removeEventListener("ended",u[f]._endFn,!1),t._releaseHtml5Audio(u[f]._node)),delete u[f]._node,a._clearTimer(u[f]._id);var _=t._howls.indexOf(a);_>=0&&t._howls.splice(_,1);var g=!0;for(f=0;f<t._howls.length;f++)if(t._howls[f]._src===a._src||a._src.indexOf(t._howls[f]._src)>=0){g=!1;break}return s&&g&&delete s[a._src],t.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,u,f,_){var g=this,m=g["_on"+a];return typeof u=="function"&&m.push(_?{id:f,fn:u,once:_}:{id:f,fn:u}),g},off:function(a,u,f){var _=this,g=_["_on"+a],m=0;if(typeof u=="number"&&(f=u,u=null),u||f)for(m=0;m<g.length;m++){var p=f===g[m].id;if(u===g[m].fn&&p||!u&&p){g.splice(m,1);break}}else if(a)_["_on"+a]=[];else{var v=Object.keys(_);for(m=0;m<v.length;m++)v[m].indexOf("_on")===0&&Array.isArray(_[v[m]])&&(_[v[m]]=[])}return _},once:function(a,u,f){var _=this;return _.on(a,u,f,1),_},_emit:function(a,u,f){for(var _=this,g=_["_on"+a],m=g.length-1;m>=0;m--)(!g[m].id||g[m].id===u||a==="load")&&(setTimeout((function(p){p.call(this,u,f)}).bind(_,g[m].fn),0),g[m].once&&_.off(a,g[m].fn,g[m].id));return _._loadQueue(a),_},_loadQueue:function(a){var u=this;if(u._queue.length>0){var f=u._queue[0];f.event===a&&(u._queue.shift(),u._loadQueue()),a||f.action()}return u},_ended:function(a){var u=this,f=a._sprite;if(!u._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(u._ended.bind(u,a),100),u;var _=!!(a._loop||u._sprite[f][2]);if(u._emit("end",a._id),!u._webAudio&&_&&u.stop(a._id,!0).play(a._id),u._webAudio&&_){u._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=t.ctx.currentTime;var g=(a._stop-a._start)*1e3/Math.abs(a._rate);u._endTimers[a._id]=setTimeout(u._ended.bind(u,a),g)}return u._webAudio&&!_&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,u._clearTimer(a._id),u._cleanBuffer(a._node),t._autoSuspend()),!u._webAudio&&!_&&u.stop(a._id,!0),u},_clearTimer:function(a){var u=this;if(u._endTimers[a]){if(typeof u._endTimers[a]!="function")clearTimeout(u._endTimers[a]);else{var f=u._soundById(a);f&&f._node&&f._node.removeEventListener("ended",u._endTimers[a],!1)}delete u._endTimers[a]}return u},_soundById:function(a){for(var u=this,f=0;f<u._sounds.length;f++)if(a===u._sounds[f]._id)return u._sounds[f];return null},_inactiveSound:function(){var a=this;a._drain();for(var u=0;u<a._sounds.length;u++)if(a._sounds[u]._ended)return a._sounds[u].reset();return new i(a)},_drain:function(){var a=this,u=a._pool,f=0,_=0;if(!(a._sounds.length<u)){for(_=0;_<a._sounds.length;_++)a._sounds[_]._ended&&f++;for(_=a._sounds.length-1;_>=0;_--){if(f<=u)return;a._sounds[_]._ended&&(a._webAudio&&a._sounds[_]._node&&a._sounds[_]._node.disconnect(0),a._sounds.splice(_,1),f--)}}},_getSoundIds:function(a){var u=this;if(typeof a>"u"){for(var f=[],_=0;_<u._sounds.length;_++)f.push(u._sounds[_]._id);return f}else return[a]},_refreshBuffer:function(a){var u=this;return a._node.bufferSource=t.ctx.createBufferSource(),a._node.bufferSource.buffer=s[u._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,t.ctx.currentTime),u},_cleanBuffer:function(a){var u=this,f=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return u;if(t._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),f))try{a.bufferSource.buffer=t._scratchBuffer}catch{}return a.bufferSource=null,u},_clearSound:function(a){var u=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);u||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(a){this._parent=a,this.init()};i.prototype={init:function(){var a=this,u=a._parent;return a._muted=u._muted,a._loop=u._loop,a._volume=u._volume,a._rate=u._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,u._sounds.push(a),a.create(),a},create:function(){var a=this,u=a._parent,f=t._muted||a._muted||a._parent._muted?0:a._volume;return u._webAudio?(a._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),a._node.gain.setValueAtTime(f,t.ctx.currentTime),a._node.paused=!0,a._node.connect(t.masterGain)):t.noAudio||(a._node=t._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(t._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=u._src,a._node.preload=u._preload===!0?"auto":u._preload,a._node.volume=f*t.volume(),a._node.load()),a},reset:function(){var a=this,u=a._parent;return a._muted=u._muted,a._loop=u._loop,a._volume=u._volume,a._rate=u._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,u=a._parent;u._duration=Math.ceil(a._node.duration*10)/10,Object.keys(u._sprite).length===0&&(u._sprite={__default:[0,u._duration*1e3]}),u._state!=="loaded"&&(u._state="loaded",u._emit("load"),u._loadQueue()),a._node.removeEventListener(t._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,u=a._parent;u._duration===1/0&&(u._duration=Math.ceil(a._node.duration*10)/10,u._sprite.__default[1]===1/0&&(u._sprite.__default[1]=u._duration*1e3),u._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var s={},o=function(a){var u=a._src;if(s[u]){a._duration=s[u].duration,h(a);return}if(/^data:[^;]+;base64,/.test(u)){for(var f=atob(u.split(",")[1]),_=new Uint8Array(f.length),g=0;g<f.length;++g)_[g]=f.charCodeAt(g);l(_.buffer,a)}else{var m=new XMLHttpRequest;m.open(a._xhr.method,u,!0),m.withCredentials=a._xhr.withCredentials,m.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(p){m.setRequestHeader(p,a._xhr.headers[p])}),m.onload=function(){var p=(m.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}l(m.response,a)},m.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete s[u],a.load())},c(m)}},c=function(a){try{a.send()}catch{a.onerror()}},l=function(a,u){var f=function(){u._emit("loaderror",null,"Decoding audio data failed.")},_=function(g){g&&u._sounds.length>0?(s[u._src]=g,h(u,g)):f()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(a).then(_).catch(f):t.ctx.decodeAudioData(a,_,f)},h=function(a,u){u&&!a._duration&&(a._duration=u.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},d=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),u=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),f=u?parseInt(u[1],10):null;if(a&&f&&f<9){var _=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!_&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};r.Howler=t,r.Howl=n,typeof ps<"u"?(ps.HowlerGlobal=e,ps.Howler=t,ps.Howl=n,ps.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,i=typeof i!="number"?s._pos[2]:i,typeof t=="number")s._pos=[t,n,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,i,s,o,c){var l=this;if(!l.ctx||!l.ctx.listener)return l;var h=l._orientation;if(n=typeof n!="number"?h[1]:n,i=typeof i!="number"?h[2]:i,s=typeof s!="number"?h[3]:s,o=typeof o!="number"?h[4]:o,c=typeof c!="number"?h[5]:c,typeof t=="number")l._orientation=[t,n,i,s,o,c],typeof l.ctx.listener.forwardX<"u"?(l.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),l.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),l.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),l.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),l.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),l.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):l.ctx.listener.setOrientation(t,n,i,s,o,c);else return h;return l},Howl.prototype.init=function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var o=i._getSoundIds(n),c=0;c<o.length;c++){var l=i._soundById(o[c]);if(l)if(typeof t=="number")l._stereo=t,l._pos=[t,0,0],l._node&&(l._pannerAttr.panningModel="equalpower",(!l._panner||!l._panner.pan)&&e(l,s),s==="spatial"?typeof l._panner.positionX<"u"?(l._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),l._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),l._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):l._panner.setPosition(t,0,0):l._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",l._id);else return l._stereo}return i},Howl.prototype.pos=function(t,n,i,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,n,i,s)}}),o;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof t=="number")o._pos=[t,n,i];else return o._pos;for(var c=o._getSoundIds(s),l=0;l<c.length;l++){var h=o._soundById(c[l]);if(h)if(typeof t=="number")h._pos=[t,n,i],h._node&&((!h._panner||h._panner.pan)&&e(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setPosition(t,n,i)),o._emit("pos",h._id);else return h._pos}return o},Howl.prototype.orientation=function(t,n,i,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,i,s)}}),o;if(n=typeof n!="number"?o._orientation[1]:n,i=typeof i!="number"?o._orientation[2]:i,typeof s>"u")if(typeof t=="number")o._orientation=[t,n,i];else return o._orientation;for(var c=o._getSoundIds(s),l=0;l<c.length;l++){var h=o._soundById(c[l]);if(h)if(typeof t=="number")h._orientation=[t,n,i],h._node&&(h._panner||(h._pos||(h._pos=o._pos||[0,0,-.5]),e(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setOrientation(t,n,i)),o._emit("orientation",h._id);else return h._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,s,o;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(n[0],10)),o?o._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],s=parseInt(n[1],10));for(var c=t._getSoundIds(s),l=0;l<c.length;l++)if(o=t._soundById(c[l]),o){var h=o._pannerAttr;h={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:h.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:h.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:h.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:h.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:h.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:h.panningModel};var d=o._panner;d||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),d=o._panner),d.coneInnerAngle=h.coneInnerAngle,d.coneOuterAngle=h.coneOuterAngle,d.coneOuterGain=h.coneOuterGain,d.distanceModel=h.distanceModel,d.maxDistance=h.maxDistance,d.refDistance=h.refDistance,d.rolloffFactor=h.rolloffFactor,d.panningModel=h.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(Ps);var Lh={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(r){(function(e,t,n,i){var s=["","webkit","Moz","MS","ms","o"],o=t.createElement("div"),c="function",l=Math.round,h=Math.abs,d=Date.now;function a(M,E,P){return setTimeout(x(M,P),E)}function u(M,E,P){return Array.isArray(M)?(f(M,P[E],P),!0):!1}function f(M,E,P){var H;if(M)if(M.forEach)M.forEach(E,P);else if(M.length!==i)for(H=0;H<M.length;)E.call(P,M[H],H,M),H++;else for(H in M)M.hasOwnProperty(H)&&E.call(P,M[H],H,M)}function _(M,E,P){var H="DEPRECATED METHOD: "+E+`
`+P+` AT 
`;return function(){var Q=new Error("get-stack-trace"),_e=Q&&Q.stack?Q.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",Ze=e.console&&(e.console.warn||e.console.log);return Ze&&Ze.call(e.console,H,_e),M.apply(this,arguments)}}var g;typeof Object.assign!="function"?g=function(E){if(E===i||E===null)throw new TypeError("Cannot convert undefined or null to object");for(var P=Object(E),H=1;H<arguments.length;H++){var Q=arguments[H];if(Q!==i&&Q!==null)for(var _e in Q)Q.hasOwnProperty(_e)&&(P[_e]=Q[_e])}return P}:g=Object.assign;var m=_(function(E,P,H){for(var Q=Object.keys(P),_e=0;_e<Q.length;)(!H||H&&E[Q[_e]]===i)&&(E[Q[_e]]=P[Q[_e]]),_e++;return E},"extend","Use `assign`."),p=_(function(E,P){return m(E,P,!0)},"merge","Use `assign`.");function v(M,E,P){var H=E.prototype,Q;Q=M.prototype=Object.create(H),Q.constructor=M,Q._super=H,P&&g(Q,P)}function x(M,E){return function(){return M.apply(E,arguments)}}function T(M,E){return typeof M==c?M.apply(E&&E[0]||i,E):M}function I(M,E){return M===i?E:M}function R(M,E,P){f(b(E),function(H){M.addEventListener(H,P,!1)})}function L(M,E,P){f(b(E),function(H){M.removeEventListener(H,P,!1)})}function O(M,E){for(;M;){if(M==E)return!0;M=M.parentNode}return!1}function y(M,E){return M.indexOf(E)>-1}function b(M){return M.trim().split(/\s+/g)}function V(M,E,P){if(M.indexOf&&!P)return M.indexOf(E);for(var H=0;H<M.length;){if(P&&M[H][P]==E||!P&&M[H]===E)return H;H++}return-1}function X(M){return Array.prototype.slice.call(M,0)}function ne(M,E,P){for(var H=[],Q=[],_e=0;_e<M.length;){var Ze=M[_e][E];V(Q,Ze)<0&&H.push(M[_e]),Q[_e]=Ze,_e++}return H=H.sort(function(Ft,Yt){return Ft[E]>Yt[E]}),H}function N(M,E){for(var P,H,Q=E[0].toUpperCase()+E.slice(1),_e=0;_e<s.length;){if(P=s[_e],H=P?P+Q:E,H in M)return H;_e++}return i}var G=1;function Y(){return G++}function Z(M){var E=M.ownerDocument||M;return E.defaultView||E.parentWindow||e}var j=/mobile|tablet|ip(ad|hone|od)|android/i,K="ontouchstart"in e,$=N(e,"PointerEvent")!==i,oe=K&&j.test(navigator.userAgent),se="touch",q="pen",J="mouse",fe="kinect",Te=25,pe=1,De=2,xe=4,ye=8,Ye=1,B=2,xt=4,Ee=8,Ue=16,me=B|xt,nt=Ee|Ue,He=me|nt,w=["x","y"],S=["clientX","clientY"];function F(M,E){var P=this;this.manager=M,this.callback=E,this.element=M.element,this.target=M.options.inputTarget,this.domHandler=function(H){T(M.options.enable,[M])&&P.handler(H)},this.init()}F.prototype={handler:function(){},init:function(){this.evEl&&R(this.element,this.evEl,this.domHandler),this.evTarget&&R(this.target,this.evTarget,this.domHandler),this.evWin&&R(Z(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&L(this.element,this.evEl,this.domHandler),this.evTarget&&L(this.target,this.evTarget,this.domHandler),this.evWin&&L(Z(this.element),this.evWin,this.domHandler)}};function ie(M){var E,P=M.options.inputClass;return P?E=P:$?E=le:oe?E=St:K?E=di:E=dt,new E(M,te)}function te(M,E,P){var H=P.pointers.length,Q=P.changedPointers.length,_e=E&pe&&H-Q===0,Ze=E&(xe|ye)&&H-Q===0;P.isFirst=!!_e,P.isFinal=!!Ze,_e&&(M.session={}),P.eventType=E,re(M,P),M.emit("hammer.input",P),M.recognize(P),M.session.prevInput=P}function re(M,E){var P=M.session,H=E.pointers,Q=H.length;P.firstInput||(P.firstInput=ge(E)),Q>1&&!P.firstMultiple?P.firstMultiple=ge(E):Q===1&&(P.firstMultiple=!1);var _e=P.firstInput,Ze=P.firstMultiple,Pt=Ze?Ze.center:_e.center,Ft=E.center=Ce(H);E.timeStamp=d(),E.deltaTime=E.timeStamp-_e.timeStamp,E.angle=Ve(Pt,Ft),E.distance=et(Pt,Ft),Me(P,E),E.offsetDirection=ee(E.deltaX,E.deltaY);var Yt=ze(E.deltaTime,E.deltaX,E.deltaY);E.overallVelocityX=Yt.x,E.overallVelocityY=Yt.y,E.overallVelocity=h(Yt.x)>h(Yt.y)?Yt.x:Yt.y,E.scale=Ze?be(Ze.pointers,H):1,E.rotation=Ze?Fe(Ze.pointers,H):0,E.maxPointers=P.prevInput?E.pointers.length>P.prevInput.maxPointers?E.pointers.length:P.prevInput.maxPointers:E.pointers.length,he(P,E);var kn=M.element;O(E.srcEvent.target,kn)&&(kn=E.srcEvent.target),E.target=kn}function Me(M,E){var P=E.center,H=M.offsetDelta||{},Q=M.prevDelta||{},_e=M.prevInput||{};(E.eventType===pe||_e.eventType===xe)&&(Q=M.prevDelta={x:_e.deltaX||0,y:_e.deltaY||0},H=M.offsetDelta={x:P.x,y:P.y}),E.deltaX=Q.x+(P.x-H.x),E.deltaY=Q.y+(P.y-H.y)}function he(M,E){var P=M.lastInterval||E,H=E.timeStamp-P.timeStamp,Q,_e,Ze,Pt;if(E.eventType!=ye&&(H>Te||P.velocity===i)){var Ft=E.deltaX-P.deltaX,Yt=E.deltaY-P.deltaY,kn=ze(H,Ft,Yt);_e=kn.x,Ze=kn.y,Q=h(kn.x)>h(kn.y)?kn.x:kn.y,Pt=ee(Ft,Yt),M.lastInterval=E}else Q=P.velocity,_e=P.velocityX,Ze=P.velocityY,Pt=P.direction;E.velocity=Q,E.velocityX=_e,E.velocityY=Ze,E.direction=Pt}function ge(M){for(var E=[],P=0;P<M.pointers.length;)E[P]={clientX:l(M.pointers[P].clientX),clientY:l(M.pointers[P].clientY)},P++;return{timeStamp:d(),pointers:E,center:Ce(E),deltaX:M.deltaX,deltaY:M.deltaY}}function Ce(M){var E=M.length;if(E===1)return{x:l(M[0].clientX),y:l(M[0].clientY)};for(var P=0,H=0,Q=0;Q<E;)P+=M[Q].clientX,H+=M[Q].clientY,Q++;return{x:l(P/E),y:l(H/E)}}function ze(M,E,P){return{x:E/M||0,y:P/M||0}}function ee(M,E){return M===E?Ye:h(M)>=h(E)?M<0?B:xt:E<0?Ee:Ue}function et(M,E,P){P||(P=w);var H=E[P[0]]-M[P[0]],Q=E[P[1]]-M[P[1]];return Math.sqrt(H*H+Q*Q)}function Ve(M,E,P){P||(P=w);var H=E[P[0]]-M[P[0]],Q=E[P[1]]-M[P[1]];return Math.atan2(Q,H)*180/Math.PI}function Fe(M,E){return Ve(E[1],E[0],S)+Ve(M[1],M[0],S)}function be(M,E){return et(E[0],E[1],S)/et(M[0],M[1],S)}var ve={mousedown:pe,mousemove:De,mouseup:xe},Ge="mousedown",it="mousemove mouseup";function dt(){this.evEl=Ge,this.evWin=it,this.pressed=!1,F.apply(this,arguments)}v(dt,F,{handler:function(E){var P=ve[E.type];P&pe&&E.button===0&&(this.pressed=!0),P&De&&E.which!==1&&(P=xe),this.pressed&&(P&xe&&(this.pressed=!1),this.callback(this.manager,P,{pointers:[E],changedPointers:[E],pointerType:J,srcEvent:E}))}});var Xe={pointerdown:pe,pointermove:De,pointerup:xe,pointercancel:ye,pointerout:ye},ae={2:se,3:q,4:J,5:fe},D="pointerdown",ue="pointermove pointerup pointercancel";e.MSPointerEvent&&!e.PointerEvent&&(D="MSPointerDown",ue="MSPointerMove MSPointerUp MSPointerCancel");function le(){this.evEl=D,this.evWin=ue,F.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}v(le,F,{handler:function(E){var P=this.store,H=!1,Q=E.type.toLowerCase().replace("ms",""),_e=Xe[Q],Ze=ae[E.pointerType]||E.pointerType,Pt=Ze==se,Ft=V(P,E.pointerId,"pointerId");_e&pe&&(E.button===0||Pt)?Ft<0&&(P.push(E),Ft=P.length-1):_e&(xe|ye)&&(H=!0),!(Ft<0)&&(P[Ft]=E,this.callback(this.manager,_e,{pointers:P,changedPointers:[E],pointerType:Ze,srcEvent:E}),H&&P.splice(Ft,1))}});var Oe={touchstart:pe,touchmove:De,touchend:xe,touchcancel:ye},Re="touchstart",lt="touchstart touchmove touchend touchcancel";function at(){this.evTarget=Re,this.evWin=lt,this.started=!1,F.apply(this,arguments)}v(at,F,{handler:function(E){var P=Oe[E.type];if(P===pe&&(this.started=!0),!!this.started){var H=Mt.call(this,E,P);P&(xe|ye)&&H[0].length-H[1].length===0&&(this.started=!1),this.callback(this.manager,P,{pointers:H[0],changedPointers:H[1],pointerType:se,srcEvent:E})}}});function Mt(M,E){var P=X(M.touches),H=X(M.changedTouches);return E&(xe|ye)&&(P=ne(P.concat(H),"identifier")),[P,H]}var Ot={touchstart:pe,touchmove:De,touchend:xe,touchcancel:ye},ut="touchstart touchmove touchend touchcancel";function St(){this.evTarget=ut,this.targetIds={},F.apply(this,arguments)}v(St,F,{handler:function(E){var P=Ot[E.type],H=fn.call(this,E,P);H&&this.callback(this.manager,P,{pointers:H[0],changedPointers:H[1],pointerType:se,srcEvent:E})}});function fn(M,E){var P=X(M.touches),H=this.targetIds;if(E&(pe|De)&&P.length===1)return H[P[0].identifier]=!0,[P,P];var Q,_e,Ze=X(M.changedTouches),Pt=[],Ft=this.target;if(_e=P.filter(function(Yt){return O(Yt.target,Ft)}),E===pe)for(Q=0;Q<_e.length;)H[_e[Q].identifier]=!0,Q++;for(Q=0;Q<Ze.length;)H[Ze[Q].identifier]&&Pt.push(Ze[Q]),E&(xe|ye)&&delete H[Ze[Q].identifier],Q++;if(Pt.length)return[ne(_e.concat(Pt),"identifier"),Pt]}var Ns=2500,Us=25;function di(){F.apply(this,arguments);var M=x(this.handler,this);this.touch=new St(this.manager,M),this.mouse=new dt(this.manager,M),this.primaryTouch=null,this.lastTouches=[]}v(di,F,{handler:function(E,P,H){var Q=H.pointerType==se,_e=H.pointerType==J;if(!(_e&&H.sourceCapabilities&&H.sourceCapabilities.firesTouchEvents)){if(Q)Os.call(this,P,H);else if(_e&&Fs.call(this,H))return;this.callback(E,P,H)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function Os(M,E){M&pe?(this.primaryTouch=E.changedPointers[0].identifier,Di.call(this,E)):M&(xe|ye)&&Di.call(this,E)}function Di(M){var E=M.changedPointers[0];if(E.identifier===this.primaryTouch){var P={x:E.clientX,y:E.clientY};this.lastTouches.push(P);var H=this.lastTouches,Q=function(){var _e=H.indexOf(P);_e>-1&&H.splice(_e,1)};setTimeout(Q,Ns)}}function Fs(M){for(var E=M.srcEvent.clientX,P=M.srcEvent.clientY,H=0;H<this.lastTouches.length;H++){var Q=this.lastTouches[H],_e=Math.abs(E-Q.x),Ze=Math.abs(P-Q.y);if(_e<=Us&&Ze<=Us)return!0}return!1}var Qr=N(o.style,"touchAction"),Bs=Qr!==i,ks="compute",Hs="auto",A="manipulation",U="none",z="pan-x",W="pan-y",k=Le();function de(M,E){this.manager=M,this.set(E)}de.prototype={set:function(M){M==ks&&(M=this.compute()),Bs&&this.manager.element.style&&k[M]&&(this.manager.element.style[Qr]=M),this.actions=M.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var M=[];return f(this.manager.recognizers,function(E){T(E.options.enable,[E])&&(M=M.concat(E.getTouchAction()))}),Se(M.join(" "))},preventDefaults:function(M){var E=M.srcEvent,P=M.offsetDirection;if(this.manager.session.prevented){E.preventDefault();return}var H=this.actions,Q=y(H,U)&&!k[U],_e=y(H,W)&&!k[W],Ze=y(H,z)&&!k[z];if(Q){var Pt=M.pointers.length===1,Ft=M.distance<2,Yt=M.deltaTime<250;if(Pt&&Ft&&Yt)return}if(!(Ze&&_e)&&(Q||_e&&P&me||Ze&&P&nt))return this.preventSrc(E)},preventSrc:function(M){this.manager.session.prevented=!0,M.preventDefault()}};function Se(M){if(y(M,U))return U;var E=y(M,z),P=y(M,W);return E&&P?U:E||P?E?z:W:y(M,A)?A:Hs}function Le(){if(!Bs)return!1;var M={},E=e.CSS&&e.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(P){M[P]=E?e.CSS.supports("touch-action",P):!0}),M}var Pe=1,we=2,Ne=4,Ie=8,rt=Ie,At=16,ct=32;function bt(M){this.options=g({},this.defaults,M||{}),this.id=Y(),this.manager=null,this.options.enable=I(this.options.enable,!0),this.state=Pe,this.simultaneous={},this.requireFail=[]}bt.prototype={defaults:{},set:function(M){return g(this.options,M),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(M){if(u(M,"recognizeWith",this))return this;var E=this.simultaneous;return M=fi(M,this),E[M.id]||(E[M.id]=M,M.recognizeWith(this)),this},dropRecognizeWith:function(M){return u(M,"dropRecognizeWith",this)?this:(M=fi(M,this),delete this.simultaneous[M.id],this)},requireFailure:function(M){if(u(M,"requireFailure",this))return this;var E=this.requireFail;return M=fi(M,this),V(E,M)===-1&&(E.push(M),M.requireFailure(this)),this},dropRequireFailure:function(M){if(u(M,"dropRequireFailure",this))return this;M=fi(M,this);var E=V(this.requireFail,M);return E>-1&&this.requireFail.splice(E,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(M){return!!this.simultaneous[M.id]},emit:function(M){var E=this,P=this.state;function H(Q){E.manager.emit(Q,M)}P<Ie&&H(E.options.event+pt(P)),H(E.options.event),M.additionalEvent&&H(M.additionalEvent),P>=Ie&&H(E.options.event+pt(P))},tryEmit:function(M){if(this.canEmit())return this.emit(M);this.state=ct},canEmit:function(){for(var M=0;M<this.requireFail.length;){if(!(this.requireFail[M].state&(ct|Pe)))return!1;M++}return!0},recognize:function(M){var E=g({},M);if(!T(this.options.enable,[this,E])){this.reset(),this.state=ct;return}this.state&(rt|At|ct)&&(this.state=Pe),this.state=this.process(E),this.state&(we|Ne|Ie|At)&&this.tryEmit(E)},process:function(M){},getTouchAction:function(){},reset:function(){}};function pt(M){return M&At?"cancel":M&Ie?"end":M&Ne?"move":M&we?"start":""}function We(M){return M==Ue?"down":M==Ee?"up":M==B?"left":M==xt?"right":""}function fi(M,E){var P=E.manager;return P?P.get(M):M}function Qe(){bt.apply(this,arguments)}v(Qe,bt,{defaults:{pointers:1},attrTest:function(M){var E=this.options.pointers;return E===0||M.pointers.length===E},process:function(M){var E=this.state,P=M.eventType,H=E&(we|Ne),Q=this.attrTest(M);return H&&(P&ye||!Q)?E|At:H||Q?P&xe?E|Ie:E&we?E|Ne:we:ct}});function pn(){Qe.apply(this,arguments),this.pX=null,this.pY=null}v(pn,Qe,{defaults:{event:"pan",threshold:10,pointers:1,direction:He},getTouchAction:function(){var M=this.options.direction,E=[];return M&me&&E.push(W),M&nt&&E.push(z),E},directionTest:function(M){var E=this.options,P=!0,H=M.distance,Q=M.direction,_e=M.deltaX,Ze=M.deltaY;return Q&E.direction||(E.direction&me?(Q=_e===0?Ye:_e<0?B:xt,P=_e!=this.pX,H=Math.abs(M.deltaX)):(Q=Ze===0?Ye:Ze<0?Ee:Ue,P=Ze!=this.pY,H=Math.abs(M.deltaY))),M.direction=Q,P&&H>E.threshold&&Q&E.direction},attrTest:function(M){return Qe.prototype.attrTest.call(this,M)&&(this.state&we||!(this.state&we)&&this.directionTest(M))},emit:function(M){this.pX=M.deltaX,this.pY=M.deltaY;var E=We(M.direction);E&&(M.additionalEvent=this.options.event+E),this._super.emit.call(this,M)}});function or(){Qe.apply(this,arguments)}v(or,Qe,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[U]},attrTest:function(M){return this._super.attrTest.call(this,M)&&(Math.abs(M.scale-1)>this.options.threshold||this.state&we)},emit:function(M){if(M.scale!==1){var E=M.scale<1?"in":"out";M.additionalEvent=this.options.event+E}this._super.emit.call(this,M)}});function jn(){bt.apply(this,arguments),this._timer=null,this._input=null}v(jn,bt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Hs]},process:function(M){var E=this.options,P=M.pointers.length===E.pointers,H=M.distance<E.threshold,Q=M.deltaTime>E.time;if(this._input=M,!H||!P||M.eventType&(xe|ye)&&!Q)this.reset();else if(M.eventType&pe)this.reset(),this._timer=a(function(){this.state=rt,this.tryEmit()},E.time,this);else if(M.eventType&xe)return rt;return ct},reset:function(){clearTimeout(this._timer)},emit:function(M){this.state===rt&&(M&&M.eventType&xe?this.manager.emit(this.options.event+"up",M):(this._input.timeStamp=d(),this.manager.emit(this.options.event,this._input)))}});function Ni(){Qe.apply(this,arguments)}v(Ni,Qe,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[U]},attrTest:function(M){return this._super.attrTest.call(this,M)&&(Math.abs(M.rotation)>this.options.threshold||this.state&we)}});function Tt(){Qe.apply(this,arguments)}v(Tt,Qe,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:me|nt,pointers:1},getTouchAction:function(){return pn.prototype.getTouchAction.call(this)},attrTest:function(M){var E=this.options.direction,P;return E&(me|nt)?P=M.overallVelocity:E&me?P=M.overallVelocityX:E&nt&&(P=M.overallVelocityY),this._super.attrTest.call(this,M)&&E&M.offsetDirection&&M.distance>this.options.threshold&&M.maxPointers==this.options.pointers&&h(P)>this.options.velocity&&M.eventType&xe},emit:function(M){var E=We(M.offsetDirection);E&&this.manager.emit(this.options.event+E,M),this.manager.emit(this.options.event,M)}});function mn(){bt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}v(mn,bt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[A]},process:function(M){var E=this.options,P=M.pointers.length===E.pointers,H=M.distance<E.threshold,Q=M.deltaTime<E.time;if(this.reset(),M.eventType&pe&&this.count===0)return this.failTimeout();if(H&&Q&&P){if(M.eventType!=xe)return this.failTimeout();var _e=this.pTime?M.timeStamp-this.pTime<E.interval:!0,Ze=!this.pCenter||et(this.pCenter,M.center)<E.posThreshold;this.pTime=M.timeStamp,this.pCenter=M.center,!Ze||!_e?this.count=1:this.count+=1,this._input=M;var Pt=this.count%E.taps;if(Pt===0)return this.hasRequireFailures()?(this._timer=a(function(){this.state=rt,this.tryEmit()},E.interval,this),we):rt}return ct},failTimeout:function(){return this._timer=a(function(){this.state=ct},this.options.interval,this),ct},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function _n(M,E){return E=E||{},E.recognizers=I(E.recognizers,_n.defaults.preset),new es(M,E)}_n.VERSION="2.0.7",_n.defaults={domEvents:!1,touchAction:ks,enable:!0,inputTarget:null,inputClass:null,preset:[[Ni,{enable:!1}],[or,{enable:!1},["rotate"]],[Tt,{direction:me}],[pn,{direction:me},["swipe"]],[mn],[mn,{event:"doubletap",taps:2},["tap"]],[jn]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var en=1,ar=2;function es(M,E){this.options=g({},_n.defaults,E||{}),this.options.inputTarget=this.options.inputTarget||M,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=M,this.input=ie(this),this.touchAction=new de(this,this.options.touchAction),ts(this,!0),f(this.options.recognizers,function(P){var H=this.add(new P[0](P[1]));P[2]&&H.recognizeWith(P[2]),P[3]&&H.requireFailure(P[3])},this)}es.prototype={set:function(M){return g(this.options,M),M.touchAction&&this.touchAction.update(),M.inputTarget&&(this.input.destroy(),this.input.target=M.inputTarget,this.input.init()),this},stop:function(M){this.session.stopped=M?ar:en},recognize:function(M){var E=this.session;if(!E.stopped){this.touchAction.preventDefaults(M);var P,H=this.recognizers,Q=E.curRecognizer;(!Q||Q&&Q.state&rt)&&(Q=E.curRecognizer=null);for(var _e=0;_e<H.length;)P=H[_e],E.stopped!==ar&&(!Q||P==Q||P.canRecognizeWith(Q))?P.recognize(M):P.reset(),!Q&&P.state&(we|Ne|Ie)&&(Q=E.curRecognizer=P),_e++}},get:function(M){if(M instanceof bt)return M;for(var E=this.recognizers,P=0;P<E.length;P++)if(E[P].options.event==M)return E[P];return null},add:function(M){if(u(M,"add",this))return this;var E=this.get(M.options.event);return E&&this.remove(E),this.recognizers.push(M),M.manager=this,this.touchAction.update(),M},remove:function(M){if(u(M,"remove",this))return this;if(M=this.get(M),M){var E=this.recognizers,P=V(E,M);P!==-1&&(E.splice(P,1),this.touchAction.update())}return this},on:function(M,E){if(M!==i&&E!==i){var P=this.handlers;return f(b(M),function(H){P[H]=P[H]||[],P[H].push(E)}),this}},off:function(M,E){if(M!==i){var P=this.handlers;return f(b(M),function(H){E?P[H]&&P[H].splice(V(P[H],E),1):delete P[H]}),this}},emit:function(M,E){this.options.domEvents&&jh(M,E);var P=this.handlers[M]&&this.handlers[M].slice();if(!(!P||!P.length)){E.type=M,E.preventDefault=function(){E.srcEvent.preventDefault()};for(var H=0;H<P.length;)P[H](E),H++}},destroy:function(){this.element&&ts(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function ts(M,E){var P=M.element;if(P.style){var H;f(M.options.cssProps,function(Q,_e){H=N(P.style,_e),E?(M.oldCssProps[H]=P.style[H],P.style[H]=Q):P.style[H]=M.oldCssProps[H]||""}),E||(M.oldCssProps={})}}function jh(M,E){var P=t.createEvent("Event");P.initEvent(M,!0,!0),P.gesture=E,E.target.dispatchEvent(P)}g(_n,{INPUT_START:pe,INPUT_MOVE:De,INPUT_END:xe,INPUT_CANCEL:ye,STATE_POSSIBLE:Pe,STATE_BEGAN:we,STATE_CHANGED:Ne,STATE_ENDED:Ie,STATE_RECOGNIZED:rt,STATE_CANCELLED:At,STATE_FAILED:ct,DIRECTION_NONE:Ye,DIRECTION_LEFT:B,DIRECTION_RIGHT:xt,DIRECTION_UP:Ee,DIRECTION_DOWN:Ue,DIRECTION_HORIZONTAL:me,DIRECTION_VERTICAL:nt,DIRECTION_ALL:He,Manager:es,Input:F,TouchAction:de,TouchInput:St,MouseInput:dt,PointerEventInput:le,TouchMouseInput:di,SingleTouchInput:at,Recognizer:bt,AttrRecognizer:Qe,Tap:mn,Pan:pn,Swipe:Tt,Pinch:or,Rotate:Ni,Press:jn,on:R,off:L,each:f,merge:p,extend:m,assign:g,inherit:v,bindFn:x,prefixed:N});var Kh=typeof e<"u"?e:typeof self<"u"?self:{};Kh.Hammer=_n,r.exports?r.exports=_n:e[n]=_n})(window,document,"Hammer")})(Lh);var K0=Lh.exports;const Ra=j0(K0);document.addEventListener("touchmove",r=>{r.preventDefault()},{passive:!1});document.addEventListener("contextmenu",r=>{r.preventDefault()});const Ph=new Kv,Rt=new yv;let ui=parseFloat(localStorage.getItem("gameSensitivity")||"1.0"),qi=localStorage.getItem("gameMuted")==="true";Ps.Howler.mute(qi);const Ca=document.getElementById("btn-settings-toggle"),An=document.getElementById("settings-capsule"),La=document.getElementById("btn-mute"),Eu=document.getElementById("icon-volume-on"),Au=document.getElementById("icon-volume-off"),Ss=document.getElementById("sensitivity-slider");Ss&&(Ss.value=ui.toString());function Ih(){Eu&&Au&&(Eu.style.display=qi?"none":"block",Au.style.display=qi?"block":"none")}Ih();Ca==null||Ca.addEventListener("click",()=>{An==null||An.classList.toggle("closed")});La==null||La.addEventListener("click",()=>{qi=!qi,Ps.Howler.mute(qi),localStorage.setItem("gameMuted",qi.toString()),Ih()});Ss==null||Ss.addEventListener("input",r=>{ui=parseFloat(r.target.value),localStorage.setItem("gameSensitivity",ui.toString())});An==null||An.addEventListener("mousedown",r=>r.stopPropagation());An==null||An.addEventListener("touchstart",r=>r.stopPropagation());An==null||An.addEventListener("pointerdown",r=>r.stopPropagation());let Dt="MENU",Wt=0;const xn=document.getElementById("menu-overlay"),ti=document.getElementById("screen-main-menu"),ni=document.getElementById("screen-confirm-quit"),Ur=document.getElementById("btn-quit-yes"),Or=document.getElementById("btn-quit-no");function Bt(r){var t,n,i;Dt=r;const e=document.getElementById("settings-capsule");if(r==="PLAYING"){(t=document.getElementById("game-ui"))==null||t.style.setProperty("display","block"),xn==null||xn.classList.add("hidden"),ti==null||ti.classList.remove("active"),ni==null||ni.classList.remove("active");const s=document.getElementById("screen-ad-dialog");s==null||s.classList.remove("active");const o=document.getElementById("screen-game-over");if(o==null||o.classList.remove("active"),e==null||e.classList.add("closed"),on==="MOUSE")try{document.body.requestPointerLock()}catch{}}else{const s=document.getElementById("screen-ad-dialog"),o=document.getElementById("screen-game-over");r==="SETTINGS"?((n=document.getElementById("game-ui"))==null||n.style.setProperty("display","block"),xn==null||xn.classList.add("hidden"),e==null||e.classList.remove("closed")):((i=document.getElementById("game-ui"))==null||i.style.setProperty("display","none"),xn==null||xn.classList.remove("hidden"),e==null||e.classList.add("closed"),ti==null||ti.classList.remove("active"),ni==null||ni.classList.remove("active"),s==null||s.classList.remove("active"),o==null||o.classList.remove("active"),r==="MENU"?ti==null||ti.classList.add("active"):r==="CONFIRM_QUIT"?ni==null||ni.classList.add("active"):r==="AD_MENU"?(s==null||s.classList.add("active"),qr&&document.exitPointerLock()):r==="GAME_OVER"&&(o==null||o.classList.add("active"),qr&&document.exitPointerLock(),tx()))}}let Vi=!1;function xo(){const r=document.getElementById("btn-mute"),e=document.querySelector(".slider-wrapper");r==null||r.classList.toggle("focused",Wt===0),e==null||e.classList.toggle("focused",Wt===1),Wt===1&&Vi?e==null||e.classList.add("active-edit"):e==null||e.classList.remove("active-edit")}function bu(){const r=document.getElementById("btn-watch-ad"),e=document.getElementById("btn-cancel-ad");Wt===0?(r==null||r.classList.add("focused"),e==null||e.classList.remove("focused")):(r==null||r.classList.remove("focused"),e==null||e.classList.add("focused"))}function wu(){Or==null||Or.classList.toggle("focused",Wt===0),Ur==null||Ur.classList.toggle("focused",Wt===1)}xn==null||xn.addEventListener("pointerdown",r=>{if(Dt==="MENU"){if(r.pointerType==="mouse"||on==="MOUSE")try{document.body.requestPointerLock()}catch{}Bt("PLAYING")}});Or==null||Or.addEventListener("click",()=>Bt("PLAYING"));Ur==null||Ur.addEventListener("click",()=>location.reload());let Dh=!1;function Z0(){Bt("AD_MENU")}var Uu;(Uu=document.getElementById("btn-watch-ad"))==null||Uu.addEventListener("click",r=>{const e=r.target,t=e.innerText;e.innerText="Watching Ad... (Mock)",e.style.pointerEvents="none",setTimeout(()=>{var n;Dh=!0,(n=document.getElementById("grenade-lock"))==null||n.classList.add("hidden"),e.innerText=t,e.style.pointerEvents="auto",Bt("PLAYING")},3e3)});var Ou;(Ou=document.getElementById("btn-cancel-ad"))==null||Ou.addEventListener("click",()=>{Bt("PLAYING")});const bn=document.getElementById("btn-home");bn==null||bn.addEventListener("mousedown",r=>r.stopPropagation());bn==null||bn.addEventListener("touchstart",r=>r.stopPropagation());bn==null||bn.addEventListener("pointerdown",r=>r.stopPropagation());bn==null||bn.addEventListener("click",()=>{Dt==="PLAYING"&&Bt("CONFIRM_QUIT")});const $0=new Hv;Rt.background=$0.setPath("./assets/cubemaps/").load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]);Rt.environment=Rt.background;const Je=new $t(80,window.innerWidth/window.innerHeight,.1,1e3);Je.rotation.order="YXZ";Rt.add(Je);const Tc=new Ps.Howl({src:["./assets/TokAv.mp3"],volume:.5});function Ho(r,e,t=1){const n=r.play();if(!Je)return;const i=Je.position.distanceTo(e);let s=1;i>20&&(s=1-(i-20)/130,s<.05&&(s=.05)),r.volume(r.volume()*t*s,n);const o=new C().subVectors(e,Je.position).normalize(),c=new C(1,0,0).applyQuaternion(Je.quaternion),l=o.dot(c);r.stereo(l,n)}const Nh=new Gv(9290206,26253,1.5);Nh.position.set(2,1,1);Rt.add(Nh);const dn=new Ah(16777215,2.5);dn.position.set(-5,25,-1);dn.castShadow=!0;dn.shadow.camera.near=.01;dn.shadow.camera.far=500;dn.shadow.camera.right=30;dn.shadow.camera.left=-30;dn.shadow.camera.top=30;dn.shadow.camera.bottom=-30;dn.shadow.mapSize.width=1024;dn.shadow.mapSize.height=1024;dn.shadow.radius=4;dn.shadow.bias=-6e-5;Rt.add(dn);const J0=document.getElementById("app"),Ii=new _h({antialias:!1,powerPreference:"high-performance"});Ii.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Ii.setSize(window.innerWidth,window.innerHeight);Ii.setAnimationLoop(Sx);Ii.shadowMap.enabled=!1;Ii.toneMapping=Hu;J0.appendChild(Ii.domElement);const Cn=document.createElement("div");Cn.style.position="absolute";Cn.style.top="0";Cn.style.left="0";Cn.style.width="100%";Cn.style.height="100%";Cn.style.zIndex="10";Cn.style.pointerEvents="none";document.body.appendChild(Cn);const Ln=document.createElement("div");Ln.style.position="absolute";Ln.style.top="50%";Ln.style.left="50%";Ln.style.width="12px";Ln.style.height="12px";Ln.style.backgroundColor="white";Ln.style.borderRadius="50%";Ln.style.transform="translate(-50%, -50%)";Ln.style.pointerEvents="none";Ln.style.border="2px solid rgba(0,0,0,0.5)";Cn.appendChild(Ln);const Rn=document.createElement("div");Rn.style.position="absolute";Rn.style.top="0";Rn.style.left="0";Rn.style.width="100%";Rn.style.height="100%";Rn.style.backgroundColor="rgba(255, 0, 0, 0)";Rn.style.pointerEvents="none";Rn.style.transition="background-color 0.2s ease-out";Rn.style.zIndex="5";Cn.appendChild(Rn);function Uh(){Rn.style.backgroundColor="rgba(255, 0, 0, 0.4)",setTimeout(()=>{Rn.style.backgroundColor="rgba(255, 0, 0, 0)"},200)}let Li=0,nr=100,Po=1,rn=!1,Ka=0,Ae=null,Oh=0;const Ru=document.getElementById("health-bar"),ms=document.getElementById("health-container"),wt=document.getElementById("btn-grenade-ui"),yi=document.getElementById("score-text");wt==null||wt.addEventListener("click",r=>{r.stopPropagation(),Ds()});wt==null||wt.addEventListener("mousedown",r=>r.stopPropagation());wt==null||wt.addEventListener("touchstart",r=>r.stopPropagation());wt==null||wt.addEventListener("pointerdown",r=>r.stopPropagation());function ir(){Ru&&(Ru.style.width=`${Math.max(0,nr)}%`),yi&&yi.innerText!==Li.toString()?(yi.innerText=Li.toString(),yi.classList.remove("score-hit"),yi.offsetWidth,yi.classList.add("score-hit")):yi&&(yi.innerText=Li.toString()),wt&&(Po<=0?wt.classList.add("empty"):wt.classList.remove("empty"))}function Fh(){if(!ms)return;ms.classList.remove("health-hit"),ms.offsetWidth,ms.classList.add("health-hit");const r=ms.getBoundingClientRect(),e=Math.max(0,nr)/100,t=r.left+5+e*(r.width-10),n=r.top+r.height/2;for(let i=0;i<3;i++){const s=document.createElement("div");s.className="health-particle",s.style.left=t+"px",s.style.top=n+"px";const o=(Math.random()-.5)*60,c=(Math.random()-.5)*60-20;s.style.setProperty("--tx",`${o}px`),s.style.setProperty("--ty",`${c}px`),document.body.appendChild(s),setTimeout(()=>s.remove(),600)}}ir();const Cu=new Mc;let _s=180,Lu="";function Q0(r){if(Dt!=="PLAYING"||rn)return;_s-=r,_s<=0&&(_s=0,Bt("GAME_OVER"));const e=Math.floor(_s/60),t=Math.floor(_s%60),n=`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;if(n!==Lu){Lu=n;const i=document.getElementById("timer-text");i&&(i.innerText=n)}}function ex(){for(let r=0;r<100;r++){const e=document.createElement("div");e.style.position="absolute",e.style.left="50%",e.style.top="50%",e.style.width="10px",e.style.height="10px",e.style.backgroundColor=`hsl(${Math.random()*360}, 100%, 50%)`,e.style.pointerEvents="none",e.style.borderRadius=Math.random()>.5?"50%":"0",e.style.zIndex="10000",document.body.appendChild(e);const t=Math.random()*Math.PI*2,n=2+Math.random()*5;let i=Math.cos(t)*n,s=Math.sin(t)*n-5,o=0;const c=setInterval(()=>{o+=.02,s+=.2,e.style.transform=`translate(calc(-50% + ${i*o*60}px), calc(-50% + ${s*o*60}px)) rotate(${o*1e3}deg)`,o>1.5&&(e.remove(),clearInterval(c))},20)}}function tx(){const r=document.getElementById("go-score"),e=document.getElementById("go-best"),t=document.getElementById("go-new-best");let n=parseInt(localStorage.getItem("strike_arena_best")||"0");r&&(r.innerText=Li.toString()),Li>n?(n=Li,localStorage.setItem("strike_arena_best",n.toString()),t&&(t.style.display="block"),ex()):t&&(t.style.display="none"),e&&(e.innerText=n.toString())}var Fu;(Fu=document.getElementById("btn-restart"))==null||Fu.addEventListener("click",()=>{location.reload()});const Ec=[],nx=new Kr(.03,.03,4),ix=new un({color:16777130,transparent:!0,opacity:.8});for(let r=0;r<15;r++){const e=new Xt(nx,ix.clone());e.visible=!1,Rt.add(e),Ec.push({mesh:e,life:0,startPoint:new C,endPoint:new C})}function Bh(r,e,t=16777130){const n=Ec.find(s=>!s.mesh.visible);if(!n)return;n.startPoint.copy(r),n.endPoint.copy(e),n.mesh.position.copy(r),n.mesh.lookAt(e);const i=n.mesh.material;i.color.setHex(t),i.opacity=.8,n.life=1,n.mesh.visible=!0}function rx(r){Ec.forEach(e=>{if(!e.mesh.visible)return;if(e.life-=r*12,e.life<=0){e.mesh.visible=!1;return}const t=1-e.life;e.mesh.position.lerpVectors(e.startPoint,e.endPoint,t),e.mesh.material.opacity=e.life})}function kh(){if(!document.fullscreenElement){const r=document.documentElement;r.requestFullscreen?r.requestFullscreen().catch(()=>{}):r.webkitRequestFullscreen&&r.webkitRequestFullscreen()}}document.addEventListener("click",kh);document.addEventListener("touchstart",kh,{passive:!0});window.addEventListener("load",()=>{setTimeout(()=>{const r=document.getElementById("splash-screen");r&&(r.classList.add("hidden"),setTimeout(()=>r.remove(),1e3))},4e3)});let qr=!1;document.addEventListener("mousedown",()=>{});document.addEventListener("pointerdown",r=>{if(r.pointerType==="mouse"){if(Dt!=="PLAYING")return;if(qr)r.button===0&&(Is=!0),r.button===2&&Ds();else try{document.body.requestPointerLock()}catch{}}});document.addEventListener("pointerup",r=>{r.pointerType==="mouse"&&r.button===0&&(Is=!1)});document.addEventListener("pointerlockchange",()=>{qr=document.pointerLockElement===document.body,qr||(Is=!1)});document.addEventListener("mousemove",r=>{qr&&on==="MOUSE"&&(Je.rotation.y-=r.movementX*.003*ui,Je.rotation.x-=r.movementY*.003*ui,Je.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,Je.rotation.x)))});document.addEventListener("contextmenu",r=>r.preventDefault());function Hh(r){const e=navigator.getGamepads();let t=null;for(let i=0;i<e.length;i++)if(e[i]){t=e[i];break}if(!t)return;const n=t.vibrationActuator;n&&n.type==="dual-rumble"&&(r==="rifle"?n.playEffect("dual-rumble",{startDelay:0,duration:60,weakMagnitude:.6,strongMagnitude:.2}):r==="shotgun"?n.playEffect("dual-rumble",{startDelay:0,duration:150,weakMagnitude:.8,strongMagnitude:.9}):r==="death"&&n.playEffect("dual-rumble",{startDelay:0,duration:800,weakMagnitude:1,strongMagnitude:1}))}const gt={Y:!1,LT:!1,A:!1,B:!1,Start:!1,Select:!1,Left:!1,Right:!1};function sx(){var c;const r=navigator.getGamepads();let e=null;for(let l=0;l<r.length;l++)if(r[l]){e=r[l];break}if(!e)return;if(e.buttons[9].pressed&&!gt.Start&&(Dt==="PLAYING"?Bt("CONFIRM_QUIT"):Dt==="CONFIRM_QUIT"&&Bt("PLAYING")),e.buttons[8].pressed&&!gt.Select&&(Dt==="PLAYING"?Bt("SETTINGS"):Dt==="SETTINGS"&&Bt("PLAYING")),Dt!=="PLAYING"){const l=e.buttons[0].pressed&&!gt.A,h=e.buttons[1].pressed&&!gt.B,d=e.buttons[14].pressed||e.axes[0]<-.5,a=e.buttons[15].pressed||e.axes[0]>.5;if(Dt==="MENU"&&l){if(on==="MOUSE")try{document.body.requestPointerLock()}catch{}Bt("PLAYING")}if(Dt==="GAME_OVER"&&l&&location.reload(),Dt==="AD_MENU"&&(h&&Bt("PLAYING"),l&&(Wt===0?(c=document.getElementById("btn-watch-ad"))==null||c.click():Bt("PLAYING")),d&&!gt.Left&&(Wt=0,bu()),a&&!gt.Right&&(Wt=1,bu())),Dt==="CONFIRM_QUIT"&&(h&&Bt("PLAYING"),l&&(Wt===0?Bt("PLAYING"):location.reload()),d&&!gt.Left&&(Wt=1,wu()),a&&!gt.Right&&(Wt=0,wu())),Dt==="SETTINGS"){if(h&&(Vi?(Vi=!1,xo()):Bt("PLAYING")),l)if(Wt===0){const u=document.getElementById("btn-mute");u&&u.click()}else Wt===1&&(Vi=!Vi,xo());if(d&&!gt.Left)if(Vi){const u=document.getElementById("sensitivity-slider");u.value=Math.max(.1,parseFloat(u.value)-.1).toString(),u.dispatchEvent(new Event("input"))}else Wt=0,xo();if(a&&!gt.Right)if(Vi){const u=document.getElementById("sensitivity-slider");u.value=Math.min(3,parseFloat(u.value)+.1).toString(),u.dispatchEvent(new Event("input"))}else Wt=1,xo()}gt.Left=d,gt.Right=a,gt.A=e.buttons[0].pressed,gt.B=e.buttons[1].pressed,gt.Start=e.buttons[9].pressed,gt.Select=e.buttons[8].pressed;return}let t=!1;if((Math.abs(e.axes[0])>.1||Math.abs(e.axes[1])>.1||Math.abs(e.axes[2])>.1||Math.abs(e.axes[3])>.1)&&(t=!0),e.buttons.forEach(l=>{l.pressed&&(t=!0)}),t&&Go("GAMEPAD"),on!=="GAMEPAD")return;let n=e.axes[0],i=e.axes[1];Math.abs(n)<.1&&(n=0),Math.abs(i)<.1&&(i=0),bi.set(n,-i);let s=e.axes[2],o=e.axes[3];Math.abs(s)>.1&&(Je.rotation.y-=s*.04*ui),Math.abs(o)>.1&&(Je.rotation.x-=o*.04*ui),Je.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,Je.rotation.x)),Is=e.buttons[7].pressed,e.buttons[0].pressed&&!gt.A&&Un&&(kt.y=10),e.buttons[3].pressed&&!gt.Y&&Lc(),e.buttons[6].pressed&&!gt.LT&&Ds(),gt.Y=e.buttons[3].pressed,gt.LT=e.buttons[6].pressed,gt.Start=e.buttons[9].pressed,gt.Select=e.buttons[8].pressed,gt.A=e.buttons[0].pressed}const Qt=document.createElement("div");Qt.style.position="absolute";Qt.style.left="0";Qt.style.width="50%";Qt.style.height="100%";Qt.style.pointerEvents="auto";Cn.appendChild(Qt);const Bn=document.createElement("div");Bn.style.position="absolute";Bn.style.right="0";Bn.style.width="50%";Bn.style.height="100%";Bn.style.pointerEvents="auto";Bn.style.touchAction="none";Cn.appendChild(Bn);const Za=new ke,gs=new ke;let Io=!1,Do=null;const bi=new ke(0,0),wn=document.createElement("div");wn.style.position="absolute";wn.style.width="100px";wn.style.height="100px";wn.style.backgroundColor="rgba(255, 255, 255, 0.2)";wn.style.borderRadius="50%";wn.style.display="none";wn.style.transform="translate(-50%, -50%)";Qt.appendChild(wn);const sn=document.createElement("div");sn.style.position="absolute";sn.style.width="40px";sn.style.height="40px";sn.style.backgroundColor="rgba(255, 255, 255, 0.6)";sn.style.borderRadius="50%";sn.style.display="none";sn.style.transform="translate(-50%, -50%)";Qt.appendChild(sn);Qt.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&(on!=="TOUCH"&&Go("TOUCH"),!Io&&(Io=!0,Do=r.pointerId,Za.set(r.clientX,r.clientY),wn.style.display="block",wn.style.left=r.clientX+"px",wn.style.top=r.clientY+"px",sn.style.display="block",sn.style.left=r.clientX+"px",sn.style.top=r.clientY+"px"))});const Ar=new ke;Qt.addEventListener("pointermove",r=>{if(!Io||r.pointerId!==Do)return;gs.set(r.clientX,r.clientY),Ar.subVectors(gs,Za);const e=50;Ar.length()>e&&(Ar.normalize().multiplyScalar(e),gs.copy(Za).add(Ar)),sn.style.left=gs.x+"px",sn.style.top=gs.y+"px",bi.set(Ar.x/e,-Ar.y/e)});const Ac=r=>{r.pointerId===Do&&(Io=!1,Do=null,wn.style.display="none",sn.style.display="none",bi.set(0,0))};Qt.addEventListener("pointerup",Ac);Qt.addEventListener("pointercancel",Ac);Qt.addEventListener("pointerout",Ac);let bc=!1,Pr=null,wc=0;Bn.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&(on!=="TOUCH"&&Go("TOUCH"),bc=!0,wc=0,Pr={x:r.clientX,y:r.clientY})});Bn.addEventListener("pointermove",r=>{if(r.pointerType!=="touch"||!bc||!Pr)return;const e=r.clientX-Pr.x,t=r.clientY-Pr.y;wc+=Math.abs(e)+Math.abs(t),Je.rotation.y-=e*.0065*ui,Je.rotation.x-=t*.0065*ui,Je.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,Je.rotation.x)),Pr={x:r.clientX,y:r.clientY}});Bn.addEventListener("pointerup",()=>{bc=!1,Pr=null});const Rc=new Ra(Bn,{recognizers:[[Ra.Tap,{event:"doubletap",taps:2,posThreshold:50,interval:250}],[Ra.Tap,{event:"tap",threshold:20}]]});Rc.get("tap").requireFailure("doubletap");Rc.on("tap",()=>{on==="TOUCH"&&(wc>15||Ds())});Rc.on("doubletap",()=>{on==="TOUCH"&&Lc()});const Yr=30,ox=30,Pu=.4,Iu=5,Pi=new Sc,tt=new Ls(new C(0,10.7,0),new C(0,12.5,0),.7),kt=new C,Yi=new C;Je.position.copy(tt.end);let Un=!1;const Nn={};document.addEventListener("keydown",r=>{Nn[r.code]=!0,on!=="MOUSE"&&Go("MOUSE"),Dt==="PLAYING"&&(r.code==="Tab"&&(r.preventDefault(),Lc()),r.code==="KeyE"&&Ds())});document.addEventListener("keyup",r=>{Nn[r.code]=!1});window.addEventListener("resize",ax);function ax(){Je.aspect=window.innerWidth/window.innerHeight,Je.updateProjectionMatrix(),Ii.setSize(window.innerWidth,window.innerHeight)}const zo=new c0().setPath("./assets/"),Ir=[];let yn=0,$a=!1;zo.load("MapMiniOptimized21kTextured1024.glb",r=>{const t=new qt().setFromObject(r.scene).getSize(new C),n=Math.max(t.x,t.z),i=n<10?100/n:1;r.scene.scale.set(i,i,i),r.scene.updateMatrixWorld(!0);const s=new qt().setFromObject(r.scene),o=s.getCenter(new C);r.scene.position.x-=o.x,r.scene.position.y-=s.min.y,r.scene.position.z-=o.z,r.scene.updateMatrixWorld(!0),Rt.add(r.scene),Pi.fromGraphNode(r.scene),r.scene.traverse(c=>{if(c.isMesh){const l=c.material;c.material=new un({map:l.map,color:l.color})}}),$a=!0});const Ja=["blaster-g-assault-rifle.glb","blaster-m-shotgun.glb"],Gn=new Xn;Gn.position.set(.3,-.2,-.5);Je.add(Gn);const zh=[{fireRate:.1,damage:12},{fireRate:.5,damage:55}];function bs(r){if(r.hasWeapon)return;const e=Gh[r.weaponIndex];if(!e)return;const t=e.clone();t.visible=!0,t.scale.set(2.5,2.5,2.5),t.position.set(-.35,.5,.8),t.rotation.set(0,Math.PI,0),r.hitbox.add(t),r.weaponMesh=t,r.hasWeapon=!0}Ja.forEach((r,e)=>{zo.load(r,t=>{const n=t.scene,i=new qt().setFromObject(n),s=i.getSize(new C),c=.8/Math.max(s.x,s.y,s.z);n.scale.set(c,c,c);const l=i.getCenter(new C);n.position.set(-l.x*c,-l.y*c,-l.z*c),n.traverse(d=>{d.isMesh&&(d.material=new Rs({color:2236962,roughness:.4,metalness:.8}),d.castShadow=!0)}),n.rotation.y=0;const h=new Xn;h.add(n),h.visible=!0,Gh[e]=h.clone(),h.visible=e===yn,Ir[e]=h,Gn.add(h),Zt.forEach(d=>bs(d)),Ae&&bs(Ae)})});let Zt=[],Gh=[null,null];zo.load("charRiggingAnim.glb",r=>{const n=1.1/new qt().setFromObject(r.scene).getSize(new C).y;r.scene.scale.set(n,n,n),r.scene.updateMatrixWorld(!0),r.scene.traverse(d=>{if(d.isMesh){const a=d.material;d.material=new un({map:a.map})}});const i=new mc(1.3,1.3,4,8),s=new un({visible:!1});for(let d=0;d<4;d++){const a=Tu(r.scene),u=No(),f=u.x,_=u.z,g=15;a.position.set(f,g,_),Rt.add(a);const m=new Xt(i,s);m.userData.botIndex=d,Rt.add(m);const p=new Ls(new C(f,g+.7,_),new C(f,g+1.2,_),.7),v=new mu(a),x={};r.animations&&r.animations.length>0&&(r.animations.forEach((R,L)=>{const O=v.clipAction(R),y=R.name.toLowerCase();y.includes("idle")?x.idle=O:y.includes("walk")||y.includes("run")?x.move=O:y.includes("shoot")||y.includes("fire")||y.includes("attack")?x.shoot=O:x[`anim_${L}`]=O}),!x.idle&&r.animations[0]&&(x.idle=v.clipAction(r.animations[0])),!x.move&&r.animations[1]&&(x.move=v.clipAction(r.animations[1])),!x.shoot&&r.animations[2]&&(x.shoot=v.clipAction(r.animations[2])),x.move&&x.move.play()),a.traverse(R=>{R.isMesh&&(R.userData.botIndex=d)});let T=null;a.traverse(R=>{if(R.isBone){const L=R.name.toLowerCase();L.includes("hand")&&(L.includes("r")||L.includes("right"))&&(T=R)}});const I={mesh:a,hitbox:m,collider:p,velocity:new C,mixer:v,actions:x,currentAction:"move",hp:100,isDead:!1,targetDir:new C(Math.random()-.5,0,Math.random()-.5).normalize(),changeDirTimer:0,shootTimer:Math.random()*1.5,rightHand:T,hasWeapon:!1,weaponIndex:Math.random()<.5?0:1,targetBotIndex:-1,weaponRecoil:0,deathTimer:0};a.traverse(R=>{R.isBone&&(R.userData.initialPosition=R.position.clone(),R.userData.initialQuaternion=R.quaternion.clone(),R.userData.initialScale=R.scale.clone())}),Zt.push(I),bs(I)}const o=Tu(r.scene);o.position.copy(tt.start),Rt.add(o);const c=new mu(o),l={};r.animations&&r.animations.length>0&&(r.animations.forEach((d,a)=>{const u=c.clipAction(d),f=d.name.toLowerCase();f.includes("idle")?l.idle=u:f.includes("walk")||f.includes("run")?l.move=u:f.includes("shoot")||f.includes("fire")||f.includes("attack")?l.shoot=u:l[`anim_${a}`]=u}),!l.idle&&r.animations[0]&&(l.idle=c.clipAction(r.animations[0])),!l.move&&r.animations[1]&&(l.move=c.clipAction(r.animations[1])),!l.shoot&&r.animations[2]&&(l.shoot=c.clipAction(r.animations[2])),l.idle&&l.idle.play());let h=null;o.traverse(d=>{if(d.isSkinnedMesh&&(d.frustumCulled=!1,d.layers.set(1)),d.isBone){d.userData.initialPosition=d.position.clone(),d.userData.initialQuaternion=d.quaternion.clone(),d.userData.initialScale=d.scale.clone();const a=d.name.toLowerCase();a.includes("hand")&&(a.includes("r")||a.includes("right"))&&(h=d)}}),Ae={mesh:o,hitbox:new _t,collider:tt,velocity:kt,mixer:c,actions:l,currentAction:"idle",hp:100,isDead:!1,targetDir:new C,changeDirTimer:0,shootTimer:0,rightHand:h,hasWeapon:!1,weaponIndex:0,targetBotIndex:-1,weaponRecoil:0,deathTimer:0},bs(Ae)});const ai=[];let Mi=null;const cx=new li({uniforms:{},vertexShader:`
        attribute float lifetime;
        varying float vLifetime;
        void main() {
            vLifetime = lifetime;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = (150.0 / -mvPosition.z) * lifetime; 
            gl_Position = projectionMatrix * mvPosition;
        }
    `,fragmentShader:`
        varying float vLifetime;
        void main() {
            vec2 pt = gl_PointCoord - vec2(0.5);
            if(dot(pt, pt) > 0.25) discard;
            vec3 color = mix(vec3(1.0, 0.1, 0.0), vec3(1.0, 0.8, 0.2), vLifetime); // Kırmızıdan sarıya
            if (vLifetime > 0.9) color = vec3(1.0, 1.0, 1.0); // İlk anda beyaz parlama
            gl_FragColor = vec4(color, vLifetime);
        }
    `,transparent:!0,blending:Ia,depthWrite:!1}),Cc=new gc(1.5),lx=new un({color:3355443,transparent:!0,opacity:.8,depthWrite:!1}),Ji=[],ux=new li({uniforms:{},vertexShader:`
        attribute float lifetime;
        varying float vLifetime;
        void main() {
            vLifetime = lifetime;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = (120.0 / -mvPosition.z) * lifetime; 
            gl_Position = projectionMatrix * mvPosition;
        }
    `,fragmentShader:`
        varying float vLifetime;
        void main() {
            vec2 pt = gl_PointCoord - vec2(0.5);
            if(dot(pt, pt) > 0.25) discard;
            vec3 color = vec3(0.4, 0.0, 0.0); // Daha koyu kırmızı
            if (vLifetime > 0.8) color = vec3(0.7, 0.1, 0.1); // İlk anda koyu parlak kırmızı
            gl_FragColor = vec4(color, vLifetime * 0.8);
        }
    `,transparent:!0,blending:ji,depthWrite:!1}),hx=new un({color:8917265,transparent:!0,opacity:.7,depthWrite:!1});function jr(r,e){const t=e?50:15,n=r.clone();n.y+=.5;const i=new an,s=new Float32Array(t*3),o=new Float32Array(t*3),c=new Float32Array(t);for(let h=0;h<t;h++){s[h*3]=n.x,s[h*3+1]=n.y,s[h*3+2]=n.z;const d=Math.random(),a=Math.random(),u=d*2*Math.PI,f=Math.acos(2*a-1),_=Math.random()*8+(e?5:2);o[h*3]=_*Math.sin(f)*Math.cos(u),o[h*3+1]=_*Math.sin(f)*Math.sin(u),o[h*3+2]=_*Math.cos(f),c[h]=1}i.setAttribute("position",new yt(s,3)),i.setAttribute("velocity",new yt(o,3)),i.setAttribute("lifetime",new yt(c,1));const l=new pc(i,ux.clone());if(l.userData.count=t,Rt.add(l),Ji.push({type:"sparks",obj:l,life:1}),e)for(let h=0;h<3;h++){const d=new Xt(Cc,hx.clone());d.position.copy(n),d.position.x+=Math.random()-.5,d.position.y+=Math.random()-.5,d.position.z+=Math.random()-.5,d.userData={vel:new C((Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2),scale:Math.random()*.5+.3},Rt.add(d),Ji.push({type:"smoke",obj:d,life:1})}}function dx(r){r.active=!1,r.mesh.visible=!1;const e=r.collider.center,t=250,n=new an,i=new Float32Array(t*3),s=new Float32Array(t*3),o=new Float32Array(t);for(let a=0;a<t;a++){i[a*3]=e.x,i[a*3+1]=e.y,i[a*3+2]=e.z;const u=Math.random(),f=Math.random(),_=u*2*Math.PI,g=Math.acos(2*f-1),m=Math.random()*45+15;s[a*3]=m*Math.sin(g)*Math.cos(_),s[a*3+1]=m*Math.sin(g)*Math.sin(_),s[a*3+2]=m*Math.cos(g),o[a]=1}n.setAttribute("position",new yt(i,3)),n.setAttribute("velocity",new yt(s,3)),n.setAttribute("lifetime",new yt(o,1));const c=new pc(n,cx.clone());c.userData.count=t,Rt.add(c),Ji.push({type:"sparks",obj:c,life:1});for(let a=0;a<15;a++){const u=new Xt(Cc,lx.clone());u.position.copy(e),u.position.x+=(Math.random()-.5)*6,u.position.y+=(Math.random()-.5)*6,u.position.z+=(Math.random()-.5)*6,u.userData={vel:new C((Math.random()-.5)*15,Math.random()*15,(Math.random()-.5)*15),scale:Math.random()*2+1.5},Rt.add(u),Ji.push({type:"smoke",obj:u,life:1})}const l=new Ps.Howl({src:["https://actions.google.com/sounds/v1/explosions/explosion_large.ogg"],volume:.8});Ho(l,e,2);const h=22,d=250;if(Zt.forEach(a=>{if(a.isDead)return;const u=a.collider.start.distanceTo(r.collider.center);if(u<h){const f=d*Math.pow(1-u/h,2);a.hp-=f;const _=new C().copy(a.collider.start).lerp(a.collider.end,.5);if(jr(_,!1),a.hp<=0&&!a.isDead){jr(_,!0),Li+=1,ir(),a.isDead=!0,a.deathTimer=5;const g=Math.pow(1-u/h,1.5),m=new C().subVectors(a.collider.start,e).normalize().multiplyScalar(.7*g);m.y+=.45*g,Vo(a,m)}}}),!rn&&Dt==="PLAYING"){const a=tt.start.distanceTo(r.collider.center);if(a<h){const u=d*Math.pow(1-a/h,2);if(nr-=u,Fh(),ir(),Uh(),nr<=0){const f=Math.pow(1-a/h,1.5),_=new C().subVectors(tt.start,e).normalize().multiplyScalar(.7*f);_.y+=.45*f,qh(_)}}}r.collider.center.set(0,-100,0)}zo.load("grenade-a.glb",r=>{Mi=r.scene;const e=new qt().setFromObject(Mi),t=e.getSize(new C),n=Math.max(t.x,t.y,t.z),i=Pu*2/n;Mi.scale.set(i,i,i);const s=e.getCenter(new C);Mi.position.set(-s.x*i,-s.y*i,-s.z*i);const o=new Xn;o.add(Mi),Mi=o,Mi.traverse(c=>{c.isMesh&&(c.material=new Rs({color:13214768,roughness:.8,metalness:0}),c.castShadow=!0,c.receiveShadow=!0)});for(let c=0;c<ox;c++){const l=Mi.clone();l.visible=!1,Rt.add(l),ai.push({mesh:l,collider:new hn(new C(0,-100,0),Pu),velocity:new C,active:!1,lifeTimer:0})}});const Hi=new Mc,fx=new ke(0,0);let Du=0,br=0,on="TOUCH";function Go(r){on!==r&&(on=r,r==="TOUCH"?Qt.style.display="block":(Qt.style.display="none",bi.set(0,0)))}let Is=!1;function px(){if(rn||Ir.length<2)return;Hi.setFromCamera(fx,Je);const r=[];Zt.forEach(c=>{!c.isDead&&c.hitbox&&r.push(c.hitbox)});const e=Pi.rayIntersect(Hi.ray),t=Hi.intersectObjects(r,!1);let n=!1,i=null,s=1/0;if(t.length>0&&(s=t[0].distance,(!e||e.distance>s)&&(n=!0,i=t[0].object)),Ln.style.backgroundColor=n?"red":"white",Is||on==="TOUCH"&&n){const c=Ph.getElapsedTime(),l=zh[yn];if(c-Du>=l.fireRate){Du=c,br=yn===1?.3:.1,Hh(yn===1?"shotgun":"rifle");const h=new C;Gn.getWorldPosition(h);const d=new C(0,0,-1).applyQuaternion(Je.quaternion);h.add(d),Ho(Tc,h);const a=new C;if(n&&i){a.copy(t[0].point);const u=i.userData.botIndex;if(u!==void 0){const f=Zt[u];f.hp-=l.damage;const _=new C().copy(f.collider.start).lerp(f.collider.end,.5);if(jr(_,!1),f.hp<=0&&!f.isDead){jr(_,!0),Li+=1,ir(),f.isDead=!0,f.deathTimer=5;const g=yn===1,m=g?.16:.08,p=g?.1:.04,v=new C().subVectors(f.collider.start,tt.start).normalize().multiplyScalar(m);v.y+=p,Vo(f,v)}}}else e?a.copy(Hi.ray.origin).add(Hi.ray.direction.clone().multiplyScalar(e.distance)):a.copy(Hi.ray.origin).add(Hi.ray.direction.clone().multiplyScalar(100));Bh(h,a)}}}function Lc(){Ja.length!==0&&(Ir[yn]&&(Ir[yn].visible=!1),yn=(yn+1)%Ja.length,Ir[yn]&&(Ir[yn].visible=!0),Ae&&(Ae.weaponMesh&&(Ae.hitbox.remove(Ae.weaponMesh),Ae.hasWeapon=!1,Ae.weaponMesh=void 0),Ae.weaponIndex=yn,bs(Ae)))}const ri=new C,Vh=new C,Wh=new C,yo=new C,Nu=new C,Pa=new C,zi=new C;function Vo(r,e){r.mixer.stopAllAction();const t=[],n=[];if(r.weaponMesh){Rt.add(r.weaponMesh),r.weaponMesh.scale.set(2.5,2.5,2.5);const i=new C;r.rightHand?r.rightHand.getWorldPosition(i):i.copy(r.collider.start).add(new C(0,1,0)),r.weaponMesh.position.copy(i);const s=e?e.length():.1;r.weaponVelocity=new C((Math.random()-.5)*8*s,(Math.random()*5+5)*s*5,(Math.random()-.5)*8*s),e&&r.weaponVelocity.add(e.clone().multiplyScalar(15))}r.mesh.traverse(i=>{if(i.isBone){const s=i,o=new C;s.getWorldPosition(o);const c=o.clone();if(e){const l=r.collider.start.y-r.collider.radius;let h=(o.y-l)/1.5;h<.1&&(h=.1),h>1.2&&(h=1.2);const d=e.clone().multiplyScalar(h);c.sub(d)}t.push({pos:o.clone(),oldPos:c,bone:s,radius:.15})}}),t.forEach(i=>{if(i.bone.parent&&i.bone.parent.isBone){const s=t.find(o=>o.bone===i.bone.parent);if(s){const o=i.pos.distanceTo(s.pos);o>.01&&n.push({p1:s,p2:i,dist:o})}}}),r.ragdoll={particles:t,constraints:n}}function Xh(r,e){if(!r.ragdoll)return;const t=r.ragdoll,n=e*e,i=new C(0,-Yr*1.5,0);t.particles.forEach(s=>{const o=new C().subVectors(s.pos,s.oldPos);o.multiplyScalar(.99),s.oldPos.copy(s.pos),s.pos.add(o).addScaledVector(i,n);const c=new hn(s.pos,s.radius),l=Pi.sphereIntersect(c);if(l){s.pos.add(l.normal.multiplyScalar(l.depth));const h=new C().subVectors(s.pos,s.oldPos);h.multiplyScalar(.5),s.oldPos.copy(s.pos).sub(h)}});for(let s=0;s<15;s++)t.constraints.forEach(o=>{const c=new C().subVectors(o.p2.pos,o.p1.pos),l=c.length();if(l>1e-4){const h=(l-o.dist)/l,d=c.multiplyScalar(h*.5);o.p1.pos.add(d),o.p2.pos.sub(d)}});t.particles.forEach(s=>{if(s.bone.parent){s.bone.parent.updateMatrixWorld(!0);const o=s.pos.clone();s.bone.parent.worldToLocal(o),s.bone.position.copy(o)}}),r.weaponMesh&&r.weaponVelocity&&(r.weaponVelocity.y-=Yr*e,r.weaponMesh.position.addScaledVector(r.weaponVelocity,e),r.weaponMesh.rotation.x+=r.weaponVelocity.z*e*.5,r.weaponMesh.rotation.y+=r.weaponVelocity.x*e*.5,r.weaponMesh.position.y<.3&&(r.weaponMesh.position.y=.3,r.weaponVelocity.set(0,0,0),r.weaponMesh.rotation.x=Math.PI/2))}function mx(r){if(Zt.length!==0)for(let e=0;e<Zt.length;e++){const t=Zt[e];if(t.isDead){if(t.deathTimer-=r,t.deathTimer<=0){t.isDead=!1,t.hp=100,t.ragdoll=void 0;const o=No();t.collider.start.set(o.x,15.3,o.z),t.collider.end.set(o.x,15.8,o.z),t.velocity.set(0,0,0),t.mesh.traverse(c=>{c.isBone&&c.userData.initialPosition&&(c.position.copy(c.userData.initialPosition),c.quaternion.copy(c.userData.initialQuaternion),c.scale.copy(c.userData.initialScale))}),t.weaponMesh&&(t.hitbox.add(t.weaponMesh),t.weaponMesh.scale.set(2.5,2.5,2.5),t.weaponMesh.position.set(-.35,.5,.8),t.weaponMesh.rotation.set(0,Math.PI,0)),t.mixer.stopAllAction(),t.currentAction="move",t.actions.move&&t.actions.move.reset().play()}else t.ragdoll&&Xh(t,r);continue}if(t.collider.start.y<=-25){t.hp=100;const o=No();t.collider.start.set(o.x,15.3,o.z),t.collider.end.set(o.x,15.8,o.z),t.velocity.set(0,0,0);continue}if(t.changeDirTimer-=r,t.changeDirTimer<=0){t.changeDirTimer=.5+Math.random()*1;let o=null,c=60;if(!rn&&Dt==="PLAYING"){const h=t.collider.start.distanceTo(tt.start);h<c&&(c=h,o={type:"player",pos:tt.start})}for(let h=0;h<Zt.length;h++){if(e===h||Zt[h].isDead)continue;const d=t.collider.start.distanceTo(Zt[h].collider.start);d<c&&(c=d,o={type:"bot",idx:h,pos:Zt[h].collider.start})}let l="move";if(o){t.targetDir.subVectors(o.pos,t.collider.start),t.targetDir.y=0,t.targetDir.lengthSq()<.001&&t.targetDir.set(Math.random()-.5,0,Math.random()-.5),t.targetDir.normalize(),yo.copy(t.collider.start),yo.y+=.8,Nu.copy(o.pos).sub(yo).normalize(),Cu.set(yo,Nu);const h=Pi.rayIntersect(Cu.ray);h&&h.distance<c?t.targetDir.set(Math.random()-.5,0,Math.random()-.5).normalize():(l="shoot",t.aimTarget=o)}else t.targetDir.set(Math.random()-.5,0,Math.random()-.5).normalize();t.currentAction!==l&&t.actions[l]&&t.actions[t.currentAction]&&(t.actions[t.currentAction].fadeOut(.2),t.actions[l].reset().fadeIn(.2).play(),t.currentAction=l)}const n=t.currentAction==="shoot"?0:8;if(t.velocity.x=t.targetDir.x*n,t.velocity.z=t.targetDir.z*n,t.velocity.y-=Yr*r,t.currentAction==="shoot"&&t.aimTarget){if(t.shootTimer-=r,t.shootTimer<=0){const o=zh[t.weaponIndex];t.shootTimer=o.fireRate+Math.random()*.2,Ho(Tc,t.collider.start);const c=t.aimTarget;if(c.type==="player"&&rn){t.currentAction="move",t.aimTarget=null;return}t.weaponRecoil=.5,Pa.set(-.35,.5,1.5),Pa.applyMatrix4(t.hitbox.matrixWorld),zi.copy(c.pos),c.type==="player"?zi.y+=1:zi.y+=.5,zi.x+=(Math.random()-.5)*.5,zi.y+=(Math.random()-.5)*.5,zi.z+=(Math.random()-.5)*.5,Bh(Pa,zi);const l=t.weaponIndex===1?.16:.08,h=t.weaponIndex===1?.1:.04;if(c.type==="player"){if(nr-=8,Fh(),ir(),Uh(),nr<=0&&!rn){const a=new C().subVectors(tt.start,t.collider.start).normalize().multiplyScalar(l);a.y+=h,qh(a)}}else if(c.type==="bot"){const d=Zt[c.idx];if(!d.isDead){d.hp-=8;const a=new C().copy(d.collider.start).lerp(d.collider.end,.5);if(jr(a,!1),d.hp<=0&&!d.isDead){jr(a,!0),d.isDead=!0,d.deathTimer=5;const f=new C().subVectors(d.collider.start,t.collider.start).normalize().multiplyScalar(l);f.y+=h,Vo(d,f)}}}}}else t.shootTimer=.3;const i=t.velocity.clone().multiplyScalar(r);t.collider.translate(i);const s=Pi.capsuleIntersect(t.collider);if(s&&(s.normal.y>=.15?t.velocity.y=0:(t.velocity.addScaledVector(s.normal,-s.normal.dot(t.velocity)),t.currentAction==="move"&&(t.targetDir.add(s.normal),t.targetDir.lengthSq()<.001&&t.targetDir.set(Math.random()-.5,0,Math.random()-.5),t.targetDir.normalize(),t.changeDirTimer>.5&&(t.changeDirTimer=.5))),s.depth>=1e-10&&t.collider.translate(s.normal.multiplyScalar(s.depth))),t.mesh.position.copy(t.collider.start),t.mesh.position.y-=.7,t.hitbox.position.lerpVectors(t.collider.start,t.collider.end,.5),t.hitbox.position.y+=1.5,t.targetDir.lengthSq()>.1){let c=Math.atan2(t.targetDir.x,t.targetDir.z)-t.hitbox.rotation.y;for(;c<-Math.PI;)c+=Math.PI*2;for(;c>Math.PI;)c-=Math.PI*2;t.hitbox.rotation.y+=c*8*r}if(t.hasWeapon&&t.weaponRecoil>0){t.weaponRecoil=rc.lerp(t.weaponRecoil,0,r*10),t.weaponRecoil<.01&&(t.weaponRecoil=0);const o=t.hitbox.children[0];o&&(o.rotation.x=-t.weaponRecoil,o.position.z=.8-t.weaponRecoil*.4)}if(t.targetDir.lengthSq()>.1){const o=t.mesh.position.clone().add(t.targetDir);t.mesh.lookAt(o)}}}function _x(){const r=Pi.capsuleIntersect(tt);Un=!1,r&&(Un=r.normal.y>=.15,Un||kt.addScaledVector(r.normal,-r.normal.dot(kt)),r.depth>=1e-10&&tt.translate(r.normal.multiplyScalar(r.depth)))}function gx(r){if(rn){if(Ka-=r,Ka<=0){Yh();return}if(Ae&&Ae.ragdoll){Xh(Ae,r);const o=new C;Ae.ragdoll.particles.forEach(h=>o.add(h.pos)),o.divideScalar(Ae.ragdoll.particles.length);const c=new C(0,0,1).applyAxisAngle(new C(0,1,0),Oh),l=o.clone().add(c.multiplyScalar(4)).add(new C(0,2.5,0));Je.position.lerp(l,r*3),Je.lookAt(o)}return}if(Ae){Ae.mesh.position.copy(tt.start),Ae.mesh.position.y-=.7,Ae.mesh.rotation.y=Je.rotation.y+Math.PI;const c=bi.x!==0||bi.y!==0||Nn.KeyW||Nn.KeyS||Nn.KeyA||Nn.KeyD?"move":"idle";Ae.currentAction!==c&&Ae.actions[c]&&Ae.actions[Ae.currentAction]&&(Ae.actions[Ae.currentAction].fadeOut(.2),Ae.actions[c].reset().fadeIn(.2).play(),Ae.currentAction=c)}let e=Math.exp(-4*r)-1;Un||(kt.y-=Yr*r,e*=.1),kt.addScaledVector(kt,e);let t=bi.x,n=bi.y;if(on==="MOUSE"&&(t=0,n=0,Nn.KeyW&&(n=1),Nn.KeyS&&(n=-1),Nn.KeyA&&(t=-1),Nn.KeyD&&(t=1),Nn.Space&&Un&&(kt.y=10,Un=!1),t!==0&&n!==0)){const o=Math.sqrt(t*t+n*n);t/=o,n/=o}if(t!==0||n!==0){Yi.set(t,0,-n),Yi.applyAxisAngle(new C(0,1,0),Je.rotation.y);const o=Un?42:12;kt.add(Yi.multiplyScalar(o*r))}const i=kt.clone().multiplyScalar(r),s=tt.start.clone();if(tt.translate(i),_x(),Un&&(t!==0||n!==0)){const o=(tt.start.x-s.x)**2+(tt.start.z-s.z)**2,c=i.x**2+i.z**2;if(o<c*.1){const l=new Mc(new C(tt.start.x,tt.start.y+1.4,tt.start.z),Yi.clone().normalize()),h=Pi.rayIntersect(l.ray);(!h||h.distance>1)&&(kt.y=10,Un=!1)}}Je.position.copy(tt.end)}function Ds(){if(!Dh){Z0();return}if(Po<=0||rn||(wt&&(wt.classList.remove("grenade-throw"),wt.offsetWidth,wt.classList.add("grenade-throw")),ai.length===0))return;let r=ai.findIndex(n=>!n.active);r===-1&&(r=0);const e=ai[r];Po--,ir(),Ho(Tc,tt.start),Je.getWorldDirection(Yi),e.collider.center.copy(tt.end).addScaledVector(Yi,tt.radius*1.5),e.velocity.copy(Yi).multiplyScalar(45),e.velocity.y+=12,e.velocity.addScaledVector(kt,1),e.active=!0,e.mesh.visible=!0,e.lifeTimer=2.5}function vx(r){const e=ri.addVectors(tt.start,tt.end).multiplyScalar(.5),t=r.collider.center,n=tt.radius+r.collider.radius,i=n*n;for(const s of[tt.start,tt.end,e]){const o=s.distanceToSquared(t);if(o<i){ri.subVectors(s,t),ri.lengthSq()<1e-4&&ri.set(1,0,0);const c=ri.normalize(),l=Vh.copy(c).multiplyScalar(c.dot(kt)),h=Wh.copy(c).multiplyScalar(c.dot(r.velocity));kt.add(h).sub(l),r.velocity.add(l).sub(h);const d=(n-Math.sqrt(o))/2;t.addScaledVector(c,-d)}}}function xx(){for(let r=0,e=ai.length;r<e;r++){const t=ai[r];if(t.active)for(let n=r+1;n<e;n++){const i=ai[n];if(!i.active)continue;const s=t.collider.center.distanceToSquared(i.collider.center),o=t.collider.radius+i.collider.radius,c=o*o;if(s<c){ri.subVectors(t.collider.center,i.collider.center),ri.lengthSq()<1e-4&&ri.set(1,0,0);const l=ri.normalize(),h=Vh.copy(l).multiplyScalar(l.dot(t.velocity)),d=Wh.copy(l).multiplyScalar(l.dot(i.velocity));t.velocity.add(d).sub(h),i.velocity.add(h).sub(d);const a=(o-Math.sqrt(s))/2;t.collider.center.addScaledVector(l,a),i.collider.center.addScaledVector(l,-a)}}}}function yx(r){for(let e=Ji.length-1;e>=0;e--){const t=Ji[e];if(t.life-=r*1.5,t.type==="sparks"){const n=t.obj,i=n.geometry.attributes.position.array,s=n.geometry.attributes.velocity.array,o=n.geometry.attributes.lifetime.array,c=n.userData.count;for(let l=0;l<c;l++)i[l*3]+=s[l*3]*r,i[l*3+1]+=s[l*3+1]*r,i[l*3+2]+=s[l*3+2]*r,s[l*3+1]-=Yr*.5*r,o[l]=t.life;n.geometry.attributes.position.needsUpdate=!0,n.geometry.attributes.lifetime.needsUpdate=!0}else if(t.type==="smoke"){const n=t.obj;n.position.addScaledVector(n.userData.vel,r);const i=n.userData.scale+(1-t.life)*3;n.scale.setScalar(i),n.material.opacity=t.life*.5}t.life<=0&&(Rt.remove(t.obj),t.obj.geometry&&t.obj.geometry!==Cc&&t.obj.geometry.dispose(),(t.type==="sparks"||t.type==="smoke")&&t.obj.material.dispose(),Ji.splice(e,1))}ai.forEach(e=>{if(!e.active)return;if(e.lifeTimer-=r,e.lifeTimer<=0){dx(e);return}e.collider.center.addScaledVector(e.velocity,r);const t=Pi.sphereIntersect(e.collider);t?(e.velocity.addScaledVector(t.normal,-t.normal.dot(e.velocity)*1.5),e.collider.center.add(t.normal.multiplyScalar(t.depth))):e.velocity.y-=Yr*r;const n=Math.exp(-1.5*r)-1;e.velocity.addScaledVector(e.velocity,n),vx(e)}),xx();for(const e of ai)e.active&&(e.mesh.position.copy(e.collider.center),e.mesh.rotation.x+=e.velocity.length()*.05*r,e.mesh.rotation.y+=e.velocity.length()*.05*r)}function Mx(){Je.position.y<=-25&&Yh()}function No(){let r=0,e=0,t=!0;for(;t;)r=(Math.random()-.5)*80,e=(Math.random()-.5)*80,Math.sqrt(r*r+e*e)>18&&(t=!1);return{x:r,z:e}}function qh(r){rn||(rn=!0,Hh("death"),Ka=5,Oh=Je.rotation.y,Zt.forEach(e=>{e.aimTarget&&e.aimTarget.type==="player"&&(e.aimTarget=null,e.currentAction="move",e.changeDirTimer=0)}),Ae&&(Ae.mesh.traverse(e=>{(e.isSkinnedMesh||e.isMesh)&&e.layers.set(0)}),Ae.weaponMesh&&Ae.weaponMesh.traverse(e=>{e.isMesh&&e.layers.set(0)}),Ae.mesh.position.copy(tt.start),Ae.mesh.position.y-=.7,Ae.mesh.rotation.y=Je.rotation.y+Math.PI,Vo(Ae,r)))}function Yh(){nr=100,Po=1,rn=!1,ir(),Ae&&(Ae.mesh.traverse(e=>{e.isSkinnedMesh&&e.layers.set(1)}),Ae.ragdoll=void 0,Ae.mixer.stopAllAction(),Ae.mesh.traverse(e=>{e.isBone&&e.userData.initialPosition&&(e.position.copy(e.userData.initialPosition),e.quaternion.copy(e.userData.initialQuaternion),e.scale.copy(e.userData.initialScale))}),Ae.weaponMesh&&(Ae.hitbox.add(Ae.weaponMesh),Ae.weaponMesh.scale.set(2.5,2.5,2.5),Ae.weaponMesh.position.set(-.35,.5,.8),Ae.weaponMesh.rotation.set(0,Math.PI,0),Ae.weaponMesh.traverse(e=>{e.isMesh&&e.layers.set(1)})),Ae.actions.idle&&(Ae.currentAction="idle",Ae.actions.idle.reset().play()));const r=No();tt.radius=.7,tt.start.set(r.x,15.7,r.z),tt.end.set(r.x,17.5,r.z),kt.set(0,0,0),Je.position.copy(tt.end)}function Sx(){const r=Math.min(.05,Ph.getDelta()),e=r/Iu;if($a){sx();for(let t=0;t<Iu;t++)gx(e),yx(e),mx(e),rx(e),Mx();Zt.forEach(t=>{t.isDead||t.mixer.update(r)}),Ae&&!rn&&Ae.mixer.update(r),px(),Q0(r)}if(Gn&&(Gn.visible=!rn),Gn&&Un&&$a&&!rn){const t=Math.sqrt(kt.x**2+kt.z**2),n=performance.now()*.01,i=Math.sin(n)*t*.002;br=rc.lerp(br,0,r*15),Gn.position.y=-.2+i+br*.1,Gn.position.z=-.5+br,Gn.rotation.x=br*.5}Ii.render(Rt,Je)}
