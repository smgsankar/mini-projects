import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export type TileState = "empty" | "correct" | "present" | "absent";

export type Guess = {
  letter: string;
  state: TileState;
};
type TileProps = Guess & { delay: number };

export const Tile = ({ letter = "", state = "empty", delay }: TileProps) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  const isFlipped = state !== "empty";
  const stateClasses = {
    empty: "bg-inherit border border-border text-foreground",
    correct: "bg-green-500 text-white",
    present: "bg-yellow-500 text-white",
    absent: "bg-zinc-700 text-white",
  };

  return (
    <div className={cn("relative w-12 h-12 md:w-14 md:h-14")}>
      <div
        className={cn(
          "absolute inset-0 backface-hidden perspective-midrange transform-3d rounded",
          isDarkMode ? "bg-gray-900" : "bg-white"
        )}
      >
        <div
          style={{
            transitionDelay: `${delay}ms`,
            transitionProperty: "transform, opacity",
          }}
          className={cn(
            "absolute inset-0 z-10 flex items-center justify-center text-2xl font-bold bg-muted text-foreground rounded opacity-100",
            "duration-500 origin-bottom",
            isFlipped ? "rotate-x-[-90deg] opacity-0" : "",
            stateClasses["empty"]
          )}
        >
          {letter}
        </div>
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-2xl font-bold rounded",
            stateClasses[state]
          )}
        >
          {letter}
        </div>
      </div>
    </div>
  );
};
