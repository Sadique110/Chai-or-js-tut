const myObject ={
    rb : "ruby",
    cpp: "c++",
    py: "python",
    js: "javaScript"
}

for (const key in myObject) {
    // console.log(myObject[key])
}

const Programming = ["python", "java", "c++", "JavaScript"]

// =====================
for (const key in Programming) {
    // console.log(Programming[key])
}
// =====================
for (const key of Programming) {
    // console.log(key)
}
// =====================
const map = new Map()

map.set('In', 'india')
map.set('USA', 'United state of america')
map.set('Fr', 'France')
map.set('UK', 'United Kindom')


for (const key in map) {
    // console.log(key);
}