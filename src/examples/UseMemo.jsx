import React, { useState } from 'react';

const Component = () => {
    const [num, setNum] = useState(1);
    const [showTip, setShowTip] = useState(false);

    const onChange = event => {
        setNum(+event.target.value);
    };

    const onClick = () => {
        setShowTip(!showTip);
    };

    const factorial = getFactorial(num);

    return (
        <>
            <section>
                Input number:
                <input type="number" onChange={onChange}/>
            </section>
            <section>
                Factorial is {factorial}
            </section>
            <button onClick={onClick}>
                Toggle tip
            </button>
            {showTip && (
                <p>
                    The factorial, symbolized by an exclamation mark (!), is a quantity
                    defined for all integers greater than or equal to 0.
                </p>
            )}
        </>
    );
}


const getFactorial = (num) => {
    console.log('get factorial')
    const calculateFactorial = (x) => x <= 0 ? 1 : x * calculateFactorial(x - 1);
    return calculateFactorial(num);
}

export default Component;
