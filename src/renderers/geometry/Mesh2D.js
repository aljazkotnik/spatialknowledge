/*
Should these be split up into a Mesh2D superclass and an UnsteadyMesh2D childclass? The unsteady case is a superclass of hte steady one!


Mesh2D does the loading of required timestep files, so it should do the memory hanling as well. Maybe just give it a size limit of what it can take up, and it should trim its memory accordingly.
*/
  

// Some geometry to initialise the buffers.
let vertices = [
  1, -0.99,
  1, -1,
  0.99, -1
]; // vertices

// clockwise triangles. 
let indices = [
  0, 1, 2
]; // indices


// values per vertex
let values = [
  0,
  0,
  0
]; // values
 
// Initial domain.
let initdomain = {
  x: [-1, 1],
  y: [-1, 1],
  v: [0, 1],
  t: [0, 1]
}


export default class Mesh2D{
  
  _currentFrameInd = 0
  
  // Initial byte length limit is 1MB
  frameByteLength = 225420
  limitByteLength = 10**7
  
  constructor(gl, unsteadyMetadataFilename){
	let obj = this;

	obj.gl = gl;
    // obj.vertices = vertices;
    // obj.indices = indices;
    // obj.colors = colors;

	// "In case of glBufferData, the buffer object currently bound to target is used." (https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glBufferData.xhtml)
	
	
	// Size of the data used by each vertex is selected in 'MeshRenderer.updateAttributesAndUniforms'. However, that should really be kept with the data specification, so that MeshRenderer doesn't need to change if the data changes. Then the MeshRenderer becomes independent of the dimension of data.
    let verticesBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	obj.verticesBuffer = verticesBuffer;
	
	let valuesBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, valuesBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(values), gl.STATIC_DRAW);
    obj.valuesBuffer = valuesBuffer;
	
