const bodycol = document.getElementById("bodycol");
const nameInput = document.getElementById("name-input");
const card = document.querySelector(".card-container");
const alertp = document.getElementById("alert-p");
const enterButton = document.getElementById("enter-button");
const greetText = document.getElementById("greet-text");
const inputSection = document.getElementById("input-section");
const greetingSection = document.getElementById("greeting-section");
const randomThemeBtn = document.getElementById("random-theme");
const resetButton = document.getElementById("reset-button");
const themeToggle = document.getElementById("theme-toggle");

nameInput.addEventListener("input", () => {
  nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, "");
});

const themes = [
  {
    body: "bg-gray-700",
    card: "bg-gray-700",
    button: "bg-purple-500 hover:bg-purple-600",
    shadow: "shadow-2xl",
  },
  {
    body: "bg-blue-500",
    card: "bg-blue-500",
    button: "bg-blue-300 hover:bg-blue-400",
    shadow: "shadow-2xl",
  },
  {
    body: "bg-red-500",
    card: "bg-red-500",
    button: "bg-red-300 hover:bg-red-400",
    shadow: "shadow-2xl",
  },
  {
    body: "bg-violet-500",
    card: "bg-violet-500",
    button: "bg-violet-300 hover:bg-violet-400",
    shadow: "shadow-2xl",
  },
  {
    body: "bg-green-500",
    card: "bg-green-500",
    button: "bg-green-300 hover:bg-green-400",
    shadow: "shadow-2xl",
  },
  {
    body: "bg-indigo-500",
    card: "bg-indigo-500",
    button: "bg-indigo-300 hover:bg-indigo-400",
    shadow: "shadow-2xl",
  },
  {
    body: "bg-pink-500",
    card: "bg-pink-500",
    button: "bg-pink-300 hover:bg-pink-400",
    shadow: "shadow-2xl",
  },
  {
    body: "bg-orange-500",
    card: "bg-orange-500",
    button: "bg-orange-300 hover:bg-orange-400",
    shadow: "shadow-2xl",
  },
];

function applyTheme(theme) {
  bodycol.className = bodycol.className.replace(/bg-\w+-\d+/g, "");
  bodycol.classList.add(theme.body);

  card.className = card.className.replace(/bg-\w+-\d+/g, "");
  card.classList.add(theme.card);

  randomThemeBtn.className = randomThemeBtn.className.replace(
    /bg-\w+-\d+ hover:bg-\w+-\d+/g,
    ""
  );
  randomThemeBtn.className +=
    " " +
    theme.button +
    " text-black px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2";
}

enterButton.addEventListener("click", () => {
  const nameValue = nameInput.value.trim();

  if (nameValue === "") {
    alertp.textContent = "Please Enter Your Name";
    alertp.classList.remove("hidden");
    return;
  }

  alertp.classList.add("hidden");

  greetText.innerHTML = `
        Hello <span class="text-yellow-300 font-bold mb-4">${nameValue}</span>,<br>
        Welcome to CyberDude Networks`;

  inputSection.classList.add("hidden");
  greetingSection.classList.remove("hidden");

  const randomIndex = Math.floor(Math.random() * themes.length);
  applyTheme(themes[randomIndex]);
});

nameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    enterButton.click();
  }
});

randomThemeBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * themes.length);
  applyTheme(themes[randomIndex]);
});

resetButton.addEventListener("click", () => {
  nameInput.value = "";
  alertp.classList.add("hidden");
  alertp.textContent = "";
  greetText.textContent = "";
  inputSection.classList.remove("hidden");
  greetingSection.classList.add("hidden");

  applyTheme(themes[0]);
  nameInput.focus();
});