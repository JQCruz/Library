

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

