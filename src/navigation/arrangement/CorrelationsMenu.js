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
	
	constructor(variables){
		let obj = this;
		obj.node = html2element(template);
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
			let t = `<li class="hover-highlight">${c.name}</li>`;
			let li = html2element(t);
			ul.appendChild(li);
			
			
			// On click the menu should updat ethe current selection, close itself, and launch the appropriate effect.
			li.addEventListener("click", event=>{
				// If event propagation is stopped here then additional functionality can't be attached to the menu.
				obj.current = variable;
				obj.hide();
			}) // addEventListener
		})
	} // update
	
	
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
	
} // CorrelationsMenu




