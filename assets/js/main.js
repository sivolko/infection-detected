// Theme mode initialization
document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("dark", "");
    document.documentElement.classList.add("dark-mode");
  }
});