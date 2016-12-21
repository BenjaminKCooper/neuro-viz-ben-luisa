THREE.MD2Character=function(){function e(e,i){for(var s=new THREE.TextureLoader,a=[],n=0;n<i.length;n++)a[n]=s.load(e+i[n],t),a[n].mapping=THREE.UVMapping,a[n].name=i[n];return a}function i(e,i){var t=new THREE.MeshLambertMaterial({color:16755200,wireframe:!0,morphTargets:!0,morphNormals:!0}),s=new THREE.MeshLambertMaterial({color:16777215,wireframe:!1,map:i,morphTargets:!0,morphNormals:!0}),a=new THREE.Mesh(e,s);return a.rotation.y=-Math.PI/2,a.castShadow=!0,a.receiveShadow=!0,a.materialTexture=s,a.materialWireframe=t,a}function t(){s.loadCounter-=1,0===s.loadCounter&&s.onLoadComplete()}var s=this;this.scale=1,this.animationFPS=6,this.root=new THREE.Object3D,this.meshBody=null,this.meshWeapon=null,this.skinsBody=[],this.skinsWeapon=[],this.weapons=[],this.activeAnimation=null,this.mixer=null,this.onLoadComplete=function(){},this.loadCounter=0,this.loadParts=function(a){this.loadCounter=2*a.weapons.length+a.skins.length+1;for(var n=[],o=0;o<a.weapons.length;o++)n[o]=a.weapons[o][1];this.skinsBody=e(a.baseUrl+"skins/",a.skins),this.skinsWeapon=e(a.baseUrl+"skins/",n);var h=new THREE.MD2Loader;h.load(a.baseUrl+a.body,function(e){e.computeBoundingBox(),s.root.position.y=-s.scale*e.boundingBox.min.y;var a=i(e,s.skinsBody[0]);a.scale.set(s.scale,s.scale,s.scale),s.root.add(a),s.meshBody=a,s.meshBody.clipOffset=0,s.activeAnimationClipName=a.geometry.animations[0].name,s.mixer=new THREE.AnimationMixer(a),t()});for(var m=function(e,a){return function(n){var o=i(n,s.skinsWeapon[e]);o.scale.set(s.scale,s.scale,s.scale),o.visible=!1,o.name=a,s.root.add(o),s.weapons[e]=o,s.meshWeapon=o,t()}},o=0;o<a.weapons.length;o++)h.load(a.baseUrl+a.weapons[o][0],m(o,a.weapons[o][0]))},this.setPlaybackRate=function(e){0!==e?this.mixer.timeScale=1/e:this.mixer.timeScale=0},this.setWireframe=function(e){e?(this.meshBody&&(this.meshBody.material=this.meshBody.materialWireframe),this.meshWeapon&&(this.meshWeapon.material=this.meshWeapon.materialWireframe)):(this.meshBody&&(this.meshBody.material=this.meshBody.materialTexture),this.meshWeapon&&(this.meshWeapon.material=this.meshWeapon.materialTexture))},this.setSkin=function(e){this.meshBody&&this.meshBody.material.wireframe===!1&&(this.meshBody.material.map=this.skinsBody[e])},this.setWeapon=function(e){for(var i=0;i<this.weapons.length;i++)this.weapons[i].visible=!1;var t=this.weapons[e];t&&(t.visible=!0,this.meshWeapon=t,s.syncWeaponAnimation())},this.setAnimation=function(e){if(this.meshBody){this.meshBody.activeAction&&(this.meshBody.activeAction.stop(),this.meshBody.activeAction=null);var i=this.mixer.clipAction(e,this.meshBody);i&&(this.meshBody.activeAction=i.play())}s.activeClipName=e,s.syncWeaponAnimation()},this.syncWeaponAnimation=function(){var e=s.activeClipName;if(s.meshWeapon){this.meshWeapon.activeAction&&(this.meshWeapon.activeAction.stop(),this.meshWeapon.activeAction=null);var i=this.meshWeapon.geometry,t=(i.animations,this.mixer.clipAction(e,this.meshWeapon));t&&(this.meshWeapon.activeAction=t.syncWith(this.meshBody.activeAction).play())}},this.update=function(e){this.mixer&&this.mixer.update(e)}};