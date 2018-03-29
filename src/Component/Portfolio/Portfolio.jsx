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
        disableTransition : false,
        finishedSummaryAnimation : false
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
                    highlight={this.state.isActiveHighlighted}
                    clickHandler={this.clickHandler}
                    title={title}
                    disableTransition={this.state.disableTransition}
                    offsetX={this.state.activeDistanceX}
                    link={link}
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
        this.setState({workList : newList});
    }

    clearSummaryAnimations = () => {

        this.setState({finishedSummaryAnimation : true });

        setTimeout(()=>{

            this.setState({finishedSummaryAnimation : false });

        }, 500)

    }

    clickHandler = () => {

        this.setState({isActiveHighlighted : !this.state.isActiveHighlighted});


        if (!this.state.isActiveHighlighted) {
            this.clearSummaryAnimations();
        }
    }

    panList = (e) => {

        // Force next Item in list
        if (this.state.activeDistanceX > 50 && !this.state.panning) {

            this.setState({activeDistanceX : 0});
            this.setState({isActiveHighlighted : false});
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
            case 4:
                console.log('pan Right');
                break;
            default:
                break;
        }
        this.panList(evt);
    }

    render() {

        const { workList, isActiveHighlighted, finishedSummaryAnimation } = this.state;
        const activeJob = workList[0]; // always list first one

        const job = activeJob ? activeJob.job : '';
        const title = activeJob ? activeJob.title : '';
        const description = activeJob ? activeJob.description : '';
        console.log(description);

        return (
        <section className={`c-portfolio ${isActiveHighlighted ? 'c-portfolio--active' : ''}`}>
            <div className="c-portfolio__header">
                <h2 className="c-portfolio__title">Work<span className="c-portfolio__dot">.</span></h2>
            </div>
            <Hammer onPan={this.panHandler} onPanEnd={this.panEndHandler} >
                <div className="c-portfolio__container">
                    { this.renderWorks(workList) }
                    { /* <div><pre>{JSON.stringify(workList, null, 2) }</pre></div> */ }
                </div>
            </Hammer>
            <div className={`c-portfolio__description ${finishedSummaryAnimation ? 'c-portfolio__description--z' : 'c-portfolio__description--zs'}`}>
                <div className="c-portfolio__pullup">
                    <div className="c-portfolio__profession">
                        <div className="c-portfolio__work">{ job }</div>
                        <div className="c-portfolio__jobTitle">{ title }</div>
                    </div>
                    <div className="c-portfolio__summary">
                        { this.renderSummary(description)}
                    </div>
                </div>
            </div>
        </section>)
    }
}

export default Portfolio;
