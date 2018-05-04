import React, { Component } from 'react';
import SimpleWork from './Work/SimpleWork';
import { info } from '../../configs/info.js';

class PortfolioDesktop extends Component {

    state = {
        workList : [],
        activePortfolio : 2
    }

    componentDidMount () {

        this.setState({ workList : info.portfolio.works });

    }

    selectActiveHandler = (evt) => {
        const selectedId = evt.target.parentNode.getAttribute('data-id');
        const {activePortfolio} = this.state;

        if (selectedId !== activePortfolio){
            this.setState({activePortfolio : Number(selectedId)});
        }
    }

    render() {

        const { activePortfolio, workList } = this.state;
        const active = workList && workList.length > 1 ? workList[activePortfolio] : '';
        const bgStyle = { background : `url(${active.bgImage}) no-repeat top right` }

        return (
            <section className="c-portfolioDesktop">
                <div className="c-portfolioDesktop__fullWidthContainer">
                    <div className="c-portfolioDesktop__info">
                        <div className="c-portfolioDesktop__header">{active.job}</div>
                        <div className="c-portfolioDesktop__subheader">{active.title}</div>
                        <div className="c-portfolioDesktop__description">{active.description}</div>
                        <div>
                            <a className="c-portfolioDesktop__learnMore" href={`${active.link}`}>{active.job} 
                            <svg viewBox="0 0 16 20" x="0px" y="0px" className="c-portfolioDesktop__icon">
                                <path d="M11 0l1.781 1.781-.5.5-4 4-.688.719 1.406 1.406.719-.688 4-4 .5-.5 1.781 1.781v-5h-5zm-11 2v14h14v-8h-2v6h-10v-10h6v-2h-8z"/>
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="c-portfolioDesktop__container c-portfolioDesktop__fullWidthContainer">
                    <div className="c-portfolioDesktop__workContainer">
                        <div className="c-portfolioDesktop__subheader">Works<span className="c-portfolioDesktop__dot">.</span></div>
                        <div className="c-portfolioDesktop__works">
                            { workList.map((work, idx) => {
                                    let isActive = false;
                                    if (idx === activePortfolio) {
                                        isActive = true;
                                    }
                                    return <SimpleWork work={work}
                                            key={idx}
                                            id={idx}
                                            isActive={isActive}
                                            clickHandler={this.selectActiveHandler} /> 
                                })
                            }
                        </div>
                    </div>
                </div>
                <div style={bgStyle} className="c-portfolioDesktop__bgContainer">
                    <div className="c-portfolioDesktop__fade"></div>
                </div>
            </section>
        )
    }
}

export default PortfolioDesktop;
