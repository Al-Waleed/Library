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

    document.getElementById("read-yes").checked ? Book.isRead = "Read" : Book.isRead = "Not Read"//to check which radio button is selected

    myLibrary.push(newBook);
}


const container = document.querySelector(".container")

const displayBook= (e) => {
    e.preventDefault();
    addBookToLibrary();
    const div = document.createElement("div")
    div.classList.add("book")
    const bookTitle = document.createElement("p")
    const bookAuthor = document.createElement("p")
    const bookPages = document.createElement("p")
    const bookIsRead = document.createElement("button")
    bookIsRead.classList.add("button", "status")

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

    const toggleButton = document.querySelectorAll(".status")
    toggleButton.forEach((toggled) => {
        toggled.addEventListener("click", toggleRead)
    })
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

const hideForm = document.getElementById("hideButton")
hideForm.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("pop-up").style.display = "none"
})


function toggleRead() {
    console.log("asd")
    this.textContent=="Read" ? this.textContent = "Not Read" : this.textContent = "Read"
}