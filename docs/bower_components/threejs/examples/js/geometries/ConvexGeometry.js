THREE.ConvexGeometry=function(e){function r(r){var t=e[r].clone(),s=t.length();t.x+=s*a(),t.y+=s*a(),t.z+=s*a();for(var l=[],v=0;v<c.length;){var h=c[v];if(o(h,t)){for(var f=0;f<3;f++){for(var u=[h[f],h[(f+1)%3]],E=!0,i=0;i<l.length;i++)if(n(l[i],u)){l[i]=l[l.length-1],l.pop(),E=!1;break}E&&l.push(u)}c[v]=c[c.length-1],c.pop()}else v++}for(var i=0;i<l.length;i++)c.push([l[i][0],l[i][1],r])}function o(r,o){var n=e[r[0]],a=e[r[1]],c=e[r[2]],s=t(n,a,c),l=s.dot(n);return s.dot(o)>=l}function t(e,r,o){var t=new THREE.Vector3,n=new THREE.Vector3;return t.subVectors(o,r),n.subVectors(e,r),t.cross(n),t.normalize(),t}function n(e,r){return e[0]===r[1]&&e[1]===r[0]}function a(){return 2*(Math.random()-.5)*1e-6}THREE.Geometry.call(this);for(var c=[[0,1,2],[0,2,1]],s=3;s<e.length;s++)r(s);for(var l=0,v=new Array(e.length),s=0;s<c.length;s++)for(var h=c[s],f=0;f<3;f++)void 0===v[h[f]]&&(v[h[f]]=l++,this.vertices.push(e[h[f]])),h[f]=v[h[f]];for(var s=0;s<c.length;s++)this.faces.push(new THREE.Face3(c[s][0],c[s][1],c[s][2]));this.computeFaceNormals();for(var s=0;s<this.faces.length;s++){var h=this.faces[s],t=h.normal;h.vertexNormals[0]=t.clone(),h.vertexNormals[1]=t.clone(),h.vertexNormals[2]=t.clone()}},THREE.ConvexGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.ConvexGeometry.prototype.constructor=THREE.ConvexGeometry;