 require('./objs/vireo.js');
var fs= require('fs')
var runTime = NationalInstruments.Vireo;
var resultFolder = "result";
runTime.viaFinished = false;
runTime.waitList = [];
runTime.reloadVia = function(text){
			Original.apply( process.stdout  ,[new Buffer("#############################Load via\n")]);
	this.viaFinished =false;
	this.core.v_delete( this.core.v_shell);
    this.core.v_shell = this.core.v_create(0);
    this.loadVia(text);
}
var stdout = process.stdout.write;
var Original  = function(){};
var newIO = null;
	process.stdout.write = function(write) {
		if (!newIO){
			stdout.apply( process.stdout  ,[new Buffer(write)]);
			return;
		}
		newIO(write);     	
	}
	process.stderr.write = function(write) {
			stdout.apply( process.stdout  ,[new Buffer("error called")]);

		if (!newIO){
			Original.apply( process.stderr  ,[new Buffer(write)]);
			return;
		}
		newIO(write);     	
	}
runTime.vireoRunSync = function () {
        // Run a chunk of code. if there is more pending
        // Then restart soon, else restart when it makes sense.
 		var x;
 		if(!this.viaFinished)
        {
        	x = this.executeSlices(10000);
        	if(x<=0)
        	{
        		this.viaFinished = true;
    	    }
    	}

 };
var totalNumber = 0;
var passedTest = 0;
var newCreatedTest = 0; 
	var message = fs.createReadStream('message.txt');
		var message2 = fs.createReadStream('message2.txt');
				var message3 = fs.createReadStream('message3.txt');


	message2.on('readable', function(){
		var chunk;
		var size = -1000;
		message2.read(0);
 
		 function continueR ()
		 {
		 //	message2.emit('readable');
			 process.nextTick(function() {message2.emit('readable');
 			 console.log("inside message2");
 		  
		 })
}  ;
		 //continueR();


		 	
	})

