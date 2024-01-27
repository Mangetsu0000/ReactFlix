export default function Movie({ movieObj, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movieObj.imdbID)} key={movieObj.imdbID}>
      <img src={movieObj.Poster} alt={`${movieObj.Title} poster`} />
      <h3>{movieObj.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movieObj.Year}</span>
        </p>
      </div>
    </li>
  );
}
