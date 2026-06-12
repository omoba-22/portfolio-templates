const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
});