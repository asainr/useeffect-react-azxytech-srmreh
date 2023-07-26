import React, { useState, useEffect } from 'react';

export default ({ name }) => {
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('useEffect called');
    setEffectCount(effectCount + 1);
    document.title = name + count;
    return () => {
      console.log('useEffect on clean');
    };
  }, []);

  return (
    <>
      <h1>Hello {name}!</h1>
      Count: {count}
      <br />
      Effect count: {effectCount}
      <button onClick={increment}>increment</button>
    </>
  );
};
