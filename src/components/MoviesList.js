import Movie from "./Movie";

export default function MoviesList({ movies, onSelectMovie }) {
  return (
    <ul className="list">
      {movies?.map((_movie) => (
        <Movie
          onSelectMovie={onSelectMovie}
          movieObj={_movie}
          key={_movie.imdbID}
        />
      ))}
    </ul>
  );
}
