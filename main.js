// let name =  prompt('введите свое имя')
// let born = +prompt('введите свои год рождения')
// let year = +prompt('введите нынешний год')

// function res() {
//     let sum = year - born
//     alert( name + ' вам ' + sum)
// }

// console.log(res());

function math(min,max) { 
    return Math.floor(Math.random() * (max + 1 - min ) + min)
}

let example = +prompt(' введите кол-во примеров ')

for(let i = 0; i < example;i++) {
    let one = math(10,100)
    let two = math(10,100)
    let primer = +prompt(one + ' + ' + two + ' =')
    let answer = primer == (one + two) ? 'Верный' : 'Неверный' 
    alert('Ваш ответ ' + answer + ' = ' + primer + ' Правильно ' + (one + two))

}
