import './App.css';

import reactLogo from './assets/react.svg';
import IncrementButton from './IncrementButton';
import CanvasBoard from './components/CanvasBoard';

function App() {
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
        <CanvasBoard height={200} width={400} />
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
