import { CSSProperties, MouseEvent, useEffect, useState } from "react";
import { LETTERS } from "../constants";
import Actions from "./Actions";

interface KeyboardLayoverPropsType {
  addGuess: (letter: string) => void;
  wordToGuess: string;
  letterGuesses: string[];
  gameDone: boolean;
  restartGame: () => void;
}

const KeyboardLayover = (props: KeyboardLayoverPropsType) => {
  const { addGuess, wordToGuess, letterGuesses, gameDone, restartGame } = props;

  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState<boolean>(false);

  const onKeyClick = (e: MouseEvent<HTMLDivElement>) => {
    if(!gameDone)
      addGuess(e.currentTarget.innerText);
  }

  useEffect(() => {
    setShowVirtualKeyboard(window.innerHeight > 840 && window.innerWidth > 800);
    const resizeCallback = () => {
      setShowVirtualKeyboard(window.innerHeight > 840 && window.innerWidth > 800);
    }
    window.addEventListener('resize', resizeCallback);
    return () => {
      window.removeEventListener('resize', resizeCallback);
    }
  }, []);

  return (
    <>
      {showVirtualKeyboard ? (
        <div style={styles.keyboardWrapper}>
          <div style={styles.letters}>
            {LETTERS.map(letter => {
              const letterUpper = letter.toUpperCase();
              const correctGuess = letterGuesses.includes(letterUpper) && wordToGuess.includes(letterUpper);
              const incorrectGuess = letterGuesses.includes(letterUpper) && !wordToGuess.includes(letterUpper);
              return (
                <div 
                  key={letterUpper}
                  style={{
                    ...styles.letter,
                    ...correctGuess ? styles.selected : {},
                    ...incorrectGuess ? styles.disabled : {},
                  }}
                  onClick={onKeyClick}
                >
                  {letterUpper}
                </div>
              )}
            )}
          </div>
          <Actions restartGame={restartGame} />
        </div>
      ): (
        <></>
      )}
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  keyboardWrapper: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 8,
    bottom: 0,
    height: '24vh',
    width: '100%',
    padding: 24,
    maxWidth: 800,
    backgroundColor: '#e0e0e0',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  letters: {
    display: 'grid',
    gridTemplateColumns: 'repeat(13, 1fr)',
    gap: 8,
  },
  letter: {
    textAlign: 'center',
    padding: 16,
    fontSize: '2vh',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 4,
  },
  selected: {
    backgroundColor: 'green',
    color: 'white',
  },
  disabled: {
    backgroundColor: 'gray',
    color: 'white',
  }
}

export default KeyboardLayover;

