import React, { Component } from 'react';
import './work.css';

class Work extends Component {
    render() {
        const {job, title, link, image} = this.props;

        // Use placeholder if no image
        const imgSrc = image && `${process.env.PUBLIC_URL}/${image}` || 'http://via.placeholder.com/636x398' ;

        return (
        <div className="c-work">
            <div className="c-work__job">
                {job}
            </div>
            <div className="c-work__title">
                {title}
            </div>
            <div className="c-work__link">
                { /*link*/}
            </div>
            <div className="c-work__bg">
                <img className="c-work__bgimage" src={imgSrc} />
            </div>
        </div>)
    }
}

export default Work;
