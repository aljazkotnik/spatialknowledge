import TreeNode from "./TreeNode.js";
import {array2tree, calculateLevelNumbers} from "./hierarchy.js";

export default class TreeHierarchy{
  constructor(){
	  let obj = this;
	  
	  // How should the temporary groups be differentiated from the actual ones? Inside the groups are differentiated by "<tag.name>-<tag.author>". So maybe check if the author is undefined, and if so mark it as a temporary group?
	  obj.temporary = [];
	  obj.annotations = [];
	  
	  obj.collapsednodes = [];
	  
	  obj.update();
  } // constructor
  
  update(){
	// Recalculate makes new treenodes. Maybe instead of having hidden nodes just have hidden tasks? And any group that consists only of the hidden tasks is hidden also? That's how the hierarchy creation works anyway.
	// Nah, just push the togglig to the node itself! However, anytime that the data will be recalculated the hidden aspect will disappear....
	let obj = this;
	
	// obj.temporary are actual 'Group' objects which are converted into temporary annotations on-the-go.
	let i = -1;
	let temporaryAnnotations = obj.temporary.reduce((acc, g)=>{
		// The dummy annotation needs to have a unique id, name, author, and task ids.
		return acc.concat(g.members.map(item=>{
			i += 1;
			return {id: `temp${i}`, name: "Unsaved", author: undefined, taskId: item.task.taskId}
		})) // concat
	}, []); // reduce
	
	
	obj.nodes = array2tree(obj.annotations.concat(temporaryAnnotations)).map(group=>{
		return new TreeNode(group);
	}); // map
  } // update
  
  get visiblenodes(){
	let obj = this;
	
	let collapsednodes = obj.nodes.filter(node=>node.hidden);
	
	// Based on the collapsed nodes determine which ones are still visible. I can ignore any incorrect nodes here. But I would rather just get rid of them.
	let hiddennodes = obj.nodes.filter(node=>{
		return collapsednodes.some(collapsed=>{
			return collapsed.connections.descendants.includes(node.connections.group)
		}) // some
	}) // filter
		
	// Filter out any disabled nodes. Maybe this can be made more sophisticated so that the folds further down the line are preserved?
	let nodes = obj.nodes.filter(node=>{
		return !hiddennodes.includes(node)
	});
		

	// The level numbers should be assigned to all active nodes.
	calculateLevelNumbers(nodes);
		
		
	return nodes
  } // get nodes
} // TreeHierarchy



// HELPERS
