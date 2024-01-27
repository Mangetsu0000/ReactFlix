import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import NumResults from "./components/NumResults";
import WatchedMoviesBox from "./components/WatchedMoviesBox";
import MoviesListBox from "./components/MoviesListBox";
import MoviesList from "./components/MoviesList";
import WatchedMoviesList from "./components/WatchedMoviesList";
import Summary from "./components/Summary";
import Box from "./components/Box";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import SearchBar from "./components/SearchBar";
import SelectedMovie from "./components/SelectedMovie";
import { useMovies } from "./customHooks/useMovies";
import { useLocalStorage } from "./customHooks/useLocalStorage";

export default function App() {
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen1, setIsOpen1] = useState(true);
  const [query, setQuery] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorage([], "watched");

  const handleSetOpen = (setter) => {
    setter((_copen) => !_copen);
  };

  const handleAddWatched = (movie) =>
    setWatched((_cWatchedMovies) => [..._cWatchedMovies, movie]);

  const handleDeleteWatched = (watchedMovieID) => {
    setWatched((_cWatchedMovies) =>
      _cWatchedMovies.filter((_movie) => _movie.imdbID !== watchedMovieID)
    );
    setSelectedMovieId(null);
  };

  const handleSelectMovie = (id) => {
    setSelectedMovieId((_cSelectedMovieId) =>
      _cSelectedMovieId === id ? null : id
    );
  };
  const handleCloseMovie = () => {
    setSelectedMovieId(null);
  };

  return (
    <>
      <Navbar>
        <SearchBar query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box isOpen={isOpen1} onSetOpen={() => handleSetOpen(setIsOpen1)}>
          <MoviesListBox isOpen={isOpen1}>
            {isLoading ? (
              <Loader />
            ) : error ? (
              <ErrorMessage message={error} />
            ) : (
              <MoviesList movies={movies} onSelectMovie={handleSelectMovie} />
            )}
          </MoviesListBox>
        </Box>
        <Box isOpen={isOpen2} onSetOpen={() => handleSetOpen(setIsOpen2)}>
          {selectedMovieId ? (
            <SelectedMovie
              selectedMovieId={selectedMovieId}
              onCloseMovie={handleCloseMovie}
              onAddWatchedMovie={handleAddWatched}
              watched={watched}
              onDeleteWatchedMovie={handleDeleteWatched}
            />
          ) : (
            <WatchedMoviesBox isOpen={isOpen2}>
              <Summary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatchedMovie={handleDeleteWatched}
              />
            </WatchedMoviesBox>
          )}
        </Box>
      </Main>
    </>
  );
}
