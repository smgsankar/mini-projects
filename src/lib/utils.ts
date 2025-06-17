import type { GameState } from "@/components/GameResultModal";
import type { KeyState } from "@/components/Keyboard";
import type { Guess } from "@/components/Tile";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseCurrentGuess(currentGuess: string) {
  const guess: Guess[] = [];
  for (let i = 0; i < currentGuess.length; i++) {
    guess.push({
      letter: currentGuess[i].toUpperCase(),
      state: "empty",
    });
  }
  return guess;
}

export function computeGuessStateForWord(
  guess: string,
  wordToGuess: string
): Guess[] {
  const parsedGuess = parseCurrentGuess(guess);
  const letterCount = new Map<string, number>();
  for (const letter of wordToGuess) {
    letterCount.set(letter, (letterCount.get(letter) ?? 0) + 1);
  }

  // First pass: check for correct letters
  for (let i = 0; i < parsedGuess.length; i++) {
    const letter = parsedGuess[i].letter;
    if (letter === wordToGuess[i]) {
      parsedGuess[i].state = "correct";
      letterCount.set(letter, letterCount.get(letter)! - 1);
    }
  }

  // Second pass: check for present letters
  for (let i = 0; i < guess.length; i++) {
    const letter = parsedGuess[i].letter;
    if (
      parsedGuess[i].state === "empty" &&
      letterCount.get(letter) &&
      letterCount.get(letter)! > 0
    ) {
      parsedGuess[i].state = "present";
      letterCount.set(letter, letterCount.get(letter)! - 1);
    } else if (parsedGuess[i].state === "empty") {
      parsedGuess[i].state = "absent";
    }
  }

  return parsedGuess;
}

export function updateKeyboardState(
  keyStates: Record<string, KeyState>,
  latestGuess: Guess[]
) {
  const newKeyStates: Record<string, KeyState> = { ...keyStates };

  latestGuess.forEach((tile) => {
    const letter = tile.letter.toUpperCase();
    if (tile.state === "correct") {
      newKeyStates[letter] = "correct";
    } else if (tile.state === "present") {
      if (newKeyStates[letter] !== "correct") {
        newKeyStates[letter] = "present";
      }
    } else if (tile.state === "absent") {
      if (!newKeyStates[letter]) {
        newKeyStates[letter] = "absent";
      }
    }
  });

  return newKeyStates;
}

export function updateGameState(
  currentGuess: string,
  wordToGuess: string,
  lastGuessCount: number
): GameState {
  if (currentGuess.toUpperCase() === wordToGuess.toUpperCase()) return "won";
  if (lastGuessCount < 6) return "playing";
  return currentGuess.length < 5 ? "playing" : "lost";
}
