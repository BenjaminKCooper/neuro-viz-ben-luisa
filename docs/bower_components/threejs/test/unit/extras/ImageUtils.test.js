QUnit.module("ImageLoader",{beforeEach:function(){THREE.Cache.clear()}});var good_url="../../examples/textures/sprite.png",bad_url="url_not_found";QUnit.test("test load handler",function(e){var o=e.async();(new THREE.TextureLoader).load(good_url,function(t){e.success("load handler should be called"),e.ok(t,"texture is defined"),e.ok(t.image,"texture.image is defined"),o()},void 0,function(){e.fail("error handler should not be called"),o()})}),QUnit.test("test error handler",function(e){var o=e.async();(new THREE.TextureLoader).load(bad_url,function(){e.fail("load handler should not be called"),o()},void 0,function(t){e.success("error handler should be called"),e.ok("error"===t.type,"should have error event"),o()})}),QUnit.test("test cached texture",function(e){var o=e.async(),t=(new THREE.TextureLoader).load(good_url,function(a){e.ok(void 0!==t.image,"texture 1 image is loaded"),e.equal(t,a,"texture 1 callback is equal to return");var r=(new THREE.TextureLoader).load(good_url,function(t){e.ok(void 0!==r,"cached callback is async"),e.ok(void 0!==r.image,"texture 2 image is loaded"),e.equal(r,t,"texture 2 callback is equal to return"),o()});e.ok(r,"texture 2 return is defined")});e.ok(t,"texture 1 return is defined"),e.ok(void 0===t.image,"texture 1 image is not loaded")});