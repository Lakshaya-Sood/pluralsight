var x = 10;
//When use and when not to use break in switch cases
switch( x ){
	case 5:
		console.log("aa gaya 5");
		break;
	case 11:
	case 12:
		console.log("aa gaya 12");
		break
	case 10:
		console.log("aa gaya 10");
	case 9:
		console.log("aa gaya 9");
	default:
		console.log("aa gaya default");
		break;
}

// default will always come in the bottom
// **Imp
// once a case matches with the input, switch will execute all the below cases statements UNTILL it finds a break