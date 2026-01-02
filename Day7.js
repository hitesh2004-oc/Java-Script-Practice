//IIFE[Immediately Invoked Function Expression]
// (function(){
//     console.log("hello")
// })();

// function F1(){
// var a =10;
// }

//Var [Hoisting]

// console.log(a);
// // var a;
// var a;

// let & const [Not Hoisting]

//Function [Hoisting]
// f1();
// function f1 (){
//     console.log("hello")
// }

// function f2(num){
//     let sum = 0;
//     while(num>0){
//         let d = num%10;
//         if(d%2 == 0){
//         sum = sum + d;
//         }
//         num = (num-d)/10;
//     }
//     return sum;
// }
// console.log(f2(2673));