import MiniMap from "./MiniMap.js";
import Lasso from "./Lasso.js";
import Group from "../grouping/Group.js";
/*
A drop in class that provides zooming, panning, minimap, and the tree hierarchy navigaton.
*/
export default class NavigationManager{
	
  items = []
  groups = []
	
  scale = 1;
  dx = 0;
  dy = 0;
	
  constructor(){
    let obj = this;
	
	
	obj.tabletop = document.getElementById("tabletop");
    obj.container = obj.tabletop.querySelector("div.scalingwrapper");
	obj.sketchpad = document.getElementById("sketchpad");
	
	// Use transform: scale() to achieve the zoom in and out functionality, and transform: translate(xpx,ypx) for panning. First a default trnasform should be assigned.
	obj.container.style.transform = `scale(1) translate(0px,0px)`;
	

	// ZOOMING
	function zoom(event) {
	  event.preventDefault();

	  obj.scale += event.deltaY * -0.001;

	  // Restrict scale
	  obj.scale = Math.min(Math.max(.125, obj.scale), 4);

	  // Apply scale transform
	  obj.adjustview();
	}; // zoom
	
	
	
	// MINIMAP
	obj.minimap = new MiniMap();
	document.getElementById("minimap").appendChild(obj.minimap.node);
	
	obj.minimap.viewrect.node.onwheel = zoom;
	obj.minimap.viewrect.reposition = function(){
		let offset = obj.minimap.getoffset();
		obj.dx = - offset[0] / obj.scale;
		obj.dy = - offset[1] / obj.scale;
		// No minimap update here!!
		obj.container.style.transform = obj.currenttransform();
	}; // reposition
	
	
	// LASSO 
	// Originally the lasso produced a tooltip, with the options: group, tag, close. Some of the tagging is now done through the commenting system. The lasso can still highlight the selection, and the interface based option for spatial value tags can be used for the tagging. Should that just be a menu on the right?
	obj.lasso = new Lasso(obj.sketchpad);
	
	function findItemsInLasso(items){
		
		let selected = items.reduce((acc, item)=>{
			let itemrect = item.node.getBoundingClientRect();
			let miditem = {
				x: itemrect.x + itemrect.width/2, 
				y: itemrect.y + itemrect.height/2
			};
			if(item.node.style.display != "none" && obj.lasso.isPointInside(miditem)){
				acc.push(item);
			}; // if
			return acc;
		}, [])
		
		return selected; 
	} // findItemsInLasso
	
	
	obj.lasso.onend = function(){
		// Only visible items should be selectable!!
		
		let selectedIndividuals = findItemsInLasso( obj.items );
		// let selectedGroups = findItemsInLasso( obj.groups );
		
		if(selectedIndividuals.length > 1){
			// Groups are only kept on navigation events. Here all the groups are destroyed, and the members are recombined into a new group.
			
			// Or should a supergroup be created whenever multiple groups are selected? Maybe that makes more sense? How to store local groups?
			obj.makegroup(selectedIndividuals);
			obj.minimap.update();
		} // if
	} // lasso.onend
	
	
	// The navigation based on hte tabletop. Here the dragging doesn't move the item, but rather a different element. Furthermore, the type of button click should launch a different event.
	obj.tabletop.onwheel = zoom;
	
	let active, origin, e0;
	obj.tabletop.onmousedown = function(e){
	  if(e.target == obj.tabletop){
		switch(e.which){
			case 1:
			  // Left mouse click - panning.
			  e.preventDefault();
			  active = true;
			  origin = {x: obj.dx, y: obj.dy};
			  e0 = e;
			  break;
			case 2:
			  // Middle mouse click - lasso.
			  obj.sketchpad.style.zIndex = 1000;
			  obj.lasso.clearBoundary();
			  obj.lasso.active = true;
			  break;
		} // switch
		
	  } // if
	} // onmousedown
	
	obj.tabletop.onmousemove = function(e){
	  if(active){
		e.preventDefault();
		
		// The elements should move in hte dragged direction.
		obj.dx = origin.x + ( e.clientX - e0.clientX )/obj.scale;
		obj.dy = origin.y + ( e.clientY - e0.clientY )/obj.scale;
		
		// Move the items.
		obj.adjustview();
	  } // if
	} // mousemove
	obj.tabletop.onmouseup = function(){ active = false; } // onmouseup
	obj.tabletop.onmouseenter = function(){ active = false; } // onmouseenter
	obj.tabletop.onmouseleave = function(){ active = false; } // onmouseleave
	
	
	
	
  } // constructor
  
  
  
