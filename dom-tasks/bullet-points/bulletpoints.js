const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;

    const li = document.createElement("li"); 
  li.textContent = value;
  list.appendChild(li);            
  input.value = ""; 

});
