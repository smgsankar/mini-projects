import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export type GameState = "playing" | "won" | "lost";

type GameResultModalProps = {
  open: boolean;
  gameState: GameState;
  wordToGuess: string;
  closeModal: () => void;
};

export const GameResultModal = ({
  open,
  gameState,
  wordToGuess,
  closeModal,
}: GameResultModalProps) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  return (
    <AlertDialog open={open} onOpenChange={closeModal}>
      <AlertDialogContent
        className={cn(
          `${isDarkMode ? "bg-gray-900" : "bg-white"} text-center w-fit`
        )}
      >
        <AlertDialogHeader>
          <AlertDialogTitle className={cn("text-2xl")}>
            {gameState === "won" ? "🎉 You Won!" : "💀 You Lost!"}
          </AlertDialogTitle>
        </AlertDialogHeader>

        {gameState === "lost" && (
          <p className="text-muted-foreground mt-2">
            The word was <span className="font-bold">{wordToGuess}</span>
          </p>
        )}

        <AlertDialogFooter className={cn("mt-4 flex flex-row justify-center")}>
          <Button variant="secondary" className="ml-2" onClick={closeModal}>
            Close
          </Button>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Play Again
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
