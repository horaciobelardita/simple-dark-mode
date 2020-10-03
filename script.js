const styles = document.documentElement.style;

const $switchInput = document.querySelector('#switch');

const lightTheme = {
  '--bg-primary': '#fff',
  '--text-primary': '#333',
};
const darkTheme = {
  '--bg-primary': '#000',
  '--text-primary': '#EFD81C',
};

const changeTheme = (name, theme) => {
  Object.keys(theme).forEach((property) =>
    styles.setProperty(property, theme[property])
  );
  localStorage.setItem('theme', name);
};

$switchInput.addEventListener('click', (e) => {
  const { checked } = e.target.previousElementSibling;
  checked ? changeTheme('light', lightTheme) : changeTheme('dark', darkTheme);
});
document.addEventListener('DOMContentLoaded', (_) => {
  const theme = localStorage.getItem('theme') ?? 'light';
  document.querySelector('#switch-input').checked = theme === 'dark';
  theme === 'dark'
    ? changeTheme('dark', darkTheme)
    : changeTheme('light', lightTheme);
});
