  lucide.createIcons();

  const arrows = document.querySelectorAll(".arrowbtn");
  const answers = document.querySelectorAll(".ansdiv");

  arrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {

      answers.forEach((ans, i) => {
        if (i === index) {
          ans.classList.toggle("hidden");
          arrow.classList.toggle("rotate-180");
        } else {
          ans.classList.add("hidden");
          arrows[i].classList.remove("rotate-180");
        }
      });

    });
  });