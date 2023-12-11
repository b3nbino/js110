const MINS_PER_DAY = 1440;
const MINS_PER_HOUR = 60;

function afterMidnight(timeOfDay) {
  let hours = parseInt(timeOfDay);
  let mins = parseInt(timeOfDay.slice(3));

  if (hours === 0 && mins === 0) return 0;
  if (hours === 24 && mins === 0) return 0;

  return hours * MINS_PER_HOUR + mins;
}

function beforeMidnight(timeOfDay) {
  let hours = parseInt(timeOfDay);
  let mins = parseInt(timeOfDay.slice(3));

  if (hours === 0 && mins === 0) return 0;
  if (hours === 24 && mins === 0) return 0;

  return MINS_PER_DAY - (hours * MINS_PER_HOUR + mins);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
