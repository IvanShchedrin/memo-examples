import React, { useState } from 'react';

const Component = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h2>Current: {counter}</h2>
      <Button
        text="Add 1 more"
        onClick={handleClick}
      />
    </>
  );
};

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default Component;
