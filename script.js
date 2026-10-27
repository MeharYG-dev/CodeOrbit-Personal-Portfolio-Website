// Get the contact form
const contactForm = document.getElementById("contactForm");


// Add submit event to the form
contactForm.addEventListener("submit", function(event) {

    // Prevent page from refreshing
    event.preventDefault();


    // Get the values entered by the user
    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;


    // Check whether all fields contain data
    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields.");

        return;
    }


    // Display success message
    document.getElementById("formMessage").textContent =
        "Thank you, " + name + "! Your message has been submitted.";


    // Clear the form
    contactForm.reset();

});