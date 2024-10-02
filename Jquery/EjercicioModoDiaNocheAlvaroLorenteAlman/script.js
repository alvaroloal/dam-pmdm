const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    toggleButton.textContent = 'Cambiar a modo día';
} else {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    toggleButton.textContent = 'Cambiar a modo noche';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    if (body.classList.contains('dark-theme')) {
        toggleButton.textContent = 'Cambiar a modo día';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = 'Cambiar a modo noche';
        localStorage.setItem('theme', 'light');
    }
});
