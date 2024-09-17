// let myDate = new Date()

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);


// let myCreateDate = new Date(24,0,4)
// console.log(myCreateDate.toDateString());

let myCreateDate = new Date("2023-01-27")
// console.log(myCreateDate);

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));


let NewDate = new Date()
// console.log(NewDate);
// console.log(NewDate.getMonth());


NewDate.toLocaleDateString('default',{
    weekday: 'narrow'
}
)
console.log(NewDate);