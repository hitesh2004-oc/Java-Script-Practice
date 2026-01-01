// for(let i = 1; i<= 100; i++){
//     if(i%3 == 0 && i%5 == 0){
//         console.log("FizzBuzz");
//     }else if(i%3 == 0){
//         console.log("Fizz")
//     }else if(i%5 == 0){
//         console.log("Buzz");
//     }else console.log(i);

// }

// Function Declarartion
// function f1(a,b){
//     let d = a+b;
//     return d;
// }
// console.log(f1(30,40));

// Function Expression
// let a = function(a,b){
//     return a + b;

// }
// console.log(a(20,10));

// arrow Function

// const arrow1 = (a,c) => a + c;
// console.log(arrow1(49,34));

// const arrow = b => b;
// console.log(arrow(49));

// with out function name called any

//Scope

//Global Scope----
// let a = 20;

// function f1(){
//     console.log(a);
// }
// f1();
// {
//   console.log(a);
// }

// Local/Function Scope...
// function f1(){
//     var a = 10;
//     console.log(a);
// }
// f1();
// console.log(a);

//Block Scope..
// var a = 20;
// {
//     var a = 10;
//     console.log(a);
// }

// console.log(a);

// function f1(n){
//     let rev = 0;
//     let str = "";
//     while(n>0){
//         let d=n%10;
//         str = ""+d;

//         rev = rev*10 + d;
//         n = (n-d)/10;
//     }
//   console.log(str);
//     return rev;
// }
// console.log(f1(12345));