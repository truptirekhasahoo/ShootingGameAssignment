import react from 'react'
import React, { Component } from 'react'

class Player extends Component {
  constructor(props) {
    super(props)
  }
  shoot = () => {
    let power = Math.floor(Math.random() * 5 + 1)
    this.props.shoot(power)
  }
  render() {
    return (
      <div class="row">
        <div class="col-6 col-sm-4">Player {this.props.id}</div>
        <div class="row">Score: {this.props.score}</div>
        <div class="row">
          <button onClick={this.shoot} disabled={!this.props.isActive}>Fire</button>
        </div>
      </div>
    )
  }
}

export default Player;