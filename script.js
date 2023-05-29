
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


let container = document.querySelector('#tableBody')


library.push(book1);
library.push(book2);
library.push(book3);
library.push(book4);




function showMyBooks() {

    let tableB = document.querySelector("#bookTable");
//clear the previous content
    tableB.innerHTML = ''
    container.innerHTML = "";



  //go try arr create element display my books
  for (let i = 0; i < library.length; i++) {
    let bookL = library[i];

    let tableRow = document.createElement("tr");
    let titleB = document.createElement("td");
    let pagesB = document.createElement("td");
    let categoryB = document.createElement("td");
    let readB = document.createElement('td')
    let removeButton = document.createElement("button");


    titleB.textContent = bookL.title;
    pagesB.textContent = bookL.pages;
    categoryB.textContent = bookL.category;
    removeButton.textContent = "Remove";

    tableRow.appendChild(titleB);
    tableRow.appendChild(pagesB);
    tableRow.appendChild(categoryB);
    tableB.appendChild(tableRow);
    tableRow.appendChild(readB)
    tableRow.appendChild(removeButton);


    //remove books 
    removeButton.addEventListener("click", function () {
      tableRow.remove();
      removeButton.style.display = "none";
    });

    const checkBox = document.querySelector('#readStatus');



    let icon = document.createElement('i')
    
    if(checkBox.checked) {
        icon.className = "fas fa-check-circle my-icon"
    }else {
        icon.innerText = "x";
    }

readB.innerHTML = ''
    readB.appendChild(icon)
    
   
  }
}




function submitBook(event) {
  event.preventDefault();

  // taking the values from the input
  let newTitle = document.querySelector("#title").value;
  let newPages = document.querySelector("#pages").value;
  let newCategory = document.querySelector("#category").value;
  let newRead = document.querySelector('#readStatus').value



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
  document.querySelector('#readStatus').value = '';


  //refresh the display
  showMyBooks();




}
 