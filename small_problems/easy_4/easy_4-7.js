function wordSizes(string) {
  let resultObj = {};
  let stringArr = string.replaceAll(/[^a-z0-9\s]/gi, "").split(" ");

  if (string.length === 0) {
    return resultObj;
  }

  stringArr.forEach((word) => {
    if (resultObj.hasOwnProperty(word.length)) {
      resultObj[word.length] += 1;
    } else {
      resultObj[word.length] = 1;
    }
  });

  console.log(resultObj);
  return resultObj;
}

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 2 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 3 }
wordSizes("What's up doc?"); // { "2": 1, "3": 1, "5": 1 }
wordSizes(""); // {}
