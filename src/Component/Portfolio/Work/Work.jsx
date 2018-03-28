import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

class Work extends Component {

    state = {
        
    }

    panList = (e) => {
        console.log(e);
    }

    panHandler = (evt) => {
        switch(evt.direction) {
            case 2:
                console.log('pan Left');
                break;
            case 4:
                console.log('pan Right');
                break;
            default:
                break;
        }
        this.panList(evt);
    }

    render() {
        const {job, title, link, image, clickHandler, panHandler} = this.props;

        // Use placeholder if no image
        const imgSrc = image && `${process.env.PUBLIC_URL}/${image}` || 'http://via.placeholder.com/636x398' ;

        return (
        <Hammer onTap={clickHandler}
            onPan={this.panHandler}
        >
            <div className="c-work">
                <div className="c-work__bg"></div>
                <img className="c-work__bgimage" src={imgSrc} />
            </div>
        </Hammer>)
    }
}

export default Work;
