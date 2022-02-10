/*
This should connect to the server, receive some data, and create the spatial arrangement environment.
*/

import Individual from "./grouping/Individual.js";
import NavigationManager from "./navigation/NavigationManager.js";
import KnowledgeManager from "./knowledge/KnowledgeManager.js";


// Do we want categorical variables in here as well?? Knowledge may be injected through ML generated tags or something? But then maybe they could be injected just as tags?

// author, datetime, tag, taskId, line, area, t
// Maybe separate annotations for starttime and endtime? And then let the system figure out a close chapter.




const data = [
{taskId: "task 0", sepal_length: 5.1, sepal_width: 3.5, color: "salmon", cat: "red"},
{taskId: "task 1", sepal_length: 4.9, sepal_width: 3, color: "sandybrown", cat: "brown"},
{taskId: "task 2", sepal_length: 4.7, sepal_width: 3.2, color: "seagreen", cat: "sea"},
{taskId: "task 3", sepal_length: 4.6, sepal_width: 3.1, color: "seashell", cat: "sea"},
{taskId: "task 4", sepal_length: 5, sepal_width: 3.6, color: "sienna", cat: "brown"},
{taskId: "task 5", sepal_length: 5.4, sepal_width: 3.9, color: "skyblue", cat: "sea"},
{taskId: "task 6", sepal_length: 4.6, sepal_width: 3.4, color: "slateblue", cat: "sea"},
{taskId: "task 7", sepal_length: 5, sepal_width: 3.4, color: "springgreen", cat: "sea"},
{taskId: "task 8", sepal_length: 4.4, sepal_width: 2.9, color: "tan", cat: "brown"},
{taskId: "task 9", sepal_length: 4.9, sepal_width: 3.1, color: "thistle", cat: "red"},
{taskId: "task 10", sepal_length: 5.4, sepal_width: 3.7, color: "tomato", cat: "red"},
{taskId: "task 11", sepal_length: 4.8, sepal_width: 3.4, color: "turquoise", cat: "sea"},
{taskId: "task 12", sepal_length: 4.8, sepal_width: 3, color: "violet", cat: "red"},
{taskId: "task 13", sepal_length: 4.3, sepal_width: 3, color: "wheat", cat: "brown"},
{taskId: "task 14", sepal_length: 5.8, sepal_width: 4, color: "lightpink", cat: "red"},
{taskId: "task 15", sepal_length: 5.7, sepal_width: 4.4, color: "antiquewhite", cat: "brown"}
]; // data

// Items
var workspace = new NavigationManager();

var items = [] 

for(let i=0; i<data.length; i++){
	let item = new Individual(data[i])
	items.push(item);
	
	// Temporarilyturn the position: absolute off so we get an initial arrangement.
	item.node.style.position = "";
	
	// Make navigation manager keep track of the item.
	workspace.track(item);
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


// Add the main rendering loop
console.log(workspace)



























