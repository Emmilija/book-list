
document.querySelector('.newBook').addEventListener('click', addBrandNewBook)

document.querySelector('#addBookForm').addEventListener('submit', submitBook);

function addBrandNewBook() {
document.querySelector('#addBookForm').style.display = 'block'
}


let library = []

function Book(title, pages, category, read) {
this.title = title
this.pages = pages
this.category = category
this.read = read

}


const book1 = new Book( "To Kill a Mockingbird",'281', 'Drama', 'true')
const book2 = new Book("The Catcher in the Rye", '224','Action', 'true' )
const book3 = new Book("The Great Gatsby", '330','Comedy', 'true' )
const book4 = new Book("Sapiens: A Brief History of Humankind", '128','Trailer', 'true' )



library.push(book1);
library.push(book2);
library.push(book3);
library.push(book4);



let tableB = document.querySelector("#tableBody");



function showMyBooks() {
//clear the previous content
    tableB.innerHTML = "";


  //go trough arr create element display my books
  for (let i = 0; i < library.length; i++) {
    let bookL = library[i];



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
   removeButton.addEventListener("click", function () {
    library.splice(i, 1)
    tableRow.remove()
  });


tableB.appendChild(tableRow);

      }


};


//remove button function with splice

function submitBook(event) {
  event.preventDefault();

  // taking the values from the input
  let newTitle = document.querySelector("#title").value;
  let newPages = document.querySelector("#pages").value;
  let newCategory = document.querySelector("#category").value;
  let newRead = document.querySelector('#readStatus').checked


  let existingBook = library.find(
    (book) =>
      book.title === newTitle &&
      book.pages === newPages &&
      book.category === newCategory &&
      book.read === newRead
  );

  if (existingBook) {
    alert("Book already exists in the library.");
    return; // Do not proceed further
  }



  let newBook = new Book(newTitle, newPages, newCategory, newRead);

  library.push(newBook);

  // Clearing the input fields
  document.querySelector("#title").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#category").value = "";
  document.querySelector('#readStatus').checked = false;


  //refresh the display
  showMyBooks();




}
 