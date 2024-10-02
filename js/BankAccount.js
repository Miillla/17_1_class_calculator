class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
}

BankAccount.prototype.getBalance = function () {
  return this.balance;
};
//   deposit(500)
BankAccount.prototype.deposit = function (a) {
  this.balance += a;
  return this.balance;
};
BankAccount.prototype.withdraw = function (b) {
  this.balance -= b;
  return this.balance;
};
