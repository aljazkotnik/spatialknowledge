import { html2element } from "../helpers.js";
import Item from "./Item.js";


import TagForm from "../knowledge/tagging/TagForm.js";

/*
GROUPING: 
This item should be support use as a single object, as well as a group. The introduction of a new group, and what happens to the constituent Items is handled outside, so the Item only needs to identify whther it should present itself as a group, or as an individual item. That depends on the number of tasks that come in.

How will the data be managed for items in a group? If it follows the Item flow then it will try to load a rendering module, and push data to it, etc.

Is it still better, in the end, to have a separate group class that takes Items? Ah, but then it will have to either keep making them visible, or pass in the DOM to draw into anyway.

Have a library that holds all the files, and then distribute them out? The library is an added complication, and if it is the authority on the files it'll have to keep checking all the Items to see which ones still want to keep a copy. Furthermore, the library will have to be passed to the Items so that they can query it.

Just creating a new Item will require that the sam efiles be reloaded.

Maybe create a group item, but let it accept Items as the input?

Yes, make a Group class. That will have a viewnode. Then when the usermouses over an element just go to that elements geometry and set it as the group geometry. Then the rendering can be done into the new viewport.




Groups are always destroyed when something happens to them no? If they are entered they are destroyed, and they can only be exited through the tree? They can be disbanded otherwise.

But if you can only navigate out using the tree, then I have to first implement it.
But the temporary groups should be stored as well - just as the actual groups?


Maybe just create all the group items when the data arrives from the server, and store them?? Or create temporary annotations?

When should temporary groups be kept? When it's navigated out of? No, on all navigation tasks the group should be kept, but not otherwise!!


ENTER/DISSOLVE
Buttons should be added to allow the group to be entered or dissolved. maybe no button is needed to enter - a node should appear on the tree. So only dissolve.


RELATIVE POSITIONS:
It's advantageous to store the relative positions of the individual members. Instead of storing them explicitly the group can just store it's original position, and the individual members can just be hidden. When they are revealed again they can jut have their positions adjusted by the delta of the groups current position to the original position. The small multiples are therefore just unpiled in the new location.



SAVING:
There should be a local and global set of groups. That means that the user must explicitly save his group for it to be submitted to the server. This can be achieved with a tag input.


TODO - GROUP INTERACTIONS:
An initial lasso creates the group.
Adding items (add together, enter tags into form, and dump actual annotations):
  Dragging item over group
  Dragging group over group
  Lassoing group and items
  Lassoing groups

Removing items (remove, dump annotations alltogether):
  Long press on preview element?
Don't allow items to be removed when inside a group?

*/


let icontemplate = `<div class="previewicon"></div>`;

/* TODO: 


- entering - only through the navigation tree??

- dragging other items over it to add them
- lassoing items into existing group??
- in the commenting there should be a tag input with a save button
- the save button should also allow an annotation to be deleted by the author


*/


export default class Group extends Item {
	
  // Main viewport dimensions;
  width = 300;
  height = 200;
  
  icons = [];
  members = [];
  _current = undefined
  
  temporary = true;
	
  constructor(items, temporary){
	// `items' is an array of `Items' which should be grouped together. `temporary' is a flag that differentiates the groups created based on server served annotations or the users lasso operation.
	super();
    let obj = this;

	// The label should depcit the group name - where does that come from? Maybe it should just be passed in? Maybe as an array of all names for this group.
	let head = obj.node.querySelector("div.head")
	head.querySelector("span.label").innerHTML = "Group";
	
	let dissolvebutton = head.querySelector("span.dissolve");
	dissolvebutton.style.display = "";
	dissolvebutton.onmousedown = function(){
		// The main item checks if the event is a drag, and stops propagation if so. This happens `onmousedown', which is fired before it can become an `onclick' (which presumably includes the `onmouseup' also?)
		obj.dissolve();
	}; // onclick
	
	
	let enterbutton = head.querySelector("span.enter");
	enterbutton.style.display = "";
	enterbutton.onmousedown = function(){
		obj.enter();
	}; // onclick

	
	
	
	
	// Maybe just do it the other way around - set a temporary viewnode to the renderer, and allow it to use that?
	
	// Store the members. Has to be done after the renderer is established, as one of them will supersede its geometry.
	obj.current = items[0];
	
	
	items.forEach(item=>{
		obj.addmember(item);
	}) // map
	
	obj.temporary = temporary;
	
	
	
	
	
	
	
	// Add in a Commenting system also.
	let commentingnode = obj.node.querySelector("div.commenting");
	commentingnode.style.clear = "both";
	commentingnode.style.paddingTop = "5px";
	
	// The group should also have a chapter form so that tags for several items can be submitted at once. But no chapters!!!
	obj.tagform = new TagForm();	
	commentingnode.appendChild(obj.tagform.node);
	
	// Hide the time buttons.
	obj.tagform.node.querySelector("button.starttime").style.display = "none";
	obj.tagform.node.querySelector("i").style.display = "none";
	obj.tagform.node.querySelector("button.endtime").style.display = "none";
	
	
	// And now, when the button is clicked loop through the members and call their submit methods.
	obj.tagform.submit = function(tag){
		obj.members.forEach(member=>{
			member.commenting.TagForm.submit(tag);
		})
	} // submit
	
	
  } // constructor
  
  
  set current(item){
	let obj = this;
	
	
	// The first time there is no current node to return the renderer node.
	if(obj._current){
		obj._current.viewnode.appendChild(obj._current.renderer.node);
	} // if
	
	
	// Should I just try appending the whole renderer node?? But how to return it to its owner afterwards? Maybe here, before the current is swapped out?
	// Store the current item
	obj._current = item;
	obj.renderer = item.renderer;
	obj.viewnode.appendChild(item.renderer.node);
	
	
	
	
	
	
	// Size the view node to the appropriate size.
	// obj.viewnode.style.height = obj.renderer.view.style.height;
	// obj.viewnode.style.width = obj.renderer.view.style.width;
	
	// Itshould also have immitation controls no? These will have to be added here directly I think.
  } // set current
  
  
  get current(){
	return this._current;
  } // get current
  
  
  
