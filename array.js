// methods of array
// method 1.
//  concat() :- To joins two or more arrays and returns a result
// let ar=[2,3,4,5,5,1] ;
// let ar1=[1,2,4,5,5];
// let res=ar.concat(ar1)
// console.log(res)
// output:- [2,3,4,5,5,1,1,2,4,5,5]

// method 2.
// indexOf() :-To searches an element of an array and returns its position
// let fruits = [
//   "apple",
//   "banana",
//   "guava",
//   "pineApple",
//   "apple",
//   "banana",
//   "guava",
//   "pineApple",
// ];
// let res = fruits.indexOf("apple");
// console.log(` index of apple  ${res}`);
// out index of apple 0 // case1 //

// let res1 = fruits.indexOf("apple", 1);
// console.log(res1);
// here it start search from index one so the it ignore the first index of array
// output:-4

// method 3.
//  find():-returns the first value of an array element that passes a test.It avoid all the elements when it find the element which passs the test .
// let num = [1, 12, 3, 4, 5, 6];
// let result = num.find((value) => value % 2 == 0);
// console.log(result);
// output=12

// /method 4.
// filter():- filter method return the values which passed the test and itrates all the element to compare with the test case
// let result1 = num.filter((value) => value % 2 == 0);
// console.log(result1);
// output:-12,4,6


// method 5.
// findIndex():-returns the first index of an array element that passes a test
// let num = [1, 12, 3, 4, 5, 6];
// let res=num.findIndex((value)=>value%2==0);
// console.log(res)

// method 6.
// forEach():-calls a function for each element it does,nt return any thing
// let person=["ramesh","suresh","vikash","kohli"];
// person.forEach((value)=> console.log(value));

// method 7.
// includes() to check the value is string or not it gives the result is true or false
// let sentenses="hello i am ritesh";
// let res=sentenses.includes("hello")
// console.log(res);
// output:-true
