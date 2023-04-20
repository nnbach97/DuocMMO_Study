import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inpt: '',
      msg: '',
      yes: true,
      opt: '',
      gender: 'Nam'
    }
  }

  onChangeHandle = (e) => {
    const { target } = e
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target
    this.setState({
      [name]: value
    })
  }

  onClickSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div>Form</div>
        <form onSubmit={this.onClickSubmit}>
          <input type='text' name='inpt' onChange={this.onChangeHandle} value={this.state.input} />
          <br />
          <input
            type='checkbox'
            name='yes'
            checked={this.state.yes}
            onChange={this.onChangeHandle}
            value={this.state.yes}
          />
          <br />
          <input type='radio' name='gender' value='Nam' defaultChecked onChange={this.onChangeHandle} /> Nam
          <input type='radio' name='gender' value='Nữ' onChange={this.onChangeHandle} /> Nữ
          <br />
          <select name='opt' onChange={this.onChangeHandle} defaultValue='XYZ'>
            <option value='ABC'>ABC</option>
            <option value='XYZ'>XYZ</option>
            <option value='EFH'>EFH</option>
          </select>
          <br />
          <textarea name='msg' onChange={this.onChangeHandle}></textarea>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
