import {html2element} from "../../helpers.js";

// A custom select menu to facilitate correlation selection in menus.

let css = {
	menu: `
	  background-color: white;
	  border: 2px solid black;
	  border-radius: 5px;
	  display: none; 
	  position: absolute;
	  max-height: 120px;
	  overflow-y: auto;
	`,
	
	ul: `
	  list-style-type: none;
	  font-size: 10px;
	  font-weight: bold;
	  padding-left: 4px;
	  padding-right: 4px;
	`
}; // css



let template = `
<div class="variable-select-menu" style="${ css.menu }">
  <ul style="${ css.ul }">
  </ul>
</div>
`;


// Differentite between an x and a y one.

export default class CorrelationsMenu{
	
	constructor(axis){
		let obj = this;
		obj.node = html2element(template);
		
		// axis = 0/1 for x/y
		obj.axis = axis;
	} // constructor
	
	
	// Just update with variables here? No, but update with CORRELATIONS!!!!
	update(correlations){
		let obj = this;
		
		// First remove all li.
		let ul = obj.node.querySelector("ul");
		while (ul.lastChild) {
			ul.removeChild(ul.lastChild);
		} // while
		
		
		// Now add in the needed li objects.
		correlations.forEach(c=>{
			let sign = c[obj.axis] > 0 ? "+" : "-"
			let li = html2element( `<li class="hover-highlight">${sign} ${c.name}</li>` );
			ul.appendChild(li);
			
			
			// Color it.
			li.style.backgroundColor = green( Math.abs(c[obj.axis]) );
			
			// On click the menu should updat ethe current selection, close itself, and launch the appropriate effect.
			li.addEventListener("click", event=>{
				// If event propagation is stopped here then additional functionality can't be attached to the menu.
				obj.current = c.name;
				obj.hide();
				
				obj.onvariableselect(c);
			}) // addEventListener
		})
	} // update
	
	
	toggle(correlations, p){
		let obj = this;
		
		if(obj.node.style.display=="none"){
			obj.update(correlations);
			
			if(obj.axis==0){
				obj.node.style.left = p[0] + "px";
				obj.node.style.bottom = p[1] + "px";
			} else {
				obj.position(p);
			} // if
			
			obj.show();
		} else {
			obj.hide();
		} // if
		
	} // toggle
	
	
	position(p){
		let obj = this;
		obj.node.style.left = p[0] + "px";
		obj.node.style.top = p[1] + "px";
	} // position
	
	show(){
		let obj = this;
		obj.node.style.display = "inline-block";
	} // show
	
	hide(){
		let obj = this;
		obj.node.style.display = "none";
	} // hide
	
	// dummy method.
	onvariableselect(variable){}
	
} // CorrelationsMenu




function green(t){
	// t should be between 0 and 1.
	t = t > 1 ? 1 : t;
	t = t < 0 ? 0 : t;
	
	let r = Math.round( 247/2*(Math.cos(t*Math.PI)+1) );
	let g = Math.round( 252*(Math.cos(t*2/5*Math.PI)) );
	let b = Math.round( 245-(245-28)*t );
	
	return `rgb(${r},${g},${b})`
} // green

