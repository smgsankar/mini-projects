import React, { CSSProperties } from "react";

interface HangmanWordPropsType {
  wordToGuess: string;
  letterGuesses: string[];
  gameDone: boolean;
}

const HangmanWord = (props: HangmanWordPropsType) => {
  const { wordToGuess, letterGuesses, gameDone } = props;

  return (
    <div style={styles.wordWrapper}>
      {wordToGuess.split('').map((letter, index) => {
        const isVisible = letterGuesses.includes(letter) && wordToGuess.includes(letter);
        const missedLetter = !isVisible && gameDone;
        return (
          <div 
            key={`${letter}-${index}`}
            style={styles.letter}
          >
            <div style={{
              ...isVisible ? styles.correct : styles.invisible,
              ...missedLetter ? styles.incorrect : {},
            }}>
              {letter}
            </div>
            <div style={styles.blank} />
          </div>
        )}
      )}
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  wordWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  letter: {
    width: 40,
    fontSize: 32,
    fontWeight: 500,
    textAlign: 'center',
  },
  blank: {
    height: 5,
    backgroundColor: 'black', 
  },
  incorrect: {
    visibility: 'visible',
    color: 'red',
  },
  visible: {
    visibility: 'visible',
    color: 'black',
  },
  invisible: {
    visibility: 'hidden',
  }
}

export default HangmanWord;
