/* Пользователь вводит с клавиатуры 2 числа: a и b. Проверьте, что a делится без
остатка на b. Если это так - выведите 'Делится' и результат деления, иначе
выведите 'Делится с остатком' и остаток от деления*/
const a = +prompt();
const b = +prompt();
const c = a / b
if (a % b === 0) {
    console.log('Делится')
    console.log(c)
} else {
    console.log('Делится с остатком');
    console.log(a % b)
}