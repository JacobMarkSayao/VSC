const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 100) {
    header.classList.add("blue");
    // header.style =
    //   "background:red; position:fixed; width:100%; z-index:999; transition:.5s ease;";
  } else {
    header.classList.remove("blue");
    // header.style = "background:#2b2b2b transition:.5s ease;";
  }
});
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
