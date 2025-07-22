import { Row } from "./Row";
import type { Guess } from "./Tile";

interface BoardProps {
  guesses: Guess[][];
}

export const Board = ({ guesses }: BoardProps) => {
  const rows = Array.from({ length: 6 }).map((_, i) => (
    <Row key={i} guess={guesses[i]} />
  ));

  return (
    <div className="flex-3 flex flex-col items-center justify-center w-full h-full">
      <div className="w-full max-w-md grid gap-2 p-4">{rows}</div>
    </div>
  );
};
