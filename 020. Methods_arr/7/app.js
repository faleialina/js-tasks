// На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам


const arr = ['hschool', 'hschool_0', 'hschool_1'];
// //1-й способ
// console.log(arr[0]);

// console.log(arr[2]);

// //2-й способ
// console.log(arr[0]);

// arr.reverse()
// console.log(arr[0]);

// //3-й способ
// for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {
//         console.log(arr[i]);
//     };

// }

// for (let i = 0; i < arr.length; i++) {
//     if (i === arr.length-1) {
//         console.log(arr[i]);
//     };

// }

// //4-й способ
// console.log(arr.shift());
// console.log(arr.pop());

// //5-й способ
// arr.forEach(function (el, index) {
//     if (index === 0) {
//         console.log(el);
//     }
// })

// arr.forEach(function (el, index) {
//     if (index === arr.length - 1) {
//         console.log(el);
//     }
// })
// //6-й способ
// console.log(arr[arr.length - arr.length]);
// console.log(arr[arr.length - 1]);

//7-й способ
console.log(arr.slice(0,1));
console.log(arr.slice(2,3));