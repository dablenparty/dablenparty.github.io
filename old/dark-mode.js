const checkBox = document.getElementById('modeToggle');
//Defining the function listed under the "onclick" parameter in the checkbox 
function modeFunc() {
    if (checkBox.checked == true) {
        document.documentElement.setAttribute('data-theme','dark'); //Checks if the checkbox is checked, and if so, sets the attribute titled "data-theme" (defined in style.css) to "dark"
        localStorage.setItem('theme','dark'); //Stores the attribute in the line above in the browsers local storage under the title "theme" so that it remembers the users option
    } 
    else {
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
    }
}
checkBox.addEventListener('change', modeFunc, false) //Adds an event listener to the function "modeFunc()"
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; //Sets the variable "currentTheme" to whatever is stored in "theme" for a returning user

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme); //Sets the theme to whatever "currentTheme" is

    if (currentTheme === 'dark') {
        checkBox.checked = true; //If Dark Mode is on, noted by "theme" being set to 'dark', then it checks the checkbox for consistency
    }
}