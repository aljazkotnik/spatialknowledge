import { html2element } from "../../helpers.js";
import AddCommentForm from "./AddCommentForm.js";
import GeneralComment from "./GeneralComment.js"; 
import DiscussionSelector from "./DiscussionSelector.js";

// Needs a way to minimise the commenting completely.
let template = `
<div class="commenting" style="width:300px; margin-top: 10px;">
  <div class="hideShowText" style="cursor: pointer; margin-bottom: 5px; color: gray;">
    <b class="text">Show comments</b>
	<b class="counter"></b>
	<i class="fa fa-caret-down"></i>
  </div>
  <div class="commentingWrapper" style="display: none;">
    <div class="comment-form"></div>
    <hr>
    <div class="comment-tags"></div>
    <div class="comments" style="overflow-y: auto; max-height: 200px;"></div>
  </div>
</div>
`; // template


export default class CommentingManager{
	
  comments = [];
	
  constructor(){
    let obj = this;
	obj.node = html2element( template );
	
	
	// Make the form;
    obj.form = new AddCommentForm();
    obj.node.querySelector("div.comment-form").appendChild(obj.form.node);
  
  
    
	
	
	// Add the comment tags, which serve as selectors of the discussion topics. This should be another module. At the saem time this one will have to update when the module is updated. Maybe the placeholder reactions function should just be defined here??
	/*
	obj.discussion = new DiscussionSelector();
    obj.node.querySelector("div.comment-tags").appendChild(obj.discussion.node);
    // obj.discussion.update(["#vortex", "#shock"])
	obj.discussion.externalAction = function(){
		obj.hideNonDiscussionComments();
	} // externalAction
	
	
	// At the beginning show only general comments? Better yet, show no comments.
	obj.hideNonDiscussionComments();
	*/
	
	// Finally add teh controls that completely hide comments.
	let hsdiv = obj.node.querySelector("div.hideShowText");
	let cdiv = obj.node.querySelector("div.commentingWrapper");
	hsdiv.onmousedown = function(e){
	  e.stopPropagation();
	  let hidden = cdiv.style.display == "none";
	  cdiv.style.display = hidden ? "" : "none";
	  
	  // It changed from hidden to show, but hidden is past state.
	  hsdiv.querySelector("b.text").innerText = hidden ? "Hide comments" : "Show comments";
	  hsdiv.querySelector("i").classList.value = hidden ? "fa fa-caret-up" : "fa fa-caret-down";
	} // onmousedown
	
  } // constructor
  
  /*
  hideNonDiscussionComments(){
	let obj = this;
	obj.comments.forEach(comment=>{
      // This should really be select any!
	  let pertinent = (obj.discussion.selected.length == 0) 
	               || (obj.discussion.selected.some(d=>comment.config.tags.includes(d)));
	  comment.node.style.display = pertinent ? "" : "none";
	}) // forEach
  } // hideNonDiscussionComments
  */
  
  updateCommentCounter(){
	let obj = this;
	
	/*
	let n = obj.comments.reduce((acc,c)=>{
		acc += 1
		acc += c.replies.length;
		return acc
	},0)
	*/
	let n = obj.comments.length;
	let counterNode = obj.node
	  .querySelector("div.hideShowText")
	  .querySelector("b.counter");
	counterNode.innerText = n ? `(${n})` : "";
	
  } // updateCommentCounter
  
  
  purge(){
	let obj = this;
	obj.comments = [];
	let commentsToRemove = obj.node.querySelector("div.comments").children;
	for(let i=0; i<commentsToRemove.length; i++){
		commentsToRemove[i].remove();
	} // for
  } // purge
  
  

  
  add(comments){
	// The comments come solely from the server. They are not updated, and can just be created once. 
	let obj = this;
	  
	// Store all of them as a record.
	obj.comments = obj.comments.concat(comments);
	
	// Just add the new ones in.
	comments.forEach(comment=>{
		// No replying for now.
		let c = new GeneralComment(comment);

		// Insert the new comment at teh very top.
		let container = obj.node.querySelector("div.comments");
		container.insertBefore(c.node, container.firstChild);
			
	}) // forEach	
	
	
	// Update the comment section header:
	obj.updateCommentCounter();
	
  } // add
  
  
  
  // The user may be needed here as the upvotes/downvotes need to be colored.
  get user(){
	return this.form.user;
  } // get user
  
  set user(name){
	let obj = this;
	
	// The form has a change of author.
	obj.form.user = name;
	
	// The comment appearance and functionality changes depends on who is checking them.
	obj.comments.forEach(comment=>{
	  comment.user = name;
	  comment.update();
	}) // forEach
  } // set user
  
} // CommentingManager


function findArrayItemById(A, id){
  let candidates = A.filter(a=>{
	return a.id == id;
  }) // filter
  
  return candidates.length > 0 ? candidates[0] : false;
} // findArrayItemById

function arrayIncludesAll(A,B){
  // 'arrayIncludesAll' checks if array A includes all elements of array B. The elements of the arrays are expected to be strings.
	
  // Return element of B if it is not contained in A. If the response array has length 0 then A includes all elements of B, and 'true' is returned.
  var f = B.filter(function(b){
	return !A.includes(b)
  })
	
  return f.length == 0? true : false
} // arrayIncludesAll



























