import React, { useState, useCallback } from 'react';


function Usecallback() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
      }, [count]);

      const handleToggle = useCallback(() => {
        setOtherState(!otherState);
      }, [otherState]);
    
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment Count</button>
      <button onClick={handleToggle}>{otherState ?"show":"click"}</button>
    </div>
  )
}

export default Usecallback