function compare2(resultFolder, fileName)
{}
function compare(resultFolder, fileName, textCode)
{

    Original.apply( process.stdout  ,[new Buffer("Comparing test result:"+ fileName+'\n')])

 	var different = false;
 	var remaining = null;
	var lastResult = fs.createReadStream(resultFolder+'/'+fileName);
	var runFinished = 0;
 		  
 	lastResult.on('end' , function(){
 		newIO = null;
 		runTime.loadedVia = null;
 		runTime.viaFinished = true;
 		for(var i =0;i<runTime.waitList.length;i++)
 		{
 			var wakeupItem = runTime.waitList[i];
		 function wakeUP ()
		 {
			process.nextTick(function() {
 		 		wakeupItem.emit('readable');
 		 	  		  
		})}  
			wakeUP();
 		 	
 			
 		}
 		Original.apply( process.stdout  ,[new Buffer("\n FINAL different ?????????????:"+different+"\n")]) 

 		if (!runTime.viaFinished){ 
 			different= true;
 		}

 		if (!different) {
			var message = 'testing passed :'+ fileName + '\n';
			stdout.apply( process.stdout  ,[new Buffer(message)]) 
					passedTest ++;

		} else {
			var message = 'testing failed :'+ fileName + '\n';
			stdout.apply( process.stdout  ,[new Buffer(message)]) 
		}
 	})
	lastResult.on('readable', function() {
  		var chunk;   
  		  		//			Original.apply( process.stdout  ,[new Buffer("\nreadable:"+fileName+" ||||||||||||||||||\n")]) 
  			//		Original.apply( process.stdout  ,[new Buffer("\nqueue length:"+runTime.waitList.length+" ||||||||||||||||||\n")]) 
  				//	Original.apply( process.stdout  ,[new Buffer("\nruntime loaded :"+runTime.loadedVia+" ||||||||||||||||||\n")]) 

		var needLoaded = false;
  		if(!runTime.loadedVia )
  		{
  			// code hasn't been loaded
  			var i = runTime.waitList.indexOf(lastResult);
  			if (i>=0)
  			{
  				runTime.waitList.splice(i,1);

  			} 
  			runTime.loadedVia = fileName;
  			needLoaded = true;
  			

  		} else {
  			 if(runTime.loadedVia  === fileName )
  			 {

  			 	// if the current code is loaded
  			 } else {
  			 	  		var i = runTime.waitList.indexOf(lastResult);
						if (i<0)
  						{
  							runTime.waitList.push(lastResult);
  						} 
 			 	return;
  			 }
  		}
 
  	 	newIO = function (write){

  	 		if(!different)
     		{
     			var writeData = new Buffer(write);
     	/*
     		   Original.apply( process.stdout  ,[new Buffer("\n~~~~~~~~~~")])
     		 Original.apply( process.stdout  ,[writeData])
     		 Original.apply( process.stdout  ,[new Buffer("~~~~~~~~~~\n")])
		*/
     			writeData = new Buffer(writeData);

     			 if(remaining) {
      		 		writeData = Buffer.concat([remaining,writeData]);
      			 } 
      		 //	Original.apply( process.stdout  ,[new Buffer("\n``````````")])

      		    chunk = lastResult.read(writeData.length);

      		  //  Original.apply( process.stdout  ,[new Buffer(chunk)])
      	 //    Original.apply( process.stdout  ,[new Buffer("`````````\n")])


      		    if(chunk === null)
      		    {
      		    	chunk === lastResult.read();
      		    }
      		    if (chunk === null) { 
      		    	 
      		    }
      		 	else if(chunk.length>writeData.length) {
      		 		var subChunk = chunk.slice(0,writeData.length);
      		 		different = different || !subChunk.equals(writeData);
      		 		stream.unshift(buf.slice(writeData.length));
      		 		remaining = null;
      		 	} else if (chunk.length<writeData.length) {
      		 		var subData = writeData.slice(0,chunk.length);
      		 		different = different || !chunk.equals(subData);
      		 		remaining = writeData.slice(chunk.length);
      		 	} else {
      		 		different = different || !chunk.equals(writeData);
      		 		remaining = null;
      		 	}
      		} else {
      			  		  		//			Original.apply( process.stdout  ,[new Buffer("\nDIFFERENTDIFFERENT    DIFFERENT\n")]) 

      			different = true; 
      		 
      		}
  	 	}
  		if (needLoaded)
  		{ 
  			different = false;
  			runTime.reloadVia(textCode);
  		}
 	
 		var chunk ;
 		if((chunk =lastResult.read(1))!= null) {
	 		// Original.apply( process.stdout  ,[new Buffer("\n VIA viaFinished ?????????????:"+runTime.viaFinished+"\n")]) 
			lastResult.unshift(chunk);
			while (!runTime.viaFinished &&(chunk =lastResult.read(1)) !=null)
			{	
			//  Original.apply( process.stdout  ,[new Buffer("\ncan running this time ?????????????\n")]) 

				lastResult.unshift(chunk);
				runTime.vireoRunSync();
			}
		//	Original.apply( process.stdout  ,[new Buffer("\n VIA viaFinished ?????????????:"+runTime.viaFinished+"\n")]) 

			if (runTime.viaFinished){
			//	process.stdout.write = Original;
			//	 Original.apply( process.stdout  ,[new Buffer("\ndifferent ?????????????:"+different+"\n")]) 

				chunk = lastResult.read(1);
	 			if(chunk != null)
				{
					different = true;
				} else 
				if(remaining)
				{
					different = true;
				} else {
					different = false;
				}
			//Original.apply( process.stdout  ,[new Buffer("\ndifferent ?????????????:"+different+"\n")]) 

			}
			else {
				different = true;
			}
	 	}
	//	Original.apply( process.stdout  ,[new Buffer("\n LAST different ?????????????:"+different+"\n")]) 



	});
	 
//	lastResult.close();
}

function runVIA(fileName)
{
	totalNumber++;
	console.log("Processing via file:"+fileName);
	fs.readFile(fileName, function (err, data) {
  	if (err) throw err;
  	var text = data.toString('utf8');


  //	console.log(text);
    var resultFile = fileName.replace(/\.via$/i,'.vtr');

    if (!fs.existsSync(resultFolder)) {
    	fs.mkdirSync(resultFolder);
    }
    if (fs.existsSync(resultFolder+'/'+resultFile))
    {
    	compare(resultFolder, resultFile ,text);
    	return;
    }
    newCreatedTest ++;
    var writeFinished =  null;
    var testResult = fs.createWriteStream(resultFolder+'/'+resultFile);
    stdout.apply( process.stdout  ,[new Buffer('Generating test result :'+resultFile+'\n')]) ;
    newIO = function(write) {
   		reWrite();
   		function reWrite(){
   			var ok = testResult.write(write);
   			if(writeFinished) {
     	   		testResult.end();
     	   		newIO = null;
     	   	}
     	   if(!ok){
      		  	testResult.once('drain',reWrite);
     	   } else {
     
     	   }
  	  };
	};
	runTime.reloadVia(text);

  	runTime.vireoRunSync(runTime);
  	writeFinished = true;
 	newIO = null;
	});
}
 
fs.readdir('.', function(err, files){
	if(!err) {
		for (var i=0;i< files.length ; i++)
		{
			var file = files[i];
			if (file.match(/.+\.via$/i))
			{
				runVIA(file);
			}
		}
	}
})

