//Преобразуйте первую букву каждого слова строки в верхний регистр.
const str = 'alina falei'.toLowerCase().split(' ');
let result = ''


for (let i = 0; i < str.length; i++) {
    result += str[i][0].toUpperCase() + str[i].slice(1) + ' '
}
console.log(result);
