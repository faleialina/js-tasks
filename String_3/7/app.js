// На вход программе подаётся строка. Замените все @ на '!' с помощью глобального
//поиска и замены (2 способа)


const val = prompt().trim();
// 1 способ
if (isNaN(val)) {
    console.log(val.replaceAll('@', '!'));
} else {
    console.log('ошибка ввода');
}
// 2 способ
if (isNaN(val)) {
    console.log(val.replace(/@/g, '!'));
} else {
    console.log('ошибка ввода');
}


