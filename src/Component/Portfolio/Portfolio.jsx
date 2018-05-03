import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import SimpleWork from './Work/SimpleWork';
import Work from './Work/Work';

import { info } from '../../configs/info.js';

class Portfolio extends Component {

    state = {
        workList : [],
        wait : false,
        isActiveHighlighted : false,
        activeDistanceX : 0,
        panning : false,
        finishedSummaryAnimation : false,
        counter : 0,
        hasActioned : false
    }

    componentDidMount () {

        this.setState({ workList : info.portfolio.works });

    }

    renderWorks = (works) => {

        return works.map((work, idx) => {

            const {image} = work;

            if (idx > 4) return '';

            return <Work key={idx + this.state.counter}
                    id= { idx }
                    highlight={this.state.isActiveHighlighted}
                    image={image} />
        })
    }

    renderSimpleWorks = (works) => {

        if (works.length < 3) {
            return null;
        }

        const newList = works.slice(2);
        newList.push(works[0], works[1]);

        return newList.map((work, idx) => {

            const {image, link} = work;

            return <SimpleWork key={idx + this.state.counter}
                    id={ idx }
                    link={link}
                    work={work}
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

        if (!this.state.hasActioned)
            this.setState({hasActioned : true });
    }

    render() {

        const { workList, isActiveHighlighted, finishedSummaryAnimation, hasActioned } = this.state;
        const activeJob = workList[2];
        const job = activeJob ? activeJob.job : '';
        const title = activeJob ? activeJob.title : '';
        const description = activeJob ? activeJob.description : '';
        const link = activeJob && activeJob.link ? activeJob.link : undefined;

        return (
        <Hammer onTap={this.clickHandler}
            onSwipe={this.swipeHandler}>
            <section className={`c-portfolio js-work ${isActiveHighlighted ? 'c-portfolio--active' : ''} ${hasActioned ? 'c-portfolio--hasActioned' : ''}`}>
                <div className="c-portfolio__content">
                    <div className="c-portfolio__header">
                        <h2 className="c-portfolio__title">Works<span className="c-portfolio__dot">.</span></h2>
                    </div>
                    <div className="c-portfolio__container--mobile">
                        { this.renderWorks(workList) }
                    </div>
                    <div className="c-portfolio__container--nonMobile">
                        { this.renderSimpleWorks(workList) }
                    </div>
                </div>

                <div className={`c-portfolio__description ${finishedSummaryAnimation ? 'c-portfolio__description--z' : 'c-portfolio__description--zs'}`}>
                    <div className="c-portfolio__pullup">
                        <div className="c-portfolio__profession">
                            <div className="c-portfolio__work">{ job }</div>
                            <div className="c-portfolio__jobTitle">{ title }</div>
                        </div>
                        <div className={`c-portfolio__learnMore`}>Learn More</div>
                        <div className="c-portfolio__summary">
                            { this.renderSummary(description)}
                            
                            <div className="c-portfolio__action">
                                <a className="c-portfolio__link" href={ link }>
                                    { job }
                                    <svg viewBox="0 0 16 20" x="0px" y="0px" className="c-portfolio__icon">
                                        <path d="M11 0l1.781 1.781-.5.5-4 4-.688.719 1.406 1.406.719-.688 4-4 .5-.5 1.781 1.781v-5h-5zm-11 2v14h14v-8h-2v6h-10v-10h6v-2h-8z"/>
                                    </svg>
                                </a>
                                <a className="c-portfolio__link" >
                                    Close
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Hammer>
        )
    }
}

export default Portfolio;
