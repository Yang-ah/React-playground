import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.wrap}>
        <h2>{title}</h2>
        <div className={styles.genres}>
          <p>Genres :&nbsp;</p>
          <ul>
            {genres?.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
        <img src={coverImg} alt={title} />
        <p className={styles.summary}>{summary}</p>
      </div>
    </Link>
  );
}

export default Movie;
