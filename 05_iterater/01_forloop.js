// for

// for (let i = 0; i <= 10; i++) {
//     const element = i
//     if (element == 5) {
//         console.log("5 is a bet number");
//     }
//     console.log(element)
    
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop i ${i}`)
//     for (let j = 0; j < 10; j++) {
//         console.log(`inner loop i ${i} and j ${j}`)
        
//     }
// console.log(" ")
// }


// const myArry = ["flash", "superman", "batman"]
// n = myArry.length
// for (let i = 0; i < n; i++) {
//     const element = myArry[i];
//     console.log(element);
    
// }



// break and continue

// for (let i = 0; i <= 20; i++) {
//     const element = [i];
//     if (element == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(i);
    
// }


for (let i = 0; i <= 20; i++) {
    const element = [i];
    if (element == 5) {
        console.log("Detected 5 then skip 5");
        continue;
    }
    console.log(i);
    
}