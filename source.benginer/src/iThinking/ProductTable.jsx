import React, { Component, Fragment } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
  render() {
    const { isCheck, inputSearch, productDbList } = this.props
    let lastCategory = ''
    let renderRow = []

    productDbList.forEach((element) => {
      if (isCheck && !element.stocked) {
        return
      }

      if (element.name.toLowerCase().indexOf(inputSearch.toLowerCase()) === -1) return

      if (element.category !== lastCategory) {
        renderRow.push(<ProductCategoryRow key={element.category} category={element.category} />)
      }
      renderRow.push(<ProductRow key={element.name} products={element} />)
      lastCategory = element.category
    })

    return (
      <table border='1' width='300px'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{renderRow}</tbody>
      </table>
    )
  }
}

export default ProductTable
