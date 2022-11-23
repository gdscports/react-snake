export class SnakeEngine {
    static helloWorld() {
        console.log('Hello World');
    }

    static snake = {
        body: [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 2, y: 0 },
        ],
        direction: 'right',
      };

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
