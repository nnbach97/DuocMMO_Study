import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    const { isCheck, inputSearch } = this.props

    const handleChange = (e) => {
      this.props.handleChangeValue(e.target)
    }

    return (
      <div>
        <form>
          <hr />
          <input type='text' name='search' value={inputSearch} placeholder='Search' onChange={handleChange} />
          <br />
          <input type='checkbox' name='stocked' value={isCheck} onChange={handleChange} /> Only show products in stock
          <hr />
        </form>
      </div>
    )
  }
}

export default SearchBar
