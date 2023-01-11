// 5. Создать массив гласных из динамичного массива. Filter

const n = prompt('Количество элементов массива');
const arr = [];
for (let i = 0; i < n; i++) {
    const value = prompt('заполнениемассива');
    if (isNaN(value)) {
        arr.push(value);
    }
}
let result = arr.filter(function (elem) {
    if (elem === 'a' || elem === 'e' || elem === 'u' || elem === 'o' || elem === 'i') {
        return true
    }
})
console.log(result);