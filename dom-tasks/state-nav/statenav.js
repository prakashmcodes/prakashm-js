const navs = document.getElementById("navigation");
const navA = navs.getElementsByClassName("nav-a");

for (let i = 0; i < navA.length; i++) {
  navA[i].addEventListener("click", function () {
    const active = document.querySelector(".text-blue-600.underline");

    if (active) {
      active.classList.remove("text-blue-600", "underline");
      active.classList.add("text-gray-700");
    }

    this.classList.remove("text-gray-700");
    this.classList.add("text-blue-600", "underline");
  });
}
