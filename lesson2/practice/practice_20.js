function createUTF() {
  let chars = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let utf = [];

  for (let index = 0; index < 32; index++) {
    let rand = Math.floor(Math.random() * 33);
    utf.push(chars[rand]);
  }

  return `${utf.slice(0, 8).join("")}-${utf.slice(8, 12).join("")}-${utf
    .slice(12, 16)
    .join("")}-${utf.slice(16, 20).join("")}-${utf.slice(12).join("")}`;
}

console.log(createUTF());
console.log(createUTF());
console.log(createUTF());
