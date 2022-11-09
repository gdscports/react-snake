class Constants {
  static SnakeSpeed = 2;
}

export class SnakeEngine {
  static board = this.boardGenerator();
  static snake = {
    length: 3,
    body: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ],
    direction: 'right',
  };

  static boardGenerator() {
    const board = [];
    let row = '';
    for (let i = 0; i < 10; i++) {
      row += `${'0'.repeat(10)}`;
      board.push(row);
    }
    this.UpdateBoard(0, 0, board, true);
    this.UpdateBoard(0, 1, board, true);
    this.UpdateBoard(0, 2, board, true);
    return board;
  }

  static UpdateBoard(y: number, x: number, board: Array<string>, add: boolean) {
    const row = board[y];
    const a = row.split('');
    add ? a[x] = 'S' : a[x] = '0'; // add if true remove if false
    board[y] = a.toString();
    return board;
  }

  static helloWorld() {
    const speed = new Constants();
    console.log(speed);
  }

  static view(board: Array<string>) {
    for (let i = 0; i < board.length - 1; i++) {
      console.log(board[i]);
    }
  }

  static model() {
    const newSnakeHead = SnakeEngine.snake.body[SnakeEngine.snake.length - 1];
    let x = newSnakeHead.x;
    let y = newSnakeHead.y;
    switch (SnakeEngine.snake.direction) {
      case 'up':
        y = y - 1;
        break;
      case 'down':
        y = y + 1;
        break;
      case 'left':
        x = x - 1;
        break;
      case 'right':
        x = x + 1;
        break;
      default:
    }
    newSnakeHead.y = y;
    newSnakeHead.x = x;
    SnakeEngine.snake.body.push(newSnakeHead);
    this.UpdateBoard(y, x, SnakeEngine.board, true);
    const oldTail = SnakeEngine.snake.body.shift() as { x: number, y: number };
    this.UpdateBoard(oldTail.y, oldTail.x, SnakeEngine.board, false);
  }

  static controller() {
    document.addEventListener('keydown', parseInput);
    function parseInput(e: { key: string}) {
      switch (e.key) {
        case 'ArrowUp':
          SnakeEngine.snake.direction = 'up';
          break;
        case 'w':
          SnakeEngine.snake.direction = 'up';
          break;
        case 'a':
          SnakeEngine.snake.direction = 'left';
          break;
        case 's':
          SnakeEngine.snake.direction = 'down';
          break;
        case 'd':
          SnakeEngine.snake.direction = 'right';
          break;
        default:
      }
    }
  }
}
