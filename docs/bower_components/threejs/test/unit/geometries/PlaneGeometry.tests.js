!function(){"use strict";var e,t={width:10,height:30,widthSegments:3,heightSegments:5};QUnit.module("Extras - Geometries - PlaneGeometry",{beforeEach:function(){e=[new THREE.PlaneGeometry,new THREE.PlaneGeometry(t.width),new THREE.PlaneGeometry(t.width,t.height),new THREE.PlaneGeometry(t.width,t.height,t.widthSegments),new THREE.PlaneGeometry(t.width,t.height,t.widthSegments,t.heightSegments)]}}),QUnit.test("standard geometry tests",function(t){runStdGeometryTests(t,e)})}();