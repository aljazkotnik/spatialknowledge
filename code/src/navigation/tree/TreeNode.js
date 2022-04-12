import { svg2element } from "../../helpers.js";


	
// d, node=>node.path
// text -> 	"x", node => node.labelx, "y", node => node.labely, label node=>node.label
let template = `
<g class="node" cursor="pointer">
  <g class="marker">
    <path class="outline" stroke="black" stroke-width="8" stroke-linecap="round"></path>
    <path class="fill" stroke="white" stroke-width="4" stroke-linecap="round"></path>
  </g>
  <g class="label">
    <rect rx="5" ry="5" fill="none"></rect>
    <text class="unselectable" stroke="white" stroke-width="2" font-size="10px"></text>
    <text class="unselectable" stroke="black" stroke-width="0.5" font-size="10px"></text>
  </g>
</g>
`; // template

// A treenode object is a higher level wrapper that contains all the dimensioning information. The `connections' attribute is supposed to hold the `treegroup' object, which contains a reference the an individual group, all it's ancestors, it's direct parents, and all its descendants.
export default class TreeNode{
	x = undefined
	_y = 0
	miny = 0
	
	// Line width is the width of the incoming line. The pitch is the vertical spacing to the next node.
	line_width = 4
	pitch = 32
	
	nbundlesin = 0
	nbundlesout = 0
	
	hidden = false;
	
	constructor(treegroup){
		let obj = this;
		obj.node = svg2element( template );
		// The treegroup holds all the connections of a particular group.
		obj.connections = treegroup;
		
		
		
		let label = obj.node.querySelector("g.label");
		label.addEventListener("mouseenter", function(){ obj.highlighttext(true) });
		label.addEventListener("mouseout" , function(){ obj.highlighttext(false) });
		
		let marker = obj.node.querySelector("g.marker");
		marker.onmouseenter = function(){ obj.highlightmarker(true) }
		marker.onmouseleave = function(){ obj.highlightmarker(false) }
	} // constructor	
	
	
	update(){
	    let obj = this;
		
		let marker = obj.node.querySelector("g.marker");
		let paths = marker.querySelectorAll("path");
		
		let label = obj.node.querySelector("g.label");
		let texts = label.querySelectorAll("text");
		
		
		for(let i=0; i<paths.length; i++){
			paths[i].setAttribute("d", `M${ obj.x } ${ obj.yMarkerStart } L${ obj.x } ${ obj.yMarkerStart + obj.markersize }`)
		} // for
		
		label.setAttribute("transform", `translate(${obj.labelx}, ${obj.labely})`);
		for(let i=0; i<texts.length; i++){
			texts[i].innerHTML = obj.label;
		} // for
		
		obj.updateBackgroundRectSize();
	} // update
	
	
	
	updateBackgroundRectSize(){
		let obj = this;
		
		let t = obj.node.querySelector("g.label").querySelectorAll("text")[1];
		let rect = obj.node.querySelector("g.label").querySelector("rect");
		let textbox = t.getBBox();
		
		rect.setAttribute("x", textbox.x - textbox.width*0.05);
		rect.setAttribute("y", textbox.y);
		rect.setAttribute("width", textbox.width*1.1);
		rect.setAttribute("height", textbox.height*1.1);
	} // updatebackgroundRectSize
	
	
	highlightselect(){
		// Just toggle the background rect, and the text color. Let it still respond to mouseover font increases.
		let obj = this;
		
		let t = obj.node.querySelector("g.label").querySelectorAll("text");
		let rect = obj.node.querySelector("g.label").querySelector("rect");
		
		// Text fill is now white.
		t[0].setAttribute("fill", "black");
		t[0].setAttribute("stroke", "black");

		t[1].setAttribute("fill", "white");
		t[1].setAttribute("stroke", "white");

		// Set the rect
		rect.setAttribute("fill", "black");
	} // highlightselect
	
	
	unhighlightselect(){
		let obj = this;
		
		let t = obj.node.querySelector("g.label").querySelectorAll("text");
		let rect = obj.node.querySelector("g.label").querySelector("rect");
		
		// Text fill is now white.
		t[0].setAttribute("fill", "white");
		t[0].setAttribute("stroke", "white");

		t[1].setAttribute("fill", "black");
		t[1].setAttribute("stroke", "black");


		rect.setAttribute("fill", "none");
	} // unhighlightselect
	
	
	
	
	highlighttext(v){
		let obj = this;
		let size = v ? "12px" : "10px";
		let texts = obj.node.querySelector("g.label").querySelectorAll("text");
		for(let i=0; i<texts.length; i++){
			texts[i].setAttribute("font-size", size);
		} // for
		obj.updateBackgroundRectSize();
	} // highlighttext
	
	highlightmarker(v){
		let obj = this;
		let size = v ? 10 : 8;
		let outline = obj.node.querySelector("g.marker").querySelector("path.outline");
		outline.setAttribute("stroke-width", size);
	} // highlighttext
	
	clear(){
		let obj = this;
		obj.x = undefined;
		obj._y = 0;
		obj.miny = 0;
		obj.nbundlesin = 0;
		obj.nbundlesout = 0;
	} // clear
	
	

	set y(val){
		let obj = this;
		obj._y = val
	} // set y
	
	get y(){
		let obj = this;
		return Math.max(obj._y, obj.miny)
	} // get y
	
	
	
	
	get yMarkerStart(){
		let obj = this;
		return obj.y - 0*obj.markersize/2 + obj.line_width/2;
	} // markery
	
	get markersize(){
		return Math.max(this.nbundlesin-1, this.nbundlesout-1, 0)*this.line_width;
	} // markersize
	
	get markerEmptyIn(){
		// If the marker is larger than the width of the lines coming in, then the lines should be centered in hte middle of the marker. Calculate the empty space from hte marker start to where the lines should begin.
		let obj = this;
		return (obj.markersize - (obj.nbundlesin-1)*obj.line_width) / 2;
	} // markerEmptyIn
	
	get markerEmptyOut(){
		let obj = this;
		return (obj.markersize - (obj.nbundlesout-1)*obj.line_width) / 2;
	} // markerEmptyIn
	
	
	
	// Label to be displayed next to it. Shouldn't be larger than the node_label_width.
	get label(){
		let obj = this;
		let name = obj.connections.group.tags.length > 0 ? obj.connections.group.tags[0].name : "Root";
		
		// Temporarily changed to show n tasks for troubleshooting.
		// let n = obj.connections.descendants.length;
		let n = obj.connections.group.members.length;
		return `${name} ${n > 0 ? `(${ n })`: ""}`
	} // label
	
	get labelx(){
		return this.x + 4;
	} // labelx
	
	get labely(){
		return this.yMarkerStart - 4;
	} // labely
	
	
	
} // TreeNode
