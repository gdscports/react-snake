import IncrementButton from './IncrementButton';
import CanvasBoard from './CanvasBoard';
import { useState } from 'react';

function SnakeScreen() {
  const [count, setCount] = useState(0);

  function increaseCount(incrementNum: number) {
    setCount(count + incrementNum);
  }

  return (
    <div className='App'>
      <div className='logo snake'>🐍</div>
      <h1>GDSC Snake</h1>
      <div className='dualColumns'>
        <div>
          <CanvasBoard height={200} width={400}/>
        </div>
        <div>
          <h2>Current score: {count}</h2>
          <IncrementButton countIncrease={increaseCount} incrementBy={1} />
          <IncrementButton countIncrease={increaseCount} incrementBy={2} />
        </div>
      </div>
    </div>
  );
}

export default SnakeScreen;
