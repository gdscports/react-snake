class Constants {
  static SnakeSpeed = 2;
}

export class SnakeEngine {
  static gameOver = false
  static food = { x: SnakeEngine.randomCoord(), y: SnakeEngine.randomCoord() }
  static snake = {
    // length: 3,
    body: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ],
    direction: 'right',
  };

  static board = this.boardGenerator();

  static randomCoord() {
    return Math.floor(Math.random() * (9 - 0)) + 0;
  }

  static boardGenerator() {
    const board: string[] = [];
    for (let i = 0; i < 10; i++) {
      let row = '';
      for (let j = 0; j < 10; j++) {
        row += '0';
      }
      board.push(row);
    }
    SnakeEngine.snake.body.forEach(element => {
      this.UpdateBoard(element.y, element.x, board, true);
      console.log('BoardGen x: ', element.x, 'y: ', element.y);
    });
    // this.UpdateBoard(0, 0, board, true);
    // this.UpdateBoard(0, 1, board, true);
    // this.UpdateBoard(0, 2, board, true);
    return board;
  }

  static UpdateBoard(y: number, x: number, board: Array<string>, snake: boolean) {
    const row = board[y];
    // console.log('Update x: ', x, 'y: ', y);
    const a = row.split('');
    if (snake === true) {
      a[x] = 'S';
    } else {
      a[x] = 'F';
    }
    // add ? a[x] = 'S' : a[x] = '0'; // add if true remove if false
    board[y] = a.join('');
    return board;
  }

  static helloWorld() {
    const speed = new Constants();
    console.log(speed);
  }

  static view(board: Array<string>) {
    SnakeEngine.board = this.boardGenerator(); // board is generated
    console.clear();
    let boardString = '';
    for (let i = 0; i < board.length - 1; i++) {
      boardString += board[i] + '\n';
    }
    console.log(boardString);
  }

  static model() {
    // const newSnakeHead = SnakeEngine.snake.body[SnakeEngine.snake.body.length - 1]; // change to slice
    let x = SnakeEngine.snake.body[SnakeEngine.snake.body.length - 1].x;
    let y = SnakeEngine.snake.body[SnakeEngine.snake.body.length - 1].y;
    switch (SnakeEngine.snake.direction) {
      case 'up':
        y = y - 1;
        if (y < 0) {
          y = 9;
        }
        break;
      case 'down':
        y = y + 1;
        if (y > 9) {
          y = 0;
        }
        break;
      case 'left':
        x = x - 1;
        if (x < 0) {
          x = 9;
        }
        break;
      case 'right':
        x = x + 1;
        if (x > 9) {
          x = 0;
        }
        break;
      default:
    }
    const newSnakeHead = { x: x, y: y };
    // newSnakeHead.y = y;
    // newSnakeHead.x = x;
    // console.log('Model x; ', x, 'Model y: ', y);
    SnakeEngine.snake.body.shift();
    SnakeEngine.snake.body.push(newSnakeHead);
    // this.UpdateBoard(oldTail.y, oldTail.x, SnakeEngine.board, false);
    // this.UpdateBoard(y, x, SnakeEngine.board, true);
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

  static main() {
    // console.log('Get input');
    this.controller();
    // this.newFrame();
    this.view(SnakeEngine.board);

    const interval = setInterval(this.newFrame, 500);
    if (SnakeEngine.gameOver === true) {
      clearInterval(interval);
    }

    return null;
  }

  static newFrame = () => {
    this.model();
    this.view(SnakeEngine.board);
  }
}
SnakeEngine.main();
