import React, { Component } from 'react'

class Banner extends Component {
  render () {
    return (
      <img src={`./static/img/${this.props.img}`} className="img-responsive" />
    )
  }
}

export default Banner