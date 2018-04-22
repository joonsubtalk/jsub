import React, { Component } from 'react';
class Work extends Component {

    render() {
        const {image, id} = this.props;
        // Use placeholder if no image
        const imgSrc = (image && `${process.env.PUBLIC_URL}/${image}`) || 'http://via.placeholder.com/636x398' ;
        const classnameModifier = `c-work__item-${id+1}`;

        return (
            <div className={`c-work ${classnameModifier}`}>
                <img className="c-work__bgimage" alt={''} src={imgSrc} />
            </div>
        );
    }
}

export default Work;
