import React, { Component } from 'react'

export class Temperature extends Component {
  onChangeInput = (e) => {
    this.props.handleChangeInput(e.target.value)
  }

  render() {
    const { title, temperature } = this.props

    return (
      <div>
        <fieldset>
          <legend>Enter value in {title}</legend>
          <input type='number' name={title} value={temperature} onChange={this.onChangeInput} />
        </fieldset>
      </div>
    )
  }
}

export default Temperature
