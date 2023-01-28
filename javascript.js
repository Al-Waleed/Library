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


const container = document.querySelector(".container")

function displayBook(){
    addBookToLibrary();
    const div = document.createElement("div")
    div.classList.add("book")
    const bookTitle = document.createElement("h3")
    const bookAuthor = document.createElement("h3")
    const bookPages = document.createElement("h3")
    const bookIsRead = document.createElement("h3")
    myLibrary.forEach(book => {
        bookTitle.textContent = book.title
        bookAuthor.textContent = book.author
        bookPages.textContent = book.pages
        bookIsRead.textContent = book.isRead

        div.appendChild(bookTitle)
        div.appendChild(bookAuthor)
        div.appendChild(bookPages)
        div.appendChild(bookIsRead)
        container.appendChild(div)
    });
}

const addBook = document.querySelector(".add-book")
addBook.addEventListener("click", displayBook)