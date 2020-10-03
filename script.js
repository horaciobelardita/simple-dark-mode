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

const changeTheme = (theme) => {
  Object.keys(theme).forEach((property) =>
    styles.setProperty(property, theme[property])
  );
};

$switchInput.addEventListener('click', (e) => {
  const { checked } = e.target.previousElementSibling;
  checked ? changeTheme(lightTheme) : changeTheme(darkTheme);
});
