import React from 'react';

const Component = () => {
    return (
        <ComponentWithChildren
            title={<h2>Title as element</h2>}
        >
            Child
        </ComponentWithChildren>
    )
}

const ComponentWithChildren = ({ children, title }) => {
    return (
        <div>
            {title}
            {children}
        </div>
    );
};

export default Component;
