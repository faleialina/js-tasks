// Пользователь вводит число с клавиатуры. Нужно вывести на экран сколько в этом
// числе цифр, а также положительное оно или отрицательное. Например, "Число " +
// num + " однозначное положительное". (length)
let a = prompt();
if (isNaN(a)) {
    console.log('ошибка');
} else {
    console.log(a.length);
    a = +a;
    if (a > 0) {
        console.log(`число ${a} положительное`);
    } else {
        console.log(`число ${a} отрицательное`);
    }
}