let searchString  = '';

let searchBtn = document.getElementById("search-button");

let mainEl = document.querySelector("main");


searchBtn.addEventListener("click", async function(){
    searchString  = document.getElementById("input").value;
    const url = `https://www.omdbapi.com/?apikey=49653bc0&s=${searchString}`;
    const response = await fetch(url)
    const data = await response.json()
    
    mainEl.innerHTML = "";
    
    let searchResults = data.Search;
    
    searchResults.map( movie => fetchMovieResult(movie.imdbID));
})

    let watchList = [];
    
    let retrievedPerson = JSON.parse(localStorage.getItem('watchList'));
    
    document.addEventListener("click", function(e){
        
        let elementClass = e.target.className;
        if (elementClass == 'navigate-watch') {
        window.location.href = "watchlist.html";
        }
        
        if(e.target.dataset.mid){  
            watchList.push(e.target.dataset.mid);
            localStorage.setItem('watchList', JSON.stringify(watchList));
        }
        
    })

async function fetchMovieResult(movieId){
        const url = `https://www.omdbapi.com/?apikey=49653bc0&i=${movieId}`;
        const response = await fetch(url)
        const data = await response.json()
        mainEl.innerHTML += `
        <div class="movie-solo">
                <div class="movie">
                    <img class="movie-poster" src="${data.Poster}">
                    <div class="movie-data">
                        
                        <div class="movie-header">
                            <h4 class="movie-title">${data.Title}</h4>
                        
                                <img class="movie-star" src="images/star.png">
                                <p class="movie-rating">${data.Ratings[0].Value}</p>
                        </div>
                        
                        <div class="movie-info">
                            <p class="movie-time">${data.Runtime}</p>
                            <p class="movie-genre">${data.Genre}</p>
                            <div class="watch">
                                <img class="movie-plus" src="images/plus.png" data-mid="${movieId}">
                                <p class="movie-watchlist">Watchlist</p>
                            </div>
                        </div>
                        <p class="movie-des">${data.Plot}</p>
                    </div>
                </div>
                <div class="spacer"></div>
            </div>
        `    
    }