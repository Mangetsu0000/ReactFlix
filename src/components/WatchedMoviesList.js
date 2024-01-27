import WatchedMovie from "./WatchedMovie";

export default function WatchedMoviesList({ watched, onDeleteWatchedMovie }) {
  return (
    <ul className="list">
      {watched.map((_movie) => (
        <WatchedMovie
          movieObj={_movie}
          key={_movie.imdbID}
          onDeleteWatchedMovie={onDeleteWatchedMovie}
        />
      ))}
    </ul>
  );
}
