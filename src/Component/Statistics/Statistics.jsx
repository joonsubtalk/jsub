import React, { Component } from 'react';

class Statistics extends Component {

    render() {

        const { shouldOpen } = this.props;

        return(
            <section className={`c-statistics ${shouldOpen ? 'c-statistics--isActive' : ''}`}>
                <div className="container">
                    <div className="c-statistics__header">
                        Service<span className="c-statistics__period">.</span>
                    </div>
                    <div className="c-statistics__container">
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">Performance Driven</div>
                            <div className="c-statistics__title">Performance</div>
                            <ul>
                                <li>Mobile First Design</li>
                                <li>CSS BEM Methodologies</li>
                                <li>Minimized assets</li>
                                <li>Regression Testing</li>
                            </ul>

                            <form>
                                <label className="sell__label" htmlFor="city">
                                    Great! What's your name?<br />
                                    <input className="sell__inputText js-city" type="text" id="city" name="city" />
                                </label>

                                Awesome! { '{name}' }, what type of project are you interested in?<br />
                                <div>
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                </div>

                            </form>


                        </div>
                        <div className="c-statistics__item">
                            <div className="c-statistics__stat">Professional &amp; Sleek</div>
                            <div className="c-statistics__title">Pushed</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Statistics;