THREE.ViveController=function(t){function e(t){for(var e=navigator.getGamepads(),i=0,r=0;i<4;i++){var n=e[i];if(n&&"OpenVR Gamepad"===n.id){if(r===t)return n;r++}}}THREE.Object3D.call(this);var i,r=this,n=[0,0],s=!1,o=!1,a=!1,p=!1;this.matrixAutoUpdate=!1,this.standingMatrix=new THREE.Matrix4,this.getGamepad=function(){return i},this.getButtonState=function(t){return"thumbpad"===t?s:"trigger"===t?o:"grips"===t?a:"menu"===t?p:void 0},this.update=function(){if(i=e(t),void 0!==i&&void 0!==i.pose){if(null===i.pose)return;var u=i.pose;null!==u.position&&r.position.fromArray(u.position),null!==u.orientation&&r.quaternion.fromArray(u.orientation),r.matrix.compose(r.position,r.quaternion,r.scale),r.matrix.multiplyMatrices(r.standingMatrix,r.matrix),r.matrixWorldNeedsUpdate=!0,r.visible=!0,n[0]===i.axes[0]&&n[1]===i.axes[1]||(n[0]=i.axes[0],n[1]=i.axes[1],r.dispatchEvent({type:"axischanged",axes:n})),s!==i.buttons[0].pressed&&(s=i.buttons[0].pressed,r.dispatchEvent({type:s?"thumbpaddown":"thumbpadup"})),o!==i.buttons[1].pressed&&(o=i.buttons[1].pressed,r.dispatchEvent({type:o?"triggerdown":"triggerup"})),a!==i.buttons[2].pressed&&(a=i.buttons[2].pressed,r.dispatchEvent({type:a?"gripsdown":"gripsup"})),p!==i.buttons[3].pressed&&(p=i.buttons[3].pressed,r.dispatchEvent({type:p?"menudown":"menuup"}))}else r.visible=!1}},THREE.ViveController.prototype=Object.create(THREE.Object3D.prototype),THREE.ViveController.prototype.constructor=THREE.ViveController;