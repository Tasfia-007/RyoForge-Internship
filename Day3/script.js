
let name = "Tasfia Zaman Samiha";
console.log(name);


let hobbies = ["Reading", "Traveling", "Photography"];
console.log(hobbies);


let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}

let userName = prompt("What is your name?");
alert("Hello, " + userName + "! Welcome to my profile page.");


document.getElementById("name").textContent = "Hello, " + userName + "!";
