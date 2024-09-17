// FOR OF  loop


const arr = [1, 2, 3, 34, 5]
for (const num of arr) {
    // console.log(`the array is ${num}`);
}
const string = "Hello World"
for (const cahr of string) {
    // console.log(`the array is ${cahr}`);
}

// Map

const map = new Map()

map.set('In', 'india')
map.set('USA', 'United state of america')
map.set('Fr', 'France')
map.set('UK', 'United Kindom')

// console.log(map)


for (const [key, value] of map) {
    console.log(key, value);
}