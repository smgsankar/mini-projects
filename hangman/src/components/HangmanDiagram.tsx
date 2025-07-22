import { CSSProperties } from "react";

interface HangmanDiagramPropsType {
  incorrectGuessCount: number;
}

const HangmanDiagram = (props: HangmanDiagramPropsType) => {
  const { incorrectGuessCount } = props;

  const hangmanParts = [
    <div key="hangmanHead" style={styles.hangmanHead} />,
    <div key="hangmanBody" style={styles.hangmanBody} />,
    <div key="leftArm" style={styles.leftArm} />,
    <div key="rightArm" style={styles.rightArm} />,
    <div key="leftLeg" style={styles.leftLeg} />,
    <div key="rightLeg" style={styles.rightLeg} />,
  ];

  return (
    <div style={styles.hangmanWrapper}>
      <div key="lever" style={styles.lever} />
      <div key="verticalSupport" style={styles.verticalSupport} />
      <div key="base" style={styles.base} />
      <div key="hanger" style={styles.hanger} />
      {hangmanParts.splice(0, incorrectGuessCount)}    
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  hangmanWrapper: {
    position: 'relative',
    margin: 16,
    translate: -30,
  },
  base: {
    width: 200,
    height: 6,
    backgroundColor: 'black',
  },
  verticalSupport: {
    backgroundColor: 'black',
    width: 6,
    height: 320,
    marginLeft: 100,
  },
  lever: {
    backgroundColor: 'black',
    width: 200,
    height: 6,
    marginLeft: 100,
  },
  hanger: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 0,
    right: 0,
    width: 6,
    height: 40,
  },
  hangmanHead: {
    position: 'absolute',
    borderColor: 'black',
    height: 40,
    width: 40,
    borderWidth: 6,
    borderRadius: 100,
    borderStyle: 'solid',
    top: 40,
    right: -23,
  },
  hangmanBody: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 86,
    right: 0,
    width: 6,
    height: 100,
  },
  leftArm: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 120,
    right: 5,
    height: 6,
    width: 70,
    rotate: '30deg',
    transformOrigin: 'right bottom'
  },
  rightArm: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 120,
    right: -70,
    height: 6,
    width: 70,
    rotate: '-30deg',
    transformOrigin: 'left bottom'
  },
  leftLeg: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 180,
    right: 6,
    height: 6,
    width: 100,
    rotate: '-60deg',
    transformOrigin: 'right top'
  },
  rightLeg: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 180,
    right: -100,
    height: 6,
    width: 100,
    rotate: '60deg',
    transformOrigin: 'left top'
  },
}

export default HangmanDiagram;
