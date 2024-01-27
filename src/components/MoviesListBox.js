export default function MoviesListBox({ children, isOpen }) {
  return <>{isOpen && children}</>;
}
