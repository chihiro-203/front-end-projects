const container = document.getElementById("form-container");
const registerBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});