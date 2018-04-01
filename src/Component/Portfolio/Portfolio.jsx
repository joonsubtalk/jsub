import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import Work from './Work/Work';
import SimpleWork from './Work/SimpleWork';
import Line from './Line/Line';

import { info } from '../../configs/info.js';

const style = {
    transition: 'all ease .2s',
}
class Portfolio extends Component {

    state = {
        workList : [],
        wait : false,
        isActiveHighlighted : false,
        activeDistanceX : 0,
        panning : false,
        disableTransition : false,
        finishedSummaryAnimation : false
    }

    componentDidMount () {
        this.setState({ workList : info.portfolio.works })
    }

    renderActiveWork = (work) => {

        if (!work) return;
        const {job, title, link, image} = work;
        return <Work
                id={0}
                highlight={this.state.isActiveHighlighted}
                disableTransition={this.state.disableTransition}
                offsetX={this.state.activeDistanceX}
                image={image}
                />
    }

    renderWorks = (works) => {
        return works.map((work, idx) => {

            const {job, title, link, image} = work;

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

        newList.push(workList[0]);
        this.setState({workList : newList});
    }

    clearSummaryAnimations = () => {

        this.setState({finishedSummaryAnimation : true });

        setTimeout(()=>{

            this.setState({finishedSummaryAnimation : false });

        }, 700)

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
        this.panList(evt);
        setTimeout(()=> {
            this.setState({disableTransition: false});
        },0);
    }

    panHandler = (evt) => {

        if (!this.state.wait){

            this.setState({wait : true});

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

            setTimeout(() => {
                this.setState({wait : false});
            }, 25);

        }
    }

    render() {

        const { workList, isActiveHighlighted, finishedSummaryAnimation } = this.state;
        const activeJob = workList[0]; // always list first one

        const job = activeJob ? activeJob.job : '';
        const title = activeJob ? activeJob.title : '';
        const description = activeJob ? activeJob.description : '';
        const link = activeJob && activeJob.link ? activeJob.link : undefined;
        console.log("description", description);

        return (
        <section className={`c-portfolio ${isActiveHighlighted ? 'c-portfolio--active' : ''}`}>
            <div className="c-portfolio__header">
                <h2 className="c-portfolio__title">Work<span className="c-portfolio__dot">.</span></h2>
            </div>
            <Hammer onTap={this.clickHandler} onPan={this.panHandler} onPanEnd={this.panEndHandler} >
                <div className="c-portfolio__container">
                    { this.renderActiveWork(activeJob) }
                    { this.renderWorks(workList.slice(1, workList.length)) }
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
                        <a className="c-portfolio__link" href={ link }>visit { job }</a>
                    </div>
                </div>
            </div>
        </section>)
    }
}

export default Portfolio;
