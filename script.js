// Animasi sederhana saat halaman dibuka
document.addEventListener('DOMContentLoaded', () => {
  const profile = document.querySelector('.profile-card');
  profile.style.opacity = 0;
  profile.style.transform = "translateY(20px)";
  setTimeout(() => {
    profile.style.transition = "all 0.5s ease";
    profile.style.opacity = 1;
    profile.style.transform = "translateY(0)";
  }, 100);
});

const optionMenu = document.querySelector(".select-menu");
const selectBtn = document.querySelector(".select-btn");
const options = document.querySelectorAll(".option");
const sBtn_text = document.querySelector("sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});