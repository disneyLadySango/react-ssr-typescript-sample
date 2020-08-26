import * as React from 'react';

export default function DateLabel() {
  const hoge: string = new Date().toDateString();
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <p>{hoge}</p>
}