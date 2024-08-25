//ELEMENTS
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const hasRead = document.getElementById("hasRead");

const addBookButton = document.getElementById("addBookButton");
const booksContainer = document.getElementById("booksContainer");

const deleteButton = document.getElementById("deleteButton");



//MAIN PROGRAM
const bookLibrary = [];

function Book(title, author, hasRead) {
    this.title = title;
    this.author = author;
    this.hasRead = hasRead;
};

//adds book to the bookLibrary[]
function addBookToLibrary(title, author, hasRead) {
    const newBook = new Book(title, author, hasRead);
    bookLibrary.push(newBook);
};



//ADDS BOOK TO LIBRARY
addBookButton.addEventListener('click', function(event) {

    //IF INPUTS ARE NOT EMPTY
    if (!titleInput.value == '' && !authorInput.value == '') {
        addBookToLibrary(titleInput.value, authorInput.value, hasRead.value);

        const newBook = document.createElement('div');
        newBook.className = "bookCard";

        const bookDetailsDiv = document.createElement('div');
        bookDetailsDiv.className = "bookDetailsDiv";

        const cardButtonsDiv = document.createElement('div');
        cardButtonsDiv.className = "bookDetailsDiv cardButtonsDiv";

        //TITLE
        const titlePara = document.createElement('p');
        titlePara.textContent = titleInput.value;
        bookDetailsDiv.append(titlePara);

        //AUTHOR
        const authorPara = document.createElement('p');
        authorPara.textContent = authorInput.value;
        bookDetailsDiv.append(authorPara);

        //hasREAD
        const hasReadButton = document.createElement("button");
        hasReadButton.textContent = hasRead.value;
        hasReadButton.className = "interectButton";
        cardButtonsDiv.append(hasReadButton);

        //DELETE
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "interectButton deleteButton";
        cardButtonsDiv.append(deleteButton);

        newBook.appendChild(bookDetailsDiv);
        newBook.appendChild(cardButtonsDiv);
        booksContainer.appendChild(newBook);
        event.preventDefault();
        titleInput.value = '';
        authorInput.value = '';

    } else {

    }
});