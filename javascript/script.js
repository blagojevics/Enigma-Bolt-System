function toggleMenu() {
  const navItems = document.getElementById("nav-items");
  navItems.classList.toggle("open");
}

// Auto-close menu when a link is clicked or when clicking outside
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.getElementById("nav-items");

  // Close when any nav link is clicked
  document.querySelectorAll("#nav-items a").forEach(link => {
    link.addEventListener("click", () => {
      navItems.classList.remove("open");
    });
  });

  // Close when clicking outside menu or icon
  document.addEventListener("click", function (e) {
    const isClickInsideMenu = navItems.contains(e.target);
    const isClickOnIcon = e.target.closest(".icon");

    if (!isClickInsideMenu && !isClickOnIcon) {
      navItems.classList.remove("open");
    }
  });

  window.addEventListener("scroll", () => navItems.classList.remove("open"));
});

//------------------------------------

const images = document.querySelectorAll('.gallery img');
const popup = document.getElementById('image-popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.querySelector('.close-btn');

images.forEach(img => {
  img.addEventListener('click', () => {
    popupImg.src = img.src;
    popup.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});

popup.addEventListener('click', e => {
  if (e.target !== popupImg) {
    popup.classList.remove('active');
  }
});