fetch('https://api.themoviedb.org/3/trending/all/day?api_key=ffa9195d30c8bc81c4e08e99757074da')
.then((response) => response.json())
.then((response) =>{
    console.log(response);

    for(var i = 1; i<=20; i++){

document.getElementById("trend"+ i).src = "https://image.tmdb.org/t/p/w200" + response.results[i-1].poster_path


    }


})
.catch(err =>{
    console.log(err);
})

fetch('https://api.themoviedb.org/3/movie/popular?api_key=ffa9195d30c8bc81c4e08e99757074da&language=en-US&page=1')
.then((response) => response.json())
.then((response) =>{
    console.log(response);

    for(var i = 1; i<=20; i++){

document.getElementById("top"+ i).src = "https://image.tmdb.org/t/p/w200" + response.results[i-1].poster_path


    }


})
.catch(err =>{
    console.log(err);
})


trailerImg = ["img2", "img3", "img4", "img5" , "img1" ]


function search(){
fetch('https://www.omdbapi.com/?&apikey=e6328603&s=' + movieInput.value)
.then((response) => response.json())
.then((response) =>{

    localStorage.setItem("currentMovie",response.Search[0].Title )
localStorage.setItem("currentImdb", response.Search[0].imdbID )
localStorage.setItem("currentType", response.Search[0].imdbID )
    console.log(response);
    movieInput.value = "";
    window.location = "movie.html"
})
.catch(err =>{
    console.log(response);
})

}

poster()

function poster(){

fetch('https://api.themoviedb.org/3/find/'+ localStorage.getItem("currentImdb")+'?api_key=ffa9195d30c8bc81c4e08e99757074da&language=en-US&external_source=imdb_id')
.then((response) => response.json())
.then((response) =>{
mp1.src = "https://image.tmdb.org/t/p/w400" +  response.movie_results[0].poster_path

document.getElementById("body2").src = "https://image.tmdb.org/t/p/w400" +  response.movie_results[0].backdrop_path

imdbR.innerHTML = (response.movie_results[0].vote_average) + "/10"


movieName.innerHTML = response.movie_results[0].title
    console.log(response);

    story.innerHTML =  response.movie_results[0].overview

})

}

count = 1

setInterval(() => {

    hard1.src = "/Images/" + trailerImg[count] + ".png"
    count++;

    if(count == 4){
        count = 1
    }
    
}, 2000);


function home(){

    window.location = "index.html"
}




