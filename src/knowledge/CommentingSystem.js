import { html2element } from "../helpers.js";

import ChapterForm from "./commenting/ChapterForm.js";
import CommentingManager from "./commenting/CommentingManager.js";

/* COMMENTING SYSTEM

A class that handles all of the commenting system. Should be minimisable!!

*/

let template = `
<div></div>
`; // template


// Add top caret that hides the whole thing!! And the chapterform should maybe include a draw button.

export default class CommentingSystem{
  constructor(taskid){
	let obj = this;
	
	obj.node = html2element(template);
	
	
	
	// How will the chapter form know which time is currently selected? Should there be a dummy version that is assigned from the outside? So that the accessing can be done only when needed?
	obj.chapterform = new ChapterForm();
	obj.node.appendChild( obj.chapterform.node )
	
	
	// Add in the commenting system. The metadata filename is used as the id of this 'video', and thus this player. The node needs to be added also.
	obj.commenting = new CommentingManager( taskid );
	obj.node.appendChild( obj.commenting.node );
	
	
	// Tags will always be submitted straight to the server, which will then send them back. It's going to be tricky to deal with the upvotes/downvotes.
	obj.chapterform.submit = function(tag){
		
		// The KnowledgeManager must push the chapter annotations to:
		// the navigation tree as a group seed, the playbar as a chapter, and the commenting system as a conversation topic.
		console.log("Send to server", tag)
	} // submit
	
  } // constuctor
} // CommentingSystem