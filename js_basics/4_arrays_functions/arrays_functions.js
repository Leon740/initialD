const carsJapanese = ['Toyota Supra', 'Toyota Chaser', 'Honda Civic', 'Honda S2000', 'Nissan Skyline', 'Nissan Fairlady', 'Mitsubishi Lancer Evo', 'Mitsubishi Eclipse', 'Subaru Impreza WRX STI'];
const carsGerman = ['Volkswagen', 'Audi', 'Porsche', 'Lamborghini', 'BMW'];

// concat
// concatenates arrays
// returns new array
const carsAll = carsJapanese.concat(carsGerman);
console.log(carsAll);

// flat
// flattens arrays
// returns new array
const allCars1 = [carsJapanese, carsGerman].flat();
console.log(allCars1);

// spread
const allCars2 = [...carsJapanese, ...carsGerman];
console.log(allCars2);

// push
// adds element to the end of array
// returns the new length
const carsGermanWithMercedes = carsGerman.push('Mercedes'); // length
console.log(carsGerman);
console.log(carsGermanWithMercedes);

// pop
// deletes element from the end of the array
// returns the deleted element
const carsGermanWithoutMercedes = carsGerman.pop(); // element
console.log(carsGerman);
console.log(carsGermanWithoutMercedes);

// shift
// deletes element from the beginning of array
// returns element
const carsGermanWithoutVolkswagen = carsGerman.shift(); // element
console.log(carsGerman);
console.log(carsGermanWithoutVolkswagen);

// unshift
// adds element to the beginning of array
// returns the new length
const carsGermanWithVolkswagen = carsGerman.unshift('Volkswagen'); // length
console.log(carsGerman);
console.log(carsGermanWithVolkswagen);

// functions
const a = 21;
const b = 46;
const c = 33;
const d = 56;
const e = 1299;
const f= 98;

function fnSum(arg1, arg2) {
  return arg1 + arg2;
}

console.log(fnSum(a, b));
console.log(fnSum(c, d));
console.log(fnSum(e, f));
console.log(
  fnSum(
    (fnSum(a, b), fnSum(c, d)),
    fnSum(e, f)
  )
);

// in order to work with all of the arguments of the function
function fnSum1() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    console.log(`i = ${i}`);
    console.log(`arguments[i] = ${arguments[i]}`);
    sum = sum + arguments[i];
    console.log(`sum = ${sum}`);
  }

  return sum;
}

console.log(fnSum1(21, 44, 63, 91));

// Function Declaration
fnSumDeclaration(1, 2); // bubbles

function fnSumDeclaration(arg1, arg2) {
  const sum = arg1 + arg2;
  console.log(sum);
  return sum;
}

// Function Expression
const fnSumExpression = function(arg1, arg2) {
  const sum = arg1 + arg2;
  console.log(sum);
  return sum;
}
fnSumExpression(1, 2);

// Arrow Functions
const fnSumArrow1 = (arg1, arg2) => arg1 + arg2;
fnSumArrow1(1, 2);

const fnSumArrow2 = (arg1, arg2) => {
  const sum = arg1 + arg2;
  console.log(sum);
  return sum;
}
fnSumArrow2(1, 2);

// return
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function fnIndexOf(array = [], target = 0) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

const elIndex = fnIndexOf(numberArray, 6);
console.log(elIndex);

// filter
// if function returns true, adds element to the array
const carsJapaneseToyota = carsJapanese.filter(function(car) {
  console.log(car);
  if (car.includes('Toyota')) {
    return true;
  }
  return false;
});
console.log(carsJapaneseToyota);

const carsJapaneseHonda = carsJapanese.filter((car) => car.includes('Honda'));
console.log(carsJapaneseHonda);

// Explicit function
// Function which doesn't interact with other code
// Ex. we work with argument carsArray
function fnSelectCars(carsArray, carName) {
  const result = carsArray.filter((car) => car.includes(carName));
  return result;
}

const carsJapaneseToyota1 = fnSelectCars(carsJapanese, 'Toyota');
console.log(carsJapaneseToyota);

const carsJapaneseHonda1 = fnSelectCars(carsJapanese, 'Honda');
console.log(carsJapaneseHonda1);

// Implicit function
// Function which interacts with other code
// Ex. we work with carsJapanese array, available for other code
function fnSelectJapaneseCars(carName) {
  const result = carsJapanese.filter((car) => car.includes(carName));
  return result;
}

const carsJapaneseNissan = fnSelectCars(carsJapanese, 'Nissan');
console.log(carsJapaneseNissan);

const carsJapaneseMitsubishi = fnSelectCars(carsJapanese, 'Mitsubishi');
console.log(carsJapaneseMitsubishi);

// callback
console.log('\n\n\n');

// problem
const carsGermanVAG = ['Volkswagen Golf', 'Volkswagen Jetta', 'Volkswagen Passat', 'Audi A6', 'Audi Q8', 'Audi RS3'];

function fnFilterVAGByNameLength(array, keyword) {
  const arrResult = array.filter((car) => car.includes(keyword) && car.length > 15);

  return arrResult;
}

const carsGermanVAGVolkswagen = fnFilterVAGByNameLength(carsGermanVAG, 'Volkswagen');
console.log(carsGermanVAGVolkswagen);

const carsGermanVAGAudi = fnFilterVAGByNameLength(carsGermanVAG, 'Audi');
console.log(carsGermanVAGAudi);

// solution
function fnFilterVAGByName(array, func) {
  const arrResult = [];

  for (let i = 0; i < array.length; i += 1) {
    if (func(array[i])) {
      arrResult.push(array[i]);
    }
  }

  return arrResult;
}

const carsGermanVAGVolkswagen1 = fnFilterVAGByName(carsGermanVAG, (car) => car.includes('Volkswagen'));
console.log(carsGermanVAGVolkswagen1);

// closures
console.log('\n\n\n');

function fnGetCars(name) {
  const arrCarsAll = [
    'Toyota Supra', 'Toyota Cresta', 'Toyota ae86',
    'Honda S2000', 'Honda Integra', 'Honda Civic',
    'Mitsubishi Lancer Evo', 'Mitsubishi Colt', 'Mitsubishi Eclipse',
    'Subaru Impreza WRX STI',
    'Nissan GTR', 'Nissan Fairlady',
    'Audi S6', 'Audi R8', 'Audi TT'
  ];

  return function(model) {
    return arrCarsAll.filter((car) => car.includes(name)).find((car) => car.includes(model));
  }
}

const fnGetAudi = fnGetCars('Audi');
const audiR8 = fnGetAudi('R8');

console.log(fnGetCars('Audi')('R8'));
console.log(audiR8);

console.log('\n\n\n');

// problem
function fnUrlGenerator(domain, name) {
  return `${name}.${domain}`;
}

console.log(fnUrlGenerator('com', 'facebook'));
console.log(fnUrlGenerator('com', 'google'));

console.log(fnUrlGenerator('ua', 'facebook'));
console.log(fnUrlGenerator('ua', 'google'));

// solution
function fnGetUrlByDomain(domain) {
  return function(name) {
    return `${name}.${domain}`;
  }
}

const fnDomainCom = fnGetUrlByDomain('com');

const domainComFacebook = fnDomainCom('facebook');
console.log(domainComFacebook);

const domainComGoogle = fnDomainCom('google');
console.log(domainComGoogle);

const fnDomainUa = fnGetUrlByDomain('ua');

const domainUaFacebook = fnDomainUa('facebook');
console.log(domainUaFacebook);

const domainUaGoogle = fnDomainUa('google');
console.log(domainUaGoogle);

