const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = 'Switch to Dark Mode'; // button
    } else {
        body.classList.remove('light-mode');
        themeToggle.textContent = 'Switch to Light Mode'; // button
    }
}

// gets theme from storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme('dark'); // dark mode is default theme
}

// switch theme
themeToggle.addEventListener('click', () => {
    const isLightMode = body.classList.contains('light-mode');
    const newTheme = isLightMode ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme); // saves theme to storage so if a user sets it to light theme, it will remember it
});
