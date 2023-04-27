import React, { useState } from 'react';

const Component = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit message: ', message);
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    console.log('render component');

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                onChange={handleChange}
                placeholder="Type your message here"
            />
            <button type="submit">
                Send
            </button>
        </form>
    );
}

export default Component;
