import Item from "./Item.js";


// How will the individual draw? The group will have to follow the same idea. Or? maybe the drawing would just access a specific module, like geometry or smth, and that isn't implemented yet. And then the same thing can be added to the group?
export default class Individual extends Item {
  constructor(task){
    super();
    let obj = this;
	
	// The task is important, because 
	obj.task = task;
	obj.node.querySelector("span.label").innerHTML = task.taskId;
	
  } // constructor
  
  checksize(){
	let obj = this;
	// Check size to decide what to do. In cases where many items are drawn the cumulative memory required to draw the image may be too high, and it's sensible to draw a static image instead.
	
	let rect = obj.node.getBoundingClientRect();
	if(rect.width < 200){
		// Paint the inside red.
		obj.viewnode.style.background = obj.task.color;
		obj.viewnode.style.opacity = 1;
	} else {
		// Turn it back to default values.
		obj.viewnode.style.background = "";
		obj.viewnode.style.opacity = 0.001;
	} // if
  } // checksize
  
} // Individual