class BankAccount {
	constructor(owner, balance) {
		this.owner = owner;
		this.balance = balance;
	}
	showBalance() {
		console.log('Balance: ' + this.balance + ' EUR');
	}
	deposit(amount){
		this.balance += amount;
		this.showBalance();
	}
	withdraw(amount) {
		this.balance -= amount;
		this.showBalance();
	}
}

const newAccount = new BankAccount('Vincent Gloria', 500);

//console.log(newAccount.balance);
newAccount.showBalance();
newAccount.deposit(80);
newAccount.withdraw(30);