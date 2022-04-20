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
import ChessGameRenderer from "../renderers/ChessGameRenderer.js";
import AnnotationSystem from "../knowledge/AnnotationSystem.js";



// How will the individual draw? The group will have to follow the same idea. Or? maybe the drawing would just access a specific module, like geometry or smth, and that isn't implemented yet. And then the same thing can be added to the group?
export default class ChessGame extends Item {
  constructor(task){
    super();
    let obj = this;
	
	// The task is important!
	obj.task = task;
	obj.node.querySelector("p.label").innerHTML = task.taskId;
	
	
	
	// Configure the chess board renderer.
	obj.renderer = new ChessGameRenderer(task.Game);
	obj.viewnode.appendChild(obj.renderer.node);
	
	// Add in a Commenting system also.
	obj.annotations = new AnnotationSystem(task.taskId);
	obj.node.querySelector("div.commenting").appendChild(obj.annotations.node);
	
	
	
	// CROSS MODULE FUNCTIONALITY
	
	
	// Maybe the tagform should be split off from the commenting? And just be its own independent module? But it'll need to be wrapped up somehown if I want to be able to hide it all at once.
	// The tagform needs to have access to the playbar current time.
	let c = obj.annotations.tagform;
	c.t = function(){
		return obj.renderer.ui.t_play;
	} // tagform t.
	
	
	
	let ga = obj.renderer.geometryannotation;
	let to = obj.annotations.tagoverview;
	let cm = obj.annotations.commenting;
	
	
	// Attach a toggle on the geometry button to either show, or hide the geometry annotation SVG.
	// Onclick is captured and stopped somewhere else, so mousedown is looked for.
	// c.buttons.insertBefore(ga.togglebutton, c.buttons.firstChild);
	
	
	// Should previewing persist when the user is adding points? In that case the geometry annotation should know about all the active tags. So maybe it should just have a slot to show them? And it should be updated on the go?
	// Here implement the annotation tag previewing.
	// Should this just collectall currently active tags and push them to the polygon annotation for viewing?
	to.preview = function(tag){
	  // If the tag has geometry then the SVG should be turned on. This can only be done with access to the geometry annotation class.
	  let activeannotations = to.buttons.filter(b=>b.on);
	  
	  // Tags are stored at least as empty arrays.
	  if(tag.geometry != "[]"){
		  
		// Get all active geometries. A geometry has a FEN associated with it.
		let taggeometry = JSON.parse(tag.geometry);
		let activegeometries = activeannotations.map(b=>JSON.parse(b.tag.geometry));
		  
		let previewconfig = {
			fen: taggeometry.fen,
			shapes: activegeometries.reduce((acc,g)=>acc.concat(g.shapes),[]).concat(taggeometry.shapes)
		}; // previewconfig
		ga.show(previewconfig);
	  } // if
	  
		
	  if(tag.timestamps){
		// Just search by name.
		obj.renderer.ui.bar.chapters.find(c=>c.config.label==tag.name).highlight();
	  } // if
	  
	  
	} // preview
	
	
	to.previewend = function(){
	  // Check if the geometry annotation is toggled on. If it's not then turn the SVG off.
	  let activeannotations = to.buttons.filter(b=>b.on).map(b=>JSON.parse(b.tag.geometry));
	  // ga.external = activeannotations;
		
	  // geometryannotation.show expects to see the data in the data domain.
	  ga.show();
	  
	  
	  // Unhighlight all chapters.
	  obj.renderer.ui.bar.chapters.forEach(c=>c.unhighlight());
	  
	} // previewend
	
	
	to.communicatetags = function(tags){
		// Pass these to the comment manager, which should pass it to all the comments.
		cm.updateAvailableTags(tags.map(t=>`#${t.name}`));
	} // communicatetags
	
	
	
	// Commenting should also support previewing.
	cm.preview = function(tagname){
		// Where should a selection be made which tags to preview, and which not?
		
		// First find the correct tag. All the tags are in TagOverview. After finding the correct tag the TagOverview preview can be used?
		let tag = to.buttons.find(b=>b.node.innerText == tagname).tag;
		to.preview(tag);
	}; // preview
	
	
	cm.previewend = function(tagname){
		to.previewend();
	}; // previewend
	
  } // constructor
  
  checksize(){
	let obj = this;
	// Check size to decide what to do. In cases where many items are drawn the cumulative memory required to draw the image may be too high, and it's sensible to draw a static image instead.
	
	let rect = obj.node.getBoundingClientRect();
	if(rect.width < 200){
		// Signal that the drawing should no longer occur.
		// obj.viewnode.style.border = `5px solid ${obj.task.color}`;
	} else {
		// Turn it back to default values.
		// obj.viewnode.style.border = "";
	} // if
  } // checksize
  
} // ChessGame




