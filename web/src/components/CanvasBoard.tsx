import styles from './CanvasBoard.module.css';
import { CanvasBoard } from '../types';

const CanvasBoard = ({ height, width }: CanvasBoard) => {
  return (
    <canvas
      className={styles.canvas}
      height={height}
      width={width}
    />
  );
};

export default CanvasBoard;
