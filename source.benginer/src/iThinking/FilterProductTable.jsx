import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const productListMock = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
]

const fetchApi = new Promise((res, rej) => {
  res(productListMock)
  rej('Lỗi API')
})

export class FilterProductTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: [],
      inputSearch: '',
      isCheck: false
    }
  }

  componentDidMount() {
    fetchApi
      .then((res) => {
        this.setState({
          productList: res
        })
      })
      .catch((err) => console.log(err))
  }

  handleChangeValue = (target) => {
    if (target.name === 'search') {
      this.setState({
        inputSearch: target.value
      })
    } else {
      this.setState({
        isCheck: target.checked
      })
    }
  }

  render() {
    const { isCheck, inputSearch, productList } = this.state
    return (
      <>
        <SearchBar isCheck={isCheck} inputSearch={inputSearch} handleChangeValue={this.handleChangeValue} />
        <ProductTable isCheck={isCheck} inputSearch={inputSearch} productDbList={productList} />
      </>
    )
  }
}

export default FilterProductTable
