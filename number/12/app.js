/*Напишите программу для пересчёта величины временного интервала, заданного в минутах, в величину, выраженную в часах и минутах:
Пример:
150 => 2 час 30 минут
50 => 0 час 50 минут
240 => 4 час 0 минут*/
const a = +prompt();
y = a % 60;
n = (a - y) / 60;
console.log(n + 'час' + y + 'минут');
