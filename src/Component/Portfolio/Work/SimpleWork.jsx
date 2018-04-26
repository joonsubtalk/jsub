import React, { Component } from 'react';
class SimpleWork extends Component {

    clickHandler = (url) => {
        window.open(this.props.link,'_blank');
    }

    render() {
        const {image, id, link} = this.props;
        const { job, title, description, years } = this.props.work;
        // Use placeholder if no image
        const imgSrc = (image && `${process.env.PUBLIC_URL}/${image}`) || 'http://via.placeholder.com/636x398' ;
        const classnameModifier = `c-work__item-${id+1}`;

        return (
            <div onClick={this.clickHandler} className={`c-work ${classnameModifier}`}>
                <img className="c-work__bgimage" alt={''} src={imgSrc} />
                <div className="c-work__panel">
                    <div className="c-work__job">
                        {job}
                    </div>
                    <div className="c-work__title">
                        {title}
                    </div>
                    <div className="c-work__accolades">
                        { years && <div className="c-work__years">{ years }</div> }
                    </div>
                </div>
            </div>
        );
    }
}

export default SimpleWork;
