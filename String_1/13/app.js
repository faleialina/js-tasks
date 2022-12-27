// Пользователь вводит четырехзначное число. Напишите скрипт, который будет
// выявлять является ли каждое составляющее числа четным либо нечетным.
// Добавить проверку на ввод только чисел
//1234 -> 1 – неч 2 – чет 3 – неч 4 - чет
const x = prompt('Введите четырехзначное число');
const a = Math.round(x / 1000 % 10);
const b = Math.round(x / 100 % 10);
const c = Math.round(x / 10 % 10);
const d = Math.round(x % 10);

if (isNaN(x)) {
    console.log('Нужно вводить число!');
} else {
    if (a % 2 === 0) {
        console.log(`${a} - чет`)
    } else {
        console.log(`${a} - неч`)
    }
    if (b % 2 === 0) {
        console.log(`${b} - чет`)
    } else {
        console.log(`${b} - неч`)
    }
    if (c % 2 === 0) {
        console.log(`${c} - чет`)
    } else {
        console.log(`${c} - неч`)
    }
    if (d % 2 === 0) {
        console.log(`${d} - чет`)
    } else {
        console.log(`${d} - неч`)
    }
}
