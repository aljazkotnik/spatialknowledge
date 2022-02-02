import { svg2element } from "../helpers.js";

let template = `<circle r="5" fill="orange"></circle>`; // template

export default class MiniMapIcon{
    constructor(item){
		let obj = this;
		obj.item = item;
		obj.node = svg2element(template);
	} // constructor
	

	update(xscale, yscale){
		// The scales must be given from the parent, and the icon uses them to position itself.
		// The scales should incorporate both the panning and zooming adjustements needed.
		let obj = this;
		
		// Update the position of the circle with the center point of the DOM card.
		let itemClientRect = obj.item.node.getBoundingClientRect();
			
		let x = itemClientRect.left + itemClientRect.width/2;
		let y = itemClientRect.top + itemClientRect.height/2;
		
		obj.node.setAttribute("cx", xscale.dom2range( x ));
		obj.node.setAttribute("cy", yscale.dom2range( y ));
		
	} // update
} // MiniMapIcon