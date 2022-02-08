import { svg2element, isWithinBoundingClientRect } from "../../helpers.js";

let template = `<rect class="current" x="50" y="10" width="150" height="50" fill="black" opacity="0.5"></rect>`

export default class MiniMapViewRect{
	
	constructor(){
		let obj = this;
		
		obj.node = svg2element(template);
		
		
		// Make it draggable.
		let active, clickedItemOffset;
	
	
		obj.node.onmousedown = function(e){
			active = true;
			
			// Correcting for clicked position within item.
			let itemClientRect = obj.node.getBoundingClientRect();
			clickedItemOffset = {
				x: itemClientRect.x - e.clientX,
				y: itemClientRect.y - e.clientY
			} // clickedItemOffset
		} // onmousedown
		obj.node.onmousemove = function(e){
			if(active){
				// Convert the mouse position into the position within the parent SVG. ASSUME that the parent element is the SVG.
				let svgClientRect = obj.node.parentElement.getBoundingClientRect();
				
				// Check if the mouse left the svg.
				
				if(isWithinBoundingClientRect({x: e.clientX, y: e.clientY}, svgClientRect)){
					let x = e.clientX - svgClientRect.x + clickedItemOffset.x;
					let y = e.clientY - svgClientRect.y + clickedItemOffset.y;
					
					obj.node.setAttribute("x", x);
					obj.node.setAttribute("y", y);
					
					// Now all the DOM items should be moved.
					obj.reposition();
				} else {
					active = false;
				} // if
				
			} // if
		} // mousemove
		obj.node.onmouseup   = function(){
			active = false;
		} // onmouseup
		
		
	} // constructor
	
	
	init(xscale, yscale){
		let obj = this;
		// Reposition the viewrect back to the origin.
		obj.node.setAttribute("x",  xscale.dom2range(0) );
		obj.node.setAttribute("y",  yscale.dom2range(0) );
	} // init
	
	
	// The data to position the icons comes from boundingClientRect, which is the positions on hte screen. In that case
	update(xscale, yscale){
		let obj = this;
		
		// The viewrect represents the window.
		let width = xscale.dom2range(window.innerWidth) - xscale.dom2range(0);
		let height = yscale.dom2range(window.innerHeight) - yscale.dom2range(0);
		
		obj.node.setAttribute("width",  width )
		obj.node.setAttribute("height", height )
	} // update
	
	// Dummy function that gets changed by the minimap;
	reposition(){} // reposition
	
} // MiniMapViewRect