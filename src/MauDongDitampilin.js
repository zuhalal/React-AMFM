import React, { Component } from 'react'

export default class MauDongDitampilin extends Component {
  componentWillUnmount(){
    this.props.ubahMakanan("Nasi Uduk")
  }
  render() {
    return (
      <div>
        Tampil Yey
      </div>
    )
  }
}
