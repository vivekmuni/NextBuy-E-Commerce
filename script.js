// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor link behavior

        // Get the target element's offset position
        const targetElement = document.querySelector(this.getAttribute('href'));

        // Scroll smoothly to the target element
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});
/*Login an register*/
function login() {
    event.preventDefault(); // Prevent default form submission
    window.location.href = 'index.html'; // Redirect to shopping homepage
}

function register() {
    event.preventDefault(); // Prevent default form submission
    window.location.href = 'login.html'; // Redirect to login page after registering
}

// Hover cursor effect
document.body.addEventListener("mousemove", (event) => {
    const effect = document.createElement("span");
    effect.className = "cursor-effect";
    effect.style.left = `${event.pageX}px`;
    effect.style.top = `${event.pageY}px`;
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 1000);
});

