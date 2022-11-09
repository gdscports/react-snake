import IncrementButton from '../IncrementButton';
import CanvasBoard from './CanvasBoard';

function SnakeScreen() {
    return (
        <div className='App'>
          <div className='logo snake'>🐍</div>
          <h1>GDSC Snake</h1>
          <div className="card">
            <IncrementButton incrementBy={1} />
            <IncrementButton incrementBy={2} />
            <CanvasBoard height={200} width={400}/>
          </div>
        </div>
      );
}

export default SnakeScreen;
