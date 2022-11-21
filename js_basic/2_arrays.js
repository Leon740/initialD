let carsJdm = ['Toyota Supra', 'Honda Civic', 'Nissan Skyline'];
console.log(carsJdm);

let carsGerman = ['Audi', 'Skoda', 'Porsche'];
console.log(carsGerman);
// console.log(carsGerman[1]);

// spread ...
// let allCars1 = [...carsJdm, ...carsGerman];
// console.log(allCars1);

// length
console.log(carsJdm.length);

// flat
// let allCars2 = [carsJdm, carsGerman];
// console.log(allCars2.flat());

// push
carsGerman.push('Volkswagen');
console.log(carsGerman);

// pop
carsGerman.pop();
console.log(carsGerman);

// shift
carsGerman.shift();
console.log(carsGerman);

// unshift
carsGerman.unshift('Lamborghini');
console.log(carsGerman);

// filter
console.log(carsJdm.filter((car) => car !== 'Honda Civic'));

// for
// for (let i = 0; i < carsJdm.length; i++) {
//   console.log(`i = ${i}`);
//   console.log(carsJdm[i]);
// }

// while
// let i = 0;

// while (i < carsJdm.length) {
//   console.log(`i = ${i}`);
//   console.log(carsJdm[i]);
//   i++;
// }

// do while
// let i = 0;

// do {
//   console.log(`i = ${i}`);
//   console.log(carsJdm[i]);
//   i++;
// } while (i < carsJdm.length)

const a = 21;
const b = 46;
const c = 33;
const d = 56;
const e = 1299;
const f= 98;

// function sum(arg1, arg2) {
//   return arg1 + arg2;
// }

// console.log(sum(a, b));
// console.log(sum(c, d));
// console.log(sum(e, f));
// console.log(
//   sum(
//     (sum(a, b), sum(c, d)),
//     sum(e, f)
//   )
// );

// function sum1() {
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     console.log(`i = ${i}`);
//     console.log(`arguments[i] = ${arguments[i]}`);
//     sum = sum + arguments[i];
//     console.log(`sum = ${sum}`);
//   }

//   return sum;
// }

// console.log(sum1(21, 44, 63, 91));

// Function Declaration - bubbles to top
// function sum(a, b) {
//   return a + b;
// }

// Function Expression
// const sum = function(a, b) {
  // console.log(`a = ${a}`);
  // console.log(`b = ${b}`);
//   return a + b;
// }

// Arrow functions
// without return
// const sum = (a, b) => a + b;

// with return
// const sum = (a, b) => {
//   console.log(`a = ${a}`);
//   console.log(`b = ${b}`);
//   return a + b;
// };

// console.log(sum(11, 23));
// console.log(sum(92, 44));
// console.log(sum(89, 67));


let carsBigJdm = ['Toyota Supra', 'Toyota Chaser', 'Honda Civic', 'Honda Integra', 'Honda S2000', 'Mitsubishi Lancer Evo', 'Subaru Impreza WRX STI', 'Nissan Skyline R33', 'Nissan Fairlady'];
console.log(carsBigJdm);

// filter
// explicit - явная
// function fnRemoveCarsFromArray(carsArray, carName) {
//   carsArray = carsArray.filter((car) => !car.includes(carName));
//   return carsArray;
// }
// implicit - неявная
function fnRemoveCarsFromArray(carName) {
  carsBigJdm = carsBigJdm.filter((car) => !car.includes(carName));
}

const carsJdmToyotas = carsBigJdm.filter(function(car) {
  if (car.includes('Toyota')) {
    return true;
  }
  return false;
});
console.log(carsJdmToyotas);

fnRemoveCarsFromArray('Toyota');
console.log(carsBigJdm);

const carsJdmHondas = carsBigJdm.filter((car) => car.includes('Honda'));
console.log(carsJdmHondas);

fnRemoveCarsFromArray('Honda');
console.log(carsBigJdm);

// sort
console.log(carsBigJdm.sort());

// slice
const carsJdmNissans = carsBigJdm.slice(1, 3);
console.log(carsJdmNissans);


// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function fnSearchInArray(array = [], target = 0) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }

//   return -1;
// }

// const elIndex = fnSearchInArray();
// console.log(elIndex);

