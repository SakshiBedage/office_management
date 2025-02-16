// Function to toggle between dark and light mode
function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');
    const currentTheme = themeStyle.getAttribute('href');
    const lightTheme = 'assets\css\LightStyle.css';
    const darkTheme = 'assets\css\style.css';

    // Toggle between dark and light mode stylesheets
    const newTheme = currentTheme === darkTheme ? lightTheme : darkTheme;
    themeStyle.setAttribute('href', newTheme);

    // Store the current theme preference in localStorage
    localStorage.setItem('theme', newTheme);
}

// Check if there is a theme preference stored in localStorage
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    document.getElementById('theme-style').setAttribute('href', storedTheme);
}

// Event listener to toggle theme on button click
document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    themeToggleBtn.addEventListener('click', toggleTheme);
});
