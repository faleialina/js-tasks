//Найдите минимальное значение в массиве используя цикл
const arr = [1, 2, 3, 4, -1, 6, 7, 8, 9, 10];
let value = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (value > arr[i]) {
        value = arr[i];
    }
}
console.log(value)