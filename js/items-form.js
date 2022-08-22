// Initialize a new Controller with currentId set to 0
const productsController = new ProductsController(0);

// Select the New Item Form
const newItemForm = document.querySelector('#newItemForm');

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const name = document.querySelector("#newItemName").value;
    const description = document.querySelector("#newItemDescription").value;
    const image = document.querySelector("#newItemImageUrl").value;    
    const price = document.querySelector("#newItemPrice").value;

    /* get values
    const name = newItemName.value;
    const description = newItemDescription.value;
    const image = newItemImageUrl.value;
    const price = newItemPrice.value; */

    //validation code 
    if (name == ""){
        return alert("Please enter name.");
    } else {
    
    // Add the form data to the ProductsController 
    
    productsController.addItems(name, description, image, price); 
    }
     // Clear the form
    newItemName.value = '';
    newItemDescription.value = '';    
});