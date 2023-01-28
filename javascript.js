let myLibrary = [];

function Book() {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addBookToLibrary(){
    const newBook = Object.create(Book)
    Book.title = prompt("Enter the book's title");
    Book.author = prompt("Enter author's name");
    Book.pages = prompt("Enter the number of pages");
    Book.isRead = prompt("Did you read the book");

    
    myLibrary.push(newBook);
}

addBookToLibrary();
let display = [];

function displayBook(){
    myLibrary.forEach(book => {
        display = []
        let bookTitle = book.title
        let bookAuthor = book.author
        let bookPages = book.pages
        let bookIsRead = book.isRead
        display.push(bookTitle)
        display.push(bookAuthor)
        display.push(bookPages)
        display.push(bookIsRead)
    });
}
 displayBook();

//  console.table(display)