import * as React from 'react';

export default function DateLabel() {
  const hoge: string = new Date().toDateString();
  return <p>{hoge}</p>
}