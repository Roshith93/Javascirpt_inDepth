const arr = {
 name: "R",
 age: 24,
 addresses: [{
   street: "101 main"
  },
  {
   area: "Main road"
  },
 ]
}

// console.log(Object.entries(arr))
let res = Object.entries(arr)
let result = res.map(el => console.log(el))
// for (const [key, val] of Object.entries(arr)) {
//  console.log(`${key}-${val}`)
// }