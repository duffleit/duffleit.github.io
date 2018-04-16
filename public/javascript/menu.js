function showMenu() {

    const navbarId = "mobile-menu";
    const navbarClass = "menu";
    const navbarResponsiveClass = "visible";

    var bar = document.getElementById(navbarId);

    bar.className =
        bar.className === navbarClass
            ? navbarClass + " " + navbarResponsiveClass
            : navbarClass;
}
