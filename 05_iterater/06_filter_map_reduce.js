const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newArray = nums.filter( (value)=> {
//     return value > 4
// });
// if we are using scop {} need return keyword
//ontherwise we can write the () like that

// const newNums = []

// nums.forEach( (nums)=> {
//     if (nums > 4) {
//         newNums.push(nums)
//     }
// })
// console.log(newNums);

let userBooks = [{title: "bookOne", genre: "History", publish: "1981", edition: "2009"},
{title: "bookTwo", genre: "Science", publish: "1980", edition: "2010"},
{title: "bookThree", genre: "Maths", publish: "1987", edition: "2005"},
{title: "bookFour", genre: "Rich Dad Poor Dad", publish: "1991", edition: "2009"}
]

const find1 = userBooks.filter( (bk)=> (bk.publish === '1987'))

const find = userBooks.filter( (bk)=> {return bk.publish === '1987'})
// console.log(find)