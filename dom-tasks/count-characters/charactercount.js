const textInput = document.getElementById("textInput");
const countChar = document.getElementById("countdiv");

const stats = {
  charWithSpace: document.getElementById("charWithSpace"),
  charWithoutSpace: document.getElementById("charWithoutSpace"),
  words: document.getElementById("words"),
  paragraphs: document.getElementById("paragraphs"),
  letters: document.getElementById("letters"),
  spaces: document.getElementById("spaces"),
  lines: document.getElementById("lines"),
  readingTime: document.getElementById("readingTime"),
};

const MAX_CHARS = 200;

countChar.classList.remove("hidden");
resetStats();

textInput.addEventListener("input", updateStats);

function updateStats() {
  let text = textInput.value;

  if (text.length > MAX_CHARS) {
    textInput.value = text.slice(0, MAX_CHARS);
    text = textInput.value;
  }

  const trimmedText = text.trim();

  const characters = text.length;
  const charactersWithoutSpaces = text.replace(/\s/g, "").length;
  const words = trimmedText ? trimmedText.split(/\s+/).length : 0;
  const paragraphs = trimmedText ? trimmedText.split(/\n+/).length : 0;
  const letters = (text.match(/[a-zA-Z]/g) || []).length;
  const spaces = (text.match(/ /g) || []).length;
  const lines = text ? text.split("\n").length : 0;
  const readingTime = words === 0 ? 0 : Math.ceil(words / 200);

  stats.charWithSpace.textContent = characters;
  stats.charWithoutSpace.textContent = charactersWithoutSpaces;
  stats.words.textContent = words;
  stats.paragraphs.textContent = paragraphs;
  stats.letters.textContent = letters;
  stats.spaces.textContent = spaces;
  stats.lines.textContent = lines;
  stats.readingTime.textContent = readingTime;
}


function resetStats() {
  stats.charWithSpace.textContent = 0;
  stats.charWithoutSpace.textContent = 0;
  stats.words.textContent = 0;
  stats.paragraphs.textContent = 0;
  stats.letters.textContent = 0;
  stats.spaces.textContent = 0;
  stats.lines.textContent = 0;
  stats.readingTime.textContent = 0;
}

document.getElementById("pasteBtn").onclick = async () => {
  const text = await navigator.clipboard.readText();
  textInput.value = text.slice(0, MAX_CHARS);
  updateStats();
};

document.getElementById("clearBtn").onclick = () => {
  textInput.value = "";
  resetStats();
};


const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  themeToggle.innerHTML = `<i data-lucide="sun"></i>`;
} else {
  themeToggle.innerHTML = `<i data-lucide="moon"></i>`;
}

lucide.createIcons();

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");

  const isDark = html.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  themeToggle.innerHTML = isDark
    ? `<i data-lucide="sun"></i>`
    : `<i data-lucide="moon"></i>`;

  lucide.createIcons();
});
