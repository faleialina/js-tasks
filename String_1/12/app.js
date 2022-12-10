// Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6
const x = prompt('Введите трёхзначное число');

const a = Math.round(x / 100 % 10);
const b = Math.round(x / 10 % 10);
const c = Math.round(x % 10);
const sum = a + b + c;
const p = a * b * c;
if (isNaN(x)) {
    console.log('Нужно вводить число!');
} else {
    if (x.length) {
        console.log(`Сумма цифр = ${sum}`);
        console.log(`Произведение цифр = ${p}`);
    } else {
        console.log('Введите положительное число');
    }
}



