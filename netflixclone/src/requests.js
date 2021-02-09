const API_KEY= "c231744330c0f2443dd391149979bc14";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActingMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `discover/movies?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movies?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `discover/movies?api_keey${API_KEY}&with_genres10749`,
    fetchDocumentaries: `discover/movies?api_key${API_KEY}&with_genres=99`,
  };
  
  export default requests;
  