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
