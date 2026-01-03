// let h = new f1(5,7);
// console.log(h.a);
// console.log(h.b);

// function f1(Name,Age){
//   this.Name = Name;
//   this.Age = Age;
// }

// let h = new f1("hitesh",22);
// console.log(h.Name);
// console.log(h.Age);

//.........Recursive Function
// function factorial(n) {
//   if (n == 1) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));

//........Pure Function
// function f1(a,b){
//   return a*b;
// }
// console.log(f1(4,5))

//....Default function
// function f1(a,b=3){
//   return a*b;
// }
// console.log(f1(4,5))


// JavaScript Architecture
// console.log("A");
// setTimeout(() => {
//   console.log("B");
// });
// Promise.resolve().then(() => console.log("C")
// );
// console.log("D");

// let arr = [10,20,30];
// let arr1 = new Array(10,"hello",30,null);

// console.log(arr1[1])
// console.log(arr1[3])
// console.log(arr.length);
// arr[10] = "hello";
// console.log(arr[10]);
// console.log(arr.length);
// console.log(arr);

// arr.length = 3;
// console.log(arr);

//..Push Method(For insert element in last of array)
// arr.push(40);
// console.log(arr);

//..Pop Method(For Delete Element from last of array element)
// arr.pop();
// console.log(arr);

//..Unshift Method(Add Element on start)
// arr.unshift(0);
// console.log(arr);

//..Shift Method(delete Element on start)
// arr.shift();
// console.log(arr);