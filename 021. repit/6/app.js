// Посчитать количество согласных в строке. В задаче необходимо хоть как-то
// затронуть forEach
const array = 'forEach'.toLowerCase().split('');
let result = 0;
array.forEach(function (elem) {
    if (elem === 'a' || elem === 'e' || elem === 'u' || elem === 'o' || elem === 'i') {
        result += 1;
    }
});
console.log(array.length - result);