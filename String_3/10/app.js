// На вход подается число произвольной длины. Необходимо обратиться к каждому
// значению числа и выявить четность/нечетность
// 1234 -> 1 неч 2 чет 3 неч 4 чет
// 7 -> 7 – неч
// 444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет
const a = '1234';

if (!isNaN(a)) {
    let result = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            result += a[i]  + ` чет `;
        } else {
            result += a[i]  + ` неч `;
        }
    }
    console.log(result);
} else {
    console.log('Введите число');
}
