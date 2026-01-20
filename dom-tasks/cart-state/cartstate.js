const cartList = document.getElementById("cartList");
const countEl = document.getElementById("count");
const addButtons = document.querySelectorAll(".add-btn");
const clearAllBtn = document.getElementById("clearall")

let count = 0;

addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const productName = btn.parentElement.dataset.name;

    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-slate-800 px-3 py-2 rounded-lg";

    const span = document.createElement("span");
    span.textContent = productName;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "✕";
    removeBtn.className = "text-red-400 hover:text-red-500 cursor-pointer";

    removeBtn.addEventListener("click", () => {
      li.remove();
      count--;
    });

    clearAllBtn.addEventListener("click", () => {
  cartList.innerHTML = "";
  count = 0;
  updateCount();
});
    li.appendChild(span);
    li.appendChild(removeBtn);
    cartList.appendChild(li);

    count++;
    updateCount();
  });
});

function updateCount() {
  countEl.textContent = count;
  countEl.className = count === 0 ? "text-red-400" : "text-green-400";
}
