import { Dispatch } from 'react';

function IncrementButton(props: {count: number, setCount: Dispatch<number>, incrementBy: number}) {
	return (
		<div>
			<button onClick={() => props.setCount(props.count + props.incrementBy)}>
				This button increments by {props.incrementBy}
			</button>
		</div>
	);
}

export default IncrementButton;
