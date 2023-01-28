let myLibrary = [];

function Book() {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addBookToLibrary(){
    const newBook = Object.create(Book)

    Book.title = document.getElementById("title").value;
    Book.author = document.getElementById("author").value;
    Book.pages = document.getElementById("pages").value;

    document.getElementById("read-yes").checked ? Book.isRead = "Yes" : Book.isRead = "No"//to check which radio button is selected

    myLibrary.push(newBook);
}


const container = document.querySelector(".container")

const displayBook= (e) => {
    e.preventDefault();
    addBookToLibrary();
    const div = document.createElement("div")
    div.classList.add("book")
    const bookTitle = document.createElement("h3")
    const bookAuthor = document.createElement("h3")
    const bookPages = document.createElement("h3")
    const bookIsRead = document.createElement("h3")

    const removeButton = document.createElement("button")
    removeButton.classList.add("button", "remove-book")

    myLibrary.forEach(book => {
        bookTitle.textContent = book.title
        bookAuthor.textContent = book.author
        bookPages.textContent = book.pages
        bookIsRead.textContent = book.isRead
        removeButton.textContent = "Remove from library"

        div.appendChild(bookTitle)
        div.appendChild(bookAuthor)
        div.appendChild(bookPages)
        div.appendChild(bookIsRead)
        div.appendChild(removeButton)
        container.appendChild(div)
        document.forms[0].reset()
        let removeBook = document.querySelectorAll(".remove-book")
        removeBook.forEach((btn) => {
        btn.addEventListener("click", () => btn.parentElement.remove())
})
    });
}

// const addBook = document.querySelector(".add-book")
// addBook.addEventListener("click", displayBook)

//let removeBook = document.querySelectorAll(".remove-book")
//removeBook.forEach((btn) => {
//    btn.addEventListener("click", () => btn.parentElement.remove())
//})

function openForm(){
    document.getElementById("pop-up").style.display = "block"

}


const addBook = document.getElementById("addToGrid")
addBook.addEventListener("click", displayBook);