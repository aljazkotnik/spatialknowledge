import { html2element } from "../../helpers.js";

let template = `<div class="hudright-menu">
        <div style="float: right;">
          <div>
		    <input class="value" type="text" placeholder="#tag-value"></input>
		    <button class="btn-small v">📝</button>
		    <button class="btn-small x-pos">📌-x</button>
		    <button class="btn-small y-pos">📌-y</button>
          </div>
        
          <div>
            <input class="name" type="text" placeholder="#tag-name"></input>
		    <button class="btn-small submit">Submit</button>
	      </div>
        </div>
      </div>`;
	  
	  
/* 
The batch form needs to only be able to submit when all on-screen items have the same tag-name in their forms.

The tag-name must not be the same as any available tags given to the annotations previously.
*/

export default class TagValueBatchForm{
	
  items = [];
	
  constructor(){
    let obj = this;
	obj.node = html2element(template);
	
	// name input needs to update the button anytime a char is added or removed. It should alert the user if the name is already assigned to any item.
	obj.nameInput = obj.node.querySelector("input.name");
	obj.nameInput.oninput = function(){
		// Name validty is the only condition for the submit to become active. This allows the batch mode to submit simple tags also.
		obj.toggleSubmitButton(obj.namevalid(obj.nameInput.value));
	} // oninput
	
	// This one can capture anything.
	obj.valueInput = obj.node.querySelector("input.value");
	
	
	// The submit button hould only work when all the items in view have a valid name and value. When will the submit button be updated? It'll have to be updated during the navigation etc. Maybe instead of updating it it can always be on, and it can alert the user with the appropriate message?
	obj.submitButton = obj.node.querySelector("button.submit");
	obj.toggleSubmitButton(false);
	obj.submitButton.onclick = function(e){
		console.log("Check if anything can be submitted")
		obj.onscreenitems.forEach(item=>{
			item.commenting.tagform.nameinput.value = obj.nameInput.value;
			item.commenting.tagform.submitButton.onmousedown(e);
		}) // forEach
		obj.clear();
	}; // onclick
	
	
	// The buttons need to paste the values to the appropriate
	obj.valueButton = obj.node.querySelector("button.v");
	obj.valueButton.onclick = function(){
		let value = obj.valueInput.value;
		obj.onscreenitems.forEach(item=>{
			item.commenting.tagform.valueinput.value = value;
		}); // forEach
	}; // onclick
	
	obj.xPositionButton = obj.node.querySelector("button.x-pos");
	obj.xPositionButton.onclick = function(){
		obj.onscreenitems.forEach(item=>{
			let itemrect = item.node.getBoundingClientRect();
			item.commenting.tagform.valueinput.value = itemrect.x/window.innerWidth;
		}); // forEach
	}; // onclick
	
	obj.yPositionButton = obj.node.querySelector("button.y-pos");
	obj.yPositionButton.onclick = function(){
		obj.onscreenitems.forEach(item=>{
			let itemrect = item.node.getBoundingClientRect();
			item.commenting.tagform.valueinput.value = 1-itemrect.y/window.innerHeight;
		}); // forEach
	}; // onclick
	
	
	
	
	
	
	
  } // constructor
  
  
  get onscreenitems(){
	let obj = this;
	// Automatically clear the tag forms of off-screen items.
	return obj.items.filter(item=>{
	  if(!item.isonscreen()){
		 item.commenting.tagform.clear();
	  } // if
	  return item.isonscreen()
	});
  } // onscreenitems
  
  

  
  
  clear(){
	let obj = this;
	obj.nameInput.value = "";
	obj.valueInput.value = "";
	obj.toggleSubmitButton(false);
  } // clear
  
  toggleSubmitButton(on){
	// if on == true then turn the button on, otherwise turn it off.
	let obj = this;
    obj.submitButton.style.background = on ? "black" : "gainsboro";
	obj.submitButton.style.color = on ? "white" : "black";
	obj.submitButton.disabled = !on;
  } // toggleSubmitButton
  
  namevalid(name){
	let obj = this;
	return !obj.onscreenitems.some(item=>!item.commenting.tagoverview.namevalid(name));
  } // namevalid
} // TagValueBatchForm




