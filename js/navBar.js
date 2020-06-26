function openPage(page) {
    // Declare all variables
    var i, navContent, navItem, navBar;

    // Get all elements with class="nav-content" and hide them
    navContent = document.getElementsByClassName("nav-content");
    for (i = 0; i < navContent.length; i++) {
        navContent[i].style.display = "none";
    }

    // Get all elements with class="nav-item" inside the navbar and remove the class "active"
    navBar = document.getElementById("navbar");
    navItem = navBar.getElementsByClassName("nav-item");
    for (i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active"; // Sets the class of the element that initiated the function
        });
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(page).style.display = "block";
}

// Clicks the defaultOpen element (home page)
document.getElementById("defaultOpen").click();