import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import styles from "./Details.module.css";

function Details() {
  const [movie, setMoive] = useState("");
  const [loading, setloading] = useState(true);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMoive(json.data.movie);
    setloading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div className={styles.detail}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title_long}</h1>
          <p>genres : </p>
          <ul>
            {movie?.genres?.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <img src={movie.medium_cover_image} alt={id} />
          <p>{movie.rating}</p>
          <p>{movie.runtime}</p>
        </div>
      )}
    </div>
  );
}

export default Details;
