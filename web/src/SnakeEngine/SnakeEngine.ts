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
