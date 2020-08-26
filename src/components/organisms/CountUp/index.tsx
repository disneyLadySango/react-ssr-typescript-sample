import React, { useState } from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'components/atoms/DateLabel' or... Remove this comment to see the full error message
import DateLabel from 'components/atoms/DateLabel';

export default function CountUp() {
  const [count, setCount] = useState(0);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <h1>{count}</h1>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DateLabel />
    </>
  );
}
