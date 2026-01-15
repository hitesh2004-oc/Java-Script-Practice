

//(1)Create an object student with properties name, age, and marks. Print all values.//
let student = {name: "hitesh",
             age: 22,
             marks: 89
            };
            console.log(student);

//(2)Add a new property grade to an existing object.
student.grade = "A";
console.log(student);

//(3)Update the age property of an object.
student.age = 23;
console.log(student);

//(4)Delete the marks property from an object.
delete student.marks;
console.log(student);

//(5)Check if a property email exists in an object.
console.log("email" in student);

//(6)Count the number of properties in an object.
let count = Object.keys(student).length;
console.log(count);

//(7)Loop through an object and print keys and values.
for (let key in student) {
    console.log(key +": " +student[key]);
}

//(8)Convert an object into an array of keys.
let arr = Object.keys(student);
console.log(arr);

//(9)Convert an object into an array of values.
let arr1 = Object.values(student);
console.log(arr1);

//(10)10. Convert an object into an array of key-value pairs.
let arr2 = Object.entries(student);
console.log(arr2);

//(11)Create a function that accepts an object and prints only its values.
function print(obj){
    for (let key in obj) {
        console.log(obj[key]);
    }
}
print(student);

//(12)Create an object method that returns a greeting message.
let m1 = {
    greet: function() {
        return "Hello";
    }       
};
console.log(m1.greet());

//(13)Clone an object using the spread operator.
let student2 = {...student};
console.log(student2);

//(14)Merge two objects into one.
let obj1 = {a:1, b:2};
let obj2 = {c:3, d:4};
let merge = {...obj1, ...obj2};
console.log(merge);

//(15)Check whether an object is empty.
console.log(Object.keys(student).length == 0);
