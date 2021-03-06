import { arrayEqual } from "../../helpers.js";

import TreeBundle from "./TreeBundle.js";
import TreeLevel from "./TreeLevel.js";
/* 
A defined group hierarchy (groups, group members, and group parents have been established) is passed in. The input data is an array of groups to be drawn.

This is the background data based on which a tree chart can be established. Interactions with the tree don't change the underlying group hierarchy, only the drawn representation.
*/

/*
Node height -> number of bundles connecting to it
Node x -> depends on the levels and their widths
Node y -> position of parent nodes
Level width -> number of bundles
Bundle links -> parent/child nodes
*/

function getBundleLinesGoingThroughNode(bundle, node){
	// Given some bundles find which of its lines go through a specific node. Whether the lines are incoming or outgoing is not needed, because it's determined by the relationship between the bundles and the node. Instead the node must just be referenced by the line.
	return bundle.links.filter(link=>{
		return link.childnode == node || link.parentnode == node;
	}) // filter
} // getBundleLines
	
function arrangeIncomingOutgoingTracks(node, bundles){
	// This is for bundles coming in and out of a particular node. To draw the node I need to know where to start, how big it should be, and I should also know what the label is, and what the corresponding tags are. Each bundle should be staggered when entering a particular node. But bundles can also hold lines of several authors. These should be staggered as well.
		
	let outgoingbundles = bundles.filter(b=>{
		return b.parents.includes( node.connections.group );
	}) // filter
	
	let incomingbundles = bundles.filter(b=>{
		return b.children.includes( node.connections.group );
	}) // filter
	
	
	// Bundles spanning multiple levels should be all the way at the top. Then they should be ordered by bundle ind. Larger bendi means bend happens more to the right.
	incomingbundles.sort((a,b)=>{
		return b.level - a.level || b.bendi - a.bendi;
	}) // sort
	
	outgoingbundles.sort((a,b)=>{
		return b.level - a.level || b.bendi - a.bendi;
	}) // sort
	
	// This should be improved. First of all, the track indices and the bundle indices should be coordinated by sorting the lines by bundle ind before assigning the track ind. Secondly, it would be good if bundles of the same color could maintain same track positions...
	
	
	// Assign the index of track to enter the node by. Lines entering this node treat it as a child.
	incomingbundles.forEach((bundle,i)=>{
		let lines = getBundleLinesGoingThroughNode(bundle, node);
		lines.forEach(line=>{
			line.ci = i;
		})
	}) // forEach
	
	// Lines exiting hte node treat it as a parent.
	outgoingbundles.forEach((bundle,i)=>{
		let lines = getBundleLinesGoingThroughNode(bundle, node);
		lines.forEach(line=>{
			line.pi = i;
		})
	}) // forEach
	
	
	// Set number of incoming bundles.
	node.nBundlesIn  = incomingbundles.length;
	node.nBundlesOut = outgoingbundles.length;
	
		
} // arrangeIncomingOutgoingTracks

function arrangeBundlesOfLevel(bundles){
	
	bundles.sort((a,b)=>{
		// How to sort by similarity? Similarity is based on a pairs, not on individual. Maybe order by size, and then progressively do smaller sorts? Or just sort the nodes, and adjust the bundles to that?
		
		// Sort by size.
		return b.children.length - a.children.length;
	}) // sort
	
	
	
	// But it also depends on hte nodes in hte previous level? So just arrange them sensibly? Go through them and assign minimum y positions based on the parents. This can later be used to create further bundles?
	
	
	// Maybe the nodes should just track the indices of the paths that lead to them? Sort of a history? That would also allow the longest chain to be identified. And then the level indices of the paths/bundles can be used to determine the order.
	
	
	// Maybe if the up-path is also allowed it can be used to reclaim some space after a particular branch ends?
	
	// The bundle needs an ind for within the level. This can be used to sort the bundle links horizontally. The location of the vertical line segment is determined based on this index.
	let maxBundleInd = bundles.length - 1;
	bundles.forEach((b,i)=>{
		b.bendi = maxBundleInd - i;
	}) // forEach
	
	
} // arrangeBundlesOfLevel






