// This file is for the fs module in node.js
// So basically Fs module provides us the functionality to interact with the file system to perform basic Read and write operations on the file.
const fs=require('fs');
// fs.readFile('file.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

// the above commented method is a async type of method
const fileContent=fs.readFileSync('file.txt','utf8');
console.log(fileContent);


// Now we will be performing the write function into the file.