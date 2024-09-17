// map 

let arr = [1, 2, 3, 34, 55, 54, 34, 34, 23, 10]

// const newNumber = arr.map((value)=>{
//     return value *2
// })
// console.log(newNumber);
const arrNumber = arr.map((num)=>(num *2 )) 
                    .map((num) => (num + 1))
                    .filter((num)=> (num >= 40 ))
console.log(arrNumber);