// document.addEventListener("DOMContentLoaded", () => {
//     fetch("/get-cart")
//         .then(res => res.json())
//         .then(data => {
//             // Call a function to dynamically create cards
//             console.log("client ", data)
//             displaycartitem(data);
            
//         })
//         .catch(error => console.log(error));

        
// });

// function displaycartitem(cart) {
//     const cartItems = document.getElementById("cartItems");
//     cart.forEach(book => {
//         const card = generateBookCard(book);
//         //   console.log(book.bookid)
//         cartItems.appendChild(card);
//     });
    
// }

// function generateBookCard(item) {
//     const cartItemDiv = document.createElement('div');
//     cartItemDiv.classList.add("cartItemDiv")
//     cartItemDiv.innerHTML = `
//         <p id="bookid">Book Id: ${item.bookid}</p>
//         <p>Book Name: ${item.bookname}</p>
//         <p>Image: ${item.bimg}</
//         <p>Price: ${item.price}</p>
//         <p>Quantity: ${item.quantity}</p>
//         <button id="deleteButton">Delete</button>
//         <!-- Add more details here as needed -->
//         `;
//     return cartItemDiv;
// }


// const del = document.getElementById("deleteButton");
// const bid = document.getElementById("bookid");
// const bvalue = bid.innerHTML;
// console.log("cart id" , bvalue)
// del.addEventListener("click" , deleteCartItem(bvalue));

// function deleteCartItem(bookid) {
//     console.log(bookid)
//     fetch(`/delete-cart-item/${bookid}`, {
//         method: 'DELETE'
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert(data.message);
//         // Refresh the page or update the cart display as needed
//         location.reload(); // Refresh the page to reflect changes
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }

document.addEventListener("DOMContentLoaded", () => {
    fetch("/get-cart")
        .then(res => res.json())
        .then(data => {
            displaycartitem(data);
        })
        .catch(error => console.log(error));
});

function displaycartitem(cart) {
    const cartItems = document.getElementById("cartItems");

    cart.forEach(book => {
        const card = generateCartItem(book);
        cartItems.appendChild(card);
    });
}

function generateCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.classList.add("cartItem");
    cartItem.innerHTML = `
        <img src="${item.bimg}" alt="${item.bookid}">
        <p>Book Name: ${item.bookname}</p>
        <p>Price: ${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <button class="deleteButton">Delete</button>
    `;

    // Attach an event listener to the delete button
    const deleteButton = cartItem.querySelector('.deleteButton');
    deleteButton.addEventListener("click", () => deleteCartItem(item.bookid));

    return cartItem;
}

function deleteCartItem(bookid) {
    console.log(bookid)
    fetch(`/delete-cart-item/${bookid}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log("deleted item");
        alert(data.message);
        // Refresh the page or update the cart display as needed
        location.reload(); // Refresh the page to reflect changes
    })
    .catch(error => {
        console.error('Error:', error);
    });
}