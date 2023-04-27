import React, { useState, useCallback } from 'react';

const Component = () => {
    const [message, setMessage] = useState('');

    const handleChange = useCallback((event) => {
        setMessage(event.target.value);
    }, [setMessage]);

    return (
        <Textarea
            onChange={handleChange}
            value={message}
        />
    );
}

const Textarea = ({ value, onChange }) => (
    <textarea
        onChange={onChange}
        value={value}
        placeholder="Type your message here"
    />
);

export default Component;
