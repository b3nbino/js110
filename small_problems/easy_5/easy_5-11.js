function timeOfDay(numMinutes) {
  const MINS_PER_DAY = 1440;
  const MINS_PER_HOUR = 60;
  let hours;
  let mins;

  while (numMinutes > MINS_PER_DAY) {
    numMinutes -= MINS_PER_DAY;
  }
  while (numMinutes < -MINS_PER_DAY) {
    numMinutes += MINS_PER_DAY;
  }

  if (numMinutes >= 0) {
    hours = Math.floor(numMinutes / MINS_PER_HOUR)
      .toFixed()
      .padStart(2, 0);
    mins = (numMinutes % MINS_PER_HOUR).toFixed().padStart(2, 0);
  } else {
    hours = Math.floor((MINS_PER_DAY - Math.abs(numMinutes)) / MINS_PER_HOUR)
      .toFixed()
      .padStart(2, 0);
    mins = ((MINS_PER_DAY - Math.abs(numMinutes)) % MINS_PER_HOUR)
      .toFixed()
      .padStart(2, 0);
  }

  return hours + ":" + mins;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
