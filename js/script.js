window.onbeforeunload = function () {
  window.scrollTo(0, 0)
}

const menuIcon = document.getElementById("menu-icon")
const menuList = document.querySelector(".menu-list")
const readMore = document.getElementById("read-more")
const aboutMeSection = document.querySelector(".about")

let toggle = false;

menuIcon.addEventListener("click", (e) => {
  menuList.classList.toggle("open")
})

readMore.addEventListener("click", (e) => {

  aboutMeSection.classList.toggle("open-about");
  if (!toggle) {
    readMore.textContent = "Hey There!";
    toggle = true;
  } else {
    readMore.textContent = "About Me";
    toggle = false;
  }
});