import { Tile, type Guess } from "./Tile";

interface RowProps {
  guess?: Guess[];
}

export const Row = ({ guess = [] }: RowProps) => {
  const tiles = Array.from({ length: 5 }).map((_, i) => (
    <Tile key={i} {...guess[i]} delay={i * 500} />
  ));

  return <div className="w-full flex gap-1 justify-center">{tiles}</div>;
};
