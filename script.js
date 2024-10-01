let key = "448ea7fc";

function search() {
    let movie = document.getElementById("searchbar").value;
    console.log(movie);

    const htmlRequest = new XMLHttpRequest();
    const link = "http://www.omdbapi.com/?apikey=448ea7fc&t=" + movie;

    htmlRequest.open("GET", link);
    htmlRequest.send();
    htmlRequest.responseType = "json";

    htmlRequest.onload = function () {
        console.log(htmlRequest.response);

        const content = document.getElementById("content");
        const imageTag = document.createElement("img")
        imageTag.src = htmlRequest.response.Poster;

        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        content.appendChild(imageTag);

        const title = document.getElementById("title");
        title.innerHTML = htmlRequest.response.Title;

        const year = document.getElementById("year");
        year.innerHTML = htmlRequest.response.Year;

        const plot = document.getElementById("plot");
        plot.innerHTML = htmlRequest.response.Plot;

        const runtime = document.getElementById("runtime");
        runtime.innerHTML = htmlRequest.response.Runtime;

        const imdbRating = document.getElementById("imdbRating");
        imdbRating.innerHTML = htmlRequest.response.imdbRating;

        const genre = document.getElementById("genre");
        genre.innerHTML = htmlRequest.response.Genre;

        const cast = document.getElementById("cast");
        cast.innerHTML = htmlRequest.response.Actors;

        const director = document.getElementById("director");
        director.innerHTML = htmlRequest.response.Director;

        const country = document.getElementById("country");
        country.innerHTML = htmlRequest.response.Country;

        const language = document.getElementById("language");
        language.innerHTML = htmlRequest.response.Language;

        const released = document.getElementById("released");
        released.innerHTML = htmlRequest.response.Released;
    }

}
