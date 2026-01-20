const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const errEl = document.getElementById("err");

addBtn.addEventListener("click", addItem);

function addItem() {
  const value = input.value.trim();
  if (value === ""){
    errEl.classList.remove("hidden");
    return;
  }

  errEl.classList.add("hidden");
  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center bg-white/20 px-4 py-2 rounded-lg";

  const span = document.createElement("span");
  span.textContent = value;

  const actions = document.createElement("div");
  actions.className = "flex gap-x-3";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "cursor-pointer";

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "cursor-pointer";

  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit item:", span.textContent);
    if (newText) span.textContent = newText;
  });

  delBtn.addEventListener("click", () => {
    li.remove();
  });

  actions.appendChild(editBtn);
  actions.appendChild(delBtn);

  li.appendChild(span);
  li.appendChild(actions);
  list.appendChild(li);

  input.value = "";
}
