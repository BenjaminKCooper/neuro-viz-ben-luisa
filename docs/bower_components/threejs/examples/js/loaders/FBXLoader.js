!function(){function e(){}function t(){}function r(){this.skinIndices=[],this.skinWeights=[],this.matrices=[]}function i(){this.hierarchy=[]}function n(){this.geometries={}}function s(){this.node=null,this.name=null,this.id=null,this.vertices=[],this.indices=[],this.normals=[],this.uvs=[],this.bones=[]}function o(){this.uv=null,this.map=null,this.ref=null,this.node=null,this.index=null}function a(){this.normal=null,this.map=null,this.ref=null,this.node=null,this.index=null}function h(){this.indexBuffer=[]}function c(){this.version=null,this.id=null,this.internalId=null,this.times=null,this.values=null,this.attrFlag=null,this.attrData=null}function u(){this.id=null,this.attr=null,this.attrX=!1,this.attrY=!1,this.attrZ=!1,this.internalId=null,this.containerInternalId=null,this.containerBoneId=null,this.curveIdx=null,this.curves={}}function p(){this.curves={},this.length=0,this.fps=30,this.frames=0}function l(){this.textures={}}function d(){this.fileName="",this.name="",this.id=null,this.parentIds=[]}function f(){this.materials={},this.perGeoMap={}}function v(){this.fileName="",this.name="",this.id=null,this.parentIds=[]}function y(e,t,r){for(var i=[],n=0;n<t.length;++n)for(var s=0;s<r;++s)i.push(e[t[n]*r+s]);return i}function m(e,t,r,i){for(var n=[],s=0,o=0;o<t.length;++o){n[t[o]]=[];for(var a=0;a<i;++a)n[t[o]][a]=e[s+a];s+=i}for(var h=[],c=0;c<n.length;++c)if(void 0!==n[c])for(var u=0;u<i;++u)void 0!==n[c][u]&&h.push(n[c][u]);return h}function _(e,t,r){for(var i={},n=[],s=0,o=0;o<t.length;++o)if(!(t[o]in i)){i[t[o]]={};for(var a=0;a<r;++a)i[t[o]][a]=e[o*r+a];s=s<t[o]?t[o]:s}try{for(o=0;o<=s;o++)for(var h=0;h<r;h++)n.push(i[o][h])}catch(e){}return n}function g(e){return e/46186158e3}function b(e){return e*Math.PI/180}function x(e,t,r){var i=new THREE.Euler(e,t,r,"ZYX"),n=new THREE.Quaternion;return n.setFromEuler(i),n}function N(e){return e.split(",").map(function(e){return parseInt(e)})}function E(e){return e.split(",").map(function(e){return parseFloat(e)})}function I(e){return e.split(",").map(function(e){return b(parseFloat(e))})}function T(e){var t=E(e);return(new THREE.Matrix4).fromArray(t)}THREE.FBXLoader=function(e){THREE.Loader.call(this),this.manager=void 0!==e?e:THREE.DefaultLoadingManager,this.textureLoader=null,this.textureBasePath=null},THREE.FBXLoader.prototype=Object.create(THREE.Loader.prototype),THREE.FBXLoader.prototype.constructor=THREE.FBXLoader,Object.assign(THREE.FBXLoader.prototype,{load:function(e,t,r,i){var n=this,s=new THREE.FileLoader(n.manager);s.load(e,function(r){n.isFbxFormatASCII(r)?n.isFbxVersionSupported(r)?(n.textureBasePath=n.extractUrlBase(e),t(n.parse(r))):console.warn("FBXLoader: !!! FBX Version below 7 not supported !!!"):console.warn("FBXLoader: !!! FBX Binary format not supported !!!")},r,i)},setCrossOrigin:function(e){this.crossOrigin=e},isFbxFormatASCII:function(e){for(var t=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],r=0,i=function(t){var i=e[t-1];return e=e.slice(r+t),r++,i},n=0;n<t.length;++n){var s=i(1);if(s==t[n])return!1}return!0},isFbxVersionSupported:function(e){var t=/FBXVersion: (\d+)/,r=e.match(t);if(r){var i=parseInt(r[1]);return console.log("FBXLoader: FBX version "+i),i>=7e3}return!1},parse:function(e){var s=this;console.time("FBXLoader"),console.time("FBXLoader: TextParser");var o=(new t).parse(e);console.timeEnd("FBXLoader: TextParser"),console.time("FBXLoader: ObjectParser"),s.hierarchy=(new i).parseHierarchy(o),s.weights=(new r).parse(o,s.hierarchy),s.animations=(new p).parse(o,s.hierarchy),s.textures=(new l).parse(o,s.hierarchy),s.materials=(new f).parse(o,s.hierarchy),s.geometries=(new n).parse(o,s.hierarchy),console.timeEnd("FBXLoader: ObjectParser"),this.texture_cache={},this.material_cache={},this.geometry_cache={},console.time("FBXLoader: MeshParser");var a=this.parseMeshes(o);console.timeEnd("FBXLoader: MeshParser");for(var h=new THREE.Group,c=0;c<a.length;++c)void 0!==a[c]&&h.add(a[c]);return console.timeEnd("FBXLoader"),h},getTexture:function(e){return e.id in this.texture_cache||(null===this.textureLoader&&(this.textureLoader=new THREE.TextureLoader),this.texture_cache[e.id]=this.textureLoader.load(this.textureBasePath+"/"+e.fileName)),this.texture_cache[e.id]},getMaterial:function(e,t){if(!(e.id in this.material_cache)){var r;switch(e.type){case"phong":r=new THREE.MeshPhongMaterial;break;case"lambert":r=new THREE.MeshLambertMaterial;break;default:console.warn("No implementation given for material type "+e.type+" in FBXLoader.js.  Defaulting to basic material"),r=new THREE.MeshBasicMaterial({color:3342591})}for(var i=t.searchConnectionChildren(e.id),n=0;n<i.length;++n){var s=t.searchConnectionType(i[n],e.id);switch(s){case' "AmbientColor':break;case' "DiffuseColor':e.parameters.map=this.getTexture(this.textures.textures[i[n]]);break;default:console.warn("Unknown texture application of type "+s+", skipping texture")}}r.setValues(e.parameters),this.material_cache[e.id]=r}return this.material_cache[e.id]},getGeometry:function(e){if(!(e.id in this.geometry_cache)){var t=new THREE.BufferGeometry;if(t.name=e.name,t.addAttribute("position",new THREE.BufferAttribute(new Float32Array(e.vertices),3)),void 0!==e.normals&&e.normals.length>0&&t.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(e.normals),3)),void 0!==e.uvs&&e.uvs.length>0&&t.addAttribute("uv",new THREE.BufferAttribute(new Float32Array(e.uvs),2)),void 0!==e.indices&&e.indices.length>0&&(e.indices.length>65535?t.setIndex(new THREE.BufferAttribute(new Uint32Array(e.indices),1)):t.setIndex(new THREE.BufferAttribute(new Uint16Array(e.indices),1))),t.verticesNeedUpdate=!0,t.computeBoundingSphere(),t.computeBoundingBox(),e.materialIndices.length>1){t.groups=[];for(var r=0,i=-1;r<e.materialIndices.length;++r)e.materialIndices[r]!==i&&(t.groups.push({start:3*r,count:0,materialIndex:e.materialIndices[r]}),i=e.materialIndices[r]),t.groups[t.groups.length-1].count+=3}this.geometry_cache[e.id]=(new THREE.Geometry).fromBufferGeometry(t),this.geometry_cache[e.id].bones=e.bones,this.geometry_cache[e.id].skinIndices=this.weights.skinIndices,this.geometry_cache[e.id].skinWeights=this.weights.skinWeights}return this.geometry_cache[e.id]},parseMeshes:function(e){var t=e.Objects.subNodes.Model,r=[];for(var i in t)"Mesh"===t[i].attrType?r.push(this.parseMesh(t[i],e)):"NurbsCurve"===t[i].attrType&&r.push(this.parseNURBS(t[i],e));return r},parseFloatList:function(e){return e.split(",").map(function(e){return parseFloat(e)})},parseNURBS:function(e,t){if(void 0===THREE.NURBSCurve)return void console.error("THREE.FBXLoader relies on THREE.NURBSCurve");for(var r,i=t.Objects.subNodes.Geometry,n=t.searchConnectionChildren(e.id),s=0;s<n.length;++s)if(n[s]in i){r=i[n[s]];break}if(void 0!==r){var o=parseInt(r.properties.Order);if(isNaN(o))return void console.error("Invalid Order: `"+r.properties.Order+"` (should be an integer)");for(var a=this.parseFloatList(r.subNodes.KnotVector.properties.a),h=[],c=this.parseFloatList(r.subNodes.Points.properties.a),s=0;s<c.length;s+=4)h.push({x:c[s],y:c[s+1],z:c[s+2],w:c[s+3]});"Closed"==r.properties.Form&&h.push(h[0]);var u=new THREE.NURBSCurve(o-1,a,h),p=new THREE.Geometry;p.vertices=u.getPoints(1.5*h.length);var l=new THREE.Line(p);return l.userData.curve=u,l}},parseMesh:function(e,t){for(var r,i,n,s=t.Objects.subNodes.Geometry,o=t.Objects.subNodes.Material,a=t.searchConnectionChildren(e.id),h=[],c=0;c<a.length;++c)a[c]in s?r=this.getGeometry(this.geometries.geometries[a[c]]):a[c]in o&&h.push(this.getMaterial(this.materials.materials[a[c]],t));if(i=h.length>1?new THREE.MultiMaterial(h):h[0],void 0!==r.bones&&void 0!==r.skinWeights&&r.skinWeights.length>0){if(i instanceof THREE.MultiMaterial)for(var c=0;c<i.materials.length;++c)i.materials[c].skinning=!0;else i.skinning=!0;n=new THREE.SkinnedMesh(r,i)}else n=new THREE.Mesh(r,i);return void 0!==this.animations&&this.addAnimation(n,this.weights.matrices,this.animations),n},addAnimation:function(e,t,r){function i(e,t){if(void 0===e)return!1;var r;switch(t){case"S":if(!e.S)return!1;r=e.S;break;case"R":if(!e.R)return!1;r=e.R;break;case"T":if(!e.T)return!1;r=e.T}return void 0!==r.curves.x&&(void 0!==r.curves.y&&void 0!==r.curves.z)}function n(e,t){var r=s(e.curves.x,t),i=s(e.curves.y,t),n=s(e.curves.z,t);return r&&i&&n}function s(e,t){var r=e.values[t];return void 0!==r}function o(e,t){var s={};if(s.time=l/r.fps,s.pos=t.pos,s.rot=t.rotq,s.scl=t.scl,void 0===e)return s;try{if(i(e,"T")&&n(e.T,l)){var o=new THREE.Vector3(e.T.curves.x.values[l],e.T.curves.y.values[l],e.T.curves.z.values[l]);s.pos=[o.x,o.y,o.z]}if(i(e,"R")&&n(e.R,l)){var a=b(e.R.curves.x.values[l]),h=b(e.R.curves.y.values[l]),c=b(e.R.curves.z.values[l]),u=new THREE.Vector3(a,h,c),p=x(u.x,u.y,u.z);s.rot=[p.x,p.y,p.z,p.w]}if(i(e,"S")&&n(e.S,l)){var d=new THREE.Vector3(e.S.curves.x.values[l],e.S.curves.y.values[l],e.S.curves.z.values[l]);s.scl=[d.x,d.y,d.z]}}catch(e){console.log(t),console.log(e)}return s}for(var a in r.stacks){for(var h={name:r.stacks[a].name,fps:30,length:r.stacks[a].length,hierarchy:[]},c=0;c<e.geometry.bones.length;++c){var u=e.geometry.bones[c].name;u=u.replace(/.*:/,""),h.hierarchy.push({parent:e.geometry.bones[c].parent,name:u,keys:[]})}for(var p=e.geometry.bones,l=0;l<r.stacks[a].frames;l++)for(c=0;c<p.length;c++)for(var d=p[c],f=r.stacks[a].layers[0][c],v=0;v<h.hierarchy.length;v++)h.hierarchy[v].name===d.name&&h.hierarchy[v].keys.push(o(f,d));void 0===e.geometry.animations&&(e.geometry.animations=[]),e.geometry.animations.push(THREE.AnimationClip.parseAnimation(h,e.geometry.bones))}},loadFile:function(e,t,r,i,n){var s=new THREE.FileLoader(this.manager);s.setResponseType(n);var o=s.load(e,t,r,i);return o},loadFileAsBuffer:function(e,t,r,i){this.loadFile(e,t,r,i,"arraybuffer")},loadFileAsText:function(e,t,r,i){this.loadFile(e,t,r,i,"text")}}),Object.assign(e.prototype,{add:function(e,t){this[e]=t},searchConnectionParent:function(e){if(void 0===this.__cache_search_connection_parent&&(this.__cache_search_connection_parent=[]),void 0!==this.__cache_search_connection_parent[e])return this.__cache_search_connection_parent[e];this.__cache_search_connection_parent[e]=[];for(var t=this.Connections.properties.connections,r=[],i=0;i<t.length;++i)if(t[i][0]==e){var n=0===t[i][1]?-1:t[i][1];r.push(n)}return r.length>0?(this.__cache_search_connection_parent[e]=this.__cache_search_connection_parent[e].concat(r),r):(this.__cache_search_connection_parent[e]=[-1],[-1])},searchConnectionChildren:function(e){if(void 0===this.__cache_search_connection_children&&(this.__cache_search_connection_children=[]),void 0!==this.__cache_search_connection_children[e])return this.__cache_search_connection_children[e];this.__cache_search_connection_children[e]=[];for(var t=this.Connections.properties.connections,r=[],i=0;i<t.length;++i)t[i][1]==e&&r.push(0===t[i][0]?-1:t[i][0]);return r.length>0?(this.__cache_search_connection_children[e]=this.__cache_search_connection_children[e].concat(r),r):(this.__cache_search_connection_children[e]=[],[])},searchConnectionType:function(e,t){var r=e+","+t;if(void 0===this.__cache_search_connection_type&&(this.__cache_search_connection_type={}),void 0!==this.__cache_search_connection_type[r])return this.__cache_search_connection_type[r];this.__cache_search_connection_type[r]="";for(var i=this.Connections.properties.connections,n=0;n<i.length;++n)if(i[n][0]==e&&i[n][1]==t)return this.__cache_search_connection_type[r]=i[n][2],i[n][2];return this.__cache_search_connection_type[e]=null,null}}),Object.assign(t.prototype,{getPrevNode:function(){return this.nodeStack[this.currentIndent-2]},getCurrentNode:function(){return this.nodeStack[this.currentIndent-1]},getCurrentProp:function(){return this.currentProp},pushStack:function(e){this.nodeStack.push(e),this.currentIndent+=1},popStack:function(){this.nodeStack.pop(),this.currentIndent-=1},setCurrentProp:function(e,t){this.currentProp=e,this.currentPropName=t},parse:function(t){this.currentIndent=0,this.allNodes=new e,this.nodeStack=[],this.currentProp=[],this.currentPropName="";var r=t.split("\n");for(var i in r){var n=r[i];if(!n.match(/^[\s\t]*;/)&&!n.match(/^[\s\t]*$/)){var s=new RegExp("^\\t{"+this.currentIndent+"}(\\w+):(.*){",""),o=n.match(s);if(o){var a=o[1].trim().replace(/^"/,"").replace(/"$/,""),h=o[2].split(",").map(function(e){return e.trim().replace(/^"/,"").replace(/"$/,"")});this.parseNodeBegin(n,a,h||null)}else{var c=new RegExp("^\\t{"+this.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),o=n.match(c);if(o){var u=o[1].replace(/^"/,"").replace(/"$/,"").trim(),p=o[2].replace(/^"/,"").replace(/"$/,"").trim();this.parseNodeProperty(n,u,p)}else{var l=new RegExp("^\\t{"+(this.currentIndent-1)+"}}");n.match(l)?this.nodeEnd():n.match(/^[^\s\t}]/)&&this.parseNodePropertyContinued(n)}}}}return this.allNodes},parseNodeBegin:function(e,t,r){var i={name:t,properties:{},subNodes:{}},n=this.parseNodeAttr(r),s=this.getCurrentNode();if(0===this.currentIndent)this.allNodes.add(t,i);else if(t in s.subNodes){var o=s.subNodes[t];this.isFlattenNode(s.subNodes[t])&&(""===n.id?(s.subNodes[t]=[],s.subNodes[t].push(o)):(s.subNodes[t]={},s.subNodes[t][o.id]=o)),""===n.id?s.subNodes[t].push(i):s.subNodes[t][n.id]=i}else"number"==typeof n.id||n.id.match(/^\d+$/)?(s.subNodes[t]={},s.subNodes[t][n.id]=i):s.subNodes[t]=i;r&&(i.id=n.id,i.attrName=n.name,i.attrType=n.type),this.pushStack(i)},parseNodeAttr:function(e){var t=e[0];""!==e[0]&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));var r,i;return e.length>1&&(r=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:r||"",type:i||""}},parseNodeProperty:function(e,t,r){var i=this.getCurrentNode(),n=i.name;if(void 0!==n){var s=n.match(/Properties(\d)+/);if(s)return void this.parseNodeSpecialProperty(e,t,r)}if("C"==t){var o=r.split(",").slice(1),a=parseInt(o[0]),h=parseInt(o[1]),c=r.split(",").slice(3);t="connections",r=[a,h],r=r.concat(c),void 0===i.properties[t]&&(i.properties[t]=[])}if("Node"==t){var u=parseInt(r);i.properties.id=u,i.id=u}t in i.properties?Array.isArray(i.properties[t])?i.properties[t].push(r):i.properties[t]+=r:Array.isArray(i.properties[t])?i.properties[t].push(r):i.properties[t]=r,this.setCurrentProp(i.properties,t)},parseNodePropertyContinued:function(e){this.currentProp[this.currentPropName]+=e},parseNodeSpecialProperty:function(e,t,r){var i=r.split('",').map(function(e){return e.trim().replace(/^\"/,"").replace(/\s/,"_")}),n=i[0],s=i[1],o=i[2],a=i[3],h=i[4];switch(s){case"int":h=parseInt(h);break;case"double":h=parseFloat(h);break;case"ColorRGB":case"Vector3D":var c=h.split(",");h=new THREE.Vector3(c[0],c[1],c[2])}this.getPrevNode().properties[n]={type:s,type2:o,flag:a,value:h},this.setCurrentProp(this.getPrevNode().properties,n)},nodeEnd:function(){this.popStack()},isFlattenNode:function(e){return"subNodes"in e&&"properties"in e}}),r.prototype.parseCluster=function(e,t,r){var i=e.searchConnectionParent(t),n=N(r.subNodes.Indexes.properties.a),s=E(r.subNodes.Weights.properties.a),o=T(r.subNodes.Transform.properties.a),a=T(r.subNodes.TransformLink.properties.a);return{parent:i,id:parseInt(t),indices:n,weights:s,transform:o,transformlink:a,linkMode:r.properties.Mode}},r.prototype.parse=function(e,t){this.skinIndices=[],this.skinWeights=[],this.matrices=[];var r=e.Objects.subNodes.Deformer,i={};for(var n in r)if("Cluster"===r[n].attrType){if(!("Indexes"in r[n].subNodes))continue;var s=this.parseCluster(e,n,r[n]),o=e.searchConnectionChildren(s.id)[0];i[o]=s}for(var a=[],h=t.hierarchy,c=0;c<h.length;++c){var u=h[c].internalId;if(void 0!==i[u]){var p=i[u];this.matrices.push(p.transform);for(var l=0;l<p.indices.length;++l){void 0===a[p.indices[l]]&&(a[p.indices[l]]={},a[p.indices[l]].joint=[],a[p.indices[l]].weight=[]);var d=e.searchConnectionChildren(p.id);d.length>1&&console.warn("FBXLoader: node "+p.id+" have many weight kids: "+d),a[p.indices[l]].joint.push(t.getBoneIdfromInternalId(e,d[0])),a[p.indices[l]].weight.push(p.weights[l])}}else this.matrices.push(new THREE.Matrix4)}for(var f=0;f<a.length;f++)if(void 0!==a[f]){var v=new THREE.Vector4(a[f].joint[0]?a[f].joint[0]:0,a[f].joint[1]?a[f].joint[1]:0,a[f].joint[2]?a[f].joint[2]:0,a[f].joint[3]?a[f].joint[3]:0),y=new THREE.Vector4(a[f].weight[0]?a[f].weight[0]:0,a[f].weight[1]?a[f].weight[1]:0,a[f].weight[2]?a[f].weight[2]:0,a[f].weight[3]?a[f].weight[3]:0);this.skinIndices.push(v),this.skinWeights.push(y)}else this.skinIndices.push(new THREE.Vector4(0,0,0,0)),this.skinWeights.push(new THREE.Vector4(0,0,0,0));return this},i.prototype.parseHierarchy=function(e){var t=e.Objects,r=t.subNodes.Model,i=[];for(var n in r)void 0!==r[n].attrType&&i.push(r[n]);this.hierarchy=[];for(var s=0;s<i.length;++s){var o=i[s],a=e.searchConnectionParent(o.id)[0],h=[0,0,0],c=[0,0,0,1],u=[1,1,1];if("Lcl_Translation"in o.properties&&(h=E(o.properties.Lcl_Translation.value)),"Lcl_Rotation"in o.properties){c=I(o.properties.Lcl_Rotation.value);var p=new THREE.Quaternion;p.setFromEuler(new THREE.Euler(c[0],c[1],c[2],"ZYX")),c=[p.x,p.y,p.z,p.w]}"Lcl_Scaling"in o.properties&&(u=E(o.properties.Lcl_Scaling.value));var l=o.attrName;l=l.replace(/:/,""),l=l.replace(/_/,""),l=l.replace(/-/,""),this.hierarchy.push({parent:a,name:l,pos:h,rotq:c,scl:u,internalId:o.id})}return this.reindexParentId(),this.restoreBindPose(e),this},i.prototype.reindexParentId=function(){for(var e=0;e<this.hierarchy.length;e++)for(var t=0;t<this.hierarchy.length;++t)if(this.hierarchy[e].parent==this.hierarchy[t].internalId){this.hierarchy[e].parent=t;break}},i.prototype.restoreBindPose=function(e){var t=e.Objects.subNodes.Pose;if(void 0!==t){for(var r in t)if("BindPose"===t[r].attrType){t=t[r];break}for(var i=t.subNodes.PoseNode,n={},s={},o=0;o<i.length;++o){var a=T(i[o].subNodes.Matrix.properties.a),h=T(i[o].subNodes.Matrix.properties.a);n[i[o].id]=a,s[i[o].id]=h}for(var c=0;c<this.hierarchy.length;++c){var u=this.hierarchy[c],p=u.internalId;if(void 0!==s[p]){for(var l,d=new THREE.Vector3(0,0,0),f=new THREE.Quaternion,v=new THREE.Vector3(1,1,1),y=e.searchConnectionParent(p),m=0;m<y.length;++m)if(this.isBoneNode(y[m])){l=y[m];break}if(void 0!==l&&void 0!==n[l]){var _=new THREE.Matrix4;_.getInverse(s[l]),_.multiply(n[p]),n[p]=_}n[p].decompose(d,f,v),u.pos=[d.x,d.y,d.z],u.rotq=[f.x,f.y,f.z,f.w],u.scl=[v.x,v.y,v.z]}}}},i.prototype.searchRealId=function(e){for(var t=0;t<this.hierarchy.length;t++)if(e==this.hierarchy[t].internalId)return t;return-1},i.prototype.getByInternalId=function(e){for(var t=0;t<this.hierarchy.length;t++)if(e==this.hierarchy[t].internalId)return this.hierarchy[t];return null},i.prototype.isBoneNode=function(e){for(var t=0;t<this.hierarchy.length;++t)if(e===this.hierarchy[t].internalId)return!0;return!1},i.prototype.getBoneIdfromInternalId=function(e,t){if(void 0===e.__cache_get_boneid_from_internalid&&(e.__cache_get_boneid_from_internalid=[]),void 0!==e.__cache_get_boneid_from_internalid[t])return e.__cache_get_boneid_from_internalid[t];for(var r=0;r<this.hierarchy.length;++r)if(this.hierarchy[r].internalId==t)return e.__cache_get_boneid_from_internalid[t]=r,r;return-1},Object.assign(n.prototype,{parse:function(e,t){if(!("Geometry"in e.Objects.subNodes))return this;for(var r in e.Objects.subNodes.Geometry)"Mesh"===e.Objects.subNodes.Geometry[r].attrType&&(this.geometries[r]=(new s).parse(e.Objects.subNodes.Geometry[r]),this.geometries[r].addBones(t.hierarchy));return this}}),s.prototype.parse=function(e){if(this.node=e,this.name=e.attrName,this.id=e.id,this.vertices=this.getVertices(),void 0===this.vertices)return void console.log("FBXLoader: Geometry.parse(): pass"+this.node.id);if(this.indices=this.getPolygonVertexIndices(),this.uvs=(new o).parse(this.node,this),this.normals=(new a).parse(this.node,this),this.materialIndices=(new h).parse(this.node),this.getPolygonTopologyMax()>3){var t=this.convertPolyIndicesToTri(this.indices,this.materialIndices,this.getPolygonTopologyArray());this.indices=t.res,this.materialIndices=t.materialIndices,this.polyIndices=t.polyIndices}return this},s.prototype.getVertices=function(){if(this.node.__cache_vertices)return this.node.__cache_vertices;if(void 0===this.node.subNodes.Vertices)return console.warn("this.node: "+this.node.attrName+"("+this.node.id+") does not have Vertices"),this.node.__cache_vertices=void 0,null;var e=this.node.subNodes.Vertices.properties.a,t=e.split(",").map(function(e){return parseFloat(e)});return this.node.__cache_vertices=t,this.node.__cache_vertices},s.prototype.getPolygonVertexIndices=function(){if(this.node.__cache_indices&&this.node.__cache_poly_topology_max)return this.node.__cache_indices;if(void 0===this.node.subNodes)return console.error("this.node.subNodes undefined"),void console.log(this.node);if(void 0===this.node.subNodes.PolygonVertexIndex)return console.warn("this.node: "+this.node.attrName+"("+this.node.id+") does not have PolygonVertexIndex "),void(this.node.__cache_indices=void 0);for(var e=this.node.subNodes.PolygonVertexIndex.properties.a,t=e.split(","),r=1,i=null,n=[],s=0;s<t.length;++s){var o=parseInt(t[s]);o<0?(r>i&&(i=r),t[s]=o^-1,n.push(r),r=1):(t[s]=o,r++)}return null===i&&(console.warn("FBXLoader: topology N not found: "+this.node.attrName),console.warn(this.node),i=3),this.node.__cache_poly_topology_max=i,this.node.__cache_poly_topology_arr=n,this.node.__cache_indices=t,this.node.__cache_indices},s.prototype.getPolygonTopologyMax=function(){return this.node.__cache_indices&&this.node.__cache_poly_topology_max?this.node.__cache_poly_topology_max:(this.getPolygonVertexIndices(this.node),this.node.__cache_poly_topology_max)},s.prototype.getPolygonTopologyArray=function(){return this.node.__cache_indices&&this.node.__cache_poly_topology_max?this.node.__cache_poly_topology_arr:(this.getPolygonVertexIndices(this.node),this.node.__cache_poly_topology_arr)},s.prototype.convertPolyIndicesToTri=function(e,t,r){for(var i=[],n=0,s=0,o=0,a=[];n<e.length;){o=r[s];for(var h=0;h<=o-3;h++)i.push(e[n]),i.push(e[n+(o-2-h)]),i.push(e[n+(o-1-h)]),a.push(s);s++,n+=o}var c=[t[0]];if(t.length>1)for(var n=0;n<a.length;++n)c[n]=t[a[n]];return{res:i,materialIndices:c,polyIndices:a}},s.prototype.addBones=function(e){this.bones=e},o.prototype.getUV=function(e){return this.node&&this.uv&&this.map&&this.ref?this.uv:this._parseText(e)},o.prototype.getMap=function(e){return this.node&&this.uv&&this.map&&this.ref?this.map:(this._parseText(e),this.map)},o.prototype.getRef=function(e){return this.node&&this.uv&&this.map&&this.ref?this.ref:(this._parseText(e),this.ref)},o.prototype.getIndex=function(e){return this.node&&this.uv&&this.map&&this.ref?this.index:(this._parseText(e),this.index)},o.prototype.getNode=function(e){return null!==this.node?this.node:(this.node=e.subNodes.LayerElementUV,this.node)},o.prototype._parseText=function(e){var t=this.getNode(e)[0];if(void 0===t)return[];var r=0;for(var i in t)i.match(/^\d+$/)&&r++;r>0&&(console.warn("multi uv not supported"),t=t[i]);var n=t.subNodes.UVIndex.properties.a,s=t.subNodes.UV.properties.a,o=t.properties.MappingInformationType,a=t.properties.ReferenceInformationType;return this.uv=E(s),this.index=N(n),this.map=o,this.ref=a,this.uv},o.prototype.parse=function(e,t){if("LayerElementUV"in e.subNodes){this.uvNode=this.getNode(e),this.uv=this.getUV(e);var r=this.getMap(e),i=this.getRef(e),n=this.getIndex(e),s=t.getPolygonTopologyArray();switch(r){case"ByPolygonVertex":switch(i){case"Direct":this.uv=this.parseUV_ByPolygonVertex_Direct(this.uv,n,s,2);break;case"IndexToDirect":this.uv=this.parseUV_ByPolygonVertex_IndexToDirect(this.uv,n)}this.uv=_(this.uv,t.getPolygonVertexIndices(e),2);break;case"ByPolygon":switch(i){case"Direct":this.uv=this.parseUV_ByPolygon_Direct();break;case"IndexToDirect":this.uv=this.parseUV_ByPolygon_IndexToDirect()}}return this.uv}},o.prototype.parseUV_ByPolygonVertex_Direct=function(e,t,r,i){return m(e,t,r,i)},o.prototype.parseUV_ByPolygonVertex_IndexToDirect=function(e,t){return y(e,t,2)},o.prototype.parseUV_ByPolygon_Direct=function(e){return console.warn("not implemented"),e},o.prototype.parseUV_ByPolygon_IndexToDirect=function(e){return console.warn("not implemented"),e},o.prototype.parseUV_ByVertex_Direct=function(e){return console.warn("not implemented"),e},a.prototype.getNormal=function(e){return this.node&&this.normal&&this.map&&this.ref?this.normal:(this._parseText(e),this.normal)},a.prototype.getMap=function(e){return this.node&&this.normal&&this.map&&this.ref?this.map:(this._parseText(e),this.map)},a.prototype.getRef=function(e){return this.node&&this.normal&&this.map&&this.ref?this.ref:(this._parseText(e),this.ref)},a.prototype.getNode=function(e){return this.node?this.node:(this.node=e.subNodes.LayerElementNormal,this.node)},a.prototype._parseText=function(e){var t=this.getNode(e)[0];if(void 0===t)return void console.warn("node: "+e.attrName+"("+e.id+") does not have LayerElementNormal");var r=t.properties.MappingInformationType,i=t.properties.ReferenceInformationType,n=t.subNodes.Normals.properties.a;this.normal=E(n),this.map=r,this.ref=i},a.prototype.parse=function(e,t){var r=this.getNormal(e),i=this.getMap(e),n=this.getRef(e),s=t.getPolygonVertexIndices(e),o=t.getPolygonTopologyArray(e);switch(i){case"ByPolygonVertex":switch(n){case"Direct":r=this.parseNormal_ByPolygonVertex_Direct(r,s,o,3);break;case"IndexToDirect":r=this.parseNormal_ByPolygonVertex_IndexToDirect()}break;case"ByPolygon":switch(n){case"Direct":r=this.parseNormal_ByPolygon_Direct();break;case"IndexToDirect":r=this.parseNormal_ByPolygon_IndexToDirect()}}return r},a.prototype.parseNormal_ByPolygonVertex_Direct=function(e,t,r,i){return m(e,t,r,i)},a.prototype.parseNormal_ByPolygonVertex_IndexToDirect=function(e){return console.warn("not implemented"),e},a.prototype.parseNormal_ByPolygon_Direct=function(e){return console.warn("not implemented"),e},a.prototype.parseNormal_ByPolygon_IndexToDirect=function(e){return console.warn("not implemented"),e},a.prototype.parseNormal_ByVertex_Direct=function(e){return console.warn("not implemented"),e},Object.assign(h.prototype,{parse:function(e){if("LayerElementMaterial"in e.subNodes){var t=e.subNodes.LayerElementMaterial[0],r=t.properties.MappingInformationType,i=t.properties.ReferenceInformationType,n=N(t.subNodes.Materials.properties.a);switch(r){case"ByPolygon":switch(i){case"IndexToDirect":this.indexBuffer=this.parse_ByPolygon_IndexToDirect(n);break;default:this.indexBuffer=[0]}break;default:this.indexBuffer=[0]}return this.indexBuffer}},parse_ByPolygon_IndexToDirect:function(e){return e}}),c.prototype.fromNode=function(e){return this.id=e.id,this.internalId=e.id,this.times=e.subNodes.KeyTime.properties.a,this.values=e.subNodes.KeyValueFloat.properties.a,this.attrFlag=e.subNodes.KeyAttrFlags.properties.a,this.attrData=e.subNodes.KeyAttrDataFloat.properties.a,this.times=E(this.times),this.values=E(this.values),this.attrData=E(this.attrData),this.attrFlag=N(this.attrFlag),this.times=this.times.map(function(e){return g(e)}),this},c.prototype.getLength=function(){return this.times[this.times.length-1]},u.prototype.fromNode=function(e,t,r){if(this.id=t.id,this.attr=t.attrName,this.internalId=t.id,!this.attr.match(/S|R|T/))return null;for(var i in t.properties)i.match(/X/)&&(this.attrX=!0),i.match(/Y/)&&(this.attrY=!0),i.match(/Z/)&&(this.attrZ=!0);this.containerIndices=e.searchConnectionParent(this.id),this.curveIdx=e.searchConnectionChildren(this.id);for(var n=this.containerIndices.length-1;n>=0;--n){var s=r.searchRealId(this.containerIndices[n]);if(s>=0&&(this.containerBoneId=s,this.containerId=this.containerIndices[n]),s>=0)break}return this},u.prototype.setCurve=function(e){this.curves.push(e)},p.prototype.parse=function(e,t){function r(e){function t(e){e.x&&(E=e.x.getLength()>E?e.x.getLength():E,I=e.x.times[0]<I?e.x.times[0]:I),e.y&&(E=e.y.getLength()>E?e.y.getLength():E,I=e.y.times[0]<I?e.y.times[0]:I),e.z&&(E=e.z.getLength()>E?e.z.getLength():E,I=e.z.times[0]<I?e.z.times[0]:I)}e.R&&t(e.R.curves),e.S&&t(e.S.curves),e.T&&t(e.T.curves)}var i=e.Objects.subNodes.AnimationCurveNode,n=e.Objects.subNodes.AnimationCurve,s=e.Objects.subNodes.AnimationLayer,o=e.Objects.subNodes.AnimationStack,a=[];for(var h in i)if(h.match(/\d+/)){var p=(new u).fromNode(e,i[h],t);a.push(p)}for(var l={},d=0;d<a.length;++d)null!==a[d]&&(l[a[d].id]=a[d]);var f=[];for(h in n)if(h.match(/\d+/)){var v=(new c).fromNode(n[h]);f.push(v);var y=e.searchConnectionParent(v.id)[0],m=e.searchConnectionType(v.id,y);if(m.match(/X/))m="x";else if(m.match(/Y/))m="y";else{if(!m.match(/Z/))continue;m="z"}l[y].curves[m]=v}for(var _ in l){var g=l[_].containerBoneId;void 0===this.curves[g]&&(this.curves[g]={T:null,R:null,S:null}),this.curves[g][l[_].attr]=l[_]}this.layers={};for(var h in s){for(var b=[],x=e.searchConnectionChildren(h),d=0;d<x.length;++d)l[x[d]]&&(void 0===b[l[x[d]].containerBoneId]&&(b[l[x[d]].containerBoneId]={T:null,R:null,S:null}),b[l[x[d]].containerBoneId][l[x[d]].attr]=l[x[d]]);this.layers[h]=b}this.stacks={};for(var h in o){for(var N=[],x=e.searchConnectionChildren(h),E=0,I=Number.MAX_VALUE,d=0;d<x.length;++d)if(x[d]in this.layers){N.push(this.layers[x[d]]);for(var T=0;T<this.layers[x[d]].length;++T){var b=this.layers[x[d]][T];b&&r(b)}}E>I&&(this.stacks[h]={name:o[h].attrName,layers:N,length:E-I,frames:30*(E-I)})}return this},l.prototype.add=function(e){void 0===this.textures&&(this.textures=[]),this.textures.push(e);for(var t=0;t<e.parentIds.length;++t)void 0===this.perGeoMap[e.parentIds[t]]&&(this.perGeoMap[e.parentIds[t]]=[]),this.perGeoMap[e.parentIds[t]].push(this.textures[this.textures.length-1])},l.prototype.parse=function(e){var t=e.Objects.subNodes.Texture;for(var r in t){var i=(new d).parse(t[r],e);this.textures[r]=i}return this},l.prototype.getById=function(e){return this.perGeoMap[e]},d.prototype.parse=function(e,t){return this.id=e.id,this.name=e.attrName,this.fileName=this.parseFileName(e.properties.FileName),this.parentIds=this.searchParents(this.id,t),this},d.prototype.parseFileName=function(e){if(void 0===e)return"";var t=e.split(/[\\\/]/);return t.length>0?t[t.length-1]:e},d.prototype.searchParents=function(e,t){var r=t.searchConnectionParent(e);return r},Object.assign(f.prototype,{parse:function(e){var t=e.Objects.subNodes.Material;for(var r in t){var i=(new v).parse(t[r],e);this.materials[r]=i}return this}}),Object.assign(v.prototype,{parse:function(e,t){return this.id=e.id,this.name=e.attrName,this.type=e.properties.ShadingModel,this.parameters=this.parseParameters(e.properties),this.parentIds=this.searchParents(this.id,t),this},parseParameters:function(e){var t={};return e.Diffuse&&(t.color=(new THREE.Color).fromArray([parseFloat(e.Diffuse.value.x),parseFloat(e.Diffuse.value.y),parseFloat(e.Diffuse.value.z)])),e.Specular&&(t.specular=(new THREE.Color).fromArray([parseFloat(e.Specular.value.x),parseFloat(e.Specular.value.y),parseFloat(e.Specular.value.z)])),e.Shininess&&(t.shininess=e.Shininess.value),e.Emissive&&(t.emissive=(new THREE.Color).fromArray([parseFloat(e.Emissive.value.x),parseFloat(e.Emissive.value.y),parseFloat(e.Emissive.value.z)])),e.EmissiveFactor&&(t.emissiveIntensity=e.EmissiveFactor.value),e.Reflectivity&&(t.reflectivity=e.Reflectivity.value),e.Opacity&&(t.opacity=e.Opacity.value),t.opacity<1&&(t.transparent=!0),t},searchParents:function(e,t){return t.searchConnectionParent(e)}})}();