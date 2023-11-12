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
let yearInStorage = localStorage.getItem("year");
let imageUrlInStorage = localStorage.getItem("imageUrl");

//set display values
if (titleInStorage) {
  movieTitleToDisplay.textContent = `"${titleInStorage}"`;
} else if (yearInStorage) {
  movieReleaseYearToDisplay.textContent = `(${yearInStorage})`;
} else if (imageUrlInStorage) {
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

  //set local storage
  localStorage.setItem("title", movieTitleInput);
  localStorage.setItem("year", movieReleaseYearInput);
  localStorage.setItem("imageUrl", posterUrlInput);

  movieTitleToDisplay.textContent = `"${movieTitleInput}"`;
  movieReleaseYearToDisplay.textContent = `(${movieReleaseYearInput})`;

  container.style.backgroundImage = `linear-gradient(
      rgba(173, 216, 230, 0.747),
      rgba(169, 169, 169, 0.745)
    ),
    url('${posterUrlInput}')`;

  movieTitle.value = "";
  movieReleaseYear.value = "";
  moviePosterUrl.value = "";

  if (!posterUrlInput) {
    container.style.backgroundImage = `linear-gradient(
      rgba(173, 216, 230, 0.747),
      rgba(169, 169, 169, 0.745)
    ),
    url("../images/image1.jpg")`;
  }
});
