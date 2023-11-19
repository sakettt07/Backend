// in this file we are going to learn about path module;
const path=require('path');
console.log(__filename);
// it gives the complete path of the file

console.log(path.basename(__filename));
// it gives the name of the file
console.log(path.basename(__dirname));
// it gives the name of the directory(folder);

// join 

console.log(path.join('/hello','/hi','file.txt'));
console.log(path.join('hello','hi','file.txt'));

console.log("This is the resolve part of the path module");
// resolve
console.log(path.resolve('/hello','/hi','file.txt'));
console.log(path.resolve('hello','hi','file.txt'));
console.log(path.resolve('hello','//hi','file.txt'));

// the path.parse gives the significance of all the files and the extension.
const pathprops=path.parse('/foo/bar/node.js');
console.log(pathprops);

