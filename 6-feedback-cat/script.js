const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#feedback");

let selectedRating = "Okay";
let respondText = null;
let respondedIcon = "😺";

ratings.forEach((rating) => {
  rating.addEventListener("click", function () {
    ratings.forEach((o) => o.classList.remove("active"));
    this.classList.add("active");
    selectedRating = this.querySelector("p").textContent;
    respondedIcon = this.querySelector("div").textContent;
  });
});

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "wQP9ZyJKxe0nRtCvx",
  });
})();

sendBtn.addEventListener("click", (e) => {
  if (selectedRating == "Terrible") {
    respondText =
      "I'm sorry to hear that. I'll do my best to fix or improve the situation.";
  }
  if (selectedRating == "Bad") {
    respondText =
      " I understand. I'll try my best to fix or improve things for you.";
  }
  if (selectedRating == "Okay") {
    respondText = "Noted. I'll make an effort to enhance your experience.";
  }
  if (selectedRating == "Good") {
    respondText =
      "Great to hear! I'll keep up the good work and strive for even better.";
  }
  if (selectedRating == "Amazing") {
    respondText =
      "That's fantastic! I'll continue to provide excellent service and support.";
  }

  let feedback = document.querySelector("#fb").value.trim();
  if (feedback === "") {
    feedback = "No feedback message!";
  }
  console.log(feedback.value);
  emailjs
    .send("service_d6agu0e", "template_g2n2kt3", {
      selectedRating: selectedRating,
      respondedIcon: respondedIcon,
      feedback: feedback,
    })
    .then(
      (response) => {
        console.log("SUCCESS!");
        panel.innerHTML = `
              <div class="responded-icon">${respondedIcon}</div>
              <strong class="response">Thank You!</strong>
              <strong class="response">Feedback: <span style="color: #7946c1">${selectedRating}</span></strong>
              <br>
              <div style="font-size: 18px; width: 75%;">${respondText}</div>
          `;
      },
      (error) => {
        console.log("FAILED...", error);
        panel.innerHTML = `
              <div class="responded-icon">🙀</div>
              <div style="font-size: 18px; width: 75%;">Oh no... I am sorry!<br>
              Feedback is not sent successfully!<br>
              Please reload and try again.</div>
          `;
      }
    );
});
