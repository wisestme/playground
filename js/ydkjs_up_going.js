let phonePrice = [80, 200, 220, 90, 100];
let accessoryPrice = [50, 120, 125, 55, 60];
let wallet = prompt('How much do you have in your wallet?');
let balance = [];
let purchase = [];
const TAX_RATE = 0.08;

for(let i = 0; i < phonePrice.length; i++) {
	let total = phonePrice[i] + accessoryPrice[i];
	if(phonePrice[i] < wallet) {
		wallet = wallet - phonePrice[i];
		if(accessoryPrice[i] < wallet) {
			wallet = wallet - accessoryPrice[i];
		}
		purchase.push(total);
		balance.push(wallet);
	}
	//console.log(balance);
}

function calcTotalPurchase () {
	
	let total = 0;
	for(let i = 0; i < purchase.length; i++) {
		
		total += purchase[i];
	}
	return total;
}

let purchaseAmount = calcTotalPurchase();
console.log(purchaseAmount);

let paid = purchaseAmount + (purchaseAmount * TAX_RATE);

console.log("$" + paid);
console.log(balance);
console.log(purchase);
