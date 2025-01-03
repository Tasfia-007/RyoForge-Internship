// 1. Greet the user with a prompt and display a message
let userName = prompt("What is your name?");
alert("Hello, " + userName + "! Welcome to my profile page.");

// 2. Modify the heading and paragraph when the "Modify Profile" button is clicked
document.getElementById("modify-button").addEventListener("click", function() {
    // Change the main heading text
    document.getElementById("main-heading").textContent = "Welcome to My Profile, " + userName + "!";
    
    // Modify the about text paragraph
    document.getElementById("about-text").textContent = "I am passionate about learning web development and building dynamic websites!";
    
    // Change the profile image when the button is clicked
    document.getElementById("profile-img").src = "newProfileImage.jpg"; // Replace with your new image path
});

// 3. Toggle additional sections on the page when the "Toggle Sections" button is clicked
document.getElementById("toggle-sections-button").addEventListener("click", function() {
    const extraSections = document.getElementById("extra-sections");

    // Toggle visibility of the additional content
    if (extraSections.style.display === "none") {
        extraSections.style.display = "block";
    } else {
        extraSections.style.display = "none";
    }
});

// 4. Handling the form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the name and email input values
    const userNameInput = document.getElementById("name").value;
    const userEmailInput = document.getElementById("email").value;

    // Email validation
    if (!userEmailInput.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Display thank you message with user's name
    document.getElementById("user-name-display").textContent = userNameInput;

    // Show the form feedback
    document.getElementById("form-feedback").style.display = "block";

    // Optionally, reset the form after submission
    document.getElementById("contact-form").reset();
});

// Display hobbies in the console
let hobbies = ["Reading", "Traveling", "Photography"];
console.log("Hobbies:");
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}

// Check the user's age and log if they are an adult or a minor
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
