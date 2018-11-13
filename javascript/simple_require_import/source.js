module.exports  = (function () {
    console.log('abc');
    var privateVar = "Ben Thomas";
    function setNameFn( strName ) {
        privateVar = strName;
    }
    function printNameFn() {
        console.log(privateVar)
    }
return {
        setName: setNameFn,
        displayName: printNameFn
    };
})();

//module.exports = revealingModule;