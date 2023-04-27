import React, { memo, useMemo, useState } from 'react';


export const Test = () => {
    const [value, setValue] = useState('');
    
    const titleComponent = useMemo(() => () => <InnerTest text='h2' />, []);

    return (
        <>
            <OuterTest
                Title={titleComponent}
            />
            <textarea value={value} onChange={(e) => setValue(e.target.value)} />
        </>
    );
};

const OuterTest = memo(({ Title }) => {
    console.log('render inner');
    return (
        <div>
            <Title /> - is a title
        </div>
    );
});

const InnerTest = memo(({ text }) => {
    return (
        <span>{text}</span>
    )
});
