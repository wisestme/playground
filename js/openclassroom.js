let seatsLeft = 10;
let unboardedPassengers = 8;
let boardedPassengenr = 0;

while(seatsLeft > 0 && unboardedPassengers > 0) {
	boardedPassengenr++;
	unboardedPassengers--;
	seatsLeft--;
}
console.log(boardedPassengenr +' passengers successfully boarded')