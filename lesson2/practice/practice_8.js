let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"],
};

Object.values(obj).forEach((array) => {
  array.forEach((word) => {
    let letters = word.split("");
    letters.forEach((letter) => {
      if ("aeiouAEIOU".includes(letter)) console.log(letter);
    });
  });
});
