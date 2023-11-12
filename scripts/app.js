const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const movieReleaseYear = document.querySelector(".userInputYear");
const moviePosterUrl = document.querySelector(".userInputPosterUrl");
const btn = document.querySelector(".button");
//to display
const movieTitleToDisplay = document.querySelector(".favoriteMovieTitle");
const movieReleaseYearToDisplay = document.querySelector(".movieReleaseYear");

//get from storage
let titleInStorage = localStorage.getItem("title");
let yearInStorage = localStorage.getItem("releaseYear");
let imageUrlInStorage = localStorage.getItem("imageUrl");

//display
if (titleInStorage && yearInStorage && imageUrlInStorage) {
  movieTitleToDisplay.textContent = titleInStorage;
  movieReleaseYearToDisplay.textContent = `(${yearInStorage})`;
  container.style.backgroundImage = `linear-gradient(
      rgba(173, 216, 230, 0.747),
      rgba(169, 169, 169, 0.745)
    ), url('${imageUrlInStorage}')`;
}

//event listner
btn.addEventListener("click", () => {
  let movieTitleInput = movieTitle.value;
  let movieReleaseYearInput = movieReleaseYear.value;
  let posterUrlInput = moviePosterUrl.value;

  localStorage.setItem("title", movieTitleInput);
  localStorage.setItem("releaseYear", movieReleaseYearInput);
  localStorage.setItem("imageUrl", posterUrlInput);

  movieTitleToDisplay.textContent = movieTitleInput;

  container.style.backgroundImage = `linear-gradient(
      rgba(173, 216, 230, 0.747),
      rgba(169, 169, 169, 0.745)
    ),
    url('${posterUrlInput}')`;

  movieTitle.value = "";
  releaseYear.value = "";
  moviePosterUrl.value = "";

  if (!posterUrlInput) {
    container.style.backgroundImage = `linear-gradient(
      rgba(173, 216, 230, 0.747),
      rgba(169, 169, 169, 0.745)
    ),
    url("../images/image1.jpg")`;
  }
});
