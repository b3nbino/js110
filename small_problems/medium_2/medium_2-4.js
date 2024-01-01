function fridayThe13ths(year) {
  let thirteens = [];

  for (let month = 0; month < 12; month++) {
    thirteens.push(new Date(year, month, 13));
  }

  console.log(thirteens.filter((day) => day.getDay() === 5).length);
  return thirteens.filter((day) => day.getDay() === 5).length;
}

fridayThe13ths(1986); // 1
fridayThe13ths(2015); // 3
fridayThe13ths(2017); // 2
