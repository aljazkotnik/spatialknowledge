import { html2element } from "../helpers.js";

let template = `
<div class="item">
  <div class="head unselectable">
    <p class="label"></p>
	<span class="button dissolve" style="display: none;">✖</span>
	<span class="button enter" style="display: none;">⮊</span>
  </div>
  <div class="viewcontainer"></div>
  <div class="preview"></div>
  <div class="commenting"></div>
</div>
`;

/*
`Item' is a basis for individual small multiples as well as groups. It implements the node creation and appends dragging.

Scaling: the container is transformed to include zooming/panning. When the zoom happens the items are prompted to check whether they are still large enough to draw the data.
*/
export default class Item{
	
  // Main viewport dimensions;
  width = 300;
  height = 200;
	
  constructor(){
	let obj = this;
	  
	
	obj.node = html2element(template);
	obj.node.style.position = "absolute";
	  
	obj.viewnode = obj.node.querySelector("div.viewcontainer");
	// obj.viewnode.style.height = obj.height + "px";
	// obj.viewnode.style.width = obj.width + "px";
	  
	obj.previewnode = obj.node.querySelector("div.preview");
	// obj.previewnode.style.maxWidth = obj.width + "px";
	
	// Add the dragging in here. The dragging is supposed to be in a scaled, and potentially tranlated div, so the offset to the div needs to be removed.
	let active = false;
	let itemStartPosition = [0,0];
	let itemRelativePosition = [0, 0];
		
		
	// The `e.target == obj.node' prevents any events on the children elements to bubble up. This require the title width to be 0, and it prevented from a button being positioned to the right. 
	// `obj.node.contains(e.target)' allows any children to launch the dragging, but this will interfere with the panning and zooming in the viewport div.
	// Maybe any child that is contained by obj.node. but not the viewport node?
	obj.node.onmousedown = function(e){
	  if(obj.node.contains(e.target) && !obj.viewnode.contains(e.target) && obj.node.isConnected){
		// e.preventDefault();
		let rect = obj.node.getBoundingClientRect();
		
		active = true;
		itemStartPosition = obj.position;
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
		
		obj.position = [x/k, y/k];
		
		obj.onmove();
	  } // if
	} // mousemove
	obj.node.onmouseup = function(){ 
	  if(active){
		  obj.onend(itemStartPosition);
	  } // if
	  active = false;
	} // onmouseup
	obj.node.onmouseenter = function(){ active = false; } // onmouseenter
	obj.node.onmouseleave = function(){ active = false; } // onmouseleave
  } // constructor
  
  
  // Generic hide, show, and position methods.
  show(){
	let obj = this;
	obj.node.style.display = "";
  } // show
  
  hide(){
	let obj = this;
	obj.node.style.display = "none";
  } // hide
  
  set position(point){
	let obj = this;
	obj.node.style.left = point[0] + "px";
	obj.node.style.top  = point[1] + "px";
  } // set position
  
  get position(){
	  let obj = this;
	  return [
	    parseFloat(obj.node.style.left),
		parseFloat(obj.node.style.top)
	  ]
  } // get position
  
  // superclass method defined in the subclasses.
  checksize(){} // checksize
  
  
  // Dummy method. Superset in NavigationManager to trigger the minimap update.
  onmove(){} // onmove
  
  // Dummy method. Superset in Navigationmanager.track to allow adding to groups.
  onend(){} // onend
  
  
  isonscreen(){
	let obj = this;
	// Check if any part of the item is on-screen. Or should there be a tolerance of a few pixels?
	let rect = obj.node.getBoundingClientRect();
	
	// East, West, North, South
	let outside = (rect.x > window.innerWidth) || 
	              (rect.x + rect.width < 0) || 
				  (rect.y + rect.height < 0) || 
				  (rect.y > window.innerHeight);
	
	return !outside && obj.node.style.display != "none";
  } // isonscreen
  
} // Item