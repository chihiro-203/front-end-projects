document.addEventListener("DOMContentLoaded", () => {
  fetch("https://chihiro-203.github.io/front-end-projects/projects.json")
    .then((response) => response.json())
    .then((data) => {
      const projects = document.getElementById("projects");
      projects.innerHTML = "";

      data.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("col");

        card.innerHTML = `
                <div class="card shadow-sm">
                        <img src="${project.img}" class="card-img-top" alt="${project.title}">
                        <div class="card-body">
                            <h6 class="card-title">${project.title}</h6>
                            <p class="card-text">${project.description}</p>
                        </div>
                        <div class="card-footer d-flex gap-2 bg-light">
                            <a href="${project.source}" class="btn btn-primary btn-sm" target="_blank">Source Code</a>
                            <a href="${project.demo}" class="btn btn-primary btn-sm" target="_blank">Demo</a>
                        </div>
                    </div>
        `;

        projects.appendChild(card);
      });
    })
    .catch((error) => console.error("Error loading projects:", error));
});

const moveToTopBtn = document.getElementById("moveToTop");
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    moveToTopBtn.style.display = "block";
  } else {
    moveToTopBtn.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
