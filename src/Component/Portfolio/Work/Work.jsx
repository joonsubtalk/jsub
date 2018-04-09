import React, { Component } from 'react';
class Work extends Component {

    state = {
        refresh : false
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.image !== this.props.image) {
            this.setState({refresh: true});
            setTimeout(()=>{
                this.setState({refresh: false});
            }, 0);
        }
    }

    render() {
        const {image, offsetX, highlight, id, disableTransition} = this.props;
        // Use placeholder if no image
        const imgSrc = (image && `${process.env.PUBLIC_URL}/${image}`) || 'http://via.placeholder.com/636x398';

        return (
            <div className={`c-work ${highlight && id === 2 ? 'is-active' : ''}`} >
                <div className="c-work__bg"></div>
                <img className="c-work__bgimage" alt={''} src={imgSrc} />
            </div>)
    }
}

export default Work;
