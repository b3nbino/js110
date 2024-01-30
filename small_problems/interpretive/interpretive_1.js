// function lightsOn(lightAmount) {
//   if (lightAmount < 1) return [];

//   let lights = [];
//   lights.length = lightAmount;
//   lights.fill(1);
//   lights[0] = 0;

//   for (let i = 0; i < lightAmount; i++) {
//     let lightDivisor = i + 1;
//     for (let j = lightDivisor; j < lightAmount; j += lightDivisor) {
//       if (lights[j] === 0) {
//         lights[j] = 1;
//       } else {
//         lights[j] = 0;
//       }
//     }
//   }

//   let activeLights = [];
//   for (let index = 0; index < lights.length; index++) {
//     if (lights[index] === 1) {
//       activeLights.push(index);
//     }
//   }

//   console.log(activeLights);
// }

// lightsOn(5); // [1, 4]
// // Detailed result of each round for `5` lights
// // Round 1: all lights are on
// // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// lightsOn(100); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
