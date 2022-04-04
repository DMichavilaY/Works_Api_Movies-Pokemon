
const urlApi="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgPaths="https://image.tmdb.org/t/p/w1280";
const UrlSearch="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const search= document.getElementById("search");
const form= document.getElementById("form");
getMovies(urlApi);

 async function getMovies (url){
 	const response= await fetch(url);
 	const Dataresponse=await response.json();
 	console.log(Dataresponse);
 	showMovies(Dataresponse.results);

 }

 function showMovies(movies){
 	main.innerHTML="";

 	movies.forEach((movie)=>{
 		const movie_Elm= document.createElement("div");
 		movie_Elm.classList.add("movie");
 		movie_Elm.innerHTML=`<img  src="${imgPaths + movie.poster_path}" alt="${movie.title}"></img>
 							<div class="info">
 								<h4> ${movie.title}</h4>
 								<span class=${vote_range(movie.vote_average)}> ${movie.vote_average}</span>
 							</div>
 							<div class="over">
 								<h5>Overview</h5>${movie.overview}
 							</div>`;

 		main.appendChild(movie_Elm);
	});
 
}
function vote_range(vote){
	if(vote>=7.5){
		return "green";
	} else if(vote>=5){
		return "orange";
	} else{
		return "red";
	}
}

form.addEventListener("submit",(e)=>{
	e.preventDefault();
 	const searchfound= search.value;

 	if (searchfound){
 		getMovies(UrlSearch + searchfound);
 		search.value="";
 	}
});

