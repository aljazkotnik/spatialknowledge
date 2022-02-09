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
  _groups = []
  
	
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
			obj.makegroup(selectedIndividuals, true);
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
		/* Requirements: 
		  - temporary groups need to be made visible to be able to dissolve them - should appear whenever possible?
		  - the scope of the items needs to be reduced.
		  - moving to a node is moving to a view with the group visible. So keep the context of the parent. which one? Combined parents?
		  - the currently selected group should be highlighted on the navigation tree.
		  - prevent groups with same members from appearing simultaneously
		
		  - how to deal with the user navigating to the same group twice? Check if a similar group already exists? What to do if a superset group already exists on screen? Just highlight the superset group?
		*/
		
		// When a new item is added to a tree group it should be re-logged as a new temporary group? The groups will also need to keep track of the annotations to make sure only new ones are sent to the server?
		
		
		// The groups that can remain visible are those that are within the set of active tasks.
		
		
		if(connections.group.root){
			// All items should become accessible.
			obj.groups.forEach(g=>g.hide());
			obj.items.forEach(item=>item.show());
			obj.tree.currenttasks = [];
			obj.hudrefresh();
		} else {
			
			// Restrict the view to the members of the parent nodes. If one of the parents is the root then all the items should be active tasks.
			let activetasks = connections.parents.reduce(function(acc,parentg){
				return parentg.root ? obj.items.map(item=>item.task.taskId) : acc.concat(parentg.members);
			}, []); // reduce
			
			
			// Update the current active tasks in hte tree also. If the root is one of the parents, then don't highlight anything. Maybe don't highlight activetasks, but the selected tasks?
			obj.tree.currenttasks = connections.group.members;
			
			
			obj.items.forEach(item=>{
				activetasks.includes(item.task.taskId) ? item.show() : item.hide();
			}) // forEach
			
			
			// The items corresponding to the taskIds of the clicked tree node should form a new group.
			let clickedgroupitems = obj.items.filter(item=>{
				return connections.group.members.includes(item.task.taskId);
			}) // filter
			
			
			// Hide any groups that contain elements outside the currently active tasks. Maybe just keep all the groups in one array, but tick them to be temporary.
			let clickedgroup
			obj.groups.forEach(g=>{
				if( g.members.map(item=>item.task.taskId).some(taskId=>!activetasks.includes(taskId)) ){
					// A group outside of the current active tasks scope.
					g.hide();
				} else {
					// Potentially a group competing with the desired group.
					// A competing group is one that is not hidden, and contains some desired items. The user should not be able to have competing groups on the screen at the same time. Force the current selection, and therefore hide the other groups. They will still be accessible through the tree.
					// But if the group contains all of the clicked items, then it's not competing, then it's a superset group. Still just hide it.
					// However if a group with exactly th edesired membership exists, then just use that.
					// So what happens to tree groups that have a member added? They are turned into a temporary group, and are therefore hidden if navigated to again.
					if( clickedgroupitems.some(item=>g.members.includes(item)) ){
						g.hide();
					} else {
						g.reinstate();
					} // if
					
					
					// A.all is written as !A.some(v=>!B.includes(v))
					if( arrayequal(g.members, clickedgroupitems) ){
						clickedgroup = g;
					} // if
				}; // if
			}); // forEach
			
			
			if(clickedgroup){
				clickedgroup.reinstate();
				obj.hudrefresh();
			} else {
				obj.makegroup(clickedgroupitems, false);
			} // if
		} // if
		
		
		
		
		
	} // obj.tree.moveto
	
	
	obj.tree.crossreferencein = function(taskids){
		// Feed it to the minimap
		obj.minimap.highlight(taskids);
	} // obj.tree.crossreference
	
	obj.tree.crossreferenceout = function(){
		// Feed it to the minimap
		obj.minimap.unhighlight();
	} // obj.tree.crossreference
	
  } // constructor
  
  
  

  
  
  
  // Getter and setter for groups to allow inactive groups to be filtered out.
  
  
  
  track(item){
	let obj = this;
	
	obj.container.appendChild(item.node);
	
	
	// On Drag END chck if item should be placed into group.
	item.onend = function(p){
		// Check if it should be added to a group.
		// BUT THIS SHOULD ONLY HAPPEN ON MOUSEUP!!
		obj.groups.forEach(g=>{
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
		
		// Update the minimap and the tree accordingly.
		obj.hudrefresh();
		
		
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
  
  
  get groups(){
	  let obj = this;
	  
	  // Filter out any empty groups
	  obj._groups = obj._groups.filter(g=>{
		  return g.members.length > 0;
	  })
	  return obj._groups;
  } // set
  
  
  makegroup(items, temporary){
	let obj = this;
	// The user wishes to create a group using lasso selection. Make this group and store it separately from groups that are a direct result of the tree navigation.
	
	
	
	
	
	let p = [0, 0];
	items.forEach(item=>{
		p[0] += parseFloat(item.node.style.left) / items.length;
		p[1] += parseFloat(item.node.style.top) / items.length;
	}) // forEach
	
	let g = new Group(items, temporary);
	
	g.position = p;
	g.origin = p;
	g.enter = function(){  
		// Hide all items that are not in the current set.
		obj.items.forEach(item=>{
			g.members.includes(item) ? item.show() : item.hide();
		}) // forEach
		
		// Just hide all groups.
		obj.groups.forEach(g_=>g_.hide()) // forEach;
		
	} // enter

	// Add the group to the session.
	obj.groups.push(g);
	obj.container.appendChild(g.node);
	
	
	
	
	
	
	
	
	
	// Update the minimap and the tree data.
	obj.minimap.add(g);
	

	g.onmove = function(){ obj.minimap.update(); } // onmove
	g.ondissolve = function(){ obj.hudrefresh(); } // ondissolve


	// All temporary groups should be added as annotations to the tree.
	obj.hudrefresh();
	
	
	
	
  } // makegroup
  
  


  hudrefresh(){
	let obj = this;
	obj.minimap.update();
	obj.tree.temporary = obj.groups.filter(g=>g.temporary);
	obj.tree.update();
  } // hudrefresh

  
  
  
} // NavigationManager




function arrayequal(A,B){
	let AequalsB = !A.some(v=>!B.includes(v));
	let BequalsA = !B.some(v=>!A.includes(v));
	return AequalsB && BequalsA
} // arrayequal







