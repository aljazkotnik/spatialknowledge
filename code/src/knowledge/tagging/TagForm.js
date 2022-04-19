import {html2element} from "../../helpers.js";

let css = {
  button: `
    border: none;
	cursor: pointer;
	border-radius: 4px;
  `,
  
  timebutton: `
    background-color: gainsboro;
  `,
  
  submitbutton: `
    background-color: black;
	color: white;
  `
}; // css


let template = `
<div style="width: 300px">
  <input class="tagname" type="text" placeholder="#tag-name" style="width: 65px;"></input>
  
  <input class="tagvalue" type="text" placeholder="value" style="width: 35px;"></input>
  
  <div class="buttons" style="display: inline-block; float: right;">
      <button class="starttime" style="${ css.button } ${css.timebutton}">start</button>
      <i>-</i>
      <button class="endtime" style="${ css.button } ${css.timebutton}">end</button>
    
      <button class="submit" style="${ css.button } ${css.submitbutton}">Submit</button>
  </div>
  
  
</div>
`; // template


// This is more than the chapterform, it is the entirety of the forms.
export default class TagForm{
  
  constructor(){
    let obj = this;
	obj.node = html2element(template);
	
	obj.nameinput = obj.node.querySelector("input.tagname");
	obj.valueinput = obj.node.querySelector("input.tagvalue");
	obj.buttons = obj.node.querySelector("div.buttons");
	
	// This value will be overwritten during interactions, and is where the tag manager collects the time for the timestamps.
	obj.clear();
	// The button should cycle through black, green, and red. It will need some way of tracking its current state, and a way to load in existing tags! This will allow users to subsequently change the tag if needed? Maybe this is a bit much for now. It will need a submit button.
	// If the tag is loaded and the button switches to timestamping then any user can add the ned timesteps. Then the users name needs to be checked in addition. Maybe some way of filtering out the tags that are added? How would that work?
	// For now add 3 buttons. A starttime endtime and submit button. For the submit button only the start and name need to be filled in. The buttons must also show the selected times!
	
	
	obj.nameinput.onmousedown = function(e){
		e.stopPropagation()
	} // onmousedown
	
	
	// Update the form when the text is typed in to activate the submit button.
	obj.nameinput.oninput = function(){
		obj.update()
	} // oninput
	
	// Maybe it's simpler if the time is assigned from the outside?
	obj.node.querySelector("button.starttime").onmousedown = function(e){
		e.stopPropagation();
		obj.starttime = obj.t();
		obj.update();
	} // onmousedown
	
	obj.node.querySelector("button.endtime").onmousedown = function(e){
		e.stopPropagation();
		obj.endtime = obj.t();
		obj.update();
	} // onmousedown
	
	obj.submitButton = obj.node.querySelector("button.submit");
	obj.submitButton.onmousedown = function(e){
		e.stopPropagation();
		let tag = obj.tag;
		if(tag){
			obj.submit(tag);
			obj.clear()
		} // if
	} // onmousedown
	
  } // constructor
  
  
  // Dummy method to facilitate outside supply of the timesteps.
  t(){ return undefined }
  
  update(){
	let obj = this;
	
	// Ensure that the times are always consistent (end > start);
	if(obj.endtime && obj.starttime){
		let t0 = Math.min(obj.starttime, obj.endtime);
		let t1 = Math.max(obj.starttime, obj.endtime);
		obj.starttime = t0;
		obj.endtime = t1;
	} // if
	
	// Update the time tags also.
	let it0 = obj.node.querySelector("button.starttime");
	let it1 = obj.node.querySelector("button.endtime");
	
	it0.innerText = (obj.starttime != undefined) ? obj.starttime.toFixed(3) : "start";
	it1.innerText = (obj.endtime != undefined) ? obj.endtime.toFixed(3) : "end";
	
	
	// The button is black by default, and making it look disabled is a bit more involved.
	let button = obj.node.querySelector("button.submit");
	if(obj.tag){
		// Enable.
		button.style.opacity = 1;
		button.style.backgroundColor = "black";
		button.style.color = "white";
	} else {
		button.style.opacity = 0.6;
		button.style.backgroundColor = "gainsboro";
		button.style.color = "black";
	} // if
  } // update
  
  clear(){
	let obj = this;
	obj.starttime = undefined;
	obj.endtime = undefined;
	obj.nameinput.value = "";
	obj.valueinput.value = "";
	obj.update();
  } // clear
  
  get tag(){
	// Chapter tag should belong to the task id so that the observations across multiple slices are available together to the user.
	let obj = this;
		
	
	
	let tag = { 
		name: obj.nameinput.value,
		value: obj.valueinput.value
	} // tag
	
	
	// How should the timestamps be handled? CANNOT always store two values, as the chapterform is ot aware of the extent of the timestep. So do I place undefined in one of the slots? And How would that be interpreted by JSON?
	
	let timestamps = [obj.starttime, obj.endtime];
	
	/* Expected behavior:
		[undefined, undefined] -> tag
	    [  value  , undefined] -> chapter
		[undefined,   value  ] -> chapter
		[  value  ,   value  ] -> chapter
	*/
	if(timestamps.some(t=>!isNaN(t))){
		// In this case at least one of the values is defined, and should be included.
		tag.timestamps = JSON.stringify( timestamps );
	}; // if
	
	// This only collects the name and the optional timestamps. The author is supplied outside, in the knowledge manager, to avoid sending the author into this object.
	// The time should be defined, but it can also be 0, or less than 0!
	// obj.user && obj.input.value && ( obj.starttime != undefined ) ? tag : false; 
	return obj.nameinput.value ? tag : false; 
  } // tag

  // Is this necessary?? Or should we just use an outside method?
  // Placeholder for communication between classes.
  submit(tag){} // submit
} // TagForm