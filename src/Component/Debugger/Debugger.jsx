import React, { Component } from 'react';

const styles= {
    position : 'fixed',
    zIndex : 999999,
    backgroundColor : '#000',
    padding: '.5em 1.5em',
    bottom: 0,
    color : '#fff'
}

class Debugger extends Component {
    render () {
        return(<div className="o-debugger" style={styles}>
            Type
            <div className="o-debugger__type">
                type: 
            </div>
        </div>);
    }
}

export default Debugger;