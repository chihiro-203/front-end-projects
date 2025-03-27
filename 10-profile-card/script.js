const boxes = document.querySelectorAll(".box");
const lists = document.querySelectorAll("nav ul li");

lists.forEach((item, i) => {
  item.addEventListener("click", () => {
    closeAllBoxes();

    item.classList.add("active");
    boxes[i].classList.add("show");
  });
});

function closeAllBoxes() {
  boxes.forEach((box) => box.classList.remove("show"));
  lists.forEach((list) => list.classList.remove("active"));
}


// Contact form
const form = document.getElementById("c-contact-form");
const alert = document.querySelector(".contact-form-alert");

// Initialize EmailJS
(function () {
  emailjs.init({
    publicKey: "wQP9ZyJKxe0nRtCvx",
  });
  console.log("EmailJS initialized.");
})();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Input validation
  const name = document.querySelector("[name='name']").value;
  const email = document.querySelector("[name='email']").value;
  const subject = document.querySelector("[name='subject']").value;
  const message = document.querySelector("[name='message']").value;

  if (!name || !email || !subject || !message) {
    alert.innerHTML =
      "<div class='error'><span>Please fill in all fields!</span> <i class='bx bxs-error-alt'></i></div>";
    return;
  }

  emailjs
    .sendForm("service_wvizx8l", "template_ekmr813", "#c-contact-form")
    .then(
      () => {
        console.log("Email sent successfully.");
        alert.innerHTML =
          "<div class='success'><span>Your message was sent successfully!</span> <i class='fa-solid fa-paw'></i></div>";
        form.reset();
        setTimeout(() => {
          alert.innerHTML = "";
        }, 5000);
      },
      (error) => {
        console.error("Email sending failed:", error);
        alert.innerHTML =
          "<div class='error'><span>Your message was not sent!</span> <i class='bx bxs-error-alt'></i></div>";
        alert.title = error.text;
      }
    );
});
