// Найти максимальное и минимальное число динамичного массива. forEach
const n = prompt('количество элементов массива');
const array = [];
for (let i = 0; i < n; i++) {
    let value = prompt('заполнение массива');
    if (!isNaN(value)) {
        array.push(value)
    } else {
        continue
    }
}
let max = array[0];
let min = array[0];
array.forEach(function (elem) {
    if (elem > max) {
        max = elem;
    } else if (elem < min) {
        min = elem;
    }
})
console.log(min, max);