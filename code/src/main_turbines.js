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


const ids = ["0000" ,"0001" ,"0002" ,"0003" ,"0004" ,"0005" ,"0006" ,"0007" ,"0008" ,"0009" ,"0010" ,"0011" ,"0012" ,"0013" ,"0014" ,"0015"];

let mtdtprmss = ids.map(id=>{
	return fetch(`./data/${id}/casemetadata.json`).then(res=>res.json()).then(json=>{
		var a = json;
		
		a.entropy2d = `./data/${id}/unsteady_contour2d_meta.json`;
		
		delete a.unsteady_line;
		delete a.unsteady_scatterplot;
		delete a.unsteady_entropy_contour;
		
		return a
	})
}); // map



 let ordinals = ["stage_loading", "flow_coefficient", "eff_isen", "eff_poly", "alpha_rel_stator_in", "alpha_rel_stator_out", "alpha_rel_rotor_in", "alpha_rel_rotor_out", "alpha_stator_in", "alpha_stator_out", "alpha_rotor_in", "alpha_rotor_out", "eff_isen_lost_stator_in", "eff_isen_lost_stator_out", "eff_isen_lost_rotor_in", "eff_isen_lost_rotor_out"];

 let categoricals = [];


Promise.all(mtdtprmss).then(data=>{
	
	
	
	
	

	// The NavigationManager needs to know the variable types because it needs to collect the spatial correlation data to send to the SpatialCorrelations housed by the MiniMap.
	var workspace = new NavigationManager();
	workspace.ordinals = ordinals;
	workspace.categoricals = categoricals;
	
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
	renderer.customColormapRange = [1140, 1160];
	renderer.draw();
	

	// Allow NavigationManager to control which items are rendered.
	workspace.updateRenderingItems = function(subsetitems){
		renderer.items = subsetitems;
	} // updateRenderingItems



	

	

	
	// console.log(workspace, renderer, knowledge)
	console.log(T)
	
})


















