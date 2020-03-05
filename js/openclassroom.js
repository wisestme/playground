// let myBook = {
// 	title: 'The Last Outcast',
// 	author: 'Chris Okotie',
// 	numberOfPages: 500,
// 	isAvailable: true
// };

let episode = {
	title: 'Magnificient 7',
	duration: 120,
	hasBeenWatched: false
};

console.log(episode.title);

class Book {
	constructor(title, author, pages) {
		this.title = title;
		this.author = author;
		this.pages = pages;
	}
}

let myBook = new Book('The Last Outcast', 'Chris Okotie', 500);
let mySecondBook = new Book('One Way Love', 'Tulian Tchividian', 400);

console.log(myBook, mySecondBook);

let firstGuest = {name: 'Vincent Gloria', vip: true};
let secondGuest = {name: 'Chijioke Nwagwu', vip: true};

let guests = [firstGuest, secondGuest];

console.log(guests);

class Song {
	constructor(artist, album, duration, title) {
		this.artist = artist;
		this.album = album;
		this.duration = duration;
		this.title = title;
	}
}

let livingHope = new Song('Phil Wickham', 'King Jesus', 240, 'Living Hope');
let wholeHeart = new Song('Brandon Heath', 'Jesus Cares', 260, 'Whole Heart');
console.log(livingHope.artist);