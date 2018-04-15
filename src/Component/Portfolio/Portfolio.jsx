import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import SimpleWork from './Work/SimpleWork';

import { info } from '../../configs/info.js';

class Portfolio extends Component {

    state = {
        workList : [],
        wait : false,
        isActiveHighlighted : false,
        activeDistanceX : 0,
        panning : false,
        finishedSummaryAnimation : false,
        counter : 0
    }

    componentDidMount () {

        this.setState({ workList : info.portfolio.works });

    }

    renderWorks = (works) => {
        return works.map((work, idx) => {

            const {image} = work;

            if (idx > 4) return '';

            return <SimpleWork key={idx + this.state.counter}
                    id= { idx }
                    highlight={this.state.isActiveHighlighted}
                    image={image} />
        })
    }

    renderSummary = (par) => {
        if (par.length < 1) return;
        return par.map((point, idx) => {
            return <p key={idx}>{point}</p>
        })

    }

    popPushList = () => {
        const { workList } = this.state;
        
        const newList = workList.slice(1);

        newList.push(workList[0]);
        this.setState((prevState, props) => ({
            counter: prevState.counter + 1
        })); 
        this.setState({workList : newList});
    }

    popList = () => {
        const { workList } = this.state;

        const newList = [workList[workList.length-1], ...workList.slice(0, -1)];

        this.setState((prevState, props) => ({
            counter: prevState.counter - 1
        })); 
        this.setState({workList : newList});
    }

    clearSummaryAnimations = () => {

        this.setState({finishedSummaryAnimation : true });

        setTimeout(()=>{

            this.setState({finishedSummaryAnimation : false });

        }, 700)

    }

    swipeHandler = (e) => {

        switch(e.direction) {
            case 4 :    // right
                this.popPushList();
                break;
            case 2 :    // left
                this.popList();
                break;
            default :
                break;
        }

        if (this.state.isActiveHighlighted)
            this.clickHandler();

    }

    clickHandler = () => {

        this.setState({isActiveHighlighted : !this.state.isActiveHighlighted});

        if (!this.state.isActiveHighlighted) {
            this.clearSummaryAnimations();
        }
    }

