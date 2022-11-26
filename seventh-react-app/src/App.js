import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json.data.movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>Movies</h1>
      {loading ? <h2>Loading...</h2> : null}
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3> {movie.title_long}</h3>
          <p>genres : </p>
          <ul>
            {movie.genres
              ? movie.genres.map((genre) => <li key={genre}>{genre}</li>)
              : null}
          </ul>
          <img src={movie.medium_cover_image} />
          <p>{movie.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
