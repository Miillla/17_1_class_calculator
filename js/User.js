const user = new BankAccount(1000);

console.log(user.getBalance()); // 1000

user.deposit(500);

console.log(user.getBalance()); // 1500

user.withdraw(200);

console.log(user.getBalance()); // 1300
