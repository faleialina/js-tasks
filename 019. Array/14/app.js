// Дан массив c числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235
const arr = [10, 20, 30, 50, 235, 3000];
let result = ''
for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]).charAt(0) === '1' || String(arr[i]).charAt(0) === '2' || String(arr[i]).charAt(0) === '5') {
        result += arr[i] + ' '
    }
}
console.log(result);