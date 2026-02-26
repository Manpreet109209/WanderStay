const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isOpen);
});

// Close menu when clicking outside (mobile)
document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
    }
});

// Close on ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        navMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        }
    });