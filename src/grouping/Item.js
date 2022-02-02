import { html2element } from "../helpers.js";

// What happens if we add a wrapper, so that the wrapper is positioned, but the div is scaled?
let template = `
<div class="item">
  <div class="label unselectable">Label</div>
  <div class="view">
  </div>
</div>
`;

// This item should be support use as a single object, as well as a group. Just depends on the tasks coming in.

// The Item will have to be scalable!!
export default class Item{
	
  // Main viewport dimensions;
  width = 300;
  height = 200;
	
  constructor(task){
	let obj = this;
	  
	obj.task = task;
	obj.node = html2element(template);
	  
	obj.viewnode = obj.node.querySelector("div.view");
	obj.viewnode.style.height = obj.height + "px";
	obj.viewnode.style.width = obj.width + "px";
	  
	  
	obj.node.querySelector("div.label").innerHTML = task.taskId;
	  
	
	// Add the dragging in here. The dragging is supposed to be in a scaled, and potentially tranlated div, so the offset to the div needs to be removed.
	let active = false;
	let itemRelativePosition = [0, 0];
		
	obj.node.onmousedown = function(e){
	  if(e.target == obj.node){
		e.preventDefault();
		let rect = obj.node.getBoundingClientRect();
		
		active = true;
		itemRelativePosition = [
		  e.clientX - rect.x,
		  e.clientY - rect.y
		];
		
		// Also move the viewFrame div up so that dragging over otehr higher divs is uninterrupted.
		obj.node.parentNode.insertBefore(obj.node, null);
	  } // if
	} // onmousedown
	obj.node.onmousemove = function(e){
	  if(active){
		e.preventDefault();
		
		// The parent may be rescaled, retrieve and collect the k from it.
		let p = obj.node.parentElement;
		let k = Number( p.style.transform.split(" ")[0].replace(/^\D+|\D+$/g, "") );
		let parentRect = p.getBoundingClientRect();
		
		let x = e.pageX - parentRect.x - itemRelativePosition[0];
		let y = e.pageY - parentRect.y - itemRelativePosition[1];
				
		obj.node.style.left = x/k + "px";
		obj.node.style.top  = y/k + "px";
		
		obj.onmove();
	  } // if
	} // mousemove
	obj.node.onmouseup = function(){ active = false; } // onmouseup
	obj.node.onmouseenter = function(){ active = false; } // onmouseenter
	obj.node.onmouseleave = function(){ active = false; } // onmouseleave
  } // constructor
  
  // Dummy method that evaluates when the item is being repositioned.
  onmove(){} // onmove
  
} // Item