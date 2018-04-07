import React, { Component } from 'react';

class SimpleWork extends Component {

    render() {
        const {image, id} = this.props;
        // Use placeholder if no image
        const imgSrc = (image && `${process.env.PUBLIC_URL}/${image}`) || 'http://via.placeholder.com/636x398' ;
        const bgstyle = { opacity : id === 0 ? 0 : .20 }
        console.log('simple')

        return (
            <div className="c-work">
                <div className="c-work__bg" style={bgstyle}></div>
                <img className="c-work__bgimage" alt={''} src={imgSrc} />
            </div>
        );
    }
}

export default SimpleWork;
