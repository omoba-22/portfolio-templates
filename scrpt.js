
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    sidebar.style.left = "0";
    overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
    sidebar.style.left = "-260px";
    overlay.style.display = "none";
});
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", () => {
        sidebar.style.left = "-260px";
        overlay.style.display = "none";
    });
});