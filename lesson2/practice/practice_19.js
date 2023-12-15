let munsters = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

let finalObj = {};

for (let person in munsters) {
  finalObj[person] = Object.freeze({
    age: munsters[person].age,
    gender: munsters[person].gender,
  });
}

console.log(...Object.values(Object.values(finalObj)));
finalObj.herman.age = 12093809128309;
console.log(...Object.values(Object.values(finalObj)));
