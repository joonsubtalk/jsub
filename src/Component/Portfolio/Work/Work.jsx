import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

class Work extends Component {

    render() {
        const {job, title, link, image, offsetX, clickHandler, highlight, id, disableTransition} = this.props;

        // Use placeholder if no image
        const imgSrc = image && `${process.env.PUBLIC_URL}/${image}` || 'http://via.placeholder.com/636x398' ;
        const style = id === 0 ? { 
            transform : `translate(${offsetX}%,-50%)`,
            transition : `${ disableTransition ? 'none' : 'all ease .5s'}`
        } : {};
        const bgstyle = { opacity : id * .25 }

        return (
        <Hammer onTap={clickHandler}>
            <div className={`c-work ${highlight && id === 0 ? 'is-active' : ''}`} style={style}>
                <div className="c-work__bg" style={bgstyle}></div>
                <img className="c-work__bgimage" src={imgSrc} />
            </div>
        </Hammer>)
    }
}

export default Work;
