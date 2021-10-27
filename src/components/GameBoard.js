import React, { Component } from 'react'
import Player from './Player'

export default class GameBoard extends Component {
    constructor() {
        super()
        this.state = {
            activePlayer: 1,
            player1Score: 100,
            player2Score: 100
        }
    }
    player1Shot = (power) => {
        let newScore = this.state.player2Score - power;
        if(newScore <= 0) {
            this.props.setWon(2)
        }
        this.setState({ player2Score: newScore })
        this.setState({ activePlayer: 2 })
    }
    player2Shot = (power) => {
        let newScore = this.state.player1Score - power;
        if(newScore <= 0) {
            this.props.setWon(1)
        }
        this.setState({ player1Score: newScore })
        this.setState({ activePlayer: 1 })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Player isActive={this.state.activePlayer === 1} id={1} shoot={this.player1Shot} score={this.state.player1Score} />
                    </div>
                    <div className="col-6">
                        <Player isActive={this.state.activePlayer === 2} id={2} shoot={this.player2Shot} score={this.state.player2Score} />
                    </div>
                </div>
            </div>
        )
    }
}
