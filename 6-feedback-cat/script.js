const ratings = document.querySelectorAll(".rating");
const feedback = document.querySelector(".feedback-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#feedback");

let selectedRating = "Okay";
let selectedIcon = null;
let respondedIcon = "😺";

ratings.forEach(rating => {
    rating.addEventListener("click", function() {
        ratings.forEach(o => o.classList.remove("active"));
        this.classList.add("active");
        selectedRating = this.querySelector("p").textContent;
        respondedIcon = this.querySelector("div").textContent;
    });
});

sendBtn.addEventListener('click', (e) => {
    if (selectedRating == "Terrible")   {
        selectedIcon = "I'm sorry to hear that. I'll do my best to fix or improve the situation."
    }
    if (selectedRating == "Bad")    {
        selectedIcon = " I understand. I'll try my best to fix or improve things for you."
    }
    if (selectedRating == "Okay")   {
        selectedIcon = "Noted. I'll make an effort to enhance your experience.";
    }
    if (selectedRating == "Good")   {
        selectedIcon = "Great to hear! I'll keep up the good work and strive for even better."
    }
    if (selectedRating == "Amazing") {
        selectedIcon = "That's fantastic! I'll continue to provide excellent service and support.";
    }
    panel.innerHTML = `
        <div class = "responded-icon">${respondedIcon}</div>
        <strong class="response">Thank You!</strong>
        <strong class="response">Feedback: <span style="color: #7946c1">${selectedRating}</span></strong>
        <br>
        <div style="font-size: 18px; width: 75%;">${selectedIcon}</div>
    `
})