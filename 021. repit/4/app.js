// 4. Палиндром. Сравнить с развернутой строкой не используя reverse. For
const str = 'anna';
let reverse = '';
for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}
if (str === reverse) {
    console.log('Палиндром');
} else {
    console.log('это не палиндром');
}
