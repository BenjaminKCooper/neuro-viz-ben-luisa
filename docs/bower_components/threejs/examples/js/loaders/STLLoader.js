THREE.STLLoader=function(e){this.manager=void 0!==e?e:THREE.DefaultLoadingManager},THREE.STLLoader.prototype={constructor:THREE.STLLoader,load:function(e,t,r,n){var a=this,o=new THREE.FileLoader(a.manager);o.setResponseType("arraybuffer"),o.load(e,function(e){t(a.parse(e))},r,n)},parse:function(e){var t=function(){var e,t,n,a;if(a=new DataView(r),t=50,n=a.getUint32(80,!0),e=84+n*t,e===a.byteLength)return!0;for(var o=a.byteLength,i=0;i<o;i++)if(a.getUint8(i,!1)>127)return!0;return!1},r=this.ensureBinary(e);return t()?this.parseBinary(r):this.parseASCII(this.ensureString(e))},parseBinary:function(e){for(var t,r,n,a,o,i,u,f,s=new DataView(e),l=s.getUint32(80,!0),g=!1,E=0;E<70;E++)1129270351==s.getUint32(E,!1)&&82==s.getUint8(E+4)&&61==s.getUint8(E+5)&&(g=!0,a=[],o=s.getUint8(E+6)/255,i=s.getUint8(E+7)/255,u=s.getUint8(E+8)/255,f=s.getUint8(E+9)/255);for(var p=84,h=50,y=new THREE.BufferGeometry,d=[],w=[],A=0;A<l;A++){var c=p+A*h,F=s.getFloat32(c,!0),T=s.getFloat32(c+4,!0),v=s.getFloat32(c+8,!0);if(g){var b=s.getUint16(c+48,!0);0===(32768&b)?(t=(31&b)/31,r=(b>>5&31)/31,n=(b>>10&31)/31):(t=o,r=i,n=u)}for(var R=1;R<=3;R++){var H=c+12*R;d.push(s.getFloat32(H,!0)),d.push(s.getFloat32(H+4,!0)),d.push(s.getFloat32(H+8,!0)),w.push(F,T,v),g&&a.push(t,r,n)}}return y.addAttribute("position",new THREE.BufferAttribute(new Float32Array(d),3)),y.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(w),3)),g&&(y.addAttribute("color",new THREE.BufferAttribute(new Float32Array(a),3)),y.hasColors=!0,y.alpha=f),y},parseASCII:function(e){var t,r,n,a,o,i;t=new THREE.BufferGeometry,r=/facet([\s\S]*?)endfacet/g;for(var u=[],f=[],s=new THREE.Vector3;null!==(o=r.exec(e));){for(i=o[0],n=/normal[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g;null!==(o=n.exec(i));)s.x=parseFloat(o[1]),s.y=parseFloat(o[3]),s.z=parseFloat(o[5]);for(a=/vertex[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g;null!==(o=a.exec(i));)u.push(parseFloat(o[1]),parseFloat(o[3]),parseFloat(o[5])),f.push(s.x,s.y,s.z)}return t.addAttribute("position",new THREE.BufferAttribute(new Float32Array(u),3)),t.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(f),3)),t},ensureString:function(e){if("string"!=typeof e){for(var t=new Uint8Array(e),r=[],n=0;n<e.byteLength;n++)r.push(String.fromCharCode(t[n]));return r.join("")}return e},ensureBinary:function(e){if("string"==typeof e){for(var t=new Uint8Array(e.length),r=0;r<e.length;r++)t[r]=255&e.charCodeAt(r);return t.buffer||t}return e}};