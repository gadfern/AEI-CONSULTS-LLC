document.getElementById("contactForm").addEventListener("submit", function(event){
    // This function will be called when the form is submitted
    
    // Example: Validate the phone number length
    const phone = document.getElementById("phone").value;
    if(phone.length !== 10){
        alert("Phone number should be 10 digits.");
        event.preventDefault(); // Prevent form from submitting
    }

    // You can add more validation as needed
});