// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите массив строк из четност и нечетности, в
// соответствии с тестом ниже:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// [1, 24, 5] -> [“нечет”, “чет”, “нечет”]
// Использовать map

const arr = [];
const n = prompt('количество элементов массива');
for (let i = 0; i < n; i++) {
    const element = prompt('заполнение массива').trim();
    if (isNaN(element)) continue
    arr.push(element)
    }
const result = arr.map(function (elem) {
    if (elem % 2 === 0) {
        return `${elem}: чет`;
    } else {
        return `${elem}: нечет`;
    }
})
console.log(result);
