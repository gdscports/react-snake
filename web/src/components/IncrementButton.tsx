import { useState, Dispatch } from 'react';

function IncrementButton(props: {count: number, countIncrease: Dispatch<number>, incrementBy: number}) {
	return (
		<div>
			<button onClick={() => props.countIncrease(props.count + props.incrementBy)}>
				This button increments by {props.incrementBy}
			</button>
		</div>
	);
}

export default IncrementButton;
