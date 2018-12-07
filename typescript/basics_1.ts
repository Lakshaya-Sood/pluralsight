//TypeScript compiles into JavaScript which will be finally used on client and server

// to get started you need 
//1. Typscript compiler
//2. Typescript IDE to help you code fast (ext recommendation like "TypeScript God")

// Installing TypeScript
// for latest stable version - npm install -g typescript
// for latest nightly/developement version(might be unstable) - npm install -g typescript@next

// vs code and typescript both are from microsoft
// so with every release of vs code there is a new version of typescript with more powers!!

// to make VS code use the typescript from loacal node_modules
// create a folder .vscode and create a file .vscode/settings.json 
// and add { "typescript.tsdk": "./node_modules/typescript/lib" }
// why? ->  ./node_modules/typescript/lib because it contains tsserver.js and the corresponding lib.*.d.ts files


// to create a tsconfig.json file(should be in the same directory as package.json) -> run  tsc --init

/*
explore:
tsc compile 
tsc -p .
*/

