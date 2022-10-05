

const newBook = function (title, author, pages, readStatus, publishDate) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publishDate = publishDate;
    this.readStatus = readStatus;
};

newBook.prototype.findInfo = function() {
    console.log(`${this.title} by ${this.author} is ${this.pages} long, ${this.readStatus}`)

};

let numberOfBooks = 0;

let bookArray = [];

const hobbit = new newBook("The Hobbit", "some guy", "A lot", "Haven't read");

hobbit.title = "The Hobbit";

let myLibrary = [hobbit];



const form = document.getElementById("bookForm");
const addButton = document.querySelector(".addBook");
const overlay = document.querySelector(".overlay")
const submitButton = document.querySelector("#submitButton")

const changeActiveButton = function(){
    overlay.classList.add("active");
    form.classList.add("active");
}

const overlayClickOut = function(){
    overlay.classList.toggle("active");
    form.classList.toggle("active");
}

const testForm = function(){
    alert("whoa");
}

const grabBookInformation = function(){
    numberOfBooks += 1;
    let newTitle = document.querySelector("#title").value;
    let newAuthor = document.querySelector("#author").value;
    let newPages = document.querySelector("#pages").value;
    let newPublishDate = document.querySelector("#publishDate").value;
    let bookFromForm = new newBook(newTitle, newAuthor, newPages, "no", newPublishDate);
    bookArray.push(bookFromForm);
}

const insertNewCard = function(){
    let currentBook = bookArray[numberOfBooks - 1];
    const contentContainer = document.querySelector("#contentContainer");

    let newCard = document.createElement("div");
    newCard.setAttribute("data-index", `${numberOfBooks-1}`)


    let cardTitle = document.createElement("p");
    let cardAuthor = document.createElement("p");
    let cardPages = document.createElement("p");
    let cardPublish = document.createElement("p");

    cardTitle.classList.add("bookContent");
    cardTitle.id = "bookTitle";
    cardTitle.innerText = currentBook.title;

    cardAuthor.classList.add("bookContent");
    cardAuthor.id = "Author";
    cardAuthor.innerText = currentBook.author;

    cardPages.classList.add("bookContent");
    cardPages.id = "numberOfPages";
    cardPages.innerText = currentBook.pages;

    cardPublish.classList.add("bookContent");
    cardPublish.id = "published"
    cardPublish.innerText = currentBook.publishDate;

    newCard.appendChild(cardTitle);
    newCard.appendChild(cardAuthor);
    newCard.appendChild(cardPages);
    newCard.appendChild(cardPublish);
    newCard.classList.add("bookCard");
    contentContainer.insertBefore(newCard, addButton);
}

const resetForm = function(){
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#publishDate").value = "";
}

// Add card button that add's a new fixed card to the screen
// Background screen should be out of focus when add book card is present
// figure out how to make a toggle switch for the card


//What do I need to study
// Creating overlays for forms
// Form Validation
// Using input from forms for a new grid cell

//Copy card, replace text in new card with new book information

function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

addButton.addEventListener("click", changeActiveButton);
overlay.addEventListener("click", overlayClickOut);
form.addEventListener("submit", testForm)
form.addEventListener("submit", grabBookInformation);
form.addEventListener("submit", insertNewCard);
form.addEventListener("submit", overlayClickOut);
form.addEventListener("submit", resetForm);
