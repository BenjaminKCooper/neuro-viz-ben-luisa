function html2canvas(e){function t(e){function t(){if(o&&(o=!1,e.restore()),0!==n.length){for(var t=-(1/0),i=-(1/0),r=1/0,a=1/0,l=0;l<n.length;l++){var d=n[l];t=Math.max(t,d.x),i=Math.max(i,d.y),r=Math.min(r,d.x+d.width),a=Math.min(a,d.y+d.height)}e.save(),e.beginPath(),e.rect(t,i,r-t,a-i),e.clip(),o=!0}}var n=[],o=!1;return{add:function(e){n.push(e),t()},remove:function(){n.pop(),t()}}}function n(e,t,n,o){""!==o&&(d.font=e.fontSize+" "+e.fontFamily,d.textBaseline="top",d.fillStyle=e.color,d.fillText(o,t,n))}function o(e,t,n,o,i,r){var a=e[t+"Width"],l=e[t+"Style"],h=e[t+"Color"];"0px"!==a&&"none"!==l&&"transparent"!==h&&"rgba(0, 0, 0, 0)"!==h&&(d.strokeStyle=h,d.beginPath(),d.moveTo(n,o),d.lineTo(n+i,o+r),d.stroke())}function i(e,t){var l=0,c=0,f=0,g=0;if(3===e.nodeType){r.selectNode(e);var p=r.getBoundingClientRect();l=p.left-a.left-.5,c=p.top-a.top-.5,f=p.width,g=p.height,n(t,l,c,e.nodeValue.trim())}else{if("none"===e.style.display)return;var p=e.getBoundingClientRect();l=p.left-a.left-.5,c=p.top-a.top-.5,f=p.width,g=p.height,t=window.getComputedStyle(e);var u=t.backgroundColor;"transparent"!==u&&"rgba(0, 0, 0, 0)"!==u&&(d.fillStyle=u,d.fillRect(l,c,f,g)),o(t,"borderTop",l,c,f,0),o(t,"borderLeft",l,c,0,g),o(t,"borderBottom",l,c+g,f,0),o(t,"borderRight",l+f,c,0,g),"color"!==e.type&&"text"!==e.type||(h.add({x:l,y:c,width:f,height:g}),n(t,l+parseInt(t.paddingLeft),c+parseInt(t.paddingTop),e.value),h.remove())}var v="auto"===t.overflow||"hidden"===t.overflow;v&&h.add({x:l,y:c,width:f,height:g});for(var m=0;m<e.childNodes.length;m++)i(e.childNodes[m],t);v&&h.remove()}var r=document.createRange(),a=e.getBoundingClientRect(),l=document.createElement("canvas");l.width=a.width,l.height=a.height;var d=l.getContext("2d"),h=new t(d);return console.time("drawElement"),i(e),console.timeEnd("drawElement"),l}