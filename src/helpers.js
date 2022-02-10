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




export function isWithinBoundingClientRect(A, B){
	// A and B are expected to be the results of "getBoundingClientRect"
	return ( A.x > B.x && A.x < B.x + B.width ) &&
	       ( A.y > B.y && A.y < B.y + B.height );
} // isEventWithinRectangle



export class scaleCategorical {
  domain = []
  range = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf']

  // Opposite function is not defined - two domain values can map to the same range value.
  dom2range(v){
	let obj = this;
	if(v){
		let i = (obj.domain.indexOf(v)+1) % obj.range.length - 1;
		if(i<0){
			obj.domain.push(v);
			return obj.range[obj.domain.length-1];
		} else {
			return obj.range[i];
		} // if
	} else {
		// If v isn't a truthy just return black.
		return '#000000';
	} // if
  } // dom2range
  
} // scaleCategorical



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



// From regular helpers.
export function unique(d){		
	// https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
	function onlyUnique(value, index, self) { 
		return self.indexOf(value) === index;
	} // unique
	
	return d.filter( onlyUnique )

} // unique

export function arrayEqual(A, B){
	
	return arrayIncludesAll(A, B)
		&& arrayIncludesAll(B, A)
	
} // arrayEqual

export function arrayIncludesAll(A,B){
	// 'arrayIncludesAll' checks if array A includes all elements of array B. The elements of the arrays are expected to be strings.
	
	// Return element of B if it is not contained in A. If the response array has length 0 then A includes all elements of B, and 'true' is returned.
	var f = B.filter(function(b){
		return !A.includes(b)
	})
	
	return f.length == 0? true : false
} // arrayIncludesAll