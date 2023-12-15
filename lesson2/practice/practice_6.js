let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

let allPersons = Object.entries(munsters);
allPersons.forEach((personObj, index) => {
  console.log(
    `${personObj[0]} is a ${personObj[1].age} year old ${personObj[1].gender}`
  );
});
