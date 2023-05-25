/* Variavel para armazenar a chave da API Movies */
const API_KEY = '94d6ddd93db63868c339b12a2610f37e';

/* Função Assíncrona para buscar os filmes */
async function getMovies() {

    try {
        //cria uma variavel para armazenar a resposta do link
        let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        //cria uma variavel para armezar a resposta em JSON
        let data = await response.json();
        //JSON convertido para HTML
        displayMovie(data.results);
    
    }   catch (error) {
        console.log(error);
    }
}

//cria função para mostrar os dados no html
function displayMovie(movies) {
    let moviesContainer = document.getElementById("moviesContainer");
    moviesContainer.innerHTML = "";
    
    movies.forEach(movie => {
        let movieElement = document.createElement('div');

        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <h2> ${movie.title} </h2>
        <img src="http://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
        <p> ${movie.overview} </p>
        `;

        moviesContainer.appendChild(movieElement);
    });
}
