//Напишите программу, в которой вычисляется сумма, разность и произведение двух целых чисел, введенных с клавиатуры.
const a = +prompt('введите целые цисла');
const b = +prompt('введите целые цисла');
if (Number.isInteger(a) && Number.isInteger(b)) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
} else {
    console.log('ошибка ввода');
}

