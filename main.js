//INPUT ELEMENTS
const body = document.getElementById("body");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const hasRead = document.getElementById("hasRead");



//MAIN PROGRAM
const bookLibrary = [];

function Book(title, author, hasRead) {
    this.title = title;
    this.author = author;
    this.hasRead = hasRead;
}



//adds book to the library
function addBookToLibrary(title, author, hasRead) {

    for (i = 0; i < 10; i++) {
        bookLibrary['obj' + i] = new Book(title, author, hasRead);
    }

}

document.body.onload = addElement;

function addBookCall() {
    addBookToLibrary(titleInput.value, authorInput.value, hasRead.value);

    alert(bookLibrary.obj1['title']);
}