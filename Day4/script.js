
let userName = prompt("What is your name?");
alert("Hello, " + userName + "! Welcome to my profile page.");

document.getElementById("modify-button").addEventListener("click", function() {
   
    document.getElementById("main-heading").textContent = "Welcome to My Profile, " + userName + "!";
    
    
    document.getElementById("about-text").textContent = "I am passionate about learning web development and building dynamic websites!";
    
    
    document.getElementById("profile-img").src = "newProfileImage.jpg"; 
});


document.getElementById("toggle-sections-button").addEventListener("click", function() {
    const extraSections = document.getElementById("extra-sections");

    
    if (extraSections.style.display === "none") {
        extraSections.style.display = "block";
    } else {
        extraSections.style.display = "none";
    }
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const userNameInput = document.getElementById("name").value;
    const userEmailInput = document.getElementById("email").value;

    
    if (!userEmailInput.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    
    document.getElementById("user-name-display").textContent = userNameInput;
    document.getElementById("form-feedback").style.display = "block";

    
    document.getElementById("contact-form").reset();
});


let hobbies = ["Reading", "Traveling", "Photography"];
console.log("Hobbies:");
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}

let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
