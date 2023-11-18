const add=(a,b)=>{
    return a+b;
}
// exports using module
module.exports=add;

// how multiple exports works
const a="kya bhai log";
const b="kyu yaar";
const c="kidharr bhaii";
module.exports={a,b,c};