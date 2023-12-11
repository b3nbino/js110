function swapName(string) {
  let names = string.split(" ");
  console.log(names[1] + ", " + names[0]);
  return names[1] + ", " + names[0];
}

swapName("Joe Roberts"); // "Roberts, Joe"
