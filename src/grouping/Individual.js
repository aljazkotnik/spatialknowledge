/* Superclass framework 

ATTRIBUTES:
node
viewnode
previewnode

METHODS: 
set/get position
show
hide
checksize

DUMMY METHODS:
onmove
onend
*/ 
import Item from "./Item.js";



// Rendering modules
import UnsteadyPlayer2D from "../renderers/UnsteadyPlayer2D.js";
import CommentingSystem from "../knowledge/CommentingSystem.js";



// How will the individual draw? The group will have to follow the same idea. Or? maybe the drawing would just access a specific module, like geometry or smth, and that isn't implemented yet. And then the same thing can be added to the group?
export default class Individual extends Item {
  constructor(task, gl){
    super();
    let obj = this;
	
	// The task is important!
	obj.task = task;
	obj.node.querySelector("span.label").innerHTML = task.taskId;
	
	
	
	// There should ever only be one individual, and it should have the option to switch between renderers when ordered to do so. The order of the renderer should come from a slice configuration file. The allowed option renderers still need to be imported here.
	
	
	// The MeshRenderer2D should be outside completely? Yes! And there could be a MeshRenderer3D running at the same time, and they just check which of them should perform the render? But then the code that applies to the gl needs to be swapped out everytime? In that case there could be a canvas for 2D and one for 3D if necessary. Would this be needed at all??
	
	// maybe it's more sensible to let hte renderer create the view node etc?
	obj.renderer = new UnsteadyPlayer2D(gl, task.entropy2d);
	obj.viewnode.appendChild(obj.renderer.node)
	
	
	// Add in a Commenting system also.
	obj.commenting = new CommentingSystem(task.taskId);
	obj.node.querySelector("div.commenting").appendChild(obj.commenting.node);
	
	// Maybe the chapterform should be split off from the commenting? And just be its own independent module? But it'll need to be wrapped up somehown if I want to be able to hide it all at once.
	// The chapterform needs to have access to the playbar current time.
	obj.commenting.chapterform.t = function(){
		return obj.renderer.ui.t_play;
	} // chapterform t.
  } // constructor
  
  checksize(){
	let obj = this;
	// Check size to decide what to do. In cases where many items are drawn the cumulative memory required to draw the image may be too high, and it's sensible to draw a static image instead.
	
	let rect = obj.node.getBoundingClientRect();
	if(rect.width < 200){
		// Signal that the drawing should no longer occur.
		obj.viewnode.style.border = `5px solid ${obj.task.color}`;
	} else {
		// Turn it back to default values.
		obj.viewnode.style.border = "";
	} // if
  } // checksize
  
} // Individual