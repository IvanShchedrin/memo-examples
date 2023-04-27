import React, { useState } from 'react';

const Component = ({ title }) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    return (
        <>
            <Title text={title} size="large"/>
            <p>
                Current: {counter}
            </p>
            <button onClick={handleClick}>
                Put 1 more
            </button>
        </>
    );
};


const Title = ({ text, size }) => {
    console.log('render');
    return (
        <h2 className={size}>
            {text}
        </h2>
    );
};

export default Component;
