import IncrementButton from '../IncrementButton';
import CanvasBoard from './CanvasBoard';

function SnakeScreen() {
    return (
        <div className='App'>
          <div className='logo snake'>🐍</div>
          <h1>GDSC Snake</h1>
          <div className='dualColumns'>
            <div>
              <CanvasBoard height={200} width={400}/>
            </div>
            <div>
            <IncrementButton incrementBy={1} />
            <IncrementButton incrementBy={2} />
            </div>
          </div>
        </div>
      );
}

export default SnakeScreen;
