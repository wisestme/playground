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

