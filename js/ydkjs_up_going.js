
const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount (amt) {
	amt = amt + (amt * TAX_RATE);
	return amt
}

let cost = calculateFinalPurchaseAmount(200);
console.log(cost);



