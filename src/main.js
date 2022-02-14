/*
This should connect to the server, receive some data, and create the spatial arrangement environment.
*/

import Individual from "./grouping/Individual.js";
import NavigationManager from "./navigation/NavigationManager.js";
import KnowledgeManager from "./knowledge/KnowledgeManager.js";
import MeshRenderer2D from "./renderers/MeshRenderer2D.js";

// Do we want categorical variables in here as well?? Knowledge may be injected through ML generated tags or something? But then maybe they could be injected just as tags?

// author, datetime, tag, taskId, line, area, t
// Maybe separate annotations for starttime and endtime? And then let the system figure out a close chapter.




const data = [
{taskId: "task 0", sepal_length: 5.1, sepal_width: 3.5, color: "salmon", cat: "red", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 1", sepal_length: 4.9, sepal_width: 3, color: "sandybrown", cat: "brown", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 2", sepal_length: 4.7, sepal_width: 3.2, color: "seagreen", cat: "sea", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 3", sepal_length: 4.6, sepal_width: 3.1, color: "seashell", cat: "sea", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 4", sepal_length: 5, sepal_width: 3.6, color: "sienna", cat: "brown", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 5", sepal_length: 5.4, sepal_width: 3.9, color: "skyblue", cat: "sea", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 6", sepal_length: 4.6, sepal_width: 3.4, color: "slateblue", cat: "sea", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 7", sepal_length: 5, sepal_width: 3.4, color: "springgreen", cat: "sea", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 8", sepal_length: 4.4, sepal_width: 2.9, color: "tan", cat: "brown", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 9", sepal_length: 4.9, sepal_width: 3.1, color: "thistle", cat: "red", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 10", sepal_length: 5.4, sepal_width: 3.7, color: "tomato", cat: "red", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 11", sepal_length: 4.8, sepal_width: 3.4, color: "turquoise", cat: "sea", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 12", sepal_length: 4.8, sepal_width: 3, color: "violet", cat: "red", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 13", sepal_length: 4.3, sepal_width: 3, color: "wheat", cat: "brown", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 14", sepal_length: 5.8, sepal_width: 4, color: "lightpink", cat: "red", entropy2d: "./data/0000/unsteady_contour2d_meta.json"},
{taskId: "task 15", sepal_length: 5.7, sepal_width: 4.4, color: "antiquewhite", cat: "brown", entropy2d: "./data/0000/unsteady_contour2d_meta.json"}
]; // data

// Items
var workspace = new NavigationManager();
var renderer = new MeshRenderer2D( document.getElementById("canvas") );

var items = [] 

for(let i=0; i<data.length; i++){
	let item = new Individual(data[i], renderer.gl)
	items.push(item);
	
	// Temporarilyturn the position: absolute off so we get an initial arrangement.
	item.node.style.position = "";
	
	// Make navigation manager keep track of the item.
	workspace.container.appendChild(item.node);
	workspace.track(item);
	
	// Make the MeshRenderer draw it. The mesh renderer provides the gl object, which must be given to the items to initialise the players.
	// Trackbatch? And connect it to the workspace hidden attribute??
	renderer.track(item);
} // for


// Update the minimap with all the items. This could be implemented in a nicer way it feels.
workspace.minimap.update(items);


// The initial positioning is done based on "position: relative;"
let headeroffset = 80;
let positions = items.reduce((acc,item)=>{
	acc.push([item.node.offsetLeft, item.node.offsetTop + headeroffset])
	return acc
},[])

// Now positionthem absolutely, and add the dragging.
items.forEach((item,i)=>{
	item.node.style.position = "absolute";
	item.position = positions[i];
}) // forEach



// The knowledge manager object.
var knowledge = new KnowledgeManager(workspace);



// Start with the rendering. Rendering only considers drawing the items it knows about, and it knows nothing of the dynamically created groups by the NavigationManager. As a kludge solution the NavigationManager will superst the items to be considered by the renderer.

// How should the renderer recognise that it needs to change the set of groups to iterate over?
renderer.draw();





workspace.updateRenderingItems = function(items){
	renderer.items = items;
} // updateRenderingItems


console.log(workspace, renderer)




















