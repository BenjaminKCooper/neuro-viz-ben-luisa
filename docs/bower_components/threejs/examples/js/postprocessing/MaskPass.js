THREE.MaskPass=function(s,e){THREE.Pass.call(this),this.scene=s,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1},THREE.MaskPass.prototype=Object.assign(Object.create(THREE.Pass.prototype),{constructor:THREE.MaskPass,render:function(s,e,t,r,a){var c=s.context,E=s.state;E.buffers.color.setMask(!1),E.buffers.depth.setMask(!1),E.buffers.color.setLocked(!0),E.buffers.depth.setLocked(!0);var n,f;this.inverse?(n=0,f=1):(n=1,f=0),E.buffers.stencil.setTest(!0),E.buffers.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),E.buffers.stencil.setFunc(c.ALWAYS,n,4294967295),E.buffers.stencil.setClear(f),s.render(this.scene,this.camera,t,this.clear),s.render(this.scene,this.camera,e,this.clear),E.buffers.color.setLocked(!1),E.buffers.depth.setLocked(!1),E.buffers.stencil.setFunc(c.EQUAL,1,4294967295),E.buffers.stencil.setOp(c.KEEP,c.KEEP,c.KEEP)}}),THREE.ClearMaskPass=function(){THREE.Pass.call(this),this.needsSwap=!1},THREE.ClearMaskPass.prototype=Object.create(THREE.Pass.prototype),Object.assign(THREE.ClearMaskPass.prototype,{render:function(s,e,t,r,a){s.state.buffers.stencil.setTest(!1)}});