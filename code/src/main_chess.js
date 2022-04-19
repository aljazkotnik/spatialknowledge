/*
This should connect to the server, receive some data, and create the spatial arrangement environment.
*/

import ChessGame from "./grouping/ChessGame.js";
import NavigationManager from "./navigation/NavigationManager.js";
import KnowledgeManager from "./knowledge/KnowledgeManager.js";


// They need task id.


// categorical: ["Event", "Site", "White",	"Black", "Result", "ECO", "Opening", "TimeControl",	"Termination", "Game"],
// ordinal: ["UTCDate", "UTCTime", "WhiteElo", "BlackElo",	"WhiteRatingDiff", "BlackRatingDiff"]
fetch(`./data/lichess_db_subset.json`).then(res=>res.json()).then(data=>{
		
	let games = data.matches.filter((m,i)=>i<50);
	games.forEach(game=>{
		game.taskId =  `${ game.White } vs. ${ game.Black }, ${ game.UTCDate } at ${ game.UTCTime }`;
	}) // forEach
		

	// The NavigationManager needs to know the variable types because it needs to collect the spatial correlation data to send to the SpatialCorrelations housed by the MiniMap.
	var workspace = new NavigationManager();
	workspace.ordinals = data.ordinal;
	workspace.categoricals = data.categorical;
	
	

	var items = [] 
	for(let i=0; i<games.length; i++){
		let item = new ChessGame(games[i])
		items.push(item);
		
		// Temporarilyturn the position: absolute off so we get an initial arrangement.
		item.node.style.position = "";
		
		// Make navigation manager keep track of the item.
		workspace.container.appendChild(item.node);
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



	// Start with the rendering. Rendering only considers drawing the items it knows about, and it knows nothing of the dynamically created groups by the NavigationManager. As a kludge solution the NavigationManager will superst the items to be considered by the renderer.




	// How to do the memory handling. And how to make it appear in the navigation bar!
	console.log(workspace, knowledge)

})

















