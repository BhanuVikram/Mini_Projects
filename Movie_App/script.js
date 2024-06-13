const API_KEY = "cf2aa6f5a2fe65b3fe2dd6b0513e9b2d";
const DISCOVER_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const contEl = document.querySelector(".container");
const inputEl = document.querySelector("input");

window.addEventListener("load", () => fetchMovies(DISCOVER_API));

function fetchMovies(API_URL) {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => displayMovies(data.results));
}

function displayMovies(movies) {
  contEl.innerHTML = "";
  movies.forEach((movie) => {
    let movieElement = prepareMovie(movie);
    contEl.appendChild(movieElement);
  });
}

function prepareMovie(movie) {
  let movieEl = document.createElement("div");
  movieEl.classList.add("movie");

  let imageEl = document.createElement("img");
  imageEl.src = IMG_PATH + movie.poster_path;
  imageEl.alt = movie.title;

  movieEl.appendChild(imageEl);

  let infoEl = document.createElement("div");
  infoEl.classList.add("info");

  let titleEl = document.createElement("h2");
  titleEl.classList.add("title");
  titleEl.innerText = movie.title;

  let ratingEl = document.createElement("h2");
  ratingEl.classList.add("rating");
  ratingEl.classList.add(getClassByRating(movie.vote_average));
  ratingEl.innerText = movie.vote_average;

  infoEl.appendChild(titleEl);
  infoEl.appendChild(ratingEl);
  movieEl.appendChild(infoEl);

  let overviewContEl = document.createElement("div");
  overviewContEl.classList.add("overview-cont");

  let overviewTitleEl = document.createElement("h3");
  overviewTitleEl.classList.add("overview-title");
  overviewTitleEl.innerText = "Overview";

  let overviewTextEl = document.createElement("p");
  overviewTextEl.classList.add("overview");
  overviewTextEl.innerText = movie.overview;

  overviewContEl.appendChild(overviewTitleEl);
  overviewContEl.appendChild(overviewTextEl);
  movieEl.appendChild(overviewContEl);

  return movieEl;
}

inputEl.addEventListener("keyup", function () {
  let searchQuery = inputEl.value;
  if (searchQuery !== "") {
    fetchMovies(SEARCH_API + searchQuery);
  } else {
    fetchMovies(API_URL);
  }
});

function getClassByRating(rating) {
  if (rating >= 8) {
    return "green";
  } else if (rating >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
