import SpatialCorrelations from "./arrangement/SpatialCorrelations.js";
import TreeKnowledge from "./tree/TreeKnowledge.js";
import MiniMap from "./minimap/MiniMap.js";
import Lasso from "./lasso/Lasso.js";
import Group from "../grouping/Group.js";
/*
A drop in class that provides zooming, panning, minimap, and the tree hierarchy navigaton.
*/
export default class NavigationManager{
	
  items = []
  _temporarygroups = []
	
  scale = 1;
  dx = 0;
  dy = 0;
	
  constructor(){
    let obj = this;
	
	
	obj.tabletop = document.getElementById("tabletop");
    obj.container = obj.tabletop.querySelector("div.scalingwrapper");
	obj.sketchpad = document.getElementById("sketchpad");
	// obj.hudsvg = document.getElementById("hudsvg");
	
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
		if(selectedIndividuals.length > 1){
			obj.maketemporarygroup(selectedIndividuals);
		} // if
	} // lasso.onend
	
	
	// TABLETOP NAVIGATION
	// The navigation based on hte tabletop. Here the dragging doesn't move the item, but rather a different element. Furthermore, the type of button click should launch a different event.
	obj.tabletop.onwheel = zoom;
	
	let active, origin, e0;
	obj.tabletop.onmousedown = function(e){
	  // Maybe the target event could be logged on the svg?? And then passed up as necessary?
	  if(e.target == obj.tabletop || e.target == obj.sketchpad){
		switch(e.which){
			case 1:
			  // Left mouse click - panning.
			  // e.preventDefault();
			  active = true;
			  origin = {x: obj.dx, y: obj.dy};
			  e0 = e;
			  break;
			case 2:
			  // Middle mouse click - lasso.
			  // Still elevate the svg to allow drawing over the DOM.
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
	
	
	
	
	
	
	// CORRELATIONS
	// How should the metadata be passed in? Within hte items themselves?
	// Should be reworked so that the elements sit in the HUD. Then the actual interactions should be defined. Maybe the dragging of individual correlations was not bad? It should just be explicitly dragging the variable onto the axis (e.g. the point moves, if released prematurely it returns to its position, if released over axes it arranges.)
	/*
	obj.correlations = new SpatialCorrelations();
	obj.sketchpad.appendChild(obj.correlations.node);
	obj.correlations.position([5, window.innerHeight - 5]);
	obj.correlations.xoffset = window.innerWidth - 15;
	obj.correlations.yoffset = window.innerHeight - 15;
	obj.correlations.update();
	*/
	
	
	
	
	
	// KNOWLEDGE TREE
	// The knowledge tree is added here because it is nominally a navigation element. However the data for it comes from the KnowledgeManager, which will have to interact with the NavigationManager.
	// So now the hudsvg will just keep on passing the events to the tabletop? Can I just rename the hudsvg to sketchpad? And add other interactible elements to it, e.g. the lasso, and correlations??
	obj.tree = new TreeKnowledge();
	obj.sketchpad.querySelector("g.tree").appendChild(obj.tree.node);
	obj.tree.moveto = function(connections){
		// When I move to a particular group, do I want the descendant groups created? I guess so?
		// Clicking to root should return me to the start, with all hte items visible - so the tasks need to be included somehow...
		
		
		// How to show only the immediate children?? I know the actual members. So I can turn all the items on, find the chilren groups, and then reimpose the group rules on the items. The immediate children in this specific case will be all the groups with a single ancestor. But the same approach will have to apply for all the nodes when they're clicked!
		if(connections.group.root){
			// All items should become accessible. Any child groups should be shown, otherwise they cant be removed as immediate children will not be accessible anymore.
			obj.items.forEach(item=>item.show());	
		} else {
			// Hide all items and groups not in the selected group.
			obj.items.forEach(item=>{
				connections.group.members.includes(item.task.taskId) ? item.show() : item.hide();
			}); // forEach
			
			// Hide temporary groups, apart from those that are fully within the selected tree node.
			obj.temporarygroups.forEach(g=>{
				g.hide();
			}); // forEach
			
			connections.descendants.forEach(g=>{
				let groupitems = obj.items.filter(item=>g.members.includes(item.task.taskId));
				obj.maketreegroup(groupitems);
			}); // forEach
		} // if
		
		
		
	} // function
	
  } // constructor
  
  
  
  // Getter and setter for groups to allow inactive groups to be filtered out.
  
  
  
  track(item){
	let obj = this;
	
	obj.container.appendChild(item.node);
	
	
	// On Drag END chck if item should be placed into group.
	item.onend = function(p){
		// Check if it should be added to a group.
		// BUT THIS SHOULD ONLY HAPPEN ON MOUSEUP!!
		obj.temporarygroups.forEach(g=>{
			// Check if the item midpoint is within the group, but only if it's attached. If it's not then the boundingclient rect should come back with all 0s.
			let irect = item.node.getBoundingClientRect();
			let grect = g.node.getBoundingClientRect();
			if( 
			( ((irect.x+irect.width/2) > grect.x) && ((irect.x+irect.width/2) < grect.x+grect.width) ) && 
			( ((irect.y+irect.height/2) > grect.y) && ((irect.y+irect.height/2) < grect.y + grect.height) ) ){
				g.addmember(item);
				
				// The item itself should be positioned back to the beginning of the drag. When the group is dissolved it allows the item to be positioned based on it's relative position ot the group.
				// When the group first moved, and the item is added later the results will still be inconsistent...
				item.position = p;
			} // if
		}); // forEach
		
		// Update the minimap accordingly?
		obj.minimap.update();
		
		
		
	}; // onend
	
	item.onmove = function(){
		obj.minimap.update();
	}; // onmove
	
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
  
  
  How to get rid of unnecessary groups once the user dissolves them?? Need to distinguish these groups from the ones that are just navigated away from. And when a tree node is clicked it will have to keep track of the temporary groups also! Well, dissolved groups will have no members!!
  
  The tree needs to correctly position the temporary group also. How should it do this?
  
  */
  
  
  get temporarygroups(){
	  // Filter out any empty groups
	  let obj = this;
	  obj._temporarygroups = obj._temporarygroups.filter(g=>{
		  return g.members.length > 0;
	  })
	  return obj._temporarygroups;
  } // set
  
  
  maketemporarygroup(items){
	let obj = this;
	// The user wishes to create a group using lasso selection. Make this group and store it separately from groups that are a direct result of the tree navigation.
	
	let g = makegroup(items)
	
	obj.temporarygroups.push(g);
	obj.container.appendChild(g.node);
	
	
	g.onmove = function(){
		obj.minimap.update();
	} // onmove
	
	
	// Update the minimap and the tree data.
	obj.minimap.add(g);
	obj.minimap.update();
	
	
	obj.tree.hierarchy.temporary = obj.temporarygroups;
	obj.tree.update();
	
	
	
	
	
  } // maketemporarygroup
  
  
  maketreegroup(){
	let obj = this;
	
	// The tree groups do need to be stored - furthermore, by dragging additional items into this group the annotation group will have to be converted to a temporary one....
	
	
	
	
	
  } // maketreegroup



  
  
  
} // NavigationManager


function makegroup(items){
	// Common tasks when creating a group.
	
	// Collect the midpoint of the selected items to position the group.
	let p = [0, 0];
	items.forEach(item=>{
		p[0] += parseFloat(item.node.style.left) / items.length;
		p[1] += parseFloat(item.node.style.top) / items.length;
	}) // forEach
	
	let g = new Group(items);
	
	g.position = p;
	g.origin = p;
	
	return g;
	
} // makegroup




