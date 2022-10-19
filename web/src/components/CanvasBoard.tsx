import styles from './CanvasBoard.module.css';

type Props = {
  height: number,
  width: number,
}

const CanvasBoard = ({ height, width }: Props) => {
  return (
    <canvas
      className={styles.canvas}
      height={height}
      width={width}
    />
  );
};

export default CanvasBoard;
