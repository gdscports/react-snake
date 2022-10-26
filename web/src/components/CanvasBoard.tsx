import styles from './CanvasBoard.module.css';
import { CanvasBoardTypes } from '../types';

function CanvasBoard({ height, width }: CanvasBoardTypes) {
  return (
    <canvas
      className={styles.canvas}
      height={height}
      width={width}
    />
  );
}

export default CanvasBoard;
