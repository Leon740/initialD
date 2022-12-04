// while, do while, for
// for (let i = 2; i <= 10; ++i) {
//   if (i % 2 == 0) {
//     alert(i);
//   }
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// ---> to while

// let i = 0;
// while (i < 3) {
//   alert(`Number ${i}!`);
//   i++;
// }

// let i;
// do {
//   i = prompt("Введите число больше 100?", 0);
// } while (i <= 100 && i);

// let n = 10;

// nextPrime: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }
//   alert(i);
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert( pow(x, n) );
// }

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

// ---> arrow function

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes()
//   else no();
// };

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

// for (i = 1; i < 6; i++) console.log(i);

// let i = 8;
// while (i) {
//   console.log(i);
//   i--;
// }

// let num = 0;
// while (num < 3) {
//   console.log(num);
//   num++;
// }

// fC: for (let num = 0; num < 2; num++) {
//   for (let size = 0; size < 5; size++) {
//     console.log(size);
//     if (size == 2) break fC;
//   }
// }

// function showName() {
//   console.log(`Вася!`);
// }
// setTimeout(showName, 0);
// console.log(`Коля!`);
