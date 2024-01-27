export default function ToggleButton({ isOpen, onSetOpen }) {
  return (
    <button className="btn-toggle" onClick={onSetOpen}>
      {isOpen ? "–" : "+"}
    </button>
  );
}