function getbundles(nodes){
		
	// The bundles should be differentiated based on tag authors.
	let bundleseeds = nodes.filter(node=>{
		return node.connections.parents.length > 0;
	}) // filter
	
	
	// The `taskgroup' objects have several tags connected to them. Each tag represents a group that was created by some user. For every author of a group there should be a different bundle connecting to it. Even if the tag has only been created for that specific group.
	
	
	// Two bundles are not necessarily the same if htey have the same parents. They should be differentiated by the user tag also.
	
	let bundles = bundleseeds.reduce(function(bundles, node){
		
		// This node may belong to several bundles made by different authors. Find thos bundles, and if they can't be found create them.
		node.connections.group.tags.forEach(tag=>{
			let existing = bundles
			  .filter(b=>b.author==tag.author)
			  .filter(b=>arrayEqual(b.parents, node.connections.parents))
			  
			if(existing.length>0){
				existing.forEach(b=>{
					b.addchild(node)
				}) // forEach
			} else {
				bundles.push( new TreeBundle(node, tag.author) )
			} // if
		})
		
		return bundles
	}, []) // map
	
	
	
	// Go through hte nodes one more time to assign the parent nodes also. Originally only the groups are assigned as parents as the incoming nodes don't reference other nodes, but the groups do reference each other.
	// `treebundle' instances will check whether parents are valid.
	nodes.forEach(node=>{
		bundles.forEach(bundle=>{
			bundle.addparent(node);
		})
	}) // forEach
	
	
	// Make sure the bundles create all the required links.
	bundles.forEach(bundle=>{
		bundle.makelinks();
	})
	
		
	return bundles;
} // get bundles

function getlevels(nodes, bundles){
		
	// Always create all new levels!!
	let levels = []
	
	// Find all the levels from the bundles.
	let maxlevel = Math.max( ...nodes.map(n=>n.level) )
	for(let level=0; level<maxlevel+1; level++){
		levels.push( new TreeLevel(nodes, bundles, level) )
	} // for
  
	return levels
} // get levels



// Maybe devolve this one into TreeRender and hierarchy?

// The user can only click on the nodes to directly interact with the tree. Currently the 'collapsenode' is used for that.
export function dimensioning(nodes){
	// `dimension' calculates the positions of the nodes on the screen, and dimensions the connecting links.
	nodes.forEach(node=>node.clear())
  
	// Need to get teh levels so that I have a constant copy... mobx would probably improve this, but it'll do for now. Maybe it'd just be better to collect this with some sort of functions? And not getters?
	let bundles = getbundles(nodes);
	let levels = getlevels(nodes, bundles);
	
	
	// First order the bundles within hte levels.
	levels.forEach(level=>arrangeBundlesOfLevel(level.bundles)); // forEach
	
	
	// ASSIGN INCOMING/OUTGOING INDICES TO LINES.
	nodes.forEach(node=>arrangeIncomingOutgoingTracks(node, bundles)); // forEach
  
	
	// Last thing is to position the nodes. x positioning is controlled by the level they are on.
	let x = 0;
	levels.forEach(level=>{
		
		// Assigning x positions just depends on the level.
		x += level.width;
		level.nodes.forEach(n=>{
			n.x = x;
		}); // level.nodes
		
		
		// Recalculate the minimum node positions.
		level.bundles.forEach(b=>b.updateNodeMinBlockPositions());
				
		// Now sort the nodes by their miny to conserve as much space as possible.
		level.nodes.sort((a,b)=>{
			return a.block - b.block
		}) // sort
		
		
		// Run through htem again to assign unique block ids to them. This should already produce a block ordered array of nodes.
		// Min block positions are not necessarily 0 - the blocks may begin lower down. Just offset from previous.
		let block = 0; // 0
		level.nodes.forEach(n=>{
			n.block = Math.max(n.block, block);
			block = n.block + 1;
		}); // forEach
		
		
		
		
		// After blocks are assigned do the positioning. This also depends on the links. If a link is expected to connect the same blocks it will be horizntal, and hte node positions should be adjusted accordingly.
		
		// The block are supposed to already separate the nodes vertically, now we're just figuring out the small adjustments.
		
		
		
		// The assignment has to be done via links!
		var y = 0;
		level.bundles.forEach(bundle=>{
			bundle.links.sort((a,b)=>{
				return a.childnode.block - b.childnode.block
			}); // sort
			
			// Bundle links can always only be at the same level as parents, or below.
			y = Math.max(y, bundle.childMinimumY());
			
			
			// Bundle links nodes may have already been positioned - by a parallel path connecting hte same nodes.
			// If there are multiple prents, then they will have positioned the childnode twice also!
			
			// It's intra-bundle that causes the bundle positioning!
			
			bundle.links.filter(lnk=>!lnk.childnode.positioned).forEach(lnk=>{
				
					if(lnk.parentnode.block == lnk.childnode.block){
						lnk.childnode.yBasedOnIncomingHorizontalLine(lnk.parentnode.calculateOutgoingLineY(lnk.pi), lnk.ci ) ;
					} else {
						lnk.childnode.y = y;
					} // if
					
					// The y position for hte next node. This should be global!
					lnk.childnode.positioned = true;
					y = lnk.childnode.y + lnk.childnode.markerSize + lnk.childnode.pitch;
				
			})
			
		}) // forEach
		
		
		
		
	}) // forEach

	return {
		nodes: nodes,
		bundles: bundles
	}
} // dimensioning






