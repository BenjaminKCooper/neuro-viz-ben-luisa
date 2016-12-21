Sidebar.Object=function(e){function t(){var t=e.selected;if(f.getValue()===!0){var a=E.getValue()/t.scale.x;y.setValue(y.getValue()*a),D.setValue(D.getValue()*a)}o()}function a(){var t=e.selected;if(f.getValue()===!0){var a=y.getValue()/t.scale.y;E.setValue(E.getValue()*a),D.setValue(D.getValue()*a)}o()}function n(){var t=e.selected;if(f.getValue()===!0){var a=D.getValue()/t.scale.z;E.setValue(E.getValue()*a),y.setValue(y.getValue()*a)}o()}function o(){var t=e.selected;if(null!==t){var a=new THREE.Vector3(U.getValue(),p.getValue(),I.getValue());t.position.distanceTo(a)>=.01&&e.execute(new SetPositionCommand(t,a));var n=new THREE.Euler(R.getValue()*THREE.Math.DEG2RAD,S.getValue()*THREE.Math.DEG2RAD,b.getValue()*THREE.Math.DEG2RAD);t.rotation.toVector3().distanceTo(n.toVector3())>=.01&&e.execute(new SetRotationCommand(t,n));var o=new THREE.Vector3(E.getValue(),y.getValue(),D.getValue());t.scale.distanceTo(o)>=.01&&e.execute(new SetScaleCommand(t,o)),void 0!==t.fov&&Math.abs(t.fov-H.getValue())>=.01&&(e.execute(new SetValueCommand(t,"fov",H.getValue())),t.updateProjectionMatrix()),void 0!==t.near&&Math.abs(t.near-M.getValue())>=.01&&e.execute(new SetValueCommand(t,"near",M.getValue())),void 0!==t.far&&Math.abs(t.far-A.getValue())>=.01&&e.execute(new SetValueCommand(t,"far",A.getValue())),void 0!==t.intensity&&Math.abs(t.intensity-k.getValue())>=.01&&e.execute(new SetValueCommand(t,"intensity",k.getValue())),void 0!==t.color&&t.color.getHex()!==G.getHexValue()&&e.execute(new SetColorCommand(t,"color",G.getHexValue())),void 0!==t.groundColor&&t.groundColor.getHex()!==j.getHexValue()&&e.execute(new SetColorCommand(t,"groundColor",j.getHexValue())),void 0!==t.distance&&Math.abs(t.distance-F.getValue())>=.01&&e.execute(new SetValueCommand(t,"distance",F.getValue())),void 0!==t.angle&&Math.abs(t.angle-K.getValue())>=.01&&e.execute(new SetValueCommand(t,"angle",K.getValue())),void 0!==t.penumbra&&Math.abs(t.penumbra-Q.getValue())>=.01&&e.execute(new SetValueCommand(t,"penumbra",Q.getValue())),void 0!==t.decay&&Math.abs(t.decay-Y.getValue())>=.01&&e.execute(new SetValueCommand(t,"decay",Y.getValue())),t.visible!==ae.getValue()&&e.execute(new SetValueCommand(t,"visible",ae.getValue())),void 0!==t.castShadow&&t.castShadow!==$.getValue()&&e.execute(new SetValueCommand(t,"castShadow",$.getValue())),void 0!==t.receiveShadow&&t.receiveShadow!==_.getValue()&&(e.execute(new SetValueCommand(t,"receiveShadow",_.getValue())),t.material.needsUpdate=!0),void 0!==t.shadow&&t.shadow.radius!==ee.getValue()&&e.execute(new SetValueCommand(t.shadow,"radius",ee.getValue()));try{var d=JSON.parse(oe.getValue());JSON.stringify(t.userData)!=JSON.stringify(d)&&e.execute(new SetValueCommand(t,"userData",d))}catch(e){console.warn(e)}}}function d(e){var t={fov:W,near:N,far:P,intensity:O,color:z,groundColor:L,distance:B,angle:J,penumbra:q,decay:X,castShadow:Z,receiveShadow:_,shadow:ee};for(var a in t)t[a].setDisplay(void 0!==e[a]?"":"none")}function s(e){e instanceof THREE.Light||e instanceof THREE.Object3D&&e.userData.targetInverse?(C.setDisplay("none"),T.setDisplay("none")):(C.setDisplay(""),T.setDisplay(""))}function i(e){w.setValue(e.type),V.setValue(e.uuid),v.setValue(e.name),U.setValue(e.position.x),p.setValue(e.position.y),I.setValue(e.position.z),R.setValue(e.rotation.x*THREE.Math.RAD2DEG),S.setValue(e.rotation.y*THREE.Math.RAD2DEG),b.setValue(e.rotation.z*THREE.Math.RAD2DEG),E.setValue(e.scale.x),y.setValue(e.scale.y),D.setValue(e.scale.z),void 0!==e.fov&&H.setValue(e.fov),void 0!==e.near&&M.setValue(e.near),void 0!==e.far&&A.setValue(e.far),void 0!==e.intensity&&k.setValue(e.intensity),void 0!==e.color&&G.setHexValue(e.color.getHexString()),void 0!==e.groundColor&&j.setHexValue(e.groundColor.getHexString()),void 0!==e.distance&&F.setValue(e.distance),void 0!==e.angle&&K.setValue(e.angle),void 0!==e.penumbra&&Q.setValue(e.penumbra),void 0!==e.decay&&Y.setValue(e.decay),void 0!==e.castShadow&&$.setValue(e.castShadow),void 0!==e.receiveShadow&&_.setValue(e.receiveShadow),void 0!==e.shadow&&ee.setValue(e.shadow.radius),ae.setValue(e.visible);try{oe.setValue(JSON.stringify(e.userData,null,"  "))}catch(e){console.log(e)}oe.setBorderColor("transparent"),oe.setBackgroundColor(""),s(e)}var u=e.signals,l=new UI.Panel;l.setBorderTop("0"),l.setPaddingTop("20px"),l.setDisplay("none");var r=(new UI.Select).setPosition("absolute").setRight("8px").setFontSize("11px");r.setOptions({Actions:"Actions","Reset Position":"Reset Position","Reset Rotation":"Reset Rotation","Reset Scale":"Reset Scale"}),r.onClick(function(e){e.stopPropagation()}),r.onChange(function(t){var a=e.selected;switch(this.getValue()){case"Reset Position":e.execute(new SetPositionCommand(a,new THREE.Vector3(0,0,0)));break;case"Reset Rotation":e.execute(new SetRotationCommand(a,new THREE.Euler(0,0,0)));break;case"Reset Scale":e.execute(new SetScaleCommand(a,new THREE.Vector3(1,1,1)))}this.setValue("Actions")});var c=new UI.Row,w=new UI.Text;c.add(new UI.Text("Type").setWidth("90px")),c.add(w),l.add(c);var g=new UI.Row,V=(new UI.Input).setWidth("102px").setFontSize("12px").setDisabled(!0),h=new UI.Button("New").setMarginLeft("7px").onClick(function(){V.setValue(THREE.Math.generateUUID()),e.execute(new SetUuidCommand(e.selected,V.getValue()))});g.add(new UI.Text("UUID").setWidth("90px")),g.add(V),g.add(h),l.add(g);var x=new UI.Row,v=(new UI.Input).setWidth("150px").setFontSize("12px").onChange(function(){e.execute(new SetValueCommand(e.selected,"name",v.getValue()))});x.add(new UI.Text("Name").setWidth("90px")),x.add(v),l.add(x);var m=new UI.Row,U=(new UI.Number).setWidth("50px").onChange(o),p=(new UI.Number).setWidth("50px").onChange(o),I=(new UI.Number).setWidth("50px").onChange(o);m.add(new UI.Text("Position").setWidth("90px")),m.add(U,p,I),l.add(m);var C=new UI.Row,R=(new UI.Number).setStep(10).setUnit("°").setWidth("50px").onChange(o),S=(new UI.Number).setStep(10).setUnit("°").setWidth("50px").onChange(o),b=(new UI.Number).setStep(10).setUnit("°").setWidth("50px").onChange(o);C.add(new UI.Text("Rotation").setWidth("90px")),C.add(R,S,b),l.add(C);var T=new UI.Row,f=new UI.Checkbox(!0).setPosition("absolute").setLeft("75px"),E=new UI.Number(1).setRange(.01,1/0).setWidth("50px").onChange(t),y=new UI.Number(1).setRange(.01,1/0).setWidth("50px").onChange(a),D=new UI.Number(1).setRange(.01,1/0).setWidth("50px").onChange(n);T.add(new UI.Text("Scale").setWidth("90px")),T.add(f),T.add(E,y,D),l.add(T);var W=new UI.Row,H=(new UI.Number).onChange(o);W.add(new UI.Text("Fov").setWidth("90px")),W.add(H),l.add(W);var N=new UI.Row,M=(new UI.Number).onChange(o);N.add(new UI.Text("Near").setWidth("90px")),N.add(M),l.add(N);var P=new UI.Row,A=(new UI.Number).onChange(o);P.add(new UI.Text("Far").setWidth("90px")),P.add(A),l.add(P);var O=new UI.Row,k=(new UI.Number).setRange(0,1/0).onChange(o);O.add(new UI.Text("Intensity").setWidth("90px")),O.add(k),l.add(O);var z=new UI.Row,G=(new UI.Color).onChange(o);z.add(new UI.Text("Color").setWidth("90px")),z.add(G),l.add(z);var L=new UI.Row,j=(new UI.Color).onChange(o);L.add(new UI.Text("Ground color").setWidth("90px")),L.add(j),l.add(L);var B=new UI.Row,F=(new UI.Number).setRange(0,1/0).onChange(o);B.add(new UI.Text("Distance").setWidth("90px")),B.add(F),l.add(B);var J=new UI.Row,K=(new UI.Number).setPrecision(3).setRange(0,Math.PI/2).onChange(o);J.add(new UI.Text("Angle").setWidth("90px")),J.add(K),l.add(J);var q=new UI.Row,Q=(new UI.Number).setRange(0,1).onChange(o);q.add(new UI.Text("Penumbra").setWidth("90px")),q.add(Q),l.add(q);var X=new UI.Row,Y=(new UI.Number).setRange(0,1/0).onChange(o);X.add(new UI.Text("Decay").setWidth("90px")),X.add(Y),l.add(X);var Z=new UI.Row;Z.add(new UI.Text("Shadow").setWidth("90px"));var $=new UI.THREE.Boolean(!1,"cast").onChange(o);Z.add($);var _=new UI.THREE.Boolean(!1,"receive").onChange(o);Z.add(_);var ee=new UI.Number(1).onChange(o);Z.add(ee),l.add(Z);var te=new UI.Row,ae=(new UI.Checkbox).onChange(o);te.add(new UI.Text("Visible").setWidth("90px")),te.add(ae),l.add(te);var ne=new UI.Row,oe=(new UI.TextArea).setWidth("150px").setHeight("40px").setFontSize("12px").onChange(o);return oe.onKeyUp(function(){try{JSON.parse(oe.getValue()),oe.dom.classList.add("success"),oe.dom.classList.remove("fail")}catch(e){oe.dom.classList.remove("success"),oe.dom.classList.add("fail")}}),ne.add(new UI.Text("User data").setWidth("90px")),ne.add(oe),l.add(ne),u.objectSelected.add(function(e){null!==e?(l.setDisplay("block"),d(e),i(e)):l.setDisplay("none")}),u.objectChanged.add(function(t){t===e.selected&&i(t)}),u.refreshSidebarObject3D.add(function(t){t===e.selected&&i(t)}),l};