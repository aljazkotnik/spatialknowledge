

/*
This class should connect with the server to get and save the knowledge captured.

Where should the tree be drawn also? Top left, as before?


Where in the code hierarchy should KnowledgeManager sit? Below or above NavigationManager. Maybe above is fine?

What kind of knowledge is there, and what does it need to interact with, and how:

- Structured tags: name/value pairs equivalent to ordinal/categorical metadata variables
	ordinal name-spatial value pairs: global menu
	categorical name-spatial value pairs: global menu
- Unstructured tags: keywords saved as a list for each metadata row
    name: existing chapter form
- Annotations: timestamp/line/area data with a keyword attached
    name-timestep: existing chapter form
	name-line: drawing interaction
	name-area: drawing interaction
- Comments:
	text: exiting comment form


All properties	
id, taskId, author, datetime, name, value, timestamps, geometry, comment, upvotes, downvotes


Compulsory properties:
id, taskId, author, datetime, name


The id should be an annotation specific id!!! What should this be??? Just sequential numbers? Assigned at the server?

The tree should only track the knowledge, and not all the taskIds.
*/




/*
      Database doesn't exist yet - create Knowledge table. Single table could hold all possible annotations.
      
      id - annotation id, created on the fly by SQL table
      type - annotation type (tag, chapter, name-value pair,...)
      taskId - the taskId it corresponds to
      author - who contributed the knowledge
      datetime - when was it contributed, created server side
      name - tag name
      value - tag value
      timestamps - chapter start and end times saved as stringified array
      geometry - stringified array of [x,y] arrays
      comment - text comment
      upvotes - string of authors that upvoted, with special server-side update method
      downvotes - string of authros who downvoted, with special server-side update method
*/


/*



// Task 11 is in two groups!!
const testannotations = [
{id: "0", name: "green", taskId: "task 2", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "1", name: "green", taskId: "task 7", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "2", name: "green", taskId: "task 11", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "3", name: "blue", taskId: "task 5", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "4", name: "blue", taskId: "task 6", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "5", name: "blue", taskId: "task 11", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "6", name: "brown", taskId: "task 1", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "7", name: "brown", taskId: "task 3", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "8", name: "brown", taskId: "task 4", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "9", name: "brown", taskId: "task 8", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "10", name: "brown", taskId: "task 13", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "11", name: "brown", taskId: "task 15", author: "Aljaz", datetime: "Tue Feb 08 2022"}
]; // testannotations



const testannotations2 = [
{id: "0", name: "B", taskId: "task 1", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "1", name: "B", taskId: "task 2", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "2", name: "B", taskId: "task 3", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "3", name: "B", taskId: "task 4", author: "Aljaz", datetime: "Tue Feb 08 2022"},

{id: "4", name: "C", taskId: "task 3", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "5", name: "C", taskId: "task 4", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "6", name: "C", taskId: "task 5", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "7", name: "C", taskId: "task 6", author: "Aljaz", datetime: "Tue Feb 08 2022"},

{id: "8", name: "D", taskId: "task 3", author: "Magda", datetime: "Tue Feb 08 2022"},
{id: "9", name: "D", taskId: "task 4", author: "Magda", datetime: "Tue Feb 08 2022"},
{id: "10", name: "D", taskId: "task 5", author: "Magda", datetime: "Tue Feb 08 2022"},
{id: "11", name: "D", taskId: "task 6", author: "Magda", datetime: "Tue Feb 08 2022"},

{id: "12", name: "E", taskId: "task 7", author: "Magda", datetime: "Tue Feb 08 2022"},
{id: "13", name: "E", taskId: "task 8", author: "Magda", datetime: "Tue Feb 08 2022"},
{id: "14", name: "E", taskId: "task 9", author: "Magda", datetime: "Tue Feb 08 2022"},

{id: "15", name: "F", taskId: "task 3", author: "Aljaz", datetime: "Tue Feb 08 2022"},
{id: "16", name: "F", taskId: "task 4", author: "Aljaz", datetime: "Tue Feb 08 2022"},

{id: "17", name: "G", taskId: "task 8", author: "Magda", datetime: "Tue Feb 08 2022"},
{id: "18", name: "G", taskId: "task 9", author: "Magda", datetime: "Tue Feb 08 2022"},
]; // atestannotation2


*/





