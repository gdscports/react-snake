import { useState, Dispatch } from 'react';

type ComponentProps = {
	incrementBy: number;
};

function IncrementButton(props: {countIncrease: Dispatch<number>, props: ComponentProps}) {
	return (
		<div>
			<button onClick={() => props.countIncrease(props.props.incrementBy)}>
				This button increments by {props.props.incrementBy}
			</button>
		</div>
	);
}

export default IncrementButton;
