//Дано число 7, найдите все числа кратные 7 до 100
let i = 7;
while (i <= 100) {
    if (i % 7 === 0) {
        console.log(i);
    }
    i++
}