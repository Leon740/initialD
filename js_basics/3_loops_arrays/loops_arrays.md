# Loops & Arrays

## Array

Data type which is a collection of the elements with the same type.

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
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

## Loops

Loops are used to go through each array item.

### for

Use 'for' loop in most of the cases.

```javascript
for (start, condition; iteration) {
  // execute this code for each item
}

for (let i = 0; i < carsJapanese.length; i++) {
  console.log(`i = ${i}`);
  console.log(carsJapanese[i]);
}
```

### while

```javascript
let i = 0;
while (i < carsJapanese.length) {
  console.log(`i = ${i}`);
  console.log(carsJapanese[i]);
  i++;
}
```

### do while

```javascript
let k = 0;
do {
  console.log(`i = ${k}`);
  console.log(carsJapanese[k]);
  k++;
} while (k < carsJapanese.length);
```

# Resources

1. https://learn.javascript.ru/while-for
