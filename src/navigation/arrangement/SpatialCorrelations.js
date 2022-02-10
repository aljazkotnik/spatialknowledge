import {svg2element, unique} from "../../helpers.js";
import CorrelationsMenu from "./CorrelationsMenu.js";

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
let arrowheadwidth = 15; // arrowheadwidth
let arrowheadlength = 20; // arrowheadlength
let length = 30; // whole arrow length

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
	obj.yvariable = "Unknown";
	obj.xvariable = "Unknown";
	
	
	obj.xmenu = new CorrelationsMenu(0);
	obj.ymenu = new CorrelationsMenu(1);
  
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
  
  
  calculate(d){
	let obj = this;
	
	// When collecting the scores we're banking on the fact that the originally created items are never destroyed. Only the groups get destroyed when no longer needed. Items are always accessed in the same order.
	
	let os = obj.ordinalscores(d);
	let cs = obj.categoricalscores(d);
	
	return os.concat(cs);
  } // calculate
  
  
  ordinalscores(d){
	let obj = this;
	
	
	let scores = d.ordinals.map(ordinal=>{
		
		let sp = [
		  spearman( d.spatial[0], ordinal ),
		  spearman( d.spatial[1], ordinal )
		]
		
		sp.name = ordinal.name
		return sp
	}) // forEach
	
	return scores
  } // ordinalscores
  

  
  categoricalscores(d){
	let obj = this;
	
	let scores = d.categoricals.map(categorical=>{
		
		// The categorical values need to first be mapped to ordinal values. The mapping in the x and y directions may be different.
		let mapping = categoricalmapping(d.spatial[0], d.spatial[1], categorical);
		
		let sp = [
		  spearman( d.spatial[0], categorical.map(c=>mapping[c].x) ),
		  spearman( d.spatial[1], categorical.map(c=>mapping[c].y) )
		]
		
		sp.name = categorical.name;
		
		// Provide the mapping also if it needs to be used outside.
		sp.mapping = mapping;
		return sp
	}) // forEach
	
	return scores
  } // get categoricalscores
  
} // SpatialCorrelations



function clipstring(s){
  let n_max = 15;
  return s.substr(0, n_max) + (s.length > n_max ? "..." : "");
} // clipstring




function categoricalmapping(x, y, v){
	// This is the mapping of a single metadata variable to numerical values. All that is needed are the x,y, and metadata values.
	let uniquevals = unique(v) // unique

	// Just assign all unique value their median point no? Or just return hte appropriate dictionary?
	return uniquevals.reduce(function(acc, uniqueval){
		
		
		let xpos = x.filter(function(_x,i){return v[i] == uniqueval})
		let ypos = y.filter(function(_y,i){return v[i] == uniqueval})
		
		
		acc[uniqueval] = {
			x: median(xpos),
			y: median(ypos)
		}
		return acc
		
	}, {}) // reduce
} // categoricalmapping
	







	





// ACTUAL STATISTICS FUNCTIONS

function spearman(x,y){
  // The inputs are two variable arrays, which are expected to also have a 'mu' and 'sigma' property.
  // Get Spearman's rank correlation scores for the order in the x direction.
  // (https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient)
  // The coefficient is
  // covariance (x_rank, y_rank ) / ( sigma(rank_x) sigma(rank_y) )
  
  // First precalculate some statistics:
  x = calcStatistics(x);
  y = calcStatistics(y);
  return covariance(x,y) / ( x.sigma*y.sigma )
} // spearman

function calcStatistics(A){
  // Give array A the mean, standard deviation, and name properties.
  A.mu = mean(A);
  A.sigma = variance(A)**0.5;
  A.sigma = A.sigma == 0 ? Infinity : A.sigma;
  return A
} // variable


function covariance(x,y){
	// 'd' is an array of observations. Calculate the covariance between x and the metadata variable.
	let N = x.length
	let s = 0;
	for(var i=0; i< N; i++) {
		s += ( x[i] - x.mu )*( y[i] - y.mu );
	}
	return 1/(N - 1)*s
} // covariance

function variance(x){
	// variance is a special case of covariance.
	return covariance(x,x)
} // variance

function median(numbers) {
	// https://stackoverflow.com/questions/45309447/calculating-median-javascript
    let sorted = numbers.slice().sort((a, b) => a - b);
    let middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
} // median

function mean(d){
	return sum(d)/d.length;
} // mean

function sum(objarray, accessor){
	let _accessor = accessor ? accessor : function(d){return d};
	return objarray.reduce((acc,obj)=>{
		return acc += _accessor(obj)
	},0)
} // sum



function range(A){
	// Math.min wants separate inputs.
	return A.reduce((acc, v)=>{
		acc[0] = v < acc[0] ? v : acc[0]
		acc[1] = v > acc[1] ? v : acc[1]
		return acc
	}, [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])
} // min
