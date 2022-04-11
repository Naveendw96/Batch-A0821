console.log(__dirname);  // prints the absolute path of the directory containing the currently executing file
console.log(__filename);

function someFunction(){
    console.log("hello")
}

module.exports = someFunction();