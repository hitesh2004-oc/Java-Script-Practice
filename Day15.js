// let obj = {
//     name:"abc",
//     age:25,
//     email:"abc@gmail.com",
//     contact:9224431346
// }

// for(let key in obj){
//     console.log(key, obj[key]); 
// }

// console.log("age" in obj);
// console.log("password" in obj);
// console.log(obj.hasOwnProperty("password"))
// console.log(obj.hasOwnProperty("age"))

// let obj1 = {
//     id: 101,
//     age: 23
// }
// let  obj2 = {
//     name: "hitesh",
//     email: "hitesh@gmail.com"
// }
// ... spread operator
// let obj3 = {...obj1,...obj2};
// console.log(obj3)

// let obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

// let obj1 = {a: 10,b: 20,c: 30}
// let obj2 = {a: 20,b: 30}
// let obj3 = {c: 40}

// let obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4)

//Using Freeze Method 
//Cannot Modified and Update
//Only Read Allowed
// Object.freeze(obj1);

// obj1.c = 40;
// console.log(obj1)

//Use Of Seal(Only Update Allowed)
// Object.seal(obj1);
// obj1.c = 40;
// console.log(obj1)

// let obj1 = {a: 10,b: 20,c: 30}
// Object.seal(obj1);

// delete obj1.a;//Not Work
// console.log(obj1);

// Convert Object to Array
// let arr = Object.entries(obj1);
// console.log(arr);

// // Convert Array to Object
// let obj2 = Object.fromEntries(arr)
// console.log(obj2);

// let obj = {}
// console.log(Object.keys(obj).length);

// if(Object.keys(obj).length == 0){
//     console.log("Empty")
// }else console.log("Not Empty")