const API_KEY = "94d6ddd93db63868c339b12a2610f37e";

async function getMovies() {
   try {
    //criar uma variavel que recebe uma busca do site de filmes 
      let response = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

      //cria uma variável que armazena a reposta em formato de json
      let data = await response.json();

      //chama uma funçõa RESPONSAVEL POR MOSTRAR OS DADOS NO HTML PASSANDO 
      // O JSON DATA PARA ELA 
      displayMovies(data.results); 
   } catch (error) {
    console.log(error);
   }
}
        //função para mostrar os filmes 
function displayMovies(movies){
     let movieElement = document.getElementById('movieContainer');
     movieElement.innerHTML = "";
     movies.forEach(movie =>{
        movieElement.innerHTML = `<h2>${movie.title}</h2>`
    });
}