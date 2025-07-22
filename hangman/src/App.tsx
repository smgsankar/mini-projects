import { CSSProperties, useCallback, useEffect, useMemo, useState } from 'react';
import HangmanDiagram from './components/HangmanDiagram';
import HangmanWord from './components/HangmanWord';
import Header from './components/Header';
import KeyboardLayover from './components/KeyboardLayover';
import { WORDS } from './constants';

const App = () => {
  const getWord = () => {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    return WORDS[randomIndex].toUpperCase();
  }

  const [ wordToGuess, setWordToGuess ] = useState<string>(getWord);
  const [ letterGuesses, setLetterGuesses ] = useState<string[]>([]);

  const incorrectGuessCount: number = useMemo(() => {
    return letterGuesses.filter(letter => !(wordToGuess.includes(letter))).length;
  }, [letterGuesses, wordToGuess]);

  const gameOver: boolean = useMemo(() => {
    return incorrectGuessCount > 5;
  }, [incorrectGuessCount]);

  const gamePassed: boolean = useMemo(() => {
    return wordToGuess.split('').every(letter => letterGuesses.includes(letter));
  }, [wordToGuess, letterGuesses]);

  const gameDone = (gameOver || gamePassed);

  const addGuess = useCallback((letter: string) => {
    if(!(letterGuesses.includes(letter) || gameDone)){
      setLetterGuesses([...letterGuesses, letter]);
    }
  }, [letterGuesses, gameDone]);

  const restartGame = useCallback(() => {
    setWordToGuess(getWord);
    setLetterGuesses([]);
  }, []);

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      const key = e.key;
      if(key === ' '){
        restartGame();
        return;
      }
      if (!key.match(/^[a-z]$/)) return;
      addGuess(key.toUpperCase());
    }
    document.addEventListener('keypress', keyPressHandler);

    return () => {
      document.removeEventListener('keypress', keyPressHandler);
    }
  }, [letterGuesses, addGuess, restartGame]);
  
  return (
    <div style={styles.wrapper}>
      <Header
        gameOver={gameOver} 
        gamePassed={gamePassed}
      />
      <HangmanDiagram incorrectGuessCount={incorrectGuessCount}/>
      <HangmanWord
        wordToGuess={wordToGuess} 
        letterGuesses={letterGuesses} 
        gameDone={gameDone}
      />
      <KeyboardLayover
        addGuess={addGuess}
        wordToGuess={wordToGuess}
        letterGuesses={letterGuesses}
        gameDone={gameDone}
        restartGame={restartGame}
      />
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    maxWidth: 800,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    margin: '0 auto',
    alignItems: 'center',
  }
};

export default App;
