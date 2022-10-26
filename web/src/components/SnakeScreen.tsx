import IncrementButton from '../IncrementButton';

function SnakeScreen() {
    return (
        <div className='App'>
          <div className='logo snake'>🐍</div>
          <h1>GDSC Snake</h1>
          <div className="card">
            <IncrementButton incrementBy={1} />
            <IncrementButton incrementBy={2} />
          </div>
        </div>
      );
}

export default SnakeScreen;
