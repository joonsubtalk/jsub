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
        const imgSrc = image && `${process.env.PUBLIC_URL}/${image}` || 'http://via.placeholder.com/636x398' ;
        const style = id === 0 && !this.state.refresh? { 
            right : `-${offsetX/10}em`,
            transition : `${ disableTransition ? 'none' : 'all ease .5s'}`
        } : {
            height: `378px`,
            width: `202px`,
            transition : `${ disableTransition ? 'none' : 'all ease .5s'}`
        };
        const bgstyle = { opacity : id * .20 };

        console.log('hi')

        return (
            <div className={`c-work ${highlight && id === 0 ? 'is-active' : ''}`} style={style}>
                <div className="c-work__bg" style={bgstyle}></div>
                <img className="c-work__bgimage" src={imgSrc} />
            </div>)
    }
}

export default Work;
