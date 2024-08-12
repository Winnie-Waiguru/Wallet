const nav = document.querySelector("nav");
const toggleBtn = document.getElementById("toggle-btn");
const content = document.getElementById("introduction");

toggleBtn.onclick = function () {
  nav.classList.toggle("hide");
  content.classList.toggle("expand");
};
