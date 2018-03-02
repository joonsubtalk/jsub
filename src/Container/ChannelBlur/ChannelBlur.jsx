import React, { Component } from 'react';
import { getHeight, getWidth } from '../../helpers/Responsive';
import './channelBlur.css';

class ChannelBlur extends Component {

    state = {
        wait : false,
        // Components's dimensions
        width : 0,
        height : 0,
        // Browser dimensions
        windowWidth : 0,
        windowHeight : 0,
        // Offset height until component
        offsetY : 0,
        // Shadow's coord
        compOffsetX : 0,
        compOffsetY : 0,
        // Main's coord
        compX : 0,
        compY : 0,
        compHeight : 0,
        compWidth : 0,
        distance : 0
    }

    handleMouseMove = (e) => {
        if (!this.state.wait){
            this.setState({wait : true});

            const { clientX, clientY } = e;
            const { compX, compY, compHeight, compWidth, offsetY } = this.state;

            // helps for blur
            const distance = this.calculateDistance({x1 : clientX, y1 : clientY - offsetY }, { x2 : compX + compWidth/2, y2 : compY + compHeight/2 });

            this.setState({
                compOffsetX : compX - (clientX - compX - compWidth/2),
                compOffsetY : compY - (clientY - compY - compHeight/2) + offsetY,
                distance : distance
            });

            setTimeout(() => {
                this.setState({wait : false});
            }, 50);
        }
    }

    calculateDistance = (coord1,coord2) => {
        const {x1,y1} = coord1;
        const {x2,y2} = coord2

        return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
    }

    print = (e) => {
        console.log(this.state.distance);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        this.updateComponentInfo();
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateComponentInfo = () => {
        const { height } = document.querySelector('.o-channelBlur').getBoundingClientRect();

        // place the main where it should be...
        const { height : compHeight,
            width : compWidth } = document.querySelector('.o-channelBlur__m').getBoundingClientRect();

        this.setState({compX: (getWidth()/2)-(compWidth/2), compY: (height/2)-(compHeight/2), compHeight, compWidth});
    }

    updateWindowDimensions = () => {
        const { height, top} = document.querySelector('.o-channelBlur').getBoundingClientRect();

        // place the main where it should be...
        const { height : compHeight,
            width : compWidth } = document.querySelector('.o-channelBlur__m').getBoundingClientRect();

        this.setState({compX: (getWidth()/2)-(compWidth/2), compY: (height/2)-(compHeight/2), compHeight, compWidth});
        const windowWidth = getWidth();
        const windowHeight = getHeight();
        this.setState({ 
            width : getWidth(), //same as windows...
            height : height,
            windowWidth : windowWidth,
            windowHeight : windowHeight,
            offsetY: top
        });


    }

    getBlurPixel = (distance) => {

        const MAX_BLUR = 20;

        if (distance < 1) return 0;
        if (distance > 100) return MAX_BLUR;

        const pixel = MAX_BLUR / (100/distance);

        return pixel;
    }

    render() {

        const { compOffsetX, compOffsetY, distance, compX, compY } = this.state;

        const yXloc = `${compOffsetX}px`;
        const cXloc = `${compOffsetX + ( compX - compOffsetX ) * 2}px`;
        const yYloc = `${compOffsetY}px`;
        const cYloc = `${compOffsetY + ( compY - compOffsetY ) * 2}px`;
        const blur = `${this.getBlurPixel(distance)}px`;
        return (
            <div onClick={this.print} onMouseMove={this.handleMouseMove} className="o-channelBlur">
                <div className="o-channelBlur__container">
                    <div className="pointer">x</div>
                    <div style={{left: yXloc, top: yYloc, filter : `blur(${blur})`, textShadow: `0 0 ${blur} rgba(255,255,0,1)` }} className="o-channelBlur__y o-channelBlur__content">Awesome</div>
                    <div style={{left: compX, top: compY, filter : `blur(${blur})`, textShadow: `0 0 ${blur} rgba(255,0,255,1)` }} className="o-channelBlur__m o-channelBlur__content">Awesome</div>
                    <div style={{left: cXloc, top: cYloc, filter : `blur(${blur})`, textShadow: `0 0 ${blur} rgba(0,255,255,1)`}} className="o-channelBlur__c o-channelBlur__content">Awesome</div>
                </div>
            </div>
        )
    }

}

export default ChannelBlur;
