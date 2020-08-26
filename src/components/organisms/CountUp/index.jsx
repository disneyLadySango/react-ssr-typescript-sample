import React, { useState } from 'react';
import DateLabel from 'components/atoms/DateLabel';

export default function CountUp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
      <DateLabel />
    </>
  );
}
