document.addEventListener("DOMContentLoaded", () => {
    // Scroll Effect for Navbar
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Dropdown Menu Functionality
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const dropdown = document.querySelector(".dropdown");

    dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link behavior
        dropdown.classList.toggle("open"); // Toggle "open" class for dropdown
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
        }
    });
});

let three_bar = document.querySelector(".fa-bars")
let xmark = document.querySelector(".fa-xmark")
xmark.style.display = "none"

three_bar.addEventListener("click" , ()=>{
    three_bar.style.display = "none"
    xmark.style.display = "block"
})

xmark.addEventListener("click" , ()=>{
    three_bar.style.display = "block"
    xmark.style.display = "none"
})

let updates = [
    "Biochar Integration by Tata Steel in India to Reduce Emissions",
    "Sustainable Aviation Fuel Facility: BPCL to Launch India’s First by 2027",
    "Biochar Use in Steelmaking Explored as IIT (ISM) Dhanbad Partners with sentra.world",
    "Compressed Biogas Plants Using Cow Dung in Uttar Pradesh",
    "India’s First Green Hydrogen Fuel Station Built by Amara Raja Infra in Leh"
];

let updateWrapper = document.querySelector('.update-wrapper');
let currentIndex = 0;
let updateHeight = 50; // Height of a single update (matches CSS)

function createUpdates() {
    updates.forEach((update) => {
        let updateElement = document.createElement('a'); // Create an <a> element
        updateElement.href = "#"; // Set the href (you can update it with a real link)
        updateElement.innerHTML = `<p>${update}</p>`; // Set the inner HTML with a <p> tag

        updateWrapper.appendChild(updateElement); // Append the anchor to the wrapper
    });

    // Clone the first update (anchor) and add it to the end for smooth looping
    let firstUpdate = updateWrapper.firstElementChild.cloneNode(true);
    updateWrapper.appendChild(firstUpdate);
}

function moveUpdates() {
    currentIndex++;

    // Apply the transform to create the scrolling effect
    updateWrapper.style.transform = `translateY(-${currentIndex * updateHeight}px)`;
    updateWrapper.style.transition = 'transform 0.5s ease';

    // Reset position when the last clone is reached
    if (currentIndex === updates.length) {
        setTimeout(() => {
            updateWrapper.style.transition = 'none'; // Disable transition
            updateWrapper.style.transform = 'translateY(0)'; // Reset position to the top
            currentIndex = 0; // Reset index
        }, 500); // Match the transition duration
    }
}

// Start the updates
createUpdates();
setInterval(moveUpdates, 3000); // Move every 3 seconds




//copyright year change
let currentyear = document.getElementById("copyYear")
actualYera = new Date()
currentyear.innerHTML = actualYera.getFullYear()