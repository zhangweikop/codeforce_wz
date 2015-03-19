 require('./vireo.js');
var fs= require('fs')
var runTime = NationalInstruments.Vireo;
var resultFolder = "result";

runTime.viaFinished = false;
runTime.waitList = [];
runTime.reloadVia = function(text){
	this.viaFinished =false;
	this.core.v_delete( this.core.v_shell);
    this.core.v_shell = this.core.v_create(0);
    this.loadVia(text);
}
var stdout = process.stdout.write;
var Original  = function(){};
var newIO = null;
	 
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
	

function runVIA(fileName)
{
	totalNumber++;
	console.log("Processing via file:"+fileName);
	fs.readFile(fileName, function (err, data) {
  	if (err) {
	console.log("has ERROR!!!!\n");
	throw err;}
  	var text = data.toString('utf8');
console.log("create result file\n");
    var resultFile = fileName.replace(/\.via$/i,'.vtr');

    if (!fs.existsSync(resultFolder)) {
    	fs.mkdirSync(resultFolder);
    }
   
    newCreatedTest ++;
    var writeFinished =  null;
    var testResult = fs.createWriteStream(resultFolder+'/'+resultFile);
    stdout.apply( process.stdout  ,[new Buffer('Generating test result :'+resultFile+'\n')]) ;
	runTime.reloadVia(text);

  	runTime.vireoRunSync(runTime);
  	writeFinished = true;
 	newIO = null;
	 });
}
process.argv.forEach(function (val, index, array) {
console.log(index +' : ' + val + "-------------------\n");
if (index != 2) 
{
return;
}
console.log('run via file: ' + val + "-------------------\n");
	var file = val;
	runVIA(file);
  
});
/*
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
*/
