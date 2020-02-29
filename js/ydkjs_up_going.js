let phonePrice = [80, 200, 220, 90, 100];
let accessoryPrice = [50, 120, 125, 55, 60];
let wallet = 500;
let balance = [];
let purchase = [];

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
console.log(balance);
console.log(purchase);