  addmember(item){
	let obj = this;
	
	obj.members.push(item);
	
	function uncolorAllIcons(){
		// Control the preview appearance.
		obj.previewnode.querySelectorAll("div.previewicon").forEach(icon=>{
			icon.style.background = "gainsboro";
		}) // forEach
	} // coordinateIconColors
	
	  
	let iconobj = {
	  item: item,
	  node: html2element(icontemplate)
	}; // return
		
	// Give the correct initial color, and append it.
	item.hide();
	obj.previewnode.appendChild( iconobj.node );
		
		
	iconobj.node.onmouseenter = function(){
	  // Set current object - important for canvas rendering.
	  obj.current = iconobj.item;
			
	  // coordinate the colors.
	  uncolorAllIcons();
	  iconobj.node.style.background = "gray";
	} // onmouseenter
		
		
	// Long press release.
	var pressTimer;
	function releaseMember(){
	  obj.release(iconobj)
	} // releaseMember
		
	iconobj.node.onmouseup = function(){
	  clearTimeout(pressTimer);
	  // Clear timeout
	  return false;
	}; // onmouseup
		
	iconobj.node.onmousedown = function(){
	  // Set timeout
	  pressTimer = window.setTimeout(releaseMember, 1000);
	  return false; 
	}; // onmousedown
	
	obj.icons.push(iconobj);
	
	
	obj.temporary = true;
	  
  } // addmember
  
  
  release(iconobj){
	  // On release the item is placed back where it was collected! Maybe this is a good interaction??
	  let obj = this;
	  
	  
	  obj.icons.splice(obj.icons.indexOf(iconobj), 1);
	  obj.members.splice(obj.members.indexOf(iconobj.item), 1);
			
	  iconobj.node.remove();
	  iconobj.item.node.style.display = "";
	  
	  obj.current = obj.icons[0].item;
	  obj.icons[0].node.style.background = "gray";
	  
	  // The onmove method is already set to update the minimap - just reuse it.
	  obj.onmove();
	  
	  // Always when an item is released the group becomes temporary.
	  obj.temporary = true;
  } // release
  
  
  // Dummy method
  enter(){} // enter
  
  
  dissolve(){
	  let obj = this;
	  // How should this tell the NavigationManager that it should stop tracking it?
	  // Maybe just allow NavigationManager to filter out any empty groups whenever it tries to access them?
	  
	  // Just remove the node! Then where there is an update needed check if the node still exists? Also reinstate the previous items.
	  obj.node.remove();
	  
	  
	  // When the group is created the items remain at their locations, and are simply hidden. When the group is dissolved an offset is applied to account for th egroup moving. For items that are included individually by dragging and dropping.
	  obj._current.viewnode.appendChild(obj._current.renderer.node);
	  
	  let offset = [
	    obj.position[0] - obj.origin[0],
		obj.position[1] - obj.origin[1],
	  ]; // offset
	  
	  obj.members.forEach(item=>{
		  item.position = [
		    item.position[0] + offset[0],
		    item.position[1] + offset[1]
		  ]; // position
		  item.node.style.display = "";
	  }) // forEach
	  
	  obj.members = [];
	  
	  obj.ondissolve();
  } // dissolve
  
  
  // Dmmy method
  ondissolve(){} // ondissolve
  
  
  
  // Custom hide & show methods.
  show(){
	let obj = this;
	obj.members.forEach(item=>item.hide());
	obj.current = obj._current;
	obj.node.style.display = "";
  } // show
  
  
  hide(){
	let obj = this;
	obj._current.viewnode.appendChild(obj._current.renderer.node);
	obj.node.style.display = "none";
  } // hide
  
} // Group