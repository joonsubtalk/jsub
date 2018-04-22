import React, { Component } from 'react';
class SimpleWork extends Component {

    clickHandler = (url) => {
        window.open(this.props.link,'_blank');
    }

    render() {
        const {image, id, link} = this.props;
        // Use placeholder if no image
        const imgSrc = (image && `${process.env.PUBLIC_URL}/${image}`) || 'http://via.placeholder.com/636x398' ;
        const classnameModifier = `c-work__item-${id+1}`;

        return (
            <div onClick={this.clickHandler} className={`c-work ${classnameModifier}`}>
                <img className="c-work__bgimage" alt={''} src={imgSrc} />
            </div>
        );
    }
}

export default SimpleWork;
