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
}
