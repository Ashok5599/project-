import React, { Component } from 'react'

export default class Schild extends Component {
  render() {
    return (
      <div className='card'>
          <img src={this.props.image} />
        <p>CHECK MARK Facilities bill payment
           for the catagories....<br/><b>{this.props.name}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-long-arrow-alt-right fa-2x"></i></p>
      </div>
    )
  }
}
