const firstFilePath = '1.txt',
	secondFilePath = '2.txt'; // returns fd on opening
	
const fs = require('fs');

fs.stat(secondFilePath,function(err, statObject){
	console.log("Stat Object: ",statObject)
	const octalValue = statObject.mode,
		decimalValue = parseInt(statObject.mode.toString(8), 10); 
		
	console.log(`current file mode(permission): octalValue - ${octalValue} & decimalValue - ${decimalValue}`)
	
	console.log(parseInt((statObject.mode & parseInt("777", 8)).toString (8)[0]))
})

// for better understanding of file systems permissions go to ever-note > youtube channel notebook 
// https://stackoverflow.com/questions/8582105/having-trouble-understanding-how-fs-stat-works