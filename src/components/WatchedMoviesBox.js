export default function WatchedMoviesBox({ children, isOpen }) {
  return <>{isOpen && children}</>;
}
