const carsJapanese = ['Toyota Supra', 'Toyota Chaser', 'Honda Civic', 'Honda S2000', 'Nissan Skyline', 'Nissan Fairlady', 'Mitsubishi Lancer Evo', 'Mitsubishi Eclipse', 'Subaru Impreza WRX STI'];

for (let i = 0; i < carsJapanese.length; i++) {
  console.log(`i = ${i}`);
  console.log(carsJapanese[i]);
}

let i = 0;
while (i < carsJapanese.length) {
  console.log(`i = ${i}`);
  console.log(carsJapanese[i]);
  i++;
}

let k = 0;
do {
  console.log(`i = ${k}`);
  console.log(carsJapanese[k]);
  k++;
} while (k < carsJapanese.length)