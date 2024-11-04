const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");


function addTask() {
    if (inputbox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("Li")
        li.innerHTML    = inputbox.value
        listcontainer.appendChild(li)
        inputbox.value = ""
        const span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        savedata()
    }
}
listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        savedata()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        savedata()
    }
}, false)
function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML)
}

function showtask() {
    listcontainer.innerHTML = localStorage.getItem("data")
}   
showtask()

const bubbleContainer = document.getElementById("bubble-container");

// Set the number of bubbles
const numBubbles = 20;

// Function to create a bubble
function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Randomize bubble position
  bubble.style.top = `${Math.random() * 200}px`;
  bubble.style.left = `${Math.random() * 200}px`;

  // Randomize bubble size
  bubble.style.width = `${Math.random() * 20 + 10}px`;
  bubble.style.height = `${Math.random() * 20 + 10}px`;

  // Add animation
  bubble.style.animationDelay = `${Math.random() * 5}s`;

  // Append bubble to container
  bubbleContainer.appendChild(bubble);
}

// Create multiple bubbles
for (let i = 0; i < numBubbles; i++) {
  createBubble();
}

