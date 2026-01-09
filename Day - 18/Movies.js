let moviesContainer = document.getElementById("movies-container");
let API_KEY="42148daa"
let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");

console.log(searchInput)
console.log(searchBtn)

function displayMovies(movies) {
    moviesContainer.innerHTML = "";

    movies.map((movie)=>{
        moviesContainer.innerHTML +=`
        <div class="rounded bg-white shadow hover:scale-105 trasition cursor-pointer"
        onClick = "getMovieDetails('${movie.imdb}')"
        >
        <img
          src="${movie.Poster}"
          class="rounded h-64 w-full object-cover"
          />
          <div class="p-3">
            <h3 class="font-bold text-sm">${movie.Title}</h3>
            <p class="text-xs text-gray-500">${movie.Year}</p>
            </div>
          </div>
          `
           ;
    })
}

async function loadDefultMovies() {
    moviesContainer.innerHTML=""

    try{
      let res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=all`);
      let data = await res.json();
      console.log(data)
      if (data.Response === "False") {
        moviesContainer.innerHTML="<p class='text-red-500'>No Movies found...</p>"
      }
      displayMovies(data.Search)
    } catch (error) {
        console.log("something went wrong")
    }
}

window.addEventListener("load", () => {
    loadDefultMovies()
})

async function moviesBasedOnSearch() {
    let search = searchInput.value.trim();

    moviesContainer.innerHTML = ""

    try {
        let res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
        let data = await res.json();

        console.log(data)
      if (data.Response === "False") {
        moviesContainer.innerHTML="<p class='text-red-500'>No Movies found...</p>"
      }
      displayMovies(data.Search)
        

    } catch (error) {
        console.log("Some thing went wrong")
    }
}

searchBtn.addEventListener("click", () => {
    moviesBasedOnSearch()
})

async function getMovieDetails(id) {
    try {
        let res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
        let data = await res.json()
        console.log()
    }catch (error) {
        console.log("Something went wrong")
    }
    
}