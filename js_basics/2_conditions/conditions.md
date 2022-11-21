# Conditions

## Problem

Code is used to write logic. Logic may be complex, and there may be different scenarios based on the user input etc.

## Solution

To handle the different scenarios use if, else if, else, switch operators.

## if, else if, else

```javascript
if (condition) {
  // execute this code in this case
} else if (condition) {
  // execute this code in this case
} else {
  // execute this code in all of the others cases
}
```

### Example

```javascript
// Light switcher
let lightStatus;

if (lightStatus) {
  console.log('On');
} else if (lightStatus === false) {
  console.log('Off');
} else {
  console.log('No light');
}
```

## Switch

```javascript
switch (variable) {
  case 'specific_variable_value_1':
    // execute this code in this case
    break;
  case 'specific_variable_value_2':
    // execute this code in this case
    break;
  default: // execute this code in all of the others cases
}
```

### Example

```javascript
// Automatic gear box
const gear = 'D';

switch (gear) {
  case 'P':
    console.log('Parking');
    break;
  case 'R':
    console.log('Reverse');
    break;
  case 'N':
    console.log('Neutral');
    break;
  case 'D':
    console.log('Drive');
    break;
  default:
    'P';
}
```

### Logical operators

1. || (or)
2. && (and)
3. ! (not)

# Resources

1. https://learn.javascript.ru/ifelse
2. https://learn.javascript.ru/logical-operators
3. https://learn.javascript.ru/nullish-coalescing-operator
4. https://learn.javascript.ru/switch
