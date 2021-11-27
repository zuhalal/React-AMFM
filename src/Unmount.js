import React, { Component } from 'react'

export default class Unmount extends Component {

  componentDidMount() {
    console.log("COMPONENT MOUNT KEBUKA")
  }

  componentWillUnmount() {
    console.log("COMPONENT MOUNT DITUTUP")
  }
  
  render() {
    let {zuhal} = this.props;

    return (
      <div>
        ini bakal di unmount
        <div>
          <h2>Ini yang dioper</h2>
          <div>
            {zuhal.id}
            {zuhal.title}
          </div>
        </div>
      </div>
    )
  }
}
