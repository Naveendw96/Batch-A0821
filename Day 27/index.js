// console.log(__dirname);  // prints the absolute path of the directory containing the currently executing file
// console.log(__filename);

// function someFunction(){
//     console.log("hello")
// }

// module.exports = someFunction();

//-------------File System--------------------------------------------------------------
/*
const fs = require("fs/promises");   // import promise version of the file system module for asynchronus operation

async function fileSystem(){
    const file = await fs.readFile("./demo.txt", "utf8")  // "utf8" is used to convert the content into human readable version
    console.log(file);                                    // "await" use because we dealing with promises
    await fs.appendFile("./world.txt","I'm Naveen");       //create file in first time & since second execution content is append
  //  await fs.unlink("./workd.txt");                 //deleting the file
    try {
        await fs.mkdir("world");        //create new folder
    }
    catch{
        console.log("This folder is already created")
    }
    await fs.writeFile("./blank.txt", "hi");        //create new file. if there is a file in that name, that would be replaced.
}
fileSystem();
*/

//----------HTTP Module------------------------------------------------------------------

const http = require("http");

http.createServer(function(request, response){    // createServer method expect the fuction with two parameters
    // console.log(request.url);
    // console.log(request.headers);
    // console.log(request.params);
    // console.log(request.body);
    response.write("Order 1 \n")
    response.end(`{"food1":"pizza", "food2":"burgur"}`);   // end-  ending the execution and returing the "Hello world\n"

}).listen(3000);










