const API_KEY = "api_key=0a2c754df24f03f4197199045aedf7de";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const movie = document.getElementById("movie");
getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.results), showMovies(data.results);
    });
}

function showMovies(data) {
  row.innerHTML = "";

  data.forEach(row => {
    const { title, vote_average, overview, poster_path } = row;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = ` <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wCvTSaIQEweNdsU98usvt9re7fq.jpg"
    />
                  </a>
   </div>
   <div class="list-content">
   <h2>
   <a href="single-movie.html" class="text-black"
    >Avengers: Infinity War</a
   >
   </h2>
   <span class="list-meta">
   <span class="list-meta-item"
    ><i class="fas fa-clock"></i> 2018</span
   >
   <a href="#" class="list-meta-item"
    ><i class="fas fa-star"></i> 8.8</a
    >
   </span>
   <p>
   As the Avengers and their allies have continued to protect the
   world from threats too large for any one hero to handle, a new
   danger has emerged from the cosmic shadows: Thanos.
   </p>
   </div>

    `;
    row.appendChild();
  });
}
