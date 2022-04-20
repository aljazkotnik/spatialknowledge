/* 
UnsteadyPlayer2D is a player option for the class `Individual' small multiple
ViewFrame2D controls the viewport and user interactions
Camera2D keeps track of the user itneractions
PlayBar handles the playbar interactivity
MeshRenderer2D actually does the GPU drawing
*/


import { html2element } from "../helpers.js"; 


// Load in hte external modules. Should all this be wrapped up in one item?
import Chessground from "./chess/chessground_es.js";
import Chess from "./chess/chess.js";
import PlayControls from "./playbar/PlayControls.js";




let template = `
<div style="position: relative;">
  <div class="view" style="width:300px; height:300px;"></div>
  <div class="controls"></div>
</div>
`; // template



export default class ChessGameRenderer {
  constructor(gamepgn){
    // The superclass requires the viewnode to attach the required events..
	let obj = this;
	obj.node = html2element( template );
	
	// The FPS at which to swap out data.
	obj.fps = 24;
	obj.dt = 1000 / obj.fps;
	obj.timelastdraw = 0;
	
	
	
	
	// `Chess' finds the available legal moves.
	obj.chess = new Chess();
	
	
	// `pgn' is teh sequence of moves played, `fen' is the current state of the game.
	obj.pgn = gamepgn;
	
	
	// Position within the series.
	let plies = gamepgn.split(" "); // split by gaps.
	plies.splice(plies.length-1,1); // last one is points allocation
	obj.plies = plies.filter(function(v,i){return i%3 != 0}); // Filter out move number.
	
	
	// Convert the individual moves to FEN positions for easier navigation.
	obj.plies_fen = obj.plies.reduce((acc,ply)=>{
		obj.chess.move(ply)
	    acc.push(obj.chess.fen());
		return acc
	},["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"]); // reduce
	obj.chess.reset();
	
	obj.plyind = -1;
	obj.plyind_prev = undefined;
	
	
	// Configure the chess board renderer. Here we need to pass in the div to draw to.
	obj.board = Chessground(obj.node.querySelector("div.view"), {
		viewOnly: false, 
		movable: {
			free: false,
			events: {
				after: function(orig, dest){
					// After a move the new available moves need to be established. For that the chessboard needs to produce a fen for the chess module, which can then calculate the possible moves.
					obj.chess.move({"from": orig, "to": dest});
					obj.enforceAvailableMoves()
				}
			}
		}
	});
	obj.enforceAvailableMoves();
	
	
	
	// On board move the available moves should be updated. How do I achieve that?
	
	
	
	
	// WHAT OTHER METODS ARE REQUIRED??
	// GEOMTRYANNOTATION OBJ
	obj.geometryannotation = {
		submit: function(){
			// Retain only the basic items. Should also set an empty shapes array...
			let a = {
				fen: obj.chess.fen(),
				shapes: obj.board.state.drawable.shapes.map(s=>{
					return {
						orig: s.orig,
						dest: s.dest
					}
				})
			};
			
			// Clear the board.
			obj.board.set({
				drawable: {
					shapes: []
				}
			}); // set
			
			return a
		},
		show: function(previewconfig){
			// This is supposed to show the current annotation - the chessground module supports that already.
			
			// The tag has a specific fen to display. When previewing the annotation it should be shown.
			// How will selecting the annotations happen? Should they be on-screen only if the fen are the same? Or should they be FEN independent? And toggling them on just shows them without showing the preview? Nah, toggling will show the latest one.
			// The playbar should move simultaneously?
			
			if(previewconfig){
				obj.plyind_prev = obj.plyind;
				
				// Clear the annotation state.
				obj.board.state.drawable.shapes = [];
				
				let plyind = obj.plies_fen.indexOf(previewconfig.fen);
				obj.ply(plyind);
				
				// Redrawing of annotations should also remove hte previous set.
				obj.drawGeometryAnnotations(previewconfig.shapes);
				
			} else {
				obj.ply(obj.plyind_prev)
				obj.plying_prev = undefined;
				
				obj.board.state.drawable.shapes = [];
				obj.board.redrawAll();
			}; // previewconfig
			
			
			
			
		}
	};
	
	
	// Add in precofigured UI. The metadata filename identifies this small multiple.
	obj.ui = new PlayControls();
	obj.node.querySelector("div.controls").appendChild(obj.ui.node);
	
	
	obj.ui.bar.t_min = 0;
	obj.ui.bar.t_max = obj.plies.length-1;
	obj.ui.bar.rebuild();
	obj.ui.bar.update();
	
	// The SVG elements can handle their own updating, and there is no global renderer anyway.
	// Maybe just keep an requestAnimationFrame running? Or do it with setTimeout? setTimeout is likely less wasteful.
	obj.ui.button.node.addEventListener("click", event=>{
		// Will the rendering loop have to be redone in order to allow promises to be returned to ensure that the player is ready for the next step?
		if(obj.ui.playing){
			obj.ply(obj.plyind+1);
			obj.interval = setInterval(function(){
			    obj.ply(obj.plyind+1);
			}, 1000);
		} else if ( obj.ui.skipped ){
			clearInterval(obj.interval);
			obj.ply(  Math.floor( obj.ui.bar.t_play ) )
			obj.ui.skipped = false;
		} else {
			clearInterval(obj.interval);
		} // if
		
		
		
	}) // addEventListener
	
	
	obj.ui.bar.node.addEventListener("click", event=>{
		if(!obj.ui.playing && obj.ui.skipped){
			// Ok, when skipped the situation needs to be rebuilt. The chess module needs to be restarted in case variations have been played.
			obj.ply(  Math.floor( obj.ui.bar.t_play ) );
		} // if
	}) // addEventListener
	
	
  } // constructor
  
  
  
  
  
