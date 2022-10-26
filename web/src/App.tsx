import './App.css';

import { useState } from 'react';
import SnakeScreen from './components/SnakeScreen';
import SplashScreen from './components/SplashScreen';

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  if (!hasStarted) {
    return <SplashScreen setHasStarted={setHasStarted} />;
  } else {
    return <SnakeScreen />;
  }
}

export default App;
