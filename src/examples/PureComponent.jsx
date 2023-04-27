import React from 'react';

class Component extends React.Component {
    state = {
        counter: 0,
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render() {
        return (
            <>
                <Title text={this.props.title}/>
                <button onClick={this.handleClick}>
                    Current: {this.state.counter}, put 1 more
                </button>
            </>
        );
    }
}


class Title extends React.PureComponent {
    render() {
        console.log('render title');
        return (
            <h2>
                {this.props.text}
            </h2>
        );
    }
}

export default Component;
