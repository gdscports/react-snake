import IncrementButton from '../IncrementButton';
import reactLogo from '../assets/react.svg';

function SnakeScreen() {
    return (
        <div className='App'>
          <div>
            <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
              <img src='/vite.svg' className='logo' alt='Vite logo' />
            </a>
            <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
              <img src={reactLogo} className='logo react' alt='React logo' />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <IncrementButton incrementBy={1} />
            <IncrementButton incrementBy={2} />
          </div>
        </div>
      );
}

export default SnakeScreen;
