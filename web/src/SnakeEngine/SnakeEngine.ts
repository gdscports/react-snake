export class SnakeEngine {
  static boardSizeY = 9;
  static boardSizeX = SnakeEngine.boardSizeY + 10;
  static interval: NodeJS.Timer
  static canvasM = 20;
  static score = 0;

  static main() {
    SnakeEngine.randomiseFood();
    SnakeEngine.controller();
    SnakeEngine.view(SnakeEngine.board);

    SnakeEngine.interval = setInterval(this.newFrame, 500);

    return null;
  }

  static newFrame = () => {
    SnakeEngine.model();
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

    static food = { x: 0, y: 0 }
    static board = this.boardGenerator();
    static gameOver = false;

    static collision(x: number, y: number) {
      for (const cell of SnakeEngine.snake.body) {
        if (cell.x === x && cell.y === y) {
          return true;
        }
      }
    return false;
    }

    static foodEaten() {
      for (const cell of SnakeEngine.snake.body) {
        if (cell.x === SnakeEngine.food.x && cell.y === SnakeEngine.food.y) {
          SnakeEngine.randomiseFood();
          SnakeEngine.score = SnakeEngine.score + 1;
          const scorehtml = `Score : ${SnakeEngine.score}`;
          document.getElementsByClassName('score')[0].innerHTML = scorehtml;
          return true;
        }
      }
      return false;
    }

    static randomiseFood() {
      let valid = false;
      while (valid === false) {
        valid = true;
        SnakeEngine.food.x = SnakeEngine.randomCoord(SnakeEngine.boardSizeX);
        SnakeEngine.food.y = SnakeEngine.randomCoord(SnakeEngine.boardSizeY);
        for (const cell of SnakeEngine.snake.body) {
          if (cell.x === SnakeEngine.food.x && cell.y === SnakeEngine.food.y) {
            valid = false;
          }
        }
      }
    }

  static randomCoord(size: number) {
      return Math.floor(Math.random() * (size + 1));
    }

    static boardGenerator() {
      const board: string[] = [];
      for (let i = 0; i < SnakeEngine.boardSizeY + 1; i++) {
        let row = '';
        for (let j = 0; j < SnakeEngine.boardSizeX + 1; j++) {
          row += '-';
        }
        board.push(row);
      }

      SnakeEngine.UpdateBoard(SnakeEngine.food.y, SnakeEngine.food.x, board, false);

      for (const cell of SnakeEngine.snake.body) {
        this.UpdateBoard(cell.y, cell.x, board, true);
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
      for (let i = 0; i < board.length; i++) {
        boardString += board[i] + '\n';
      }
      console.log(boardString);

      const canvas = document.querySelector('canvas') as HTMLCanvasElement;
      if (canvas == null) return;
      const ctx = canvas.getContext('2d');
      if (ctx === null) return;

      // 1)Getting the board and loooping throguh an Array of the board and drawing the board depending
      //  2)
      const square = 10 * 2;
      const snakeLength = SnakeEngine.snake.body.length;
      for (let i = 0; i < board.length; i++) {
        const boardline = SnakeEngine.board[i].split('');
        for (let j = 0; j < boardline.length; j++) {
          if (boardline[j] === 'S') {
            if (i === SnakeEngine.snake.body[snakeLength - 1].y && j === SnakeEngine.snake.body[snakeLength - 1].x) {
              ctx.fillStyle = 'green';
            } else {
              ctx.fillStyle = 'lime';
            }
          } else if (boardline[j] === 'F') {
            ctx.fillStyle = 'red';
          } else {
            ctx.fillStyle = 'black';
          }
          ctx.fillRect(0 + (j * square), 0 + (i * square), square, square); // i = y , j=x
        }
      }
    }

    static model() {
      let x = SnakeEngine.snake.body[SnakeEngine.snake.body.length - 1].x;
      let y = SnakeEngine.snake.body[SnakeEngine.snake.body.length - 1].y;
      switch (SnakeEngine.snake.direction) {
        case 'up':
          y = y - 1;
          if (y < 0) {
            y = SnakeEngine.boardSizeY;
          }
          break;
        case 'down':
          y = y + 1;
          if (y > SnakeEngine.boardSizeY) {
            y = 0;
          }
          break;
        case 'left':
          x = x - 1;
          if (x < 0) {
            x = SnakeEngine.boardSizeX;
          }
          break;
        case 'right':
          x = x + 1;
          if (x > SnakeEngine.boardSizeX) {
            x = 0;
          }
          break;
        default:
      }
      const newSnakeHead = { x: x, y: y };
      if (SnakeEngine.foodEaten() === false) {
        SnakeEngine.snake.body.shift();
      }
      if (SnakeEngine.collision(x, y) === true) {
        SnakeEngine.gameOver = true;
        SnakeEngine.snake.body.push(newSnakeHead);
        clearInterval(SnakeEngine.interval);
      }
      SnakeEngine.snake.body.push(newSnakeHead);
    }

    static controller() {
      document.addEventListener('keydown', parseInput);
      function parseInput(e: { key: string}) {
        switch (e.key) {
          case 'w':
          case 'ArrowUp':
            if (SnakeEngine.snake.direction !== 'down') {
              SnakeEngine.snake.direction = 'up';
            }
            break;
          case 'a':
          case 'ArrowLeft':
            if (SnakeEngine.snake.direction !== 'right') {
              SnakeEngine.snake.direction = 'left';
            }
            break;
          case 's':
          case 'ArrowDown':
            if (SnakeEngine.snake.direction !== 'up') {
              SnakeEngine.snake.direction = 'down';
            }
            break;
          case 'd':
          case 'ArrowRight':
            if (SnakeEngine.snake.direction !== 'left') {
              SnakeEngine.snake.direction = 'right';
            }
            break;
          default:
        }
      }
    }
}
