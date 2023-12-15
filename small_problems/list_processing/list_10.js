function transactionsFor(idNum, objArray) {
  let finalArray = [];

  objArray.forEach((obj) => {
    if (obj["id"] === idNum) {
      finalArray.push(obj);
    }
  });

  return finalArray;
}

function isItemAvailable(idNum, objArray) {
  let idArray = transactionsFor(idNum, objArray);
  let totalQuantity = 0;

  idArray.forEach((obj) => {
    if (obj.movement === "in") {
      totalQuantity += obj.quantity;
    } else {
      totalQuantity -= obj.quantity;
    }
  });

  console.log(totalQuantity > 0);
  return totalQuantity > 0;
}

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

isItemAvailable(101, transactions); // false
isItemAvailable(103, transactions); // false
isItemAvailable(105, transactions); // true
