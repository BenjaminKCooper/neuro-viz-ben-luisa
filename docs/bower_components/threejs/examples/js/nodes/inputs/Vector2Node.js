THREE.Vector2Node=function(o,t){THREE.InputNode.call(this,"v2"),this.value=new THREE.Vector2(o,t)},THREE.Vector2Node.prototype=Object.create(THREE.InputNode.prototype),THREE.Vector2Node.prototype.constructor=THREE.Vector2Node,THREE.NodeMaterial.addShortcuts(THREE.Vector2Node.prototype,"value",["x","y"]);