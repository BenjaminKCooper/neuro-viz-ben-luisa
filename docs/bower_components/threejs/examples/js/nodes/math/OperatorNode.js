THREE.OperatorNode=function(t,e,o){THREE.TempNode.call(this),this.a=t,this.b=e,this.op=o||THREE.OperatorNode.ADD},THREE.OperatorNode.ADD="+",THREE.OperatorNode.SUB="-",THREE.OperatorNode.MUL="*",THREE.OperatorNode.DIV="/",THREE.OperatorNode.prototype=Object.create(THREE.TempNode.prototype),THREE.OperatorNode.prototype.constructor=THREE.OperatorNode,THREE.OperatorNode.prototype.getType=function(t){var e=this.a.getType(t),o=this.b.getType(t);return t.isFormatMatrix(e)?"v4":t.getFormatLength(o)>t.getFormatLength(e)?o:e},THREE.OperatorNode.prototype.generate=function(t,e){var o=t.material,r=(o.getDataNode(this.uuid),this.getType(t)),p=this.a.build(t,r),a=this.b.build(t,r);return t.format("("+p+this.op+a+")",r,e)};