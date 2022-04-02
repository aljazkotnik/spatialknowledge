Eurovis 2022, deadline abstract/submission: 
 - full paper (Nov 24/Dec 2 2021) 
 - short paper (Feb 28 2022)
What would we put in the short paper?

VISION: IEEE outline (deadline 21st of March):

- LITERATURE REVIEW
	Grouping: all the papers related to piling
	Spatial navigation: computer games?
	Spatial arrangement: semantic interaction and the differences to our approach
	Knowledge capture: ?? web/company forums?
	Knowledge visualisation: ?? figures in textbooks?

- GROUPING:
	Similarly splitting the effort to find differences between groups and differences within groups. The users should be able to interact with ~100 small multiples at once, and navigate the workspace by panning and zooming. 

    The grouping via lasso can be reused. The navigation already occupies the single click interaction, so maybe the middle mouse click can launch the lasso? For touch screem interactions the panning and zooming could be done with two finger interactions, whereas the small multiple dragging and lasso could be done with a single finger interaction.
	
	Relative positions of the members when grouped should be saved. When the group is dismissed or entered the members can be repositioned using the saved relative positions.


- SPATIAL NAVIGATION: 
    use the minimap to move around, and zoom in and out to adjust the space needed. The small muliples should change in size depending on the zoom level. Panning and zooming should be supported on the main work area also. This is a cmplicated relationship, as both the main work area and the minimap influence each otehr, and the user can interact with both.
  
    The minimap allows the knowledge to be highlighted spatially as well (e.g. with a polygon that covers all items with the same tags) - this is analogous to common textbook figures wich use shading to demarcate regions with particular behaviors. All items with the same tag WILL form a group in the navigation tree, and so the tree nodes can be used to draw this spatial representation.)

- SPATIAL ARRANGEMENT:
    The dragging used in previous demos can be reused. Previous demos could have used a batch move interaction - the user may want to move several small multiples at once. By storing the relative positions the group could be used as a batch move.
	
	Instead of a correlation menu maybe it's neater to present two "axes arrows" (one top left, and one bottom right), with associated dropdown menus to select metadata variables to arrange by, and to show correlation results. The advantage of the dropdown representation is that the plot isn't cluttered, and te interaction is obvious.

	ML/AI arrangement techniques could potentially be reused. Note that t-SNE will require similar sized grids as inputs: for the turbigen 2D unsteady dataset these could be one stator and rotor blocks each, however the question is whether the number of rotors/stators won't dominate the classification?


- KNOWLEDGE CAPTURE:
    A username, and thus username login input is required on the GUI. For simplicity just accept any string put inside as a valid username.
	
	- Structured tags: name/value pairs equivalent to categorical metadata variables
	- Unstructured tags: keywords saved as a list for each metadata row
	- Annotations: timestamp/line/area data with a keyword attached

	comments and unstructured tags (including chapters - timestep annotations) can be entered through the commenting system.
	
	Structured tags are based on the general arrangement, and therefore need to be added outside the individual small multiples, possibly through a menu on the HUD.
	
	Spatial arrangemnt is also knowledge, and can be captured. spatial arrangement vs semantic interaction.
	
	Tags are keywords and allow the saving of grouping selections: - when a new group is created it must be given a tag, then saving theags saves the grouping.
  annotations are line/area/volume notes added to the visualisation. The coordinates of the graphic are stored with the hashtag, so they can be added to the scene.
  
    Comments allow capture of specific insights on the spot (ease of capture), and combines all relevant specific insights for groups. The knowledge remains directly connected to the data for interaction, but simultaneously allows a "web-forum" environment for people to ask and answer questions (like aviation.stackexchange, quora). The comments are organised into threads: each thread represents one keyword (denoting some feature) added by the users, and contains all the relevant comments.

- KNOWLEDGE VISUALSIATION AND NAVIGATION 
	
    All the knowledge (structured/unstructed tags, annotations) is stored for all the users, and can be visualised through the tree simultaneously. The nodes can be collapsed to focus on a particular subset of the knowledge, and allow navigation to specific groups. The knowledge groups can be highlighted on the minimap as well, to get a spatial representation of its extent.



