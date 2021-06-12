const maxval = (acc,val) => Math.max(acc, val)

let res1 = [2,4,5].reduce(maxval)
let res2 = [{x:2},{x:22}].reduce(maxval)
console.log(res1)
console.log(res2)