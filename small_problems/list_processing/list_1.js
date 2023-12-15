let i = 0;

function sum(num) {
  numString = num.toString().split("");
  console.log(numString.reduce((acc, curr) => Number(acc) + Number(curr)));
  return numString.reduce((acc, curr) => acc + curr);
}

sum(23); // 5
sum(496); // 19
sum(123456789); // 45
