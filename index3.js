let users = [
  {
    index: 0,
    isActive: true,
    balance: "$2,226.60",
    name: "Eugenia Sawyer",
    gender: "female",
    phone: "+1 (840) 583-3207",
    address: "949 John Street, Rose, Puerto Rico, 1857",
  },
  {
    index: 1,
    isActive: true,
    balance: "$2,613.77",
    name: "Pauline Gallegos",
    gender: "female",
    phone: "+1 (985) 593-3328",
    address: "328 Greenpoint Avenue, Torboy, North Dakota, 6857",
  },
  {
    index: 2,
    isActive: false,
    balance: "$3,976.41",
    name: "Middleton Chaney",
    gender: "male",
    phone: "+1 (995) 591-2478",
    address: "807 Fleet Walk, Brutus, Arkansas, 9783",
  },
  {
    index: 3,
    isActive: true,
    balance: "$1,934.58",
    name: "Burns Poole",
    gender: "male",
    phone: "+1 (885) 559-3422",
    address: "730 Seba Avenue, Osage, Alabama, 6290",
  },
  {
    index: 4,
    isActive: true,
    balance: "$3,261.65",
    name: "Mcfadden Horne",
    gender: "male",
    phone: "+1 (942) 565-3988",
    address: "120 Scholes Street, Kirk, Michigan, 1018",
  },
  {
    index: 5,
    isActive: false,
    balance: "$1,790.56",
    name: "Suzette Lewis",
    gender: "female",
    phone: "+1 (837) 586-3283",
    address: "314 Dunne Place, Bawcomville, Guam, 9053",
  },
];

let consta = "$2,000.00";
let phones = [];
function check() {
  if (users[0].balance > consta) {
    phones.push(users[0].phone);
    // console.log(users[0].phone);
  }
  if (users[1].balance > consta) {
    phones.push(users[1].phone);
    //console.log(users[1].phone);
  }
  if (users[2].balance > consta) {
    phones.push(users[2].phone);
    //console.log(users[2].phone);
  }
  if (users[3].balance > consta) {
    phones.push(users[3].phone);
    // console.log(users[3].phone);
  }
  if (users[4].balance > consta) {
    phones.push(users[4].phone);
    // console.log(users[4].phone);
  }
  if (users[5].balance > consta) {
    phones.push(users[5].phone);
    // console.log(users[5].phone);
  }
}
check();
console.log("phones: " + phones);

users[0].balance = users[0].balance.replace(/[$,]/g, "");
users[1].balance = users[1].balance.replace(/[$,]/g, "");
users[2].balance = users[2].balance.replace(/[$,]/g, "");
users[3].balance = users[3].balance.replace(/[$,]/g, "");
users[4].balance = users[4].balance.replace(/[$,]/g, "");
users[5].balance = users[5].balance.replace(/[$,]/g, "");

users[0].balance = Number(users[0].balance);
users[1].balance = Number(users[1].balance);
users[2].balance = Number(users[2].balance);
users[3].balance = Number(users[3].balance);
users[4].balance = Number(users[4].balance);
users[5].balance = Number(users[5].balance);

let sum = 0;
sum =
  users[0].balance +
  users[1].balance +
  users[2].balance +
  users[3].balance +
  users[4].balance +
  users[5].balance;

console.log("suma of balance: $" + sum);
