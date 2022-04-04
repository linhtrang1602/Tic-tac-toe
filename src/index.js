import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
}

class Square extends React.Component {
    render() {
        return (
            <button
                className="square"
                onClick={function() {console.log('click'); }}>
                {this.props.value}
            </button>
        );
    }
}
ReactDOM.render(<Square />, document.getElementById('root'));