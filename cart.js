let item = [
  {
    id: 1,
    name: "book",
    qty: 10,
    price: "100",
  },
  {
    id: 2,
    name: "phone",
    qty: 1,
    price: "30000",
  },
  {
    id: 3,
    name: "hat",
    qty: 5,
    price: "300",
  },
];

let total = item.reduce((prev, curr) => {
  return prev + curr.qty * curr.price;
},0);

console.log(`Your total is $ ${total}`);

/*
let total = item.reduce((prev, curr) => {
  return prev + curr.qty * curr.price;
}, 0);

console.log(total);
*/
