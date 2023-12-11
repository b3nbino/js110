function dms(angle) {
  let degrees = parseInt(angle);
  let minsAndSecs = 60 * (angle - degrees);
  let minutes = minsAndSecs.toFixed().padStart(2, 0);
  let seconds = (minsAndSecs - parseInt(minsAndSecs)).toFixed().padStart(2, 0);

  let finalString = `${degrees}˚${minutes}'${seconds}"`;
  console.log(finalString);
  return finalString;
}

dms(30); // 30°00'00"
dms(76.73); // 76°43'48"
dms(254.6); // 254°35'59"
dms(93.034773); // 93°02'05"
dms(0); // 0°00'00"
dms(360); // 360°00'00" or 0°00'00"
