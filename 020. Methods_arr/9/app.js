// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce
const arr = [];
const n = prompt('количество элементов массива');
for (let i = 0; i < n; i++) {
   arr.push(prompt('заполнение массива'))
}
//1-й способ
// let sum = 0
// arr.forEach(function (elem) {
//    if (!isNaN(elem)) {
//     sum+=elem
//       console.log(sum);
//    } else {
//       console.log('ввод только чисел');
//    }
// });


//1-й способ
let result = arr.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

console.log(result);