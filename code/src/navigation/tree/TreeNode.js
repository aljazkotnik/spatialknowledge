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
  <g class="tooltip"></g>
</g>
`; // template

// A treenode object is a higher level wrapper that contains all the dimensioning information. The `connections' attribute is supposed to hold the `treegroup' object, which contains a reference the an individual group, all it's ancestors, it's direct parents, and all its descendants.
export default class TreeNode{
	
	// These are assigned from outside.
	x = 0
	y = 0
	
	// Blocks are used to roughly position nodes.
	block = 0
	
	// Line width is the width of the incoming line. The pitch is the vertical spacing to the next node.
	lineWidth = 4
	pitch = 32
	
	nBundlesIn = 0
	nBundlesOut = 0
	
	hidden = false;
	
	constructor(treegroup){
		let obj = this;
		obj.node = svg2element( template );
		// The treegroup holds all the connections of a particular group.
		obj.connections = treegroup;
		
		
		
		let label = obj.node.querySelector("g.label");
		label.addEventListener("mouseenter", function(){ obj.highlightText(true) });
		label.addEventListener("mouseout" , function(){ obj.highlightText(false) });
		
		let marker = obj.node.querySelector("g.marker");
		marker.onmouseenter = function(){ obj.highlightMarker(true) }
		marker.onmouseleave = function(){ obj.highlightMarker(false) }
	} // constructor	
	
	
	clear(){
		let obj = this;
		obj.x = 0;
		obj.y = 0;
		obj.block = 0;
		obj.nBundlesIn = 0;
		obj.nBundlesOut = 0;
	} // clear
	
	
	// Updating
	update(){
	    let obj = this;
		
		let marker = obj.node.querySelector("g.marker");
		let paths = marker.querySelectorAll("path");
		
		let label = obj.node.querySelector("g.label");
		let texts = label.querySelectorAll("text");
		
		
		// Draw the node marker
		for(let i=0; i<paths.length; i++){
			paths[i].setAttribute("d", `M${ obj.x } ${ obj.y } L${ obj.x } ${ obj.y + obj.markerSize }`)
		} // for
		
		// Position hte texts
		label.setAttribute("transform", `translate(${obj.x+4}, ${obj.y-4})`);
		for(let i=0; i<texts.length; i++){
			texts[i].innerHTML = obj.label;
		} // for
		
		// Instead of having background text just a rectangle is added behind it. Text scales weirdly...
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
	
	
	
	// Highlighting
	highlightSelect(){
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
	} // highlightSelect
	
	unhighlightSelect(){
		let obj = this;
		
		let t = obj.node.querySelector("g.label").querySelectorAll("text");
		let rect = obj.node.querySelector("g.label").querySelector("rect");
		
		// Text fill is now white.
		t[0].setAttribute("fill", "white");
		t[0].setAttribute("stroke", "white");

		t[1].setAttribute("fill", "black");
		t[1].setAttribute("stroke", "black");


		rect.setAttribute("fill", "none");
	} // unhighlightSelect
	
	highlightText(v){
		let obj = this;
		let size = v ? "12px" : "10px";
		let texts = obj.node.querySelector("g.label").querySelectorAll("text");
		for(let i=0; i<texts.length; i++){
			texts[i].setAttribute("font-size", size);
		} // for
		obj.updateBackgroundRectSize();
	} // highlightText
	
	highlightMarker(v){
		let obj = this;
		let size = v ? 10 : 8;
		let outline = obj.node.querySelector("g.marker").querySelector("path.outline");
		outline.setAttribute("stroke-width", size);
	} // highlightMarker
	
	
	
	
	
		
	// Drawing.
	get markerSize(){
		return Math.max(this.nBundlesIn-1, this.nBundlesOut-1, 0)*this.lineWidth;
	} // markersize
	
	
	yBasedOnIncomingHorizontalLine(y,i){
		// A horizontal line should be drawn at a `y'. Given that this line should come in at index i position the node to achieve both simultaneously.
		let obj = this;
		obj.y = y - i*obj.lineWidth - obj.markerPaddingIn;
	} // yBasedOnIncomingHorizontalLine
	
	
	calculateIncomingLineY(i){
		// given index 'i', and the position of the node calulate the y the line should terminate at.
		let obj = this;
		return obj.y + obj.markerPaddingIn + i*obj.lineWidth;
	} // calculateIncomingLineY
	
	calculateOutgoingLineY(i){
		// given index 'i', and the position of the node calulate the y the line should terminate at.
		let obj = this;
		return obj.y + obj.markerPaddingOut + i*obj.lineWidth;
	} // calculateIncomingLineY
	
	
	
	get markerPaddingIn(){
		// If the marker is larger than the width of the lines coming in, then the lines should be centered in hte middle of the marker. Calculate the empty space from hte marker start to where the lines should begin.
		let obj = this;
		return (obj.markerSize - (obj.nBundlesIn-1)*obj.lineWidth) / 2;
	} // markerPaddingIn
	
	get markerPaddingOut(){
		let obj = this;
		return (obj.markerSize - (obj.nBundlesOut-1)*obj.lineWidth) / 2;
	} // markerPaddingOut
	
	
	
	// Label to be displayed next to it. Shouldn't be larger than the node_label_width.
	get label(){
		let obj = this;
		let name = obj.connections.group.tags.length > 0 ? obj.connections.group.tags[0].name : "Root";
		
		// Temporarily changed to show n tasks for troubleshooting.
		// let n = obj.connections.descendants.length;
		let n = obj.connections.group.members.length;
		return `${name} ${n > 0 ? `(${ n })`: ""}`
	} // label
	
	
	
	
} // TreeNode

