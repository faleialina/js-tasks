// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce
const arr = [];
const n = prompt('количество элементов массива');
for (let i = 0; i < n; i++) {
   const newDeta = +prompt('заполнение массива')
   if (isNaN(newDeta)) continue
   arr.push(newDeta)
}
//1-й способ
let sum = 0
arr.forEach(function (elem) {
   sum += elem
});
console.log(sum);

// //2-й способ
// let result = arr.reduce(function (sum, elem) {
//    return sum + elem;
// }, 0);

// console.log(result);