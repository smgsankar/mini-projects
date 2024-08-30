import { Add } from "../icons/Add";

export function FloatingActionButton({ onClick }) {
  return (
    <button
      className="absolute bottom-6 right-6 p-3 rounded-full bg-accent text-white shadow-lg"
      onClick={onClick}
    >
      <Add size={40} />
    </button>
  );
}
