const mobileMenuBtnElement = document.getElementById("mobile-menu-btn");
const mobileMenuElement = document.getElementById("mobile-menu");

function toggleMobileMenu() {
  mobileMenuElement.style.classList.toggle("open");
}

mobileMenuBtnElement.addEventListener("click", toggleMobileMenu);
