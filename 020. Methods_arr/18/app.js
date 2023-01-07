// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив, где каждый элемент
// возведен в квадрат. map
const n = prompt('количество элементов массива');
const arr = [];
for (let i = 0; i < n; i++) {
    const value = prompt('заполнение массива');
    if (!isNaN(value)) {
        arr.push(value);
    }
}
const result = arr.map(function (elem) {
    return elem ** 2
})
console.log(result);