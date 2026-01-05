//..Filter():-[Condition]
// let arr = [10,20,30,40];
// let a = arr.filter((val) => val>10)
// console.log(a);

//..include():-[check the array contain value]
// let arr = [10,20,30,40];
// let a = arr.includes(20)
// console.log(a);

//..Reduce():-
// let a = [10,20,30,40]
// console.log(a.reduce((acc,curr,index,arr)=> acc + curr))
// console.log(a.reduce((acc,curr,index,arr)=> acc + curr,10))
// console.log(a.reduce((acc,curr,index,arr)=> acc + curr,0))

//..find():-
// let a = [10,20,30,40];
// let ar = a.find((val) => val > 10)
// console.log(ar);

//..findIndex():-
// let a = [10,20,30,40];
// let ar = a.findIndex((val) => val > 10)
// console.log(ar);

//..Sort():-
// let a = [10,4,5,2,1]
// let b = a.sort((a,b) => a - b);
// let c = a.sort((a,b) => b - a);
// console.log(a)
// console.log(b)
// console.log(c)

//..Every():-[All Condition Must be True]
// let a = [10,20,30,40]
// console.log(a.every((val) => val>5))

//..Some():-[Only One Condition need to True]
// let a = [10,20,30,40]
// console.log(a.some((val) => val>30))