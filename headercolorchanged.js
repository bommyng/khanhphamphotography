// Get the header element
const header = document.getElementById("header");

// Calculate the threshold as 70% of the viewport height
const threshold = window.innerHeight * 0.65;

// Add an event listener for the scroll event
window.addEventListener("scroll", () => {
    if (window.scrollY > threshold) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});