// const Name = "sadqiue"
// const developer = "Accenture"

// console.log(Name + developer + "value");

// console.log(`${Name} wants to become a developer in ${developer}.`);

const gameName = new String("sadique");
// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))

const NewString = gameName.substring(0,4);
console.log(NewString)

const Anotherstring = gameName.slice(-7,4);
console.log(Anotherstring)

const stringTrim = "   sadique   "
console.log(stringTrim.trim())


const url = "https://google.com/adfjs20%sadique.com"

console.log(url.replace('20%','_'))

console.log(url.includes('sadique'))