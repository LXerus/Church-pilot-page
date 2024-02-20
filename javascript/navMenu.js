function toggleNavMenu() {
    var navElements = document.getElementsByClassName("navbarMenu");
    var navBar = navElements[0]

    if (navBar.classList[2] === "menu-display-off") {
        navBar.classList.remove("menu-display-off");
    } else {
        navBar.classList.add("menu-display-off");
    }

}
