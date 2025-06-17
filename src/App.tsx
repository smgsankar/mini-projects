import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "next-themes";
import { Board } from "@/components/Board";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { Keyboard, type KeyState } from "@/components/Keyboard";
import { GameResultModal, type GameState } from "@/components/GameResultModal";
import type { Guess } from "@/components/Tile";
import {
  computeGuessStateForWord,
  parseCurrentGuess,
  updateGameState,
  updateKeyboardState,
} from "@/lib/utils";

const WORD_TO_GUESS = "APPLE"; // Example word to guess, replace with your logic

const App = () => {
  const [resultModalOpen, setResultModalOpen] = useState(false);
  const [gameState, setGameState] = useState<GameState>("playing");
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<Guess[][]>([]);
  const [keyStates, setKeyStates] = useState<Record<string, KeyState>>({});

  const closeModal = useCallback(() => {
    setResultModalOpen(false);
  }, []);

  const handleSubmit = useCallback(() => {
    if (currentGuess.length !== 5) return;

    const latestGuess = computeGuessStateForWord(currentGuess, WORD_TO_GUESS);
    setGuesses((prev) => [...prev, latestGuess]);

    setKeyStates(updateKeyboardState(keyStates, latestGuess));

    const newGameState = updateGameState(
      currentGuess,
      WORD_TO_GUESS,
      guesses.length + 1
    );
    setGameState(newGameState);

    if (newGameState !== "playing")
      setTimeout(() => {
        setResultModalOpen(true);
      }, 2400);

    setCurrentGuess("");
  }, [currentGuess, keyStates, guesses.length]);

  const handleKey = useCallback(
    (key: string) => {
      if (guesses.length >= 6) return;
      if (key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (key === "Enter") {
        handleSubmit();
      } else if (currentGuess.length < 5 && /^[A-Z]$/i.test(key)) {
        setCurrentGuess((prev) => prev + key.toUpperCase());
      }
    },
    [currentGuess, guesses.length, handleSubmit]
  );

  const allGuesses = useMemo(() => {
    return [...guesses, parseCurrentGuess(currentGuess)];
  }, [guesses, currentGuess]);

  const isPlaying = gameState === "playing";

  useEffect(() => {
    if (!isPlaying) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      e.preventDefault();
      handleKey(e.key);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentGuess, handleKey, isPlaying]);

  return (
    <ThemeProvider>
      <Container>
        <GameResultModal
          gameState={gameState}
          open={resultModalOpen}
          closeModal={closeModal}
          wordToGuess={WORD_TO_GUESS}
        />
        <Header />
        <Board guesses={allGuesses} />
        <Keyboard
          disabled={!isPlaying}
          keyStates={keyStates}
          onKeyPress={handleKey}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
