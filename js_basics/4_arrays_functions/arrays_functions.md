# Arrays & Functions

## Array methods

### concat

```javascript
const carsJapanese = [
  'Toyota Supra',
  'Toyota Chaser',
  'Honda Civic',
  'Honda S2000',
  'Nissan Skyline',
  'Nissan Fairlady',
  'Mitsubishi Lancer Evo',
  'Mitsubishi Eclipse',
  'Subaru Impreza WRX STI',
];
const carsGerman = ['Volkswagen', 'Audi', 'Porsche', 'Lamborghini', 'BMW'];

// concatenates arrays
// returns new array
const carsAll = carsJapanese.concat(carsGerman);
console.log(carsAll);
```

### flat

```javascript
// flattens arrays
// returns new array
const allCars1 = [carsJapanese, carsGerman].flat();
console.log(allCars1);
```

### spread

```javascript
const allCars2 = [...carsJapanese, ...carsGerman];
console.log(allCars2);
```

### push

```javascript
// adds element to the end of array
// returns the new length
const carsGermanWithMercedes = carsGerman.push('Mercedes'); // length
console.log(carsGerman);
console.log(carsGermanWithMercedes);
```

### pop

```javascript
// deletes element from the end of the array
// returns the deleted element
const carsGermanWithoutMercedes = carsGerman.pop(); // element
console.log(carsGerman);
console.log(carsGermanWithoutMercedes);
```

### shift

```javascript
// deletes element from the beginning of array
// returns element
const carsGermanWithoutVolkswagen = carsGerman.shift(); // element
console.log(carsGerman);
console.log(carsGermanWithoutVolkswagen);
```

### unshift

```javascript
// adds element to the beginning of array
// returns the new length
const carsGermanWithVolkswagen = carsGerman.unshift('Volkswagen'); // length
console.log(carsGerman);
console.log(carsGermanWithVolkswagen);
```

## Functions

```javascript
function (arguments) {
  // execute this code
  return result;
}
```

### Example

```javascript
const a = 21;
const b = 46;
const c = 33;
const d = 56;
const e = 1299;
const f = 98;

function fnSum(arg1, arg2) {
  return arg1 + arg2;
}

console.log(fnSum(a, b));
console.log(fnSum(c, d));
console.log(fnSum(e, f));
console.log(fnSum((fnSum(a, b), fnSum(c, d)), fnSum(e, f)));
```

### Arguments

```javascript
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
```

### Function Declaration

```javascript
fnSumDeclaration(1, 2); // bubbles

function fnSumDeclaration(arg1, arg2) {
  const sum = arg1 + arg2;
  console.log(sum);
  return sum;
}
```

### Function Expression

```javascript
const fnSumExpression = function (arg1, arg2) {
  const sum = arg1 + arg2;
  console.log(sum);
  return sum;
};
fnSumExpression(1, 2);
```

### Arrow Functions

```javascript
const function = (argument1, argument2) => value;

const fnSumArrow1 = (arg1, arg2) => arg1 + arg2;
fnSumArrow1(1, 2);

const fnSumArrow2 = (arg1, arg2) => {
  const sum = arg1 + arg2;
  console.log(sum);
  return sum;
}
fnSumArrow2(1, 2);
```

### return

```javascript
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
```

### Arrays filter

```javascript
// if function returns true, adds element to the array
const carsJapaneseToyota = carsJapanese.filter(function (car) {
  console.log(car);
  if (car.includes('Toyota')) {
    return true;
  }
  return false;
});
console.log(carsJapaneseToyota);

const carsJapaneseHonda = carsJapanese.filter((car) => car.includes('Honda'));
console.log(carsJapaneseHonda);
```

### Explicit function

```javascript
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
```

### Implicit function

```javascript
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
```

# Resources

1. https://learn.javascript.ru/function-basics
2. https://learn.javascript.ru/function-expressions
3. https://learn.javascript.ru/arrow-functions-basics

4. https://learn.javascript.ru/javascript-specials

5. https://learn.javascript.ru/coding-style
6. https://learn.javascript.ru/ninja-code
7. https://learn.javascript.ru/comments
