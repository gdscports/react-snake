export class SnakeEngine {
  static boardSize = 9;

  static main() {
    console.log('New coordinates of the snake are: ');
    for (const cell of SnakeEngine.snake.body) {
      console.log(cell);
    }
    SnakeEngine.model();
    console.log('New coordinates of the snake are: ');
    for (const cell of SnakeEngine.snake.body) {
      console.log(cell);
    }
    SnakeEngine.view(SnakeEngine.board);
  }

  static snake = {
      body: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
      ],
      direction: 'right',
    };

    static board = this.boardGenerator();

    static boardGenerator() {
      const board: string[] = [];
      for (let i = 0; i < SnakeEngine.boardSize + 1; i++) {
        let row = '';
        for (let j = 0; j < SnakeEngine.boardSize + 1; j++) {
          row += '0';
        }
        board.push(row);
      }
      return board;
    }

    static UpdateBoard(y: number, x: number, board: Array<string>, snake: boolean) {
      const row = board[y];
      const a = row.split('');
      if (snake === true) {
        a[x] = 'S';
      } else {
        a[x] = 'F';
      }
      board[y] = a.join('');
      return board;
    }

    static view(board: Array<string>) {
      SnakeEngine.board = this.boardGenerator();
      console.clear();
      let boardString = '';
      for (let i = 0; i < board.length - 1; i++) {
        boardString += board[i] + '\n';
      }
      console.log(boardString);
    }

    static model() {
      let x = SnakeEngine.snake.body[SnakeEngine.snake.body.length - 1].x;
      let y = SnakeEngine.snake.body[SnakeEngine.snake.body.length - 1].y;
      switch (SnakeEngine.snake.direction) {
        case 'up':
          y = y - 1;
          if (y < 0) {
            y = SnakeEngine.boardSize;
          }
          break;
        case 'down':
          y = y + 1;
          if (y > SnakeEngine.boardSize) {
            y = 0;
          }
          break;
        case 'left':
          x = x - 1;
          if (x < 0) {
            x = SnakeEngine.boardSize;
          }
          break;
        case 'right':
          x = x + 1;
          if (x > SnakeEngine.boardSize) {
            x = 0;
          }
          break;
        default:
      }
      console.log('Model x; ', x, 'Model y: ', y);
      const newSnakeHead = { x: x, y: y };
      SnakeEngine.snake.body.shift();
      SnakeEngine.snake.body.push(newSnakeHead);
    }

  static controller() {
    document.addEventListener('keydown', parseInput);
    function parseInput(e: KeyboardEvent) {
      switch (e.key) {
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
