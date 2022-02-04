/*
This should connect to the server, receive some data, and create the spatial arrangement environment.
*/

import Individual from "./grouping/Individual.js";
import NavigationManager from "./navigation/NavigationManager.js";



// Do we want categorical variables in here as well?? Knowledge may be injected through ML generated tags or something? But then maybe they could be injected just as tags?

// author, datetime, tag, taskId, line, area, t
// Maybe separate annotations for starttime and endtime? And then let the system figure out a closed chapter.

const annotations = [
{tag: "green", taskId: "task 2"},
{tag: "green", taskId: "task 7"},
{tag: "green", taskId: "task 11"},
{tag: "blue", taskId: "task 5"},
{tag: "blue", taskId: "task 6"},
{tag: "blue", taskId: "task 11"},
{tag: "brown", taskId: "task 1"},
{tag: "brown", taskId: "task 3"},
{tag: "brown", taskId: "task 4"},
{tag: "brown", taskId: "task 8"},
{tag: "brown", taskId: "task 13"},
{tag: "brown", taskId: "task 15"}
]; // annotations


const data = [
{taskId: "task 0", sepal_length: 5.1, sepal_width: 3.5, color: "salmon"},
{taskId: "task 1", sepal_length: 4.9, sepal_width: 3, color: "sandybrown"},
{taskId: "task 2", sepal_length: 4.7, sepal_width: 3.2, color: "seagreen"},
{taskId: "task 3", sepal_length: 4.6, sepal_width: 3.1, color: "seashell"},
{taskId: "task 4", sepal_length: 5, sepal_width: 3.6, color: "sienna"},
{taskId: "task 5", sepal_length: 5.4, sepal_width: 3.9, color: "skyblue"},
{taskId: "task 6", sepal_length: 4.6, sepal_width: 3.4, color: "slateblue"},
{taskId: "task 7", sepal_length: 5, sepal_width: 3.4, color: "springgreen"},
{taskId: "task 8", sepal_length: 4.4, sepal_width: 2.9, color: "tan"},
{taskId: "task 9", sepal_length: 4.9, sepal_width: 3.1, color: "thistle"},
{taskId: "task 10", sepal_length: 5.4, sepal_width: 3.7, color: "tomato"},
{taskId: "task 11", sepal_length: 4.8, sepal_width: 3.4, color: "turquoise"},
{taskId: "task 12", sepal_length: 4.8, sepal_width: 3, color: "violet"},
{taskId: "task 13", sepal_length: 4.3, sepal_width: 3, color: "wheat"},
{taskId: "task 14", sepal_length: 5.8, sepal_width: 4, color: "lightpink"},
{taskId: "task 15", sepal_length: 5.7, sepal_width: 4.4, color: "antiquewhite"}
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





// Add the main rendering loop
console.log(workspace)



