  // Getter and setter for groups to allow inactive groups to be filtered out.
  
  
  
  track(item){
	let obj = this;
	
	obj.container.appendChild(item.node);
	
	item.onmove = function(){
		// Check if it should be added to a group.
		
		
		// Update the minimap accordingly?
		obj.minimap.update();
	} // onmove
	
	obj.items.push(item);
  } // additem
  
  
  adjustview(){
	let obj = this;
	// When the view is adjusted the items should also be told to check their sizes, and react is needed.
	obj.container.style.transform = obj.currenttransform();
	
	// Update the minimap
	obj.minimap.update();
	
	// Instruct all the items to check their size.
	obj.items.forEach(item=>{
		item.checksize();
	}) // forEach
  } // adjustview
  
  currenttransform(){
	let obj = this;
	return `scale(${obj.scale}) translate(${obj.dx}px,${obj.dy}px)`;
  }; // gettransform
  
  
  
  
  
  
  /* GROUPING
  How to handle the grouping?
  
  The server pushes an array of `knowledge'. Each row of the array will be a separate annotation? And then the different attributes it will have will make it a different type? The server could be asked to send specific types of annotations over, and the local version would just keep them.
  
  For comments the server sent everything originally, and then individual ones separately. The same could be applied here also. So maybe everything with a valid `tags' could be sent over first, and then the comments etc. would be sent when the corresponding commenting section is open? In any case the knowledge manager will have to keep tabs on all the individual annotations, to be able to replace them with updated versions as they arrive. How would the SQL database be updated with a newer version of the same row? With the UPDATE statement!
  
  
  How should the annotations be stored, just in an array, or in the actual items. Maybe both?
  
  
  Everything with `tags' can be fed to the tree. The groups should be tracked as unsubmitted annoations also. What kind of tags should they be given? Unsaved1 etc?
  
  
  
  The temporary groups can just be kept as groups, and the knowldge manager will just update when groups are expanded? Then the groups made through the tree should not be entered into the obj.groups array. No removal of annotations!!
  
  How should the groups be saved! Should there just be an annotation form at the bottom, that will allow the user to submit a tag? How should the groups with several tags display these? Just above the annotation form? Yes, there they also form a basis for the conversation topics! To supplement the tags they could have a draw icon next to them that allows
  
  
  How to get rid of unnecessary groups once the user dissolves them?? Need to distinguish these groups from the ones that are just navigated away from. And when a tree node is clicked it will have to keep track of the temporary groups also!
  
  The tree needs to correctly position the temporary group also. How should it do this?
  
  */
  
  /*
  get groups(){
	  // Filter out any groups
	  let obj = this;
	  obj._groups = obj._groups.filter(g=>{
		  return g.
	  })
  } // set
  */

  makegroup(items){
    let obj = this;
	
	// Collect the midpoint of the selected items to position the group.
	let p = [0, 0];
	items.forEach(item=>{
		p[0] += parseFloat(item.node.style.left) / items.length;
		p[1] += parseFloat(item.node.style.top) / items.length;
		item.hide();
	}) // forEach
	
	let g = new Group(items);
	obj.groups.push(g);
	
	g.position = p;
	g.origin = p;
	
	
	obj.container.appendChild(g.node);
	obj.minimap.add(g);
	g.onmove = function(){
		obj.minimap.update();
	} // onmove
	
	
  } // makegroup

  
  
  
} // NavigationManager







