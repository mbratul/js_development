class Account {
  constructor(openingBalance) {
    this.balance = openingBalance;
    this.minimumBalance = 500;
  }
  getBalance() {
    return `Opening balance is ${this.balance}`;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      if (amount - this.balance < this.minimumBalance) {
        console.log("you can not withdraw this amount");
      } else {
        this.balance -= amount;
      }
    }
  }
}

const ratul = new Account(1000);
ratul.deposit(5000);
// ratul.withdraw(2000);
ratul.withdraw(20000);
console.log(ratul.getBalance());
