window.onbeforeunload = function () {
  window.scrollTo(0, 0)
}

const menuIcon = document.getElementById("menu-icon")
const menuList = document.querySelector(".menu-list")

menuIcon.addEventListener("click", (e) => {
  menuList.classList.toggle("open")
})