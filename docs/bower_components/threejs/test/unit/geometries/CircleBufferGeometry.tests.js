!function(){"use strict";var e,t={radius:10,segments:20,thetaStart:.1,thetaLength:.2};QUnit.module("Extras - Geometries - CircleBufferGeometry",{beforeEach:function(){e=[new THREE.CircleBufferGeometry,new THREE.CircleBufferGeometry(t.radius),new THREE.CircleBufferGeometry(t.radius,t.segments),new THREE.CircleBufferGeometry(t.radius,t.segments,t.thetaStart),new THREE.CircleBufferGeometry(t.radius,t.segments,t.thetaStart,t.thetaLength)]}}),QUnit.test("standard geometry tests",function(t){runStdGeometryTests(t,e)})}();