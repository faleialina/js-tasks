// Пользователь вводит многозначное число. Необходимо вставить двоеточие
// между двумя нечетными числами. Работать с числом как с массивом.
// Использовать for
// 55639217 -> 5:563:921:7.
const arr = [1, 2, 3, 4, -1, 6, 7, 8, 9, 10];
let value = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (value > arr[i]) {
        value = arr[i];
    }
}
console.log(value)