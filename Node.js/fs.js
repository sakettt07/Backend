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


// for synchronous
// const fileContent=fs.readFileSync('file.txt','utf8');
// console.log(fileContent);


// Now we will be performing the write function into the file.


// fs.writeFile('text.txt','hello this is test file for the fs module',(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('File written');
// })

// the method of writting a file is a asynchrounous one;
fs.writeFileSync('text2.txt','this is the file 2 for the testing','utf-8');
console.log("file written succesfully");