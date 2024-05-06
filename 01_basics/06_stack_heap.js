// stack (primative) and Heap (Non-primative)

let myYoutubeName = "sadiqueyoutube.com"
let anotherName = myYoutubeName
anotherName = "ChaiOrCode"

console.log (myYoutubeName)
console.log(anotherName)


// Heap

let userOne = {
    email: "user01.com",
    upi: "uer@ybl"
}

let userTwo = userOne

userTwo.email = "Sadique@accenture.com"
console.log(userOne.email)
console.log(userTwo.email)
