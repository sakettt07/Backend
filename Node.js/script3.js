var a=10;
var b=12
module.exports ={first:a,second:b};

// onr liner joke npm package-->
// var oneLinerJoke = require('one-liner-joke');
// console.log(oneLinerJoke.getRandomJoke());


// now the npm including art inside
// var figlet = require("figlet");

// figlet("tussi ja rahe ho na jao tussi", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// random otp generator upto the length you want

const randomOtp = require('random-otp-generator');
const otp=randomOtp(6,{alpha:true,lower:true});
console.log(`the random otp is ${otp}`);
// console.log(otp)
