export class SnakeEngine {
  static board = [];
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
    console.log('Hello World');
  }
}
