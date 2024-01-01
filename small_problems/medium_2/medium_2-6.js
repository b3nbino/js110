function sumSquareDifference(num) {
  let sum1 = 0;
  let sum2 = 0;

  //calculates sum1 (x + y)^2 and sum2 (x^2 + y^2)
  for (let i = 1; i <= num; i++) {
    sum1 += i;
    sum2 += Math.pow(i, 2);
  }
  sum1 *= sum1;

  console.log(sum1 - sum2);
  return sum1 - sum2;
}

sumSquareDifference(3); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10); // 2640
sumSquareDifference(1); // 0
sumSquareDifference(100); // 25164150
