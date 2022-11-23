export class SnakeEngine {
    static main() {
        SnakeEngine.snake.body.forEach(element => {
            console.log('x:', element.x, ' y:', element.y);
        });
        this.model();
        console.log('New coordinates of the snake are: ');
        SnakeEngine.snake.body.forEach(element => {
            console.log('x:', element.x, ' y:', element.y);
        });
    }

    static snake = {
        body: [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 2, y: 0 },
        ],
        direction: 'right',
      };

      static model() {
        let x = SnakeEngine.snake.body[SnakeEngine.snake.body.length - 1].x;
        let y = SnakeEngine.snake.body[SnakeEngine.snake.body.length - 1].y;
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