    render() {

        const { workList, isActiveHighlighted, finishedSummaryAnimation } = this.state;
        const activeJob = workList[2];
        const job = activeJob ? activeJob.job : '';
        const title = activeJob ? activeJob.title : '';
        const description = activeJob ? activeJob.description : '';
        const link = activeJob && activeJob.link ? activeJob.link : undefined;

        return (
        <section className={`c-portfolio ${isActiveHighlighted ? 'c-portfolio--active' : ''}`}>
            <div className="c-portfolio__content">
                <div className="c-portfolio__header">
                    <h2 className="c-portfolio__title">Work<span className="c-portfolio__dot">.</span></h2>
                    <svg x="0px" y="0px" viewBox="0 0 100 125">
                        <g transform="translate(0,-952.36218)">
                            <g transform="translate(-1042,1661.0003)" fill="#000000">
                                <path d="m 1085.9998,-688.63792 c -4.934,0 -8.9998,4.06589 -8.9998,9 l 0,24.31262 c -1.4863,-1.98823 -3.1032,-3.50857 -4.9999,-4.03125 -2.6004,-0.71657 -4.9298,0.2154 -6.4999,1.125 -1.8965,1.50647 -3.553,2.67825 -4.2187,5.0937 -0.6253,2.27855 -0.1636,4.72854 0.9375,7.5625 5.2715,12.6304 11.6573,24.87518 19.5309,33.90625 0.5581,0.64167 1.3995,1.02738 2.2499,1.0313 l 26.9995,0 c 0.6366,-0.002 1.2707,-0.2136 1.7813,-0.59375 3.1317,-2.32006 5.4709,-6.08072 7.4373,-10.5 1.9665,-4.41928 3.4485,-9.53811 4.2187,-14.53125 0.7702,-4.99314 0.8279,-9.93093 -0.3125,-14 -1.1596,-4.13782 -4.2185,-7.84087 -8.7811,-8.375 -0.7726,-0.022 -1.6051,0.10413 -2.2812,0.1875 -0.588,-1.13021 -1.3785,-2.03782 -2.25,-2.65625 -1.7123,-1.21517 -3.4033,-1.55552 -4.8749,-1.53125 -1.0559,0.0177 -2.015,0.37655 -2.9374,0.875 -0.3693,-0.44074 -0.6669,-1.00249 -1.0938,-1.3125 -1.7075,-1.24005 -3.4618,-1.5625 -4.9061,-1.5625 -0.6837,0 -1.3424,0.10374 -2,0.25 l 0,-15.25012 c 0,-4.93411 -4.0658,-9 -8.9998,-9 z m 0,6 c 1.7139,0 2.9999,1.28611 2.9999,3 l 0,21.00012 c -0.01,1.35442 1.0227,2.64333 2.3443,2.93944 1.3217,0.29611 2.8013,-0.43098 3.3744,-1.65819 1.0912,-1.41579 2.2257,-1.38369 3.6562,-0.875 0.3579,0.25995 0.625,0.40927 0.625,1.59375 0,1.34202 1.0043,2.62066 2.3103,2.92924 1.3061,0.30858 2.7802,-0.3835 3.3771,-1.58549 0.78,-1.6193 1.2883,-1.42176 2.6562,-0.90625 0.4101,0.29106 0.6562,0.43508 0.6562,1.5625 0.01,1.15381 0.7458,2.27058 1.8039,2.73065 1.0581,0.46007 2.378,0.23793 3.2273,-0.54315 0.033,0.0663 1.3356,-0.35545 1.8124,-0.1875 1.8589,0.2814 2.7682,1.34199 3.5312,4.03125 0.7905,2.78646 0.8405,7.00153 0.1563,11.4375 -0.6843,4.43597 -2.0883,9.12527 -3.8125,13 -1.5648,3.51666 -3.4482,6.14313 -4.9999,7.53125 l -24.2183,0 c -5.5931,-7.57441 -18.4973,-27.94873 -18.4372,-34.875 0.8109,-1.33321 2.0739,-2.1981 3.3437,-2.0625 1.5911,0.80298 1.9863,1.6274 2.9375,3.34375 l 3.9687,7.9375 c 0.5968,1.20199 2.0709,1.89407 3.377,1.58549 1.306,-0.30858 2.3145,-1.58722 2.3104,-2.92924 l 0,-36.00012 c 0,-1.71389 1.286,-3 2.9999,-3 z" fill="#000000" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/>
                                <path d="m 1068.875,-705.76826 -9,9 c -0.5128,0.45447 -0.863,1.34094 -0.875,2.125 0.024,0.80627 0.2317,1.49054 0.875,2.125 l 9,9 c 0.975,1.17669 3.2015,1.12096 4.375,0.125 1.2638,-1.07265 1.0751,-3.29964 -0.1562,-4.375 l -3.875,-3.875 c 11.1875,0 22.3749,0 33.5624,0 l -3.875,3.875 c -1.2315,1.07536 -1.42,3.30235 -0.1562,4.375 1.1735,0.99596 3.3531,1.0595 4.375,-0.125 l 9,-9 c 0.6433,-0.63446 0.8514,-1.31873 0.875,-2.125 -0.012,-0.78406 -0.3622,-1.67053 -0.875,-2.125 l -9,-9 c -1.0844,-0.97015 -3.2232,-1.28534 -4.375,-0.125 -1.1517,1.16035 -1.0752,3.29964 0.1562,4.375 l 3.875,3.875 c -11.1875,0 -22.3749,0 -33.5624,0 l 3.875,-3.875 c 1.2313,-1.07536 1.308,-3.21465 0.1562,-4.375 -1.3423,-1.13411 -2.9326,-0.87763 -4.375,0.125 z" fill="#000000" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <Hammer onTap={this.clickHandler}
                    onSwipe={this.swipeHandler}>
                    <div className="c-portfolio__container">
                        { this.renderWorks(workList) }
                    </div>
                </Hammer>
            </div>
            
            <div className={`c-portfolio__description ${finishedSummaryAnimation ? 'c-portfolio__description--z' : 'c-portfolio__description--zs'}`}>
                <div className="c-portfolio__pullup">
                    <div className="c-portfolio__profession">
                        <div className="c-portfolio__work">{ job }</div>
                        <div className="c-portfolio__jobTitle">{ title }</div>
                    </div>
                    <div className="c-portfolio__summary">
                        { this.renderSummary(description)}
                        
                        <a className="c-portfolio__link" href={ link }>
                            <svg viewBox="0 0 16 20" x="0px" y="0px" className="c-portfolio__icon">
                                <path d="M11 0l1.781 1.781-.5.5-4 4-.688.719 1.406 1.406.719-.688 4-4 .5-.5 1.781 1.781v-5h-5zm-11 2v14h14v-8h-2v6h-10v-10h6v-2h-8z"/>
                            </svg>
                            visit { job }
                        </a>
                    </div>
                </div>
            </div>
        </section>)
    }
}

export default Portfolio;
