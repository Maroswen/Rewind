// get the user's message to reverse
function getValues() {
    // get the text input from the page
    let message = document.getElementById('userInput').value;
    
    // validate the input: make sure its not empty
    if (message.length == 0) {
        Swal.fire({
            icon: 'error',
            backdrop: false,
            title: 'Oops!',
            text: 'Please enter a message to reverse'
        });
    } else {
        // pass the input to reverseMessage and assign its return value to a variable
        let revMsg = reverseMessage(message);
        
        // give the reversed message to displayMessage
        displayMessage(revMsg);

    }

}

// reverse the string 
function reverseMessage(input) { // input = 'hello'
    
    let output = '';

    for (let i = input.length - 1; i >= 0; i--) {
        
        output += input[i];

    }

    return output;
}

// display the reversed message
function displayMessage(message) {

    document.getElementById('msg').textContent = `Your message reflected is: ${message}`;

    document.getElementById('alert').classList.remove('invisible');

}