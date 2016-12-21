THREE.ParametricGeometries={klein:function(t,e){e*=Math.PI,t*=2*Math.PI,e*=2;var r,o,a;return e<Math.PI?(r=3*Math.cos(e)*(1+Math.sin(e))+2*(1-Math.cos(e)/2)*Math.cos(e)*Math.cos(t),a=-8*Math.sin(e)-2*(1-Math.cos(e)/2)*Math.sin(e)*Math.cos(t)):(r=3*Math.cos(e)*(1+Math.sin(e))+2*(1-Math.cos(e)/2)*Math.cos(t+Math.PI),a=-8*Math.sin(e)),o=-2*(1-Math.cos(e)/2)*Math.sin(t),new THREE.Vector3(r,o,a)},plane:function(t,e){return function(r,o){var a=r*t,s=0,i=o*e;return new THREE.Vector3(a,s,i)}},mobius:function(t,e){t-=.5;var r,o,a,s=2*Math.PI*e,i=2;return r=Math.cos(s)*(i+t*Math.cos(s/2)),o=Math.sin(s)*(i+t*Math.cos(s/2)),a=t*Math.sin(s/2),new THREE.Vector3(r,o,a)},mobius3d:function(t,e){t*=Math.PI,e*=2*Math.PI,t*=2;var r,o,a,s=t/2,i=2.25,n=.125,c=.65;return r=n*Math.cos(e)*Math.cos(s)-c*Math.sin(e)*Math.sin(s),a=n*Math.cos(e)*Math.sin(s)+c*Math.sin(e)*Math.cos(s),o=(i+r)*Math.sin(t),r=(i+r)*Math.cos(t),new THREE.Vector3(r,o,a)}},THREE.ParametricGeometries.TubeGeometry=function(t,e,r,o,a,s){this.path=t,this.segments=e||64,this.radius=r||1,this.segmentsRadius=o||8,this.closed=a||!1,s&&(this.debug=new THREE.Object3D);var i,n,c,h,m,E,M,u=this,T=this.segments+1,G=new THREE.Vector3,y=t.computeFrenetFrames(e,a),H=y.tangents,R=y.normals,p=y.binormals;this.tangents=H,this.normals=R,this.binormals=p;var P=function(e,o){return o*=2*Math.PI,M=e*(T-1),M=Math.floor(M),E=t.getPointAt(e),i=H[M],n=R[M],c=p[M],u.debug&&(u.debug.add(new THREE.ArrowHelper(i,E,r,255)),u.debug.add(new THREE.ArrowHelper(n,E,r,16711680)),u.debug.add(new THREE.ArrowHelper(c,E,r,65280))),h=-u.radius*Math.cos(o),m=u.radius*Math.sin(o),G.copy(E),G.x+=h*n.x+m*c.x,G.y+=h*n.y+m*c.y,G.z+=h*n.z+m*c.z,G.clone()};THREE.ParametricGeometry.call(this,P,e,o)},THREE.ParametricGeometries.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.ParametricGeometries.TubeGeometry.prototype.constructor=THREE.ParametricGeometries.TubeGeometry,THREE.ParametricGeometries.TorusKnotGeometry=function(t,e,r,o,a,s){this.radius=t||200,this.tube=e||40,this.segmentsT=r||64,this.segmentsR=o||8,this.p=a||2,this.q=s||3;var i=THREE.Curve.create(function(){},function(e){e*=2*Math.PI;var r=.5,o=(1+r*Math.cos(s*e))*Math.cos(a*e),i=(1+r*Math.cos(s*e))*Math.sin(a*e),n=r*Math.sin(s*e);return new THREE.Vector3(o,i,n).multiplyScalar(t)}),n=r,c=o,h=new i;THREE.ParametricGeometries.TubeGeometry.call(this,h,n,e,c,!0,!1)},THREE.ParametricGeometries.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.ParametricGeometries.TorusKnotGeometry.prototype.constructor=THREE.ParametricGeometries.TorusKnotGeometry,THREE.ParametricGeometries.SphereGeometry=function(t,e,r){function o(e,r){e*=Math.PI,r*=2*Math.PI;var o=t*Math.sin(e)*Math.cos(r),a=t*Math.sin(e)*Math.sin(r),s=t*Math.cos(e);return new THREE.Vector3(o,a,s)}THREE.ParametricGeometry.call(this,o,e,r,!1)},THREE.ParametricGeometries.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.ParametricGeometries.SphereGeometry.prototype.constructor=THREE.ParametricGeometries.SphereGeometry,THREE.ParametricGeometries.PlaneGeometry=function(t,e,r,o){function a(r,o){var a=r*t,s=0,i=o*e;return new THREE.Vector3(a,s,i)}THREE.ParametricGeometry.call(this,a,r,o)},THREE.ParametricGeometries.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.ParametricGeometries.PlaneGeometry.prototype.constructor=THREE.ParametricGeometries.PlaneGeometry;