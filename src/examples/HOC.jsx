import React, { useState } from 'react';

const Component = ({ title }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <Title text={title} size="large" />
      <button onClick={handleClick}>
        Current: {counter}, put 1 more
      </button>
    </>
  );
};

const Title = ({ text, size }) => {
  return (
    <h2 className={size}>
      {text}
    </h2>
  );
};

export default Component;
