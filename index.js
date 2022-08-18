
// Collecting input from the user and including it in the front end

const titlePrompt = prompt("What's this list for?");
document.querySelector("h1").innerHTML = titlePrompt;


const button = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");

button.addEventListener("click", function() {
    if (input.value.length > 0) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    } else {
        alert("Please enter a valid input");
    }
});

var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);

// input.addEventListener("keydown", function(event) {
//     if (input.value.length > 0 && KeyboardEvent.code === 13) {
//         let li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     } else {
//         alert("Please enter a valid input");
//     }
// });