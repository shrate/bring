function activateMovies() {
    document.getElementById("movies").classList.remove("movies-inactive");
    document.getElementById("movies").classList.add("movies-active");
    document.getElementById("movies-anchor").classList.add("link-active");

    document.getElementById("tv-shows").classList.remove("tv-shows-active");
    document.getElementById("tv-shows").classList.add("tv-shows-inactive");
    document.getElementById("tv-shows-anchor").classList.remove("link-active");

}

function activateTVShows() {
    document.getElementById("tv-shows").classList.remove("tv-shows-inactive");
    document.getElementById("tv-shows").classList.add("tv-shows-active");
    document.getElementById("tv-shows-anchor").classList.add("link-active");
    document.getElementById("movies").classList.remove("movies-active");
    document.getElementById("movies").classList.add("movies-inactive");
    document.getElementById("movies-anchor").classList.remove("link-active");


}