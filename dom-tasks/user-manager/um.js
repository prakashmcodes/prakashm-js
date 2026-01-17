const nameInput = document.getElementById("name-input");
const roleInput = document.getElementById("role-input");
const button = document.getElementById("enter-button");


const cardsContainer = document.getElementById("cards-container");


function createUserCard(name, role) {
  const card = document.createElement("div");
  card.className =
    "m-5 rounded p-4 flex justify-between items-center";

  
  if (role.toLowerCase() === "developer") {
    card.classList.add("bg-green-300");
  } else {
    card.classList.add("bg-white");
  }

  const infoDiv = document.createElement("div");

  const nameEl = document.createElement("h1");
  nameEl.textContent = name;
  nameEl.className = "text-2xl font-medium";

  const roleEl = document.createElement("h2");
  roleEl.textContent = role;
  roleEl.className = "text-xl text-gray-900";

  infoDiv.append(nameEl, roleEl);

  const removeBtn = document.createElement("p");
  removeBtn.textContent = "x";
  removeBtn.className =
    "text-2xl font-semibold bg-red-500 px-2 cursor-pointer hover:bg-red-600";

  removeBtn.addEventListener("click", () => {
    card.remove();
  });

  card.append(infoDiv, removeBtn);

  return card;
}


button.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const role = roleInput.value.trim();

  if (!name || !role) return;

  const userCard = createUserCard(name, role);
  cardsContainer.appendChild(userCard);

  
  nameInput.value = "";
  roleInput.value = "";
});