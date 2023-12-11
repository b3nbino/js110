function reverseWords(string) {
  let array = string.split(" ");
  let final = [];
  array.forEach((element) => {
    if (element.length > 4) {
      final.push(element.split("").reverse().join(""));
    } else {
      final.push(element);
    }
  });

  console.log(final);
  return final;
}

reverseWords("Professional"); // "lanoisseforP"
reverseWords("Walk around the block"); // "Walk dnuora the kcolb"
reverseWords("Launch School"); // "hcnuaL loohcS"
