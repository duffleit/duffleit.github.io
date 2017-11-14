function showMenu() {

    const navbarId = "navbar";
    const navbarClass = "navbar";
    const navbarResponsiveClass = "menu";

    var bar = document.getElementById(navbarId);

    bar.className =
        bar.className === navbarClass
            ? navbarClass + " " + navbarResponsiveClass
            : navbarClass;
}