THREE.Vector3Node=function(t,e,o){THREE.InputNode.call(this,"v3"),this.type="v3",this.value=new THREE.Vector3(t,e,o)},THREE.Vector3Node.prototype=Object.create(THREE.InputNode.prototype),THREE.Vector3Node.prototype.constructor=THREE.Vector3Node,THREE.NodeMaterial.addShortcuts(THREE.Vector3Node.prototype,"value",["x","y","z"]);