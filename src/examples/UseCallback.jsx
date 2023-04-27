import React, { useState, memo } from 'react';

const Component = ({ increaseBy = 1 }) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + increaseBy);
    };

    return (
        <>
            <p>Current: {counter}</p>
            <Button
                text="Add more"
                onClick={handleClick}
            />
        </>
    );
};


const Button = memo(({ text, onClick }) => {
    console.log('render button');
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
});

export default Component;
