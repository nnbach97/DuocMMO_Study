import logo from './logo.svg'
import './App.css'
import FilterProductTable from './iThinking/FilterProductTable'
// import BareInput from './BareInput'
// import Form from './Form/Form'
// import Calculator from './Calculator/Calculator'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <BareInput type='text' /> */}
        {/* <Form /> */}
        {/* <Calculator /> */}
        <FilterProductTable />
      </header>
    </div>
  )
}

export default App
