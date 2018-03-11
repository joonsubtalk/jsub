import React, { Component } from 'react';

class Statistics extends Component {

    render() {

        const { shouldOpen } = this.props;

        return(
            <section className={`c-statistics ${shouldOpen ? 'c-statistics--isActive' : ''}`}>
                <div className="container">
                    <div>Woah, did ya just find the Easter Egg?</div>
                    <div className="c-statistics__container">
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">{Math.floor(Math.random()*400)}</div>
                            <div className="c-statistics__title">Pushed</div>
                        </div>
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">{Math.floor(Math.random()*400)}</div>
                            <div className="c-statistics__title">Pushed</div>
                        </div>
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">{Math.floor(Math.random()*400)}</div>
                            <div className="c-statistics__title">Pushed</div>
                        </div>
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">{Math.floor(Math.random()*400)}</div>
                            <div className="c-statistics__title">Pushed</div>
                        </div>
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">{Math.floor(Math.random()*400)}</div>
                            <div className="c-statistics__title">Pushed</div>
                        </div>
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">{Math.floor(Math.random()*400)}</div>
                            <div className="c-statistics__title">Pushed</div>
                        </div>
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">{Math.floor(Math.random()*400)}</div>
                            <div className="c-statistics__title">Pushed</div>
                        </div>
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">{Math.floor(Math.random()*400)}</div>
                            <div className="c-statistics__title">Pushed</div>
                        </div>
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">{Math.floor(Math.random()*400)}</div>
                            <div className="c-statistics__title">Pushed</div>
                        </div>
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">{Math.floor(Math.random()*400)}</div>
                            <div className="c-statistics__title">Pushed</div>
                        </div>
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">{Math.floor(Math.random()*400)}</div>
                            <div className="c-statistics__title">Pushed</div>
                        </div>
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">{Math.floor(Math.random()*400)}</div>
                            <div className="c-statistics__title">Pushed</div>
                        </div>
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">{Math.floor(Math.random()*400)}</div>
                            <div className="c-statistics__title">Pushed</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Statistics;