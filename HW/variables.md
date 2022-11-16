# JavaScript

**JavaScript** _is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved._

---

## Varibles

### Number

The number type represents both integer and floating point numbers.

```javascript
let n = 123;
n = 12.345;
```

### String

The String object is used to represent and manipulate a sequence of characters.

```javascript
let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`; // can embed another "Hello"
```

### Boolean (logical type)

The boolean type has only two values: true and false.

```javascript
let isGreater = 4 > 1;
alert(isGreater); // true (the comparison result is "yes")
```

### The “null” value - nothing

The special null value does not belong to any of the types described above. It forms a separate type of its own which contains only the null value: let age = null;

```javascript
let age = null;
```

### The “undefined” value

The meaning of undefined is “value is not assigned”.

```javascript
let age;
alert(age); // shows "undefined"
```

---

## The typeof operator

The typeof operator returns the type of the operand. typeof undefined // "undefined"

```javascript
typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"
```

---

## Maths

- Addition `+`
- Subtraction `-`
- Multiplication `*`
- Division `/`
- Remainder `%`
- Exponentiation `**`

---

## Logical operators

There are four logical operators in JavaScript:

- `||` (OR)
- `&&` (AND)
- `!` (NOT)
- `??` (Nullish Coalescing)

---

## Summary

Seven primitive data types:

- number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
- string for strings. A string may have zero or more characters, there’s no separate single-character type.
- boolean for true/false.
- null for unknown values – a standalone type that has a single value null.
- undefined for unassigned values – a standalone type that has a single value undefined.
- symbol for unique identifiers.
- object for more complex data structures.
- The typeof operator allows us to see which type is stored in a variable.
  - Usually used as typeof x, but typeof(x) is also possible.
  - Returns a string with the name of the type, like "string".
  - For null returns "object" – this is an error in the language, it’s not actually an object.

### Sources:

[JavaScript.Info](https://javascript.info/types#the-undefined-value)
