import { svg2element, scaleLinear } from "../helpers.js";
import MiniMapIcon from "./MiniMapIcon.js";
import MiniMapViewRect from "./MiniMapViewRect.js";
/*
The initial arrangement is not the problem of this module. This module just visualises the current arrangement, and allows global navigation.

The panning/zooming should be made available on hte background also.
*/
const template = `<svg style="border: 2px solid black; display: block;">
  <g class="icons"></g>
</svg>`; // template


// All the data should be on the minimap at all times, including any rearranged items. That means that the scale domain may have to be redone every time there is a rearrangement event.


export default class MiniMap{
	
	width = 300;
	height = 200;
	icons = [];
	
	constructor(){
		let obj = this;
		
		obj.node = svg2element(template);
		obj.node.setAttribute("width", obj.width);
		obj.node.setAttribute("height", obj.height);
		
		
		// The rectangle should have the proportions of the screen.
		
		
		// Abstract the viewrect out??
		obj.viewrect = new MiniMapViewRect();
		obj.node.appendChild(obj.viewrect.node)
		
		
		
		
		
		
		// When the square moves the main view should be updated. How to do the update?
		// Should tehre be an offset applied? This doesn't seem neat
		// Should the items keep track of their coordinates and sizes in initial coordinates, which would then be converted to the browser coordinates depending on the view.
		// scrollLeft and scrollTop are bounded by 0 on each side, so the items can either be repositioned initially, or I keep track of the coordnates internally.
		
		// Then the position components need to be tracked independently, as they are changed through different interactions. So keep track of the initial position and size, and the user dragging offset separately.
		
		// The dragging just applies the offset from the original position to the current cursor position. Maybe instead of storing the components I can just transform back, and apply the new transform?
		
		
		
		// Add scrolling to the rect!
		
		// Create the scales to map the necessary range to the size of the svg.
		obj.xscale = new scaleLinear();
		obj.xscale.range = [0, obj.width];
		
		obj.yscale = new scaleLinear();
		obj.yscale.range = [0, obj.height];
		
	} // constructor
	
	getoffset(){
	    let obj = this;
	    return [obj.xscale.range2dom( obj.viewrect.node.getAttribute("x") ),
	            obj.yscale.range2dom( obj.viewrect.node.getAttribute("y") ) ];
	} // getoffset
	
	// Update the circle representations.
	update(items){
		let obj = this;
		
		// If items have been given, then change the circles.
		if(items){
			let container = obj.node.querySelector("g.icons");
			obj.icons = items.map(item=>{
				let icon = new MiniMapIcon(item);
				container.appendChild(icon.node);
				return icon;
			}) // map
		} // items
		
		
		// New items arrived, the square is resized, and the icons should be positioned. Make the items all fit within the square? Or just map the screen directly onto the minimap? Or just scale the square to what can be seen on the main screen?
		
		
		// Redraw minimap
		obj.centerdata();
		obj.viewrect.init(obj.xscale, obj.yscale);
		obj.render()
		 
	} // update
	
	
	centerdata(){
		let obj = this;
		
		// The minimap should show all the items at all times, thus the minimap domain needs to span all the positions of the items in both the x and y dimensions, while preserving AR=1. The data AR won't be the same as the minimap AR, and therefore the data domain is recalculated to fit into the minimap square.
		
		let domains = calculateInitialMinimapDomain(obj.icons.map(icon=>icon.item));
		
		// The maximum domain AR must be selected to accomodate all the data. Then the domains can be centered on hte minimap.
		let xdiff = domains.x[1] - domains.x[0];
		let ydiff = domains.y[1] - domains.y[0];
		let u = 1.1*Math.max( xdiff / obj.width, ydiff / obj.height )
		
		// Reset the scale domains to center the data.
		obj.xscale.domain = [domains.x[0] + xdiff/2 - u*obj.width/2, domains.x[0] + xdiff/2 + u*obj.width/2];
		obj.yscale.domain = [domains.y[0] + ydiff/2 - u*obj.height/2, domains.y[0] + ydiff/2 + u*obj.height/2];
		
	} // centerdata
	
	
	render(){
		// Redraw the minimap. Called after the user rearranges the items.
		let obj = this;
		
		// Resize the viewrect to the right aspect ratio and size.
		obj.viewrect.update(obj.xscale, obj.yscale);
		
		// Redo the icons.
		obj.icons.forEach(icon=>{
			icon.update(obj.xscale, obj.yscale);
		}) // forEach
	} // render
	
	
	
	
	
	
} // Minimap



function calculateInitialMinimapDomain(items){
	// The workspace and the minimap have no domain limitations, but the minimap should initially be scaled such that all the points are in view. When zooming the rectangle will then change size when scrolled.
	
	let bodyClientRect = document.body.getBoundingClientRect();
	
	return items.reduce((acc,item)=>{
		let itemClientRect = item.node.getBoundingClientRect();
		
		// Calculate the positions of hte icons based on the center of the item.
		let minx = itemClientRect.left - bodyClientRect.left;
		let maxx = itemClientRect.left - bodyClientRect.left + itemClientRect.width;
		 
		let miny = itemClientRect.top - bodyClientRect.top;
		let maxy = itemClientRect.top - bodyClientRect.top + itemClientRect.height;
		
		acc.x[0] = minx < acc.x[0] ? minx : acc.x[0];
		acc.x[1] = maxx > acc.x[1] ? maxx : acc.x[1];
		
		acc.y[0] = miny < acc.y[0] ? miny : acc.y[0];
		acc.y[1] = maxy > acc.y[1] ? maxy : acc.y[1];
		return acc
	}, {
		x: [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY], 
		y: [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]
	}) // reduce
} // calculateInitialMinimapDomain