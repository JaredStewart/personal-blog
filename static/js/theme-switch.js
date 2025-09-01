// Theme management with manual toggle
function getStoredTheme() {
  return localStorage.getItem('theme') || 'light';
}

function setStoredTheme(theme) {
  localStorage.setItem('theme', theme);
}

function applyTheme(theme) {
  document.body.classList.remove('light', 'dark', 'auto');
  document.body.classList.add(theme);
  updateToggleButton(theme);
}

function updateToggleButton(theme) {
  const button = document.getElementById('theme-toggle');
  if (!button) return;
  
  const lightIcon = button.querySelector('.light-icon');
  const darkIcon = button.querySelector('.dark-icon');
  
  if (theme === 'dark') {
    lightIcon.style.display = 'inline';
    darkIcon.style.display = 'none';
    button.title = 'Switch to light mode';
  } else {
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'inline';
    button.title = 'Switch to dark mode';
  }
}

function toggleTheme() {
  const currentTheme = getStoredTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setStoredTheme(newTheme);
  applyTheme(newTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
  const theme = getStoredTheme();
  applyTheme(theme);
  
  // Set up toggle button click handler
  const toggleButton = document.getElementById('theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
  }
});

// Initialize immediately (for cases where DOM is already loaded)
const theme = getStoredTheme();
applyTheme(theme);