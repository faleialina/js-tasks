// Дан статичный массив с элементами и число вводимое с клавиатуры. С помощью
// цикла for и оператора if проверьте есть ли в массиве введенное число. Если есть,
// то остановите выполнение цикла. Если нет, то найдите среднее арифметическое
// всех чисел

const arr = [1, 2, 3, 4, 5, 6, 7];
const value = 4;
if (arr.includes(value)) {
    console.log(`Есть данное число ${value}`);
} else {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    console.log(`среднее арифметическое:${result / arr.length}`);
}