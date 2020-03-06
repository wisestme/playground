let numberOfGuests = 5;
let ticketsRemaining = false;
let artistName = 'Phil Wickham';

let artistProfile = {
	numberOfGuests: numberOfGuests,
	ticketsRemaining: ticketsRemaining,
	artistName: artistName
};

let artistArray = [artistProfile];

artistProfile.ticketsRemaining = true;
console.log(artistProfile);
console.log(artistArray);