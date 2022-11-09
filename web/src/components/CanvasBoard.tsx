import styles from './CanvasBoard.module.css';
import { CanvasBoardProps } from '../types';

function CanvasBoard({ height, width }: CanvasBoardProps) {
  return (
    <canvas
      className={styles.canvas}
      height={height}
      width={width}
    />
  );
}

export default CanvasBoard;
