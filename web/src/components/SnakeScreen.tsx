import IncrementButton from '../IncrementButton';
import CanvasBoard from './CanvasBoard';
import { SnakeEngine } from '../SnakeEngine/SnakeEngine';
function SnakeScreen() {
	return (
		<div className='App'>
			<div className='logo snake'>🐍</div>
			<h1>GDSC Snake</h1>
			<div className='card'>
				<div className='score'>Score : {SnakeEngine.score}</div>
				<IncrementButton incrementBy={1} />
				<IncrementButton incrementBy={2} />
				<CanvasBoard height={200} width={400} />
			</div>
		</div>
	);
}

export default SnakeScreen;
