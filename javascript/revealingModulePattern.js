// below is a combination of IIFE + closure

//MODULE PATTERN
var MrCool = (function(){
	var secretWeapon = 'X-Ray Vision';
	
	function getSecretWeapon(){
		return secretWeapon
	} 
	return {
		knowWhatIHave: function(){
			console.log(getSecretWeapon())
		}
	}
})()

MrCool.knowWhatIHave();

//REVEALING MODULE PATTERN
const myRevealingModule = (function() {
  
  let privateVar = 'Peter';
  const publicVar  = 'Hello World';
  function privateFunction() {
    console.log('Name: '+ privateVar);
  }
  
  function publicSetName(name) {
    privateVar = name;
  }
  function publicGetName() {
    privateFunction();
  }
return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };
})();
myRevealingModule.setName('Mark');
myRevealingModule.getName();

//--Advantages of Revealing Module pattern over Module Pattern:
// 1)We can change members from public to private and vice versa by modifying a single line in the return statement.
// 2)The returned object contains no function definitions, all right-hand side expressions are defined inside the IIFE, making the code clear and easy to read.