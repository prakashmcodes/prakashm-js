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
