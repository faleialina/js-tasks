// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел. 

const n = prompt('количество элементов массива');
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(+prompt('заполнение массива'));
}
let isNull = false;
let sum = 0;
arr.forEach(function (elem) {
    if (elem === 0) {
        isNull = true
    }
    if (isNull === false) {
        sum += elem;
    }
})

console.log(sum);