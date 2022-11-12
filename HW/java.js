// alert("Я JavaScript!");

// let admin;
// let name = "John";
// admin = name;
// alert(admin);

// let HP = prompt("HP of your car", 200);
// alert(`Your car have ${HP} HP`);

// let isSubaru = confirm("Is it SUBARU?");
// alert(isSubaru);

// let currentUserName = prompt("What is your name?", "Ivan");
// alert(`Your name is ${currentUserName} !`);

// console.log("180" > "42");

// const age = 18;
// let accessAllowed = age >= 18 ? true : false;
// console.log(accessAllowed);

// let name = prompt("Какое официальное название JavaScript?");

// name == "ECMAScripts" ? alert("Верно!") : alert("Не знаете? “ECMAScript”!");

// if (name == "ECMASripts") {
//   alert(`Верно!`);
// } else {
//   alert(`Не знаешь?`);
// }

// const age = prompt("Ваш возраст?");

// if (age >= 14 && age <= 90) {
//   alert("OK");
// } else {
//   alert("Не ОК");
// }

let userName = prompt("Кто там?");

if (userName == "Админ") {
  let password = prompt("Пароль?");
  if (password == "Я главный") {
    alert(`Здравствуйте ${userName}!`);
  } else if (password == null) {
    alert(`Отменено`);
  } else {
    alert(`Неверный пароль`);
  }
} else if (userName == null) {
  alert(`Отменено`);
} else {
  alert(`Я вас не знаю`);
}
