function toggleNavMenu() {
    var navBar = document.getElementById("navbarMenu");

    if (navBar.className === "menu menu-display-off") {
        navBar.classList.remove("menu-display-off");
    } else {
        navBar.classList.add("menu-display-off");
    }

}
