import './App.css';

import { useState, Dispatch } from 'react';
import IncrementButton from './IncrementButton';
import reactLogo from './assets/react.svg';

function SplashScreen(props: {setHasStarted: Dispatch<boolean>}) {
  return (
      <div>
        <h1>Welcome to React Snake UwU</h1>
        <button onClick={() => props.setHasStarted(true)}>
          Click me to start the game
        </button>
      </div>
    );
}

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

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  if (!hasStarted) {
    return <SplashScreen setHasStarted={setHasStarted} />;
  } else {
    return <SnakeScreen />;
  }
}

export default App;
