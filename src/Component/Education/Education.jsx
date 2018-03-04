import React, { Component } from 'react';
import './education.css';

class Education extends Component {
    render() {
        return (
            <section className="c-education u-baseSpacing">
                <div className="container">
                    <div className="c-education__techstack">
                        {
                            [...Array(8)].map((e, i) => <span key={i} className={`c-education__techline c-education__techline${i}`}></span>)
                        }
                        
                        Tech Stack
                    </div>

                    <div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JS</div>
                    </div>
                </div>
                { /*
                <div className="container">
                    <div className="c-education__schools">
                        <div className="c-education__school">
                            <div className="c-education__name">CSUN</div>
                            <div className="c-education__year">2009</div>
                            <div className="c-education__profession">Computer Science B.S.</div>
                        </div>
                        <div className="c-education__school">
                            <div className="c-education__name">UCLA</div>
                            <div className="c-education__year">2014</div>
                            <div className="c-education__profession">Computer Science M.S.</div>
                              (Emphasis on Mobile Technologies)
                        </div>
                    </div>
                </div> */ }
            </section>
        )
    }
}

export default Education;