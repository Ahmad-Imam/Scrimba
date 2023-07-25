let searchString  = '';

let searchBtn = document.getElementById("search-button");

let mainEl = document.querySelector("main");

let watchList = []
getWatchList();

function getWatchList(){
         watchList = JSON.parse(localStorage.getItem('watchList'));
        if(watchList){
            console.log(watchList.length)
            mainEl.innerHTML = ''
            watchList.forEach((item)=>{
                        fetchMovieResult(item)
                    })
                    console.log(watchList)
            }else {
                mainEl.innerHTML = `
                <div class="empty-home">
                
                <p>Your Watchlist is Empty</p>
            </div>
                `
            }  
        }

    document.addEventListener("click", function(e){
        let elementClass = e.target.className;
        if (elementClass == 'navigate-watch') {
            console.log(elementClass);
            window.location.href = "index.html";
        }
        if (elementClass == 'clear') {
            console.log(elementClass);
            localStorage.clear();
        }
        if(e.target.dataset.mid){
            var movieIndex = watchList.indexOf(e.target.dataset.mid);
            watchList.splice(movieIndex, 1);
            localStorage.setItem('watchList', JSON.stringify(watchList));
            getWatchList(); 
            console.log(watchList.length)
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
                                <img class="movie-minus" src="images/minus.png" data-mid="${movieId}">
                                <p class="movie-watchlist">Remove</p>
                            </div>
                        </div>
                        <p class="movie-des">${data.Plot}</p>
                    </div>
                </div>
                <div class="spacer"></div>
            </div>
        `
    }