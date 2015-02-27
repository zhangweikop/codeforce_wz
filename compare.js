var fs = require('fs');

var Original = process.stdout.write;

var IOred =  null;
process.stdout.write = function(write){
	if(!IOred)
	{
		Original.apply(process.stdout, [new Buffer(write)]);
		return;
	}
	IOred(write);
}

function compare (fileName) {
	// body...
	console.log(fileName);
	var testFile = 'test/'+fileName;
	console.log	("Tetst File:"+testFile);
	var testFS = fs.createReadStream(testFile);
	var temp = fs.createWriteStream(testFile+'.temp');
	testFS.on('end', function(){
		temp.end();
		IOred = null;
	});
	testFS.on('readable', function(){

		//console.log(chunk.toString());
		IOred = function(write){
			Original.apply(process.stdout, [new Buffer("\nIo redirection :"+testFile+'-------------------\n')]);
			var writeData = new Buffer(write);
 
			var chunk;
			if((chunk = testFS.read(writeData.length)) !== null)
			{
				temp.write(chunk);
				temp.write(new Buffer("\n"));

			}
			temp.write(writeData);
		}
		var chunk;
		if( !(chunk = testFS.read(1))){
			testFS.unshift(chunk);
		};
	 	
		runTime(fileName);
	});
}

function runTime(name) {

	for (var i = 0; i<10 ;i++)
	{
		console.log("line1 "+name);
	}

}

(function () {
	fs.readdir('./',function dir (err, files) {
		// body...
			for(var i =0;i< files.length; i++)
			{
				var file = files[i];
				if(file.match(/.*\.data$/i))
				{
					compare(file);
				}
			}

	});

})();
