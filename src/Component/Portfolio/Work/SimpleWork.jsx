import React, { Component } from 'react';
class SimpleWork extends Component {

    clickHandler = (url) => {
        window.open(this.props.link,'_blank');
    }

    render() {
        const {image, id } = this.props;
        const { job, title, description } = this.props.work;
        // Use placeholder if no image
        const imgSrc = (image && `${process.env.PUBLIC_URL}/${image}`) || 'http://via.placeholder.com/636x398' ;
        const classnameModifier = `c-simplework__item-${id+1}`;

        return (
            <div onClick={this.clickHandler} className={`c-simplework ${classnameModifier}`}>
                <img className="c-simplework__bgimage" alt={''} src={imgSrc} />
                <div className="c-simplework__panel">
                    <div className="c-simplework__job">
                        {job}
                    </div>
                    <div className="c-simplework__title">
                        {title}
                    </div>
                    <div className="c-simplework__description">
                        {description}
                    </div>
                </div>
            </div>
        );
    }
}

export default SimpleWork;
