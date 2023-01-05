// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach


const arr = [];
const n = prompt('количество элементов массива');
for (let i = 0; i < n; i++) {
   arr.push(prompt('заполнение массива'))
}
//1-й способ
// arr.forEach(function (elem) {
//    if (!isNaN(elem)) {
//       console.log('true');
//    } else {
//       console.log('false');
//    }
// });

//2-й способ
let result = arr.every(function (elem) {
   if (!isNaN(elem)) {
      return true;
   } else {
      return false;
   }
})
console.log(result);
