import { Dispatch } from 'react';

function IncrementButton(props: { countIncrease: Dispatch<number>, incrementBy: number}) {
	return (
		<div>
			<button onClick={() => props.countIncrease(props.incrementBy)}>
				This button increments by {props.incrementBy}
			</button>
		</div>
	);
}

export default IncrementButton;
