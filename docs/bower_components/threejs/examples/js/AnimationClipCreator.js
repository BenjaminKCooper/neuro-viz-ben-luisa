THREE.AnimationClipCreator=function(){},THREE.AnimationClipCreator.CreateRotationAnimation=function(n,r){var a=[0,n],e=[0,360];r=r||"x";var i=".rotation["+r+"]",t=new THREE.NumberKeyframeTrack(i,a,e);return new THREE.AnimationClip(null,n,[t])},THREE.AnimationClipCreator.CreateScaleAxisAnimation=function(n,r){var a=[0,n],e=[0,1];r=r||"x";var i=".scale["+r+"]",t=new THREE.NumberKeyframeTrack(i,a,e);return new THREE.AnimationClip(null,n,[t])},THREE.AnimationClipCreator.CreateShakeAnimation=function(n,r){for(var a=[],e=[],i=new THREE.Vector3,t=0;t<10*n;t++)a.push(t/10),i.set(2*Math.random()-1,2*Math.random()-1,2*Math.random()-1).multiply(r).toArray(e,e.length);var o=".position",l=new THREE.VectorKeyframeTrack(o,a,e);return new THREE.AnimationClip(null,n,[l])},THREE.AnimationClipCreator.CreatePulsationAnimation=function(n,r){for(var a=[],e=[],i=new THREE.Vector3,t=0;t<10*n;t++){a.push(t/10);var o=Math.random()*r;i.set(o,o,o).toArray(e,e.length)}var l=".scale",E=new THREE.VectorKeyframeTrack(l,keys);return new THREE.AnimationClip(null,n,[E])},THREE.AnimationClipCreator.CreateVisibilityAnimation=function(n){var r=[0,n/2,n],a=[!0,!1,!0],e=".visible",i=new THREE.BooleanKeyframeTrack(e,r,a);return new THREE.AnimationClip(null,n,[i])},THREE.AnimationClipCreator.CreateMaterialColorAnimation=function(n,r,a){for(var e=[],i=[],t=n/r.length,o=0;o<=r.length;o++)timees.push(o*t),i.push(r[o%r.length]);var l=".material[0].color",E=new THREE.ColorKeyframeTrack(l,e,i);return new THREE.AnimationClip(null,n,[E])};