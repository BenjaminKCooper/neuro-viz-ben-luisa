var Player=function(e){var t=e.signals,n=new UI.Panel;n.setId("player"),n.setPosition("absolute"),n.setDisplay("none");var i=new APP.Player;return n.dom.appendChild(i.dom),window.addEventListener("resize",function(){i.setSize(n.dom.clientWidth,n.dom.clientHeight)}),t.startPlayer.add(function(){n.setDisplay(""),i.load(e.toJSON()),i.setSize(n.dom.clientWidth,n.dom.clientHeight),i.play()}),t.stopPlayer.add(function(){n.setDisplay("none"),i.stop(),i.dispose()}),n};