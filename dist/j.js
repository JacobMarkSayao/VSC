const toggleBtn = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");

toggleBtn.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  toggleBtn.classList.toggle("open");
});

const bannerBtn = document.querySelector(".chev");
const bannerTable = document.querySelector(".drop__down");

bannerBtn.addEventListener("click", () => {
  bannerTable.classList.toggle("open");
  bannerBtn.classList.toggle("open");
});
