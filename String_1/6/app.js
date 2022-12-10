// Найти квадратный корень числа. Если же число без плавающей точки, то просто
// вывести его. В противном случае необходимо округлить число до целых. Добавить
// проверку на ввод только чисел
const a = prompt();
const b = Math.sqrt(a)
if (isNaN(a)) {
    console.log('Нужно вводить число!');
} else {
    if (!Number.isInteger(b)) {
        console.log(b.toFixed())
    } else {
        console.log(b);
    }
}



