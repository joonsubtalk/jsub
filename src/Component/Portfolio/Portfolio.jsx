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
        idx : 0
    }

    componentDidMount () {
        this.setState({ workList : info.portfolio.works })
        console.log(
            `https://codepen.io/anon/pen/KoJNMP`
        )
    }

    renderWorks = (works) => {
        return works.map((work, idx) => {

            const {job, image} = work;

            return <SimpleWork key={idx + this.state.idx}
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
        this.setState({idx : this.state.idx+=1});
        this.setState({workList : newList});
    }

    popList = () => {
        const { workList } = this.state;

        const newList = [workList[workList.length-1], ...workList.slice(0, -1)];

        this.setState({idx : this.state.idx-=1});
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

    render() {

        const { workList, isActiveHighlighted, finishedSummaryAnimation } = this.state;
        const activeJob = workList[2]; // always list first one

        const job = activeJob ? activeJob.job : '';
        const title = activeJob ? activeJob.title : '';
        const description = activeJob ? activeJob.description : '';
        const link = activeJob && activeJob.link ? activeJob.link : undefined;
        console.log("description", description);

        return (
        <section className={`c-portfolio ${isActiveHighlighted ? 'c-portfolio--active' : ''}`}>
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
