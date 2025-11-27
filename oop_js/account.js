class Account {
  constructor(openingBalance) {
    this.balance = openingBalance;
  }
  getBalance() {
    return `Opening balance is ${this.balance}`;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount < this.balance) {
      this.balance -= amount;
    } else {
      console.log("insufficient ammount");
    }
  }
}

const ratul = new Account(1000);
ratul.deposit(500);
ratul.withdraw(2000);
ratul.withdraw(500);
console.log(ratul.getBalance());
