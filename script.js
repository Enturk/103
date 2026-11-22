const themeBtn = document.querySelector('#theme-btn');
const statusText = document.querySelector('#status-text');
let clickCount = 0;

themeBtn.addEventListener('click', () => {
  clickCount += 1;
  const isDark = document.body.classList.toggle('dark-mode');

  themeBtn.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  statusText.textContent = isDark
    ? `Dark mode is active. You have toggled the theme ${clickCount} time(s).`
    : `Light mode is active. You have toggled the theme ${clickCount} time(s).`;

  console.log('Theme toggled. Dark mode active:', isDark);
});
