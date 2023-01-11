// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел. 

const n = prompt('количество элементов массива');
const arr = [];
for (let i = 0; i < n; i++) {
    const value = +prompt('заполнение массива')
    if (!isNaN(value)) {
        arr.push(value);
    } else if (value === 0) {
        break
    }
}
let result = arr.reduce(function (sum, elem) {
    return sum + elem
}, 0)
console.log(result);