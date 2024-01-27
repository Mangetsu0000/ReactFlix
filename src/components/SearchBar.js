import { useRef } from "react";
import { useKey } from "../customHooks/useKey";

export default function SearchBar({ query, setQuery }) {
  const inpulEl = useRef(null);

  const cb = () => {
    if (document.activeElement === inpulEl) return;

    inpulEl.current.focus();
    setQuery("");
  };
  useKey("Enter", cb);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inpulEl}
    />
  );
}
