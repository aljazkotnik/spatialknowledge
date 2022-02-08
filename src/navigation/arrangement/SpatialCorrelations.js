import {svg2element} from "../../helpers.js";

/*
Handle the variable->arrangement and arrangement->variable alleyways.




Approaches: menu vs figure based visualisation and interaction.

MENU:
+ : qualitative, intuitive interaction, no additional mode, no clutter
- : no cross correlations against both axes


FIGURE:
+ : correlations visualised
- : non-intuitive interaction, additional mode, clutter, quantitative correlations


A combination of both? Where the figure is brought up, but the menu is used fo rthe interaction? Maybe the Correlations menu should just have a figure attached? So that it's a small widget? But that is a figure mode then....

Just stick to the menu for now, and figure something out later...

Maybe click on the axes to show the menu, and that shows the figure? And then when a selection is made the figure disappears??



If the Spatial correlations are on the sketchpad svg in the background then they are not clickable. So maybe it mag=kes sene to place them on separate svg elements, and put them into the HUD html. Then they can be positioned via css properties as opposed to explicitly.

*/


let template = `
<g transform="translate(10,390)">
  <path class="horizontal" stroke="grey" stroke-width="3" stroke-linecap="round" fill="none"></path>
  <text class="correlation-label horizontal"></text>
  
  <path class="vertical" stroke="grey" stroke-width="3" stroke-linecap="round" fill="none"></path>
  <text class="correlation-label vertical" transform="rotate(-90)"></text>
</g>
`;


// The paths only depend on how close together the arrows should be.
let arrowheadwidth = 20; // arrowheadwidth
let arrowheadlength = 30; // arrowheadlength
let length = 50; // whole arrow length

let relativeHorizontalArrow = `
  l${length},0 
  m-${arrowheadlength},-${arrowheadwidth/2} 
  c 0,0 ${arrowheadlength/6},${arrowheadwidth/2} ${arrowheadlength},${arrowheadwidth/2} 
  m-${arrowheadlength},${arrowheadwidth/2}
  c 0,0 ${arrowheadlength/6},-${arrowheadwidth/2} ${arrowheadlength},-${arrowheadwidth/2}`;
let relativeVerticalArrow = `
  l0,-${length} 
  m-${arrowheadwidth/2},${arrowheadlength}
  c 0,0 ${arrowheadwidth/2},-${arrowheadlength/6} ${arrowheadwidth/2},-${arrowheadlength}
  m${arrowheadwidth/2},${arrowheadlength}
  c 0,0 -${arrowheadwidth/2},-${arrowheadlength/6} -${arrowheadwidth/2},-${arrowheadlength}`;

export default class SpatialCorrelations{
	
  // offset from axes origin point
  xoffset = 300
  yoffset = 300
	
  constructor(variables){
	let obj = this;
	
	
	obj.node = svg2element(template);
	
	obj.th = obj.node.querySelector("text.horizontal");
	obj.tv = obj.node.querySelector("text.vertical");
	
	
	obj.th.onclick = function(){console.log("Hello Horizontal!")};
	obj.tv.onclick = function(){console.log("Hello Vertical!")};
	
	// The variables need to include undefined/unknown, and that is the default selection everytime when the user doesn't specifically click on the menu. Every interaction should revert the menu selection back to unknown.
	obj.yvariable = "Unknown"
	obj.xvariable = "Unknown"
	
	// let varname1 = "Petal length";
    // let varname2 = "Stupidly long variable name";
  
  } // constructor
  
  update(){
	let obj = this;
	  
	let textmargin = 5; // offset between arrow and text
	  
	obj.node.querySelector("path.horizontal").setAttribute("d", `M${obj.xoffset - length},-${arrowheadwidth/2} ${relativeHorizontalArrow}`)
  
    obj.th.innerHTML = clipstring( obj.xvariable );
    obj.th.setAttribute("x", obj.xoffset - length - obj.th.getBoundingClientRect().width - textmargin )
    obj.th.setAttribute("y", -arrowheadwidth/2 + textmargin)
  
  
    
    obj.node.querySelector("path.vertical").setAttribute("d", `M${arrowheadwidth/2},-${obj.yoffset - length} ${relativeVerticalArrow}`)
  
    obj.tv.innerHTML = clipstring( obj.yvariable );
    obj.tv.setAttribute("x", obj.yoffset - length - obj.tv.getBoundingClientRect().height - textmargin )
    obj.tv.setAttribute("y", arrowheadwidth/2 + 3)
	  
  } // update
  
  
  position(p){
	let obj = this;
	obj.node.setAttribute("transform", `translate(${p[0]},${p[1]})`)
  } // position
  
} // SpatialCorrelations



function clipstring(s){
  let n_max = 15;
  return s.substr(0, n_max) + (s.length > n_max ? "..." : "");
} // clipstring