var bank_balance = 302.13;
var amount = 99.99;
const ACCESSORY_PRICE = 9.99;

amount *= 4;
if (amount < bank_balance) {
	console.log('I want to buy phone');
	amount += ACCESSORY_PRICE;
} else {
	console.log('I do not want the accessory for now');
}
