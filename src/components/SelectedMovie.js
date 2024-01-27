import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
import { useKey } from "../customHooks/useKey";

const KEY = "728fe1bd";

const SelectedMovie = ({
  selectedMovieId,
  onCloseMovie,
  onAddWatchedMovie,
  watched,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [userRating, setUserRating] = useState(0);

  const isWatched = watched
    .map((_movie) => _movie.imdbID)
    .includes(selectedMovieId);

  const watchedMovieRating = watched.find(
    (_movie) => _movie.imdbID === selectedMovieId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovieId}`
        );
        if (!res.ok)
          throw new Error(
            "something went wrong while fetchign the selected movie"
          );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [selectedMovieId]);

  useKey("Escape", onCloseMovie);

  const handleAdd = () => {
    const watchedMovieToAdd = {
      imdbID: selectedMovieId,
      title,
      year,
      poster,
      userRating,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
    };
    onAddWatchedMovie(watchedMovieToAdd);
    onCloseMovie();
  };

  useEffect(() => {
    if (!title) return;
    document.title = `MOVIE | ${title}`;

    return () => {
      document.title = "ReactFlix";
      // the return function remembers the variable 'title' thanks to closure
      console.log(`cleanup function for movie ${title}`);
    };
  }, [title]);
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`poster of ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>

              <p>
                <span>⭐</span>
                {imdbRating}
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {isWatched ? (
                <p>
                  You've rated this movie {watchedMovieRating} <span>⭐</span>
                </p>
              ) : (
                <StarRating
                  maxRating={10}
                  size={24}
                  onSetMovieRating={setUserRating}
                />
              )}
              {userRating > 0 && (
                <button className="btn-add" onClick={handleAdd}>
                  + Add to list
                </button>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default SelectedMovie;
