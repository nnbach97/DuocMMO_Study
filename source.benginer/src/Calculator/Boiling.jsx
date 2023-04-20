import React, { Component } from 'react'

export class Boiling extends Component {
  render() {
    const { temperture } = this.props
    return <div>The water would {temperture >= 100 ? '' : 'no'} boild</div>
  }
}

export default Boiling
