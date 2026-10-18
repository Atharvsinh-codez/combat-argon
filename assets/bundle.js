(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Ro="180",Sc=0,ra=1,Mc=2,yl=1,wc=2,Mn=3,Fn=0,Ue=1,He=2,Un=0,yi=1,Mi=2,oa=3,aa=4,bc=5,Yn=100,Tc=101,Ec=102,Ac=103,Cc=104,Rc=200,Pc=201,Dc=202,Lc=203,Or=204,Br=205,Ic=206,Uc=207,Fc=208,Nc=209,Oc=210,Bc=211,zc=212,kc=213,Vc=214,zr=0,kr=1,Vr=2,wi=3,Gr=4,Hr=5,Wr=6,Xr=7,Sl=0,Gc=1,Hc=2,bn=0,Wc=1,Xc=2,qc=3,Yc=4,Kc=5,jc=6,Zc=7,Ml=300,bi=301,Ti=302,qr=303,Yr=304,js=306,Yi=1e3,Qe=1001,Kr=1002,Pe=1003,$c=1004,rs=1005,ue=1006,nr=1007,In=1008,tn=1009,wl=1010,bl=1011,Ki=1012,Po=1013,Nn=1014,hn=1015,je=1016,Do=1017,Lo=1018,ji=1020,Tl=35902,El=35899,Al=1021,Cl=1022,me=1023,Ei=1026,Zi=1027,Io=1028,Uo=1029,Rl=1030,Fo=1031,No=1033,Fs=33776,Ns=33777,Os=33778,Bs=33779,jr=35840,Zr=35841,$r=35842,Jr=35843,Qr=36196,to=37492,eo=37496,no=37808,io=37809,so=37810,ro=37811,oo=37812,ao=37813,lo=37814,co=37815,ho=37816,uo=37817,fo=37818,po=37819,mo=37820,go=37821,vo=36492,xo=36494,_o=36495,yo=36283,So=36284,Mo=36285,wo=36286,Jc=3200,Pl=3201,Dl=0,Qc=1,wn="",Ke="srgb",jn="srgb-linear",Vs="linear",le="srgb",ni=7680,la=519,th=512,eh=513,nh=514,Ll=515,ih=516,sh=517,rh=518,oh=519,ca=35044,zs=35048,Gs="300 es",un=2e3,Hs=2001;class Ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ha=1234567;const Gi=Math.PI/180,$i=180/Math.PI;function $n(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[r&255]+De[r>>8&255]+De[r>>16&255]+De[r>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Zt(r,t,e){return Math.max(t,Math.min(e,r))}function Oo(r,t){return(r%t+t)%t}function ah(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function lh(r,t,e){return r!==t?(e-r)/(t-r):0}function Hi(r,t,e){return(1-e)*r+e*t}function ch(r,t,e,n){return Hi(r,t,1-Math.exp(-e*n))}function hh(r,t=1){return t-Math.abs(Oo(r,t*2)-t)}function uh(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function dh(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function fh(r,t){return r+Math.floor(Math.random()*(t-r+1))}function ph(r,t){return r+Math.random()*(t-r)}function mh(r){return r*(.5-Math.random())}function gh(r){r!==void 0&&(ha=r);let t=ha+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vh(r){return r*Gi}function xh(r){return r*$i}function _h(r){return(r&r-1)===0&&r!==0}function yh(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Sh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Mh(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ne(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Kt={DEG2RAD:Gi,RAD2DEG:$i,generateUUID:$n,clamp:Zt,euclideanModulo:Oo,mapLinear:ah,inverseLerp:lh,lerp:Hi,damp:ch,pingpong:hh,smoothstep:uh,smootherstep:dh,randInt:fh,randFloat:ph,randFloatSpread:mh,seededRandom:gh,degToRad:vh,radToDeg:xh,isPowerOfTwo:_h,ceilPowerOfTwo:yh,floorPowerOfTwo:Sh,setQuaternionFromProperEuler:Mh,normalize:Ne,denormalize:vi};class j{constructor(t=0,e=0){j.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*v,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const w=Math.sqrt(_),T=Math.atan2(w,m*y);p=Math.sin(p*T)/w,a=Math.sin(a*T)/w}const x=a*y;if(l=l*p+d*x,c=c*p+f*x,h=h*p+g*x,u=u*p+v*x,p===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(t=0,e=0,n=0){S.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ua.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ua.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ir.copy(this).projectOnVector(t),this.sub(ir)}reflect(t){return this.sub(ir.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ir=new S,ua=new Be;class Yt{constructor(t,e,n,i,s,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],p=i[3],m=i[6],y=i[1],_=i[4],x=i[7],w=i[2],T=i[5],R=i[8];return s[0]=o*v+a*y+l*w,s[3]=o*p+a*_+l*T,s[6]=o*m+a*x+l*R,s[1]=c*v+h*y+u*w,s[4]=c*p+h*_+u*T,s[7]=c*m+h*x+u*R,s[2]=d*v+f*y+g*w,s[5]=d*p+f*_+g*T,s[8]=d*m+f*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sr.makeScale(t,e)),this}rotate(t){return this.premultiply(sr.makeRotation(-t)),this}translate(t,e){return this.premultiply(sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sr=new Yt;function Il(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ws(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wh(){const r=Ws("canvas");return r.style.display="block",r}const da={};function Ji(r){r in da||(da[r]=!0,console.warn(r))}function bh(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const fa=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pa=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Th(){const r={enabled:!0,workingColorSpace:jn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===le&&(i.r=Tn(i.r),i.g=Tn(i.g),i.b=Tn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wn?Vs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ji("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ji("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[jn]:{primaries:t,whitePoint:n,transfer:Vs,toXYZ:fa,fromXYZ:pa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:le,toXYZ:fa,fromXYZ:pa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),r}const se=Th();function Tn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Si(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ii;class Eh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ii===void 0&&(ii=Ws("canvas")),ii.width=t.width,ii.height=t.height;const i=ii.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ii}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Tn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tn(e[n]/255)*255):e[n]=Tn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ah=0;class Bo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(rr(i[o].image)):s.push(rr(i[o]))}else s=rr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function rr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Eh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ch=0;const or=new S;class ze extends Ri{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=Qe,i=Qe,s=ue,o=In,a=me,l=tn,c=ze.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=$n(),this.name="",this.source=new Bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(or).x}get height(){return this.source.getSize(or).y}get depth(){return this.source.getSize(or).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yi:t.x=t.x-Math.floor(t.x);break;case Qe:t.x=t.x<0?0:1;break;case Kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yi:t.y=t.y-Math.floor(t.y);break;case Qe:t.y=t.y<0?0:1;break;case Kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Ml;ze.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,x=(f+1)/2,w=(m+1)/2,T=(h+d)/4,R=(u+v)/4,A=(g+p)/4;return _>x&&_>w?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=T/n,s=R/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=A/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=R/s,i=A/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rh extends Ri{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new ze(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Bo(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class be extends Rh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ul extends ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fl extends ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(s,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),os.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(t.matrixWorld),this.union(os)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Li),as.subVectors(this.max,Li),si.subVectors(t.a,Li),ri.subVectors(t.b,Li),oi.subVectors(t.c,Li),En.subVectors(ri,si),An.subVectors(oi,ri),zn.subVectors(si,oi);let e=[0,-En.z,En.y,0,-An.z,An.y,0,-zn.z,zn.y,En.z,0,-En.x,An.z,0,-An.x,zn.z,0,-zn.x,-En.y,En.x,0,-An.y,An.x,0,-zn.y,zn.x,0];return!ar(e,si,ri,oi,as)||(e=[1,0,0,0,1,0,0,0,1],!ar(e,si,ri,oi,as))?!1:(ls.crossVectors(En,An),e=[ls.x,ls.y,ls.z],ar(e,si,ri,oi,as))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const vn=[new S,new S,new S,new S,new S,new S,new S,new S],en=new S,os=new Jn,si=new S,ri=new S,oi=new S,En=new S,An=new S,zn=new S,Li=new S,as=new S,ls=new S,kn=new S;function ar(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){kn.fromArray(r,s);const a=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),l=t.dot(kn),c=e.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ph=new Jn,Ii=new S,lr=new S;class Qn{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ph.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ii.subVectors(t,this.center);const e=Ii.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ii.copy(t.center).add(lr)),this.expandByPoint(Ii.copy(t.center).sub(lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const xn=new S,cr=new S,cs=new S,Cn=new S,hr=new S,hs=new S,ur=new S;class zo{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){cr.copy(t).add(e).multiplyScalar(.5),cs.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(cr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(cs),a=Cn.dot(this.direction),l=-Cn.dot(cs),c=Cn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(cr).addScaledVector(cs,d),f}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),i=xn.dot(xn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,i,s){hr.subVectors(e,t),hs.subVectors(n,t),ur.crossVectors(hr,hs);let o=this.direction.dot(ur),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,t);const l=a*this.direction.dot(hs.crossVectors(Cn,hs));if(l<0)return null;const c=a*this.direction.dot(hr.cross(Cn));if(c<0||l+c>o)return null;const h=-a*Cn.dot(ur);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,g,v,p){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,v,p)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ai.setFromMatrixColumn(t,0).length(),s=1/ai.setFromMatrixColumn(t,1).length(),o=1/ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dh,t,Lh)}lookAt(t,e,n){const i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Rn.crossVectors(n,qe),Rn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Rn.crossVectors(n,qe)),Rn.normalize(),us.crossVectors(qe,Rn),i[0]=Rn.x,i[4]=us.x,i[8]=qe.x,i[1]=Rn.y,i[5]=us.y,i[9]=qe.y,i[2]=Rn.z,i[6]=us.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],y=n[3],_=n[7],x=n[11],w=n[15],T=i[0],R=i[4],A=i[8],M=i[12],E=i[1],D=i[5],I=i[9],N=i[13],V=i[2],B=i[6],G=i[10],K=i[14],k=i[3],et=i[7],ht=i[11],vt=i[15];return s[0]=o*T+a*E+l*V+c*k,s[4]=o*R+a*D+l*B+c*et,s[8]=o*A+a*I+l*G+c*ht,s[12]=o*M+a*N+l*K+c*vt,s[1]=h*T+u*E+d*V+f*k,s[5]=h*R+u*D+d*B+f*et,s[9]=h*A+u*I+d*G+f*ht,s[13]=h*M+u*N+d*K+f*vt,s[2]=g*T+v*E+p*V+m*k,s[6]=g*R+v*D+p*B+m*et,s[10]=g*A+v*I+p*G+m*ht,s[14]=g*M+v*N+p*K+m*vt,s[3]=y*T+_*E+x*V+w*k,s[7]=y*R+_*D+x*B+w*et,s[11]=y*A+_*I+x*G+w*ht,s[15]=y*M+_*N+x*K+w*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+v*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+p*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],y=u*p*c-v*d*c+v*l*f-a*p*f-u*l*m+a*d*m,_=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,x=h*v*c-g*u*c+g*a*f-o*v*f-h*a*m+o*u*m,w=g*u*l-h*v*l-g*a*d+o*v*d+h*a*p-o*u*p,T=e*y+n*_+i*x+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=y*R,t[1]=(v*d*s-u*p*s-v*i*f+n*p*f+u*i*m-n*d*m)*R,t[2]=(a*p*s-v*l*s+v*i*c-n*p*c-a*i*m+n*l*m)*R,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*R,t[4]=_*R,t[5]=(h*p*s-g*d*s+g*i*f-e*p*f-h*i*m+e*d*m)*R,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*m-e*l*m)*R,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*R,t[8]=x*R,t[9]=(g*u*s-h*v*s-g*n*f+e*v*f+h*n*m-e*u*m)*R,t[10]=(o*v*s-g*a*s+g*n*c-e*v*c-o*n*m+e*a*m)*R,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*R,t[12]=w*R,t[13]=(h*v*i-g*u*i+g*n*d-e*v*d-h*n*p+e*u*p)*R,t[14]=(g*a*i-o*v*i-g*n*l+e*v*l+o*n*p-e*a*p)*R,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,v=o*h,p=o*u,m=a*u,y=l*c,_=l*h,x=l*u,w=n.x,T=n.y,R=n.z;return i[0]=(1-(v+m))*w,i[1]=(f+x)*w,i[2]=(g-_)*w,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(d+m))*T,i[6]=(p+y)*T,i[7]=0,i[8]=(g+_)*R,i[9]=(p-y)*R,i[10]=(1-(d+v))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ai.set(i[0],i[1],i[2]).length();const o=ai.set(i[4],i[5],i[6]).length(),a=ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],nn.copy(this);const c=1/s,h=1/o,u=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=un,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===un)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Hs)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=un,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===un)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===Hs)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ai=new S,nn=new kt,Dh=new S(0,0,0),Lh=new S(1,1,1),Rn=new S,us=new S,qe=new S,ma=new kt,ga=new Be;class pn{constructor(t=0,e=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ma.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ma,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ga.setFromEuler(this),this.setFromQuaternion(ga,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class Nl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ih=0;const va=new S,li=new Be,_n=new kt,ds=new S,Ui=new S,Uh=new S,Fh=new Be,xa=new S(1,0,0),_a=new S(0,1,0),ya=new S(0,0,1),Sa={type:"added"},Nh={type:"removed"},ci={type:"childadded",child:null},dr={type:"childremoved",child:null};class Ee extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new S,e=new pn,n=new Be,i=new S(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new Yt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.multiply(li),this}rotateOnWorldAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.premultiply(li),this}rotateX(t){return this.rotateOnAxis(xa,t)}rotateY(t){return this.rotateOnAxis(_a,t)}rotateZ(t){return this.rotateOnAxis(ya,t)}translateOnAxis(t,e){return va.copy(t).applyQuaternion(this.quaternion),this.position.add(va.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xa,t)}translateY(t){return this.translateOnAxis(_a,t)}translateZ(t){return this.translateOnAxis(ya,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ds.copy(t):ds.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Ui,ds,this.up):_n.lookAt(ds,Ui,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),li.setFromRotationMatrix(_n),this.quaternion.premultiply(li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sa),ci.child=t,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nh),dr.child=t,this.dispatchEvent(dr),dr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sa),ci.child=t,this.dispatchEvent(ci),ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,t,Uh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,Fh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new S(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new S,yn=new S,fr=new S,Sn=new S,hi=new S,ui=new S,Ma=new S,pr=new S,mr=new S,gr=new S,vr=new oe,xr=new oe,_r=new oe;class rn{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){sn.subVectors(i,e),yn.subVectors(n,e),fr.subVectors(t,e);const o=sn.dot(sn),a=sn.dot(yn),l=sn.dot(fr),c=yn.dot(yn),h=yn.dot(fr),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return vr.setScalar(0),xr.setScalar(0),_r.setScalar(0),vr.fromBufferAttribute(t,e),xr.fromBufferAttribute(t,n),_r.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(vr,s.x),o.addScaledVector(xr,s.y),o.addScaledVector(_r,s.z),o}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),yn.subVectors(t,e),sn.cross(yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),sn.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;hi.subVectors(i,n),ui.subVectors(s,n),pr.subVectors(t,n);const l=hi.dot(pr),c=ui.dot(pr);if(l<=0&&c<=0)return e.copy(n);mr.subVectors(t,i);const h=hi.dot(mr),u=ui.dot(mr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(hi,o);gr.subVectors(t,s);const f=hi.dot(gr),g=ui.dot(gr);if(g>=0&&f<=g)return e.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ui,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Ma.subVectors(s,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Ma,a);const m=1/(p+v+d);return o=v*m,a=d*m,e.copy(n).addScaledVector(hi,o).addScaledVector(ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function yr(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=Oo(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=yr(o,s,t+1/3),this.g=yr(o,s,t),this.b=yr(o,s,t-1/3)}return se.colorSpaceToWorking(this,i),this}setStyle(t,e=Ke){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=Ol[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return se.workingToColorSpace(Le.copy(this),t),Math.round(Zt(Le.r*255,0,255))*65536+Math.round(Zt(Le.g*255,0,255))*256+Math.round(Zt(Le.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Le.copy(this),e);const n=Le.r,i=Le.g,s=Le.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ke){se.workingToColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,i=Le.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(fs);const n=Hi(Pn.h,fs.h,e),i=Hi(Pn.s,fs.s,e),s=Hi(Pn.l,fs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new $t;$t.NAMES=Ol;let Oh=0;class ti extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=yi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Or,this.blendDst=Br,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=la,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Or&&(n.blendSrc=this.blendSrc),this.blendDst!==Br&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==la&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class on extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new S,ps=new j;let Bh=0;class Te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ca,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ps.fromBufferAttribute(this,e),ps.applyMatrix3(t),this.setXY(e,ps.x,ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ca&&(t.usage=this.usage),t}}class Bl extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zl extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zh=0;const Je=new kt,Sr=new Ee,di=new S,Ye=new Jn,Fi=new Jn,Re=new S;class ye extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Il(t)?zl:Bl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Sr.lookAt(t),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ye.setFromBufferAttribute(s),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Fi.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Ye.min,Fi.min),Ye.expandByPoint(Re),Re.addVectors(Ye.max,Fi.max),Ye.expandByPoint(Re)):(Ye.expandByPoint(Fi.min),Ye.expandByPoint(Fi.max))}Ye.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Re.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Re.fromBufferAttribute(a,c),l&&(di.fromBufferAttribute(t,c),Re.add(di)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new S,l[A]=new S;const c=new S,h=new S,u=new S,d=new j,f=new j,g=new j,v=new S,p=new S;function m(A,M,E){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,E),d.fromBufferAttribute(s,A),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,E),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[A].add(v),a[M].add(v),a[E].add(v),l[A].add(p),l[M].add(p),l[E].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,M=y.length;A<M;++A){const E=y[A],D=E.start,I=E.count;for(let N=D,V=D+I;N<V;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const _=new S,x=new S,w=new S,T=new S;function R(A){w.fromBufferAttribute(i,A),T.copy(w);const M=a[A];_.copy(M),_.sub(w.multiplyScalar(w.dot(M))).normalize(),x.crossVectors(T,M);const D=x.dot(l[A])<0?-1:1;o.setXYZW(A,_.x,_.y,_.z,D)}for(let A=0,M=y.length;A<M;++A){const E=y[A],D=E.start,I=E.count;for(let N=D,V=D+I;N<V;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new S,s=new S,o=new S,a=new S,l=new S,c=new S,h=new S,u=new S;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Te(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wa=new kt,Vn=new zo,ms=new Qn,ba=new S,gs=new S,vs=new S,xs=new S,Mr=new S,_s=new S,Ta=new S,ys=new S;class X extends Ee{constructor(t=new ye,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){_s.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Mr.fromBufferAttribute(u,t),o?_s.addScaledVector(Mr,h):_s.addScaledVector(Mr.sub(e),h))}e.add(_s)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(s),Vn.copy(t.ray).recast(t.near),!(ms.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(ms,ba)===null||Vn.origin.distanceToSquared(ba)>(t.far-t.near)**2))&&(wa.copy(s).invert(),Vn.copy(t.ray).applyMatrix4(wa),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=y,w=_;x<w;x+=3){const T=a.getX(x),R=a.getX(x+1),A=a.getX(x+2);i=Ss(this,m,t,n,c,h,u,T,R,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=a.getX(p),_=a.getX(p+1),x=a.getX(p+2);i=Ss(this,o,t,n,c,h,u,y,_,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=y,w=_;x<w;x+=3){const T=x,R=x+1,A=x+2;i=Ss(this,m,t,n,c,h,u,T,R,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=p,_=p+1,x=p+2;i=Ss(this,o,t,n,c,h,u,y,_,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function kh(r,t,e,n,i,s,o,a){let l;if(t.side===Ue?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Fn,a),l===null)return null;ys.copy(a),ys.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ys);return c<e.near||c>e.far?null:{distance:c,point:ys.clone(),object:r}}function Ss(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,gs),r.getVertexPosition(l,vs),r.getVertexPosition(c,xs);const h=kh(r,t,e,n,gs,vs,xs,Ta);if(h){const u=new S;rn.getBarycoord(Ta,gs,vs,xs,u),i&&(h.uv=rn.getInterpolatedAttribute(i,a,l,c,u,new j)),s&&(h.uv1=rn.getInterpolatedAttribute(s,a,l,c,u,new j)),o&&(h.normal=rn.getInterpolatedAttribute(o,a,l,c,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new S,materialIndex:0};rn.getNormal(gs,vs,xs,d.normal),h.face=d,h.barycoord=u}return h}class pt extends ye{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(v,p,m,y,_,x,w,T,R,A,M){const E=x/R,D=w/A,I=x/2,N=w/2,V=T/2,B=R+1,G=A+1;let K=0,k=0;const et=new S;for(let ht=0;ht<G;ht++){const vt=ht*D-N;for(let _t=0;_t<B;_t++){const ot=_t*E-I;et[v]=ot*y,et[p]=vt*_,et[m]=V,c.push(et.x,et.y,et.z),et[v]=0,et[p]=0,et[m]=T>0?1:-1,h.push(et.x,et.y,et.z),u.push(_t/R),u.push(1-ht/A),K+=1}}for(let ht=0;ht<A;ht++)for(let vt=0;vt<R;vt++){const _t=d+vt+B*ht,ot=d+vt+B*(ht+1),Vt=d+(vt+1)+B*(ht+1),Gt=d+(vt+1)+B*ht;l.push(_t,ot,Gt),l.push(ot,Vt,Gt),k+=6}a.addGroup(f,k,M),f+=k,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ai(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(r){const t={};for(let e=0;e<r.length;e++){const n=Ai(r[e]);for(const i in n)t[i]=n[i]}return t}function Vh(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function kl(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Gh={clone:Ai,merge:Oe};var Hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Me extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hh,this.fragmentShader=Wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ai(t.uniforms),this.uniformsGroups=Vh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vl extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new S,Ea=new j,Aa=new j;class Ge extends Vl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$i*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,Ea,Aa),e.subVectors(Aa,Ea)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fi=-90,pi=1;class Xh extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ge(fi,pi,t,e);i.layers=this.layers,this.add(i);const s=new Ge(fi,pi,t,e);s.layers=this.layers,this.add(s);const o=new Ge(fi,pi,t,e);o.layers=this.layers,this.add(o);const a=new Ge(fi,pi,t,e);a.layers=this.layers,this.add(a);const l=new Ge(fi,pi,t,e);l.layers=this.layers,this.add(l);const c=new Ge(fi,pi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gl extends ze{constructor(t=[],e=bi,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qh extends be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Gl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pt(5,5,5),s=new Me({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Un});s.uniforms.tEquirect.value=e;const o=new X(i,s),a=e.minFilter;return e.minFilter===In&&(e.minFilter=ue),new Xh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}class ee extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yh={type:"move"};class wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yh)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Zs extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Qi extends ze{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Pe,h=Pe,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ca extends Te{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const mi=new kt,Ra=new kt,Ms=[],Pa=new Jn,Kh=new kt,Ni=new X,Oi=new Qn;class Wi extends X{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ca(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Kh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mi),Pa.copy(t.boundingBox).applyMatrix4(mi),this.boundingBox.union(Pa)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mi),Oi.copy(t.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(Oi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ni.geometry=this.geometry,Ni.material=this.material,Ni.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(n),t.ray.intersectsSphere(Oi)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,mi),Ra.multiplyMatrices(n,mi),Ni.matrixWorld=Ra,Ni.raycast(t,Ms);for(let o=0,a=Ms.length;o<a;o++){const l=Ms[o];l.instanceId=s,l.object=this,e.push(l)}Ms.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ca(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qi(new Float32Array(i*this.count),i,this.count,Io,hn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const br=new S,jh=new S,Zh=new Yt;class Xn{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=br.subVectors(n,e).cross(jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(br),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zh.getNormalMatrix(t),i=this.coplanarPoint(br).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new Qn,$h=new j(.5,.5),ws=new S;class ko{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,s=new Xn,o=new Xn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){const i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],v=s[9],p=s[10],m=s[11],y=s[12],_=s[13],x=s[14],w=s[15];if(i[0].setComponents(c-o,f-h,m-g,w-y).normalize(),i[1].setComponents(c+o,f+h,m+g,w+y).normalize(),i[2].setComponents(c+a,f+u,m+v,w+_).normalize(),i[3].setComponents(c-a,f-u,m-v,w-_).normalize(),n)i[4].setComponents(l,d,p,x).normalize(),i[5].setComponents(c-l,f-d,m-p,w-x).normalize();else if(i[4].setComponents(c-l,f-d,m-p,w-x).normalize(),e===un)i[5].setComponents(c+l,f+d,m+p,w+x).normalize();else if(e===Hs)i[5].setComponents(l,d,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){Gn.center.set(0,0,0);const e=$h.distanceTo(t.center);return Gn.radius=.7071067811865476+e,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ws.x=i.normal.x>0?t.max.x:t.min.x,ws.y=i.normal.y>0?t.max.y:t.min.y,ws.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vo extends ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xs=new S,qs=new S,Da=new kt,Bi=new zo,bs=new Qn,Tr=new S,La=new S;class Jh extends Ee{constructor(t=new ye,e=new Vo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Xs.fromBufferAttribute(e,i-1),qs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Xs.distanceTo(qs);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(i),bs.radius+=s,t.ray.intersectsSphere(bs)===!1)return;Da.copy(i).invert(),Bi.copy(t.ray).applyMatrix4(Da);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=h.getX(v),y=h.getX(v+1),_=Ts(this,t,Bi,l,m,y,v);_&&e.push(_)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(f),m=Ts(this,t,Bi,l,v,p,g-1);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=Ts(this,t,Bi,l,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){const v=Ts(this,t,Bi,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ts(r,t,e,n,i,s,o){const a=r.geometry.attributes.position;if(Xs.fromBufferAttribute(a,i),qs.fromBufferAttribute(a,s),e.distanceSqToSegment(Xs,qs,Tr,La)>n)return;Tr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Tr);if(!(c<t.near||c>t.far))return{distance:c,point:La.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Ia=new S,Ua=new S;class Hl extends Jh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Ia.fromBufferAttribute(e,i),Ua.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ia.distanceTo(Ua);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wl extends ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fa=new kt,bo=new zo,Es=new Qn,As=new S;class Xl extends Ee{constructor(t=new ye,e=new Wl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(i),Es.radius+=s,t.ray.intersectsSphere(Es)===!1)return;Fa.copy(i).invert(),bo.copy(t.ray).applyMatrix4(Fa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const p=c.getX(g);As.fromBufferAttribute(u,p),Na(As,p,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)As.fromBufferAttribute(u,g),Na(As,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Na(r,t,e,n,i,s,o){const a=bo.distanceSqToPoint(r);if(a<e){const l=new S;bo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Go extends ze{constructor(t,e,n=Nn,i,s,o,a=Pe,l=Pe,c,h=Ei,u=1){if(h!==Ei&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ql extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ho extends ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new S,h=new j;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class he extends ye{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const v=[],p=n/2;let m=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function y(){const x=new S,w=new S;let T=0;const R=(e-t)/n;for(let A=0;A<=s;A++){const M=[],E=A/s,D=E*(e-t)+t;for(let I=0;I<=i;I++){const N=I/i,V=N*l+a,B=Math.sin(V),G=Math.cos(V);w.x=D*B,w.y=-E*n+p,w.z=D*G,u.push(w.x,w.y,w.z),x.set(B,R,G).normalize(),d.push(x.x,x.y,x.z),f.push(N,1-E),M.push(g++)}v.push(M)}for(let A=0;A<i;A++)for(let M=0;M<s;M++){const E=v[M][A],D=v[M+1][A],I=v[M+1][A+1],N=v[M][A+1];(t>0||M!==0)&&(h.push(E,D,N),T+=3),(e>0||M!==s-1)&&(h.push(D,I,N),T+=3)}c.addGroup(m,T,0),m+=T}function _(x){const w=g,T=new j,R=new S;let A=0;const M=x===!0?t:e,E=x===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,p*E,0),d.push(0,E,0),f.push(.5,.5),g++;const D=g;for(let I=0;I<=i;I++){const V=I/i*l+a,B=Math.cos(V),G=Math.sin(V);R.x=M*G,R.y=p*E,R.z=M*B,u.push(R.x,R.y,R.z),d.push(0,E,0),T.x=B*.5+.5,T.y=G*.5*E+.5,f.push(T.x,T.y),g++}for(let I=0;I<i;I++){const N=w+I,V=D+I;x===!0?h.push(V,V+1,N):h.push(V+1,V,N),A+=3}c.addGroup(m,A,x===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ys extends he{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ys(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wo extends ye{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(s.slice(),3)),this.setAttribute("uv",new te(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new S,x=new S,w=new S;for(let T=0;T<e.length;T+=3)f(e[T+0],_),f(e[T+1],x),f(e[T+2],w),l(_,x,w,y)}function l(y,_,x,w){const T=w+1,R=[];for(let A=0;A<=T;A++){R[A]=[];const M=y.clone().lerp(x,A/T),E=_.clone().lerp(x,A/T),D=T-A;for(let I=0;I<=D;I++)I===0&&A===T?R[A][I]=M:R[A][I]=M.clone().lerp(E,I/D)}for(let A=0;A<T;A++)for(let M=0;M<2*(T-A)-1;M++){const E=Math.floor(M/2);M%2===0?(d(R[A][E+1]),d(R[A+1][E]),d(R[A][E])):(d(R[A][E+1]),d(R[A+1][E+1]),d(R[A+1][E]))}}function c(y){const _=new S;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(y),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function h(){const y=new S;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];const x=p(y)/2/Math.PI+.5,w=m(y)/Math.PI+.5;o.push(x,1-w)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const _=o[y+0],x=o[y+2],w=o[y+4],T=Math.max(_,x,w),R=Math.min(_,x,w);T>.9&&R<.1&&(_<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,_){const x=y*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function g(){const y=new S,_=new S,x=new S,w=new S,T=new j,R=new j,A=new j;for(let M=0,E=0;M<s.length;M+=9,E+=6){y.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),T.set(o[E+0],o[E+1]),R.set(o[E+2],o[E+3]),A.set(o[E+4],o[E+5]),w.copy(y).add(_).add(x).divideScalar(3);const D=p(w);v(T,E+0,y,D),v(R,E+2,_,D),v(A,E+4,x,D)}}function v(y,_,x,w){w<0&&y.x===1&&(o[_]=y.x-1),x.x===0&&x.z===0&&(o[_]=w/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.vertices,t.indices,t.radius,t.details)}}class Xo extends Wo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xo(t.radius,t.detail)}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new j:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new S,i=[],s=[],o=[],a=new S,l=new kt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new S)}s[0]=new S,o[0]=new S;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Zt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Zt(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class qo extends mn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new j){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qh extends qo{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yo(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Cs=new S,Er=new Yo,Ar=new Yo,Cr=new Yo;class Yl extends mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new S){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Cs.subVectors(i[0],i[1]).add(i[0]),c=Cs);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Cs.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Er.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,p),Ar.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,p),Cr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Er.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ar.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Cr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Er.calc(l),Ar.calc(l),Cr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new S().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Oa(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function tu(r,t){const e=1-r;return e*e*t}function eu(r,t){return 2*(1-r)*r*t}function nu(r,t){return r*r*t}function Xi(r,t,e,n){return tu(r,t)+eu(r,e)+nu(r,n)}function iu(r,t){const e=1-r;return e*e*e*t}function su(r,t){const e=1-r;return 3*e*e*r*t}function ru(r,t){return 3*(1-r)*r*r*t}function ou(r,t){return r*r*r*t}function qi(r,t,e,n,i){return iu(r,t)+su(r,e)+ru(r,n)+ou(r,i)}class Kl extends mn{constructor(t=new j,e=new j,n=new j,i=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new j){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(qi(t,i.x,s.x,o.x,a.x),qi(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class au extends mn{constructor(t=new S,e=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new S){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(qi(t,i.x,s.x,o.x,a.x),qi(t,i.y,s.y,o.y,a.y),qi(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jl extends mn{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lu extends mn{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zl extends mn{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Xi(t,i.x,s.x,o.x),Xi(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $l extends mn{constructor(t=new S,e=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Xi(t,i.x,s.x,o.x),Xi(t,i.y,s.y,o.y),Xi(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jl extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Oa(a,l.x,c.x,h.x,u.x),Oa(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new j().fromArray(i))}return this}}var Ks=Object.freeze({__proto__:null,ArcCurve:Qh,CatmullRomCurve3:Yl,CubicBezierCurve:Kl,CubicBezierCurve3:au,EllipseCurve:qo,LineCurve:jl,LineCurve3:lu,QuadraticBezierCurve:Zl,QuadraticBezierCurve3:$l,SplineCurve:Jl});class cu extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ks[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ks[i.type]().fromJSON(i))}return this}}class Ba extends cu{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new jl(this.currentPoint.clone(),new j(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Zl(this.currentPoint.clone(),new j(t,e),new j(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Kl(this.currentPoint.clone(),new j(t,e),new j(n,i),new j(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Jl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new qo(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ql extends Ba{constructor(t){super(t),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ba().fromJSON(i))}return this}}function hu(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=tc(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=mu(r,t,s,e)),r.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<i;d+=e){const f=r[d],g=r[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ts(s,o,e,a,l,c,0),o}function tc(r,t,e,n,i){let s;if(i===Eu(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=za(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=za(o/n|0,r[o],r[o+1],s);return s&&Ci(s,s.next)&&(ns(s),s=s.next),s}function Zn(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Ci(e,e.next)||_e(e.prev,e,e.next)===0)){if(ns(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ts(r,t,e,n,i,s,o){if(!r)return;!o&&s&&yu(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?du(r,n,i,s):uu(r)){t.push(l.i,r.i,c.i),ns(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=fu(Zn(r),t),ts(r,t,e,n,i,s,2)):o===2&&pu(r,t,e,n,i,s):ts(Zn(r),t,e,n,i,s,1);break}}}function uu(r){const t=r.prev,e=r,n=r.next;if(_e(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,s,o),u=Math.min(a,l,c),d=Math.max(i,s,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ki(i,a,s,l,o,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function du(r,t,e,n){const i=r.prev,s=r,o=r.next;if(_e(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),v=Math.max(a,l,c),p=Math.max(h,u,d),m=To(f,g,t,e,n),y=To(v,p,t,e,n);let _=r.prevZ,x=r.nextZ;for(;_&&_.z>=m&&x&&x.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&ki(a,h,l,u,c,d,_.x,_.y)&&_e(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&ki(a,h,l,u,c,d,x.x,x.y)&&_e(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&ki(a,h,l,u,c,d,_.x,_.y)&&_e(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&ki(a,h,l,u,c,d,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function fu(r,t){let e=r;do{const n=e.prev,i=e.next.next;!Ci(n,i)&&nc(n,e,e.next,i)&&es(n,i)&&es(i,n)&&(t.push(n.i,e.i,i.i),ns(e),ns(e.next),e=r=i),e=e.next}while(e!==r);return Zn(e)}function pu(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wu(o,a)){let l=ic(o,a);o=Zn(o,o.next),l=Zn(l,l.next),ts(o,t,e,n,i,s,0),ts(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function mu(r,t,e,n){const i=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=tc(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Mu(c))}i.sort(gu);for(let s=0;s<i.length;s++)e=vu(i[s],e);return e}function gu(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function vu(r,t){const e=xu(r,t);if(!e)return t;const n=ic(e,r);return Zn(n,n.next),Zn(e,e.next)}function xu(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,o;if(Ci(r,e))return e;do{if(Ci(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ec(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);es(e,r)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&_u(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function _u(r,t){return _e(r.prev,r,t.prev)<0&&_e(t.next,r,r.next)<0}function yu(r,t,e,n){let i=r;do i.z===0&&(i.z=To(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Su(i)}function Su(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function To(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Mu(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function ec(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function ki(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&ec(r,t,e,n,i,s,o,a)}function wu(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!bu(r,t)&&(es(r,t)&&es(t,r)&&Tu(r,t)&&(_e(r.prev,r,t.prev)||_e(r,t.prev,t))||Ci(r,t)&&_e(r.prev,r,r.next)>0&&_e(t.prev,t,t.next)>0)}function _e(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Ci(r,t){return r.x===t.x&&r.y===t.y}function nc(r,t,e,n){const i=Ps(_e(r,t,e)),s=Ps(_e(r,t,n)),o=Ps(_e(e,n,r)),a=Ps(_e(e,n,t));return!!(i!==s&&o!==a||i===0&&Rs(r,e,t)||s===0&&Rs(r,n,t)||o===0&&Rs(e,r,n)||a===0&&Rs(e,t,n))}function Rs(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ps(r){return r>0?1:r<0?-1:0}function bu(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&nc(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function es(r,t){return _e(r.prev,r,r.next)<0?_e(r,t,r.next)>=0&&_e(r,r.prev,t)>=0:_e(r,t,r.prev)<0||_e(r,r.next,t)<0}function Tu(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function ic(r,t){const e=Eo(r.i,r.x,r.y),n=Eo(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function za(r,t,e,n){const i=Eo(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ns(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Eo(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Eu(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Au{static triangulate(t,e,n=2){return hu(t,e,n)}}class xi{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return xi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];ka(t),Va(n,t);let o=t.length;e.forEach(ka);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Va(n,e[l]);const a=Au.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ka(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Va(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ko extends ye{constructor(t=new Ql([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new te(i,3)),this.setAttribute("uv",new te(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Cu;let _,x=!1,w,T,R,A;m&&(_=m.getSpacedPoints(h),x=!0,d=!1,w=m.computeFrenetFrames(h,!1),T=new S,R=new S,A=new S),d||(p=0,f=0,g=0,v=0);const M=a.extractPoints(c);let E=M.shape;const D=M.holes;if(!xi.isClockWise(E)){E=E.reverse();for(let it=0,Q=D.length;it<Q;it++){const J=D[it];xi.isClockWise(J)&&(D[it]=J.reverse())}}function N(it){const J=10000000000000001e-36;let $=it[0];for(let mt=1;mt<=it.length;mt++){const at=mt%it.length,gt=it[at],Wt=gt.x-$.x,Ht=gt.y-$.y,P=Wt*Wt+Ht*Ht,b=Math.max(Math.abs(gt.x),Math.abs(gt.y),Math.abs($.x),Math.abs($.y)),z=J*b*b;if(P<=z){it.splice(at,1),mt--;continue}$=gt}}N(E),D.forEach(N);const V=D.length,B=E;for(let it=0;it<V;it++){const Q=D[it];E=E.concat(Q)}function G(it,Q,J){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(Q,J)}const K=E.length;function k(it,Q,J){let $,mt,at;const gt=it.x-Q.x,Wt=it.y-Q.y,Ht=J.x-it.x,P=J.y-it.y,b=gt*gt+Wt*Wt,z=gt*P-Wt*Ht;if(Math.abs(z)>Number.EPSILON){const q=Math.sqrt(b),nt=Math.sqrt(Ht*Ht+P*P),Y=Q.x-Wt/q,Lt=Q.y+gt/q,ft=J.x-P/nt,Rt=J.y+Ht/nt,Pt=((ft-Y)*P-(Rt-Lt)*Ht)/(gt*P-Wt*Ht);$=Y+gt*Pt-it.x,mt=Lt+Wt*Pt-it.y;const lt=$*$+mt*mt;if(lt<=2)return new j($,mt);at=Math.sqrt(lt/2)}else{let q=!1;gt>Number.EPSILON?Ht>Number.EPSILON&&(q=!0):gt<-Number.EPSILON?Ht<-Number.EPSILON&&(q=!0):Math.sign(Wt)===Math.sign(P)&&(q=!0),q?($=-Wt,mt=gt,at=Math.sqrt(b)):($=gt,mt=Wt,at=Math.sqrt(b/2))}return new j($/at,mt/at)}const et=[];for(let it=0,Q=B.length,J=Q-1,$=it+1;it<Q;it++,J++,$++)J===Q&&(J=0),$===Q&&($=0),et[it]=k(B[it],B[J],B[$]);const ht=[];let vt,_t=et.concat();for(let it=0,Q=V;it<Q;it++){const J=D[it];vt=[];for(let $=0,mt=J.length,at=mt-1,gt=$+1;$<mt;$++,at++,gt++)at===mt&&(at=0),gt===mt&&(gt=0),vt[$]=k(J[$],J[at],J[gt]);ht.push(vt),_t=_t.concat(vt)}let ot;if(p===0)ot=xi.triangulateShape(B,D);else{const it=[],Q=[];for(let J=0;J<p;J++){const $=J/p,mt=f*Math.cos($*Math.PI/2),at=g*Math.sin($*Math.PI/2)+v;for(let gt=0,Wt=B.length;gt<Wt;gt++){const Ht=G(B[gt],et[gt],at);Ut(Ht.x,Ht.y,-mt),$===0&&it.push(Ht)}for(let gt=0,Wt=V;gt<Wt;gt++){const Ht=D[gt];vt=ht[gt];const P=[];for(let b=0,z=Ht.length;b<z;b++){const q=G(Ht[b],vt[b],at);Ut(q.x,q.y,-mt),$===0&&P.push(q)}$===0&&Q.push(P)}}ot=xi.triangulateShape(it,Q)}const Vt=ot.length,Gt=g+v;for(let it=0;it<K;it++){const Q=d?G(E[it],_t[it],Gt):E[it];x?(R.copy(w.normals[0]).multiplyScalar(Q.x),T.copy(w.binormals[0]).multiplyScalar(Q.y),A.copy(_[0]).add(R).add(T),Ut(A.x,A.y,A.z)):Ut(Q.x,Q.y,0)}for(let it=1;it<=h;it++)for(let Q=0;Q<K;Q++){const J=d?G(E[Q],_t[Q],Gt):E[Q];x?(R.copy(w.normals[it]).multiplyScalar(J.x),T.copy(w.binormals[it]).multiplyScalar(J.y),A.copy(_[it]).add(R).add(T),Ut(A.x,A.y,A.z)):Ut(J.x,J.y,u/h*it)}for(let it=p-1;it>=0;it--){const Q=it/p,J=f*Math.cos(Q*Math.PI/2),$=g*Math.sin(Q*Math.PI/2)+v;for(let mt=0,at=B.length;mt<at;mt++){const gt=G(B[mt],et[mt],$);Ut(gt.x,gt.y,u+J)}for(let mt=0,at=D.length;mt<at;mt++){const gt=D[mt];vt=ht[mt];for(let Wt=0,Ht=gt.length;Wt<Ht;Wt++){const P=G(gt[Wt],vt[Wt],$);x?Ut(P.x,P.y+_[h-1].y,_[h-1].x+J):Ut(P.x,P.y,u+J)}}}Z(),st();function Z(){const it=i.length/3;if(d){let Q=0,J=K*Q;for(let $=0;$<Vt;$++){const mt=ot[$];Ct(mt[2]+J,mt[1]+J,mt[0]+J)}Q=h+p*2,J=K*Q;for(let $=0;$<Vt;$++){const mt=ot[$];Ct(mt[0]+J,mt[1]+J,mt[2]+J)}}else{for(let Q=0;Q<Vt;Q++){const J=ot[Q];Ct(J[2],J[1],J[0])}for(let Q=0;Q<Vt;Q++){const J=ot[Q];Ct(J[0]+K*h,J[1]+K*h,J[2]+K*h)}}n.addGroup(it,i.length/3-it,0)}function st(){const it=i.length/3;let Q=0;Tt(B,Q),Q+=B.length;for(let J=0,$=D.length;J<$;J++){const mt=D[J];Tt(mt,Q),Q+=mt.length}n.addGroup(it,i.length/3-it,1)}function Tt(it,Q){let J=it.length;for(;--J>=0;){const $=J;let mt=J-1;mt<0&&(mt=it.length-1);for(let at=0,gt=h+p*2;at<gt;at++){const Wt=K*at,Ht=K*(at+1),P=Q+$+Wt,b=Q+mt+Wt,z=Q+mt+Ht,q=Q+$+Ht;Jt(P,b,z,q)}}}function Ut(it,Q,J){l.push(it),l.push(Q),l.push(J)}function Ct(it,Q,J){de(it),de(Q),de(J);const $=i.length/3,mt=y.generateTopUV(n,i,$-3,$-2,$-1);L(mt[0]),L(mt[1]),L(mt[2])}function Jt(it,Q,J,$){de(it),de(Q),de($),de(Q),de(J),de($);const mt=i.length/3,at=y.generateSideWallUV(n,i,mt-6,mt-3,mt-2,mt-1);L(at[0]),L(at[1]),L(at[3]),L(at[1]),L(at[2]),L(at[3])}function de(it){i.push(l[it*3+0]),i.push(l[it*3+1]),i.push(l[it*3+2])}function L(it){s.push(it.x),s.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ru(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ks[i.type]().fromJSON(i)),new Ko(n,t.options)}}const Cu={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new j(s,o),new j(a,l),new j(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],v=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new j(o,1-l),new j(c,1-u),new j(d,1-g),new j(v,1-m)]:[new j(a,1-l),new j(h,1-u),new j(f,1-g),new j(p,1-m)]}};function Ru(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class $s extends ye{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Zt(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/e,u=new S,d=new j,f=new S,g=new S,v=new S;let p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){const _=n+y*h*i,x=Math.sin(_),w=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*w,o.push(u.x,u.y,u.z),d.x=y/e,d.y=T/(t.length-1),a.push(d.x,d.y);const R=l[3*T+0]*x,A=l[3*T+1],M=l[3*T+0]*w;c.push(R,A,M)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){const x=_+y*t.length,w=x,T=x+t.length,R=x+t.length+1,A=x+1;s.push(w,T,A),s.push(R,A,T)}this.setIndex(s),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.points,t.segments,t.phiStart,t.phiLength)}}class an extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const y=m*d-o;for(let _=0;_<c;_++){const x=_*u-s;g.push(x,-y,0),v.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const _=y+c*m,x=y+c*(m+1),w=y+1+c*(m+1),T=y+1+c*m;f.push(_,x,T),f.push(x,w,T)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.widthSegments,t.heightSegments)}}class dn extends ye{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new S,d=new S,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const y=[],_=m/n;let x=0;m===0&&o===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let w=0;w<=e;w++){const T=w/e;u.x=-t*Math.cos(i+T*s)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+T*s)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(T+x,1-_),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const _=h[m][y+1],x=h[m][y],w=h[m+1][y],T=h[m+1][y+1];(m!==0||o>0)&&f.push(_,x,T),(m!==n-1||l<Math.PI)&&f.push(x,w,T)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jo extends ye{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new S,u=new S,d=new S;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*s,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(v),u.y=(t+e*Math.cos(p))*Math.sin(v),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(v,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zo extends ye{constructor(t=new $l(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new S,l=new S,c=new j;let h=new S;const u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function v(){for(let _=0;_<e;_++)p(_);p(s===!1?e:0),y(),m()}function p(_){h=t.getPointAt(_/e,h);const x=o.normals[_],w=o.binormals[_];for(let T=0;T<=i;T++){const R=T/i*Math.PI*2,A=Math.sin(R),M=-Math.cos(R);l.x=M*x.x+A*w.x,l.y=M*x.y+A*w.y,l.z=M*x.z+A*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=e;_++)for(let x=1;x<=i;x++){const w=(i+1)*(_-1)+(x-1),T=(i+1)*_+(x-1),R=(i+1)*_+x,A=(i+1)*(_-1)+x;g.push(w,T,A),g.push(T,R,A)}}function y(){for(let _=0;_<=e;_++)for(let x=0;x<=i;x++)c.x=_/e,c.y=x/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Zo(new Ks[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ie extends ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sc extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pu extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $o extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rc extends $o{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Rr=new kt,Ga=new S,Ha=new S;class oc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ga.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ga),Ha.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ha),e.updateMatrixWorld(),Rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Wa=new kt,zi=new S,Pr=new S;class Du extends oc{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zi.setFromMatrixPosition(t.matrixWorld),n.position.copy(zi),Pr.copy(n.position),Pr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pr),n.updateMatrixWorld(),i.makeTranslation(-zi.x,-zi.y,-zi.z),Wa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa,n.coordinateSystem,n.reversedDepth)}}class Lu extends $o{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Du}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Js extends Vl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Iu extends oc{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ac extends $o{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Iu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Uu extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Xa(r,t,e,n){const i=Fu(n);switch(e){case Al:return r*t;case Io:return r*t/i.components*i.byteLength;case Uo:return r*t/i.components*i.byteLength;case Rl:return r*t*2/i.components*i.byteLength;case Fo:return r*t*2/i.components*i.byteLength;case Cl:return r*t*3/i.components*i.byteLength;case me:return r*t*4/i.components*i.byteLength;case No:return r*t*4/i.components*i.byteLength;case Fs:case Ns:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Os:case Bs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Zr:case Jr:return Math.max(r,16)*Math.max(t,8)/4;case jr:case $r:return Math.max(r,8)*Math.max(t,8)/2;case Qr:case to:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case eo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case so:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ro:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case oo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ao:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case lo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case co:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ho:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case uo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case fo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case po:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case mo:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case go:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case vo:case xo:case _o:return Math.ceil(r/4)*Math.ceil(t/4)*16;case yo:case So:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Mo:case wo:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fu(r){switch(r){case tn:case wl:return{byteLength:1,components:1};case Ki:case bl:case je:return{byteLength:2,components:1};case Do:case Lo:return{byteLength:2,components:4};case Nn:case Po:case hn:return{byteLength:4,components:1};case Tl:case El:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);function lc(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Nu(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bu=`#ifdef USE_ALPHAHASH
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
#endif`,zu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ku=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hu=`#ifdef USE_AOMAP
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
#endif`,Wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xu=`#ifdef USE_BATCHING
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
#endif`,qu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zu=`#ifdef USE_IRIDESCENCE
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
#endif`,$u=`#ifdef USE_BUMPMAP
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
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,od=`#define PI 3.141592653589793
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
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ld=`vec3 transformedNormal = objectNormal;
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
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bd=`#ifdef USE_GRADIENTMAP
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
}`,Td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
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
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ud=`PhysicalMaterial material;
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
#endif`,Fd=`struct PhysicalMaterial {
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
}`,Nd=`
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qd=`#if defined( USE_POINTS_UV )
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
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,of=`#ifdef USE_NORMALMAP
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
#endif`,af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,df=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mf=`float getShadowMask() {
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
}`,wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,Tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ef=`#ifdef USE_SKINNING
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
#endif`,Af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Df=`#ifdef USE_TRANSMISSION
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
#endif`,Lf=`#ifdef USE_TRANSMISSION
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bf=`uniform sampler2D t2D;
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`#include <common>
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
}`,Wf=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xf=`#define DISTANCE
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
}`,qf=`#define DISTANCE
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
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
}`,Zf=`uniform vec3 diffuse;
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
}`,$f=`#include <common>
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Qf=`#define LAMBERT
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
}`,tp=`#define LAMBERT
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
}`,ep=`#define MATCAP
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
}`,np=`#define MATCAP
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
}`,ip=`#define NORMAL
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
}`,sp=`#define NORMAL
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
}`,rp=`#define PHONG
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
}`,op=`#define PHONG
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
}`,ap=`#define STANDARD
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
}`,lp=`#define STANDARD
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
}`,cp=`#define TOON
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
}`,hp=`#define TOON
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
}`,up=`uniform float size;
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 color;
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
}`,mp=`uniform float rotation;
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
}`,gp=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Ou,alphahash_pars_fragment:Bu,alphamap_fragment:zu,alphamap_pars_fragment:ku,alphatest_fragment:Vu,alphatest_pars_fragment:Gu,aomap_fragment:Hu,aomap_pars_fragment:Wu,batching_pars_vertex:Xu,batching_vertex:qu,begin_vertex:Yu,beginnormal_vertex:Ku,bsdfs:ju,iridescence_fragment:Zu,bumpmap_pars_fragment:$u,clipping_planes_fragment:Ju,clipping_planes_pars_fragment:Qu,clipping_planes_pars_vertex:td,clipping_planes_vertex:ed,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:sd,color_vertex:rd,common:od,cube_uv_reflection_fragment:ad,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:hd,emissivemap_fragment:ud,emissivemap_pars_fragment:dd,colorspace_fragment:fd,colorspace_pars_fragment:pd,envmap_fragment:md,envmap_common_pars_fragment:gd,envmap_pars_fragment:vd,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Rd,envmap_vertex:_d,fog_vertex:yd,fog_pars_vertex:Sd,fog_fragment:Md,fog_pars_fragment:wd,gradientmap_pars_fragment:bd,lightmap_pars_fragment:Td,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:Ad,lights_pars_begin:Cd,lights_toon_fragment:Pd,lights_toon_pars_fragment:Dd,lights_phong_fragment:Ld,lights_phong_pars_fragment:Id,lights_physical_fragment:Ud,lights_physical_pars_fragment:Fd,lights_fragment_begin:Nd,lights_fragment_maps:Od,lights_fragment_end:Bd,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:Vd,logdepthbuf_vertex:Gd,map_fragment:Hd,map_pars_fragment:Wd,map_particle_fragment:Xd,map_particle_pars_fragment:qd,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:Kd,morphinstance_vertex:jd,morphcolor_vertex:Zd,morphnormal_vertex:$d,morphtarget_pars_vertex:Jd,morphtarget_vertex:Qd,normal_fragment_begin:tf,normal_fragment_maps:ef,normal_pars_fragment:nf,normal_pars_vertex:sf,normal_vertex:rf,normalmap_pars_fragment:of,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:cf,iridescence_pars_fragment:hf,opaque_fragment:uf,packing:df,premultiplied_alpha_fragment:ff,project_vertex:pf,dithering_fragment:mf,dithering_pars_fragment:gf,roughnessmap_fragment:vf,roughnessmap_pars_fragment:xf,shadowmap_pars_fragment:_f,shadowmap_pars_vertex:yf,shadowmap_vertex:Sf,shadowmask_pars_fragment:Mf,skinbase_vertex:wf,skinning_pars_vertex:bf,skinning_vertex:Tf,skinnormal_vertex:Ef,specularmap_fragment:Af,specularmap_pars_fragment:Cf,tonemapping_fragment:Rf,tonemapping_pars_fragment:Pf,transmission_fragment:Df,transmission_pars_fragment:Lf,uv_pars_fragment:If,uv_pars_vertex:Uf,uv_vertex:Ff,worldpos_vertex:Nf,background_vert:Of,background_frag:Bf,backgroundCube_vert:zf,backgroundCube_frag:kf,cube_vert:Vf,cube_frag:Gf,depth_vert:Hf,depth_frag:Wf,distanceRGBA_vert:Xf,distanceRGBA_frag:qf,equirect_vert:Yf,equirect_frag:Kf,linedashed_vert:jf,linedashed_frag:Zf,meshbasic_vert:$f,meshbasic_frag:Jf,meshlambert_vert:Qf,meshlambert_frag:tp,meshmatcap_vert:ep,meshmatcap_frag:np,meshnormal_vert:ip,meshnormal_frag:sp,meshphong_vert:rp,meshphong_frag:op,meshphysical_vert:ap,meshphysical_frag:lp,meshtoon_vert:cp,meshtoon_frag:hp,points_vert:up,points_frag:dp,shadow_vert:fp,shadow_frag:pp,sprite_vert:mp,sprite_frag:gp},yt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},cn={basic:{uniforms:Oe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Oe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new $t(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Oe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Oe([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Oe([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new $t(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Oe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Oe([yt.points,yt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Oe([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Oe([yt.common,yt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Oe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Oe([yt.sprite,yt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Oe([yt.common,yt.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Oe([yt.lights,yt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};cn.physical={uniforms:Oe([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Ds={r:0,b:0,g:0},Hn=new pn,vp=new kt;function xp(r,t,e,n,i,s,o){const a=new $t(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function v(_){let x=!1;const w=g(_);w===null?m(a,l):w&&w.isColor&&(m(w,1),x=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(_,x){const w=g(x);w&&(w.isCubeTexture||w.mapping===js)?(h===void 0&&(h=new X(new pt(1,1,1),new Me({name:"BackgroundCubeMaterial",uniforms:Ai(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Hn.copy(x.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vp.makeRotationFromEuler(Hn)),h.material.toneMapped=se.getTransfer(w.colorSpace)!==le,(u!==w||d!==w.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new X(new an(2,2),new Me({name:"BackgroundMaterial",uniforms:Ai(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=se.getTransfer(w.colorSpace)!==le,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,x){_.getRGB(Ds,kl(r)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,x,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:v,addToRenderList:p,dispose:y}}function _p(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(E,D,I,N,V){let B=!1;const G=u(N,I,D);s!==G&&(s=G,c(s.object)),B=f(E,N,I,V),B&&g(E,N,I,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(E,D,I,N),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(E){return r.bindVertexArray(E)}function h(E){return r.deleteVertexArray(E)}function u(E,D,I){const N=I.wireframe===!0;let V=n[E.id];V===void 0&&(V={},n[E.id]=V);let B=V[D.id];B===void 0&&(B={},V[D.id]=B);let G=B[N];return G===void 0&&(G=d(l()),B[N]=G),G}function d(E){const D=[],I=[],N=[];for(let V=0;V<e;V++)D[V]=0,I[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:N,object:E,attributes:{},index:null}}function f(E,D,I,N){const V=s.attributes,B=D.attributes;let G=0;const K=I.getAttributes();for(const k in K)if(K[k].location>=0){const ht=V[k];let vt=B[k];if(vt===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(vt=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(vt=E.instanceColor)),ht===void 0||ht.attribute!==vt||vt&&ht.data!==vt.data)return!0;G++}return s.attributesNum!==G||s.index!==N}function g(E,D,I,N){const V={},B=D.attributes;let G=0;const K=I.getAttributes();for(const k in K)if(K[k].location>=0){let ht=B[k];ht===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(ht=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(ht=E.instanceColor));const vt={};vt.attribute=ht,ht&&ht.data&&(vt.data=ht.data),V[k]=vt,G++}s.attributes=V,s.attributesNum=G,s.index=N}function v(){const E=s.newAttributes;for(let D=0,I=E.length;D<I;D++)E[D]=0}function p(E){m(E,0)}function m(E,D){const I=s.newAttributes,N=s.enabledAttributes,V=s.attributeDivisors;I[E]=1,N[E]===0&&(r.enableVertexAttribArray(E),N[E]=1),V[E]!==D&&(r.vertexAttribDivisor(E,D),V[E]=D)}function y(){const E=s.newAttributes,D=s.enabledAttributes;for(let I=0,N=D.length;I<N;I++)D[I]!==E[I]&&(r.disableVertexAttribArray(I),D[I]=0)}function _(E,D,I,N,V,B,G){G===!0?r.vertexAttribIPointer(E,D,I,V,B):r.vertexAttribPointer(E,D,I,N,V,B)}function x(E,D,I,N){v();const V=N.attributes,B=I.getAttributes(),G=D.defaultAttributeValues;for(const K in B){const k=B[K];if(k.location>=0){let et=V[K];if(et===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(et=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(et=E.instanceColor)),et!==void 0){const ht=et.normalized,vt=et.itemSize,_t=t.get(et);if(_t===void 0)continue;const ot=_t.buffer,Vt=_t.type,Gt=_t.bytesPerElement,Z=Vt===r.INT||Vt===r.UNSIGNED_INT||et.gpuType===Po;if(et.isInterleavedBufferAttribute){const st=et.data,Tt=st.stride,Ut=et.offset;if(st.isInstancedInterleavedBuffer){for(let Ct=0;Ct<k.locationSize;Ct++)m(k.location+Ct,st.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ct=0;Ct<k.locationSize;Ct++)p(k.location+Ct);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let Ct=0;Ct<k.locationSize;Ct++)_(k.location+Ct,vt/k.locationSize,Vt,ht,Tt*Gt,(Ut+vt/k.locationSize*Ct)*Gt,Z)}else{if(et.isInstancedBufferAttribute){for(let st=0;st<k.locationSize;st++)m(k.location+st,et.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let st=0;st<k.locationSize;st++)p(k.location+st);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let st=0;st<k.locationSize;st++)_(k.location+st,vt/k.locationSize,Vt,ht,vt*Gt,vt/k.locationSize*st*Gt,Z)}}else if(G!==void 0){const ht=G[K];if(ht!==void 0)switch(ht.length){case 2:r.vertexAttrib2fv(k.location,ht);break;case 3:r.vertexAttrib3fv(k.location,ht);break;case 4:r.vertexAttrib4fv(k.location,ht);break;default:r.vertexAttrib1fv(k.location,ht)}}}}y()}function w(){A();for(const E in n){const D=n[E];for(const I in D){const N=D[I];for(const V in N)h(N[V].object),delete N[V];delete D[I]}delete n[E]}}function T(E){if(n[E.id]===void 0)return;const D=n[E.id];for(const I in D){const N=D[I];for(const V in N)h(N[V].object),delete N[V];delete D[I]}delete n[E.id]}function R(E){for(const D in n){const I=n[D];if(I[E.id]===void 0)continue;const N=I[E.id];for(const V in N)h(N[V].object),delete N[V];delete I[E.id]}}function A(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function yp(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sp(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==me&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const A=R===je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==tn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==hn&&!A)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:w,maxSamples:T}}function Mp(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Xn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,_=y*4;let x=m.clippingState||null;l.value=x,x=h(g,d,_,f);for(let w=0;w!==_;++w)x[w]=e[w];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,x=f;_!==v;++_,x+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function wp(r){let t=new WeakMap;function e(o,a){return a===qr?o.mapping=bi:a===Yr&&(o.mapping=Ti),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===qr||a===Yr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qh(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const _i=4,qa=[.125,.215,.35,.446,.526,.582],Kn=20,Dr=new Js,Ya=new $t;let Lr=null,Ir=0,Ur=0,Fr=!1;const qn=(1+Math.sqrt(5))/2,gi=1/qn,Ka=[new S(-qn,gi,0),new S(qn,gi,0),new S(-gi,0,qn),new S(gi,0,qn),new S(0,qn,-gi),new S(0,qn,gi),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],bp=new S;class Ao{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=bp}=s;Lr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lr,Ir,Ur),this._renderer.xr.enabled=Fr,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ue,minFilter:ue,generateMipmaps:!1,type:je,format:me,colorSpace:jn,depthBuffer:!1},i=ja(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ja(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tp(s)),this._blurMaterial=Ep(s,t,e)}return i}_compileMaterial(t){const e=new X(this._lodPlanes[0],t);this._renderer.compile(e,Dr)}_sceneToCubeUV(t,e,n,i,s){const l=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ya),u.toneMapping=bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const v=new on({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),p=new X(new pt,v);let m=!1;const y=t.background;y?y.isColor&&(v.color.copy(y),t.background=null,m=!0):(v.color.copy(Ya),m=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));const w=this._cubeSize;Ls(i,x*w,_>2?w:0,w,w),u.setRenderTarget(i),m&&u.render(p,l),u.render(t,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===bi||t.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$a()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Za());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new X(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ls(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Dr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ka[(i-s-1)%Ka.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new X(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Kn-1),v=s/g,p=isFinite(s)?1+Math.floor(h*v):Kn;p>Kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Kn}`);const m=[];let y=0;for(let R=0;R<Kn;++R){const A=R/v,M=Math.exp(-A*A/2);m.push(M),R===0?y+=M:R<p&&(y+=2*M)}for(let R=0;R<m.length;R++)m[R]=m[R]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const x=this._sizeLods[i],w=3*x*(i>_-_i?i-_+_i:0),T=4*(this._cubeSize-x);Ls(e,w,T,3*x,2*x),l.setRenderTarget(e),l.render(u,Dr)}}function Tp(r){const t=[],e=[],n=[];let i=r;const s=r-_i+1+qa.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-_i?l=qa[o-r+_i-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,p=2,m=1,y=new Float32Array(v*g*f),_=new Float32Array(p*g*f),x=new Float32Array(m*g*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,A=T>2?0:-1,M=[R,A,0,R+2/3,A,0,R+2/3,A+1,0,R,A,0,R+2/3,A+1,0,R,A+1,0];y.set(M,v*g*T),_.set(d,p*g*T);const E=[T,T,T,T,T,T];x.set(E,m*g*T)}const w=new ye;w.setAttribute("position",new Te(y,v)),w.setAttribute("uv",new Te(_,p)),w.setAttribute("faceIndex",new Te(x,m)),t.push(w),i>_i&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ja(r,t,e){const n=new be(r,t,e);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Ep(r,t,e){const n=new Float32Array(Kn),i=new S(0,1,0);return new Me({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Za(){return new Me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function $a(){return new Me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Jo(){return`

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
	`}function Ap(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===qr||l===Yr,h=l===bi||l===Ti;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ao(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Ao(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Cp(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rp(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,x=y.length;_<x;_+=3){const w=y[_+0],T=y[_+1],R=y[_+2];d.push(w,T,T,R,R,w)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const w=_+0,T=_+1,R=_+2;d.push(w,T,T,R,R,w)}}else return;const p=new(Il(d)?zl:Bl)(d,1);p.version=v;const m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Pp(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function u(d,f,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y]*v[y];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Dp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Lp(r,t,e){const n=new WeakMap,i=new oe;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let w=a.attributes.position.count*x,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*T*4*u),A=new Ul(R,w,T,u);A.type=hn,A.needsUpdate=!0;const M=x*4;for(let D=0;D<u;D++){const I=m[D],N=y[D],V=_[D],B=w*T*4*D;for(let G=0;G<I.count;G++){const K=G*M;g===!0&&(i.fromBufferAttribute(I,G),R[B+K+0]=i.x,R[B+K+1]=i.y,R[B+K+2]=i.z,R[B+K+3]=0),v===!0&&(i.fromBufferAttribute(N,G),R[B+K+4]=i.x,R[B+K+5]=i.y,R[B+K+6]=i.z,R[B+K+7]=0),p===!0&&(i.fromBufferAttribute(V,G),R[B+K+8]=i.x,R[B+K+9]=i.y,R[B+K+10]=i.z,R[B+K+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new j(w,T)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Ip(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const cc=new ze,Ja=new Go(1,1),hc=new Ul,uc=new Fl,dc=new Gl,Qa=[],tl=[],el=new Float32Array(16),nl=new Float32Array(9),il=new Float32Array(4);function Pi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Qa[i];if(s===void 0&&(s=new Float32Array(i),Qa[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ae(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ce(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Qs(r,t){let e=tl[t];e===void 0&&(e=new Int32Array(t),tl[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Up(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Fp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2fv(this.addr,t),Ce(e,t)}}function Np(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;r.uniform3fv(this.addr,t),Ce(e,t)}}function Op(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4fv(this.addr,t),Ce(e,t)}}function Bp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;il.set(n),r.uniformMatrix2fv(this.addr,!1,il),Ce(e,n)}}function zp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;nl.set(n),r.uniformMatrix3fv(this.addr,!1,nl),Ce(e,n)}}function kp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;el.set(n),r.uniformMatrix4fv(this.addr,!1,el),Ce(e,n)}}function Vp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Gp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2iv(this.addr,t),Ce(e,t)}}function Hp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;r.uniform3iv(this.addr,t),Ce(e,t)}}function Wp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4iv(this.addr,t),Ce(e,t)}}function Xp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function qp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2uiv(this.addr,t),Ce(e,t)}}function Yp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;r.uniform3uiv(this.addr,t),Ce(e,t)}}function Kp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4uiv(this.addr,t),Ce(e,t)}}function jp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ja.compareFunction=Ll,s=Ja):s=cc,e.setTexture2D(t||s,i)}function Zp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||uc,i)}function $p(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||dc,i)}function Jp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||hc,i)}function Qp(r){switch(r){case 5126:return Up;case 35664:return Fp;case 35665:return Np;case 35666:return Op;case 35674:return Bp;case 35675:return zp;case 35676:return kp;case 5124:case 35670:return Vp;case 35667:case 35671:return Gp;case 35668:case 35672:return Hp;case 35669:case 35673:return Wp;case 5125:return Xp;case 36294:return qp;case 36295:return Yp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Jp}}function tm(r,t){r.uniform1fv(this.addr,t)}function em(r,t){const e=Pi(t,this.size,2);r.uniform2fv(this.addr,e)}function nm(r,t){const e=Pi(t,this.size,3);r.uniform3fv(this.addr,e)}function im(r,t){const e=Pi(t,this.size,4);r.uniform4fv(this.addr,e)}function sm(r,t){const e=Pi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function rm(r,t){const e=Pi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function om(r,t){const e=Pi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function am(r,t){r.uniform1iv(this.addr,t)}function lm(r,t){r.uniform2iv(this.addr,t)}function cm(r,t){r.uniform3iv(this.addr,t)}function hm(r,t){r.uniform4iv(this.addr,t)}function um(r,t){r.uniform1uiv(this.addr,t)}function dm(r,t){r.uniform2uiv(this.addr,t)}function fm(r,t){r.uniform3uiv(this.addr,t)}function pm(r,t){r.uniform4uiv(this.addr,t)}function mm(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Ce(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||cc,s[o])}function gm(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Ce(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||uc,s[o])}function vm(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Ce(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||dc,s[o])}function xm(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Ce(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||hc,s[o])}function _m(r){switch(r){case 5126:return tm;case 35664:return em;case 35665:return nm;case 35666:return im;case 35674:return sm;case 35675:return rm;case 35676:return om;case 5124:case 35670:return am;case 35667:case 35671:return lm;case 35668:case 35672:return cm;case 35669:case 35673:return hm;case 5125:return um;case 36294:return dm;case 36295:return fm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return xm}}class ym{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qp(e.type)}}class Sm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_m(e.type)}}class Mm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Nr=/(\w+)(\])?(\[|\.)?/g;function sl(r,t){r.seq.push(t),r.map[t.id]=t}function wm(r,t,e){const n=r.name,i=n.length;for(Nr.lastIndex=0;;){const s=Nr.exec(n),o=Nr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){sl(e,c===void 0?new ym(a,r,t):new Sm(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Mm(a),sl(e,u)),e=u}}}class ks{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);wm(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function rl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const bm=37297;let Tm=0;function Em(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ol=new Yt;function Am(r){se._getMatrix(ol,se.workingColorSpace,r);const t=`mat3( ${ol.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(r)){case Vs:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function al(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Em(r.getShaderSource(t),a)}else return s}function Cm(r,t){const e=Am(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rm(r,t){let e;switch(t){case Wc:e="Linear";break;case Xc:e="Reinhard";break;case qc:e="Cineon";break;case Yc:e="ACESFilmic";break;case jc:e="AgX";break;case Zc:e="Neutral";break;case Kc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Is=new S;function Pm(){se.getLuminanceCoefficients(Is);const r=Is.x.toFixed(4),t=Is.y.toFixed(4),e=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function Lm(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Im(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Vi(r){return r!==""}function ll(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(r){return r.replace(Um,Nm)}const Fm=new Map;function Nm(r,t){let e=jt[t];if(e===void 0){const n=Fm.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Co(e)}const Om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hl(r){return r.replace(Om,Bm)}function Bm(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ul(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zm(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yl?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function km(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bi:case Ti:t="ENVMAP_TYPE_CUBE";break;case js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vm(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Ti&&(t="ENVMAP_MODE_REFRACTION"),t}function Gm(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sl:t="ENVMAP_BLENDING_MULTIPLY";break;case Gc:t="ENVMAP_BLENDING_MIX";break;case Hc:t="ENVMAP_BLENDING_ADD";break}return t}function Hm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wm(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=zm(e),c=km(e),h=Vm(e),u=Gm(e),d=Hm(e),f=Dm(e),g=Lm(s),v=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vi).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vi).join(`
`),m.length>0&&(m+=`
`)):(p=[ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),m=[ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?jt.tonemapping_pars_fragment:"",e.toneMapping!==bn?Rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Cm("linearToOutputTexel",e.outputColorSpace),Pm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vi).join(`
`)),o=Co(o),o=ll(o,e),o=cl(o,e),a=Co(a),a=ll(a,e),a=cl(a,e),o=hl(o),a=hl(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Gs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=y+p+o,x=y+m+a,w=rl(i,i.VERTEX_SHADER,_),T=rl(i,i.FRAGMENT_SHADER,x);i.attachShader(v,w),i.attachShader(v,T),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(D){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(v)||"",N=i.getShaderInfoLog(w)||"",V=i.getShaderInfoLog(T)||"",B=I.trim(),G=N.trim(),K=V.trim();let k=!0,et=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,w,T);else{const ht=al(i,w,"vertex"),vt=al(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+ht+`
`+vt)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||K==="")&&(et=!1);et&&(D.diagnostics={runnable:k,programLog:B,vertexShader:{log:G,prefix:p},fragmentShader:{log:K,prefix:m}})}i.deleteShader(w),i.deleteShader(T),A=new ks(i,v),M=Im(i,v)}let A;this.getUniforms=function(){return A===void 0&&R(this),A};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(v,bm)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let Xm=0;class qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ym(t),e.set(t,n)),n}}class Ym{constructor(t){this.id=Xm++,this.code=t,this.usedTimes=0}}function Km(r,t,e,n,i,s,o){const a=new Nl,l=new qm,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,E,D,I,N){const V=I.fog,B=N.geometry,G=M.isMeshStandardMaterial?I.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),k=K&&K.mapping===js?K.image.height:null,et=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ht=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,vt=ht!==void 0?ht.length:0;let _t=0;B.morphAttributes.position!==void 0&&(_t=1),B.morphAttributes.normal!==void 0&&(_t=2),B.morphAttributes.color!==void 0&&(_t=3);let ot,Vt,Gt,Z;if(et){const re=cn[et];ot=re.vertexShader,Vt=re.fragmentShader}else ot=M.vertexShader,Vt=M.fragmentShader,l.update(M),Gt=l.getVertexShaderID(M),Z=l.getFragmentShaderID(M);const st=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),Ut=N.isInstancedMesh===!0,Ct=N.isBatchedMesh===!0,Jt=!!M.map,de=!!M.matcap,L=!!K,it=!!M.aoMap,Q=!!M.lightMap,J=!!M.bumpMap,$=!!M.normalMap,mt=!!M.displacementMap,at=!!M.emissiveMap,gt=!!M.metalnessMap,Wt=!!M.roughnessMap,Ht=M.anisotropy>0,P=M.clearcoat>0,b=M.dispersion>0,z=M.iridescence>0,q=M.sheen>0,nt=M.transmission>0,Y=Ht&&!!M.anisotropyMap,Lt=P&&!!M.clearcoatMap,ft=P&&!!M.clearcoatNormalMap,Rt=P&&!!M.clearcoatRoughnessMap,Pt=z&&!!M.iridescenceMap,lt=z&&!!M.iridescenceThicknessMap,wt=q&&!!M.sheenColorMap,Bt=q&&!!M.sheenRoughnessMap,It=!!M.specularMap,St=!!M.specularColorMap,qt=!!M.specularIntensityMap,U=nt&&!!M.transmissionMap,dt=nt&&!!M.thicknessMap,xt=!!M.gradientMap,Et=!!M.alphaMap,ct=M.alphaTest>0,tt=!!M.alphaHash,Dt=!!M.extensions;let Xt=bn;M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Xt=r.toneMapping);const fe={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:ot,fragmentShader:Vt,defines:M.defines,customVertexShaderID:Gt,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&N._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,instancingMorph:Ut&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:jn,alphaToCoverage:!!M.alphaToCoverage,map:Jt,matcap:de,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:k,aoMap:it,lightMap:Q,bumpMap:J,normalMap:$,displacementMap:d&&mt,emissiveMap:at,normalMapObjectSpace:$&&M.normalMapType===Qc,normalMapTangentSpace:$&&M.normalMapType===Dl,metalnessMap:gt,roughnessMap:Wt,anisotropy:Ht,anisotropyMap:Y,clearcoat:P,clearcoatMap:Lt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Rt,dispersion:b,iridescence:z,iridescenceMap:Pt,iridescenceThicknessMap:lt,sheen:q,sheenColorMap:wt,sheenRoughnessMap:Bt,specularMap:It,specularColorMap:St,specularIntensityMap:qt,transmission:nt,transmissionMap:U,thicknessMap:dt,gradientMap:xt,opaque:M.transparent===!1&&M.blending===yi&&M.alphaToCoverage===!1,alphaMap:Et,alphaTest:ct,alphaHash:tt,combine:M.combine,mapUv:Jt&&v(M.map.channel),aoMapUv:it&&v(M.aoMap.channel),lightMapUv:Q&&v(M.lightMap.channel),bumpMapUv:J&&v(M.bumpMap.channel),normalMapUv:$&&v(M.normalMap.channel),displacementMapUv:mt&&v(M.displacementMap.channel),emissiveMapUv:at&&v(M.emissiveMap.channel),metalnessMapUv:gt&&v(M.metalnessMap.channel),roughnessMapUv:Wt&&v(M.roughnessMap.channel),anisotropyMapUv:Y&&v(M.anisotropyMap.channel),clearcoatMapUv:Lt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ft&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&v(M.sheenRoughnessMap.channel),specularMapUv:It&&v(M.specularMap.channel),specularColorMapUv:St&&v(M.specularColorMap.channel),specularIntensityMapUv:qt&&v(M.specularIntensityMap.channel),transmissionMapUv:U&&v(M.transmissionMap.channel),thicknessMapUv:dt&&v(M.thicknessMap.channel),alphaMapUv:Et&&v(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&($||Ht),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Jt||Et),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Tt,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:_t,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Jt&&M.map.isVideoTexture===!0&&se.getTransfer(M.map.colorSpace)===le,decodeVideoTextureEmissive:at&&M.emissiveMap.isVideoTexture===!0&&se.getTransfer(M.emissiveMap.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===He,flipSided:M.side===Ue,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Dt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&M.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function m(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)E.push(D),E.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(y(E,M),_(E,M),E.push(r.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const E=g[M.type];let D;if(E){const I=cn[E];D=Gh.clone(I.uniforms)}else D=M.uniforms;return D}function w(M,E){let D;for(let I=0,N=h.length;I<N;I++){const V=h[I];if(V.cacheKey===E){D=V,++D.usedTimes;break}}return D===void 0&&(D=new Wm(r,E,M,s),h.push(D)),D}function T(M){if(--M.usedTimes===0){const E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:w,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:A}}function jm(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Zm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function dl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function fl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,v,p){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),t++,m}function a(u,d,f,g,v,p){const m=o(u,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,d,f,g,v,p){const m=o(u,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Zm),n.length>1&&n.sort(d||dl),i.length>1&&i.sort(d||dl)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function $m(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new fl,r.set(n,[o])):i>=s.length?(o=new fl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Jm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new $t};break;case"SpotLight":e={position:new S,direction:new S,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new S,halfWidth:new S,halfHeight:new S};break}return r[t.id]=e,e}}}function Qm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let t0=0;function e0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function n0(r){const t=new Jm,e=Qm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new S);const i=new S,s=new kt,o=new kt;function a(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,y=0,_=0,x=0,w=0,T=0,R=0;c.sort(e0);for(let M=0,E=c.length;M<E;M++){const D=c[M],I=D.color,N=D.intensity,V=D.distance,B=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=I.r*N,u+=I.g*N,d+=I.b*N;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],N);R++}else if(D.isDirectionalLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,k=e.get(D);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=D.shadow.matrix,y++}n.directional[f]=G,f++}else if(D.isSpotLight){const G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(I).multiplyScalar(N),G.distance=V,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[v]=G;const K=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,K.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[v]=K.matrix,D.castShadow){const k=e.get(D);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=B,x++}v++}else if(D.isRectAreaLight){const G=t.get(D);G.color.copy(I).multiplyScalar(N),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=G,p++}else if(D.isPointLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const K=D.shadow,k=e.get(D);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=D.shadow.matrix,_++}n.point[g]=G,g++}else if(D.isHemisphereLight){const G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(N),G.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[m]=G,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==y||A.numPointShadows!==_||A.numSpotShadows!==x||A.numSpotMaps!==w||A.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,A.directionalLength=f,A.pointLength=g,A.spotLength=v,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=y,A.numPointShadows=_,A.numSpotShadows=x,A.numSpotMaps=w,A.numLightProbes=R,n.version=t0++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const _=c[m];if(_.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),u++}else if(_.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),f++}else if(_.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function pl(r){const t=new n0(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function i0(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new pl(r),t.set(i,[a])):s>=o.length?(a=new pl(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const s0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r0=`uniform sampler2D shadow_pass;
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
}`;function o0(r,t,e){let n=new ko;const i=new j,s=new j,o=new oe,a=new sc({depthPacking:Pl}),l=new Pu,c={},h=e.maxTextureSize,u={[Fn]:Ue,[Ue]:Fn,[He]:He},d=new Me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:s0,fragmentShader:r0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new X(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let m=this.type;this.render=function(T,R,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const M=r.getRenderTarget(),E=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Un),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=m!==Mn&&this.type===Mn,V=m===Mn&&this.type!==Mn;for(let B=0,G=T.length;B<G;B++){const K=T[B],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const et=k.getFrameExtents();if(i.multiply(et),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/et.x),i.x=s.x*et.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/et.y),i.y=s.y*et.y,k.mapSize.y=s.y)),k.map===null||N===!0||V===!0){const vt=this.type!==Mn?{minFilter:Pe,magFilter:Pe}:{};k.map!==null&&k.map.dispose(),k.map=new be(i.x,i.y,vt),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const ht=k.getViewportCount();for(let vt=0;vt<ht;vt++){const _t=k.getViewport(vt);o.set(s.x*_t.x,s.y*_t.y,s.x*_t.z,s.y*_t.w),I.viewport(o),k.updateMatrices(K,vt),n=k.getFrustum(),x(R,A,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===Mn&&y(k,A),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(M,E,D)};function y(T,R){const A=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new be(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(R,null,A,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(R,null,A,f,v,null)}function _(T,R,A,M){let E=null;const D=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)E=D;else if(E=A.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=E.uuid,N=R.uuid;let V=c[I];V===void 0&&(V={},c[I]=V);let B=V[N];B===void 0&&(B=E.clone(),V[N]=B,R.addEventListener("dispose",w)),E=B}if(E.visible=R.visible,E.wireframe=R.wireframe,M===Mn?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=r.properties.get(E);I.light=A}return E}function x(T,R,A,M,E){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Mn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const N=t.update(T),V=T.material;if(Array.isArray(V)){const B=N.groups;for(let G=0,K=B.length;G<K;G++){const k=B[G],et=V[k.materialIndex];if(et&&et.visible){const ht=_(T,et,M,E);T.onBeforeShadow(r,T,R,A,N,ht,k),r.renderBufferDirect(A,null,N,ht,T,k),T.onAfterShadow(r,T,R,A,N,ht,k)}}}else if(V.visible){const B=_(T,V,M,E);T.onBeforeShadow(r,T,R,A,N,B,null),r.renderBufferDirect(A,null,N,B,T,null),T.onAfterShadow(r,T,R,A,N,B,null)}}const I=T.children;for(let N=0,V=I.length;N<V;N++)x(I[N],R,A,M,E)}function w(T){T.target.removeEventListener("dispose",w);for(const A in c){const M=c[A],E=T.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const a0={[zr]:kr,[Vr]:Wr,[Gr]:Xr,[wi]:Hr,[kr]:zr,[Wr]:Vr,[Xr]:Gr,[Hr]:wi};function l0(r,t){function e(){let U=!1;const dt=new oe;let xt=null;const Et=new oe(0,0,0,0);return{setMask:function(ct){xt!==ct&&!U&&(r.colorMask(ct,ct,ct,ct),xt=ct)},setLocked:function(ct){U=ct},setClear:function(ct,tt,Dt,Xt,fe){fe===!0&&(ct*=Xt,tt*=Xt,Dt*=Xt),dt.set(ct,tt,Dt,Xt),Et.equals(dt)===!1&&(r.clearColor(ct,tt,Dt,Xt),Et.copy(dt))},reset:function(){U=!1,xt=null,Et.set(-1,0,0,0)}}}function n(){let U=!1,dt=!1,xt=null,Et=null,ct=null;return{setReversed:function(tt){if(dt!==tt){const Dt=t.get("EXT_clip_control");tt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),dt=tt;const Xt=ct;ct=null,this.setClear(Xt)}},getReversed:function(){return dt},setTest:function(tt){tt?st(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(tt){xt!==tt&&!U&&(r.depthMask(tt),xt=tt)},setFunc:function(tt){if(dt&&(tt=a0[tt]),Et!==tt){switch(tt){case zr:r.depthFunc(r.NEVER);break;case kr:r.depthFunc(r.ALWAYS);break;case Vr:r.depthFunc(r.LESS);break;case wi:r.depthFunc(r.LEQUAL);break;case Gr:r.depthFunc(r.EQUAL);break;case Hr:r.depthFunc(r.GEQUAL);break;case Wr:r.depthFunc(r.GREATER);break;case Xr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Et=tt}},setLocked:function(tt){U=tt},setClear:function(tt){ct!==tt&&(dt&&(tt=1-tt),r.clearDepth(tt),ct=tt)},reset:function(){U=!1,xt=null,Et=null,ct=null,dt=!1}}}function i(){let U=!1,dt=null,xt=null,Et=null,ct=null,tt=null,Dt=null,Xt=null,fe=null;return{setTest:function(re){U||(re?st(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(re){dt!==re&&!U&&(r.stencilMask(re),dt=re)},setFunc:function(re,gn,ln){(xt!==re||Et!==gn||ct!==ln)&&(r.stencilFunc(re,gn,ln),xt=re,Et=gn,ct=ln)},setOp:function(re,gn,ln){(tt!==re||Dt!==gn||Xt!==ln)&&(r.stencilOp(re,gn,ln),tt=re,Dt=gn,Xt=ln)},setLocked:function(re){U=re},setClear:function(re){fe!==re&&(r.clearStencil(re),fe=re)},reset:function(){U=!1,dt=null,xt=null,Et=null,ct=null,tt=null,Dt=null,Xt=null,fe=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,p=null,m=null,y=null,_=null,x=null,w=null,T=null,R=new $t(0,0,0),A=0,M=!1,E=null,D=null,I=null,N=null,V=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=K>=2);let et=null,ht={};const vt=r.getParameter(r.SCISSOR_BOX),_t=r.getParameter(r.VIEWPORT),ot=new oe().fromArray(vt),Vt=new oe().fromArray(_t);function Gt(U,dt,xt,Et){const ct=new Uint8Array(4),tt=r.createTexture();r.bindTexture(U,tt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Dt=0;Dt<xt;Dt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(dt,0,r.RGBA,1,1,Et,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(dt+Dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return tt}const Z={};Z[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(r.DEPTH_TEST),o.setFunc(wi),J(!1),$(ra),st(r.CULL_FACE),it(Un);function st(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function Tt(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Ut(U,dt){return u[U]!==dt?(r.bindFramebuffer(U,dt),u[U]=dt,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=dt),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=dt),!0):!1}function Ct(U,dt){let xt=f,Et=!1;if(U){xt=d.get(dt),xt===void 0&&(xt=[],d.set(dt,xt));const ct=U.textures;if(xt.length!==ct.length||xt[0]!==r.COLOR_ATTACHMENT0){for(let tt=0,Dt=ct.length;tt<Dt;tt++)xt[tt]=r.COLOR_ATTACHMENT0+tt;xt.length=ct.length,Et=!0}}else xt[0]!==r.BACK&&(xt[0]=r.BACK,Et=!0);Et&&r.drawBuffers(xt)}function Jt(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const de={[Yn]:r.FUNC_ADD,[Tc]:r.FUNC_SUBTRACT,[Ec]:r.FUNC_REVERSE_SUBTRACT};de[Ac]=r.MIN,de[Cc]=r.MAX;const L={[Rc]:r.ZERO,[Pc]:r.ONE,[Dc]:r.SRC_COLOR,[Or]:r.SRC_ALPHA,[Oc]:r.SRC_ALPHA_SATURATE,[Fc]:r.DST_COLOR,[Ic]:r.DST_ALPHA,[Lc]:r.ONE_MINUS_SRC_COLOR,[Br]:r.ONE_MINUS_SRC_ALPHA,[Nc]:r.ONE_MINUS_DST_COLOR,[Uc]:r.ONE_MINUS_DST_ALPHA,[Bc]:r.CONSTANT_COLOR,[zc]:r.ONE_MINUS_CONSTANT_COLOR,[kc]:r.CONSTANT_ALPHA,[Vc]:r.ONE_MINUS_CONSTANT_ALPHA};function it(U,dt,xt,Et,ct,tt,Dt,Xt,fe,re){if(U===Un){v===!0&&(Tt(r.BLEND),v=!1);return}if(v===!1&&(st(r.BLEND),v=!0),U!==bc){if(U!==p||re!==M){if((m!==Yn||x!==Yn)&&(r.blendEquation(r.FUNC_ADD),m=Yn,x=Yn),re)switch(U){case yi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mi:r.blendFunc(r.ONE,r.ONE);break;case oa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case aa:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case yi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case oa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case aa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,_=null,w=null,T=null,R.set(0,0,0),A=0,p=U,M=re}return}ct=ct||dt,tt=tt||xt,Dt=Dt||Et,(dt!==m||ct!==x)&&(r.blendEquationSeparate(de[dt],de[ct]),m=dt,x=ct),(xt!==y||Et!==_||tt!==w||Dt!==T)&&(r.blendFuncSeparate(L[xt],L[Et],L[tt],L[Dt]),y=xt,_=Et,w=tt,T=Dt),(Xt.equals(R)===!1||fe!==A)&&(r.blendColor(Xt.r,Xt.g,Xt.b,fe),R.copy(Xt),A=fe),p=U,M=!1}function Q(U,dt){U.side===He?Tt(r.CULL_FACE):st(r.CULL_FACE);let xt=U.side===Ue;dt&&(xt=!xt),J(xt),U.blending===yi&&U.transparent===!1?it(Un):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Et=U.stencilWrite;a.setTest(Et),Et&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),at(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function J(U){E!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),E=U)}function $(U){U!==Sc?(st(r.CULL_FACE),U!==D&&(U===ra?r.cullFace(r.BACK):U===Mc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),D=U}function mt(U){U!==I&&(G&&r.lineWidth(U),I=U)}function at(U,dt,xt){U?(st(r.POLYGON_OFFSET_FILL),(N!==dt||V!==xt)&&(r.polygonOffset(dt,xt),N=dt,V=xt)):Tt(r.POLYGON_OFFSET_FILL)}function gt(U){U?st(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function Wt(U){U===void 0&&(U=r.TEXTURE0+B-1),et!==U&&(r.activeTexture(U),et=U)}function Ht(U,dt,xt){xt===void 0&&(et===null?xt=r.TEXTURE0+B-1:xt=et);let Et=ht[xt];Et===void 0&&(Et={type:void 0,texture:void 0},ht[xt]=Et),(Et.type!==U||Et.texture!==dt)&&(et!==xt&&(r.activeTexture(xt),et=xt),r.bindTexture(U,dt||Z[U]),Et.type=U,Et.texture=dt)}function P(){const U=ht[et];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(U){ot.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ot.copy(U))}function Bt(U){Vt.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Vt.copy(U))}function It(U,dt){let xt=c.get(dt);xt===void 0&&(xt=new WeakMap,c.set(dt,xt));let Et=xt.get(U);Et===void 0&&(Et=r.getUniformBlockIndex(dt,U.name),xt.set(U,Et))}function St(U,dt){const Et=c.get(dt).get(U);l.get(dt)!==Et&&(r.uniformBlockBinding(dt,Et,U.__bindingPointIndex),l.set(dt,Et))}function qt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},et=null,ht={},u={},d=new WeakMap,f=[],g=null,v=!1,p=null,m=null,y=null,_=null,x=null,w=null,T=null,R=new $t(0,0,0),A=0,M=!1,E=null,D=null,I=null,N=null,V=null,ot.set(0,0,r.canvas.width,r.canvas.height),Vt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:Tt,bindFramebuffer:Ut,drawBuffers:Ct,useProgram:Jt,setBlending:it,setMaterial:Q,setFlipSided:J,setCullFace:$,setLineWidth:mt,setPolygonOffset:at,setScissorTest:gt,activeTexture:Wt,bindTexture:Ht,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:Pt,texImage3D:lt,updateUBOMapping:It,uniformBlockBinding:St,texStorage2D:ft,texStorage3D:Rt,texSubImage2D:q,texSubImage3D:nt,compressedTexSubImage2D:Y,compressedTexSubImage3D:Lt,scissor:wt,viewport:Bt,reset:qt}}function c0(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return f?new OffscreenCanvas(P,b):Ws("canvas")}function v(P,b,z){let q=1;const nt=Ht(P);if((nt.width>z||nt.height>z)&&(q=z/Math.max(nt.width,nt.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor(q*nt.width),Lt=Math.floor(q*nt.height);u===void 0&&(u=g(Y,Lt));const ft=b?g(Y,Lt):u;return ft.width=Y,ft.height=Lt,ft.getContext("2d").drawImage(P,0,0,Y,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Y+"x"+Lt+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),P;return P}function p(P){return P.generateMipmaps}function m(P){r.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(P,b,z,q,nt=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=b;if(b===r.RED&&(z===r.FLOAT&&(Y=r.R32F),z===r.HALF_FLOAT&&(Y=r.R16F),z===r.UNSIGNED_BYTE&&(Y=r.R8)),b===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.R8UI),z===r.UNSIGNED_SHORT&&(Y=r.R16UI),z===r.UNSIGNED_INT&&(Y=r.R32UI),z===r.BYTE&&(Y=r.R8I),z===r.SHORT&&(Y=r.R16I),z===r.INT&&(Y=r.R32I)),b===r.RG&&(z===r.FLOAT&&(Y=r.RG32F),z===r.HALF_FLOAT&&(Y=r.RG16F),z===r.UNSIGNED_BYTE&&(Y=r.RG8)),b===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.RG8UI),z===r.UNSIGNED_SHORT&&(Y=r.RG16UI),z===r.UNSIGNED_INT&&(Y=r.RG32UI),z===r.BYTE&&(Y=r.RG8I),z===r.SHORT&&(Y=r.RG16I),z===r.INT&&(Y=r.RG32I)),b===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),z===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),z===r.UNSIGNED_INT&&(Y=r.RGB32UI),z===r.BYTE&&(Y=r.RGB8I),z===r.SHORT&&(Y=r.RGB16I),z===r.INT&&(Y=r.RGB32I)),b===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),z===r.UNSIGNED_INT&&(Y=r.RGBA32UI),z===r.BYTE&&(Y=r.RGBA8I),z===r.SHORT&&(Y=r.RGBA16I),z===r.INT&&(Y=r.RGBA32I)),b===r.RGB&&(z===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),b===r.RGBA){const Lt=nt?Vs:se.getTransfer(q);z===r.FLOAT&&(Y=r.RGBA32F),z===r.HALF_FLOAT&&(Y=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Y=Lt===le?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(P,b){let z;return P?b===null||b===Nn||b===ji?z=r.DEPTH24_STENCIL8:b===hn?z=r.DEPTH32F_STENCIL8:b===Ki&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Nn||b===ji?z=r.DEPTH_COMPONENT24:b===hn?z=r.DEPTH_COMPONENT32F:b===Ki&&(z=r.DEPTH_COMPONENT16),z}function w(P,b){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Pe&&P.minFilter!==ue?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function T(P){const b=P.target;b.removeEventListener("dispose",T),A(b),b.isVideoTexture&&h.delete(b)}function R(P){const b=P.target;b.removeEventListener("dispose",R),E(b)}function A(P){const b=n.get(P);if(b.__webglInit===void 0)return;const z=P.source,q=d.get(z);if(q){const nt=q[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&M(P),Object.keys(q).length===0&&d.delete(z)}n.remove(P)}function M(P){const b=n.get(P);r.deleteTexture(b.__webglTexture);const z=P.source,q=d.get(z);delete q[b.__cacheKey],o.memory.textures--}function E(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let nt=0;nt<b.__webglFramebuffer[q].length;nt++)r.deleteFramebuffer(b.__webglFramebuffer[q][nt]);else r.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)r.deleteFramebuffer(b.__webglFramebuffer[q]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=P.textures;for(let q=0,nt=z.length;q<nt;q++){const Y=n.get(z[q]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[q])}n.remove(P)}let D=0;function I(){D=0}function N(){const P=D;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),D+=1,P}function V(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function B(P,b){const z=n.get(P);if(P.isVideoTexture&&gt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){const q=P.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,P,b);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+b)}function G(P,b){const z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){Z(z,P,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+b)}function K(P,b){const z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){Z(z,P,b);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+b)}function k(P,b){const z=n.get(P);if(P.version>0&&z.__version!==P.version){st(z,P,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+b)}const et={[Yi]:r.REPEAT,[Qe]:r.CLAMP_TO_EDGE,[Kr]:r.MIRRORED_REPEAT},ht={[Pe]:r.NEAREST,[$c]:r.NEAREST_MIPMAP_NEAREST,[rs]:r.NEAREST_MIPMAP_LINEAR,[ue]:r.LINEAR,[nr]:r.LINEAR_MIPMAP_NEAREST,[In]:r.LINEAR_MIPMAP_LINEAR},vt={[th]:r.NEVER,[oh]:r.ALWAYS,[eh]:r.LESS,[Ll]:r.LEQUAL,[nh]:r.EQUAL,[rh]:r.GEQUAL,[ih]:r.GREATER,[sh]:r.NOTEQUAL};function _t(P,b){if(b.type===hn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ue||b.magFilter===nr||b.magFilter===rs||b.magFilter===In||b.minFilter===ue||b.minFilter===nr||b.minFilter===rs||b.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,et[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,et[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,et[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ht[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ht[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,vt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pe||b.minFilter!==rs&&b.minFilter!==In||b.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ot(P,b){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",T));const q=b.source;let nt=d.get(q);nt===void 0&&(nt={},d.set(q,nt));const Y=V(b);if(Y!==P.__cacheKey){nt[Y]===void 0&&(nt[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),nt[Y].usedTimes++;const Lt=nt[P.__cacheKey];Lt!==void 0&&(nt[P.__cacheKey].usedTimes--,Lt.usedTimes===0&&M(b)),P.__cacheKey=Y,P.__webglTexture=nt[Y].texture}return z}function Vt(P,b,z){return Math.floor(Math.floor(P/z)/b)}function Gt(P,b,z,q){const Y=P.updateRanges;if(Y.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,z,q,b.data);else{Y.sort((lt,wt)=>lt.start-wt.start);let Lt=0;for(let lt=1;lt<Y.length;lt++){const wt=Y[Lt],Bt=Y[lt],It=wt.start+wt.count,St=Vt(Bt.start,b.width,4),qt=Vt(wt.start,b.width,4);Bt.start<=It+1&&St===qt&&Vt(Bt.start+Bt.count-1,b.width,4)===St?wt.count=Math.max(wt.count,Bt.start+Bt.count-wt.start):(++Lt,Y[Lt]=Bt)}Y.length=Lt+1;const ft=r.getParameter(r.UNPACK_ROW_LENGTH),Rt=r.getParameter(r.UNPACK_SKIP_PIXELS),Pt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let lt=0,wt=Y.length;lt<wt;lt++){const Bt=Y[lt],It=Math.floor(Bt.start/4),St=Math.ceil(Bt.count/4),qt=It%b.width,U=Math.floor(It/b.width),dt=St,xt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),e.texSubImage2D(r.TEXTURE_2D,0,qt,U,dt,xt,z,q,b.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ft),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Rt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Pt)}}function Z(P,b,z){let q=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=r.TEXTURE_3D);const nt=ot(P,b),Y=b.source;e.bindTexture(q,P.__webglTexture,r.TEXTURE0+z);const Lt=n.get(Y);if(Y.version!==Lt.__version||nt===!0){e.activeTexture(r.TEXTURE0+z);const ft=se.getPrimaries(se.workingColorSpace),Rt=b.colorSpace===wn?null:se.getPrimaries(b.colorSpace),Pt=b.colorSpace===wn||ft===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let lt=v(b.image,!1,i.maxTextureSize);lt=Wt(b,lt);const wt=s.convert(b.format,b.colorSpace),Bt=s.convert(b.type);let It=_(b.internalFormat,wt,Bt,b.colorSpace,b.isVideoTexture);_t(q,b);let St;const qt=b.mipmaps,U=b.isVideoTexture!==!0,dt=Lt.__version===void 0||nt===!0,xt=Y.dataReady,Et=w(b,lt);if(b.isDepthTexture)It=x(b.format===Zi,b.type),dt&&(U?e.texStorage2D(r.TEXTURE_2D,1,It,lt.width,lt.height):e.texImage2D(r.TEXTURE_2D,0,It,lt.width,lt.height,0,wt,Bt,null));else if(b.isDataTexture)if(qt.length>0){U&&dt&&e.texStorage2D(r.TEXTURE_2D,Et,It,qt[0].width,qt[0].height);for(let ct=0,tt=qt.length;ct<tt;ct++)St=qt[ct],U?xt&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,St.width,St.height,wt,Bt,St.data):e.texImage2D(r.TEXTURE_2D,ct,It,St.width,St.height,0,wt,Bt,St.data);b.generateMipmaps=!1}else U?(dt&&e.texStorage2D(r.TEXTURE_2D,Et,It,lt.width,lt.height),xt&&Gt(b,lt,wt,Bt)):e.texImage2D(r.TEXTURE_2D,0,It,lt.width,lt.height,0,wt,Bt,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){U&&dt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,It,qt[0].width,qt[0].height,lt.depth);for(let ct=0,tt=qt.length;ct<tt;ct++)if(St=qt[ct],b.format!==me)if(wt!==null)if(U){if(xt)if(b.layerUpdates.size>0){const Dt=Xa(St.width,St.height,b.format,b.type);for(const Xt of b.layerUpdates){const fe=St.data.subarray(Xt*Dt/St.data.BYTES_PER_ELEMENT,(Xt+1)*Dt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,Xt,St.width,St.height,1,wt,fe)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,St.width,St.height,lt.depth,wt,St.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,It,St.width,St.height,lt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?xt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,St.width,St.height,lt.depth,wt,Bt,St.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ct,It,St.width,St.height,lt.depth,0,wt,Bt,St.data)}else{U&&dt&&e.texStorage2D(r.TEXTURE_2D,Et,It,qt[0].width,qt[0].height);for(let ct=0,tt=qt.length;ct<tt;ct++)St=qt[ct],b.format!==me?wt!==null?U?xt&&e.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,St.width,St.height,wt,St.data):e.compressedTexImage2D(r.TEXTURE_2D,ct,It,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?xt&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,St.width,St.height,wt,Bt,St.data):e.texImage2D(r.TEXTURE_2D,ct,It,St.width,St.height,0,wt,Bt,St.data)}else if(b.isDataArrayTexture)if(U){if(dt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,It,lt.width,lt.height,lt.depth),xt)if(b.layerUpdates.size>0){const ct=Xa(lt.width,lt.height,b.format,b.type);for(const tt of b.layerUpdates){const Dt=lt.data.subarray(tt*ct/lt.data.BYTES_PER_ELEMENT,(tt+1)*ct/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,lt.width,lt.height,1,wt,Bt,Dt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,wt,Bt,lt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,It,lt.width,lt.height,lt.depth,0,wt,Bt,lt.data);else if(b.isData3DTexture)U?(dt&&e.texStorage3D(r.TEXTURE_3D,Et,It,lt.width,lt.height,lt.depth),xt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,wt,Bt,lt.data)):e.texImage3D(r.TEXTURE_3D,0,It,lt.width,lt.height,lt.depth,0,wt,Bt,lt.data);else if(b.isFramebufferTexture){if(dt)if(U)e.texStorage2D(r.TEXTURE_2D,Et,It,lt.width,lt.height);else{let ct=lt.width,tt=lt.height;for(let Dt=0;Dt<Et;Dt++)e.texImage2D(r.TEXTURE_2D,Dt,It,ct,tt,0,wt,Bt,null),ct>>=1,tt>>=1}}else if(qt.length>0){if(U&&dt){const ct=Ht(qt[0]);e.texStorage2D(r.TEXTURE_2D,Et,It,ct.width,ct.height)}for(let ct=0,tt=qt.length;ct<tt;ct++)St=qt[ct],U?xt&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,wt,Bt,St):e.texImage2D(r.TEXTURE_2D,ct,It,wt,Bt,St);b.generateMipmaps=!1}else if(U){if(dt){const ct=Ht(lt);e.texStorage2D(r.TEXTURE_2D,Et,It,ct.width,ct.height)}xt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,Bt,lt)}else e.texImage2D(r.TEXTURE_2D,0,It,wt,Bt,lt);p(b)&&m(q),Lt.__version=Y.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function st(P,b,z){if(b.image.length!==6)return;const q=ot(P,b),nt=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+z);const Y=n.get(nt);if(nt.version!==Y.__version||q===!0){e.activeTexture(r.TEXTURE0+z);const Lt=se.getPrimaries(se.workingColorSpace),ft=b.colorSpace===wn?null:se.getPrimaries(b.colorSpace),Rt=b.colorSpace===wn||Lt===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Pt=b.isCompressedTexture||b.image[0].isCompressedTexture,lt=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let tt=0;tt<6;tt++)!Pt&&!lt?wt[tt]=v(b.image[tt],!0,i.maxCubemapSize):wt[tt]=lt?b.image[tt].image:b.image[tt],wt[tt]=Wt(b,wt[tt]);const Bt=wt[0],It=s.convert(b.format,b.colorSpace),St=s.convert(b.type),qt=_(b.internalFormat,It,St,b.colorSpace),U=b.isVideoTexture!==!0,dt=Y.__version===void 0||q===!0,xt=nt.dataReady;let Et=w(b,Bt);_t(r.TEXTURE_CUBE_MAP,b);let ct;if(Pt){U&&dt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Et,qt,Bt.width,Bt.height);for(let tt=0;tt<6;tt++){ct=wt[tt].mipmaps;for(let Dt=0;Dt<ct.length;Dt++){const Xt=ct[Dt];b.format!==me?It!==null?U?xt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt,0,0,Xt.width,Xt.height,It,Xt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt,qt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?xt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt,0,0,Xt.width,Xt.height,It,St,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt,qt,Xt.width,Xt.height,0,It,St,Xt.data)}}}else{if(ct=b.mipmaps,U&&dt){ct.length>0&&Et++;const tt=Ht(wt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Et,qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(lt){U?xt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,wt[tt].width,wt[tt].height,It,St,wt[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,wt[tt].width,wt[tt].height,0,It,St,wt[tt].data);for(let Dt=0;Dt<ct.length;Dt++){const fe=ct[Dt].image[tt].image;U?xt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt+1,0,0,fe.width,fe.height,It,St,fe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt+1,qt,fe.width,fe.height,0,It,St,fe.data)}}else{U?xt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,It,St,wt[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,It,St,wt[tt]);for(let Dt=0;Dt<ct.length;Dt++){const Xt=ct[Dt];U?xt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt+1,0,0,It,St,Xt.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt+1,qt,It,St,Xt.image[tt])}}}p(b)&&m(r.TEXTURE_CUBE_MAP),Y.__version=nt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Tt(P,b,z,q,nt,Y){const Lt=s.convert(z.format,z.colorSpace),ft=s.convert(z.type),Rt=_(z.internalFormat,Lt,ft,z.colorSpace),Pt=n.get(b),lt=n.get(z);if(lt.__renderTarget=b,!Pt.__hasExternalTextures){const wt=Math.max(1,b.width>>Y),Bt=Math.max(1,b.height>>Y);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,Y,Rt,wt,Bt,b.depth,0,Lt,ft,null):e.texImage2D(nt,Y,Rt,wt,Bt,0,Lt,ft,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),at(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,nt,lt.__webglTexture,0,mt(b)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,nt,lt.__webglTexture,Y),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(P,b,z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const q=b.depthTexture,nt=q&&q.isDepthTexture?q.type:null,Y=x(b.stencilBuffer,nt),Lt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=mt(b);at(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,Y,b.width,b.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,Y,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Y,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Lt,r.RENDERBUFFER,P)}else{const q=b.textures;for(let nt=0;nt<q.length;nt++){const Y=q[nt],Lt=s.convert(Y.format,Y.colorSpace),ft=s.convert(Y.type),Rt=_(Y.internalFormat,Lt,ft,Y.colorSpace),Pt=mt(b);z&&at(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,Rt,b.width,b.height):at(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pt,Rt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Rt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(b.depthTexture);q.__renderTarget=b,(!q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);const nt=q.__webglTexture,Y=mt(b);if(b.depthTexture.format===Ei)at(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(b.depthTexture.format===Zi)at(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Jt(P){const b=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const q=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){const nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",nt)};q.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=q}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const q=P.texture.mipmaps;q&&q.length>0?Ct(b.__webglFramebuffer[0],P):Ct(b.__webglFramebuffer,P)}else if(z){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=r.createRenderbuffer(),Ut(b.__webglDepthbuffer[q],P,!1);else{const nt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,Y)}}else{const q=P.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ut(b.__webglDepthbuffer,P,!1);else{const nt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,Y)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function de(P,b,z){const q=n.get(P);b!==void 0&&Tt(q.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Jt(P)}function L(P){const b=P.texture,z=n.get(P),q=n.get(b);P.addEventListener("dispose",R);const nt=P.textures,Y=P.isWebGLCubeRenderTarget===!0,Lt=nt.length>1;if(Lt||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=b.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ft]=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)z.__webglFramebuffer[ft][Rt]=r.createFramebuffer()}else z.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)z.__webglFramebuffer[ft]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Lt)for(let ft=0,Rt=nt.length;ft<Rt;ft++){const Pt=n.get(nt[ft]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&at(P)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<nt.length;ft++){const Rt=nt[ft];z.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);const Pt=s.convert(Rt.format,Rt.colorSpace),lt=s.convert(Rt.type),wt=_(Rt.internalFormat,Pt,lt,Rt.colorSpace,P.isXRRenderTarget===!0),Bt=mt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,wt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut(z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),_t(r.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let Rt=0;Rt<b.mipmaps.length;Rt++)Tt(z.__webglFramebuffer[ft][Rt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Rt);else Tt(z.__webglFramebuffer[ft],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);p(b)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let ft=0,Rt=nt.length;ft<Rt;ft++){const Pt=nt[ft],lt=n.get(Pt);let wt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(wt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(wt,lt.__webglTexture),_t(wt,Pt),Tt(z.__webglFramebuffer,P,Pt,r.COLOR_ATTACHMENT0+ft,wt,0),p(Pt)&&m(wt)}e.unbindTexture()}else{let ft=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ft,q.__webglTexture),_t(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let Rt=0;Rt<b.mipmaps.length;Rt++)Tt(z.__webglFramebuffer[Rt],P,b,r.COLOR_ATTACHMENT0,ft,Rt);else Tt(z.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,ft,0);p(b)&&m(ft),e.unbindTexture()}P.depthBuffer&&Jt(P)}function it(P){const b=P.textures;for(let z=0,q=b.length;z<q;z++){const nt=b[z];if(p(nt)){const Y=y(P),Lt=n.get(nt).__webglTexture;e.bindTexture(Y,Lt),m(Y),e.unbindTexture()}}}const Q=[],J=[];function $(P){if(P.samples>0){if(at(P)===!1){const b=P.textures,z=P.width,q=P.height;let nt=r.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Lt=n.get(P),ft=b.length>1;if(ft)for(let Pt=0;Pt<b.length;Pt++)e.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const Rt=P.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Pt=0;Pt<b.length;Pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Lt.__webglColorRenderbuffer[Pt]);const lt=n.get(b[Pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,lt,0)}r.blitFramebuffer(0,0,z,q,0,0,z,q,nt,r.NEAREST),l===!0&&(Q.length=0,J.length=0,Q.push(r.COLOR_ATTACHMENT0+Pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Q.push(Y),J.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,J)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let Pt=0;Pt<b.length;Pt++){e.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,Lt.__webglColorRenderbuffer[Pt]);const lt=n.get(b[Pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,lt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function mt(P){return Math.min(i.maxSamples,P.samples)}function at(P){const b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function gt(P){const b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Wt(P,b){const z=P.colorSpace,q=P.format,nt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==jn&&z!==wn&&(se.getTransfer(z)===le?(q!==me||nt!==tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function Ht(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=de,this.setupRenderTarget=L,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=at}function h0(r,t){function e(n,i=wn){let s;const o=se.getTransfer(i);if(n===tn)return r.UNSIGNED_BYTE;if(n===Do)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Lo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Tl)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===El)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===wl)return r.BYTE;if(n===bl)return r.SHORT;if(n===Ki)return r.UNSIGNED_SHORT;if(n===Po)return r.INT;if(n===Nn)return r.UNSIGNED_INT;if(n===hn)return r.FLOAT;if(n===je)return r.HALF_FLOAT;if(n===Al)return r.ALPHA;if(n===Cl)return r.RGB;if(n===me)return r.RGBA;if(n===Ei)return r.DEPTH_COMPONENT;if(n===Zi)return r.DEPTH_STENCIL;if(n===Io)return r.RED;if(n===Uo)return r.RED_INTEGER;if(n===Rl)return r.RG;if(n===Fo)return r.RG_INTEGER;if(n===No)return r.RGBA_INTEGER;if(n===Fs||n===Ns||n===Os||n===Bs)if(o===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===Zr||n===$r||n===Jr)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===jr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$r)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qr||n===to||n===eo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Qr||n===to)return o===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===eo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===no||n===io||n===so||n===ro||n===oo||n===ao||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===no)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===io)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===so)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ro)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ao)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===co)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ho)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===po)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===go)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===xo||n===_o)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===vo)return o===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yo||n===So||n===Mo||n===wo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===yo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===So)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const u0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d0=`
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

}`;class f0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ql(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Me({vertexShader:u0,fragmentShader:d0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new X(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p0 extends Ri{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",p=new f0,m={},y=e.getContextAttributes();let _=null,x=null;const w=[],T=[],R=new j;let A=null;const M=new Ge;M.viewport=new oe;const E=new Ge;E.viewport=new oe;const D=[M,E],I=new Uu;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let st=w[Z];return st===void 0&&(st=new wr,w[Z]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Z){let st=w[Z];return st===void 0&&(st=new wr,w[Z]=st),st.getGripSpace()},this.getHand=function(Z){let st=w[Z];return st===void 0&&(st=new wr,w[Z]=st),st.getHandSpace()};function B(Z){const st=T.indexOf(Z.inputSource);if(st===-1)return;const Tt=w[st];Tt!==void 0&&(Tt.update(Z.inputSource,Z.frame,c||o),Tt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",K);for(let Z=0;Z<w.length;Z++){const st=T[Z];st!==null&&(T[Z]=null,w[Z].disconnect(st))}N=null,V=null,p.reset();for(const Z in m)delete m[Z];t.setRenderTarget(_),f=null,d=null,u=null,i=null,x=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(_=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",G),i.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Ut=null,Ct=null;y.depth&&(Ct=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=y.stencil?Zi:Ei,Ut=y.stencil?ji:Nn);const Jt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Jt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new be(d.textureWidth,d.textureHeight,{format:me,type:tn,depthTexture:new Go(d.textureWidth,d.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Tt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,Tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new be(f.framebufferWidth,f.framebufferHeight,{format:me,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(Z){for(let st=0;st<Z.removed.length;st++){const Tt=Z.removed[st],Ut=T.indexOf(Tt);Ut>=0&&(T[Ut]=null,w[Ut].disconnect(Tt))}for(let st=0;st<Z.added.length;st++){const Tt=Z.added[st];let Ut=T.indexOf(Tt);if(Ut===-1){for(let Jt=0;Jt<w.length;Jt++)if(Jt>=T.length){T.push(Tt),Ut=Jt;break}else if(T[Jt]===null){T[Jt]=Tt,Ut=Jt;break}if(Ut===-1)break}const Ct=w[Ut];Ct&&Ct.connect(Tt)}}const k=new S,et=new S;function ht(Z,st,Tt){k.setFromMatrixPosition(st.matrixWorld),et.setFromMatrixPosition(Tt.matrixWorld);const Ut=k.distanceTo(et),Ct=st.projectionMatrix.elements,Jt=Tt.projectionMatrix.elements,de=Ct[14]/(Ct[10]-1),L=Ct[14]/(Ct[10]+1),it=(Ct[9]+1)/Ct[5],Q=(Ct[9]-1)/Ct[5],J=(Ct[8]-1)/Ct[0],$=(Jt[8]+1)/Jt[0],mt=de*J,at=de*$,gt=Ut/(-J+$),Wt=gt*-J;if(st.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Wt),Z.translateZ(gt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ct[10]===-1)Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Ht=de+gt,P=L+gt,b=mt-Wt,z=at+(Ut-Wt),q=it*L/P*Ht,nt=Q*L/P*Ht;Z.projectionMatrix.makePerspective(b,z,q,nt,Ht,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function vt(Z,st){st===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(st.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let st=Z.near,Tt=Z.far;p.texture!==null&&(p.depthNear>0&&(st=p.depthNear),p.depthFar>0&&(Tt=p.depthFar)),I.near=E.near=M.near=st,I.far=E.far=M.far=Tt,(N!==I.near||V!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,V=I.far),I.layers.mask=Z.layers.mask|6,M.layers.mask=I.layers.mask&3,E.layers.mask=I.layers.mask&5;const Ut=Z.parent,Ct=I.cameras;vt(I,Ut);for(let Jt=0;Jt<Ct.length;Jt++)vt(Ct[Jt],Ut);Ct.length===2?ht(I,M,E):I.projectionMatrix.copy(M.projectionMatrix),_t(Z,I,Ut)};function _t(Z,st,Tt){Tt===null?Z.matrix.copy(st.matrixWorld):(Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(st.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=$i*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(Z){return m[Z]};let ot=null;function Vt(Z,st){if(h=st.getViewerPose(c||o),g=st,h!==null){const Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ut=!1;Tt.length!==I.cameras.length&&(I.cameras.length=0,Ut=!0);for(let L=0;L<Tt.length;L++){const it=Tt[L];let Q=null;if(f!==null)Q=f.getViewport(it);else{const $=u.getViewSubImage(d,it);Q=$.viewport,L===0&&(t.setRenderTargetTextures(x,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(x))}let J=D[L];J===void 0&&(J=new Ge,J.layers.enable(L),J.viewport=new oe,D[L]=J),J.matrix.fromArray(it.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(it.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Q.x,Q.y,Q.width,Q.height),L===0&&(I.matrix.copy(J.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ut===!0&&I.cameras.push(J)}const Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const L=u.getDepthInformation(Tt[0]);L&&L.isValid&&L.texture&&p.init(L,i.renderState)}if(Ct&&Ct.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<Tt.length;L++){const it=Tt[L].camera;if(it){let Q=m[it];Q||(Q=new ql,m[it]=Q);const J=u.getCameraImage(it);Q.sourceTexture=J}}}}for(let Tt=0;Tt<w.length;Tt++){const Ut=T[Tt],Ct=w[Tt];Ut!==null&&Ct!==void 0&&Ct.update(Ut,st,c||o)}ot&&ot(Z,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const Gt=new lc;Gt.setAnimationLoop(Vt),this.setAnimationLoop=function(Z){ot=Z},this.dispose=function(){}}}const Wn=new pn,m0=new kt;function g0(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,kl(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,_,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ue&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ue&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),_=y.envMap,x=y.envMapRotation;_&&(p.envMap.value=_,Wn.copy(x),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),p.envMapRotation.value.setFromMatrix4(m0.makeRotationFromEuler(Wn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ue&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function v0(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",p));const w=_.program;n.updateUBOMapping(y,w);const T=t.render.frame;s[y.id]!==T&&(d(y),s[y.id]=T)}function h(y){const _=u();y.__bindingPointIndex=_;const x=r.createBuffer(),w=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,w,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=i[y.id],x=y.uniforms,w=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let T=0,R=x.length;T<R;T++){const A=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,E=A.length;M<E;M++){const D=A[M];if(f(D,T,M,w)===!0){const I=D.__offset,N=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let B=0;B<N.length;B++){const G=N[B],K=v(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,I+V,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,_,x,w){const T=y.value,R=_+"_"+x;if(w[R]===void 0)return typeof T=="number"||typeof T=="boolean"?w[R]=T:w[R]=T.clone(),!0;{const A=w[R];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return w[R]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(y){const _=y.uniforms;let x=0;const w=16;for(let R=0,A=_.length;R<A;R++){const M=Array.isArray(_[R])?_[R]:[_[R]];for(let E=0,D=M.length;E<D;E++){const I=M[E],N=Array.isArray(I.value)?I.value:[I.value];for(let V=0,B=N.length;V<B;V++){const G=N[V],K=v(G),k=x%w,et=k%K.boundary,ht=k+et;x+=et,ht!==0&&w-ht<K.storage&&(x+=w-ht),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=K.storage}}}const T=x%w;return T>0&&(x+=w-T),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class x0{constructor(t={}){const{canvas:e=wh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,m=null;const y=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let w=!1;this._outputColorSpace=Ke;let T=0,R=0,A=null,M=-1,E=null;const D=new oe,I=new oe;let N=null;const V=new $t(0);let B=0,G=e.width,K=e.height,k=1,et=null,ht=null;const vt=new oe(0,0,G,K),_t=new oe(0,0,G,K);let ot=!1;const Vt=new ko;let Gt=!1,Z=!1;const st=new kt,Tt=new S,Ut=new oe,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function de(){return A===null?k:1}let L=n;function it(C,F){return e.getContext(C,F)}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ro}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",ct,!1),L===null){const F="webgl2";if(L=it(F,C),L===null)throw it(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Q,J,$,mt,at,gt,Wt,Ht,P,b,z,q,nt,Y,Lt,ft,Rt,Pt,lt,wt,Bt,It,St,qt;function U(){Q=new Cp(L),Q.init(),It=new h0(L,Q),J=new Sp(L,Q,t,It),$=new l0(L,Q),J.reversedDepthBuffer&&d&&$.buffers.depth.setReversed(!0),mt=new Dp(L),at=new jm,gt=new c0(L,Q,$,at,J,It,mt),Wt=new wp(x),Ht=new Ap(x),P=new Nu(L),St=new _p(L,P),b=new Rp(L,P,mt,St),z=new Ip(L,b,P,mt),lt=new Lp(L,J,gt),ft=new Mp(at),q=new Km(x,Wt,Ht,Q,J,St,ft),nt=new g0(x,at),Y=new $m,Lt=new i0(Q),Pt=new xp(x,Wt,Ht,$,z,f,l),Rt=new o0(x,z,J),qt=new v0(L,mt,J,$),wt=new yp(L,Q,mt),Bt=new Pp(L,Q,mt),mt.programs=q.programs,x.capabilities=J,x.extensions=Q,x.properties=at,x.renderLists=Y,x.shadowMap=Rt,x.state=$,x.info=mt}U();const dt=new p0(x,L);this.xr=dt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=Q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(G,K,!1))},this.getSize=function(C){return C.set(G,K)},this.setSize=function(C,F,H=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,K=F,e.width=Math.floor(C*k),e.height=Math.floor(F*k),H===!0&&(e.style.width=C+"px",e.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(G*k,K*k).floor()},this.setDrawingBufferSize=function(C,F,H){G=C,K=F,k=H,e.width=Math.floor(C*H),e.height=Math.floor(F*H),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(vt)},this.setViewport=function(C,F,H,W){C.isVector4?vt.set(C.x,C.y,C.z,C.w):vt.set(C,F,H,W),$.viewport(D.copy(vt).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(_t)},this.setScissor=function(C,F,H,W){C.isVector4?_t.set(C.x,C.y,C.z,C.w):_t.set(C,F,H,W),$.scissor(I.copy(_t).multiplyScalar(k).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(C){$.setScissorTest(ot=C)},this.setOpaqueSort=function(C){et=C},this.setTransparentSort=function(C){ht=C},this.getClearColor=function(C){return C.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(C=!0,F=!0,H=!0){let W=0;if(C){let O=!1;if(A!==null){const ut=A.texture.format;O=ut===No||ut===Fo||ut===Uo}if(O){const ut=A.texture.type,Mt=ut===tn||ut===Nn||ut===Ki||ut===ji||ut===Do||ut===Lo,At=Pt.getClearColor(),bt=Pt.getClearAlpha(),Ot=At.r,zt=At.g,Ft=At.b;Mt?(g[0]=Ot,g[1]=zt,g[2]=Ft,g[3]=bt,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Ot,v[1]=zt,v[2]=Ft,v[3]=bt,L.clearBufferiv(L.COLOR,0,v))}else W|=L.COLOR_BUFFER_BIT}F&&(W|=L.DEPTH_BUFFER_BIT),H&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Pt.dispose(),Y.dispose(),Lt.dispose(),at.dispose(),Wt.dispose(),Ht.dispose(),z.dispose(),St.dispose(),qt.dispose(),q.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",ln),dt.removeEventListener("sessionend",Qo),On.stop()};function xt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=mt.autoReset,F=Rt.enabled,H=Rt.autoUpdate,W=Rt.needsUpdate,O=Rt.type;U(),mt.autoReset=C,Rt.enabled=F,Rt.autoUpdate=H,Rt.needsUpdate=W,Rt.type=O}function ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function tt(C){const F=C.target;F.removeEventListener("dispose",tt),Dt(F)}function Dt(C){Xt(C),at.remove(C)}function Xt(C){const F=at.get(C).programs;F!==void 0&&(F.forEach(function(H){q.releaseProgram(H)}),C.isShaderMaterial&&q.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,H,W,O,ut){F===null&&(F=Ct);const Mt=O.isMesh&&O.matrixWorld.determinant()<0,At=mc(C,F,H,W,O);$.setMaterial(W,Mt);let bt=H.index,Ot=1;if(W.wireframe===!0){if(bt=b.getWireframeAttribute(H),bt===void 0)return;Ot=2}const zt=H.drawRange,Ft=H.attributes.position;let Qt=zt.start*Ot,ae=(zt.start+zt.count)*Ot;ut!==null&&(Qt=Math.max(Qt,ut.start*Ot),ae=Math.min(ae,(ut.start+ut.count)*Ot)),bt!==null?(Qt=Math.max(Qt,0),ae=Math.min(ae,bt.count)):Ft!=null&&(Qt=Math.max(Qt,0),ae=Math.min(ae,Ft.count));const Se=ae-Qt;if(Se<0||Se===1/0)return;St.setup(O,W,At,H,bt);let pe,ce=wt;if(bt!==null&&(pe=P.get(bt),ce=Bt,ce.setIndex(pe)),O.isMesh)W.wireframe===!0?($.setLineWidth(W.wireframeLinewidth*de()),ce.setMode(L.LINES)):ce.setMode(L.TRIANGLES);else if(O.isLine){let Nt=W.linewidth;Nt===void 0&&(Nt=1),$.setLineWidth(Nt*de()),O.isLineSegments?ce.setMode(L.LINES):O.isLineLoop?ce.setMode(L.LINE_LOOP):ce.setMode(L.LINE_STRIP)}else O.isPoints?ce.setMode(L.POINTS):O.isSprite&&ce.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ji("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ce.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Nt=O._multiDrawStarts,ge=O._multiDrawCounts,ne=O._multiDrawCount,We=bt?P.get(bt).bytesPerElement:1,ei=at.get(W).currentProgram.getUniforms();for(let Xe=0;Xe<ne;Xe++)ei.setValue(L,"_gl_DrawID",Xe),ce.render(Nt[Xe]/We,ge[Xe])}else if(O.isInstancedMesh)ce.renderInstances(Qt,Se,O.count);else if(H.isInstancedBufferGeometry){const Nt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ge=Math.min(H.instanceCount,Nt);ce.renderInstances(Qt,Se,ge)}else ce.render(Qt,Se)};function fe(C,F,H){C.transparent===!0&&C.side===He&&C.forceSinglePass===!1?(C.side=Ue,C.needsUpdate=!0,ss(C,F,H),C.side=Fn,C.needsUpdate=!0,ss(C,F,H),C.side=He):ss(C,F,H)}this.compile=function(C,F,H=null){H===null&&(H=C),m=Lt.get(H),m.init(F),_.push(m),H.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),C!==H&&C.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const W=new Set;return C.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ut=O.material;if(ut)if(Array.isArray(ut))for(let Mt=0;Mt<ut.length;Mt++){const At=ut[Mt];fe(At,H,O),W.add(At)}else fe(ut,H,O),W.add(ut)}),m=_.pop(),W},this.compileAsync=function(C,F,H=null){const W=this.compile(C,F,H);return new Promise(O=>{function ut(){if(W.forEach(function(Mt){at.get(Mt).currentProgram.isReady()&&W.delete(Mt)}),W.size===0){O(C);return}setTimeout(ut,10)}Q.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let re=null;function gn(C){re&&re(C)}function ln(){On.stop()}function Qo(){On.start()}const On=new lc;On.setAnimationLoop(gn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(C){re=C,dt.setAnimationLoop(C),C===null?On.stop():On.start()},dt.addEventListener("sessionstart",ln),dt.addEventListener("sessionend",Qo),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(F),F=dt.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,F,A),m=Lt.get(C,_.length),m.init(F),_.push(m),st.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Vt.setFromProjectionMatrix(st,un,F.reversedDepth),Z=this.localClippingEnabled,Gt=ft.init(this.clippingPlanes,Z),p=Y.get(C,y.length),p.init(),y.push(p),dt.enabled===!0&&dt.isPresenting===!0){const ut=x.xr.getDepthSensingMesh();ut!==null&&tr(ut,F,-1/0,x.sortObjects)}tr(C,F,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(et,ht),Jt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Jt&&Pt.addToRenderList(p,C),this.info.render.frame++,Gt===!0&&ft.beginShadows();const H=m.state.shadowsArray;Rt.render(H,C,F),Gt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,O=p.transmissive;if(m.setupLights(),F.isArrayCamera){const ut=F.cameras;if(O.length>0)for(let Mt=0,At=ut.length;Mt<At;Mt++){const bt=ut[Mt];ea(W,O,C,bt)}Jt&&Pt.render(C);for(let Mt=0,At=ut.length;Mt<At;Mt++){const bt=ut[Mt];ta(p,C,bt,bt.viewport)}}else O.length>0&&ea(W,O,C,F),Jt&&Pt.render(C),ta(p,C,F);A!==null&&R===0&&(gt.updateMultisampleRenderTarget(A),gt.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(x,C,F),St.resetDefaultState(),M=-1,E=null,_.pop(),_.length>0?(m=_[_.length-1],Gt===!0&&ft.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function tr(C,F,H,W){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)H=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Vt.intersectsSprite(C)){W&&Ut.setFromMatrixPosition(C.matrixWorld).applyMatrix4(st);const Mt=z.update(C),At=C.material;At.visible&&p.push(C,Mt,At,H,Ut.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Vt.intersectsObject(C))){const Mt=z.update(C),At=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ut.copy(C.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Ut.copy(Mt.boundingSphere.center)),Ut.applyMatrix4(C.matrixWorld).applyMatrix4(st)),Array.isArray(At)){const bt=Mt.groups;for(let Ot=0,zt=bt.length;Ot<zt;Ot++){const Ft=bt[Ot],Qt=At[Ft.materialIndex];Qt&&Qt.visible&&p.push(C,Mt,Qt,H,Ut.z,Ft)}}else At.visible&&p.push(C,Mt,At,H,Ut.z,null)}}const ut=C.children;for(let Mt=0,At=ut.length;Mt<At;Mt++)tr(ut[Mt],F,H,W)}function ta(C,F,H,W){const O=C.opaque,ut=C.transmissive,Mt=C.transparent;m.setupLightsView(H),Gt===!0&&ft.setGlobalState(x.clippingPlanes,H),W&&$.viewport(D.copy(W)),O.length>0&&is(O,F,H),ut.length>0&&is(ut,F,H),Mt.length>0&&is(Mt,F,H),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function ea(C,F,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new be(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?je:tn,minFilter:In,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const ut=m.state.transmissionRenderTarget[W.id],Mt=W.viewport||D;ut.setSize(Mt.z*x.transmissionResolutionScale,Mt.w*x.transmissionResolutionScale);const At=x.getRenderTarget(),bt=x.getActiveCubeFace(),Ot=x.getActiveMipmapLevel();x.setRenderTarget(ut),x.getClearColor(V),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),Jt&&Pt.render(H);const zt=x.toneMapping;x.toneMapping=bn;const Ft=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),Gt===!0&&ft.setGlobalState(x.clippingPlanes,W),is(C,H,W),gt.updateMultisampleRenderTarget(ut),gt.updateRenderTargetMipmap(ut),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let ae=0,Se=F.length;ae<Se;ae++){const pe=F[ae],ce=pe.object,Nt=pe.geometry,ge=pe.material,ne=pe.group;if(ge.side===He&&ce.layers.test(W.layers)){const We=ge.side;ge.side=Ue,ge.needsUpdate=!0,na(ce,H,W,Nt,ge,ne),ge.side=We,ge.needsUpdate=!0,Qt=!0}}Qt===!0&&(gt.updateMultisampleRenderTarget(ut),gt.updateRenderTargetMipmap(ut))}x.setRenderTarget(At,bt,Ot),x.setClearColor(V,B),Ft!==void 0&&(W.viewport=Ft),x.toneMapping=zt}function is(C,F,H){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ut=C.length;O<ut;O++){const Mt=C[O],At=Mt.object,bt=Mt.geometry,Ot=Mt.group;let zt=Mt.material;zt.allowOverride===!0&&W!==null&&(zt=W),At.layers.test(H.layers)&&na(At,F,H,bt,zt,Ot)}}function na(C,F,H,W,O,ut){C.onBeforeRender(x,F,H,W,O,ut),C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),O.onBeforeRender(x,F,H,W,C,ut),O.transparent===!0&&O.side===He&&O.forceSinglePass===!1?(O.side=Ue,O.needsUpdate=!0,x.renderBufferDirect(H,F,W,O,C,ut),O.side=Fn,O.needsUpdate=!0,x.renderBufferDirect(H,F,W,O,C,ut),O.side=He):x.renderBufferDirect(H,F,W,O,C,ut),C.onAfterRender(x,F,H,W,O,ut)}function ss(C,F,H){F.isScene!==!0&&(F=Ct);const W=at.get(C),O=m.state.lights,ut=m.state.shadowsArray,Mt=O.state.version,At=q.getParameters(C,O.state,ut,F,H),bt=q.getProgramCacheKey(At);let Ot=W.programs;W.environment=C.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(C.isMeshStandardMaterial?Ht:Wt).get(C.envMap||W.environment),W.envMapRotation=W.environment!==null&&C.envMap===null?F.environmentRotation:C.envMapRotation,Ot===void 0&&(C.addEventListener("dispose",tt),Ot=new Map,W.programs=Ot);let zt=Ot.get(bt);if(zt!==void 0){if(W.currentProgram===zt&&W.lightsStateVersion===Mt)return sa(C,At),zt}else At.uniforms=q.getUniforms(C),C.onBeforeCompile(At,x),zt=q.acquireProgram(At,bt),Ot.set(bt,zt),W.uniforms=At.uniforms;const Ft=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ft.clippingPlanes=ft.uniform),sa(C,At),W.needsLights=vc(C),W.lightsStateVersion=Mt,W.needsLights&&(Ft.ambientLightColor.value=O.state.ambient,Ft.lightProbe.value=O.state.probe,Ft.directionalLights.value=O.state.directional,Ft.directionalLightShadows.value=O.state.directionalShadow,Ft.spotLights.value=O.state.spot,Ft.spotLightShadows.value=O.state.spotShadow,Ft.rectAreaLights.value=O.state.rectArea,Ft.ltc_1.value=O.state.rectAreaLTC1,Ft.ltc_2.value=O.state.rectAreaLTC2,Ft.pointLights.value=O.state.point,Ft.pointLightShadows.value=O.state.pointShadow,Ft.hemisphereLights.value=O.state.hemi,Ft.directionalShadowMap.value=O.state.directionalShadowMap,Ft.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ft.spotShadowMap.value=O.state.spotShadowMap,Ft.spotLightMatrix.value=O.state.spotLightMatrix,Ft.spotLightMap.value=O.state.spotLightMap,Ft.pointShadowMap.value=O.state.pointShadowMap,Ft.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=zt,W.uniformsList=null,zt}function ia(C){if(C.uniformsList===null){const F=C.currentProgram.getUniforms();C.uniformsList=ks.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function sa(C,F){const H=at.get(C);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function mc(C,F,H,W,O){F.isScene!==!0&&(F=Ct),gt.resetTextureUnits();const ut=F.fog,Mt=W.isMeshStandardMaterial?F.environment:null,At=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:jn,bt=(W.isMeshStandardMaterial?Ht:Wt).get(W.envMap||Mt),Ot=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,zt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ft=!!H.morphAttributes.position,Qt=!!H.morphAttributes.normal,ae=!!H.morphAttributes.color;let Se=bn;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Se=x.toneMapping);const pe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=pe!==void 0?pe.length:0,Nt=at.get(W),ge=m.state.lights;if(Gt===!0&&(Z===!0||C!==E)){const Fe=C===E&&W.id===M;ft.setState(W,C,Fe)}let ne=!1;W.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==ge.state.version||Nt.outputColorSpace!==At||O.isBatchedMesh&&Nt.batching===!1||!O.isBatchedMesh&&Nt.batching===!0||O.isBatchedMesh&&Nt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Nt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Nt.instancing===!1||!O.isInstancedMesh&&Nt.instancing===!0||O.isSkinnedMesh&&Nt.skinning===!1||!O.isSkinnedMesh&&Nt.skinning===!0||O.isInstancedMesh&&Nt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Nt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Nt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Nt.instancingMorph===!1&&O.morphTexture!==null||Nt.envMap!==bt||W.fog===!0&&Nt.fog!==ut||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ft.numPlanes||Nt.numIntersection!==ft.numIntersection)||Nt.vertexAlphas!==Ot||Nt.vertexTangents!==zt||Nt.morphTargets!==Ft||Nt.morphNormals!==Qt||Nt.morphColors!==ae||Nt.toneMapping!==Se||Nt.morphTargetsCount!==ce)&&(ne=!0):(ne=!0,Nt.__version=W.version);let We=Nt.currentProgram;ne===!0&&(We=ss(W,F,O));let ei=!1,Xe=!1,Di=!1;const ve=We.getUniforms(),Ze=Nt.uniforms;if($.useProgram(We.program)&&(ei=!0,Xe=!0,Di=!0),W.id!==M&&(M=W.id,Xe=!0),ei||E!==C){$.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ve.setValue(L,"projectionMatrix",C.projectionMatrix),ve.setValue(L,"viewMatrix",C.matrixWorldInverse);const ke=ve.map.cameraPosition;ke!==void 0&&ke.setValue(L,Tt.setFromMatrixPosition(C.matrixWorld)),J.logarithmicDepthBuffer&&ve.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ve.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,Xe=!0,Di=!0)}if(O.isSkinnedMesh){ve.setOptional(L,O,"bindMatrix"),ve.setOptional(L,O,"bindMatrixInverse");const Fe=O.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ve.setValue(L,"boneTexture",Fe.boneTexture,gt))}O.isBatchedMesh&&(ve.setOptional(L,O,"batchingTexture"),ve.setValue(L,"batchingTexture",O._matricesTexture,gt),ve.setOptional(L,O,"batchingIdTexture"),ve.setValue(L,"batchingIdTexture",O._indirectTexture,gt),ve.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&ve.setValue(L,"batchingColorTexture",O._colorsTexture,gt));const $e=H.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&lt.update(O,H,We),(Xe||Nt.receiveShadow!==O.receiveShadow)&&(Nt.receiveShadow=O.receiveShadow,ve.setValue(L,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ze.envMap.value=bt,Ze.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Ze.envMapIntensity.value=F.environmentIntensity),Xe&&(ve.setValue(L,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&gc(Ze,Di),ut&&W.fog===!0&&nt.refreshFogUniforms(Ze,ut),nt.refreshMaterialUniforms(Ze,W,k,K,m.state.transmissionRenderTarget[C.id]),ks.upload(L,ia(Nt),Ze,gt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ks.upload(L,ia(Nt),Ze,gt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ve.setValue(L,"center",O.center),ve.setValue(L,"modelViewMatrix",O.modelViewMatrix),ve.setValue(L,"normalMatrix",O.normalMatrix),ve.setValue(L,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Fe=W.uniformsGroups;for(let ke=0,er=Fe.length;ke<er;ke++){const Bn=Fe[ke];qt.update(Bn,We),qt.bind(Bn,We)}}return We}function gc(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function vc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,F,H){const W=at.get(C);W.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),at.get(C.texture).__webglTexture=F,at.get(C.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:H,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,F){const H=at.get(C);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const xc=L.createFramebuffer();this.setRenderTarget=function(C,F=0,H=0){A=C,T=F,R=H;let W=!0,O=null,ut=!1,Mt=!1;if(C){const bt=at.get(C);if(bt.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(bt.__webglFramebuffer===void 0)gt.setupRenderTarget(C);else if(bt.__hasExternalTextures)gt.rebindTextures(C,at.get(C.texture).__webglTexture,at.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ft=C.depthTexture;if(bt.__boundDepthTexture!==Ft){if(Ft!==null&&at.has(Ft)&&(C.width!==Ft.image.width||C.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(C)}}const Ot=C.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Mt=!0);const zt=at.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(zt[F])?O=zt[F][H]:O=zt[F],ut=!0):C.samples>0&&gt.useMultisampledRTT(C)===!1?O=at.get(C).__webglMultisampledFramebuffer:Array.isArray(zt)?O=zt[H]:O=zt,D.copy(C.viewport),I.copy(C.scissor),N=C.scissorTest}else D.copy(vt).multiplyScalar(k).floor(),I.copy(_t).multiplyScalar(k).floor(),N=ot;if(H!==0&&(O=xc),$.bindFramebuffer(L.FRAMEBUFFER,O)&&W&&$.drawBuffers(C,O),$.viewport(D),$.scissor(I),$.setScissorTest(N),ut){const bt=at.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,bt.__webglTexture,H)}else if(Mt){const bt=F;for(let Ot=0;Ot<C.textures.length;Ot++){const zt=at.get(C.textures[Ot]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ot,zt.__webglTexture,H,bt)}}else if(C!==null&&H!==0){const bt=at.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(C,F,H,W,O,ut,Mt,At=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){$.bindFramebuffer(L.FRAMEBUFFER,bt);try{const Ot=C.textures[At],zt=Ot.format,Ft=Ot.type;if(!J.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-W&&H>=0&&H<=C.height-O&&(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+At),L.readPixels(F,H,W,O,It.convert(zt),It.convert(Ft),ut))}finally{const Ot=A!==null?at.get(A).__webglFramebuffer:null;$.bindFramebuffer(L.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(C,F,H,W,O,ut,Mt,At=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt)if(F>=0&&F<=C.width-W&&H>=0&&H<=C.height-O){$.bindFramebuffer(L.FRAMEBUFFER,bt);const Ot=C.textures[At],zt=Ot.format,Ft=Ot.type;if(!J.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qt),L.bufferData(L.PIXEL_PACK_BUFFER,ut.byteLength,L.STREAM_READ),C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+At),L.readPixels(F,H,W,O,It.convert(zt),It.convert(Ft),0);const ae=A!==null?at.get(A).__webglFramebuffer:null;$.bindFramebuffer(L.FRAMEBUFFER,ae);const Se=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await bh(L,Se,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ut),L.deleteBuffer(Qt),L.deleteSync(Se),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,F=null,H=0){const W=Math.pow(2,-H),O=Math.floor(C.image.width*W),ut=Math.floor(C.image.height*W),Mt=F!==null?F.x:0,At=F!==null?F.y:0;gt.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,Mt,At,O,ut),$.unbindTexture()};const _c=L.createFramebuffer(),yc=L.createFramebuffer();this.copyTextureToTexture=function(C,F,H=null,W=null,O=0,ut=null){ut===null&&(O!==0?(Ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=O,O=0):ut=0);let Mt,At,bt,Ot,zt,Ft,Qt,ae,Se;const pe=C.isCompressedTexture?C.mipmaps[ut]:C.image;if(H!==null)Mt=H.max.x-H.min.x,At=H.max.y-H.min.y,bt=H.isBox3?H.max.z-H.min.z:1,Ot=H.min.x,zt=H.min.y,Ft=H.isBox3?H.min.z:0;else{const $e=Math.pow(2,-O);Mt=Math.floor(pe.width*$e),At=Math.floor(pe.height*$e),C.isDataArrayTexture?bt=pe.depth:C.isData3DTexture?bt=Math.floor(pe.depth*$e):bt=1,Ot=0,zt=0,Ft=0}W!==null?(Qt=W.x,ae=W.y,Se=W.z):(Qt=0,ae=0,Se=0);const ce=It.convert(F.format),Nt=It.convert(F.type);let ge;F.isData3DTexture?(gt.setTexture3D(F,0),ge=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(gt.setTexture2DArray(F,0),ge=L.TEXTURE_2D_ARRAY):(gt.setTexture2D(F,0),ge=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const ne=L.getParameter(L.UNPACK_ROW_LENGTH),We=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ei=L.getParameter(L.UNPACK_SKIP_PIXELS),Xe=L.getParameter(L.UNPACK_SKIP_ROWS),Di=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ot),L.pixelStorei(L.UNPACK_SKIP_ROWS,zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ft);const ve=C.isDataArrayTexture||C.isData3DTexture,Ze=F.isDataArrayTexture||F.isData3DTexture;if(C.isDepthTexture){const $e=at.get(C),Fe=at.get(F),ke=at.get($e.__renderTarget),er=at.get(Fe.__renderTarget);$.bindFramebuffer(L.READ_FRAMEBUFFER,ke.__webglFramebuffer),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,er.__webglFramebuffer);for(let Bn=0;Bn<bt;Bn++)ve&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,at.get(C).__webglTexture,O,Ft+Bn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,at.get(F).__webglTexture,ut,Se+Bn)),L.blitFramebuffer(Ot,zt,Mt,At,Qt,ae,Mt,At,L.DEPTH_BUFFER_BIT,L.NEAREST);$.bindFramebuffer(L.READ_FRAMEBUFFER,null),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||C.isRenderTargetTexture||at.has(C)){const $e=at.get(C),Fe=at.get(F);$.bindFramebuffer(L.READ_FRAMEBUFFER,_c),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,yc);for(let ke=0;ke<bt;ke++)ve?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$e.__webglTexture,O,Ft+ke):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,$e.__webglTexture,O),Ze?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,ut,Se+ke):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fe.__webglTexture,ut),O!==0?L.blitFramebuffer(Ot,zt,Mt,At,Qt,ae,Mt,At,L.COLOR_BUFFER_BIT,L.NEAREST):Ze?L.copyTexSubImage3D(ge,ut,Qt,ae,Se+ke,Ot,zt,Mt,At):L.copyTexSubImage2D(ge,ut,Qt,ae,Ot,zt,Mt,At);$.bindFramebuffer(L.READ_FRAMEBUFFER,null),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ze?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(ge,ut,Qt,ae,Se,Mt,At,bt,ce,Nt,pe.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(ge,ut,Qt,ae,Se,Mt,At,bt,ce,pe.data):L.texSubImage3D(ge,ut,Qt,ae,Se,Mt,At,bt,ce,Nt,pe):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ut,Qt,ae,Mt,At,ce,Nt,pe.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ut,Qt,ae,pe.width,pe.height,ce,pe.data):L.texSubImage2D(L.TEXTURE_2D,ut,Qt,ae,Mt,At,ce,Nt,pe);L.pixelStorei(L.UNPACK_ROW_LENGTH,ne),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,We),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ei),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Di),ut===0&&F.generateMipmaps&&L.generateMipmap(ge),$.unbindTexture()},this.initRenderTarget=function(C){at.get(C).__webglFramebuffer===void 0&&gt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?gt.setTextureCube(C,0):C.isData3DTexture?gt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?gt.setTexture2DArray(C,0):gt.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){T=0,R=0,A=null,$.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}class xe{state;initialSeed;constructor(t=1337420){this.initialSeed=typeof t=="string"?xe.hashString(t):t>>>0||1,this.state=this.initialSeed}static hashString(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0||1}reset(t){this.state=t!==void 0?t>>>0||1:this.initialSeed}next(){let t=this.state+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}signed(){return this.next()*2-1}chance(t=.5){return this.next()<t}gaussian(){const t=Math.max(1e-7,this.next()),e=this.next();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}pick(t){return t[Math.floor(this.next()*t.length)]}fork(t){const e=typeof t=="string"?xe.hashString(t):t>>>0;return new xe((this.initialSeed^Math.imul(e+2654435769,2246822507))>>>0)}static hash2D(t,e,n=1337){let i=Math.imul(Math.floor(t),374761393)+Math.imul(Math.floor(e),668265263)+Math.imul(n,1442695041);return i=(i^i>>>13)>>>0,i=Math.imul(i,1274126177)>>>0,((i^i>>>16)>>>0)/4294967296}static valueNoise2D(t,e,n=1337){const i=Math.floor(t),s=Math.floor(e),o=t-i,a=e-s,l=o*o*(3-2*o),c=a*a*(3-2*a),h=xe.hash2D(i,s,n),u=xe.hash2D(i+1,s,n),d=xe.hash2D(i,s+1,n),f=xe.hash2D(i+1,s+1,n);return h+(u-h)*l+(d-h)*c+(h-u-d+f)*l*c}static fbm2D(t,e,n=4,i=1337){let s=0,o=.5,a=1,l=0;for(let c=0;c<n;c++)s+=o*xe.valueNoise2D(t*a,e*a,i+c*101),l+=o,a*=2.02,o*=.5;return s/l}}const Us={low:{shadowMapSize:1024,shadowCascades:4,gtaoSamples:4,cloudSteps:10,particleMultiplier:.5,motionBlurSamples:4,renderScale:.75,maxDecals:48,maxCasings:24},medium:{shadowMapSize:1024,shadowCascades:4,gtaoSamples:6,cloudSteps:14,particleMultiplier:.8,motionBlurSamples:6,renderScale:.9,maxDecals:80,maxCasings:40},high:{shadowMapSize:1536,shadowCascades:4,gtaoSamples:8,cloudSteps:20,particleMultiplier:1,motionBlurSamples:8,renderScale:1,maxDecals:120,maxCasings:60},ultra:{shadowMapSize:2048,shadowCascades:4,gtaoSamples:12,cloudSteps:28,particleMultiplier:1.25,motionBlurSamples:10,renderScale:1,maxDecals:160,maxCasings:80}},ml="dustline_tactical_fps_settings_v2";function gl(){if(typeof window>"u")return!1;const r=new URLSearchParams(window.location.search);return r.get("mobile")==="1"||r.get("touch")==="1"?!0:window.matchMedia("(pointer: coarse)").matches}class _0{data;listeners=[];constructor(){this.data=this.getDefaults(),this.load(),this.applyQueryOverrides()}isMobile=gl();getDefaults(){const t=gl();return{quality:t?"low":"high",sensitivity:1,adsMultiplier:.65,fov:t?84:78,invertY:!1,motionBlur:t?"off":"low",bloom:!0,gtao:!t,taa:!0,chromaticAberration:!t,vignette:!0,filmGrain:!t,cameraShake:.75,dynamicRenderScale:!0,renderScale:t?Us.low.renderScale:1,masterVolume:.85,autoFullscreen:t,botDifficulty:"regular",keybinds:{forward:"KeyW",backward:"KeyS",left:"KeyA",right:"KeyD",sprint:"ShiftLeft",crouch:"KeyC",jump:"Space",reload:"KeyR",fireMode:"KeyB",inspect:"KeyF",tactical:"KeyQ",explosive:"KeyG",pause:"Escape"}}}applyPreset(t){const e=Us[t];this.data.quality=t,this.data.renderScale=e.renderScale,this.data.motionBlur=t==="low"?"off":t==="ultra"?"high":"low",this.data.gtao=t!=="low",this.save(),this.notify()}getQualityParams(){return Us[this.data.quality]}update(t){Object.assign(this.data,t),this.save(),this.notify()}onChange(t){this.listeners.push(t)}notify(){for(const t of this.listeners)t(this.data)}save(){try{localStorage.setItem(ml,JSON.stringify(this.data))}catch{}}load(){try{const t=localStorage.getItem(ml);if(!t)return;const e=JSON.parse(t);e&&typeof e=="object"&&(this.data={...this.data,...e,keybinds:{...this.data.keybinds,...e.keybinds||{}}})}catch{}}applyQueryOverrides(){if(typeof window>"u")return;const t=new URLSearchParams(window.location.search),e=t.get("preset");e&&e in Us&&this.applyPreset(e);const n=t.get("renderScale");if(n){const i=parseFloat(n);!Number.isNaN(i)&&i>=.4&&i<=1.25&&(this.data.renderScale=i,this.data.dynamicRenderScale=!1)}}}class y0{settings;keysDown=new Set;keysPressed=new Set;mouseButtonsDown=new Set;mouseButtonsPressed=new Set;mouseDeltaX=0;mouseDeltaY=0;isPointerLocked=!1;debugView="none";isTouchDevice=!1;touchModeEnabled=!1;touchModeForced=!1;onGestureCallbacks=[];touchMoveX=0;touchMoveZ=0;touchSprintActive=!1;touchAdsToggled=!1;touchCrouchToggled=!1;touchLeanState=0;touchScoreboardOpen=!1;targetElement;onPointerLockChangeCallbacks=[];onFirstInteractionCallbacks=[];onTouchModeChangeCallbacks=[];interacted=!1;constructor(t,e){this.targetElement=t,this.settings=e,this.detectTouchCapability(),this.bindEvents(),this.checkQueryDebug()}detectTouchCapability(){const t=new URLSearchParams(window.location.search),e=t.get("mobile")==="1"||t.get("touch")==="1",n=e||"ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches;this.isTouchDevice=n,this.touchModeForced=e,this.touchModeEnabled=e||window.matchMedia("(pointer: coarse)").matches}setTouchModeEnabled(t){if(this.touchModeEnabled!==t){this.touchModeEnabled=t,t||(this.touchMoveX=0,this.touchMoveZ=0,this.touchSprintActive=!1,this.touchAdsToggled=!1,this.touchCrouchToggled=!1,this.touchLeanState=0,this.touchScoreboardOpen=!1);for(const e of this.onTouchModeChangeCallbacks)e(t)}}onTouchModeChange(t){this.onTouchModeChangeCallbacks.push(t)}checkQueryDebug(){const e=new URLSearchParams(window.location.search).get("debug");e&&(this.debugView=e)}onGesture(t){this.onGestureCallbacks.push(t)}emitGesture(){for(const t of this.onGestureCallbacks)t()}isFormTarget(t){const e=t;if(!e||!e.tagName)return!1;const n=e.tagName;return n==="INPUT"||n==="SELECT"||n==="TEXTAREA"||n==="BUTTON"||e.isContentEditable}bindEvents(){window.addEventListener("keydown",t=>{this.emitGesture(),(this.isPointerLocked||!this.isFormTarget(t.target))&&(t.code==="Tab"||t.code==="Space"||t.code.startsWith("Arrow")||t.code==="Backspace")&&t.preventDefault(),!(t.repeat&&this.keysDown.has(t.code))&&(this.keysDown.has(t.code)||this.keysPressed.add(t.code),this.keysDown.add(t.code),t.code==="Digit1"&&t.altKey?this.debugView="none":t.code==="Digit2"&&t.altKey?this.debugView="cascades":t.code==="Digit3"&&t.altKey?this.debugView="normals":t.code==="Digit4"&&t.altKey?this.debugView="velocity":t.code==="Digit5"&&t.altKey?this.debugView="ao":t.code==="Digit6"&&t.altKey?this.debugView="bvh":t.code==="Digit7"&&t.altKey?this.debugView="nav":t.code==="Digit8"&&t.altKey?this.debugView="audio":t.code==="Digit9"&&t.altKey&&(this.debugView="timings"))}),window.addEventListener("keyup",t=>{this.keysDown.delete(t.code)}),window.addEventListener("pointerdown",t=>{this.emitGesture(),t.pointerType==="touch"||t.pointerType==="pen"?this.touchModeEnabled||this.setTouchModeEnabled(!0):t.pointerType==="mouse"&&this.touchModeEnabled&&!this.touchModeForced&&this.setTouchModeEnabled(!1)}),window.addEventListener("touchend",()=>this.emitGesture(),{passive:!0}),window.addEventListener("click",()=>this.emitGesture()),window.addEventListener("mousedown",t=>{this.triggerFirstInteraction(),this.mouseButtonsDown.has(t.button)||this.mouseButtonsPressed.add(t.button),this.mouseButtonsDown.add(t.button)}),window.addEventListener("mouseup",t=>{this.mouseButtonsDown.delete(t.button)}),window.addEventListener("touchstart",()=>{this.triggerFirstInteraction(),this.touchModeEnabled||this.setTouchModeEnabled(!0)},{passive:!0}),window.addEventListener("contextmenu",t=>{t.preventDefault()}),window.addEventListener("mousemove",t=>{this.isPointerLocked&&(Math.abs(t.movementX)>450||Math.abs(t.movementY)>450||(this.mouseDeltaX+=t.movementX,this.mouseDeltaY+=t.movementY))}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===this.targetElement,this.isPointerLocked||this.clearTransientInputs();for(const t of this.onPointerLockChangeCallbacks)t(this.isPointerLocked)}),window.addEventListener("blur",()=>{this.clearTransientInputs()}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearTransientInputs()})}triggerFirstInteraction(){if(!this.interacted){this.interacted=!0;for(const t of this.onFirstInteractionCallbacks)t()}}onFirstInteraction(t){this.interacted?t():this.onFirstInteractionCallbacks.push(t)}onPointerLockChange(t){this.onPointerLockChangeCallbacks.push(t)}requestPointerLock(){if(this.triggerFirstInteraction(),!this.touchModeEnabled)try{if(document.pointerLockElement!==this.targetElement){const t=this.targetElement;let e;try{e=t.requestPointerLock({unadjustedMovement:!0})}catch{e=t.requestPointerLock()}e&&typeof e.catch=="function"&&e.catch(n=>{if(document.pointerLockElement===this.targetElement||n?.name!=="NotSupportedError")return;const i=t.requestPointerLock();i&&typeof i.catch=="function"&&i.catch(()=>{})})}}catch{}}exitPointerLock(){try{document.pointerLockElement&&document.exitPointerLock()}catch{}}clearTransientInputs(){this.keysDown.clear(),this.keysPressed.clear(),this.mouseButtonsDown.clear(),this.mouseButtonsPressed.clear(),this.mouseDeltaX=0,this.mouseDeltaY=0,this.touchMoveX=0,this.touchMoveZ=0,this.touchSprintActive=!1}resetToggles(){this.touchAdsToggled=!1,this.touchCrouchToggled=!1,this.touchLeanState=0,this.touchScoreboardOpen=!1,this.touchSprintActive=!1}setTouchMove(t,e,n=!1){this.touchMoveX=Math.max(-1,Math.min(1,t)),this.touchMoveZ=Math.max(-1,Math.min(1,e)),this.touchSprintActive=n,n&&(this.touchAdsToggled=!1,this.touchCrouchToggled=!1,this.touchLeanState=0)}consumeLookDelta(t){const e=.0019*this.settings.data.sensitivity,n=t?this.settings.data.adsMultiplier:1,i=this.settings.data.invertY?-1:1,s=-this.mouseDeltaX*e*n,o=-this.mouseDeltaY*e*n*i;return this.mouseDeltaX=0,this.mouseDeltaY=0,{yawDelta:s,pitchDelta:o}}injectLookDelta(t,e){this.mouseDeltaX+=t,this.mouseDeltaY+=e}setVirtualKey(t,e){e?(this.keysDown.has(t)||this.keysPressed.add(t),this.keysDown.add(t)):this.keysDown.delete(t)}setVirtualMouseButton(t,e){e?(this.mouseButtonsDown.has(t)||this.mouseButtonsPressed.add(t),this.mouseButtonsDown.add(t)):this.mouseButtonsDown.delete(t)}injectKeyPress(t){this.keysPressed.add(t)}injectMouseDown(t){this.setVirtualMouseButton(t,!0)}injectMouseUp(t){this.setVirtualMouseButton(t,!1)}isKeyDown(t){return this.keysDown.has(t)}wasKeyPressed(t){return this.keysPressed.has(t)}isMouseDown(t){return this.mouseButtonsDown.has(t)}wasMousePressed(t){return this.mouseButtonsPressed.has(t)}getMoveAxes(){const t=this.settings.data.keybinds;let e=this.touchMoveX,n=this.touchMoveZ;(this.isKeyDown(t.forward)||this.isKeyDown("ArrowUp"))&&(n+=1),(this.isKeyDown(t.backward)||this.isKeyDown("ArrowDown"))&&(n-=1),(this.isKeyDown(t.right)||this.isKeyDown("ArrowRight"))&&(e+=1),(this.isKeyDown(t.left)||this.isKeyDown("ArrowLeft"))&&(e-=1);const i=Math.hypot(e,n);return i>1&&(e/=i,n/=i),{x:e,z:n}}isSprinting(){const t=this.settings.data.keybinds;return this.isKeyDown(t.sprint)||this.isKeyDown("ShiftRight")||this.touchSprintActive}isCrouching(){const t=this.settings.data.keybinds;return this.isKeyDown(t.crouch)||this.isKeyDown("ControlLeft")||this.touchCrouchToggled}getLeanTarget(){return this.isKeyDown("KeyQ")?-1:this.isKeyDown("KeyE")?1:this.touchLeanState}wasJumpPressed(){const t=this.wasKeyPressed(this.settings.data.keybinds.jump);return t&&this.touchCrouchToggled&&(this.touchCrouchToggled=!1),t}isJumpHeld(){return this.isKeyDown(this.settings.data.keybinds.jump)}isAdsHeld(){return this.isMouseDown(2)||this.isKeyDown("KeyV")||this.touchAdsToggled}isScoreboardShown(){return this.isKeyDown("Tab")||this.touchScoreboardOpen}isFireHeld(){return this.isMouseDown(0)}wasFirePressed(){return this.wasMousePressed(0)}wasReloadPressed(){return this.wasKeyPressed(this.settings.data.keybinds.reload)}wasFireModePressed(){return this.wasKeyPressed(this.settings.data.keybinds.fireMode)}wasInspectPressed(){return this.wasKeyPressed(this.settings.data.keybinds.inspect)}wasTacticalPressed(){return this.wasKeyPressed(this.settings.data.keybinds.tactical)}wasExplosivePressed(){return this.wasKeyPressed(this.settings.data.keybinds.explosive)}wasPausePressed(){return this.wasKeyPressed(this.settings.data.keybinds.pause)||this.wasKeyPressed("KeyP")}endFrame(){this.keysPressed.clear(),this.mouseButtonsPressed.clear()}}class Ve{static FIXED_DT=1/120;static MAX_ACCUMULATOR=1/12;static MAX_SUBSTEPS=5;accumulator=0;lastTime=0;running=!1;rafId=0;fixedStepFn;renderStepFn;frameHistory=new Float32Array(240);historyIndex=0;historyCount=0;sortScratch=new Float32Array(240);telemetry={fps:60,frameTimeMs:16.67,avgFrameTimeMs:16.67,p95FrameTimeMs:16.67,worstFrameTimeMs:16.67,physicsTimeMs:0,renderTimeMs:0,substeps:1};constructor(t,e){this.fixedStepFn=t,this.renderStepFn=e}start(){this.running||(this.running=!0,this.lastTime=performance.now(),this.rafId=requestAnimationFrame(this.tick))}stop(){this.running=!1,this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=0)}resetTimingHistory(){this.historyIndex=0,this.historyCount=0}stepDeterministic(t,e=!1){const n=Math.max(1,Math.round(t/Ve.FIXED_DT));for(let i=0;i<n;i++){const s=performance.now();if(this.fixedStepFn(Ve.FIXED_DT),this.telemetry.physicsTimeMs=performance.now()-s,e||i===n-1){const o=performance.now();this.renderStepFn(1,Ve.FIXED_DT),this.telemetry.renderTimeMs=performance.now()-o,this.recordFrameTime(this.telemetry.physicsTimeMs+this.telemetry.renderTimeMs)}}}tick=t=>{if(!this.running)return;this.rafId=requestAnimationFrame(this.tick);const e=Math.max(.1,t-this.lastTime);this.lastTime=t,e<250&&this.recordFrameTime(e);const n=Math.min(e*.001,Ve.MAX_ACCUMULATOR);this.accumulator+=n;const i=performance.now();let s=0;for(;this.accumulator>=Ve.FIXED_DT&&s<Ve.MAX_SUBSTEPS;)this.fixedStepFn(Ve.FIXED_DT),this.accumulator-=Ve.FIXED_DT,s++;s>=Ve.MAX_SUBSTEPS&&(this.accumulator=Math.min(this.accumulator,Ve.FIXED_DT)),this.telemetry.physicsTimeMs=performance.now()-i,this.telemetry.substeps=s;const o=Math.max(0,Math.min(1,this.accumulator/Ve.FIXED_DT)),a=performance.now();this.renderStepFn(o,n),this.telemetry.renderTimeMs=performance.now()-a};recordFrameTime(t){this.frameHistory[this.historyIndex]=t,this.historyIndex=(this.historyIndex+1)%this.frameHistory.length,this.historyCount<this.frameHistory.length&&this.historyCount++;let e=0,n=0;for(let s=0;s<this.historyCount;s++){const o=this.frameHistory[s];e+=o,o>n&&(n=o),this.sortScratch[s]=o}const i=e/this.historyCount;if(this.telemetry.frameTimeMs=t,this.telemetry.avgFrameTimeMs=i,this.historyCount<30||this.historyIndex%15===0){const s=this.sortScratch.subarray(0,this.historyCount);s.sort();const o=Math.min(this.historyCount-1,Math.floor(this.historyCount*.95));this.telemetry.p95FrameTimeMs=s[o]}this.telemetry.worstFrameTimeMs=n,this.telemetry.fps=1e3/Math.max(1,i)}}var rt=(r=>(r[r.CONCRETE=0]="CONCRETE",r[r.PLASTER=1]="PLASTER",r[r.BRICK=2]="BRICK",r[r.METAL=3]="METAL",r[r.WOOD=4]="WOOD",r[r.CLOTH=5]="CLOTH",r[r.ROAD=6]="ROAD",r[r.GLASS=7]="GLASS",r[r.SANDBAG=8]="SANDBAG",r[r.DIRT=9]="DIRT",r[r.TILE=10]="TILE",r[r.FOLIAGE=11]="FOLIAGE",r))(rt||{});const Ln=8,S0=6;class M0{triCount=0;verts;normals;triBounds;centroids;materialIds;thicknesses;triIndices;nodeBounds;nodeLeftFirst;nodeCount;nodeUsed=0;pendingInputs=[];traversalStack=new Int32Array(128);_v0=new S;_v1=new S;_v2=new S;_e1=new S;_e2=new S;_p=new S;_t=new S;_q=new S;_closest=new S;_segPt=new S;_diff=new S;addTriangle(t,e,n,i=0,s=.35){this.pendingInputs.push({v0:t.clone(),v1:e.clone(),v2:n.clone(),materialId:i,thickness:s})}addBox(t,e,n=0,i=0,s){const o=e.x*.5,a=e.y*.5,l=e.z*.5,c=s??Math.min(e.x,e.y,e.z),h=Math.cos(i),u=Math.sin(i),d=[],f=[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]];for(const[v,p,m]of f){const y=v*o,_=p*a,x=m*l,w=y*h+x*u+t.x,T=_+t.y,R=-y*u+x*h+t.z;d.push(new S(w,T,R))}const g=[[0,2,1],[0,3,2],[4,5,6],[4,6,7],[0,4,7],[0,7,3],[1,2,6],[1,6,5],[3,7,6],[3,6,2],[0,1,5],[0,5,4]];for(const[v,p,m]of g)this.addTriangle(d[v],d[p],d[m],n,c)}addMesh(t,e,n=0,i=.25){const s=t.getAttribute("position");if(!s)return;const o=t.getIndex(),a=new S,l=new S,c=new S;if(o)for(let h=0;h<o.count;h+=3)a.fromBufferAttribute(s,o.getX(h)).applyMatrix4(e),l.fromBufferAttribute(s,o.getX(h+1)).applyMatrix4(e),c.fromBufferAttribute(s,o.getX(h+2)).applyMatrix4(e),this.addTriangle(a,l,c,n,i);else for(let h=0;h<s.count;h+=3)a.fromBufferAttribute(s,h).applyMatrix4(e),l.fromBufferAttribute(s,h+1).applyMatrix4(e),c.fromBufferAttribute(s,h+2).applyMatrix4(e),this.addTriangle(a,l,c,n,i)}build(){const t=this.pendingInputs.length;this.triCount=t,this.verts=new Float32Array(t*9),this.normals=new Float32Array(t*3),this.triBounds=new Float32Array(t*6),this.centroids=new Float32Array(t*3),this.materialIds=new Uint8Array(t),this.thicknesses=new Float32Array(t),this.triIndices=new Int32Array(t);const e=new S,n=new S,i=new S;for(let o=0;o<t;o++){const a=this.pendingInputs[o],l=a.v0,c=a.v1,h=a.v2,u=o*9;this.verts[u]=l.x,this.verts[u+1]=l.y,this.verts[u+2]=l.z,this.verts[u+3]=c.x,this.verts[u+4]=c.y,this.verts[u+5]=c.z,this.verts[u+6]=h.x,this.verts[u+7]=h.y,this.verts[u+8]=h.z,e.subVectors(c,l),n.subVectors(h,l),i.crossVectors(e,n).normalize();const d=o*3;this.normals[d]=i.x,this.normals[d+1]=i.y,this.normals[d+2]=i.z;const f=o*6;this.triBounds[f]=Math.min(l.x,c.x,h.x),this.triBounds[f+1]=Math.min(l.y,c.y,h.y),this.triBounds[f+2]=Math.min(l.z,c.z,h.z),this.triBounds[f+3]=Math.max(l.x,c.x,h.x),this.triBounds[f+4]=Math.max(l.y,c.y,h.y),this.triBounds[f+5]=Math.max(l.z,c.z,h.z),this.centroids[d]=(l.x+c.x+h.x)/3,this.centroids[d+1]=(l.y+c.y+h.y)/3,this.centroids[d+2]=(l.z+c.z+h.z)/3,this.materialIds[o]=a.materialId,this.thicknesses[o]=a.thickness??.35,this.triIndices[o]=o}const s=Math.max(4,t*2+4);this.nodeBounds=new Float32Array(s*6),this.nodeLeftFirst=new Int32Array(s),this.nodeCount=new Int32Array(s),this.nodeUsed=1,this.nodeLeftFirst[0]=0,this.nodeCount[0]=t,this.updateNodeBounds(0),t>0&&this.subdivide(0),this.pendingInputs=[]}updateNodeBounds(t){const e=this.nodeLeftFirst[t],n=this.nodeCount[t];let i=1/0,s=1/0,o=1/0,a=-1/0,l=-1/0,c=-1/0;for(let u=0;u<n;u++){const d=this.triIndices[e+u]*6;this.triBounds[d]<i&&(i=this.triBounds[d]),this.triBounds[d+1]<s&&(s=this.triBounds[d+1]),this.triBounds[d+2]<o&&(o=this.triBounds[d+2]),this.triBounds[d+3]>a&&(a=this.triBounds[d+3]),this.triBounds[d+4]>l&&(l=this.triBounds[d+4]),this.triBounds[d+5]>c&&(c=this.triBounds[d+5])}const h=t*6;this.nodeBounds[h]=i,this.nodeBounds[h+1]=s,this.nodeBounds[h+2]=o,this.nodeBounds[h+3]=a,this.nodeBounds[h+4]=l,this.nodeBounds[h+5]=c}surfaceArea(t,e,n,i,s,o){const a=Math.max(0,i-t),l=Math.max(0,s-e),c=Math.max(0,o-n);return a*l+l*c+c*a}subdivide(t){const e=this.nodeCount[t];if(e<=S0)return;const n=this.nodeLeftFirst[t],i=t*6,s=Math.max(1e-6,this.surfaceArea(this.nodeBounds[i],this.nodeBounds[i+1],this.nodeBounds[i+2],this.nodeBounds[i+3],this.nodeBounds[i+4],this.nodeBounds[i+5]));let o=-1,a=0,l=e;const c=new Int32Array(Ln),h=new Float32Array(Ln*6);for(let p=0;p<3;p++){let m=1/0,y=-1/0;for(let x=0;x<e;x++){const w=this.centroids[this.triIndices[n+x]*3+p];w<m&&(m=w),w>y&&(y=w)}if(y-m<1e-4)continue;for(let x=0;x<Ln;x++){c[x]=0;const w=x*6;h[w]=1/0,h[w+1]=1/0,h[w+2]=1/0,h[w+3]=-1/0,h[w+4]=-1/0,h[w+5]=-1/0}const _=Ln/(y-m);for(let x=0;x<e;x++){const w=this.triIndices[n+x],T=this.centroids[w*3+p],R=Math.min(Ln-1,Math.floor((T-m)*_));c[R]++;const A=R*6,M=w*6;this.triBounds[M]<h[A]&&(h[A]=this.triBounds[M]),this.triBounds[M+1]<h[A+1]&&(h[A+1]=this.triBounds[M+1]),this.triBounds[M+2]<h[A+2]&&(h[A+2]=this.triBounds[M+2]),this.triBounds[M+3]>h[A+3]&&(h[A+3]=this.triBounds[M+3]),this.triBounds[M+4]>h[A+4]&&(h[A+4]=this.triBounds[M+4]),this.triBounds[M+5]>h[A+5]&&(h[A+5]=this.triBounds[M+5])}for(let x=1;x<Ln;x++){let w=0,T=1/0,R=1/0,A=1/0,M=-1/0,E=-1/0,D=-1/0;for(let _t=0;_t<x;_t++){if(c[_t]===0)continue;w+=c[_t];const ot=_t*6;h[ot]<T&&(T=h[ot]),h[ot+1]<R&&(R=h[ot+1]),h[ot+2]<A&&(A=h[ot+2]),h[ot+3]>M&&(M=h[ot+3]),h[ot+4]>E&&(E=h[ot+4]),h[ot+5]>D&&(D=h[ot+5])}let I=0,N=1/0,V=1/0,B=1/0,G=-1/0,K=-1/0,k=-1/0;for(let _t=x;_t<Ln;_t++){if(c[_t]===0)continue;I+=c[_t];const ot=_t*6;h[ot]<N&&(N=h[ot]),h[ot+1]<V&&(V=h[ot+1]),h[ot+2]<B&&(B=h[ot+2]),h[ot+3]>G&&(G=h[ot+3]),h[ot+4]>K&&(K=h[ot+4]),h[ot+5]>k&&(k=h[ot+5])}if(w===0||I===0)continue;const et=this.surfaceArea(T,R,A,M,E,D),ht=this.surfaceArea(N,V,B,G,K,k),vt=.25+(et*w+ht*I)/s;vt<l&&(l=vt,o=p,a=m+x*((y-m)/Ln))}}if(o===-1)return;let u=n,d=n+e-1;for(;u<=d;)if(this.centroids[this.triIndices[u]*3+o]<a)u++;else{const p=this.triIndices[u];this.triIndices[u]=this.triIndices[d],this.triIndices[d]=p,d--}const f=u-n;if(f===0||f===e)return;const g=this.nodeUsed++,v=this.nodeUsed++;this.nodeLeftFirst[g]=n,this.nodeCount[g]=f,this.nodeLeftFirst[v]=u,this.nodeCount[v]=e-f,this.nodeLeftFirst[t]=g,this.nodeCount[t]=0,this.updateNodeBounds(g),this.updateNodeBounds(v),this.subdivide(g),this.subdivide(v)}intersectAABB(t,e,n,i,s,o,a,l){const c=t*6,h=(this.nodeBounds[c]-e)*s,u=(this.nodeBounds[c+3]-e)*s;let d=Math.min(h,u),f=Math.max(h,u);const g=(this.nodeBounds[c+1]-n)*o,v=(this.nodeBounds[c+4]-n)*o;d=Math.max(d,Math.min(g,v)),f=Math.min(f,Math.max(g,v));const p=(this.nodeBounds[c+2]-i)*a,m=(this.nodeBounds[c+5]-i)*a;return d=Math.max(d,Math.min(p,m)),f=Math.min(f,Math.max(p,m)),f>=Math.max(0,d)&&d<l?Math.max(0,d):1/0}raycast(t,e,n=500,i){const s=i??{hit:!1,distance:n,point:new S,normal:new S(0,1,0),triangleIndex:-1,materialId:0,thickness:.35};if(s.hit=!1,s.distance=n,s.triangleIndex=-1,this.triCount===0)return s;const o=t.x,a=t.y,l=t.z,c=Math.abs(e.x)>1e-8?1/e.x:1e8,h=Math.abs(e.y)>1e-8?1/e.y:1e8,u=Math.abs(e.z)>1e-8?1/e.z:1e8;let d=0;for(this.traversalStack[d++]=0;d>0;){const f=this.traversalStack[--d];if(this.intersectAABB(f,o,a,l,c,h,u,s.distance)===1/0)continue;const g=this.nodeCount[f];if(g>0){const v=this.nodeLeftFirst[f];for(let p=0;p<g;p++){const m=this.triIndices[v+p],y=this.rayTriangleIntersect(t,e,m,s.distance);if(y>1e-5&&y<s.distance){s.hit=!0,s.distance=y,s.triangleIndex=m,s.materialId=this.materialIds[m],s.thickness=this.thicknesses[m];const _=m*3;s.normal.set(this.normals[_],this.normals[_+1],this.normals[_+2]),s.normal.dot(e)>0&&s.normal.negate()}}}else{const v=this.nodeLeftFirst[f],p=v+1,m=this.intersectAABB(v,o,a,l,c,h,u,s.distance),y=this.intersectAABB(p,o,a,l,c,h,u,s.distance);m<y?(y<1/0&&(this.traversalStack[d++]=p),m<1/0&&(this.traversalStack[d++]=v)):(m<1/0&&(this.traversalStack[d++]=v),y<1/0&&(this.traversalStack[d++]=p))}}return s.hit&&s.point.copy(t).addScaledVector(e,s.distance),s}raycastAll(t,e,n){const i=[];if(this.triCount===0)return i;const s=t.x,o=t.y,a=t.z,l=Math.abs(e.x)>1e-8?1/e.x:1e8,c=Math.abs(e.y)>1e-8?1/e.y:1e8,h=Math.abs(e.z)>1e-8?1/e.z:1e8;let u=0;for(this.traversalStack[u++]=0;u>0;){const d=this.traversalStack[--u];if(this.intersectAABB(d,s,o,a,l,c,h,n)===1/0)continue;const f=this.nodeCount[d];if(f>0){const g=this.nodeLeftFirst[d];for(let v=0;v<f;v++){const p=this.triIndices[g+v],m=this.rayTriangleIntersect(t,e,p,n);if(m>1e-4&&m<n){const y=p*3,_=new S(this.normals[y],this.normals[y+1],this.normals[y+2]);_.dot(e)>0&&_.negate(),i.push({hit:!0,distance:m,point:t.clone().addScaledVector(e,m),normal:_,triangleIndex:p,materialId:this.materialIds[p],thickness:this.thicknesses[p]})}}}else{const g=this.nodeLeftFirst[d];this.traversalStack[u++]=g+1,this.traversalStack[u++]=g}}return i.sort((d,f)=>d.distance-f.distance),i}segmentCast(t,e,n){this._diff.subVectors(e,t);const i=this._diff.length();if(i<1e-6){const s=n??{hit:!1,distance:0,point:t.clone(),normal:new S(0,1,0),triangleIndex:-1,materialId:0,thickness:.35};return s.hit=!1,s}return this._diff.multiplyScalar(1/i),this.raycast(t,this._diff,i,n)}rayTriangleIntersect(t,e,n,i){const s=n*9;this._v0.set(this.verts[s],this.verts[s+1],this.verts[s+2]),this._v1.set(this.verts[s+3],this.verts[s+4],this.verts[s+5]),this._v2.set(this.verts[s+6],this.verts[s+7],this.verts[s+8]),this._e1.subVectors(this._v1,this._v0),this._e2.subVectors(this._v2,this._v0),this._p.crossVectors(e,this._e2);const o=this._e1.dot(this._p);if(Math.abs(o)<1e-8)return 1/0;const a=1/o;this._t.subVectors(t,this._v0);const l=this._t.dot(this._p)*a;if(l<0||l>1)return 1/0;this._q.crossVectors(this._t,this._e1);const c=e.dot(this._q)*a;if(c<0||l+c>1)return 1/0;const h=this._e2.dot(this._q)*a;return h>1e-5&&h<i?h:1/0}overlapAABB(t,e,n,i,s,o,a){if(a.length=0,this.triCount===0)return;let l=0;for(this.traversalStack[l++]=0;l>0;){const c=this.traversalStack[--l],h=c*6;if(this.nodeBounds[h]>i||this.nodeBounds[h+3]<t||this.nodeBounds[h+1]>s||this.nodeBounds[h+4]<e||this.nodeBounds[h+2]>o||this.nodeBounds[h+5]<n)continue;const u=this.nodeCount[c];if(u>0){const d=this.nodeLeftFirst[c];for(let f=0;f<u;f++){const g=this.triIndices[d+f],v=g*6;this.triBounds[v]<=i&&this.triBounds[v+3]>=t&&this.triBounds[v+1]<=s&&this.triBounds[v+4]>=e&&this.triBounds[v+2]<=o&&this.triBounds[v+5]>=n&&a.push(g)}}else{const d=this.nodeLeftFirst[c];this.traversalStack[l++]=d+1,this.traversalStack[l++]=d}}}overlapSphere(t,e,n){this.overlapAABB(t.x-e,t.y-e,t.z-e,t.x+e,t.y+e,t.z+e,n)}closestPointOnTriangle(t,e,n){const i=e*9,s=this.verts[i],o=this.verts[i+1],a=this.verts[i+2],l=this.verts[i+3],c=this.verts[i+4],h=this.verts[i+5],u=this.verts[i+6],d=this.verts[i+7],f=this.verts[i+8],g=l-s,v=c-o,p=h-a,m=u-s,y=d-o,_=f-a,x=t.x-s,w=t.y-o,T=t.z-a,R=g*x+v*w+p*T,A=m*x+y*w+_*T;if(R<=0&&A<=0)return n.set(s,o,a);const M=t.x-l,E=t.y-c,D=t.z-h,I=g*M+v*E+p*D,N=m*M+y*E+_*D;if(I>=0&&N<=I)return n.set(l,c,h);const V=R*N-I*A;if(V<=0&&R>=0&&I<=0){const Gt=R/(R-I);return n.set(s+Gt*g,o+Gt*v,a+Gt*p)}const B=t.x-u,G=t.y-d,K=t.z-f,k=g*B+v*G+p*K,et=m*B+y*G+_*K;if(et>=0&&k<=et)return n.set(u,d,f);const ht=k*A-R*et;if(ht<=0&&A>=0&&et<=0){const Gt=A/(A-et);return n.set(s+Gt*m,o+Gt*y,a+Gt*_)}const vt=I*et-k*N;if(vt<=0&&N-I>=0&&k-et>=0){const Gt=(N-I)/(N-I+(k-et));return n.set(l+Gt*(u-l),c+Gt*(d-c),h+Gt*(f-h))}const _t=1/(vt+ht+V),ot=ht*_t,Vt=V*_t;return n.set(s+g*ot+m*Vt,o+v*ot+y*Vt,a+p*ot+_*Vt)}closestPoint(t,e,n,i){const s=[];this.overlapSphere(t,e,s);let o=e*e,a=-1;for(let l=0;l<s.length;l++){const c=s[l];this.closestPointOnTriangle(t,c,this._closest);const h=t.distanceToSquared(this._closest);if(h<o&&(o=h,a=c,n&&n.copy(this._closest),i)){this._diff.subVectors(t,this._closest);const u=Math.sqrt(h);if(u>1e-5)i.copy(this._diff).multiplyScalar(1/u);else{const d=c*3;i.set(this.normals[d],this.normals[d+1],this.normals[d+2])}}}return{found:a!==-1,distanceSq:o,triangleIndex:a,materialId:a!==-1?this.materialIds[a]:0}}sphereCast(t,e,n,i,s){const o=s??{hit:!1,toi:1,point:new S,normal:new S(0,1,0),triangleIndex:-1,materialId:0};o.hit=!1,o.toi=1,o.triangleIndex=-1;const a=t.x+e.x*i,l=t.y+e.y*i,c=t.z+e.z*i,h=Math.min(t.x,a)-n,u=Math.min(t.y,l)-n,d=Math.min(t.z,c)-n,f=Math.max(t.x,a)+n,g=Math.max(t.y,l)+n,v=Math.max(t.z,c)+n,p=[];if(this.overlapAABB(h,u,d,f,g,v,p),p.length===0)return o;const m=Math.max(2,Math.ceil(i/(n*.45)));for(let y=1;y<=m;y++){const _=y/m;this._segPt.set(t.x+e.x*i*_,t.y+e.y*i*_,t.z+e.z*i*_);for(let x=0;x<p.length;x++){const w=p[x];if(this.closestPointOnTriangle(this._segPt,w,this._closest),this._segPt.distanceToSquared(this._closest)<n*n){o.hit=!0,o.toi=(y-1)/m,o.point.copy(this._closest),this._diff.subVectors(this._segPt,this._closest);const R=this._diff.length();if(R>1e-5)o.normal.copy(this._diff).multiplyScalar(1/R);else{const A=w*3;o.normal.set(this.normals[A],this.normals[A+1],this.normals[A+2])}return o.triangleIndex=w,o.materialId=this.materialIds[w],o}}}return o}createDebugMesh(){const t=[],e=[],n=Math.min(this.nodeUsed,512);for(let o=0;o<n;o++){if(this.nodeCount[o]===0&&o>64)continue;const a=o*6,l=this.nodeBounds[a],c=this.nodeBounds[a+1],h=this.nodeBounds[a+2],u=this.nodeBounds[a+3],d=this.nodeBounds[a+4],f=this.nodeBounds[a+5],g=this.nodeCount[o]>0,v=g?.15:.9,p=g?.95:.5,m=g?.35:.1,y=[[l,c,h,u,c,h],[u,c,h,u,c,f],[u,c,f,l,c,f],[l,c,f,l,c,h],[l,d,h,u,d,h],[u,d,h,u,d,f],[u,d,f,l,d,f],[l,d,f,l,d,h],[l,c,h,l,d,h],[u,c,h,u,d,h],[u,c,f,u,d,f],[l,c,f,l,d,f]];for(const _ of y)t.push(_[0],_[1],_[2],_[3],_[4],_[5]),e.push(v,p,m,v,p,m)}const i=new ye;i.setAttribute("position",new te(t,3)),i.setAttribute("color",new te(e,3));const s=new Vo({vertexColors:!0,transparent:!0,opacity:.55});return new Hl(i,s)}}const w0=new kt().makeScale(0,0,0);class b0{bodies=[];nextId=1;casingPool=[];casingInstancedMesh;maxCasings=60;casingCursor=0;onCollisionSound;onThrowableDetonate;candidateTris=[];_closest=new S;_normal=new S;_relVel=new S;_tangent=new S;_mat4=new kt;_pos=new S;_quat=new Be;_scale=new S(1,1,1);_axis=new S;_dq=new Be;constructor(t,e=60){this.maxCasings=e,this.initCasingPool(t)}initCasingPool(t){const e=new he(.0048,.0052,.044,8,1,!1);e.rotateX(Math.PI*.5);const n=new ie({color:new $t(14067272),metalness:.88,roughness:.24});this.casingInstancedMesh=new Wi(e,n,this.maxCasings),this.casingInstancedMesh.instanceMatrix.setUsage(zs),this.casingInstancedMesh.castShadow=!1,this.casingInstancedMesh.receiveShadow=!0,this.casingInstancedMesh.frustumCulled=!1;const i=new kt().makeScale(0,0,0);for(let s=0;s<this.maxCasings;s++){this.casingInstancedMesh.setMatrixAt(s,i);const o={id:this.nextId++,active:!1,shape:"capsule",position:new S,prevPosition:new S,quaternion:new Be,prevQuaternion:new Be,velocity:new S,angularVelocity:new S,halfExtents:new S(.006,.022,.006),radius:.022,mass:.012,invMass:1/.012,invInertia:1/5e-4,restitution:.48,friction:.35,materialId:rt.METAL,useCCD:!0,sleeping:!0,sleepTimer:0,age:0,maxLifetime:6.5,isCasing:!0,isThrowable:!1,bounceCount:0};this.casingPool.push(o),this.bodies.push(o)}this.casingInstancedMesh.instanceMatrix.needsUpdate=!0,t.add(this.casingInstancedMesh)}spawnCasing(t,e,n){const i=this.casingPool[this.casingCursor];this.casingCursor=(this.casingCursor+1)%this.maxCasings,i.active=!0,i.sleeping=!1,i.sleepTimer=0,i.age=0,i.bounceCount=0,i.position.copy(t),i.prevPosition.copy(t),i.quaternion.identity(),i.prevQuaternion.identity(),i.velocity.copy(e),i.angularVelocity.copy(n)}addReactiveProp(t,e,n,i,s,o=.28,a=.58){t.userData.dynamic=!0,t.updateMatrixWorld(!0);const l=new S,c=new Be;t.getWorldPosition(l),t.getWorldQuaternion(c);const h=e==="sphere"?n.x:Math.max(n.x,n.y,n.z),u=i>0?1/i:0,d=i*(2/5)*h*h,f={id:this.nextId++,active:!0,shape:e,position:l.clone(),prevPosition:l.clone(),quaternion:c.clone(),prevQuaternion:c.clone(),velocity:new S,angularVelocity:new S,halfExtents:n.clone(),radius:h,mass:i,invMass:u,invInertia:d>0?1/d:0,restitution:o,friction:a,materialId:s,useCCD:!1,sleeping:!0,sleepTimer:1,age:0,maxLifetime:0,isCasing:!1,isThrowable:!1,mesh:t,bounceCount:0};return this.bodies.push(f),f}spawnThrowable(t,e,n,i,s=2.4){const l={id:this.nextId++,active:!0,shape:"sphere",position:e.clone(),prevPosition:e.clone(),quaternion:new Be,prevQuaternion:new Be,velocity:n.clone(),angularVelocity:new S(6,2.5,-4),halfExtents:new S(.065,.065,.065),radius:.065,mass:.42,invMass:2.380952380952381,invInertia:1408.8475626937163,restitution:.42,friction:.5,materialId:rt.METAL,useCCD:!0,sleeping:!1,sleepTimer:0,age:0,maxLifetime:s,isCasing:!1,isThrowable:!0,throwableType:i,mesh:t,bounceCount:0};return this.bodies.push(l),l}applyImpulseAtPoint(t,e,n){if(!t.active||t.invMass===0)return;t.sleeping=!1,t.sleepTimer=0,t.velocity.addScaledVector(e,t.invMass);const i=n.x-t.position.x,s=n.y-t.position.y,o=n.z-t.position.z,a=s*e.z-o*e.y,l=o*e.x-i*e.z,c=i*e.y-s*e.x;t.angularVelocity.x+=a*t.invInertia*.25,t.angularVelocity.y+=l*t.invInertia*.25,t.angularVelocity.z+=c*t.invInertia*.25}applyExplosionImpulse(t,e,n){for(let i=0;i<this.bodies.length;i++){const s=this.bodies[i];if(!s.active||s.invMass===0||s.isCasing)continue;const o=s.position.x-t.x,a=s.position.y-t.y+.25,l=s.position.z-t.z,c=Math.hypot(o,a,l);if(c<e&&c>1e-4){const h=1-c/e,u=n*h*h;s.sleeping=!1,s.sleepTimer=0,s.velocity.x+=o/c*u*s.invMass,s.velocity.y+=(a/c+.35)*u*s.invMass,s.velocity.z+=l/c*u*s.invMass,s.angularVelocity.set(l/c*6*h,2*h,-(o/c)*6*h)}}}raycastDynamic(t,e,n){let i=null,s=n;const o=new S,a=new S(0,1,0);for(let l=0;l<this.bodies.length;l++){const c=this.bodies[l];if(!c.active||c.isCasing)continue;const h=t.x-c.position.x,u=t.y-c.position.y,d=t.z-c.position.z,f=h*e.x+u*e.y+d*e.z,g=h*h+u*u+d*d-c.radius*c.radius,v=f*f-g;if(v<0)continue;const p=-f-Math.sqrt(v);p>.01&&p<s&&(s=p,i=c,o.copy(t).addScaledVector(e,p),a.subVectors(o,c.position).normalize())}return{body:i,distance:s,point:o,normal:a}}step(t,e){const n=this.bodies.length;for(let i=0;i<n;i++){const s=this.bodies[i];if(!s.active)continue;if(s.prevPosition.copy(s.position),s.prevQuaternion.copy(s.quaternion),s.maxLifetime>0&&(s.age+=t,s.age>=s.maxLifetime)){s.active=!1,s.isThrowable&&s.throwableType&&this.onThrowableDetonate&&this.onThrowableDetonate(s.position.clone(),s.throwableType),s.mesh&&s.isThrowable&&s.mesh.parent&&s.mesh.parent.remove(s.mesh);continue}if(s.sleeping)continue;s.velocity.y-=18.5*t,s.velocity.multiplyScalar(Math.max(0,1-.35*t)),s.angularVelocity.multiplyScalar(Math.max(0,1-1.2*t));const o=s.velocity.length()*t;if(s.useCCD&&o>s.radius*.75){this._normal.copy(s.velocity).normalize();const h=e.raycast(s.position,this._normal,o+s.radius);h.hit?(s.position.copy(h.point).addScaledVector(h.normal,s.radius+.002),this.resolveContactImpulse(s,h.normal,h.materialId)):s.position.addScaledVector(s.velocity,t)}else s.position.addScaledVector(s.velocity,t);const a=s.angularVelocity.length();a>1e-4&&(this._axis.copy(s.angularVelocity).multiplyScalar(1/a),this._dq.setFromAxisAngle(this._axis,a*t),s.quaternion.premultiply(this._dq).normalize()),this.collideWithBVH(s,e);const l=s.velocity.lengthSq(),c=s.angularVelocity.lengthSq();l<.025&&c<.08&&!s.isThrowable?(s.sleepTimer+=t,s.sleepTimer>.35&&(s.sleeping=!0,s.velocity.set(0,0,0),s.angularVelocity.set(0,0,0))):s.sleepTimer=0}for(let i=0;i<n;i++){const s=this.bodies[i];if(!(!s.active||s.isCasing))for(let o=i+1;o<n;o++){const a=this.bodies[o];if(!a.active||a.isCasing||s.sleeping&&a.sleeping)continue;const l=a.position.x-s.position.x,c=a.position.y-s.position.y,h=a.position.z-s.position.z,u=s.radius+a.radius,d=l*l+c*c+h*h;if(d<u*u&&d>1e-8){const f=Math.sqrt(d),g=u-f;this._normal.set(l/f,c/f,h/f);const v=s.invMass+a.invMass;if(v>0){s.position.addScaledVector(this._normal,-g*(s.invMass/v)),a.position.addScaledVector(this._normal,g*(a.invMass/v)),this._relVel.subVectors(a.velocity,s.velocity);const p=this._relVel.dot(this._normal);if(p<0){const y=-(1+Math.min(s.restitution,a.restitution))*p/v;s.velocity.addScaledVector(this._normal,-y*s.invMass),a.velocity.addScaledVector(this._normal,y*a.invMass),s.sleeping=!1,a.sleeping=!1}}}}}}collideWithBVH(t,e){const n=t.shape==="box"?t.halfExtents.y:t.radius;e.overlapAABB(t.position.x-n-.05,t.position.y-n-.05,t.position.z-n-.05,t.position.x+n+.05,t.position.y+n+.05,t.position.z+n+.05,this.candidateTris);for(let i=0;i<this.candidateTris.length;i++){const s=this.candidateTris[i];e.closestPointOnTriangle(t.position,s,this._closest),this._normal.subVectors(t.position,this._closest);const o=this._normal.lengthSq();if(o<n*n&&o>1e-10){const a=Math.sqrt(o),l=n-a;this._normal.multiplyScalar(1/a),t.position.addScaledVector(this._normal,l),this.resolveContactImpulse(t,this._normal,e.materialIds[s])}}t.position.y<n&&(t.position.y=n,this._normal.set(0,1,0),this.resolveContactImpulse(t,this._normal,rt.ROAD))}resolveContactImpulse(t,e,n){const i=t.velocity.dot(e);if(i>=0)return;const s=-i,a=-(1+(s>.45?t.restitution:0))*i;t.velocity.addScaledVector(e,a),this._tangent.copy(t.velocity).addScaledVector(e,-t.velocity.dot(e));const l=this._tangent.length();if(l>1e-5){this._tangent.multiplyScalar(1/l);const c=Math.min(l,a*t.friction);t.velocity.addScaledVector(this._tangent,-c)}t.isCasing?t.angularVelocity.multiplyScalar(.65):t.angularVelocity.multiplyScalar(.75),s>.65&&t.bounceCount<4&&(t.bounceCount++,this.onCollisionSound&&this.onCollisionSound(t.position,s,t.materialId,n,t.isCasing))}syncRenderTransforms(t){const e=w0;let n=!1;for(let i=0;i<this.casingPool.length;i++){const s=this.casingPool[i];if(!s.active){this.casingInstancedMesh.setMatrixAt(i,e),n=!0;continue}this._pos.lerpVectors(s.prevPosition,s.position,t),this._quat.slerpQuaternions(s.prevQuaternion,s.quaternion,t),this._scale.set(1,1,1),this._mat4.compose(this._pos,this._quat,this._scale),this.casingInstancedMesh.setMatrixAt(i,this._mat4),n=!0}n&&(this.casingInstancedMesh.instanceMatrix.needsUpdate=!0);for(let i=0;i<this.bodies.length;i++){const s=this.bodies[i];!s.active||s.isCasing||!s.mesh||(s.mesh.position.lerpVectors(s.prevPosition,s.position,t),s.mesh.quaternion.slerpQuaternions(s.prevQuaternion,s.quaternion,t))}}getActiveCount(){let t=0;for(let e=0;e<this.bodies.length;e++)this.bodies[e].active&&!this.bodies[e].sleeping&&t++;return t}}class T0{sharedUniforms;textures=new Map;materials=new Map;rng;constructor(t=1337420){this.rng=new xe(t),this.sharedUniforms={uTime:{value:0},uSunDir:{value:new S(-.62,.64,-.45).normalize()},uCloudWindOffset:{value:new j(0,0)},uCsmMatrix0:{value:new kt},uCsmMatrix1:{value:new kt},uCsmMatrix2:{value:new kt},uCsmMatrix3:{value:new kt},uCsmSplits:{value:new oe(16,38,78,160)},uCsmDepthTex0:{value:null},uCsmDepthTex1:{value:null},uCsmDepthTex2:{value:null},uCsmDepthTex3:{value:null},uCsmEnabled:{value:0},uDebugCascades:{value:0}},this.generateCoreTextures(),this.buildCoreMaterials()}generateSurfaceSet(t,e,n){const i=e*e,s=new Uint8Array(i*4),o=new Uint8Array(i*4),a=new Uint8Array(i*4),l=new Float32Array(i);for(let u=0;u<e;u++){const d=u/e;for(let f=0;f<e;f++){const g=f/e,v=u*e+f,p=n(g,d);l[v]=p.height;const m=v*4;s[m]=Math.max(0,Math.min(255,Math.round(p.r*255))),s[m+1]=Math.max(0,Math.min(255,Math.round(p.g*255))),s[m+2]=Math.max(0,Math.min(255,Math.round(p.b*255))),s[m+3]=255;const y=Math.max(10,Math.min(255,Math.round(p.rough*255)));o[m]=y,o[m+1]=y,o[m+2]=y,o[m+3]=255}}for(let u=0;u<e;u++){const d=(u-1+e)%e,f=(u+1)%e;for(let g=0;g<e;g++){const v=(g-1+e)%e,p=(g+1)%e,m=l[u*e+v],y=l[u*e+p],_=l[d*e+g],x=l[f*e+g],w=(m-y)*3.2,T=(_-x)*3.2,R=1,A=1/Math.hypot(w,T,R),M=(u*e+g)*4;a[M]=Math.round((w*A*.5+.5)*255),a[M+1]=Math.round((T*A*.5+.5)*255),a[M+2]=Math.round((R*A*.5+.5)*255),a[M+3]=255}}const c=(u,d)=>{const f=new Qi(u,e,e,me);return f.wrapS=Yi,f.wrapT=Yi,f.magFilter=ue,f.minFilter=In,f.generateMipmaps=!0,f.colorSpace=d?Ke:wn,f.needsUpdate=!0,f},h={albedo:c(s,!0),normal:c(a,!1),roughness:c(o,!1)};return this.textures.set(t,h),h}tileFbm(t,e,n,i,s){const o=t*n+13.7,a=e*n+29.3,l=n,c=xe.fbm2D(o,a,i,s),h=xe.fbm2D(o-l,a,i,s),u=xe.fbm2D(o,a-l,i,s),d=xe.fbm2D(o-l,a-l,i,s),f=t*t*(3-2*t),g=e*e*(3-2*e),v=c*(1-f)+h*f,p=u*(1-f)+d*f;return v*(1-g)+p*g}generateCoreTextures(){this.generateSurfaceSet("plaster",128,(t,e)=>{const n=this.tileFbm(t,e,2.5,3,101),i=this.tileFbm(t,e,6.5,4,202),s=xe.hash2D(t*128,e*128,303),o=Math.abs(i-.48)<.012?.88:1,a=n<.28?.92:1,l=.95+.05*Math.sin(t*Math.PI*6+i*1.8),c=(.86+(n-.5)*.12+(s-.5)*.03)*a*l*o;return{r:c*.97,g:c*.91,b:c*.8,height:n*.45+i*.35+s*.08-(1-o)*.2,rough:.82+(1-a)*.1+(s-.5)*.06}}),this.generateSurfaceSet("road",128,(t,e)=>{const n=this.tileFbm(t,e,2.5,3,404),i=this.tileFbm(t,e,9,4,505),s=xe.hash2D(t*128,e*128,606),o=Math.max(0,Math.min(1,(n-.54)*3.2)),a=Math.abs(i-.5)<.014?.55:1,l=(.25+(s-.5)*.08)*a,c=(.24+(s-.5)*.07)*a,h=(.23+(s-.5)*.07)*a;return{r:Kt.lerp(l,.68,o*.65),g:Kt.lerp(c,.59,o*.65),b:Kt.lerp(h,.45,o*.65),height:s*.4+i*.4-(1-a)*.6-o*.2,rough:Kt.lerp(.82,.94,o)+(s-.5)*.06}}),this.generateSurfaceSet("brick",128,(t,e)=>{const s=Math.floor(e*12),o=(t*6+s%2*.5)%1,a=e*12%1,l=o<.07||o>.93||a<.11||a>.89,c=xe.hash2D(Math.floor(t*6+s%2*.5),s,707),h=this.tileFbm(t,e,8,3,808);if(l)return{r:.66*(.9+h*.15),g:.61*(.9+h*.15),b:.53*(.9+h*.15),height:.2+h*.15,rough:.92};const u=.85+c*.3;return{r:.64*u*(.9+h*.2),g:.36*u*(.9+h*.2),b:.26*u*(.9+h*.2),height:.72+h*.22,rough:.8+(h-.5)*.1}}),this.generateSurfaceSet("concrete",128,(t,e)=>{const n=this.tileFbm(t,e,3,4,909),i=xe.hash2D(t*128,e*128,1010),s=.96+.04*Math.sin(e*Math.PI*16),o=(.58+(n-.5)*.16+(i-.5)*.06)*s;return{r:o*1.02,g:o*.98,b:o*.9,height:n*.5+(i>.88?.1:.45),rough:.84+(n-.5)*.1}}),this.generateSurfaceSet("wood",128,(t,e)=>{const n=Math.floor(e*6),i=e*6%1<.04?.55:1,s=this.tileFbm(t*.4,e*3.5+n*1.7,6,4,1111),o=.5+.5*Math.sin((t*3+s*1.4)*Math.PI*6),a=(.78+o*.22)*i;return{r:.48*a,g:.34*a,b:.21*a,height:o*.35+i*.4,rough:.76+(1-o)*.12}}),this.generateSurfaceSet("metal",128,(t,e)=>{const n=this.tileFbm(t,e,4,4,1212),i=xe.hash2D(t*128,e*32,1313),s=Math.max(0,Math.min(1,(n-.62)*4)),o=.42+(i-.5)*.06;return{r:Kt.lerp(o,.46,s),g:Kt.lerp(o*1.02,.27,s),b:Kt.lerp(o*1.04,.18,s),height:.5-s*.2+i*.1,rough:Kt.lerp(.38,.82,s)}}),this.generateSurfaceSet("cloth",128,(t,e)=>{const n=Math.sin(t*Math.PI*64),i=Math.sin(e*Math.PI*64),s=.5+.25*n+.25*i,o=.88+.12*Math.sin(t*Math.PI*6),a=this.tileFbm(t,e,3,3,1414),l=(.78+(s-.5)*.1-a*.12)*o;return{r:l,g:l*.95,b:l*.88,height:s*.4+o*.4,rough:.9}}),this.generateSurfaceSet("tile",128,(t,e)=>{const n=t*8%1,i=e*8%1,s=n<.06||i<.06,o=this.tileFbm(t,e,4,3,1515);if(s)return{r:.38,g:.35,b:.3,height:.15,rough:.9};const a=(Math.floor(t*8)+Math.floor(e*8))%2===0,l=a?.76:.34,c=a?.68:.46,h=a?.56:.52;return{r:l*(.85+o*.2),g:c*(.85+o*.2),b:h*(.85+o*.2),height:.75+o*.1,rough:.42+o*.25}})}applyWorldWeatheringAndCSM(t,e=1,n=0){const i=t.uuid;return t.customProgramCacheKey=()=>`world_pbr_${i}_w${e.toFixed(2)}_s${n.toFixed(2)}`,t.onBeforeCompile=s=>{s.uniforms.uTime=this.sharedUniforms.uTime,s.uniforms.uSunDir=this.sharedUniforms.uSunDir,s.uniforms.uCloudWindOffset=this.sharedUniforms.uCloudWindOffset,s.uniforms.uCsmMatrix0=this.sharedUniforms.uCsmMatrix0,s.uniforms.uCsmMatrix1=this.sharedUniforms.uCsmMatrix1,s.uniforms.uCsmMatrix2=this.sharedUniforms.uCsmMatrix2,s.uniforms.uCsmMatrix3=this.sharedUniforms.uCsmMatrix3,s.uniforms.uCsmSplits=this.sharedUniforms.uCsmSplits,s.uniforms.uCsmDepthTex0=this.sharedUniforms.uCsmDepthTex0,s.uniforms.uCsmDepthTex1=this.sharedUniforms.uCsmDepthTex1,s.uniforms.uCsmDepthTex2=this.sharedUniforms.uCsmDepthTex2,s.uniforms.uCsmDepthTex3=this.sharedUniforms.uCsmDepthTex3,s.uniforms.uCsmEnabled=this.sharedUniforms.uCsmEnabled,s.uniforms.uDebugCascades=this.sharedUniforms.uDebugCascades,s.uniforms.uWeatherStrength={value:e},s.uniforms.uWindSwayStrength={value:n},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
          uniform float uTime;
          uniform float uWindSwayStrength;
          varying vec3 vWorldPos;
          varying vec3 vWorldNormal;
          varying float vViewDepth;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          if (uWindSwayStrength > 0.001) {
            float swayPhase = position.x * 1.7 + position.z * 1.3 + uTime * 2.4;
            float flutter = sin(swayPhase * 2.3) * 0.35 + cos(swayPhase * 0.9) * 0.65;
            transformed.y += flutter * uWindSwayStrength * 0.08;
            transformed.x += sin(swayPhase) * uWindSwayStrength * 0.04;
          }`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
          vec4 wp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp;
          #endif
          wp = modelMatrix * wp;
          vWorldPos = wp.xyz;
          mat3 wnMat = mat3(modelMatrix);
          #ifdef USE_INSTANCING
            wnMat = wnMat * mat3(instanceMatrix);
          #endif
          vWorldNormal = normalize(wnMat * objectNormal);
          vViewDepth = -mvPosition.z;`),s.fragmentShader=s.fragmentShader.replace("#include <packing>",`#include <packing>
          uniform float uTime;
          uniform vec3 uSunDir;
          uniform vec2 uCloudWindOffset;
          uniform mat4 uCsmMatrix0;
          uniform mat4 uCsmMatrix1;
          uniform mat4 uCsmMatrix2;
          uniform mat4 uCsmMatrix3;
          uniform vec4 uCsmSplits;
          uniform sampler2D uCsmDepthTex0;
          uniform sampler2D uCsmDepthTex1;
          uniform sampler2D uCsmDepthTex2;
          uniform sampler2D uCsmDepthTex3;
          uniform float uCsmEnabled;
          uniform float uDebugCascades;
          uniform float uWeatherStrength;
          varying vec3 vWorldPos;
          varying vec3 vWorldNormal;
          varying float vViewDepth;

          float hash31(vec3 p) {
            p = fract(p * 0.1031);
            p += dot(p, p.yzx + 33.33);
            return fract((p.x + p.y) * p.z);
          }

          float worldNoise(vec3 x) {
            vec3 i = floor(x);
            vec3 f = fract(x);
            f = f * f * (3.0 - 2.0 * f);
            return mix(
              mix(mix(hash31(i + vec3(0,0,0)), hash31(i + vec3(1,0,0)), f.x),
                  mix(hash31(i + vec3(0,1,0)), hash31(i + vec3(1,1,0)), f.x), f.y),
              mix(mix(hash31(i + vec3(0,0,1)), hash31(i + vec3(1,0,1)), f.x),
                  mix(hash31(i + vec3(0,1,1)), hash31(i + vec3(1,1,1)), f.x), f.y), f.z
            );
          }

          float sampleCascadeDepth(int cascadeIdx, vec2 uv) {
            if (cascadeIdx == 0) return unpackRGBAToDepth(texture2D(uCsmDepthTex0, uv));
            if (cascadeIdx == 1) return unpackRGBAToDepth(texture2D(uCsmDepthTex1, uv));
            if (cascadeIdx == 2) return unpackRGBAToDepth(texture2D(uCsmDepthTex2, uv));
            return unpackRGBAToDepth(texture2D(uCsmDepthTex3, uv));
          }

          float sampleCascadePCF(int cascadeIdx, vec3 projCoords, float bias) {
            if (projCoords.x < 0.005 || projCoords.x > 0.995 || projCoords.y < 0.005 || projCoords.y > 0.995 || projCoords.z > 0.998 || projCoords.z < 0.001) {
              return 1.0;
            }
            float shadow = 0.0;
            vec2 texelSize = vec2(1.0 / 1536.0);
            vec2 offsets[9];
            offsets[0] = vec2(-1.0, -1.0);
            offsets[1] = vec2( 0.0, -1.0);
            offsets[2] = vec2( 1.0, -1.0);
            offsets[3] = vec2(-1.0,  0.0);
            offsets[4] = vec2( 0.0,  0.0);
            offsets[5] = vec2( 1.0,  0.0);
            offsets[6] = vec2(-1.0,  1.0);
            offsets[7] = vec2( 0.0,  1.0);
            offsets[8] = vec2( 1.0,  1.0);

            for (int i = 0; i < 9; i++) {
              float closestDepth = sampleCascadeDepth(cascadeIdx, projCoords.xy + offsets[i] * texelSize);
              shadow += (projCoords.z - bias > closestDepth) ? 0.0 : 1.0;
            }
            return shadow / 9.0;
          }

          bool inCascadeBox(vec3 p) {
            return max(abs(p.x - 0.5), abs(p.y - 0.5)) < 0.475 && p.z > 0.002 && p.z < 0.995;
          }

          float computeStabilizedCSM(vec3 worldPos, vec3 worldNorm, float viewDepth, out int outCascade) {
            vec4 biasedWorld = vec4(worldPos + worldNorm * 0.035, 1.0);
            vec3 p0 = (uCsmMatrix0 * biasedWorld).xyz * 0.5 + 0.5;
            vec3 p1 = (uCsmMatrix1 * biasedWorld).xyz * 0.5 + 0.5;
            vec3 p2 = (uCsmMatrix2 * biasedWorld).xyz * 0.5 + 0.5;
            vec3 p3 = (uCsmMatrix3 * biasedWorld).xyz * 0.5 + 0.5;

            vec3 proj = p3;
            outCascade = 3;
            float baseBias = 0.0020;

            if (inCascadeBox(p0)) {
              outCascade = 0;
              proj = p0;
              baseBias = 0.00065;
            } else if (inCascadeBox(p1)) {
              outCascade = 1;
              proj = p1;
              baseBias = 0.00105;
            } else if (inCascadeBox(p2)) {
              outCascade = 2;
              proj = p2;
              baseBias = 0.00150;
            }

            float ndotl = max(0.0, dot(worldNorm, uSunDir));
            float slopeBias = max(baseBias * (1.0 - ndotl) * 2.2, baseBias * 0.5);
            return sampleCascadePCF(outCascade, proj, slopeBias);
          }`).replace("#include <color_fragment>",`#include <color_fragment>
          if (uWeatherStrength > 0.01) {
            // Macro / Meso / Micro world-space variation (prevents repetition & UV stretching)
            float macroVar = worldNoise(vWorldPos * 0.14);
            float mesoVar = worldNoise(vWorldPos * 0.85);
            float microVar = worldNoise(vWorldPos * 4.5);

            // Ground basal grime & upward dust accumulation
            float groundGrime = smoothstep(1.35, 0.0, vWorldPos.y) * (0.5 + 0.5 * mesoVar);
            float upwardDust = smoothstep(0.45, 0.95, vWorldNormal.y) * (0.4 + 0.6 * macroVar);
            float waterStreak = smoothstep(0.2, 0.8, worldNoise(vec3(vWorldPos.x * 2.2, vWorldPos.y * 0.35, vWorldPos.z * 2.2)));

            vec3 sandDustColor = vec3(0.76, 0.67, 0.54);
            vec3 grimeColor = vec3(0.26, 0.23, 0.19);

            diffuseColor.rgb *= (0.88 + 0.24 * macroVar) * (0.94 + 0.12 * microVar);
            diffuseColor.rgb = mix(diffuseColor.rgb, grimeColor, groundGrime * 0.35 * uWeatherStrength);
            diffuseColor.rgb = mix(diffuseColor.rgb, sandDustColor, upwardDust * 0.28 * uWeatherStrength);
            diffuseColor.rgb *= (0.93 + 0.07 * waterStreak);
          }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          if (uWeatherStrength > 0.01) {
            float rMicro = worldNoise(vWorldPos * 3.2);
            roughnessFactor = clamp(roughnessFactor + (rMicro - 0.5) * 0.12 * uWeatherStrength, 0.08, 0.98);
          }`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
          // Low-frequency moving cumulus cloud shadow modulation
          vec2 cloudUV = vWorldPos.xz * 0.0085 + uCloudWindOffset;
          float cloudDensity = worldNoise(vec3(cloudUV * 2.2, 1.5)) * 0.65 + worldNoise(vec3(cloudUV * 5.0, 3.1)) * 0.35;
          float cloudShadow = mix(1.0, 0.72, smoothstep(0.56, 0.76, cloudDensity));

          int csmIndex = 0;
          if (uCsmEnabled > 0.5) {
            float csmFactor = computeStabilizedCSM(vWorldPos, normalize(vWorldNormal), vViewDepth, csmIndex);
            reflectedLight.directDiffuse *= mix(0.06, 1.0, csmFactor) * cloudShadow;
            reflectedLight.directSpecular *= csmFactor * cloudShadow;
            reflectedLight.indirectDiffuse *= mix(0.46, 1.0, csmFactor) * mix(0.84, 1.0, cloudShadow);
            reflectedLight.indirectSpecular *= mix(0.32, 1.0, csmFactor);
          } else {
            reflectedLight.directDiffuse *= cloudShadow;
            reflectedLight.directSpecular *= cloudShadow;
          }

          if (uDebugCascades > 0.5) {
            vec3 cCol = csmIndex == 0 ? vec3(0.2, 1.0, 0.3) :
                        csmIndex == 1 ? vec3(0.2, 0.7, 1.0) :
                        csmIndex == 2 ? vec3(1.0, 0.8, 0.2) : vec3(1.0, 0.25, 0.3);
            reflectedLight.directDiffuse = mix(reflectedLight.directDiffuse, cCol, 0.45);
          }`)},t}buildCoreMaterials(){const t=this.textures.get("plaster"),e=this.textures.get("road"),n=this.textures.get("brick"),i=this.textures.get("concrete"),s=this.textures.get("wood"),o=this.textures.get("metal"),a=this.textures.get("cloth"),l=this.textures.get("tile"),c=[["stucco_warm_beige",15259839],["stucco_sun_ochre",14664085],["stucco_chalk_white",15591388],["stucco_terracotta",13802620],["stucco_dusty_blue",10794690],["stucco_pale_peach",14991270],["stucco_weathered_gray",13025720]];for(const[T,R]of c){const A=new ie({color:R,map:t.albedo,normalMap:t.normal,normalScale:new j(.32,.32),roughnessMap:t.roughness,roughness:.88,metalness:.02});this.applyWorldWeatheringAndCSM(A,1,0),this.materials.set(T,A)}const h=new ie({color:14208962,map:e.albedo,normalMap:e.normal,normalScale:new j(.45,.45),roughnessMap:e.roughness,roughness:.9,metalness:.02});this.applyWorldWeatheringAndCSM(h,1.15,0),this.materials.set("road",h);const u=new ie({color:13945789,map:i.albedo,normalMap:i.normal,normalScale:new j(.8,.8),roughnessMap:i.roughness,roughness:.86,metalness:.04});this.applyWorldWeatheringAndCSM(u,1,0),this.materials.set("concrete",u);const d=new ie({color:14268579,map:n.albedo,normalMap:n.normal,normalScale:new j(.9,.9),roughnessMap:n.roughness,roughness:.85,metalness:.02});this.applyWorldWeatheringAndCSM(d,1,0),this.materials.set("brick",d);const f=new ie({color:13940370,map:s.albedo,normalMap:s.normal,normalScale:new j(.75,.75),roughnessMap:s.roughness,roughness:.82,metalness:.03});this.applyWorldWeatheringAndCSM(f,.8,0),this.materials.set("wood",f);const g=new ie({color:9345442,map:o.albedo,normalMap:o.normal,normalScale:new j(.6,.6),roughnessMap:o.roughness,roughness:.48,metalness:.78});this.applyWorldWeatheringAndCSM(g,.7,0),this.materials.set("metal_painted",g);const v=new ie({color:4541007,map:o.albedo,normalMap:o.normal,normalScale:new j(.55,.55),roughnessMap:o.roughness,roughness:.42,metalness:.85});this.applyWorldWeatheringAndCSM(v,.6,0),this.materials.set("metal_dark",v);const p=new ie({color:4943490,map:o.albedo,normalMap:o.normal,roughnessMap:o.roughness,roughness:.56,metalness:.55});this.applyWorldWeatheringAndCSM(p,.85,0),this.materials.set("shutter_blue",p);const m=[["awning_terracotta",12079675],["awning_ochre",13210690],["awning_cream",14865854],["awning_blue",4155522],["awning_olive",6845264]];for(const[T,R]of m){const A=new ie({color:R,map:a.albedo,normalMap:a.normal,roughnessMap:a.roughness,roughness:.9,metalness:0,side:He});this.applyWorldWeatheringAndCSM(A,.6,1),this.materials.set(T,A)}const y=new ie({color:12757892,map:a.albedo,normalMap:a.normal,roughnessMap:a.roughness,roughness:.94,metalness:0});this.applyWorldWeatheringAndCSM(y,.9,0),this.materials.set("sandbag",y);const _=new ie({color:14472132,map:l.albedo,normalMap:l.normal,roughnessMap:l.roughness,roughness:.52,metalness:.05});this.applyWorldWeatheringAndCSM(_,.7,0),this.materials.set("tile",_);const x=new ie({color:1779760,normalMap:t.normal,normalScale:new j(.12,.12),roughness:.18,metalness:.35});this.applyWorldWeatheringAndCSM(x,.5,0),this.materials.set("glass_dark",x);const w=new ie({color:6057537,roughness:.76,metalness:.02,side:He});this.applyWorldWeatheringAndCSM(w,.4,1.25),this.materials.set("foliage",w)}get(t){return this.materials.get(t)??this.materials.get("concrete")}}class E0{constructor(t,e,n,i){this.matLib=t,this.bvh=e,this.rigidWorld=n,this.rng=i,this.group.name="PropSystem"}matLib;bvh;rigidWorld;rng;group=new ee;coverNodes=[];skitterPapers=[];dustMotes;dustPositions;dustPhases;addJerseyBarrier(t,e,n,i=0,s=!1){const o=new ee;o.position.set(t,e,n),o.rotation.y=i;const a=new Ql;a.moveTo(-.32,0),a.lineTo(.32,0),a.lineTo(.32,.18),a.lineTo(.16,.42),a.lineTo(.11,1.02),a.lineTo(-.11,1.02),a.lineTo(-.16,.42),a.lineTo(-.32,.18),a.closePath();const l=2.6,c=new Ko(a,{depth:l,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.015,bevelThickness:.015});c.translate(0,0,-l*.5),c.rotateY(Math.PI*.5);const h=new X(c,this.matLib.get("concrete"));h.castShadow=!0,h.receiveShadow=!0,o.add(h);const u=new jo(.055,.012,6,12,Math.PI),d=this.matLib.get("metal_dark");for(const v of[-.85,.85]){const p=new X(u,d);p.position.set(v,1.02,0),o.add(p)}if(s){const v=new he(.008,.008,.25,6),p=new X(v,d);p.position.set(.35,1.08,.02),p.rotation.z=.25,o.add(p)}this.group.add(o),this.bvh.addBox(new S(t,e+.52,n),new S(l,1.04,.56),rt.CONCRETE,i,.5);const f=Math.cos(i),g=Math.sin(i);for(const v of[-1,1]){const p=-g*v,m=-f*v;this.coverNodes.push({position:new S(t+p*.85,e,n+m*.85),normal:new S(p,0,m),crouchOnly:!0,occupiedBy:-1})}}addSandbagWall(t,e,n,i=0,s=4,o=3){const a=new ee;a.position.set(t,e,n),a.rotation.y=i;const l=new pt(.58,.21,.34,3,2,2),c=l.getAttribute("position"),h=new S;for(let p=0;p<c.count;p++){h.fromBufferAttribute(c,p);const m=1-.18*(h.x*h.x)/(.29*.29);h.y*=m,h.z*=.92+.08*Math.cos(h.x*5),c.setXYZ(p,h.x,h.y,h.z)}l.computeVertexNormals();const u=this.matLib.get("sandbag");for(let p=0;p<s;p++){const m=p%2*.22;for(let y=0;y<o;y++){const _=new X(l,u),x=(y-(o-1)*.5)*.54+m*.5,w=p*.185+.105,T=(this.rng.next()-.5)*.04;_.position.set(x,w,T),_.rotation.y=(this.rng.next()-.5)*.14,_.castShadow=!0,_.receiveShadow=!0,a.add(_)}}this.group.add(a);const d=o*.58,f=s*.19;this.bvh.addBox(new S(t,e+f*.5,n),new S(d,f,.42),rt.SANDBAG,i,.42);const g=Math.cos(i),v=Math.sin(i);for(const p of[-1,1]){const m=-v*p,y=-g*p;this.coverNodes.push({position:new S(t+m*.85,e,n+y*.85),normal:new S(m,0,y),crouchOnly:!0,occupiedBy:-1})}}addMarketStall(t,e,n,i=0,s="awning_terracotta"){const o=new ee;o.position.set(t,e,n),o.rotation.y=i;const a=this.matLib.get("wood"),l=this.matLib.get(s),c=this.matLib.get("brick"),h=new X(new pt(3,.08,1.25),a);h.position.set(0,.88,0),h.castShadow=!0,h.receiveShadow=!0,o.add(h);const u=new X(new pt(2.9,.78,.08),a);u.position.set(0,.45,.56),u.castShadow=!0,u.receiveShadow=!0,o.add(u);const d=new pt(.09,2.55,.09),f=[[-1.42,1.27,-.56],[1.42,1.27,-.56],[-1.42,1.27,.56],[1.42,1.27,.56]];for(const[w,T,R]of f){const A=new X(d,a);A.position.set(w,T,R),A.castShadow=!0,A.receiveShadow=!0,o.add(A)}const g=new an(3.3,1.75,10,6),v=g.getAttribute("position");for(let w=0;w<v.count;w++){const T=v.getX(w),R=v.getY(w),A=-.09*(1-T/1.65*(T/1.65))*(1-R/.875*(R/.875));v.setZ(w,A)}g.computeVertexNormals();const p=new X(g,l);p.position.set(0,2.45,.08),p.rotation.x=-Math.PI*.5+.22,p.castShadow=!0,p.receiveShadow=!0,o.add(p);const m=new he(.18,.24,.42,10);for(let w=0;w<3;w++){const T=new X(m,this.matLib.get("sandbag"));T.position.set(-.9+w*.48,.21,-.15+(this.rng.next()-.5)*.2),T.castShadow=!0,T.receiveShadow=!0,o.add(T)}const y=new pt(.68,.1,.48);for(let w=0;w<3;w++){const T=new X(y,a);T.position.set(-.85+w*.85,.96,.05),T.rotation.y=(this.rng.next()-.5)*.18,T.castShadow=!0,T.receiveShadow=!0,o.add(T)}const _=new $s([new j(0,0),new j(.11,0),new j(.17,.18),new j(.14,.34),new j(.08,.42),new j(.11,.48)],12),x=new X(_,c);x.position.set(1.05,0,.25),x.castShadow=!0,x.receiveShadow=!0,o.add(x),this.group.add(o),this.bvh.addBox(new S(t,e+.46,n),new S(3,.92,1.25),rt.WOOD,i,.16)}addUtilityVehicle(t,e,n,i=0,s="pickup"){const o=new ee;o.position.set(t,e,n),o.rotation.y=i;const a=this.matLib.get(s==="pickup"?"stucco_chalk_white":"shutter_blue"),l=this.matLib.get("metal_dark"),c=this.matLib.get("glass_dark");if(s==="pickup"){const v=new X(new pt(1.86,.68,4.45),a);v.position.set(0,.66,0),v.castShadow=!0,v.receiveShadow=!0,o.add(v);const p=new X(new pt(1.76,.74,1.65),a);p.position.set(0,1.34,.32),p.castShadow=!0,p.receiveShadow=!0,o.add(p);const m=new X(new pt(1.62,.56,1.72),c);m.position.set(0,1.33,.32),o.add(m);const y=new X(new pt(1.92,.26,.24),l);y.position.set(0,.46,2.22),o.add(y);const _=new X(new pt(1.1,.55,1.1),this.matLib.get("wood"));_.position.set(-.15,1.15,-1.25),_.rotation.y=.18,_.castShadow=!0,o.add(_)}else{const v=new X(new pt(1.92,.85,4.5),a);v.position.set(0,.74,0),v.castShadow=!0,v.receiveShadow=!0,o.add(v);const p=new X(new pt(1.84,.92,3.85),a);p.position.set(0,1.6,-.25),p.castShadow=!0,p.receiveShadow=!0,o.add(p);const m=new X(new pt(1.72,.65,1.25),c);m.position.set(0,1.56,1.12),o.add(m)}const h=new he(.38,.38,.26,16);h.rotateZ(Math.PI*.5);const u=[[-.88,.38,1.38],[.88,.38,1.38],[-.88,.38,-1.38],[.88,.38,-1.38]];for(const[v,p,m]of u){const y=new X(h,l);y.position.set(v,p,m),y.castShadow=!0,y.receiveShadow=!0,o.add(y)}this.group.add(o);const d=s==="pickup"?1.62:2.02;this.bvh.addBox(new S(t,e+d*.5,n),new S(1.9,d,4.45),rt.METAL,i,.8);const f=Math.cos(i),g=Math.sin(i);for(const v of[-1,1]){const p=f*v,m=-g*v;this.coverNodes.push({position:new S(t+p*1.45,e,n+m*1.45),normal:new S(p,0,m),crouchOnly:!1,occupiedBy:-1})}}addPalmTree(t,e,n,i=7.8){const s=new ee;s.position.set(t,e,n);const o=this.matLib.get("wood"),a=this.matLib.get("foliage"),l=9,c=i/l;let h=0,u=0;const d=this.rng.range(0,Math.PI*2);for(let p=0;p<l;p++){const m=p/l,y=Kt.lerp(.28,.16,m),_=Kt.lerp(.26,.15,(p+1)/l),x=new he(_,y,c*1.08,8),w=new X(x,o);h+=Math.cos(d)*.045*(1-Math.abs(m-.5)),u+=Math.sin(d)*.045*(1-Math.abs(m-.5)),w.position.set(h,(p+.5)*c,u),w.castShadow=!0,w.receiveShadow=!0,s.add(w)}const f=13,g=new an(.55,2.9,2,7),v=g.getAttribute("position");for(let p=0;p<v.count;p++){const m=v.getX(p),y=v.getY(p)+1.45,_=y/2.9,x=Math.sin(_*Math.PI),w=-_*_*.85;v.setXYZ(p,m*x,y*.82,w)}g.computeVertexNormals();for(let p=0;p<f;p++){const m=p/f*Math.PI*2+this.rng.range(-.12,.12),y=.55+p%3*.22,_=new X(g,a);_.position.set(h,i-.1,u),_.rotation.y=m,_.rotation.x=y,_.castShadow=!0,s.add(_)}this.group.add(s),this.bvh.addBox(new S(t,e+2.2,n),new S(.52,4.4,.52),rt.WOOD,0,.45)}addCrateCluster(t,e,n,i=0){const s=this.matLib.get("wood"),o=this.matLib.get("metal_painted"),a=new pt(1.15,1.05,1.15),l=new X(a,s);l.position.set(t,e+.525,n),l.rotation.y=i,l.castShadow=!0,l.receiveShadow=!0,this.group.add(l),this.bvh.addBox(new S(t,e+.525,n),new S(1.15,1.05,1.15),rt.WOOD,i,.35);const c=new he(.29,.29,.92,14),h=new X(c,o),u=t+Math.cos(i)*.95,d=n-Math.sin(i)*.95;h.position.set(u,e+.46,d),h.castShadow=!0,h.receiveShadow=!0,this.group.add(h),this.bvh.addBox(new S(u,e+.46,d),new S(.58,.92,.58),rt.METAL,0,.4);const f=new pt(.46,.38,.46),g=new X(f,s);g.position.set(t+.08,e+1.24,n-.06),g.rotation.y=i+.35,g.castShadow=!0,g.receiveShadow=!0,this.group.add(g),this.rigidWorld.addReactiveProp(g,"box",new S(.23,.19,.23),4.5,rt.WOOD,.25,.6);const v=new he(.08,.08,.24,10),p=new X(v,o);p.position.set(t-.32,e+1.17,n+.28),p.castShadow=!0,this.group.add(p),this.rigidWorld.addReactiveProp(p,"sphere",new S(.11,.11,.11),.8,rt.METAL,.42,.4),this.coverNodes.push({position:new S(t,e,n-1.05),normal:new S(0,0,-1),crouchOnly:!0,occupiedBy:-1}),this.coverNodes.push({position:new S(t,e,n+1.05),normal:new S(0,0,1),crouchOnly:!0,occupiedBy:-1})}addOverheadCable(t,e,n=.85){const i=[];for(let c=0;c<=12;c++){const h=c/12,u=new S().lerpVectors(t,e,h);u.y-=Math.sin(h*Math.PI)*n,i.push(u)}const o=new Yl(i),a=new Zo(o,12,.018,5,!1),l=new X(a,this.matLib.get("metal_dark"));l.castShadow=!1,this.group.add(l)}addStreetAwningSpan(t,e,n=3.2,i="awning_ochre"){const s=t.distanceTo(e),o=new an(s,n,12,6),a=o.getAttribute("position");for(let h=0;h<a.count;h++){const u=a.getX(h)/(s*.5),d=a.getY(h)/(n*.5),f=-.32*(1-u*u*.85)*(1-d*d*.25);a.setZ(h,f)}o.computeVertexNormals();const l=new X(o,this.matLib.get(i));l.position.lerpVectors(t,e,.5);const c=Math.atan2(e.z-t.z,e.x-t.x);l.rotation.order="YXZ",l.rotation.y=-c,l.rotation.x=-Math.PI*.5+.08,l.castShadow=!0,l.receiveShadow=!0,this.group.add(l)}initAmbientMicroDetails(){const t=new an(.24,.18,2,2),e=this.matLib.get("awning_cream");for(let o=0;o<28;o++){const a=new X(t,e);a.userData.dynamic=!0;const l=new S(this.rng.range(-28,28),.03,this.rng.range(-48,42));a.position.copy(l),a.rotation.x=-Math.PI*.5,a.rotation.z=this.rng.range(0,Math.PI*2),this.group.add(a),this.skitterPapers.push({mesh:a,basePos:l,phase:this.rng.range(0,100),speed:this.rng.range(.6,1.5)})}const n=260;this.dustPositions=new Float32Array(n*3),this.dustPhases=new Float32Array(n);for(let o=0;o<n;o++)this.dustPositions[o*3]=this.rng.range(-36,36),this.dustPositions[o*3+1]=this.rng.range(.4,6.2),this.dustPositions[o*3+2]=this.rng.range(-54,46),this.dustPhases[o]=this.rng.range(0,Math.PI*2);const i=new ye;i.setAttribute("position",new Te(this.dustPositions,3));const s=new Wl({color:16049350,size:.055,transparent:!0,opacity:.48,depthWrite:!1});this.dustMotes=new Xl(i,s),this.group.add(this.dustMotes)}updateEnvironmentalMotion(t,e){for(let n=0;n<this.skitterPapers.length;n++){const i=this.skitterPapers[n],s=t*i.speed+i.phase,o=Math.max(0,Math.sin(s*.7));i.mesh.position.x=i.basePos.x+Math.sin(s*.45)*1.4,i.mesh.position.z=i.basePos.z+Math.cos(s*.35)*1.4,i.mesh.position.y=.025+o*.09*Math.abs(Math.sin(s*3.5)),i.mesh.rotation.z+=e*o*1.8}if(this.dustMotes){const n=this.dustMotes.geometry.getAttribute("position");for(let i=0;i<this.dustPhases.length;i++){const s=this.dustPhases[i];let o=this.dustPositions[i*3]+Math.sin(t*.4+s)*.004,a=this.dustPositions[i*3+1]+Math.cos(t*.6+s)*.002;a>6.5&&(a=.5),a<.3&&(a=6.2),this.dustPositions[i*3]=o,this.dustPositions[i*3+1]=a}n.needsUpdate=!0}}}class A0{constructor(t,e,n,i,s,o=1337420){this.scene=t,this.matLib=e,this.bvh=n,this.rigidWorld=i,this.propSystem=s,this.rng=new xe(o),this.group.name="UrbanMapDistrict"}scene;matLib;bvh;rigidWorld;propSystem;group=new ee;footprints=[];alphaSpawns=[];bravoSpawns=[];benchmarkViews={};rng;facadeMaterials=["stucco_warm_beige","stucco_sun_ochre","stucco_chalk_white","stucco_terracotta","stucco_dusty_blue","stucco_pale_peach","stucco_weathered_gray"];build(){this.buildGroundAndCurbs(),this.buildPerimeterEnclosure(),this.buildMonumentalArchwayAndPlaza(),this.buildCentralStreetBuildingsAndInteriors(),this.buildOuterFlankBlocks(),this.buildEastBalconyAndStairs(),this.populateStreetsAndLanes(),this.defineSpawnsAndBenchmarkViews(),this.mergeStaticMeshesByMaterial(this.group,!0),this.mergeStaticMeshesByMaterial(this.propSystem.group,!0),this.scene.add(this.group),this.scene.add(this.propSystem.group),this.bvh.build()}mergeStaticMeshesByMaterial(t,e=!1){t.updateMatrixWorld(!0);const n=new Map,i=[],s=[],o=new S;t.traverse(a=>{if(a!==t&&!(a instanceof Wi||a instanceof Xl)&&a instanceof X){if(a.userData.dynamic){s.push(a);return}const l=a.material;let c=l.uuid;if(e){a.getWorldPosition(o);const d=o.x>=0?1:0,f=o.z>=-5?1:0;c=`${d}_${f}_${l.uuid}`}const h=a.geometry.clone();h.applyMatrix4(a.matrixWorld);let u=n.get(c);u||(u={mat:l,geos:[]},n.set(c,u)),u.geos.push(h),i.push(a)}});for(const a of s)if(a.parent&&a.parent!==t){const l=new S,c=new Be;a.getWorldPosition(l),a.getWorldQuaternion(c),t.add(a),a.position.copy(l),a.quaternion.copy(c)}for(const a of i)a.parent?.remove(a),a instanceof X&&a.geometry.dispose();for(let a=t.children.length-1;a>=0;a--){const l=t.children[a];l.type==="Group"&&l.children.length===0&&t.remove(l)}for(const{mat:a,geos:l}of n.values()){if(l.length===0)continue;let c=0,h=0;for(const _ of l){const x=_.getAttribute("position");c+=x.count;const w=_.getIndex();h+=w?w.count:x.count}const u=new Float32Array(c*3),d=new Float32Array(c*3),f=new Float32Array(c*2),g=new Uint32Array(h);let v=0,p=0;for(const _ of l){const x=_.getAttribute("position"),w=_.getAttribute("normal"),T=_.getAttribute("uv"),R=x.count;for(let M=0;M<R;M++)u[(v+M)*3]=x.getX(M),u[(v+M)*3+1]=x.getY(M),u[(v+M)*3+2]=x.getZ(M),w?(d[(v+M)*3]=w.getX(M),d[(v+M)*3+1]=w.getY(M),d[(v+M)*3+2]=w.getZ(M)):d[(v+M)*3+1]=1,T&&(f[(v+M)*2]=T.getX(M),f[(v+M)*2+1]=T.getY(M));const A=_.getIndex();if(A){for(let M=0;M<A.count;M++)g[p+M]=A.getX(M)+v;p+=A.count}else{for(let M=0;M<R;M++)g[p+M]=v+M;p+=R}v+=R,_.dispose()}const m=new ye;m.setAttribute("position",new Te(u,3)),m.setAttribute("normal",new Te(d,3)),m.setAttribute("uv",new Te(f,2)),m.setIndex(new Te(g,1)),m.computeBoundingSphere(),m.computeBoundingBox();const y=new X(m,a);y.castShadow=!0,y.receiveShadow=!0,t.add(y)}}addStaticBox(t,e,n,i,s,o,a,l,c=0,h=!1,u){const d=new pt(i,s,o),f=d.getAttribute("uv"),g=d.getAttribute("position"),v=d.getAttribute("normal");if(f&&g&&v)for(let m=0;m<f.count;m++){const y=g.getX(m),_=g.getY(m),x=g.getZ(m),w=Math.abs(v.getX(m));Math.abs(v.getY(m))>.5?f.setXY(m,y*.28,x*.28):w>.5?f.setXY(m,x*.28,_*.28):f.setXY(m,y*.28,_*.28)}const p=new X(d,this.matLib.get(a));return p.position.set(t,e+s*.5,n),p.rotation.y=c,p.castShadow=!0,p.receiveShadow=!0,this.group.add(p),this.bvh.addBox(new S(t,e+s*.5,n),new S(i,s,o),l,c,u),h&&this.footprints.push({x:t,z:n,w:i,d:o}),p}buildGroundAndCurbs(){const t=new an(140,140,24,24);t.rotateX(-Math.PI*.5);const e=t.getAttribute("uv");for(let o=0;o<e.count;o++)e.setXY(o,e.getX(o)*36,e.getY(o)*36);const n=new X(t,this.matLib.get("road"));n.receiveShadow=!0,this.group.add(n),this.bvh.addBox(new S(0,-.25,0),new S(140,.5,140),rt.ROAD,0,.5);for(const o of[-1,1])this.addStaticBox(o*9.8,0,-39,2.2,.14,34,"concrete",rt.CONCRETE),this.addStaticBox(o*9.8,0,14,2.2,.14,22,"concrete",rt.CONCRETE);const i=new X(new pt(28,.05,28),this.matLib.get("tile")),s=i.geometry.getAttribute("uv");for(let o=0;o<s.count;o++)s.setXY(o,s.getX(o)*10,s.getY(o)*10);i.position.set(0,.025,36),i.receiveShadow=!0,this.group.add(i)}buildPerimeterEnclosure(){this.addDetailedBuilding(0,-63,44,10,11.5,"stucco_warm_beige",3,!0,!1),this.addDetailedBuilding(-34,-58,22,12,10.5,"stucco_terracotta",2,!0,!1),this.addDetailedBuilding(34,-58,22,12,10.5,"stucco_sun_ochre",2,!0,!1),this.addDetailedBuilding(0,61,48,12,13.5,"stucco_sun_ochre",3,!0,!1),this.addDetailedBuilding(-34,56,22,14,11,"stucco_pale_peach",3,!0,!1),this.addDetailedBuilding(34,56,22,14,11,"stucco_chalk_white",3,!0,!1),this.addDetailedBuilding(-48,-26,12,46,11,"stucco_warm_beige",3,!1,!0),this.addDetailedBuilding(-48,22,12,46,10.2,"stucco_dusty_blue",2,!1,!0),this.addDetailedBuilding(48,-26,12,46,11.5,"stucco_chalk_white",3,!1,!0),this.addDetailedBuilding(48,22,12,46,10.5,"stucco_terracotta",2,!1,!0)}buildMonumentalArchwayAndPlaza(){const e=[-10.5,-3.6,3.6,10.5];for(const n of e)this.addStaticBox(n,0,21,2.2,7.6,2.8,"concrete",rt.CONCRETE,0,!0),this.addStaticBox(n,0,21,2.5,.75,3.1,"brick",rt.BRICK),this.addStaticBox(n,5.4,21,2.45,.35,3.05,"brick",rt.BRICK);this.addStaticBox(0,5.6,21,24,3.4,2.7,"stucco_sun_ochre",rt.CONCRETE),this.addStaticBox(0,9,21,24.6,.45,3.1,"brick",rt.BRICK);for(const n of[-7.05,0,7.05]){const i=n===0?4.8:4.5;this.addStaticBox(n-i*.38,4.75,21,1.1,.9,2.4,"concrete",rt.CONCRETE),this.addStaticBox(n+i*.38,4.75,21,1.1,.9,2.4,"concrete",rt.CONCRETE)}this.addStaticBox(0,0,36,3.8,1.05,3.8,"concrete",rt.CONCRETE,Math.PI*.25,!0),this.addStaticBox(0,1.05,36,1.4,1.45,1.4,"brick",rt.BRICK),this.addStaticBox(-7.5,0,33,4.2,1.15,.65,"concrete",rt.CONCRETE,.15),this.addStaticBox(7.5,0,33,4.2,1.15,.65,"concrete",rt.CONCRETE,-.15),this.addStaticBox(-6.5,0,41,.65,1.15,4.2,"concrete",rt.CONCRETE),this.addStaticBox(6.5,0,41,.65,1.15,4.2,"concrete",rt.CONCRETE)}buildCentralStreetBuildingsAndInteriors(){this.addDetailedBuilding(-15.5,-41.5,10,11,10.6,"stucco_warm_beige",3,!1,!0),this.buildEnterableBuilding(-15.5,-28.5,10,11,9.4,"stucco_terracotta","stucco_chalk_white",!0,!0,!1,!0),this.addDetailedBuilding(-15.5,-16,10,6.2,11.2,"stucco_dusty_blue",3,!1,!0),this.buildEnterableBuilding(-15.5,-4.5,10,12.5,9.8,"stucco_sun_ochre","stucco_warm_beige",!0,!0,!0,!0),this.addDetailedBuilding(-15.5,14.5,10,8.5,10.4,"stucco_chalk_white",3,!1,!0),this.addDetailedBuilding(15.5,-38,10,15,10.8,"stucco_sun_ochre",3,!1,!0),this.buildTwoStoryEnterableBuildingWithBalcony(15.5,-17,10,13),this.buildEnterableBuilding(15.5,2.5,10,12.5,9.6,"stucco_pale_peach","stucco_chalk_white",!0,!0,!0,!0),this.addDetailedBuilding(15.5,15.8,10,6.2,10.5,"stucco_warm_beige",3,!1,!0)}buildOuterFlankBlocks(){this.addDetailedBuilding(-34.5,-24,9,16,9.2,"stucco_sun_ochre",2,!1,!0),this.addDetailedBuilding(-34.5,4,9,18,9.8,"stucco_terracotta",2,!1,!0),this.addDetailedBuilding(-24.5,34,9.5,14,10,"stucco_warm_beige",2,!1,!0),this.addDetailedBuilding(34.5,-22,9,18,9.6,"stucco_weathered_gray",2,!1,!0),this.addDetailedBuilding(34.5,6,9,16,10.2,"stucco_dusty_blue",3,!1,!0),this.addDetailedBuilding(24.5,34,9.5,14,10,"stucco_chalk_white",2,!1,!0)}buildEnterableBuilding(t,e,n,i,s,o,a,l,c,h,u){const g=s-3.8;this.footprints.push({x:t,z:e,w:n,d:i,isInterior:!0});const v=new X(new pt(n-.2,.12,i-.2),this.matLib.get("tile"));v.position.set(t,.06,e),v.receiveShadow=!0,this.group.add(v),this.addStaticBox(t,3.8,e,n,g,i,o,rt.CONCRETE,0,!1);const p=t+n*.5-.45*.5;if(l){const w=(i-2.4)*.5;this.addStaticBox(p,0,e-i*.5+w*.5,.45,3.8,w,o,rt.PLASTER,0,!1,.45),this.addStaticBox(p,0,e+i*.5-w*.5,.45,3.8,w,o,rt.PLASTER,0,!1,.45),this.addStaticBox(p,2.75,e,.45,3.8-2.75,2.4,o,rt.PLASTER,0,!1,.45)}else this.addStaticBox(p,0,e,.45,3.8,i,o,rt.PLASTER,0,!1,.45);const m=t-n*.5+.45*.5;if(c){const w=(i-2.4)*.5;this.addStaticBox(m,0,e-i*.5+w*.5,.45,3.8,w,o,rt.PLASTER,0,!1,.45),this.addStaticBox(m,0,e+i*.5-w*.5,.45,3.8,w,o,rt.PLASTER,0,!1,.45),this.addStaticBox(m,2.75,e,.45,3.8-2.75,2.4,o,rt.PLASTER,0,!1,.45)}else this.addStaticBox(m,0,e,.45,3.8,i,o,rt.PLASTER,0,!1,.45);const y=e-i*.5+.45*.5;if(h){const w=(n-2.6)*.5;this.addStaticBox(t-n*.5+w*.5,0,y,w,3.8,.45,a,rt.PLASTER,0,!1,.45),this.addStaticBox(t+n*.5-w*.5,0,y,w,3.8,.45,a,rt.PLASTER,0,!1,.45),this.addStaticBox(t,0,y,2.6,1.05,.45,a,rt.PLASTER,0,!1,.45),this.addStaticBox(t,2.55,y,2.6,3.8-2.55,.45,a,rt.PLASTER,0,!1,.45)}else this.addStaticBox(t,0,y,n,3.8,.45,a,rt.PLASTER,0,!1,.45);const _=e+i*.5-.45*.5;if(u){const w=(n-2.6)*.5;this.addStaticBox(t-n*.5+w*.5,0,_,w,3.8,.45,a,rt.PLASTER,0,!1,.45),this.addStaticBox(t+n*.5-w*.5,0,_,w,3.8,.45,a,rt.PLASTER,0,!1,.45),this.addStaticBox(t,0,_,2.6,1.05,.45,a,rt.PLASTER,0,!1,.45),this.addStaticBox(t,2.55,_,2.6,3.8-2.55,.45,a,rt.PLASTER,0,!1,.45)}else this.addStaticBox(t,0,_,n,3.8,.45,a,rt.PLASTER,0,!1,.45);this.addStaticBox(t,.12,e-1.2,2.4,.95,.85,"wood",rt.WOOD,.08,!1,.25),this.decorateUpperFacade(t,e,n,i,s,o)}buildTwoStoryEnterableBuildingWithBalcony(t,e,n,i){this.footprints.push({x:t,z:e,w:n,d:i,isInterior:!0}),this.addStaticBox(t,0,e,n,3.8,i,"stucco_chalk_white",rt.CONCRETE),this.addStaticBox(t-n*.5-1.1,3.6,e,2.4,.28,i-1,"concrete",rt.CONCRETE),this.addStaticBox(t-n*.5-2.15,3.88,e-2.8,.25,1.05,5.2,"stucco_sun_ochre",rt.CONCRETE,0,!1,.25),this.addStaticBox(t-n*.5-2.15,3.88,e+3.2,.25,1.05,4.4,"stucco_sun_ochre",rt.CONCRETE,0,!1,.25),this.addStaticBox(t+1.8,3.8,e,n-3.6,3.8,i,"stucco_sun_ochre",rt.CONCRETE),this.addStaticBox(t,7.6,e,n+1.6,2.4,i,"stucco_warm_beige",rt.CONCRETE),this.decorateUpperFacade(t,e,n,i,10,"stucco_warm_beige")}buildEastBalconyAndStairs(){const i=.31666666666666665,s=5.4/12;for(let o=0;o<12;o++){const a=o*i,l=-28.5+o*s;this.addStaticBox(9.4,0,l,2.1,a+i,s+.04,"concrete",rt.CONCRETE)}this.addStaticBox(9.4,3.55,-22.8,2.2,.28,1.8,"concrete",rt.CONCRETE),this.addStaticBox(8.25,0,-25.8,.18,2.6,5.8,"brick",rt.BRICK,0,!1,.18)}addDetailedBuilding(t,e,n,i,s,o,a,l,c){this.addStaticBox(t,0,e,n,s,i,o,rt.CONCRETE,0,!0),this.decorateUpperFacade(t,e,n,i,s,o,a,l,c)}decorateUpperFacade(t,e,n,i,s,o,a=3,l=!0,c=!0){const h=this.matLib.get("concrete"),u=this.matLib.get("wood"),d=this.matLib.get("shutter_blue"),f=this.matLib.get("glass_dark"),g=this.matLib.get("metal_dark"),v=this.matLib.get("metal_painted"),p=.65,m=.32;this.addStaticBox(t,s,e-i*.5+m*.5,n,p,m,o,rt.CONCRETE),this.addStaticBox(t,s,e+i*.5-m*.5,n,p,m,o,rt.CONCRETE),this.addStaticBox(t-n*.5+m*.5,s,e,m,p,i,o,rt.CONCRETE),this.addStaticBox(t+n*.5-m*.5,s,e,m,p,i,o,rt.CONCRETE);const y=new ee;for(let x=1;x<=a;x++){const w=x/a*s,T=new X(new pt(n+.24,.18,i+.24),h);T.position.set(t,w,e),T.castShadow=!0,T.receiveShadow=!0,y.add(T)}if(this.rng.chance(.85)){const x=new X(new he(.75,.75,1.65,12),v);x.position.set(t+this.rng.range(-n*.25,n*.25),s+.82,e+this.rng.range(-i*.25,i*.25)),x.castShadow=!0,y.add(x)}if(this.rng.chance(.75)){const x=new X(new he(.03,.04,2.8,6),g);x.position.set(t-n*.3,s+1.4,e+i*.3),y.add(x)}const _=(x,w)=>{const T=x?i:n,R=Math.max(1,Math.floor((T-1.5)/3.4));for(let D=1;D<a;D++){const I=D*3.4+1.75;if(!(I>s-1))for(let N=0;N<R;N++){const V=(N-(R-1)*.5)*3.3,B=x?t+w*(n*.5+.04):t+V,G=x?e+V:e+w*(i*.5+.04),K=x?w>0?Math.PI*.5:-Math.PI*.5:w>0?0:Math.PI,k=new ee;k.position.set(B,I,G),k.rotation.y=K;const et=new X(new pt(1.15,1.45,.08),f);k.add(et);const ht=new X(new pt(1.38,.12,.26),h);ht.position.set(0,-.76,.08),ht.castShadow=!0,k.add(ht);const vt=new X(new pt(1.36,.16,.18),h);vt.position.set(0,.78,.05),vt.castShadow=!0,k.add(vt);const _t=this.rng.next();if(_t<.45){const ot=new X(new pt(.42,1.38,.06),d);ot.position.set(-.68,0,.06),ot.rotation.y=-.25,ot.castShadow=!0,k.add(ot);const Vt=new X(new pt(.42,1.38,.06),d);Vt.position.set(.68,0,.06),Vt.rotation.y=.32,Vt.castShadow=!0,k.add(Vt)}else if(_t<.75){const ot=new X(new pt(1.55,.12,.55),h);ot.position.set(0,-.72,.26),ot.castShadow=!0,k.add(ot);const Vt=new X(new pt(1.52,.75,.05),g);Vt.position.set(0,-.3,.5),Vt.castShadow=!0,k.add(Vt)}else{const ot=new X(new pt(1.26,.22,.06),u);ot.position.set(0,-.1,.06),ot.rotation.z=.09,k.add(ot)}if(this.rng.chance(.55)){const ot=new X(new pt(.74,.52,.34),v);ot.position.set(1.12,-.25,.16),ot.castShadow=!0,ot.receiveShadow=!0,k.add(ot);const Vt=new X(new he(.18,.18,.36,10),g);Vt.rotation.x=Math.PI*.5,Vt.position.set(1,-.25,.17),k.add(Vt)}y.add(k)}}const A=new X(new he(.045,.045,s,6),g),M=x?t+w*(n*.5+.06):t+T*.44,E=x?e+T*.44:e+w*(i*.5+.06);A.position.set(M,s*.5,E),y.add(A)};c&&(_(!0,-1),_(!0,1)),l&&(_(!1,-1),_(!1,1)),this.mergeStaticMeshesByMaterial(y),this.group.add(y)}populateStreetsAndLanes(){this.propSystem.addUtilityVehicle(-3.2,0,-19.5,.16,"pickup"),this.propSystem.addUtilityVehicle(3.8,0,5.2,-.22,"van"),this.propSystem.addJerseyBarrier(-3.6,0,-34,.12,!1),this.propSystem.addJerseyBarrier(3.4,0,-29,-.18,!0),this.propSystem.addJerseyBarrier(2.6,0,-10.5,.08,!1),this.propSystem.addJerseyBarrier(-3.5,0,-1.8,-.15,!0),this.propSystem.addJerseyBarrier(-2.8,0,12.5,.25,!1),this.propSystem.addJerseyBarrier(3.8,0,15,-.1,!1),this.propSystem.addSandbagWall(0,0,-42.5,0,4,4),this.propSystem.addSandbagWall(-5.2,0,-14.5,.35,4,3),this.propSystem.addSandbagWall(5.4,0,-5,-.35,4,3),this.propSystem.addSandbagWall(0,0,25.5,0,4,4),this.propSystem.addSandbagWall(-24,0,-16,.1,4,3),this.propSystem.addSandbagWall(24.5,0,-8,-.15,4,3),this.propSystem.addMarketStall(-7.4,.14,-25,Math.PI*.5,"awning_terracotta"),this.propSystem.addMarketStall(-7.4,.14,-7.5,Math.PI*.5,"awning_ochre"),this.propSystem.addMarketStall(7.4,.14,-18.5,-Math.PI*.5,"awning_blue"),this.propSystem.addMarketStall(7.4,.14,11.5,-Math.PI*.5,"awning_cream"),this.propSystem.addMarketStall(-25.5,0,-28,.1,"awning_terracotta"),this.propSystem.addMarketStall(-26.5,0,-6,-.12,"awning_ochre"),this.propSystem.addMarketStall(-25,0,12,.08,"awning_olive"),this.propSystem.addCrateCluster(6.2,.14,-34.5,.3),this.propSystem.addCrateCluster(-6.4,.14,4.5,-.4),this.propSystem.addCrateCluster(-22.5,0,-1.5,.2),this.propSystem.addCrateCluster(25.5,0,-20,-.25),this.propSystem.addCrateCluster(25,0,12.5,.5),this.propSystem.addCrateCluster(-11,0,36,.15),this.propSystem.addCrateCluster(11,0,36,-.2),this.propSystem.addPalmTree(-8.2,.14,-38,8.2),this.propSystem.addPalmTree(8.2,.14,-24.5,7.6),this.propSystem.addPalmTree(-8.2,.14,8.5,8.5),this.propSystem.addPalmTree(-12.5,0,29,8),this.propSystem.addPalmTree(12.5,0,29,7.8),this.propSystem.addPalmTree(-9.5,0,44,8.4),this.propSystem.addPalmTree(9.5,0,44,8.1);for(const t of[-40,-28,-16,-4,8,17])this.propSystem.addOverheadCable(new S(-10.5,7.8,t),new S(10.5,8.1,t+2.5),.95),this.propSystem.addOverheadCable(new S(-10.5,7.2,t+1.2),new S(10.5,7.4,t-1),.75);this.propSystem.addStreetAwningSpan(new S(-10.4,6.2,-26),new S(10.4,6.2,-26),3.6,"awning_cream"),this.propSystem.addStreetAwningSpan(new S(-10.4,6.4,-6),new S(10.4,6.4,-6),3.8,"awning_ochre"),this.propSystem.addStreetAwningSpan(new S(-30,5.6,-18),new S(-20.5,5.6,-18),4.5,"awning_terracotta"),this.propSystem.addStreetAwningSpan(new S(-30,5.6,-2),new S(-20.5,5.6,-2),4.5,"awning_blue"),this.propSystem.initAmbientMicroDetails()}defineSpawnsAndBenchmarkViews(){this.alphaSpawns=[new S(0,.05,-48),new S(-6,.05,-49),new S(6,.05,-49),new S(-23,.05,-42),new S(23,.05,-42)],this.bravoSpawns=[new S(0,.05,48),new S(-9,.05,47),new S(9,.05,47),new S(-24,.05,42),new S(24,.05,42)],this.benchmarkViews={spawn_alley:{name:"South Spawn Alley",position:new S(0,.05,-46.5),yaw:Math.PI,pitch:.02},central_market:{name:"Central Market Street",position:new S(.6,.05,-24.5),yaw:Math.PI+.02,pitch:.03},archway_plaza:{name:"Monumental Archway & Plaza",position:new S(-1.5,.05,8.5),yaw:Math.PI-.05,pitch:.05},west_souk:{name:"West Covered Souk Lane",position:new S(-25,.05,-18),yaw:Math.PI,pitch:0},east_balcony:{name:"East Balcony Overlook",position:new S(9.2,3.9,-17),yaw:Math.PI-.55,pitch:-.14}}}}class C0{ctx=null;buses;rng;activeVoiceCount=0;whiteNoiseBuffer;pinkNoiseBuffer;brownNoiseBuffer;saturationCurve;roundRobinIndex=0;ambientStarted=!1;lowHealthIntensity=0;lastHeartbeatTime=0;constructor(t=1337420){this.rng=new xe(t^1437226410)}maxVoices=64;lowCostPanning=!1;ensureContext(t=.85){if(!this.ctx)try{const e=navigator;e.audioSession&&(e.audioSession.type="playback");const n=window.AudioContext||window.webkitAudioContext;this.ctx=new n({latencyHint:"interactive"}),this.initNoiseAndCurves(this.ctx),this.initBusArchitecture(this.ctx,t)}catch{return!1}return this.ctx.state!=="running"&&this.ctx.state!=="closed"&&this.ctx.resume().catch(()=>{}),!this.ambientStarted&&this.ctx.state==="running"&&this.startAmbientStreetBed(),!0}unlockFromGesture(t){if(!this.ensureContext(t)||!this.ctx)return;const e=this.ctx;if(!(e.state==="running"&&this.ambientStarted)){try{const n=e.createBufferSource();n.buffer=e.createBuffer(1,1,e.sampleRate),n.connect(e.destination),n.start(0)}catch{}e.resume().then(()=>{this.ambientStarted||this.startAmbientStreetBed()}).catch(()=>{})}}now(){return this.ctx?this.ctx.currentTime+.012:0}canStartVoice(){return this.activeVoiceCount<this.maxVoices}releaseAfter(t,e){setTimeout(()=>{for(const n of t)try{n.disconnect()}catch{}},Math.ceil((e+.1)*1e3))}setMasterVolume(t){this.ctx&&this.buses&&this.buses.masterGain.gain.setTargetAtTime(Math.max(0,Math.min(1,t)),this.ctx.currentTime,.03)}setLowHealthEffect(t,e){if(this.lowHealthIntensity=Math.max(0,Math.min(1,t)),!this.ctx||!this.buses)return;const n=18e3*Math.pow(.06,this.lowHealthIntensity*.75);this.buses.lowHealthFilter.frequency.setTargetAtTime(n,this.ctx.currentTime,.08),this.lowHealthIntensity>.25&&e-this.lastHeartbeatTime>.68-this.lowHealthIntensity*.22&&(this.lastHeartbeatTime=e,this.playHeartbeatPulse(this.lowHealthIntensity))}initNoiseAndCurves(t){const e=t.sampleRate,n=e*2;this.whiteNoiseBuffer=t.createBuffer(1,n,e),this.pinkNoiseBuffer=t.createBuffer(1,n,e),this.brownNoiseBuffer=t.createBuffer(1,n,e);const i=this.whiteNoiseBuffer.getChannelData(0),s=this.pinkNoiseBuffer.getChannelData(0),o=this.brownNoiseBuffer.getChannelData(0);let a=0,l=0,c=0,h=0,u=0,d=0,f=0,g=0;for(let v=0;v<n;v++){const p=this.rng.signed();i[v]=p,a=.99886*a+p*.0555179,l=.99332*l+p*.0750759,c=.969*c+p*.153852,h=.8665*h+p*.3104856,u=.55*u+p*.5329522,d=-.7616*d-p*.016898,s[v]=(a+l+c+h+u+d+f+p*.5362)*.11,f=p*.115926,g=(g+.02*p)/1.02,o[v]=g*3.5}this.saturationCurve=new Float32Array(new ArrayBuffer(1024*4));for(let v=0;v<1024;v++){const p=v/512-1;this.saturationCurve[v]=Math.tanh(p*1.85)}}createProceduralImpulseResponse(t,e,n,i,s){const o=t.sampleRate,a=Math.floor(o*e),l=t.createBuffer(2,a,o),c=l.getChannelData(0),h=l.getChannelData(1);for(let p=0;p<i.length;p++){const m=Math.min(a-1,Math.floor(i[p]*.001*o)),y=Math.pow(.76,p)*.45;c[m]+=y*(p%2===0?1:-.7),h[m]+=y*(p%2===1?1:-.7)}const u=1/(2*Math.PI*s),d=1/o,f=d/(u+d);let g=0,v=0;for(let p=0;p<a;p++){const m=p/o,y=Math.exp(-m*n),_=this.rng.signed()*y,x=this.rng.signed()*y;g+=f*(_-g),v+=f*(x-v),c[p]+=g*.65,h[p]+=v*.65}return l}initBusArchitecture(t,e){const n=t.createGain(),i=t.createGain(),s=t.createGain(),o=t.createGain(),a=t.createGain(),l=t.createGain();n.gain.value=.92,i.gain.value=.82,s.gain.value=.72,o.gain.value=.78,a.gain.value=.42,l.gain.value=.65;const c=t.createConvolver();c.buffer=this.createProceduralImpulseResponse(t,1.65,3.4,[14,29,47,72,108,155],3400);const h=t.createConvolver();h.buffer=this.createProceduralImpulseResponse(t,.85,6.8,[5,11,19,31,44],2200);const u=t.createGain();u.gain.value=.48,c.connect(u),h.connect(u);const d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=18e3,d.Q.value=.7;const f=t.createDynamicsCompressor();f.threshold.value=-12,f.knee.value=8,f.ratio.value=4.5,f.attack.value=.002,f.release.value=.14;const g=t.createWaveShaper();g.curve=this.saturationCurve,g.oversample="2x";const v=t.createGain();v.gain.value=e,n.connect(d),i.connect(d),s.connect(d),o.connect(d),a.connect(d),u.connect(d),l.connect(f),d.connect(f),f.connect(g),g.connect(v),v.connect(t.destination),this.buses={weapons:n,impacts:i,footsteps:s,characters:o,environment:a,ui:l,reverbExterior:c,reverbInterior:h,reverbReturn:u,lowHealthFilter:d,masterCompressor:f,masterLimiter:g,masterGain:v}}trackVoice(t){this.activeVoiceCount++,setTimeout(()=>{this.activeVoiceCount=Math.max(0,this.activeVoiceCount-1)},Math.ceil(t*1e3))}triggerLayeredGunshot(t,e,n=0,i=0,s=0,o=!1){if(!this.ensureContext()||!this.ctx)return;const a=this.ctx,l=this.now()+Math.max(0,n);this.roundRobinIndex=(this.roundRobinIndex+1)%6;const h=[1,.97,1.03,.985,1.018,.96][this.roundRobinIndex]*this.rng.range(.97,1.03),u=Math.min(1,i/95),d=a.createGain(),f=o?1:1/(1+i*.065),g=1-s*.55;d.gain.value=f*g;const v=a.createBiquadFilter();v.type="lowpass";const p=o?16500:13500+-12100*u;v.frequency.setValueAtTime(Math.max(480,p*(1-s*.72)),l),d.connect(v),v.connect(t);const m=[d,v];if(e){const V=a.createGain();V.gain.value=(o?.32:.28+(.72-.28)*u)*g,v.connect(V),V.connect(e),m.push(V)}t instanceof PannerNode&&m.push(t);const y=a.createOscillator(),_=a.createGain();y.type="triangle",y.frequency.setValueAtTime(3200*h,l),y.frequency.exponentialRampToValueAtTime(650,l+.006),_.gain.setValueAtTime(.32,l),_.gain.exponentialRampToValueAtTime(.001,l+.007),y.connect(_).connect(d),y.start(l),y.stop(l+.008);const x=a.createOscillator(),w=a.createGain();x.type="sine",x.frequency.setValueAtTime(168*h,l),x.frequency.exponentialRampToValueAtTime(42*h,l+.085),w.gain.setValueAtTime(.85,l),w.gain.exponentialRampToValueAtTime(.001,l+.095),x.connect(w).connect(d),x.start(l),x.stop(l+.1);const T=a.createBufferSource();T.buffer=this.whiteNoiseBuffer;const R=this.rng.range(0,1.4),A=a.createBiquadFilter();A.type="bandpass",A.frequency.setValueAtTime(1850*h,l),A.frequency.exponentialRampToValueAtTime(480,l+.14),A.Q.value=.85;const M=a.createWaveShaper();M.curve=this.saturationCurve;const E=a.createGain();E.gain.setValueAtTime(.001,l),E.gain.linearRampToValueAtTime(.95,l+.0015),E.gain.exponentialRampToValueAtTime(.18,l+.032),E.gain.exponentialRampToValueAtTime(.001,l+.19),T.connect(A).connect(M).connect(E).connect(d),T.start(l,R,.22);const D=a.createBufferSource();D.buffer=this.pinkNoiseBuffer;const I=a.createBiquadFilter();I.type="lowpass",I.frequency.setValueAtTime(3600*h,l+.01),I.frequency.exponentialRampToValueAtTime(420,l+.42);const N=a.createGain();if(N.gain.setValueAtTime(.26,l+.01),N.gain.exponentialRampToValueAtTime(.001,l+.45),D.connect(I).connect(N).connect(d),D.start(l+.01,this.rng.range(0,1.2),.46),o||i<14){const V=l+.034,B=a.createOscillator(),G=a.createGain();B.type="square",B.frequency.setValueAtTime(2450*h,V),B.frequency.exponentialRampToValueAtTime(1180,V+.028),G.gain.setValueAtTime(o?.16:.06,V),G.gain.exponentialRampToValueAtTime(.001,V+.032),B.connect(G).connect(d),B.start(V),B.stop(V+.035)}this.releaseAfter(m,n+.6),this.trackVoice(n+.5)}playFootstep(t,e,n){if(!this.ensureContext()||!this.ctx)return;const i=this.ctx,s=this.now(),o=n??this.buses.footsteps,a=this.rng.range(.92,1.08),l=(e?.42:.25)*this.rng.range(.9,1.1),c=i.createOscillator(),h=i.createGain();c.type="sine";const u=t===rt.WOOD?135:t===rt.METAL?210:t===rt.TILE?165:95;c.frequency.setValueAtTime(u*a,s),c.frequency.exponentialRampToValueAtTime(38,s+.065),h.gain.setValueAtTime(l,s),h.gain.exponentialRampToValueAtTime(.001,s+.075),c.connect(h).connect(o),c.start(s),c.stop(s+.08);const d=i.createBufferSource();d.buffer=this.pinkNoiseBuffer;const f=i.createBiquadFilter();f.type="bandpass",f.frequency.value=t===rt.METAL?2600*a:t===rt.TILE?2100*a:t===rt.WOOD?950*a:1450*a,f.Q.value=1.6;const g=i.createGain();g.gain.setValueAtTime(l*.65,s+.008),g.gain.exponentialRampToValueAtTime(.001,s+.09),d.connect(f).connect(g).connect(o),d.start(s,this.rng.range(0,1.5),.1),o instanceof PannerNode&&this.releaseAfter([o],.15),this.trackVoice(.12)}playSurfaceImpact(t,e,n=!1){if(!this.ensureContext()||!this.ctx)return;const i=this.ctx,s=this.now(),o=this.rng.range(.9,1.12),a=i.createBufferSource();a.buffer=this.whiteNoiseBuffer;const l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=t===rt.METAL?3100*o:t===rt.WOOD?820*o:t===rt.GLASS?4200*o:1350*o,l.Q.value=1.8;const c=i.createGain();if(c.gain.setValueAtTime(.45,s),c.gain.exponentialRampToValueAtTime(.001,s+.085),a.connect(l).connect(c).connect(e),a.start(s,this.rng.range(0,1.5),.09),t===rt.METAL||n){const h=i.createOscillator(),u=i.createGain();h.type="sine";const d=n?3800*o:1950*o,f=n?1150*o:1820*o;h.frequency.setValueAtTime(d,s),h.frequency.exponentialRampToValueAtTime(f,s+(n?.24:.15)),u.gain.setValueAtTime(n?.28:.18,s),u.gain.exponentialRampToValueAtTime(.001,s+(n?.25:.16)),h.connect(u).connect(e),h.start(s),h.stop(s+.26)}e instanceof PannerNode&&this.releaseAfter([e],.3),this.trackVoice(.26)}playCasingBounce(t,e,n){if(!this.ensureContext()||!this.ctx)return;const i=this.ctx,s=this.now(),o=Math.min(.22,t*.045);if(o<.01)return;const a=(e===rt.METAL?1.08:1)*this.rng.range(.95,1.06);for(const l of[6150,9280]){const c=i.createOscillator(),h=i.createGain();c.type="sine",c.frequency.setValueAtTime(l*a,s),h.gain.setValueAtTime(o*.5,s),h.gain.exponentialRampToValueAtTime(8e-4,s+.055),c.connect(h).connect(n),c.start(s),c.stop(s+.06)}n instanceof PannerNode&&this.releaseAfter([n],.1),this.trackVoice(.07)}playWeaponHandling(t){if(!this.ensureContext()||!this.ctx)return;const e=this.ctx,n=this.now(),i=this.buses.weapons,s=(o,a,l,c)=>{const h=e.createOscillator(),u=e.createGain();h.type="triangle",h.frequency.setValueAtTime(a,n+o),h.frequency.exponentialRampToValueAtTime(a*.45,n+o+l),u.gain.setValueAtTime(c,n+o),u.gain.exponentialRampToValueAtTime(.001,n+o+l),h.connect(u).connect(i),h.start(n+o),h.stop(n+o+l+.005)};t==="mag_out"?(s(0,1800,.025,.25),s(.06,620,.07,.22)):t==="mag_in"?(s(0,480,.05,.3),s(.045,2200,.03,.32)):t==="bolt_release"?(s(0,2600,.02,.28),s(.022,1350,.055,.35)):t==="fire_mode"||t==="empty_click"?s(0,2900,.018,.24):t==="inspect"&&(s(.05,750,.06,.14),s(.45,1650,.03,.16)),this.trackVoice(.15)}playUISound(t){if(!this.ensureContext()||!this.ctx)return;const e=this.ctx,n=this.now(),i=this.buses.ui;if(t==="hover"){const s=e.createOscillator(),o=e.createGain();s.type="sine",s.frequency.setValueAtTime(1400,n),o.gain.setValueAtTime(.05,n),o.gain.exponentialRampToValueAtTime(.001,n+.025),s.connect(o).connect(i),s.start(n),s.stop(n+.03)}else if(t==="click"){const s=e.createOscillator(),o=e.createGain();s.type="triangle",s.frequency.setValueAtTime(2100,n),s.frequency.exponentialRampToValueAtTime(900,n+.035),o.gain.setValueAtTime(.16,n),o.gain.exponentialRampToValueAtTime(.001,n+.04),s.connect(o).connect(i),s.start(n),s.stop(n+.045)}else if(t==="hit"){const s=e.createBufferSource();s.buffer=this.whiteNoiseBuffer;const o=e.createBiquadFilter();o.type="highpass",o.frequency.value=2600;const a=e.createGain();a.gain.setValueAtTime(.28,n),a.gain.exponentialRampToValueAtTime(.001,n+.028),s.connect(o).connect(a).connect(i),s.start(n,.2,.032)}else if(t==="headshot"){this.playUISound("hit");const s=e.createOscillator(),o=e.createGain();s.type="sine",s.frequency.setValueAtTime(3450,n),s.frequency.exponentialRampToValueAtTime(2750,n+.085),o.gain.setValueAtTime(.26,n),o.gain.exponentialRampToValueAtTime(.001,n+.09),s.connect(o).connect(i),s.start(n),s.stop(n+.095)}else if(t==="kill")for(const[s,o]of[[520,0],[780,.035]]){const a=e.createOscillator(),l=e.createGain();a.type="triangle",a.frequency.setValueAtTime(s,n+o),l.gain.setValueAtTime(.18,n+o),l.gain.exponentialRampToValueAtTime(.001,n+o+.16),a.connect(l).connect(i),a.start(n+o),a.stop(n+o+.17)}}playHeartbeatPulse(t){if(!this.ctx)return;const e=this.ctx,n=this.now();for(const[i,s,o]of[[0,58,.28*t],[.16,48,.2*t]]){const a=e.createOscillator(),l=e.createGain();a.type="sine",a.frequency.setValueAtTime(s,n+i),a.frequency.exponentialRampToValueAtTime(30,n+i+.11),l.gain.setValueAtTime(o,n+i),l.gain.exponentialRampToValueAtTime(.001,n+i+.12),a.connect(l).connect(this.buses.characters),a.start(n+i),a.stop(n+i+.13)}}startAmbientStreetBed(){if(!this.ctx||this.ambientStarted)return;this.ambientStarted=!0;const t=this.ctx,e=t.createBufferSource();e.buffer=this.brownNoiseBuffer,e.loop=!0;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=340,n.Q.value=1.4;const i=t.createOscillator(),s=t.createGain();i.frequency.value=.14,s.gain.value=160,i.connect(s).connect(n.frequency);const o=t.createGain();o.gain.value=.22,e.connect(n).connect(o).connect(this.buses.environment),e.start(),i.start()}}class R0{constructor(t,e){this.synth=t,this.bvh=e}synth;bvh;recentSoundEvents=[];debugRays=[];listenerPos=new S;listenerForward=new S(0,0,-1);listenerUp=new S(0,1,0);_dir=new S;_probeDir=new S;updateListener(t,e,n,i,s){this.listenerPos.copy(t),this.listenerForward.copy(e),this.listenerUp.copy(n);for(let c=this.recentSoundEvents.length-1;c>=0;c--)s-this.recentSoundEvents[c].timestamp>3.5&&this.recentSoundEvents.splice(c,1);for(let c=this.debugRays.length-1;c>=0;c--)this.debugRays[c].ttl-=i,this.debugRays[c].ttl<=0&&this.debugRays.splice(c,1);const o=this.synth.ctx;if(!o||o.state!=="running")return;const a=o.listener,l=o.currentTime;a.positionX?(a.positionX.setTargetAtTime(t.x,l,.015),a.positionY.setTargetAtTime(t.y,l,.015),a.positionZ.setTargetAtTime(t.z,l,.015),a.forwardX.setTargetAtTime(e.x,l,.015),a.forwardY.setTargetAtTime(e.y,l,.015),a.forwardZ.setTargetAtTime(e.z,l,.015),a.upX.setTargetAtTime(n.x,l,.015),a.upY.setTargetAtTime(n.y,l,.015),a.upZ.setTargetAtTime(n.z,l,.015)):(a.setPosition(t.x,t.y,t.z),a.setOrientation(e.x,e.y,e.z,n.x,n.y,n.z))}emitGameplaySound(t,e,n,i){this.recentSoundEvents.push({position:t.clone(),loudness:e,team:n,timestamp:i})}computeOcclusion(t){this._dir.subVectors(t,this.listenerPos);const e=this._dir.length();if(e<.25)return{distance:e,occlusion:0};this._dir.multiplyScalar(1/e);const n=this.bvh.raycastAll(this.listenerPos,this._dir,e-.15);let i=0;for(let s=0;s<n.length;s++){const o=n[s].materialId,a=o===rt.CONCRETE||o===rt.BRICK||o===rt.PLASTER?.38:o===rt.WOOD||o===rt.GLASS?.16:.25;i+=a}return i=Math.min(.92,i),this.debugRays.length<48&&this.debugRays.push({start:this.listenerPos.clone(),end:t.clone(),occluded:i>.05,ttl:.65}),{distance:e,occlusion:i}}isEnclosedSpace(t){return this._probeDir.set(0,1,0),this.bvh.raycast(t,this._probeDir,5.5).hit}createHRTFPanner(t,e){const n=this.synth.ctx;if(!n)return null;const i=n.createPanner();return i.panningModel=this.synth.lowCostPanning?"equalpower":"HRTF",i.distanceModel="inverse",i.refDistance=2.2,i.maxDistance=120,i.rolloffFactor=.85,i.positionX.value=t.x,i.positionY.value=t.y,i.positionZ.value=t.z,i.connect(e),i}playGunshotAt(t,e,n,i=!1){if(this.emitGameplaySound(t,68,e,n),!this.synth.ensureContext()||!this.synth.ctx)return;const o=this.isEnclosedSpace(t)?this.synth.buses.reverbInterior:this.synth.buses.reverbExterior;if(i){this.synth.triggerLayeredGunshot(this.synth.buses.weapons,o,0,0,0,!0);return}if(!this.synth.canStartVoice())return;const{distance:a,occlusion:l}=this.computeOcclusion(t),c=Math.min(.28,a/343),h=this.createHRTFPanner(t,this.synth.buses.weapons);h&&this.synth.triggerLayeredGunshot(h,o,c,a,l,!1)}playBulletWhizzNearListener(t){if(!this.synth.ensureContext()||!this.synth.ctx)return;const e=t.distanceTo(this.listenerPos);if(e>3.2)return;const n=this.createHRTFPanner(t,this.synth.buses.impacts);if(!n)return;const i=this.synth.ctx,s=this.synth.now(),o=i.createOscillator(),a=i.createGain();o.type="sawtooth",o.frequency.setValueAtTime(2800,s),o.frequency.exponentialRampToValueAtTime(420,s+.085),a.gain.setValueAtTime(.26*(1-e/3.2),s),a.gain.exponentialRampToValueAtTime(.001,s+.09),o.connect(a).connect(n),o.start(s),o.stop(s+.095),this.synth.releaseAfter([n],.12)}playImpactAt(t,e,n=!1,i=0){if(this.emitGameplaySound(t,18,"neutral",i),!this.synth.ensureContext()||!this.synth.canStartVoice())return;const{distance:s}=this.computeOcclusion(t);if(s>75)return;const o=this.createHRTFPanner(t,this.synth.buses.impacts);o&&this.synth.playSurfaceImpact(e,o,n)}playCasingBounceAt(t,e,n){if(!this.synth.ensureContext()||!this.synth.canStartVoice()||t.distanceToSquared(this.listenerPos)>324)return;const i=this.createHRTFPanner(t,this.synth.buses.impacts);i&&this.synth.playCasingBounce(e,n,i)}playFootstepAt(t,e,n,i,s,o=!1){if(this.emitGameplaySound(t,n?22:12,i,s),!this.synth.ensureContext())return;if(o){this.synth.playFootstep(e,n,this.synth.buses.footsteps);return}if(t.distanceToSquared(this.listenerPos)>1024||!this.synth.canStartVoice())return;const a=this.createHRTFPanner(t,this.synth.buses.footsteps);a&&this.synth.playFootstep(e,n,a)}}const P0=new kt().makeScale(0,0,0);class D0{constructor(t,e,n=120){this.rng=e,this.maxDecals=n,this.group.name="EffectsSystem",this.initParticlePools(),this.initDecalPool(),this.initTracerPool(),t.add(this.group)}rng;group=new ee;maxParticles=320;particles=[];particleCursor=0;chipInstanced;smokeInstanced;maxDecals=120;decalCursor=0;decalInstanced;maxTracers=24;tracers=[];tracerCursor=0;tracerMeshes=[];_mat4=new kt;_quat=new Be;_scale=new S;_up=new S(0,0,1);_dir=new S;_mid=new S;initParticlePools(){for(let h=0;h<this.maxParticles;h++)this.particles.push({active:!1,kind:"chip",position:new S,velocity:new S,color:new $t(1,1,1),size:.04,endSize:.01,age:0,lifetime:.5,gravity:9.8,drag:1});const t=new Xo(.5,0),e=new on({color:16777215});this.chipInstanced=new Wi(t,e,this.maxParticles),this.chipInstanced.instanceMatrix.setUsage(zs),this.chipInstanced.frustumCulled=!1;const n=64,i=new Uint8Array(n*n*4);for(let h=0;h<n;h++)for(let u=0;u<n;u++){const d=u/(n-1)*2-1,f=h/(n-1)*2-1,g=Math.hypot(d,f),v=xe.valueNoise2D(u*.18,h*.18,99),p=Math.max(0,Math.min(1,1-g*(1.05+v*.3))),m=p*p*(3-2*p),y=Math.round(m*150),_=(h*n+u)*4;i[_]=242,i[_+1]=232,i[_+2]=214,i[_+3]=y}const s=new Qi(i,n,n,me);s.needsUpdate=!0;const o=new an(1,1),a=new on({map:s,transparent:!0,opacity:.5,depthWrite:!1,side:He});a.color.setScalar(.72),this.smokeInstanced=new Wi(o,a,this.maxParticles),this.smokeInstanced.instanceMatrix.setUsage(zs),this.smokeInstanced.frustumCulled=!1;const l=new kt().makeScale(0,0,0),c=new $t(1,1,1);for(let h=0;h<this.maxParticles;h++)this.chipInstanced.setMatrixAt(h,l),this.chipInstanced.setColorAt(h,c),this.smokeInstanced.setMatrixAt(h,l),this.smokeInstanced.setColorAt(h,c);this.group.add(this.chipInstanced),this.group.add(this.smokeInstanced)}initDecalPool(){const e=new Uint8Array(16384);for(let a=0;a<64;a++)for(let l=0;l<64;l++){const c=l/63*2-1,h=a/63*2-1,u=Math.hypot(c,h),d=Math.atan2(h,c),f=.72+.28*Math.sin(d*7)*Math.cos(d*5),g=(a*64+l)*4;if(u<.26*f)e[g]=18,e[g+1]=16,e[g+2]=15,e[g+3]=240;else if(u<.68*f){const v=1-(u-.26*f)/(.42*f);e[g]=135,e[g+1]=124,e[g+2]=108,e[g+3]=Math.round(v*175)}else e[g+3]=0}const n=new Qi(e,64,64,me);n.needsUpdate=!0;const i=new an(.15,.15),s=new on({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.decalInstanced=new Wi(i,s,this.maxDecals),this.decalInstanced.instanceMatrix.setUsage(zs),this.decalInstanced.frustumCulled=!1;const o=new kt().makeScale(0,0,0);for(let a=0;a<this.maxDecals;a++)this.decalInstanced.setMatrixAt(a,o);this.decalInstanced.instanceMatrix.needsUpdate=!0,this.group.add(this.decalInstanced)}initTracerPool(){const t=new he(.009,.004,1,6);t.rotateX(Math.PI*.5);const e=new on({color:16758876,transparent:!0,opacity:.88,blending:Mi,depthWrite:!1});for(let n=0;n<this.maxTracers;n++){const i=new X(t,e);i.visible=!1,this.group.add(i),this.tracerMeshes.push(i),this.tracers.push({active:!1,start:new S,end:new S,age:0,lifetime:.055})}}allocParticle(){const t=this.particles[this.particleCursor];return this.particleCursor=(this.particleCursor+1)%this.maxParticles,t}spawnBulletDecal(t,e,n=1){const i=this.decalCursor;this.decalCursor=(this.decalCursor+1)%this.maxDecals;const s=t.clone().addScaledVector(e,.008);this._quat.setFromUnitVectors(this._up,e);const o=new Be().setFromAxisAngle(e,this.rng.range(0,Math.PI*2));this._quat.premultiply(o);const a=n*this.rng.range(.85,1.25);this._scale.set(a,a,a),this._mat4.compose(s,this._quat,this._scale),this.decalInstanced.setMatrixAt(i,this._mat4),this.decalInstanced.instanceMatrix.needsUpdate=!0}spawnTracer(t,e){const n=this.tracerCursor;this.tracerCursor=(this.tracerCursor+1)%this.maxTracers;const i=this.tracers[n];i.active=!0,i.start.copy(t),i.end.copy(e),i.age=0,i.lifetime=.055;const s=this.tracerMeshes[n];s.visible=!0,this._dir.subVectors(e,t);const o=Math.min(18,this._dir.length());this._mid.copy(t).addScaledVector(this._dir.normalize(),Math.min(o*.5,6)),s.position.copy(this._mid),s.lookAt(e),s.scale.set(1,1,Math.min(6.5,o*.55))}spawnMuzzleGasAndSmoke(t,e,n){const i=this.allocParticle();i.active=!0,i.kind="smoke",i.position.copy(t).addScaledVector(e,.08),i.velocity.copy(e).multiplyScalar(1.4).add(new S(0,.45,0)),i.color.setHex(14208962),i.size=.09,i.endSize=.42+n*.25,i.age=0,i.lifetime=.36+n*.28,i.gravity=-.6,i.drag=3.5}spawnSurfaceImpact(t,e,n,i=!1){this.spawnBulletDecal(t,e,n===rt.METAL?.72:1.05);let s=14470066,o=10260346,a=!1;n===rt.BRICK?(s=13204317,o=9389616):n===rt.METAL||i?(s=12107460,o=16759874,a=!0):n===rt.WOOD?(s=13018746,o=8214578):n===rt.ROAD||n===rt.DIRT?(s=11048312,o=4538684):n===rt.GLASS&&(s=14478322,o=11063526);const l=a?2:4;for(let h=0;h<l;h++){const u=this.allocParticle();u.active=!0,u.kind="smoke",u.position.copy(t).addScaledVector(e,.04),u.velocity.copy(e).multiplyScalar(this.rng.range(.8,2.4)).add(new S(this.rng.signed()*.9,this.rng.range(.2,1.2),this.rng.signed()*.9)),u.color.setHex(s),u.size=.14,u.endSize=this.rng.range(.55,.95),u.age=0,u.lifetime=this.rng.range(.38,.72),u.gravity=-.35,u.drag=2.8}const c=a?10:6;for(let h=0;h<c;h++){const u=this.allocParticle();u.active=!0,u.kind=a?"spark":"chip",u.position.copy(t).addScaledVector(e,.03),u.velocity.copy(e).multiplyScalar(this.rng.range(2.8,7.5)).add(new S(this.rng.signed()*3.2,this.rng.range(.8,4.2),this.rng.signed()*3.2)),u.color.setHex(o),u.size=a?.032:.038,u.endSize=.005,u.age=0,u.lifetime=this.rng.range(.22,.48),u.gravity=14.5,u.drag=.8}}spawnExplosionEffect(t,e){const n=e==="frag"?28:16;for(let i=0;i<n;i++){const s=this.allocParticle();s.active=!0,s.kind=i%2===0?"smoke":"spark",s.position.copy(t),s.velocity.set(this.rng.signed()*8.5,this.rng.range(1.5,9.5),this.rng.signed()*8.5),s.color.setHex(e==="flash"?16777215:i<8?16749622:7234907),s.size=s.kind==="smoke"?.45:.08,s.endSize=s.kind==="smoke"?2.4:.01,s.age=0,s.lifetime=s.kind==="smoke"?1.15:.55,s.gravity=s.kind==="smoke"?-.8:14,s.drag=s.kind==="smoke"?2.2:.6}}update(t,e){const n=P0;for(let i=0;i<this.maxParticles;i++){const s=this.particles[i];if(!s.active){this.chipInstanced.setMatrixAt(i,n),this.smokeInstanced.setMatrixAt(i,n);continue}if(s.age+=t,s.age>=s.lifetime){s.active=!1,this.chipInstanced.setMatrixAt(i,n),this.smokeInstanced.setMatrixAt(i,n);continue}const o=s.age/s.lifetime;s.velocity.y-=s.gravity*t,s.velocity.multiplyScalar(Math.max(0,1-s.drag*t)),s.kind==="smoke"&&(s.velocity.x+=Math.sin(s.age*6+i)*.4*t),s.position.addScaledVector(s.velocity,t),s.position.y<.02&&(s.position.y=.02,s.velocity.y*=-.35);const a=Kt.lerp(s.size,s.endSize,o);this._scale.set(a,a,a),s.kind==="smoke"?(this._quat.copy(e.quaternion),this._mat4.compose(s.position,this._quat,this._scale),this.smokeInstanced.setMatrixAt(i,this._mat4),this.smokeInstanced.setColorAt(i,s.color),this.chipInstanced.setMatrixAt(i,n)):(this._quat.identity(),this._mat4.compose(s.position,this._quat,this._scale),this.chipInstanced.setMatrixAt(i,this._mat4),this.chipInstanced.setColorAt(i,s.color),this.smokeInstanced.setMatrixAt(i,n))}this.chipInstanced.instanceMatrix.needsUpdate=!0,this.chipInstanced.instanceColor&&(this.chipInstanced.instanceColor.needsUpdate=!0),this.smokeInstanced.instanceMatrix.needsUpdate=!0,this.smokeInstanced.instanceColor&&(this.smokeInstanced.instanceColor.needsUpdate=!0);for(let i=0;i<this.maxTracers;i++){const s=this.tracers[i];s.active&&(s.age+=t,s.age>=s.lifetime&&(s.active=!1,this.tracerMeshes[i].visible=!1))}}getActiveParticleCount(){let t=0;for(let e=0;e<this.maxParticles;e++)this.particles[e].active&&t++;return t}}class L0{constructor(t,e,n,i,s){this.bvh=t,this.rigidWorld=e,this.effects=n,this.spatialAudio=i,this.rng=s}bvh;rigidWorld;effects;spatialAudio;rng;shotCounter=0;_rayDir=new S;_reflDir=new S;_impulse=new S;fireBallisticTrace(t,e,n,i,s,o,a,l,c,h,u){this.shotCounter++,this._rayDir.copy(e).add(new S(this.rng.gaussian()*i*.55,this.rng.gaussian()*i*.55,this.rng.gaussian()*i*.55)).normalize();const d=140,f=this.bvh.raycastAll(t,this._rayDir,d);let g=d,v=!1,p=!1,m=1,y=t.clone().addScaledVector(this._rayDir,d);if(f.length>0){const A=f[0];y.copy(A.point),g=A.distance;const M=Math.abs(this._rayDir.dot(A.normal));if((A.materialId===rt.CONCRETE||A.materialId===rt.METAL||A.materialId===rt.ROAD||A.materialId===rt.BRICK)&&M<.26&&this.rng.chance(.65)){p=!0,this._reflDir.copy(this._rayDir).addScaledVector(A.normal,-2*this._rayDir.dot(A.normal)).normalize();const I=A.point.clone().addScaledVector(this._reflDir,14);this.effects.spawnTracer(A.point,I)}if(this.effects.spawnSurfaceImpact(A.point,A.normal,A.materialId,p),this.spatialAudio.playImpactAt(A.point,A.materialId,p,u),(A.materialId===rt.WOOD&&A.thickness<=.3||A.materialId===rt.GLASS&&A.thickness<=.25||A.materialId===rt.METAL&&A.thickness<=.14||A.materialId===rt.PLASTER&&A.thickness<=.22)&&!p&&(v=!0,m=.62,g=f.length>1?f[1].distance:d,f.length>1)){const I=f[1];this.effects.spawnSurfaceImpact(I.point,I.normal,I.materialId,!1)}}const _=this.rigidWorld.raycastDynamic(t,this._rayDir,g);_.body&&_.distance<g&&(this._impulse.copy(this._rayDir).multiplyScalar(16.5),this.rigidWorld.applyImpulseAtPoint(_.body,this._impulse,_.point),this.effects.spawnSurfaceImpact(_.point,_.normal,_.body.materialId,!1),this.spatialAudio.playImpactAt(_.point,_.body.materialId,!1,u));let x=null,w=g,T="torso",R=new S;for(let A=0;A<c.length;A++){const M=c[A];if(!M.isAlive||M.id===o||M.team===l)continue;const E=M.getPosition(),D=M.getHeight(),I=this.intersectCombatantHitboxes(t,this._rayDir,E,D,w);I.hit&&(x=M,w=I.distance,T=I.zone,R.copy(I.point))}if(this.shotCounter%2===0){const A=x?R:y;this.effects.spawnTracer(n,A)}if(o!=="player"){const M=h.clone().sub(t).dot(this._rayDir);if(M>1.5&&M<g){const E=t.clone().addScaledVector(this._rayDir,M);E.distanceTo(h)<2.8&&this.spatialAudio.playBulletWhizzNearListener(E)}}if(x){const M=Math.round(s*(T==="head"?2:T==="torso"?1:.78)*m);this._impulse.copy(this._rayDir).multiplyScalar(T==="head"?95:65),this._impulse.y+=18;const E=x.applyDamage(M,T,R,this._impulse,o,a,l,t);return this.effects.spawnSurfaceImpact(R,this._rayDir.clone().negate(),rt.CLOTH,!1),{hitTarget:!0,hitZone:T,killed:E.killed,victimName:x.name,penetrated:v,ricocheted:p,impactPoint:R}}return{hitTarget:!1,hitZone:"torso",killed:!1,victimName:"",penetrated:v,ricocheted:p,impactPoint:y}}intersectCombatantHitboxes(t,e,n,i,s){const o=new S(n.x,n.y+i-.19,n.z),a=.19,l=t.x-o.x,c=t.y-o.y,h=t.z-o.z,u=l*e.x+c*e.y+h*e.z,d=l*l+c*c+h*h-a*a,f=u*u-d;if(f>=0){const x=-u-Math.sqrt(f);if(x>.1&&x<s)return{hit:!0,distance:x,zone:"head",point:t.clone().addScaledVector(e,x)}}const g=.34,v=e.x,p=e.z,m=t.x-n.x,y=t.z-n.z,_=v*v+p*p;if(_>1e-6){const x=m*v+y*p,w=m*m+y*y-g*g,T=x*x-_*w;if(T>=0){const R=(-x-Math.sqrt(T))/_;if(R>.1&&R<s){const M=t.y+e.y*R-n.y;if(M>=0&&M<=i-.22){const E=M>i*.48?"torso":"limb";return{hit:!0,distance:R,zone:E,point:t.clone().addScaledVector(e,R)}}}}}return{hit:!1,distance:s,zone:"torso",point:new S}}}class fc{position=new S;prevPosition=new S;velocity=new S;radius=.36;standHeight=1.76;crouchHeight=1.12;currentHeight=1.76;stepOffset=.42;maxSlopeCos=Math.cos(46*Math.PI/180);isGrounded=!1;wasGrounded=!1;isCrouching=!1;isMantling=!1;groundNormal=new S(0,1,0);groundMaterial=rt.ROAD;landingImpactSpeed=0;mantleStart=new S;mantleTarget=new S;mantleTimer=0;mantleDuration=.36;candidateTris=[];_sphereCenter=new S;_closest=new S;_push=new S;_rayOrigin=new S;_down=new S(0,-1,0);_up=new S(0,1,0);constructor(t){this.position.copy(t),this.prevPosition.copy(t)}teleport(t){this.position.copy(t),this.prevPosition.copy(t),this.velocity.set(0,0,0),this.isGrounded=!1,this.isMantling=!1}getInterpolatedPosition(t,e){return e.lerpVectors(this.prevPosition,this.position,t)}getEyePosition(t,e){return this.getInterpolatedPosition(t,e),e.y+=this.currentHeight-.14,e}canStandUp(t){return this._rayOrigin.set(this.position.x,this.position.y+this.crouchHeight*.5,this.position.z),!t.raycast(this._rayOrigin,this._up,this.standHeight-this.crouchHeight*.5+.08).hit}tryMantle(t,e){if(this.isMantling)return!1;const n=new S(this.position.x,this.position.y+.65,this.position.z),i=t.raycast(n,e,this.radius+.65);if(!i.hit||i.normal.y>.5)return!1;const s=new S(this.position.x+e.x*(i.distance+.35),this.position.y+1.65,this.position.z+e.z*(i.distance+.35));if(t.raycast(new S(this.position.x,this.position.y+1.55,this.position.z),e,i.distance+.5).hit)return!1;const a=t.raycast(s,this._down,1.15);if(!a.hit||a.normal.y<this.maxSlopeCos)return!1;const l=a.point.y,c=l-this.position.y;return c<.5||c>1.55||t.raycast(new S(a.point.x,l+.1,a.point.z),this._up,this.currentHeight).hit?!1:(this.isMantling=!0,this.mantleTimer=0,this.mantleStart.copy(this.position),this.mantleTarget.set(a.point.x,l+.02,a.point.z),this.velocity.set(0,0,0),!0)}step(t,e,n,i,s,o,a){if(this.prevPosition.copy(this.position),this.wasGrounded=this.isGrounded,this.landingImpactSpeed=0,this.isMantling){this.mantleTimer+=t;const p=Math.min(1,this.mantleTimer/this.mantleDuration),m=p*p*(3-2*p);this.position.lerpVectors(this.mantleStart,this.mantleTarget,m),this.position.y+=Math.sin(p*Math.PI)*.16,p>=1&&(this.isMantling=!1,this.isGrounded=!0);return}o?this.isCrouching=!0:this.isCrouching&&this.canStandUp(e)&&(this.isCrouching=!1);const l=this.isCrouching?this.crouchHeight:this.standHeight;if(this.currentHeight+=(l-this.currentHeight)*Math.min(1,t*16),s){if(a&&this.tryMantle(e,a))return;this.isGrounded&&(this.velocity.y=6.25,this.isGrounded=!1)}const c=this.isGrounded?15.5:4.2,h=Math.min(1,c*t);this.velocity.x+=(n-this.velocity.x)*h,this.velocity.z+=(i-this.velocity.z)*h,this.isGrounded?this.velocity.y<0&&(this.velocity.y=-.5):(this.velocity.y-=19.6*t,this.velocity.y<-32&&(this.velocity.y=-32));const u=this.velocity.y,d=this.velocity.length()*t,f=Math.max(1,Math.min(4,Math.ceil(d/(this.radius*.45)))),g=t/f;let v=!1;for(let p=0;p<f;p++)this.position.x+=this.velocity.x*g,this.position.y+=this.velocity.y*g,this.position.z+=this.velocity.z*g,this.resolveCapsuleCollisions(e)&&(v=!0);if(!v&&this.wasGrounded&&this.velocity.y<=0){this._rayOrigin.set(this.position.x,this.position.y+.25,this.position.z);const p=e.raycast(this._rayOrigin,this._down,.25+this.stepOffset*.75);p.hit&&p.normal.y>=this.maxSlopeCos&&(this.position.y=p.point.y,this.velocity.y=0,this.groundNormal.copy(p.normal),this.groundMaterial=p.materialId,v=!0)}v&&!this.wasGrounded&&u<-2.2&&(this.landingImpactSpeed=-u),this.isGrounded=v}resolveCapsuleCollisions(t){const e=this.radius,n=this.currentHeight;let i=!1;if(t.overlapAABB(this.position.x-e-.15,this.position.y-.15,this.position.z-e-.15,this.position.x+e+.15,this.position.y+n+.15,this.position.z+e+.15,this.candidateTris),this.candidateTris.length===0)return!1;const s=[e,n*.5,Math.max(e,n-e)];for(let o=0;o<3;o++)for(let a=0;a<3;a++){const l=this.position.y+s[a];this._sphereCenter.set(this.position.x,l,this.position.z);for(let c=0;c<this.candidateTris.length;c++){const h=this.candidateTris[c];t.closestPointOnTriangle(this._sphereCenter,h,this._closest),this._push.subVectors(this._sphereCenter,this._closest);const u=this._push.lengthSq();if(u<e*e&&u>1e-10){const d=Math.sqrt(u),f=e-d;this._push.multiplyScalar(1/d);const g=this._closest.y-this.position.y;if(a===0&&this._push.y<this.maxSlopeCos&&g>.03&&g<=this.stepOffset&&(this.isGrounded||this.wasGrounded)){this._rayOrigin.set(this._closest.x,this.position.y+this.stepOffset+.15,this._closest.z);const v=t.raycast(this._rayOrigin,this._down,this.stepOffset+.2);if(v.hit&&v.normal.y>=this.maxSlopeCos&&v.point.y>this.position.y){this.position.y=v.point.y,this._sphereCenter.y=this.position.y+s[a],i=!0,this.groundNormal.copy(v.normal),this.groundMaterial=v.materialId;continue}}if(this.position.addScaledVector(this._push,f),this._sphereCenter.addScaledVector(this._push,f),this._push.y>=this.maxSlopeCos&&a===0)i=!0,this.groundNormal.copy(this._push),this.groundMaterial=t.materialIds[h],this.velocity.y<0&&(this.velocity.y=0);else{const v=this.velocity.dot(this._push);v<0&&this.velocity.addScaledVector(this._push,-v)}}}}return i}}function I0(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new ye;let c=0;for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=vl(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);const g=vl(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function vl(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new Te(o,e,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const v=h.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function pc(r,t=[]){const e=new Set(t),n=[];r.traverse(s=>{s.children.length>0&&n.push(s)});let i=0;for(const s of n){const o=new Map;for(const a of s.children){const l=a;if(!l.isMesh||l.isInstancedMesh||l.isSkinnedMesh||e.has(l)||l.children.length>0||!l.visible||Array.isArray(l.material)||l.renderOrder!==0)continue;const c=l.geometry,h=Object.keys(c.attributes).sort().join(","),u=[l.material.uuid,c.index?"i":"n",h,l.castShadow?1:0,l.receiveShadow?1:0].join("|");let d=o.get(u);d||(d=[],o.set(u,d)),d.push(l)}for(const a of o.values()){if(a.length<2)continue;const l=[];for(const d of a){d.updateMatrix();const f=d.geometry.clone();f.applyMatrix4(d.matrix),f.clearGroups(),l.push(f)}const c=I0(l,!1);for(const d of l)d.dispose();if(!c)continue;c.computeBoundingSphere(),c.computeBoundingBox();const h=a[0],u=new X(c,h.material);u.name=`${s.name||s.type}_merged`,u.castShadow=h.castShadow,u.receiveShadow=h.receiveShadow,u.frustumCulled=h.frustumCulled;for(const d of a)s.remove(d);s.add(u),i+=a.length-1}}return i}class xl{constructor(t=180,e=22){this.stiffness=t,this.damping=e}stiffness;damping;value=new S;velocity=new S;target=new S;impulse(t,e,n){this.velocity.x+=t,this.velocity.y+=e,this.velocity.z+=n}step(t){const e=Math.min(t,.03333333333333333),n=(this.target.x-this.value.x)*this.stiffness-this.velocity.x*this.damping,i=(this.target.y-this.value.y)*this.stiffness-this.velocity.y*this.damping,s=(this.target.z-this.value.z)*this.stiffness-this.velocity.z*this.damping;this.velocity.x+=n*e,this.velocity.y+=i*e,this.velocity.z+=s*e,this.value.x+=this.velocity.x*e,this.value.y+=this.velocity.y*e,this.value.z+=this.velocity.z*e}}class U0{constructor(t){this.rng=t,this.root.name="FirstPersonViewmodelRoot",this.root.add(this.weaponRig),this.buildCarbineAndHands(),pc(this.weaponRig,[this.boltCarrierMesh,this.chargingHandleMesh,this.selectorMesh,this.opticLensMesh])}rng;root=new ee;weaponRig=new ee;magazineGroup=new ee;boltCarrierMesh;chargingHandleMesh;selectorMesh;leftHandGroup=new ee;rightHandGroup=new ee;muzzleFlashGroup=new ee;muzzleLight;opticLensMesh;opticUniforms;weaponName="MK18 MOD-C4";caliberLabel="5.56×45MM NATO";magCapacity=30;magAmmo=30;reserveAmmo=120;tacticalCount=1;explosiveCount=1;fireMode="AUTO";rpm=760;fireInterval=60/760;fireCooldown=0;consecutiveShots=0;barrelHeat=0;adsProgress=0;isReloading=!1;isEmptyReload=!1;reloadTimer=0;reloadDuration=2.05;magOutPlayed=!1;magInPlayed=!1;boltPlayed=!1;isInspecting=!1;inspectTimer=0;inspectDuration=2.75;muzzleFlashTimer=0;wallProximity=0;currentSpread=.003;posSpring=new xl(220,24);rotSpring=new xl(195,21);recoilCameraKick=new j;fovKick=0;hipOffset=new S(.118,-.106,-.265);adsOffset=new S(0,-.0565,-.195);_worldMuzzle=new S;_basePos=new S;_baseRot=new S;_worldEject=new S;buildCarbineAndHands(){const t=new ie({color:2500910,metalness:.84,roughness:.34}),e=new ie({color:2895925,metalness:.8,roughness:.38}),n=new ie({color:1842721,metalness:.9,roughness:.44}),i=new ie({color:7107450,metalness:.92,roughness:.24}),s=new ie({color:1776670,metalness:.08,roughness:.76}),o=new ie({color:10192489,metalness:.06,roughness:.72}),a=new ie({color:14067786,metalness:.9,roughness:.22}),l=new ie({color:3881010,metalness:.04,roughness:.86}),c=new ie({color:2236445,metalness:.12,roughness:.64}),h=new ie({color:7234383,metalness:.02,roughness:.88}),u=new X(new pt(.036,.042,.195),t);u.position.set(0,.012,0),this.weaponRig.add(u);const d=new X(new pt(.034,.044,.165),e);d.position.set(0,-.024,.01),this.weaponRig.add(d);const f=new X(new pt(.037,.046,.068),e);f.position.set(0,-.036,-.038),this.weaponRig.add(f);const g=new X(new pt(.014,.005,.046),e);g.position.set(0,-.052,.022),this.weaponRig.add(g);const v=new X(new pt(.006,.02,.008),n);v.position.set(0,-.038,.024),v.rotation.x=.25,this.weaponRig.add(v);const p=new pt(.012,.018,.068);this.boltCarrierMesh=new X(p,i),this.boltCarrierMesh.position.set(.013,.014,-.025),this.weaponRig.add(this.boltCarrierMesh);const m=new X(new pt(.003,.016,.066),n);m.position.set(.02,.002,-.025),m.rotation.z=-.35,this.weaponRig.add(m);const y=new X(new pt(.012,.022,.018),t);y.position.set(.02,.014,.022),this.weaponRig.add(y);const _=new X(new he(.006,.007,.026,8),n);_.rotation.x=Math.PI*.5,_.rotation.z=-.25,_.position.set(.021,.008,.052),this.weaponRig.add(_),this.selectorMesh=new X(new pt(.006,.008,.022),i),this.selectorMesh.position.set(-.019,-.016,.052),this.weaponRig.add(this.selectorMesh);const x=new ee,w=new X(new pt(.012,.008,.055),t),T=new X(new pt(.044,.01,.014),i);T.position.set(0,0,.026),x.add(w,T),x.position.set(0,.028,.078),this.chargingHandleMesh=w,this.weaponRig.add(x);const R=new X(new pt(.028,.095,.04),o);R.position.set(0,-.072,.056),R.rotation.x=.28,this.weaponRig.add(R);const A=new X(new he(.015,.015,.16,12),e);A.rotation.x=Math.PI*.5,A.position.set(0,.008,.165),this.weaponRig.add(A);const M=new X(new pt(.042,.092,.155),o);M.position.set(0,-.012,.195),this.weaponRig.add(M);const E=new X(new pt(.044,.105,.018),s);E.position.set(0,-.016,.276),this.weaponRig.add(E);const D=new X(new pt(.04,.044,.235),t);D.position.set(0,.01,-.215),this.weaponRig.add(D);for(let _t=0;_t<5;_t++){const ot=new X(new pt(.042,.01,.028),n);ot.position.set(0,.014,-.125-_t*.04),this.weaponRig.add(ot)}for(const _t of[-1,1]){const ot=new X(new pt(.005,.018,.12),o);ot.position.set(_t*.021,.008,-.205),this.weaponRig.add(ot)}const I=new X(new pt(.021,.007,.42),t);I.position.set(0,.036,-.115),this.weaponRig.add(I);const N=new pt(.022,.004,.008);for(let _t=0;_t<22;_t++){const ot=new X(N,i);ot.position.set(0,.0405,.085-_t*.0185),this.weaponRig.add(ot)}const V=new X(new he(.0085,.0095,.14,12),n);V.rotation.x=Math.PI*.5,V.position.set(0,.012,-.375),this.weaponRig.add(V);const B=new X(new he(.011,.011,.045,10),i);B.rotation.x=Math.PI*.5,B.position.set(0,.012,-.455),this.weaponRig.add(B);const G=new X(new pt(.026,.02,.068),o);G.position.set(.024,.022,-.275),this.weaponRig.add(G);const K=new X(new pt(.024,.012,.028),n);K.position.set(0,.045,.068),this.weaponRig.add(K);const k=new X(new pt(.024,.012,.028),n);k.position.set(0,.045,-.305),this.weaponRig.add(k),this.buildCollimatedOptic(t,i);const et=new X(new pt(.024,.145,.058),o);et.position.set(0,-.065,0),et.rotation.x=-.14,this.magazineGroup.add(et);const ht=new X(new pt(.027,.012,.064),s);ht.position.set(0,-.136,-.01),ht.rotation.x=-.14,this.magazineGroup.add(ht);const vt=new he(.0045,.0048,.042,8);vt.rotateX(Math.PI*.5);for(let _t=0;_t<2;_t++){const ot=new X(vt,a);ot.position.set((_t===0?-1:1)*.004,.006-_t*.006,.002),this.magazineGroup.add(ot)}this.magazineGroup.position.set(0,-.042,-.04),this.weaponRig.add(this.magazineGroup),this.buildTacticalHands(l,c,h,i),this.buildMuzzleFlashSystem()}buildCollimatedOptic(t,e){const n=new ee;n.position.set(0,.0565,-.025);const i=new X(new pt(.026,.018,.054),t);i.position.set(0,-.015,0),n.add(i);const s=[new j(.0155,-.028),new j(.0185,-.028),new j(.0185,.028),new j(.0155,.028),new j(.0155,-.028)],o=new $s(s,24);o.rotateX(Math.PI*.5);const a=new X(o,t);n.add(a);const l=new X(new he(.007,.007,.014,10),e);l.rotation.z=-Math.PI*.55,l.position.set(.019,.008,.002),n.add(l);const c=new X(new he(.0055,.0055,.008,10),e);c.position.set(0,.02,-.004),n.add(c),this.opticUniforms={uAdsAmount:{value:0},uSwayOffset:{value:new j(0,0)},uHeat:{value:0}};const h=new Ho(.0152,24),u=new Me({transparent:!0,depthWrite:!1,uniforms:this.opticUniforms,vertexShader:`
        varying vec2 vUv;
        varying vec3 vViewPos;
        varying vec3 vCenterViewPos;
        void main() {
          vUv = uv * 2.0 - 1.0;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vViewPos = mvPos.xyz;
          vCenterViewPos = (modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        uniform float uAdsAmount;
        uniform vec2 uSwayOffset;
        varying vec2 vUv;
        varying vec3 vViewPos;
        varying vec3 vCenterViewPos;

        void main() {
          float r = length(vUv);
          if (r > 1.0) discard;

          // True collimated projection: project infinite-focus bore vector onto lens plane
          vec2 parallaxOffset = (vCenterViewPos.xy / max(0.05, -vCenterViewPos.z)) * 6.5 + uSwayOffset;
          vec2 retCoord = vUv - parallaxOffset;
          float d = length(retCoord);

          // Crisp 2 MOA center red dot + 32 MOA broken tactical ring + 4 stadia ticks
          float centerDot = smoothstep(0.095, 0.035, d);
          float outerRing = smoothstep(0.032, 0.008, abs(d - 0.36));
          float gapMask = step(0.06, abs(retCoord.x)) * step(0.06, abs(retCoord.y));
          float tickX = smoothstep(0.022, 0.005, abs(retCoord.y)) * smoothstep(0.52, 0.36, abs(retCoord.x)) * step(0.28, abs(retCoord.x));
          float tickY = smoothstep(0.022, 0.005, abs(retCoord.x)) * smoothstep(0.52, 0.36, abs(retCoord.y)) * step(0.28, abs(retCoord.y));

          float reticle = max(centerDot, (outerRing * gapMask + tickX + tickY) * 0.78);
          // Edge aperture occlusion inside the optic tube
          float apertureMask = smoothstep(0.98, 0.82, r);
          reticle *= apertureMask;

          // Subtle ruby/teal anti-reflective coating + faint fingerprint smudge near outer bezel
          float fresnel = smoothstep(0.45, 0.98, r);
          vec3 glassTint = mix(vec3(0.05, 0.14, 0.16), vec3(0.18, 0.08, 0.10), fresnel);
          vec3 reticleCol = vec3(3.8, 0.28, 0.18) * reticle;

          float glassAlpha = mix(0.16, 0.07, uAdsAmount) + fresnel * 0.18;
          float finalAlpha = clamp(glassAlpha + reticle * 0.95, 0.0, 0.98);
          gl_FragColor = vec4(glassTint + reticleCol, finalAlpha);
        }
      `});this.opticLensMesh=new X(h,u),this.opticLensMesh.position.set(0,0,.018),this.opticLensMesh.renderOrder=10,n.add(this.opticLensMesh),this.weaponRig.add(n)}buildTacticalHands(t,e,n,i){const s=new X(new pt(.036,.078,.052),t);s.position.set(.006,-.068,.06),s.rotation.x=.28,this.rightHandGroup.add(s);const o=new X(new pt(.04,.022,.048),e);o.position.set(.01,-.042,.046),this.rightHandGroup.add(o);const a=new X(new pt(.012,.012,.044),e);a.position.set(.014,-.036,.028),this.rightHandGroup.add(a);const l=new X(new he(.034,.042,.24,10),n);l.rotation.x=Math.PI*.42,l.rotation.z=-.22,l.position.set(.042,-.105,.175),this.rightHandGroup.add(l),this.weaponRig.add(this.rightHandGroup);const c=new X(new pt(.042,.034,.078),t);c.position.set(-.012,-.012,0),this.leftHandGroup.add(c);const h=new X(new pt(.016,.016,.044),e);h.position.set(-.016,.022,-.012),h.rotation.z=-.35,this.leftHandGroup.add(h);const u=new X(new pt(.016,.032,.068),e);u.position.set(-.024,.004,0),this.leftHandGroup.add(u);const d=new X(new he(.031,.031,.02,12),e);d.rotation.x=Math.PI*.48,d.rotation.z=.32,d.position.set(-.026,-.026,.056),this.leftHandGroup.add(d);const f=new X(new he(.015,.015,.008,12),i);f.position.set(-.022,-.01,.055),this.leftHandGroup.add(f);const g=new X(new he(.033,.042,.26,10),n);g.rotation.x=Math.PI*.42,g.rotation.z=.34,g.position.set(-.062,-.068,.165),this.leftHandGroup.add(g),this.leftHandGroup.position.set(0,0,-.205),this.weaponRig.add(this.leftHandGroup)}buildMuzzleFlashSystem(){this.muzzleFlashGroup.position.set(0,.012,-.495),this.muzzleFlashGroup.visible=!1;const t=new on({color:16775392,transparent:!0,opacity:.95,blending:Mi,depthWrite:!1}),e=new on({color:16743204,transparent:!0,opacity:.85,blending:Mi,depthWrite:!1,side:He}),n=new X(new dn(.026,8,8),t);this.muzzleFlashGroup.add(n);const i=new Ys(.032,.16,5);i.translate(0,.08,0);for(let o=0;o<4;o++){const a=new X(i,e);a.rotation.z=o*Math.PI*.5+.35,this.muzzleFlashGroup.add(a)}const s=new X(new Ys(.022,.22,6),e);s.rotation.x=-Math.PI*.5,s.position.set(0,0,-.11),this.muzzleFlashGroup.add(s),this.weaponRig.add(this.muzzleFlashGroup),this.muzzleLight=new Lu(16755268,0,9.5,1.8),this.muzzleLight.position.set(0,.02,-.52),this.weaponRig.add(this.muzzleLight)}toggleFireMode(t){this.fireMode=this.fireMode==="AUTO"?"SEMI":"AUTO",this.selectorMesh.rotation.x=this.fireMode==="AUTO"?0:.65,t.playWeaponHandling("fire_mode")}startReload(t){return this.isReloading||this.magAmmo>=this.magCapacity||this.reserveAmmo<=0?!1:(this.isReloading=!0,this.isInspecting=!1,this.isEmptyReload=this.magAmmo===0,this.reloadTimer=0,this.reloadDuration=this.isEmptyReload?2.45:2.02,this.magOutPlayed=!1,this.magInPlayed=!1,this.boltPlayed=!1,!0)}startInspect(t){this.isReloading||this.isInspecting||(this.isInspecting=!0,this.inspectTimer=0,t.playWeaponHandling("inspect"))}canFire(){return!this.isReloading&&this.fireCooldown<=0&&this.magAmmo>0}triggerShot(){this.magAmmo=Math.max(0,this.magAmmo-1),this.fireCooldown=this.fireInterval,this.consecutiveShots++,this.barrelHeat=Math.min(1,this.barrelHeat+.085),this.isInspecting=!1,this.muzzleFlashTimer=.042,this.muzzleFlashGroup.visible=!0,this.muzzleFlashGroup.rotation.z=this.rng.range(0,Math.PI*2);const t=this.rng.range(.82,1.28);this.muzzleFlashGroup.scale.set(t,t,this.rng.range(.85,1.35)),this.muzzleLight.intensity=5.5,this.boltCarrierMesh.position.z=.018;const e=Kt.lerp(1,.58,this.adsProgress);this.posSpring.impulse(this.rng.signed()*.14*e,.18*e,1.35*e),this.rotSpring.impulse(1.95*e,this.rng.signed()*.65*e,this.rng.signed()*1.15*e);const n=Math.min(30,this.consecutiveShots),i=.011+Math.min(.012,n*8e-4),s=Math.sin(n*.55)*.0055,o=i*e*this.rng.range(.88,1.14),a=(s+this.rng.signed()*.0038)*e;return this.recoilCameraKick.x+=o,this.recoilCameraKick.y+=a,this.fovKick=Math.min(2.2,this.fovKick+.65),{recoilPitch:o,recoilYaw:a,spread:this.currentSpread}}getWorldMuzzlePosition(t,e){return this._worldMuzzle.set(0,.012,-.495),this.weaponRig.localToWorld(this._worldMuzzle),e.copy(this._worldMuzzle)}getWorldEjectionPortPosition(t,e){return this._worldEject.set(.022,.014,-.025),this.weaponRig.localToWorld(this._worldEject),e.copy(this._worldEject)}update(t,e,n,i,s,o,a,l,c,h,u,d){this.fireCooldown>0&&(this.fireCooldown=Math.max(0,this.fireCooldown-t)),!i&&this.fireCooldown<=0&&(this.consecutiveShots=Math.max(0,this.consecutiveShots-t*14)),this.barrelHeat=Math.max(0,this.barrelHeat-t*.22),this.opticUniforms.uHeat.value=this.barrelHeat,this.muzzleFlashTimer>0&&(this.muzzleFlashTimer-=t,this.muzzleLight.intensity=Math.max(0,this.muzzleFlashTimer/.042*5.5),this.muzzleFlashTimer<=0&&(this.muzzleFlashGroup.visible=!1,this.muzzleLight.intensity=0));const f=this.magAmmo===0&&!this.isReloading?.015:-.025;this.boltCarrierMesh.position.z+=(f-this.boltCarrierMesh.position.z)*Math.min(1,t*38),this.fovKick*=Math.exp(-16*t);const g=n&&!this.isReloading&&!o?1:0;this.adsProgress+=(g-this.adsProgress)*Math.min(1,t*16.5),this.opticUniforms.uAdsAmount.value=this.adsProgress;let v=Kt.lerp(.014,.0012,this.adsProgress);a&&(v*=.68),l||(v+=.032),v+=s/6.5*Kt.lerp(.018,.004,this.adsProgress),v+=Math.min(.024,this.consecutiveShots*.0016),this.currentSpread=v;const p=u<.85?(.85-u)/.85:0;this.wallProximity+=(p-this.wallProximity)*Math.min(1,t*14);const m=this._basePos.lerpVectors(this.hipOffset,this.adsOffset,this.adsProgress),y=this._baseRot.set(0,0,0),_=Kt.lerp(1,.22,this.adsProgress);if(m.x+=Math.sin(e*1.45)*.0018*_,m.y+=Math.cos(e*2.9)*.0022*_,y.z+=Math.sin(e*1.45)*.006*_,l&&s>.25){const w=o?11.2:8.2,T=Math.min(1,s/5.5)*Kt.lerp(1,.18,this.adsProgress);m.x+=Math.cos(e*w)*.0085*T,m.y+=Math.abs(Math.sin(e*w))*-.01*T,y.z+=Math.cos(e*w)*.024*T,y.x+=Math.sin(e*w*2)*.014*T}o&&this.adsProgress<.2&&!this.isReloading&&(m.x-=.038,m.y-=.032,m.z+=.025,y.x-=.22,y.y+=.42,y.z-=.18),a&&this.adsProgress<.5&&(y.z+=.08*(1-this.adsProgress),m.y-=.008*(1-this.adsProgress)),this.wallProximity>.01&&(m.z+=this.wallProximity*.095,m.y-=this.wallProximity*.03,y.x+=this.wallProximity*.35);const x=Kt.lerp(1,.3,this.adsProgress);if(this.posSpring.impulse(Kt.clamp(c*.45*x,-.04,.04),Kt.clamp(-h*.45*x,-.04,.04),0),this.rotSpring.impulse(Kt.clamp(h*1.4*x,-.15,.15),Kt.clamp(c*1.6*x,-.15,.15),Kt.clamp(-c*1.9*x,-.18,.18)),this.magazineGroup.position.set(0,-.042,-.04),this.magazineGroup.rotation.set(0,0,0),this.leftHandGroup.position.set(0,0,-.205),this.leftHandGroup.rotation.set(0,0,0),this.chargingHandleMesh.position.z=0,this.isReloading){this.reloadTimer+=t;const w=Math.min(1,this.reloadTimer/this.reloadDuration);w>.12&&!this.magOutPlayed&&(this.magOutPlayed=!0,d.playWeaponHandling("mag_out")),w>.56&&!this.magInPlayed&&(this.magInPlayed=!0,d.playWeaponHandling("mag_in")),this.isEmptyReload&&w>.8&&!this.boltPlayed&&(this.boltPlayed=!0,d.playWeaponHandling("bolt_release"));const T=Math.sin(Math.min(1,w*1.15)*Math.PI);if(m.x+=.024*T,m.y-=.028*T,y.z-=.36*T,y.x+=.18*T,y.y+=.16*T,w<.35){const R=Math.max(0,(w-.1)/.25),A=R*R*.22;this.magazineGroup.position.y=-.042-A,this.magazineGroup.position.z=-.04+R*.03,this.leftHandGroup.position.set(0,-.055-A,-.045)}else if(w<.68){const R=1-Math.min(1,(w-.35)/.25),A=R*R*.22;this.magazineGroup.position.y=-.042-A,this.leftHandGroup.position.set(0,-.055-A,-.045),Math.abs(w-.58)<.03&&this.posSpring.impulse(0,.12,-.08)}else if(this.isEmptyReload&&w<.9){const R=Math.sin((w-.68)/.22*Math.PI);this.leftHandGroup.position.set(-.02,.025*R,-.205+.26*R),this.chargingHandleMesh.position.z=.042*R}if(this.reloadTimer>=this.reloadDuration){const R=this.magCapacity-this.magAmmo,A=Math.min(R,this.reserveAmmo);this.magAmmo+=A,this.reserveAmmo-=A,this.isReloading=!1}}else if(this.isInspecting){this.inspectTimer+=t;const w=Math.min(1,this.inspectTimer/this.inspectDuration);if(w<.48){const T=Math.sin(w/.48*Math.PI);m.x-=.042*T,m.y+=.018*T,y.z+=.52*T,y.y+=.38*T}else{const T=Math.sin((w-.48)/.52*Math.PI);m.x+=.035*T,y.z-=.46*T,y.y-=.32*T,y.x+=.18*T}this.inspectTimer>=this.inspectDuration&&(this.isInspecting=!1)}this.posSpring.target.copy(m),this.rotSpring.target.copy(y),this.posSpring.step(t),this.rotSpring.step(t),this.weaponRig.position.copy(this.posSpring.value),this.weaponRig.rotation.set(this.rotSpring.value.x,this.rotSpring.value.y,this.rotSpring.value.z,"YXZ"),this.opticUniforms.uSwayOffset.value.set((this.rotSpring.value.y-y.y)*1.8,(this.rotSpring.value.x-y.x)*1.8)}}class F0{constructor(t,e,n){this.settings=e,this.rng=n,this.controller=new fc(t),this.weapon=new U0(n.fork("player_weapon"))}settings;rng;id="player";name="VANGUARD-1 (YOU)";team="alpha";controller;weapon;yaw=0;pitch=0;cameraRoll=0;leanAmount=0;leanOffset=new S;landingCompression=0;damageCameraKick=new j;damageFlash=0;flashbangBlindness=0;lastDamageDirection=new S(0,0,-1);damageIndicatorAlpha=0;health=100;maxHealth=100;isAlive=!0;timeSinceLastDamage=10;respawnTimer=0;kills=0;deaths=0;footstepAccum=0;semiAutoLatched=!1;fireBufferTimer=0;pendingLookYaw=0;pendingLookPitch=0;_forward=new S;_right=new S;_eyePos=new S;_muzzlePos=new S;_ejectPos=new S;_casingVel=new S;_casingAngVel=new S;_forwardXZ=new S;_rightXZ=new S;_leanDir=new S;onShotOutcome;onKilledBy;getPosition(){return this.controller.position}getHeight(){return this.controller.currentHeight}spawnAt(t,e=0){this.controller.teleport(t),this.yaw=e,this.pitch=.02,this.health=100,this.isAlive=!0,this.damageFlash=0,this.damageIndicatorAlpha=0,this.weapon.magAmmo=this.weapon.magCapacity,this.weapon.reserveAmmo=120,this.weapon.tacticalCount=1,this.weapon.explosiveCount=1,this.weapon.isReloading=!1}applyDamage(t,e,n,i,s,o,a,l){if(!this.isAlive)return{killed:!1};this.health=Math.max(0,this.health-t),this.timeSinceLastDamage=0,this.damageFlash=Math.min(1,this.damageFlash+t/45),this.damageIndicatorAlpha=1,this.lastDamageDirection.subVectors(l,this.controller.position).normalize();const c=this.settings.data.cameraShake;return this.damageCameraKick.x+=this.rng.range(.025,.055)*c,this.damageCameraKick.y+=this.rng.signed()*.045*c,this.health<=0?(this.isAlive=!1,this.deaths++,this.respawnTimer=2.65,this.onKilledBy&&this.onKilledBy(o),{killed:!0}):{killed:!1}}stepFixed(t,e,n,i,s,o,a,l,c,h){if(this.damageFlash=Math.max(0,this.damageFlash-t*2.4),this.damageIndicatorAlpha=Math.max(0,this.damageIndicatorAlpha-t*.9),this.flashbangBlindness=Math.max(0,this.flashbangBlindness-t*.65),!this.isAlive){this.respawnTimer-=t;return}this.timeSinceLastDamage+=t,this.timeSinceLastDamage>4.6&&this.health<this.maxHealth&&(this.health=Math.min(this.maxHealth,this.health+24*t));const u=n.isAdsHeld(),d=n.consumeLookDelta(u);this.yaw+=d.yawDelta,this.pitch=Kt.clamp(this.pitch+d.pitchDelta,-1.48,1.48);const f=d.yawDelta+this.pendingLookYaw,g=d.pitchDelta+this.pendingLookPitch;if(this.pendingLookYaw=0,this.pendingLookPitch=0,this.weapon.recoilCameraKick.lengthSq()>1e-6){const et=this.weapon.recoilCameraKick.x*Math.min(1,t*26),ht=this.weapon.recoilCameraKick.y*Math.min(1,t*26);this.pitch=Kt.clamp(this.pitch+et,-1.48,1.48),this.yaw+=ht,this.weapon.recoilCameraKick.x-=et,this.weapon.recoilCameraKick.y-=ht,this.weapon.recoilCameraKick.multiplyScalar(Math.max(0,1-t*10))}this.damageCameraKick.multiplyScalar(Math.max(0,1-t*12));const v=n.getMoveAxes(),p=n.isCrouching(),m=n.isSprinting()&&v.z>.2&&!u&&!p,y=p?3.15:u?3.65:m?6.65:4.85,_=Math.sin(this.yaw),x=Math.cos(this.yaw),w=this._forwardXZ.set(-_,0,-x),T=this._rightXZ.set(x,0,-_),R=(w.x*v.z+T.x*v.x)*y,A=(w.z*v.z+T.z*v.x)*y;this.controller.step(t,i,R,A,n.wasJumpPressed(),p,w),this.controller.landingImpactSpeed>0&&(this.landingCompression=Math.min(.18,this.controller.landingImpactSpeed*.022),this.weapon.posSpring.impulse(0,-this.controller.landingImpactSpeed*.06,0),l.playFootstepAt(this.controller.position,this.controller.groundMaterial,!0,this.team,e,!0)),this.landingCompression*=Math.exp(-14*t);const M=m?0:n.getLeanTarget();if(this.leanAmount+=(M-this.leanAmount)*Math.min(1,t*11),Math.abs(this.leanAmount)>.005){this.controller.getEyePosition(1,this._eyePos);const et=this._leanDir.copy(T).multiplyScalar(Math.sign(this.leanAmount)),ht=Math.abs(this.leanAmount)*.34,vt=i.raycast(this._eyePos,et,ht+.22),_t=vt.hit?Math.max(0,vt.distance-.22):ht;this.leanOffset.copy(et).multiplyScalar(_t)}else this.leanOffset.set(0,0,0);const E=-v.x*.016*this.settings.data.cameraShake-this.leanAmount*.145;this.cameraRoll+=(E-this.cameraRoll)*Math.min(1,t*12);const D=Math.hypot(this.controller.velocity.x,this.controller.velocity.z);if(this.controller.isGrounded&&D>.45){this.footstepAccum+=D*t;const et=m?2.15:1.72;this.footstepAccum>=et&&(this.footstepAccum-=et,l.playFootstepAt(this.controller.position,this.controller.groundMaterial,m,this.team,e,!0))}else this.footstepAccum=0;n.wasFireModePressed()&&this.weapon.toggleFireMode(l.synth),n.wasReloadPressed()&&(n.touchAdsToggled=!1,this.weapon.startReload(l.synth)),n.wasInspectPressed()&&this.weapon.startInspect(l.synth),n.wasExplosivePressed()&&this.weapon.explosiveCount>0&&(this.weapon.explosiveCount--,this.throwItem("frag",s,h)),n.wasTacticalPressed()&&this.weapon.tacticalCount>0&&(this.weapon.tacticalCount--,this.throwItem("flash",s,h));const I=n.isFireHeld(),N=n.wasFirePressed();I||(this.semiAutoLatched=!1),N?this.fireBufferTimer=.15:this.fireBufferTimer=Math.max(0,this.fireBufferTimer-t);const V=this.fireBufferTimer>0;(this.weapon.fireMode==="AUTO"?I||V:V&&!this.semiAutoLatched)&&(this.weapon.magAmmo===0&&!this.weapon.isReloading?N&&(l.synth.playWeaponHandling("empty_click"),this.weapon.startReload(l.synth)):this.weapon.canFire()&&(this.weapon.fireMode==="SEMI"&&(this.semiAutoLatched=I),this.fireBufferTimer=0,this.executePlayerShot(i,s,o,a,l,c,e))),this.getAimDirection(this._forward),this.controller.getEyePosition(1,this._eyePos);const G=i.raycast(this._eyePos,this._forward,1.1),K=G.hit?G.distance:1.1;this.weapon.update(t,e,u,I,D,m,this.controller.isCrouching,this.controller.isGrounded,f,g,K,l.synth);const k=this.health<45?(45-this.health)/45:0;l.synth.setLowHealthEffect(k,e)}fireProgrammaticShot(t,e,n,i,s,o,a){return this.weapon.canFire()?this.executePlayerShot(t,e,n,i,s,o,a):null}executePlayerShot(t,e,n,i,s,o,a){const l=this.weapon.triggerShot();this.controller.getEyePosition(1,this._eyePos),this._eyePos.add(this.leanOffset),this.getAimDirection(this._forward),this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this.weapon.root.position.copy(this._eyePos),this.weapon.root.rotation.set(this.pitch,this.yaw,this.cameraRoll,"YXZ"),this.weapon.root.updateMatrixWorld(!0),this.weapon.getWorldMuzzlePosition(this.weapon.root,this._muzzlePos),this.weapon.getWorldEjectionPortPosition(this.weapon.root,this._ejectPos),this._casingVel.copy(this._right).multiplyScalar(this.rng.range(2.6,3.8)).addScaledVector(this._forward,this.rng.range(-.4,.5)),this._casingVel.y+=this.rng.range(1.6,2.5),this._casingVel.add(this.controller.velocity),this._casingAngVel.set(this.rng.range(-28,28),this.rng.range(-35,35),this.rng.range(-28,28)),e.spawnCasing(this._ejectPos,this._casingVel,this._casingAngVel),i.spawnMuzzleGasAndSmoke(this._muzzlePos,this._forward,this.weapon.barrelHeat),s.playGunshotAt(this._muzzlePos,this.team,a,!0);const c=n.fireBallisticTrace(this._eyePos,this._forward,this._muzzlePos,l.spread,34,this.id,this.name,this.team,o,this._eyePos,a);return c.killed&&this.kills++,this.onShotOutcome&&this.onShotOutcome(c),c}throwItem(t,e,n){this.controller.getEyePosition(1,this._eyePos),this.getAimDirection(this._forward);const i=t==="frag"?new dn(.055,10,10):new he(.035,.035,.12,10),s=new ie({color:t==="frag"?3884848:5265504,metalness:.65,roughness:.4}),o=new X(i,s),a=this._eyePos.clone().addScaledVector(this._forward,.55);o.position.copy(a),n.add(o);const l=this._forward.clone().multiplyScalar(15.5);l.y+=3.2,l.add(this.controller.velocity),e.spawnThrowable(o,a,l,t,t==="frag"?2.3:1.7)}applyFrameLook(t){if(!this.isAlive)return;const e=t.consumeLookDelta(t.isAdsHeld());e.yawDelta===0&&e.pitchDelta===0||(this.yaw+=e.yawDelta,this.pitch=Kt.clamp(this.pitch+e.pitchDelta,-1.48,1.48),this.pendingLookYaw+=e.yawDelta,this.pendingLookPitch+=e.pitchDelta)}getAimDirection(t){const e=Math.cos(this.pitch);return t.set(-Math.sin(this.yaw)*e,Math.sin(this.pitch),-Math.cos(this.yaw)*e),t.normalize()}syncCameraAndViewmodel(t,e){if(this.controller.getEyePosition(t,this._eyePos),this._eyePos.y-=this.landingCompression,!this.isAlive){const o=Math.min(1,(2.65-this.respawnTimer)/.55);this._eyePos.y-=o*1.15,e.position.copy(this._eyePos),e.rotation.set(this.pitch-o*.35,this.yaw,o*.48,"YXZ"),this.weapon.root.visible=!1;return}this.weapon.root.visible=!0,e.position.copy(this._eyePos).add(this.leanOffset),e.rotation.set(this.pitch+this.damageCameraKick.x,this.yaw+this.damageCameraKick.y,this.cameraRoll,"YXZ");const n=this.settings.data.fov,i=n*.78,s=Kt.lerp(n,i,this.weapon.adsProgress)+this.weapon.fovKick;Math.abs(e.fov-s)>.01&&(e.fov=s,e.updateProjectionMatrix()),this.weapon.root.position.copy(e.position),this.weapon.root.quaternion.copy(e.quaternion),this.weapon.root.updateMatrixWorld(!0)}}class N0{constructor(t,e){this.bvh=t,this.coverNodes=e,this.cols=Math.floor((this.maxX-this.minX)/this.cellSize),this.rows=Math.floor((this.maxZ-this.minZ)/this.cellSize),this.walkable=new Uint8Array(this.cols*this.rows),this.heights=new Float32Array(this.cols*this.rows),this.bakeWalkableGrid()}bvh;coverNodes;minX=-38;maxX=38;minZ=-52;maxZ=52;cellSize=1.6;cols;rows;walkable;heights;patrolWaypoints=[];_rayOrigin=new S;_down=new S(0,-1,0);_up=new S(0,1,0);_p0=new S;_p1=new S;bakeWalkableGrid(){const t=[];for(let n=0;n<this.rows;n++){const i=this.minZ+(n+.5)*this.cellSize;for(let s=0;s<this.cols;s++){const o=this.minX+(s+.5)*this.cellSize,a=n*this.cols+s;this._rayOrigin.set(o,2.5,i);const l=this.bvh.raycast(this._rayOrigin,this._down,3);if(!l.hit||l.normal.y<.72||l.point.y>.65){this.walkable[a]=0;continue}const c=l.point.y;if(this.bvh.overlapAABB(o-.45,c+.48,i-.45,o+.45,c+1.72,i+.45,t),t.length>0){this.walkable[a]=0;continue}if(this._rayOrigin.set(o,c+.25,i),this.bvh.raycast(this._rayOrigin,this._up,1.65).hit){this.walkable[a]=0;continue}this.walkable[a]=1,this.heights[a]=c}}const e=[[0,-38],[-5.5,-24],[5.5,-22],[0,-12],[-5.5,0],[5.5,2],[0,14],[0,28],[-9,36],[9,36],[-23,-30],[-23,-10],[-23,14],[23,-28],[23,-6],[23,16],[-15.5,-4.5],[15.5,2.5]];for(const[n,i]of e)this.patrolWaypoints.push(new S(n,.05,i))}worldToCell(t,e){const n=Math.max(0,Math.min(this.cols-1,Math.floor((t-this.minX)/this.cellSize))),i=Math.max(0,Math.min(this.rows-1,Math.floor((e-this.minZ)/this.cellSize)));return{c:n,r:i}}cellToWorld(t,e,n=new S){const i=e*this.cols+t;return n.set(this.minX+(t+.5)*this.cellSize,this.heights[i]||.05,this.minZ+(e+.5)*this.cellSize)}findNearestWalkableCell(t,e){if(this.walkable[e*this.cols+t])return{c:t,r:e};for(let n=1;n<=6;n++)for(let i=-n;i<=n;i++)for(let s=-n;s<=n;s++){const o=t+s,a=e+i;if(o>=0&&o<this.cols&&a>=0&&a<this.rows&&this.walkable[a*this.cols+o])return{c:o,r:a}}return{c:t,r:e}}findPath(t,e){const n=this.worldToCell(t.x,t.z),i=this.worldToCell(e.x,e.z),s=this.findNearestWalkableCell(n.c,n.r),o=this.findNearestWalkableCell(i.c,i.r),a=s.r*this.cols+s.c,l=o.r*this.cols+o.c;if(a===l)return[e.clone()];const c=this.cols*this.rows,h=new Float32Array(c).fill(1/0),u=new Float32Array(c).fill(1/0),d=new Int32Array(c).fill(-1),f=new Uint8Array(c),g=[a];h[a]=0,u[a]=Math.hypot(o.c-s.c,o.r-s.r);const v=[[-1,0,1],[1,0,1],[0,-1,1],[0,1,1],[-1,-1,1.414],[1,-1,1.414],[-1,1,1.414],[1,1,1.414]];let p=0;for(;g.length>0&&p<900;){p++;let w=0,T=g[0],R=u[T];for(let E=1;E<g.length;E++){const D=g[E];u[D]<R&&(R=u[D],T=D,w=E)}if(T===l)break;g.splice(w,1),f[T]=1;const A=Math.floor(T/this.cols),M=T%this.cols;for(const[E,D,I]of v){const N=M+E,V=A+D;if(N<0||N>=this.cols||V<0||V>=this.rows)continue;const B=V*this.cols+N;if(!this.walkable[B]||f[B]||E!==0&&D!==0&&(!this.walkable[A*this.cols+N]||!this.walkable[V*this.cols+M]))continue;const G=h[T]+I;G<h[B]&&(d[B]=T,h[B]=G,u[B]=G+Math.hypot(o.c-N,o.r-V),g.includes(B)||g.push(B))}}if(d[l]===-1)return[e.clone()];const m=[];let y=l;for(;y!==-1&&y!==a;){const w=Math.floor(y/this.cols),T=y%this.cols;m.push(this.cellToWorld(T,w,new S)),y=d[y]}if(m.reverse(),m.length<=2)return m;const _=[m[0]];let x=0;for(let w=2;w<m.length;w++)this._p0.copy(m[x]).setY(.8),this._p1.copy(m[w]).setY(.8),this.bvh.segmentCast(this._p0,this._p1).hit&&(_.push(m[w-1]),x=w-1);return _.push(m[m.length-1]),_}findBestCover(t,e,n){let i=null,s=-1/0;for(let o=0;o<this.coverNodes.length;o++){const a=this.coverNodes[o];if(a.occupiedBy!==-1&&a.occupiedBy!==t)continue;const l=e.distanceTo(a.position);if(l>24)continue;const c=n.distanceTo(a.position);if(c<5.5)continue;const h=this._p0.subVectors(n,a.position).normalize();if(a.normal.dot(h)>-.25)continue;const d=this._p0.copy(a.position).setY(a.position.y+.9),f=this._p1.copy(n).setY(n.y+1.55),p=(this.bvh.segmentCast(d,f).hit?35:-20)-l*1.4-Math.abs(c-16)*.5;p>s&&(s=p,i=a)}return i}createDebugMesh(){const t=new ee,e=[],n=[];for(let o=0;o<this.rows;o++)for(let a=0;a<this.cols;a++){const l=o*this.cols+a;if(!this.walkable[l])continue;const c=this.cellToWorld(a,o);e.push(c.x-.3,c.y+.08,c.z,c.x+.3,c.y+.08,c.z),e.push(c.x,c.y+.08,c.z-.3,c.x,c.y+.08,c.z+.3),n.push(.2,.85,1,.2,.85,1,.2,.85,1,.2,.85,1)}for(const o of this.coverNodes)e.push(o.position.x,o.position.y,o.position.z,o.position.x,o.position.y+1.2,o.position.z),n.push(1,.8,.1,1,.8,.1);const i=new ye;i.setAttribute("position",new te(e,3)),i.setAttribute("color",new te(n,3));const s=new Vo({vertexColors:!0});return t.add(new Hl(i,s)),t}}class O0{skyMesh;sunDirection=new S(-.62,.64,-.45).normalize();sunLight;hemiLight;uniforms;constructor(t,e=20){this.uniforms={uSunDir:{value:this.sunDirection.clone()},uTime:{value:0},uCloudSteps:{value:e}};const n=new dn(420,32,20),i=new Me({side:Ue,depthWrite:!1,uniforms:this.uniforms,vertexShader:`
        varying vec3 vWorldDir;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldDir = wp.xyz - cameraPosition;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform vec3 uSunDir;
        uniform float uTime;
        uniform float uCloudSteps;
        varying vec3 vWorldDir;

        float hash31(vec3 p) {
          p = fract(p * 0.1031);
          p += dot(p, p.yzx + 33.33);
          return fract((p.x + p.y) * p.z);
        }

        float noise3D(vec3 x) {
          vec3 i = floor(x);
          vec3 f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(mix(hash31(i + vec3(0,0,0)), hash31(i + vec3(1,0,0)), f.x),
                mix(hash31(i + vec3(0,1,0)), hash31(i + vec3(1,1,0)), f.x), f.y),
            mix(mix(hash31(i + vec3(0,0,1)), hash31(i + vec3(1,0,1)), f.x),
                mix(hash31(i + vec3(0,1,1)), hash31(i + vec3(1,1,1)), f.x), f.y), f.z
          );
        }

        float fbmClouds(vec3 p) {
          float v = 0.0;
          float a = 0.52;
          for (int i = 0; i < 4; i++) {
            v += a * noise3D(p);
            p = p * 2.08 + vec3(13.7, 7.1, 19.3);
            a *= 0.5;
          }
          return v;
        }

        float cloudDensity(vec3 pos, vec3 wind) {
          vec3 p = pos * 0.00125 + wind;
          float base = fbmClouds(p);
          float billow = 1.0 - abs(noise3D(p * 2.4) * 2.0 - 1.0);
          float combined = mix(base, billow, 0.28);

          // Cumulus flat anvil base + rounded dome top profile
          float h = clamp((pos.y - 380.0) / 420.0, 0.0, 1.0);
          float heightShape = smoothstep(0.0, 0.18, h) * smoothstep(1.0, 0.55, h);
          return max(0.0, (combined - 0.50) * 2.85) * heightShape;
        }

        void main() {
          vec3 rd = normalize(vWorldDir);
          vec3 sunDir = normalize(uSunDir);
          float sunDot = clamp(dot(rd, sunDir), 0.0, 1.0);
          float zenith = clamp(rd.y, 0.0, 1.0);

          // Rayleigh & Mie physical midday sky gradient
          vec3 zenithSky = vec3(0.08, 0.32, 0.82);
          vec3 horizonSky = vec3(0.56, 0.76, 0.96);
          vec3 desertGroundHaze = vec3(0.76, 0.70, 0.60);

          vec3 skyCol = mix(horizonSky, zenithSky, pow(zenith, 0.48));
          skyCol = mix(desertGroundHaze, skyCol, smoothstep(-0.08, 0.14, rd.y));

          // Mie forward solar aureole & crisp HDR sun disk
          float mieHalo = pow(sunDot, 8.0) * 0.36 + pow(sunDot, 64.0) * 0.75;
          float sunDisk = smoothstep(0.9993, 0.99985, sunDot) * 14.0;
          skyCol += vec3(1.0, 0.94, 0.80) * (mieHalo + sunDisk);

          // Ray-marched volumetric cumulus clouds above horizon
          if (rd.y > 0.035) {
            float tStart = 380.0 / max(0.08, rd.y);
            float tEnd = 800.0 / max(0.08, rd.y);
            int steps = int(clamp(uCloudSteps, 8.0, 28.0));
            float stepSize = (tEnd - tStart) / float(steps);
            vec3 wind = vec3(uTime * 0.008, 0.0, uTime * 0.004);

            vec4 accum = vec4(0.0);
            float t = tStart;

            for (int i = 0; i < 28; i++) {
              if (i >= steps || accum.a > 0.97) break;
              vec3 samplePos = rd * t;
              float dens = cloudDensity(samplePos, wind);

              if (dens > 0.01) {
                // Directional sun shadow probe toward sun
                float sunSample = cloudDensity(samplePos + sunDir * 68.0, wind);
                float lightTrans = exp(-sunSample * 2.8);
                // Henyey-Greenstein silver lining phase approximation
                float phase = mix(0.65, 1.45, pow(sunDot, 4.0));
                float heightGrad = clamp((samplePos.y - 380.0) / 420.0, 0.0, 1.0);

                vec3 sunlitTop = vec3(1.22, 1.18, 1.12) * phase;
                vec3 shadedInterior = mix(vec3(0.50, 0.56, 0.66), vec3(0.66, 0.72, 0.80), heightGrad);
                vec3 cloudCol = mix(shadedInterior, sunlitTop, clamp(lightTrans * 1.15, 0.0, 1.0));

                float alpha = clamp(dens * 0.42, 0.0, 1.0);
                cloudCol *= alpha;
                accum += vec4(cloudCol, alpha) * (1.0 - accum.a);
              }
              t += stepSize;
            }

            // Aerial perspective fade near distant horizon
            float horizonFade = smoothstep(0.035, 0.19, rd.y);
            skyCol = mix(skyCol, accum.rgb / max(0.0001, accum.a), accum.a * horizonFade);
          }

          gl_FragColor = vec4(skyCol, 1.0);
        }
      `});this.skyMesh=new X(n,i),this.skyMesh.frustumCulled=!1,t.add(this.skyMesh),this.sunLight=new ac(16774367,3.65),this.sunLight.position.copy(this.sunDirection).multiplyScalar(120),t.add(this.sunLight),this.hemiLight=new rc(10208496,12098420,1.25),t.add(this.hemiLight)}bakeProceduralEnvironment(t,e){const n=new Zs,i=new X(new dn(50,24,16),this.skyMesh.material);n.add(i);const s=new X(new dn(48,16,8,0,Math.PI*2,Math.PI*.5,Math.PI*.5),new on({color:10258025,side:Ue}));n.add(s);const o=new Ao(t),a=o.fromScene(n,.04);e.environment=a.texture,e.environmentIntensity=.72,o.dispose()}update(t,e,n){this.uniforms.uTime.value=t,this.uniforms.uCloudSteps.value=n,this.skyMesh.position.copy(e)}}class B0{cascadeCount=4;farCascadeStride=2;splits=[16,38,78,160];radii=[22,44,78,135];mapSize=1536;cascadeTargets=[];orthoCameras=[];lightViewProjMatrices=[];depthMaterial;_forward=new S;_center=new S;_lightSpaceCenter=new S;_lightView=new kt;_invLightView=new kt;_up=new S(0,1,0);_origin=new S(0,0,0);_hidden=[];_nearOnly=[];frameCounter=0;constructor(t=1536){this.mapSize=t,this.depthMaterial=new sc({depthPacking:Pl,side:He});for(let e=0;e<this.cascadeCount;e++){const n=this.radii[e],i=new Js(-n,n,n,-n,1,240);this.orthoCameras.push(i),this.lightViewProjMatrices.push(new kt)}this.initTargets(t)}initTargets(t){for(const e of this.cascadeTargets)e.dispose();this.cascadeTargets=[],this.mapSize=t;for(let e=0;e<this.cascadeCount;e++){const n=new be(t,t,{format:me,type:tn,minFilter:Pe,magFilter:Pe,depthBuffer:!0,stencilBuffer:!1});n.texture.wrapS=Qe,n.texture.wrapT=Qe,this.cascadeTargets.push(n)}}render(t,e,n,i,s,o){this.frameCounter++,n.getWorldDirection(this._forward),this._lightView.lookAt(i,this._origin,this._up),this._invLightView.copy(this._lightView).invert();const a=e.overrideMaterial,l=o.visible;o.visible=!1;const c=this._hidden,h=this._nearOnly;c.length=0,h.length=0,this.collectShadowExclusions(e,c,h);for(let d=0;d<c.length;d++)c[d].visible=!1;e.overrideMaterial=this.depthMaterial;let u=!1;for(let d=0;d<this.cascadeCount;d++){if(d>=2&&this.frameCounter>2&&(this.frameCounter+d)%this.farCascadeStride!==0)continue;if(d>=2&&!u){for(let m=0;m<h.length;m++)h[m].visible=!1;u=!0}const f=this.radii[d],g=d===0?7:d===1?18:d===2?36:52;this._center.copy(n.position).addScaledVector(this._forward,g),this._center.y=0,this._lightSpaceCenter.copy(this._center).applyMatrix4(this._invLightView);const v=f*2/this.mapSize;this._lightSpaceCenter.x=Math.floor(this._lightSpaceCenter.x/v)*v,this._lightSpaceCenter.y=Math.floor(this._lightSpaceCenter.y/v)*v,this._center.copy(this._lightSpaceCenter).applyMatrix4(this._lightView);const p=this.orthoCameras[d];p.left=-f,p.right=f,p.top=f,p.bottom=-f,p.position.copy(this._center).addScaledVector(i,110),p.lookAt(this._center),p.updateMatrixWorld(!0),p.updateProjectionMatrix(),this.lightViewProjMatrices[d].multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),t.setRenderTarget(this.cascadeTargets[d]),t.setClearColor(16777215,1),t.clear(!0,!0,!1),t.render(e,p)}e.overrideMaterial=a,o.visible=l;for(let d=0;d<c.length;d++)c[d].visible=!0;if(u)for(let d=0;d<h.length;d++)h[d].visible=!0;c.length=0,h.length=0,s.uSunDir.value.copy(i),s.uCsmMatrix0.value.copy(this.lightViewProjMatrices[0]),s.uCsmMatrix1.value.copy(this.lightViewProjMatrices[1]),s.uCsmMatrix2.value.copy(this.lightViewProjMatrices[2]),s.uCsmMatrix3.value.copy(this.lightViewProjMatrices[3]),s.uCsmSplits.value.set(this.splits[0],this.splits[1],this.splits[2],this.splits[3]),s.uCsmDepthTex0.value=this.cascadeTargets[0].texture,s.uCsmDepthTex1.value=this.cascadeTargets[1].texture,s.uCsmDepthTex2.value=this.cascadeTargets[2].texture,s.uCsmDepthTex3.value=this.cascadeTargets[3].texture,s.uCsmEnabled.value=1}collectShadowExclusions(t,e,n){const i=t.children;for(let s=0;s<i.length;s++){const o=i[s];if(!o.visible)continue;const a=o;if(a.isPoints||a.isLine||a.isSprite){e.push(o);continue}if(a.isMesh&&!o.castShadow&&o.children.length===0){e.push(o);continue}o.userData.shadowNearOnly&&n.push(o),o.children.length>0&&this.collectShadowExclusions(o,e,n)}}dispose(){for(const t of this.cascadeTargets)t.dispose();this.depthMaterial.dispose()}}class z0{target;mrtMaterial;prevViewProjMatrix=new kt;currViewProjMatrix=new kt;_vmViewProj=new kt;initializedHistory=!1;constructor(t,e){this.initTarget(t,e),this.mrtMaterial=new Me({glslVersion:Gs,uniforms:{uPrevViewProj:{value:new kt},uCurrViewProj:{value:new kt},uReactiveFlag:{value:0}},vertexShader:`
        uniform mat4 uPrevViewProj;
        uniform mat4 uCurrViewProj;

        out vec3 vViewNormal;
        out float vLinearDepth;
        out vec4 vCurrClip;
        out vec4 vPrevClip;

        void main() {
          vec4 localPos = vec4(position, 1.0);
          mat3 normMat = normalMatrix;
          #ifdef USE_INSTANCING
            localPos = instanceMatrix * localPos;
            normMat = mat3(viewMatrix * modelMatrix * instanceMatrix);
          #endif

          vec4 worldPos = modelMatrix * localPos;
          vec4 mvPos = viewMatrix * worldPos;
          vec3 rawNorm = normMat * normal;
          float nLen = length(rawNorm);
          vViewNormal = nLen > 0.0001 ? (rawNorm / nLen) : vec3(0.0, 0.0, 1.0);
          vLinearDepth = -mvPos.z;

          vCurrClip = uCurrViewProj * worldPos;
          vPrevClip = uPrevViewProj * worldPos;
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        precision highp float;
        uniform float uReactiveFlag;

        in vec3 vViewNormal;
        in float vLinearDepth;
        in vec4 vCurrClip;
        in vec4 vPrevClip;

        layout(location = 0) out vec4 outNormalDepth;
        layout(location = 1) out vec4 outVelocityReactive;

        void main() {
          float nLen = length(vViewNormal);
          vec3 n = nLen > 0.0001 ? (vViewNormal / nLen) : vec3(0.0, 0.0, 1.0);
          vec2 currNDC = (vCurrClip.xy / max(0.0001, vCurrClip.w)) * 0.5 + 0.5;
          vec2 prevNDC = (vPrevClip.xy / max(0.0001, vPrevClip.w)) * 0.5 + 0.5;
          vec2 velocity = currNDC - prevNDC;

          outNormalDepth = vec4(n, vLinearDepth);
          outVelocityReactive = vec4(velocity, uReactiveFlag, 0.75);
        }
      `})}initTarget(t,e){this.target&&this.target.dispose();const n=new Go(t,e);n.format=Ei,n.type=Nn,this.target=new be(t,e,{count:2,type:je,format:me,minFilter:Pe,magFilter:Pe,depthBuffer:!0,depthTexture:n}),this.target.textures[0].name="gNormalDepth",this.target.textures[1].name="gVelocityReactive"}resize(t,e){this.initializedHistory=!1,this.initTarget(t,e)}resetHistory(){this.initializedHistory=!1}get normalDepthTexture(){return this.target.textures[0]}get velocityReactiveTexture(){return this.target.textures[1]}get depthTexture(){return this.target.depthTexture}render(t,e,n,i,s,o,a){this.currViewProjMatrix.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this.initializedHistory||(this.prevViewProjMatrix.copy(this.currViewProjMatrix),this.initializedHistory=!0),this.mrtMaterial.uniforms.uCurrViewProj.value.copy(this.currViewProjMatrix),this.mrtMaterial.uniforms.uPrevViewProj.value.copy(this.prevViewProjMatrix);const l=e.overrideMaterial,c=i.visible,h=[];for(const u of e.children)u.isPoints&&u.visible&&(u.visible=!1,h.push(u));i.visible=!1,e.overrideMaterial=this.mrtMaterial,this.mrtMaterial.uniforms.uReactiveFlag.value=0,t.setRenderTarget(this.target),t.setClearColor(0,0),t.clear(!0,!0,!1),t.render(e,n),e.overrideMaterial=l,i.visible=c;for(const u of h)u.visible=!0;if(a){const u=this._vmViewProj.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse);this.mrtMaterial.uniforms.uCurrViewProj.value.copy(u),this.mrtMaterial.uniforms.uPrevViewProj.value.copy(u),this.mrtMaterial.uniforms.uReactiveFlag.value=.85,s.overrideMaterial=this.mrtMaterial,t.clearDepth(),t.render(s,o),s.overrideMaterial=null}this.prevViewProjMatrix.copy(this.currViewProjMatrix)}dispose(){this.target.dispose(),this.mrtMaterial.dispose()}}class fn{static scene=null;static camera=null;static mesh=null;static ensureInitialized(){if(this.scene)return;this.scene=new Zs,this.camera=new Js(-1,1,1,-1,0,1);const t=new ye,e=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),n=new Float32Array([0,0,2,0,0,2]);t.setAttribute("position",new Te(e,3)),t.setAttribute("uv",new Te(n,2)),this.mesh=new X(t,new on),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}static render(t,e,n,i=!1){this.ensureInitialized(),this.mesh.material=e,t.setRenderTarget(n),i&&t.clear(!0,!0,!1),t.render(this.scene,this.camera)}}class k0{rawTarget;filteredTarget;aoMaterial;blurMaterial;frameIndex=0;constructor(t,e){this.initTargets(t,e),this.aoMaterial=new Me({uniforms:{uNormalDepth:{value:null},uResolution:{value:new j(t,e)},uProjInfo:{value:new oe(1,1,0,0)},uRadius:{value:.85},uFrame:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D uNormalDepth;
        uniform vec2 uResolution;
        uniform vec4 uProjInfo;
        uniform float uRadius;
        uniform float uFrame;
        varying vec2 vUv;

        // Interleaved gradient noise (Jimenez 2014)
        float ign(vec2 px) {
          vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
          return fract(magic.z * fract(dot(px + uFrame * vec2(5.588238, 7.15128), magic.xy)));
        }

        vec3 reconstructViewPos(vec2 uv, float linearDepth) {
          vec2 ndc = uv * 2.0 - 1.0;
          return vec3(ndc * uProjInfo.xy * linearDepth, -linearDepth);
        }

        void main() {
          vec4 nd = texture2D(uNormalDepth, vUv);
          float centerDepth = nd.w;

          // Sky or ultra-far pixels receive no AO
          if (centerDepth <= 0.01 || centerDepth > 140.0) {
            gl_FragColor = vec4(1.0);
            return;
          }

          float nLen = length(nd.xyz);
          vec3 viewNorm = nLen > 0.0001 ? (nd.xyz / nLen) : vec3(0.0, 0.0, 1.0);
          vec3 viewPos = reconstructViewPos(vUv, centerDepth);

          float noise = ign(gl_FragCoord.xy);
          float screenRadius = clamp((uRadius * 1.45) / max(0.6, centerDepth), 0.004, 0.065);

          float occlusion = 0.0;
          const int SAMPLES = 8;
          for (int i = 0; i < SAMPLES; i++) {
            float fi = float(i);
            float angle = (fi + noise) * 2.39996323; // Golden angle
            float r = screenRadius * ((fi + 0.5) / float(SAMPLES));
            vec2 sampleUv = vUv + vec2(cos(angle), sin(angle)) * r;

            vec4 sampleND = texture2D(uNormalDepth, sampleUv);
            float sampleDepth = sampleND.w;
            if (sampleDepth <= 0.01) continue;

            vec3 samplePos = reconstructViewPos(sampleUv, sampleDepth);
            vec3 diff = samplePos - viewPos;
            float dist = length(diff);
            if (dist < 0.001) continue;

            vec3 horizonDir = diff / dist;
            float nDotH = max(0.0, dot(viewNorm, horizonDir) - 0.08);
            float rangeWeight = smoothstep(uRadius * 1.9, uRadius * 0.25, dist);
            occlusion += nDotH * rangeWeight;
          }

          float ao = 1.0 - clamp((occlusion / float(SAMPLES)) * 2.25, 0.0, 0.72);
          gl_FragColor = vec4(ao, ao, ao, 1.0);
        }
      `}),this.blurMaterial=new Me({uniforms:{uRawAO:{value:null},uNormalDepth:{value:null},uTexelSize:{value:new j(1/t,1/e)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D uRawAO;
        uniform sampler2D uNormalDepth;
        uniform vec2 uTexelSize;
        varying vec2 vUv;

        void main() {
          vec4 centerND = texture2D(uNormalDepth, vUv);
          float centerDepth = centerND.w;
          if (centerDepth <= 0.01 || centerDepth > 140.0) {
            gl_FragColor = vec4(1.0);
            return;
          }
          float cLen = length(centerND.xyz);
          vec3 centerNorm = cLen > 0.0001 ? (centerND.xyz / cLen) : vec3(0.0, 0.0, 1.0);

          float centerAO = texture2D(uRawAO, vUv).r;
          float totalAO = centerAO * 0.25;
          float totalWeight = 0.25;

          for (int x = -2; x <= 2; x++) {
            for (int y = -2; y <= 2; y++) {
              vec2 offset = vec2(float(x), float(y)) * uTexelSize;
              vec2 suv = vUv + offset;
              vec4 sND = texture2D(uNormalDepth, suv);
              if (sND.w <= 0.01 || sND.w > 140.0) continue;

              float sLen = length(sND.xyz);
              if (sLen <= 0.0001) continue;
              vec3 sNorm = sND.xyz / sLen;

              float aoSample = texture2D(uRawAO, suv).r;
              float depthDiff = abs(sND.w - centerDepth);
              float depthW = exp(-depthDiff * 2.5);
              float normW = max(0.0, dot(centerNorm, sNorm));
              normW = normW * normW * normW * normW;
              float spatialW = exp(-float(x * x + y * y) * 0.25);

              float w = max(0.001, depthW * normW * spatialW);
              totalAO += aoSample * w;
              totalWeight += w;
            }
          }

          float filtered = clamp(totalAO / max(0.001, totalWeight), 0.0, 1.0);
          gl_FragColor = vec4(filtered, filtered, filtered, 1.0);
        }
      `})}initTargets(t,e){const n=Math.max(1,Math.floor(t*.65)),i=Math.max(1,Math.floor(e*.65));this.rawTarget&&this.rawTarget.dispose(),this.filteredTarget&&this.filteredTarget.dispose(),this.rawTarget=new be(n,i,{type:je,format:me,minFilter:ue,magFilter:ue,depthBuffer:!1}),this.filteredTarget=new be(n,i,{type:je,format:me,minFilter:ue,magFilter:ue,depthBuffer:!1})}resize(t,e){this.initTargets(t,e);const n=this.rawTarget.width,i=this.rawTarget.height;this.aoMaterial.uniforms.uResolution.value.set(n,i),this.blurMaterial.uniforms.uTexelSize.value.set(1/n,1/i)}render(t,e,n){this.frameIndex=(this.frameIndex+1)%64;const i=Math.tan(Kt.degToRad(n.fov*.5));return this.aoMaterial.uniforms.uProjInfo.value.set(i*n.aspect,i,0,0),this.aoMaterial.uniforms.uNormalDepth.value=e,this.aoMaterial.uniforms.uFrame.value=this.frameIndex,fn.render(t,this.aoMaterial,this.rawTarget,!1),this.blurMaterial.uniforms.uRawAO.value=this.rawTarget.texture,this.blurMaterial.uniforms.uNormalDepth.value=e,fn.render(t,this.blurMaterial,this.filteredTarget,!1),this.filteredTarget.texture}dispose(){this.rawTarget.dispose(),this.filteredTarget.dispose(),this.aoMaterial.dispose(),this.blurMaterial.dispose()}}class V0{historyTargets;currentIndex=0;frameCount=0;resolveMaterial;haltonSamples=[];currentJitter=new j;constructor(t,e){for(let i=1;i<=8;i++)this.haltonSamples.push([this.halton(i,2)-.5,this.halton(i,3)-.5]);const n={type:je,format:me,minFilter:ue,magFilter:ue,depthBuffer:!1};this.historyTargets=[new be(t,e,n),new be(t,e,n)],this.resolveMaterial=new Me({uniforms:{uCurrentColor:{value:null},uHistoryColor:{value:null},uVelocityReactive:{value:null},uTexelSize:{value:new j(1/t,1/e)},uFirstFrame:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D uCurrentColor;
        uniform sampler2D uHistoryColor;
        uniform sampler2D uVelocityReactive;
        uniform vec2 uTexelSize;
        uniform float uFirstFrame;
        varying vec2 vUv;

        vec3 rgbToYCoCg(vec3 c) {
          return vec3(
            0.25 * c.r + 0.5 * c.g + 0.25 * c.b,
            0.5 * c.r - 0.5 * c.b,
            -0.25 * c.r + 0.5 * c.g - 0.25 * c.b
          );
        }

        vec3 yCoCgToRgb(vec3 ycc) {
          float y = ycc.x;
          float co = ycc.y;
          float cg = ycc.z;
          return max(vec3(0.0), vec3(y + co - cg, y + cg, y - co - cg));
        }

        void main() {
          vec4 currSample = texture2D(uCurrentColor, vUv);
          if (uFirstFrame > 0.5) {
            gl_FragColor = currSample;
            return;
          }

          vec4 velReact = texture2D(uVelocityReactive, vUv);
          vec2 velocity = velReact.xy;
          float reactive = velReact.z;

          vec2 historyUv = vUv - velocity;
          if (historyUv.x < 0.0 || historyUv.x > 1.0 || historyUv.y < 0.0 || historyUv.y > 1.0) {
            gl_FragColor = currSample;
            return;
          }

          // Gather 3x3 neighborhood in YCoCg space for variance clipping (mean +- gamma * sigma)
          vec3 m1 = vec3(0.0);
          vec3 m2 = vec3(0.0);
          for (int x = -1; x <= 1; x++) {
            for (int y = -1; y <= 1; y++) {
              vec3 c = texture2D(uCurrentColor, vUv + vec2(float(x), float(y)) * uTexelSize).rgb;
              vec3 ycc = rgbToYCoCg(c);
              m1 += ycc;
              m2 += ycc * ycc;
            }
          }
          m1 /= 9.0;
          vec3 sigma = sqrt(max(vec3(0.0), m2 / 9.0 - m1 * m1));

          // Tighter clamp box when moving fast or on reactive weapon/particles
          float speed = length(velocity * (1.0 / uTexelSize));
          float gamma = mix(1.15, 0.72, clamp(speed * 0.12 + reactive, 0.0, 1.0));
          vec3 boxMin = m1 - gamma * sigma;
          vec3 boxMax = m1 + gamma * sigma;

          vec3 histRgb = texture2D(uHistoryColor, historyUv).rgb;
          vec3 histYcc = clamp(rgbToYCoCg(histRgb), boxMin, boxMax);
          vec3 clampedHist = yCoCgToRgb(histYcc);

          // Blend weight reduced on high-velocity or reactive pixels to prevent ghosting
          float blend = mix(0.86, 0.18, clamp(reactive * 0.85 + speed * 0.08, 0.0, 1.0));
          vec3 resolved = mix(currSample.rgb, clampedHist, blend);
          if (!(resolved.r >= 0.0 && resolved.g >= 0.0 && resolved.b >= 0.0)) {
            resolved = max(vec3(0.0), currSample.rgb);
          }
          gl_FragColor = vec4(resolved, 1.0);
        }
      `})}halton(t,e){let n=0,i=1/e,s=t;for(;s>0;)n+=i*(s%e),s=Math.floor(s/e),i/=e;return n}applyCameraJitter(t,e,n,i){if(t.clearViewOffset(),!i){this.currentJitter.set(0,0);return}const s=this.haltonSamples[this.frameCount%this.haltonSamples.length];this.currentJitter.set(s[0]*.42,s[1]*.42),t.setViewOffset(e,n,this.currentJitter.x,this.currentJitter.y,e,n)}clearCameraJitter(t){t.clearViewOffset()}render(t,e,n){const i=this.currentIndex,s=1-this.currentIndex;return this.resolveMaterial.uniforms.uCurrentColor.value=e,this.resolveMaterial.uniforms.uHistoryColor.value=this.historyTargets[i].texture,this.resolveMaterial.uniforms.uVelocityReactive.value=n,this.resolveMaterial.uniforms.uFirstFrame.value=this.frameCount===0?1:0,fn.render(t,this.resolveMaterial,this.historyTargets[s],!1),this.currentIndex=s,this.frameCount++,this.historyTargets[s].texture}resize(t,e){this.historyTargets[0].setSize(t,e),this.historyTargets[1].setSize(t,e),this.resolveMaterial.uniforms.uTexelSize.value.set(1/t,1/e),this.frameCount=0}dispose(){this.historyTargets[0].dispose(),this.historyTargets[1].dispose(),this.resolveMaterial.dispose()}}class G0{target;material;constructor(t,e){this.target=new be(t,e,{type:je,format:me,minFilter:ue,magFilter:ue,depthBuffer:!1}),this.material=new Me({uniforms:{uColor:{value:null},uVelocityReactive:{value:null},uNormalDepth:{value:null},uTexelSize:{value:new j(1/t,1/e)},uStrength:{value:.55},uSamples:{value:6}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D uColor;
        uniform sampler2D uVelocityReactive;
        uniform sampler2D uNormalDepth;
        uniform vec2 uTexelSize;
        uniform float uStrength;
        uniform float uSamples;
        varying vec2 vUv;

        void main() {
          vec4 baseCol = texture2D(uColor, vUv);
          vec4 vr = texture2D(uVelocityReactive, vUv);

          // Do not motion-blur the first-person weapon viewmodel
          if (vr.z > 0.5) {
            gl_FragColor = baseCol;
            return;
          }

          // 3x3 neighborhood max velocity dilation
          vec2 maxVel = vr.xy;
          float maxLenSq = dot(maxVel, maxVel);
          for (int x = -1; x <= 1; x++) {
            for (int y = -1; y <= 1; y++) {
              vec4 nvr = texture2D(uVelocityReactive, vUv + vec2(float(x), float(y)) * uTexelSize * 3.0);
              if (nvr.z < 0.5) {
                float lenSq = dot(nvr.xy, nvr.xy);
                if (lenSq > maxLenSq) {
                  maxLenSq = lenSq;
                  maxVel = nvr.xy;
                }
              }
            }
          }

          vec2 blurVec = maxVel * uStrength;
          float speed = length(blurVec);
          if (speed < 0.0008) {
            gl_FragColor = baseCol;
            return;
          }

          // Clamp max blur radius to 2.2% of screen width for crisp readability
          if (speed > 0.022) {
            blurVec = (blurVec / speed) * 0.022;
          }

          float centerDepth = texture2D(uNormalDepth, vUv).w;
          vec3 accum = baseCol.rgb;
          float totalW = 1.0;
          int numSamples = int(uSamples);

          for (int i = 1; i <= 8; i++) {
            if (i > numSamples) break;
            float t = (float(i) / float(numSamples)) - 0.5;
            vec2 suv = clamp(vUv + blurVec * t, 0.001, 0.999);
            vec4 sVr = texture2D(uVelocityReactive, suv);
            if (sVr.z > 0.5) continue;

            float sDepth = texture2D(uNormalDepth, suv).w;
            float depthWeight = clamp(1.0 - max(0.0, centerDepth - sDepth) * 0.35, 0.15, 1.0);
            accum += texture2D(uColor, suv).rgb * depthWeight;
            totalW += depthWeight;
          }

          gl_FragColor = vec4(accum / totalW, 1.0);
        }
      `})}render(t,e,n,i,s){return s==="off"?e:(this.material.uniforms.uColor.value=e,this.material.uniforms.uVelocityReactive.value=n,this.material.uniforms.uNormalDepth.value=i,this.material.uniforms.uStrength.value=s==="high"?.62:.38,this.material.uniforms.uSamples.value=s==="high"?8:5,fn.render(t,this.material,this.target,!1),this.target.texture)}resize(t,e){this.target.setSize(t,e),this.material.uniforms.uTexelSize.value.set(1/t,1/e)}dispose(){this.target.dispose(),this.material.dispose()}}class H0{mipLevels=4;downTargets=[];upTargets=[];prefilterMaterial;downsampleMaterial;upsampleMaterial;constructor(t,e){this.initTargets(t,e),this.prefilterMaterial=new Me({uniforms:{uInput:{value:null},uTexelSize:{value:new j(1/t,1/e)},uThreshold:{value:1.18}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D uInput;
        uniform vec2 uTexelSize;
        uniform float uThreshold;
        varying vec2 vUv;

        float luma(vec3 c) {
          return dot(c, vec3(0.2126, 0.7152, 0.0722));
        }

        vec3 softThreshold(vec3 c) {
          float br = max(max(c.r, c.g), c.b);
          float knee = uThreshold * 0.45;
          float soft = clamp(br - uThreshold + knee, 0.0, 2.0 * knee);
          soft = (soft * soft) / max(0.0001, 4.0 * knee);
          float contrib = max(soft, br - uThreshold) / max(0.0001, br);
          return c * max(0.0, contrib);
        }

        void main() {
          // Karis-average 5-tap downsample to suppress single-pixel specular fireflies
          vec3 c0 = softThreshold(texture2D(uInput, vUv).rgb);
          vec3 c1 = softThreshold(texture2D(uInput, vUv + vec2(-1.0, -1.0) * uTexelSize).rgb);
          vec3 c2 = softThreshold(texture2D(uInput, vUv + vec2( 1.0, -1.0) * uTexelSize).rgb);
          vec3 c3 = softThreshold(texture2D(uInput, vUv + vec2(-1.0,  1.0) * uTexelSize).rgb);
          vec3 c4 = softThreshold(texture2D(uInput, vUv + vec2( 1.0,  1.0) * uTexelSize).rgb);

          float w0 = 1.0 / (1.0 + luma(c0));
          float w1 = 1.0 / (1.0 + luma(c1));
          float w2 = 1.0 / (1.0 + luma(c2));
          float w3 = 1.0 / (1.0 + luma(c3));
          float w4 = 1.0 / (1.0 + luma(c4));

          vec3 sum = c0 * w0 + c1 * w1 + c2 * w2 + c3 * w3 + c4 * w4;
          float wSum = w0 + w1 + w2 + w3 + w4;
          gl_FragColor = vec4(sum / max(0.0001, wSum), 1.0);
        }
      `}),this.downsampleMaterial=new Me({uniforms:{uInput:{value:null},uTexelSize:{value:new j}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D uInput;
        uniform vec2 uTexelSize;
        varying vec2 vUv;

        void main() {
          // 9-tap Jimenez downsample
          vec3 a = texture2D(uInput, vUv + vec2(-1.0, -1.0) * uTexelSize).rgb;
          vec3 b = texture2D(uInput, vUv + vec2( 0.0, -1.0) * uTexelSize).rgb;
          vec3 c = texture2D(uInput, vUv + vec2( 1.0, -1.0) * uTexelSize).rgb;
          vec3 d = texture2D(uInput, vUv + vec2(-1.0,  0.0) * uTexelSize).rgb;
          vec3 e = texture2D(uInput, vUv).rgb;
          vec3 f = texture2D(uInput, vUv + vec2( 1.0,  0.0) * uTexelSize).rgb;
          vec3 g = texture2D(uInput, vUv + vec2(-1.0,  1.0) * uTexelSize).rgb;
          vec3 h = texture2D(uInput, vUv + vec2( 0.0,  1.0) * uTexelSize).rgb;
          vec3 i = texture2D(uInput, vUv + vec2( 1.0,  1.0) * uTexelSize).rgb;

          vec3 res = e * 0.25 + (b + d + f + h) * 0.125 + (a + c + g + i) * 0.0625;
          gl_FragColor = vec4(res, 1.0);
        }
      `}),this.upsampleMaterial=new Me({uniforms:{uLowMip:{value:null},uHighMip:{value:null},uTexelSize:{value:new j}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D uLowMip;
        uniform sampler2D uHighMip;
        uniform vec2 uTexelSize;
        varying vec2 vUv;

        void main() {
          // 3x3 tent filter upsample
          vec3 s = vec3(0.0);
          s += texture2D(uLowMip, vUv + vec2(-1.0, -1.0) * uTexelSize).rgb * 1.0;
          s += texture2D(uLowMip, vUv + vec2( 0.0, -1.0) * uTexelSize).rgb * 2.0;
          s += texture2D(uLowMip, vUv + vec2( 1.0, -1.0) * uTexelSize).rgb * 1.0;
          s += texture2D(uLowMip, vUv + vec2(-1.0,  0.0) * uTexelSize).rgb * 2.0;
          s += texture2D(uLowMip, vUv).rgb * 4.0;
          s += texture2D(uLowMip, vUv + vec2( 1.0,  0.0) * uTexelSize).rgb * 2.0;
          s += texture2D(uLowMip, vUv + vec2(-1.0,  1.0) * uTexelSize).rgb * 1.0;
          s += texture2D(uLowMip, vUv + vec2( 0.0,  1.0) * uTexelSize).rgb * 2.0;
          s += texture2D(uLowMip, vUv + vec2( 1.0,  1.0) * uTexelSize).rgb * 1.0;
          s /= 16.0;

          vec3 high = texture2D(uHighMip, vUv).rgb;
          gl_FragColor = vec4(high + s * 0.78, 1.0);
        }
      `})}initTargets(t,e){for(const s of this.downTargets)s.dispose();for(const s of this.upTargets)s.dispose();this.downTargets.length=0,this.upTargets.length=0;let n=Math.max(2,Math.floor(t/2)),i=Math.max(2,Math.floor(e/2));for(let s=0;s<this.mipLevels;s++){const o={type:je,format:me,minFilter:ue,magFilter:ue,depthBuffer:!1};this.downTargets.push(new be(n,i,o)),this.upTargets.push(new be(n,i,o)),n=Math.max(2,Math.floor(n/2)),i=Math.max(2,Math.floor(i/2))}}resize(t,e){this.initTargets(t,e)}render(t,e){this.prefilterMaterial.uniforms.uInput.value=e,this.prefilterMaterial.uniforms.uTexelSize.value.set(1/(this.downTargets[0].width*2),1/(this.downTargets[0].height*2)),fn.render(t,this.prefilterMaterial,this.downTargets[0],!1);for(let i=1;i<this.mipLevels;i++){const s=this.downTargets[i-1];this.downsampleMaterial.uniforms.uInput.value=s.texture,this.downsampleMaterial.uniforms.uTexelSize.value.set(1/s.width,1/s.height),fn.render(t,this.downsampleMaterial,this.downTargets[i],!1)}let n=this.downTargets[this.mipLevels-1].texture;for(let i=this.mipLevels-2;i>=0;i--){const s=this.downTargets[i+1],o=this.downTargets[i],a=this.upTargets[i];this.upsampleMaterial.uniforms.uLowMip.value=n,this.upsampleMaterial.uniforms.uHighMip.value=o.texture,this.upsampleMaterial.uniforms.uTexelSize.value.set(1/s.width,1/s.height),fn.render(t,this.upsampleMaterial,a,!1),n=a.texture}return this.upTargets[0].texture}dispose(){for(const t of this.downTargets)t.dispose();for(const t of this.upTargets)t.dispose();this.prefilterMaterial.dispose(),this.downsampleMaterial.dispose(),this.upsampleMaterial.dispose()}}class W0{meterTarget;adaptTargets;currentIdx=0;firstFrame=!0;meterMaterial;adaptMaterial;constructor(){const t={type:je,format:me,minFilter:ue,magFilter:ue,depthBuffer:!1};this.meterTarget=new be(16,16,t),this.adaptTargets=[new be(1,1,t),new be(1,1,t)],this.meterMaterial=new Me({uniforms:{uHdrColor:{value:null}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D uHdrColor;
        varying vec2 vUv;

        void main() {
          vec3 col = texture2D(uHdrColor, vUv).rgb;
          float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
          // Center-weighted metering
          float dist = length(vUv - 0.5);
          float weight = mix(1.3, 0.5, smoothstep(0.1, 0.65, dist));
          float logLum = clamp(log2(max(0.05, lum)), -3.0, 3.0);
          gl_FragColor = vec4(logLum * weight, weight, 0.0, 1.0);
        }
      `}),this.adaptMaterial=new Me({uniforms:{uMeterTex:{value:null},uPrevExposure:{value:null},uDt:{value:.016},uFirstFrame:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D uMeterTex;
        uniform sampler2D uPrevExposure;
        uniform float uDt;
        uniform float uFirstFrame;
        varying vec2 vUv;

        void main() {
          float sumLog = 0.0;
          float sumWeight = 0.0;

          for (int x = 0; x < 4; x++) {
            for (int y = 0; y < 4; y++) {
              vec2 uv = (vec2(float(x), float(y)) + 0.5) / 4.0;
              vec2 s = texture2D(uMeterTex, uv).rg;
              sumLog += s.r;
              sumWeight += s.g;
            }
          }

          float avgLogLum = sumLog / max(0.001, sumWeight);
          float avgLum = exp2(avgLogLum);
          // Target exposure clamped to keep sunlit stucco bright without blowing out shadows
          float targetExp = clamp(0.68 / max(0.15, avgLum), 0.72, 1.32);

          if (uFirstFrame > 0.5) {
            gl_FragColor = vec4(targetExp, targetExp, targetExp, 1.0);
            return;
          }

          float prevExp = texture2D(uPrevExposure, vec2(0.5)).r;
          // Faster adaptation when entering bright sun, gentler when entering dark shade
          float speed = targetExp < prevExp ? 3.2 : 1.65;
          float adapted = mix(prevExp, targetExp, 1.0 - exp(-uDt * speed));
          gl_FragColor = vec4(adapted, adapted, adapted, 1.0);
        }
      `})}render(t,e,n){this.meterMaterial.uniforms.uHdrColor.value=e,fn.render(t,this.meterMaterial,this.meterTarget,!1);const i=this.currentIdx,s=1-this.currentIdx;return this.adaptMaterial.uniforms.uMeterTex.value=this.meterTarget.texture,this.adaptMaterial.uniforms.uPrevExposure.value=this.adaptTargets[i].texture,this.adaptMaterial.uniforms.uDt.value=Math.min(.1,Math.max(.001,n)),this.adaptMaterial.uniforms.uFirstFrame.value=this.firstFrame?1:0,fn.render(t,this.adaptMaterial,this.adaptTargets[s],!1),this.currentIdx=s,this.firstFrame=!1,this.adaptTargets[s].texture}dispose(){this.meterTarget.dispose(),this.adaptTargets[0].dispose(),this.adaptTargets[1].dispose(),this.meterMaterial.dispose(),this.adaptMaterial.dispose()}}class X0{lut3D;material;constructor(t,e){this.lut3D=this.createProcedural3DLUT(33),this.material=new Me({glslVersion:Gs,uniforms:{uColor:{value:null},uBloom:{value:null},uAO:{value:null},uExposureTex:{value:null},uNormalDepth:{value:null},uVelocityReactive:{value:null},uLut3D:{value:this.lut3D},uTexelSize:{value:new j(1/t,1/e)},uTime:{value:0},uLowHealth:{value:0},uDamageFlash:{value:0},uDebugMode:{value:0}},vertexShader:`
        out vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        precision highp sampler3D;

        uniform sampler2D uColor;
        uniform sampler2D uBloom;
        uniform sampler2D uAO;
        uniform sampler2D uExposureTex;
        uniform sampler2D uNormalDepth;
        uniform sampler2D uVelocityReactive;
        uniform sampler3D uLut3D;
        uniform vec2 uTexelSize;
        uniform float uTime;
        uniform float uLowHealth;
        uniform float uDamageFlash;
        uniform int uDebugMode;

        in vec2 vUv;
        out vec4 outColor;

        // AgX-inspired sigmoid filmic curve with natural highlight desaturation
        vec3 agxToneMap(vec3 hdr) {
          mat3 inset = mat3(
            0.842479062253094, 0.0423282422610123, 0.0423756549057051,
            0.0784335999999992, 0.878468636469772, 0.0784336,
            0.0792237451477643, 0.0791661274605434, 0.879142973793104
          );
          vec3 val = inset * max(vec3(0.0), hdr);
          // Filmic S-curve
          vec3 x2 = val * val;
          vec3 mapped = (val * (2.45 * val + 0.08)) / (val * (2.38 * val + 0.62) + 0.11);
          // Subtle highlight saturation recovery + clean rolloff
          float luma = dot(mapped, vec3(0.2126, 0.7152, 0.0722));
          mapped = mix(vec3(luma), mapped, 1.12);
          return clamp(mapped, 0.0, 1.0);
        }

        void main() {
          vec4 nd = texture(uNormalDepth, vUv);
          vec4 vr = texture(uVelocityReactive, vUv);

          // Debug Buffer Views (F2/F3/F4/F5)
          if (uDebugMode == 1) {
            // Cascade split distance visualization
            vec3 base = texture(uColor, vUv).rgb * 0.45;
            float d = nd.w;
            vec3 tint = d < 12.0 ? vec3(0.2, 1.0, 0.3)
                      : d < 32.0 ? vec3(0.2, 0.7, 1.0)
                      : d < 75.0 ? vec3(1.0, 0.85, 0.2)
                      : vec3(1.0, 0.25, 0.35);
            outColor = vec4(mix(base, tint, 0.55), 1.0);
            return;
          } else if (uDebugMode == 2) {
            // View-space unit normals
            float nLen = length(nd.xyz);
            vec3 nVis = nLen > 0.0001 ? (nd.xyz / nLen) * 0.5 + 0.5 : vec3(0.0);
            outColor = vec4(nVis, 1.0);
            return;
          } else if (uDebugMode == 3) {
            // Screen-space velocity + reactive mask
            outColor = vec4(abs(vr.xy) * 25.0, vr.z, 1.0);
            return;
          } else if (uDebugMode == 4) {
            // Filtered GTAO buffer
            float aoDebug = texture(uAO, vUv).r;
            outColor = vec4(vec3(aoDebug), 1.0);
            return;
          }

          // Contrast-Adaptive Sharpening (CAS) + subtle peripheral chromatic separation
          vec2 centerOffset = vUv - 0.5;
          float caAmount = dot(centerOffset, centerOffset) * 0.0022;
          vec3 cCenter = texture(uColor, vUv).rgb;
          cCenter.r = texture(uColor, vUv + centerOffset * caAmount).r;
          cCenter.b = texture(uColor, vUv - centerOffset * caAmount).b;

          vec3 cTop = texture(uColor, vUv + vec2(0.0, -uTexelSize.y)).rgb;
          vec3 cBot = texture(uColor, vUv + vec2(0.0,  uTexelSize.y)).rgb;
          vec3 cLeft = texture(uColor, vUv + vec2(-uTexelSize.x, 0.0)).rgb;
          vec3 cRight = texture(uColor, vUv + vec2( uTexelSize.x, 0.0)).rgb;

          vec3 neighborAvg = 0.25 * (cTop + cBot + cLeft + cRight);
          vec3 hdr = max(vec3(0.0), cCenter + (cCenter - neighborAvg) * 0.22);

          // Apply GTAO contact shadowing (disabled on sky, reduced on weapon viewmodel)
          float ao = clamp(texture(uAO, vUv).r, 0.0, 1.0);
          float aoWeight = nd.w <= 0.01 ? 0.0 : (vr.z > 0.5 ? 0.35 : 0.85);
          hdr *= mix(1.0, ao, aoWeight);

          // Add Karis HDR Bloom
          vec3 bloom = texture(uBloom, vUv).rgb;
          hdr += bloom * 0.26;

          // Apply GPU auto-exposure
          float exposure = texture(uExposureTex, vec2(0.5)).r;
          hdr *= exposure;

          // AgX Tone Mapping
          vec3 ldr = agxToneMap(hdr);

          // Convert linear to sRGB before 33^3 3D LUT lookup
          vec3 srgb = pow(clamp(ldr, 0.0, 1.0), vec3(1.0 / 2.2));
          vec3 lutCoords = srgb * (32.0 / 33.0) + (0.5 / 33.0);
          vec3 graded = texture(uLut3D, lutCoords).rgb;

          // Subtle natural optical vignette
          float distSq = dot(centerOffset, centerOffset);
          float vignette = 1.0 - distSq * 0.38;
          graded *= clamp(vignette, 0.65, 1.0);

          // Low-health critical edge desaturation & pulse
          if (uLowHealth > 0.01) {
            float gray = dot(graded, vec3(0.299, 0.587, 0.114));
            graded = mix(graded, vec3(gray) * vec3(1.05, 0.82, 0.80), uLowHealth * 0.55);
            float pulse = 0.5 + 0.5 * sin(uTime * 6.0);
            graded = mix(graded, vec3(0.55, 0.06, 0.05), distSq * uLowHealth * (0.65 + 0.35 * pulse));
          }

          // Directional damage flash tint
          if (uDamageFlash > 0.01) {
            graded = mix(graded, vec3(0.85, 0.12, 0.08), distSq * uDamageFlash * 0.85);
          }

          // Subtle filmic grain (1.2% amplitude to prevent 8-bit banding)
          float grain = fract(sin(dot(gl_FragCoord.xy + fract(uTime), vec2(12.9898, 78.233))) * 43758.5453);
          graded += (grain - 0.5) * 0.008;

          outColor = vec4(clamp(graded, 0.0, 1.0), 1.0);
        }
      `})}createProcedural3DLUT(t){const e=new Uint8Array(t*t*t*4);let n=0;for(let s=0;s<t;s++){const o=s/(t-1);for(let a=0;a<t;a++){const l=a/(t-1);for(let c=0;c<t;c++){const h=c/(t-1),u=.2126*h+.7152*l+.0722*o,d=Math.pow(1-u,2.2),f=Math.pow(u,1.8);let g=h+f*.024-d*.012,v=l+f*.012+d*.004,p=o-f*.018+d*.022;g=Kt.clamp(g,0,1),v=Kt.clamp(v,0,1),p=Kt.clamp(p,0,1),e[n++]=Math.round(g*255),e[n++]=Math.round(v*255),e[n++]=Math.round(p*255),e[n++]=255}}}const i=new Fl(e,t,t,t);return i.format=me,i.type=tn,i.minFilter=ue,i.magFilter=ue,i.wrapS=Qe,i.wrapT=Qe,i.wrapR=Qe,i.unpackAlignment=1,i.needsUpdate=!0,i}render(t,e,n,i,s,o,a,l,c,h,u){this.material.uniforms.uColor.value=e,this.material.uniforms.uBloom.value=n,this.material.uniforms.uAO.value=i,this.material.uniforms.uExposureTex.value=s,this.material.uniforms.uNormalDepth.value=o,this.material.uniforms.uVelocityReactive.value=a,this.material.uniforms.uTime.value=l,this.material.uniforms.uLowHealth.value=c,this.material.uniforms.uDamageFlash.value=h;const d=u==="cascades"?1:u==="normals"?2:u==="velocity"?3:u==="ao"?4:0;this.material.uniforms.uDebugMode.value=d,fn.render(t,this.material,null,!0)}resize(t,e){this.material.uniforms.uTexelSize.value.set(1/t,1/e)}dispose(){this.lut3D.dispose(),this.material.dispose()}}class q0{constructor(t,e,n){this.settings=n,this.renderer=new x0({canvas:t,powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!0,preserveDrawingBuffer:new URLSearchParams(window.location.search).get("manual")==="1"}),this.renderer.outputColorSpace=jn,this.renderer.toneMapping=bn,this.renderer.autoClear=!1,this.renderer.info.autoReset=!1;const i=this.settings.getQualityParams();this.currentScale=this.settings.data.renderScale,this.cssWidth=window.innerWidth,this.cssHeight=window.innerHeight;const s=this.getEffectiveDpr();this.internalWidth=Math.max(320,Math.floor(this.cssWidth*s*this.currentScale)),this.internalHeight=Math.max(180,Math.floor(this.cssHeight*s*this.currentScale)),this.renderer.setPixelRatio(1),this.renderer.setSize(this.cssWidth,this.cssHeight,!1),this.sky=new O0(e,i.cloudSteps),this.sky.bakeProceduralEnvironment(this.renderer,e),this.viewmodelScene.environment=e.environment,this.viewmodelScene.environmentIntensity=.82,this.vmSunLight=new ac(16774367,3.65),this.vmSunLight.position.copy(this.sky.sunDirection).multiplyScalar(120),this.viewmodelScene.add(this.vmSunLight),this.vmHemiLight=new rc(10208496,12098420,1.35),this.viewmodelScene.add(this.vmHemiLight),this.viewmodelScene.add(this.viewmodelCamera),this.shadows=new B0(i.shadowMapSize),this.shadows.farCascadeStride=this.settings.data.quality==="low"?4:2,this.whiteAoTexture=new Qi(new Uint8Array([255,255,255,255]),1,1),this.whiteAoTexture.needsUpdate=!0,this.prepass=new z0(this.internalWidth,this.internalHeight),this.gtao=new k0(this.internalWidth,this.internalHeight),this.taa=new V0(this.internalWidth,this.internalHeight),this.motionBlur=new G0(this.internalWidth,this.internalHeight),this.bloom=new H0(this.internalWidth,this.internalHeight),this.exposure=new W0,this.composite=new X0(this.internalWidth,this.internalHeight),this.initHdrSceneTarget(this.internalWidth,this.internalHeight)}settings;renderer;sky;shadows;prepass;gtao;taa;motionBlur;bloom;exposure;composite;hdrSceneTarget;cssWidth=window.innerWidth;cssHeight=window.innerHeight;internalWidth=window.innerWidth;internalHeight=window.innerHeight;currentScale=1;lastScaleChangeTime=0;whiteAoTexture;viewmodelScene=new Zs;viewmodelCamera=new Ge(58,16/9,.02,5);vmSunLight;vmHemiLight;getEffectiveDpr(){const t=this.settings.isMobile?1.25:1.5;return Math.min(window.devicePixelRatio||1,t)}initHdrSceneTarget(t,e){this.hdrSceneTarget&&this.hdrSceneTarget.dispose(),this.hdrSceneTarget=new be(t,e,{type:je,format:me,minFilter:ue,magFilter:ue,depthBuffer:!0,stencilBuffer:!1})}resize(t,e){this.cssWidth=Math.max(1,t),this.cssHeight=Math.max(1,e),this.renderer.setSize(this.cssWidth,this.cssHeight,!1),this.applyInternalScale(this.settings.data.renderScale)}applyInternalScale(t){this.currentScale=Kt.clamp(t,.5,1.25);const e=this.getEffectiveDpr(),n=Math.max(320,Math.floor(this.cssWidth*e*this.currentScale)),i=Math.max(180,Math.floor(this.cssHeight*e*this.currentScale));n===this.internalWidth&&i===this.internalHeight||(this.internalWidth=n,this.internalHeight=i,this.initHdrSceneTarget(n,i),this.prepass.resize(n,i),this.gtao.resize(n,i),this.taa.resize(n,i),this.motionBlur.resize(n,i),this.bloom.resize(n,i),this.composite.resize(n,i))}evaluateDynamicScale(t,e){if(!this.settings.data.dynamicRenderScale||e-this.lastScaleChangeTime<1.6)return;const n=this.settings.data.renderScale,i=Math.max(.5,n-.35);t>19&&this.currentScale>i+.001?(this.applyInternalScale(Math.max(i,this.currentScale-.1)),this.lastScaleChangeTime=e):t<13.3&&this.currentScale<n&&(this.applyInternalScale(Math.min(n,this.currentScale+.1)),this.lastScaleChangeTime=e)}renderFrame(t,e,n,i,s,o,a,l,c){const h=this.settings.getQualityParams();this.sky.update(s,e.position,h.cloudSteps),this.shadows.render(this.renderer,t,e,this.sky.sunDirection,i,this.sky.skyMesh);const u=n.visible;this.viewmodelCamera.aspect=e.aspect,this.viewmodelCamera.position.copy(e.position),this.viewmodelCamera.quaternion.copy(e.quaternion),this.viewmodelCamera.updateMatrixWorld(!0),this.viewmodelCamera.updateProjectionMatrix(),this.taa.clearCameraJitter(e),e.updateProjectionMatrix(),this.prepass.render(this.renderer,t,e,this.sky.skyMesh,this.viewmodelScene,this.viewmodelCamera,u);const d=this.settings.data.gtao||c==="ao"?this.gtao.render(this.renderer,this.prepass.normalDepthTexture,e):this.whiteAoTexture;this.renderer.info.reset(),this.taa.applyCameraJitter(e,this.internalWidth,this.internalHeight,this.settings.data.taa),e.updateProjectionMatrix(),this.renderer.setRenderTarget(this.hdrSceneTarget),this.renderer.setClearColor(0,1),this.renderer.clear(!0,!0,!1),this.renderer.render(t,e),this.taa.clearCameraJitter(e),e.updateProjectionMatrix(),u&&(this.taa.applyCameraJitter(this.viewmodelCamera,this.internalWidth,this.internalHeight,this.settings.data.taa),this.viewmodelCamera.updateProjectionMatrix(),this.renderer.clearDepth(),this.renderer.render(this.viewmodelScene,this.viewmodelCamera),this.taa.clearCameraJitter(this.viewmodelCamera),this.viewmodelCamera.updateProjectionMatrix());let f=this.hdrSceneTarget.texture;this.settings.data.taa&&(f=this.taa.render(this.renderer,f,this.prepass.velocityReactiveTexture)),f=this.motionBlur.render(this.renderer,f,this.prepass.velocityReactiveTexture,this.prepass.normalDepthTexture,this.settings.data.motionBlur);const g=this.bloom.render(this.renderer,f),v=this.exposure.render(this.renderer,f,o);this.composite.render(this.renderer,f,g,d,v,this.prepass.normalDepthTexture,this.prepass.velocityReactiveTexture,s,a,l,c)}getRenderCallStats(){return{calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,internalScale:this.currentScale}}}class Y0{root;crosshairEl;chTop;chBottom;chLeft;chRight;hitMarkerEl;hitMarkerTimer=0;damageCanvas;damageCtx;damageArcs=[];hpTextEl;hpFillEl;hpTrailEl;trailHealth=100;trailDelayTimer=0;lastRecordedHealth=100;stanceTextEl;staminaFillEl;magCountEl;reserveCountEl;fireModeEl;grenadeCountEl;reloadBarWrapEl;reloadFillEl;minimapCanvas;minimapCtx;alphaScoreEl;bravoScoreEl;clockEl;zoneEl;killFeedContainer;killFeedItems=[];nextKillId=1;respawnBannerEl;scoreboardEl;scoreboardBodyEl;telemetryEl;domCache=new WeakMap;minimapAccum=1;scoreboardAccum=1;lastScoreboardHtml="";damageCanvasDirty=!1;setText(t,e){this.setProp(t,"#text",e)}setStyle(t,e,n){this.setProp(t,e,n)}setProp(t,e,n){let i=this.domCache.get(t);i||(i=new Map,this.domCache.set(t,i)),i.get(e)!==n&&(i.set(e,n),e==="#text"?t.textContent=n:t.style.setProperty(e,n))}constructor(t){this.root=document.createElement("div"),this.root.id="hud-root",this.root.innerHTML=`
      <div class="hud-top-left">
        <div class="radar-frame">
          <canvas id="radar-canvas" width="156" height="156"></canvas>
          <div class="radar-cardinal">N</div>
        </div>
      </div>

      <div class="hud-top-center">
        <div class="score-bar">
          <div class="team-block alpha">
            <span class="team-tag">TF-ALPHA</span>
            <span class="team-score" id="hud-score-alpha">00</span>
          </div>
          <div class="match-clock-wrap">
            <span class="match-mode">TDM // TARGET 30</span>
            <span class="match-clock" id="hud-clock">05:00</span>
          </div>
          <div class="team-block bravo">
            <span class="team-score" id="hud-score-bravo">00</span>
            <span class="team-tag">OPFOR</span>
          </div>
        </div>
        <div class="zone-callout" id="hud-zone">CENTRAL BAZAAR</div>
      </div>

      <div class="hud-top-right" id="hud-killfeed"></div>

      <div class="hud-center">
        <canvas id="damage-arc-canvas" width="320" height="320"></canvas>
        <div class="crosshair" id="hud-crosshair">
          <div class="ch-dot"></div>
          <div class="ch-tick top" id="ch-top"></div>
          <div class="ch-tick bottom" id="ch-bottom"></div>
          <div class="ch-tick left" id="ch-left"></div>
          <div class="ch-tick right" id="ch-right"></div>
        </div>
        <div class="hit-marker" id="hud-hitmarker">
          <span class="hm-line l1"></span>
          <span class="hm-line l2"></span>
          <span class="hm-line l3"></span>
          <span class="hm-line l4"></span>
        </div>
        <div class="respawn-banner" id="hud-respawn" style="display:none;">
          KIA // REDEPLOYING IN <span id="hud-respawn-timer">2.6</span>s
        </div>
      </div>

      <div class="hud-bottom-left">
        <div class="status-header">
          <div class="hp-readout">
            <span class="hp-plus">+</span>
            <span class="hp-num" id="hud-hp-num">100</span>
          </div>
          <div class="stance-pill" id="hud-stance">STAND</div>
        </div>
        <div class="hp-bar-track">
          <div class="hp-bar-trail" id="hud-hp-trail"></div>
          <div class="hp-bar-fill" id="hud-hp-fill"></div>
        </div>
        <div class="stamina-bar-track">
          <div class="stamina-bar-fill" id="hud-stamina-fill"></div>
        </div>
      </div>

      <div class="hud-bottom-right">
        <div class="reload-progress-wrap" id="hud-reload-wrap">
          <span class="reload-label">RELOADING</span>
          <div class="reload-track"><div class="reload-fill" id="hud-reload-fill"></div></div>
        </div>
        <div class="ammo-row">
          <div class="ammo-counts">
            <span class="mag-num" id="hud-mag">30</span>
            <span class="ammo-sep">/</span>
            <span class="reserve-num" id="hud-reserve">120</span>
          </div>
          <div class="firemode-stack">
            <span class="firemode-badge" id="hud-firemode">AUTO</span>
            <span class="grenade-badge" id="hud-grenades">FRAG x1</span>
          </div>
        </div>
        <div class="weapon-meta">
          <span class="weapon-title">MK18 MOD-C4 // 5.56x45MM</span>
          <span class="weapon-hint">[R] RELOAD  [B] MODE  [G] FRAG  [F] INSPECT</span>
        </div>
      </div>

      <div class="hud-scoreboard" id="hud-scoreboard" style="display:none;">
        <div class="sb-header">TACTICAL OPERATIONS ROSTER // CASBAH SECTOR 04</div>
        <div class="sb-body" id="hud-scoreboard-body"></div>
      </div>

      <div class="hud-telemetry" id="hud-telemetry" style="display:none;"></div>
    `,t.appendChild(this.root),this.crosshairEl=this.root.querySelector("#hud-crosshair"),this.chTop=this.root.querySelector("#ch-top"),this.chBottom=this.root.querySelector("#ch-bottom"),this.chLeft=this.root.querySelector("#ch-left"),this.chRight=this.root.querySelector("#ch-right"),this.hitMarkerEl=this.root.querySelector("#hud-hitmarker"),this.damageCanvas=this.root.querySelector("#damage-arc-canvas"),this.damageCtx=this.damageCanvas.getContext("2d"),this.hpTextEl=this.root.querySelector("#hud-hp-num"),this.hpFillEl=this.root.querySelector("#hud-hp-fill"),this.hpTrailEl=this.root.querySelector("#hud-hp-trail"),this.stanceTextEl=this.root.querySelector("#hud-stance"),this.staminaFillEl=this.root.querySelector("#hud-stamina-fill"),this.magCountEl=this.root.querySelector("#hud-mag"),this.reserveCountEl=this.root.querySelector("#hud-reserve"),this.fireModeEl=this.root.querySelector("#hud-firemode"),this.grenadeCountEl=this.root.querySelector("#hud-grenades"),this.reloadBarWrapEl=this.root.querySelector("#hud-reload-wrap"),this.reloadFillEl=this.root.querySelector("#hud-reload-fill"),this.minimapCanvas=this.root.querySelector("#radar-canvas"),this.minimapCtx=this.minimapCanvas.getContext("2d"),this.alphaScoreEl=this.root.querySelector("#hud-score-alpha"),this.bravoScoreEl=this.root.querySelector("#hud-score-bravo"),this.clockEl=this.root.querySelector("#hud-clock"),this.zoneEl=this.root.querySelector("#hud-zone"),this.killFeedContainer=this.root.querySelector("#hud-killfeed"),this.respawnBannerEl=this.root.querySelector("#hud-respawn"),this.scoreboardEl=this.root.querySelector("#hud-scoreboard"),this.scoreboardBodyEl=this.root.querySelector("#hud-scoreboard-body"),this.telemetryEl=this.root.querySelector("#hud-telemetry")}setVisible(t){this.root.style.display=t?"block":"none"}triggerHitMarker(t,e){this.hitMarkerTimer=e?.18:.12,this.hitMarkerEl.classList.toggle("headshot",t||e),this.setStyle(this.hitMarkerEl,"opacity","1"),this.setStyle(this.hitMarkerEl,"transform",`translate(-50%, -50%) scale(${e?1.28:1.08})`)}triggerDamageIndicator(t){this.damageArcs.push({alpha:1,sourcePos:t.clone()}),this.damageArcs.length>5&&this.damageArcs.shift()}pushKillFeed(t,e,n,i,s,o){const a=document.createElement("div");a.className="killfeed-item";const l=s?'<span class="kf-hs">[HS]</span>':"";for(a.innerHTML=`
      <span class="kf-name ${e}">${t}</span>
      <span class="kf-weapon">MK18</span>
      ${l}
      <span class="kf-name ${i}">${n}</span>
    `,this.killFeedContainer.appendChild(a),this.killFeedItems.push({id:this.nextKillId++,el:a,expireTime:o+4.5});this.killFeedItems.length>4;)this.killFeedItems.shift().el.remove()}update(t,e,n,i,s,o,a,l,c,h,u,d,f){const g=n.weapon,v=Math.hypot(n.controller.velocity.x,n.controller.velocity.z),p=5+g.currentSpread*320+v*1.45+(n.controller.isGrounded?0:8),m=Math.round(Kt.clamp(p,4,28)*2)/2,y=Math.max(0,1-g.adsProgress*1.15);this.setStyle(this.crosshairEl,"opacity",y.toFixed(2)),this.setStyle(this.chTop,"transform",`translate(-50%, ${-(m+6)}px)`),this.setStyle(this.chBottom,"transform",`translate(-50%, ${m}px)`),this.setStyle(this.chLeft,"transform",`translate(${-(m+6)}px, -50%)`),this.setStyle(this.chRight,"transform",`translate(${m}px, -50%)`),this.hitMarkerTimer>0&&(this.hitMarkerTimer-=t,this.hitMarkerTimer<=0?this.setStyle(this.hitMarkerEl,"opacity","0"):this.setStyle(this.hitMarkerEl,"transform","translate(-50%, -50%) scale(1.0)")),this.renderDamageArcs(t,n);const _=Math.ceil(n.health);_<this.lastRecordedHealth&&(this.trailDelayTimer=.35),this.lastRecordedHealth=_,this.trailDelayTimer>0?this.trailDelayTimer-=t:this.trailHealth>_?this.trailHealth=Math.max(_,this.trailHealth-t*65):this.trailHealth=_,this.setText(this.hpTextEl,String(_).padStart(3,"0")),this.setStyle(this.hpFillEl,"width",`${_}%`),this.setStyle(this.hpFillEl,"background",_<=35?"linear-gradient(90deg, #ff3b30, #ff6b58)":"linear-gradient(90deg, #e8f0f8, #ffffff)"),this.setStyle(this.hpTrailEl,"width",`${this.trailHealth.toFixed(1)}%`);const x=n.controller.isGrounded?n.controller.isCrouching?"CROUCH":v>5.4?"SPRINT":"STAND":"AIR",w=n.leanAmount<-.35?" · PEEK L":n.leanAmount>.35?" · PEEK R":"";if(this.setText(this.stanceTextEl,`${x}${w}`),this.setStyle(this.staminaFillEl,"width","100%"),this.setText(this.magCountEl,String(g.magAmmo).padStart(2,"0")),this.setStyle(this.magCountEl,"color",g.magAmmo<=7?"#ff5548":"#f4f7fa"),this.setText(this.reserveCountEl,String(g.reserveAmmo).padStart(3,"0")),this.setText(this.fireModeEl,g.fireMode),this.setText(this.grenadeCountEl,`FRAG x${g.explosiveCount}`),g.isReloading){this.setStyle(this.reloadBarWrapEl,"opacity","1");const A=Kt.clamp(g.reloadTimer/Math.max(.01,g.reloadDuration),0,1);this.setStyle(this.reloadFillEl,"width",`${(A*100).toFixed(1)}%`)}else this.setStyle(this.reloadBarWrapEl,"opacity","0");this.setText(this.alphaScoreEl,String(o).padStart(2,"0")),this.setText(this.bravoScoreEl,String(a).padStart(2,"0"));const T=Math.floor(Math.max(0,l)/60),R=Math.floor(Math.max(0,l)%60);if(this.setText(this.clockEl,`${String(T).padStart(2,"0")}:${String(R).padStart(2,"0")}`),this.setText(this.zoneEl,c),n.isAlive)this.setStyle(this.respawnBannerEl,"display","none");else{this.setStyle(this.respawnBannerEl,"display","block");const A=this.respawnBannerEl.querySelector("#hud-respawn-timer");A&&this.setText(A,Math.max(0,n.respawnTimer).toFixed(1))}for(let A=this.killFeedItems.length-1;A>=0;A--)e>=this.killFeedItems[A].expireTime&&(this.killFeedItems[A].el.remove(),this.killFeedItems.splice(A,1));this.minimapAccum+=t,this.minimapAccum>=1/30&&(this.minimapAccum=0,this.renderMinimap(e,n,i,s)),this.setStyle(this.scoreboardEl,"display",h?"block":"none"),this.scoreboardAccum+=t,h&&this.scoreboardAccum>=.25?(this.scoreboardAccum=0,this.renderScoreboard(u())):h||(this.scoreboardAccum=1),this.setStyle(this.telemetryEl,"display",d?"block":"none"),d&&this.setText(this.telemetryEl,f())}renderDamageArcs(t,e){const n=this.damageCtx;if(this.damageArcs.length===0){this.damageCanvasDirty&&(n.clearRect(0,0,320,320),this.damageCanvasDirty=!1);return}n.clearRect(0,0,320,320),this.damageCanvasDirty=!0;const i=e.controller.position.x,s=e.controller.position.z;for(let o=this.damageArcs.length-1;o>=0;o--){const a=this.damageArcs[o];if(a.alpha-=t*.95,a.alpha<=0){this.damageArcs.splice(o,1);continue}const l=a.sourcePos.x-i,c=a.sourcePos.z-s,u=Math.atan2(l,-c)+e.yaw-Math.PI*.5;n.save(),n.translate(160,160),n.rotate(u),n.beginPath(),n.arc(0,0,118,-.34,.34),n.strokeStyle=`rgba(255, 58, 44, ${(a.alpha*.85).toFixed(2)})`,n.lineWidth=6,n.stroke(),n.restore()}}renderMinimap(t,e,n,i){const s=this.minimapCtx,o=156,a=156,l=o*.5,c=a*.5,h=1.85;s.clearRect(0,0,o,a),s.fillStyle="rgba(12, 18, 24, 0.82)",s.fillRect(0,0,o,a),s.save(),s.translate(l,c),s.rotate(e.yaw);const u=e.controller.position.x,d=e.controller.position.z;for(const f of i){const g=(f.x-u)*h,v=(f.z-d)*h;s.fillStyle=f.isInterior?"rgba(195, 165, 120, 0.45)":"rgba(155, 140, 118, 0.52)",s.fillRect(g-f.w*h*.5,v-f.d*h*.5,f.w*h,f.d*h)}for(const f of n){if(!f.isAlive)continue;const g=(f.controller.position.x-u)*h,v=(f.controller.position.z-d)*h;if(!(g*g+v*v>5184))if(f.team==="alpha")s.fillStyle="#38bdf8",s.beginPath(),s.arc(g,v,3.3,0,Math.PI*2),s.fill();else{const p=t-f.lastFiredTimestamp;if(p<2.5||f.hasLineOfSight){const m=f.hasLineOfSight?.95:Math.max(.2,1-p/2.5);s.fillStyle=`rgba(255, 68, 56, ${m.toFixed(2)})`,s.beginPath(),s.arc(g,v,3.8,0,Math.PI*2),s.fill()}}}s.restore(),s.save(),s.translate(l,c),s.fillStyle="rgba(220, 240, 255, 0.11)",s.beginPath(),s.moveTo(0,0),s.arc(0,0,52,-Math.PI*.5-.58,-Math.PI*.5+.58),s.closePath(),s.fill(),s.fillStyle="#ffffff",s.beginPath(),s.moveTo(0,-5),s.lineTo(4,4),s.lineTo(0,2),s.lineTo(-4,4),s.closePath(),s.fill(),s.restore(),s.strokeStyle="rgba(180, 210, 235, 0.16)",s.lineWidth=1,s.beginPath(),s.arc(l,c,48,0,Math.PI*2),s.stroke()}renderScoreboard(t){const n=`
      <div class="sb-row header">
        <span class="sb-col name">OPERATOR</span>
        <span class="sb-col">K</span>
        <span class="sb-col">D</span>
        <span class="sb-col">A</span>
        <span class="sb-col">ACC</span>
        <span class="sb-col">HS%</span>
      </div>
      ${t.map(i=>{const s=i.shotsFired>0?Math.round(i.shotsHit/i.shotsFired*100):0,o=i.kills>0?Math.round(i.headshots/i.kills*100):0;return`
          <div class="sb-row ${i.team}">
            <span class="sb-col name">${i.name}</span>
            <span class="sb-col">${i.kills}</span>
            <span class="sb-col">${i.deaths}</span>
            <span class="sb-col">${i.assists}</span>
            <span class="sb-col">${s}%</span>
            <span class="sb-col">${o}%</span>
          </div>
        `}).join("")}
    `;n!==this.lastScoreboardHtml&&(this.lastScoreboardHtml=n,this.scoreboardBodyEl.innerHTML=n)}}class K0{constructor(t,e,n,i){this.settings=e,this.synth=n,this.callbacks=i,this.root=document.createElement("div"),this.root.id="menu-root",this.root.innerHTML=`
      <!-- Live 3D Flythrough Title Overlay -->
      <div class="menu-card title-card" id="menu-title-panel">
        <div class="menu-eyebrow">TASK FORCE SIROCCO // CASBAH SECTOR 04</div>
        <h1 class="menu-title">OPERATION SIROCCO</h1>
        <p class="menu-subtitle">
          Tactical Urban Combat Simulation — North African Market District.
          Eliminate opposing fireteams across sunlit streets, covered souks, and elevated overlooks.
        </p>
        <div class="menu-actions">
          <button class="btn-primary" id="btn-deploy">DEPLOY TO COMBAT</button>
          <button class="btn-secondary" id="btn-open-settings-title">GRAPHICS & AUDIO SETTINGS</button>
        </div>
        <div class="menu-fs-row">
          <button class="btn-secondary fs-btn" id="btn-fullscreen-title">ENTER FULLSCREEN</button>
        </div>
        <p class="menu-hint">iPhone: tap Share → Add to Home Screen to play fullscreen.</p>
        <div class="controls-grid">
          <div><span>WASD / L-STICK</span> Move · slide up to lock sprint</div>
          <div><span>MOUSE / R-TOUCH</span> Aim / Fire / ADS</div>
          <div><span>Q &amp; E / PEEK</span> Tactical Lean L/R</div>
          <div><span>C / CRCH</span> Crouch Stance</div>
          <div><span>SPACE / JUMP</span> Jump &amp; Mantle</div>
          <div><span>R / B / G</span> Reload / Mode / Frag</div>
          <div><span>F / INSP</span> Inspect Rifle</div>
          <div><span>TAB / ROSTER</span> Tactical Scoreboard</div>
        </div>
      </div>

      <!-- Pause Menu (ESC) -->
      <div class="menu-card pause-card" id="menu-pause-panel" style="display:none;">
        <div class="menu-eyebrow">SIMULATION PAUSED</div>
        <h2 class="menu-title-sm">TACTICAL COMMAND</h2>
        <div class="menu-actions vertical">
          <button class="btn-primary" id="btn-resume">RESUME COMBAT</button>
          <button class="btn-secondary" id="btn-open-settings-pause">GRAPHICS & AUDIO SETTINGS</button>
          <button class="btn-secondary fs-btn" id="btn-fullscreen-pause">ENTER FULLSCREEN</button>
          <button class="btn-secondary" id="btn-restart">RESTART MATCH</button>
        </div>
      </div>

      <!-- Settings Panel -->
      <div class="menu-card settings-card" id="menu-settings-panel" style="display:none;">
        <div class="menu-eyebrow">CONFIGURATION</div>
        <h2 class="menu-title-sm">GRAPHICS, AUDIO & CONTROLS</h2>
        <div class="settings-rows">
          <label class="setting-row">
            <span>Quality Preset</span>
            <select id="set-quality">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="ultra">Ultra</option>
            </select>
          </label>
          <label class="setting-row">
            <span>Render Scale (<b id="lbl-scale">100%</b>)</span>
            <input type="range" id="set-scale" min="0.5" max="1.25" step="0.05" />
          </label>
          <label class="setting-row">
            <span>Field of View (<b id="lbl-fov">78°</b>)</span>
            <input type="range" id="set-fov" min="70" max="105" step="1" />
          </label>
          <label class="setting-row">
            <span>Look / Aim Sensitivity (<b id="lbl-sens">1.00</b>)</span>
            <input type="range" id="set-sens" min="0.1" max="3.0" step="0.05" />
          </label>
          <label class="setting-row">
            <span>Mobile / Tablet Touch HUD</span>
            <input type="checkbox" id="set-touch-hud" />
          </label>
          <label class="setting-row fs-setting">
            <span>Auto Fullscreen on Deploy</span>
            <input type="checkbox" id="set-auto-fs" />
          </label>
          <label class="setting-row">
            <span>Ambient Occlusion (GTAO)</span>
            <input type="checkbox" id="set-gtao" />
          </label>
          <label class="setting-row">
            <span>Temporal AA (TAA)</span>
            <input type="checkbox" id="set-taa" />
          </label>
          <label class="setting-row">
            <span>Motion Blur</span>
            <select id="set-mb">
              <option value="off">Off</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </label>
          <label class="setting-row">
            <span>Master Volume (<b id="lbl-master">85%</b>)</span>
            <input type="range" id="set-master" min="0" max="1" step="0.05" />
          </label>
        </div>
        <div class="menu-actions">
          <button class="btn-primary" id="btn-close-settings">APPLY & RETURN</button>
        </div>
      </div>

      <!-- End of Round Summary -->
      <div class="menu-card endround-card" id="menu-endround-panel" style="display:none;">
        <div class="menu-eyebrow" id="end-eyebrow">MATCH COMPLETE</div>
        <h2 class="menu-title" id="end-headline">VICTORY</h2>
        <p class="menu-subtitle" id="end-summary">TF-ALPHA 30 — 18 OPFOR</p>
        <div class="menu-actions">
          <button class="btn-primary" id="btn-play-again">PLAY AGAIN</button>
        </div>
      </div>
    `,t.appendChild(this.root),this.titlePanel=this.root.querySelector("#menu-title-panel"),this.pausePanel=this.root.querySelector("#menu-pause-panel"),this.settingsPanel=this.root.querySelector("#menu-settings-panel"),this.endRoundPanel=this.root.querySelector("#menu-endround-panel"),this.bindEvents(),this.syncInputsFromSettings()}settings;synth;callbacks;root;titlePanel;pausePanel;settingsPanel;endRoundPanel;returnToTitleFromSettings=!0;bindEvents(){const t=(d,f)=>{const g=this.root.querySelector(d);g.addEventListener("mouseenter",()=>this.synth.playUISound("hover")),g.addEventListener("click",()=>{this.synth.playUISound("click"),f()})};t("#btn-deploy",()=>this.callbacks.onDeploy()),t("#btn-resume",()=>this.callbacks.onResume()),t("#btn-restart",()=>this.callbacks.onRestartMatch()),t("#btn-play-again",()=>this.callbacks.onRestartMatch()),t("#btn-fullscreen-title",()=>this.callbacks.onToggleFullscreen?.()),t("#btn-fullscreen-pause",()=>this.callbacks.onToggleFullscreen?.());const e=this.root.querySelector("#set-auto-fs");e.addEventListener("change",()=>{this.settings.update({autoFullscreen:e.checked})});const n=this.root.querySelector("#set-gtao");n.addEventListener("change",()=>{this.settings.update({gtao:n.checked}),this.callbacks.onSettingsChanged()}),t("#btn-open-settings-title",()=>{this.returnToTitleFromSettings=!0,this.showSettings()}),t("#btn-open-settings-pause",()=>{this.returnToTitleFromSettings=!1,this.showSettings()}),t("#btn-close-settings",()=>{this.returnToTitleFromSettings?this.showTitle():this.showPause()});const i=this.root.querySelector("#set-quality");i.addEventListener("change",()=>{this.settings.applyPreset(i.value),this.syncInputsFromSettings(),this.callbacks.onSettingsChanged()});const s=this.root.querySelector("#set-scale");s.addEventListener("input",()=>{this.settings.update({renderScale:parseFloat(s.value)}),this.syncInputsFromSettings(),this.callbacks.onSettingsChanged()});const o=this.root.querySelector("#set-fov");o.addEventListener("input",()=>{this.settings.update({fov:parseFloat(o.value)}),this.syncInputsFromSettings(),this.callbacks.onSettingsChanged()});const a=this.root.querySelector("#set-sens");a.addEventListener("input",()=>{this.settings.update({sensitivity:parseFloat(a.value)}),this.syncInputsFromSettings(),this.callbacks.onSettingsChanged()});const l=this.root.querySelector("#set-taa");l.addEventListener("change",()=>{this.settings.update({taa:l.checked}),this.callbacks.onSettingsChanged()});const c=this.root.querySelector("#set-mb");c.addEventListener("change",()=>{this.settings.update({motionBlur:c.value}),this.callbacks.onSettingsChanged()});const h=this.root.querySelector("#set-master");h.addEventListener("input",()=>{this.settings.update({masterVolume:parseFloat(h.value)}),this.syncInputsFromSettings(),this.callbacks.onSettingsChanged()});const u=this.root.querySelector("#set-touch-hud");u&&u.addEventListener("change",()=>{if(this.callbacks.onToggleTouchControls){const d=this.callbacks.onToggleTouchControls();u.checked=d}})}syncInputsFromSettings(){const t=this.settings.data;this.root.querySelector("#set-quality").value=t.quality,this.root.querySelector("#set-scale").value=String(t.renderScale),this.root.querySelector("#lbl-scale").textContent=`${Math.round(t.renderScale*100)}%`,this.root.querySelector("#set-fov").value=String(t.fov),this.root.querySelector("#lbl-fov").textContent=`${Math.round(t.fov)}°`,this.root.querySelector("#set-sens").value=String(t.sensitivity),this.root.querySelector("#lbl-sens").textContent=t.sensitivity.toFixed(2),this.root.querySelector("#set-taa").checked=t.taa,this.root.querySelector("#set-gtao").checked=t.gtao,this.root.querySelector("#set-auto-fs").checked=t.autoFullscreen,this.root.querySelector("#set-mb").value=t.motionBlur,this.root.querySelector("#set-master").value=String(t.masterVolume),this.root.querySelector("#lbl-master").textContent=`${Math.round(t.masterVolume*100)}%`;const e=this.root.querySelector("#set-touch-hud");e&&this.callbacks.isTouchControlsEnabled&&(e.checked=this.callbacks.isTouchControlsEnabled())}showTitle(){this.root.style.display="flex",this.titlePanel.style.display="block",this.pausePanel.style.display="none",this.settingsPanel.style.display="none",this.endRoundPanel.style.display="none"}showPause(){this.root.style.display="flex",this.titlePanel.style.display="none",this.pausePanel.style.display="block",this.settingsPanel.style.display="none",this.endRoundPanel.style.display="none"}showSettings(){this.syncInputsFromSettings(),this.root.style.display="flex",this.titlePanel.style.display="none",this.pausePanel.style.display="none",this.settingsPanel.style.display="block",this.endRoundPanel.style.display="none"}showEndRound(t,e,n){this.root.style.display="flex",this.titlePanel.style.display="none",this.pausePanel.style.display="none",this.settingsPanel.style.display="none",this.endRoundPanel.style.display="block";const i=this.root.querySelector("#end-headline"),s=this.root.querySelector("#end-summary");i.textContent=t?"MISSION ACCOMPLISHED":"MISSION FAILED",i.style.color=t?"#4ade80":"#f87171",s.textContent=`TF-ALPHA ${e} — ${n} OPFOR`}setFullscreenState(t){this.root.querySelectorAll(".fs-btn").forEach(e=>{e.textContent=t?"EXIT FULLSCREEN":"ENTER FULLSCREEN"})}hideAll(){this.root.style.display="none"}}const Ie={fire:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg>',ads:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 1.5v4.5M12 18v4.5M1.5 12H6M18 12h4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',reload:'<svg viewBox="0 0 24 24"><path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M19.8 3.8v4.6h-4.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',jump:'<svg viewBox="0 0 24 24"><path d="M5 13.5 12 6.5l7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 19.5 12 12.5l7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/></svg>',crouch:'<svg viewBox="0 0 24 24"><circle cx="13" cy="4.6" r="2.2" fill="currentColor"/><path d="M12.5 8.2 9 12.4l4.2 2.1-1.4 5.6M9 12.4l-3.1 3.4M13.2 14.5l4.6.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 21.2h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".6"/></svg>',frag:'<svg viewBox="0 0 24 24"><ellipse cx="11.5" cy="14.5" rx="6" ry="6.6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 7.6V5.4h5v2.2M14 5.4l3.6-1.6M8.5 12.5h6M8.5 16.5h6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',flash:'<svg viewBox="0 0 24 24"><path d="M13.2 2.5 5.5 13.6h5.6l-1.1 7.9 7.7-11.1h-5.6z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',mode:'<svg viewBox="0 0 24 24"><rect x="3" y="9" width="3.4" height="6" rx="1" fill="currentColor"/><rect x="8.4" y="9" width="3.4" height="6" rx="1" fill="currentColor"/><rect x="13.8" y="9" width="3.4" height="6" rx="1" fill="currentColor" opacity=".55"/><path d="M19.6 8.5v7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',inspect:'<svg viewBox="0 0 24 24"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>',pause:'<svg viewBox="0 0 24 24"><rect x="6.5" y="5" width="3.6" height="14" rx="1.2" fill="currentColor"/><rect x="13.9" y="5" width="3.6" height="14" rx="1.2" fill="currentColor"/></svg>',roster:'<svg viewBox="0 0 24 24"><path d="M4 6.5h16M4 12h16M4 17.5h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',fullscreen:'<svg viewBox="0 0 24 24"><path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',leanL:'<svg viewBox="0 0 24 24"><path d="M15 5.5 8.5 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 5v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".5"/></svg>',leanR:'<svg viewBox="0 0 24 24"><path d="M9 5.5 15.5 12 9 18.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 5v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".5"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8.2 10.5V7.8a3.8 3.8 0 0 1 7.6 0v2.7" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>'};class j0{constructor(t,e,n){this.input=e,this.callbacks=n,this.root=document.createElement("div"),this.root.id="touch-controls-root",this.root.innerHTML=`
      <div class="tc-look-zone" id="tc-look-zone"></div>

      <div class="tc-joy-zone" id="tc-joy-zone">
        <div class="tc-joy-base" id="tc-joy-base">
          <div class="tc-joy-lock" id="tc-joy-lock">${Ie.lock}</div>
          <div class="tc-joy-knob" id="tc-joy-knob"></div>
        </div>
      </div>

      <div class="tc-top-bar">
        <button type="button" class="tc-btn tc-util" id="tc-btn-roster" aria-label="Scoreboard">${Ie.roster}</button>
        <button type="button" class="tc-btn tc-util" id="tc-btn-fullscreen" aria-label="Fullscreen">${Ie.fullscreen}</button>
        <button type="button" class="tc-btn tc-util" id="tc-btn-pause" aria-label="Pause">${Ie.pause}</button>
      </div>

      <button type="button" class="tc-btn tc-fire-left" id="tc-btn-fire-left" aria-label="Left fire">${Ie.fire}</button>
      <button type="button" class="tc-btn tc-lean-l" id="tc-btn-lean-left" aria-label="Lean left">${Ie.leanL}</button>
      <button type="button" class="tc-btn tc-lean-r" id="tc-btn-lean-right" aria-label="Lean right">${Ie.leanR}</button>

      <button type="button" class="tc-btn tc-fire" id="tc-btn-fire-right" aria-label="Fire">${Ie.fire}</button>
      <button type="button" class="tc-btn tc-ads" id="tc-btn-ads" aria-label="Aim down sights">${Ie.ads}</button>
      <button type="button" class="tc-btn tc-reload" id="tc-btn-reload" aria-label="Reload">
        ${Ie.reload}
        <svg class="tc-ring" viewBox="0 0 36 36"><circle id="tc-reload-ring" cx="18" cy="18" r="16.5" pathLength="100" /></svg>
      </button>
      <button type="button" class="tc-btn tc-jump" id="tc-btn-jump" aria-label="Jump">${Ie.jump}</button>
      <button type="button" class="tc-btn tc-crouch" id="tc-btn-crouch" aria-label="Crouch">${Ie.crouch}</button>
      <button type="button" class="tc-btn tc-frag" id="tc-btn-frag" aria-label="Frag grenade">${Ie.frag}<span class="tc-badge" id="tc-lbl-frag">1</span></button>
      <button type="button" class="tc-btn tc-flash" id="tc-btn-flash" aria-label="Flashbang">${Ie.flash}<span class="tc-badge" id="tc-lbl-flash">1</span></button>
      <button type="button" class="tc-btn tc-mode" id="tc-btn-mode" aria-label="Fire mode">${Ie.mode}<span class="tc-badge wide" id="tc-lbl-mode">AUTO</span></button>
      <button type="button" class="tc-btn tc-inspect" id="tc-btn-inspect" aria-label="Inspect weapon">${Ie.inspect}</button>
    `,t.appendChild(this.root);const i=s=>this.root.querySelector(s);this.joyZoneEl=i("#tc-joy-zone"),this.joyBaseEl=i("#tc-joy-base"),this.joyKnobEl=i("#tc-joy-knob"),this.joyLockEl=i("#tc-joy-lock"),this.lookZoneEl=i("#tc-look-zone"),this.btnAdsEl=i("#tc-btn-ads"),this.btnCrouchEl=i("#tc-btn-crouch"),this.btnLeanLeftEl=i("#tc-btn-lean-left"),this.btnLeanRightEl=i("#tc-btn-lean-right"),this.btnFragEl=i("#tc-btn-frag"),this.btnFlashEl=i("#tc-btn-flash"),this.btnReloadEl=i("#tc-btn-reload"),this.btnRosterEl=i("#tc-btn-roster"),this.btnFireRightEl=i("#tc-btn-fire-right"),this.btnFireLeftEl=i("#tc-btn-fire-left"),this.lblFragEl=i("#tc-lbl-frag"),this.lblFlashEl=i("#tc-lbl-flash"),this.lblModeEl=i("#tc-lbl-mode"),this.reloadRingEl=i("#tc-reload-ring"),this.updateScale(),window.addEventListener("resize",()=>this.updateScale()),window.visualViewport?.addEventListener("resize",()=>this.updateScale()),this.bindJoystickEvents(),this.bindLookEvents(),this.bindFireButton(this.btnFireRightEl),this.bindFireButton(this.btnFireLeftEl),this.bindActionButtons()}input;callbacks;root;joyZoneEl;joyBaseEl;joyKnobEl;joyLockEl;lookZoneEl;btnAdsEl;btnCrouchEl;btnLeanLeftEl;btnLeanRightEl;btnFragEl;btnFlashEl;btnReloadEl;btnRosterEl;btnFireRightEl;btnFireLeftEl;lblFragEl;lblFlashEl;lblModeEl;reloadRingEl;joyTouchId=null;joyOriginX=0;joyOriginY=0;joyRadius=52;sprintLocked=!1;lockArmed=!1;lookTouchId=null;lookLastX=0;lookLastY=0;fireTouchIds=new Map;fireLast=new Map;visible=!1;lastLabels=new Map;updateScale(){const t=Math.min(window.innerWidth,window.innerHeight),e=Math.max(.82,Math.min(1.4,t/400));this.root.style.setProperty("--tc-s",e.toFixed(3)),this.joyRadius=52*e}setVisible(t){const e=t&&this.input.touchModeEnabled;this.visible=e,this.root.style.display=e?"block":"none",document.body.classList.toggle("tc-active",e),e||this.resetAllTouches()}resetAllTouches(){this.joyTouchId=null,this.lookTouchId=null,this.fireTouchIds.clear(),this.sprintLocked=!1,this.lockArmed=!1,this.resetJoystickVisual(),this.btnFireRightEl.classList.remove("pressed"),this.btnFireLeftEl.classList.remove("pressed"),this.input.setTouchMove(0,0,!1),this.input.injectMouseUp(0)}resetJoystickVisual(){this.joyBaseEl.style.transform="",this.joyKnobEl.style.transform="translate(-50%, -50%)",this.joyBaseEl.classList.remove("active","sprinting","lock-armed"),this.joyBaseEl.classList.toggle("locked",this.sprintLocked),this.sprintLocked&&(this.joyKnobEl.style.transform=`translate(-50%, calc(-50% - ${this.joyRadius.toFixed(1)}px))`)}cancelSprintLock(){this.sprintLocked&&(this.sprintLocked=!1,this.input.setTouchMove(0,0,!1),this.resetJoystickVisual())}findTouch(t,e){if(e===null)return null;for(let n=0;n<t.length;n++)if(t[n].identifier===e)return t[n];return null}bindJoystickEvents(){const t=(n,i)=>{const s=this.joyRadius,o=n-this.joyOriginX,a=i-this.joyOriginY,l=Math.hypot(o,a),c=Math.min(l,s),h=Math.atan2(a,o),u=Math.cos(h)*c,d=Math.sin(h)*c;if(this.joyKnobEl.style.transform=`translate(calc(-50% + ${u.toFixed(1)}px), calc(-50% + ${d.toFixed(1)}px))`,c/s<.12){this.input.setTouchMove(0,0,!1),this.joyBaseEl.classList.remove("sprinting","lock-armed"),this.lockArmed=!1;return}const g=u/s,v=-d/s,p=l>s*.92&&v>.6;this.lockArmed=a<-s*1.55&&Math.abs(o)<s*.9,this.joyBaseEl.classList.toggle("sprinting",p),this.joyBaseEl.classList.toggle("lock-armed",this.lockArmed),this.input.setTouchMove(g,v,p)};this.joyZoneEl.addEventListener("touchstart",n=>{if(n.preventDefault(),this.joyTouchId!==null)return;const i=n.changedTouches[0];if(!i)return;this.joyTouchId=i.identifier,this.sprintLocked=!1,this.joyBaseEl.classList.remove("locked");const s=this.joyZoneEl.getBoundingClientRect(),o=this.joyBaseEl.getBoundingClientRect(),a=o.left+o.width*.5,l=o.top+o.height*.5,c=o.width*.5,h=Math.max(s.left+c,Math.min(s.right-c,i.clientX)),u=Math.max(s.top+c*2.2,Math.min(s.bottom-c,i.clientY));this.joyOriginX=h,this.joyOriginY=u,this.joyBaseEl.style.transform=`translate(${(h-a).toFixed(1)}px, ${(u-l).toFixed(1)}px)`,this.joyBaseEl.classList.add("active"),t(i.clientX,i.clientY)},{passive:!1}),this.joyZoneEl.addEventListener("touchmove",n=>{n.preventDefault();const i=this.findTouch(n.changedTouches,this.joyTouchId);i&&t(i.clientX,i.clientY)},{passive:!1});const e=n=>{this.findTouch(n.changedTouches,this.joyTouchId)&&(this.joyTouchId=null,this.lockArmed?(this.sprintLocked=!0,this.input.setTouchMove(0,1,!0)):this.input.setTouchMove(0,0,!1),this.lockArmed=!1,this.resetJoystickVisual())};this.joyZoneEl.addEventListener("touchend",e,{passive:!1}),this.joyZoneEl.addEventListener("touchcancel",e,{passive:!1})}bindLookEvents(){this.lookZoneEl.addEventListener("touchstart",n=>{if(n.preventDefault(),this.lookTouchId!==null)return;const i=n.changedTouches[0];i&&(this.lookTouchId=i.identifier,this.lookLastX=i.clientX,this.lookLastY=i.clientY)},{passive:!1}),this.lookZoneEl.addEventListener("touchmove",n=>{n.preventDefault();const i=this.findTouch(n.changedTouches,this.lookTouchId);i&&(this.input.injectLookDelta((i.clientX-this.lookLastX)*2.15,(i.clientY-this.lookLastY)*2.15),this.lookLastX=i.clientX,this.lookLastY=i.clientY)},{passive:!1});const e=n=>{this.findTouch(n.changedTouches,this.lookTouchId)&&(this.lookTouchId=null)};this.lookZoneEl.addEventListener("touchend",e,{passive:!1}),this.lookZoneEl.addEventListener("touchcancel",e,{passive:!1})}bindFireButton(t){t.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation();const s=i.changedTouches[0];!s||this.fireTouchIds.has(t)||(this.cancelSprintLock(),this.fireTouchIds.set(t,s.identifier),this.fireLast.set(t,{x:s.clientX,y:s.clientY}),t.classList.add("pressed"),this.input.injectMouseDown(0))},{passive:!1}),t.addEventListener("touchmove",i=>{i.preventDefault(),i.stopPropagation();const s=this.findTouch(i.changedTouches,this.fireTouchIds.get(t)??null),o=this.fireLast.get(t);!s||!o||(this.input.injectLookDelta((s.clientX-o.x)*1.95,(s.clientY-o.y)*1.95),o.x=s.clientX,o.y=s.clientY)},{passive:!1});const n=i=>{i.preventDefault(),this.findTouch(i.changedTouches,this.fireTouchIds.get(t)??null)&&(this.fireTouchIds.delete(t),t.classList.remove("pressed"),this.fireTouchIds.size===0&&this.input.injectMouseUp(0))};t.addEventListener("touchend",n,{passive:!1}),t.addEventListener("touchcancel",n,{passive:!1}),t.addEventListener("mousedown",i=>{i.stopPropagation(),t.classList.add("pressed"),this.input.injectMouseDown(0)}),t.addEventListener("mouseup",i=>{i.stopPropagation(),t.classList.remove("pressed"),this.input.injectMouseUp(0)})}bindTapButton(t,e){let n=!1;t.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),n=!0,t.classList.add("pressed"),e()},{passive:!1});const i=()=>t.classList.remove("pressed");t.addEventListener("touchend",i,{passive:!0}),t.addEventListener("touchcancel",i,{passive:!0}),t.addEventListener("click",s=>{if(s.stopPropagation(),n){n=!1;return}e()})}bindActionButtons(){const t=e=>this.root.querySelector(e);this.bindTapButton(this.btnAdsEl,()=>{this.cancelSprintLock(),this.input.touchAdsToggled=!this.input.touchAdsToggled}),this.bindTapButton(this.btnReloadEl,()=>this.input.injectKeyPress("KeyR")),this.bindTapButton(t("#tc-btn-jump"),()=>this.input.injectKeyPress("Space")),this.bindTapButton(this.btnCrouchEl,()=>{this.cancelSprintLock(),this.input.touchCrouchToggled=!this.input.touchCrouchToggled}),this.bindTapButton(this.btnLeanLeftEl,()=>{this.input.touchLeanState=this.input.touchLeanState===-1?0:-1}),this.bindTapButton(this.btnLeanRightEl,()=>{this.input.touchLeanState=this.input.touchLeanState===1?0:1}),this.bindTapButton(this.btnFragEl,()=>this.input.injectKeyPress("KeyG")),this.bindTapButton(this.btnFlashEl,()=>this.input.injectKeyPress("KeyQ")),this.bindTapButton(t("#tc-btn-mode"),()=>this.input.injectKeyPress("KeyB")),this.bindTapButton(t("#tc-btn-inspect"),()=>this.input.injectKeyPress("KeyF")),this.bindTapButton(this.btnRosterEl,()=>{this.input.touchScoreboardOpen=!this.input.touchScoreboardOpen}),this.bindTapButton(t("#tc-btn-pause"),()=>this.callbacks.onPauseRequested()),this.bindTapButton(t("#tc-btn-fullscreen"),()=>this.callbacks.onToggleFullscreen())}setLabel(t,e){this.lastLabels.get(t)!==e&&(this.lastLabels.set(t,e),t.textContent=e)}update(t){if(!this.visible)return;const e=t.weapon;if(this.sprintLocked&&(this.input.touchAdsToggled||this.input.touchCrouchToggled||!t.isAlive)&&this.cancelSprintLock(),this.btnAdsEl.classList.toggle("on",this.input.touchAdsToggled),this.btnCrouchEl.classList.toggle("on",t.controller.isCrouching),this.btnLeanLeftEl.classList.toggle("on",this.input.touchLeanState===-1),this.btnLeanRightEl.classList.toggle("on",this.input.touchLeanState===1),this.btnRosterEl.classList.toggle("on",this.input.touchScoreboardOpen),this.btnReloadEl.classList.toggle("alert",e.magAmmo<=8&&!e.isReloading),this.btnReloadEl.classList.toggle("reloading",e.isReloading),e.isReloading){const n=Math.max(0,Math.min(1,e.reloadTimer/Math.max(.01,e.reloadDuration)));this.reloadRingEl.style.strokeDashoffset=String(Math.round((1-n)*100))}this.setLabel(this.lblModeEl,e.fireMode),this.setLabel(this.lblFragEl,String(e.explosiveCount)),this.setLabel(this.lblFlashEl,String(e.tacticalCount)),this.btnFragEl.classList.toggle("depleted",e.explosiveCount<=0),this.btnFlashEl.classList.toggle("depleted",e.tacticalCount<=0)}}class Z0{active=!1;sleeping=!1;age=0;maxLifetime=8;nodes=[];constraints=[];coneLimits=[];candidateTris=[];_closest=new S;_diff=new S;_dir1=new S;_dir2=new S;constructor(){const t=[.2,.22,.14,.1,.09,.1,.09,.11,.1,.11,.1],e=[14,16,5,3,1.5,3,1.5,5,2.5,5,2.5];for(let i=0;i<11;i++)this.nodes.push({pos:new S,prevPos:new S,renderPos:new S,vel:new S,radius:t[i],invMass:1/e[i]});const n=[[0,1,.44,1e-4],[1,2,.3,1e-4],[1,3,.34,2e-4],[3,4,.28,2e-4],[1,5,.34,2e-4],[5,6,.28,2e-4],[0,7,.44,2e-4],[7,8,.42,2e-4],[0,9,.44,2e-4],[9,10,.42,2e-4],[0,2,.7,.002],[3,5,.46,.004],[7,9,.3,.004],[1,7,.78,.005],[1,9,.78,.005]];for(const[i,s,o,a]of n)this.constraints.push({a:i,b:s,restLength:o,compliance:a});this.coneLimits=[{tip:2,pivot:1,refParent:0,minDot:.35},{tip:8,pivot:7,refParent:0,minDot:-.2},{tip:10,pivot:9,refParent:0,minDot:-.2}]}activate(t,e,n,i,s){this.active=!0,this.sleeping=!1,this.age=0;const o=Math.cos(e),a=Math.sin(e),l=[[0,.92,0],[0,1.36,0],[0,1.66,0],[-.28,1.24,.1],[-.22,1.15,.34],[.28,1.24,.1],[.18,1.18,.28],[-.14,.48,0],[-.14,.08,0],[.14,.48,0],[.14,.08,0]];let c=1,h=1/0;for(let u=0;u<11;u++){const[d,f,g]=l[u],v=t.x+d*o+g*a,p=t.y+f,m=t.z-d*a+g*o,y=this.nodes[u];y.pos.set(v,p,m),y.prevPos.set(v,p,m),y.renderPos.set(v,p,m),y.vel.copy(n);const _=y.pos.distanceToSquared(i);_<h&&(h=_,c=u)}this.nodes[c].vel.addScaledVector(s,this.nodes[c].invMass),this.nodes[1].vel.addScaledVector(s,this.nodes[1].invMass*.55),this.nodes[0].vel.addScaledVector(s,this.nodes[0].invMass*.35)}step(t,e){if(!this.active||this.sleeping)return;if(this.age+=t,this.age>3.6){this.sleeping=!0;return}for(let o=0;o<this.nodes.length;o++){const a=this.nodes[o];a.prevPos.copy(a.pos),a.vel.y-=18.5*t,a.vel.multiplyScalar(Math.max(0,1-1.8*t)),a.pos.addScaledVector(a.vel,t)}const n=1/(t*t);for(let o=0;o<5;o++){for(let a=0;a<this.constraints.length;a++){const l=this.constraints[a],c=this.nodes[l.a],h=this.nodes[l.b];this._diff.subVectors(h.pos,c.pos);const u=this._diff.length();if(u<1e-6)continue;const d=u-l.restLength,f=c.invMass+h.invMass,g=-d/(f+l.compliance*n);this._diff.multiplyScalar(g/u),c.pos.addScaledVector(this._diff,-c.invMass),h.pos.addScaledVector(this._diff,h.invMass)}for(let a=0;a<this.coneLimits.length;a++){const l=this.coneLimits[a],c=this.nodes[l.tip],h=this.nodes[l.pivot],u=this.nodes[l.refParent];this._dir1.subVectors(h.pos,u.pos).normalize(),this._dir2.subVectors(c.pos,h.pos);const d=this._dir2.length();if(d<1e-5)continue;this._dir2.multiplyScalar(1/d),this._dir1.dot(this._dir2)<l.minDot&&(this._dir2.lerp(this._dir1,.35).normalize(),c.pos.copy(h.pos).addScaledVector(this._dir2,d))}for(let a=0;a<this.nodes.length;a++){const l=this.nodes[a],c=l.radius;e.overlapAABB(l.pos.x-c-.04,l.pos.y-c-.04,l.pos.z-c-.04,l.pos.x+c+.04,l.pos.y+c+.04,l.pos.z+c+.04,this.candidateTris);for(let h=0;h<this.candidateTris.length;h++){const u=this.candidateTris[h];e.closestPointOnTriangle(l.pos,u,this._closest),this._diff.subVectors(l.pos,this._closest);const d=this._diff.lengthSq();if(d<c*c&&d>1e-10){const f=Math.sqrt(d);l.pos.addScaledVector(this._diff,(c-f)/f),l.pos.x=Kt.lerp(l.pos.x,l.prevPos.x,.25),l.pos.z=Kt.lerp(l.pos.z,l.prevPos.z,.25)}}l.pos.y<c&&(l.pos.y=c,l.pos.x=Kt.lerp(l.pos.x,l.prevPos.x,.3),l.pos.z=Kt.lerp(l.pos.z,l.prevPos.z,.3))}}let i=0;const s=1/t;for(let o=0;o<this.nodes.length;o++){const a=this.nodes[o];a.vel.subVectors(a.pos,a.prevPos).multiplyScalar(s);const l=a.vel.lengthSq();l>i&&(i=l)}i<.015&&this.age>.6&&(this.sleeping=!0)}updateRenderPositions(t){for(let e=0;e<this.nodes.length;e++){const n=this.nodes[e];this.sleeping?n.renderPos.copy(n.pos):n.renderPos.lerpVectors(n.prevPos,n.pos,t)}}}class _l{constructor(t,e,n,i,s,o,a=0){this.rng=o,this.numericId=t,this.id=`bot_${n}_${t}`,this.name=e,this.team=n,this.controller=new fc(i),this.yaw=n==="alpha"?0:Math.PI,this.buildTacticalCharacterRig(a),pc(this.rootGroup,[this.muzzleFlashMesh]),this.rootGroup.userData.shadowNearOnly=!0,s.add(this.rootGroup)}rng;id;numericId;name;team;controller;ragdoll=new Z0;rootGroup=new ee;pelvisGroup=new ee;torsoGroup=new ee;headGroup=new ee;leftLegGroup=new ee;leftShinGroup=new ee;rightLegGroup=new ee;rightShinGroup=new ee;rightArmGroup=new ee;leftArmGroup=new ee;rifleGroup=new ee;muzzleFlashMesh;health=100;maxHealth=100;isAlive=!0;respawnTimer=0;kills=0;deaths=0;state="PATROL";yaw=0;pitch=0;leanAngle=0;stridePhase=0;hitFlinch=0;muzzleFlashTimer=0;currentTarget=null;lastKnownTargetPos=new S;hasLineOfSight=!1;detectionProgress=0;timeSinceSawTarget=99;lastFiredTimestamp=-99;path=[];pathIndex=0;repathTimer=0;stateTimer=0;assignedCover=null;magAmmo=30;reloadTimer=0;burstRemaining=0;fireCooldown=0;footstepAccum=0;_eyePos=new S;_targetEye=new S;_toTarget=new S;_aimDir=new S;_muzzleWorld=new S;_rayOrigin=new S;_down=new S(0,-1,0);_moveGoal=new S;_flankGoal=new S;onEliminated;buildTacticalCharacterRig(t){const e=[7234642,5659726,6446422,7891798],n=[4012595,3488050,4537908,3027254],i=[4867645,3883063,5393216,3553597],s=new ie({color:e[t%e.length],roughness:.86,metalness:.04}),o=new ie({color:n[t%n.length],roughness:.78,metalness:.12}),a=new ie({color:i[t%i.length],roughness:.62,metalness:.22}),l=new ie({color:2499618,roughness:.72,metalness:.08}),c=new ie({color:2106152,roughness:.38,metalness:.82}),h=new ie({color:this.team==="alpha"?2984928:14238e3,roughness:.65,metalness:.05});this.pelvisGroup.position.set(0,.9,0);const u=new X(new pt(.34,.18,.24),s);u.castShadow=!0,u.receiveShadow=!0,this.pelvisGroup.add(u),this.rootGroup.add(this.pelvisGroup),this.torsoGroup.position.set(0,.1,0);const d=new X(new pt(.38,.48,.26),s);d.position.set(0,.24,0),d.castShadow=!0,d.receiveShadow=!0,this.torsoGroup.add(d);const f=new X(new pt(.4,.38,.3),o);f.position.set(0,.24,0),f.castShadow=!0,this.torsoGroup.add(f);for(let I=-1;I<=1;I++){const N=new X(new pt(.085,.15,.05),o);N.position.set(I*.1,.16,-.17),this.torsoGroup.add(N)}const g=new X(new pt(.28,.32,.12),o);g.position.set(0,.25,.19),g.castShadow=!0,this.torsoGroup.add(g),this.pelvisGroup.add(this.torsoGroup),this.headGroup.position.set(0,.52,0);const v=new X(new pt(.21,.24,.22),l);v.position.set(0,.12,0),v.castShadow=!0,this.headGroup.add(v);const p=new X(new dn(.145,12,10,0,Math.PI*2,0,Math.PI*.62),a);p.position.set(0,.15,0),p.castShadow=!0,this.headGroup.add(p);const m=new X(new pt(.21,.065,.06),c);m.position.set(0,.14,-.105),this.headGroup.add(m),this.torsoGroup.add(this.headGroup);const y=(I,N,V)=>{N.position.set(I*.115,0,0);const B=new X(new pt(.15,.44,.16),s);B.position.set(0,-.22,0),B.castShadow=!0,N.add(B);const G=new X(new pt(.16,.1,.05),l);G.position.set(0,-.42,-.08),N.add(G),V.position.set(0,-.44,0);const K=new X(new pt(.13,.4,.14),s);K.position.set(0,-.2,0),K.castShadow=!0,V.add(K);const k=new X(new pt(.14,.11,.24),l);k.position.set(0,-.41,-.04),k.castShadow=!0,V.add(k),N.add(V),this.pelvisGroup.add(N)};y(-1,this.leftLegGroup,this.leftShinGroup),y(1,this.rightLegGroup,this.rightShinGroup),this.rightArmGroup.position.set(.23,.4,0);const _=new X(new pt(.12,.3,.12),s);_.position.set(0,-.12,-.06),_.rotation.x=.85,_.castShadow=!0,this.rightArmGroup.add(_);const x=new X(new pt(.13,.075,.13),h);x.position.set(0,-.08,-.04),x.rotation.x=.85,this.rightArmGroup.add(x);const w=new X(new pt(.1,.28,.1),s);w.position.set(-.04,-.18,-.26),w.rotation.x=1.45,this.rightArmGroup.add(w);const T=new X(new pt(.05,.11,.68),c);T.position.set(-.08,-.16,-.38),T.castShadow=!0,this.rifleGroup.add(T);const R=new X(new pt(.036,.16,.07),o);R.position.set(-.08,-.26,-.36),R.rotation.x=-.18,this.rifleGroup.add(R);const A=new on({color:16755256,transparent:!0,opacity:.9,blending:Mi});this.muzzleFlashMesh=new X(new dn(.09,6,6),A),this.muzzleFlashMesh.position.set(-.08,-.14,-.76),this.muzzleFlashMesh.visible=!1,this.rifleGroup.add(this.muzzleFlashMesh),this.rightArmGroup.add(this.rifleGroup),this.torsoGroup.add(this.rightArmGroup),this.leftArmGroup.position.set(-.23,.4,0);const M=new X(new pt(.12,.32,.12),s);M.position.set(.04,-.12,-.12),M.rotation.x=1.15,M.rotation.z=-.28,M.castShadow=!0,this.leftArmGroup.add(M);const E=new X(new pt(.13,.075,.13),h);E.position.set(.02,-.08,-.07),E.rotation.x=1.15,this.leftArmGroup.add(E);const D=new X(new pt(.1,.3,.1),s);D.position.set(.12,-.16,-.36),D.rotation.x=1.48,D.rotation.y=-.25,this.leftArmGroup.add(D),this.torsoGroup.add(this.leftArmGroup)}getPosition(){return this.controller.position}getHeight(){return this.controller.currentHeight}spawnAt(t,e){this.controller.teleport(t),this.yaw=e,this.pitch=0,this.health=100,this.isAlive=!0,this.ragdoll.active=!1,this.state="PATROL",this.magAmmo=30,this.reloadTimer=0,this.currentTarget=null,this.hasLineOfSight=!1,this.detectionProgress=0,this.path=[],this.assignedCover&&(this.assignedCover.occupiedBy=-1,this.assignedCover=null),this.pelvisGroup.position.set(0,.9,0),this.pelvisGroup.rotation.set(0,0,0),this.torsoGroup.rotation.set(0,0,0),this.headGroup.rotation.set(0,0,0)}applyDamage(t,e,n,i,s,o,a,l){return this.isAlive?(this.health=Math.max(0,this.health-t),this.hitFlinch=1,this.lastKnownTargetPos.copy(l),this.timeSinceSawTarget=0,(this.state==="PATROL"||this.state==="INVESTIGATE")&&(this.state="TAKE_COVER",this.stateTimer=0),this.health<=0?(this.isAlive=!1,this.deaths++,this.respawnTimer=4.2,this.muzzleFlashMesh.visible=!1,this.assignedCover&&(this.assignedCover.occupiedBy=-1,this.assignedCover=null),this.ragdoll.activate(this.controller.position,this.yaw,this.controller.velocity,n,i),this.onEliminated&&this.onEliminated(this,s,o,a,e),{killed:!0}):{killed:!1}):{killed:!1}}shareTeamTargetInfo(t){!this.isAlive||this.hasLineOfSight||this.state==="PATROL"&&(this.lastKnownTargetPos.copy(t),this.state="INVESTIGATE",this.repathTimer=0)}stepFixed(t,e,n,i,s,o,a,l,c,h,u){if(!this.isAlive){this.respawnTimer-=t,this.ragdoll.step(t,n);return}this.hitFlinch=Math.max(0,this.hitFlinch-t*5),this.muzzleFlashTimer>0&&(this.muzzleFlashTimer-=t,this.muzzleFlashTimer<=0&&(this.muzzleFlashMesh.visible=!1)),this.fireCooldown>0&&(this.fireCooldown-=t),this.updatePerception(t,e,n,l,c,u),this.stateTimer+=t,this.repathTimer-=t;let d=!1,f=!1,g=0,v=null;switch(this.magAmmo<=0&&this.state!=="RELOAD"&&(this.state="RELOAD",this.reloadTimer=2.1),this.state){case"RELOAD":{d=!0,this.reloadTimer-=t,this.reloadTimer<=0&&(this.magAmmo=30,this.state=this.hasLineOfSight?"ENGAGE":"PATROL");break}case"PATROL":{if(this.hasLineOfSight&&this.currentTarget){this.state="ENGAGE",this.stateTimer=0;break}if(this.path.length===0||this.pathIndex>=this.path.length||this.repathTimer<=0){const x=this.rng.pick(i.patrolWaypoints);this.path=i.findPath(this.controller.position,x),this.pathIndex=0,this.repathTimer=this.rng.range(4.5,7.5)}v=this.getCurrentPathTarget();break}case"INVESTIGATE":{if(this.hasLineOfSight&&this.currentTarget){this.state="ENGAGE",this.stateTimer=0;break}(this.repathTimer<=0||this.path.length===0)&&(this.path=i.findPath(this.controller.position,this.lastKnownTargetPos),this.pathIndex=0,this.repathTimer=2.5),v=this.getCurrentPathTarget(),(this.controller.position.distanceTo(this.lastKnownTargetPos)<2.2||this.stateTimer>8)&&(this.state="PATROL",this.stateTimer=0);break}case"ENGAGE":{if(!this.hasLineOfSight){this.timeSinceSawTarget>2.2&&(this.state="FLANK",this.stateTimer=0,this.repathTimer=0);break}if(this.health<55||this.stateTimer>2.6){const R=i.findBestCover(this.numericId,this.controller.position,this.lastKnownTargetPos);if(R){this.assignedCover&&(this.assignedCover.occupiedBy=-1),this.assignedCover=R,R.occupiedBy=this.numericId,this.state="TAKE_COVER",this.stateTimer=0,this.path=i.findPath(this.controller.position,R.position),this.pathIndex=0;break}}const x=Math.sin(e*2.1+this.numericId)>0?1:-1,w=Math.cos(this.yaw)*x,T=-Math.sin(this.yaw)*x;v=this._moveGoal.set(this.controller.position.x+w*2,this.controller.position.y,this.controller.position.z+T*2);break}case"TAKE_COVER":{if(f=!0,!this.assignedCover){this.state="ENGAGE";break}v=this.getCurrentPathTarget()??this.assignedCover.position,this.controller.position.distanceTo(this.assignedCover.position)<1.15?(this.state="PEEK_FIRE",this.stateTimer=0):this.stateTimer>4.5&&(this.state="ENGAGE",this.stateTimer=0);break}case"PEEK_FIRE":{this.stateTimer%2.9<1.05?d=!0:(d=!1,g=(this.numericId%2===0?1:-1)*.22),(this.stateTimer>5.8||!this.hasLineOfSight&&this.timeSinceSawTarget>3.5)&&(this.state="FLANK",this.stateTimer=0,this.repathTimer=0);break}case"FLANK":{if(this.hasLineOfSight){this.state="ENGAGE",this.stateTimer=0;break}if(this.repathTimer<=0||this.path.length===0){const x=Kt.clamp(this.lastKnownTargetPos.x+(this.numericId%2===0?-12:12),-30,30),w=this._flankGoal.set(x,.05,this.lastKnownTargetPos.z);this.path=i.findPath(this.controller.position,w),this.pathIndex=0,this.repathTimer=3}v=this.getCurrentPathTarget(),this.stateTimer>6.5&&(this.state="PATROL",this.stateTimer=0);break}}let p=0,m=0;const y=d?2.6:f?5.6:4.2;if(v){const x=v.x-this.controller.position.x,w=v.z-this.controller.position.z,T=Math.hypot(x,w);T>.25&&(p=x/T*y,m=w/T*y)}this.controller.step(t,n,p,m,!1,d),this.leanAngle+=(g-this.leanAngle)*Math.min(1,t*10);const _=Math.hypot(this.controller.velocity.x,this.controller.velocity.z);if(this.controller.isGrounded&&_>.5&&(this.footstepAccum+=_*t,this.footstepAccum>=1.85&&(this.footstepAccum=0,l.playFootstepAt(this.controller.position,this.controller.groundMaterial,f,this.team,e,!1))),this.hasLineOfSight&&this.currentTarget&&this.state!=="RELOAD"){const x=this.currentTarget.getPosition();this._targetEye.set(x.x,x.y+this.currentTarget.getHeight()*.72,x.z),this.controller.getEyePosition(1,this._eyePos),this._toTarget.subVectors(this._targetEye,this._eyePos);const w=Math.hypot(this._toTarget.x,this._toTarget.z),T=Math.atan2(-this._toTarget.x,-this._toTarget.z),R=Math.atan2(this._toTarget.y,Math.max(.1,w)),A=u==="veteran"?8.5:u==="regular"?6.2:4.2;this.yaw=this.lerpAngle(this.yaw,T,Math.min(1,t*A)),this.pitch+=(R-this.pitch)*Math.min(1,t*A),this.detectionProgress>=1&&!d&&(this.burstRemaining>0&&this.fireCooldown<=0&&this.magAmmo>0?(this.executeBotShot(e,s,o,a,l,c,h,u),this.burstRemaining--,this.fireCooldown=this.burstRemaining>0?.095:this.rng.range(.42,.78)):this.burstRemaining<=0&&this.fireCooldown<=0&&(this.burstRemaining=this.rng.int(2,4)))}else if(_>.4){const x=Math.atan2(-this.controller.velocity.x,-this.controller.velocity.z);this.yaw=this.lerpAngle(this.yaw,x,Math.min(1,t*7)),this.pitch*=Math.max(0,1-t*5)}this.stridePhase+=_*t*2.9}updatePerception(t,e,n,i,s,o){this.controller.getEyePosition(1,this._eyePos);const a=-Math.sin(this.yaw),l=-Math.cos(this.yaw);let c=null,h=85;for(let u=0;u<s.length;u++){const d=s[u];if(!d.isAlive||d.team===this.team)continue;const f=d.getPosition(),g=f.x-this._eyePos.x,v=f.z-this._eyePos.z,p=Math.hypot(g,v);if(p>h||(g*a+v*l)/Math.max(.01,p)<-.15&&p>4.5)continue;this._targetEye.set(f.x,f.y+d.getHeight()*.78,f.z),n.segmentCast(this._eyePos,this._targetEye).hit||(h=p,c=d)}if(c){this.currentTarget=c,this.hasLineOfSight=!0,this.lastKnownTargetPos.copy(c.getPosition()),this.timeSinceSawTarget=0;const u=o==="veteran"?3.4:o==="regular"?2.4:1.65,d=Kt.clamp(1.25-h/65,.45,1.35);this.detectionProgress=Math.min(1,this.detectionProgress+t*u*d)}else{this.hasLineOfSight=!1,this.timeSinceSawTarget+=t,this.detectionProgress=Math.max(0,this.detectionProgress-t*1.4);for(let u=i.recentSoundEvents.length-1;u>=0;u--){const d=i.recentSoundEvents[u];if(d.team===this.team||d.team==="neutral"||e-d.timestamp>.5)continue;if(this.controller.position.distanceTo(d.position)<d.loudness){const g=this.rng.signed()*1.8,v=this.rng.signed()*1.8;this.lastKnownTargetPos.set(d.position.x+g,d.position.y,d.position.z+v),this.state==="PATROL"&&(this.state="INVESTIGATE",this.stateTimer=0,this.repathTimer=0);break}}}}getCurrentPathTarget(){if(this.path.length===0||this.pathIndex>=this.path.length)return null;const t=this.path[this.pathIndex];return Math.hypot(t.x-this.controller.position.x,t.z-this.controller.position.z)<1.1&&this.pathIndex<this.path.length-1&&this.pathIndex++,this.path[this.pathIndex]}executeBotShot(t,e,n,i,s,o,a,l){this.magAmmo--,this.lastFiredTimestamp=t,this.muzzleFlashTimer=.045,this.muzzleFlashMesh.visible=!0,this.controller.getEyePosition(1,this._eyePos);const c=Math.cos(this.pitch);this._aimDir.set(-Math.sin(this.yaw)*c,Math.sin(this.pitch),-Math.cos(this.yaw)*c).normalize(),this.muzzleFlashMesh.getWorldPosition(this._muzzleWorld),s.playGunshotAt(this._muzzleWorld,this.team,t,!1);const h=l==="veteran"?.032:l==="regular"?.048:.068;n.fireBallisticTrace(this._eyePos,this._aimDir,this._muzzleWorld,h,16,this.id,this.name,this.team,o,a,t).killed&&this.kills++,this._muzzleWorld.distanceToSquared(a)<400&&e.spawnCasing(this._muzzleWorld,new S(this.rng.signed()*2,2,this.rng.signed()*2),new S(15,20,12))}lerpAngle(t,e,n){let i=(e-t+Math.PI)%(Math.PI*2)-Math.PI;return i<-Math.PI&&(i+=Math.PI*2),t+i*n}syncVisualRig(t,e){if(!this.isAlive&&this.ragdoll.active){this.ragdoll.updateRenderPositions(t);const p=this.ragdoll.nodes[0].renderPos,m=this.ragdoll.nodes[1].renderPos,y=this.ragdoll.nodes[7].renderPos,_=this.ragdoll.nodes[9].renderPos;this.rootGroup.position.set(p.x,p.y-.22,p.z);const x=m.clone().sub(p).normalize();this.pelvisGroup.position.set(0,.22,0),this.pelvisGroup.rotation.set(Math.atan2(x.z,Math.max(.1,x.y))+1.25,this.yaw,Math.atan2(-x.x,Math.max(.1,x.y))),this.leftLegGroup.rotation.x=(y.y-p.y)*1.2,this.rightLegGroup.rotation.x=(_.y-p.y)*1.2;return}const n=this.controller.getInterpolatedPosition(t,this._rayOrigin);this.rootGroup.position.copy(n),this.rootGroup.rotation.set(0,this.yaw,0);const i=Math.hypot(this.controller.velocity.x,this.controller.velocity.z),s=Math.min(1,i/4.2),o=this.controller.isCrouching?-.34:0;let a=0,l=0;if(this.controller.isGrounded&&i<.25){const p=Math.cos(this.yaw),m=Math.sin(this.yaw);this._rayOrigin.set(n.x-.12*p,n.y+.5,n.z+.12*m);const y=e.raycast(this._rayOrigin,this._down,.85);y.hit&&(a=Kt.clamp(y.point.y-n.y,-.18,.22)),this._rayOrigin.set(n.x+.12*p,n.y+.5,n.z-.12*m);const _=e.raycast(this._rayOrigin,this._down,.85);_.hit&&(l=Kt.clamp(_.point.y-n.y,-.18,.22))}const c=Math.min(a,l),h=Math.abs(Math.sin(this.stridePhase))*.045*s;this.pelvisGroup.position.set(0,.9+o+c+h,0),this.pelvisGroup.rotation.set(0,0,0);const u=Math.sin(this.stridePhase)*.68*s,d=Math.sin(this.stridePhase+Math.PI)*.68*s,f=this.controller.isCrouching?.72:0,g=this.controller.isCrouching?-1.15:0;this.leftLegGroup.rotation.x=u+f+a*1.4,this.leftShinGroup.rotation.x=Math.min(0,-Math.abs(u)*.65+g-a*1.8),this.rightLegGroup.rotation.x=d+f+l*1.4,this.rightShinGroup.rotation.x=Math.min(0,-Math.abs(d)*.65+g-l*1.8);const v=this.muzzleFlashTimer>0?.12:0;this.torsoGroup.rotation.x=-this.pitch*.55-this.hitFlinch*.28+s*.12,this.torsoGroup.rotation.z=this.leanAngle+this.hitFlinch*.14,this.torsoGroup.rotation.y=Math.sin(this.stridePhase)*.06*s,this.headGroup.rotation.x=-this.pitch*.45,this.rightArmGroup.rotation.x=-this.pitch*.45-v,this.leftArmGroup.rotation.x=-this.pitch*.45-v}}class $0{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f){this.scene=t,this.bvh=e,this.rigidWorld=n,this.navWorld=i,this.mapGen=s,this.settings=o,this.player=a,this.damageSystem=l,this.effects=c,this.spatialAudio=h,this.hud=u,this.rng=d,this.onMatchEnded=f,this.spawnAllBots(),this.bindCombatCallbacks()}scene;bvh;rigidWorld;navWorld;mapGen;settings;player;damageSystem;effects;spatialAudio;hud;rng;mode="title";alphaScore=0;bravoScore=0;scoreLimit=30;matchTimeRemaining=300;bots=[];allTargets=[];playerStats={name:"VANGUARD-1 (YOU)",team:"alpha",kills:0,deaths:0,assists:0,headshots:0,shotsFired:0,shotsHit:0};botStats=new Map;flythroughAngle=0;simTimeRef=0;onMatchEnded;spawnAllBots(){const t=["CPL. REYES","SGT. KOWALSKI","SPC. HASSAN"],e=["OPFOR-1 // VIPER","OPFOR-2 // DUSK","OPFOR-3 // SCORPION","OPFOR-4 // NOMAD"];this.allTargets=[this.player];for(let n=0;n<3;n++){const i=this.mapGen.alphaSpawns[(n+1)%this.mapGen.alphaSpawns.length],s=new _l(n+1,t[n],"alpha",i,this.scene,this.rng.fork(`alpha_${n}`),n);this.bots.push(s),this.allTargets.push(s),this.botStats.set(s.id,{name:s.name,team:"alpha",kills:0,deaths:0,assists:0,headshots:0,shotsFired:0,shotsHit:0})}for(let n=0;n<4;n++){const i=this.mapGen.bravoSpawns[n%this.mapGen.bravoSpawns.length],s=new _l(n+10,e[n],"bravo",i,this.scene,this.rng.fork(`bravo_${n}`),n+1);this.bots.push(s),this.allTargets.push(s),this.botStats.set(s.id,{name:s.name,team:"bravo",kills:0,deaths:0,assists:0,headshots:0,shotsFired:0,shotsHit:0})}}bindCombatCallbacks(){this.player.onShotOutcome=t=>{if(this.playerStats.shotsFired++,t.hitTarget){this.playerStats.shotsHit++;const e=t.hitZone==="head";this.hud.triggerHitMarker(e,t.killed),this.spatialAudio.synth.playUISound(t.killed?"kill":e?"headshot":"hit")}},this.player.onKilledBy=t=>{this.playerStats.deaths++,this.bravoScore++,this.hud.pushKillFeed(t,"bravo",this.player.name,"alpha",!1,this.simTimeRef),this.bravoScore>=this.scoreLimit&&this.endMatch()};for(const t of this.bots)t.onEliminated=(e,n,i,s,o)=>{const a=o==="head",l=this.botStats.get(e.id);l&&l.deaths++;const c=n==="player"?this.playerStats:this.botStats.get(n);c&&(c.kills++,a&&c.headshots++),s==="alpha"?this.alphaScore++:this.bravoScore++;for(const h of this.bots)h.team===e.team&&h.isAlive&&h.shareTeamTargetInfo(e.controller.position);this.hud.pushKillFeed(i,s,e.name,e.team,a,this.simTimeRef),(this.alphaScore>=this.scoreLimit||this.bravoScore>=this.scoreLimit)&&this.endMatch()}}startNewMatch(){this.alphaScore=0,this.bravoScore=0,this.matchTimeRemaining=300,this.mode="playing",this.playerStats.kills=0,this.playerStats.deaths=0,this.playerStats.assists=0,this.playerStats.headshots=0,this.playerStats.shotsFired=0,this.playerStats.shotsHit=0;for(const n of this.botStats.values())n.kills=0,n.deaths=0,n.assists=0,n.headshots=0,n.shotsFired=0,n.shotsHit=0;this.player.spawnAt(this.mapGen.alphaSpawns[0],Math.PI),this.player.weapon.root.visible=!0;let t=1,e=0;for(const n of this.bots)n.team==="alpha"?n.spawnAt(this.mapGen.alphaSpawns[t++%this.mapGen.alphaSpawns.length],Math.PI):n.spawnAt(this.mapGen.bravoSpawns[e++%this.mapGen.bravoSpawns.length],0)}endMatch(){if(this.mode==="ended")return;this.mode="ended";const t=this.alphaScore>=this.bravoScore;this.onMatchEnded&&this.onMatchEnded(t,this.alphaScore,this.bravoScore)}stepFixed(t,e,n){if(this.simTimeRef=e,this.mode==="title"){this.flythroughAngle+=t*.14,this.player.weapon.root.visible=!1;return}if(this.mode!=="playing")return;if(this.matchTimeRemaining-=t,this.matchTimeRemaining<=0){this.matchTimeRemaining=0,this.endMatch();return}const i=this.player.damageIndicatorAlpha;if(this.player.stepFixed(t,e,n,this.bvh,this.rigidWorld,this.damageSystem,this.effects,this.spatialAudio,this.allTargets,this.scene),this.player.damageIndicatorAlpha>i+.05){const a=this.player.controller.position.clone().addScaledVector(this.player.lastDamageDirection,10);this.hud.triggerDamageIndicator(a)}if(!this.player.isAlive&&this.player.respawnTimer<=0){const a=this.pickSafeSpawn("alpha");this.player.spawnAt(a,Math.PI),n.resetToggles()}const s=this.player.controller.position,o=this.settings.data.botDifficulty;for(const a of this.bots){if(!a.isAlive&&a.respawnTimer<=0){const l=this.pickSafeSpawn(a.team);a.spawnAt(l,a.team==="alpha"?Math.PI:0)}a.stepFixed(t,e,this.bvh,this.navWorld,this.rigidWorld,this.damageSystem,this.effects,this.spatialAudio,this.allTargets,s,o)}}syncVisuals(t,e){if(this.mode==="title"){const n=Math.sin(this.flythroughAngle)*3.8,i=-24+Math.sin(this.flythroughAngle*.7)*6,s=4.2+Math.sin(this.flythroughAngle*1.3)*.8;e.position.set(n,s,i),e.lookAt(0,3,22),e.updateMatrixWorld()}else this.player.syncCameraAndViewmodel(t,e);for(const n of this.bots)n.syncVisualRig(t,this.bvh)}getCurrentZoneCallout(){const t=this.player.controller.position;return t.y>2.4&&t.x>6?"BALCONY OVERLOOK":t.x<-18?"WEST SOUK LANE":t.x>18?"EAST FLANK ALLEY":Math.abs(t.x)>10&&Math.abs(t.x)<=18?"INTERIOR SHOPFRONT":t.z>16?"MONUMENTAL ARCHWAY PLAZA":t.z<-34?"SOUTH ENTRY BOULEVARD":"CENTRAL MARKET BAZAAR"}pickSafeSpawn(t){const e=t==="alpha"?this.mapGen.alphaSpawns:this.mapGen.bravoSpawns;let n=e[0],i=-1;for(const s of e){let o=999999;t==="bravo"&&this.player.isAlive&&(o=Math.min(o,s.distanceToSquared(this.player.controller.position)));for(const a of this.bots)!a.isAlive||a.team===t||(o=Math.min(o,s.distanceToSquared(a.controller.position)));o>i&&(i=o,n=s)}return n}getAllCombatantStats(){const t=[this.playerStats];for(const e of this.botStats.values())t.push(e);return t.sort((e,n)=>n.kills-e.kills)}}class J0{settings;rng;input;scene;camera;renderGraph;bvh;rigidWorld;matLib;propSystem;mapGen;navWorld;synth;spatialAudio;effects;damageSystem;player;hud;menu;touchControls;director;gameLoop;simTime=0;bvhDebugGroup=null;navDebugGroup=null;_forward=new S;_up=new S(0,1,0);constructor(){const t=document.getElementById("app"),e=document.getElementById("game-canvas"),n=new URLSearchParams(window.location.search),i=n.get("seed"),s=i&&parseInt(i,10)||1337420;this.settings=new _0,this.rng=new xe(s),this.input=new y0(e,this.settings),this.scene=new Zs,this.camera=new Ge(this.settings.data.fov,window.innerWidth/window.innerHeight,.08,460),this.renderGraph=new q0(e,this.scene,this.settings),this.matLib=new T0(s),this.bvh=new M0,this.synth=new C0(s),this.settings.isMobile&&(this.synth.lowCostPanning=!0,this.synth.maxVoices=32),this.spatialAudio=new R0(this.synth,this.bvh),this.rigidWorld=new b0(this.scene,this.settings.getQualityParams().maxCasings),this.propSystem=new E0(this.matLib,this.bvh,this.rigidWorld,this.rng.fork("props")),this.mapGen=new A0(this.scene,this.matLib,this.bvh,this.rigidWorld,this.propSystem,s),this.mapGen.build(),this.navWorld=new N0(this.bvh,this.propSystem.coverNodes),this.effects=new D0(this.scene,this.rng.fork("effects"),this.settings.getQualityParams().maxDecals),this.damageSystem=new L0(this.bvh,this.rigidWorld,this.effects,this.spatialAudio,this.rng.fork("damage")),this.rigidWorld.onCollisionSound=(o,a,l,c,h)=>{h?this.spatialAudio.playCasingBounceAt(o,a,c):this.spatialAudio.playImpactAt(o,l,!1,this.simTime)},this.rigidWorld.onThrowableDetonate=(o,a)=>{const l=a==="frag"?7.5:9;if(this.effects.spawnExplosionEffect(o,a),this.rigidWorld.applyExplosionImpulse(o,l,a==="frag"?28:8),this.spatialAudio.playGunshotAt(o,"alpha",this.simTime,!1),a==="frag")for(const c of this.director.allTargets){if(!c.isAlive)continue;const h=c.getPosition().distanceTo(o);if(h<l){const u=Math.round((1-h/l)*125),d=c.getPosition().clone().sub(o).normalize().multiplyScalar(80);c.applyDamage(u,"torso",o,d,this.player.id,this.player.name,this.player.team,o)}}},this.player=new F0(this.mapGen.alphaSpawns[0],this.settings,this.rng.fork("player")),this.renderGraph.viewmodelScene.add(this.player.weapon.root),this.hud=new Y0(t),this.touchControls=new j0(t,this.input,{onPauseRequested:()=>{this.director.mode==="playing"&&(this.director.mode="paused",document.exitPointerLock?.(),this.touchControls.setVisible(!1),this.menu.showPause())},onToggleFullscreen:()=>{this.toggleFullscreen()}}),this.menu=new K0(t,this.settings,this.synth,{onDeploy:()=>this.deployToCombat(),onResume:()=>this.resumeCombat(),onRestartMatch:()=>this.restartMatch(),onSettingsChanged:()=>this.applySettingsUpdate(),onToggleTouchControls:()=>(this.input.setTouchModeEnabled(!this.input.touchModeEnabled),this.input.touchModeEnabled),isTouchControlsEnabled:()=>this.input.touchModeEnabled,onToggleFullscreen:()=>this.toggleFullscreen()}),this.input.onTouchModeChange(o=>{document.body.classList.toggle("touch-mode",o),this.touchControls.setVisible(this.director.mode==="playing"&&o)}),document.body.classList.toggle("touch-mode",this.input.touchModeEnabled),this.director=new $0(this.scene,this.bvh,this.rigidWorld,this.navWorld,this.mapGen,this.settings,this.player,this.damageSystem,this.effects,this.spatialAudio,this.hud,this.rng.fork("director"),(o,a,l)=>{document.exitPointerLock?.(),this.hud.setVisible(!1),this.touchControls.setVisible(!1),this.menu.showEndRound(o,a,l)}),this.bindSystemEvents(),this.exposeDebugHarness(),n.get("autostart")==="1"||n.get("benchmark")==="1"?this.deployToCombat(!1):(this.hud.setVisible(!1),this.touchControls.setVisible(!1),this.menu.showTitle()),this.warmupShaders(),this.gameLoop=new Ve(o=>this.stepFixed(o),(o,a)=>this.renderFrame(o,a)),n.get("manual")==="1"?this.gameLoop.stepDeterministic(1/60,!1):this.gameLoop.start()}warmupShaders(){const t=[],e=i=>{i.traverse(s=>{s.visible||(s.visible=!0,t.push(s))})},n=new X(new dn(.05,6,6),new ie({color:3884848,metalness:.65,roughness:.4}));n.position.set(0,-50,0),this.scene.add(n),e(this.scene),e(this.renderGraph.viewmodelScene);try{this.renderGraph.renderer.compile(this.scene,this.camera),this.renderGraph.renderer.compile(this.renderGraph.viewmodelScene,this.renderGraph.viewmodelCamera),this.renderGraph.renderFrame(this.scene,this.camera,this.player.weapon.root,this.matLib.sharedUniforms,0,1/60,0,0,"none")}catch{}finally{for(const i of t)i.visible=!1;this.scene.remove(n),n.geometry.dispose(),this.renderGraph.prepass.resetHistory()}}handleResize=()=>{this.camera.aspect=window.innerWidth/Math.max(1,window.innerHeight),this.camera.updateProjectionMatrix(),this.renderGraph.resize(window.innerWidth,window.innerHeight),this.renderFrame(1,1/60)};bindSystemEvents(){window.addEventListener("resize",this.handleResize);const t=()=>{this.handleResize(),setTimeout(this.handleResize,120),setTimeout(this.handleResize,400)};window.addEventListener("orientationchange",t);const e=()=>{const n=this.isFullscreen();document.body.classList.toggle("is-fullscreen",n),this.menu.setFullscreenState(n),t()};document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),this.fullscreenSupported()||document.body.classList.add("ios-no-fullscreen"),this.input.onFirstInteraction(()=>{this.synth.ensureContext(this.settings.data.masterVolume)}),this.input.onGesture(()=>{this.synth.unlockFromGesture(this.settings.data.masterVolume)}),document.addEventListener("visibilitychange",()=>{!document.hidden&&this.synth.ctx&&this.synth.ensureContext(this.settings.data.masterVolume)}),this.input.onPointerLockChange(n=>{if(!n&&this.director.mode==="playing"){const i=new URLSearchParams(window.location.search);i.get("autostart")!=="1"&&i.get("benchmark")!=="1"&&(this.director.mode="paused",this.touchControls.setVisible(!1),this.menu.showPause())}})}deployToCombat(t=!0){this.synth.ensureContext(this.settings.data.masterVolume),t&&this.settings.data.autoFullscreen&&this.enterFullscreen(),this.menu.hideAll(),this.hud.setVisible(!0),this.touchControls.setVisible(!0),this.director.startNewMatch(),t&&this.input.requestPointerLock()}resumeCombat(){this.synth.ensureContext(this.settings.data.masterVolume),this.settings.data.autoFullscreen&&this.enterFullscreen(),this.menu.hideAll(),this.hud.setVisible(!0),this.touchControls.setVisible(!0),this.director.mode="playing",this.input.requestPointerLock()}isFullscreen(){const t=document;return!!(document.fullscreenElement||t.webkitFullscreenElement)}fullscreenSupported(){const t=document.documentElement;return!!(t.requestFullscreen||t.webkitRequestFullscreen)}enterFullscreen(){if(this.isFullscreen()||!this.fullscreenSupported())return;const t=document.documentElement,e=()=>{const n=screen.orientation;this.input.touchModeEnabled&&n?.lock&&n.lock("landscape").catch(()=>{})};try{if(t.requestFullscreen)t.requestFullscreen({navigationUI:"hide"}).then(e).catch(()=>{});else if(t.webkitRequestFullscreen){const n=t.webkitRequestFullscreen();n&&typeof n.then=="function"&&n.then(e).catch(()=>{})}}catch{}}exitFullscreen(){const t=document;this.isFullscreen()&&(document.exitFullscreen?document.exitFullscreen().catch(()=>{}):t.webkitExitFullscreen&&t.webkitExitFullscreen())}toggleFullscreen(){this.isFullscreen()?this.exitFullscreen():this.enterFullscreen()}restartMatch(){this.deployToCombat(!0)}applySettingsUpdate(){this.synth.setMasterVolume(this.settings.data.masterVolume),this.renderGraph.applyInternalScale(this.settings.data.renderScale)}stepFixed(t){this.simTime+=t,this.input.wasPausePressed()&&this.director.mode==="playing"&&(this.director.mode="paused",document.exitPointerLock?.(),this.touchControls.setVisible(!1),this.menu.showPause()),this.director.stepFixed(t,this.simTime,this.input),this.rigidWorld.step(t,this.bvh),this.effects.update(t,this.camera),this.propSystem.updateEnvironmentalMotion(this.simTime,t),this.player.getAimDirection(this._forward),this.spatialAudio.updateListener(this.camera.position,this._forward,this._up,t,this.simTime),this.input.endFrame()}renderFrame(t,e){this.director.mode==="playing"&&this.player.applyFrameLook(this.input),this.director.syncVisuals(t,this.camera),this.rigidWorld.syncRenderTransforms(t),this.matLib.sharedUniforms.uTime.value=this.simTime,this.matLib.sharedUniforms.uCloudWindOffset.value.set(this.simTime*.65,this.simTime*.32),this.updateDebugWireframes(this.input.debugView);const n=this.player.health<40?(40-this.player.health)/40:0;if(this.renderGraph.evaluateDynamicScale(this.gameLoop.telemetry.avgFrameTimeMs,this.simTime),this.renderGraph.renderFrame(this.scene,this.camera,this.player.weapon.root,this.matLib.sharedUniforms,this.simTime,e,n,this.player.damageFlash,this.input.debugView),this.director.mode!=="title"){const i=()=>{const s=this.renderGraph.getRenderCallStats(),o=this.gameLoop.telemetry;return`FPS: ${o.fps.toFixed(1)} | AVG: ${o.avgFrameTimeMs.toFixed(2)}ms | P95: ${o.p95FrameTimeMs.toFixed(2)}ms
PHYS: ${o.physicsTimeMs.toFixed(2)}ms | REND: ${o.renderTimeMs.toFixed(2)}ms | SCALE: ${Math.round(s.internalScale*100)}%
CALLS: ${s.calls} | TRIS: ${s.triangles} | VOICES: ${this.synth.activeVoiceCount}
POS: (${this.player.controller.position.x.toFixed(1)}, ${this.player.controller.position.y.toFixed(2)}, ${this.player.controller.position.z.toFixed(1)})`};this.hud.update(e,this.simTime,this.player,this.director.bots,this.mapGen.footprints,this.director.alphaScore,this.director.bravoScore,this.director.matchTimeRemaining,this.director.getCurrentZoneCallout(),this.input.isScoreboardShown(),()=>this.director.getAllCombatantStats(),this.input.debugView==="timings",i),this.touchControls.update(this.player)}}updateDebugWireframes(t){t==="bvh"?(this.bvhDebugGroup||(this.bvhDebugGroup=this.bvh.createDebugMesh(),this.scene.add(this.bvhDebugGroup)),this.bvhDebugGroup.visible=!0):this.bvhDebugGroup&&(this.bvhDebugGroup.visible=!1),t==="nav"?(this.navDebugGroup||(this.navDebugGroup=this.navWorld.createDebugMesh(),this.scene.add(this.navDebugGroup)),this.navDebugGroup.visible=!0):this.navDebugGroup&&(this.navDebugGroup.visible=!1)}exposeDebugHarness(){const t=this;window.__GAME_DEBUG__={game:t,pauseLoop:()=>t.gameLoop.stop(),resumeLoop:()=>t.gameLoop.start(),deploy:()=>t.deployToCombat(!1),teleportToView:e=>{const n=t.mapGen.benchmarkViews[e];return n?(t.director.mode==="title"&&t.deployToCombat(!1),t.player.spawnAt(n.position,n.yaw),t.player.pitch=n.pitch,t.renderGraph.prepass.resetHistory(),t.gameLoop.stepDeterministic(.15,!1),!0):!1},setPlayerPose:(e,n,i,s,o=0)=>{t.director.mode==="title"&&t.deployToCombat(!1),t.player.spawnAt(new S(e,n,i),s),t.player.pitch=o,t.renderGraph.prepass.resetHistory(),t.gameLoop.stepDeterministic(.1,!1)},setAds:e=>{t.input.setVirtualMouseButton(2,e)},setTouchMode:e=>{t.input.setTouchModeEnabled(e),t.touchControls.setVisible(t.director.mode==="playing"&&e)},triggerFire:(e=1)=>{for(let n=0;n<e;n++)if(t.player.fireProgrammaticShot(t.bvh,t.rigidWorld,t.damageSystem,t.effects,t.spatialAudio,t.director.allTargets,t.simTime),n<e-1)for(let i=0;i<10;i++)t.stepFixed(Ve.FIXED_DT);else t.gameLoop.stepDeterministic(1/120,!1)},triggerReload:()=>{t.player.weapon.magAmmo=18,t.player.weapon.startReload(t.synth)},setDebugView:e=>{t.input.debugView=e},resetTimingHistory:()=>{t.gameLoop.resetTimingHistory()},stepSeconds:(e,n=!1)=>{t.gameLoop.stepDeterministic(e,n)},getTelemetry:()=>{const e=t.renderGraph.getRenderCallStats();return{...t.gameLoop.telemetry,drawCalls:e.calls,triangles:e.triangles,internalScale:e.internalScale,mode:t.director.mode,playerPos:{x:t.player.controller.position.x,y:t.player.controller.position.y,z:t.player.controller.position.z},playerHealth:t.player.health,magAmmo:t.player.weapon.magAmmo,reserveAmmo:t.player.weapon.reserveAmmo,adsProgress:t.player.weapon.adsProgress,isReloading:t.player.weapon.isReloading,alphaScore:t.director.alphaScore,bravoScore:t.director.bravoScore,botCount:t.director.bots.length,aliveEnemies:t.director.bots.filter(n=>n.team==="bravo"&&n.isAlive).length}}}}}window.addEventListener("DOMContentLoaded",()=>{new J0});
