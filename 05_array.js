const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13, '21']
// const people = [
//     {name: 'Vladilen', budget: 4200},
//     {name: 'Elena', budget: 3500},
//     {name: 'Victoria', budget: 1700}
// ]

// Function
function addItemToEnd() {

}

// Method
// cars.push('Рено')
// cars.unshift('Волга')
//
// const firstItem = cars.shift()
// const lastCar = cars.pop()
//
// console.log(firstItem)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())

// const index = cars.indexOf('БМВ')
// cars[index] = 'Porsche'
// console.log(cars)
// let findedPerson
// for (const person of people) {
//     // console.log(person)
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }

// console.log(findedPerson)

// const index = people.findIndex(function (person) {
//     return person.budget === 3500
// })
// const person = people.find(function (person) {
//     return person.budget === 35002
// })

// const person = people.find(person => person.budget === 3500)
// console.log(person)

// console.log(cars.includes('Мазда'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
//
// const pow2fib = fib.map(pow2).map(Math.sqrt)
// const pow2fib = fib.map(pow2)
// const filteredNumbers = pow2fib.filter(num => {
//     return num > 20
// })
// console.log(pow2fib)
// console.log(filteredNumbers)
// console.log(upperCaseCars)
// console.log(cars)

// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
        acc += person.budget
    return acc
},0)
console.log(allBudget)