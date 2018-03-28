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
        activeWork : 0,
        workList : [],
        isActiveHighlighted : false
    }

    componentDidMount () {
        this.setState({ workList : info.portfolio.works })
    }

    renderWorks = (works) => {
        return works.map((work) => {

            const {job, title, link, image} = work;

            return <Work key={job} 
                    job={job}
                    clickHandler={this.clickHandler}
                    title={title}
                    link={link}
                    image={image} />
        })
    }

    popPushList = () => {
        const { workList } = this.state;
        console.log(workList);
        const newList = workList.slice(1);

        newList.push(workList[0]);
        console.log(newList);

        this.setState({workList : newList});
    }

    clickHandler = () => {
        console.log('click');
    }

    swipeHandler = (evt) => {
        switch(evt.direction) {
            case 2:
                console.log('swipe Left');
                break;
            case 4:
                console.log('swipe Right');
                break;
            default:
                break;
        }
        this.popPushList();
    }

    render() {

        const { workList, activeWork } = this.state;
        const activeJob = workList[activeWork];

        const job = activeJob ? activeJob.job : '';
        const title = activeJob ? activeJob.title : '';

        return (
        <section className="c-portfolio">
            <div className="c-portfolio__header">
                <h2 className="c-portfolio__title">Work<span className="c-portfolio__dot">.</span></h2>
            </div>
            <Hammer onSwipe={this.swipeHandler} >
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
