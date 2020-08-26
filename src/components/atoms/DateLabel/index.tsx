import React from 'react';

const DateLabel: React.FC = () => {
  const hoge: string = new Date().toDateString();
  return <p>{hoge}::::</p>
}

export default DateLabel;
