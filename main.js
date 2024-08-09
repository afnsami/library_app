//ELEMENTS
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const hasRead = document.getElementById("hasRead");
const addBookButton = document.getElementById("addBookButton");
const booksContainer = document.getElementById("booksContainer");



//MAIN PROGRAM
const bookLibrary = [];

function Book(title, author, hasRead) {
    this.title = title;
    this.author = author;
    this.hasRead = hasRead;
}



//adds book to the library
function addBookToLibrary(title, author, hasRead) {
    const obj = new Book(title, author, hasRead);
    obj.id = "first";
    bookLibrary.push(obj);
}


//ADDS BOOK TO LIBRARY
addBookButton.addEventListener('click', function(event) {
    addBookToLibrary(titleInput.value, authorInput.value, hasRead.value);

    const newBook = document.createElement('div');
    newBook.className = "bookCard";
    
    //TITLE
    const titlePara = document.createElement('p');
    titlePara.textContent = titleInput.value;
    newBook.append(titlePara);
    //AUTHOR
    const authorPara = document.createElement('p');
    authorPara.textContent = authorInput.value;
    newBook.append(authorPara);
    //hasREAD
    const hasReadButton = document.createElement("button");
    hasReadButton.textContent = hasRead.value;
    hasReadButton.className = "interectButton";
    newBook.append(hasReadButton);
    //DELETE
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.id = "deleteButton";
    deleteButton.className = "interectButton";
    newBook.append(deleteButton);



    booksContainer.appendChild(newBook);
    event.preventDefault();
    titleInput.value = '';
    authorInput.value = '';
});