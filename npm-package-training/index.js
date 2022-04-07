const _ = require('lodash')

const data1 = [
  {
    age: 3,
    name: "Curtis Greene",
    email: "curtis.greene@zaj.ca",
  },
  {
    age: 23,
    name: "Nikki Lowe",
    email: "nikki.lowe@darwinium.tv",
  },
  {
    age: 39,
    name: "Barr Copeland",
    email: "barr.copeland@nipaz.me",
  },
];

const data2 = [
  {
    age: 29,
    name: "Calhoun Woodward",
    email: "calhoun.woodward@medmex.info",
  },
  {
    age: 21,
    name: "Leta Lee",
    email: "leta.lee@qnekt.com",
  },
  {
    age: 40,
    name: "James Dinh",
    email: "j.dink@erw.com",
  },
];

//task1
const indexUser = _.findIndex(data1, ['age', 23])
console.log(indexUser)

//task2
const commonArray = _.concat(data1, data2)
console.log(commonArray.length)

//task3
const fixUser = _.omit(data1[0], ['age'])
console.log(fixUser)

//task4
const {age, ...otherProperties} = data1[0]
console.log(otherProperties)
//второй вариант
const newUser = Object.fromEntries(Object.entries(data1[0]).filter(arr => arr[0] !== 'age'))
console.log(newUser)