import { CSSProperties } from "react";

interface ActionsPropsType {
  restartGame: () => void;
}

const Actions = (props: ActionsPropsType) => {
  const { restartGame } = props;
  return (
    <div onClick={restartGame} style={styles.restartBtn}>
      Restart
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  restartBtn: {
    textAlign: 'center',
    padding: 16,
    fontSize: '3vh',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 4,
    margin: '0px 16px',
    backgroundColor: '#5f5f5f',
    color: 'white'
  },
}

export default Actions;
