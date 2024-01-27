export default function WatchedMovie({ movieObj, onDeleteWatchedMovie }) {
  return (
    <li key={movieObj.imdbID}>
      <img src={movieObj.poster} alt={`${movieObj.title} poster`} />
      <h3>{movieObj.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movieObj.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movieObj.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movieObj.runtime} min</span>
        </p>
      </div>
      <button
        className="btn-delete"
        onClick={() => onDeleteWatchedMovie(movieObj.imdbID)}
      >
        X
      </button>
    </li>
  );
}
