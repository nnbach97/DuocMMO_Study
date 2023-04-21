import React, { Component } from 'react'

export class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        <td colSpan={2} align='left'>
          {this.props.category}
        </td>
      </tr>
    )
  }
}

export default ProductCategoryRow
