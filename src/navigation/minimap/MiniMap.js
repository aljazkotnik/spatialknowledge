import { svg2element, scaleLinear, isWithinBoundingClientRect } from "../../helpers.js";
import MiniMapIcon from "./MiniMapIcon.js";
import MiniMapViewRect from "./MiniMapViewRect.js";
/*
The initial arrangement is not the problem of this module. This module just visualises the current arrangement, and allows global navigation.

The panning/zooming should be made available on hte background also.
*/
const template = `<svg style="border: 2px solid gainsboro; display: block;">
  <g class="icons"></g>
</svg>`; // template


// All the data should be on the minimap at all times, including any rearranged items. That means that the scale domain may have to be redone every time there is a rearrangement event.


export default class MiniMap{
	
	width = 300;
	height = 200;
	_icons = [];
	
	constructor(){
		let obj = this;
		
		obj.node = svg2element(template);
		obj.node.setAttribute("width", obj.width);
		obj.node.setAttribute("height", obj.height);
		
		
		// The rectangle should have the proportions of the screen.
		
		
		// Abstract the viewrect out??
		obj.viewrect = new MiniMapViewRect();
		obj.node.appendChild(obj.viewrect.node)
		
		// Scrolling is added to the the rect externally!
		
		// Create the scales to map the necessary range to the size of the svg.
		obj.xscale = new scaleLinear();
		obj.xscale.range = [0, obj.width];
		
		obj.yscale = new scaleLinear();
		obj.yscale.range = [0, obj.height];
		
		
		// Maybe it's just simpler to keep re-rendering the MiniMap? So the update doesn't have to be called everywhere?
		// Maybe not, because a lot of the time it's just the re-centering of hte data that is needed?
		
	} // constructor
	
	
	highlight(taskids){
		// Go through the icons and light up the ones with th eappropriate item.
		let obj = this;
		obj.icons.forEach(icon=>{
			// Some icons represent groups, which have multiple taskIds.
			if(icon.item.members){
				// This is a group - highlight it if any/all elements are part of it?
				let memberids = icon.item.members.map(memberitem=>memberitem.task.taskId);
				if(memberids.some(id=>taskids.includes(id))){
					icon.highlight();
				} // if
			} else {
				if(taskids.includes(icon.item.task.taskId)){
					icon.highlight();
				} // if
			} // if
			
		}) // forEach
	} // highlight
	
	unhighlight(){
		// Turn them all off.
		let obj = this;
		obj.icons.forEach(icon=>{
			icon.unhighlight();
		}) // forEach
	} // unhighlight
	
	
	// icons getter/setter - to dynamically filter out any group sthat are removed.
	set icons(ic){
		this._icons = ic;
	} // set icons
	
	get icons(){
		return this._icons.filter(icon=>{
			return icon.item.node.isConnected ? true : icon.node.remove();
		})
	} // get icons
	
	
	getoffset(){
	    let obj = this;
	    return [ obj.xscale.range2dom( obj.viewrect.node.getAttribute("x") ),
	             obj.yscale.range2dom( obj.viewrect.node.getAttribute("y") ) ];
	} // getoffset
	
	
	// The groups dynamically added to the workspace must also appear on the minimap.
	add(item){
		let obj = this;
		let icon = new MiniMapIcon(item);
		obj.node.querySelector("g.icons").appendChild(icon.node); 
		obj._icons.push(icon);
	} // add
	
	
	remove(item){
		let obj = this;
		// Remove the icon, and the underlying obj.
		let i = obj.icons.map(icon=>icon.item).indexOf(item);
		obj.icons[i].node.remove()
		obj.icons.splice(i, 1);
	} // remove
	
	
	// Update the circle representations.
	update(items){
		let obj = this;
		
		// If items have been given, then change the circles.
		if(items){
			items.forEach(item=>{
				obj.add(item);
			}); // forEach
		} // items
		
		
		// New items arrived, the square is resized, and the icons should be positioned. Make the items all fit within the square? Or just map the screen directly onto the minimap? Or just scale the square to what can be seen on the main screen?
		
		
		// Redraw minimap
		obj.centerdata();
		obj.viewrect.init(obj.xscale, obj.yscale);
		obj.render();
		 
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
		let r = obj.viewrect.node.getBoundingClientRect();
		
		// Redo the icons if they are active.
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