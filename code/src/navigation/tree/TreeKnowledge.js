/* `TreeRender' is the class that defines and executes the tree interactions.

- dimensioning spatially places the nodes and links.
 
*/



// Move the hierarchy to CORE!!
import { dimensioning } from "./dimensioning.js";
import TreeHierarchy from "./TreeHierarchy.js";

import {svg2element, scaleCategorical} from "../../helpers.js";



/* TODO
- Connect to a scatter plot for interactive tag addition.
- Handle unassigned tasks.
*/

/* ADVANCED
- Single parent bundles should allow for straight links too.

- How to display very large trees?
	Make the tree zoomable?

- How should the group descriptions be presented? 
	Number of tasks, number of children, text description, AUTHOR!! All the data is available. Maybe on text hover all the information should be displayed?? Maybe in a tooltip?
- Which label to select when making nodes?
	The current author should be allowed to control their branch. This would require some differentiation between users. Certainly can't be done now. For now just select the first one?
- How to merge the groups interactively? I.e. a git pull.
*/

/* DONE
- Collapsible nodes - collapse, with the folding history saved.
- Enforce partial branches to be inserted - tree created on bundle level.
- Make text unselectable - add into app css
- Fix node mouseover css - css affects specific child of mover g.
*/




let template = `
<g transform="translate(20, 20)">
  <g class="legend"></g>
  <g class="treeelements" transform="translate(0, 20)">
	<g class="bundles"></g>
	<g class="nodes"></g>
  </g>
</g>
`;



export default class TreeKnowledge {
	
	
	constructor(){
		let obj = this;
		
		// Hierarchy
		obj.hierarchy = new TreeHierarchy();
		
		// Drawing
		obj.node = svg2element( template );
		obj.gnodes = obj.node.querySelector("g.nodes");
		obj.gbundles = obj.node.querySelector("g.bundles");
		
		obj.color = new scaleCategorical();
		
		
		// The tree is redrawn on every interaction. To allow the user to ee where on the tree they currently are just highlight the group that contains all the relevant items.
		obj.currenttasks = [];
		
	} // constructor
	
	purge(){
		// Remove all the server-based annotations.
		this.hierarchy.annotations = [];
	} // purge
	
	addtagannotation(tag){
		this.hierarchy.annotations.push(tag)
	} // addtagannotation
	
	set temporary(d){
		this.hierarchy.temporary = d;
	} // set temporary
	
	get temporary(){
		return this.hierarchy.temporary;
	} // get temporary
	
	clear(){
		// When clearing by looping through .children and .remove() it only removed the nodes in the last step. When redrawing it added all of them back somehow...
		let obj = this;
		obj.gnodes.innerHTML = "";
		obj.gbundles.innerHTML = "";
	} // clear
	
	interact(){
		let obj = this;
		obj.clear();
		obj.map = dimensioning( obj.hierarchy.visiblenodes );
		obj.updatenodes();
		obj.updatelines();
		obj.updatelegend();
	} // interact
	
	
	
	
	update(){
		let obj = this;
		obj.hierarchy.update();
		obj.interact();
	} // update
	
