import { Dispatch } from 'react';

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

export default SplashScreen;
