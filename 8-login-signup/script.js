const container = document.getElementById("form-container");
const registerBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

const pwHids = document.querySelectorAll(".pw-hid");
pwHids.forEach((pwHid) => {
  pwHid.addEventListener("click", () => {
    const passwordInput = pwHid.closest(".box").querySelector("input");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      pwHid.classList.remove("uil-eye-slash");
      pwHid.classList.add("uil-eye");
    } else {
      passwordInput.type = "password";
      pwHid.classList.remove("uil-eye");
      pwHid.classList.add("uil-eye-slash");
    }
  });
});

