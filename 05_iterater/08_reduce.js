const Numberar = [1, 2, 3, 4]

const workFun = Numberar.reduce(function(acc, numval){
    // console.log(`accumalater is ${acc} and the numval ${numval}`)
    return acc + numval
}, 3)
// console.log(workFun)


const arrowfun = Numberar.reduce( (acc, numval)=>( acc+numval),0)

// console.log(arrowfun)

const objectfun = [
    {
        courses: "js courese",
        price: 2999
    },
    {
        courses: "mobile dev courese",
        price: 5999
    },
    {
        courses: "py courese",
        price: 999
    }

]

const Ncall = objectfun.reduce(( acc ,item ) => (acc + item.price),0)
console.log(Ncall)