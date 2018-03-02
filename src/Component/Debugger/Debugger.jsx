import React, { Component } from 'react';

const styles= {
    position : 'fixed',
    zIndex : 999999,
    backgroundColor : '#000',
    padding: '.5em 1.5em',
    color : '#fff'
}

class Debugger extends Component {
    render () {
        return(<div style={styles}>
            Type
        </div>);
    }
}

export default Debugger;