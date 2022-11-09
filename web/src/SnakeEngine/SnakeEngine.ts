class Constants {
  static SnakeSpeed = 2;
}

export class SnakeEngine {
  board = [];
  static snake = {
    length: 3,
    body: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ],
    direction: 'right',
  };

  static helloWorld() {
    const speed = new Constants();
    console.log(speed);
  }

  static view() {
    const board = [];
    const size = 10;
    let row = '';
    const x = SnakeEngine.snake.body[this.length].x;
    const y = SnakeEngine.snake.body[this.length].y;
    for (let ycord = 0; ycord < size; ycord++) {
      for (let xcord = 0; xcord < size; xcord++) {
        if (xcord === x && ycord === y) {
          row += 'S';
        } else {
          row += '0';
        }
      }
      board.push(row);
    }
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
    SnakeEngine.snake.body.shift();
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
