import { CSSProperties } from "react";

interface HeaderPropsType {
  gameOver: boolean;
  gamePassed: boolean;
}

const Header = (props: HeaderPropsType) => {
  const { gameOver, gamePassed } = props;
  const status = gameOver ? 'You Lost!' : (gamePassed ? 'You Won!' : 'Game In-Progress');

  return (
    <div style={styles.wrapper}>
      <div style={styles.heading} >Hangman - Guess the word</div> 
      <div style={styles.subHeading} >{status}</div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bolder',
    margin: 12,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 8,
  },
}

export default Header;
