import React from 'react';

const Component = () => {
    const handleClick = () => {
        console.log('click');
    };

    return (
        <button onClick={handleClick}>
            Click me!
        </button>
    );
};

export default Component;
