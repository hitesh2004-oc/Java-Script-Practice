//..concat method(To add two array)
// let arr1 = [10,20,30,40];
// let arr2 = [50,60,70,80,90];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

//..Join method(Convert Array to String)
// let arr1 = [10,20,30,40]
// let str = arr1.join(" ");
// console.log(str)

// let arr2 = str.split(" ");
// console.log(arr2);

//..Reverse method
// let arr1 = [10,20,30]
// console.log(arr1.reverse());

//..slice method[Not Change Org array]
// let arr1 = [10,20,30,40]
// console.log(arr1.slice(1,3))

//splice Method
// let arr1 = [10,20,30,40]
// let arr2 = arr1.splice(4,0,88);
// console.log(arr2)
// console.log(arr1)

//..ToString Method[Not Change Org array]
// console.log(arr1.toString());
// console.log(arr1);

//..IndexOf for Array..//[First Occurance Index of Return]
// let a =[10,20,10,30];
// console.log(a.indexOf(10));
// console.log(a.indexOf(10,2));
// console.log(a.lastIndexOf(10));

//..For Each Loop..//[Not used Break and Continue][Not Return]
// let arr = [10,20,30,40];
// let a = arr.forEach(function (val,ind,ar){
//     console.log(val,ind,ar);
// })
// let a = arr.forEach(function (val){
//      let  b =   val + val;
//           console.log(b)
// })

//..Map():- [Return New Array][Does Not effect Original Array]
// let arr = [10,20,30,40];
// let a = arr.map((val) => val*2)
// console.log(a);
// console.log(arr)