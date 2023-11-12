const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePosterUrl = document.querySelector(".userInputPosterUrl");
const btn = document.querySelector(".button");
const movieTitleToDisplay = document.querySelector(".favoriteMovieTitle");

let titleInStorage = localStorage.getItem("title");
let imageUrlInStorage = localStorage.getItem("imageUrl");

if (titleInStorage && imageUrlInStorage) {
  movieTitleToDisplay.textContent = titleInStorage;
  container.style.backgroundImage = `url('${imageUrlInStorage}')`;
} else {
}

btn.addEventListener("click", () => {
  let movieTitleInput = movieTitle.value;
  let posterUrlInput = moviePosterUrl.value;
  localStorage.setItem("title", movieTitleInput);
  localStorage.setItem("imageUrl", posterUrlInput);
  movieTitleToDisplay.textContent = movieTitleInput;
  container.style.backgroundImage = `linear-gradient(
      rgba(173, 216, 230, 0.747),
      rgba(169, 169, 169, 0.745)
    ),
    url('${posterUrlInput}')`;
  movieTitle.value = "";
  moviePosterUrl.value = "";
});
