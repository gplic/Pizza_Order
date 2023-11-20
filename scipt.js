// Pizza Order

// Add an Event Listener to the button to run the placeOrder function
document.getElementById("btn").addEventListener("click", placeOrder);

// Store order code in a function
function placeOrder() {
    //INPUT
    let size = prompt("enter size of pizza (large, medium, small): ");
    let topping1 = prompt("Enter first toping: ");
    let topping2 = prompt("Enter second toping: ");

    //PROCESS
    let msg = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;

    //OUTPUT
    alert(msg);
}
