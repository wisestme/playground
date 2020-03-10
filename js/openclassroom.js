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
		if(this.balance > amount) {
			this.balance -= amount;
			this.showBalance();
		} else {
			console.log('not enough balance');
		}
	}
}

const newAccount = new BankAccount('Vincent Gloria', 500);

//console.log(newAccount.balance);
newAccount.showBalance();
newAccount.deposit(80);
newAccount.withdraw(800);

class Show {
  constructor(title, numberOfSeasons) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.ratings = [];
    this.averageRating = 0;
  }
  averageRatingCalc(){
    for(let rate of this.ratings) {
      //rate += rate;
      rate /= this.ratings.length;
      this.averageRating += rate;
      console.log(this.averageRating);
    }
  }
  addRating(rating) {
    this.ratings.push(rating);
    this.averageRatingCalc();
  }
}
 const firstShow = new Show('Last Outcast', 7)
 
 firstShow.addRating(4);
 console.log(firstShow);