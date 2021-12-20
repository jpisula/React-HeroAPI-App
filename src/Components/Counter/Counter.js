import React, { useState } from 'react';
import './Counter.css';

function Counter({size}) {
  const [counter, setCounterValue] = useState(0);
  let btnClass = 'btn';
  let btnClassSecondary = 'btn btn--secondary'

  if (size >= 5 && size < 10) {
    btnClass += ' btn--medium';
    btnClassSecondary += ' btn--medium';
  } else if (size >= 10) {
    btnClass += ' btn--large';
    btnClassSecondary += ' btn--large';
  }

  const changeCounterValue = (operationType) => {
    if (operationType === 'increment') {
      setCounterValue(counter + 1);
    } else if ( operationType === 'decrement' && counter !== 0) {
      setCounterValue(counter - 1);
    }
  }

  return (
    <div>
      <button onClick={() => changeCounterValue('decrement')} className={btnClass}>-</button>
      <span>{counter}</span>
      <button onClick={() => changeCounterValue('increment')} className={btnClassSecondary}>+</button>
    </div>
  );
}

export default Counter;
