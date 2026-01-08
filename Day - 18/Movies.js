let moviesContainer = document.getElementById("movies-container")

function displayMovies(movies) {
    moviesContainer.innerHTML = "";

    movies.map(()=>{
        moviesContainer.innerHTML +=""
    })
}