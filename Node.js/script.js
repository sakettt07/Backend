// In this file we are going to do some practice for the nodejs and will be learning some of the new concepts.

// this is the correct way of writing the require method instead of the previous one.

const add=require("./add.js");
const sum=add(45,6);
console.log(add.b);


console.log("studying about os built in module");
const os=require('os');

// we can use it as  an object
const obj={
    type:os.type(),
    info:os.userInfo(),
    freemem:os.freemem(),
    host:os.hostname(),
    version:os.version(),
    loadAverage:os.loadavg(),
}
console.log(obj.info.username);