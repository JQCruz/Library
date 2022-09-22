

const newBook = function (title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
};

newBook.prototype.findInfo = function() {
    console.log(`${this.title} by ${this.author} is ${this.pages} long, ${this.readStatus}`)

};

const hobbit = new newBook("The Hobbit", "some guy", "A lot", "Haven't read");

hobbit.title = "The Hobbit";

let myLibrary = [hobbit];

// Add card button that add's a new fixed card to the screen
// Background screen should be out of focus when add book card is present
// figure out how to make a toggle switch for the card
