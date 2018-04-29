import React, { Component } from 'react';

class Contact extends Component {

    state = {
        clientName : '',
        typeOfProject : 0,
        clientEmail : '',
        busy : false,
        sent : false,
        typingName : () => {},
        step : 1
    }

    changeHandler = (evt) => {
        // is a one letter name really a thing?
        let str = evt.target.value;
        str = str.replace(/\s+/g,' ').trim();

        switch(this.state.step) {
            case 1 :
                this.setState({clientName : str});
                break;
            case 3:
                this.setState({clientEmail : str});
                break;
        }

    }

    validateName = () => {
        const { clientName } = this.state;
        // name test
        // const rx = new RegExp("[a-zA-Z]");
        var reg = new RegExp(/[~`!#$%\^&*+=\[\]\\';,/{}|\\":<>\?]/);
        if (clientName.length <= 1)
            return 'Name should be longer';
        else if (reg.test(clientName))
            return 'No special characters';
        else
            return '';
    }

    validateEmail = () => {
        const { clientEmail } = this.state;
        // name test
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (clientEmail.length <= 2)
            return 'Email should be longer';
        else if (!re.test(String(clientEmail).toLowerCase()))
            return 'Invalid Email';
        else
            return '';
    }

    nextHandler = (evt) => {
        evt.preventDefault();

        let errorMessage = '';

        switch(this.state.step) {
            case 1 :
                errorMessage = this.validateName();
                break;
            case 3 :
                errorMessage = this.validateEmail();
                break;
        }

        if (errorMessage !== '') {
            console.error(errorMessage);
        } else {
            this.setState((prevState, props) => ({
                step: prevState.step + 1
            }));
        }
    }

    render() {

        const { shouldOpen } = this.props;
        const { clientName, clientEmail, step, submit, sent }  = this.state;

        const renderSubmitLabel = submit ? ( sent ? null : 'Sending...' ) : 'submit';

        return(
            <section className={`c-contact ${shouldOpen ? 'c-contact--isActive' : ''}`}>
                <div className="container">
                    <div className="c-contact__header">
                        Contact<span className="c-contact__period">.</span>
                    </div>
                    <div className="c-contact__container">
                        <div className="c-contact__info">
                            <div className="c-contact__assurance">Performance Guarenteed</div>
                            <ul className="c-contact__list">
                                <li>Mobile First Design</li>
                                <li>Modular CSS BEM</li>
                                <li>Minimized assets</li>
                                <li>Grid based layout</li>
                                <li>Linted Javascript</li>
                                <li>Search Engine Optimized</li>
                                <li>Broad Browser Support</li>
                                <li>Google Analytics Setup</li>
                            </ul>
                            <div className="c-contact__subtitle">Included in every project</div>

                        </div>
                        <div className="c-contact__guide">
                            <div className="c-contact__success">
                                <strong>Sent!</strong> I will usually respond in 24 hours.<br />While you're waiting... why not look thru my journals.
                            </div>
                            <form className="c-contact__form">
                                <div className="c-contact__formalities">Introductions</div>
                                <div className={`c-contact__step1 ${step === 1 ? 'c-contact--reveal' : '' }`}>
                                    <label className="c-contact__label" htmlFor="clientName">
                                        <div className="c-contact__prompt">Great! What's your name?</div>
                                        <input onChange={this.changeHandler} className="c-contact__inputText js-clientName" type="text" id="clientName" name="clientName" placeholder="name" autoComplete="off"/>
                                    </label>
                                    <div className={`c-contact__nameVerify ${clientName.length > 1 ? 'c-contact--reveal' : ''}`}>Is your name, <strong>{clientName}</strong>? <button onClick={this.nextHandler} className="c-contact__next">Yep!</button></div>
                                </div>
                                <div className={`c-contact__step2 ${step === 2 ? 'c-contact--reveal' : '' }`}>
                                    <div className="c-contact__prompt">Sweet! <br />
                                    { clientName }, what type of project are you interested in?</div>
                                    <div className="c-contact__projects">
                                        <button onClick={this.nextHandler} className="c-contact__project">
                                            Presonal Website
                                        </button>
                                        <button onClick={this.nextHandler} className="c-contact__project">
                                            Business / Company Website
                                        </button>
                                        <button onClick={this.nextHandler} className="c-contact__project">
                                            App Idea
                                        </button>
                                    </div>
                                </div>

                                <div className={`c-contact__step3 ${step === 3 ? 'c-contact--reveal' : '' }`}>
                                    <div className="c-contact__prompt">Awesome! Now, which email should the quote be sent to?</div>
                                    <label className="c-contact__label" htmlFor="clientEmail">
                                        <input onChange={this.changeHandler} className="c-contact__inputText js-clientEmail" type="email" id="clientEmail" name="clientEmail" placeholder="email" />
                                    </label>
                                    {clientEmail}
                                    <br />
                                    <button onClick={this.nextHandler} className="c-contact__submit">{renderSubmitLabel}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Contact;