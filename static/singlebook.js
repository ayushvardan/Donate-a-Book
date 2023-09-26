// In book.js
document.addEventListener("DOMContentLoaded", () => {
    // Function to fetch book details from the server based on book ID
    function fetchBookDetails(bookid) {
      fetch(`/get-book-details?bookid=${bookid}`)
        .then((res) => res.json())
        .then((book) => {
          // Call a function to display the book details on the page
          displayBookDetails(book);
        })
        .catch((error) => console.log(error));
    }
  
    // Function to display book details on the page
    function displayBookDetails(book) {
      const bookDetailsContainer = document.getElementById("bookDetailsContainer");
  
      // Create HTML elements to display the book details
      const bookDetails = document.createElement("div");
      bookDetails.innerHTML = `
        <h1>${book.bookname}</h1>
        <p>Author: ${book.Author_name}</p>
        <p>Price: ${book.Price}</p>
        <p>Category: ${book.Category}</p>
        <button id="addcart" > Add to Cart</button>
        
        <!-- Add more details here as needed -->
      `;
  
      // Append the book details to the container
      bookDetailsContainer.appendChild(bookDetails);
      const addButton = document.getElementById("addcart");
      addButton.addEventListener("click", function () {
        
        console.log(book)
        // Send a POST request to your server's "add-to-cart" endpoint
        fetch('/add-to-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                bookid : book.bookid,
                bimg: book.bimg,
                bookname: book.bookname,
                price: book.Price
                // Add more properties as needed
            }),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            console.log("book" , book)
            addButton.textContent = "Go to Cart";
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    }
  
    // Extract the bookid from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookid = urlParams.get("bookid");
  
    if (bookid) {
      // If a bookid is present in the URL, fetch and display the book details
      fetchBookDetails(bookid);
    }
    
  });
  