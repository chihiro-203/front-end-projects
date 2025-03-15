const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
});

document.addEventListener('click', (event) => {
    if (!search.contains(event.target)) {
        search.classList.remove('active');
    }
});
