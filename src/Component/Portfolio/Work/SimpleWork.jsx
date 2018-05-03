import React, { Component } from 'react';
class SimpleWork extends Component {

    clickHandler = (url) => {
        window.open(this.props.link,'_blank');
    }

    render() {
        const {image, id, link } = this.props;
        const { job, title } = this.props.work;
        // Use placeholder if no image
        const imgSrc = (image && `${process.env.PUBLIC_URL}/${image}`) || 'http://via.placeholder.com/636x398' ;

        return (
            <div onClick={this.clickHandler} className="c-simplework" >
                <img className="c-simplework__bgimage" alt={''} src={imgSrc} />
                <div className="c-simplework__panel">
                    <div className="c-simplework__job">
                        {job}
                    </div>
                    <div className="c-simplework__title">
                        {title}
                    </div>
                    <div className="c-simplework__learnMore">
                        {link}
                    </div>
                </div>
            </div>
        );
    }
}

export default SimpleWork;
