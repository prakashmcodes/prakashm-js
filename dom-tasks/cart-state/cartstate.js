const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

let count = 0;

function updateUI() {
  countEl.textContent = count;

  if (count === 0) {
    countEl.classList.add("text-red-500");
} else {
      countEl.classList.remove("text-red-500");
      countEl.classList.add("text-green-500");
  }
}

incBtn.addEventListener("click", () => {
  count++;
  updateUI();
});

decBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateUI();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
});

updateUI(); 