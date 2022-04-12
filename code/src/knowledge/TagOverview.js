import { html2element } from "../helpers.js";

let template = `<div></div>`;

export default class TagOverview{
  
  tags = [];
  
  constructor(){
    let obj = this;
	obj.node = html2element(template);
	// The tag visualisation should happen here also.
  } // constructor
  
  add(newtags){
	let obj = this;
	newtags.forEach(t=>obj.tags.push(t));
  } // add
  
  namevalid(name){
	// If any existing tag has this name the name is not valid.
	let obj = this;
	return !obj.tags.some(tag=>tag.name == name)
  } // namevalid
} // TagOverview