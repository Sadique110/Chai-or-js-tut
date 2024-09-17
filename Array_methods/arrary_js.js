// Array in javascript
/*
Array is an finite collection of same data type 
Array methods

1.  map() 
    this method create a new array with the result of calling provided funcation on every element in this array

2.  filter()
    This ,methods create a new array with only element that pass the condition inside the provided funcation
3.  sort()
4.  forEach()
5.  concet()
6.  every()
7.  some()
8.  include()
9.  join()
10. reduce()
11. fine()
12. findIndex()
13. indexof()
14. fill()
15. slice()
16. reverse()
17. push()
18. pop()
19. shift()
20. unshift()

*/

// map
// const number = [1, 2, 3, 3, 2, 5, 7, 4]

// const num = number.map(number => number * 2)
// console.log(num)

// filter 
const number1 = [1, 2, 3, 4]
const num1 = number1.filter(number1 => number1 % 2 == 0);
// console.log(num1)
    

// sort()
const string = ["apple", "cherry", "graps","banana"]
string.sort();
console.log(string)