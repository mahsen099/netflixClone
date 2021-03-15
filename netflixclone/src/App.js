import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} id="movies" />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} id="trending" />
      <Row title="TRENDING Now" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries} id="documentary"
      />
    </div>
  );
}
export default App;
