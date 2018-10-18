// unicode -> universal encoding that came later
// ASCII is 8 bit and was not able to give encoding map of characters in other languages like french, german, mandarine, tiwan etc
// if a language have more than 256 characters then Multi-ByteEncoding is used of 16 or more bits
{
	var concatMaster = ''
	for(var i=1001; i<=2000 ; i++){
		concatMaster += String.fromCharCode(i)
	}
	console.log(concatMaster)
	// will work in if unicode is supported
}
	