// singleton

// object letral

const mySymbol = Symbol("Key1") 


const JsUser ={
    name: "mohammad",
    "full name": "Mohammad sadique",
    age: 23,
    [mySymbol]: "mykey1",   //syntex of symbol
    location: "Nagpur",
    company: "Sahdbox",
    role: "software engineer"
}

// console.log(JsUser.location);
// console.log(JsUser["location"]);
// console.log(JsUser['full name']);
// console.log(JsUser[mySymbol]);   //symbol is there
// console.log(typeof JsUser[mySymbol]); //symbol is there  


JsUser.name = "sadique"
// Object.freeze(JsUser)    
// console.log(JsUser)
JsUser.name = "ali"
// console.log(JsUser)


JsUser.greating = function(){
    console.log("hello Js users")
}


JsUser.greatingtwo = function(){
    console.log(`hello Js users, ${this.name}`);
}
console.log(JsUser.greating());
console.log(JsUser.greatingtwo());