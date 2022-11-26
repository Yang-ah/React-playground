function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <h3>{title}</h3>
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
