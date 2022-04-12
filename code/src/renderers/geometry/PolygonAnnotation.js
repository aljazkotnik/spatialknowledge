import { html2element, svg2element } from "../../helpers.js";
import { multiplyPoint, multiplyArrayOfMatrices, invertMatrix } from "./matrices.js";

// <rect width=300 height=200 fill="gainsboro"></rect>
let template = `<svg class="gman" width=300 height=200 style="display: none; position: absolute; top: 0px;">
  <g class="annotations"></g>
</svg>`;

let toggle = `<button class="geometrytoggle" style="border: none; cursor: pointer; border-radius: 4px; background-color: gainsboro;">📐</button>`

export default class PolygonAnnotation{ 
  
  shown = false;
  transforms
  points = []
  
  pointradius = 10
  
  constructor(){
    let obj = this;
	obj.node = svg2element(template);
	obj.togglebutton = html2element(toggle);
	
	console.log(obj);
	
	// Mousedown is used, as mousedown implements the camera movements because onclick is for general dragging.
	obj.node.onmousedown = function(e){
	  e.stopPropagation()
		// Allow only one geometry at a time?
	  if(obj.points.closed){
			
	  } else {
		let M = obj.clipSpace2dataDomainMatrix;
		let I = obj.dataDomain2clipSpaceMatrix;
		
		
		// Need to account for the overall scaling here. clientWidth/Height are in the original units, whereas the bounding rect is in onscreen units.
		let boundingrect = obj.node.getBoundingClientRect();
		let k = boundingrect.width / obj.node.clientWidth;
		
		let viewrect = {
			height: obj.node.clientHeight,
			width: obj.node.clientWidth
		}; // obj.node.getBoundingClientRect();
		
		let p_pixel = [(e.clientX - boundingrect.x)/k, (e.clientY - boundingrect.y)/k];
		let p = multiplyPoint(M, [
		  2*p_pixel[0]/viewrect.width - 1,
		  2*(viewrect.height-p_pixel[1])/viewrect.height - 1,
		  0,
		  1
		])
		console.log("Hello world!", p)

		
		
		
		
		// The distance metric is in pixels, whereas teh domain distance isn't. So the distance needs to be transformed into data space for comparison.
		if(obj.points.length > 1){
			let origin = obj.points[0];
			let origin_pixel = dataDomain2svgDomain(I, viewrect, [origin[0], origin[1],0,1]);

			if( distance(origin_pixel, p_pixel) < (obj.pointradius+2)**2 ){
				obj.points.closed = true;
			} else {
				obj.points.push(p)
			} // if
		} else {
			obj.points.push(p);
		} // if
		
		
		obj.show();
	  } // if
		
		
	} // onmousedown
	
	
	// Wheel event triggers zooming. Prevent it, or force a redraw.
	obj.node.addEventListener("wheel", (e)=>{
		e.stopPropagation();
	})
	
	
	
	// The points need to be kept in domain coordinates if panning around needs to be supported. So the transformations need to be assigned to this class.
	
	
	
	// Attach a toggle on the geometry button to either show, or hide the geometry annotation SVG.
	// Onclick is captured and stopped somewhere else, so mousedown is looked for.
	var toggleState = true;
	var pressTimer;
	obj.togglebutton.onmouseup = function(){
	  // Toggle background color.
	  if(toggleState){
		let on = obj.togglebutton.style.backgroundColor == "black";
		obj.togglebutton.style.backgroundColor = on ? "gainsboro" : "black";
		on ? obj.hide() : obj.show();
	  } // if
		
	  // If mousedown was long enough to execute the clearing the mouseup shouldn't change the state.
	  clearTimeout(pressTimer)
	  toggleState = true;
	} // onmouseup
	obj.togglebutton.onmousedown = function(){
	  pressTimer = setTimeout(function(){
		// After a long-press the points should be cleared.
		obj.clear();
		toggleState = false;
	  },1000)
	} // onclick
	
  } // constructor
  
  
  draw(drawdata, area){
	  // Draw data is already in the SVG domain.
	  let obj = this;
	  let g = obj.node.querySelector("g.annotations");
	  if(!g){
		g = svg2element(`<g class="annotations"></g>`);
		obj.node.appendChild(g);
	  } // if 
	  
	  
	  
	  if(drawdata.length > 1){
		let d = drawdata.reduce((acc,p,i)=>{
		  let s = ` L${p[0]},${p[1]}`;
		  if(i==0){
			s = ` M${p[0]},${p[1]}`;
		  } // if
		  return acc + s
		}, "");
		
		let fill = "none";
		if(area){
			d += " Z";
			fill = "blue";
		} // if
		  
		// This is the path. Circles will also be needed.
		g.appendChild(svg2element(`<path d="${d}" fill="${fill}" opacity="0.3"></path>`));
		g.appendChild(svg2element(`<path d="${d}" fill="none" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"></path>`));
		g.appendChild(svg2element(`<path d="${d}" fill="none" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>`));
	  } // if
	  
	  
	  // Add also points. These would ideally be draggable. And they need to provide the snapping interactions!
	  drawdata.forEach((d,i)=>{
		  let outline = svg2element(`<circle cx="${d[0]}" cy="${d[1]}" r="${ obj.pointradius }" fill="black"></circle>`);
		  let inside = svg2element(`<circle cx="${d[0]}" cy="${d[1]}" r="${ obj.pointradius - 4 }" fill="white"></circle>`);
		  
		  g.appendChild( outline );
	      g.appendChild( inside );
		  
		  if(i==0){
			outline.onmouseover = function(){ outline.setAttribute("r", obj.pointradius+2) };
		    inside.onmouseover = function(){ outline.setAttribute("r", obj.pointradius+2) };
		    outline.onmouseout = function(){ outline.setAttribute("r", obj.pointradius) };
		  } // if
	  }) // forEach
	  
	  
  } // draw
  
  
  get clipSpace2dataDomainMatrix(){
	let obj = this;
	return multiplyArrayOfMatrices([
	  invertMatrix( obj.transforms.model ),
	  invertMatrix( obj.transforms.view ),
	  invertMatrix( obj.transforms.projection ),
	])
  } // clipSpace2dataDomainMatrix
  
  
  
