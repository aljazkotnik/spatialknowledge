/*
This should connect to the server, receive some data, and create the spatial arrangement environment.
*/

import Item from "./grouping/Item.js";
import NavigationManager from "./navigation/NavigationManager.js";





const data = [
{taskId: "task 0", sepal_length: 5.1, sepal_width: 3.5},
{taskId: "task 1", sepal_length: 4.9, sepal_width: 3},
{taskId: "task 2", sepal_length: 4.7, sepal_width: 3.2},
{taskId: "task 3", sepal_length: 4.6, sepal_width: 3.1},
{taskId: "task 4", sepal_length: 5, sepal_width: 3.6},
{taskId: "task 5", sepal_length: 5.4, sepal_width: 3.9},
{taskId: "task 6", sepal_length: 4.6, sepal_width: 3.4},
{taskId: "task 7", sepal_length: 5, sepal_width: 3.4},
{taskId: "task 8", sepal_length: 4.4, sepal_width: 2.9},
{taskId: "task 9", sepal_length: 4.9, sepal_width: 3.1},
{taskId: "task 10", sepal_length: 5.4, sepal_width: 3.7},
{taskId: "task 11", sepal_length: 4.8, sepal_width: 3.4},
{taskId: "task 12", sepal_length: 4.8, sepal_width: 3},
{taskId: "task 13", sepal_length: 4.3, sepal_width: 3},
{taskId: "task 14", sepal_length: 5.8, sepal_width: 4},
{taskId: "task 15", sepal_length: 5.7, sepal_width: 4.4}
]; // data

// Items
var workspace = new NavigationManager();

var items = [] 

for(let i=0; i<data.length; i++){
	let item = new Item(data[i])
	items.push(item);
	
	// Make navigation manager keep track of the item.
	workspace.container.appendChild(item.node);
	item.onmove = function(){
		workspace.minimap.update();
	} // onmove
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
	item.node.style.left = positions[i][0] + "px"
	item.node.style.top = positions[i][1] + "px"
}) // forEach




// ALL NAVIGATION BELOW

// If all of the navigation is in onle class, then that class could keep a reference for the scale, and then on every update communicate it to the member modules.

// The tabletop should support zooming and panning
// The minimap should support zooming and panning
// So maybe no panning on hte tabletop??

// If there is panning on the tabletop, then how will hte lasso svg become active?




