	// The functionality is added in here. Maybe refactor to remove the nestedness??
	updatenodes(){
		let obj = this
		
		obj.map.nodes.sort((a,b)=>a.x-b.x).forEach(nodeobj=>{
			
			// Check if the group should be highlighted.
			let iscurrent = !nodeobj.connections.group.members.some(taskId=>!obj.currenttasks.includes(taskId))
			
			
			obj.gnodes.appendChild( nodeobj.node );
			nodeobj.update();
			if(iscurrent){
				nodeobj.highlightSelect();
			} // if
			
			
			var tooltipTimer;
			
			// Add teh styling changes on mouseover. Clicking the label moves view to the group.
			let label = nodeobj.node.querySelector("g.label");
			label.onclick = function(){ 
				obj.moveto(nodeobj.connections);
				clearTimeout(tooltipTimer)
				obj.hidetooltip(nodeobj);
			} // onclick
			label.addEventListener("mouseenter", function(){
				obj.crossreferencein(nodeobj.connections.group.members)
				tooltipTimer = setTimeout(function(){
					obj.showtooltip(nodeobj)
				}, 10)
			}) // addEventListener
			label.addEventListener("mouseout", function(){
				obj.crossreferenceout();
				clearTimeout(tooltipTimer)
				obj.hidetooltip(nodeobj);
			}) // addEventListener
			
			// Clicking on hte node just collapses branches.
			nodeobj.node.querySelector("g.marker").onclick = function(){
				nodeobj.hidden = !nodeobj.hidden;
				obj.interact();
			} // onclick

		}) // forEach
		
	} // updatenodes
	
	
	updatelines(){
		let obj = this;
		
		// The renderer controls the color of the lines!!
		obj.map.bundles.forEach(bundleobj=>{
			obj.gbundles.appendChild( bundleobj.node )
			bundleobj.update( obj.color.dom2range(bundleobj.author) )
		}) // forEach
	} // updatelines
	
	
	updatelegend(){
		let obj = this;
		
		// Get the tentative width of hte legend.
		let entrywidth = 90;
		let entryheight = 15;
		
		// A minus is used to allow i=0 to be used later on - easier to calculate start x.
		let legendwidth = obj.gnodes.getBoundingClientRect().width - entrywidth/2;

		

		// This should only appear if there are any unsaved items.
		let unsaved = obj.hierarchy.temporary.length > 0 ? `<g transform=translate(0,0)>
			<path d="M0,-4 L20,-4" stroke="black" stroke-dasharray="5,2" stroke-width="5px"></path>
			<text x="25" y="0" font-weight="bold" font-size="12px">Unsaved</text>
		</g>` : ``;

		
		let i = obj.hierarchy.temporary.length > 0 ? 0 : -1;
		let j = 0;
		let entries = obj.color.domain.map(author=>{
			j = (i+1)*entrywidth > legendwidth ? j+1 : j;
			i = (i+1)*entrywidth > legendwidth ? 0 : i+1;
			return `<g transform=translate(${i*entrywidth},${j*entryheight})>
			<path d="M0,-4 L20,-4" stroke="${obj.color.dom2range(author)}" stroke-width="5px"></path>
			<text x="25" y="0" font-weight="bold" font-size="12px">${author}</text>
			</g>`
		});
		
		
		
		// Try to fit the legend entries in one row. Limit username to 8 characters?
		let legend = obj.node.querySelector("g.legend");
		while (legend.lastChild) {
			legend.removeChild(legend.lastChild);
		}
		legend.appendChild(svg2element(`<g>${[unsaved].concat(entries)}</g>`));
		obj.node.querySelector("g.treeelements").setAttribute("transform", `translate(0,${(j+2)*entryheight})`);
	} // updatelegend
	
	
	showtooltip(nodeobj){
		// Get the aliases. Don't show the tooltip if there is no other aliases.
		let obj = this;
		
	
		let g = nodeobj.node.querySelector("g.tooltip")
		g.innerHTML = "";
		
		
		let aliases = nodeobj.connections.group.tags;
		if(aliases.length > 1){
			// Ok - there has to be a square, and it should be positioned near the text.
			
			let textnodes = aliases.map((alias,i)=>svg2element(`<text x="10" y="${(i+1)*15}" font-weight="bold" font-size="12px">${alias.author}: ${alias.name}</text>`))
			
			
			let tooltip = svg2element(`<g>
			<rect x="0" y="0" width="100" height="${textnodes.length*15+10}" fill="white" stroke-width="2" stroke="black" rx="5px"></rect></g>`)
			
			g.appendChild(tooltip)
			textnodes.forEach(n=>tooltip.appendChild(n))
			
			
			let w = textnodes.reduce((acc,n)=>{
				return Math.max(acc, n.getBBox().width)
			},0) + 20; // reduce
			
			tooltip.querySelector("rect").setAttribute("width", w);
			tooltip.setAttribute("transform", `translate(${nodeobj.x - w < 0 ? 0 : nodeobj.x - w},${nodeobj.y - 10})`);
			
		} // if
		
	} // showtooltip
	
	hidetooltip(nodeobj){
		let g = nodeobj.node.querySelector("g.tooltip")
		g.innerHTML = "";
	} // hidetooltip
	
	
	
	
	moveto(connections){
		// I want to move to the group which contains only tasks given by "nodeobj.connections.group.members", but I also want to show all the groups within that grop.
		console.log("Move to", connections.group.members)
	} // moveto
	
	crossreferencein(taskids){
		// Dummy method that takes in taskids and allows for them to be highlighted on a different plot.
	} // crossreferencein
	
	crossreferenceout(taskids){
		// Dummy method to signal end of cross reference
	} // crossreferenceout
	
} // TreeKnowledge