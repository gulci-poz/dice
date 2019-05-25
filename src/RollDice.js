import React, {Component} from 'react';
import Die from "./Die";
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    state = {
        die1: 'one',
        die2: 'one'
    };

    roll = () => {
        this.setState({
            die1: this.getRandomFace(),
            die2: this.getRandomFace()
        })
    };

    getRandomFace() {
        return this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.die1}/>
                    <Die face={this.state.die2}/>
                </div>
                <button onClick={this.roll}>Roll Dice!</button>
            </div>
        );
    }
}

export default RollDice;
