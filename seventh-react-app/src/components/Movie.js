import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <div>
      <h3>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h3>
      <p>Genres : </p>
      <ul>
        {genres?.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <img src={coverImg} alt={title} />
      <p>{summary}</p>
    </div>
  );
}

export default Movie;