  ply(plyind){
	// This increments the plyind. I could then even make a computed value of `fen`, and only then ask the rerender.
	var obj = this;
	
	if(plyind > obj.ui.bar.t_max){
		obj.plyind = obj.ui.bar.t_max;
		obj.ui.playing = false;
		clearInterval(obj.interval);
	} else {
		obj.plyind = plyind < 0 ? 0 : plyind;
	} // if
	
	
	// Also keep the chess module up to date - it's needed for variations.
	obj.chess.reset();
	obj.chess.load(obj.plies_fen[obj.plyind]);
	
	
	// Find and play the next ply.
	obj.board.set({
		fen: obj.plies_fen[obj.plyind],
		movable: {
			showDests: true,
			dests: obj.calculateAvailableMoves()
		}
	});
	
	
	
	
	obj.ui.t_play = obj.plyind;
	
	
	// Keep enforcing the available moves.
	obj.enforceAvailableMoves();
  } // ply
  
  
  
  
  get isOnScreen(){
	// Check whether the viewframe is still on hte canvas screen. If it's display has been set to "none" then just return a false. "display: none" will be required when introducing the grouping interfaces.
	let obj = this;
	
	let isOnScreen = false;
	if(obj.node.style.display != "none"){
		let rect = obj.node.getBoundingClientRect();
    
		let isOffScreen = 
		  (rect.bottom < 0 || rect.top > window.innerHeight) || 
		  (rect.right < 0 || rect.left > window.innerWidth)
		  
		isOnScreen = !isOffScreen;
	} // if
	
	return isOnScreen;
  } // isOnScreen
  
  
  
  
  drawGeometryAnnotations(shapesconfigs){
	// shapesconfigs is an array of annotation squares
	let obj = this;
	
	let shapes = shapesconfigs.map(an=>{
		return {
			brush: "green",
			orig: an.orig,
			dest: an.dest
		}
	}) // map

		
	obj.board.set({
		drawable: {
			shapes: shapes
		}
	})
  } // drawGeometryAnnotations
  
  
  
  calculateAvailableMoves(){
	let obj = this;
	
	// obj.chess.turn -> get the current player w/b
	let currentplayer = obj.chess.turn();
	
	
	// obj.board.state.pieces is a Map, and does not have a reduce, or filter.
	
	let playermoves = [];
	
	
	obj.board.state.pieces.forEach((piece,square)=>{
		if(piece.color[0] == currentplayer){
			let moves = obj.chess.moves({square: square, verbose: true});
			playermoves.push([square, moves.map(m=>m.to)])
		} // if
	})
	
	
	return new Map(playermoves)
  } // calculateAvailableMoves
  
  
  enforceAvailableMoves(){
	let obj = this;
	
	let availableMoves = obj.calculateAvailableMoves();
	obj.board.set({
		movable: {
			free: false,
			showDests: true,
			dests: availableMoves
		}
	})
  } // enforceAvailableMoves
  
  
} // ChessGameRenderer