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
id, taskId, author, datetime, name, value, geometry, comment, upvotes, downvotes


Compulsory properties:
id, taskId, author, datetime, name


The id should be an annotation specific id!!! What should this be??? Just sequential numbers? Assigned at the server?

The tree should only track the knowledge, and not all the taskIds.
*/


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



export default class KnowledgeManager{
  constructor(nm){
	let obj = this;
	
	// `nm' is a NavigationManager object.
	// For now just push the given annotations to the tree?? Justto see if the tree is working? Where and how are the events attached to the tree?
	nm.tree.data = testannotations2;
	nm.tree.update();
	
	
  } // constructor
} // KnowledgeManager