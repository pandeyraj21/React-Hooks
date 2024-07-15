import React, { useMemo, useState } from 'react';

function Usememo() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    const expensiveCalculation = (num) => {
        console.log('Calculating...');
        for (let i = 0; i < 1000000000; i++) {
          num += 1;
        }
        return num;
      };

      const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);


  return (
    <div>
      <p>Count: {count}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(!otherState)}>{otherState ?"show":"click"}</button>
    </div>
  )
}

export default Usememo