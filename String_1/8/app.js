// Пользователь вводит номер месяца. Необходимо вывести пору года по номеру месяца (2 способа)

const a = +prompt();
if (a === 12) {
    console.log('зима');
} else if (a === 1) {
    console.log('зима');
} else if (a === 2) {
    console.log('зима');
} else if (a === 3) {
    console.log('весна');
} else if (a === 4) {
    console.log('весна');
} else if (a === 5) {
    console.log('весна');
} else if (a === 6) {
    console.log('лето');
} else if (a === 7) {
    console.log('лето');
} else if (a === 8) {
    console.log('лето');
} else if (a === 9) {
    console.log('осень');
} else if (a === 10) {
    console.log('осень');
} else if (a === 11) {
    console.log('осень');
} else {
    console.log('ошибка ввода');
}


switch (a) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('зима');
        break;
    case 3:
        console.log('весна');
        break;
    case 4:
        console.log('весна');
        break;
    case 5:
        console.log('весна');
        break;
    case 6:
        console.log('лето');
        break;
    case 7:
        console.log('лето');
        break;
    case 8:
        console.log('лето');
        break;
    case 9:
        console.log('осень');
        break;
    case 10:
        console.log('осень');
        break;
    case 11:
        console.log('осень');
        break;
    case 12:
        console.log('зима');
        break;
    default:
        console.log('ошибка ввода');
        break;
}