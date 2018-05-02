import React, { Component } from 'react';
import SimpleWork from './Work/SimpleWork';

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
        const bgStyle = { background : `url(${active.bgImage}) no-repeat center center` }

        return (
            <section className="c-portfolioDesktop">
                <div className="c-portfolioDesktop__container container">
                    <div className="c-portfolioDesktop__works">

                        { workList.map((work) => { 
                            return <SimpleWork work={work} /> 
                            })
                        }
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
