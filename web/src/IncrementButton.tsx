import { useState } from 'react'

type ComponentProps = {
  incrementBy: number;
}

function IncrementButton(props: ComponentProps) {

  const [count, setCount] = useState(0)

    return (
      <div>
        <button onClick={() => setCount((count) => count + props.incrementBy)}>
            This button increments by {props.incrementBy}. 
            count is {count}
          </button>
      </div>
    )

}

export default IncrementButton