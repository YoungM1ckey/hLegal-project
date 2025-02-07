document.getElementById("hamburger__button").addEventListener("click", function () {
    let checkElement = document.getElementById("navigation__mobile");
    let targetElement = document.getElementById("hamburger__button");

    if (window.getComputedStyle(checkElement).display === "none") {
        targetElement.classList.add("active-nav-mobile");
    } else {
        targetElement.classList.remove("active-nav-mobile");
    }
});

let blockScroll = document.body;

document.getElementById("hamburger__button").addEventListener("click", function () {
    let target = document.getElementById("navigation__mobile");

    if (target.style.display === "flex") {
        target.style.display = "none";
        blockScroll.style.removeProperty("overflow-y");
    } else {
        target.style.display = "flex";
        blockScroll.style.overflowY = "hidden";
    }
});

document.getElementById("close__button-nav-mobile").addEventListener("click", function () {
    document.getElementById("navigation__mobile").style.display = "none";
    document.getElementById("hamburger__button").classList.remove("active-nav-mobile");
    blockScroll.style.removeProperty("overflow-y");
});
