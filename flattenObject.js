var user = {
  name: 'Vishal',
  address: {
    primary: {
      house: '109',
      street: {
        main: '21',
        cross: '32',
      },
    },
  },
}

// const obj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.keys(obj));
// let getKeys = Object.keys(user)
// console.log(getKeys)

let flattenArray = {}

const letsFlatTheArray = (obj, keyName = 'user') => {
  Object.keys(obj).forEach((el) => {
    let newKey = `${keyName}_${el}`
    if (typeof obj[el] === 'object') {
      letsFlatTheArray(obj[el], newKey)
    } else {
      flattenArray[newKey] = obj[el]
    }
  })
}
letsFlatTheArray(user)
console.log(flattenArray)

let tempArray = []

let flatObj = (obj, keyName = 'user1') => {
  Object.keys(obj).forEach((el) => {
    var newKey = `${keyName}_${el}`
    if (typeof obj[el] === 'object') {
      flatObj(obj[el], keyName)
    } else {
      tempArray.push(obj[el]) 
    }
  })
}

flatObj(user)
console.log(tempArray)