  get dataDomain2clipSpaceMatrix(){
	let obj = this;
	return multiplyArrayOfMatrices([
	  obj.transforms.projection,
	  obj.transforms.view,
	  obj.transforms.model,
	])
  } // dataDomain2clipSpaceMatrix
  
  
  clear(){
	let obj = this;
	obj.node.querySelector(`g.annotations`).remove();
	obj.points = [];
  } // clear
  
  
  // Should the user be allowed to toggle on hte annotations in hte comments? And that would toggle them on the SVG? And multiple ones can be toggled at once?
  show(annotationdata){
	// `annotationdata' must be in the data domain.
	let obj = this;
	
	// The SVG needs to be shown before a viewrect is established.
	obj.node.style.display = "";
	obj.shown = true;
	
	// Matrix I transforms the domain coordinates to clip coordinates. The clip coordinates have to be further transformed into svg coordinates.
	let I = obj.dataDomain2clipSpaceMatrix;
	let viewrect = {
		height: obj.node.clientHeight,
		width: obj.node.clientWidth
	}; // obj.node.getBoundingClientRect();
	
	
	if(annotationdata){
		obj.draw(annotationdata.map( p=>dataDomain2svgDomain(I, viewrect, p) ), obj.points.closed);
	} // if
	
	
	// Draw the currently drawn points.
	obj.draw( obj.points.map( p=>dataDomain2svgDomain(I, viewrect, p) ), obj.points.closed ) // draw
	
	
  }; // show
  
  
  hide(){
	// Everytime the svg is hidden, remove the currently drawn geometry.
	let obj = this;
	obj.node.querySelector(`g.annotations`).remove();
	obj.node.style.display = "none";
	obj.shown = false;
  }; // hide
  
  
}; // PolygonAnnotation



// An additional transformation is required here to move from clip space to SVG space, instead of the webgl clip space to viewport transformation.
// Ok - points near the center follow the transforms better, apart from being inverted in y.
function dataDomain2svgDomain(M, viewrect, p){
	let pClip = multiplyPoint(M,p);
	return [(pClip[0] + 1)/2*viewrect.width,
			viewrect.height - (pClip[1] + 1)/2*viewrect.height]; 
} // dataDomain2svgDomain

function distance(a,b){
	return (a[0]-b[0])**2 + (a[1]-b[1])**2;
} // // distance
