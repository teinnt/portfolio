$(document).ready(initialise)

function initialise() {
  setFadeInElements()
  setNavFunction()
  updateMenuToggleOpacity()
}

function setFadeInElements() {
  $(window).scroll(function () {
    $(".hide-me").each(function (i) {
      var top_of_object = $(this).offset().top + 20
      var bottom_of_window = $(window).scrollTop() + $(window).height()

      if (bottom_of_window > top_of_object) {
        $(this).addClass("show-me")
      } else {
        $(this).removeClass("show-me")
      }
    })
  })
}

function setNavFunction() {
  const navToggle = document.querySelector(".nav-toggle")
  const navLinks = document.querySelectorAll(".nav__link")

  console.log(navLinks)
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open")
  })

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open")
    })
  })
}

var prevScrollpos = 0

function updateMenuToggleOpacity() {
  const menu = document.querySelector(".hamburger")

  document.addEventListener("scroll", () => {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      menu.classList.add("hamburger-fade-out")
      menu.classList.remove("hamburger-fade-in")
    } else {
      menu.classList.add("hamburger-fade-in")
      menu.classList.remove("hamburger-fade-out")
    }
    prevScrollpos = currentScrollPos
  })
}
