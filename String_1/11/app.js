// Напишите программу, которая находит полное число метров по заданному числу
// сантиметров. Добавить проверку на ввод только чисел
// 345 -> 3
// 100 -> 1

const cm = +prompt();
const m = cm / 100;
if (isNaN(cm)) {
    console.log('Нужно вводить число!');
} else {
    if (!Number.isInteger(m)) {
        console.log(Math.trunc(m))
    } else {
        console.log(m);
    }
}
