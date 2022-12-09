//Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если же результат – число с плавающей точкой, то округлить до 2 знаков после запятой)
const a = +prompt();
const b = Math.sqrt(a)
if (!Number.isInteger(b)) {
    console.log(b.toFixed(2))
} else {
    console.log(b);
}