import React, { Component } from 'react'
import GameBoard from './GameBoard';

export default class GameOverview extends Component {
    constructor() {
        super()
        this.state = {
            player1win: 0,
            player2win: 0,
            showGame: false
        }
    }
    setWon = (player) => {
        if (player === 1) {
            this.setState({ player1win: this.state.player1win + 1 })
        } else if (player === 2) {
            this.setState({ player2win: this.state.player2win + 1 })
        }
        this.setState({showGame: false})
    }
    startGame = () => {
        this.setState({ showGame: true });
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary" disabled={this.state.showGame} onClick={this.startGame}>Start Game</button>
                <h4>Player 1-Won: {this.state.player1win}</h4>
                <h4>Player 2-Won: {this.state.player2win}</h4>
                {this.state.showGame &&
                    <GameBoard setWon={this.setWon} />
                }
                {this.state.player1win >=3 &&
                    <label>Player 1 won the match!</label>
                }
                {this.state.player2win >=3 &&
                    <label>Player 2 won the match!</label>
                }
            </div>
        )
    }
}