export default class KnowledgeManager{
  constructor(nm){
	let obj = this;
	
	// `nm' is a NavigationManager object.
	// Keep a reference to the navigation manager, because the tree navigation must have it's data updated with the knowledge, and the items can be accessed through it.
	obj.nm = nm;
	
	
	
	
	
	
	
	
	
	
	

	/* WEBSOCKET INITIALISATION
	So - send over a list of taskIds, and then get back the initial set of comments.
	Everytime the connection is remade the comments will reload.
	*/

	
	const serverAddress = "wss://continuous-brief-nylon.glitch.me"; 
	setupWebSocket();

	function setupWebSocket(){
		/*
		The websocket connection can be closed if there is a connection problem between
		the client and server, or if the connection is inactive for too long. In case
		there is an error when opening the connection the client tries to reconnect after
		1s. It also tries to reconnect if the connection is closed for some reason. To
		minimise the reconnections due to inactivity the client pings the server every t<300s
		to maintain the connection. The server pongs it back to keep the connection on its side.
		*/
		obj.ws = new WebSocket(serverAddress, "json");
		
		obj.ws.onerror = function(){
			setTimeout(setupWebSocket, 1000);
		}; // onerror
		
	  
		obj.ws.onopen = function(){
			// When the connection is initialised the server should send all pertinent comments.
			obj.ws.send( JSON.stringify({type: "query"}) )
		  
			function ping(){
			   // This should recursively call itself.
			   console.log("ping")
			   obj.ws.send(JSON.stringify({type: "ping"}));
			   setTimeout(ping, 100*1000); // 299*1000   
			} // ping
			
			ping();
		}; // onopen
		
		// This will have to be reworked to differentiate between message and upvotes. Ultimately also annotations.
		obj.ws.onmessage = function(msg){
		  // Should differentiate between receiving a 'pong', receiving a single item, and receiving an array.
		  // A single item is just added, while an array requires a purge of existing comments first.
		  let action = JSON.parse( msg.data );
		  console.log(action)
		  switch(action.type){
			case "pong":
			  break;
			case "query":
			  // Purge the existing comments
			  obj.purge();
			case "relay":
			  // But relays can be new comments, or they can be upvotes/downvotes/...
			  obj.process(action.data)
			  break;
		  }; // switch
		  
		}; // onmessage
	  
		obj.ws.onclose = function(){
			setTimeout(setupWebSocket, 1000);
		}; // onclose
	} // setupWebSocket





	/* IMPLEMENT THE POSTING DIRECTLY FROM THE FORMS
	The forms have dummy `submit' methods added to them, which receive the collected information as an input. The rest of the information should be fed into this object here.
	
	*/


	
	/* Configure the items to send things to the server
	WebSockets support sending and receiving: strings, typed arrays (ArrayBuffer) 
	and Blobs. Javascript objects must be serialized to one of the above types 
	before sending.
	
	type: comment allows the server to handle different packages differently.
	*/
	nm.items.forEach(item=>{
		item.commenting.chapterform.submit = function(tag){
			
			/* The author and taskId are obligatory
			Author is required to fom groups for the treenavigation, and the taskId allows the annotations to be piped to the corresponding data.
			*/ 
			if(obj.username){
				tag.taskId = item.task.taskId;
				tag.author = obj.username;
				
				obj.ws.send( JSON.stringify( tag ) );
			} else {
				console.log("You need to log in", tag)
			} // if			
		} // onclick
	}) // forEach




	// Loop to keep updating the comments every 10 seconds - this is just so that the time labels are getting updated.
	/*
	function update(){
	  comments.forEach(c=>{
		c.update()
	  }) // forEach
	  setTimeout(update, 10*1000)
	} // update
	update();
	*/
  } // constructor
  
  
  get username(){
	return document.getElementById("username").value
  }
  
  
  
  purge(){
	let obj = this;
	// What needs to be purged? The knowledge manager doesn't keep track of the individual annotations anyway? Maybe cause the underlying modules to drop their knowledge?
	
	// Purge the navigation tree of obsolete knowledge.
	obj.nm.tree.purge();
	
	
	console.log("Purging")
  } // purge
	
  process(d){
	let obj = this;
	

	// How will this processing work? First filter by taskId, and then filter by type?
	// I'm expecting to see tags, chapters, comments for now.
	
	
	// All the tags can be pushed to the tree. But this is really pushed, not replaced!!
	let tags = d.filter(a=>a.type==="tag");
	tags.forEach(tag=>{
		obj.nm.tree.addtagannotation(tag);
	}) // forEach
	obj.nm.tree.update();
	
	
	// The chapters need to be distributed to hte appropriate items.
	
	
	console.log("Process", d)
  } // process
} // KnowledgeManager