    let indicesBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(indices), gl.STATIC_DRAW);
	obj.indicesBuffer = indicesBuffer;
	obj.indicesLength = indices.length;
	
	
	// If teh index defines which frame to play next, then the timesteps need to be ordered. Maybe it's best to just enforce this by sorting the timesteps when they are loaded.
	
	
	
	// Imagine that some metadata was loaded in.
	// "./data/testmetadata.json"
	let t0 = performance.now();
	
	// The if wrapper allows the Mesh2D to be initialised errorless  without a valid unsteadyMetadataFilename.
	if(unsteadyMetadataFilename){
		fetch(unsteadyMetadataFilename)
		  .then(res=>res.json())
		  .then(content=>{
			
			
			// The domain and timesteps get assigned within the batch promise to make sure outside processes can't access them beforehand?
			obj.domain = content.domain;
			obj.timesteps = content.timesteps;
			
			
			// But all three need to be available at the same time before rendering.
			let indicesPromise = loadBinData(content.indices)
			  .then(ab=>{ return new Uint32Array(ab) })
			let verticesPromise = loadBinData(content.vertices)
			  .then(ab=>{ return new Float32Array(ab) })
			  
			  
			/* The values should be loaded in separately from the vertices and indices.
			
			Do we just loop through some timesteps and make the promises. However, the data size restrictions should be maintained at all times! The data loading function should keep that in mind.
			*/  
			obj.currentFrameInd = 0;
			let valuesPromise = obj.timesteps[obj.currentFrameInd].valuesPromise
			  .then(ui8=>{ return Float32Array.from(ui8) })
			
			
			Promise.all([indicesPromise, verticesPromise, valuesPromise]).then(d=>{
			  

			  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
			  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, d[0], gl.STATIC_DRAW);
			  obj.indicesLength = d[0].length;
					  
			  gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer);
			  gl.bufferData(gl.ARRAY_BUFFER, d[1], gl.STATIC_DRAW);
			  
			  gl.bindBuffer(gl.ARRAY_BUFFER, valuesBuffer);
			  gl.bufferData(gl.ARRAY_BUFFER, d[2], gl.STATIC_DRAW);
			
			
			  console.log("time to draw: ",  performance.now() - t0, "[ms]");
			}) // then
			
			
		}) // fetch
	} // if
	
	
	
	
  } // constructor
  

 
  // The 'values' are stored as a 'scaled uint8 array' to save memory. The values are retransformed back into the original domain on the GPU by mapping them from [0,255] to 'currentUintRange', which is obtained from the metadata file of this unsteady simulation.
  
  // The MeshRenderer2D looks at the domain to determine what the full value domain of this small multiple will be. It looks at the c to determine the uint compression domain.
  
  // Domain has to be overwritten when the actual data is loaded. Afterwards, only the 'c' property should change with the timesteps. By changing the global color value ranges the colorbar can be adjusted by the user.]
  domain = initdomain
  timesteps = []
  
  get currentUintRange(){
	// This used to be in domain under 'c', but was moved here as it will change as the frames change.
	let obj = this;
	
	return obj.timesteps.length > 0 ? obj.timesteps[obj.currentFrameInd].c_uint : [0,1];
	
	// return [871, 977]
  } // currentUintRange
  
  get currentTime(){
	// Get the time of the current frame as a fraction of the total time span available.
	let obj = this;
	return obj.timesteps[obj.currentFrameInd].t;
  } // currentTimestep
  
  get memoryUsed(){
	// This is currently only the memory the values files take up.
	let obj = this;
	
	let memory = 0;
	obj.timesteps.forEach(t=>{
	  if(t.byteLength){
		memory += t.byteLength
	  } // if
	})
	
	return memory
  } // memoryUsed
  
  // There should be two separate methods to pick the current frame. One is by incrementing, and the other is by setting the appropriate time.
  incrementCurrentFrame(){
	// When incrementing past the end of the available time range we loop to the start.
	let obj = this;
	obj.currentFrameInd = (obj.currentFrameInd + 1) % obj.timesteps.length
  } // incrementCurrentFrame
  
  timestepCurrentFrame(t){
	// Different players can start at different times. However, if a dt is passed in to increment the current frame the incrementing can truncate a part of the dt, leading to different players to be at different times. Therefore the actual time is expected. If t is outside of the time range available, the min or max frame indices are returned as appropriate.
	let obj = this;
	
	
	// Find the closest timestep.
	let t_closest = obj.timesteps.reduce((closest, timestep)=>{
		return Math.abs( closest.t - t ) < Math.abs( timestep.t - t ) ? closest : timestep;
	}) // reduce
	
	// Set the index of the closest timestep as the current frame index
	obj.currentFrameInd = obj.timesteps.indexOf(t_closest);

  } // timestepCurrentFrame
  
  
  // This should be reworked into an outside call, because eventually it would be beneficial if the files can be loaded by a library system, and the mesh is only responsible to declare what it would like?
  set currentFrameInd(i){
	// When the index is set automatically manage the data. This will allow the data to be loaded once and kept in memory.
	let obj = this;
	
	obj._currentFrameInd = i;
	
	obj.buffering(i);
	obj.updateCurrentFrameBuffer();
  } // set currentFrameInd
  
  get currentFrameInd(){
	return this._currentFrameInd;
  } // get currentFrameInd
  
  
  updateCurrentFrameBuffer(){
	// The UnsteadyPlayer will input an actual timestep, as opposed to just increment the frame. This allows simulations with different temporal resolutions to be compared directly. Comparable time frames are selected based on available data.
	
	// What will be passed in? Just an icrement I guess, and it's up to the user to provide time variables with the same dt and in the same domain.
	let obj = this;
	let gl = obj.gl;
	
	// The values from the files were stored as uint8, but the GPU requires them to be float32. The data is converted just before passing it to the buffer.	
	obj.timesteps[obj.currentFrameInd].valuesPromise
	  .then(ui8=>{ return Float32Array.from(ui8) })
	  .then(f32=>{
		  gl.bindBuffer(gl.ARRAY_BUFFER, obj.valuesBuffer);
		  gl.bufferData(gl.ARRAY_BUFFER, f32, gl.STATIC_DRAW);
	
	  })
	
  } // updateCurrentFrameBuffer
  
  
  /*
  MEMORY HANDLING
  
  - DONE: Buffer the required files ASAP
  - DONE: Unload all files when prompted
  - Prevent buffering if off-screen 
      Just unload, and rely that they won't be updated? OR - Manipulate the limit they are allowed to use, and then let the object handle itself.
  - The data requests/buffering should be throttled.
      Throttling is done with `Promise.all' and a loading promise array `queue'. Some coordination between the items still wouldn't hurt.
	  
	  How will the items that are off-screen handle the initial loading? Just do the initial loading, and afterwards immediately unload them? Or how to do it?
  
  */
  buffering(i_closest){
	// `t' is the current playing time. For only forward playing any timesteps before this one can be unloaded, and any after need to be loaded, up to the limit. For t approaching max t the initial timesteps should start loading to allow the player to loop around.
 	let obj = this;
	
	let n_all = obj.timesteps.length;
	let n_max = Math.floor( obj.limitByteLength / obj.frameByteLength );
	
	// Maybe chain the required promises somehow?
	
	
	// Maybe it's better to unload all not needed promises at the beginning?? And then focus on the ones that need to be loaded?
	let queue = [];
	for(let i=0; i< n_all; i++){
		let timestep = obj.timesteps[(i_closest + i)%n_all];
		if( i < n_max ){
			// Should hve a value promise, but doesn't yet.
			if(!timestep.valuesPromise){
				
				// Instead of fetching the data straight ahead wait for the established queue to free up. In the case of an empty queue just skip the promise?
				
				if(queue.length>0){
					
					Promise.all(queue).then(res=>{
						timestep.valuesPromise = loadBinData(timestep.filename)
						  .then(ab=>{ return new Uint8Array(ab) })
						timestep.valuesPromise.then(ui8=>{
							timestep.byteLength = ui8.byteLength
						})
						queue.push(timestep.valuesPromise)
					}) // Promise.all
					
				} else {
					timestep.valuesPromise = loadBinData(timestep.filename)
					  .then(ab=>{ return new Uint8Array(ab) })
					timestep.valuesPromise.then(ui8=>{
						timestep.byteLength = ui8.byteLength
					})
					queue.push(timestep.valuesPromise)
				} // if
				
				
				
			} // if
		} else {
			// The promise should be deleted to conserve memory. The byte length must be the same for all of them anyway. However, some allowance will have to be made for the 32 bit arrays - 3 of them in total. The length of the values array in bytes is given by the 32 float arrays along with the assumption of the uint8 encoding anyway.
			delete timestep.valuesPromise
			delete timestep.byteLength
		} // if
	} // for
	
  } // buffering
  
  
  
  // So the buffering needs to be updated on the go, but all the data should be unloaded when the item is no longer on screen, and then reloaded when it comes back on screen. - Just have an `unload' method? I guess the data loaded in the buffers will persist until changed?
  get t_buffered(){
	  let obj = this;
	  
	  // Go through the promises and return the lates one in a row that is ready. We know that a promise is ready if the timestep has a byteLength declared.
	  let t_current = obj.timesteps[obj.currentFrameInd];
	  let t_buffered = t_current ? t_current.t : 0;
	  for(let i=obj.currentFrameInd; i<obj.timesteps.length; i++){
		  let timestep = obj.timesteps[i];
		  
		  if(timestep.byteLength){
			  t_buffered = timestep.t
		  } else {
			  return t_buffered
		  } // if
	  } // for
	  
	  return t_buffered
  } // t_buffered
  
  
  unload(){
	  let obj = this;
	  obj.timesteps.forEach(timestep=>{
		  delete timestep.valuesPromise
		  delete timestep.byteLength
	  }) // forEach
  } // unload
  
} // Mesh2D


function loadBinData(filename){
  return fetch(filename).then(res=>res.arrayBuffer());
} // getBinData



/*
{
	x: [-0.76, 1.01],
	y: [-0.1, 1],
	v: [870.4389253677576, 977.0020293037556]
}
*/