import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import Work from './Work/Work';
import Line from './Line/Line';

import { info } from '../../configs/info.js';

const style = {
    transition: 'all ease .2s',
}
class Portfolio extends Component {

    state = {
        workList : [],
        isActiveHighlighted : false,
        activeDistanceX : 0,
        panning : false,
        disableTransition : false 
    }

    componentDidMount () {
        this.setState({ workList : info.portfolio.works })
    }

    renderWorks = (works) => {
        return works.map((work, idx) => {

            const {job, title, link, image} = work;

            return <Work key={job}
                    id= { idx }
                    job={job}
                    clickHandler={this.clickHandler}
                    title={title}
                    disableTransition={this.state.disableTransition}
                    offsetX={this.state.activeDistanceX}
                    link={link}
                    image={image} />
        })
    }

    popPushList = () => {
        const { workList } = this.state;
        const newList = workList.slice(1);
        
        newList.push(workList[0]);
        this.setState({workList : newList});
    }

    pushList = () => {
        const { workList } = this.state;
        const newList = workList.slice(-1);
        newList.push(workList);
        newList.pop();
        this.setState({workList : newList});
    }

    clickHandler = () => {
        console.log('click');
    }

    panList = (e) => {

        console.log(e);

        // Force next Item in list
        if (this.state.activeDistanceX > 50 && !this.state.panning) {

            this.setState({activeDistanceX : 0});
            this.popPushList();

        } else if (!this.state.panning) {

            this.setState({activeDistanceX : 0});

        } else {

            this.setState({activeDistanceX : e.deltaX});

        }

    }

    panEndHandler = (evt) => {
        this.setState({panning: false});
        this.setState({disableTransition: false});
        this.panList(evt);
    }

    panHandler = (evt) => {
        this.setState({panning: true});
        this.setState({disableTransition: true});
        switch(evt.direction) {
            case 2:
                console.log('pan Left');
                break;
            case 4:
                console.log('pan Right');
                break;
            default:
                break;
        }
        this.panList(evt);
    }

    swipeHandler = (evt) => {
        switch(evt.direction) {
            case 2:
                console.log('swipe Left');
                break;
            case 4:
        this.popPushList();
                break;
            default:
                break;
        }
    }

    render() {

        const { workList } = this.state;
        const activeJob = workList[0]; // always list first one

        const job = activeJob ? activeJob.job : '';
        const title = activeJob ? activeJob.title : '';

        return (
        <section className="c-portfolio">
            <div className="c-portfolio__header">
                <h2 className="c-portfolio__title">Work<span className="c-portfolio__dot">.</span></h2>
            </div>
            <Hammer onSwipe={this.swipeHandler} onPan={this.panHandler} onPanEnd={this.panEndHandler} >
                <div className="c-portfolio__container">
                    { this.renderWorks(workList) }
                    { /* <div><pre>{JSON.stringify(workList, null, 2) }</pre></div> */ }
                </div>
            </Hammer>
            <div>
                { title } - { job }
            </div>
        </section>)
    }
}

export default Portfolio;
