//Usage - fs.open(path[, flags[, mode]], callback)
// path is files path
// flags can be of reading , writing or appending
// mode(integer) is related to permissions [Default: 0o666 (readable and writable)] 
// callback - handles error / oprations


const firstFilePath = '1.txt',
	secondFilePath = '2.txt', // returns fd on opening
	fileNotExistPath = '3.txt'; // gives error if tried to open (Error: ENOENT)
	
const fs = require('fs');

fs.open(secondFilePath, 'r+',function(err, fd){
	if( err ){
		console.log(`Error: ${err.code} \nMessage: ${err.message}`)
	} else {
		//read or write operations
		console.log(`Successfully opened with file descriptor value: ${fd}`)
		
		fs.close(fd,function(err){
			if(err){
				console.log(`Error ${err.code} \nMessage ${err.message}`)
			} else {
				console.log("file closed successfully!")
			}
		})
	}
})