/*
In JavaScript, data types categorize the kind of values a variable can hold. These are broadly divided into two categories: primitive data types and non-primitive (or object) data types.
***********Primative Data Types:********
1. Number: Represents both integer and floating-point numbers. Example: 42, 3.14
2. String: Represents a sequence of characters. Example: "Hello, World!"
3. Boolean: Represents a logical entity and can have two values: true or false.
4. Null: Represents the intentional absence of any object value. It is one of JavaScript's primitive values.
5. Undefined: Indicates that a variable has been declared but has not yet been assigned a value.
6. Symbol: Introduced in ES6, it represents a unique identifier. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.
7. BigInt: Introduced in ES2020, it represents integers with arbitrary precision. This is useful for working with large integers beyond the safe limit for the Number type.

***********non-Primitive Data Types:*******
1. Object: The most complex data type in JavaScript. Objects are collections of properties, where each property is defined as a key-value pair. Objects can represent real-world entities and can contain multiple values and types.
2. Array: A special type of object used to store ordered collections of values. Arrays can hold multiple data types and provide various methods for traversal and manipulation.
3. Function: In JavaScript, functions are first-class objects, meaning they can be treated like any other object. They can be assigned to variables, passed as arguments to other functions, and returned from functions.
*/

"user strict"; //trite all js code as new version

//alert(3 + 3); //we are using node js not browser console

console.log(3 + 3)

// introduce two application for js (1) MDN and (2) tc39


let name = "mohammad sadique"
let age = 21
let isLoggedIn = false
let state = null
// number = 2 poser 53
// bigint
// string = ""
// boolean = true and false
// null =  stand alon value
// undefined = 
// Symbol => uniq


// Object
console.log(typeof"mohammad sadique")
console.log(typeof null) //object output
console.log(typeof  undefined) // output undefind