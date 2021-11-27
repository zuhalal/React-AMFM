import React, { Component } from 'react'

export default class Anak extends Component {
  render() {
    return (
      <>
      <div>
          <button onClick={this.props.decrement}>
            Click me To -
          </button>
        </div>
      <div>
        {this.props.amfm}
      </div>
      </>
    )
  }
}
