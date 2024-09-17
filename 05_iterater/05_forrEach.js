const Programming = ["python", "java", "c++", "JavaScript"]

Programming.forEach(function(value){
    // console.log(value)
})

Programming.forEach( (items) => {
    // console.log(items)
})

Programming.forEach( (item, index, arr) =>{
    // console.log(item, index, arr)
})


const mycoding = [{
    lenguage: "python",
    fileextension: "py"
},
{
    lenguage: "ruby",
    fileextension: "rb"
},
{
    lenguage: "javascript",
    fileextension: "js"
},{
    lenguage: "CSS",
    fileextension: ".css"
}]
mycoding.forEach( (value) => {
    console.log(value.lenguage)
})