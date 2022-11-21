// === Example
// Light switcher
let lightStatus;

if (lightStatus) {
  console.log('On');
} else if (lightStatus === false) {
  console.log('Off');
} else {
  console.log('No light');
}

// === Example
// Automatic gear box
const gear = 'D';

switch (gear) {
  case 'P': console.log('Parking'); break;
  case 'R': console.log('Reverse'); break;
  case 'N': console.log('Neutral'); break;
  case 'D': console.log('Drive'); break;
  default: 'P';
}
