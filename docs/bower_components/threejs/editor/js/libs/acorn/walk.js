!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(n.acorn||(n.acorn={})).walk=e()}}(function(){return function e(n,t,r){function o(s,a){if(!t[s]){if(!n[s]){var f="function"==typeof require&&require;if(!a&&f)return f(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};n[s][0].call(c.exports,function(e){var t=n[s][1][e];return o(t?t:e)},c,c.exports,e,n,t,r)}return t[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,n,t){"use strict";function r(e,n,r,o){r||(r=t.base),function e(t,o,i){var s=i||t.type,a=n[s];r[s](t,o,e),a&&a(t,o)}(e,o)}function o(e,n,r,o){r||(r=t.base),o||(o=[]),function e(t,o,i){var s=i||t.type,a=n[s];t!=o[o.length-1]&&(o=o.slice(),o.push(t)),r[s](t,o,e),a&&a(t,o)}(e,o)}function i(e,n,r,o){var i=r?t.make(r,o):o;!function e(n,t,r){i[r||n.type](n,t,e)}(e,n)}function s(e){return"string"==typeof e?function(n){return n==e}:e?e:function(){return!0}}function a(e,n,r,o,i,a){o=s(o),i||(i=t.base);try{!function e(t,s,a){var f=a||t.type;if((null==n||t.start<=n)&&(null==r||t.end>=r)&&i[f](t,s,e),o(f,t)&&(null==n||t.start==n)&&(null==r||t.end==r))throw new x(t,s)}(e,a)}catch(e){if(e instanceof x)return e;throw e}}function f(e,n,r,o,i){r=s(r),o||(o=t.base);try{!function e(t,i,s){var a=s||t.type;if(!(t.start>n||t.end<n)&&(o[a](t,i,e),r(a,t)))throw new x(t,i)}(e,i)}catch(e){if(e instanceof x)return e;throw e}}function u(e,n,r,o,i){r=s(r),o||(o=t.base);try{!function e(t,i,s){if(!(t.end<n)){var a=s||t.type;if(t.start>=n&&r(a,t))throw new x(t,i);o[a](t,i,e)}}(e,i)}catch(e){if(e instanceof x)return e;throw e}}function c(e,n,r,o,i){r=s(r),o||(o=t.base);var a=void 0;return function e(t,i,s){if(!(t.start>n)){var f=s||t.type;t.end<=n&&(!a||a.node.end<t.end)&&r(f,t)&&(a=new x(t,i)),o[f](t,i,e)}}(e,i),a}function p(e,n){n||(n=t.base);var r={};for(var o in n)r[o]=n[o];for(var o in e)r[o]=e[o];return r}function l(e,n,t){t(e,n)}function d(e,n,t){}var m=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")};t.simple=r,t.ancestor=o,t.recursive=i,t.findNodeAt=a,t.findNodeAround=f,t.findNodeAfter=u,t.findNodeBefore=c,t.make=p,Object.defineProperty(t,"__esModule",{value:!0});var x=function e(n,t){m(this,e),this.node=n,this.state=t},E={};t.base=E,E.Program=E.BlockStatement=function(e,n,t){for(var r=0;r<e.body.length;++r)t(e.body[r],n,"Statement")},E.Statement=l,E.EmptyStatement=d,E.ExpressionStatement=E.ParenthesizedExpression=function(e,n,t){return t(e.expression,n,"Expression")},E.IfStatement=function(e,n,t){t(e.test,n,"Expression"),t(e.consequent,n,"Statement"),e.alternate&&t(e.alternate,n,"Statement")},E.LabeledStatement=function(e,n,t){return t(e.body,n,"Statement")},E.BreakStatement=E.ContinueStatement=d,E.WithStatement=function(e,n,t){t(e.object,n,"Expression"),t(e.body,n,"Statement")},E.SwitchStatement=function(e,n,t){t(e.discriminant,n,"Expression");for(var r=0;r<e.cases.length;++r){var o=e.cases[r];o.test&&t(o.test,n,"Expression");for(var i=0;i<o.consequent.length;++i)t(o.consequent[i],n,"Statement")}},E.ReturnStatement=E.YieldExpression=function(e,n,t){e.argument&&t(e.argument,n,"Expression")},E.ThrowStatement=E.SpreadElement=E.RestElement=function(e,n,t){return t(e.argument,n,"Expression")},E.TryStatement=function(e,n,t){t(e.block,n,"Statement"),e.handler&&t(e.handler.body,n,"ScopeBody"),e.finalizer&&t(e.finalizer,n,"Statement")},E.WhileStatement=E.DoWhileStatement=function(e,n,t){t(e.test,n,"Expression"),t(e.body,n,"Statement")},E.ForStatement=function(e,n,t){e.init&&t(e.init,n,"ForInit"),e.test&&t(e.test,n,"Expression"),e.update&&t(e.update,n,"Expression"),t(e.body,n,"Statement")},E.ForInStatement=E.ForOfStatement=function(e,n,t){t(e.left,n,"ForInit"),t(e.right,n,"Expression"),t(e.body,n,"Statement")},E.ForInit=function(e,n,t){"VariableDeclaration"==e.type?t(e,n):t(e,n,"Expression")},E.DebuggerStatement=d,E.FunctionDeclaration=function(e,n,t){return t(e,n,"Function")},E.VariableDeclaration=function(e,n,t){for(var r=0;r<e.declarations.length;++r){var o=e.declarations[r];o.init&&t(o.init,n,"Expression")}},E.Function=function(e,n,t){return t(e.body,n,"ScopeBody")},E.ScopeBody=function(e,n,t){return t(e,n,"Statement")},E.Expression=l,E.ThisExpression=E.Super=E.MetaProperty=d,E.ArrayExpression=E.ArrayPattern=function(e,n,t){for(var r=0;r<e.elements.length;++r){var o=e.elements[r];o&&t(o,n,"Expression")}},E.ObjectExpression=E.ObjectPattern=function(e,n,t){for(var r=0;r<e.properties.length;++r)t(e.properties[r],n)},E.FunctionExpression=E.ArrowFunctionExpression=E.FunctionDeclaration,E.SequenceExpression=E.TemplateLiteral=function(e,n,t){for(var r=0;r<e.expressions.length;++r)t(e.expressions[r],n,"Expression")},E.UnaryExpression=E.UpdateExpression=function(e,n,t){t(e.argument,n,"Expression")},E.BinaryExpression=E.AssignmentExpression=E.AssignmentPattern=E.LogicalExpression=function(e,n,t){t(e.left,n,"Expression"),t(e.right,n,"Expression")},E.ConditionalExpression=function(e,n,t){t(e.test,n,"Expression"),t(e.consequent,n,"Expression"),t(e.alternate,n,"Expression")},E.NewExpression=E.CallExpression=function(e,n,t){if(t(e.callee,n,"Expression"),e.arguments)for(var r=0;r<e.arguments.length;++r)t(e.arguments[r],n,"Expression")},E.MemberExpression=function(e,n,t){t(e.object,n,"Expression"),e.computed&&t(e.property,n,"Expression")},E.ExportDeclaration=function(e,n,t){return t(e.declaration,n)},E.ImportDeclaration=function(e,n,t){for(var r=0;r<e.specifiers.length;r++)t(e.specifiers[r],n)},E.ImportSpecifier=E.ImportBatchSpecifier=E.Identifier=E.Literal=d,E.TaggedTemplateExpression=function(e,n,t){t(e.tag,n,"Expression"),t(e.quasi,n)},E.ClassDeclaration=E.ClassExpression=function(e,n,t){e.superClass&&t(e.superClass,n,"Expression");for(var r=0;r<e.body.body.length;r++)t(e.body.body[r],n)},E.MethodDefinition=E.Property=function(e,n,t){e.computed&&t(e.key,n,"Expression"),t(e.value,n,"Expression")},E.ComprehensionExpression=function(e,n,t){for(var r=0;r<e.blocks.length;r++)t(e.blocks[r].right,n,"Expression");t(e.body,n,"Expression")}},{}]},{},[1])(1)});