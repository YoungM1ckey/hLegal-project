document.getElementById("hamburger__button").addEventListener("click", function () {
    document.getElementById("navigation__mobile").style.display = "flex";
});

document.getElementById("close__button-nav-mobile").addEventListener("click", function () {
    document.getElementById("navigation__mobile").style.display = "none";
});
