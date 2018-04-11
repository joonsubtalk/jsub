import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import Work from './Work/Work';
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
        swipe : 0,
        animating : false
    }

    componentDidMount () {
        this.setState({ workList : info.portfolio.works })
    }

    renderWorks = (works) => {
        return works.map((work, idx) => {

            const {job, image} = work;

            return <SimpleWork key={job}
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
        
        this.setState({swipe : 2});

        setTimeout(()=>{
            this.setState({swipe : 0});

            newList.push(workList[0]);
            this.setState({workList : newList});
            this.setState({animating : false });
        },200);
    }

    popList = () => {
        const { workList } = this.state;

        const newList = [workList[workList.length-1], ...workList.slice(0, -1)];

        this.setState({swipe : 4});

        setTimeout(()=>{
            this.setState({swipe : 0});
            this.setState({workList : newList});
            this.setState({animating : false });
        },200);
    }

    clearSummaryAnimations = () => {

        this.setState({finishedSummaryAnimation : true });

        setTimeout(()=>{

            this.setState({finishedSummaryAnimation : false });

        }, 700)

    }

    swipeHandler = (e) => {

        if (this.state.animating) return false;

        this.setState({animating : true });
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
        console.log(this.state.workList);
        
        if (this.state.isActiveHighlighted)
            this.clickHandler();

    }

    clickHandler = () => {

        this.setState({isActiveHighlighted : !this.state.isActiveHighlighted});

        if (!this.state.isActiveHighlighted) {
            this.clearSummaryAnimations();
        }
    }

    getDirection(direction) {
        switch (direction) {
            case 2:
                return 'c-portfolio--moveRight';
            case 4:
                return 'c-portfolio--moveLeft';
            default:
                return '';
        }
    }

    render() {

        const { workList, isActiveHighlighted, finishedSummaryAnimation, swipe } = this.state;
        const activeJob = workList[2]; // always list first one

        const job = activeJob ? activeJob.job : '';
        const title = activeJob ? activeJob.title : '';
        const description = activeJob ? activeJob.description : '';
        const link = activeJob && activeJob.link ? activeJob.link : undefined;
        console.log("description", description);

        return (
        <section className={`c-portfolio ${this.getDirection(swipe)} ${isActiveHighlighted ? 'c-portfolio--active' : ''}`}>
            <div className="c-portfolio__content">
                <div className="c-portfolio__header">
                    <h2 className="c-portfolio__title">Work<span className="c-portfolio__dot">.</span></h2>
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
                    {/*
                    <div className="c-portfolio__summary">
                        { this.renderSummary(description)}
                        <a className="c-portfolio__link" href={ link }>visit { job }</a>
                    </div>
                    */}
                </div>
            </div>
        </section>)
    }
}

export default Portfolio;
