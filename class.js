
class Library {
    constructor() {
      this.library = []

      this.tableBody = document.querySelector("#tableBody");
      document.querySelector('.newBook').addEventListener('click', this.addBrandNewBook.bind(this));
      document.querySelector('#addBookForm').addEventListener('submit', (event) => { library.submitBook(event)});
     
    }


    addBrandNewBook() {
        document.querySelector('#addBookForm').style.display = 'block'
       
    }

showMyBooks() {
    this.tableBody.innerHTML = "";

    for (let i = 0; i < this.library.length; i++) {
        let bookL = this.library[i];

     let tableRow = document.createElement("tr");

     let titleB = document.createElement("td");
    titleB.textContent = bookL.title;
   tableRow.appendChild(titleB);

    let pagesB = document.createElement("td");
    pagesB.textContent = bookL.pages;
    tableRow.appendChild(pagesB);

    let categoryB = document.createElement("td");
    categoryB.textContent = bookL.category;
    tableRow.appendChild(categoryB);

    let readB = document.createElement('td')
    let checkBox = document.createElement('input');
   checkBox.type = 'checkbox';
    checkBox.style.transform = 'scale(1.3)';

    if (bookL.read) {
      checkBox.checked = true
    } else {
     checkBox.checked = false
   }

  readB.appendChild(checkBox)
 tableRow.appendChild(readB)

    let removeB = document.createElement('td')
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = 'removeBtn'
   tableRow.appendChild(removeB);
   removeB.appendChild(removeButton);

    //remove books 
    removeButton.addEventListener("click", () => {
     this.library.splice(i, 1)
     tableRow.remove()
  });


 this.tableBody.appendChild(tableRow);

       }


 };

submitBook(event) {
    event.preventDefault();

    // Taking the values from the input
    const newTitle = document.querySelector("#title").value;
    const newPages = document.querySelector("#pages").value;
    const newCategory = document.querySelector("#category").value;
    const newRead = document.querySelector('#readStatus').checked;

  

    const newBook = new Book(newTitle, newPages, newCategory, newRead);

    this.library.push(newBook);

    // Clearing the input fields
    document.querySelector("#title").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#category").value = "";
    document.querySelector('#readStatus').checked = false;

    // Refresh the display
   this.showMyBooks();



 }

}


class Book {
    constructor(title, pages, category, read) {
      this.title = title;
      this.pages = pages;
      this.category = category;
      this.read = read;
    }
  }


  
  const library = new Library();
  
  const book1 = new Book("To Kill a Mockingbird", '281', 'Drama', true);
  const book2 = new Book("The Catcher in the Rye", '224', 'Action', true);
  const book3 = new Book("The Great Gatsby", '330', 'Comedy', true);
  const book4 = new Book("Sapiens: A Brief History of Humankind", '128', 'Trailer', true);



library.library.push(book1, book2, book3, book4);


// library.showMyBooks()






