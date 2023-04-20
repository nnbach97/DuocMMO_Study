import React, { Component } from 'react'
import Temperature from './Temperature'
import Boiling from './Boiling'

export class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  handleChangeInput = (scale) => (value) => {
    this.setState({
      temperature: value
    })
  }

  convertTemperture = (temperature, scaleValue) => {
    if (!temperature) return ''

    let output = 0

    if (scaleValue === 'c') {
      output = temperature * 1.8 + 32
    } else {
      output = (temperature - 32) * 0.555
    }

    output = Math.round(output * 1000) / 1000

    return output
  }

  render() {
    const { temperature, scale } = this.state
    const Ctemperature = scale === 'f' ? this.convertTemperture(temperature, scale) : temperature
    const Ftemperature = scale === 'c' ? this.convertTemperture(temperature, scale) : temperature
    return (
      <div>
        <h1>Calculator</h1>
        <Temperature title='Celsius' temperature={Ctemperature} handleChangeInput={this.handleChangeInput('c')} />
        <Temperature title='Fahrenheit' temperature={Ftemperature} handleChangeInput={this.handleChangeInput('f')} />
        <Boiling temperture={Ctemperature} />
      </div>
    )
  }
}

export default Calculator
