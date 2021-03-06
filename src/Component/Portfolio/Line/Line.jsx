import React, { Component } from 'react';

const style = {
    backgroundColor: '#e94155',
    transition: 'all ease .2s',
    transform: 'translate(0%)',
    opacity: .25
}

class Line extends Component {

    state = {
        streak : [],
        counter : 0,
        previousTop : -1,
        spreadCount : 40
    }

    normalizedTopSpread = (val) => {
        const diff = Math.abs(val - this.state.previousTop);
        if (diff < 25) {
            console.log('normal');
            this.setState({previousTop : val});
            return val;
        }
        else {
            if (val > this.state.previousTop){
                this.setState({previousTop : this.state.previousTop + 25});
                return this.state.previousTop + 25;
            }
            else{
                this.setState({previousTop : this.state.previousTop - 25});
                return this.state.previousTop - 25;
            }
        }
    }

    addLines = () => {
        
        var i = setInterval(() => {

            const rando = Math.floor(Math.random() * (80)) + 10;
            //const top = this.normalizedTopSpread(Math.floor(Math.random() * (10 * this.state.counter))-75);
            const top = (7 * this.state.counter);

            const animateStyle = Object.assign({}, style, 
                {top: `${top}px`, 
                opacity: Math.random(),
                transform: `translate(${rando}%)`})

            const newStreak = this.state.streak;
            newStreak[this.state.counter]=animateStyle;

            this.setState({streak : newStreak });

            this.setState({counter : this.state.counter + 1})

            console.log(this.state.streak);

            if(this.state.counter === this.state.spreadCount) {
                clearInterval(i);
            }
        }, 50);
    }

    componentDidMount() {
        this.addLines();

        const initStreak = [...Array(this.state.spreadCount)].map((val, idx) => {
            return style
        });

        this.setState({ streak : initStreak });
    }

    render() {

        return (
            <div className="o-line">
                {
                    this.state.streak.map((e, i) => {
                        return <div key={i} style={e} className={`o-line__line`}></div>
                    })
                }
            </div>
        )
    }

}

export default Line;
