import './App.css';

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import IncrementButton from './IncrementButton';

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  if (!hasStarted) {
    return (
      <div>
        <h1>hi</h1>
        <button onClick={() => setHasStarted(() => true)}>
          Click me to start the game
        </button>
        {hasStarted}
      </div>
    );
  } else {
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
          <p>
          Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      </div>
    );
  }
}

export default App;
