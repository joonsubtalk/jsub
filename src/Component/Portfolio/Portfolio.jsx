import React, { Component } from 'react';
import Work from './Work/Work';
import './portfolio.css';

import { info } from '../../configs/info.js';

class Portfolio extends Component {

    renderWorks = (works) => {
        return works.map((work) => {

            const {job, title, link, image} = work;

            return <Work key={job} 
                    job={job}
                    title={title}
                    link={link}
                    image={image} />
        })
    }

    render() {

        const { works } = info.portfolio ;

        return (
        <div className="c-portfolio u-baseSpacing">
            <div className="container">
                <div className="c-portfolio__container">
                    { this.renderWorks(works) }
                </div>
            </div>
        </div>)
    }
}

export default Portfolio;
