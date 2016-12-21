THREE.KeyFrameAnimation=function(i){this.root=i.node,this.data=THREE.AnimationHandler.init(i),this.hierarchy=THREE.AnimationHandler.parse(this.root),this.currentTime=0,this.timeScale=.001,this.isPlaying=!1,this.isPaused=!0,this.loop=!0;for(var t=0,e=this.hierarchy.length;t<e;t++){var a=this.data.hierarchy[t].keys,r=this.data.hierarchy[t].sids,h=this.hierarchy[t];if(a.length&&r){for(var n=0;n<r.length;n++){var s=r[n],o=this.getNextKeyWith(s,t,0);o&&o.apply(s)}h.matrixAutoUpdate=!1,this.data.hierarchy[t].node.updateMatrix(),h.matrixWorldNeedsUpdate=!0}}},THREE.KeyFrameAnimation.prototype={constructor:THREE.KeyFrameAnimation,play:function(i){if(this.currentTime=void 0!==i?i:0,this.isPlaying===!1){this.isPlaying=!0;var t,e,a,r=this.hierarchy.length;for(t=0;t<r;t++){e=this.hierarchy[t],a=this.data.hierarchy[t],void 0===a.animationCache&&(a.animationCache={},a.animationCache.prevKey=null,a.animationCache.nextKey=null,a.animationCache.originalMatrix=e.matrix);var h=this.data.hierarchy[t].keys;h.length>1&&(a.animationCache.prevKey=h[0],a.animationCache.nextKey=h[1],this.startTime=Math.min(h[0].time,this.startTime),this.endTime=Math.max(h[h.length-1].time,this.endTime))}this.update(0)}this.isPaused=!1},stop:function(){this.isPlaying=!1,this.isPaused=!1;for(var i=0;i<this.data.hierarchy.length;i++){var t=this.hierarchy[i],e=this.data.hierarchy[i];if(void 0!==e.animationCache){var a=e.animationCache.originalMatrix;a.copy(t.matrix),t.matrix=a,delete e.animationCache}}},update:function(i){if(this.isPlaying!==!1){this.currentTime+=i*this.timeScale;var t=this.data.length;this.loop===!0&&this.currentTime>t&&(this.currentTime%=t),this.currentTime=Math.min(this.currentTime,t);for(var e=0,a=this.hierarchy.length;e<a;e++){var r=this.hierarchy[e],h=this.data.hierarchy[e],n=h.keys,s=h.animationCache;if(n.length){var o=s.prevKey,c=s.nextKey;if(c.time<=this.currentTime){for(;c.time<this.currentTime&&c.index>o.index;)o=c,c=n[o.index+1];s.prevKey=o,s.nextKey=c}c.time>=this.currentTime?o.interpolate(c,this.currentTime):o.interpolate(c,c.time),this.data.hierarchy[e].node.updateMatrix(),r.matrixWorldNeedsUpdate=!0}}}},getNextKeyWith:function(i,t,e){var a=this.data.hierarchy[t].keys;for(e%=a.length;e<a.length;e++)if(a[e].hasTarget(i))return a[e];return a[0]},getPrevKeyWith:function(i,t,e){var a=this.data.hierarchy[t].keys;for(e=e>=0?e:e+a.length;e>=0;e--)if(a[e].hasTarget(i))return a[e];return a[a.length-1]}};