const input = document.getElementById("input7");
const movieList = document.getElementById("movieList");
const movies = movieList.getElementsByTagName("li");

input.addEventListener("keyup", () => {
  const searchValue = input.value.toLowerCase();

  for (let i = 0; i < movies.length; i++) {
    const movieText = movies[i].textContent.toLowerCase();

    if (movieText.includes(searchValue)) {
      movies[i].style.display = "block";
    } else {
      movies[i].style.display = "none";
    }
  }
});
