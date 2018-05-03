import React, { Component } from 'react';
import SimpleWork from './Work/SimpleWork';
import { info } from '../../configs/info.js';

class PortfolioDesktop extends Component {

    state = {
        workList : []
    }

    componentDidMount () {

        this.setState({ workList : info.portfolio.works });

    }
    render() {

        const { workList } = this.state;
        const active = workList && workList.length > 1 ? workList[2] : '';
        const bgStyle = { background : `url(${active.bgImage}) no-repeat top right` }

        return (
            <section className="c-portfolioDesktop">
                <div className="c-portfolioDesktop__fullWidthContainer">
                    <div className="c-portfolioDesktop__info">
                        <div className="c-portfolioDesktop__header">{active.job}</div>
                        <div className="c-portfolioDesktop__subheader">{active.title}</div>
                        <div className="c-portfolioDesktop__description">{active.description}</div>
                        <div><a className="c-portfolioDesktop__learnMore" href={active.link}>{active.job}</a></div>
                    </div>
                </div>
                <div className="c-portfolioDesktop__container c-portfolioDesktop__fullWidthContainer">
                    <div className="c-portfolioDesktop__workContainer">
                        <div className="c-portfolioDesktop__subheader">Works</div>
                        <div className="c-portfolioDesktop__works">

                        { workList.map((work, idx) => { 
                            return <SimpleWork work={work} key={idx} /> 
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
