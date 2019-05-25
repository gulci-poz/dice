import React, {Component} from 'react';
import Die from "./Die";
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    state = {
        die1: 'one',
        die2: 'one',
        isRolling: false
    };

    roll = () => {
        this.setState({
            die1: this.getRandomFace(),
            die2: this.getRandomFace(),
            isRolling: true
        });

        setTimeout(() => {
            this.setState({isRolling: false});
        }, 1000);
    };

    getRandomFace() {
        return this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.die1} rolling={this.state.isRolling}/>
                    <Die face={this.state.die2} rolling={this.state.isRolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        );
    }
}

export default RollDice;
