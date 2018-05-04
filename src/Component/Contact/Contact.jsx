import React, { Component } from 'react';
import Loader from '../Loader/Loader';

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

    submitHandler = (evt) => {

        const errorMessage = this.validateEmail();

        if (errorMessage !== '')
            return errorMessage;

        const url = `${process.env.PUBLIC_URL}/php/email.php`;
        const { clientEmail, clientName, typeOfProject } = this.state;
        this.setState({busy : true});

        evt.preventDefault();

        let data = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type : 'inquiry',
                clientName : clientName,
                clientEmail : clientEmail,
                typeOfProject : typeOfProject
            })
        }

        fetch(url, data)
        .then((responseJson) => {
            return responseJson.json();
        })
        .then((text) => {
            switch(text) {
                case 1:
                    this.setState({sent : true, busy: false});
                    break;
                default:
                    break;
            }
        })
        .catch((error) => {
            this.setState({sent : false, busy: false});
            console.log(error);
        });
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
            default:
        }

    }

    validateName = () => {
        const { clientName } = this.state;
        // name test
        // const rx = new RegExp("[a-zA-Z]");
        var reg = new RegExp(/[~`!#$%^&*+=[\]\\';,/{}|\\":<>?]/);
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
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
            case 2 :
                this.setState({typeOfProject : evt.target.getAttribute('data-id')});
                break;
            default:
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
        const { clientName, step, submit, sent, busy }  = this.state;

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
                                <li>Mobile-First Development</li>
                                <li>Modular CSS BEM</li>
                                <li>Minimized Assets</li>
                                <li>Grid-Based Layout</li>
                                <li>Linted Javascript</li>
                                <li>SEO Ready Design</li>
                                <li>Broad Browser Support</li>
                                <li>Google Analytics Setup</li>
                            </ul>
                            <div className="c-contact__subtitle">Included in every project</div>

                        </div>
                        <div className="c-contact__guide">
                            <div className={`c-contact__success ${sent ? 'c-contact--reveal' : ''}`}>
                                <strong>Sent!</strong> I will usually respond in 24 hours.
                            </div>
                            <form className={`c-contact__form ${sent ? '' : 'c-contact--reveal'}`}>
                                <div className="c-contact__formalities">Introductions</div>
                                <div className={`c-contact__step1 ${step === 1 ? 'c-contact--reveal' : '' }`}>
                                    <label className="c-contact__label" htmlFor="clientName">
                                        <div className="c-contact__prompt">Great! What's your name?</div>
                                        <input onChange={this.changeHandler} className="c-contact__inputText js-clientName" type="text" id="clientName" name="clientName" placeholder="Name" autoComplete="off"/>
                                    </label>
                                    <div className={`c-contact__nameVerify ${clientName.length > 1 ? 'c-contact--reveal' : ''}`}>Is your name, <strong>{clientName}</strong>? <button onClick={this.nextHandler} className="c-contact__next">Yep!</button></div>
                                </div>
                                <div className={`c-contact__step2 ${step === 2 ? 'c-contact--reveal' : '' }`}>
                                    <div className="c-contact__prompt">Sweet! <br />
                                    { clientName }, what type of project are you interested in?</div>
                                    <div className="c-contact__projects">
                                        <button onClick={this.nextHandler} className="c-contact__project" data-id="1">
                                            Personal Website
                                        </button>
                                        <button onClick={this.nextHandler} className="c-contact__project" data-id="2">
                                            Business / Company Website
                                        </button>
                                        <button onClick={this.nextHandler} className="c-contact__project" data-id="3">
                                            WebApp Idea
                                        </button>
                                        <button onClick={this.nextHandler} className="c-contact__project" data-id="4">
                                            Actually, I'm referring a friend...
                                        </button>
                                    </div>
                                </div>

                                <div className={`c-contact__step3 ${step === 3 ? 'c-contact--reveal' : '' }`}>
                                    <div className="c-contact__prompt">Awesome! What's the best email to reach you?</div>
                                    <label className="c-contact__label" htmlFor="clientEmail">
                                        <input onChange={this.changeHandler} className="c-contact__inputText js-clientEmail" type="email" id="clientEmail" name="clientEmail" placeholder="email" />
                                    </label>
                                    <div className={`c-contact__step4 ${busy ? 'c-contact--reveal' : '' }`}>
                                        <Loader />
                                    </div>
                                    <button onClick={this.submitHandler} className="c-contact__submit">{renderSubmitLabel}</button>
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
