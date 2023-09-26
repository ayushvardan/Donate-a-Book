document.addEventListener("DOMContentLoaded", () => {
    fetch("/all-books")
      .then(res => res.json())
      .then(data => {
        // Call a function to dynamically create cards
        console.log("client " , data)
        displayBooks(data);
      })
      .catch(error => console.log(error));
  });
  
  function displayBooks(books) {
    const bookContainer = document.getElementById("bookContainer");
  
    books.forEach(book => {
      const card = generateBookCard(book);
      console.log(book.bookid)
      card.addEventListener("click", () => {
        // Navigate to the book's URL when the card is clicked
        window.location.href = `/single-book?bookid=${book.bookid}`;
      });
      bookContainer.appendChild(card);
    });
  }
  
  function generateBookCard(book) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${book.bimg}" alt="${book.bookid}">
      <h3>${book.bookname}</h3>
      <p>Author: ${book.Author_name}</p>
      <p>Price: ${book.Price}</p>
      <p>Category: ${book.Category}</p>
    `;
    return card;
  }