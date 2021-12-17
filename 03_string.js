// const name = 'Владилен'
// const age = 26
//
// function getAge() {
//     return age
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст: ' + age + ' лет'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет`
// console.log(output)

// const output = `
//     <div>This is div</div>
//     <p>this is p</p>
// `
//
// console.log(output)

// const name = 'Владилен'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('лен')) // показывает есть ли такая часть в слове
// console.log(name.indexOf('!')) // тут покажет -1, т.к. нет такого
// console.log(name.startsWith('влад')) // тут покажет начинается ли слово с такой части, покажет что нет, т.к. не с большой буквы
// console.log(name.toLowerCase().startsWith('влад')) // тут покажет начинается ли слово с такой части, покажет что нет, т.к. не с большой буквы
// console.log(name.startsWith('Влад')) // тут покажет начинается ли слово с такой части, покажет что да true
// console.log(name.endsWith('ен'))
// console.log(name.repeat(3))
// const string = '     password     '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Еще не родился'
    }
    //console.log(s, name, age)
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Владилен'
const personName2 = 'Максим'
const personAge = 26
const personAge2 = -10

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)

