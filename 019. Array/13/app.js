// Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму всех положительных элементов массива циклом for of
const arr = [1, 2, 3, 4, -1, 6, 7, 8, 9, 10];
let sum = 0
for (const i of arr) {
    if (i > 0) {
        sum += i
    }
}
console.log(sum);