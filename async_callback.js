// async flow control problem with call back

function takeOrder(customer, callback) {
  console.log(`take order from ${customer}`);
  callback(customer);
}
// console.log(`take order from customer 1`);

function processOrder(customer, callback) {
  console.log(`processing Order from ${customer}`);

  //   blocking 3second delay
  setTimeout(() => {
    console.log(`wait 3 sec Cooking Done`);
    console.log(`processesed order from ${customer}`);
    callback(customer);
  }, 3000);
}

function completeOrder(customer) {
  console.log(`complete order from ${customer}`);
}

// callback design pattern
takeOrder("customer 1", (customer) => {
  processOrder(customer, () => {
    completeOrder(customer);
  });
});

console.log(`checking when i am called`);
