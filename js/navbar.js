class NavBar extends HTMLElement {
    connectedCallback() {
        $.get("js/templates/navbar-tmp.html", (data) => {
            this.innerHTML = data;
            var currentPageName = this.getAttribute("current-page");

            var navLinks = $(".nav-link");
            var currentPage = navLinks.filter((index, link) => {
                return $(link).text() === currentPageName;
            });
            currentPage.addClass("active");
        });
    }
}

export { NavBar };