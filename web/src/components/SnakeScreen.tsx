import IncrementButton from './IncrementButton';
import CanvasBoard from './CanvasBoard';
import { useState } from 'react';

function SnakeScreen() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='logo snake'>🐍</div>
      <h1>GDSC Snake</h1>
      <div className='dualColumns'>
        <div>
          <CanvasBoard height={200} width={400}/>
        </div>
        <div>
        <IncrementButton count={count} countIncrease={setCount} incrementBy={1} />
        <IncrementButton count={count} countIncrease={setCount} incrementBy={2} />
        </div>
      </div>
    </div>
  );
}

export default SnakeScreen;
