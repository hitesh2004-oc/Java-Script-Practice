//(1) Find longest word in a string.

//code:-
let str = "JavaScript array methods Practice";
let words = str.split(" ");
let longestWord = "";

for(let i = 0; i < words.length; i++){
    if(words[i].length > longestWord.length){
        longestWord = words[i];
    }
}
console.log(longestWord);


//(2) Remove duplicates from an array.

//code:-
let arr = [1,2,2,3,4,4,5];
let newarr = [new Set(arr)];
console.log(newarr);;

//(3) Find the Second largest number in an array.

//code:- 
let numbers = [10, 5, 20, 8, 15];
numbers.sort(function(a, b){return b - a;});
let secondLargest = numbers[1];
console.log(secondLargest);

//(4) Sort numbers based on last digit.

//code:-
let num = [23, 45, 12, 67, 34];
num.sort(function(a, b){
    return (a % 10) - (b % 10);
});
console.log(num);
