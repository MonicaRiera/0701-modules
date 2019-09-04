const items = require('./data')
items.forEach(e => console.log(e))

const calc = require('./calc')
let prices = items.map(e => e.price)
console.log(prices)
console.log(calc.add(prices))
console.log(calc.subtract(prices))
