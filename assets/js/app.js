//scroll-to-top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

//nav hamburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show"); //toggles in/out the show class for the nav ul
});

//close hamburger menu when link is clicked
//first get array of all nav-links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(link => {
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
})