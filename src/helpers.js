export function html2element(html){
  let template = document.createElement('template'); 
  template.innerHTML = html.trim(); // Never return a text node of whitespace as the result
  return template.content.firstChild;
} // html2element

export function svg2element(svg){
  let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.innerHTML = svg.trim();
  return g.firstChild;
} // svg2element




// How to make the addition of dragging more general?? There are some things that have to happen. Pass them in as additional functions?
export function addDraggingToItem(item, onstart, ondrag, onend){
	// Add an object to facilitate the dragging.
	
	let active = false;
	let itemRelativePosition = [0, 0];
	
	item.node.onmouseenter = function(){
		active = false;
	} // onmouseenter
	item.node.onmouseleave = function(){
		active = false;
	} // onmouseleave
	item.node.onmousedown = function(e){
		if(e.target == item.node || e.target == item.wrappednode){
			let rect = item.node.getBoundingClientRect();
			
			active = true;
			itemRelativePosition = [
				e.clientX - rect.x,
				e.clientY - rect.y
			];
			
			
			// Also move the viewFrame div up so that dragging over otehr higher divs is uninterrupted.
			item.node.parentNode.insertBefore(item.node, null);
			
			if(onstart){onstart()} // if
		} // if
	} // onmousedown
	item.node.onmousemove = function(e){
		if(active){
			let x = e.pageX - itemRelativePosition[0];
			let y = e.pageY - itemRelativePosition[1];
			
			item.node.style.left = x + "px"
			item.node.style.top  = y + "px"
			
			if(ondrag){ondrag()};
		} // if
	} // mousemove
	item.node.onmouseup   = function(){
		active = false;
		if(onend){onend()};
	} // onmouseup
} // addDraggingToItem




// Will I need this dragging elsewhere??
export function addDraggingToSvgItem(svg, item){
	// SVG movement should be done in SVG coordinates. As the SVG is small, and never moves off screen, the relative position can be calculated on hte go.
	// The item can never move off the svg, as when it's dragged to the border and the mouse moves over the edge it stops being dragged. The rectangle is well behaved when the mouse re-enters the svg, and only skips when the rectangle is re-entered. Still, it may be good to stop the dragging if th emouse leaves the svg.
	
	let active = false;
	let clickedItemOffset = [0,0];
	
	
	item.onmousedown = function(e){
		active = true;
		
		// Correcting for clicked position within item.
		let itemClientRect = item.getBoundingClientRect();
		clickedItemOffset = {
			x: itemClientRect.x - e.clientX,
			y: itemClientRect.y - e.clientY
		} // clickedItemOffset
	} // onmousedown
	item.onmousemove = function(e){
		if(active){
			// Convert the mouse position into the position within the parent SVG:
			let svgClientRect = svg.getBoundingClientRect();
			
			// Check if the mouse left the svg.
			if(isEventWithinRectangle(e, svgClientRect)){
				let x = e.clientX - svgClientRect.x + clickedItemOffset.x;
				let y = e.clientY - svgClientRect.y + clickedItemOffset.y;
				
				item.setAttribute("x", x)
				item.setAttribute("y", y)
			} else {
				active = false;
			} // if
			
		} // if
	} // mousemove
	item.onmouseup   = function(){
		active = false;
	} // onmouseup
} // addDraggingToItem


export function isEventWithinBoundingClientRect(e, rect){
	return ( e.clientX > rect.x && e.clientX < rect.x + rect.width ) &&
	       ( e.clientY > rect.y && e.clientY < rect.y + rect.height );
} // isEventWithinRectangle



export class scaleLinear {
  
  _domain = [0, 1]
  _range = [0, 1]

  set domain(d){ this._domain = d } // domain
  get domain(){ return this._domain } // domain

  set range(r){ this._range = r } // range
  get range(){ return this._range } // range

  dom2range(v){
	return mapSpaceAValueToSpaceB(v, this.domain, this.range)
  } // dom2range
  
  range2dom(v){
	return mapSpaceAValueToSpaceB(v, this.range, this.domain)  
  } // range2dom
} // scaleLinear

function mapSpaceAValueToSpaceB(v, A, B){
	return (v-A[0])/(A[1]-A[0]) * (B[1]-B[0]) + B[0]
} // mapSpaceAValueToSpaceB