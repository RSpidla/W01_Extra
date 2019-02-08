// Synchronous file write
// let fs = require("fs");

// let filePath = "/tmp/test_sync.txt";
// let fileData = "Testing synchronous file write. \n";

// fs.writeFileSync(filePath, fileData);
// console.log("successfully wrote to", filePath);


// Asynchronous file write
let fs = require("fs");

let filePath = "/tmp/test_async.txt";
let fileData = "Testing asynchronous file write. \n";

fs.writeFile(filePath, fileData, function(err) {
  if (err) {
    throw err;
  }
  console.log("Successfully wrote to", filePath);
});