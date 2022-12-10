const objPersonLeonid = {
  name: 'Leonid',
  age: 21,
  dreams: ['Front-end dev at Apple', 'Lancer Evo'],
};
console.log(objPersonLeonid);

// enumerable - enable in for in loop
for (let key in objPersonLeonid) {
  console.log(key);
}

// writable - enable writing to the property
objPersonLeonid.name = 'new name';
console.log(objPersonLeonid);

// configurable - delete from object
delete objPersonLeonid.dreams;
console.log(objPersonLeonid);



const objPersonLeonid1 = Object.create({}, {
  name: {
    value: 'Leonid',
    enumerable: true,
    writable: true,
  },
  age: {
    value: 21,
    enumerable: true,
    writable: false,
  },
  dreams: {
    value: ['Front-end dev at Apple', 'Lancer Evo'],
    configurable: true,
  },
});
console.log(objPersonLeonid1);

// enumerable - enable in for in loop
for (let key in objPersonLeonid1) {
  console.log(key);
}

// writable - enable writing to the property
objPersonLeonid1.name = 'new name';
console.log(objPersonLeonid1);

objPersonLeonid1.age = 39;
console.log(objPersonLeonid1);

// configurable - delete from object
delete objPersonLeonid1.dreams;
console.log(objPersonLeonid1);



console.log('\n\n\n');

const arrCarsAll = [
  {
    name: 'Toyota',
    model: 'Supra',
    year: 2000,
    motor: ['1jz-gte', '2jz-gte']
  },
  {
    name: 'Toyota',
    model: 'Cresta',
    year: 1995,
    motor: ['1jz-gte']
  },
  {
    name: 'Toyota',
    model: 'Chaser',
    year: 1998,
    motor: ['1jz-gte']
  },
  {
    name: 'Nissan',
    model: 'GTR',
    year: 1998,
    motor: ['RB26Dett', 'RB30Dett']
  },
  {
    name: 'Nissan',
    model: '180SX',
    year: 1998,
    motor: ['CA18Dett']
  },
  {
    name: 'Nissan',
    model: 'Silvia',
    year: 2001,
    motor: ['SR20Dett']
  },
  {
    name: 'Nissan',
    model: 'Fairlady',
    year: 1993,
    motor: ['VQ37VHR']
  }
];

const arrCarsNameToyota = arrCarsAll.filter((objCar) => objCar.name.includes('Toyota'));
console.log(arrCarsNameToyota);

const arrCarsMotorJZ = arrCarsAll.filter((objCar) => objCar.motor.filter((strMotor) => strMotor.includes('jz')).length);
console.log(arrCarsMotorJZ);



console.log('\n\n\n');

const objPersonGrigoriy = {
  name: 'Grigoriy',
  age: 21,
  dreams: ['Subaru Impreza WRX STI', 'Green Card'],

  // getter
  getDreams() {
    console.log(this.dreams);
    return this.dreams;
  },

  get(key) {
    console.log(this[key]);
    return this[key];
  },

  // setter
  setCar(car) {
    this.car = car
  },

  set(key, value) {
    this[key] = value
  }
};

console.log(objPersonGrigoriy);
console.log(objPersonGrigoriy.name);

// getter
console.log('\n');
console.log('getter');

console.log(objPersonGrigoriy.getDreams);
console.log(objPersonGrigoriy.getDreams());

const arrPerson1Dreams = objPersonGrigoriy.getDreams();
console.log(arrPerson1Dreams);

const numPerson1Age = objPersonGrigoriy.get('age');
console.log(numPerson1Age);

// setter
console.log('\n');
console.log('setter');

objPersonGrigoriy.setCar('SantaFe');
console.log(objPersonGrigoriy);

objPersonGrigoriy.set('girlfriend', 'Alina');
console.log(objPersonGrigoriy);




// prototype
console.log('\n\n\n');
console.log('window');

console.log(window);
console.log(Array);

function fnFilter(func) {
  const array = this;
  const arrResult = [];

  for (let i = 0; i < array.length; i += 1) {
    if (func(array[i])) {
      arrResult.push(array[i]);
    }
  }

  return arrResult;
}

// set to prototype
Array.prototype.fnFilter = fnFilter;

const arrCars = ['Audi A6', 'Audi Q8', 'Porsche 911', 'Porsche GTS'];

const arrCarsAudi = arrCars.fnFilter((car) => car.includes('Audi'));
console.log(arrCarsAudi);

const arrCarsPorsche = arrCars.fnFilter((car) => car.includes('Porsche'));
console.log(arrCarsPorsche);

const arrCarsNameToyota1 = arrCarsAll.fnFilter((objCar) => objCar.name.includes('Toyota'));
console.log(arrCarsNameToyota1);

const arrCarsMotorJZ1 = arrCarsAll.fnFilter((objCar) => objCar.motor.fnFilter((strMotor) => strMotor.includes('jz')).length);
console.log(arrCarsMotorJZ1);

// try this method in object
// objPersonGrigoriy.fnFilter();




// new Object
console.log('\n\n\n');
console.log('new Object(object)');

const objToyotaSupra = new Object ({
  name: 'Toyota',
  model: 'Supra',
  year: 2000,
  motor: ['1jz-gte', '2jz-gte']
});
console.log(objToyotaSupra);

// Object.create(baseObject)
// create object based on the prototype of another object
console.log('\n');
console.log('Object.create(baseObject)');

const objToyotaChaser = Object.create(objToyotaSupra);
objToyotaChaser.name = 'Toyota';
objToyotaChaser.model = 'Chaser';
objToyotaChaser.year = 1990;
objToyotaChaser.motor = ['2jz-gte'];

console.log(objToyotaChaser);

// Object.assign(object1, object2)
// create one object from two objects
console.log('\n');
console.log('Object.assign(object1, object2)');

const objSupraChaser = Object.assign(objToyotaSupra, objToyotaChaser);
console.log(objToyotaChaser);

const objAssign1 = {
  a: 'a',
  b: 'b',
};
const objAssign2 = {
  c: 'c',
  d: 'd',
};

const objAssign3 = Object.assign(objAssign1, objAssign2);
console.log(objAssign3);
