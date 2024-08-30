document.addEventListener("DOMContentLoaded", function () {
  // Any JavaScript you need to initialize goes here
});

const testimonies = document.querySelectorAll(".testimony");
const nextButton = document.getElementById("nextTestimony");
let currentTestimony = 0;

nextButton.addEventListener("click", () => {
  testimonies[currentTestimony].style.transform = `translateX(-${
    100 * (currentTestimony + 1)
  }%)`;
  currentTestimony = (currentTestimony + 1) % testimonies.length;
  testimonies[currentTestimony].style.transform = `translateX(-${
    100 * currentTestimony
  }%)`;
});