Good, clearly worked through examples would be needed for IEEE. Set some time aside for an analysis of the turbigen 2D unsteady turbine design data?



PRACTICAL CONSIDERATIONS: SEMINAR DAY (18th of February):
Intro: last seminar recap
  - canvas contours
  - grouping (no special cover image by default): WIP
      The grouping interactions are defined. The dragging interaction requires to have access to the groups that are currently on the screen. A good approach turned out to be to always keep the original small multiples, and when a group is created all of the tasks are passed to a new group small multiple, and the individual ones are hidden. To simplify the code the small multiple javascript object representation should be adapted so it can serve either as an individual small multiple, or a group small multiple.
  - spatial arrangement: DONE
  - spatial navigation: WIP - zooming done by scale
  - minimap global visualisation: WIP - keep an accurate current view on the minimap
  - spatial correlation: DONE
New 1: unsteady turbine visualisations
  - requestAnimationFrame main loop: DONE
      In the AIAA example there was a global loop to ensure all drawings are rerendered at the same time (also allegedly increases performance), which required it to be outside of the small multiples themselves.
  - playbar interactions - DONE
  - memory management - WIP
      Memory estimation and summary is already implemented, but updating the buffering on the playbar wasn't.
New 2: capturing knowledge
  - commenting system
      Needs to be connected to the glitch server for full demo functionality.
  - capturing spatial arrangement: WIP
      The spatial arrangement can be used to estimate quantities on the images, and capture them as numeric values. Capturing the positional values is easy, but storin them is not.
	  These values are essentially new metadata columns. For cooperation the metadata should be on the glitch server also, and if it were in an SQL database, then a new column could be created to store the captured estimate.
New 3: tree hierarchy
  - tree hierarchy for group navigation: WIP
      Mostly DONE, the input tag format may require some adapting to be integrated with the glitch SQL database where all the tags will be saved.
  - spatial representations of knowledge groups: NOT STARTED
      If the spatial representation should be shown on the minimap, then the tree needs to have access to the minimap object somehow.
	 
New 4: switch over between point, line, 2d image and 2d unsteady image: NOT STARTED AT ALL
  - individual drawing modules (unsteady2dWebgl Point/Line/Contour...)
      WebGL drawing will support larger numbers of tasks to be drawn - even for the scatterplot the SVG approach was struggling for a few thousand points.
  - swapping the modules on request
      It may be interesting to see how the observations of one slice carry over to another slice. The spatial arrangement is kept, just the images change to the new slice. Each small multiple has access to the task (metadata row), and when a dropdown on the GUI changes the slice selected the small multiples stay in place, but update the graphic.
  - identifying which module to use with which slice - intermediate json files
      There could be a slice metadata column called "entropy2d", for which the rows point to files with the following structure: 
	    {
	     name: entropy, 
	     drawmodule: unsteady2dWebglContour, 
	     indices: indices.bin, 
	     vertices: vertices.bin, 
	     timesteps: [...],
	     .
	     .
	     .
	    }
	  When considering just the spatial arrangement demos the app already knows to pipe the data to a small multiple plot. When handing each row entry to a specific item (javascript object small multiple representation) the item can see what drawing module to use, create an instance of that module, and give it the required data. Then the item only needs to call the module to rerender when needed.
	





MISCELLANEOUS:
Ultimately the entry point for the user is the dbslice dash. The user filters out subsets, and observes high level data behavior. Then through the data levels they arrive to the detailed data. At the detailed data the actual flow insights are gathered.

A design, or concept exploration process is done step by step, and new data is generated every step. The web based dbslice available to users should have an option to upload new data on-the-go. Maybe the metadata can be stored in a background SQL database. An initial query can be made to retrieve all the tasks, at which point the crossfilter indexing is set up to support the interactions.

Datetime of the simulation should be a parameter in dbslice, that way new users can see the progression of the designs. Maybe as a time?