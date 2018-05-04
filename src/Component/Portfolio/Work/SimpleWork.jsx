import React, { Component } from 'react';
class SimpleWork extends Component {

    render() {
        const {id, link, isActive, clickHandler } = this.props;
        const { job, image } = this.props.work;
        // Use placeholder if no image
        const imgSrc = (image && `${process.env.PUBLIC_URL}/${image}`) || 'http://via.placeholder.com/636x398' ;

        return (
            <div onClick={clickHandler} className={`c-simplework ${isActive ? 'c-simplework--active' : ''}`} >
                <div className="c-simplework__container" data-id={id}>
                    <img className="c-simplework__bgimage" alt={''} src={imgSrc}/>
                    <div className="c-simplework__panel">
                        <div className="c-simplework__job">
                            {job}
                        </div>
                        <div className="c-simplework__learnMore">
                            {link} 
                        </div>
                    </div>
                    <div className="c-simplework__active"></div>
                </div>
            </div>
        );
    }
}

export default SimpleWork;
