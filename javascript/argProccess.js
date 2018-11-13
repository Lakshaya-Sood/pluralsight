//------------------Arguments from terminal-----------------------
const args = process.argv
console.log(args);
//for command
//node argProcess.js hello sir how are you
//prints
// [ 'C:\\Program Files\\nodejs\\node.exe',
// 'C:\\Users\\lakshaya.sood\\Downloads\\pluralsight\\javascript\\argProccess.js',
// 'hello',
// 'sir',
// 'how',
// 'are',
// 'you' ]
// first two are path of node and the JavaScript file
// rest are all the parameters separated by spaces
//---------------------------------------------------------------

process.stdin.resume(); // program won't close immediately... Need to press Ctrl+C

function exitHandler(options, exitCode) {
	console.log(options,exitCode)
	if (options.cleanup) console.log('clean');
    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();
}
process.on('exit', exitHandler.bind(null,{cleanup:true})); //trigged always at last. on exit

process.on('SIGINT', exitHandler.bind(null, {exit:true})); // triggered on Ctrl+C exit of program