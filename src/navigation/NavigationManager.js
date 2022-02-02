import MiniMap from "./MiniMap.js";

/*
A drop in class that provides zooming, panning, minimap, and the tree hierarchy navigaton.
*/
export default class NavigationManager{
	
  items = []
	
  scale = 1;
  dx = 0;
  dy = 0;
	
  constructor(){
    let obj = this;
	
	
	obj.tabletop = document.getElementById("tabletop");
    obj.container = obj.tabletop.querySelector("div.scalingwrapper");
	
	// // Use transform: scale() to achieve the zoom in and out functionality, and transform: translate(xpx,ypx) for panning. First a default trnasform should be assigned.
	obj.container.style.transform = `scale(1) translate(0px,0px)`;
	

	
	
	// make a minimap and include the items on it.
	obj.minimap = new MiniMap();
	document.getElementById("minimap").appendChild(obj.minimap.node);
	

	

	// ZOOMING
	function zoom(event) {
	  event.preventDefault();

	  obj.scale += event.deltaY * -0.001;

	  // Restrict scale
	  obj.scale = Math.min(Math.max(.125, obj.scale), 4);

	  // Apply scale transform
	  obj.adjustview();
	}; // zoom
	
	obj.tabletop.onwheel = zoom;
	obj.minimap.viewrect.node.onwheel = zoom;
	obj.minimap.viewrect.reposition = function(){
		let offset = obj.minimap.getoffset();
		obj.dx = - offset[0] / obj.scale;
		obj.dy = - offset[1] / obj.scale;
		// No minimap update here!!
		obj.container.style.transform = obj.currenttransform();
	}; // reposition
	
	// Here the dragging doesn't move the item, but rather a different element.
	let active, origin, e0
		
	obj.tabletop.onmousedown = function(e){
	  console.log("onmousedown tabletop")
	  if(e.target == obj.tabletop){
		e.preventDefault();
		active = true;
		origin = {x: obj.dx, y: obj.dy};
		e0 = e;
	  } // if
	} // onmousedown
	
	obj.tabletop.onmousemove = function(e){
	  if(active){
		e.preventDefault();
		
		// The elements should move in hte dragged direction.
		obj.dx = origin.x + e.clientX - e0.clientX;
		obj.dy = origin.y + e.clientY - e0.clientY;
		
		// Move the items.
		obj.adjustview();
		
		
	  } // if
	} // mousemove
	obj.tabletop.onmouseup = function(){ active = false; } // onmouseup
	obj.tabletop.onmouseenter = function(){ active = false; } // onmouseenter
	obj.tabletop.onmouseleave = function(){ active = false; } // onmouseleave
	
	
	
	
  } // constructor
  
  
  adjustview(){
	let obj = this;
	// When the view is adjusted the items should also be told to check their sizes, and react is needed.
	obj.container.style.transform = obj.currenttransform();
	
	// Update the minimap
	obj.minimap.update();
  } // adjustview
  
  currenttransform(){
	let obj = this;
	return `scale(${obj.scale}) translate(${obj.dx}px,${obj.dy}px)`;
  }; // gettransform
  
  
  
} // NavigationManager


