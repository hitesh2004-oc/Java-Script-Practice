// function f2(num) {
//   let sum = 0;
//   while (num > 0) {
//     let d = num % 10;
//     let y = d;
//     while (d > 0) {
//       d -= 2;
//     }
//     if (d == 0) {
//       sum = sum + y;
//     }

//     num = (num - y) / 10;
//   }
//   return sum;
// }
// console.log(f2(224));

//..........Call Back Function
// function myfunction(a,b,callback){
//   console.log(callback(a,b));
//   // callback()
// }
// myfunction(3,5,function(a,b) {
//   return a + b;
//   // console.log("ihihxnnx");
// })

//.........High Order Function
// function f1(a){
//   return a();
// }
// f1(function(){
//   console.log("ihihhhi");
// })

// function f1(a){
//   return function(b){
//     return a*b;
//   }
// }
// console.log(f1(4)(2))

// let ab = f1(5);
// console.log(ab(3));

//........Constructor function
// function f1(a,b){
//   this.a = a;
//   this.b = b;
// }
